"""
The Facade Pattern is a structural design pattern that provides a simplified interface
to a complex subsystem. It acts as a wrapper that hides the complexity of multiple classes, libraries, or APIs.

When to Use:
- You have a complex system with many moving parts and want to provide a simple API to clients.
- You want to decouple the client from the inner workings of the subsystem.
- You want to provide a clean entry point for a library or module.
"""


class DVDPlayer:
    def on(self):
        print("DVD Player ON")

    def play(self, movie):
        print(f"Playing movie: {movie}")


class Projector:
    def on(self):
        print("Projector ON")

    def set_input(self, source):
        print(f"Projector input set to {source}")


class SurroundSound:
    def on(self):
        print("Surround Sound ON")

    def set_volume(self, level):
        print(f"Volume set to {level}")


class HomeTheaterFacade:
    def __init__(self, dvd: DVDPlayer, projector: Projector, sound: SurroundSound):
        self.dvd = dvd
        self.projector = projector
        self.sound = sound

    def watch_movie(self, movie):
        print("\n🎬 Get ready to watch a movie...")
        self.dvd.on()
        self.projector.on()
        self.projector.set_input("DVD")
        self.sound.on()
        self.sound.set_volume(8)
        self.dvd.play(movie)

    def end_movie(self):
        print("\n🛑 Shutting everything down...")
        print("DVD Player OFF")
        print("Projector OFF")
        print("Sound System OFF")


# Subsystem setup
dvd = DVDPlayer()
projector = Projector()
sound = SurroundSound()

# Facade
theater = HomeTheaterFacade(dvd, projector, sound)

# One-liner API to control it all
theater.watch_movie("Inception")
theater.end_movie()
