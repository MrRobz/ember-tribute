import Component from '@ember/component';
import layout from '../templates/components/ui-tribute';

import Tribute from "tributejs";
import { run } from '@ember/runloop';
import { get, set } from '@ember/object';
import { assert } from '@ember/debug';
import { isPresent } from '@ember/utils';

export default Component.extend({
  layout,

  init() {
    this._super(...arguments);
    assert('Pass Tribure collections object as options attribute to the component', isPresent(get(this, 'options')));
  },

  didInsertElement() {
    this._super(...arguments);
    run(() => {
      let tribute = new Tribute(get(this, 'options'));

      let targetDom = this.getTargetDom();
      tribute.attach(targetDom);
      set(this, 'tribute', tribute);
      this.registerTributeInstance(tribute);

      targetDom.addEventListener('tribute-replaced', (e) => {
        if (this.tributeReplaced) {
          this.tributeReplaced(e);
        }
      });

      targetDom.addEventListener('tribute-no-match', (e) => {
        if (this.tributeNoMatch) {
          this.tributeNoMatch(e);
        }
      });
    });
  },

  willDestroyElement() {
    this._super(...arguments);
    let targetDom = this.getTargetDom();
    run(() => {
      let tribute = get(this, 'tribute');
      tribute.hideMenu();
      tribute.detach(targetDom);
    });
  },

  getTargetDom() {
    if (this.target && typeof (this.target) === 'string') {
      return this.element.querySelector(`${this.target}`);
    } else {
      return this.element.querySelector(':first-child');
    }
  },

  registerTributeInstance(tribute) {
    let action = get(this, 'getTributeInstance');
    if (action) {
      action(tribute);
    }
  }
});
