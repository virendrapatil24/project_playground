"""
O — Open/Closed Principle (OCP)

Classes should be open for extension, but closed for modification

Goal - This principle aims to extend a Class's behaviour without changing the existing behaviour of that Class.
This is to avoid causing bugs wherever the Class is being used.
"""


# Bad Example (Violates OCP)
class AnimalFeeder:
    def feed(self, animal_type):
        if animal_type == "lion":
            print("Feeding lion meat")
        elif animal_type == "elephant":
            print("Feeding elephant grass")
        # More elifs as animals increase...


# Good Example (Follows OCP)
from abc import ABC, abstractmethod


class Animal(ABC):
    @abstractmethod
    def feed(self):
        pass


class Lion(Animal):
    def feed(self):
        print("Feeding lion meat")


class Elephant(Animal):
    def feed(self):
        print("Feeding elephant grass")


class AnimalFeeder:
    def feed_animal(self, animal: Animal):
        animal.feed()


feeder = AnimalFeeder()
feeder.feed_animal(Lion())
feeder.feed_animal(Elephant())
