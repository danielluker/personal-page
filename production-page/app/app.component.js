// (function(app) {
//   app.AppComponent =
//     ng.core.Component({
//       selector: 'my-app',
//       template: '<h1>My First Angular 2 App</h1>'
//     })
//     .Class({
//       constructor: function() {}
//     });
// })(window.app || (window.app = {}));

var MyApp = ng
	.Component({
		selector: 'application',
	})
	.View({
		directives: [Pagelet],
		templateUrl: 'templates/pagelet.component.html',
	})
	.Class({
		constructor: function(){},
	});

document.addEventListener('DOMContentLoaded', function() {
 ng.bootstrap(MyApp);
});