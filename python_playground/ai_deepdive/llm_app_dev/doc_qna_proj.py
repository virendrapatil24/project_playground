import os

from dotenv import load_dotenv
from langchain.document_loaders import CSVLoader
from langchain.prompts import ChatPromptTemplate
from langchain.schema.runnable import RunnableLambda, RunnableMap
from langchain.vectorstores import DocArrayInMemorySearch
from langchain_core.output_parsers import StrOutputParser
from langchain_openai import ChatOpenAI
from langchain_openai.embeddings import OpenAIEmbeddings

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

loader = CSVLoader(file_path="sample.csv")
document = loader.load()

embedding_model = OpenAIEmbeddings()
vector_store = DocArrayInMemorySearch.from_documents(document, embedding_model)

retriever = vector_store.as_retriever(search_kwargs={"k": 3})


prompt = ChatPromptTemplate.from_template(
    """
You are an assistant answering questions based on the following context:

{context}

Question: {question}
Answer in a concise and factual manner.
"""
)

chain = (
    RunnableMap(
        {
            "context": lambda x: retriever.get_relevant_documents(x["question"]),
            "question": lambda x: x["question"],
        }
    )
    | prompt
    | llm
    | StrOutputParser()
)

if __name__ == "__main__":
    while True:
        question = input("\nAsk a question (or type 'exit'): ")
        if question.lower() in ["exit", "quit"]:
            break

        response = chain.invoke({"question": question})
        print("\n📘 Answer:\n", response)
