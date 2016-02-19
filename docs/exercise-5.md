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

1. Open the **web inspector console**, and click the `Toggle` to print the log message.
  ```
  > Toggle clicked! SyntheticMouseEvent {dispatchConfig: Object, ...}
  ```


<br>
###[Next Step: Hold `Toggle` state in the component &rarr;](./exercise-6.md)
