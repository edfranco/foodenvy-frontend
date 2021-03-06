This project can be deployed here [FoodEnvy](https://edfranco.github.io/foodenvy-frontend/).
The server repo can be found here [food-envy backend](https://github.com/edfranco/foodenvy-backend).

## FoodEnvy
![Screen Shot 2019-09-11 at 9 00 51 AM](https://user-images.githubusercontent.com/11623323/64714043-c9e37c80-d472-11e9-9578-45a5a48c8506.png)

This was app was built as a social media site that allows users to post a picture of a dish they had, a description, and what restaurant they ate at. 

Restaurants also have a profile to show what posts were made about their restaurant and users have a profile to show what food they want to show case. Additionally restaurants have a map to show where the restaurant is located.

-----------------------------------------------------------------

### Technologies
#### MERN
- Mongoose
- Express
- React
- Node

### External API
- Google Maps API

-----------------------------------------------------------------

### Installation
If you'd like to clone this repo and make it your own do these following steps

- Clone this repo in your preferred project directory
```
git clone https://github.com/edfranco/foodenvy-frontend your-name-here
```
- Install package dependencies with NPM Install
```
npm i
```
- Clone the [server](https://github.com/edfranco/foodenvy-backend)
```
git clone https://github.com/edfranco/foodenvy-backend your-name-here
```
- Install package dependencies with NPM Install
```
npm i
```
- For the google maps to work you'll need your own api key (nice try) and you'll need to create a .env with the code as so
```
API_KEY=[your_api_key_here]
```

- For your front-end api calls you'll want to go to
```
your_project_name/src/constants
```
And change the value to 
```javascript
export const API_URL = `https://yourServer/api/v1/`
```
- Unfortunately there is no seed file (yet) so you'd have to make your own models through your mongod server

-----------------------------------------------------------------

### Database Specifics
There are three models:
- User: The user has a name, a username, and they create posts. A user has a one-to-many relationship with posts.
- Post: A post gets created by the user and belongs to a user and a restaurant. Posts share a many-to-one relationship to users and restaurants.
- Restaurant: A restaurant can only be created through the server so far and shares a one-to-many relationship with posts

-----------------------------------------------------------------

### Glaring Bugs
- On first render the axios call retrives no data. Clicking on a link to the home through the logo or the profile fixes it.
- Trying to traverse from restaurant to restaurant does not work. You have to go from restaurant to profile then to a different restaurant.
- You can't look at different restaurants from another users profile. It'll rerender the current users profile.
- Cannot update bio through the front-end as the put request does not work
