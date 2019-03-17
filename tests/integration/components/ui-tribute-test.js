import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { set } from '@ember/object';

module('Integration | Component | ui-tribute', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    let options = {
      values: [
        { key: 'Sir Walter Riley', value: 'Sir Walter Riley', email: 'getstarted+riley@zurb.com' },
        { key: 'Jordan Humphreys', value: 'Jordan Humphreys', email: 'getstarted@zurb.com' },
      ]
    };
    set(this, 'options', options);

    // Template block usage:
    await render(hbs`
      {{#ui-tribute options=options}}
        <input type="text">
        sample input element
      {{/ui-tribute}}
    `);

    assert.equal(this.element.textContent.trim(), 'sample input element');
    assert.ok(this.element.querySelector('input'), 'input element rendered');
  });
});
