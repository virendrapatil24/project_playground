"""
Association is a general relationship between two classes where one class uses or interacts with another.

A Trainer trains an Animal.
"""


class Animal:
    def __init__(self, name):
        self.name = name

    def perform(self):
        print(f"{self.name} is performing a trick!")


class Trainer:
    def __init__(self, name):
        self.name = name

    def train(self, animal: Animal):
        print(f"{self.name} is training {animal.name}.")
        animal.perform()


# Create objects
dog = Animal("Bruno")
trainer = Trainer("Alice")

# Association: Trainer uses Animal
trainer.train(dog)
