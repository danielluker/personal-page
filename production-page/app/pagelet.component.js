var Pagelet = ng
	.Component({
		selector: 'pagelet',
	})
	.View({
		directives: [ng.NgFor],
		templateUrl: 'templates/pagelet.component.html',
	})
	.Class({
		constructor: function(){},
	});