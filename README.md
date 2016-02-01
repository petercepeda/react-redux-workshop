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
1. Add two properties to `propTypes`: `enabledText` and `disabledText`.
  ```jsx
  // app/components/Toggle.js
  static propTypes = {
    enabled: PropTypes.bool,
    enabledText: PropTypes.string,
    disabledText: PropTypes.string
  };
  ```

1. Set the `defaultProps` to 'ON' and 'OFF'.
  ```jsx
  // app/components/Toggle.js
  static defaultProps = {
    enabled: false,
    enabledText: 'ON',
    disabledText: 'OFF'
  };
  ```

1. Use the component's `props` to set the toggle values.
  ```jsx
  // app/components/Toggle.js
  render() {
    return (
      <div>{this.props.enabled ? this.props.enabledText : this.props.disabledText}</div>
    )
  }
  ```

1. Customize the `Toggle` by filling in your values for `enabledText` and `disabledText`.
  ```jsx
  // app/main.js
  render(<Toggle enabled={true} enabledText='Yep' disabledText='Nope' />, document.getElementById('app'))
  ```

##Exercise 4: Use children as the `Toggle` label
1. Add some text inside of the `Toggle`. Instead of a self-closing tag, you'll enclose the text with a closing `Toggle` tag.
  ```jsx
  // app/main.js
  render(
    <Toggle enabled={true} enabledText='Yep' disabledText='Nope'>
      Use React in my web application?
    </Toggle>
    , document.getElementById('app'))
  ```

1. In a component, `props.children` is a collection of components rendered inside the components. Use `props.children` as
a label for the `Toggle`.
  ```jsx
  // app/components/Toggle.js
  render() {
    return (
      <div>
        {this.props.enabled ? this.props.enabledText : this.props.disabledText}
        : {this.props.children}
      </div>
    )
  }
  ```
  You should see a `:` and your label appended after the toggle.

##Exercise 5: Handle `Toggle` clicks
1. Add a method to `Toggle` for handling clicks and logging the event in the console.
  ```jsx
  // app/components/Toggle.js
  _handleClick(event) {
    console.debug('Toggle clicked!', event)
  }
  ```

1. Add the event handler to the rendered `Toggle`.
  ```jsx
  // app/components/Toggle.js
  render() {
    return (
      <div onClick={this._handleClick}>
        {this.props.enabled ? this.props.enabledText : this.props.disabledText}:
        {this.props.children}
      </div>
    )
  }
  ```

1. Open the web inspector console, and click the `Toggle` to print the log message.
  ```
  Toggle clicked! SyntheticMouseEvent {dispatchConfig: Object, ...}
  ```

##Exercise 6: Hold `Toggle` state in the component
1. Use a property initializer (experimental ES7 syntax) to define the initial state
of the component right above the `render` method.
  ```jsx
  // app/components/Toggle.js
  state = {
    enabled: false
  };

  render() {
    // ...
  }
  ```

1. Use component state to determine the value the `Toggle` displays in the render method.
Change `this.props.enabled` to `this.state.enabled`.
  ```jsx
  // app/components/Toggle.js
  {this.state.enabled ? this.props.enabledText : this.props.disabledText}:
  ```

1. Update the click handler so it toggles the `enabled` state of the `Toggle`.
Whenever the state of a component changes, React re-renders that component.
We'll also change the handler to a property initializer to preserve the context.
  ```jsx
  // app/components/Toggle.js
  _handleClick = (event) => {
    this.setState({ enabled: !this.state.enabled })
  };
  ```

1. Try clicking on your `Toggle` in the page. You should see it toggling between values.

1. You can remove `enabled` from the `propTypes` and `defaultProps` since we're no longer using it.
Also, remove the property from the `Toggle` element in `app/main.js`.

##Exercise 7: Add CSS to `Toggle`
1. Import CSS in `app/styles/toggle.sass` into `Toggle`.
  ```jsx
  // app/components/Toggle.js
  import React, { Component, PropTypes } from 'react'
  import css from '../styles/toggle'
  ```

1. Assign `className` to rendered elements using classes declared in CSS.
  ```jsx
  render() {
    return (
      <div className={css.control} onClick={this._handleClick}>
        <div className={css.toggle}>
          {this.state.enabled ? this.props.enabledText : this.props.disabledText}
        </div>
        <div className={css.label}>{this.props.children}</div>
      </div>
    )
  }
  ```

1. Use the `classnames` module to conditionally join classNames together. We'll use `classnames` to add
`css.enabled` class next to `css.toggle` whenever `state.enabled` is `true`.
  ```jsx
  <div className={classnames.bind(css)('toggle', { enabled })}>
    {this.state.enabled ? this.props.enabledText : this.props.disabledText}
  </div>
  ```
  > **Note:** We're using CSS Modules, so the actual CSS class names are scoped locally by default. In this case, they're
  scoped to the `Toggle` component. For example, instead of `.toggle`, it looks more like `.app-styles-toggle---toggle---3l82H`.
  See https://github.com/css-modules/css-modules.

