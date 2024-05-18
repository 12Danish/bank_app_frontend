# React E-Wallet App Frontend

This project uses react(typescript) along with tailwindCSS, react-toastify and ShanCn to create the front end for an e-wallet app. This is just the frontend. It has been designed to seamlessly link with any backend.

## Concept:

The concept of this app is to provide an interface for users where they can make an online e-wallet account, perform transactions, see their transaction histories and request for loans and see their previous loans as well as logs for a particular loan.

## Dependencies

- Node v18.16.0 or greater
- tailwindCSS
- ShadCn
- react-toastify
- Custom Links from backend

## src Directory Structure
- ApiService:
              This directory has different files for each different fetch request that has to be made to the backend. Configure your own paths and follow commented instructions to ensure               smooth synchronization with backend
- assets/images:
                This contain the logo for the app
- componenets:
               The different components which make up the application
                - ui : Components provided by ShadCn
- customHooks:
              Contains different customHooks to keep code modular
- props:
        Contains necessary interfaces for different componenets across the application
- pages:
        Components are joined to form various pages in this directory.
- styles:
        Tailwind Utility Classes are grouped under a single class name for some components

 ## Interface 

 ### App Logo Screen:

 ![The first page of the app, with the logo](https://github.com/12Danish/bank_app_frontend/blob/main/images/logopage.jpg)

 ### Signup Screen:

 ![The signup interface](https://github.com/12Danish/bank_app_frontend/blob/main/images/signup.jpg)

 ### Login Screen

 ![The Login Interface](https://github.com/12Danish/bank_app_frontend/blob/main/images/login.jpg)

 ### Dashboard 

 ![The dashboard screen with different links to got to different pages](https://github.com/12Danish/bank_app_frontend/blob/main/images/home.jpg)

### Transfer Money

 ![Interface for transfering amount](https://github.com/12Danish/bank_app_frontend/blob/main/images/transfer'.jpg)

### Transaction History

![Previous Transactions](https://github.com/12Danish/bank_app_frontend/blob/main/images/transactions.jpg)

### Loans

![Interface to request and view previous loans](https://github.com/12Danish/bank_app_frontend/blob/main/images/loans-home.jpg)

### Loan logs

![Logs for a particular loan](https://github.com/12Danish/bank_app_frontend/blob/main/images/loan-details.jpg)

### Profile 

![User data](https://github.com/12Danish/bank_app_frontend/blob/main/images/profile.jpg)


## Installation 

- Pull the project
- Have the dependencies installed
- Adjust ApiService according to backend.
- Run server

## Learning 

During this project, I gained insight into utilizing various libraries with React to develop a responsive frontend. I also grasped the significance of validation and authentication in frontend development. Implementing cookie-based authentication, I learned how to authenticate users effectively and communicate their authenticated status to the backend.
