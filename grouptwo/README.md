## NexusFlow Project

A Unified Interface for Centralized Access to Digital Services.

## Overview

- NexusFlow is a cloud-based management platform that consolidates premium digital services into a single, user-friendly dashboard.

- What it does: It provides a centralized hub to access tools like ChatGPT, Grammarly, Ahrefs, and Envato Elements.

- Who it’s for: Individuals and organizations looking to avoid "subscription fatigue" and access high-tier tools without managing multiple separate accounts.

- Why it exists: To solve the problem of fragmented pricing models and high entry costs by offering flexible, and affordable subscription durations (hourly to monthly).

## Image

![App Preview](public/app.png)

## Core Features

- Unified Services Dashboard: Access ChatGPT, Grammarly, Ahrefs, and Envato Elements from one central hub.

- Flexible Subscription Plans: Choose between Hourly, Daily, Weekly, and Monthly options to ensure affordability.

- Subscription Overview Panel: Real-time tracking of active plans and remaining validity periods.

- Responsive Design: Fully optimized for desktop, tablet, and mobile viewing.

## How to Install

Follow these steps to set up the project locally:

1. Fork and clone the repository
```
   bash
   git clone git@github.com:Tech-minders/NexusFlow-Group-Project.git
   cd NexusFlow-Group-Project/grouptwo/src
```

2. Install Dependencies:
   Make sure you have Node.js installed
   ```
   bash
   npm install
   ```

## How to use

- Sign Up/Login: Create an account to access the secure dashboard.
- Browse Services: Select a service card (e.g., ChatGPT or Ahrefs) from the main grid.
- Select a Plan: Choose a duration (e.g., "Daily Plan") that fits your current budget and needs.
- Manage: Coming soon...

## Tech Stack

- Frontend framework - React Js
- Styling: Tailwind CSS
- Routing: React Router 6
- Design: Figma

## Custom Hooks Breakdown

UseState Hook - Stores a value (state) in a component
- Updates that value when something changes
- Re-renders the component automatically when the value updates
- Subscription Management,Payment Simulation, Checkout Orchestration, Dynamic UI Toggling
- UseNavigate Hook - Gives access to the navigation object without passing props

## Component Tree
```
├── App.jsx
├── assets
├── components
│ ├── Dashboard
│ │ ├── COMPONENTS
│ │ │ ├── DASHBOARD
│ │ │ │ ├── Dashboard.jsx
│ │ │ │ ├── ServiceCard.jsx
│ │ │ │ ├── ServicesSection.jsx
│ │ │ │ ├── StatCard.jsx
│ │ │ │ ├── StatsSection.jsx
│ │ │ │ └── WelcomeSection.jsx
│ │ │ ├── Header
│ │ │ │ ├── Header.jsx
│ │ │ │ ├── NotificationBell.jsx
│ │ │ │ └── UserProfile.jsx
│ │ │ └── SideBar
│ │ │ ├── Logo.jsx
│ │ │ ├── NavItem.jsx
│ │ │ ├── NavMenu.jsx
│ │ │ └── SideBar.jsx
│ │ └── index.jsx
│ ├── ErrorPage
│ │ └── Error.jsx
│ ├── Homepage
│ │ ├── assets
│ │ │ ├── ahref.png
│ │ │ ├── chatgpt.png
│ │ │ ├── envato.png
│ │ │ ├── grammarly.png
│ │ │ └── index.js
│ │ ├── components
│ │ │ ├── AboutUs
│ │ │ │ ├── About.jsx
│ │ │ │ ├── Cards
│ │ │ │ │ └── Card.jsx
│ │ │ │ └── Header
│ │ │ │ └── Header.jsx
│ │ │ ├── Contactus
│ │ │ │ └── Contact.jsx
│ │ │ ├── Footer
│ │ │ │ └── Footer.jsx
│ │ │ ├── HeroSection
│ │ │ │ ├── Header
│ │ │ │ │ └── Header.jsx
│ │ │ │ ├── Herobtn
│ │ │ │ │ └── Herobtn.jsx
│ │ │ │ ├── HeroList
│ │ │ │ │ └── Herolist.jsx
│ │ │ │ └── Herosection.jsx
│ │ │ ├── NavBar
│ │ │ │ ├── Menu
│ │ │ │ │ ├── Logo.jsx
│ │ │ │ │ ├── Menubtn.jsx
│ │ │ │ │ └── Menu.jsx
│ │ │ │ └── Navbar.jsx
│ │ │ └── OurServices
│ │ │ ├── Header
│ │ │ │ └── Header.jsx
│ │ │ ├── ServiceList
│ │ │ │ ├── ServiceCard
│ │ │ │ │ └── Servicecard.jsx
│ │ │ │ ├── Servicedetails.jsx
│ │ │ │ └── Servicelist.jsx
│ │ │ └── Services.jsx
│ │ └── index.jsx
│ ├── LogIn
│ │ ├── components
│ │ │ └── Login.jsx
│ │ └── index.jsx
│ ├── SignUp
│ │ ├── components
│ │ │ └── Signup.jsx
│ │ └── index.jsx
│ └── Subscription
│ ├── assets
│ │ ├── ahref.png
│ │ ├── chatgpt.png
│ │ ├── envato.png
│ │ ├── grammarly.png
│ │ └── index.js
│ ├── CheckoutSidebar.jsx
│ ├── index.jsx
│ ├── ProductCard.jsx
│ └── products.js
├── index.css
└── main.jsx
```
## Future Enhancement

- API Integration
- Integrate Payments
- Implement Backend

## License

Distributed under the MIT License.

## Author

1. Lucy Njoka - Subscription Page
2. Patrick Mutua - Home page
3. Sylvester Konana - Login/Signup Page
4. Nicholas Shayo - Dashboard page
