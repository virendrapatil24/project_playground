"""
The Composite Pattern is a structural design pattern that lets you compose objects
into tree structures to represent part-whole hierarchies. It allows clients to treat
individual objects and compositions of objects uniformly.

When to use -
- You have a hierarchical structure (e.g., folder > subfolders > files).
- You want to allow clients to treat individual objects and groups uniformly.
- You want to perform operations (e.g., render, delete, get size) on composite and leaf objects identically.

"""

from abc import ABC, abstractmethod


# Component
class FileSystemComponent(ABC):
    @abstractmethod
    def display(self, indent=0):
        pass


# Leaf
class File(FileSystemComponent):
    def __init__(self, name):
        self.name = name

    def display(self, indent=0):
        print(" " * indent + self.name)


# Composite
class Directory(FileSystemComponent):
    def __init__(self, name, children=None):
        self.name = name
        self.children = children if children else []

    def add(self, component: FileSystemComponent):
        self.children.append(component)

    def display(self, indent=0):
        print(" " * indent + self.name + "/")
        for child in self.children:
            child.display(indent + 1)


# Build file system tree
root = Directory("root")
root.add(File("file_a.txt"))
root.add(File("file_b.txt"))

subfolder = Directory("folder")
subfolder.add(File("file_c.txt"))
subfolder.add(File("file_d.txt"))

root.add(subfolder)

# Display the tree
root.display()
