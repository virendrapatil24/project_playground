import os

from dotenv import load_dotenv
from langchain.chains import ConversationChain
from langchain.memory import (
    ConversationBufferMemory,
    ConversationBufferWindowMemory,
    ConversationSummaryBufferMemory,
)
from langchain_openai import ChatOpenAI

load_dotenv()

OPENAI_GITHUB_KEY = os.getenv("OPENAI_GITHUB_KEY")

llm_model = "openai/gpt-4.1"

chat = ChatOpenAI(
    base_url="https://models.github.ai/inference",
    api_key=OPENAI_GITHUB_KEY,
    model=llm_model,
    temperature=0,
)

memory = ConversationBufferMemory()

conversation = ConversationChain(llm=chat, memory=memory, verbose=True)

# conversation.predict(input="Hi, my name is Virendra")
# conversation.predict(input="What is 1+1?")
# conversation.predict(input="What is my name?")

# print(memory.buffer)


# ******************************************************************************************
memory2 = ConversationBufferWindowMemory(k=1)
memory2.save_context({"input": "Hi"}, {"output": "What's up"})
memory2.save_context({"input": "Not much, just hanging"}, {"output": "Cool"})
memory2.load_memory_variables({})

conversation2 = ConversationChain(llm=chat, memory=memory2, verbose=False)

conversation.predict(input="Hi, my name is Viren")
conversation.predict(input="What is 1+1?")
conversation.predict(input="What is my name?")

# ******************************************************************************************

# create a long string
schedule = "There is a meeting at 8am with your product team. \
You will need your powerpoint presentation prepared. \
9am-12pm have time to work on your LangChain \
project which will go quickly because Langchain is such a powerful tool. \
At Noon, lunch at the italian resturant with a customer who is driving \
from over an hour away to meet you to understand the latest in AI. \
Be sure to bring your laptop to show the latest LLM demo."

memory3 = ConversationSummaryBufferMemory(llm=chat, max_token_limit=100)
memory3.save_context({"input": "Hello"}, {"output": "What's up"})
memory3.save_context({"input": "Not much, just hanging"}, {"output": "Cool"})
memory3.save_context(
    {"input": "What is on the schedule today?"}, {"output": f"{schedule}"}
)
memory3.load_memory_variables({})
conversation3 = ConversationChain(llm=chat, memory=memory3, verbose=False)

conversation3.predict(input="What would be a good demo to show?")
memory3.load_memory_variables({})

# ******************************************************************************************
