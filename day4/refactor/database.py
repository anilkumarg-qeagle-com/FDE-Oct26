import psycopg
import os
from dotenv import load_dotenv
from psycopg.rows import dict_row

load_dotenv()

DATABASE_URL = os.getenv("DATABASE_URL")

if not DATABASE_URL:
    raise ValueError("DATABASE_URL environment variable is not set.")

def get_connection():
    """Get a new database connection."""
    return psycopg.connect(DATABASE_URL, row_factory=dict_row)