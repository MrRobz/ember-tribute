import Component from '@ember/component';
import layout from '../templates/components/tribute-no-match-demo';

export default Component.extend({
  layout,

  // BEGIN-SNIPPET tribute-register-instance-demo.js
  replacedDemoOptions: {
    values: [
      { key: 'Jordan Humphreys', value: 'Jordan Humphreys', email: 'getstarted@zurb.com' },
      { key: 'Sir Walter Riley', value: 'Sir Walter Riley', email: 'getstarted+riley@zurb.com' }
    ]
  },

  errorMessage: '',

  actions: {
    registerTributeInstance(tribute) {
      var values = [
        { key: 'Newly added item1', value: 'test2', email: 'cheesetacos@zurb.com' },
        { key: 'Newly added item2', value: 'test1', email: 'cheesetacos@zurb.com' }
      ];
      tribute.append(0, values);
    }
  }
  // END-SNIPPET
});
