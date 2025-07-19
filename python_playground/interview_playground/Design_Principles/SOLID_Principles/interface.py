"""
I - Interface Segregation Principle (ISP)

No client should be forced to depend on interfaces they don't use.

Goal - This principle aims at splitting a set of actions into smaller
sets so that a Class executes ONLY the set of actions it requires.
"""

from abc import ABC, abstractmethod


# Bad Example (Violates ISP)
class Animal(ABC):
    @abstractmethod
    def fly(self):
        pass

    @abstractmethod
    def walk(self):
        pass

    @abstractmethod
    def swim(self):
        pass


class Dog(Animal):
    def fly(self):
        raise NotImplementedError("Dog can't fly")  # breaks the contract

    def walk(self):
        print("Dog walks")

    def swim(self):
        print("Dog swims")
        print("Dog swims")
        print("Dog swims")


# Good Example (Follows ISP)
class Walkable(ABC):
    @abstractmethod
    def walk(self):
        pass


class Swimmable(ABC):
    @abstractmethod
    def swim(self):
        pass


class Flyable(ABC):
    @abstractmethod
    def fly(self):
        pass


class Dog(Walkable, Swimmable):
    def walk(self):
        print("Dog walks")

    def swim(self):
        print("Dog swims")


class Bird(Walkable, Flyable):
    def walk(self):
        print("Bird hops")

    def fly(self):
        print("Bird flies")
        print("Bird flies")
