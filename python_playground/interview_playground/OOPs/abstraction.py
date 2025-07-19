from abc import ABC, abstractmethod

"""Abstraction means hiding complex internal details and only exposing essential features of an object."""


# Abstract Base Class (ABC)
class Animal(ABC):

    @abstractmethod
    def make_sound(self):
        pass

    @abstractmethod
    def move(self):
        pass


# Concrete class
class Dog(Animal):
    def make_sound(self):
        print("Dog says: Woof!")

    def move(self):
        print("Dog runs on four legs.")


# Another concrete class
class Fish(Animal):
    def make_sound(self):
        print("Fish says: ... (no sound)")

    def move(self):
        print("Fish swims in water.")


# Create objects
dog = Dog()
fish = Fish()

dog.make_sound()  # Dog says: Woof!
fish.move()  # Fish swims in water.
