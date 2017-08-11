angular.module(
  'example', []
).controller(
  'ExampleController', [ '$scope',
    function ($scope) {
      $scope.name = "Example";
      console.log('set "$scope.name" as "Example"');
    }
  ]
);
