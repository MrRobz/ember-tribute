# Usage

You can simply wrap any textarea, input, or contenteditable element with ui-tribute component:

### in Template
{{#docs-snippet name='sample-template-usage.hbs'}}
  {{#ui-tribute options=options}}
    <input type="text">
  {{/ui-tribute}}
{{/docs-snippet}}

### options will be the tribute collection object. eg:
{{#docs-snippet name='sample-js-usage.hbs'}}
  options: {
      values: [
      { key: 'Jordan Humphreys', value: 'Jordan Humphreys', email: 'getstarted@zurb.com' },
      { key: 'Sir Walter Riley', value: 'Sir Walter Riley', email: 'getstarted+riley@zurb.com' }
    ]
  },
{{/docs-snippet}}

*** refer [Tribute](https://github.com/zurb/tribute#a-collection) for all the available options ***

Ember tribute injects tribute necessary styles to your project.

However if you are using SASS you have to manually include them in your styles with: `@import 'tribute';`

## Other argument for the component include
---

## target
  For nested components in yield use **target** to pass the query selector string for the elment for Tribute to be attached to. eg: target='#text-field'

## tributeReplaced
  You can pass a action **tributeReplaced** to  like `{{#ui-tribute tributeReplaced=(action 'someaction')}}` to the component which acts as the collback for tribute-replaced event emitted by Tribute.

## tributeNoMatch
  Similarly you can pass a action **tributeNoMatch** to  like `{{#ui-tribute tributeNoMatch=(action 'someaction')}}` to the component which acts as the collback for tributeNoMatch event emitted by Tribute.

## registerTributeInstance
  If you wish to get the Tribute instance itself, pass an action **registerTributeInstance** to the component like `{{#ui-tribute registerTributeInstance=(action 'someaction')}}` and the action will be called with the Tribute instance object as its parameter.