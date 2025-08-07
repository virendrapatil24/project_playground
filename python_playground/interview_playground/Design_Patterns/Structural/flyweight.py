"""
Flyweight is a structural design pattern that lets you fit more objects into the available
amount of RAM by sharing common parts of state between multiple objects instead of keeping
all of the data in each object.

When to use:
- You have lots of similar objects
- High memory usage due to redundant data
- You can split data into shared (intrinsic) and external (extrinsic) parts

"""

from typing import Dict


# Flyweight class
class TreeType:
    def __init__(self, name: str, color: str, texture: str):
        self.name = name
        self.color = color
        self.texture = texture

    def draw(self, x: int, y: int):
        print(
            f"Drawing {self.name} tree at ({x},{y}) with color {self.color} and texture {self.texture}"
        )


# Flyweight Factory
class TreeFactory:
    _tree_types: Dict[str, TreeType] = {}

    @classmethod
    def get_tree_type(cls, name: str, color: str, texture: str) -> TreeType:
        key = f"{name}_{color}_{texture}"
        if key not in cls._tree_types:
            cls._tree_types[key] = TreeType(name, color, texture)
        return cls._tree_types[key]


# Context class
class Tree:
    def __init__(self, x: int, y: int, tree_type: TreeType):
        self.x = x
        self.y = y
        self.tree_type = tree_type

    def draw(self):
        self.tree_type.draw(self.x, self.y)


# Forest that holds many trees
class Forest:
    def __init__(self):
        self.trees = []

    def plant_tree(self, x: int, y: int, name: str, color: str, texture: str):
        tree_type = TreeFactory.get_tree_type(name, color, texture)
        tree = Tree(x, y, tree_type)
        self.trees.append(tree)

    def draw(self):
        for tree in self.trees:
            tree.draw()


forest = Forest()
forest.plant_tree(10, 20, "Oak", "Green", "Rough")
forest.plant_tree(15, 25, "Oak", "Green", "Rough")
forest.plant_tree(30, 40, "Pine", "Dark Green", "Smooth")

forest.draw()
