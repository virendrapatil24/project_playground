"""
The Bridge Pattern is a structural design pattern that decouples an abstraction from
its implementation, allowing them to vary independently.

When to use:
- You want to separate interface (abstraction) from the implementation logic.
- You have multiple dimensions of variation (e.g., shape × rendering engine, or device × OS).
- You want to avoid class explosion that happens with rigid inheritance trees.
- You need to change implementations at runtime or independently from the abstraction.

example:
Say you have a geometric Shape class with a pair of subclasses: Circle and Square.
You want to extend this class hierarchy to incorporate colors, so you plan to create Red and Blue shape subclasses.
However, since you already have two subclasses, you’ll need to create four class combinations such as BlueCircle and RedSquare.
"""

from abc import ABC, abstractmethod


class Color(ABC):
    @abstractmethod
    def apply_color(self):
        pass


class Red(Color):
    def apply_color(self):
        return "Red"


class Blue(Color):
    def apply_color(self):
        return "Blue"


class Shape(ABC):
    def __init__(self, color: Color):
        self.color = color

    @abstractmethod
    def draw(self):
        pass


class Circle(Shape):
    def draw(self):
        print(f"Drawing a Circle in {self.color.apply_color()}")


class Square(Shape):
    def draw(self):
        print(f"Drawing a Square in {self.color.apply_color()}")


red = Red()
blue = Blue()

red_circle = Circle(red)
blue_square = Square(blue)
red_square = Square(red)

red_circle.draw()  # Drawing a Circle in Red
blue_square.draw()  # Drawing a Square in Blue
red_square.draw()  # Drawing a Square in Red
