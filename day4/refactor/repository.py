from database import get_connection





def find_invoice_by_id(invoice_id):
    with get_connection() as conn:
        with conn.cursor() as cur:
            cur.execute("SELECT * FROM invoices WHERE invoice_id = %s", (invoice_id,))
            invoice = cur.fetchone()
            return invoice

def add_invoice(invoice):
    with get_connection() as conn:
        with conn.cursor() as cur:
            cur.execute("INSERT INTO invoices (invoice_id, vendor, amount, status, approval) VALUES (%s, %s, %s, %s, %s)",
                        (invoice["invoice_id"], invoice["vendor"], invoice["amount"], invoice["status"], invoice["approval"]))
            conn.commit()

def update_invoice(invoice_id, updated_invoice):    
    with get_connection() as conn:
        with conn.cursor() as cur:
            cur.execute("UPDATE invoices SET vendor=%s, amount=%s, status=%s, approval=%s WHERE invoice_id=%s",
                        (updated_invoice["vendor"], updated_invoice["amount"], updated_invoice["status"], updated_invoice["approval"], invoice_id))
            conn.commit()
            return cur.rowcount > 0

def delete_invoice(invoice_id):
    with get_connection() as conn:
        with conn.cursor() as cur:
            cur.execute("DELETE FROM invoices WHERE invoice_id = %s", (invoice_id,))
            conn.commit()
            return cur.rowcount > 0

    