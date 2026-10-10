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

sorted_invoices = sorted(invoices, key=lambda invoice: invoice["amount"], reverse=True)
print(sorted_invoices[0]["amount"])  # Output: 45000.0