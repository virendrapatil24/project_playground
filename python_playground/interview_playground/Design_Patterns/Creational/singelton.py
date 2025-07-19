"""
The Singleton Pattern ensures that a class has only one instance and
provides a global point of access to that instance.

When to Use It
- You need exactly one instance of a class to coordinate actions
(e.g., database connections, logging, configuration manager).

- You want to control access to shared resources.
"""


# Example 1:  Logger
class Logger:
    _instance = None

    def __new__(cls):  # new is called before init
        if not cls._instance:  # check if we already have an instance
            cls._instance = super().__new__(cls)
        return cls._instance  # __init__ is called only if we return an instance

    def log(self, message):
        print(f"[LOG]: {message}")


logger1 = Logger()
logger2 = Logger()
logger1.log("Application started")  # [LOG]: Application started
print(logger1 is logger2)  # True


# Example 2:  Database Connection Manager
class DatabaseConnection:
    _instance = None

    def __new__(cls):
        if not cls._instance:
            cls._instance = super().__new__(cls)
            cls._instance.connection = cls._connect()
        return cls._instance

    @staticmethod
    def _connect():
        print("Connecting to database...")
        return "DB_CONNECTION_OBJECT"


db1 = DatabaseConnection()
db2 = DatabaseConnection()
print(db1.connection)  # DB_CONNECTION_OBJECT
print(db1 is db2)  # True
