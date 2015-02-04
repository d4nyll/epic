Template.registerHelper('obj', function() {
	var obj = {zyx: 'qwe'};
	return obj;
});

Template.registerHelper('arr', function() {
	var arr = ['123', 'qwe'];
	return arr;
});

Template.main.created = function() {
	Epic.checkExported();
}

Template.main.rendered = function () {

};