1. Your `Toggle` should look a bit prettier on the page.

##Exercise 8: Create a `Settings` component using `Toggle` components
1. Open `app/components/Settings.js`.

1. Add three toggles below `Settings` heading.
  ```jsx
  render() {
      return (
        <div className={css.settings}>
          <h1 className={css.heading}>Settings</h1>
          <Toggle enabledText='Yep' disabledText='Nope'>
            Use React in my web application?
          </Toggle>
          <Toggle enabledText='Yep' disabledText='Nope'>
            Use Redux for state management?
          </Toggle>
          <Toggle enabledText='Yep' disabledText='Nope'>
            Use CSS modules to locally scope stying?
          </Toggle>
        </div>
      )
    }
  ```

1. Let's extract the duplicate code into the method `_renderToggle`.
  ```jsx
  render() {
    const settings = [
      'Use React in my web application?',
      'Use Redux for state management?',
      'Use CSS modules to locally scope stying?'
    ]
    return (
      <div className={css.settings}>
        <h1 className={css.heading}>Settings</h1>
        {settings.map(this._renderToggle)}
      </div>
    )
  }

  _renderToggle(label, index) {
    return (
      <Toggle key={index} enabledText='Yep' disabledText='Nope'>
        {label}
      </Toggle>
    )
  }
  ```
  > **Note:** When iteratively rendering React elements, you need to add a `key` property so React
  can correctly identify the component child.

1. You'll now have a settings page with three toggles on your page.

##Exercise 9: Update `Toggle` state in the `Settings` component
1. Define the `Settings` component initial state. We're going to keep track of which settings are enabled.
  ```jsx
  // app/components/Settings.js
  state = {
    enabled: []
  }
```

1. Add two functions in `_renderToggle` to handle when a `Toggle` is enabled and disabled.
We'll update the `Settings` state in these functions. We'll also need to change `_renderToggle` into
property initializer to preserve the context.
  ```jsx
  _renderToggle = (label, index) => {
    const handleEnable = () => {
      this.setState({ enabled: this.state.enabled.concat([index]) })
    }

    const handleDisable = () => {
      this.setState({ enabled: _.reject(this.state.enabled, value => value === index) })
    }

    // ...
  };
  ```

1. Add two properties to the `Toggle` element in `Settings`, `onEnabled` and `onDisabled`,
and bind them to `_handleEnable` and `_handleDisable`.
  ```jsx
  return (
    <Toggle
      key={index}
      enabledText='Yep'
      disabledText='Nope'
      onEnable={handleEnable}
      onDisable={handleDisable}
    >
      {label}
    </Toggle>
  )
  ```

1. Add some debugging elements to the bottom of `Settings`.
  ```jsx
  return (
    <div className={css.settings}>
      <h1 className={css.heading}>Settings</h1>
      {settings.map(this._renderToggle)}
      <div className={css.debug}>
        Enabled: {this.state.enabled.length ? this.state.enabled.join(', ') : 'None'}
      </div>
    </div>
  )
  ```

1. In `Toggle`, add `onEnabled` and `onDisabled` to `propTypes` and `defaultProps`.
  ```jsx
  // app/components/Toggle.js
  static propTypes = {
    enabledText: PropTypes.string,
    disabledText: PropTypes.string,
    onEnable: PropTypes.func,
    onDisable: PropTypes.func
  };

  static defaultProps = {
    enabledText: 'ON',
    disabledText: 'OFF',
    onEnable() {},
    onDisable() {}
  };
  ```

1. In `_handleClick`, add a callback that invokes the correct event handler in props.
  ```jsx
  _handleClick = (event) => {
    this.setState({ enabled: !this.state.enabled }, () =>
      this.state.enabled ? this.props.onEnable() : this.props.onDisable()
    )
  };
  ```

1. Check to see that `Settings` is correctly updated with which toggles are enabled.
The settings view should list which items are enabled.

##Exercise 10: Use JSON to populate `Settings` component
1. Import settings JSON into `Settings`.
  ```jsx
  // app/components/Settings.js
  import { settings } from '../assets/json/settings'
  ```

1. Update `_renderToggle` to correctly iterate through the settings JSON.
With the settings as a collection of objects, we can destructure each in the method argument.
  ```jsx
  _renderToggle = ({ id, title }) => {
    const handleEnable = () => {
      this.setState({ enabled: this.state.enabled.concat([id]) })
    }

    const handleDisable = () => {
      this.setState({ enabled: _.reject(this.state.enabled, settingId => settingId === id) })
    }

    return (
      <Toggle
        key={id}
        enabledText='Yep'
        disabledText='Nope'
        onEnable={handleEnable}
        onDisable={handleDisable}
      >
        {title}
      </Toggle>
    )
  };
  ```

1. Everything should look and work the same way. This gives you an idea of how you would use
API responses to render components.

##Hungry for more?
Check out the React docs at:
https://facebook.github.io/react/docs/getting-started.html
