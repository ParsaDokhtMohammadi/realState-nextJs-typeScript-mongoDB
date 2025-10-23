🏠 Real Estate Listing Platform

A full-stack Next.js + TypeScript web application for browsing and posting real estate listings.
Users can create new property listings that automatically appear on the main page, and authentication is handled with NextAuth.
The project was designed to simulate an eBay-style real-estate marketplace, with secure sign-in and server-side rendering using the App Router.

🧩 Features

🏡 Create & View Listings – Users can post new real estate properties for sale, including title, description, price and other details.

🌐 Public Main Page – Displays all available listings fetched from MongoDB.

🔐 User Authentication (NextAuth) – Allows users to log in and manage their listings securely.

🧭 App Router Integration – Built entirely with the Next.js App Router for better performance and code organization.

⚙️ TypeScript Support – Ensures cleaner, safer, and more maintainable code.

🗃️ MongoDB Database – Stores user data and property information.

🛠️ Tech Stack

Framework: Next.js (App Router)
Language: TypeScript
Database: MongoDB
Auth: NextAuth

📦 Installation & Setup
# Clone the repository
git clone https://github.com/ParsaDokhtMohammadi/realState-nextJs-typeScript-mongoDB

# Navigate into the folder
cd realState-nextJs-typeScript-mongoDB

# Install dependencies
npm install

# Add environment variables in .env.local
MONGODB_URI=your_mongodb_uri
NEXTAUTH_SECRET=your_secret
NEXTAUTH_URL=http://localhost:3000

# Run the development server
npm run dev


Then open http://localhost:3000
 to view the app 🚀

🎯 Project Purpose

This project was created to gain hands-on experience with Next.js App Router, NextAuth, and TypeScript, while simulating a real-world marketplace platform.
It helped me understand authentication flow and MongoDB data handling in modern full-stack applications.
