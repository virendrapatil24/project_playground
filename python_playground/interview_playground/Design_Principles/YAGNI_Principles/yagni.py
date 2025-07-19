"""
YAGNI - You Aren't Gonna Need It

Always implement things when you actually need them, never when you just foresee that you might need them.
"""


# Bad Example (Violates YAGNI)
class ReportGenerator:
    def generate_pdf(self, data):
        print("Generating PDF...")

    def generate_excel(self, data):
        print("Generating Excel...")

    def generate_html(self, data):
        print("Generating HTML...")

    def send_email(self, data):
        print("Sending email...")


# Even though only PDF is needed, all these methods are written.
report = ReportGenerator()
report.generate_pdf("Sales Data")


# Good Example (Follows YAGNI)
class ReportGenerator:
    def generate_pdf(self, data):
        print("Generating PDF...")


# Only implement what's required for the current scope
report = ReportGenerator()
report.generate_pdf("Sales Data")
