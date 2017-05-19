#Yeoman Generator

* Create file structure

    ├───package.json

    ├───app/

    │   └───index.js

    └───router/

        └───index.js

* On the command line, from the root of your generator project (in the generator-dtk/ folder), type:
        npm link
* That will install your project dependencies and symlink a global module to your local file. After npm is done, you'll be able to call yo name and you should see the this.log, defined earlier, rendered in the terminal. Congratulations, you just built your first generator!

* yo dtk will result
    method 1 just ran
    method 2 just ran
