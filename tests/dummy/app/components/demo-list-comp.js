import Component from '@ember/component';
import layout from '../templates/components/demo-list-comp';

export default Component.extend({
  layout,

  // BEGIN-SNIPPET tribute-on-text-area.js
  textAreaOptions: {
    values: [
      { key: 'Jordan Humphreys', value: 'Jordan Humphreys', email: 'getstarted@zurb.com' },
      { key: 'Sir Walter Riley', value: 'Sir Walter Riley', email: 'getstarted+riley@zurb.com' }
    ]
  },
  // END-SNIPPET

  // BEGIN-SNIPPET tribute-on-nested-text-area.js
  nestedTextAreaOptions: {
    values: [
      { key: 'Jordan Humphreys', value: 'Jordan Humphreys', email: 'getstarted@zurb.com' },
      { key: 'Sir Walter Riley', value: 'Sir Walter Riley', email: 'getstarted+riley@zurb.com' }
    ]
  },
  // END-SNIPPET

  // BEGIN-SNIPPET tribute-on-content-editable.js
  contentEditableOptions: {
    values: [
      { key: 'Jordan Humphreys', value: 'Jordan Humphreys', email: 'getstarted@zurb.com' },
      { key: 'Sir Walter Riley', value: 'Sir Walter Riley', email: 'getstarted+riley@zurb.com' }
    ]
  }
  // END-SNIPPET
});
