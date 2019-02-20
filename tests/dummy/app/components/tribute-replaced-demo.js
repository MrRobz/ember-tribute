import Component from '@ember/component';
import layout from '../templates/components/tribute-replaced-demo';
import { set } from '@ember/object';

export default Component.extend({
  layout,
  
  // BEGIN-SNIPPET tribute-replaced-demo.js
  replacedDemoOptions: {
    values: [
      { key: 'Jordan Humphreys', value: 'Jordan Humphreys', email: 'getstarted@zurb.com' },
      { key: 'Sir Walter Riley', value: 'Sir Walter Riley', email: 'getstarted+riley@zurb.com' }
    ]
  },
  replacedItemEmail: '',

  actions: {
    tributeReplaced(event) {
      set(this, 'replacedItemEmail', event.detail.item.original.email);
    }
  }
  // END-SNIPPET
});
