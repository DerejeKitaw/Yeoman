var Generator = require('yeoman-generator');
module.exports = class extends Generator {
    // The name `constructor` is important here
  constructor(args, opts) {
    // Calling the super constructor is important so our generator is correctly set up
    super(args, opts);
    // Next, add your custom code
    this.option('babel'); // This method adds support for a `--babel` flag
  }
  method1() {
    this.log('method 1 just ran');
  }
// _ will make method2 private and will not be called when yo dtk run
  _method2() {
    this.log('method 2 just ran');
  }
};
