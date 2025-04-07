# User List - Next.js 15 (SSR) - SEO and WCAG Compliant

## Project Overview

This project is a simple user list page built with **Next.js 15** (stable version) using **Server-Side Rendering (SSR)**. It displays a list of users with names and short descriptions sourced from a static JSON file. The page is optimized for **SEO** and meets **basic WCAG accessibility standards**. 

## Features

- **Server-Side Rendering (SSR)**: The user list page is rendered on the server and sent to the client, ensuring it is crawlable by search engines.
- **SEO Optimization**: Dynamic `<title>` and `<meta name="description">` tags are implemented, with support for Open Graph and Twitter Cards.
- **WCAG Compliance**: The page uses semantic HTML, includes alt text for images, and supports basic keyboard navigation (focus states).
- **Performance Optimizations**: The Next.js `<Image>` component is used with lazy loading to ensure fast load times.

## Tech Stack

- **Frontend**: Next.js 15 (with SSR)
- **CSS**: Tailwind CSS for styling
- **Data**: Static JSON file for the user data
- **SEO Tools**: Dynamic metadata, Open Graph, and Twitter Cards for social sharing

## Installation

To run this project locally, follow these steps:

### 1. Clone the repository

```bash
git clone https://github.com/your-username/user-list-nextjs.git


cd user-list-nextjs


npm install


npm run dev


# Project Structure
# The project is structured as follows:


├── data/
│   └── users.json  # Static data for the user list
├── pages/
│   ├── index.tsx   # The main page displaying the user list
│   └── _app.tsx    # Global app configuration
├── public/
│   └── images/     # Images (e.g., profile pictures) for the users
├── styles/
│   └── globals.css # Global CSS styles
└── README.md       # This file



### Key Elements:

1. **Installation**: Easy-to-follow instructions on cloning the repository, installing dependencies, and running the app locally.
2. **Tech Stack**: An overview of the technologies used.
3. **SEO and WCAG**: Detailed explanation of how SEO optimizations and WCAG compliance were implemented.
4. **Features**: A section explaining the main features, such as SSR, SEO optimizations, and accessibility.
5. **Conclusion**: Summarizes what the project demonstrates.



How the Project Works
Server-Side Rendering (SSR)
The users list is dynamically rendered using SSR in Next.js.

The getUsers() function reads the data from a local JSON file (data/users.json).

The data is passed into the component and rendered on the server before being sent to the client.

SEO Optimizations
Dynamic metadata is used to update the page's <title> and <meta name="description"> tags.

Open Graph and Twitter Cards metadata are included to enhance the appearance of the page when shared on social media.

WCAG Compliance
The page uses semantic HTML elements such as <h1>, <ul>, and <li>.

Alt text is provided for all images to improve accessibility for screen readers.

Focus states are added to interactive elements to improve keyboard navigation.

Performance Optimizations
The Next.js <Image> component is used to lazy load images for better performance.

The images are served from the /public/images/ directory, making them easily accessible without requiring additional configuration.

Adding More Users
To add more users, simply edit the data/users.json file and add the desired user information. The file should be an array of user objects with the following properties:

id: A unique identifier for the user (e.g., 1, 2, 3, etc.).

name: The name of the user.

description: A short description of the user.

image: The path to the user's image file in the /public/images/ directory.

Example:

json
Copy
Edit
{
  "id": 4,
  "name": "Bob Brown",
  "description": "A skilled backend developer.",
  "image": "/images/bob_brown.jpg"
}
Files to Edit
data/users.json: Edit this file to add, remove, or update user data.

pages/index.tsx: This file renders the user list and can be customized to modify the layout or structure.

styles/globals.css: Add custom styles if needed to adjust the overall appearance of the page.

Conclusion
This project demonstrates how to build an SEO-optimized, WCAG-compliant user list page using Next.js 15 (SSR). By implementing SSR, we ensure the page is crawlable by search engines, and by following WCAG guidelines, we ensure the page is accessible to a wider range of users. Additionally, performance optimizations like lazy loading and image optimization are included to provide a fast and efficient user experience.