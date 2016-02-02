[&larr; Exercise 2: Create a simple `Toggle` component](docs/exercise-2.md)

##Exercise 3: Add properties to customize `Toggle` values
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


<br>
###[Next Step: Use children as the `Toggle` label &rarr;](docs/exercise-4.md)
