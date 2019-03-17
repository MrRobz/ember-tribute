[![ ](https://img.shields.io/npm/v/ember-tribute.svg)](https://www.npmjs.com/package/ember-tribute) 
[![ ](http://emberobserver.com/badges/ember-tribute.svg)](https://emberobserver.com/addons/ember-tribute)

ember-tribute
==============================================================================

A Ember Component wrapper for [zurb/tribute](https://github.com/zurb/tribute)


Compatibility
------------------------------------------------------------------------------

* Ember.js v2.18 or above
* Ember CLI v2.13 or above


Installation
------------------------------------------------------------------------------

```
ember install ember-tribute
```


Usage
------------------------------------------------------------------------------

You can simply wrap any textarea, input, or contenteditable element with **ui-tribute** component:

```
{{#ui-tribute options=options}}
  <input type="text">
{{/ui-tribute}}

// where options will be the tribute collection object
options: {
    values: [
    { key: 'Jordan Humphreys', value: 'Jordan Humphreys', email: 'getstarted@zurb.com' },
    { key: 'Sir Walter Riley', value: 'Sir Walter Riley', email: 'getstarted+riley@zurb.com' }
  ]
},
```

The **ui-tribute**  component will bind tributejs to the textarea that you pass it as children.
The **ui-tribute**  component takes all options that [zurb/tribute](https://github.com/zurb/tribute) expects. 


Arguments and Events
--------------------------------------------------------------------------------
You can pass a action **tributeReplaced** to  like {{#ui-tribute tributeReplaced=(action 'someaction')}} to the component which acts as the callback for tribute-replaced event emitted by Tribute.

Similarly you can pass a action **tributeNoMatch** to  like {{#ui-tribute tributeNoMatch=(action 'someaction')}} to the component which acts as the callback for tributeNoMatch event emitted by Tribute.

If you wish to get the Tribute instance itself, pass an action **registerTributeInstance** to the component like {{#ui-tribute registerTributeInstance=(action 'someaction')}} and the action will be called with the Tribute instance object as its parameter.

For nested components in yield use **target** to pass the query selector string for the elment for Tribute to be attached to. 

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
