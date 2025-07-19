"""
The Factory Method is a creational design pattern that provides an interface for creating objects
in a superclass, but allows subclasses to alter the type of objects that will be created.

When to Use It
- When the exact type of the object isn’t known until runtime.
- When you want to delegate the object creation logic to child classes.
- When your code needs to be open for extension but closed for modification (Open/Closed Principle)
- When you want to decouple the object creation logic from business logic.

"""

from abc import ABC, abstractmethod


# Product Interface
class Button(ABC):
    @abstractmethod
    def render(self):
        pass


# Concrete Products
class WindowsButton(Button):
    def render(self):
        return "Windows Button"


class MacButton(Button):
    def render(self):
        return "Macs Button"


# Creator
class Dialog(ABC):

    @abstractmethod
    def create_button(self) -> Button:
        pass

    def render_ui(self):
        button = self.create_button()
        print(button.render())


# Concrete Creators
class WindowsDialog(Dialog):
    def create_button(self) -> Button:
        return WindowsButton()


class MacDialog(Dialog):
    def create_button(self) -> Button:
        return MacButton()


# Client Code
def client(dialog: Dialog):
    dialog.render_ui()


client(WindowsDialog())  # Rendering Windows Button
client(MacDialog())  # Rendering Mac Button
