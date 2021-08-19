# Sam's E-book Store

Checkout the project [here](http://samraaj.xyz/)

# About
This is a learning project where I wanted to learn to develop an web application from scratch to deployment as I found myself learning bits and piece of various technologies. The app is an e-commmerce book store (which can be changed to any e-commerce store). The tech stack is React.js, Express.js, Node.js and MongoDB. The site is currently deployed and is live. 


# How to use

- Signin to purchase products
- Browse through products by searching and filtering. 
- You can search on the homepage and filter on the shop page
- View the product and its related products on the product page
- Add products to cart
- Checkout on the cart page
- The payment gateway accepts an valid credit card number (dont worry, nothing gets processed)
- Enjoy shopping!


# Main Features

## Authentication

The app uses JSON Web Tokens for authentication such as login on the backend. The same web token is used in the Frontend to verify login, after which the user is redirected to either the user or admin dashboard depending on the role. 



## Admin and User Dashboard
Through the admin dashboard an admin can create, update and delete categories and products which are fetched from the database. Admin can also view all the orders placed by customers. Users can update their profile, view purchase history and view cart through the dashboard

## REST API

The app uses GET, PUT, POST and DELETE methods to retrieve information from the database. All queries and CRUD for different elements are executed through these methods. Used Postman for testing requests

## Searching, Filtering and Related products
You can search for products by name. You can filter products by category and price. Related products from the same categories are displayed on products page. Best sellers are filtered based on the numSold field of each product. New Arrivals are based on the createdAt field.


## LocalStorage and Cart
You can add products to cart which is kept in the localStorage of the window. The web token upon signin is also stored here

## Checkout and payment processing 

Given that it is a learning project I have used a sandbox braintree payment gateway extension to replicated actual payments. To have actual payments processed one will just have to create an account on braintree and replace api link.

## Deployment

The app is deployed through digital ocean. 






# Technical Learning

These are the concepts that I have learned and would continue to build on and refine my knowledge in each: 


-   Node JS API (Backend) Development
    
-   React JS (Frontend) Web Development
    
-   Functional Components with React Hooks
- Use Postman to test API requests
    
-   Fundamental Concepts of Building Ecommerce Application
    
-   Implement Payment Gateway using Credit Card and PayPal
    
-   Integrate Braintree (A PayPal Company) for Payment Processing
    
-   Implement Advance Searching/Filtering based on Categories
    
-   Implement Advance Searching/Filtering based on Price Range
    
-   Implement Standard Products Search System with Categories option/dropdown
    
-   Build Shopping Cart
    
-   Implement Authentication based on JWT
    
-   Build Scalable React App with Proper Layouts and Routes
    
-   Admin and User Dashboard
    
-   Implement Flexible Private and Admin Routing System
    
-   Advance CRUD with Products and Categories
    
-   Handle File Upload
    
-   Use LocalStorage (CRUD) to Minimize Requests to Backend
    
-   Store Sold Products Record into the Database for Further Processing
    
-   User Profile and Update Ability
    
-   Implement Order Management System by Admin
    
-   Deploy your app to Digital Ocean's Cloud Servers
    
-   Add a Custom Domain name to your app
    


