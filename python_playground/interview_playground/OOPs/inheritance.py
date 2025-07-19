"""
Inheritance allows a class (child/subclass) to inherit attributes and methods from another class (parent/superclass).
It promotes code reuse and helps build hierarchies in our code.
"""


# Base class (superclass)
class Animal:
    def __init__(self, name):
        self.name = name

    def eat(self):
        print(f"{self.name} is eating.")


# Derived class (subclass)
class Dog(Animal):
    def bark(self):
        print(f"{self.name} says: Woof!")


# Another derived class
class Cat(Animal):
    def meow(self):
        print(f"{self.name} says: Meow!")


# Creating objects
dog = Dog("Bruno")
cat = Cat("Whiskers")

dog.eat()  # Bruno is eating.
dog.bark()  # Bruno says: Woof!

cat.eat()  # Whiskers is eating.
cat.meow()  # Whiskers says: Meow!
