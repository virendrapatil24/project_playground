"""
The Decorator Pattern is a structural design pattern that lets you attach new behaviors to objects
dynamically by placing them inside special wrapper objects (called decorators) that implement the same interface.

When to use:
- You want to add responsibilities to objects at runtime, not via inheritance.
- You want to adhere to the Open/Closed Principle — extend behavior without modifying existing code.
- You have a class explosion due to multiple combinations of features (e.g., scrollable, borderable, resizable text boxes).

Simple term -> we are layering the object at each step
"""

from abc import ABC, abstractmethod


# Component Interface
class Coffee(ABC):
    @abstractmethod
    def cost(self):
        pass

    @abstractmethod
    def description(self):
        pass


# Concrete Component
class SimpleCoffee(Coffee):
    def cost(self):
        return 100

    def description(self):
        return "Simple Coffee"


# Base Decorator
class CoffeeDecorator(Coffee):
    def __init__(self, coffee: Coffee):
        self._coffee = coffee

    @abstractmethod
    def cost(self):
        pass

    @abstractmethod
    def description(self):
        pass


# Concrete Decorators
class MilkDecorator(CoffeeDecorator):
    def cost(self):
        return self._coffee.cost() + 20

    def description(self):
        return self._coffee.description() + ", Milk"


class SugarDecorator(CoffeeDecorator):
    def cost(self):
        return self._coffee.cost() + 10

    def description(self):
        return self._coffee.description() + ", Sugar"


# Base coffee
coffee = SimpleCoffee()

# Add milk
coffee = MilkDecorator(coffee)

# Add sugar on top
coffee = SugarDecorator(coffee)

print(coffee.description())  # Simple Coffee, Milk, Sugar
print("Total: ₹", coffee.cost())  # Total: ₹ 130
