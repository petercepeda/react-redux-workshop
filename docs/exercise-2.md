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


<br>
###[Next Step: Add properties to customize `Toggle` values &rarr;](./exercise-3.md)
