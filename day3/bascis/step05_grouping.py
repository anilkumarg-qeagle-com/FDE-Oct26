invoices =[
    {
        "invoice_id": "INV-101",
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
            "invoice_id": "INV-103",
            "vendor": "ABC Ltd.",
            "amount": 2500.0,
            "status": "Paid"
        }
]

vendor_totals = {}
for invoice in invoices:
    vendor = invoice["vendor"]
    amount = invoice["amount"]
    vendor_totals[vendor] = vendor_totals.get(vendor, 0) + amount

print(vendor_totals)  # Output: {'ABC Ltd.': 4000.0, 'Test Limited': 45000.0}