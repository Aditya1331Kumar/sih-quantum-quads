import random
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from qiskit import QuantumCircuit, QuantumRegister, ClassicalRegister
from qiskit_aer import AerSimulator

app = FastAPI()

# 🛡️ Permissive CORS Policy so your Vercel/Localhost React app can connect cleanly
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ---------------------------------------------------------------
# CONSTANTS & CHARACTER MAPPINGS VERBATIM FROM YOUR 256BIT.PY
# ---------------------------------------------------------------
EPSILON = 0.08
SHOTS = 300

CHARMAP = {
    'A': '000000', 'B': '000001', 'C': '000010', 'D': '000011', 'E': '000100',
    'F': '000101', 'G': '000110', 'H': '000111', 'I': '001000', 'J': '001001',
    'K': '001010', 'L': '001011', 'M': '001100', 'N': '001101', 'O': '001110',
    'P': '001111', 'Q': '010000', 'R': '010001', 'S': '010010', 'T': '010011',
    'U': '010100', 'V': '010101', 'W': '010110', 'X': '010111', 'Y': '011000',
    'Z': '011001',
    'a': '011010', 'b': '011011', 'c': '011100', 'd': '011101', 'e': '011110',
    'f': '011111', 'g': '100000', 'h': '100001', 'i': '100010', 'j': '100011',
    'k': '100100', 'l': '100101', 'm': '100110', 'n': '100111', 'o': '101000',
    'p': '101001', 'q': '101010', 'r': '101011', 's': '101100', 't': '101101',
    'u': '101110', 'v': '101111', 'w': '110000', 'x': '110001', 'y': '110010',
    'z': '110011',
    '0': '110100', '1': '110101', '2': '110110', '3': '110111', '4': '111000',
    '5': '111001', '6': '111010', '7': '111011', '8': '111100', '9': '111101',
    ' ': '111110', '.': '111111',
}
REVMAP = {v: k for k, v in CHARMAP.items()}
_last_bit_cache = {"value": None}

class SimulationRequest(BaseModel):
    message_str: str      # Text typed by user
    basis_str: str        # Custom matching XZ string typed by user
    adversary_mode: str   # none, impersonation, intercept_resend, replay, circuit_tamper

def build_circuit(basis, data_bit, adversary_mode=None):
    q = QuantumRegister(3, 'q')
    c0 = ClassicalRegister(1, 'c0')
    c1 = ClassicalRegister(1, 'c1')
    c2 = ClassicalRegister(1, 'c2')
    qc = QuantumCircuit(q, c0, c1, c2)

    qc.h(1)
    qc.cx(1, 2)

    if adversary_mode == "impersonation":
        qc.reset(2)
        qc.h(2)

    if data_bit == "1":
        qc.x(0)
    if basis == "X":
        qc.h(0)

    qc.barrier()

    if adversary_mode == "intercept_resend":
        qc.reset(0)
        if random.random() < 0.5: qc.x(0)
        if random.random() < 0.5: qc.h(0)

    qc.cx(0, 1)
    qc.h(0)
    qc.measure(0, c0)
    qc.measure(1, c1)

    qc.barrier()

    if adversary_mode == "circuit_tamper":
        qc.reset(2)
        qc.h(2)

    with qc.if_test((c0, 1)): qc.z(2)
    with qc.if_test((c1, 1)): qc.x(2)

    if basis == "X": qc.h(2)
    qc.measure(2, c2)

    return qc

def run_bit(basis, true_bit, adversary_mode=None):
    encode_bit = true_bit
    if adversary_mode == "replay" and _last_bit_cache["value"] is not None:
        encode_bit = _last_bit_cache["value"]

    qc = build_circuit(basis, encode_bit, adversary_mode)
    sim = AerSimulator()
    result = sim.run(qc, shots=SHOTS).result()
    counts = result.get_counts()

    mismatches, total = 0, 0
    for outcome, n in counts.items():
        b1_val, a1_val, d1_val = outcome.split()
        if b1_val != true_bit:
            mismatches += n
        total += n

    _last_bit_cache["value"] = true_bit
    return mismatches / total

@app.post("/simulate")
def execute_message_simulation(req: SimulationRequest):
    data_str = req.message_str
    adv_mode = req.adversary_mode if req.adversary_mode != "none" else None
    
    # 1. Turn message text into binary
    binary_data = "".join(CHARMAP.get(ch, '111111') for ch in data_str)
    n_bits = len(binary_data)
    
    # Pad or slice user basis input string to prevent script array crashes
    basis_input = req.basis_str.upper().replace(" ", "")
    if len(basis_input) < n_bits:
        basis_input = (basis_input + "Z" * n_bits)[:n_bits]
    elif len(basis_input) > n_bits:
        basis_input = basis_input[:n_bits]
        
    flagged = []
    rates = []
    human_readable_logs = []
    
    # 2. Run simulation loop bit-by-bit
    for i in range(n_bits):
        rate = run_bit(basis_input[i], binary_data[i], adv_mode)
        rates.append(rate)
        
        is_error = rate > EPSILON
        flagged.append("X" if is_error else binary_data[i])
        
        # Build simple, non-AI console log lines
        char_index = i // 6
        associated_letter = data_str[char_index] if char_index < len(data_str) else "?"
        log_label = f"Qubit-{i+1} (Letter: '{associated_letter}', Bit: {binary_data[i]})"
        
        if is_error:
            human_readable_logs.append(f"[🛑 ALERT] Interference on {log_label} -> Error: {int(rate*100)}% (Hacker detected)")
        else:
            human_readable_logs.append(f"[🟢 OK] Secure transfer on {log_label} -> Error: {int(rate*100)}% (Passed)")

    flagged_str = "".join(flagged)
    avg_rate = sum(rates) / len(rates) if rates else 0.0
    verdict = "REJECTED" if avg_rate > EPSILON else "ACCEPTED"
    
    # 3. Build the exact output string format from 256bit.py
    chunks = [flagged_str[k:k + 6] for k in range(0, len(flagged_str), 6)]
    parts = []
    for idx, chunk in enumerate(chunks):
        orig_char = data_str[idx] if idx < len(data_str) else "?"
        char_disp = "?" if "X" in chunk else orig_char
        parts.append(f"{char_disp} {chunk}")
    output_string_layout = "  ".join(parts)

    return {
        "mismatch_rate": float(avg_rate),
        "verdict": verdict,
        "binary_sent": binary_data,
        "basis_string": basis_input,
        "flagged_binary": flagged_str,
        "decoded_output": output_string_layout,
        "console_logs": human_readable_logs
    }
