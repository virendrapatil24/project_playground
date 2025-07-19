from abc import ABC, abstractmethod

"""
In Python, there's no built-in interface keyword like in Java or C#, 
but we can implement interface-like behavior using:
Abstract Base Classes (ABCs) via the abc module.
These define method signatures without implementations, enforcing subclasses to implement them.

Interface: If you inherit from me, you must implement these methods.
"""


# Defining the Interface (Abstract Base Class)
class AnimalInterface:

    @abstractmethod
    def make_sound(self):
        pass

    @abstractmethod
    def move(self):
        pass


# Implementing the Interface in a Dog class
class Dog(AnimalInterface):
    def make_sound(self):
        print("Dog says: Woof!")

    def move(self):
        print("Dog runs on four legs.")


# Implementing the Interface in a Bird class
class Bird(AnimalInterface):
    def make_sound(self):
        print("Bird says: Chirp!")

    def move(self):
        print("Bird flies in the sky.")


# Creating objects
dog = Dog()
bird = Bird()

dog.make_sound()  # Dog says: Woof!
bird.move()  # Bird flies in the sky.
