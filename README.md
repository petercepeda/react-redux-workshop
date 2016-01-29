# react-redux-workshop
Workshop for learning React and Redux basics.

##Why React?

React is a JavaScript library for creating user interfaces open sourced by Facebook. You can think of it as the V in MVC.

####Simple
Express how your UI should look at any given time, and React will manage updating your UI with new data.

####Declarative
React components describe the state of the UI. When the state changes, React knows to only update the changed parts.

####Compositional and Reusable
All you do with React is create bite-sized, encapsulated UI blocks with which you build your fancy castle.

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


##Exercise 1: Edit the `HelloWorld` component
1. Open the project in your text editor and edit `app/components/HelloWorld.js`.

  ```js
  export default class HelloWorld extends Component {
    render() {
      return (
        <div>Hello World!</div>
      )
    }
  }
  ```

  In the `render` method, you'll find what looks like HTML. It's actually JSX; a JavaScript syntax extension that
  makes the actual code for creating elements look more familiar.
  ```jsx
  // Plain ol' JavaScript
  React.createElement('a', { href: '/login', title: 'Login' }, 'Log in to your account');

  // JSX
  <a href='/login' title='Login'>Log in to your account</a>
  ```

1. Change "Hello World!" to something else and save. The webpage should now have your changes.

  > **Note:** You shouldn't have to reload your webpage. We're hot-loading here, so you you'll see your changes as you make them.
  https://www.quora.com/Whats-hot-loading-in-Webpack-and-how-does-it-work

##Exercise 2: Create a simple `Toggle` component
1. Save `HelloWorld.js` as `Toggle.js` in the same directory.
  Rename the class to `Toggle` and clear the `div`.
  ```jsx
    export default class Toggle extends Component {
      render() {
        return (
          <div></div>
        )
      }
    }
  ```
1. Declare a `enabled` property for the `Toggle` component. Make sure to import `PropTypes` at the top of the file.
  > **Note:** For more PropTypes: https://facebook.github.io/react/docs/reusable-components.html

  ```jsx
  // app/components/Toggle.js
  import React, { Component, PropTypes } from 'react'

  export default class Toggle extends Component {
    static propTypes = {
      enabled: PropTypes.bool
    };

    render() {
      return (
        <div></div>
      )
    }
  }
  ```
1. Below `propTypes`, set the default for `enabled` to `false`.
  ```jsx
  // app/components/Toggle.js
  export default class Toggle extends Component {
    // ...
    static defaultProps = {
      enabled: false
    };
    // ...
  }
  ```

1. Use the `enabled` property to set the text of `Toggle`. You should end up with:
  ```jsx
  // app/components/Toggle.js
  export default class Toggle extends Component {
    static propTypes = {
      enabled: PropTypes.bool
    };

    static defaultProps = {
      enabled: false
    };

    render() {
      return (
        <div>{this.props.enabled ? 'ON' : 'OFF'}</div>
      )
    }
  }
  ```

1. Replace `HelloWorld` for `Toggle` in `app/main.js`. You should see "OFF" in the webpage.
  ```jsx
  // app/main.js
  import { render } from 'react-dom'
  import Toggle from './components/Toggle'
  // ...
  render(<Toggle />, document.getElementById('app'))
  ```

1. Setting the `enabled` property to `true` on the `Toggle` component will render "ON".
  ```jsx
  render(<Toggle enabled={true} />, document.getElementById('app'))
  ```


##Exercise 3: Add property to customize `Toggle` values
Coming soon...

##Exercise 4: Use children as the `Toggle` label
Coming soon...

##Exercise 5: Handle `Toggle` clicks
Coming soon...

##Exercise 6: Hold `Toggle` state in the component
Coming soon...

##Exercise 7: Add CSS to `Toggle`
Coming soon...

##Exercise 8: Create a `Settings` component using `Toggle` components
Coming soon...

##Exercise 9: Delegate `Toggle` state to the `Settings` component
Coming soon...

##Exercise 10: Use JSON to populate `Settings` component
Coming soon...

##Exercise 11: Handle `Settings` form submission
Coming soon...


##Hungry for more?
Check out the React docs at:
https://facebook.github.io/react/docs/getting-started.html
