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


<br>
###[Done! For now... (MWAHAHAHA!) &rarr;](/)
