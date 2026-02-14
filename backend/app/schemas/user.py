from pydantic import BaseModel, EmailStr

# user registration
class UserCreate(BaseModel):
    name: str
    email: EmailStr
    password: str
    risk_profile:str


# user login
class UserLogin(BaseModel):
    email: EmailStr
    password: str

