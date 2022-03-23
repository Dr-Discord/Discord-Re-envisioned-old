/**
 * @name demoPlugin
 * @version 1.1.1
 * @author dogman
 * @description demo plugin for drdiscord
 */

export default class demoPlugin {
  onStart() {
    console.log('Started');
  };
  onStop() {
    console.log('Stopped');
  };
}