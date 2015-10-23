/**=========================================================
 * Module: demo-buttons.js
 * Provides a simple demo for buttons actions
 =========================================================*/

(function() {
  'use strict';

  angular
    .module('app.tables')
    .controller('teamworkerController', teamworkerController)
    .filter('typeFormat', typeFormat)
  typeFormat.$inject = ['APP_PARMAS'];

  function typeFormat(APP_PARMAS) {
    return function(input, parmas) {
      return APP_PARMAS.TEAMROLENAME[input] || '';
    }
  }
  teamworkerController.$inject = ['$scope', '$timeout', '$filter', '$http', 'editableOptions', 'editableThemes', '$q', 'schoolResourceApi', 'teamResourceApi', 'userResourceApi', 'APP_PARMAS'];

  function teamworkerController($scope, $timeout, $filter, $http, editableOptions, editableThemes, $q, schoolResourceApi, teamResourceAp, userResourceApi, APP_PARMAS) {
    var vm = this;
    vm.users = [];
    userResourceApi.TeamWorkerQuery(function(data) {
      vm.users = data.data;
    })

    vm.types = [{
      id: 1,
      name: '次要负责人'
    }, {
      id: 2,
      name: '普通成员'
    }]
    vm.showRole = function(user) {
      if (user.type && vm.types.length) {
        var selected = $filter('filter')(vm.types, {
          id: user.type
        });
        return selected.length ? selected[0].name : 'Not set';
      } else {
        return APP_PARMAS.TEAMROLENAME[user.type] || 'Not set';
      }
    };

    vm.checkName = function(data) {
      if (!data || data == '') {
        return '姓名不能为空';
      }
    };
    vm.checkID = function(data) {
      if (!data) {
        return '请选择';
      }
    }

    // remove user
    vm.removeUser = function(index) {
      vm.users.splice(index, 1);
    };

    // add user
    vm.addUser = function() {
      vm.inserted = {
        nickname: '',
        name: '',
        school_name: '',
        major_name: '',
        phone: '',
        password: APP_PARMAS.DefaultPassword
      };
      vm.users.push(vm.inserted);
    };


    // editable table
    // ----------------------------------- 

    // filter users to show
    vm.filterUser = function(user) {
      return user.isDeleted !== true;
    };

    // mark user as deleted
    vm.deleteUser = function(id) {
      var filtered = $filter('filter')(vm.users, {
        id: id
      });
      if (filtered.length) {
        filtered[0].isDeleted = true;
      }
    };

    // cancel all changes
    vm.cancel = function(rowform) {
      console.log('cancel')
      rowform.$cancel();
      vm.users.pop();
    };
  }
})();