"""
Proxy is a structural design pattern that lets you provide a substitute or placeholder for another object.
A proxy controls access to the original object, allowing you to perform something either before or after
the request gets through to the original object.

When to use:
- When creating an object is resource-intensive, and you want to delay its creation until it's actually needed.
- To restrict access to an object based on user roles or permissions.
- When you want to log method calls, performance, or track changes without modifying the original object.
"""

from abc import ABC, abstractmethod


# Subject Interface
class Image(ABC):
    @abstractmethod
    def display(self):
        pass


# RealSubject
class RealImage(Image):
    def __init__(self, filename: str):
        self.filename = filename
        self.load_from_disk()

    def load_from_disk(self):
        print(f"Loading image from disk: {self.filename}")

    def display(self):
        print(f"Displaying {self.filename}")


# Proxy
class ProxyImage(Image):
    def __init__(self, filename: str):
        self.filename = filename
        self.real_image = None

    def display(self):
        if self.real_image is None:
            self.real_image = RealImage(self.filename)  # Lazy loading
        self.real_image.display()


# Client
image = ProxyImage("my_photo.jpg")
print("Image created. No loading yet.\n")

image.display()  # Loads and displays
print("\nCalling display again:")
image.display()  # Just displays, doesn't load again
