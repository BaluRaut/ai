// OOP Deep Dive - Classes, Inheritance, Design Patterns
export const oopDeepAssignments = [
  {
    id: 'oop-1',
    title: 'Bank Account Class',
    difficulty: 'Easy',
    description: 'Create a complete Bank Account class with encapsulation. Foundation of OOP.',
    hints: [
      'Use private attributes with underscore prefix',
      'Implement deposit, withdraw, get_balance',
      'Validate transactions'
    ],
    starterCode: `class BankAccount:
    """
    Bank account with:
    - Private balance
    - Deposit (positive amounts only)
    - Withdraw (if sufficient funds)
    - Transaction history
    """
    
    def __init__(self, owner, initial_balance=0):
        # Your code here:
        pass
    
    def deposit(self, amount):
        """Deposit money. Raise ValueError if amount <= 0"""
        pass
    
    def withdraw(self, amount):
        """Withdraw money. Raise ValueError if insufficient funds"""
        pass
    
    def get_balance(self):
        """Return current balance"""
        pass
    
    def get_history(self):
        """Return transaction history"""
        pass

# Test
account = BankAccount("John", 100)
account.deposit(50)
account.withdraw(30)
print(f"Balance: {account.get_balance()}")  # 120
print(f"History: {account.get_history()}")

try:
    account.withdraw(500)
except ValueError as e:
    print(f"Error: {e}")
`,
    solution: `class BankAccount:
    def __init__(self, owner, initial_balance=0):
        self.owner = owner
        self._balance = initial_balance
        self._history = [("initial", initial_balance)]
    
    def deposit(self, amount):
        if amount <= 0:
            raise ValueError("Deposit amount must be positive")
        self._balance += amount
        self._history.append(("deposit", amount))
        return self._balance
    
    def withdraw(self, amount):
        if amount <= 0:
            raise ValueError("Withdrawal amount must be positive")
        if amount > self._balance:
            raise ValueError("Insufficient funds")
        self._balance -= amount
        self._history.append(("withdraw", -amount))
        return self._balance
    
    def get_balance(self):
        return self._balance
    
    def get_history(self):
        return self._history.copy()

account = BankAccount("John", 100)
account.deposit(50)
account.withdraw(30)
print(f"Balance: {account.get_balance()}")
print(f"History: {account.get_history()}")

try:
    account.withdraw(500)
except ValueError as e:
    print(f"Error: {e}")`
  },
  {
    id: 'oop-2',
    title: 'Inheritance - Shape Hierarchy',
    difficulty: 'Medium',
    description: 'Create a shape class hierarchy with polymorphism. Classic OOP interview question.',
    hints: [
      'Base class Shape with abstract methods',
      'Circle, Rectangle, Triangle inherit from Shape',
      'Each implements area() and perimeter()'
    ],
    starterCode: `import math
from abc import ABC, abstractmethod

class Shape(ABC):
    """Abstract base class for shapes"""
    
    @abstractmethod
    def area(self):
        pass
    
    @abstractmethod
    def perimeter(self):
        pass

class Circle(Shape):
    # Your code here:
    pass

class Rectangle(Shape):
    # Your code here:
    pass

class Triangle(Shape):
    """Triangle with sides a, b, c"""
    # Your code here:
    pass

# Test polymorphism
shapes = [
    Circle(5),
    Rectangle(4, 6),
    Triangle(3, 4, 5)
]

for shape in shapes:
    print(f"{shape.__class__.__name__}:")
    print(f"  Area: {shape.area():.2f}")
    print(f"  Perimeter: {shape.perimeter():.2f}")
`,
    solution: `import math
from abc import ABC, abstractmethod

class Shape(ABC):
    @abstractmethod
    def area(self):
        pass
    
    @abstractmethod
    def perimeter(self):
        pass

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius
    
    def area(self):
        return math.pi * self.radius ** 2
    
    def perimeter(self):
        return 2 * math.pi * self.radius

class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height
    
    def area(self):
        return self.width * self.height
    
    def perimeter(self):
        return 2 * (self.width + self.height)

class Triangle(Shape):
    def __init__(self, a, b, c):
        self.a, self.b, self.c = a, b, c
    
    def area(self):
        # Heron's formula
        s = (self.a + self.b + self.c) / 2
        return math.sqrt(s * (s-self.a) * (s-self.b) * (s-self.c))
    
    def perimeter(self):
        return self.a + self.b + self.c

shapes = [Circle(5), Rectangle(4, 6), Triangle(3, 4, 5)]

for shape in shapes:
    print(f"{shape.__class__.__name__}:")
    print(f"  Area: {shape.area():.2f}")
    print(f"  Perimeter: {shape.perimeter():.2f}")`
  },
  {
    id: 'oop-3',
    title: 'Property Decorators',
    difficulty: 'Medium',
    description: 'Use @property for controlled attribute access. Python-specific OOP feature.',
    hints: [
      '@property for getter',
      '@name.setter for setter',
      'Validate in setter'
    ],
    starterCode: `class Temperature:
    """
    Temperature class that stores in Celsius internally.
    Provides both Celsius and Fahrenheit access.
    
    Validation: Temperature cannot go below absolute zero (-273.15°C)
    """
    
    def __init__(self, celsius=0):
        # Your code here:
        pass
    
    @property
    def celsius(self):
        # Your code here:
        pass
    
    @celsius.setter
    def celsius(self, value):
        # Your code here:
        pass
    
    @property
    def fahrenheit(self):
        # Your code here:
        pass
    
    @fahrenheit.setter
    def fahrenheit(self, value):
        # Your code here:
        pass

# Test
temp = Temperature(25)
print(f"Celsius: {temp.celsius}")       # 25
print(f"Fahrenheit: {temp.fahrenheit}") # 77.0

temp.fahrenheit = 100
print(f"Celsius: {temp.celsius}")       # 37.78

try:
    temp.celsius = -300  # Below absolute zero
except ValueError as e:
    print(f"Error: {e}")
`,
    solution: `class Temperature:
    def __init__(self, celsius=0):
        self.celsius = celsius  # Uses setter for validation
    
    @property
    def celsius(self):
        return self._celsius
    
    @celsius.setter
    def celsius(self, value):
        if value < -273.15:
            raise ValueError("Temperature below absolute zero")
        self._celsius = value
    
    @property
    def fahrenheit(self):
        return self._celsius * 9/5 + 32
    
    @fahrenheit.setter
    def fahrenheit(self, value):
        self.celsius = (value - 32) * 5/9

temp = Temperature(25)
print(f"Celsius: {temp.celsius}")
print(f"Fahrenheit: {temp.fahrenheit}")

temp.fahrenheit = 100
print(f"Celsius: {temp.celsius:.2f}")

try:
    temp.celsius = -300
except ValueError as e:
    print(f"Error: {e}")`
  },
  {
    id: 'oop-4',
    title: 'Singleton Pattern',
    difficulty: 'Hard',
    description: 'Implement Singleton design pattern. Common interview question and real-world pattern.',
    hints: [
      'Only one instance should exist',
      'Use class variable to store instance',
      'Override __new__ method'
    ],
    starterCode: `class DatabaseConnection:
    """
    Singleton: Only one database connection should exist.
    
    All calls to DatabaseConnection() should return the same instance.
    """
    _instance = None
    
    def __new__(cls, *args, **kwargs):
        # Your code here:
        pass
    
    def __init__(self, host="localhost", port=5432):
        # Avoid re-initialization
        if not hasattr(self, '_initialized'):
            # Your code here:
            pass
    
    def connect(self):
        pass
    
    def query(self, sql):
        pass

# Test Singleton
db1 = DatabaseConnection("server1", 5432)
db2 = DatabaseConnection("server2", 3306)  # Should return same instance!

print(f"db1 is db2: {db1 is db2}")  # True
print(f"db1 host: {db1.host}")       # server1 (first initialization)
print(f"db2 host: {db2.host}")       # server1 (same instance)
print(f"db1 id: {id(db1)}")
print(f"db2 id: {id(db2)}")          # Same id
`,
    solution: `class DatabaseConnection:
    _instance = None
    
    def __new__(cls, *args, **kwargs):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
        return cls._instance
    
    def __init__(self, host="localhost", port=5432):
        if not hasattr(self, '_initialized'):
            self.host = host
            self.port = port
            self._initialized = True
            print(f"Initialized connection to {host}:{port}")
    
    def connect(self):
        return f"Connected to {self.host}:{self.port}"
    
    def query(self, sql):
        return f"Executing on {self.host}: {sql}"

db1 = DatabaseConnection("server1", 5432)
db2 = DatabaseConnection("server2", 3306)

print(f"db1 is db2: {db1 is db2}")
print(f"db1 host: {db1.host}")
print(f"db2 host: {db2.host}")
print(f"db1 id: {id(db1)}")
print(f"db2 id: {id(db2)}")`
  },
  {
    id: 'oop-5',
    title: 'Factory Pattern',
    difficulty: 'Hard',
    description: 'Implement Factory design pattern for object creation. Used in frameworks and libraries.',
    hints: [
      'Factory method creates objects based on input',
      'Decouples creation from usage',
      'Use class methods or separate factory class'
    ],
    starterCode: `from abc import ABC, abstractmethod

class Notification(ABC):
    """Abstract notification class"""
    
    @abstractmethod
    def send(self, message):
        pass

class EmailNotification(Notification):
    def __init__(self, email):
        self.email = email
    
    def send(self, message):
        return f"Email to {self.email}: {message}"

class SMSNotification(Notification):
    def __init__(self, phone):
        self.phone = phone
    
    def send(self, message):
        return f"SMS to {self.phone}: {message}"

class PushNotification(Notification):
    def __init__(self, device_id):
        self.device_id = device_id
    
    def send(self, message):
        return f"Push to {self.device_id}: {message}"

class NotificationFactory:
    """
    Factory that creates appropriate notification based on type.
    
    Types: "email", "sms", "push"
    """
    
    @staticmethod
    def create(notification_type, **kwargs):
        # Your code here:
        pass

# Test
notifications = [
    NotificationFactory.create("email", email="user@example.com"),
    NotificationFactory.create("sms", phone="+1234567890"),
    NotificationFactory.create("push", device_id="device_abc123"),
]

for notif in notifications:
    print(notif.send("Hello World!"))
`,
    solution: `from abc import ABC, abstractmethod

class Notification(ABC):
    @abstractmethod
    def send(self, message):
        pass

class EmailNotification(Notification):
    def __init__(self, email):
        self.email = email
    
    def send(self, message):
        return f"Email to {self.email}: {message}"

class SMSNotification(Notification):
    def __init__(self, phone):
        self.phone = phone
    
    def send(self, message):
        return f"SMS to {self.phone}: {message}"

class PushNotification(Notification):
    def __init__(self, device_id):
        self.device_id = device_id
    
    def send(self, message):
        return f"Push to {self.device_id}: {message}"

class NotificationFactory:
    @staticmethod
    def create(notification_type, **kwargs):
        factories = {
            "email": EmailNotification,
            "sms": SMSNotification,
            "push": PushNotification
        }
        
        if notification_type not in factories:
            raise ValueError(f"Unknown type: {notification_type}")
        
        return factories[notification_type](**kwargs)

notifications = [
    NotificationFactory.create("email", email="user@example.com"),
    NotificationFactory.create("sms", phone="+1234567890"),
    NotificationFactory.create("push", device_id="device_abc123"),
]

for notif in notifications:
    print(notif.send("Hello World!"))`
  },
  {
    id: 'oop-6',
    title: 'Dunder Methods (Magic Methods)',
    difficulty: 'Medium',
    description: 'Implement special methods for custom class behavior. Makes classes Pythonic.',
    hints: [
      '__str__ for string representation',
      '__eq__, __lt__ for comparisons',
      '__add__ for + operator',
      '__len__ for len()'
    ],
    starterCode: `class Vector:
    """
    2D Vector class with full operator support.
    
    Implement:
    - String representation
    - Equality comparison
    - Addition and subtraction
    - Scalar multiplication
    - Magnitude (length)
    """
    
    def __init__(self, x, y):
        self.x = x
        self.y = y
    
    def __str__(self):
        # Your code here:
        pass
    
    def __repr__(self):
        # Your code here:
        pass
    
    def __eq__(self, other):
        # Your code here:
        pass
    
    def __add__(self, other):
        # Your code here:
        pass
    
    def __sub__(self, other):
        # Your code here:
        pass
    
    def __mul__(self, scalar):
        # Your code here:
        pass
    
    def __abs__(self):
        """Return magnitude of vector"""
        # Your code here:
        pass

# Test
v1 = Vector(3, 4)
v2 = Vector(1, 2)

print(f"v1: {v1}")              # Vector(3, 4)
print(f"v1 + v2: {v1 + v2}")    # Vector(4, 6)
print(f"v1 - v2: {v1 - v2}")    # Vector(2, 2)
print(f"v1 * 3: {v1 * 3}")      # Vector(9, 12)
print(f"|v1|: {abs(v1)}")       # 5.0
print(f"v1 == v2: {v1 == v2}")  # False
print(f"v1 == Vector(3, 4): {v1 == Vector(3, 4)}")  # True
`,
    solution: `import math

class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    
    def __str__(self):
        return f"Vector({self.x}, {self.y})"
    
    def __repr__(self):
        return f"Vector({self.x}, {self.y})"
    
    def __eq__(self, other):
        if not isinstance(other, Vector):
            return False
        return self.x == other.x and self.y == other.y
    
    def __add__(self, other):
        return Vector(self.x + other.x, self.y + other.y)
    
    def __sub__(self, other):
        return Vector(self.x - other.x, self.y - other.y)
    
    def __mul__(self, scalar):
        return Vector(self.x * scalar, self.y * scalar)
    
    def __abs__(self):
        return math.sqrt(self.x ** 2 + self.y ** 2)

v1 = Vector(3, 4)
v2 = Vector(1, 2)

print(f"v1: {v1}")
print(f"v1 + v2: {v1 + v2}")
print(f"v1 - v2: {v1 - v2}")
print(f"v1 * 3: {v1 * 3}")
print(f"|v1|: {abs(v1)}")
print(f"v1 == v2: {v1 == v2}")
print(f"v1 == Vector(3, 4): {v1 == Vector(3, 4)}")`
  }
];

export default oopDeepAssignments;
