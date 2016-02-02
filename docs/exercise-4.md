[&larr; Exercise 3: Add properties to customize `Toggle` values](docs/exercise-3.md)

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


<br>
###[Next Step: Handle `Toggle` clicks &rarr;](docs/exercise-5.md)
