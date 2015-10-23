/**=========================================================
 * Module: demo-buttons.js
 * Provides a simple demo for buttons actions
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.tables')
        .controller('JoinerController', JoinerController)
        .filter('typeFormat',typeFormat)
    typeFormat.$inject=['APP_PARMAS'];
    function typeFormat(APP_PARMAS){
      return function(input,parmas){
        return  APP_PARMAS.TEAMROLENAME[input]||''; 
      }
    }
    JoinerController.$inject = ['$scope','$timeout','$filter', '$http', 'editableOptions', 'editableThemes','$q','schoolResourceApi','teamResourceApi','userResourceApi','APP_PARMAS'];
    function JoinerController($scope,$timeout,$filter, $http, editableOptions, editableThemes, $q,schoolResourceApi,teamResourceApi,userResourceApi,APP_PARMAS) {
        var vm = this;
        activate();
        function activate() {

          teamResourceApi.JoinerQuery(function(data){
            // vm.joiners=data.data;
            vm.joiners=[{request_id:1,user_id:1,name:"小明",recruit_id:1,title:"招聘标题",mobile:"12345678901",qq:"123466"}];
            console.log(vm.joiners)
          })


          vm.checkName = function(data) {
            if (!data||data=='') {
              return '姓名不能为空';
            }
          };

          // remove user
          vm.removeUser = function(index) {
            vm.joiners.splice(index, 1);
          };

          // add user
          vm.addUser = function() {
            vm.inserted = {
              nickname: '',
              name: '',
              school_name: '',
              major_name:'',
              phone:'',
              password:APP_PARMAS.DefaultPassword
            };
            vm.joiners.push(vm.inserted);
          };


          // editable table
          // ----------------------------------- 

          // filter joiners to show
          vm.filterUser = function(user) {
            return user.isDeleted !== true;
          };

          // mark user as deleted
          vm.deleteUser = function(id) {
            var filtered = $filter('filter')(vm.joiners, {id: id});
            if (filtered.length) {
              filtered[0].isDeleted = true;
            }
          };

          // cancel all changes
          vm.cancel = function(rowform) {
            console.log('cancel')
            rowform.$cancel();
            vm.joiners.pop();
          };

          // save edits
          vm.saveTable = function() {
            var results = [];
            for (var i = vm.joiners.length; i--;) {
              var user = vm.joiners[i];
              // actually delete user
              if (user.isDeleted) {
                vm.joiners.splice(i, 1);
              }
              // mark as not new 
              if (user.isNew) {
                user.isNew = false;
              }

              // send on server
              // results.push($http.post('/saveUser', user));
              console.log('Saving Table...');
            }

            return $q.all(results);
          };

        }
    }
})();
