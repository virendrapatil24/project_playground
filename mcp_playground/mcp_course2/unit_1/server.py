from mcp.server.fastmcp import FastMCP

mcp = FastMCP("weather service")


@mcp.tool()
def get_weather(location: str) -> str:
    """Get the weather for a given location."""
    return f"The weather in {location} is sunny with a high of 75°F."


@mcp.resource("weather://{location}")
def get_weather_resource(location: str) -> str:
    """Get the weather for a given location."""
    return f"The weather in {location} is sunny with a high of 75°F."


@mcp.prompt()
def get_weather_prompt(location: str) -> str:
    """Get the weather for a given location."""
    return f"The weather in {location} is sunny with a high of 75°F."


if __name__ == "__main__":
    mcp.run()
