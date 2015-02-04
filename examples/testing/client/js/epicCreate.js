Template.epicCreate.rendered = function () {
	var opts = {

		/* In this test directory, 
		** the `bathPath` paramter will have no effect,
		** as it will always be overriden (as designed),
		** and so this custom theme will not show in this test application.
		** However, if you download and install the package normally, it will work.
		*/
	
		basePath: '',
		theme: {
			editor: '/epic/themes/editor/epic-custom.css'
		}
	};
	Epic.create('epicCreateContainer', opts);
};