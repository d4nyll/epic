////////////
/* COMMON */
////////////

Epic = {};

// Object containing information for all created (not necessarily loaded) editors
Epic.editorInstances = [];

Epic.editorIds = [];

// Returns all instances of the editor
Epic.getInstances = function() {
	return Epic.editorInstances;
}

Epic.getEditorIds = function() {
	return Epic.editorIds;
}

////////////////
/* TEMPLATING */
////////////////

// Default options, each instance of the editor shall get a COPY of this
var opts = {
	textarea: 'epicarea',
	basePath: '/packages/d4nyll_epic/lib/0.2.2'
};

var preloadText = '';

// From [Stack Overflow](http://stackoverflow.com/a/383245/3966682)
var MergeRecursive = function (obj1, obj2) {
	for (var p in obj2) {
		try {
			if (obj2[p].constructor == Object) {
				obj1[p] = MergeRecursive(obj1[p], obj2[p]);
			} else {
				if(typeof obj1[p] === 'undefined') {
					obj1[p] = obj2[p];
				}
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
		preloadText = params;
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

// Generates random unique number - unused, maybe removed in future
var getRandUniqueId = function() {
	var randNum;
	var i = 0;
	// Run until a unique number is returned. Limited to 50 tries.
	do {
		randNum = Math.floor(Math.random() * 999);
		if(Epic.editorIds.indexOf(randNum) == -1) {
			return randNum;
		}
		i++;
	}
	while (i < 50);
}

// Generates ordered unique number
var getUniqueId = function() {
	// Run until a unique number is returned. Limited to 50 tries.
	for(var i = 0; i < 999; i++) {
		if(Epic.editorIds.indexOf(i) == -1) {
			// Push the number as soon as confirmed
			Epic.editorIds.push(i);
			return i;
		}
	}
}

Template.epic.rendered = function () {
	var id = getUniqueId();
	if(typeof id === 'number') {
		var container = this.find('.epiceditor');
		container.id = "epiceditor" + id.toString();
		var textarea = this.find("textarea");
		textarea.id = "epicarea" + id.toString();
		textarea.value = preloadText;
		opts.container = "epiceditor" + id.toString();
		opts.textarea = "epicarea" + id.toString();
		var editor = new EpicEditor(opts).load();
		Epic.editorInstances.push(editor);
	}
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
	textarea.id = "epicarea" + id;
	if(typeof options.preloadText === 'string') {
		textarea.value = options.preloadText;
	}
	insertAfter(textarea, container);

	// Adds any user-defined options
	options = MergeRecursive(options, opts);
	options.container = container.id;
	options.textarea = textarea.id;

	// Creates and loads the editor, returning the editor object
	var editor = new EpicEditor(options);
	editor.load();
	return editor;
}

Epic.update = function(content, editor) {
	if(editor === undefined) {
		var editor = Epic.getInstances()[0];	
	}
	editor.importFile(editor.settings.file.name, content);
}