import os

from dotenv import load_dotenv
from langchain.prompts import ChatPromptTemplate
from langchain.schema.runnable import RunnableLambda, RunnableMap
from langchain_core.output_parsers import StrOutputParser
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

# ************************************************************************************************

topic_template = "Explain the concept of {topic} in simple terms."
prompt_template = ChatPromptTemplate.from_template(topic_template)

# Standard Way
# formatted_template = prompt_template.invoke({"topic": "gravity"})

# ai_response = llm.invoke(formatted_template)
# print(ai_response.content)

# ************************************************************************************************

# Basic Chain – Prompt → LLM → OutputParser

chain = prompt_template | llm | StrOutputParser()

# response = chain.invoke({"topic": "newtons laws"})

# print(response)

# ************************************************************************************************

# Multi-step Chain – Sequential Prompts

# Step 1: Generate blog outline
outline_prompt = ChatPromptTemplate.from_template(
    "Generate a blog outline for: {topic}"
)
outline_chain = outline_prompt | llm | StrOutputParser()

# Step 2: Generate intro from outline
intro_prompt = ChatPromptTemplate.from_template(
    "Write an introduction for this blog outline:\n\n{topic}"
)
intro_chain = intro_prompt | llm | StrOutputParser()

# Compose the chains manually
# outline = outline_chain.invoke({"topic": "LangChain for Python Developers"})
# intro = intro_chain.invoke({"topic": outline})

# print(intro)
# ************************************************************************************************

# Add Custom Python Functions in Chain


def add_header(text: str) -> str:
    return f"# 🔍 Summary\n\n{text}"


chain = (
    ChatPromptTemplate.from_template("Summarize the topic: {topic}")
    | llm
    | StrOutputParser()
    | add_header
)

# print(chain.invoke({"topic": "WebSockets"}))

# ************************************************************************************************

# ROuter chain

parser = StrOutputParser()

# ----------------------------
# Sub-Chains
# ----------------------------

# 1. Code Help Chain
code_prompt = ChatPromptTemplate.from_template(
    "You are a Python expert. Help with this code issue:\n\n{input}"
)
code_chain = code_prompt | llm | parser

# 2. Writing Help Chain
writing_prompt = ChatPromptTemplate.from_template(
    "You are a content writer. Improve the following paragraph:\n\n{input}"
)
writing_chain = writing_prompt | llm | parser

# 3. Translation Chain
translate_prompt = ChatPromptTemplate.from_template(
    "Translate this into Spanish:\n\n{input}"
)
translate_chain = translate_prompt | llm | parser

# ----------------------------
# Router Logic
# ----------------------------


def route_input(input_data: dict) -> str:
    text = input_data["input"].lower()
    if "code" in text or "bug" in text or "python" in text:
        return "code"
    elif "translate" in text:
        return "translate"
    else:
        return "writing"


# Wrap routing function
router = RunnableLambda(route_input)

# ----------------------------
# Router Chain
# ----------------------------

router_chain = router | RunnableMap(
    {"code": code_chain, "translate": translate_chain, "writing": writing_chain}
)

# ----------------------------
# Test Inputs
# ----------------------------

examples = [
    {"input": "Can you fix this Python bug in my loop?"},
    {"input": "Translate this to Spanish: I love open source software."},
    {"input": "Make this paragraph more engaging for my portfolio."},
]

if __name__ == "__main__":
    for ex in examples:
        result = router_chain.invoke(ex)
        print("🧾 Input:", ex["input"])
        print("🎯 Output:", result)
        print("=" * 40)
