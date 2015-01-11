# epic

A JavaScript Markdown editor for [Meteor](https://github.com/meteor/meteor), using [EpicEditor](https://github.com/OscarGodson/EpicEditor).

## Installation

    meteor add d4nyll:epic

## Usage

As you may have noticed, the package version is at `0.2.0-alpha`, which means it is still under **active development**. The API is not guaranteed to stay the same. It is highly **NOT** recommended to use this for production.

To use `d4nyll:epic`, simply add `{{> epic}}` inside the your template. The editor will append a template to where the placeholder is. A textarea with a class and id of `epicarea` will also be added, and syncs with the editor. You can retrieve the value of the editor from this textarea.

### Options

You may use a Meteor template helper to define an object which can be passed to `epic` using `{{> epic obj}}`, where `obj` is the object. You can specify the [same set of options](https://github.com/OscarGodson/EpicEditor#epiceditoroptions) as EpicEditor. Any erroneous properties will be ignored.

## Contributors

### How to test

You should specify a port number for one of the tests if you run them concurrently, otherwise, they'll both try to use port 3000.

#### Mocha (with Velocity)

Navigate into the `/examples/testing/` directory and simply run `meteor`, the test application will load up with a (hopefully) green icon on the top right, indicating all tests have passed.

You can write new tests inside the `/tests/mocha/client/` directory.

#### TinyTest

Until Velocity supports TinyTest, we will have to run TinyTest 'outside' of Velocity. Go to the root directory of the package and type:

    meteor test-packages ./

You can add more tests by editing `d4nyll:epic-tests.js`, or write into your own file and add a `api.addFiles('your-test.js', 'client');` line into `package.js` inside the `Package.onTest(function(api){})` block.



[![Build Status](https://travis-ci.org/d4nyll/epic.svg?branch=master)](https://travis-ci.org/d4nyll/epic)
