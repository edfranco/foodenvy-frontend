This project can be deployed here [FoodEnvy](https://edfranco.github.io/foodenvy-frontend/).
The server repo can be found here [food-envy backend](https://github.com/edfranco/foodenvy-backend).

## FoodEnvy
This was app was built as a social media site that allows users to post a picture of a dish they had, a description, and what restaurant they ate at. 

Restaurants also have a profile to show what posts were made about their website and users have a profile to show what food they want to show case. Additionally restaurants have a map to show where the restaurant is located.

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
- clone the [server] (https://github.com/edfranco/foodenvy-backend)
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
- unfortunately there is no seed file (yet) so you'd have to make your own models through your mongod server
