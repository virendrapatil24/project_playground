"""
The Adapter Pattern is a structural design pattern that allows objects with incompatible interfaces
to work together by converting one interface into another that the client expects.

When to use:
- You want to integrate a third-party library that has a different interface.
- You’re dealing with legacy code and don’t want to refactor existing classes.
- You want to bridge between two systems without tightly coupling them.
- You want to make a class work with an existing client, even if the interfaces don’t match.
"""

from abc import ABC, abstractmethod


# Third-party class (incompatible)
class ExternalWeatherAPI:
    def get_weather_data(self):
        return {"temp_celsius": 25, "wind_kph": 15}


class WeatherClient(ABC):
    @abstractmethod
    def get_temperature(self):
        pass

    @abstractmethod
    def get_wind_speed(self):
        pass


# Adapter
class WeatherAdapter(WeatherClient):
    def __init__(self, external_api):
        self.external_api = external_api

    def get_temperature(self):
        return self.external_api.get_weather_data()["temp_celsius"]

    def get_wind_speed(self):
        return self.external_api.get_weather_data()["wind_kph"]


# Client code
external_api = ExternalWeatherAPI()
weather = WeatherAdapter(external_api)
print(weather.get_temperature())  # 25
print(weather.get_wind_speed())  # 15
