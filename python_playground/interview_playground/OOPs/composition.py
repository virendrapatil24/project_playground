"""
Composition is a "has-a" relationship too, but with ownership.
When one class creates and manages the lifecycle of another class object, it's composition.
A Heart is part of a Human. If the Human is destroyed, the Heart is too.”
"""


class Heart:
    def __init__(self):
        self.rate = 70  # default heart rate

    def beat(self):
        print(f"Heart is beating at {self.rate} BPM.")


class Animal:
    def __init__(self, name):
        self.name = name
        self.heart = Heart()  # Composition: Animal creates Heart

    def live(self):
        print(f"{self.name} is alive!")
        self.heart.beat()


# Create Animal
dog = Animal("Bruno")

dog.live()  # Bruno is alive! Heart is beating at 70 BPM.

# If dog is deleted, heart goes with it
del dog
# Now `dog.heart` no longer exists
