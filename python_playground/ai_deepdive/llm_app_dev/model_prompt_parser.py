import os

from dotenv import load_dotenv
from langchain.output_parsers import ResponseSchema, StructuredOutputParser
from langchain_core.prompts import ChatPromptTemplate
from langchain_openai import ChatOpenAI
from openai import OpenAI

load_dotenv()
OPENAI_GITHUB_KEY = os.getenv("OPENAI_GITHUB_KEY")

llm_model = "openai/gpt-4.1"

client = OpenAI(
    base_url="https://models.github.ai/inference", api_key=OPENAI_GITHUB_KEY
)

# *************************************************************************************************
# Chat API : OpenAI


def get_completion(prompt, model=llm_model):
    messages = [{"role": "user", "content": prompt}]
    response = client.chat.completions.create(
        model=model, messages=messages, temperature=0
    )
    return response.choices[0].message.content


customer_email = """
Arrr, I be fuming that me blender lid \
flew off and splattered me kitchen walls \
with smoothie! And to make matters worse,\
the warranty don't cover the cost of \
cleaning up me kitchen. I need yer help \
right now, matey!
"""

style = """American English \
in a calm and respectful tone
"""

prompt = f"""Translate the text \
that is delimited by triple backticks 
into a style that is {style}.
text: ```{customer_email}```
"""
# print(get_completion("What is 1+1?"))
# print(get_completion(prompt))

# *************************************************************************************************

# Chat API : LangChain

chat = ChatOpenAI(
    base_url="https://models.github.ai/inference",
    api_key=OPENAI_GITHUB_KEY,
    model=llm_model,
    temperature=0,
)

template_string = """Translate the text \
that is delimited by triple backticks \
into a style that is {style}. \
text: ```{text}```
"""

messages = [
    (
        "system",
        "You are a helpful assistant that translates English to French. Translate the user sentence.",
    ),
    ("human", "I love programming."),
]

ai_response = chat.invoke(messages)
# print(ai_response.content)

template_string = """Translate the text \
that is delimited by triple backticks \
into a style that is {style}. \
text: ```{text}```
"""

customer_style = """American English \
in a calm and respectful tone
"""

customer_email = """
Arrr, I be fuming that me blender lid \
flew off and splattered me kitchen walls \
with smoothie! And to make matters worse, \
the warranty don't cover the cost of \
cleaning up me kitchen. I need yer help \
right now, matey!
"""

prompt_template = ChatPromptTemplate.from_template(template_string)

formatted_prompt = prompt_template.invoke(
    {"style": customer_style, "text": customer_email}
)

ai_response = chat.invoke(formatted_prompt)
# print(ai_response.content)


service_reply = """Hey there customer, \
the warranty does not cover \
cleaning expenses for your kitchen \
because it's your fault that \
you misused your blender \
by forgetting to put the lid on before \
starting the blender. \
Tough luck! See ya!
"""

service_style_pirate = """\
a polite tone \
that speaks in English Pirate\
"""

service_messages = prompt_template.invoke(
    {"style": service_style_pirate, "text": service_reply}
)

service_response = chat.invoke(service_messages)
# print(service_response.content)


# *************************************************************************************************

# Output Parsers

customer_review = """\
This leaf blower is pretty amazing.  It has four settings:\
candle blower, gentle breeze, windy city, and tornado. \
It arrived in two days, just in time for my wife's \
anniversary present. \
I think my wife liked it so much she was speechless. \
So far I've been the only one using it, and I've been \
using it every other morning to clear the leaves on our lawn. \
It's slightly more expensive than the other leaf blowers \
out there, but I think it's worth it for the extra features.
"""

review_template = """\
For the following text, extract the following information:

gift: Was the item purchased as a gift for someone else? \
Answer True if yes, False if not or unknown.

delivery_days: How many days did it take for the product \
to arrive? If this information is not found, output -1.

price_value: Extract any sentences about the value or price,\
and output them as a comma separated Python list.

Format the output as JSON with the following keys:
gift
delivery_days
price_value

text: {text}
"""

prompt_template2 = ChatPromptTemplate.from_template(review_template)

formatted_template2 = prompt_template2.invoke({"text": customer_review})

ai_response2 = chat.invoke(formatted_template2)
print(ai_response2.content)
print(type(ai_response2.content))


gift_schema = ResponseSchema(
    name="gift",
    description="Was the item purchased\
                             as a gift for someone else? \
                             Answer True if yes,\
                             False if not or unknown.",
)
delivery_days_schema = ResponseSchema(
    name="delivery_days",
    description="How many days\
                                      did it take for the product\
                                      to arrive? If this \
                                      information is not found,\
                                      output -1.",
)
price_value_schema = ResponseSchema(
    name="price_value",
    description="Extract any\
                                    sentences about the value or \
                                    price, and output them as a \
                                    comma separated Python list.",
)

response_schemas = [gift_schema, delivery_days_schema, price_value_schema]

output_parser = StructuredOutputParser.from_response_schemas(response_schemas)
format_instructions = output_parser.get_format_instructions()

review_template_3 = """\
For the following text, extract the following information:

gift: Was the item purchased as a gift for someone else? \
Answer True if yes, False if not or unknown.

delivery_days: How many days did it take for the product\
to arrive? If this information is not found, output -1.

price_value: Extract any sentences about the value or price,\
and output them as a comma separated Python list.

text: {text}

{format_instructions}
"""

prompt_template3 = ChatPromptTemplate.from_template(review_template_3)

formatted_template3 = prompt_template3.invoke(
    {"text": customer_review, "format_instructions": format_instructions}
)

ai_response3 = chat.invoke(formatted_template3)
output_dict = output_parser.parse(ai_response3.content)

print(ai_response3.content)
print(type(ai_response3.content))
print(output_dict)
print(type(output_dict))
