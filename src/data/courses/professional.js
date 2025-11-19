export const professional = {
    topics: [
      {
        id: 'design-patterns',
        title: 'Design Patterns',
        description: 'Common solutions to recurring problems',
        content: {
          overview: 'Design patterns are proven solutions to common software design problems. They represent best practices evolved over time and provide a shared vocabulary for developers. Understanding design patterns improves code quality and communication.',
          keyPoints: [
            'Patterns provide tested solutions to common problems',
            'They improve code readability and maintainability',
            'Patterns facilitate communication between developers',
            'Three main categories: Creational, Structural, Behavioral',
            'Don\'t force patterns - use when appropriate'
          ],
          useCases: [
            {
              title: 'Singleton Pattern',
              description: 'Ensure only one instance exists',
              example: 'Database connection manager, configuration handler'
            },
            {
              title: 'Factory Pattern',
              description: 'Create objects without specifying exact class',
              example: 'Document creator (PDF, Word, etc.)'
            },
            {
              title: 'Observer Pattern',
              description: 'Notify multiple objects of state changes',
              example: 'Event systems, data binding, MVC frameworks'
            },
            {
              title: 'Strategy Pattern',
              description: 'Switch algorithms at runtime',
              example: 'Payment methods, sorting algorithms, compression'
            }
          ],
          dos: [
            'Understand the problem before applying a pattern',
            'Use patterns to solve real problems, not for their own sake',
            'Adapt patterns to fit your specific needs',
            'Document which patterns you\'re using',
            'Learn the intent and applicability of each pattern'
          ],
          donts: [
            'Don\'t overcomplicate simple problems with patterns',
            'Don\'t force a pattern where it doesn\'t fit',
            'Don\'t use patterns just to show off knowledge',
            'Don\'t ignore simpler solutions',
            'Don\'t create rigid, inflexible implementations'
          ],
          bestPractices: [
            'Start simple, add patterns as needed',
            'Understand trade-offs of each pattern',
            'Combine patterns when appropriate',
            'Keep implementations clean and understandable',
            'Consider Python\'s unique features (decorators, etc.)'
          ],
          codeExamples: [
            {
              title: 'Singleton Pattern',
              code: `# Ensure only one instance of a class exists
class DatabaseConnection:
    _instance = None
    
    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
            cls._instance.connected = False
        return cls._instance
    
    def connect(self):
        if not self.connected:
            print("Connecting to database...")
            self.connected = True
    
    def query(self, sql):
        if self.connected:
            return f"Executing: {sql}"
        return "Not connected"

# Usage
db1 = DatabaseConnection()
db2 = DatabaseConnection()

print(db1 is db2)  # True - same instance!
db1.connect()
print(db2.connected)  # True - shared state

# Alternative using decorator
def singleton(cls):
    instances = {}
    def get_instance(*args, **kwargs):
        if cls not in instances:
            instances[cls] = cls(*args, **kwargs)
        return instances[cls]
    return get_instance

@singleton
class Config:
    def __init__(self):
        self.settings = {}`,
              explanation: 'Singleton ensures only one instance exists. Useful for resources that should be shared (database connections, configs).'
            },
            {
              title: 'Factory Pattern',
              code: `# Factory creates objects based on conditions
from abc import ABC, abstractmethod

class Document(ABC):
    @abstractmethod
    def create(self):
        pass

class PDFDocument(Document):
    def create(self):
        return "Creating PDF document"

class WordDocument(Document):
    def create(self):
        return "Creating Word document"

class ExcelDocument(Document):
    def create(self):
        return "Creating Excel document"

# Factory class
class DocumentFactory:
    @staticmethod
    def create_document(doc_type):
        if doc_type == "pdf":
            return PDFDocument()
        elif doc_type == "word":
            return WordDocument()
        elif doc_type == "excel":
            return ExcelDocument()
        else:
            raise ValueError(f"Unknown document type: {doc_type}")

# Usage
factory = DocumentFactory()
doc1 = factory.create_document("pdf")
doc2 = factory.create_document("word")

print(doc1.create())  # Creating PDF document
print(doc2.create())  # Creating Word document

# More Pythonic approach using dictionary
class DocumentFactory2:
    _creators = {
        "pdf": PDFDocument,
        "word": WordDocument,
        "excel": ExcelDocument
    }
    
    @classmethod
    def create_document(cls, doc_type):
        creator = cls._creators.get(doc_type)
        if not creator:
            raise ValueError(f"Unknown type: {doc_type}")
        return creator()`,
              explanation: 'Factory pattern centralizes object creation logic, making code more flexible and easier to extend with new types.'
            }
          ]
        },
        quiz: [
          {
            question: 'What is the main purpose of the Singleton pattern?',
            options: ['Create multiple instances', 'Ensure only one instance exists', 'Delete instances', 'Copy instances'],
            correctAnswer: 1,
            explanation: 'Singleton ensures a class has only one instance and provides global access to it.'
          },
          {
            question: 'When should you use design patterns?',
            options: ['Always', 'Never', 'When they solve a real problem', 'Only in large projects'],
            correctAnswer: 2,
            explanation: 'Design patterns should be used when they provide a clear benefit and solve a real problem, not just for the sake of using them.'
          }
        ]
      },

      {
        id: 'concurrency-parallelism',
        title: 'Concurrency & Parallelism',
        description: 'Threading, Multiprocessing, and Asyncio',
        content: {
          overview: 'Python offers three main ways to do things "at the same time": Threading (for I/O bound tasks), Multiprocessing (for CPU bound tasks), and Asyncio (for cooperative multitasking). Understanding the Global Interpreter Lock (GIL) is crucial for choosing the right tool.',
          keyPoints: [
            'The GIL (Global Interpreter Lock) prevents multiple native threads from executing Python bytecodes at once',
            'Threading is best for I/O bound tasks (network, disk)',
            'Multiprocessing bypasses the GIL by using separate processes (best for CPU heavy tasks)',
            'Asyncio uses a single thread with an event loop for high-concurrency I/O',
            'Race conditions occur when threads access shared data simultaneously'
          ],
          useCases: [
            {
              title: 'Web Scraping',
              description: 'Downloading 100 pages concurrently',
              example: 'Using Threading or Asyncio to wait for network responses'
            },
            {
              title: 'Image Processing',
              description: 'Resizing 1000 images',
              example: 'Using Multiprocessing to utilize all CPU cores'
            },
            {
              title: 'Web Servers',
              description: 'Handling thousands of connections',
              example: 'FastAPI/Node.js style event loops using Asyncio'
            }
          ],
          dos: [
            'Use Threading/Asyncio for I/O bound tasks',
            'Use Multiprocessing for CPU bound tasks',
            'Use Locks/Semaphores to protect shared state',
            'Use ThreadPoolExecutor/ProcessPoolExecutor for easier management',
            'Be aware of the GIL limitations'
          ],
          donts: [
            'Don\'t use Threading for CPU intensive work (it might be slower due to overhead)',
            'Don\'t modify shared mutable state without locks',
            'Don\'t mix Asyncio with blocking code',
            'Don\'t spawn unlimited threads (use pools)',
            'Don\'t ignore "zombie" processes'
          ],
          bestPractices: [
            'Prefer high-level abstractions (concurrent.futures) over raw threads',
            'Use queues for communication between threads/processes',
            'Keep critical sections (locked code) as short as possible',
            'Use async/await for modern I/O heavy applications',
            'Test concurrent code thoroughly for race conditions'
          ],
          codeExamples: [
            {
              title: '1. Threading vs Multiprocessing',
              code: `import time
import threading
import multiprocessing
import sys

def cpu_bound_task(n):
    while n > 0:
        n -= 1

def io_bound_task(n):
    time.sleep(n)

if __name__ == "__main__":
    print("--- Threading Demo ---")
    try:
        # Threading for I/O
        start = time.time()
        t1 = threading.Thread(target=io_bound_task, args=(0.5,))
        t2 = threading.Thread(target=io_bound_task, args=(0.5,))
        t1.start(); t2.start()
        t1.join(); t2.join()
        print(f"Threading I/O took: {time.time() - start:.2f}s")
    except RuntimeError as e:
        print(f"⚠️ Threading not supported in browser: {e}")
        print("Note: This code works in a local Python environment.")

    print("\\n--- Multiprocessing Demo ---")
    try:
        # Multiprocessing for CPU
        start = time.time()
        p1 = multiprocessing.Process(target=cpu_bound_task, args=(1000000,))
        p2 = multiprocessing.Process(target=cpu_bound_task, args=(1000000,))
        p1.start(); p2.start()
        p1.join(); p2.join()
        print(f"Multiprocessing CPU took: {time.time() - start:.2f}s")
    except (RuntimeError, AttributeError, ImportError, OSError) as e:
        print(f"⚠️ Multiprocessing not supported in browser: {e}")
        print("Note: This code works in a local Python environment.")`,
              explanation: 'Threads run "concurrently" but share the GIL. Processes run in parallel on different cores. (Note: Browser environments have limitations with native threading/multiprocessing)'
            },
            {
              title: '2. Modern Asyncio',
              code: `import asyncio

async def fetch_data(id, delay):
    print(f"Fetching {id}...")
    await asyncio.sleep(delay) # Non-blocking sleep
    print(f"Done {id}")
    return {"id": id, "data": "some data"}

async def main():
    # Create tasks to run concurrently
    task1 = asyncio.create_task(fetch_data(1, 2))
    task2 = asyncio.create_task(fetch_data(2, 1)) # This will finish first
    
    print("Tasks started...")
    
    # Wait for all
    results = await asyncio.gather(task1, task2)
    print(f"Results: {results}")

# Run the event loop
# asyncio.run(main()) # Uncomment to run`,
              explanation: 'Asyncio uses `await` to yield control back to the event loop, allowing other tasks to run while waiting for I/O.'
            }
          ],
          quiz: [
            {
              question: 'What prevents Python threads from running truly in parallel on one CPU?',
              options: ['The OS Scheduler', 'The GIL (Global Interpreter Lock)', 'Lack of memory', 'Python is single-threaded'],
              correctAnswer: 1,
              explanation: 'The Global Interpreter Lock (GIL) ensures that only one thread executes Python bytecode at a time per process.'
            },
            {
              question: 'Which module is best for CPU-heavy tasks?',
              options: ['threading', 'asyncio', 'multiprocessing', 'subprocess'],
              correctAnswer: 2,
              explanation: 'Multiprocessing creates separate processes with their own memory space and GIL, allowing true parallelism on multi-core CPUs.'
            }
          ]
        }
      },
      {
        id: 'testing-tdd',
        title: 'Testing & TDD',
        description: 'Unit Testing, Pytest, and Test Driven Development',
        content: {
          overview: 'Testing is not optional in professional software development. It ensures your code works as expected and prevents regressions. TDD (Test Driven Development) is a methodology where you write tests *before* writing the code.',
          keyPoints: [
            'Unit Tests verify small, isolated parts of code',
            'Integration Tests verify how different parts work together',
            'Pytest is the industry standard for Python testing (simpler than unittest)',
            'Mocking allows you to fake external dependencies (APIs, DBs)',
            'TDD Cycle: Red (Write failing test) -> Green (Make it pass) -> Refactor'
          ],
          useCases: [
            {
              title: 'CI/CD Pipelines',
              description: 'Running tests automatically on every commit',
              example: 'GitHub Actions running pytest'
            },
            {
              title: 'Refactoring Legacy Code',
              description: 'Ensuring changes don\'t break existing features',
              example: 'Writing tests for old functions before cleaning them up'
            },
            {
              title: 'Bug Fixing',
              description: 'Reproducing a bug with a test case',
              example: 'Writing a test that fails with the reported bug, then fixing it'
            }
          ],
          dos: [
            'Write tests for all new features',
            'Keep tests independent and isolated',
            'Use descriptive test names (test_user_can_login)',
            'Use fixtures for setup/teardown',
            'Aim for high code coverage (but don\'t obsess over 100%)'
          ],
          donts: [
            'Don\'t test external libraries (assume they work)',
            'Don\'t make tests depend on each other (order shouldn\'t matter)',
            'Don\'t hardcode local paths in tests',
            'Don\'t ignore failing tests',
            'Don\'t write complex logic in tests'
          ],
          bestPractices: [
            'Follow the Arrange-Act-Assert pattern',
            'Use `pytest` over `unittest` for less boilerplate',
            'Use `conftest.py` for shared fixtures',
            'Mock network calls and database access',
            'Run tests frequently'
          ],
          codeExamples: [
            {
              title: '1. Simple Pytest',
              code: `# calculator.py
def add(a, b):
    return a + b

def divide(a, b):
    if b == 0:
        raise ValueError("Cannot divide by zero")
    return a / b

# test_calculator.py
import pytest
# from calculator import add, divide

def test_add():
    assert add(2, 3) == 5
    assert add(-1, 1) == 0

def test_divide():
    assert divide(10, 2) == 5

def test_divide_by_zero():
    with pytest.raises(ValueError):
        divide(10, 0)`,
              explanation: 'Pytest uses simple `assert` statements. `pytest.raises` checks if the correct exception is thrown.'
            },
            {
              title: '2. Mocking with unittest.mock',
              code: `from unittest.mock import Mock, patch
import requests

def get_user_data(user_id):
    response = requests.get(f"https://api.example.com/users/{user_id}")
    if response.status_code == 200:
        return response.json()
    return None

# Test without actually calling the API
@patch('requests.get')
def test_get_user_data(mock_get):
    # Setup the mock
    mock_response = Mock()
    mock_response.status_code = 200
    mock_response.json.return_value = {"id": 1, "name": "Alice"}
    mock_get.return_value = mock_response

    # Run the function
    result = get_user_data(1)

    # Assertions
    assert result["name"] == "Alice"
    mock_get.assert_called_with("https://api.example.com/users/1")`,
              explanation: 'Mocking replaces real objects with fake ones, allowing you to test logic without relying on external services.'
            }
          ],
          quiz: [
            {
              question: 'What is the "Red" step in TDD?',
              options: ['Stop coding', 'Write a failing test', 'Fix a bug', 'Deploy to production'],
              correctAnswer: 1,
              explanation: 'Red means writing a test that fails (because the feature doesn\'t exist yet). Green is making it pass. Refactor is cleaning up.'
            },
            {
              question: 'Why do we use Mocks?',
              options: ['To make tests faster', 'To isolate code from external dependencies', 'To avoid side effects (like DB writes)', 'All of the above'],
              correctAnswer: 3,
              explanation: 'Mocks help isolate the unit of code being tested, making tests faster, deterministic, and safe.'
            }
          ]
        }
      },
      {
        id: 'web-scraping',
        title: 'Web Scraping',
        description: 'Extracting data from the web using BeautifulSoup and Requests',
        content: {
          overview: 'Web scraping is the automated process of extracting data from websites. It involves fetching the HTML of a page and parsing it to find specific information. It is widely used for data analysis, price monitoring, and research.',
          keyPoints: [
            'Requests library is used to fetch web pages (HTTP GET)',
            'BeautifulSoup is used to parse HTML and navigate the DOM',
            'Always check `robots.txt` before scraping a site',
            'Websites can be static (HTML) or dynamic (JavaScript rendered)',
            'For dynamic sites, you might need Selenium or Playwright'
          ],
          useCases: [
            {
              title: 'Price Monitoring',
              description: 'Tracking product prices on e-commerce sites',
              example: 'Scraping Amazon/eBay for price drops'
            },
            {
              title: 'Data Aggregation',
              description: 'Collecting news or job listings',
              example: 'Building a job board by scraping company career pages'
            },
            {
              title: 'Lead Generation',
              description: 'Collecting contact info from directories',
              example: 'Scraping Yellow Pages (respecting privacy laws)'
            }
          ],
          dos: [
            'Respect `robots.txt` and Terms of Service',
            'Add a delay between requests (don\'t DDoS the server)',
            'Use a User-Agent header to identify your bot',
            'Handle errors gracefully (404, 500)',
            'Cache data locally to avoid re-fetching'
          ],
          donts: [
            'Don\'t scrape personal data without consent',
            'Don\'t hit the server too fast',
            'Don\'t rely on fragile selectors (like absolute XPaths)',
            'Don\'t scrape copyrighted content for redistribution',
            'Don\'t ignore API alternatives (if available)'
          ],
          bestPractices: [
            'Inspect the page source (DevTools) to find stable selectors',
            'Use CSS selectors or IDs where possible',
            'Use `requests.Session()` for efficiency',
            'Handle dynamic content appropriately',
            'Store scraped data in structured formats (CSV, JSON, DB)'
          ],
          codeExamples: [
            {
              title: '1. Basic Scraping with BeautifulSoup',
              code: `import requests
from bs4 import BeautifulSoup

# Fake URL for demonstration
url = "https://books.toscrape.com/"

try:
    response = requests.get(url)
    response.raise_for_status() # Check for errors
    
    soup = BeautifulSoup(response.text, 'html.parser')
    
    # Find all book articles
    books = soup.find_all('article', class_='product_pod')
    
    for book in books[:3]: # Just first 3
        title = book.h3.a['title']
        price = book.find('p', class_='price_color').text
        print(f"Book: {title} | Price: {price}")
        
except Exception as e:
    print(f"Error: {e}")`,
              explanation: 'We fetch the page, parse the HTML, and then use `find_all` to locate elements based on tags and classes.'
            }
          ],
          quiz: [
            {
              question: 'What file should you check before scraping a website?',
              options: ['index.html', 'sitemap.xml', 'robots.txt', 'config.json'],
              correctAnswer: 2,
              explanation: 'robots.txt defines the rules for bots and crawlers, specifying which parts of the site are allowed or disallowed.'
            },
            {
              question: 'Which library is best for parsing HTML?',
              options: ['requests', 'BeautifulSoup', 'pandas', 'numpy'],
              correctAnswer: 1,
              explanation: 'BeautifulSoup is a powerful library for parsing HTML and XML documents and extracting data.'
            }
          ]
        }
      },
      {
        id: 'mini-project-fastapi-blog',
        title: 'Mini Project: FastAPI Blog Platform',
        description: 'Build a complete blog platform with authentication and database',
        content: {
          overview: 'Build a production-ready blog platform using FastAPI, PostgreSQL, and modern Python practices. This project covers user authentication, CRUD operations, database relationships, API design, security, and deployment. You will create a RESTful API with JWT authentication, user management, blog posts, comments, and a complete backend system.',
          keyPoints: [
            'FastAPI - Modern, fast Python web framework',
            'PostgreSQL - Relational database with SQLAlchemy ORM',
            'JWT Authentication - Secure token-based auth',
            'CRUD Operations - Create, Read, Update, Delete',
            'API Design - RESTful endpoints and best practices',
            'Security - Password hashing, authorization, input validation'
          ],
          useCases: [
            {
              title: 'User Authentication System',
              description: 'Signup, login, logout with JWT tokens',
              example: 'Secure user registration, password hashing, token-based sessions'
            },
            {
              title: 'Blog Management',
              description: 'Create, edit, delete blog posts',
              example: 'Rich text posts, categories, tags, publish/draft status'
            },
            {
              title: 'User Profiles',
              description: 'Profile management and customization',
              example: 'Edit bio, avatar, social links, account settings'
            },
            {
              title: 'RESTful API',
              description: 'Well-designed API with proper HTTP methods',
              example: 'GET /posts, POST /posts, PUT /posts/{id}, DELETE /posts/{id}'
            }
          ],
          dos: [
            'Follow RESTful API conventions',
            'Hash passwords using bcrypt or passlib',
            'Validate all user input with Pydantic',
            'Use database migrations (Alembic)',
            'Implement proper error handling',
            'Add API documentation (automatic with FastAPI)',
            'Use environment variables for secrets',
            'Implement pagination for list endpoints'
          ],
          donts: [
            "Don't store passwords in plain text",
            "Don't expose internal errors to users",
            "Don't skip input validation",
            "Don't hardcode database credentials",
            "Don't ignore SQL injection risks (use ORM properly)",
            "Don't skip authentication on protected routes",
            "Don't return too much data in responses"
          ],
          bestPractices: [
            'Use dependency injection for database sessions',
            'Separate models, schemas, and CRUD logic',
            'Use async/await for database operations',
            'Implement proper logging',
            'Use Pydantic models for request/response validation',
            'Follow 12-factor app methodology',
            'Write tests for critical endpoints',
            'Document API with proper descriptions'
          ],
          codeExamples: [
            {
              title: '1. Project Setup and Dependencies',
              code: `# Step 1: Create project structure
# blog-platform/
# ├── app/
# │   ├── __init__.py
# │   ├── main.py
# │   ├── database.py
# │   ├── models.py
# │   ├── schemas.py
# │   ├── crud.py
# │   ├── auth.py
# │   └── routers/
# │       ├── __init__.py
# │       ├── users.py
# │       └── posts.py
# ├── requirements.txt
# ├── .env
# └── README.md

# requirements.txt
"""
fastapi==0.104.1
uvicorn[standard]==0.24.0
sqlalchemy==2.0.23
psycopg2-binary==2.9.9
pydantic==2.5.0
pydantic-settings==2.1.0
python-jose[cryptography]==3.3.0
passlib[bcrypt]==1.7.4
python-multipart==0.0.6
alembic==1.13.0
"""

# Install dependencies
# pip install -r requirements.txt

# Setup PostgreSQL database
# Create database: createdb blog_db
# Or using pgAdmin/SQL: CREATE DATABASE blog_db;`,
              explanation: 'Project structure separates concerns: models (database), schemas (validation), crud (operations), routers (endpoints).'
            },
            {
              title: '2. Database Configuration',
              code: `# app/database.py
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import os
from dotenv import load_dotenv

load_dotenv()

# Database URL from environment variable
DATABASE_URL = os.getenv(
    "DATABASE_URL",
    "postgresql://username:password@localhost/blog_db"
)

# Create engine
engine = create_engine(DATABASE_URL)

# Create session factory
SessionLocal = sessionmaker(
    autocommit=False,
    autoflush=False,
    bind=engine
)

# Base class for models
Base = declarative_base()

# Dependency for route handlers
def get_db():
    """Provide database session to routes."""
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# .env file (don't commit to git!)
"""
DATABASE_URL=postgresql://your_user:your_password@localhost/blog_db
SECRET_KEY=your-secret-key-min-32-characters-long-change-this
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=30
"""`,
              explanation: 'Database setup with SQLAlchemy. SessionLocal creates sessions, get_db is a dependency for FastAPI routes.'
            },
            {
              title: '3. Database Models',
              code: `# app/models.py
from sqlalchemy import Boolean, Column, Integer, String, Text, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from .database import Base

class User(Base):
    """User model for authentication and profile."""
    __tablename__ = "users"
    
    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True, nullable=False)
    username = Column(String, unique=True, index=True, nullable=False)
    hashed_password = Column(String, nullable=False)
    full_name = Column(String)
    bio = Column(Text)
    is_active = Column(Boolean, default=True)
    is_superuser = Column(Boolean, default=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())
    
    # Relationships
    posts = relationship("Post", back_populates="author", cascade="all, delete-orphan")
    comments = relationship("Comment", back_populates="author", cascade="all, delete-orphan")

class Post(Base):
    """Blog post model."""
    __tablename__ = "posts"
    
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, nullable=False, index=True)
    slug = Column(String, unique=True, index=True)
    content = Column(Text, nullable=False)
    published = Column(Boolean, default=False)
    author_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())
    
    # Relationships
    author = relationship("User", back_populates="posts")
    comments = relationship("Comment", back_populates="post", cascade="all, delete-orphan")

class Comment(Base):
    """Comment model."""
    __tablename__ = "comments"
    
    id = Column(Integer, primary_key=True, index=True)
    content = Column(Text, nullable=False)
    post_id = Column(Integer, ForeignKey("posts.id"), nullable=False)
    author_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    
    # Relationships
    post = relationship("Post", back_populates="comments")
    author = relationship("User", back_populates="comments")`,
              explanation: 'SQLAlchemy models define database schema. Relationships connect users, posts, and comments.'
            },
            {
              title: '4. Pydantic Schemas (Validation)',
              code: `# app/schemas.py
from pydantic import BaseModel, EmailStr, Field
from typing import Optional, List
from datetime import datetime

# User schemas
class UserBase(BaseModel):
    email: EmailStr
    username: str = Field(..., min_length=3, max_length=50)
    full_name: Optional[str] = None

class UserCreate(UserBase):
    password: str = Field(..., min_length=8, max_length=100)

class UserUpdate(BaseModel):
    full_name: Optional[str] = None
    bio: Optional[str] = None

class UserResponse(UserBase):
    id: int
    bio: Optional[str]
    is_active: bool
    created_at: datetime
    
    class Config:
        from_attributes = True

# Post schemas
class PostBase(BaseModel):
    title: str = Field(..., min_length=1, max_length=200)
    content: str = Field(..., min_length=1)
    published: bool = False

class PostCreate(PostBase):
    pass

class PostUpdate(BaseModel):
    title: Optional[str] = Field(None, min_length=1, max_length=200)
    content: Optional[str] = Field(None, min_length=1)
    published: Optional[bool] = None

class PostResponse(PostBase):
    id: int
    slug: str
    author_id: int
    created_at: datetime
    updated_at: Optional[datetime]
    
    class Config:
        from_attributes = True

# Comment schemas
class CommentCreate(BaseModel):
    content: str = Field(..., min_length=1)
    post_id: int

class CommentResponse(BaseModel):
    id: int
    content: str
    post_id: int
    author_id: int
    created_at: datetime
    
    class Config:
        from_attributes = True

# Token schemas
class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    username: Optional[str] = None`,
              explanation: 'Pydantic schemas validate request/response data. Separate Create, Update, and Response schemas for different operations.'
            },
            {
              title: '5. Authentication System',
              code: `# app/auth.py
from datetime import datetime, timedelta
from typing import Optional
from jose import JWTError, jwt
from passlib.context import CryptContext
from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from sqlalchemy.orm import Session
from .database import get_db
from . import models, schemas
import os

# Password hashing
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# OAuth2 scheme
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="auth/login")

# Get from environment
SECRET_KEY = os.getenv("SECRET_KEY")
ALGORITHM = os.getenv("ALGORITHM", "HS256")
ACCESS_TOKEN_EXPIRE_MINUTES = int(os.getenv("ACCESS_TOKEN_EXPIRE_MINUTES", 30))

def verify_password(plain_password: str, hashed_password: str) -> bool:
    """Verify password against hash."""
    return pwd_context.verify(plain_password, hashed_password)

def get_password_hash(password: str) -> str:
    """Hash password."""
    return pwd_context.hash(password)

def create_access_token(data: dict, expires_delta: Optional[timedelta] = None):
    """Create JWT access token."""
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=15)
    
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

def get_current_user(
    token: str = Depends(oauth2_scheme),
    db: Session = Depends(get_db)
) -> models.User:
    """Get current authenticated user from token."""
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        username: str = payload.get("sub")
        if username is None:
            raise credentials_exception
    except JWTError:
        raise credentials_exception
    
    user = db.query(models.User).filter(
        models.User.username == username
    ).first()
    
    if user is None:
        raise credentials_exception
    
    return user

def get_current_active_user(
    current_user: models.User = Depends(get_current_user)
) -> models.User:
    """Ensure user is active."""
    if not current_user.is_active:
        raise HTTPException(status_code=400, detail="Inactive user")
    return current_user`,
              explanation: 'Authentication handles password hashing, JWT token creation/validation, and user dependency injection.'
            },
            {
              title: '6. CRUD Operations',
              code: `# app/crud.py
from sqlalchemy.orm import Session
from sqlalchemy import or_
from typing import Optional, List
from . import models, schemas
from .auth import get_password_hash
import re

def slugify(text: str) -> str:
    """Convert text to URL-friendly slug."""
    text = text.lower()
    text = re.sub(r'[^a-z0-9\\s-]', '', text)
    text = re.sub(r'[\\s]+', '-', text)
    return text.strip('-')

# User CRUD
def get_user_by_email(db: Session, email: str) -> Optional[models.User]:
    return db.query(models.User).filter(models.User.email == email).first()

def get_user_by_username(db: Session, username: str) -> Optional[models.User]:
    return db.query(models.User).filter(models.User.username == username).first()

def create_user(db: Session, user: schemas.UserCreate) -> models.User:
    hashed_password = get_password_hash(user.password)
    db_user = models.User(
        email=user.email,
        username=user.username,
        full_name=user.full_name,
        hashed_password=hashed_password
    )
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

def update_user(
    db: Session,
    user: models.User,
    user_update: schemas.UserUpdate
) -> models.User:
    update_data = user_update.dict(exclude_unset=True)
    for field, value in update_data.items():
        setattr(user, field, value)
    db.commit()
    db.refresh(user)
    return user

# Post CRUD
def get_posts(
    db: Session,
    skip: int = 0,
    limit: int = 10,
    published_only: bool = True
) -> List[models.Post]:
    query = db.query(models.Post)
    if published_only:
        query = query.filter(models.Post.published == True)
    return query.order_by(
        models.Post.created_at.desc()
    ).offset(skip).limit(limit).all()

def get_post_by_id(db: Session, post_id: int) -> Optional[models.Post]:
    return db.query(models.Post).filter(models.Post.id == post_id).first()

def get_post_by_slug(db: Session, slug: str) -> Optional[models.Post]:
    return db.query(models.Post).filter(models.Post.slug == slug).first()

def create_post(
    db: Session,
    post: schemas.PostCreate,
    author_id: int
) -> models.Post:
    slug = slugify(post.title)
    # Ensure unique slug
    base_slug = slug
    counter = 1
    while get_post_by_slug(db, slug):
        slug = f"{base_slug}-{counter}"
        counter += 1
    
    db_post = models.Post(
        **post.dict(),
        slug=slug,
        author_id=author_id
    )
    db.add(db_post)
    db.commit()
    db.refresh(db_post)
    return db_post

def update_post(
    db: Session,
    post: models.Post,
    post_update: schemas.PostUpdate
) -> models.Post:
    update_data = post_update.dict(exclude_unset=True)
    
    # Update slug if title changed
    if "title" in update_data:
        update_data["slug"] = slugify(update_data["title"])
    
    for field, value in update_data.items():
        setattr(post, field, value)
    
    db.commit()
    db.refresh(post)
    return post

def delete_post(db: Session, post: models.Post):
    db.delete(post)
    db.commit()

# Comment CRUD
def create_comment(
    db: Session,
    comment: schemas.CommentCreate,
    author_id: int
) -> models.Comment:
    db_comment = models.Comment(
        **comment.dict(),
        author_id=author_id
    )
    db.add(db_comment)
    db.commit()
    db.refresh(db_comment)
    return db_comment`,
              explanation: 'CRUD operations handle database interactions. Separate functions for each model operation.'
            },
            {
              title: '7. API Routes - Authentication',
              code: `# app/routers/auth.py
from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session
from datetime import timedelta
from .. import schemas, crud, models
from ..database import get_db
from ..auth import (
    verify_password,
    create_access_token,
    ACCESS_TOKEN_EXPIRE_MINUTES
)

router = APIRouter(prefix="/auth", tags=["Authentication"])

@router.post("/signup", response_model=schemas.UserResponse)
def signup(
    user: schemas.UserCreate,
    db: Session = Depends(get_db)
):
    """Register a new user."""
    # Check if email exists
    db_user = crud.get_user_by_email(db, email=user.email)
    if db_user:
        raise HTTPException(
            status_code=400,
            detail="Email already registered"
        )
    
    # Check if username exists
    db_user = crud.get_user_by_username(db, username=user.username)
    if db_user:
        raise HTTPException(
            status_code=400,
            detail="Username already taken"
        )
    
    # Create user
    return crud.create_user(db=db, user=user)

@router.post("/login", response_model=schemas.Token)
def login(
    form_data: OAuth2PasswordRequestForm = Depends(),
    db: Session = Depends(get_db)
):
    """Login and get access token."""
    # Get user by username
    user = crud.get_user_by_username(db, username=form_data.username)
    
    # Verify credentials
    if not user or not verify_password(form_data.password, user.hashed_password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    
    # Check if user is active
    if not user.is_active:
        raise HTTPException(status_code=400, detail="Inactive user")
    
    # Create access token
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": user.username},
        expires_delta=access_token_expires
    )
    
    return {"access_token": access_token, "token_type": "bearer"}`,
              explanation: 'Authentication routes handle signup and login. Login returns JWT token for subsequent requests.'
            },
            {
              title: '8. API Routes - Users',
              code: `# app/routers/users.py
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from .. import schemas, crud, models
from ..database import get_db
from ..auth import get_current_active_user

router = APIRouter(prefix="/users", tags=["Users"])

@router.get("/me", response_model=schemas.UserResponse)
def get_current_user_profile(
    current_user: models.User = Depends(get_current_active_user)
):
    """Get current user's profile."""
    return current_user

@router.put("/me", response_model=schemas.UserResponse)
def update_current_user_profile(
    user_update: schemas.UserUpdate,
    current_user: models.User = Depends(get_current_active_user),
    db: Session = Depends(get_db)
):
    """Update current user's profile."""
    return crud.update_user(db, current_user, user_update)

@router.get("/{username}", response_model=schemas.UserResponse)
def get_user_by_username(
    username: str,
    db: Session = Depends(get_db)
):
    """Get user profile by username."""
    user = crud.get_user_by_username(db, username=username)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user`,
              explanation: 'User routes handle profile operations. Protected routes use get_current_active_user dependency.'
            },
            {
              title: '9. API Routes - Posts',
              code: `# app/routers/posts.py
from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy.orm import Session
from typing import List
from .. import schemas, crud, models
from ..database import get_db
from ..auth import get_current_active_user

router = APIRouter(prefix="/posts", tags=["Posts"])

@router.get("/", response_model=List[schemas.PostResponse])
def get_posts(
    skip: int = Query(0, ge=0),
    limit: int = Query(10, ge=1, le=100),
    db: Session = Depends(get_db)
):
    """Get list of published posts."""
    posts = crud.get_posts(db, skip=skip, limit=limit, published_only=True)
    return posts

@router.get("/{slug}", response_model=schemas.PostResponse)
def get_post(
    slug: str,
    db: Session = Depends(get_db)
):
    """Get post by slug."""
    post = crud.get_post_by_slug(db, slug=slug)
    if not post:
        raise HTTPException(status_code=404, detail="Post not found")
    if not post.published:
        raise HTTPException(status_code=404, detail="Post not found")
    return post

@router.post("/", response_model=schemas.PostResponse, status_code=201)
def create_post(
    post: schemas.PostCreate,
    current_user: models.User = Depends(get_current_active_user),
    db: Session = Depends(get_db)
):
    """Create a new post (requires authentication)."""
    return crud.create_post(db=db, post=post, author_id=current_user.id)

@router.put("/{post_id}", response_model=schemas.PostResponse)
def update_post(
    post_id: int,
    post_update: schemas.PostUpdate,
    current_user: models.User = Depends(get_current_active_user),
    db: Session = Depends(get_db)
):
    """Update post (only author can update)."""
    post = crud.get_post_by_id(db, post_id=post_id)
    if not post:
        raise HTTPException(status_code=404, detail="Post not found")
    
    # Check ownership
    if post.author_id != current_user.id:
        raise HTTPException(status_code=403, detail="Not authorized")
    
    return crud.update_post(db, post, post_update)

@router.delete("/{post_id}", status_code=204)
def delete_post(
    post_id: int,
    current_user: models.User = Depends(get_current_active_user),
    db: Session = Depends(get_db)
):
    """Delete post (only author can delete)."""
    post = crud.get_post_by_id(db, post_id=post_id)
    if not post:
        raise HTTPException(status_code=404, detail="Post not found")
    
    # Check ownership
    if post.author_id != current_user.id:
        raise HTTPException(status_code=403, detail="Not authorized")
    
    crud.delete_post(db, post)
    return None`,
              explanation: 'Post routes implement full CRUD. Authorization checks ensure only authors can modify their posts.'
            },
            {
              title: '10. Main Application',
              code: `# app/main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .database import engine, Base
from .routers import auth, users, posts

# Create database tables
Base.metadata.create_all(bind=engine)

# Create FastAPI app
app = FastAPI(
    title="Blog Platform API",
    description="A complete blog platform with authentication and CRUD operations",
    version="1.0.0",
    docs_url="/docs",
    redoc_url="/redoc"
)

# CORS middleware (adjust origins for production)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # React frontend
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(auth.router)
app.include_router(users.router)
app.include_router(posts.router)

@app.get("/")
def root():
    """Root endpoint."""
    return {
        "message": "Welcome to Blog Platform API",
        "docs": "/docs",
        "version": "1.0.0"
    }

@app.get("/health")
def health_check():
    """Health check endpoint."""
    return {"status": "healthy"}

# Run with: uvicorn app.main:app --reload
# Access docs at: http://localhost:8000/docs`,
              explanation: 'Main app assembles all components. Includes routers, middleware, and creates database tables.'
            },
            {
              title: '11. Running and Testing',
              code: `# Run the application
# uvicorn app.main:app --reload

# Test with curl or use the interactive docs at http://localhost:8000/docs

# 1. Register a user
curl -X POST "http://localhost:8000/auth/signup" \\
  -H "Content-Type: application/json" \\
  -d '{
    "email": "user@example.com",
    "username": "johndoe",
    "password": "securepass123",
    "full_name": "John Doe"
  }'

# 2. Login (get token)
curl -X POST "http://localhost:8000/auth/login" \\
  -H "Content-Type: application/x-www-form-urlencoded" \\
  -d "username=johndoe&password=securepass123"

# Response: {"access_token": "eyJ...", "token_type": "bearer"}

# 3. Create a post (use token from login)
curl -X POST "http://localhost:8000/posts/" \\
  -H "Authorization: Bearer YOUR_TOKEN_HERE" \\
  -H "Content-Type: application/json" \\
  -d '{
    "title": "My First Blog Post",
    "content": "This is the content of my first post!",
    "published": true
  }'

# 4. Get all posts
curl "http://localhost:8000/posts/"

# 5. Get current user profile
curl "http://localhost:8000/users/me" \\
  -H "Authorization: Bearer YOUR_TOKEN_HERE"

# 6. Update profile
curl -X PUT "http://localhost:8000/users/me" \\
  -H "Authorization: Bearer YOUR_TOKEN_HERE" \\
  -H "Content-Type: application/json" \\
  -d '{
    "full_name": "John Smith",
    "bio": "Python developer and blogger"
  }'

# 7. Update a post
curl -X PUT "http://localhost:8000/posts/1" \\
  -H "Authorization: Bearer YOUR_TOKEN_HERE" \\
  -H "Content-Type: application/json" \\
  -d '{
    "title": "Updated Title",
    "content": "Updated content"
  }'

# 8. Delete a post
curl -X DELETE "http://localhost:8000/posts/1" \\
  -H "Authorization: Bearer YOUR_TOKEN_HERE"

# Interactive API documentation
# Open http://localhost:8000/docs in browser
# Try out all endpoints with the built-in interface!`,
              explanation: 'Testing the API with curl commands. FastAPI provides interactive docs at /docs for easier testing.'
            },
            {
              title: '12. Next Steps and Enhancements',
              code: `# Potential enhancements for the project:

# 1. Add pagination helper
from fastapi import Query

def pagination_params(
    skip: int = Query(0, ge=0, description="Skip N items"),
    limit: int = Query(10, ge=1, le=100, description="Limit results")
):
    return {"skip": skip, "limit": limit}

# 2. Add search functionality
@router.get("/posts/search/")
def search_posts(
    q: str = Query(..., min_length=1),
    db: Session = Depends(get_db)
):
    posts = db.query(models.Post).filter(
        models.Post.title.ilike(f"%{q}%") |
        models.Post.content.ilike(f"%{q}%")
    ).all()
    return posts

# 3. Add categories/tags
class Category(Base):
    __tablename__ = "categories"
    id = Column(Integer, primary_key=True)
    name = Column(String, unique=True)
    posts = relationship("Post", secondary="post_categories")

# 4. Add file upload for profile pictures
from fastapi import File, UploadFile
import shutil

@router.post("/users/me/avatar")
async def upload_avatar(
    file: UploadFile = File(...),
    current_user: models.User = Depends(get_current_active_user)
):
    file_location = f"uploads/avatars/{current_user.id}_{file.filename}"
    with open(file_location, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)
    return {"filename": file.filename}

# 5. Add email verification
# 6. Add password reset functionality
# 7. Add rate limiting
# 8. Add caching with Redis
# 9. Add full-text search with Elasticsearch
# 10. Add WebSocket support for real-time comments
# 11. Add admin dashboard
# 12. Deploy to cloud (Heroku, AWS, DigitalOcean)`,
              explanation: 'Many ways to extend the project: search, categories, file uploads, caching, real-time features, deployment.'
            }
          ]
        },
        quiz: [
          {
            question: 'What is FastAPI primarily used for?',
            options: [
              'Desktop applications',
              'Building fast web APIs',
              'Data analysis',
              'Game development'
            ],
            correctAnswer: 1,
            explanation: 'FastAPI is a modern, fast web framework for building APIs with Python 3.7+ based on standard Python type hints.'
          },
          {
            question: 'Why should you never store passwords in plain text?',
            options: [
              'They take up more space',
              'Security risk - anyone with database access can see them',
              'They are harder to validate',
              'Plain text is deprecated'
            ],
            correctAnswer: 1,
            explanation: 'Storing plain text passwords is a major security risk. Always hash passwords using bcrypt, scrypt, or argon2.'
          },
          {
            question: 'What does JWT stand for in authentication?',
            options: [
              'Java Web Token',
              'JSON Web Token',
              'JavaScript Web Tool',
              'Just Web Technology'
            ],
            correctAnswer: 1,
            explanation: 'JWT (JSON Web Token) is a compact, URL-safe means of representing claims between two parties for authentication.'
          },
          {
            question: 'What HTTP method should you use to update a resource?',
            options: ['GET', 'POST', 'PUT or PATCH', 'DELETE'],
            correctAnswer: 2,
            explanation: 'PUT is used to update an entire resource, PATCH for partial updates. Both are appropriate depending on use case.'
          },
          {
            question: 'What is the purpose of Pydantic in FastAPI?',
            options: [
              'Database management',
              'Data validation and serialization',
              'Authentication',
              'Routing'
            ],
            correctAnswer: 1,
            explanation: 'Pydantic provides data validation and settings management using Python type annotations.'
          }
        ]
      },
      {
        id: 'mini-project-ecommerce-api',
        title: 'Mini Project: E-commerce REST API',
        description: 'Build a complete e-commerce backend API with product management, shopping cart, and order processing',
        difficulty: 'Intermediate',
        estimatedTime: 90,
        content: {
          overview: `In this beginner-friendly project, you'll build a complete e-commerce REST API using Flask (a lightweight Python web framework). We'll create a backend system that handles products, shopping carts, and orders - just like Amazon or eBay!

**What You'll Learn:**
• How web APIs work and why they're important
• Setting up a Flask application from scratch
• Creating database models with SQLAlchemy (think of it as Python classes that become database tables)
• Building RESTful endpoints (URLs that handle different operations)
• Request handling (GET, POST, PUT, DELETE - the 4 main HTTP methods)
• Data validation to keep your database clean
• Authentication basics to protect your API

**Real-World Applications:**
• Online stores (Shopify, WooCommerce)
• Mobile app backends
• Inventory management systems
• Marketplace platforms

**Prerequisites:**
• Basic Python knowledge (functions, classes, dictionaries)
• Understanding of HTTP basics (what happens when you visit a website)
• Familiarity with JSON format (JavaScript Object Notation - how data travels on the web)`,

          keyPoints: [
            'Learn REST API architecture - the standard way websites and apps communicate',
            'Understand CRUD operations (Create, Read, Update, Delete) - the 4 basic database operations',
            'Master request/response cycle - how servers receive and send data',
            'Implement data validation - ensuring users send correct information',
            'Build relationships between data models - connecting products, carts, and orders',
            'Handle errors gracefully - what to do when things go wrong',
            'Use Postman or curl to test APIs - tools developers use daily',
            'Apply authentication patterns - keeping your API secure'
          ],

          dos: [
            'Start with a virtual environment to keep dependencies isolated',
            'Use environment variables for sensitive data (API keys, passwords)',
            'Validate all incoming data before saving to database',
            'Return appropriate HTTP status codes (200 for success, 404 for not found, etc.)',
            'Write clear API documentation so others can use your API',
            'Use meaningful variable and function names',
            'Handle errors with try-except blocks',
            'Test each endpoint as you build it'
          ],

          donts: [
            "Don't store passwords in plain text - always hash them",
            "Don't skip input validation - bad data can break your app",
            "Don't hardcode configuration values in your code",
            "Don't return sensitive data in API responses",
            "Don't ignore HTTP status codes - they help users understand what happened",
            "Don't build everything at once - start simple, then add features",
            "Don't forget to close database connections",
            "Don't commit secrets (API keys, passwords) to version control"
          ],

          bestPractices: [
            'Use blueprints to organize your Flask routes into logical groups',
            'Implement proper error handling with custom error messages',
            'Use SQLAlchemy ORM instead of raw SQL queries for security',
            'Follow RESTful naming conventions (/products, /orders, not /get_product)',
            'Version your API (e.g., /api/v1/) to allow future changes',
            'Add pagination for list endpoints to avoid loading too much data',
            'Use JSON for request/response bodies - the web standard',
            'Implement rate limiting to prevent API abuse',
            'Add logging to track errors and usage patterns',
            'Write unit tests for critical endpoints'
          ],

          codeExamples: [
            {
              title: '1. Project Structure & File Purpose',
              explanation: `Before writing code, let's understand what each file does. This is a typical Flask project structure:

**File Structure:**
\`\`\`
ecommerce-api/
│
├── app.py                 # Main application entry point - starts the server
├── config.py              # Configuration settings (database URL, secret keys)
├── requirements.txt       # List of Python packages needed
├── .env                   # Environment variables (passwords, API keys) - NEVER commit this!
│
├── models/
│   ├── __init__.py       # Makes this folder a Python package
│   ├── product.py        # Product database model (what a product looks like)
│   ├── user.py           # User database model
│   ├── cart.py           # Shopping cart model
│   └── order.py          # Order model
│
├── routes/
│   ├── __init__.py       # Makes this folder a Python package
│   ├── products.py       # Product-related endpoints (/products, /products/:id)
│   ├── cart.py           # Cart endpoints (/cart, /cart/add)
│   └── orders.py         # Order endpoints (/orders, /orders/:id)
│
├── utils/
│   ├── __init__.py       # Makes this folder a Python package
│   ├── validators.py     # Input validation functions
│   └── auth.py           # Authentication helper functions
│
└── tests/
    ├── test_products.py  # Tests for product endpoints
    ├── test_cart.py      # Tests for cart endpoints
    └── test_orders.py    # Tests for order endpoints
\`\`\`

**Why this structure?**
• Separation of concerns - each file has ONE job
• Easy to find and fix bugs
• Team members can work on different files without conflicts
• Scalable - easy to add new features`,
              code: `# requirements.txt - All Python packages we need
# Install with: pip install -r requirements.txt

Flask==2.3.0              # Web framework - handles HTTP requests
Flask-SQLAlchemy==3.0.0   # Database ORM - Python classes → database tables
Flask-CORS==4.0.0         # Allow frontend apps to call our API
python-dotenv==1.0.0      # Load environment variables from .env file
PyJWT==2.8.0              # Create authentication tokens
bcrypt==4.0.1             # Hash passwords securely
marshmallow==3.20.0       # Serialize/deserialize data (Python objects ↔ JSON)
email-validator==2.0.0    # Validate email addresses`
            },
            {
              title: '2. Configuration Setup (config.py)',
              explanation: `The config.py file stores all settings for your application. Think of it as the control panel for your app.

**Key Concepts:**
• Environment variables: Settings that change between development and production
• Secret key: Used to encrypt session data and tokens
• Database URI: Connection string telling Python where your database is
• Configuration classes: Different settings for development vs production`,
              code: `# config.py - Application configuration
"""
Purpose: Centralize all configuration settings
Why: Makes it easy to change settings without modifying code
"""

import os
from dotenv import load_dotenv

# Load environment variables from .env file
# .env file example:
# SECRET_KEY=your-secret-key-here
# DATABASE_URL=sqlite:///ecommerce.db
load_dotenv()

class Config:
    """Base configuration - shared settings"""
    
    # Secret key for session encryption and JWT tokens
    # IMPORTANT: Change this in production!
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'dev-secret-key-change-in-production'
    
    # Database configuration
    # SQLite = simple file-based database, perfect for learning
    # In production, use PostgreSQL or MySQL
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL') or 'sqlite:///ecommerce.db'
    
    # Disable tracking modifications (saves memory)
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    
    # JSON formatting (pretty print for debugging)
    JSON_SORT_KEYS = False
    JSONIFY_PRETTYPRINT_REGULAR = True

class DevelopmentConfig(Config):
    """Development environment settings"""
    DEBUG = True  # Show detailed error pages
    TESTING = False

class ProductionConfig(Config):
    """Production environment settings"""
    DEBUG = False  # Hide error details from users
    TESTING = False

class TestingConfig(Config):
    """Testing environment settings"""
    TESTING = True
    SQLALCHEMY_DATABASE_URI = 'sqlite:///test.db'  # Separate test database

# Dictionary to easily switch configurations
config = {
    'development': DevelopmentConfig,
    'production': ProductionConfig,
    'testing': TestingConfig,
    'default': DevelopmentConfig
}`
            },
            {
              title: '3. Database Models - Product (models/product.py)',
              explanation: `Database models are Python classes that represent tables in your database. Each instance of the class is a row in the table.

**Think of it like this:**
• Class = Blueprint for a table
• Class attributes = Column definitions
• Instance = One row of data

**SQLAlchemy does the heavy lifting:**
• Converts Python objects to SQL
• Handles database connections
• Prevents SQL injection attacks`,
              code: `# models/product.py - Product database model
"""
Purpose: Define what a product looks like in the database
Why: SQLAlchemy uses this class to create the products table
"""

from datetime import datetime
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Product(db.Model):
    """
    Product model - represents the products table
    
    Table: products
    Columns: id, name, description, price, stock, category, image_url, created_at
    """
    
    # Table name in database (optional - SQLAlchemy auto-generates if not specified)
    __tablename__ = 'products'
    
    # Primary key - unique identifier for each product
    # autoincrement=True means database automatically assigns next number
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    
    # Product name - required field (nullable=False)
    # index=True makes searching by name faster
    name = db.Column(db.String(100), nullable=False, index=True)
    
    # Detailed product description
    # Text = unlimited length (vs String which has limits)
    description = db.Column(db.Text, nullable=True)
    
    # Price in dollars/euros/etc.
    # Numeric(10, 2) = 10 total digits, 2 after decimal point
    # Example: 1234567.89
    price = db.Column(db.Numeric(10, 2), nullable=False)
    
    # How many items in stock
    stock = db.Column(db.Integer, default=0)
    
    # Product category (Electronics, Clothing, etc.)
    category = db.Column(db.String(50), index=True)
    
    # URL to product image
    image_url = db.Column(db.String(255))
    
    # When this product was added
    # default=datetime.utcnow automatically sets current time
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    
    # Relationship: One product can be in many cart items
    # This creates a link between Product and CartItem tables
    # backref='product' means CartItem objects will have a .product attribute
    cart_items = db.relationship('CartItem', backref='product', lazy=True)
    
    def to_dict(self):
        """
        Convert product object to dictionary (for JSON responses)
        
        Why: JSON can't handle Python objects, needs dictionaries
        Usage: product.to_dict() → send to frontend
        """
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'price': float(self.price),  # Convert Decimal to float for JSON
            'stock': self.stock,
            'category': self.category,
            'image_url': self.image_url,
            'created_at': self.created_at.isoformat() if self.created_at else None,
            'in_stock': self.stock > 0  # Bonus: computed property
        }
    
    def __repr__(self):
        """
        String representation for debugging
        When you print(product), you'll see: <Product: Laptop>
        """
        return f'<Product: {self.name}>'`
            },
            {
              title: '4. Database Models - User & Cart (models/user.py, models/cart.py)',
              explanation: `Now let's create User and Cart models. Notice how we link them together using relationships - this is the power of relational databases!

**Relationships explained:**
• One-to-Many: One user can have many cart items
• Foreign Key: Links one table to another (cart_item.user_id → user.id)`,
              code: `# models/user.py - User database model
"""
Purpose: Store user account information
Why: Track who's shopping and secure their data
"""

from datetime import datetime
from werkzeug.security import generate_password_hash, check_password_hash
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    """User account model"""
    
    __tablename__ = 'users'
    
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False, index=True)
    password_hash = db.Column(db.String(255), nullable=False)
    full_name = db.Column(db.String(100))
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    
    # Relationships
    cart_items = db.relationship('CartItem', backref='user', lazy=True, cascade='all, delete-orphan')
    orders = db.relationship('Order', backref='user', lazy=True)
    
    def set_password(self, password):
        """
        Hash password before storing
        NEVER store plain text passwords!
        
        Example: user.set_password('mypassword123')
        Stores: $2b$12$abcd... (hashed version)
        """
        self.password_hash = generate_password_hash(password)
    
    def check_password(self, password):
        """
        Verify password during login
        
        Example: user.check_password('mypassword123') → True/False
        """
        return check_password_hash(self.password_hash, password)
    
    def to_dict(self):
        """Convert to dictionary - NEVER include password_hash!"""
        return {
            'id': self.id,
            'email': self.email,
            'full_name': self.full_name,
            'created_at': self.created_at.isoformat()
        }

# models/cart.py - Shopping cart model
"""
Purpose: Store items user wants to buy
Why: Shopping cart = temporary storage before checkout
"""

class CartItem(db.Model):
    """
    Shopping cart item
    Links: User + Product + Quantity
    """
    
    __tablename__ = 'cart_items'
    
    id = db.Column(db.Integer, primary_key=True)
    
    # Foreign Keys - link to other tables
    # db.ForeignKey('users.id') means this column references users.id
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    product_id = db.Column(db.Integer, db.ForeignKey('products.id'), nullable=False)
    
    # How many of this product
    quantity = db.Column(db.Integer, default=1)
    
    # When added to cart
    added_at = db.Column(db.DateTime, default=datetime.utcnow)
    
    def to_dict(self):
        """Include product details in cart response"""
        return {
            'id': self.id,
            'product': self.product.to_dict(),  # Uses relationship!
            'quantity': self.quantity,
            'subtotal': float(self.product.price * self.quantity),
            'added_at': self.added_at.isoformat()
        }`
            },
            {
              title: '5. Database Models - Order (models/order.py)',
              explanation: `Orders are the final step - when a user checks out their cart. We'll store order details and individual items.`,
              code: `# models/order.py - Order management
"""
Purpose: Store completed purchases
Why: Track order history and fulfillment
"""

from datetime import datetime
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Order(db.Model):
    """Customer order"""
    
    __tablename__ = 'orders'
    
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    
    # Order status tracking
    status = db.Column(
        db.String(20), 
        default='pending',
        nullable=False
    )  # pending, processing, shipped, delivered, cancelled
    
    # Totals
    total_amount = db.Column(db.Numeric(10, 2), nullable=False)
    
    # Shipping information
    shipping_address = db.Column(db.Text, nullable=False)
    
    # Timestamps
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    
    # Relationship to order items
    items = db.relationship('OrderItem', backref='order', lazy=True, cascade='all, delete-orphan')
    
    def to_dict(self):
        return {
            'id': self.id,
            'status': self.status,
            'total_amount': float(self.total_amount),
            'shipping_address': self.shipping_address,
            'items': [item.to_dict() for item in self.items],
            'created_at': self.created_at.isoformat(),
            'updated_at': self.updated_at.isoformat()
        }

class OrderItem(db.Model):
    """
    Individual items in an order
    Why separate from Order? Store price at time of purchase
    (product prices might change later!)
    """
    
    __tablename__ = 'order_items'
    
    id = db.Column(db.Integer, primary_key=True)
    order_id = db.Column(db.Integer, db.ForeignKey('orders.id'), nullable=False)
    product_id = db.Column(db.Integer, db.ForeignKey('products.id'), nullable=False)
    
    # Snapshot of product details at purchase time
    product_name = db.Column(db.String(100), nullable=False)
    price = db.Column(db.Numeric(10, 2), nullable=False)  # Price when ordered
    quantity = db.Column(db.Integer, nullable=False)
    
    # Relationship
    product = db.relationship('Product')
    
    def to_dict(self):
        return {
            'id': self.id,
            'product_id': self.product_id,
            'product_name': self.product_name,
            'price': float(self.price),
            'quantity': self.quantity,
            'subtotal': float(self.price * self.quantity)
        }\`
            },
            {
              title: '6. API Routes - Products Endpoints (routes/products.py)',
              explanation: \`Routes define what happens when someone visits a URL. Each route = one API endpoint.

**HTTP Methods explained for beginners:**
• GET = Retrieve data (like viewing a product)
• POST = Create new data (add new product)
• PUT = Update existing data (change product price)
• DELETE = Remove data (remove product)

**URL patterns:**
• /products = List all products
• /products/:id = Specific product (id = number)`,
              code: `# routes/products.py - Product API endpoints
"""
Purpose: Handle all product-related requests
Endpoints:
  GET    /products        - List all products
  GET    /products/:id    - Get one product
  POST   /products        - Create product (admin)
  PUT    /products/:id    - Update product (admin)
  DELETE /products/:id    - Delete product (admin)
"""

from flask import Blueprint, request, jsonify
from models.product import Product, db

# Blueprint = mini-application for organizing routes
# url_prefix = all routes start with /api/products
products_bp = Blueprint('products', __name__, url_prefix='/api/products')

@products_bp.route('/', methods=['GET'])
def get_products():
    """
    GET /api/products
    
    Get all products with optional filtering
    Query params:
      - category: Filter by category
      - min_price: Minimum price
      - max_price: Maximum price
      - search: Search in name/description
    
    Example: /api/products?category=Electronics&min_price=100
    """
    try:
        # Start with all products
        query = Product.query
        
        # Apply filters if provided
        category = request.args.get('category')
        if category:
            query = query.filter_by(category=category)
        
        min_price = request.args.get('min_price', type=float)
        if min_price:
            query = query.filter(Product.price >= min_price)
        
        max_price = request.args.get('max_price', type=float)
        if max_price:
            query = query.filter(Product.price <= max_price)
        
        search = request.args.get('search')
        if search:
            # ilike = case-insensitive search
            query = query.filter(
                Product.name.ilike(f'%{search}%') | 
                Product.description.ilike(f'%{search}%')
            )
        
        # Execute query
        products = query.all()
        
        # Convert to list of dictionaries
        return jsonify({
            'success': True,
            'count': len(products),
            'products': [product.to_dict() for product in products]
        }), 200
        
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500

@products_bp.route('/<int:product_id>', methods=['GET'])
def get_product(product_id):
    """
    GET /api/products/123
    
    Get single product by ID
    """
    try:
        # query.get_or_404 = find by ID or return 404 error
        product = Product.query.get_or_404(product_id)
        
        return jsonify({
            'success': True,
            'product': product.to_dict()
        }), 200
        
    except Exception as e:
        return jsonify({
            'success': False,
            'error': 'Product not found'
        }), 404

@products_bp.route('/', methods=['POST'])
def create_product():
    """
    POST /api/products
    
    Create new product
    Request body (JSON):
    {
        "name": "Laptop",
        "description": "Gaming laptop",
        "price": 999.99,
        "stock": 10,
        "category": "Electronics"
    }
    """
    try:
        # Get JSON data from request
        data = request.get_json()
        
        # Validate required fields
        required_fields = ['name', 'price']
        for field in required_fields:
            if field not in data:
                return jsonify({
                    'success': False,
                    'error': f'Missing required field: {field}'
                }), 400
        
        # Create new product
        product = Product(
            name=data['name'],
            description=data.get('description', ''),
            price=data['price'],
            stock=data.get('stock', 0),
            category=data.get('category', 'Uncategorized'),
            image_url=data.get('image_url')
        )
        
        # Save to database
        db.session.add(product)
        db.session.commit()
        
        return jsonify({
            'success': True,
            'message': 'Product created successfully',
            'product': product.to_dict()
        }), 201  # 201 = Created
        
    except Exception as e:
        db.session.rollback()  # Undo changes on error
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500

@products_bp.route('/<int:product_id>', methods=['PUT'])
def update_product(product_id):
    """
    PUT /api/products/123
    
    Update existing product
    """
    try:
        product = Product.query.get_or_404(product_id)
        data = request.get_json()
        
        # Update fields if provided
        if 'name' in data:
            product.name = data['name']
        if 'description' in data:
            product.description = data['description']
        if 'price' in data:
            product.price = data['price']
        if 'stock' in data:
            product.stock = data['stock']
        if 'category' in data:
            product.category = data['category']
        if 'image_url' in data:
            product.image_url = data['image_url']
        
        db.session.commit()
        
        return jsonify({
            'success': True,
            'message': 'Product updated successfully',
            'product': product.to_dict()
        }), 200
        
    except Exception as e:
        db.session.rollback()
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500

@products_bp.route('/<int:product_id>', methods=['DELETE'])
def delete_product(product_id):
    """
    DELETE /api/products/123
    
    Delete product
    """
    try:
        product = Product.query.get_or_404(product_id)
        
        db.session.delete(product)
        db.session.commit()
        
        return jsonify({
            'success': True,
            'message': 'Product deleted successfully'
        }), 200
        
    except Exception as e:
        db.session.rollback()
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500\`
            },
            {
              title: '7. API Routes - Cart Endpoints (routes/cart.py)',
              explanation: \`Cart management allows users to add/remove items before checkout. We'll handle quantity updates and calculate totals.`,
              code: `# routes/cart.py - Shopping cart endpoints
"""
Purpose: Manage shopping cart operations
Endpoints:
  GET    /cart           - View cart
  POST   /cart/add       - Add item to cart
  PUT    /cart/item/:id  - Update quantity
  DELETE /cart/item/:id  - Remove item
  DELETE /cart/clear     - Clear entire cart
"""

from flask import Blueprint, request, jsonify
from models.cart import CartItem, db
from models.product import Product

cart_bp = Blueprint('cart', __name__, url_prefix='/api/cart')

# For simplicity, we'll use a fixed user_id
# In real app, get this from authentication token
CURRENT_USER_ID = 1

@cart_bp.route('/', methods=['GET'])
def get_cart():
    """
    GET /api/cart
    
    Get all items in user's cart with total
    """
    try:
        cart_items = CartItem.query.filter_by(user_id=CURRENT_USER_ID).all()
        
        # Calculate total
        total = sum(
            float(item.product.price * item.quantity) 
            for item in cart_items
        )
        
        return jsonify({
            'success': True,
            'cart_items': [item.to_dict() for item in cart_items],
            'total': total,
            'item_count': len(cart_items)
        }), 200
        
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500

@cart_bp.route('/add', methods=['POST'])
def add_to_cart():
    """
    POST /api/cart/add
    
    Add product to cart
    Request body:
    {
        "product_id": 123,
        "quantity": 2
    }
    """
    try:
        data = request.get_json()
        
        product_id = data.get('product_id')
        quantity = data.get('quantity', 1)
        
        # Validate product exists
        product = Product.query.get_or_404(product_id)
        
        # Check stock availability
        if product.stock < quantity:
            return jsonify({
                'success': False,
                'error': f'Only {product.stock} items in stock'
            }), 400
        
        # Check if item already in cart
        cart_item = CartItem.query.filter_by(
            user_id=CURRENT_USER_ID,
            product_id=product_id
        ).first()
        
        if cart_item:
            # Update quantity if item exists
            cart_item.quantity += quantity
        else:
            # Create new cart item
            cart_item = CartItem(
                user_id=CURRENT_USER_ID,
                product_id=product_id,
                quantity=quantity
            )
            db.session.add(cart_item)
        
        db.session.commit()
        
        return jsonify({
            'success': True,
            'message': 'Item added to cart',
            'cart_item': cart_item.to_dict()
        }), 200
        
    except Exception as e:
        db.session.rollback()
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500

@cart_bp.route('/item/<int:item_id>', methods=['PUT'])
def update_cart_item(item_id):
    """
    PUT /api/cart/item/123
    
    Update item quantity
    Request body:
    {
        "quantity": 3
    }
    """
    try:
        cart_item = CartItem.query.get_or_404(item_id)
        data = request.get_json()
        
        new_quantity = data.get('quantity', 1)
        
        # Check stock
        if cart_item.product.stock < new_quantity:
            return jsonify({
                'success': False,
                'error': f'Only {cart_item.product.stock} items available'
            }), 400
        
        cart_item.quantity = new_quantity
        db.session.commit()
        
        return jsonify({
            'success': True,
            'message': 'Cart updated',
            'cart_item': cart_item.to_dict()
        }), 200
        
    except Exception as e:
        db.session.rollback()
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500

@cart_bp.route('/item/<int:item_id>', methods=['DELETE'])
def remove_cart_item(item_id):
    """
    DELETE /api/cart/item/123
    
    Remove item from cart
    """
    try:
        cart_item = CartItem.query.get_or_404(item_id)
        
        db.session.delete(cart_item)
        db.session.commit()
        
        return jsonify({
            'success': True,
            'message': 'Item removed from cart'
        }), 200
        
    except Exception as e:
        db.session.rollback()
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500\`
            },
            {
              title: '8. API Routes - Order Endpoints (routes/orders.py)',
              explanation: \`Order endpoints handle checkout - converting cart items to orders and tracking order status.`,
              code: `# routes/orders.py - Order management endpoints
"""
Purpose: Handle order creation and tracking
Endpoints:
  POST   /orders          - Create order (checkout)
  GET    /orders          - List user's orders
  GET    /orders/:id      - Get order details
  PUT    /orders/:id      - Update order status
"""

from flask import Blueprint, request, jsonify
from models.order import Order, OrderItem, db
from models.cart import CartItem
from datetime import datetime

orders_bp = Blueprint('orders', __name__, url_prefix='/api/orders')

CURRENT_USER_ID = 1

@orders_bp.route('/', methods=['POST'])
def create_order():
    """
    POST /api/orders
    
    Checkout - convert cart to order
    Request body:
    {
        "shipping_address": "123 Main St, City, State 12345"
    }
    """
    try:
        data = request.get_json()
        shipping_address = data.get('shipping_address')
        
        if not shipping_address:
            return jsonify({
                'success': False,
                'error': 'Shipping address required'
            }), 400
        
        # Get cart items
        cart_items = CartItem.query.filter_by(user_id=CURRENT_USER_ID).all()
        
        if not cart_items:
            return jsonify({
                'success': False,
                'error': 'Cart is empty'
            }), 400
        
        # Calculate total
        total = sum(
            float(item.product.price * item.quantity)
            for item in cart_items
        )
        
        # Create order
        order = Order(
            user_id=CURRENT_USER_ID,
            total_amount=total,
            shipping_address=shipping_address,
            status='pending'
        )
        db.session.add(order)
        db.session.flush()  # Get order.id without committing
        
        # Create order items from cart
        for cart_item in cart_items:
            order_item = OrderItem(
                order_id=order.id,
                product_id=cart_item.product_id,
                product_name=cart_item.product.name,
                price=cart_item.product.price,
                quantity=cart_item.quantity
            )
            db.session.add(order_item)
            
            # Update product stock
            cart_item.product.stock -= cart_item.quantity
        
        # Clear cart
        for cart_item in cart_items:
            db.session.delete(cart_item)
        
        db.session.commit()
        
        return jsonify({
            'success': True,
            'message': 'Order placed successfully',
            'order': order.to_dict()
        }), 201
        
    except Exception as e:
        db.session.rollback()
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500

@orders_bp.route('/', methods=['GET'])
def get_orders():
    """
    GET /api/orders
    
    Get all orders for current user
    """
    try:
        orders = Order.query.filter_by(user_id=CURRENT_USER_ID).order_by(
            Order.created_at.desc()
        ).all()
        
        return jsonify({
            'success': True,
            'count': len(orders),
            'orders': [order.to_dict() for order in orders]
        }), 200
        
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500

@orders_bp.route('/<int:order_id>', methods=['GET'])
def get_order(order_id):
    """
    GET /api/orders/123
    
    Get specific order details
    """
    try:
        order = Order.query.get_or_404(order_id)
        
        # Verify order belongs to user
        if order.user_id != CURRENT_USER_ID:
            return jsonify({
                'success': False,
                'error': 'Unauthorized'
            }), 403
        
        return jsonify({
            'success': True,
            'order': order.to_dict()
        }), 200
        
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500\`
            },
            {
              title: '9. Main Application (app.py)',
              explanation: \`This is where everything comes together! app.py initializes Flask, configures the database, registers routes, and starts the server.

**Flow:**
1. Import dependencies
2. Create Flask app
3. Load configuration
4. Initialize database
5. Register blueprints (route groups)
6. Create tables
7. Start server\`,
              code: \`# app.py - Main application entry point
"""
Purpose: Initialize and run the Flask application
This is what you run to start the server: python app.py
"""

from flask import Flask, jsonify
from flask_cors import CORS
from config import config
import os

# Import database instance
from models.product import db

# Import blueprints
from routes.products import products_bp
from routes.cart import cart_bp
from routes.orders import orders_bp

def create_app(config_name='development'):
    """
    Application factory pattern
    
    Why factory? Allows creating multiple app instances for testing
    
    Args:
        config_name: 'development', 'production', or 'testing'
    
    Returns:
        Configured Flask app
    """
    
    # Create Flask application
    app = Flask(__name__)
    
    # Load configuration
    app.config.from_object(config[config_name])
    
    # Enable CORS (Cross-Origin Resource Sharing)
    # Allows frontend apps (React, Vue) to call this API
    CORS(app, resources={
        r"/api/*": {
            "origins": "*",  # In production, specify exact domains
            "methods": ["GET", "POST", "PUT", "DELETE"],
            "allow_headers": ["Content-Type"]
        }
    })
    
    # Initialize database with app
    db.init_app(app)
    
    # Register blueprints (route groups)
    app.register_blueprint(products_bp)
    app.register_blueprint(cart_bp)
    app.register_blueprint(orders_bp)
    
    # Root endpoint - API info
    @app.route('/')
    def index():
        """
        GET /
        Returns API information
        """
        return jsonify({
            'message': 'E-commerce API',
            'version': '1.0',
            'endpoints': {
                'products': '/api/products',
                'cart': '/api/cart',
                'orders': '/api/orders'
            }
        })
    
    # Error handlers
    @app.errorhandler(404)
    def not_found(error):
        """Handle 404 errors"""
        return jsonify({
            'success': False,
            'error': 'Endpoint not found'
        }), 404
    
    @app.errorhandler(500)
    def server_error(error):
        """Handle 500 errors"""
        return jsonify({
            'success': False,
            'error': 'Internal server error'
        }), 500
    
    # Create database tables
    with app.app_context():
        db.create_all()
        print("Database tables created!")
    
    return app

if __name__ == '__main__':
    """
    Run application
    
    Only runs if you execute this file directly:
    python app.py
    
    Not when imported as module
    """
    
    # Get environment from env variable (default: development)
    env = os.environ.get('FLASK_ENV', 'development')
    app = create_app(env)
    
    # Start server
    # debug=True enables auto-reload and detailed errors
    app.run(
        host='0.0.0.0',  # Listen on all network interfaces
        port=5000,        # Port number
        debug=True        # Enable debug mode
    )
    
    print("Server running on http://localhost:5000")`
            },
            {
              title: '10. Testing Your API',
              explanation: `Learn how to test your API using curl (command line) or Postman (GUI tool). Testing ensures your endpoints work correctly.

**Testing workflow:**
1. Start the server
2. Send requests to endpoints
3. Verify responses
4. Check database changes`,
              code: `# Testing the E-commerce API

# ============================================
# STEP 1: Start the server
# ============================================
# In terminal:
python app.py

# You should see:
# * Running on http://127.0.0.1:5000
# Database tables created!


# ============================================
# STEP 2: Test with curl (command line)
# ============================================

# Test 1: Get API info
curl http://localhost:5000/

# Test 2: Create a product
curl -X POST http://localhost:5000/api/products \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "Gaming Laptop",
    "description": "High-performance laptop for gaming",
    "price": 1299.99,
    "stock": 5,
    "category": "Electronics",
    "image_url": "https://example.com/laptop.jpg"
  }'

# Test 3: Get all products
curl http://localhost:5000/api/products

# Test 4: Get product by ID
curl http://localhost:5000/api/products/1

# Test 5: Add to cart
curl -X POST http://localhost:5000/api/cart/add \\
  -H "Content-Type: application/json" \\
  -d '{
    "product_id": 1,
    "quantity": 2
  }'

# Test 6: View cart
curl http://localhost:5000/api/cart

# Test 7: Create order
curl -X POST http://localhost:5000/api/orders \\
  -H "Content-Type: application/json" \\
  -d '{
    "shipping_address": "123 Main St, New York, NY 10001"
  }'

# Test 8: View orders
curl http://localhost:5000/api/orders


# ============================================
# STEP 3: Using Python requests library
# ============================================

import requests

BASE_URL = "http://localhost:5000/api"

# Create product
response = requests.post(f"{BASE_URL}/products", json={
    "name": "Wireless Mouse",
    "price": 29.99,
    "stock": 50,
    "category": "Accessories"
})
print(response.json())

# Get all products
response = requests.get(f"{BASE_URL}/products")
products = response.json()['products']
print(f"Found {len(products)} products")

# Add to cart
response = requests.post(f"{BASE_URL}/cart/add", json={
    "product_id": 1,
    "quantity": 1
})
print(response.json())


# ============================================
# STEP 4: Common HTTP Status Codes
# ============================================

# 200 - OK (Success)
# 201 - Created (New resource created)
# 400 - Bad Request (Invalid data)
# 404 - Not Found (Resource doesn't exist)
# 500 - Server Error (Something went wrong)


# ============================================
# STEP 5: Debugging Tips
# ============================================

# Check if server is running:
curl http://localhost:5000/

# View database file (SQLite):
sqlite3 ecommerce.db
# Then in SQLite:
# .tables              - List all tables
# SELECT * FROM products;  - View products
# .exit                - Exit SQLite

# Enable Flask debug mode (shows detailed errors):
# Already enabled in app.py with debug=True

# Check logs in terminal where server is running`
            }
          ],

          useCases: [
            {
              title: 'Online Store Backend',
              description: 'Power e-commerce websites with product catalogs, shopping carts, and order management',
              example: 'Shopify, WooCommerce, Amazon clone'
            },
            {
              title: 'Mobile App API',
              description: 'Provide backend services for iOS/Android shopping apps',
              example: 'React Native or Flutter e-commerce apps'
            },
            {
              title: 'Inventory Management',
              description: 'Track product stock levels, sales, and restocking needs',
              example: 'Warehouse management systems'
            },
            {
              title: 'Marketplace Platform',
              description: 'Multi-vendor platform where sellers manage their own products',
              example: 'Etsy, eBay-style marketplaces'
            }
          ]
        },
        quiz: [
          {
            question: 'What is the purpose of a Blueprint in Flask?',
            options: [
              'To create database tables',
              'To organize routes into logical groups',
              'To validate incoming data',
              'To handle authentication'
            ],
            correctAnswer: 1,
            explanation: 'Blueprints help organize Flask applications by grouping related routes together. For example, all product routes in one blueprint, all cart routes in another.'
          },
          {
            question: 'Why should you use db.session.rollback() in exception handlers?',
            options: [
              'To improve performance',
              'To undo database changes when errors occur',
              'To close database connections',
              'To log errors'
            ],
            correctAnswer: 1,
            explanation: 'rollback() undoes any uncommitted database changes, preventing partial or corrupted data from being saved when an error occurs.'
          },
          {
            question: 'What does the relationship() function in SQLAlchemy do?',
            options: [
              'Creates a foreign key column',
              'Defines a link between two models for easy data access',
              'Validates data relationships',
              'Joins two tables in a query'
            ],
            correctAnswer: 1,
            explanation: 'relationship() creates a convenient way to access related data. For example, cart_item.product automatically fetches the associated product without writing SQL joins.'
          },
          {
            question: 'What HTTP status code should you return when a resource is successfully created?',
            options: ['200 OK', '201 Created', '204 No Content', '400 Bad Request'],
            correctAnswer: 1,
            explanation: '201 Created indicates a new resource was successfully created. 200 is for general success, but 201 is more specific and semantically correct.'
          },
          {
            question: 'Why do we store product_name and price in OrderItem instead of just product_id?',
            options: [
              'To save database space',
              'To improve query performance',
              'To preserve order details even if product changes or is deleted',
              'To reduce foreign key constraints'
            ],
            correctAnswer: 2,
            explanation: 'Storing a snapshot of product details ensures order history remains accurate even if the product is later updated or deleted. Prices might change, but orders should reflect the price at purchase time.'
          }
        ]
      },
      {
        id: 'mini-project-data-analytics-dashboard',
        title: 'Mini Project: Data Analytics Dashboard',
        description: 'Build an interactive data analysis dashboard with Pandas and Streamlit for visualizing and analyzing CSV/Excel data',
        difficulty: 'Intermediate',
        estimatedTime: 75,
        content: {
          overview: `In this beginner-friendly project, you'll build an interactive web dashboard that analyzes and visualizes data - no HTML/CSS/JavaScript needed! We'll use Pandas (for data manipulation) and Streamlit (to create the web interface).

**What You'll Learn:**
• How to read and process CSV/Excel files with Pandas
• Data cleaning techniques (handling missing values, duplicates, wrong formats)
• Statistical analysis (mean, median, correlations, trends)
• Data visualization with charts and graphs (line, bar, pie, scatter plots)
• Creating interactive web apps with Streamlit (without knowing web development!)
• Filtering and searching large datasets
• Exporting processed data and reports

**Real-World Applications:**
• Sales analytics dashboards (track revenue, top products, customer trends)
• HR analytics (employee performance, turnover analysis)
• Marketing analytics (campaign performance, ROI tracking)
• Financial analysis (expense tracking, budget monitoring)
• Student performance analysis
• E-commerce analytics (order trends, inventory insights)

**What Makes This Powerful:**
Think of Excel, but automated and interactive! Instead of manually creating charts in Excel, you write Python code once, and it automatically updates when data changes.

**Prerequisites:**
• Basic Python (loops, functions, lists, dictionaries)
• Understanding of CSV files (tables with rows and columns)
• No math/statistics background needed - we'll explain everything!`,

          keyPoints: [
            'Master Pandas DataFrames - Excel-like tables but in Python code',
            'Learn data cleaning - the most time-consuming but crucial step in data analysis',
            'Understand exploratory data analysis (EDA) - discovering patterns in data',
            'Create beautiful visualizations with Matplotlib/Plotly',
            'Build interactive web apps with Streamlit - zero web dev knowledge required',
            'Handle real messy data - missing values, inconsistent formats, outliers',
            'Calculate key metrics - averages, totals, percentages, growth rates',
            'Filter and group data - like Excel pivot tables but in code',
            'Export results to CSV, Excel, or PDF reports'
          ],

          dos: [
            'Always check for missing/null values before analysis',
            'Visualize data before diving into complex analysis',
            'Use descriptive column names when loading data',
            'Cache expensive computations in Streamlit (@st.cache_data)',
            'Validate data types (dates as dates, numbers as numbers)',
            'Add user-friendly error messages for bad data',
            'Document your data transformations with comments',
            'Start with simple visualizations, then enhance them',
            'Test with small sample data first, then scale up'
          ],

          donts: [
            "Don't load massive files without chunking or sampling",
            "Don't skip data exploration - always look at your data first!",
            "Don't ignore outliers without investigating them",
            "Don't use complex visualizations when simple ones work better",
            "Don't forget to handle edge cases (empty files, single row data)",
            "Don't hardcode file paths - make them configurable",
            "Don't perform calculations on dirty data",
            "Don't create too many plots - it slows down the dashboard"
          ],

          bestPractices: [
            'Use df.head(), df.info(), df.describe() to understand your data first',
            'Separate data loading, cleaning, and analysis into functions',
            'Use Streamlit widgets for user input (sliders, dropdowns, date pickers)',
            'Add download buttons for filtered/processed data',
            'Use st.columns() for better layout organization',
            'Implement error handling for file uploads and parsing',
            'Add data quality checks and display warnings',
            'Use appropriate chart types for different data (line for time series, bar for categories)',
            'Add tooltips and labels to make charts self-explanatory',
            'Keep your dashboard responsive with progress indicators'
          ],

          codeExamples: [
            {
              title: '1. Project Structure & Dependencies',
              explanation: `Let's set up a data analytics project. We'll organize files logically and understand each component's role.

**Project Structure:**
\`\`\`
sales-analytics-dashboard/
│
├── app.py                    # Main Streamlit application (the dashboard)
├── requirements.txt          # Python packages needed
├── data_processor.py         # Data cleaning and transformation functions
├── visualizations.py         # Chart creation functions
├── utils.py                  # Helper functions (file upload, export, etc.)
├── config.py                 # Configuration settings
│
├── data/                     # Sample data folder
│   ├── sample_sales.csv      # Example sales data
│   └── README.md             # Data description
│
├── exports/                  # Saved reports and processed data
│   └── .gitkeep              # Keep folder in git
│
└── .streamlit/
    └── config.toml           # Streamlit theme customization
\`\`\`

**File Purposes:**
• **app.py**: Main entry point - the dashboard UI and user interactions
• **data_processor.py**: All data cleaning, transformation logic (reusable functions)
• **visualizations.py**: Chart creation functions (keeps app.py clean)
• **utils.py**: Helper functions like file upload handling, data export
• **config.py**: Settings like column mappings, date formats, default values

**Why this structure?**
• Each file has ONE responsibility (Single Responsibility Principle)
• Easy to test individual components
• Reusable code - use data_processor in other projects
• Team members can work on different files simultaneously`,
              code: `# requirements.txt - Install with: pip install -r requirements.txt

# Core data analysis libraries
pandas==2.1.0               # Data manipulation - THE library for tabular data
numpy==1.24.0               # Numerical operations - powers Pandas under the hood

# Visualization libraries
matplotlib==3.8.0           # Basic plotting - industry standard
seaborn==0.12.0            # Beautiful statistical plots - built on matplotlib
plotly==5.17.0             # Interactive charts - zoom, hover, click features

# Web framework
streamlit==1.28.0          # Build web apps with Python - no HTML/CSS needed!

# File handling
openpyxl==3.1.0            # Read/write Excel files (.xlsx)
xlrd==2.0.1                # Read old Excel files (.xls)

# PDF generation (optional)
fpdf==1.7.2                # Create PDF reports

# Data validation
pandas-profiling==3.6.0    # Automatic data quality reports

# Utilities
python-dateutil==2.8.2     # Advanced date parsing
pytz==2023.3               # Timezone handling


# ============================================
# Installation Instructions
# ============================================

# Step 1: Create virtual environment (isolate this project)
python -m venv venv

# Step 2: Activate virtual environment
# On Windows:
venv\\Scripts\\activate
# On Mac/Linux:
source venv/bin/activate

# Step 3: Install all packages
pip install -r requirements.txt

# Step 4: Verify installation
python -c "import pandas; import streamlit; print('All packages installed!')"

# Step 5: Run the dashboard
streamlit run app.py`
            },
            {
              title: '2. Configuration File (config.py)',
              explanation: `The config file centralizes all settings. Think of it as your dashboard's control panel - change settings here instead of hunting through code.

**Why configuration files?**
• Change behavior without modifying code
• Easy to switch between different datasets
• Share settings across multiple files
• Separate environment-specific settings (dev vs production)`,
              code: `# config.py - Dashboard configuration settings
"""
Purpose: Centralize all configuration in one place
Why: Makes it easy to customize dashboard without changing code
"""

from datetime import datetime
import os

class Config:
    """Main configuration class"""
    
    # ==========================================
    # File Upload Settings
    # ==========================================
    
    # Maximum file size (in MB)
    MAX_FILE_SIZE_MB = 200
    
    # Allowed file formats
    ALLOWED_EXTENSIONS = ['csv', 'xlsx', 'xls']
    
    # Default data folder
    DATA_FOLDER = 'data'
    EXPORT_FOLDER = 'exports'
    
    # ==========================================
    # Data Processing Settings
    # ==========================================
    
    # How to handle missing values
    # Options: 'drop', 'fill_mean', 'fill_median', 'fill_zero', 'fill_forward'
    MISSING_VALUE_STRATEGY = 'fill_mean'
    
    # Columns that should be treated as dates
    # Auto-detect these column names as dates
    DATE_COLUMNS = ['date', 'Date', 'DATE', 'order_date', 'created_at', 'timestamp']
    
    # Date formats to try when parsing
    DATE_FORMATS = ['%Y-%m-%d', '%d/%m/%Y', '%m/%d/%Y', '%Y-%m-%d %H:%M:%S']
    
    # Columns that should be treated as categories
    # Categories = limited set of values (like "Male/Female", "Product Categories")
    CATEGORY_THRESHOLD = 10  # If unique values < 10, treat as category
    
    # ==========================================
    # Visualization Settings
    # ==========================================
    
    # Default chart colors (professional color palette)
    COLOR_PALETTE = [
        '#1f77b4',  # Blue
        '#ff7f0e',  # Orange
        '#2ca02c',  # Green
        '#d62728',  # Red
        '#9467bd',  # Purple
        '#8c564b',  # Brown
        '#e377c2',  # Pink
        '#7f7f7f',  # Gray
        '#bcbd22',  # Olive
        '#17becf'   # Cyan
    ]
    
    # Chart dimensions
    CHART_HEIGHT = 400
    CHART_WIDTH = 800
    
    # Font sizes
    TITLE_FONT_SIZE = 16
    LABEL_FONT_SIZE = 12
    
    # ==========================================
    # Dashboard UI Settings
    # ==========================================
    
    # Page configuration
    PAGE_TITLE = "Sales Analytics Dashboard"
    PAGE_ICON = "📊"
    LAYOUT = "wide"  # Use full width
    
    # Sidebar defaults
    SIDEBAR_STATE = "expanded"  # Start with sidebar open
    
    # ==========================================
    # Statistical Settings
    # ==========================================
    
    # Outlier detection threshold (IQR method)
    # Values beyond Q1 - (1.5 * IQR) or Q3 + (1.5 * IQR) are outliers
    OUTLIER_THRESHOLD = 1.5
    
    # Correlation threshold for strong relationships
    STRONG_CORRELATION = 0.7
    
    # ==========================================
    # Sample Data Columns
    # (Customize for your dataset)
    # ==========================================
    
    # Expected columns in sales data
    SALES_COLUMNS = {
        'date': 'Order Date',
        'product': 'Product Name',
        'category': 'Category',
        'quantity': 'Quantity',
        'price': 'Unit Price',
        'revenue': 'Total Revenue',
        'customer': 'Customer Name',
        'region': 'Region'
    }
    
    # ==========================================
    # Export Settings
    # ==========================================
    
    # Export filename pattern
    EXPORT_FILENAME_PATTERN = "analytics_report_{timestamp}.{ext}"
    
    # Default export format
    DEFAULT_EXPORT_FORMAT = 'csv'
    
    @staticmethod
    def get_export_filename(extension='csv'):
        """
        Generate timestamped export filename
        
        Example: analytics_report_20231118_143022.csv
        """
        timestamp = datetime.now().strftime('%Y%m%d_%H%M%S')
        return Config.EXPORT_FILENAME_PATTERN.format(
            timestamp=timestamp,
            ext=extension
        )
    
    @staticmethod
    def ensure_folders_exist():
        """Create data and export folders if they don't exist"""
        os.makedirs(Config.DATA_FOLDER, exist_ok=True)
        os.makedirs(Config.EXPORT_FOLDER, exist_ok=True)


# Create folders on import
Config.ensure_folders_exist()`
            },
            {
              title: '3. Data Processing Functions (data_processor.py)',
              explanation: `This file contains all data cleaning and transformation logic. Think of it as your data kitchen - raw data goes in, clean data comes out!

**Common Data Issues:**
• Missing values (NaN, None, empty cells)
• Wrong data types (dates as strings, numbers as text)
• Duplicates (same row repeated)
• Outliers (values way too high or low)
• Inconsistent formatting (different date formats, capitalization)

**Our cleaning pipeline:**
1. Load data
2. Detect data types
3. Handle missing values
4. Remove duplicates
5. Fix data types
6. Detect outliers
7. Create calculated fields`,
              code: `# data_processor.py - Data cleaning and transformation
"""
Purpose: Clean, transform, and prepare data for analysis
Why: Real data is messy - this makes it analysis-ready
"""

import pandas as pd
import numpy as np
from datetime import datetime
from config import Config

class DataProcessor:
    """Handles all data processing operations"""
    
    def __init__(self):
        self.df = None
        self.original_df = None
        self.cleaning_log = []
    
    def load_data(self, file_path, file_type='csv'):
        """
        Load data from CSV or Excel file
        
        Args:
            file_path: Path to data file
            file_type: 'csv', 'xlsx', or 'xls'
        
        Returns:
            pandas DataFrame
        """
        try:
            if file_type == 'csv':
                # Try different encodings (common issue with CSV files)
                try:
                    self.df = pd.read_csv(file_path, encoding='utf-8')
                except UnicodeDecodeError:
                    self.df = pd.read_csv(file_path, encoding='latin-1')
                    
            elif file_type in ['xlsx', 'xls']:
                self.df = pd.read_excel(file_path)
            
            # Keep copy of original data
            self.original_df = self.df.copy()
            
            self.log_action(f"Loaded {len(self.df)} rows, {len(self.df.columns)} columns")
            return self.df
            
        except Exception as e:
            raise Exception(f"Error loading file: {str(e)}")
    
    def get_data_summary(self):
        """
        Get overview of dataset
        
        Returns:
            Dictionary with data statistics
        """
        if self.df is None:
            return None
        
        summary = {
            'rows': len(self.df),
            'columns': len(self.df.columns),
            'memory_usage': f"{self.df.memory_usage(deep=True).sum() / 1024**2:.2f} MB",
            'duplicates': self.df.duplicated().sum(),
            'missing_cells': self.df.isnull().sum().sum(),
            'numeric_columns': len(self.df.select_dtypes(include=[np.number]).columns),
            'categorical_columns': len(self.df.select_dtypes(include=['object']).columns),
            'date_columns': len(self.df.select_dtypes(include=['datetime64']).columns)
        }
        
        return summary
    
    def detect_column_types(self):
        """
        Automatically detect and convert column types
        
        What it does:
        • Converts date strings to datetime
        • Converts numeric strings to numbers
        • Identifies categorical columns
        """
        for col in self.df.columns:
            # Try to convert to datetime
            if any(date_word in col.lower() for date_word in Config.DATE_COLUMNS):
                try:
                    self.df[col] = pd.to_datetime(self.df[col])
                    self.log_action(f"Converted '{col}' to datetime")
                except:
                    pass
            
            # Try to convert to numeric
            if self.df[col].dtype == 'object':
                try:
                    self.df[col] = pd.to_numeric(self.df[col])
                    self.log_action(f"Converted '{col}' to numeric")
                except:
                    # Check if should be category
                    unique_count = self.df[col].nunique()
                    if unique_count < Config.CATEGORY_THRESHOLD:
                        self.df[col] = self.df[col].astype('category')
                        self.log_action(f"Converted '{col}' to category")
    
    def handle_missing_values(self, strategy='auto'):
        """
        Handle missing (NaN) values
        
        Strategies:
        • 'drop': Remove rows with any missing values
        • 'fill_mean': Fill numeric columns with mean
        • 'fill_median': Fill numeric columns with median
        • 'fill_mode': Fill with most common value
        • 'fill_forward': Use previous row's value
        • 'auto': Smart strategy based on column type
        """
        if self.df is None:
            return
        
        missing_before = self.df.isnull().sum().sum()
        
        if strategy == 'drop':
            self.df = self.df.dropna()
            
        elif strategy == 'fill_mean':
            numeric_cols = self.df.select_dtypes(include=[np.number]).columns
            self.df[numeric_cols] = self.df[numeric_cols].fillna(
                self.df[numeric_cols].mean()
            )
            
        elif strategy == 'fill_median':
            numeric_cols = self.df.select_dtypes(include=[np.number]).columns
            self.df[numeric_cols] = self.df[numeric_cols].fillna(
                self.df[numeric_cols].median()
            )
            
        elif strategy == 'fill_mode':
            for col in self.df.columns:
                if self.df[col].isnull().any():
                    mode_value = self.df[col].mode()[0]
                    self.df[col].fillna(mode_value, inplace=True)
        
        elif strategy == 'auto':
            # Numeric: fill with median
            numeric_cols = self.df.select_dtypes(include=[np.number]).columns
            for col in numeric_cols:
                self.df[col].fillna(self.df[col].median(), inplace=True)
            
            # Categorical: fill with mode
            cat_cols = self.df.select_dtypes(include=['object', 'category']).columns
            for col in cat_cols:
                if self.df[col].isnull().any() and len(self.df[col].mode()) > 0:
                    self.df[col].fillna(self.df[col].mode()[0], inplace=True)
        
        missing_after = self.df.isnull().sum().sum()
        self.log_action(f"Handled {missing_before - missing_after} missing values")
    
    def remove_duplicates(self):
        """Remove duplicate rows"""
        if self.df is None:
            return
        
        before = len(self.df)
        self.df = self.df.drop_duplicates()
        after = len(self.df)
        
        if before != after:
            self.log_action(f"Removed {before - after} duplicate rows")
    
    def detect_outliers(self, column):
        """
        Detect outliers using IQR (Interquartile Range) method
        
        Formula:
        • Q1 = 25th percentile
        • Q3 = 75th percentile
        • IQR = Q3 - Q1
        • Outliers: values < Q1 - 1.5*IQR or > Q3 + 1.5*IQR
        
        Returns:
            DataFrame with only outlier rows
        """
        if column not in self.df.columns:
            return None
        
        Q1 = self.df[column].quantile(0.25)
        Q3 = self.df[column].quantile(0.75)
        IQR = Q3 - Q1
        
        lower_bound = Q1 - Config.OUTLIER_THRESHOLD * IQR
        upper_bound = Q3 + Config.OUTLIER_THRESHOLD * IQR
        
        outliers = self.df[
            (self.df[column] < lower_bound) | 
            (self.df[column] > upper_bound)
        ]
        
        return outliers
    
    def create_calculated_fields(self, calculations):
        """
        Add calculated columns
        
        Args:
            calculations: Dict of {new_column_name: calculation_function}
        
        Example:
            calculations = {
                'profit': lambda df: df['revenue'] - df['cost'],
                'profit_margin': lambda df: (df['profit'] / df['revenue']) * 100
            }
        """
        for col_name, calc_func in calculations.items():
            try:
                self.df[col_name] = calc_func(self.df)
                self.log_action(f"Created calculated field: '{col_name}'")
            except Exception as e:
                self.log_action(f"Failed to create '{col_name}': {str(e)}")
    
    def log_action(self, message):
        """Log data processing actions"""
        timestamp = datetime.now().strftime('%H:%M:%S')
        self.cleaning_log.append(f"[{timestamp}] {message}")
    
    def get_cleaning_log(self):
        """Get list of all cleaning actions performed"""
        return self.cleaning_log
    
    def export_data(self, file_path, format='csv'):
        """
        Export processed data
        
        Args:
            file_path: Output file path
            format: 'csv' or 'xlsx'
        """
        if self.df is None:
            raise Exception("No data to export")
        
        if format == 'csv':
            self.df.to_csv(file_path, index=False)
        elif format == 'xlsx':
            self.df.to_excel(file_path, index=False)
        
        self.log_action(f"Exported data to {file_path}")`
            },
            {
              title: '4. Visualization Functions (visualizations.py)',
              explanation: `This file creates all charts and graphs. We'll use Plotly for interactive charts (hover, zoom, click) and Matplotlib for static charts.

**Chart Types & When to Use:**
• **Line Chart**: Trends over time (sales over months)
• **Bar Chart**: Compare categories (sales by product)
• **Pie Chart**: Show proportions (market share)
• **Scatter Plot**: Find relationships between variables
• **Histogram**: Show distribution (age groups, price ranges)
• **Box Plot**: Identify outliers and spread`,
              code: `# visualizations.py - Chart creation functions
"""
Purpose: Create beautiful, interactive visualizations
Why: Pictures worth 1000 words - charts reveal patterns instantly
"""

import plotly.express as px
import plotly.graph_objects as go
import matplotlib.pyplot as plt
import seaborn as sns
from config import Config

class Visualizer:
    """Handles all visualization creation"""
    
    def __init__(self):
        # Set default theme
        sns.set_theme(style="whitegrid")
        plt.rcParams['figure.figsize'] = (10, 6)
    
    def create_line_chart(self, df, x_column, y_column, title, color=None):
        """
        Create interactive line chart
        
        Best for: Time series data, trends over time
        
        Args:
            df: pandas DataFrame
            x_column: Column for X-axis (usually date/time)
            y_column: Column for Y-axis (values)
            title: Chart title
            color: Column to color by (optional)
        
        Returns:
            Plotly figure object
        """
        fig = px.line(
            df,
            x=x_column,
            y=y_column,
            title=title,
            color=color,
            markers=True,  # Show data points
            color_discrete_sequence=Config.COLOR_PALETTE
        )
        
        # Customize layout
        fig.update_layout(
            title_font_size=Config.TITLE_FONT_SIZE,
            hovermode='x unified',  # Show all values at same X
            height=Config.CHART_HEIGHT
        )
        
        # Customize axes
        fig.update_xaxis(title_font_size=Config.LABEL_FONT_SIZE)
        fig.update_yaxis(title_font_size=Config.LABEL_FONT_SIZE)
        
        return fig
    
    def create_bar_chart(self, df, x_column, y_column, title, orientation='v'):
        """
        Create bar chart
        
        Best for: Comparing categories
        
        Args:
            orientation: 'v' for vertical, 'h' for horizontal
        """
        fig = px.bar(
            df,
            x=x_column if orientation == 'v' else y_column,
            y=y_column if orientation == 'v' else x_column,
            title=title,
            color=y_column if orientation == 'v' else x_column,
            color_discrete_sequence=Config.COLOR_PALETTE,
            orientation=orientation
        )
        
        fig.update_layout(
            title_font_size=Config.TITLE_FONT_SIZE,
            height=Config.CHART_HEIGHT,
            showlegend=False
        )
        
        return fig
    
    def create_pie_chart(self, df, values_column, names_column, title):
        """
        Create pie chart
        
        Best for: Showing proportions/percentages
        Max 6-8 categories (more = hard to read)
        """
        fig = px.pie(
            df,
            values=values_column,
            names=names_column,
            title=title,
            color_discrete_sequence=Config.COLOR_PALETTE,
            hole=0.3  # Makes it a donut chart (easier to read)
        )
        
        fig.update_traces(
            textposition='inside',
            textinfo='percent+label'
        )
        
        fig.update_layout(
            title_font_size=Config.TITLE_FONT_SIZE,
            height=Config.CHART_HEIGHT
        )
        
        return fig
    
    def create_scatter_plot(self, df, x_column, y_column, title, color=None, size=None):
        """
        Create scatter plot
        
        Best for: Finding relationships between two variables
        Example: Price vs Sales, Age vs Income
        """
        fig = px.scatter(
            df,
            x=x_column,
            y=y_column,
            title=title,
            color=color,
            size=size,
            color_discrete_sequence=Config.COLOR_PALETTE,
            trendline="ols"  # Add trend line
        )
        
        fig.update_layout(
            title_font_size=Config.TITLE_FONT_SIZE,
            height=Config.CHART_HEIGHT
        )
        
        return fig
    
    def create_histogram(self, df, column, title, bins=30):
        """
        Create histogram
        
        Best for: Showing distribution of values
        Example: Age distribution, price ranges
        """
        fig = px.histogram(
            df,
            x=column,
            title=title,
            nbins=bins,
            color_discrete_sequence=Config.COLOR_PALETTE
        )
        
        fig.update_layout(
            title_font_size=Config.TITLE_FONT_SIZE,
            height=Config.CHART_HEIGHT,
            bargap=0.1
        )
        
        return fig
    
    def create_box_plot(self, df, y_column, title, x_column=None):
        """
        Create box plot
        
        Best for: Identifying outliers and data spread
        Shows: min, Q1, median, Q3, max, outliers
        """
        fig = px.box(
            df,
            x=x_column,
            y=y_column,
            title=title,
            color=x_column,
            color_discrete_sequence=Config.COLOR_PALETTE
        )
        
        fig.update_layout(
            title_font_size=Config.TITLE_FONT_SIZE,
            height=Config.CHART_HEIGHT
        )
        
        return fig
    
    def create_heatmap(self, df, title="Correlation Heatmap"):
        """
        Create correlation heatmap
        
        Best for: Finding relationships between multiple numeric variables
        Values range from -1 to 1:
        • 1 = perfect positive correlation
        • -1 = perfect negative correlation
        • 0 = no correlation
        """
        # Calculate correlations
        numeric_df = df.select_dtypes(include=['number'])
        corr_matrix = numeric_df.corr()
        
        fig = go.Figure(data=go.Heatmap(
            z=corr_matrix.values,
            x=corr_matrix.columns,
            y=corr_matrix.columns,
            colorscale='RdBu',
            zmid=0,
            text=corr_matrix.values,
            texttemplate='%{text:.2f}',
            textfont={"size": 10}
        ))
        
        fig.update_layout(
            title=title,
            title_font_size=Config.TITLE_FONT_SIZE,
            height=Config.CHART_HEIGHT,
            width=Config.CHART_HEIGHT
        )
        
        return fig
    
    def create_time_series_decomposition(self, df, date_column, value_column):
        """
        Decompose time series into trend, seasonal, residual
        
        Best for: Understanding time patterns
        Requires: Regular time intervals (daily, monthly, etc.)
        """
        from statsmodels.tsa.seasonal import seasonal_decompose
        
        # Set date as index
        ts_df = df.set_index(date_column)[value_column]
        
        # Decompose
        decomposition = seasonal_decompose(
            ts_df,
            model='additive',  # or 'multiplicative'
            period=12  # Adjust based on your data frequency
        )
        
        # Create subplot
        fig, axes = plt.subplots(4, 1, figsize=(12, 10))
        
        decomposition.observed.plot(ax=axes[0], title='Original')
        decomposition.trend.plot(ax=axes[1], title='Trend')
        decomposition.seasonal.plot(ax=axes[2], title='Seasonal')
        decomposition.resid.plot(ax=axes[3], title='Residual')
        
        plt.tight_layout()
        return fig`
            },
            {
              title: '5. Main Dashboard Application (app.py) - Part 1',
              explanation: `Now we build the actual web dashboard! Streamlit makes this incredibly easy - you write Python, it creates the web interface automatically.

**Streamlit Basics:**
• st.title() → Creates page title
• st.write() → Display anything (text, dataframes, charts)
• st.sidebar → Add controls to sidebar
• st.file_uploader() → File upload button
• st.selectbox() → Dropdown menu
• st.slider() → Number slider
• st.button() → Clickable button
• st.dataframe() → Interactive table`,
              code: `# app.py - Main Streamlit dashboard (Part 1: Setup & Data Loading)
"""
Purpose: Interactive web dashboard for data analytics
Run with: streamlit run app.py
"""

import streamlit as st
import pandas as pd
import numpy as np
from data_processor import DataProcessor
from visualizations import Visualizer
from config import Config
import io

# ==========================================
# Page Configuration
# ==========================================

st.set_page_config(
    page_title=Config.PAGE_TITLE,
    page_icon=Config.PAGE_ICON,
    layout=Config.LAYOUT,
    initial_sidebar_state=Config.SIDEBAR_STATE
)

# ==========================================
# Initialize Session State
# ==========================================
# Session state persists data across reruns (when user interacts)

if 'data_processor' not in st.session_state:
    st.session_state.data_processor = DataProcessor()

if 'visualizer' not in st.session_state:
    st.session_state.visualizer = Visualizer()

if 'df' not in st.session_state:
    st.session_state.df = None

# ==========================================
# Helper Functions
# ==========================================

@st.cache_data
def load_data_cached(file_bytes, filename):
    """
    Load and cache data (prevents reloading on every interaction)
    
    @st.cache_data decorator = Streamlit magic!
    Stores result and returns cached version if inputs haven't changed
    """
    processor = DataProcessor()
    
    # Determine file type from extension
    file_type = filename.split('.')[-1].lower()
    
    # Load from bytes (uploaded file)
    if file_type == 'csv':
        df = pd.read_csv(io.BytesIO(file_bytes))
    else:
        df = pd.read_excel(io.BytesIO(file_bytes))
    
    processor.df = df
    processor.original_df = df.copy()
    
    return processor

def display_data_summary(df):
    """Display dataset overview"""
    st.subheader("📊 Dataset Overview")
    
    # Create columns for metrics
    col1, col2, col3, col4 = st.columns(4)
    
    with col1:
        st.metric("Total Rows", f"{len(df):,}")
    
    with col2:
        st.metric("Total Columns", len(df.columns))
    
    with col3:
        missing = df.isnull().sum().sum()
        st.metric("Missing Values", f"{missing:,}")
    
    with col4:
        duplicates = df.duplicated().sum()
        st.metric("Duplicate Rows", duplicates)

# ==========================================
# Main Dashboard
# ==========================================

# Title
st.title("📊 Data Analytics Dashboard")
st.markdown("Upload your data, clean it, analyze it, visualize it - all in one place!")

# Sidebar
st.sidebar.title("⚙️ Controls")
st.sidebar.markdown("---")

# ==========================================
# Step 1: Data Upload
# ==========================================

st.sidebar.header("1️⃣ Upload Data")

uploaded_file = st.sidebar.file_uploader(
    "Choose a file",
    type=Config.ALLOWED_EXTENSIONS,
    help=f"Supported formats: {', '.join(Config.ALLOWED_EXTENSIONS)}"
)

if uploaded_file is not None:
    try:
        # Load data
        with st.spinner("Loading data..."):
            file_bytes = uploaded_file.read()
            st.session_state.data_processor = load_data_cached(
                file_bytes,
                uploaded_file.name
            )
            st.session_state.df = st.session_state.data_processor.df
        
        st.sidebar.success(f"✅ Loaded: {uploaded_file.name}")
        
        # Display data overview
        display_data_summary(st.session_state.df)
        
        # Show raw data (first 10 rows)
        with st.expander("👀 Preview Data (First 10 Rows)", expanded=False):
            st.dataframe(st.session_state.df.head(10))
        
        # Show data types
        with st.expander("🔍 Column Information"):
            col_info = pd.DataFrame({
                'Column': st.session_state.df.columns,
                'Type': st.session_state.df.dtypes,
                'Non-Null Count': st.session_state.df.count(),
                'Null Count': st.session_state.df.isnull().sum(),
                'Unique Values': st.session_state.df.nunique()
            })
            st.dataframe(col_info)
        
    except Exception as e:
        st.error(f"Error loading file: {str(e)}")
        st.stop()

else:
    # Show sample data option
    st.info("👆 Upload a CSV or Excel file to get started!")
    
    if st.button("📥 Load Sample Sales Data"):
        # Create sample data
        np.random.seed(42)
        dates = pd.date_range('2023-01-01', periods=365, freq='D')
        sample_df = pd.DataFrame({
            'Date': dates,
            'Product': np.random.choice(['Laptop', 'Mouse', 'Keyboard', 'Monitor'], 365),
            'Category': np.random.choice(['Electronics', 'Accessories'], 365),
            'Quantity': np.random.randint(1, 10, 365),
            'Unit_Price': np.random.choice([999, 25, 75, 350], 365),
            'Region': np.random.choice(['North', 'South', 'East', 'West'], 365)
        })
        sample_df['Revenue'] = sample_df['Quantity'] * sample_df['Unit_Price']
        
        st.session_state.df = sample_df
        st.session_state.data_processor.df = sample_df
        st.session_state.data_processor.original_df = sample_df.copy()
        
        st.success("✅ Sample data loaded!")
        st.rerun()
    
    st.stop()`
            },
            {
              title: '6. Main Dashboard Application (app.py) - Part 2',
              explanation: `Continue building the dashboard with data cleaning, filtering, and analysis features.`,
              code: `# app.py - Part 2: Data Cleaning & Analysis

# ==========================================
# Step 2: Data Cleaning
# ==========================================

if st.session_state.df is not None:
    st.sidebar.markdown("---")
    st.sidebar.header("2️⃣ Data Cleaning")
    
    # Missing value handling
    if st.session_state.df.isnull().sum().sum() > 0:
        st.sidebar.subheader("Handle Missing Values")
        
        missing_strategy = st.sidebar.selectbox(
            "Strategy",
            ['None', 'Drop rows', 'Fill with mean', 'Fill with median', 'Auto'],
            help="Choose how to handle missing values"
        )
        
        if missing_strategy != 'None':
            if st.sidebar.button("Apply Cleaning"):
                strategy_map = {
                    'Drop rows': 'drop',
                    'Fill with mean': 'fill_mean',
                    'Fill with median': 'fill_median',
                    'Auto': 'auto'
                }
                
                st.session_state.data_processor.handle_missing_values(
                    strategy_map[missing_strategy]
                )
                st.session_state.df = st.session_state.data_processor.df
                st.sidebar.success("✅ Data cleaned!")
                st.rerun()
    
    # Remove duplicates
    duplicates = st.session_state.df.duplicated().sum()
    if duplicates > 0:
        if st.sidebar.button(f"Remove {duplicates} Duplicates"):
            st.session_state.data_processor.df = st.session_state.df
            st.session_state.data_processor.remove_duplicates()
            st.session_state.df = st.session_state.data_processor.df
            st.sidebar.success("✅ Duplicates removed!")
            st.rerun()
    
    # ==========================================
    # Step 3: Data Filtering
    # ==========================================
    
    st.sidebar.markdown("---")
    st.sidebar.header("3️⃣ Filter Data")
    
    # Date range filter (if date column exists)
    date_columns = st.session_state.df.select_dtypes(include=['datetime64']).columns.tolist()
    
    if len(date_columns) > 0:
        date_col = st.sidebar.selectbox("Date Column", date_columns)
        
        min_date = st.session_state.df[date_col].min()
        max_date = st.session_state.df[date_col].max()
        
        date_range = st.sidebar.date_input(
            "Date Range",
            value=(min_date, max_date),
            min_value=min_date,
            max_value=max_date
        )
        
        if len(date_range) == 2:
            mask = (st.session_state.df[date_col] >= pd.to_datetime(date_range[0])) & \
                   (st.session_state.df[date_col] <= pd.to_datetime(date_range[1]))
            filtered_df = st.session_state.df[mask]
        else:
            filtered_df = st.session_state.df
    else:
        filtered_df = st.session_state.df
    
    # Category filters
    categorical_columns = filtered_df.select_dtypes(include=['object', 'category']).columns.tolist()
    
    for col in categorical_columns[:3]:  # Limit to first 3 categorical columns
        unique_values = filtered_df[col].unique().tolist()
        selected_values = st.sidebar.multiselect(
            f"Filter by {col}",
            options=unique_values,
            default=unique_values
        )
        filtered_df = filtered_df[filtered_df[col].isin(selected_values)]
    
    st.sidebar.info(f"Showing {len(filtered_df)} of {len(st.session_state.df)} rows")
    
    # ==========================================
    # Step 4: Statistical Analysis
    # ==========================================
    
    st.markdown("---")
    st.header("📈 Statistical Analysis")
    
    # Create tabs for different analyses
    tab1, tab2, tab3, tab4 = st.tabs([
        "📊 Summary Statistics",
        "📉 Distributions",
        "🔗 Correlations",
        "🔍 Outliers"
    ])
    
    with tab1:
        st.subheader("Summary Statistics")
        
        numeric_cols = filtered_df.select_dtypes(include=[np.number]).columns.tolist()
        
        if len(numeric_cols) > 0:
            # Descriptive statistics
            st.dataframe(filtered_df[numeric_cols].describe())
            
            # Additional metrics
            st.subheader("Additional Metrics")
            col1, col2 = st.columns(2)
            
            selected_col = col1.selectbox("Select column", numeric_cols)
            
            col2.metric("Sum", f"{filtered_df[selected_col].sum():,.2f}")
            col2.metric("Variance", f"{filtered_df[selected_col].var():,.2f}")
            col2.metric("Std Dev", f"{filtered_df[selected_col].std():,.2f}")
            col2.metric("Range", f"{filtered_df[selected_col].max() - filtered_df[selected_col].min():,.2f}")
        else:
            st.info("No numeric columns found")
    
    with tab2:
        st.subheader("Distribution Analysis")
        
        if len(numeric_cols) > 0:
            dist_col = st.selectbox("Select column for distribution", numeric_cols, key='dist')
            
            # Histogram
            fig_hist = st.session_state.visualizer.create_histogram(
                filtered_df,
                dist_col,
                f"Distribution of {dist_col}"
            )
            st.plotly_chart(fig_hist, use_container_width=True)
            
            # Box plot
            fig_box = st.session_state.visualizer.create_box_plot(
                filtered_df,
                dist_col,
                f"Box Plot of {dist_col}"
            )
            st.plotly_chart(fig_box, use_container_width=True)
    
    with tab3:
        st.subheader("Correlation Analysis")
        
        if len(numeric_cols) >= 2:
            # Correlation heatmap
            fig_corr = st.session_state.visualizer.create_heatmap(
                filtered_df[numeric_cols],
                "Correlation Matrix"
            )
            st.plotly_chart(fig_corr, use_container_width=True)
            
            # Strong correlations
            corr_matrix = filtered_df[numeric_cols].corr()
            strong_corr = []
            
            for i in range(len(corr_matrix.columns)):
                for j in range(i+1, len(corr_matrix.columns)):
                    if abs(corr_matrix.iloc[i, j]) > Config.STRONG_CORRELATION:
                        strong_corr.append({
                            'Variable 1': corr_matrix.columns[i],
                            'Variable 2': corr_matrix.columns[j],
                            'Correlation': corr_matrix.iloc[i, j]
                        })
            
            if strong_corr:
                st.warning("⚠️ Strong Correlations Found:")
                st.dataframe(pd.DataFrame(strong_corr))
        else:
            st.info("Need at least 2 numeric columns for correlation analysis")
    
    with tab4:
        st.subheader("Outlier Detection")
        
        if len(numeric_cols) > 0:
            outlier_col = st.selectbox("Select column", numeric_cols, key='outlier')
            
            outliers = st.session_state.data_processor.detect_outliers(outlier_col)
            
            if len(outliers) > 0:
                st.warning(f"⚠️ Found {len(outliers)} outliers in '{outlier_col}'")
                st.dataframe(outliers)
                
                if st.button("Remove Outliers"):
                    st.session_state.data_processor.df = st.session_state.df[
                        ~st.session_state.df.index.isin(outliers.index)
                    ]
                    st.session_state.df = st.session_state.data_processor.df
                    st.success("✅ Outliers removed!")
                    st.rerun()
            else:
                st.success(f"✅ No outliers detected in '{outlier_col}'")
    
    # ==========================================
    # Step 5: Export Options
    # ==========================================
    
    st.markdown("---")
    st.header("💾 Export Data")
    
    col1, col2 = st.columns(2)
    
    with col1:
        csv = filtered_df.to_csv(index=False).encode('utf-8')
        st.download_button(
            label="📥 Download as CSV",
            data=csv,
            file_name=Config.get_export_filename('csv'),
            mime="text/csv"
        )
    
    with col2:
        # Excel export
        buffer = io.BytesIO()
        with pd.ExcelWriter(buffer, engine='openpyxl') as writer:
            filtered_df.to_excel(writer, index=False, sheet_name='Data')
        
        st.download_button(
            label="📥 Download as Excel",
            data=buffer.getvalue(),
            file_name=Config.get_export_filename('xlsx'),
            mime="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        )`
            },
            {
              title: '7. Main Dashboard Application (app.py) - Part 3',
              explanation: `Final part - custom visualizations and insights generation.`,
              code: `# app.py - Part 3: Custom Visualizations

if st.session_state.df is not None:
    
    # ==========================================
    # Step 6: Custom Visualizations
    # ==========================================
    
    st.markdown("---")
    st.header("📊 Custom Visualizations")
    
    viz_type = st.selectbox(
        "Select Visualization Type",
        ["Line Chart", "Bar Chart", "Pie Chart", "Scatter Plot", "Box Plot"]
    )
    
    numeric_cols = filtered_df.select_dtypes(include=[np.number]).columns.tolist()
    all_cols = filtered_df.columns.tolist()
    
    if viz_type == "Line Chart":
        col1, col2 = st.columns(2)
        x_col = col1.selectbox("X-axis", all_cols)
        y_col = col2.selectbox("Y-axis", numeric_cols)
        
        fig = st.session_state.visualizer.create_line_chart(
            filtered_df,
            x_col,
            y_col,
            f"{y_col} over {x_col}"
        )
        st.plotly_chart(fig, use_container_width=True)
    
    elif viz_type == "Bar Chart":
        col1, col2 = st.columns(2)
        x_col = col1.selectbox("Category", all_cols)
        y_col = col2.selectbox("Values", numeric_cols)
        
        # Aggregate data
        agg_df = filtered_df.groupby(x_col)[y_col].sum().reset_index()
        
        fig = st.session_state.visualizer.create_bar_chart(
            agg_df,
            x_col,
            y_col,
            f"{y_col} by {x_col}"
        )
        st.plotly_chart(fig, use_container_width=True)
    
    elif viz_type == "Pie Chart":
        col1, col2 = st.columns(2)
        names_col = col1.selectbox("Categories", all_cols)
        values_col = col2.selectbox("Values", numeric_cols)
        
        # Aggregate and get top N
        agg_df = filtered_df.groupby(names_col)[values_col].sum().reset_index()
        agg_df = agg_df.nlargest(10, values_col)  # Top 10 only
        
        fig = st.session_state.visualizer.create_pie_chart(
            agg_df,
            values_col,
            names_col,
            f"{values_col} Distribution by {names_col}"
        )
        st.plotly_chart(fig, use_container_width=True)
    
    elif viz_type == "Scatter Plot":
        col1, col2 = st.columns(2)
        x_col = col1.selectbox("X-axis", numeric_cols)
        y_col = col2.selectbox("Y-axis", [col for col in numeric_cols if col != x_col])
        
        fig = st.session_state.visualizer.create_scatter_plot(
            filtered_df,
            x_col,
            y_col,
            f"{y_col} vs {x_col}"
        )
        st.plotly_chart(fig, use_container_width=True)
    
    elif viz_type == "Box Plot":
        y_col = st.selectbox("Numeric Column", numeric_cols)
        categorical_cols = filtered_df.select_dtypes(include=['object', 'category']).columns.tolist()
        
        if categorical_cols:
            x_col = st.selectbox("Group by (optional)", ['None'] + categorical_cols)
            x_col = None if x_col == 'None' else x_col
        else:
            x_col = None
        
        fig = st.session_state.visualizer.create_box_plot(
            filtered_df,
            y_col,
            f"Distribution of {y_col}",
            x_col
        )
        st.plotly_chart(fig, use_container_width=True)
    
    # ==========================================
    # Step 7: AI Insights (Simple)
    # ==========================================
    
    st.markdown("---")
    st.header("🤖 Auto-Generated Insights")
    
    if st.button("Generate Insights"):
        with st.spinner("Analyzing data..."):
            insights = []
            
            # Insight 1: Highest/Lowest values
            for col in numeric_cols[:3]:  # First 3 numeric columns
                max_val = filtered_df[col].max()
                min_val = filtered_df[col].min()
                avg_val = filtered_df[col].mean()
                
                insights.append(f"• **{col}**: Ranges from {min_val:,.2f} to {max_val:,.2f} (avg: {avg_val:,.2f})")
            
            # Insight 2: Most common values in categorical columns
            categorical_cols = filtered_df.select_dtypes(include=['object', 'category']).columns.tolist()
            for col in categorical_cols[:2]:
                top_value = filtered_df[col].mode()[0] if len(filtered_df[col].mode()) > 0 else 'N/A'
                count = filtered_df[col].value_counts().iloc[0]
                total = len(filtered_df)
                
                insights.append(
                    f"• **{col}**: Most common is '{top_value}' ({count}/{total} = {count/total*100:.1f}%)"
                )
            
            # Insight 3: Missing data
            missing = filtered_df.isnull().sum()
            if missing.sum() > 0:
                cols_with_missing = missing[missing > 0]
                insights.append(f"• ⚠️ **Missing Data**: {len(cols_with_missing)} columns have missing values")
            
            # Display insights
            st.success("📊 Key Insights:")
            for insight in insights:
                st.markdown(insight)

    # Footer
    st.markdown("---")
    st.markdown("Built with ❤️ using Streamlit, Pandas, and Plotly")
`
            }
          ],

          useCases: [
            {
              title: 'Sales Performance Tracking',
              description: 'Monitor sales metrics, identify top products, analyze regional performance, track revenue trends',
              example: 'Monthly sales reports, product performance dashboards, sales team KPIs'
            },
            {
              title: 'Financial Analysis',
              description: 'Expense tracking, budget monitoring, profit/loss analysis, financial forecasting',
              example: 'Personal finance tracking, business expense analysis, investment portfolio monitoring'
            },
            {
              title: 'Marketing Analytics',
              description: 'Campaign performance, ROI tracking, customer segmentation, conversion analysis',
              example: 'Email campaign analytics, social media metrics, ad performance dashboards'
            },
            {
              title: 'HR & Employee Analytics',
              description: 'Headcount analysis, turnover rates, performance metrics, salary benchmarking',
              example: 'Employee performance dashboards, recruitment analytics, retention analysis'
            }
          ]
        },
        quiz: [
          {
            question: 'What is the primary purpose of the Pandas library?',
            options: [
              'Creating web interfaces',
              'Data manipulation and analysis',
              'Machine learning',
              'Image processing'
            ],
            correctAnswer: 1,
            explanation: 'Pandas is specifically designed for data manipulation and analysis, providing DataFrame structures similar to Excel spreadsheets but with programming capabilities.'
          },
          {
            question: 'What does @st.cache_data do in Streamlit?',
            options: [
              'Stores data permanently on disk',
              'Caches function results to avoid recomputation',
              'Encrypts sensitive data',
              'Compresses data for storage'
            ],
            correctAnswer: 1,
            explanation: '@st.cache_data caches function results so Streamlit does not recompute expensive operations (like loading large files) every time the user interacts with the dashboard.'
          },
          {
            question: 'What is the IQR method used for?',
            options: [
              'Calculating averages',
              'Detecting outliers in data',
              'Sorting data',
              'Merging datasets'
            ],
            correctAnswer: 1,
            explanation: 'The Interquartile Range (IQR) method identifies outliers by finding values that fall below Q1 - 1.5*IQR or above Q3 + 1.5*IQR, where Q1 and Q3 are the 25th and 75th percentiles.'
          },
          {
            question: 'Which chart type is best for showing data trends over time?',
            options: [
              'Pie chart',
              'Line chart',
              'Bar chart',
              'Scatter plot'
            ],
            correctAnswer: 1,
            explanation: 'Line charts are ideal for showing trends over time because they connect data points, making it easy to see patterns, increases, decreases, and seasonal variations.'
          },
          {
            question: 'Why should you handle missing values before analysis?',
            options: [
              'To reduce file size',
              'To improve visualization speed',
              'To prevent incorrect calculations and biased results',
              'To make the code simpler'
            ],
            correctAnswer: 2,
            explanation: 'Missing values can lead to incorrect statistical calculations, biased results, and errors in analysis. Handling them properly (by filling or removing) ensures accurate insights.'
          }
        ]
      },
      {
        id: 'mini-project-web-scraper-automation',
        title: 'Mini Project: Web Scraper & Automation Bot',
        description: 'Build an intelligent web scraper to extract data from websites and automate repetitive tasks with scheduled execution',
        difficulty: 'Intermediate',
        estimatedTime: 80,
        content: {
          overview: `In this beginner-friendly project, you'll learn to extract data from websites automatically - like having a robot that visits websites, reads information, and saves it for you!

**What You'll Learn:**
• How websites work (HTML structure, the "skeleton" of web pages)
• Web scraping basics with BeautifulSoup (parsing HTML like reading a book)
• Making HTTP requests with the requests library (visiting websites programmatically)
• Handling dynamic content with Selenium (websites that load data with JavaScript)
• Data extraction patterns (finding specific information on pages)
• Automated scheduling with APScheduler (run scripts automatically)
• Email notifications (get alerts when tasks complete)
• Error handling and retry logic (websites can be unreliable!)
• Ethical scraping practices and robots.txt

**Real-World Applications:**
• Price monitoring (track product prices on e-commerce sites)
• News aggregation (collect articles from multiple sources)
• Job listing scraper (find job postings matching your skills)
• Real estate monitoring (track new property listings)
• Stock market data collection
• Social media monitoring
• Competitor analysis
• Research data collection

**Important Ethics & Legality:**
⚠️ **Always check:**
• Website's Terms of Service (some prohibit scraping)
• robots.txt file (tells you what's allowed)
• Rate limiting (don't overwhelm servers)
• Copyright and data usage rights

**Prerequisites:**
• Basic Python (functions, loops, dictionaries)
• Understanding of HTML basics (tags like <div>, <p>, <a>)
• HTTP basics (what happens when you visit a URL)`,

          keyPoints: [
            'Understand HTML structure - tags, attributes, classes, IDs',
            'Master CSS selectors - the language for finding elements',
            'Learn web scraping libraries - BeautifulSoup for static, Selenium for dynamic',
            'Handle HTTP requests properly - headers, cookies, sessions',
            'Implement polite scraping - delays, user agents, rate limiting',
            'Parse different data formats - HTML, JSON, XML',
            'Store scraped data - CSV, JSON, databases',
            'Schedule automated tasks - cron-like scheduling in Python',
            'Send notifications - email alerts for completed tasks or errors',
            'Handle errors gracefully - retry logic, timeouts, fallbacks'
          ],

          dos: [
            'Always check robots.txt before scraping (website.com/robots.txt)',
            'Add delays between requests (time.sleep) to be respectful',
            'Use descriptive User-Agent headers (identify your bot)',
            'Handle errors with try-except blocks',
            'Save data incrementally (don\'t lose everything if it crashes)',
            'Log your scraping activities for debugging',
            'Validate extracted data before saving',
            'Use sessions to reuse connections (faster, more efficient)',
            'Test with small samples before full scraping runs'
          ],

          donts: [
            'Don\'t scrape websites that prohibit it in their Terms of Service',
            'Don\'t overwhelm servers with rapid requests (causes server strain)',
            'Don\'t ignore error responses (403, 429, 500)',
            'Don\'t scrape personal/sensitive data without permission',
            'Don\'t hardcode selectors without fallbacks (pages change!)',
            'Don\'t run scrapers without error notifications',
            'Don\'t store passwords or API keys in code',
            'Don\'t scrape data you don\'t need (respect bandwidth)',
            'Don\'t ignore rate limits or CAPTCHAs'
          ],

          bestPractices: [
            'Use CSS selectors over XPath when possible (more readable)',
            'Implement exponential backoff for retries (1s, 2s, 4s, 8s...)',
            'Rotate User-Agent strings to appear more natural',
            'Use headless browsers for JavaScript-heavy sites',
            'Cache responses during development to avoid repeated requests',
            'Validate HTML structure before parsing (check if page loaded)',
            'Use database storage for large datasets (not just files)',
            'Implement duplicate detection to avoid re-scraping',
            'Monitor scraper health with logging and alerts',
            'Document your selectors with comments (future you will thank you!)'
          ],

          codeExamples: [
            {
              title: '1. Project Structure & Setup',
              explanation: `Let's organize a professional web scraping project. Good structure makes debugging and maintenance much easier!

**Project Structure:**
\`\`\`
web-scraper-bot/
│
├── scraper.py              # Main scraping logic
├── config.py               # Configuration settings
├── scheduler.py            # Automated task scheduling
├── notifier.py             # Email/SMS notifications
├── database.py             # Data storage functions
├── utils.py                # Helper functions (retry, delays, etc.)
├── requirements.txt        # Python dependencies
├── .env                    # Environment variables (API keys, passwords)
│
├── scrapers/               # Individual scraper modules
│   ├── __init__.py
│   ├── price_scraper.py    # E-commerce price scraping
│   ├── news_scraper.py     # News article scraping
│   └── job_scraper.py      # Job listing scraping
│
├── data/                   # Scraped data storage
│   ├── raw/                # Raw HTML/JSON
│   └── processed/          # Cleaned CSV/JSON
│
└── logs/                   # Log files
    └── scraper.log         # Activity logs

\`\`\`

**File Purposes:**
• **scraper.py**: Main entry point with scraping logic
• **config.py**: All settings in one place (URLs, selectors, delays)
• **scheduler.py**: Automate scraping at specific times
• **notifier.py**: Send alerts via email when done or errors occur
• **database.py**: Save/load data from SQLite or other databases
• **utils.py**: Reusable helpers (retry logic, random delays, etc.)`,
              code: `# requirements.txt - Install with: pip install -r requirements.txt

# HTTP & Web Scraping
requests==2.31.0          # Make HTTP requests - like a browser in code
beautifulsoup4==4.12.0    # Parse HTML - find elements in web pages
lxml==4.9.0               # Fast HTML parser (used by BeautifulSoup)

# Advanced scraping (for JavaScript-heavy sites)
selenium==4.15.0          # Browser automation - controls real browsers
webdriver-manager==4.0.0  # Auto-download browser drivers

# Data handling
pandas==2.1.0             # Data manipulation and CSV export
openpyxl==3.1.0           # Excel file support

# Scheduling
APScheduler==3.10.0       # Schedule tasks (like cron but in Python)

# Notifications
python-dotenv==1.0.0      # Load environment variables from .env
smtplib                   # Email sending (built-in to Python)

# Utilities
fake-useragent==1.4.0     # Generate realistic User-Agent headers
pytz==2023.3              # Timezone handling for scheduling
python-dateutil==2.8.2    # Date parsing utilities

# Database (optional)
sqlalchemy==2.0.0         # SQL database ORM

# Logging
colorlog==6.7.0           # Colored console logs


# ============================================
# Installation & Setup
# ============================================

# Step 1: Create virtual environment
python -m venv venv

# Step 2: Activate
# Windows:
venv\\Scripts\\activate
# Mac/Linux:
source venv/bin/activate

# Step 3: Install packages
pip install -r requirements.txt

# Step 4: For Selenium (browser automation), you need a browser driver
# webdriver-manager handles this automatically, but you need Chrome or Firefox installed

# Step 5: Create .env file for sensitive data
# .env file example:
# EMAIL_USERNAME=your-email@gmail.com
# EMAIL_PASSWORD=your-app-password
# DATABASE_URL=sqlite:///scraper.db`
            },
            {
              title: '2. Configuration File (config.py)',
              explanation: `Centralize all settings here. This makes it easy to modify scraper behavior without touching code.

**Why configuration files?**
• Change URLs/selectors without code changes
• Different configs for dev/production
• Easy to manage multiple scrapers
• Keep sensitive data separate (via .env)`,
              code: `# config.py - Scraper configuration
"""
Purpose: Centralize all scraper settings
Why: Easy to modify behavior without changing code
"""

import os
from dotenv import load_dotenv

load_dotenv()

class ScraperConfig:
    """Main scraper configuration"""
    
    # ==========================================
    # HTTP Request Settings
    # ==========================================
    
    # User-Agent (identifies your bot to websites)
    # Some sites block requests without proper User-Agent
    USER_AGENTS = [
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
        'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36'
    ]
    
    # Request timeout (seconds)
    REQUEST_TIMEOUT = 10
    
    # Delay between requests (seconds)
    # IMPORTANT: Be polite! Don't overwhelm servers
    MIN_DELAY = 2
    MAX_DELAY = 5
    
    # Maximum retries on failure
    MAX_RETRIES = 3
    
    # Retry backoff (exponential)
    RETRY_BACKOFF = 2  # 1s, 2s, 4s, 8s...
    
    # ==========================================
    # Target Websites
    # ==========================================
    
    # Example: E-commerce price scraper
    PRICE_SCRAPER = {
        'name': 'Amazon Price Tracker',
        'base_url': 'https://www.amazon.com',
        'product_urls': [
            # Add product URLs to track
        ],
        'selectors': {
            'title': '#productTitle',
            'price': '.a-price-whole',
            'availability': '#availability span'
        }
    }
    
    # Example: News scraper
    NEWS_SCRAPER = {
        'name': 'Tech News Aggregator',
        'urls': [
            'https://news.ycombinator.com',
            'https://techcrunch.com'
        ],
        'selectors': {
            'article_title': '.storylink',
            'article_link': '.storylink',
            'timestamp': '.age'
        }
    }
    
    # ==========================================
    # Data Storage
    # ==========================================
    
    DATA_DIR = 'data'
    RAW_DATA_DIR = os.path.join(DATA_DIR, 'raw')
    PROCESSED_DATA_DIR = os.path.join(DATA_DIR, 'processed')
    
    # Database
    DATABASE_URL = os.environ.get('DATABASE_URL', 'sqlite:///scraper.db')
    
    # Export formats
    EXPORT_FORMAT = 'csv'  # 'csv', 'json', 'excel'
    
    # ==========================================
    # Scheduling
    # ==========================================
    
    # When to run automated scraping
    SCHEDULE_CONFIGS = {
        'price_check': {
            'type': 'interval',  # or 'cron'
            'hours': 6,  # Every 6 hours
            'enabled': True
        },
        'news_update': {
            'type': 'cron',
            'hour': 8,  # 8 AM daily
            'minute': 0,
            'enabled': True
        }
    }
    
    # ==========================================
    # Notifications
    # ==========================================
    
    # Email settings (for notifications)
    EMAIL_ENABLED = True
    EMAIL_USERNAME = os.environ.get('EMAIL_USERNAME')
    EMAIL_PASSWORD = os.environ.get('EMAIL_PASSWORD')
    EMAIL_RECIPIENTS = ['your-email@example.com']
    
    # SMTP server (Gmail example)
    SMTP_SERVER = 'smtp.gmail.com'
    SMTP_PORT = 587
    
    # ==========================================
    # Logging
    # ==========================================
    
    LOG_FILE = 'logs/scraper.log'
    LOG_LEVEL = 'INFO'  # DEBUG, INFO, WARNING, ERROR
    
    # ==========================================
    # Selenium (for dynamic sites)
    # ==========================================
    
    # Browser to use
    SELENIUM_BROWSER = 'chrome'  # or 'firefox'
    
    # Headless mode (no visible browser window)
    SELENIUM_HEADLESS = True
    
    # Page load timeout
    SELENIUM_PAGE_TIMEOUT = 30
    
    @staticmethod
    def ensure_directories():
        """Create necessary directories"""
        os.makedirs(ScraperConfig.DATA_DIR, exist_ok=True)
        os.makedirs(ScraperConfig.RAW_DATA_DIR, exist_ok=True)
        os.makedirs(ScraperConfig.PROCESSED_DATA_DIR, exist_ok=True)
        os.makedirs('logs', exist_ok=True)


# Create directories on import
ScraperConfig.ensure_directories()`
            },
            {
              title: '3. Utility Functions (utils.py)',
              explanation: `Helper functions used across different scrapers. Think of this as your toolbox - reusable tools that make scraping easier!

**Key utilities:**
• Random delays (appear more human-like)
• Retry logic with exponential backoff
• User-Agent rotation
• HTML validation
• Data cleaning functions`,
              code: `# utils.py - Helper functions
"""
Purpose: Reusable utility functions for scraping
Why: Don't repeat yourself - write once, use everywhere
"""

import time
import random
import logging
from functools import wraps
from fake_useragent import UserAgent
from config import ScraperConfig

# Setup logging
logging.basicConfig(
    filename=ScraperConfig.LOG_FILE,
    level=ScraperConfig.LOG_LEVEL,
    format='%(asctime)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

class ScraperUtils:
    """Collection of scraper utility functions"""
    
    @staticmethod
    def random_delay(min_seconds=None, max_seconds=None):
        """
        Sleep for random time (appear more human-like)
        
        Why random? Humans don't click at exact intervals!
        Regular patterns can trigger anti-bot detection
        
        Args:
            min_seconds: Minimum delay (default from config)
            max_seconds: Maximum delay (default from config)
        """
        min_delay = min_seconds or ScraperConfig.MIN_DELAY
        max_delay = max_seconds or ScraperConfig.MAX_DELAY
        
        delay = random.uniform(min_delay, max_delay)
        logger.debug(f"Sleeping for {delay:.2f} seconds")
        time.sleep(delay)
    
    @staticmethod
    def get_random_user_agent():
        """
        Get random User-Agent string
        
        Why? Some websites block requests with no/suspicious User-Agent
        Rotating helps avoid detection
        
        Returns:
            User-Agent string
        """
        try:
            ua = UserAgent()
            return ua.random
        except:
            # Fallback to config list
            return random.choice(ScraperConfig.USER_AGENTS)
    
    @staticmethod
    def retry_on_failure(max_retries=None, backoff=None):
        """
        Decorator to retry function on failure
        
        How it works:
        1. Try function
        2. If fails, wait and retry
        3. Each retry waits longer (exponential backoff)
        4. After max retries, raise error
        
        Usage:
            @retry_on_failure(max_retries=3)
            def scrape_page(url):
                # scraping code
        
        Args:
            max_retries: Number of retry attempts
            backoff: Backoff multiplier (1, 2, 4, 8...)
        """
        max_retries = max_retries or ScraperConfig.MAX_RETRIES
        backoff = backoff or ScraperConfig.RETRY_BACKOFF
        
        def decorator(func):
            @wraps(func)
            def wrapper(*args, **kwargs):
                retries = 0
                while retries < max_retries:
                    try:
                        return func(*args, **kwargs)
                    except Exception as e:
                        retries += 1
                        if retries >= max_retries:
                            logger.error(f"Failed after {max_retries} retries: {str(e)}")
                            raise
                        
                        wait_time = backoff ** retries
                        logger.warning(
                            f"Attempt {retries} failed: {str(e)}. "
                            f"Retrying in {wait_time}s..."
                        )
                        time.sleep(wait_time)
                
                return None
            return wrapper
        return decorator
    
    @staticmethod
    def clean_text(text):
        """
        Clean extracted text
        
        Common issues:
        • Extra whitespace
        • Newlines and tabs
        • Special characters
        • HTML entities (&nbsp;, &amp;)
        
        Args:
            text: Raw text string
        
        Returns:
            Cleaned text string
        """
        if not text:
            return ""
        
        # Remove extra whitespace
        text = ' '.join(text.split())
        
        # Remove special characters (optional)
        # text = re.sub(r'[^a-zA-Z0-9\s.,!?-]', '', text)
        
        # Decode HTML entities
        import html
        text = html.unescape(text)
        
        return text.strip()
    
    @staticmethod
    def validate_html(html_content):
        """
        Check if HTML content is valid
        
        Validation checks:
        • Not empty
        • Contains HTML tags
        • Doesn't contain error messages
        
        Args:
            html_content: HTML string
        
        Returns:
            True if valid, False otherwise
        """
        if not html_content:
            return False
        
        # Check for common error patterns
        error_patterns = [
            'Page Not Found',
            '404',
            'Access Denied',
            '403 Forbidden',
            'Captcha'
        ]
        
        for pattern in error_patterns:
            if pattern.lower() in html_content.lower():
                logger.warning(f"Detected error pattern: {pattern}")
                return False
        
        # Check if contains HTML
        if '<html' not in html_content.lower():
            logger.warning("Content doesn't appear to be HTML")
            return False
        
        return True
    
    @staticmethod
    def extract_numbers(text):
        """
        Extract numbers from text
        
        Useful for prices, ratings, quantities
        Example: "$1,234.56" → 1234.56
        
        Args:
            text: String containing numbers
        
        Returns:
            Float or None
        """
        import re
        
        if not text:
            return None
        
        # Remove currency symbols and commas
        cleaned = re.sub(r'[$,£€¥]', '', text)
        
        # Extract first number found
        match = re.search(r'\\d+\\.?\\d*', cleaned)
        
        if match:
            try:
                return float(match.group())
            except ValueError:
                return None
        
        return None
    
    @staticmethod
    def save_html(html_content, filename):
        """
        Save HTML to file (for debugging/caching)
        
        Args:
            html_content: HTML string
            filename: Output filename
        """
        import os
        
        filepath = os.path.join(ScraperConfig.RAW_DATA_DIR, filename)
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(html_content)
        
        logger.info(f"Saved HTML to {filepath}")
    
    @staticmethod
    def check_robots_txt(base_url):
        """
        Check robots.txt for scraping permissions
        
        Ethical scraping! Always check what's allowed
        
        Args:
            base_url: Website base URL
        
        Returns:
            robots.txt content or None
        """
        import requests
        
        robots_url = f"{base_url}/robots.txt"
        
        try:
            response = requests.get(robots_url, timeout=5)
            if response.status_code == 200:
                logger.info(f"robots.txt found at {robots_url}")
                return response.text
            else:
                logger.info(f"No robots.txt found at {robots_url}")
                return None
        except Exception as e:
            logger.warning(f"Could not fetch robots.txt: {str(e)}")
            return None`
            },
            {
              title: '4. Main Scraper Class (scraper.py)',
              explanation: `The main scraping engine! This handles HTTP requests, HTML parsing, and data extraction.

**Two approaches:**
1. **BeautifulSoup** - For static HTML (faster, simpler)
2. **Selenium** - For dynamic JavaScript sites (slower, more powerful)

We'll implement both so you can choose based on the website!`,
              code: `# scraper.py - Main web scraper
"""
Purpose: Core scraping functionality
Why: Handles HTTP requests and HTML parsing
"""

import requests
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
import logging
from config import ScraperConfig
from utils import ScraperUtils

logger = logging.getLogger(__name__)

class WebScraper:
    """Main web scraper class"""
    
    def __init__(self, use_selenium=False):
        """
        Initialize scraper
        
        Args:
            use_selenium: Use Selenium for JavaScript sites
        """
        self.use_selenium = use_selenium
        self.session = requests.Session()  # Reuse connections
        self.driver = None
        
        if use_selenium:
            self._setup_selenium()
    
    def _setup_selenium(self):
        """
        Setup Selenium WebDriver
        
        Selenium controls a real browser - can handle JavaScript!
        """
        chrome_options = Options()
        
        if ScraperConfig.SELENIUM_HEADLESS:
            chrome_options.add_argument('--headless')  # No browser window
        
        chrome_options.add_argument('--no-sandbox')
        chrome_options.add_argument('--disable-dev-shm-usage')
        chrome_options.add_argument(f'user-agent={ScraperUtils.get_random_user_agent()}')
        
        # Auto-download appropriate ChromeDriver
        service = Service(ChromeDriverManager().install())
        
        self.driver = webdriver.Chrome(service=service, options=chrome_options)
        self.driver.set_page_load_timeout(ScraperConfig.SELENIUM_PAGE_TIMEOUT)
        
        logger.info("Selenium WebDriver initialized")
    
    @ScraperUtils.retry_on_failure(max_retries=3)
    def fetch_page(self, url):
        """
        Fetch webpage content
        
        Args:
            url: URL to fetch
        
        Returns:
            HTML content string
        """
        logger.info(f"Fetching: {url}")
        
        if self.use_selenium:
            return self._fetch_with_selenium(url)
        else:
            return self._fetch_with_requests(url)
    
    def _fetch_with_requests(self, url):
        """
        Fetch using requests library (for static HTML)
        
        Faster and lighter than Selenium
        Use when: Site doesn't require JavaScript
        """
        headers = {
            'User-Agent': ScraperUtils.get_random_user_agent(),
            'Accept': 'text/html,application/xhtml+xml',
            'Accept-Language': 'en-US,en;q=0.9',
        }
        
        response = self.session.get(
            url,
            headers=headers,
            timeout=ScraperConfig.REQUEST_TIMEOUT
        )
        
        response.raise_for_status()  # Raise error for bad status codes
        
        # Validate HTML
        if not ScraperUtils.validate_html(response.text):
            raise Exception("Invalid HTML received")
        
        logger.info(f"Successfully fetched {url} ({len(response.text)} bytes)")
        
        # Add polite delay
        ScraperUtils.random_delay()
        
        return response.text
    
    def _fetch_with_selenium(self, url):
        """
        Fetch using Selenium (for JavaScript sites)
        
        Slower but handles dynamic content
        Use when: Site loads data with JavaScript
        """
        self.driver.get(url)
        
        # Wait for page to load (example: wait for body tag)
        WebDriverWait(self.driver, 10).until(
            EC.presence_of_element_located((By.TAG_NAME, "body"))
        )
        
        html_content = self.driver.page_source
        
        logger.info(f"Successfully loaded {url} with Selenium")
        
        # Add polite delay
        ScraperUtils.random_delay()
        
        return html_content
    
    def parse_html(self, html_content):
        """
        Parse HTML with BeautifulSoup
        
        BeautifulSoup = HTML parser that lets you navigate/search HTML
        Like a GPS for web pages!
        
        Args:
            html_content: HTML string
        
        Returns:
            BeautifulSoup object
        """
        soup = BeautifulSoup(html_content, 'lxml')
        return soup
    
    def extract_data(self, soup, selectors):
        """
        Extract data using CSS selectors
        
        CSS Selectors = patterns to find HTML elements
        Examples:
        • '#id' - Find by ID
        • '.class' - Find by class
        • 'tag' - Find by tag name
        • 'tag.class' - Combination
        
        Args:
            soup: BeautifulSoup object
            selectors: Dict of {field_name: css_selector}
        
        Returns:
            Dict of extracted data
        """
        data = {}
        
        for field, selector in selectors.items():
            try:
                element = soup.select_one(selector)
                
                if element:
                    # Extract text content
                    text = element.get_text(strip=True)
                    data[field] = ScraperUtils.clean_text(text)
                else:
                    logger.warning(f"Element not found for selector: {selector}")
                    data[field] = None
                    
            except Exception as e:
                logger.error(f"Error extracting {field}: {str(e)}")
                data[field] = None
        
        return data
    
    def scrape_page(self, url, selectors):
        """
        Complete scrape workflow
        
        Steps:
        1. Fetch HTML
        2. Parse with BeautifulSoup
        3. Extract data
        4. Return structured data
        
        Args:
            url: URL to scrape
            selectors: Dict of CSS selectors
        
        Returns:
            Extracted data dict
        """
        try:
            # Fetch
            html_content = self.fetch_page(url)
            
            # Parse
            soup = self.parse_html(html_content)
            
            # Extract
            data = self.extract_data(soup, selectors)
            
            # Add metadata
            data['url'] = url
            data['scraped_at'] = pd.Timestamp.now().isoformat()
            
            return data
            
        except Exception as e:
            logger.error(f"Failed to scrape {url}: {str(e)}")
            return None
    
    def close(self):
        """Clean up resources"""
        if self.driver:
            self.driver.quit()
            logger.info("Selenium driver closed")
        
        self.session.close()


# ==========================================
# Example Usage
# ==========================================

if __name__ == "__main__":
    # Example 1: Scrape with requests (static site)
    scraper = WebScraper(use_selenium=False)
    
    selectors = {
        'title': 'h1.product-title',
        'price': '.price-current',
        'rating': '.rating-stars'
    }
    
    data = scraper.scrape_page('https://example.com/product', selectors)
    print(data)
    
    scraper.close()
    
    # Example 2: Scrape with Selenium (dynamic site)
    scraper_selenium = WebScraper(use_selenium=True)
    
    # Selenium can also find elements directly
    # (without BeautifulSoup)
    html = scraper_selenium.fetch_page('https://example.com')
    soup = scraper_selenium.parse_html(html)
    
    scraper_selenium.close()`
            },
            {
              title: '5. Specific Scraper Example - Price Tracker (scrapers/price_scraper.py)',
              explanation: `A practical example: tracking product prices over time. This demonstrates a complete, real-world scraper!`,
              code: `# scrapers/price_scraper.py - E-commerce price tracker
"""
Purpose: Track product prices and send alerts on price drops
Use case: Monitor products you want to buy, get notified when price drops
"""

import pandas as pd
from datetime import datetime
import os
import sys

# Add parent directory to path
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from scraper import WebScraper
from config import ScraperConfig
from utils import ScraperUtils
import logging

logger = logging.getLogger(__name__)

class PriceTracker:
    """Track product prices over time"""
    
    def __init__(self):
        self.scraper = WebScraper(use_selenium=False)
        self.history_file = os.path.join(
            ScraperConfig.PROCESSED_DATA_DIR,
            'price_history.csv'
        )
        self.load_history()
    
    def load_history(self):
        """Load price history from CSV"""
        if os.path.exists(self.history_file):
            self.history = pd.read_csv(self.history_file)
            logger.info(f"Loaded {len(self.history)} price records")
        else:
            self.history = pd.DataFrame(columns=[
                'product_url', 'title', 'price', 'currency',
                'availability', 'timestamp'
            ])
            logger.info("Created new price history")
    
    def track_product(self, url, selectors):
        """
        Track single product price
        
        Args:
            url: Product URL
            selectors: CSS selectors for product data
        
        Returns:
            Price data dict
        """
        logger.info(f"Tracking product: {url}")
        
        try:
            # Scrape product page
            data = self.scraper.scrape_page(url, selectors)
            
            if data:
                # Extract price as number
                price_text = data.get('price', '')
                price_value = ScraperUtils.extract_numbers(price_text)
                
                # Create record
                record = {
                    'product_url': url,
                    'title': data.get('title', 'Unknown'),
                    'price': price_value,
                    'currency': self._detect_currency(price_text),
                    'availability': data.get('availability', 'Unknown'),
                    'timestamp': datetime.now().isoformat()
                }
                
                # Add to history
                self.history = pd.concat([
                    self.history,
                    pd.DataFrame([record])
                ], ignore_index=True)
                
                logger.info(f"Tracked price: {price_value} for {record['title']}")
                
                return record
            
        except Exception as e:
            logger.error(f"Error tracking {url}: {str(e)}")
            return None
    
    def track_multiple_products(self, product_urls, selectors):
        """
        Track multiple products
        
        Args:
            product_urls: List of product URLs
            selectors: CSS selectors (same for all products)
        
        Returns:
            List of price records
        """
        records = []
        
        for url in product_urls:
            record = self.track_product(url, selectors)
            if record:
                records.append(record)
        
        return records
    
    def check_price_drop(self, product_url, threshold_percent=10):
        """
        Check if price dropped significantly
        
        Args:
            product_url: Product URL
            threshold_percent: Alert if price drops by this %
        
        Returns:
            Dict with price drop info or None
        """
        # Get price history for this product
        product_history = self.history[
            self.history['product_url'] == product_url
        ].sort_values('timestamp')
        
        if len(product_history) < 2:
            return None  # Need at least 2 records to compare
        
        # Get latest and previous price
        latest = product_history.iloc[-1]
        previous = product_history.iloc[-2]
        
        if latest['price'] and previous['price']:
            price_change = ((latest['price'] - previous['price']) / 
                          previous['price'] * 100)
            
            if abs(price_change) >= threshold_percent:
                return {
                    'product': latest['title'],
                    'old_price': previous['price'],
                    'new_price': latest['price'],
                    'change_percent': price_change,
                    'url': product_url
                }
        
        return None
    
    def get_price_trends(self, product_url):
        """
        Get price trend for visualization
        
        Args:
            product_url: Product URL
        
        Returns:
            DataFrame with timestamp and price
        """
        product_history = self.history[
            self.history['product_url'] == product_url
        ].sort_values('timestamp')
        
        return product_history[['timestamp', 'price', 'title']]
    
    def save_history(self):
        """Save price history to CSV"""
        self.history.to_csv(self.history_file, index=False)
        logger.info(f"Saved price history to {self.history_file}")
    
    def _detect_currency(self, price_text):
        """Detect currency from price text"""
        if '\$' in price_text:
            return 'USD'
        elif '£' in price_text:
            return 'GBP'
        elif '€' in price_text:
            return 'EUR'
        else:
            return 'USD'  # Default
    
    def close(self):
        """Clean up"""
        self.save_history()
        self.scraper.close()


# ==========================================
# Example Usage
# ==========================================

if __name__ == "__main__":
    # Initialize tracker
    tracker = PriceTracker()
    
    # Define products to track
    products = [
        'https://www.amazon.com/product1',
        'https://www.amazon.com/product2'
    ]
    
    # Define selectors (customize for target site)
    selectors = {
        'title': '#productTitle',
        'price': '.a-price-whole',
        'availability': '#availability span'
    }
    
    # Track prices
    records = tracker.track_multiple_products(products, selectors)
    
    # Check for price drops
    for product in products:
        drop_info = tracker.check_price_drop(product, threshold_percent=5)
        if drop_info:
            print("💰 PRICE DROP ALERT!")
            print("Product:", drop_info['product'])
            print("Old: \$%.2f" % drop_info['old_price'])
            print("New: \$%.2f" % drop_info['new_price'])
            print("Change: %.1f%%" % drop_info['change_percent'])
    
    # Save and close
    tracker.close()`
            },
            {
              title: '6. Task Scheduler (scheduler.py)',
              explanation: `Automate your scraper to run at specific times - like a cron job but in Python!

**Scheduling options:**
• Interval (every X hours/minutes)
• Cron-style (specific times like "8 AM daily")
• One-time delayed execution`,
              code: `# scheduler.py - Automated task scheduling
"""
Purpose: Schedule scraping tasks to run automatically
Why: Don't run scrapers manually - automate them!
"""

from apscheduler.schedulers.blocking import BlockingScheduler
from apscheduler.triggers.interval import IntervalTrigger
from apscheduler.triggers.cron import CronTrigger
from datetime import datetime
import logging
from config import ScraperConfig

logger = logging.getLogger(__name__)

class ScraperScheduler:
    """Manage scheduled scraping tasks"""
    
    def __init__(self):
        """Initialize scheduler"""
        self.scheduler = BlockingScheduler()
        self.jobs = {}
    
    def add_interval_job(self, job_func, job_id, hours=1, minutes=0):
        """
        Add job that runs at regular intervals
        
        Example: Run every 6 hours
        
        Args:
            job_func: Function to execute
            job_id: Unique job identifier
            hours: Interval in hours
            minutes: Interval in minutes
        """
        trigger = IntervalTrigger(hours=hours, minutes=minutes)
        
        job = self.scheduler.add_job(
            job_func,
            trigger=trigger,
            id=job_id,
            name=f"Interval job: {job_id}",
            replace_existing=True
        )
        
        self.jobs[job_id] = job
        logger.info(f"Added interval job '{job_id}' (every {hours}h {minutes}m)")
    
    def add_cron_job(self, job_func, job_id, hour=0, minute=0, day_of_week='*'):
        """
        Add job with cron-style scheduling
        
        Example: Run daily at 8:30 AM
        
        Args:
            job_func: Function to execute
            job_id: Unique job identifier
            hour: Hour (0-23)
            minute: Minute (0-59)
            day_of_week: Days ('mon', 'tue', etc. or '*' for all)
        """
        trigger = CronTrigger(
            hour=hour,
            minute=minute,
            day_of_week=day_of_week
        )
        
        job = self.scheduler.add_job(
            job_func,
            trigger=trigger,
            id=job_id,
            name=f"Cron job: {job_id}",
            replace_existing=True
        )
        
        self.jobs[job_id] = job
        logger.info(f"Added cron job '{job_id}' ({hour}:{minute:02d} on {day_of_week})")
    
    def remove_job(self, job_id):
        """Remove scheduled job"""
        if job_id in self.jobs:
            self.scheduler.remove_job(job_id)
            del self.jobs[job_id]
            logger.info(f"Removed job '{job_id}'")
    
    def start(self):
        """Start scheduler (blocking - runs forever)"""
        logger.info("Starting scheduler...")
        logger.info(f"Scheduled {len(self.jobs)} jobs")
        
        try:
            self.scheduler.start()
        except (KeyboardInterrupt, SystemExit):
            logger.info("Scheduler stopped by user")
    
    def shutdown(self):
        """Shutdown scheduler"""
        self.scheduler.shutdown()
        logger.info("Scheduler shutdown complete")


# ==========================================
# Example: Price Tracking Automation
# ==========================================

def price_check_job():
    """Job function: Check prices"""
    print(f"[{datetime.now()}] Running price check...")
    
    # Your scraping code here
    from scrapers.price_scraper import PriceTracker
    
    tracker = PriceTracker()
    
    products = ['https://example.com/product1']
    selectors = {'title': 'h1', 'price': '.price'}
    
    tracker.track_multiple_products(products, selectors)
    tracker.close()
    
    print("Price check complete!")

def news_scrape_job():
    """Job function: Scrape news"""
    print(f"[{datetime.now()}] Scraping news...")
    # Your news scraping code
    print("News scraping complete!")


if __name__ == "__main__":
    # Create scheduler
    scheduler = ScraperScheduler()
    
    # Add jobs
    scheduler.add_interval_job(
        price_check_job,
        job_id='price_check',
        hours=6  # Every 6 hours
    )
    
    scheduler.add_cron_job(
        news_scrape_job,
        job_id='morning_news',
        hour=8,  # 8 AM
        minute=0
    )
    
    # Start (runs forever until Ctrl+C)
    scheduler.start()`
            },
            {
              title: '7. Email Notifications (notifier.py)',
              explanation: `Send email alerts when scraping completes or errors occur. Stay informed without constantly checking!`,
              code: `# notifier.py - Email notification system
"""
Purpose: Send email alerts for scraping events
Why: Get notified of price drops, errors, or completed tasks
"""

import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from datetime import datetime
import logging
from config import ScraperConfig

logger = logging.getLogger(__name__)

class EmailNotifier:
    """Send email notifications"""
    
    def __init__(self):
        """Initialize email client"""
        self.enabled = ScraperConfig.EMAIL_ENABLED
        self.username = ScraperConfig.EMAIL_USERNAME
        self.password = ScraperConfig.EMAIL_PASSWORD
        self.recipients = ScraperConfig.EMAIL_RECIPIENTS
        self.smtp_server = ScraperConfig.SMTP_SERVER
        self.smtp_port = ScraperConfig.SMTP_PORT
    
    def send_email(self, subject, body, html=False):
        """
        Send email notification
        
        Args:
            subject: Email subject
            body: Email body (text or HTML)
            html: True if body is HTML
        
        Returns:
            True if sent successfully
        """
        if not self.enabled:
            logger.info("Email notifications disabled")
            return False
        
        if not self.username or not self.password:
            logger.error("Email credentials not configured")
            return False
        
        try:
            # Create message
            msg = MIMEMultipart('alternative')
            msg['From'] = self.username
            msg['To'] = ', '.join(self.recipients)
            msg['Subject'] = subject
            
            # Add body
            if html:
                msg.attach(MIMEText(body, 'html'))
            else:
                msg.attach(MIMEText(body, 'plain'))
            
            # Send via SMTP
            with smtplib.SMTP(self.smtp_server, self.smtp_port) as server:
                server.starttls()  # Secure connection
                server.login(self.username, self.password)
                server.send_message(msg)
            
            logger.info("Email sent: " + subject)
            return True
            
        except Exception as e:
            logger.error("Failed to send email: " + str(e))
            return False
    
    def send_price_drop_alert(self, drop_info):
        """
        Send price drop notification
        
        Args:
            drop_info: Dict with price drop details
        """
        subject = "💰 Price Drop: " + drop_info['product']
        
        body = """
        Good news! The price has dropped on a product you're tracking.
        
        Product: %s
        Old Price: $%.2f
        New Price: $%.2f
        Change: %.1f%%
        
        View Product: %s
        
        ---
        Sent by Web Scraper Bot at %s
        """ % (
            drop_info['product'],
            drop_info['old_price'],
            drop_info['new_price'],
            drop_info['change_percent'],
            drop_info['url'],
            datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        )
        
        self.send_email(subject, body.strip())
    
    def send_scraping_summary(self, summary):
        """
        Send scraping summary
        
        Args:
            summary: Dict with scraping statistics
        """
        subject = "Scraping Summary - " + datetime.now().strftime('%Y-%m-%d')
        
        body = """
        Scraping Task Completed
        
        Products Tracked: %s
        Successful: %s
        Failed: %s
        Price Drops Detected: %s
        
        Duration: %s
        
        ---
        Automated scraper report
        """ % (
            summary.get('products_tracked', 0),
            summary.get('successful', 0),
            summary.get('failed', 0),
            summary.get('price_drops', 0),
            summary.get('duration', 'N/A')
        )
        
        self.send_email(subject, body.strip())
    
    def send_error_alert(self, error_message):
        """
        Send error notification
        
        Args:
            error_message: Error details
        """
        subject = "⚠️ Scraper Error Alert"
        
        body = """
        Your web scraper encountered an error:
        
        Error: %s
        Time: %s
        
        Please check the logs for more details.
        
        ---
        Automated error notification
        """ % (error_message, datetime.now().strftime('%Y-%m-%d %H:%M:%S'))
        
        self.send_email(subject, body.strip())


# ==========================================
# Example Usage
# ==========================================

if __name__ == "__main__":
    notifier = EmailNotifier()
    
    # Test notification
    notifier.send_email(
        "Test Email",
        "This is a test email from your web scraper!"
    )
    
    # Price drop alert
    drop_info = {
        'product': 'Gaming Laptop',
        'old_price': 1299.99,
        'new_price': 999.99,
        'change_percent': -23.1,
        'url': 'https://example.com/product'
    }
    notifier.send_price_drop_alert(drop_info)`
            }
          ],

          useCases: [
            {
              title: 'E-commerce Price Monitoring',
              description: 'Track product prices across multiple stores, get alerts when prices drop below target',
              example: 'Monitor Amazon, eBay for best deals; track competitor pricing'
            },
            {
              title: 'News & Content Aggregation',
              description: 'Collect articles from multiple news sources, create personalized news feeds',
              example: 'Tech news aggregator, job listing collector, real estate monitor'
            },
            {
              title: 'Market Research & Analysis',
              description: 'Gather competitor data, track industry trends, monitor reviews and ratings',
              example: 'Competitor price analysis, product review sentiment analysis'
            },
            {
              title: 'Data Collection for Research',
              description: 'Collect public data for academic research, machine learning datasets',
              example: 'Social media analysis, academic paper collection, government data scraping'
            }
          ]
        },
        quiz: [
          {
            question: 'What is the primary purpose of checking robots.txt before scraping?',
            options: [
              'To find login credentials',
              'To see which parts of the site are allowed to be scraped',
              'To get the website structure',
              'To find hidden pages'
            ],
            correctAnswer: 1,
            explanation: 'robots.txt tells you which parts of a website are allowed or disallowed for automated bots. Respecting this file is part of ethical scraping practices.'
          },
          {
            question: 'When should you use Selenium instead of BeautifulSoup?',
            options: [
              'When the website is slow',
              'When you need to scrape faster',
              'When the website loads content dynamically with JavaScript',
              'When the website has many images'
            ],
            correctAnswer: 2,
            explanation: 'Selenium controls a real browser and can execute JavaScript, making it necessary for sites that load content dynamically. BeautifulSoup only works with static HTML.'
          },
          {
            question: 'Why is adding random delays between requests important?',
            options: [
              'To save bandwidth',
              'To appear more human-like and avoid overwhelming servers',
              'To reduce memory usage',
              'To make code run slower'
            ],
            correctAnswer: 1,
            explanation: 'Random delays mimic human browsing behavior and prevent overwhelming servers with rapid requests. This is both polite and helps avoid being blocked by anti-bot systems.'
          },
          {
            question: 'What does exponential backoff mean in retry logic?',
            options: [
              'Retrying immediately without delay',
              'Waiting longer after each failed attempt (1s, 2s, 4s, 8s...)',
              'Retrying once then stopping',
              'Reducing the delay with each retry'
            ],
            correctAnswer: 1,
            explanation: 'Exponential backoff increases wait time between retries (2^n pattern). This gives servers time to recover and avoids hammering a struggling service.'
          },
          {
            question: 'What is a CSS selector and why is it used in web scraping?',
            options: [
              'A styling language for websites',
              'A pattern to find specific HTML elements on a page',
              'A database query language',
              'A way to format scraped data'
            ],
            correctAnswer: 1,
            explanation: 'CSS selectors are patterns that identify HTML elements (like #id, .class, tag). Scrapers use them to locate and extract specific data from web pages.'
          }
        ]
      },
      {
        id: 'project-4-weather-app',
        title: 'Project 4: Weather App with API Integration',
        description: 'Build a weather application that fetches real-time weather data from external APIs. Learn how to work with REST APIs, handle JSON data, manage API keys, and create a command-line weather tool.',
        difficulty: 'intermediate',
        estimatedTime: '3-4 hours',
        prerequisites: ['Basic Python', 'HTTP concepts', 'JSON understanding'],
        content: {
          overview: `In this beginner-friendly project, you'll build a weather application that fetches real-time weather data from external APIs. You'll learn how to work with REST APIs, handle JSON data, manage API keys, and create a command-line weather tool.

**What You'll Learn:**

• Making HTTP requests to REST APIs
• Managing API keys and authentication
• Parsing and working with JSON data
• Error handling for network requests
• Caching data to reduce API calls
• Building a clean command-line interface
• Working with geolocation data

**Real-World Application:**

APIs power modern apps - from social media to payment systems. This project teaches you how to integrate external services into your applications, a crucial skill for any developer.`,

          keyPoints: [
            'Understand REST APIs and how applications communicate over the internet',
            'Learn to make HTTP requests and handle responses',
            'Master JSON parsing and data extraction',
            'Implement API authentication with API keys',
            'Build error handling for network requests',
            'Create a caching system to reduce API calls',
            'Work with environment variables for security'
          ],

          fileStructure: `
weather-app/
│
├── config/
│   ├── __init__.py          # Makes config a package
│   ├── settings.py          # API keys and configuration
│   └── .env.example         # Template for environment variables
│
├── src/
│   ├── __init__.py          # Makes src a package
│   ├── api_client.py        # Handles API requests to weather service
│   ├── weather_formatter.py # Formats weather data for display
│   ├── cache_manager.py     # Manages local data caching
│   └── geo_utils.py         # Geocoding and location utilities
│
├── cli/
│   ├── __init__.py          # Makes cli a package
│   └── app.py               # Command-line interface
│
├── data/
│   ├── cache/               # Cached weather responses
│   └── cities.json          # Pre-configured city coordinates
│
├── tests/
│   ├── test_api_client.py   # Tests for API client
│   └── test_formatter.py    # Tests for formatter
│
├── main.py                  # Entry point for the application
├── requirements.txt         # Project dependencies
└── README.md               # Project documentation`,

          concepts: [
            {
              name: 'REST APIs',
              description: 'REpresentational State Transfer - a standard way for applications to communicate over the internet using HTTP methods (GET, POST, PUT, DELETE)',
              why: 'APIs are how different software systems talk to each other. Understanding REST APIs is essential for modern development.'
            },
            {
              name: 'JSON (JavaScript Object Notation)',
              description: 'A lightweight data format that looks like Python dictionaries. Used by most APIs to send and receive data',
              why: 'JSON is the universal language of web APIs. Almost every API you work with will use JSON.'
            },
            {
              name: 'API Authentication',
              description: 'Using API keys or tokens to identify your application and control access to services',
              why: 'Protects services from abuse and allows tracking of usage. Most real-world APIs require authentication.'
            },
            {
              name: 'HTTP Status Codes',
              description: 'Numeric codes (200=success, 404=not found, 500=server error) that tell you what happened with your request',
              why: 'Understanding status codes helps you debug API issues and handle errors gracefully.'
            },
            {
              name: 'Caching',
              description: 'Storing API responses locally to avoid making the same request multiple times',
              why: 'Reduces API calls (many APIs have rate limits), improves speed, and saves costs on paid APIs.'
            },
            {
              name: 'Environment Variables',
              description: 'Storing sensitive data (like API keys) outside your code in environment files',
              why: 'Keeps secrets safe and out of version control. Never hardcode API keys in your source code!'
            }
          ],

          codeExamples: [
            {
              title: '1. Project Structure Setup',
              explanation: `First, let's set up our project structure with proper organization.

**Why this structure?**
• config/ - Keeps all settings in one place
• src/ - Core application logic
• cli/ - User interface separated from logic
• data/ - Local data storage
• tests/ - Testing code

**Important files:**
• .env - NEVER commit this! Contains your API keys
• requirements.txt - Lists all Python packages needed`,
              code: `# requirements.txt - Dependencies for the project
"""
Purpose: Lists all Python packages this project needs
Why: Makes it easy for others (or you on a new machine) to install everything at once
How to use: pip install -r requirements.txt
"""

requests==2.31.0          # For making HTTP requests to APIs
python-dotenv==1.0.0      # For loading environment variables from .env file
colorama==0.4.6           # For colored terminal output (cross-platform)
tabulate==0.9.0           # For creating nice tables in the terminal
geopy==2.4.0              # For geocoding (converting city names to coordinates)

# Optional but recommended
pytest==7.4.0             # For running tests
responses==0.23.1         # For mocking API responses in tests\`
            },
            {
              title: '2. Configuration & Environment Variables (config/settings.py)',
              explanation: \`This file manages all configuration including API keys.

**File Purpose:**
• Load API keys from environment variables (NOT hardcoded!)
• Set default values for the app
• Configure API endpoints

**Environment Variables:**
\`.env\` file looks like this:
\`\`\`
OPENWEATHER_API_KEY=your_api_key_here
DEFAULT_CITY=London
CACHE_DURATION=3600
\`\`\`

**Why .env?**
• Keeps secrets out of code
• Different settings for development vs production
• Won't be committed to Git (add \`.env\` to \`.gitignore\`)\`,
              code: \`# config/settings.py - Application configuration
"""
Purpose: Centralized configuration management
Why: One place to change API keys, URLs, and settings
Security: Uses environment variables to keep API keys safe
"""

import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# API Configuration
OPENWEATHER_API_KEY = os.getenv('OPENWEATHER_API_KEY')
if not OPENWEATHER_API_KEY:
    raise ValueError(
        "API key not found! Please set OPENWEATHER_API_KEY in your .env file.\\n"
        "Get a free API key from: https://openweathermap.org/api"
    )

# API Endpoints
BASE_URL = "https://api.openweathermap.org/data/2.5"
WEATHER_ENDPOINT = BASE_URL + "/weather"
FORECAST_ENDPOINT = BASE_URL + "/forecast"

# Application Settings
DEFAULT_UNITS = "metric"  # metric = Celsius, imperial = Fahrenheit
CACHE_DURATION = int(os.getenv('CACHE_DURATION', 1800))  # 30 minutes default
MAX_RETRIES = 3
TIMEOUT = 10  # seconds

# Display Settings
TEMPERATURE_DECIMALS = 1
USE_COLORS = True

# Supported units
UNITS = {
    'metric': {'temp': '°C', 'speed': 'm/s'},
    'imperial': {'temp': '°F', 'speed': 'mph'},
    'kelvin': {'temp': 'K', 'speed': 'm/s'}
}\`
            },
            {
              title: '3. API Client (src/api_client.py)',
              explanation: \`The core module that communicates with the weather API.

**What this file does:**
• Makes HTTP GET requests to weather API
• Handles authentication (API key)
• Parses JSON responses
• Handles errors (network issues, invalid requests, etc.)
• Implements retry logic for failed requests

**HTTP Request Flow:**
1. Build URL with parameters (city, API key, units)
2. Send GET request
3. Check HTTP status code
4. Parse JSON response
5. Return weather data

**Error Handling:**
• Network errors (no internet)
• Invalid API key
• City not found (404)
• Rate limiting (429)
• Server errors (500)\`,
              code: \`# src/api_client.py - Weather API client
"""
Purpose: Handle all communication with the weather API
Why: Separates API logic from the rest of the app
Features: Error handling, retries, clean data extraction
"""

import requests
import time
from typing import Dict, Optional
from config.settings import (
    WEATHER_ENDPOINT, FORECAST_ENDPOINT,
    OPENWEATHER_API_KEY, TIMEOUT, MAX_RETRIES,
    DEFAULT_UNITS
)


class WeatherAPIClient:
    """
    Client for interacting with OpenWeather API
    
    This class handles:
    - Making API requests
    - Authentication
    - Error handling
    - Data extraction
    """
    
    def __init__(self, api_key: str = OPENWEATHER_API_KEY):
        """
        Initialize the API client
        
        Args:
            api_key: OpenWeather API key (from environment)
        """
        self.api_key = api_key
        self.session = requests.Session()  # Reuse connection for efficiency
    
    def get_current_weather(
        self, 
        city: str = None,
        lat: float = None,
        lon: float = None,
        units: str = DEFAULT_UNITS
    ) -> Dict:
        """
        Get current weather for a location
        
        Args:
            city: City name (e.g., "London" or "London,UK")
            lat: Latitude (alternative to city)
            lon: Longitude (must provide with lat)
            units: metric, imperial, or kelvin
            
        Returns:
            Dictionary with weather data
            
        Raises:
            ValueError: If neither city nor coordinates provided
            requests.RequestException: If API request fails
        """
        # Build request parameters
        params = {
            'appid': self.api_key,
            'units': units
        }
        
        # Add location (either city or coordinates)
        if city:
            params['q'] = city
        elif lat is not None and lon is not None:
            params['lat'] = lat
            params['lon'] = lon
        else:
            raise ValueError("Provide either city name or lat/lon coordinates")
        
        # Make request with retry logic
        return self._make_request(WEATHER_ENDPOINT, params)
    
    def get_forecast(
        self,
        city: str = None,
        lat: float = None,
        lon: float = None,
        units: str = DEFAULT_UNITS,
        days: int = 5
    ) -> Dict:
        """
        Get weather forecast (5 days, 3-hour intervals)
        
        Args:
            city: City name
            lat/lon: Coordinates (alternative to city)
            units: Temperature units
            days: Number of days (max 5 for free tier)
            
        Returns:
            Dictionary with forecast data
        """
        params = {
            'appid': self.api_key,
            'units': units,
            'cnt': days * 8  # 8 data points per day (3-hour intervals)
        }
        
        if city:
            params['q'] = city
        elif lat is not None and lon is not None:
            params['lat'] = lat
            params['lon'] = lon
        else:
            raise ValueError("Provide either city or coordinates")
        
        return self._make_request(FORECAST_ENDPOINT, params)
    
    def _make_request(self, url: str, params: Dict) -> Dict:
        """
        Make HTTP request with error handling and retries
        
        Args:
            url: API endpoint URL
            params: Query parameters
            
        Returns:
            Parsed JSON response
            
        Raises:
            requests.RequestException: If request fails after retries
        """
        last_error = None
        
        for attempt in range(MAX_RETRIES):
            try:
                response = self.session.get(
                    url, 
                    params=params, 
                    timeout=TIMEOUT
                )
                
                # Raise exception for bad status codes
                response.raise_for_status()
                
                # Parse and return JSON
                return response.json()
                
            except requests.exceptions.Timeout:
                last_error = "Request timed out"
                time.sleep(2 ** attempt)  # Exponential backoff
                
            except requests.exceptions.HTTPError as e:
                # Handle specific HTTP errors
                if response.status_code == 404:
                    raise ValueError("City not found. Check spelling and try again.")
                elif response.status_code == 401:
                    raise ValueError("Invalid API key. Check your configuration.")
                elif response.status_code == 429:
                    last_error = "Rate limit exceeded. Please wait."
                    time.sleep(60)  # Wait 1 minute for rate limit
                else:
                    raise
                    
            except requests.exceptions.RequestException as e:
                last_error = str(e)
                time.sleep(2 ** attempt)
        
        # All retries failed
        raise requests.RequestException(
            "Failed after %s attempts. Last error: %s" % (MAX_RETRIES, last_error)
        )
    
    def close(self):
        """Close the session"""
        self.session.close()\`
            },
            {
              title: '4. Weather Data Formatter (src/weather_formatter.py)',
              explanation: \`Transform raw API data into human-readable format.

**What this file does:**
• Extracts relevant data from API response
• Formats temperatures, wind speed, etc.
• Creates nice-looking terminal output
• Adds weather icons/emojis
• Handles missing data gracefully

**Data Transformation:**
Raw API gives you nested JSON like:
\`\`\`json
{"main": {"temp": 15.5}, "weather": [{"description": "cloudy"}]}
\`\`\`

We transform it to:
\`\`\`
Temperature: 15.5°C
Condition: Cloudy ☁️
\`\`\`\`,
              code: \`# src/weather_formatter.py - Format weather data for display
"""
Purpose: Transform raw API data into human-readable format
Why: Separates data presentation from data fetching
Features: Nice formatting, emojis, color-coded output
"""

from typing import Dict
from datetime import datetime
from config.settings import UNITS, USE_COLORS

# Color codes for terminal (if enabled)
if USE_COLORS:
    from colorama import Fore, Style, init
    init(autoreset=True)
else:
    # Dummy color codes if colors disabled
    class Fore:
        RED = GREEN = YELLOW = BLUE = CYAN = WHITE = RESET = ''
    class Style:
        BRIGHT = RESET_ALL = ''


# Weather condition to emoji mapping
WEATHER_ICONS = {
    'Clear': '☀️',
    'Clouds': '☁️',
    'Rain': '🌧️',
    'Drizzle': '🌦️',
    'Thunderstorm': '⛈️',
    'Snow': '❄️',
    'Mist': '🌫️',
    'Fog': '🌫️',
    'Haze': '🌫️',
}


class WeatherFormatter:
    """Format weather data for terminal display"""
    
    @staticmethod
    def format_current_weather(data: Dict, units: str = 'metric') -> str:
        """
        Format current weather data
        
        Args:
            data: Raw API response dictionary
            units: Unit system (metric/imperial/kelvin)
            
        Returns:
            Formatted string for display
        """
        try:
            # Extract data from response
            city = data.get('name', 'Unknown')
            country = data.get('sys', {}).get('country', '')
            
            # Temperature data
            temp = data['main']['temp']
            feels_like = data['main']['feels_like']
            temp_min = data['main']['temp_min']
            temp_max = data['main']['temp_max']
            humidity = data['main']['humidity']
            pressure = data['main']['pressure']
            
            # Weather condition
            weather = data['weather'][0]
            condition = weather['main']
            description = weather['description'].capitalize()
            icon = WEATHER_ICONS.get(condition, '🌡️')
            
            # Wind data
            wind_speed = data['wind']['speed']
            wind_deg = data.get('wind', {}).get('deg', 0)
            
            # Visibility
            visibility = data.get('visibility', 0) / 1000  # Convert to km
            
            # Sunrise/Sunset
            sunrise = datetime.fromtimestamp(data['sys']['sunrise'])
            sunset = datetime.fromtimestamp(data['sys']['sunset'])
            
            # Get unit symbols
            temp_unit = UNITS[units]['temp']
            speed_unit = UNITS[units]['speed']
            
            # Build formatted output
            output = []
            output.append("")
            output.append(Fore.CYAN + Style.BRIGHT + "=" * 50)
            output.append(
                Fore.WHITE + Style.BRIGHT + 
                "  %s %s, %s" % (icon, city, country)
            )
            output.append(Fore.CYAN + Style.BRIGHT + "=" * 50)
            output.append("")
            
            # Current conditions
            output.append(Fore.YELLOW + Style.BRIGHT + "CURRENT CONDITIONS")
            output.append(
                Fore.WHITE + "  %s - %s" % (description, icon)
            )
            output.append(
                Fore.GREEN + "  Temperature: " + 
                Fore.WHITE + "%.1f%s (feels like %.1f%s)" % 
                (temp, temp_unit, feels_like, temp_unit)
            )
            output.append(
                Fore.BLUE + "  Min/Max: " +
                Fore.WHITE + "%.1f%s / %.1f%s" % 
                (temp_min, temp_unit, temp_max, temp_unit)
            )
            output.append("")
            
            # Additional details
            output.append(Fore.YELLOW + Style.BRIGHT + "DETAILS")
            output.append(
                Fore.WHITE + "  💧 Humidity: %s%%" % humidity
            )
            output.append(
                Fore.WHITE + "  🌀 Pressure: %s hPa" % pressure
            )
            output.append(
                Fore.WHITE + "  💨 Wind: %.1f %s (%s°)" % 
                (wind_speed, speed_unit, wind_deg)
            )
            output.append(
                Fore.WHITE + "  👁️ Visibility: %.1f km" % visibility
            )
            output.append("")
            
            # Sun times
            output.append(Fore.YELLOW + Style.BRIGHT + "SUN TIMES")
            output.append(
                Fore.WHITE + "  🌅 Sunrise: %s" % 
                sunrise.strftime('%H:%M:%S')
            )
            output.append(
                Fore.WHITE + "  🌇 Sunset: %s" % 
                sunset.strftime('%H:%M:%S')
            )
            
            output.append("")
            output.append(Fore.CYAN + "=" * 50)
            output.append("")
            
            return '\\n'.join(output)
            
        except KeyError as e:
            return "Error formatting weather data: Missing field %s" % str(e)
    
    @staticmethod
    def format_forecast(data: Dict, units: str = 'metric', days: int = 3) -> str:
        """
        Format forecast data
        
        Args:
            data: Raw forecast API response
            units: Unit system
            days: Number of days to show
            
        Returns:
            Formatted forecast string
        """
        try:
            city = data['city']['name']
            forecasts = data['list'][:days * 8]  # Limit to requested days
            
            output = []
            output.append("")
            output.append(Fore.CYAN + Style.BRIGHT + "=" * 50)
            output.append(
                Fore.WHITE + Style.BRIGHT + 
                "  📅 %s-Day Forecast for %s" % (days, city)
            )
            output.append(Fore.CYAN + Style.BRIGHT + "=" * 50)
            output.append("")
            
            current_date = None
            temp_unit = UNITS[units]['temp']
            
            for forecast in forecasts:
                # Parse timestamp
                dt = datetime.fromtimestamp(forecast['dt'])
                date_str = dt.strftime('%Y-%m-%d')
                time_str = dt.strftime('%H:%M')
                
                # Show date header for new days
                if date_str != current_date:
                    if current_date is not None:
                        output.append("")
                    output.append(
                        Fore.YELLOW + Style.BRIGHT + 
                        dt.strftime('%A, %B %d, %Y')
                    )
                    current_date = date_str
                
                # Weather info
                temp = forecast['main']['temp']
                condition = forecast['weather'][0]['main']
                icon = WEATHER_ICONS.get(condition, '🌡️')
                
                output.append(
                    Fore.WHITE + "  %s  %s %s  %.1f%s" % 
                    (time_str, icon, condition.ljust(12), temp, temp_unit)
                )
            
            output.append("")
            output.append(Fore.CYAN + "=" * 50)
            output.append("")
            
            return '\\n'.join(output)
            
        except (KeyError, IndexError) as e:
            return "Error formatting forecast: %s" % str(e)\`
            },
            {
              title: '5. Command-Line Interface (cli/app.py)',
              explanation: \`The user-facing part of the application.

**What this file does:**
• Parses command-line arguments
• Validates user input
• Calls the API client
• Displays formatted output
• Handles user errors gracefully

**Command-line arguments:**
\`\`\`bash
python main.py --city "London"
python main.py --city "New York" --units imperial
python main.py --coords 51.5074 -0.1278
python main.py --forecast --days 5
\`\`\`

**Why separate CLI from logic?**
• Can add web interface later without changing core code
• Easier to test
• Cleaner code organization\`,
              code: \`# cli/app.py - Command-line interface
"""
Purpose: User interface for the weather app
Why: Separates user interaction from business logic
Features: Argument parsing, input validation, error display
"""

import argparse
import sys
from src.api_client import WeatherAPIClient
from src.weather_formatter import WeatherFormatter
from config.settings import DEFAULT_UNITS


class WeatherCLI:
    """Command-line interface for weather app"""
    
    def __init__(self):
        self.api_client = WeatherAPIClient()
        self.formatter = WeatherFormatter()
    
    def run(self):
        """Main entry point for CLI"""
        args = self.parse_arguments()
        
        try:
            if args.forecast:
                self.show_forecast(args)
            else:
                self.show_current_weather(args)
                
        except ValueError as e:
            print("❌ Error: %s" % str(e))
            sys.exit(1)
        except Exception as e:
            print("❌ Unexpected error: %s" % str(e))
            sys.exit(1)
        finally:
            self.api_client.close()
    
    def parse_arguments(self):
        """
        Parse command-line arguments
        
        Returns:
            Parsed arguments namespace
        """
        parser = argparse.ArgumentParser(
            description='Get current weather or forecast for any city',
            formatter_class=argparse.RawDescriptionHelpFormatter,
            epilog="""
Examples:
  %(prog)s --city "London"
  %(prog)s --city "Tokyo" --units metric
  %(prog)s --coords 40.7128 -74.0060
  %(prog)s --city "Paris" --forecast --days 5
            """
        )
        
        # Location arguments (mutually exclusive)
        location = parser.add_mutually_exclusive_group(required=True)
        location.add_argument(
            '-c', '--city',
            type=str,
            help='City name (e.g., "London" or "London,UK")'
        )
        location.add_argument(
            '--coords',
            nargs=2,
            type=float,
            metavar=('LAT', 'LON'),
            help='Latitude and longitude coordinates'
        )
        
        # Display options
        parser.add_argument(
            '-u', '--units',
            type=str,
            choices=['metric', 'imperial', 'kelvin'],
            default=DEFAULT_UNITS,
            help='Temperature units (default: metric)'
        )
        parser.add_argument(
            '-f', '--forecast',
            action='store_true',
            help='Show forecast instead of current weather'
        )
        parser.add_argument(
            '-d', '--days',
            type=int,
            default=3,
            choices=range(1, 6),
            metavar='DAYS',
            help='Number of forecast days (1-5, default: 3)'
        )
        
        return parser.parse_args()
    
    def show_current_weather(self, args):
        """
        Fetch and display current weather
        
        Args:
            args: Parsed command-line arguments
        """
        # Get weather data
        if args.city:
            data = self.api_client.get_current_weather(
                city=args.city,
                units=args.units
            )
        else:  # coords
            lat, lon = args.coords
            data = self.api_client.get_current_weather(
                lat=lat,
                lon=lon,
                units=args.units
            )
        
        # Format and display
        output = self.formatter.format_current_weather(data, args.units)
        print(output)
    
    def show_forecast(self, args):
        """
        Fetch and display weather forecast
        
        Args:
            args: Parsed command-line arguments
        """
        # Get forecast data
        if args.city:
            data = self.api_client.get_forecast(
                city=args.city,
                units=args.units,
                days=args.days
            )
        else:  # coords
            lat, lon = args.coords
            data = self.api_client.get_forecast(
                lat=lat,
                lon=lon,
                units=args.units,
                days=args.days
            )
        
        # Format and display
        output = self.formatter.format_forecast(data, args.units, args.days)
        print(output)\`
            },
            {
              title: '6. Main Entry Point (main.py)',
              explanation: \`The file you run to start the application.

**What this file does:**
• Entry point for the entire application
• Initializes the CLI
• Handles keyboard interrupts (Ctrl+C)
• Sets up logging (optional)

**How to run:**
\`\`\`bash
# Current weather for a city
python main.py --city "London"

# Weather with imperial units (Fahrenheit)
python main.py --city "New York" --units imperial

# 5-day forecast
python main.py --city "Tokyo" --forecast --days 5

# Using coordinates instead of city name
python main.py --coords 51.5074 -0.1278
\`\`\`\`,
              code: \`# main.py - Application entry point
"""
Purpose: Start the weather application
Why: Single entry point makes it clear how to run the app
Usage: python main.py --city "London"
"""

from cli.app import WeatherCLI


def main():
    """Main function - runs the CLI"""
    try:
        cli = WeatherCLI()
        cli.run()
    except KeyboardInterrupt:
        print("\\n\\n👋 Goodbye!")
        exit(0)


if __name__ == "__main__":
    main()\`
            },
            {
              title: '7. Example .env File',
              explanation: \`Create this file to store your API key securely.

**Steps to get API key:**
1. Go to https://openweathermap.org/api
2. Sign up for a free account
3. Get your API key from the dashboard
4. Create .env file in project root
5. Add your key: OPENWEATHER_API_KEY=your_key_here

**IMPORTANT:**
• Add .env to .gitignore (never commit it!)
• Use .env.example as a template for others
• Never share your API key publicly

**Why environment variables?**
• Keeps secrets out of code
• Easy to change without editing code
• Different keys for development/production
• Won't accidentally commit secrets to Git`,
              code: `# .env.example - Template for environment variables
"""
Purpose: Template showing what environment variables are needed
Why: Helps others set up the project without exposing your secrets
Usage: Copy this to .env and fill in your values
"""

# OpenWeather API Key (get free key from https://openweathermap.org/api)
OPENWEATHER_API_KEY=your_api_key_here

# Optional settings
DEFAULT_CITY=London
CACHE_DURATION=1800
DEFAULT_UNITS=metric


# ============================================
# .gitignore - Add this line!
# ============================================
# .env
# 
# This ensures your .env file with real API keys
# never gets committed to version control
#`
            }
          ],

          practiceExercises: [
            {
              title: 'Add 7-Day Forecast Support',
              difficulty: 'easy',
              description: 'Extend the app to show forecasts beyond 5 days by using the One Call API endpoint',
              hints: ['Check OpenWeather One Call API docs', 'Update API client with new endpoint', 'Modify formatter for extended data']
            },
            {
              title: 'Air Quality Integration',
              difficulty: 'medium',
              description: 'Add air quality index (AQI) data to the weather display using the Air Pollution API',
              hints: ['OpenWeather provides air pollution API', 'Add new method in API client', 'Display AQI with color coding']
            },
            {
              title: 'Historical Weather',
              difficulty: 'medium',
              description: 'Allow users to query weather data from past dates',
              hints: ['Use historical data endpoint', 'Accept date as CLI argument', 'May require paid API tier']
            },
            {
              title: 'Weather Alerts',
              difficulty: 'hard',
              description: 'Set up a system that emails you when temperature goes above/below thresholds',
              hints: ['Use scheduler from Project 3', 'Store user preferences', 'Integrate email notifier', 'Run as background service']
            }
          ],

          bestPractices: {
            apiUsage: [
              'Store API keys in environment variables, never in code',
              'Implement caching to reduce API calls and costs',
              'Handle rate limits gracefully with exponential backoff',
              'Validate user input before making API requests',
              'Use timeouts to prevent hanging requests',
              'Close sessions properly to free resources'
            ],
            errorHandling: [
              'Check HTTP status codes and handle specific errors',
              'Provide helpful error messages to users',
              'Implement retry logic for transient failures',
              'Catch and handle JSON parsing errors',
              'Validate API responses before using data',
              'Log errors for debugging but do not expose secrets'
            ],
            codeOrganization: [
              'Separate API logic from presentation logic',
              'Use type hints for better code documentation',
              'Create reusable utility functions',
              'Keep configuration in dedicated files',
              'Write tests for API client and formatter',
              'Document your functions with docstrings'
            ]
          },

          realWorldApplications: {
            description: 'API integration skills you learned here apply to countless services. Here are examples:',
            examples: [
              {
                domain: 'Social Media',
                apis: ['Twitter API', 'Instagram API', 'Reddit API'],
                useCase: 'Build social media management tools, analytics dashboards, or content schedulers'
              },
              {
                domain: 'Payment Processing',
                apis: ['Stripe API', 'PayPal API', 'Square API'],
                useCase: 'Integrate payment gateways into e-commerce applications'
              },
              {
                domain: 'Maps & Location',
                apis: ['Google Maps API', 'Mapbox API'],
                useCase: 'Build delivery apps, location-based services, or route planners'
              },
              {
                domain: 'Communication',
                apis: ['Twilio API', 'SendGrid API', 'Slack API'],
                useCase: 'Send SMS/emails, create chatbots, or integrate team notifications'
              },
              {
                domain: 'Cloud Services',
                apis: ['AWS API', 'Google Cloud API', 'Azure API'],
                useCase: 'Manage cloud infrastructure, storage, or serverless functions'
              },
              {
                domain: 'AI & Machine Learning',
                apis: ['OpenAI API', 'Hugging Face API'],
                useCase: 'Build AI-powered chatbots, image generation, or text analysis tools'
              }
            ]
          },

          useCases: [
            {
              title: 'Personal Weather Dashboard',
              description: 'Create a daily weather summary that runs automatically every morning',
              example: 'Use scheduler to run script at 7 AM, fetch weather, send summary email or Slack message'
            },
            {
              title: 'Travel Planning Tool',
              description: 'Compare weather across multiple destinations to plan trips',
              example: 'Fetch forecasts for 5 cities, display side-by-side comparison'
            },
            {
              title: 'Farming/Agriculture Monitor',
              description: 'Track temperature, humidity, and precipitation for farm management',
              example: 'Alert when frost is predicted, track rainfall for irrigation planning'
            },
            {
              title: 'Event Planning Assistant',
              description: 'Check weather for outdoor events and suggest backup dates',
              example: 'Wedding planner app that checks forecast and suggests rain-free dates'
            }
          ]
        },
        quiz: [
          {
            question: 'What is the purpose of an API key?',
            options: [
              'To encrypt data sent to the API',
              'To identify and authenticate your application with the API',
              'To make requests faster',
              'To access premium features for free'
            ],
            correctAnswer: 1,
            explanation: 'API keys identify your application to the service, control access, and track usage. They are like passwords for applications.'
          },
          {
            question: 'Why should you never hardcode API keys in your source code?',
            options: [
              'It makes the code run slower',
              'It uses more memory',
              'API keys could be exposed if code is shared or committed to Git',
              'It violates Python syntax rules'
            ],
            correctAnswer: 2,
            explanation: 'Hardcoded API keys can be accidentally shared via Git commits, making them public. Use environment variables instead.'
          },
          {
            question: 'What does HTTP status code 404 mean in an API response?',
            options: [
              'Success - data found',
              'Server error',
              'Resource not found (e.g., city does not exist)',
              'Rate limit exceeded'
            ],
            correctAnswer: 2,
            explanation: '404 means "Not Found" - the requested resource (like a city name) does not exist or was misspelled.'
          },
          {
            question: 'Why is caching API responses beneficial?',
            options: [
              'Makes code more complex',
              'Reduces API calls, improves speed, and avoids rate limits',
              'Increases server load',
              'Makes data less accurate'
            ],
            correctAnswer: 1,
            explanation: 'Caching stores previous responses locally. This reduces API calls (many APIs have rate limits), improves speed, and can save money on paid APIs.'
          },
          {
            question: 'What is the purpose of exponential backoff in retry logic?',
            options: [
              'To retry immediately after failure',
              'To give servers time to recover by waiting longer after each failed attempt',
              'To skip retries entirely',
              'To send more requests faster'
            ],
            correctAnswer: 1,
            explanation: 'Exponential backoff increases wait time between retries (e.g., 1s, 2s, 4s, 8s). This prevents overwhelming a struggling server and is more polite than hammering it with rapid retries.'
          }
        ]
      },
      {
        id: 'project-5-chat-app',
        title: 'Project 5: Real-time Chat Application',
        description: 'Build a real-time chat application using WebSockets. Learn about bidirectional communication, event-driven programming, and building interactive applications that update instantly without page refreshes.',
        difficulty: 'advanced',
        estimatedTime: '4-5 hours',
        prerequisites: ['Flask basics', 'HTML/CSS basics', 'JavaScript basics', 'Client-server architecture'],
        content: {
          overview: `Build a real-time chat application using WebSockets. Learn about bidirectional communication, event-driven programming, and building interactive applications that update instantly without page refreshes.

**What You'll Learn:**

• WebSocket protocol and how it differs from HTTP
• Building real-time, bidirectional communication
• Event-driven programming patterns
• Managing multiple concurrent connections
• Creating chat rooms and private messaging
• Tracking online users in real-time
• Building a web-based chat interface
• Basic authentication and user sessions

**Real-World Applications:**

Real-time features power modern apps - from WhatsApp to Slack to live sports scores. This project teaches you how to build apps that feel instant and responsive.`,

          keyPoints: [
            'Understand WebSocket protocol vs traditional HTTP',
            'Build bidirectional real-time communication',
            'Implement event-driven programming patterns',
            'Manage multiple concurrent user connections',
            'Create chat rooms and broadcasting systems',
            'Track user presence and online status',
            'Build interactive web interfaces',
            'Handle authentication and sessions'
          ],

          fileStructure: `
chat-app/
│
├── server/
│   ├── __init__.py          # Makes server a package
│   ├── app.py               # Main Flask app with SocketIO
│   ├── events.py            # WebSocket event handlers
│   ├── rooms.py             # Chat room management
│   └── users.py             # User session management
│
├── static/
│   ├── css/
│   │   └── style.css        # Chat interface styling
│   ├── js/
│   │   └── chat.js          # Client-side WebSocket logic
│   └── sounds/
│       └── notification.mp3 # Sound for new messages
│
├── templates/
│   ├── index.html           # Landing/login page
│   ├── chat.html            # Main chat interface
│   └── base.html            # Base template for consistency
│
├── data/
│   ├── messages.json        # Message history storage
│   └── users.json           # User data storage
│
├── tests/
│   ├── test_events.py       # Tests for socket events
│   └── test_rooms.py        # Tests for room logic
│
├── requirements.txt         # Project dependencies
├── config.py                # Application configuration
└── run.py                   # Entry point to start server`,

          concepts: [
            {
              name: 'WebSockets',
              description: 'A protocol that creates a persistent, full-duplex connection between client and server. Unlike HTTP (request-response), both sides can send data anytime.',
              why: 'Enables real-time features without polling. Much more efficient for live updates like chat messages, notifications, or live data.'
            },
            {
              name: 'Event-Driven Programming',
              description: 'Code that reacts to events (like "message received", "user joined") rather than running sequentially.',
              why: 'Perfect for asynchronous operations like multiple users chatting simultaneously. Each event triggers specific handler functions.'
            },
            {
              name: 'Broadcasting',
              description: 'Sending a message to multiple connected clients at once (e.g., when one user sends a message, everyone in the room sees it)',
              why: 'Core feature of chat apps and real-time collaboration tools. Keeps everyone in sync.'
            },
            {
              name: 'Rooms/Namespaces',
              description: 'Logical groupings of connections. Users can join/leave rooms (like Slack channels) and messages only go to users in that room.',
              why: 'Allows private conversations, topic-based channels, and organized communication without sending everything to everyone.'
            },
            {
              name: 'Session Management',
              description: 'Tracking who is logged in, their user data, and maintaining state across connections',
              why: 'Identifies users, prevents unauthorized access, and associates messages with usernames.'
            },
            {
              name: 'CORS (Cross-Origin Resource Sharing)',
              description: 'Security feature that controls which domains can connect to your server',
              why: 'Protects your server from unauthorized access while allowing your frontend to connect.'
            }
          ],

          codeExamples: [
            {
              title: '1. Dependencies & Setup',
              explanation: `Setting up a WebSocket server with Flask-SocketIO.

**Key Libraries:**
• Flask - Web framework for serving pages
• Flask-SocketIO - Adds WebSocket support to Flask
• python-socketio - WebSocket implementation
• eventlet - Async networking library for concurrent connections

**Why Flask-SocketIO?**
• Easy integration with Flask
• Handles WebSocket complexities for you
• Fallbacks to polling if WebSockets unavailable
• Built-in room and namespace support`,
              code: `# requirements.txt - Project dependencies
"""
Purpose: All packages needed for the chat application
Why each package:
  - Flask: Web server and routing
  - Flask-SocketIO: WebSocket support for real-time communication
  - python-socketio: Core WebSocket implementation
  - eventlet: Async server for handling many connections
  - Flask-Login: User authentication and sessions
"""

Flask==3.0.0
Flask-SocketIO==5.3.5
python-socketio==5.10.0
eventlet==0.33.3
Flask-Login==0.6.3
python-dotenv==1.0.0

# Optional but recommended
Flask-CORS==4.0.0         # Handle cross-origin requests
Flask-Session==0.5.0      # Server-side session storage`
            },
            {
              title: '2. Application Config (config.py)',
              explanation: `Configuration for the Flask app and SocketIO server.

**Important Settings:**
• SECRET_KEY - Secures sessions (MUST be random in production)
• CORS settings - Allow/deny origins
• Message history limits - Prevent memory issues
• User limits - Control concurrent connections`,
              code: `# config.py - Application configuration
"""
Purpose: Centralized configuration for the chat server
Why: Easy to change settings without modifying code
"""

import os
from datetime import timedelta

class Config:
    """Base configuration"""
    
    # Flask Settings
    SECRET_KEY = os.getenv('SECRET_KEY', 'dev-secret-key-change-in-production')
    DEBUG = os.getenv('FLASK_DEBUG', 'True') == 'True'
    
    # SocketIO Settings
    SOCKETIO_CORS_ALLOWED_ORIGINS = "*"  # Allow all origins (restrict in production!)
    SOCKETIO_PING_TIMEOUT = 60
    SOCKETIO_PING_INTERVAL = 25
    
    # Chat Settings
    MAX_MESSAGE_LENGTH = 500
    MAX_USERNAME_LENGTH = 20
    MAX_ROOM_NAME_LENGTH = 30
    DEFAULT_ROOM = 'general'
    
    # Message History
    MAX_MESSAGES_PER_ROOM = 100
    SAVE_MESSAGE_HISTORY = True
    
    # User Settings
    MAX_USERS_PER_ROOM = 50
    ALLOW_ANONYMOUS = True
    REQUIRE_LOGIN = False
    
    # Session Settings
    SESSION_TYPE = 'filesystem'
    SESSION_PERMANENT = False
    PERMANENT_SESSION_LIFETIME = timedelta(hours=24)


class ProductionConfig(Config):
    """Production-specific settings"""
    DEBUG = False
    SOCKETIO_CORS_ALLOWED_ORIGINS = ['https://yourdomain.com']
    ALLOW_ANONYMOUS = False
    REQUIRE_LOGIN = True


class DevelopmentConfig(Config):
    """Development-specific settings"""
    DEBUG = True
    SOCKETIO_LOGGER = True
    SOCKETIO_ENGINEIO_LOGGER = True`
            },
            {
              title: '3. Main Server (server/app.py)',
              explanation: `The core Flask application with SocketIO initialization.

**What this file does:**
• Initialize Flask app
• Set up SocketIO server
• Configure routes for web pages
• Register event handlers
• Start the server

**Flask-SocketIO vs regular Flask:**
• Regular Flask: HTTP only (request → response)
• Flask-SocketIO: HTTP + WebSocket (persistent connection, bidirectional)`,
              code: `# server/app.py - Main application server
"""
Purpose: Initialize Flask app and SocketIO server
Why: Central point that brings everything together
"""

from flask import Flask, render_template, session, redirect, url_for, request
from flask_socketio import SocketIO
from config import DevelopmentConfig
import os

# Initialize Flask app
app = Flask(__name__, 
            template_folder='../templates',
            static_folder='../static')
app.config.from_object(DevelopmentConfig)

# Initialize SocketIO
socketio = SocketIO(
    app,
    cors_allowed_origins=app.config['SOCKETIO_CORS_ALLOWED_ORIGINS'],
    async_mode='eventlet',  # Use eventlet for async
    logger=app.config.get('SOCKETIO_LOGGER', False),
    engineio_logger=app.config.get('SOCKETIO_ENGINEIO_LOGGER', False)
)

# Import event handlers (after socketio is created)
from server import events

# Store active users and rooms in memory
# In production, use Redis or database
active_users = {}  # {session_id: {username, current_room}}
chat_rooms = {
    'general': {'users': set(), 'messages': []},
    'random': {'users': set(), 'messages': []},
}


@app.route('/')
def index():
    """Landing page / login"""
    if 'username' in session:
        return redirect(url_for('chat'))
    return render_template('index.html')


@app.route('/chat')
def chat():
    """Main chat interface"""
    if 'username' not in session:
        return redirect(url_for('index'))
    
    return render_template(
        'chat.html',
        username=session['username'],
        rooms=list(chat_rooms.keys())
    )


@app.route('/login', methods=['POST'])
def login():
    """Handle login form submission"""
    username = request.form.get('username', '').strip()
    
    # Validate username
    if not username:
        return redirect(url_for('index'))
    
    if len(username) > app.config['MAX_USERNAME_LENGTH']:
        return redirect(url_for('index'))
    
    # Store in session
    session['username'] = username
    session.permanent = True
    
    return redirect(url_for('chat'))


@app.route('/logout')
def logout():
    """Handle logout"""
    session.clear()
    return redirect(url_for('index'))


def get_app():
    """Return the Flask app (for testing)"""
    return app


def get_socketio():
    """Return the SocketIO instance (for testing)"""
    return socketio


if __name__ == '__main__':
    # Run the server
    socketio.run(
        app,
        host='0.0.0.0',
        port=5000,
        debug=True
    )`
            },
            {
              title: '4. WebSocket Events (server/events.py)',
              explanation: `Handle all WebSocket events - the heart of real-time communication.

**Key Events:**
• connect - User connects to server
• disconnect - User leaves
• message - User sends a chat message
• join_room - User joins a chat room
• leave_room - User leaves a room
• typing - User is typing (show indicator)

**Event Flow:**
1. Client emits event (e.g., "message")
2. Server receives event in handler function
3. Server processes (validate, save, etc.)
4. Server broadcasts to other users
5. All connected clients receive and display`,
              code: `# server/events.py - WebSocket event handlers
"""
Purpose: Handle all real-time events (messages, joins, leaves, etc.)
Why: Event-driven architecture - each event has its own handler
"""

from flask import session, request
from flask_socketio import emit, join_room, leave_room, rooms
from datetime import datetime
import json

# Import app and socketio from main app
from server.app import socketio, active_users, chat_rooms, app


@socketio.on('connect')
def handle_connect():
    """
    Handle new WebSocket connection
    
    When: User opens chat page and establishes WebSocket
    What: Add user to tracking, join default room, notify others
    """
    username = session.get('username')
    
    if not username:
        # Disconnect unauthorized users
        return False  # Reject connection
    
    # Track this user
    sid = request.sid  # Session ID for this connection
    active_users[sid] = {
        'username': username,
        'current_room': None,
        'connected_at': datetime.now().isoformat()
    }
    
    print("User connected: %s (SID: %s)" % (username, sid))
    
    # Auto-join default room
    default_room = app.config['DEFAULT_ROOM']
    join_room(default_room)
    
    active_users[sid]['current_room'] = default_room
    chat_rooms[default_room]['users'].add(username)
    
    # Send connection confirmation to this user
    emit('connection_response', {
        'success': True,
        'username': username,
        'room': default_room,
        'message': 'Connected successfully!'
    })
    
    # Notify room that user joined
    emit('user_joined', {
        'username': username,
        'room': default_room,
        'timestamp': datetime.now().isoformat(),
        'users_online': len(chat_rooms[default_room]['users'])
    }, room=default_room, skip_sid=sid)  # Don't send to self
    
    # Send recent message history to new user
    recent_messages = chat_rooms[default_room]['messages'][-50:]  # Last 50 messages
    emit('message_history', {
        'messages': recent_messages
    })


@socketio.on('disconnect')
def handle_disconnect():
    """
    Handle WebSocket disconnection
    
    When: User closes tab, loses internet, or clicks logout
    What: Remove from tracking, notify room members
    """
    sid = request.sid
    
    if sid not in active_users:
        return
    
    user_info = active_users[sid]
    username = user_info['username']
    current_room = user_info.get('current_room')
    
    # Remove from room
    if current_room and current_room in chat_rooms:
        chat_rooms[current_room]['users'].discard(username)
        
        # Notify room
        emit('user_left', {
            'username': username,
            'room': current_room,
            'timestamp': datetime.now().isoformat(),
            'users_online': len(chat_rooms[current_room]['users'])
        }, room=current_room)
    
    # Remove from tracking
    del active_users[sid]
    
    print("User disconnected: %s" % username)


@socketio.on('send_message')
def handle_message(data):
    """
    Handle incoming chat message
    
    Args:
        data: Dict with 'message' and optionally 'room'
    
    What: Validate message, save to history, broadcast to room
    """
    sid = request.sid
    
    if sid not in active_users:
        emit('error', {'message': 'Not authenticated'})
        return
    
    user_info = active_users[sid]
    username = user_info['username']
    message_text = data.get('message', '').strip()
    room = data.get('room', user_info['current_room'])
    
    # Validate message
    if not message_text:
        return
    
    if len(message_text) > app.config['MAX_MESSAGE_LENGTH']:
        emit('error', {'message': 'Message too long'})
        return
    
    # Create message object
    message_obj = {
        'username': username,
        'message': message_text,
        'timestamp': datetime.now().isoformat(),
        'room': room
    }
    
    # Save to message history
    if room in chat_rooms:
        chat_rooms[room]['messages'].append(message_obj)
        
        # Limit history size
        max_msgs = app.config['MAX_MESSAGES_PER_ROOM']
        if len(chat_rooms[room]['messages']) > max_msgs:
            chat_rooms[room]['messages'] = chat_rooms[room]['messages'][-max_msgs:]
    
    # Broadcast to room (including sender for confirmation)
    emit('receive_message', message_obj, room=room)
    
    print("[%s] %s: %s" % (room, username, message_text))


@socketio.on('join_room_request')
def handle_join_room(data):
    """
    Handle user joining a chat room
    
    Args:
        data: Dict with 'room' name
    """
    sid = request.sid
    
    if sid not in active_users:
        return
    
    user_info = active_users[sid]
    username = user_info['username']
    new_room = data.get('room', '').strip()
    current_room = user_info.get('current_room')
    
    # Validate room name
    if not new_room or new_room == current_room:
        return
    
    # Create room if it doesn't exist
    if new_room not in chat_rooms:
        chat_rooms[new_room] = {'users': set(), 'messages': []}
    
    # Check room capacity
    if len(chat_rooms[new_room]['users']) >= app.config['MAX_USERS_PER_ROOM']:
        emit('error', {'message': 'Room is full'})
        return
    
    # Leave current room
    if current_room:
        leave_room(current_room)
        chat_rooms[current_room]['users'].discard(username)
        
        emit('user_left', {
            'username': username,
            'room': current_room,
            'timestamp': datetime.now().isoformat(),
            'users_online': len(chat_rooms[current_room]['users'])
        }, room=current_room)
    
    # Join new room
    join_room(new_room)
    chat_rooms[new_room]['users'].add(username)
    active_users[sid]['current_room'] = new_room
    
    # Confirm to user
    emit('room_joined', {
        'room': new_room,
        'users': list(chat_rooms[new_room]['users'])
    })
    
    # Notify new room
    emit('user_joined', {
        'username': username,
        'room': new_room,
        'timestamp': datetime.now().isoformat(),
        'users_online': len(chat_rooms[new_room]['users'])
    }, room=new_room, skip_sid=sid)
    
    # Send message history
    recent_messages = chat_rooms[new_room]['messages'][-50:]
    emit('message_history', {'messages': recent_messages})


@socketio.on('typing')
def handle_typing(data):
    """
    Handle typing indicator
    
    Args:
        data: Dict with 'is_typing' boolean
    
    Shows "User is typing..." to others in the room
    """
    sid = request.sid
    
    if sid not in active_users:
        return
    
    user_info = active_users[sid]
    username = user_info['username']
    room = user_info.get('current_room')
    is_typing = data.get('is_typing', False)
    
    if room:
        emit('user_typing', {
            'username': username,
            'is_typing': is_typing
        }, room=room, skip_sid=sid)


@socketio.on('request_online_users')
def handle_online_users_request():
    """Send list of online users in current room"""
    sid = request.sid
    
    if sid not in active_users:
        return
    
    room = active_users[sid].get('current_room')
    
    if room and room in chat_rooms:
        emit('online_users', {
            'room': room,
            'users': list(chat_rooms[room]['users']),
            'count': len(chat_rooms[room]['users'])
        })`
            },
            {
              title: '5. Client-Side JavaScript (static/js/chat.js)',
              explanation: `The browser-side code that connects to the server and handles UI updates.

**What this file does:**
• Connect to WebSocket server
• Send messages when user types and hits Enter
• Receive messages from server and display them
• Update online user list
• Show typing indicators
• Play notification sounds

**Key SocketIO Client Methods:**
• socket.emit() - Send event to server
• socket.on() - Listen for events from server
• socket.connect() - Establish connection
• socket.disconnect() - Close connection`,
              code: `// static/js/chat.js - Client-side WebSocket logic
/**
 * Purpose: Handle all client-side real-time communication
 * Why: Separates logic from HTML, makes code reusable
 */

// Initialize Socket.IO connection
const socket = io();

// DOM elements
const messageForm = document.getElementById('message-form');
const messageInput = document.getElementById('message-input');
const messagesContainer = document.getElementById('messages');
const onlineUsersList = document.getElementById('online-users');
const currentRoomSpan = document.getElementById('current-room');

// Current user info (from server template)
const currentUsername = "{{ username }}";
let currentRoom = "{{ rooms[0] }}";  // Start in first room

// Connection events
socket.on('connect', function() {
    console.log('Connected to server');
    showSystemMessage('Connected to chat server');
});

socket.on('disconnect', function() {
    console.log('Disconnected from server');
    showSystemMessage('Disconnected from server', 'error');
});

socket.on('connection_response', function(data) {
    console.log('Connection confirmed:', data);
    currentRoom = data.room;
    updateRoomDisplay(data.room);
});

// Message events
socket.on('receive_message', function(data) {
    displayMessage(data);
    
    // Play sound if message from someone else
    if (data.username !== currentUsername) {
        playNotificationSound();
    }
    
    // Scroll to bottom
    scrollToBottom();
});

socket.on('message_history', function(data) {
    // Clear existing messages
    messagesContainer.innerHTML = '';
    
    // Display all historical messages
    data.messages.forEach(function(msg) {
        displayMessage(msg, false);  // Don't play sound for history
    });
    
    scrollToBottom();
});

// User events
socket.on('user_joined', function(data) {
    showSystemMessage(data.username + ' joined the room');
    updateOnlineCount(data.users_online);
});

socket.on('user_left', function(data) {
    showSystemMessage(data.username + ' left the room');
    updateOnlineCount(data.users_online);
});

socket.on('online_users', function(data) {
    updateOnlineUsersList(data.users);
});

socket.on('user_typing', function(data) {
    showTypingIndicator(data.username, data.is_typing);
});

// Room events
socket.on('room_joined', function(data) {
    currentRoom = data.room;
    updateRoomDisplay(data.room);
    updateOnlineUsersList(data.users);
    showSystemMessage('You joined ' + data.room);
});

// Error events
socket.on('error', function(data) {
    showSystemMessage(data.message, 'error');
});

// Send message
messageForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const message = messageInput.value.trim();
    
    if (message) {
        socket.emit('send_message', {
            message: message,
            room: currentRoom
        });
        
        messageInput.value = '';
        stopTyping();
    }
});

// Typing indicator
let typingTimer;
const typingDelay = 1000;  // 1 second

messageInput.addEventListener('input', function() {
    clearTimeout(typingTimer);
    startTyping();
    
    typingTimer = setTimeout(function() {
        stopTyping();
    }, typingDelay);
});

function startTyping() {
    socket.emit('typing', { is_typing: true });
}

function stopTyping() {
    socket.emit('typing', { is_typing: false });
}

// UI Functions
function displayMessage(data, playSound = true) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message';
    
    if (data.username === currentUsername) {
        messageDiv.classList.add('own-message');
    }
    
    const timestamp = new Date(data.timestamp).toLocaleTimeString();
    
    messageDiv.innerHTML = 
        '<div class="message-header">' +
            '<span class="username">' + escapeHtml(data.username) + '</span>' +
            '<span class="timestamp">' + timestamp + '</span>' +
        '</div>' +
        '<div class="message-body">' + escapeHtml(data.message) + '</div>';
    
    messagesContainer.appendChild(messageDiv);
}

function showSystemMessage(text, type = 'info') {
    const msgDiv = document.createElement('div');
    msgDiv.className = 'system-message ' + type;
    msgDiv.textContent = text;
    messagesContainer.appendChild(msgDiv);
    scrollToBottom();
}

function updateOnlineUsersList(users) {
    onlineUsersList.innerHTML = '';
    
    users.forEach(function(username) {
        const li = document.createElement('li');
        li.textContent = username;
        
        if (username === currentUsername) {
            li.classList.add('current-user');
        }
        
        onlineUsersList.appendChild(li);
    });
}

function updateOnlineCount(count) {
    document.getElementById('online-count').textContent = count;
}

function updateRoomDisplay(room) {
    currentRoomSpan.textContent = room;
}

function scrollToBottom() {
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function playNotificationSound() {
    const audio = new Audio('/static/sounds/notification.mp3');
    audio.volume = 0.3;
    audio.play().catch(function(e) {
        // Ignore errors (browser might block autoplay)
    });
}

function showTypingIndicator(username, isTyping) {
    const indicatorId = 'typing-' + username;
    let indicator = document.getElementById(indicatorId);
    
    if (isTyping) {
        if (!indicator) {
            indicator = document.createElement('div');
            indicator.id = indicatorId;
            indicator.className = 'typing-indicator';
            indicator.textContent = username + ' is typing...';
            messagesContainer.appendChild(indicator);
            scrollToBottom();
        }
    } else {
        if (indicator) {
            indicator.remove();
        }
    }
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Join room function
function joinRoom(roomName) {
    socket.emit('join_room_request', { room: roomName });
}

// Request online users on load
socket.emit('request_online_users');`
            },
            {
              title: '6. Chat HTML Template (templates/chat.html)',
              explanation: `The user interface for the chat application.

**What this template includes:**
• Message display area (scrollable)
• Input form for typing messages
• Online users sidebar
• Room switcher
• Logout button

**Jinja2 Templating:**
{{ username }} - Insert Python variable
{% for %} - Loop through data
{% if %} - Conditional rendering`,
              code: `<!-- templates/chat.html - Main chat interface -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chat - {{ username }}</title>
    <link rel="stylesheet" href="{{ url_for('static', filename='css/style.css') }}">
</head>
<body>
    <div class="chat-container">
        <!-- Sidebar -->
        <aside class="sidebar">
            <div class="sidebar-header">
                <h3>Chat Rooms</h3>
            </div>
            
            <div class="rooms-list">
                {% for room in rooms %}
                <div class="room-item" onclick="joinRoom('{{ room }}')">
                    # {{ room }}
                </div>
                {% endfor %}
            </div>
            
            <div class="sidebar-footer">
                <p>Logged in as:<br><strong>{{ username }}</strong></p>
                <a href="{{ url_for('logout') }}" class="btn-logout">Logout</a>
            </div>
        </aside>
        
        <!-- Main Chat Area -->
        <main class="chat-main">
            <div class="chat-header">
                <h2>#<span id="current-room">general</span></h2>
                <div class="online-indicator">
                    <span class="online-dot"></span>
                    <span id="online-count">0</span> online
                </div>
            </div>
            
            <div id="messages" class="messages-container">
                <!-- Messages will appear here -->
            </div>
            
            <form id="message-form" class="message-form">
                <input 
                    type="text" 
                    id="message-input" 
                    placeholder="Type a message..." 
                    autocomplete="off"
                    maxlength="500"
                    required
                >
                <button type="submit">Send</button>
            </form>
        </main>
        
        <!-- Online Users -->
        <aside class="users-sidebar">
            <div class="sidebar-header">
                <h3>Online Users</h3>
            </div>
            <ul id="online-users" class="users-list">
                <!-- Users will appear here -->
            </ul>
        </aside>
    </div>
    
    <!-- Socket.IO Client Library -->
    <script src="https://cdn.socket.io/4.5.4/socket.io.min.js"></script>
    
    <!-- Our custom chat script -->
    <script src="{{ url_for('static', filename='js/chat.js') }}"></script>
</body>
</html>`
            },
            {
              title: '7. Run Server (run.py)',
              explanation: `Entry point to start the chat server.

**How to run:**
\`\`\`bash
python run.py
\`\`\`

Then open http://localhost:5000 in multiple browser windows to test!

**Why separate run.py from app.py?**
• Cleaner imports for testing
• Can run with different configs
• Production deployment easier (use WSGI server)`,
              code: `# run.py - Start the chat server
"""
Purpose: Entry point to run the application
Why: Separates server startup from app definition
Usage: python run.py
"""

from server.app import app, socketio

if __name__ == '__main__':
    print("=" * 50)
    print("🚀 Starting Real-Time Chat Server")
    print("=" * 50)
    print("Server: http://localhost:5000")
    print("Press Ctrl+C to stop")
    print("=" * 50)
    
    # Run with SocketIO (not app.run()!)
    socketio.run(
        app,
        host='0.0.0.0',
        port=5000,
        debug=True,
        use_reloader=True,
        log_output=True
    )`
            }
          ],

          practiceExercises: [
            {
              title: 'Private Messaging',
              difficulty: 'medium',
              description: 'Add ability to send direct messages to specific users (like Discord DMs)',
              hints: ['Create private rooms named after user pairs', 'Add UI button to start DM', 'Emit to specific socket ID instead of room']
            },
            {
              title: 'Message Reactions',
              difficulty: 'easy',
              description: 'Allow users to react to messages with emojis (like Slack reactions)',
              hints: ['Store reactions with message object', 'Add click handler to messages', 'Broadcast reaction event to room']
            },
            {
              title: 'File Sharing',
              difficulty: 'hard',
              description: 'Allow users to upload and share files in chat',
              hints: ['Use Flask file upload', 'Store files in /uploads/', 'Send file URL via WebSocket', 'Add image preview for images']
            },
            {
              title: 'User Presence Status',
              difficulty: 'medium',
              description: 'Show if users are online/away/busy with custom status messages',
              hints: ['Track last activity timestamp', 'Add status field to user object', 'Emit status change events', 'Show colored indicators']
            }
          ],

          bestPractices: {
            security: [
              'Validate all input from clients (never trust client data)',
              'Implement authentication before allowing connections',
              'Sanitize messages to prevent XSS attacks',
              'Rate limit messages to prevent spam',
              'Use HTTPS in production (secure WebSocket = wss://)',
              'Store secrets in environment variables'
            ],
            performance: [
              'Limit message history size to prevent memory issues',
              'Use Redis or database for persistence (not in-memory dicts)',
              'Implement pagination for message history',
              'Compress messages over WebSocket',
              'Use rooms to avoid broadcasting to all users',
              'Clean up disconnected sessions periodically'
            ],
            codeOrganization: [
              'Separate event handlers into logical files',
              'Use dedicated classes for users and rooms',
              'Keep UI logic in JavaScript, business logic in Python',
              'Write tests for event handlers',
              'Document all events and their payloads',
              'Use TypeScript for client code in larger projects'
            ]
          },

          realWorldApplications: {
            description: 'WebSockets power real-time features in countless applications:',
            examples: [
              {
                domain: 'Communication',
                apps: ['Slack', 'Discord', 'WhatsApp Web', 'Microsoft Teams'],
                features: 'Instant messaging, typing indicators, online presence, notifications'
              },
              {
                domain: 'Collaboration',
                apps: ['Google Docs', 'Figma', 'Notion', 'Miro'],
                features: 'Real-time editing, cursor positions, live updates across users'
              },
              {
                domain: 'Gaming',
                apps: ['Multiplayer games', 'Online poker', 'Chess platforms'],
                features: 'Real-time game state, player actions, live scoreboards'
              },
              {
                domain: 'Finance',
                apps: ['Trading platforms', 'Crypto exchanges', 'Stock tickers'],
                features: 'Live price updates, order book changes, trade notifications'
              },
              {
                domain: 'Monitoring',
                apps: ['Server dashboards', 'Analytics tools', 'IoT platforms'],
                features: 'Live metrics, alerts, real-time graphs and charts'
              },
              {
                domain: 'Social Media',
                apps: ['Twitter', 'Instagram', 'TikTok'],
                features: 'Live comments, like counts, follower notifications'
              }
            ]
          },

          useCases: [
            {
              title: 'Team Communication Tool',
              description: 'Build a Slack-like app for internal company communication',
              example: 'Add channels, private DMs, file sharing, @mentions, search'
            },
            {
              title: 'Live Customer Support',
              description: 'Real-time chat between customers and support agents',
              example: 'Queue management, agent assignment, chat history, canned responses'
            },
            {
              title: 'Multiplayer Game Lobby',
              description: 'Real-time lobby where players can join games and chat',
              example: 'Game matchmaking, ready-up system, team chat, spectator mode'
            },
            {
              title: 'Live Auction Platform',
              description: 'Real-time bidding system for online auctions',
              example: 'Bid updates, countdown timer, winner announcements, bid history'
            }
          ]
        },
        quiz: [
          {
            question: 'How does WebSocket differ from traditional HTTP?',
            options: [
              'WebSocket is faster than HTTP',
              'WebSocket maintains a persistent, bidirectional connection while HTTP is request-response',
              'WebSocket is more secure than HTTP',
              'WebSocket only works with JavaScript'
            ],
            correctAnswer: 1,
            explanation: 'WebSocket creates a persistent connection where both client and server can send data anytime. HTTP requires the client to initiate each request and wait for a response.'
          },
          {
            question: 'What is the purpose of "rooms" in Socket.IO?',
            options: [
              'To store user data',
              'To group connections so messages only go to specific subsets of users',
              'To improve performance',
              'To handle authentication'
            ],
            correctAnswer: 1,
            explanation: 'Rooms are logical groups of connections. Broadcasting to a room only sends the message to users in that room, not to everyone connected to the server.'
          },
          {
            question: 'Why is input validation important in chat applications?',
            options: [
              'To make messages shorter',
              'To prevent XSS attacks and spam, and ensure data integrity',
              'To improve typing speed',
              'To save bandwidth'
            ],
            correctAnswer: 1,
            explanation: 'Client data can never be trusted. Validation prevents malicious code injection (XSS), spam, and ensures messages meet length and format requirements.'
          },
          {
            question: 'What does "broadcasting" mean in WebSocket context?',
            options: [
              'Sending data to the server',
              'Sending a message to multiple connected clients at once',
              'Encrypting messages',
              'Saving messages to database'
            ],
            correctAnswer: 1,
            explanation: 'Broadcasting sends the same message to multiple clients simultaneously - like when one user sends a chat message and everyone in the room sees it.'
          },
          {
            question: 'Why use eventlet or async mode with Flask-SocketIO?',
            options: [
              'To make the code simpler',
              'To handle multiple concurrent WebSocket connections efficiently without blocking',
              'To reduce memory usage',
              'To improve security'
            ],
            correctAnswer: 1,
            explanation: 'Async libraries like eventlet allow the server to handle many connections concurrently without creating a thread per connection. This is essential for real-time apps with many users.'
          }
        ]
      }
    ]
  };
