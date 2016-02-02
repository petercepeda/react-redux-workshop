# react-redux-workshop
Workshop for learning React and Redux basics.

<br>
##Why React?

React is a JavaScript library for creating user interfaces open sourced by Facebook. You can think of it as the V in MVC.

####Simple
Express how your UI should look at any given time, and React will manage updating your UI with new data.

####Declarative
React components describe the state of the UI. When the state changes, React knows to only update the changed parts.

####Compositional and Reusable
All you do with React is create bite-sized, encapsulated UI blocks with which you build your fancy castle.

<br>
##Setup

1. You'll need to clone this project into your working directory to get started.
  ```
  $ git clone https://github.com/cepeda617/react-redux-workshop.git
  ```

1. Get the latest version of Node.
  ```
  $ brew update
  $ brew install node
  $ node -v
  ```

1. Go into the workshop directory and install the required node modules.
  ```
  $ npm install
  ```

1. You can now start the webpack server.
  ```
  $ npm start
  ```

1. Visit `http://localhost:8080/` in your browser, preferrably Chrome.

1. If you're welcomed with a "Hello World!" on your screen, you're ready to go!

<br>
##Get started!
###[Exercise 1: Edit the `HelloWorld` component &rarr;](docs/exercise-1.md)

<br>
##Exercises

* [Exercise 1: Edit the `HelloWorld` component](docs/exercise-1.md)
* [Exercise 2: Create a simple `Toggle` component](docs/exercise-2.md)
* [Exercise 3: Add properties to customize `Toggle` values](docs/exercise-3.md)
* [Exercise 4: Use children as the `Toggle` label](docs/exercise-4.md)
* [Exercise 5: Handle `Toggle` clicks](docs/exercise-5.md)
* [Exercise 6: Hold `Toggle` state in the component](docs/exercise-6.md)
* [Exercise 7: Add CSS to `Toggle`](docs/exercise-7.md)
* [Exercise 8: Create a `Settings` component using `Toggle` components](docs/exercise-8.md)
* [Exercise 9: Update `Toggle` state in the `Settings` component](docs/exercise-9.md)
* [Exercise 10: Use JSON to populate `Settings` component](docs/exercise-10.md)

<br>
##Hungry for more?
Check out the React docs at:
https://facebook.github.io/react/docs/getting-started.html
