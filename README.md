# Zipto

A React application that allows users to enter a postal code and fetch information about that location.

## Features

- **Postal Code Entry:** Users can enter a postal code in the provided input field.
- **Location Information:** Fetches and displays location information including country, state, and place name.
- **Error Handling:** Gracefully handles API call failures and displays an error message.
- **Loading Indicator:** Provides a loading indicator to show when data is being fetched.
- **Clear Information:** Includes a button to clear the displayed information.
- **Styling:** Styled using bootstrap to enhance visual appeal.

## Components

### 1. Postal Code Entry Component

This component provides a form or input field where users can enter a postal code. Upon submission, it triggers the API call to fetch location information.

### 2. Location Information Component

Responsible for displaying the fetched location information. It includes details such as country, state, and place name. Additionally, it handles errors gracefully, displays a loading indicator, and provides an option to clear the displayed information.

### Screen Shots

![Screenshot (836)](https://github.com/Zenith-17/Zipto/assets/99113156/76ec85ae-b5f4-42ac-8e9d-ee69eb29863f)

![Screenshot (837)](https://github.com/Zenith-17/Zipto/assets/99113156/8c6a70a0-9ce7-4217-a97d-99b5c800c660)

![Screenshot (838)](https://github.com/Zenith-17/Zipto/assets/99113156/0d9fc035-857e-474b-a6c4-221923772fca)

![Screenshot (839)](https://github.com/Zenith-17/Zipto/assets/99113156/c62dc8bd-0fae-433d-99dc-3fff9fb9bfaa)

## API Information

API URL for Pincode 400093: [https://api.zippopotam.us/in/400093](https://api.zippopotam.us/in/400093)
Request method: GET

## Usage

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/zip-code-information-app.git
   cd zip-code-information-app
