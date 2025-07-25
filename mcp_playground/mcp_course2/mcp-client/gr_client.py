import os

import gradio as gr
from smolagents import CodeAgent, InferenceClientModel
from smolagents.mcp_client import MCPClient

try:
    mcp_client = MCPClient(
        {"url": "https://abidlabs-mcp-tool-http.hf.space/gradio_api/mcp/sse"}
    )
    tools = mcp_client.get_tools()

    model = InferenceClientModel(token=os.getenv("HF_TOKEN"))
    agent = CodeAgent(
        tools=[*tools],
        model=model,
        additional_authorized_imports=["json", "ast", "urllib", "base64"],
    )

    demo = gr.ChatInterface(
        fn=lambda message, history: str(agent.run(message)),
        type="messages",
        examples=["Analyze the sentiment of the following text 'This is awesome'"],
        title="Agent with MCP Tools",
        description="This is a simple agent that uses MCP tools to answer questions.",
    )

    demo.launch()
finally:
    mcp_client.disconnect()
