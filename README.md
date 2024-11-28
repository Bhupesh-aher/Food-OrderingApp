🍕 Food Ordering App
A modern food ordering web app built with React.js, Tailwind CSS, and Redux for state management. The app uses React Router for navigation and fetches restaurant and dish data from the live Swiggy API.
---

🔥 Features
Restaurant Cards: Displays a list of restaurant cards fetched from the Swiggy API on the homepage.
Restaurant Details: When a user clicks on a restaurant card, it navigates to the restaurant’s page where dishes are displayed.
Accordion Menu: Each restaurant has an accordion component where users can view and select different dishes.

Add to Cart: Users can add dishes to their cart. The cart updates in real-time using Redux to manage the state.
Real-Time Cart Update: When an item is added to the cart, the cart page is automatically updated due to Redux's subscription mechanism.

Code Splitting: Utilized React.lazy and Suspense to improve performance by lazily loading one of the components.
Custom Hook: Created a custom hook to abstract data-fetching logic, adhering to the Single Responsibility Principle (SRP), making the code clean and maintainable.
Responsive Design: Fully responsive design using Tailwind CSS for a smooth mobile and desktop experience.

Tech Stack
Frontend: React.js, Tailwind CSS, React Router, Redux
State Management: Redux Toolkit
API: Swiggy API for restaurant and dish data
Performance Optimization: Code splitting with React.lazy and Suspense
Custom Hooks: Abstracted logic for fetching restaurant data


How It Works -

Home Page: When the app loads, it fetches restaurant data from the Swiggy API and displays it as a list of cards on the homepage.
Restaurant Detail Page: Clicking a restaurant card navigates to the details page where an accordion menu displays a list of dishes.
Add to Cart: When a user adds a dish to their cart, an action is dispatched to the Redux store. The cart page is automatically updated as it subscribes to the Redux store.
Code Splitting: One of the components is lazy-loaded to enhance performance by reducing the initial bundle size.



Best Practices Followed
🔑 Single Responsibility Principle (SRP): Extracted data-fetching logic into a custom hook to keep components clean and maintainable.
⚡ Code Splitting: Leveraged React.lazy for lazy loading certain components to improve performance.
🧰 Redux: Managed global state effectively with Redux, ensuring a smooth experience for the user as they interact with the cart.
📱 Responsive Design: Styled the app using Tailwind CSS to ensure responsiveness across various screen sizes.




Future Improvements
Implement user authentication and allow users to save their cart and order history.
Add a search functionality for restaurants and dishes.
Improve accessibility features.  