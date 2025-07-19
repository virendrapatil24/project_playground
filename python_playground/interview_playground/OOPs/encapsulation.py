"""
Encapsulation helps protect the object's internal state from external interference and misuse.

Private members (__) use name mangling to make direct external access more difficult,
while protected members (_) rely solely on a naming convention and developer understanding.
"""


class Animal:
    def __init__(self, name, species, age):
        self.name = name  # Public
        self._species = species  # Protected
        self.__age = age  # Private

    def speak(self):
        print(f"{self.name} makes a sound.")

    # Protected method
    def _describe_species(self):
        print(f"{self.name} is a {self._species}.")

    # Private method
    def __reveal_age(self):
        print(f"Age of {self.name} is: {self.__age}")

    def get_age(self):
        return self.__age


class Dog(Animal):
    def speak(self):
        print(f"{self.name} barks.")

    def show_details(self):
        # Accessing public attribute
        print(f"Name: {self.name}")

        # Accessing protected attribute
        print(f"Species: {self._species}")

        # Accessing private attribute via public getter
        print(f"Age: {self.get_age()}")

        # Accessing protected method
        self._describe_species()

        # Trying to access private method (will raise AttributeError if uncommented)
        # self.__reveal_age()

        # Correct way to access private method via name mangling (not recommended in practice)
        print("Accessing private method with name mangling:")
        self._Animal__reveal_age()


# Usage
dog = Dog("Koko", "Golden Retriever", "5")
dog.speak()
dog.show_details()
