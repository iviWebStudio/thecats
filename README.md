# TheCats
Simple React-Redux application which displays images from cat API.

### Task description

Build a simple React-Redux application which displays images from cat API. Here's the API
https://docs.thecatapi.com/api-reference

Example URL to fetch 10 cats with category cats:
https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=1

Example URL to fetch the categories:
https://api.thecatapi.com/v1/categories

The page is a simple app that loads a sidebar of all categories and  displays 10 cat images in the main display.
* All the categories are clickable - you can click on them and choose a different category
* There is a button to load more cat images at the bottom, which will load 10 more cat  images.
* No category is selected by default
* The app must be built with react-redux (mobix)
* Using react router, typescript is a plus
* Don't use any premade UI kit lib, write all styles purely, (SCSS or StyledComponents)
* Aesthetics and clean code are important when building this small prototype.
* Responsive design is a must.

Here's what we will be evaluating when we will review the solution:
* Follows the requirements - app does what is required
* Clean code - there is no dead/commented out code, code is easy to read and understand, well structured
* JS - state handled in redux (mobix), follows common conventions
* UI - looks nice and is responsive

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.