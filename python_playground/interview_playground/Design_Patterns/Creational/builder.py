"""
The Builder Pattern is a creational design pattern used to construct complex objects step-by-step.
It allows you to produce different representations of an object using the same construction process.

When to Use It
- You’re building an object that has lots of optional fields or requires step-by-step construction.
- You want to decouple the object creation logic from its representation.
- Object construction should be independent of the parts that make up the object and how they’re assembled

"""


class Pizza:

    def __init__(self):
        self.name = ""
        self.size = None
        self.crust = None
        self.toppings = []

    def __str__(self):
        return f"Pizza: {self.name} {self.size} {self.crust} {" ".join(self.toppings)}"


class PizzaBuilder:

    def __init__(self):
        self.pizza = Pizza()

    def set_name(self, name):
        self.pizza.name = name
        return self

    def set_size(self, size):
        self.pizza.size = size
        return self

    def set_crust(self, crust):
        self.pizza.crust = crust
        return self

    def set_toppings(self, toppping):
        self.pizza.toppings.append(toppping)
        return self

    def build(self):
        return self.pizza


builder = PizzaBuilder()
my_pizza = (
    builder.set_name("Margherita")
    .set_size("L")
    .set_crust("Thin")
    .set_toppings("Cheese")
    .set_toppings("Pepperoni")
    .build()
)


print(my_pizza)
