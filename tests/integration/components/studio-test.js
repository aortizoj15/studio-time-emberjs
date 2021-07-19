import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | studio', function (hooks) {
  setupRenderingTest(hooks);

  // test('it renders information about a studio', async function (assert) {
  //   await render(hbs`<Studio />`);
  //   assert.dom('article').hasClass('rental');
  //   assert.dom('article h3').hasText('Paramount Recording Studio');
  //   assert.dom('article .detail.owner').includesText('Brian Brolin');
  //   assert.dom('article .detail.type').includesText('Building');
  //   assert.dom('article .detail.location').includesText('Hollywood');
  //   assert.dom('article .detail.bedrooms').includesText('8');
  //   assert.dom('article .image').exists();
  //   assert.dom('article .map').exists();
  // });
});
