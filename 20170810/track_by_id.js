/*jshint esversion: 6 */

angular.module('trackById', [])
  .controller('MainCtrl', [function () {
    var self = this;

    self.mode = {
      // default: new
      new: true,
      edit: false,
      setNew: function () {
        this.new = true;
        this.edit = false;
      },
      setEdit: function () {
        this.new = false;
        this.edit = true;
      }
    };

    self.defaultBookmarks = [
      {
        name: 'Angular.js',
        url: 'https://angularjs.org/'
      }, {
        name: 'Bootstrap',
        url: 'http://getbootstrap.com/'
      }, {
        name: 'jQuery',
        url: 'https://jquery.com/'
      }
    ];

    self.bookmarks = angular.copy(self.defaultBookmarks);
    self.bookmarks2 = angular.copy(self.defaultBookmarks);

    self.editingBookmark = {
      origName: '',
      name: 'w3schools',
      url: 'https://www.w3schools.com/'
    };

    self.toJSON = function (obj) {
      return JSON.stringify(obj);
    };

    self.clearEditingBookmark = function () {
      self.editingBookmark = {
        origName: '',
        name: '',
        url: ''
      };
    };

    self.addBookmark = function () {
      self.bookmarks.push(self.editingBookmark);
      self.bookmarks2.push(self.editingBookmark);
      self.clearEditingBookmark();
    };

    self.refreshBookmark = function () {
      self.bookmarks = angular.copy(self.defaultBookmarks);
      self.bookmarks2 = angular.copy(self.defaultBookmarks);
    };

    self.editBookmark = function (bookmark) {
      if (self.mode.new) {
        self.mode.setEdit();
      }
      self.editingBookmark = angular.copy(bookmark);
      self.editingBookmark.origName = bookmark.name;
    };

    self.saveBookmark = function () {
      let origName = self.editingBookmark.origName;
      delete self.editingBookmark.origName;

      for (let index = 0; index < self.bookmarks.length; index++) {
        if (self.bookmarks[index].name === origName) {
          self.bookmarks[index] = angular.copy(self.editingBookmark);
          break;
        }
      }
      for (let index = 0; index < self.bookmarks2.length; index++) {
        if (self.bookmarks2[index].name === origName) {
          self.bookmarks2[index] = angular.copy(self.editingBookmark);
          break;
        }
      }
      self.clearEditingBookmark();
      self.mode.setNew();
    };

    self.allToHttps = function () {
      let index = 0;
      for (index = 0; index < self.bookmarks.length; index++) {
        self.bookmarks[index].url= self.bookmarks[index].url.replace('http:', 'https:');
      }
      for (index = 0; index < self.bookmarks2.length; index++) {
        self.bookmarks2[index].url = self.bookmarks2[index].url.replace('http:', 'https:');
      }
    };
  }]);
