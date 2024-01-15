# Quiz Application

This is a quiz application which begins with an introductory page, offering users an overview of the scoring system and essential instructions. Following this, users are prompted to enter their email to initiate the quiz. The subsequent quiz section presents 15 questions, each with options for users to select. A timer, indicating the remaining 30 minutes, ensures time awareness, and a navigation panel facilitates easy movement between questions. The quiz auto-submits once the time limit elapses. Upon completion, users are directed to the result page, where they can view their score alongside a detailed breakdown of each question, displaying both their chosen answers and the correct ones. The navigation panel, available throughout the quiz, aids users in efficient question navigation. Overall, the application aims to provide a seamless and informative quiz experience.

Live : [https://65a51d0940334638081bee04--zesty-churros-7cdfc9.netlify.app/quiz](https://zesty-churros-7cdfc9.netlify.app/)

# OverView of the Website:


![2024-01-15](https://github.com/Moumita2002/quiz/assets/102172188/5fef466e-67e0-4a5c-b49b-66640cf8c203)


![2024-01-15 (1)](https://github.com/Moumita2002/quiz/assets/102172188/9a075040-8e8c-4d04-8ad0-560b59eb2a45)

The questons which are not attempted are kept blank

![2024-01-15 (2)](https://github.com/Moumita2002/quiz/assets/102172188/c623fda0-290d-461e-aeb7-246006c3d05e)


# Three main components:

- NavigationPanel.js - The NavigationPanel component facilitates user navigation through the quiz. It dynamically styles buttons based on user interactions.

- Questions.js - The Questions component is the core module of the React-based quiz application. It manages a set of 15 questions, includes a timer for the 30-minute quiz duration, and provides a user-friendly navigation panel. The component dynamically updates question content, tracks user responses, and displays results upon completion, showcasing answers, correct solutions, and the overall score. Its simple and intuitive design makes it easily integrable into any React quiz application, ensuring a seamless and engaging user experience.

- Result.js - The Result component provides users with a comprehensive overview of their quiz performance. It features a score board displaying the total number of questions, quiz points, and earned points. The user can restart the quiz by clicking the "Restart" button. Additionally, a table presents each question along with the user's selected answer and the correct answer for detailed review. The component is designed for easy integration into React quiz applications, offering a user-friendly and informative results display.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
