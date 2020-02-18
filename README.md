## USAGE OF MAPBOX GL WITH REACT HOOKS

1. Create a React project by using npx create-react-app in your terminal,
2. Inside your React App from the terminal write “npm install mapbox-gl” to install mapbox gl,
3. Sign up for an account from [Mapbox Official Website](https://www.mapbox.com) to use maps, after sign in under your account information you will see a default public token(or you can create a new one with your project name) that we will use inside our project,
4. Create token.js file or use environment variables to keep your key, write your token here and export it. Don’t forget to hide it from others by using .gitignore file.
Example token.js:
```javascript
exports.token = "<Your token will be here>";
```
5. Use provided “Map.js” Component inside your App.js, don’t forget to address your token.js correctly,
6. Get your coordinates from [Mapbox Coordinates](https://docs.mapbox.com/mapbox-gl-js/example/mouse-position), and change the zoom and center part as you wish,
7. Write in terminal “npm start” and map is there!!
8. Use your skills of css to use it!

**You should have a version React v16.8 or above to use Hooks.**

Here you can find a list of map styles:
https://docs.mapbox.com/mapbox-gl-js/examples/#styles
