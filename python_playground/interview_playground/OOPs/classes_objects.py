"""
Class: A blueprint or template for creating objects. It defines properties (attributes) and behaviors (methods).
Object: An instance of a class. It has real values for the attributes defined in the class.
"""


# Defining a class
class Animal:
    def __init__(self, name, species):
        self.name = name
        self.species = species

    def make_sound(self):
        print(f"{self.name} makes a sound")


# Creating objects (instance of the class)
dog = Animal("Koko", "Dog")
cat = Animal("Stassy", "Cat")

# Accesing object attributes
print(dog.name)  # Koko
print(cat.species)  # Cat

# Calling object method
dog.make_sound()  # Koko makes a sound
cat.make_sound()  # Stassy makes a sound
