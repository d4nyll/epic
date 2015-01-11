////////////
/* COMMON */
////////////

Epic = {};

// Object containing information for all created (not necessarily loaded) editors
editorInstances = {};

// Returns all instances of the editor
Epic.getInstances = function() {
	return editorInstances;
}

////////////////
/* TEMPLATING */
////////////////

// Default options, each instance of the editor shall get a COPY of this
var opts = {
	textarea: 'epicarea',
	basePath: '/packages/d4nyll_epic/lib/0.2.2'
};

// From [Stack Overflow](http://stackoverflow.com/a/383245/3966682)
var MergeRecursive = function (obj1, obj2) {
	for (var p in obj2) {
		try {
			if (obj2[p].constructor == Object) {
				obj1[p] = MergeRecursive(obj1[p], obj2[p]);
			} else {
				obj1[p] = obj2[p];
			}
		} catch(e) {
			obj1[p] = obj2[p];
		}
	}
	return obj1;
}

// From [Stack Overflow](http://stackoverflow.com/a/4793630/3966682)
function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

Template.epic.created = function () {
	var params = this.data;
	
	// {{> epic "abc"}} - string
	if(typeof params == 'string') {

	}

	// {{> epic true}} - boolean
	if(typeof params == 'boolean') {

	}

	// {{> epic 123}} - number
	if(typeof params == 'number') {
		
	}

	if(typeof params == 'object') {
		// {{> epic}}, {{> epic abc}} - where abc is an undefined variable
		if(params == null) {

		}

		if(params != null) {
			// For parameters given as an array, passed in using template helpers
			// {{> epic abc}} - where abc is an array passed in using a helper
			if(typeof params[0] === 'string' || typeof params[0] === 'number') {

			}
			// For parameters given as key=value pairs, it will be turned into an object
			// {{epic abc="def" hij="klm"}} - key/value pairs, or
			// {{> epic obj}} - where obj is an object defined in a helper
			else {
				opts.container = 'epiceditor';
				opts = MergeRecursive(params, opts);
			}	
		}
	}
};

Template.epic.rendered = function () {
	var editor = new EpicEditor(opts).load();
};


/////////
/* API */
/////////
Epic.checkExported = function() {
	return 'Epic object exported';
}

// Takes the ID of the container, with an options object
Epic.create = function(id, options) {

	// Creates the textarea for the editor to sync to
	var container = document.getElementById(id);
	var textarea = document.createElement("textarea");
	textarea.id = "epicarea";
	insertAfter(textarea, container);

	// Adds any user-defined options
	options = MergeRecursive(options, opts);
	options.container = id;

	// Creates and loads the editor, returning the editor object
	var editor = new EpicEditor(options);
	editor.load();
	return editor;
}