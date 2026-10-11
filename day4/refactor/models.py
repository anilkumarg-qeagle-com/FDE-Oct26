from pydantic import BaseModel

class Invoice(BaseModel):
    invoice_id: str
    amount: float
    status: str 
    vendor: str = "UNKNOWN"  # Default value for vendor if not provided
    approval: str = "MANAGER_REVIEW"  # Default value for approval if not provided
    