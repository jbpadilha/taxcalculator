# Tax Calculator App

This is a Tax Calculator application built with ReactJS and TypeScript. It allows you to calculate the tax amount based on a yearly salary for the years 2019 to 2022. The app includes a `Main` component that contains a form with two fields: `Salary` and `Tax Year`. When you click the "Calculate" button, it calls an API to fetch the tax rates for each income band.

## Installation

To run the project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/jbpadilha/taxcalculator.git`
2. Navigate to the project directory: `cd taxcalculator`
3. Install the dependencies: `npm install`

## Usage

To start the application, run the following command:

```
npm run start
```

This will start the development server, and you can access the app in your browser at `http://localhost:3000`.

## Folder Structure

The project follows a specific folder structure to organize the code:

- `src`: The root folder of the application.
  - `components`: Contains reusable components used throughout the app.
  - `__test__`: Contains testd components
  - `helpers`: Contains utility functions and helper modules.
  - `models`: Contains TypeScript interfaces and types used in the app.
  - `server`: Contains server-related files or configurations.

## Design Pattern

The app uses the Adapter design pattern to connect to the API. The `Adapter` module utilizes Axios, a popular HTTP client, to make requests to the API and handle the response. This pattern provides a layer of abstraction and allows for easier integration with different APIs.

## Unit Testing

Unit tests are implemented using React Testing Library and Jest. The tests ensure that the components and functionality of the Tax Calculator app work as expected. To run the tests, use the following command:

```
npm run test
```

## Available Years

The Tax Calculator app supports tax calculations for the years 2019 to 2022. Select the desired year from the `Tax Year` dropdown menu to calculate taxes based on the corresponding tax rates.

## Contributing

Contributions to the Tax Calculator app are welcome! If you have any suggestions, improvements, or bug fixes, please open an issue or submit a pull request on the GitHub repository.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute the code for personal or commercial purposes.

## Contact

If you have any questions or need further assistance, please feel free to contact the project maintainer at [jbpadilha@gmail.com](mailto:jbpadilha@gmail.com).

Thank you for using the Tax Calculator app!