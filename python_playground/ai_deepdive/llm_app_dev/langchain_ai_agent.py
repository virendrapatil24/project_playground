import os

from dotenv import load_dotenv
from langchain.agents import AgentExecutor, create_openai_functions_agent, load_tools

# from langchain_community.agents import load_tools
from langchain_openai import ChatOpenAI

load_dotenv()
OPENAI_GITHUB_KEY = os.getenv("OPENAI_GITHUB_KEY")

llm_model = "openai/gpt-4.1-nano"

llm = ChatOpenAI(
    base_url="https://models.github.ai/inference",
    api_key=OPENAI_GITHUB_KEY,
    model=llm_model,
    temperature=0.7,
)

tools = load_tools(["llm-math", "wikipedia"], llm=llm)

agent = create_openai_functions_agent(llm=llm, tools=tools)

agent_executor = AgentExecutor(agent=agent, tools=tools, verbose=True)


question = "Tom M. Mitchell is an American computer scientist \
and the Founders University Professor at Carnegie Mellon University (CMU)\
what book did he write?"
result = agent_executor.invoke({"input": question})

"""
the above agentic code is deprecated now
"""
