"""
The Abstract Factory pattern provides an interface for creating families of related
or dependent objects without specifying their concrete classes.


When to Use It
- Your code needs to work with various families of related objects,
but you want to keep it independent of how those objects are created.
- You want to enforce that objects from the same family are used together
(e.g., WindowsButton + WindowsCheckbox).
- You're working on cross-platform GUIs, theming systems, or plugin-based architecture.

Focus: Creates families of related or dependent objects.
"""

from abc import ABC, abstractmethod


# Product interfaces
class Button(ABC):
    @abstractmethod
    def render(self):
        pass


class Checkbox(ABC):
    @abstractmethod
    def render(self):
        pass


# Concrete products - Windows
class WindowsButton(Button):
    def render(self):
        print("Rendering Windows Button")


class WindowsCheckbox(Checkbox):
    def render(self):
        print("Rendering Windows Checkbox")


# Concrete products - Mac
class MacButton(Button):
    def render(self):
        print("Rendering Mac Button")


class MacCheckbox(Checkbox):
    def render(self):
        print("Rendering Mac Checkbox")


# Abstract Factory
class GUIFactory(ABC):
    @abstractmethod
    def create_button(self) -> Button:
        pass

    @abstractmethod
    def create_checkbox(self) -> Checkbox:
        pass


# Concrete factories
class WindowsFactory(GUIFactory):
    def create_button(self) -> Button:
        return WindowsButton()

    def create_checkbox(self) -> Checkbox:
        return WindowsCheckbox()


class MacFactory(GUIFactory):
    def create_button(self) -> Button:
        return MacButton()

    def create_checkbox(self) -> Checkbox:
        return MacCheckbox()


# Client code
def build_ui(factory: GUIFactory):
    button = factory.create_button()
    checkbox = factory.create_checkbox()
    button.render()
    checkbox.render()


# Usage
build_ui(WindowsFactory())  # Windows UI components
build_ui(MacFactory())  # Mac UI components
