# Frontend Coding Challenge

## About App

Making use of [openchargemap.org API] (https://openchargemap.org/site/develop/api), I was able to build a simple React-Native App which get the list of surrounding public chargers around the current location of the user.

# Utilizing the following packages

- <b>expo-location</b> allows reading geolocation information from the device.
- <b>axios</b> a promised-based HTTP client for JavaScript. It has the ability to make HTTP requests from the browser and handle the transformation of request and response data.
- <b>React Native Testing Library (RNTL) is a lightweight solution for testing React Native components.

# Things I did

- Added tests for the components and hook
- created `useGeolocation` hook in order to make the code more cleaner
- use conventional commits

### Improvements

If I had more time on my hands, I would:

- have loved to write a better test for `useGeoLocation` hook
- improve the user flow: Clicking on a card will open a modal or navigate use to a Details page which shows the user more information about a POI
- cleaned up the code more by creating a `useOpenChargeApi` hook which would help in fetching data

### Available Scripts

- `yarn start`- Runs the app in the development mode. Open http://localhost:19006 to view it in the browser.
- `yarn test`- Launches the test runner in the interactive watch mode
