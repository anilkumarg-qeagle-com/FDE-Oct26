invoice ={
        "invoice_id": 1,
        "amount": 1200, 
        "status": "Pending"
    }

#print(invoice["vendor"])
print(invoice.get("vendor","UNKNOWN"))  # Output: "Vendor information not available"