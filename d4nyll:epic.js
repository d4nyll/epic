Template.registerHelper('epic', function(params) {

	// Some settings which needs to be overridden
	var opts = {
		container: 'epiceditor',
		basePath: '/packages/d4nyll_epic/lib/0.2.2'
	}

	// Creates container element
	var container = document.createElement('div');
	container.id += 'epiceditor';

	// Defaults
	// Append container to body
	var appendTo = document.body;

	// {{epic}} - no parameter
	if(params == undefined && typeof params == 'undefined') {

	}

	// {{epic "abc"}} - string
	if(typeof params == 'string') {

	}

	if(typeof params == 'object') {

		// For paramters separated by spaces, only the first parameter gets recognized
		// {{epic abc}} - where abc is an undefined variable
		if(params == null) {

		}

		if(params != null) {

			// For parameters given as key=value pairs, all parameters are returned. Values can be objects, arrays
			// {{epic abc="def" hij="klm"}} - key/value pairs
			if(params.hash != undefined) {
				console.log(params.hash);
			}

			// For parameters given as objects, arrays, passed in using template helpers
			// {{epic abc}} - where abc is an object/array passed in using a helper
			else {

			}
		}
	}

	// Add the container
	appendTo.appendChild(container);

	// Load the editor
	var editor = new EpicEditor(opts).load();
});