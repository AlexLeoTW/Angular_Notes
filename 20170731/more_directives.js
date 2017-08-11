angular.module('showDirective', [])
  .controller('MainCtrl', [function () {
    var self = this;

    self.name = 'Example';

    self.toDo = dataPack.toDo.map(function (item) {
        item.due = item.due.toLocaleString();
        return item;
      });

    self.toDoObj = (function () {
      var obj = angular.copy(dataPack.toDoObj);
      for (var title in obj) {
        if (obj.hasOwnProperty(title)) {
          obj[title].due = obj[title].due.toLocaleString();
        }
      }
      return obj;
    })();

    self.getItemClass = function (item) {
      return {
        highlighted: item.done,
        faded: !item.done
      };
    };
  }]);

var dataPack = {
  toDo: [
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
  ],

  toDoObj: {
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
  }
};
