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


<br>
###[Next Step: Add CSS to `Toggle` &rarr;](docs/exercise-7.md)
