import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import {
  waitFor,
  typeIn,
  click,
  findAll,
  render
} from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { set } from '@ember/object';

module('Integration | Component | ui-tribute', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders basic example', async function(assert) {

    let options = {
      menuContainer: document.querySelector('#ember-testing'),
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
    
    await typeIn('input', '@');
    await waitFor(document, '.tribute-container');

    let tributeSuggestionsList = await findAll('.tribute-container > ul > li');
    assert.equal(tributeSuggestionsList[0].textContent.trim(), 'Sir Walter Riley');
    assert.equal(tributeSuggestionsList[1].textContent.trim(), 'Jordan Humphreys');
  });

  test('it should test tribute replaced event', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    assert.expect(5);

    set(this, 'tributeReplaced', () => {
      assert.ok('Tribute replace event was called');
    })

    let options = {
      menuContainer: document.querySelector('#ember-testing'),
      values: [
        { key: 'Sir Walter Riley', value: 'Sir Walter Riley', email: 'getstarted+riley@zurb.com' },
        { key: 'Jordan Humphreys', value: 'Jordan Humphreys', email: 'getstarted@zurb.com' },
      ]
    };
    set(this, 'options', options);

    // Template block usage:
    await render(hbs`
      {{#ui-tribute options=options tributeReplaced=(action tributeReplaced)}}
        <input type="text">
        sample input element
      {{/ui-tribute}}
    `);

    assert.equal(this.element.textContent.trim(), 'sample input element');
    assert.ok(this.element.querySelector('input'), 'input element rendered');

    await typeIn('input', '@');
    await waitFor(document, '.tribute-container');

    let tributeSuggestionsList = await findAll('.tribute-container > ul > li');
    assert.equal(tributeSuggestionsList[0].textContent.trim(), 'Sir Walter Riley');
    assert.equal(tributeSuggestionsList[1].textContent.trim(), 'Jordan Humphreys');

    await click(tributeSuggestionsList[1]);

  });

  test('it should test tribute no match event', async function (assert) {
    assert.expect(9);

    set(this, 'tributeNoMatch', () => {
      assert.ok('Tribute tribute-no-match event was called');
    })

    let options = {
      menuContainer: document.querySelector('#ember-testing'),
      values: [
        { key: 'Sir Walter Riley', value: 'Sir Walter Riley', email: 'getstarted+riley@zurb.com' },
        { key: 'Jordan Humphreys', value: 'Jordan Humphreys', email: 'getstarted@zurb.com' },
      ]
    };
    set(this, 'options', options);

    // Template block usage:
    await render(hbs`
        {{#ui-tribute options=options tributeNoMatch=(action tributeNoMatch)}}
          <input type="text">
          sample input element
        {{/ui-tribute}}
      `);

    assert.equal(this.element.textContent.trim(), 'sample input element');
    assert.ok(this.element.querySelector('input'), 'input element rendered');

    await typeIn('input', '@randomtext');
  });
});
