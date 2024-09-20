# Currency Conversion App

This project is a simple currency conversion app built with React and Vite. It uses Axios for data fetching and follows a structured folder organization for components, services, and hooks.

What do you need to run the project:

- Node.js and yarn installed
- A valid API key for Currency Beacon

How to run the app:

- Clone the repository
- Run 'yarn' to install dependencies
- Create a .env file in the root directory and add the following line:

```
VITE_CURRENCY_BEACON_API_KEY=your_api_key_here
```

(replace 'your_api_key_here' with yours API key you got from Currency Beacon)

- start the development server with 'yarn dev'
- open the app at: http://localhost:3000/

# Assumptions and Decisions

Folder Structure: The project is organized into separate folders for components, services, hooks, and types to maintain clarity and modularity.

Components: Reusable UI components such as CurrencySelector, Error, and Loading were created to improve the maintainability and scalability of the app.

Services: A dedicated service is used to handle fetching. This service is responsible for making requests to the Currency Beacon API and returning the response.

Hooks: A custom hook was implemented to manage the data fetching logic. This hook is responsible for:

- Modifying and processing the result from the API.
- Verifying if the API response was successful.
- Managing and returning the loading state, result, or any errors encountered during the request.

Types: Types were defined to strictly type the response from the backend, ensuring type safety across the application.

Translations: I did not implement internationalization or extract text strings into separate files, as this was deemed unnecessary for a project of this size.

API key management: The provided API key exceeded the usage limit before I even started using it, so I used my own API key for testing purposes during programming.

In addition: a test could be added to check that after mocking currency and conversion value it will correctly convert our amount to the mocked currency.
