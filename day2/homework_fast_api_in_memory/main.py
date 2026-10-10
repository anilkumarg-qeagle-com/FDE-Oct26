import json 

from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
DATA_FILE = "data/invoices.json"
app = FastAPI()

class Invoice(BaseModel):
    invoice_id: str
    vendor: str
    amount: float
    status: str

with open(DATA_FILE, "r") as f:
    invoices = json.load(f)

@app.get("/invoices")
def get_invoices():
    return invoices

@app.post("/invoices")
def create_invoice(invoice: Invoice):
    for existing_invoice in invoices:
        if existing_invoice["invoice_id"] == invoice.invoice_id:
            raise HTTPException(status_code=400, detail="Invoice ID already exists")
    invoices.append(invoice.dict())
    with open(DATA_FILE, "w") as f:
        json.dump(invoices, f, indent=4)
    return invoice