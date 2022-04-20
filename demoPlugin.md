## Base plugin and metadata
```js 
/**
 * @name demoPlugin
 * @version 1.1.1
 * @author dogman
 * @description demo plugin for Discord Re-envisioned
 */

exports = class demoPlugin {
  onStart() {
    console.log('Started');
  };
  onStop() {
    console.log('Stopped');
  };
}
```
## This is how it looks fully
we add `exports` so you can return the plugin 
```js
let exports = class {}
{(() => {
/**
 * @name demoPlugin
 * @version 1.1.1
 * @author dogman
 * @description demo plugin for Discord Re-envisioned
 */

exports = class demoPlugin {
  onStart() {
    console.log('Started');
  };
  onStop() {
    console.log('Stopped');
  };
}
})()}
new exports()
```

#### All may change