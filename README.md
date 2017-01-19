# DebugContent [![Travis][build-badge]][build] [![npm package][npm-badge]][npm]

<img src="/logo/vertical@2x.png" height="50"/>

DebugContent is simple [React] component to display an object's content as an HTML table.

```
{
  name: "Requested from React Front End",
  host: "localhost:3001",
  date: {d:18, m:1, y:2017},
  now: "1/18/2017, 2:23:02 PM"
}
```
turns into
<img src="/doc/example.png" height="100"/>

[![Codecov][codecov-badge]][codecov]
[![Discord][discord-badge]][discord]


### Docs & Help

- [Tutorial – do this first!](https://github.com/reactjs/react-router-tutorial)
- [Guides and API docs](/docs)
- [Troubleshooting guide](https://github.com/ReactTraining/react-router/blob/master/docs/Troubleshooting.md)
- [Changelog](/CHANGES.md)
- [Stack Overflow](http://stackoverflow.com/questions/tagged/react-router)
- [CodePen boilerplate](http://codepen.io/anon/pen/xwQZdy?editors=001) for bug reports

**Older Versions:**

none yet...

For questions and support, please visit [Stack Overflow](http://stackoverflow.com/questions/tagged/DebugContent).

### Browser Support

We support all browsers and environments where React runs.

### Installation

Using [npm](https://www.npmjs.com/):
```
    $ npm install --save DebugContent
```
   or [yarn](https://yarnpkg.com/en/docs/migrating-from-npm):
```
    $ yarn add DebugContent
```
Then with a module bundler like [webpack](https://webpack.github.io/) that supports either CommonJS or ES2015 modules, use as you would anything else:

```js
// using an ES6 transpiler, like babel
import DebugContent from 'DebugContent'

render() {

   return (
     <div className="App">
       <p className="App-intro">
         To get started, edit <code>src/App.js</code> and save to reload.
       </p>
       <div style={{display: 'inline-table'}}>
           <hr />
           <DebugContent value={this.state} />
       </div>
     </div>
   );
 }
```



See more in the [Introduction](/docs/Introduction.md), [Guides](/docs/guides/README.md), and [Examples](/examples).

### Versioning and Stability

We want DebugContent to be a stable dependency that’s easy to keep current. We take the same approach to versioning as React.js itself: [React Versioning Scheme](https://facebook.github.io/react/blog/2016/02/19/new-versioning-scheme.html).

### Thanks

To Jim and Michael, fellow coders!

[React]: https://facebook.github.io/react
[build-badge]: https://img.shields.io/travis/ReactTraining/react-router/master.svg?style=flat-square
[build]: https://travis-ci.org/ReactTraining/react-router

[npm-badge]: https://img.shields.io/npm/v/react-router.svg?style=flat-square
[npm]: https://www.npmjs.org/package/react-router

[codecov-badge]: https://img.shields.io/codecov/c/github/ReactTraining/react-router/master.svg?style=flat-square
[codecov]: https://codecov.io/gh/ReactTraining/react-router

[discord-badge]: https://img.shields.io/badge/Discord-join%20chat%20%E2%86%92-738bd7.svg?style=flat-square
[discord]: https://discord.gg/0ZcbPKXt5bYaNQ46
