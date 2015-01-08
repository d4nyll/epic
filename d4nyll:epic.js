// Using var to ensure variables are file-scope
var opts;

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

Template.epic.created = function () {
	var params = this.data;
	opts = {
		container: 'epiceditor',
		textarea: 'epicarea',
		basePath: '/packages/d4nyll_epic/lib/0.2.2'
	}
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
				opts = MergeRecursive(opts, params);
			}	
		}
	}
};

Template.epic.rendered = function () {
	var editor = new EpicEditor(opts).load();
};