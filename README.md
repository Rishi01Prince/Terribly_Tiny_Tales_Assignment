# Terribly Tiny Tales Assignment

This repository contains the code for the Terribly Tiny Tales assignment. The assignment starts with `App.js`, where the routes for two components are defined. The first route is for the home page with a component named "Home". The second route is for displaying the histogram, which is "/display", with a component named "Display".

## Working of Home Component

1. This is the home page when our project starts, which contains a button. When the button is clicked, it is handled by the `handleClick` function.
2. `handleClick` calls the `loadData` function to fetch data from the server and convert it into words.
3. These words are then sorted and sliced to retrieve the top 20 pairs.
4. The `labels` array contains the words, and the `data` array contains their respective frequencies.
5. Using the `useNavigate` and `useLocation` hooks, the `labels` and `data` are passed to the `Display` component.

## Display Component

1. Once the data is passed to the `Display` component using `useLocation`, a state variable named `plot` is defined with the default values of `labels` and `data`.
2. The component imports the `Chart` component from "react-apexcharts" and uses it to plot the required chart for the top 20 most frequent words.
3. Finally, a button is added to export the data in CSV format, which is followed by the `handleExport` function.

## List of Libraries and Plugins Used

In App.js:

- `react`: A JavaScript library for building user interfaces.
- `react-router-dom`: A library that provides routing capabilities for React applications.

In Display.js:

- `react`: The React library.
- `react-router-dom`: The React Router DOM library for routing.
- `react-apexcharts`: A React wrapper for ApexCharts, a modern charting library.
- `file-saver`: A library for saving files on the client-side.

In Home.js:

- `react`: The React library.
- `react-router-dom`: The React Router DOM library for routing.
