# Notes

## Hot module replacement

* easy way it to make some modifications inside index.js

```javascript
let render = () => {
  ReactDOM.render(<App />, rootEl)
}

if (module.hot) {
  module.hot.accept('./App', () => {
    setTimeout(render)
  })
}
```

## npm shrinkwrap

* avoid breaking stuff due to dependency issues
* run npm install to make sure all dependencies get installed

## Flow instead of proptypes

* install Flow and create a .flowconfig
* can use typescript instead
* Flow recommended by Facebook

## Semantic UI for styling

* alternative to bootstrap
* good React version of the framework
* see docs, very semantic
* React version good, don't need jquery
* each element accept properties, like react
* __semantic-ui-css__ and __semantic-ui-react__
* 