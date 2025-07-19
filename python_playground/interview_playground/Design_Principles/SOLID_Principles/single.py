"""
S — Single Responsibility Principle (SRP)

A class should have a single responsibility.

Goal - This principle aims to separate behaviours so that if bugs arise as a result of your change,
it won't affect other unrelated behaviours.
"""


# Bad Example (SRP Violation)
class AnimalFeeder:
    def feed(self, animal):
        print(f"Feeding {animal}")

    def perform_medical_checkup(self, animal):
        print(f"Checking {animal}'s health")


#  Good Example (SRP Followed)
class AnimalFeeder:
    def feed(self, animal):
        print(f"Feeding {animal}")


class MedicalCheckup:
    def check_health(self, animal):
        print(f"Performing medical checkup for {animal}")


# AnimalFeeder focuses only on feeding logic.
# MedicalCheckup handles health-related logic.
