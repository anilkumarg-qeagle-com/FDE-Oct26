invoices =[
    {
        "invoice_id": "INV-001",
        "vendor": "ABC Ltd.",
        "amount": 1500.0,
        "status": "Paid"
    },
    {
        "invoice_id": "INV_102",
        "vendor": "Test Limited",
        "amount": 45000.0,
        "status": "Pending"
    },
    {
            "invoice_id": "INV-001",
            "vendor": "ABC Ltd.",
            "amount": 1500.0,
            "status": "Paid"
        }
]

# Part B - use the index to update the item in the list
for index, invoice in enumerate(invoices):
    if invoice["invoice_id"] == "INV-102":
        invoices[index]["amount"] = 150000
print(invoices)
    