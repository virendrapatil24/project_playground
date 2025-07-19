"""
Aggregation is a "has-a" relationship between two classes,
where one class contains a reference to another class, but both can exist independently.

A Zoo has Animals, but Animals can exist without the Zoo.
"""


class Animal:
    def __init__(self, name, species):
        self.name = name
        self.species = species

    def info(self):
        print(f"{self.name} is a {self.species}")


class Zoo:
    def __init__(self, name):
        self.name = name
        self.animals = []

    def add_animal(self, animal: Animal):
        self.animals.append(animal)

    def show_animals(self):
        print(f"Animal in {self.name}")
        for animal in self.animals:
            animal.info()


dog = Animal("Koko", "Dog")
cat = Animal("Stassy", "Cat")

city_zoo = Zoo("City Zoo")

# Add animals to the zoo (aggregation)
city_zoo.add_animal(dog)
city_zoo.add_animal(cat)

# Show zoo animals
city_zoo.show_animals()

# Dog still exists outside the zoo
print(f"{dog.name} is also in a pet shelter!")
