(function() {
    'use strict';

    angular
        .module('app.controllers')
        .controller('NestableController', NestableController);

    function NestableController() {
        var vm = this;

        activate();

        ////////////////
        
        function activate() {
          vm.items =  [
            {
              item: {text: '一级菜单1'},
              children: []
            },
            {
              item: {text: '一级菜单2'},
              children: [
                {
                  item: {text: '二级菜单c'},
                  children: []
                },
                {
                  item: {text: '二级菜单cd'},
                  children: []
                }
              ]
            },
            {
              item: {text: '一级菜单1e'},
              children: []
            },
            {
              item: {text: '一级菜单1f'},
              children: []
            }
          ];

          vm.unuseitems =  [
            {
              item: {text: '1'},
              children: []
            },
            {
              item: {text: '2'},
              children: []
            },
            {
              item: {text: '5'},
              children: []
            },
            {
              item: {text: '6'},
              children: []
            }
          ];

        }
    }
})();
