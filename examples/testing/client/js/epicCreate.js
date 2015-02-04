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