(function() {
	angular.module('gitRecommender')
		.factory('Tree', Tree);

	Tree.$inject = [];

	function Tree(treeData) {
		if (treeData) {
			this.setData(treeData);
		}

		this.config = {
			core: {
				multiple: false,
				animation: true,
				check_callback: true,
				worker: true
			},
			types: {
				default: {
					icon: 'octicon octicon-flame'
				},
				file: {
					icon: 'octicon octicon-file-text'
				},
				dir: {
					icon: 'octicon octicon-file-directory'
				}
			},
			plugins: ['types', 'wholerow']
		};
	}

	Tree.prototype = {};
})();

/*
app.factory('Book', ['$http', function($http) {
	function Book(bookData) {
		if (bookData) {
			this.setData(bookData);
		}
		// Some other initializations related to book
	}

	Book.prototype = {
		setData: function(bookData) {
			angular.extend(this, bookData);
		},
		load: function(id) {
			var scope = this;
			$http.get('ourserver/books/' + bookId).success(function(bookData) {
				scope.setData(bookData);
			});
		},
		delete: function() {
			$http.delete('ourserver/books/' + bookId);
		},
		update: function() {
			$http.put('ourserver/books/' + bookId, this);
		},
		getImageUrl: function(width, height) {
			return 'our/image/service/' + this.book.id + '/' + width + '/' + height;
		},
		isAvailable: function() {
			if (!this.book.stores || this.book.stores.length === 0) {
				return false;
			}
			return this.book.stores.some(function(store) {
				return store.quantity > 0;
			});
		}
	};
	return Book;
}]);*/