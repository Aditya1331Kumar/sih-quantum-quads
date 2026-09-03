import random
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from qiskit import QuantumCircuit, QuantumRegister, ClassicalRegister
from qiskit_aer import AerSimulator

app = FastAPI()

# 🛡️ CORS POLICY CONFIGURATION: Permits safe network communication with your React port (5173)
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

# ---------------------------------------------------------------
# DTO PAYLOAD CLASS STRUCTURE (Aligned perfectly with React state variables)
# ---------------------------------------------------------------
class SimulationRequest(BaseModel):
    basis: str            # Auto-scaled basis marker character
    message_str: str      # Full alphanumeric text array sent from Alice's input
    adversary_mode: str   # Active choice: 'none', 'impersonation', etc.

# ---------------------------------------------------------------
# CORE SIMULATOR CIRCUITS PRESERVED FROM 256BIT.PY
# ---------------------------------------------------------------
def build_circuit(basis, data_bit, adversary_mode=None):
    q = QuantumRegister(3, 'q')      # q0=D1, q1=A1, q2=B1
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
        if random.random() < 0.5:
            qc.x(0)
        if random.random() < 0.5:
            qc.h(0)

    qc.cx(0, 1)
    qc.h(0)
    qc.measure(0, c0)
    qc.measure(1, c1)

    qc.barrier()

    if adversary_mode == "circuit_tamper":
        qc.reset(2)
        qc.h(2)

    with qc.if_test((c0, 1)):
        qc.z(2)
    with qc.if_test((c1, 1)):
        qc.x(2)

    if basis == "X":
        qc.h(2)
    qc.measure(2, c2)

    return qc

def verifier_check(decoded_bit, claimed_bit):
    return decoded_bit == claimed_bit

def run_bit(basis, true_bit, adversary_mode=None, shots=SHOTS):
    encode_bit = true_bit
    if adversary_mode == "replay" and _last_bit_cache["value"] is not None:
        encode_bit = _last_bit_cache["value"]

    qc = build_circuit(basis, encode_bit, adversary_mode)
    sim = AerSimulator()
    result = sim.run(qc, shots=shots).result()
    counts = result.get_counts()

    mismatches, total = 0, 0
    for outcome, n in counts.items():
        b1_val, a1_val, d1_val = outcome.split()
        match = verifier_check(b1_val, true_bit)
        if not match:
            mismatches += n
        total += n

    _last_bit_cache["value"] = true_bit  
    return mismatches / total

def encode_message(msg):
    return "".join(CHARMAP.get(ch, '111111') for ch in msg)

def build_output_string(flagged_str):
    chunks = [flagged_str[i:i + 6] for i in range(0, len(flagged_str), 6)]
    parts = []
    for chunk in chunks:
        char_disp = "[TAMPERED]" if "X" in chunk else REVMAP.get(chunk, "?")
        parts.append(char_disp)
    return "".join(parts)

# ---------------------------------------------------------------
# FASTAPI TELEMETRY ROUTE INTERFACE
# ---------------------------------------------------------------
@app.post("/simulate")
def execute_message_simulation(req: SimulationRequest):
    # 1. Capture payload strings
    data_str = req.message_str
    adv_mode = req.adversary_mode if req.adversary_mode != "none" else None
    
    # 2. Parse text to binary array matrix strings
    binary_data = encode_message(data_str)
    n_bits = len(binary_data)
    
    # Generate multi-qubit basis lengths scaling to text size
    basis_str = req.basis.upper()
    if len(basis_str) < n_bits:
        basis_str = (basis_str * n_bits)[:n_bits]
        
    flagged = []
    rates = []
    
    # 3. Step every generated qubit through the execution loops
    for i in range(n_bits):
        rate = run_bit(basis_str[i], binary_data[i], adv_mode, SHOTS)
        rates.append(rate)
        flagged.append("X" if rate > EPSILON else binary_data[i])
        
    flagged_str = "".join(flagged)
    avg_rate = sum(rates) / len(rates) if rates else 0.0
    verdict = "REJECTED - FORGERY DETECTED" if avg_rate > EPSILON else "ACCEPTED"
    output_string = build_output_string(flagged_str)
    
    # 4. Stream response metrics package straight to the browser
    return {
        "mismatch_rate": float(avg_rate),
        "verdict": verdict,
        "binary_sent": binary_data,
        "basis_string": basis_str,
        "flagged_binary": flagged_str,
        "decoded_output": output_string
    }
