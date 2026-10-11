CREATE USER fde_user WITH PASSWORD 'YOUR_LOCAL_PASSWORD';

-- The owner of a database can create tables in its public schema.
CREATE DATABASE fde_db OWNER fde_user;