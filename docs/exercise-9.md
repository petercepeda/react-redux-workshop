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


<br>
###[Next Step: Use JSON to populate `Settings` component &rarr;](docs/exercise-10.md)
