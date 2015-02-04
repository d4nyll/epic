# epic

[![Build Status](https://travis-ci.org/d4nyll/epic.svg?branch=master)](https://travis-ci.org/d4nyll/epic)

A JavaScript Markdown editor for [Meteor](https://github.com/meteor/meteor), using [EpicEditor](https://github.com/OscarGodson/EpicEditor).

## Installation

    meteor add d4nyll:epic

## Demo

[Basic](http://epiceditor.meteor.com)
[Own theme](http://epiceditor.meteor.com/epicCreate)
[Multiple editors](http://epiceditor.meteor.com/epicMultiple)

## Usage

### Inside a template

To use `d4nyll:epic` inside a template, simply add `{{> epic}}` inside the your template. The editor will append a template to where the placeholder is. A textarea with a class of `epicarea` will also be added, and syncs with the editor. You can retrieve the value of the editor from this textarea.

Multiple editors can be added on the same page, and will have the `id` of `epiceditor[a-number]` (e.g. `epiceditor0`, `epiceditor1`). Each editor will be synced with a textarea with the corresponding `id` (e.g. `epiceditor0` syncs with `epicarea0`)

### Using the API

You can render an editor inside an element using `Epic.create(id, options)`. Pass in the `id` of the containing `div` element, and also an object containing any options.

Here the textarea will have an id of `epicarea[id-of-container]`. For example, an editor inside `<div id="epicdiv">` will sync with a textarea with the `id` of `epicareaepicdiv`.

### Options

You may use a Meteor template helper to define an object which can be passed to `epic` using `{{> epic obj}}`, where `obj` is the object. You can specify the [same set of options](https://github.com/OscarGodson/EpicEditor#epiceditoroptions) as EpicEditor. Any erroneous properties will be ignored.

#### Using your own theme

To use your own theme, you must place **all** your theme's CSS file inside the `public` directory. Then create an object containing the options, which should include **all** the themes - i.e. If you are using a custom `editor` theme, you would also need to place the `base` and `preview` theme in the relevant directory also.

Here's an example taken from `/example/testing/`:

    Template.epicCreate.rendered = function () {
    	var opts = {	
    		basePath: '/epic/themes',
    		theme: {
    			base: '/base/epiceditor.css',
    			preview: '/preview/github.css',
    			editor: '/editor/epic-custom.css'
    		}
    	};
    	Epic.create('epicCreateContainer', opts);
    };

Here, the `editor` CSS files are placed inside the `/public/epic/themes/editor/epic-custom.css` of the application.

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
