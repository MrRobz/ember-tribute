import Component from '@ember/component';
import layout from '../templates/components/tribute-no-match-demo';
import { set } from '@ember/object';

export default Component.extend({
  layout,

  // BEGIN-SNIPPET tribute-no-match-demo.js
  replacedDemoOptions: {
    values: [
      { key: 'Jordan Humphreys', value: 'Jordan Humphreys', email: 'getstarted@zurb.com' },
      { key: 'Sir Walter Riley', value: 'Sir Walter Riley', email: 'getstarted+riley@zurb.com' }
    ]
  },

  errorMessage: '',

  actions: {
    tributeNoMatch() {
      set(this, 'errorMessage', 'Looks like your mention did not many any values!')
    },

    clear() {
      set(this, 'errorMessage', '')
    }
  }
  // END-SNIPPET
});
