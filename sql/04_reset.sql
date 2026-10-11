TRUNCATE TABLE invoices;

INSERT INTO invoices (invoice_id, vendor, amount, status, approval)
VALUES
    ('INV-101', 'ABC Ltd', 85000.00, 'PENDING', 'MANAGER_REVIEW'),
    ('INV-102', 'XYZ Corp', 142500.00, 'PENDING', 'FINANCE_REVIEW'),
    ('INV-103', 'Nova Inc', 15000.00, 'PENDING', 'STANDARD');