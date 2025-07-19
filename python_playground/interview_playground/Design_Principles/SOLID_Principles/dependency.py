"""
D — Dependency Inversion Principle

High-level modules should not depend on low-level modules.
Both should depend on abstractions.

Also: Abstractions should not depend on details.
Details should depend on abstractions.

High-level Module(or Class): Class that executes an action with a tool.
Low-level Module (or Class): The tool that is needed to execute the action
Abstraction: Represents an interface that connects the two Classes.
Details: How the tool works

Goal - This principle aims at reducing the dependency of a high-level
Class on the low-level Class by introducing an interface.
"""


# Bad Example (Tight coupling)
class MySQLDatabase:
    def connect(self):
        print("Connecting to MySQL...")


class App:
    def __init__(self):
        self.db = MySQLDatabase()  # tightly coupled

    def start(self):
        self.db.connect()


# Good Example (Follow DIP with abstraction)
from abc import ABC, abstractmethod


class Database(ABC):
    @abstractmethod
    def connect(self):
        pass


class MySQLDatabase(Database):
    def connect(self):
        print("Connecting to MySQL...")


class PostgreSQLDatabase(Database):
    def connect(self):
        print("Connecting to PostgreSQL...")


class App:
    def __init__(self, db: Database):
        self.db = db  # depends on abstraction

    def start(self):
        self.db.connect()


# Use it like this:
app = App(MySQLDatabase())  # easily swappable
app.start()
app.start()
