"""
KISS - Keep It Simple, Stupid

Don't overcomplicate your code.
The simplest solution that works is often the best.
"""


# Bad Example (Violates KISS)
def is_even(number):
    if number % 2 == 0:
        return True
    else:
        return False


# Good Example (Follows KISS)
def is_even(number):
    return number % 2 == 0
