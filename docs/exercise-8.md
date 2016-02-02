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


<br>
###[Next Step: Update `Toggle` state in the `Settings` component &rarr;](./exercise-9.md)
