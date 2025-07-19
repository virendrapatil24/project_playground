"""
DRY — Don't Repeat Yourself

Every piece of knowledge must have a single, unambiguous, authoritative representation within a system.

Repeating code is a signal that logic should be extracted, abstracted, or modularized.
"""


# Bad Example (Violates DRY)
def print_rectangle_area(length, width):
    area = length * width
    print(f"Rectangle area: {area}")


def print_square_area(side):
    area = side * side
    print(f"Square area: {area}")


# Good Example (Follows DRY)
def calculate_area(length, width):
    return length * width


def print_rectangle_area(length, width):
    area = calculate_area(length, width)
    print(f"Rectangle area: {area}")


def print_square_area(side):
    area = calculate_area(side, side)
    print(f"Square area: {area}")
