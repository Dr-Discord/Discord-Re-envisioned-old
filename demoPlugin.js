/**
 * @name demoPlugin
 * @version 1.1.1
 * @author dogman
 * @description demo plugin for Discord Re-envisioned
 */

export default () => {
  return class demoPlugin {
    onStart() {
      console.log('Started');
    };
    onStop() {
      console.log('Stopped');
    };
  }
}