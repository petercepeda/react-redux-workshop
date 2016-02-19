##Exercise 9: Update `Toggle` state in the `Settings` component
1. Define the `Settings` component initial state above the `render` method. We're going to keep track of which settings are enabled.
  ```jsx
  // app/components/Settings.js
  state = {
    enabled: []
  }

  render() {
    // ...
  }
```

1. Add two functions in `_renderToggle` to handle when a `Toggle` is enabled and disabled.
We'll update the `Settings` state in these functions. We'll also need to change `_renderToggle` into
property initializer to preserve the context.
  ```jsx
  // app/components/Settings.js
  _renderToggle = (label, index) => {
    const handleEnable = () => {
      // Copy the enabled list, add this index number, and set the new enabled state
      this.setState({ enabled: this.state.enabled.concat([index]) })
    }

    const handleDisable = () => {
      const enabled = this.state.enabled.slice() // Copy the enabled list
      enabled.splice(index, 1) // Remove the item at this index
      this.setState({ enabled }) // Set the new enabled state
    }

    return (
      // ...
  };
  ```

1. Add two properties to the `Toggle` element in `Settings`, `onEnabled` and `onDisabled`,
and bind them to `handleEnable` and `handleDisable`.
  ```jsx
  // app/components/Settings.js
  _renderToggle = (label, index) => {
    // ...
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
  }
  ```

1. Add some debugging elements to `Settings` after interating through toggles in `render`.
  ```jsx
  // app/components/Settings.js
  render() {
    // ...
    return (
      <div className={css.settings}>
        <h1 className={css.heading}>Settings</h1>
        {settings.map(this._renderToggle)}

        <div className={css.debug}>
          Enabled: {this.state.enabled.length ? this.state.enabled.join(', ') : 'None'}
        </div>

      </div>
    )
  }
  ```

1. In the `Toggle` component, add `onEnabled` and `onDisabled` to `propTypes` and `defaultProps`.
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

1. In `_handleClick`, add a callback to `setState` that invokes the correct event handler in props.
  ```jsx
  // app/components/Toggle.js
  _handleClick = (event) => {
    this.setState({ enabled: !this.state.enabled }, () =>
      this.state.enabled ? this.props.onEnable() : this.props.onDisable()
    )
  };
  ```

1. Check to see that `Settings` is correctly updated with which toggles are enabled.
The settings view should list which items are enabled.


<br>
###[Next Step: Use JSON to populate `Settings` component &rarr;](./exercise-10.md)
