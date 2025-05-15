Expense Tracker with AI-Powered Features
Objective
The objective of this project, as outlined by Unico Connect, is to assess my approach to problem-solving, creativity, and execution through the development of an expense tracker. There is no single correct solution—rather, the focus is on understanding my thought process and ability to tackle challenges effectively. This README.md documents my implementation, decisions, and reflections to provide insight into my approach.
Concept
The Expense Tracker is a web application designed to help users manage their finances by categorizing expenses, analyzing spending patterns, and providing predictive budgeting insights. The application leverages AI to enhance user experience through receipt image recognition (OCR + NLP), spending pattern analysis, and predictive budgeting recommendations. The backend is built using XANO (free tier), aligning with Unico Connect’s preferred backend technology, while the frontend is a simple web app using HTML, JavaScript, and Tailwind CSS for a clean and responsive UI.
Key Features
![Screenshot 2025-05-15 102858](https://github.com/user-attachments/assets/80f98687-bff6-481a-b6d6-09cf2751d05e)


Expense Entry: Users can manually input expenses or upload receipt images for automatic data extraction.
Categorization: Expenses are categorized (e.g., Food, Transport, Entertainment) either manually or automatically via AI.
Spending Pattern Analysis: Visual insights into spending trends over time, broken down by category.
Predictive Budgeting: AI-driven predictions to suggest monthly budgets based on historical spending.
User Authentication: Secure login to ensure user data privacy.

Implementation Requirements
1. Backend: XANO (Free Tier)
I used XANO as the backend to handle data storage, API endpoints, and business logic. XANO was chosen as per the project requirements, and I created a free-tier account to build the backend. Below are the key components implemented in XANO:

Database Tables:
users: Stores user information (id, email, password_hash).
expenses: Stores expense records (id, user_id, amount, category, date, description, receipt_url).
categories: Predefined expense categories (id, name).


API Endpoints:
POST /auth/register: Register a new user.
POST /auth/login: Authenticate a user and return a JWT token.
POST /expenses: Add a new expense (manual entry).
POST /expenses/upload-receipt: Upload a receipt image for OCR processing.
GET /expenses: Retrieve a user’s expenses.
GET /spending-analysis: Analyze spending patterns by category and time.
GET /predictive-budget: Provide a predicted budget based on historical data.


Authentication: Used XANO’s built-in JWT authentication to secure API endpoints.

2. AI Features
The project incorporates the following AI-driven features:
Receipt Image Recognition (OCR + NLP)

Implementation: I integrated Tesseract.js for client-side OCR to extract text from receipt images uploaded by the user. After extracting the text, I used a simple NLP approach with Compromise.js (a lightweight NLP library) to parse the extracted text and identify key details such as amounts, dates, and potential categories.
Thought Process: Since XANO does not natively support OCR or NLP, I opted for client-side processing to keep the backend lightweight. Tesseract.js was chosen for its ease of use in a browser environment, and Compromise.js helped with basic text parsing without requiring a heavy server-side NLP model.
Challenges: Receipt image quality can vary, affecting OCR accuracy. To mitigate this, I added basic error handling and allowed users to manually edit extracted data before submission.
Creativity: Users can upload receipts in various formats (e.g., JPEG, PNG), and the system attempts to auto-categorize expenses based on keywords (e.g., "coffee" → Food).

Spending Pattern Analysis

Implementation: I created an API endpoint (GET /spending-analysis) in XANO to aggregate expenses by category and month. The frontend visualizes this data using Chart.js to display bar charts and pie charts, showing spending trends over time.
Thought Process: Aggregating data in XANO using its query builder was straightforward. I chose Chart.js for visualization because it’s lightweight and integrates well with a simple web app.
Creativity: Added a time filter (e.g., last 30 days, last 3 months) to let users analyze trends over different periods.

Predictive Budgeting

Implementation: The GET /predictive-budget endpoint in XANO calculates a predicted budget by averaging the user’s monthly spending per category over the last 3 months and adding a 10% buffer for unexpected expenses.
Thought Process: I opted for a simple statistical approach due to XANO’s limitations in hosting complex machine learning models. The prediction is based on historical averages, which provides a practical starting point for budgeting.
Creativity: The system highlights categories where the user is overspending (e.g., if Food spending exceeds 40% of the total budget) and suggests adjustments.

Frontend

Tech Stack: HTML, JavaScript, Tailwind CSS, Chart.js, Tesseract.js, Compromise.js.
Design Choices: Built a single-page application with a clean, responsive UI using Tailwind CSS. The app includes sections for expense entry, receipt upload, spending analysis, and budgeting insights.
Responsiveness: Ensured the UI is mobile-friendly with Tailwind’s responsive utilities (e.g., sm:, md:).

Thought Process and Problem-Solving
Approach

Planning:
Defined the database schema in XANO to support users, expenses, and categories.
Sketched out the UI layout: a dashboard with sections for expense entry, analysis, and budgeting.
Identified AI libraries (Tesseract.js, Compromise.js) that could run client-side to meet the OCR and NLP requirements.


Execution:
Set up XANO backend with necessary tables and API endpoints.
Built the frontend iteratively, starting with user authentication, then expense entry, and finally AI features.
Tested each feature incrementally to ensure functionality.


Challenges:
OCR Accuracy: Handled by allowing manual edits after receipt extraction.
XANO Limitations: Since XANO doesn’t support advanced AI models, I offloaded AI processing to the client side.
Predictive Budgeting: Used a simple averaging method due to time constraints but noted that a machine learning model (e.g., linear regression) could improve predictions in a production environment.



Creativity

Added a user-friendly receipt upload feature with real-time feedback on extracted data.
Included visual spending insights with interactive charts to make the analysis engaging.
Implemented category-based budget suggestions to help users manage overspending.
