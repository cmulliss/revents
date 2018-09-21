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

*