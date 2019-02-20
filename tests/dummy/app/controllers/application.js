import Controller from '@ember/controller';

export default Controller.extend({
  options: {
    values: [
    { key: 'Jordan Humphreys', value: 'Jordan Humphreys', email: 'getstarted@zurb.com' },
    { key: 'Sir Walter Riley', value: 'Sir Walter Riley', email: 'getstarted+riley@zurb.com' }
  ]
},

actions: {
  getTributeInstance(tribute) {
    tribute.append(0, [
      { key: 'sampe user 1', value: 'sampe user 1', email: 'getstarted1@zurb.com' },
      { key: 'test 2', value: 'sampe user 1', email: 'getstartedriley2@zurb.com' }
    ])
  }
}
});
