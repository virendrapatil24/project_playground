"""
The main difference between a "factory method" and an "abstract factory"
is that the factory method is a method, and an abstract factory is an object.
I think a lot of people get these two terms confused, and start using them interchangeably.
I remember that I had a hard time finding exactly what the difference was when I learnt them.

Because the factory method is just a method, it can be overridden in a subclass,
hence the second half of your quote:
... the Factory Method pattern uses inheritance and relies
on a subclass to handle the desired object instantiation.

The quote assumes that an object is calling its own factory method here.
Therefore the only thing that could change the return value would be a subclass.

The abstract factory is an object that has multiple factory methods on it.
Looking at the first half of your quote:
... with the Abstract Factory pattern, a class delegates the responsibility of
object instantiation to another object via composition ...

"""
