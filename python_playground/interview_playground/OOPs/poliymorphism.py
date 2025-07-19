"""Different objects respond to the same method call in different ways."""


class Animal:
    def make_sound(self):
        print("Some generic animal sound")


class Dog(Animal):
    def make_sound(self):
        print("Dog says: Woof!")


class Cat(Animal):
    def make_sound(self):
        print("Cat says: Meow!")


class Bird(Animal):
    def make_sound(self):
        print("Bird says: Chirp!")


dog = Dog()
cat = Cat()
bird = Bird()

dog.make_sound()  # Dog says: Woof!
cat.make_sound()  # Cat says: Meow!
bird.make_sound()  # Bird says: Chirp!

# The above code can be  deduce to list of animals (all treated as Animal)
animals = [Dog(), Cat(), Bird()]

for animal in animals:
    animal.make_sound()
