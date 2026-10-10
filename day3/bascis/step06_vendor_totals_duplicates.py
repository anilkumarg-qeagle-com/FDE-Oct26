import json

DATA_FILE = "data/invoices.json"

with open(DATA_FILE) as f:
    invoices = json.load(f)

# Exercise 1 - total amount by vendor
vendor_totals = {}
for invoice in invoices:
    vendor = invoice["vendor"]
    amount = invoice["amount"]
    vendor_totals[vendor] = vendor_totals.get(vendor, 0) + amount

print(vendor_totals)  # Output: {'ABC Ltd.': 5500.0, 'Test Limited': 45000.0}

# Exercise 2 - filter out duplicate invoices and print the duplicates alone
seen = []
duplicates = []
for invoice in invoices:
    if invoice in seen:
        duplicates.append(invoice)
    else:
        seen.append(invoice)

print(duplicates)  # Output: [{'invoice_id': 'INV-101', 'vendor': 'ABC Ltd.', 'amount': 1500.0, 'status': 'Paid'}]
