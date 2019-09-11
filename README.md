This project can be deployed here [FoodEnvy](https://edfranco.github.io/foodenvy-frontend/).
The server repo can be found here [food-envy backend](https://github.com/edfranco/foodenvy-backend).

## FoodEnvy
![Screen Shot 2019-09-11 at 9 00 51 AM](https://user-images.githubusercontent.com/11623323/64714043-c9e37c80-d472-11e9-9578-45a5a48c8506.png)

This was app was built as a social media site that allows users to post a picture of a dish they had, a description, and what restaurant they ate at. 

Restaurants also have a profile to show what posts were made about their restaurant and users have a profile to show what food they want to show case. Additionally restaurants have a map to show where the restaurant is located.

### Technologies
- React
- Node
- Express
-Mongoose

### Installation
If you'd like to clone this repo and make it your own do these following steps

- Clone this repo in your preferred project directory
```
git clone https://github.com/edfranco/foodenvy-frontend your-name-here
```
- npm i
```
npm i
```
- clone the [server](https://github.com/edfranco/foodenvy-backend)
```
git clone https://github.com/edfranco/foodenvy-backend your-name-here
```
- npm i the server
```
npm i
```
- for the google maps to work you'll need your own api key (nice try) and you'll need to create a .env with the code as so
```
API_KEY=[your_api_key_here]
```

- for your front-end api calls you'll want to go to
```
your_project_name/src/constants
```
and change the value to 
```javascript
export const API_URL = `https://yourServer/api/v1/`
```
- unfortunately there is no seed file (yet) so you'd have to make your own models through your mongod server

### Database Specifics
There are three models:
- User: The user has a name, a username, and they create posts. A user has a one-to-many relationship with posts.
- Post: A post gets created by the user and belongs to a user and a restaurant. Posts share a many-to-one relationship to users and restaurants.
- Restaurant: A restaurant can only be created through the server so far and shares a one-to-many relationship with posts
