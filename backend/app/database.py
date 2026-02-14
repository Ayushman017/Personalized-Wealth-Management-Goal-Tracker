from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base

# database connection

DATABASE_URL = "postgresql://postgres:abd0017@localhost:5432/wealth_manager_db"

engine = create_engine(DATABASE_URL)

SessionLocal = sessionmaker(bind=engine)

Base = declarative_base()

# database session to api

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
