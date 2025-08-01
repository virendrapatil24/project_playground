"""
The Prototype Pattern is a creational design pattern that allows you to create new objects
by copying an existing object, known as the prototype, rather than creating them from scratch.

When to Use It
- Creating a new object is expensive (e.g., involves database calls, file parsing, etc.).
- You want to avoid rebuilding objects from scratch every time.
- You need to create objects that are very similar, but not identical.
- You want to hide the complexity of object construction from the client.
"""

import copy


# Example 1
class GameCharacter:
    def __init__(self, name, weapon, level):
        self.name = name
        self.weapon = weapon
        self.level = level

    def clone(self):
        return copy.deepcopy(self)

    def __str__(self):
        return f"{self.name} with {self.weapon} (Level {self.level})"


# Prototype
base_knight = GameCharacter("Knight", "Sword", 1)

# Cloning
player1 = base_knight.clone()
player1.name = "Sir Virendra"
player1.level = 10

player2 = base_knight.clone()
player2.name = "Sir Ranjeet"
player2.weapon = "Axe"

print("------")
print(player1)  # Sir Lancelot with Sword (Level 10)
print("---")
print(player2)  # Sir Galahad with Axe (Level 1)
print("------")


# Example 2
class Document:
    def __init__(self, title, content):
        self.title = title
        self.content = content

    def clone(self):
        return copy.deepcopy(self)

    def __str__(self):
        return f"Title: {self.title}\nContent: {self.content}"


# Original template
template = Document("Offer Letter", "Dear [Name],\nWelcome to the company.")

# Clone and personalize
doc1 = template.clone()
doc1.content = doc1.content.replace("[Name]", "Virendra")

doc2 = template.clone()
doc2.content = doc2.content.replace("[Name]", "Ashish")

print("------")
print(doc1)
print("---")
print(doc2)
print("------")
