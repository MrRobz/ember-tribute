import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | usage page', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /usage page', async function(assert) {
    await visit('/docs');

    assert.equal(currentURL(), '/docs');
  });
});
