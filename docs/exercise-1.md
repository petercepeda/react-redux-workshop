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


<br>
###[Next Step: Create a simple `Toggle` component &rarr;](./exercise-2.md)
