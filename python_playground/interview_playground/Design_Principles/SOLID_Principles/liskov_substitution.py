"""
L - Liskov Substitution Principle (LSP)

If S is a subtype of T, then objects of type T in a program may be replaced with objects of type S
without altering any of the desirable properties of that program.

Goal - This principle aims to enforce consistency so that the parent Class
or its child Class can be used in the same way without any errors.
"""


# Bad Example (Violating LSP)
class Animal:
    def make_sound(self):
        pass


class Dog(Animal):
    def make_sound(self):
        print("Bark!")


class Fish(Animal):
    def make_sound(self):
        raise NotImplementedError(
            "Fish can't make sound!"
        )  # This will break the contract


# Good Example (Follows LSP)
class Animal:
    def move(self):
        pass


class Dog(Animal):
    def move(self):
        print("Dog runs")


class Fish(Animal):
    def move(self):
        print("Fish swims")
