angular.module('toDoApp', [])
  .controller('MainCtrl', [function () {
    var self = this;

    self.toDo = [
      {
        title: 'Do something',
        done: true,
        due: new Date("2017-07-31T08:00:00Z")
      }, {
        title: 'Do something else',
        done: false,
        due: new Date("2017-08-02T08:00:00Z")
      }, {
        title: 'Do more stuff',
        done: false,
        due: new Date("2017-08-03T08:00:00Z")
      }, {
        title: 'Do that again',
        done: false,
        due: new Date("2017-08-07T08:00:00Z")
      }
    ];

    self.getToDo = function () {
      console.log("getToDo()");
      self.toDo.map(function (item) {
        item.due = item.due.toLocaleString();
      });
      return self.toDo;
    };

    self.toDoObj = {
      'Do something': {
        done: true,
        due: new Date("2017-07-31T08:00:00Z")
      },
      'Do something else': {
        done: false,
        due: new Date("2017-08-02T08:00:00Z")
      },
      'Do more stuff': {
        done: false,
        due: new Date("2017-08-03T08:00:00Z")
      },
      'Do that again': {
        done: false,
        due: new Date("2017-08-07T08:00:00Z")
      }
    };

    self.getToDoObj = function () {
      console.log("getToDoObj()");
      var toDoObj = angular.copy(self.toDoObj);

      for (var title in toDoObj) {
        if (toDoObj.hasOwnProperty(title)) {
          toDoObj[title].due = toDoObj[title].due.toLocaleString();
        }
      }
      return toDoObj;
    };
  }]);
