/**=========================================================
 * Module: demo-buttons.js
 * Provides a simple demo for buttons actions
 =========================================================*/

(function() {
  'use strict';

  angular
    .module('app.controllers')
    .controller('TeamAccountController', TeamAccountController);

  TeamAccountController.$inject = ['$filter', '$http', '$scope', 'ngDialog', 'editableOptions', 'editableThemes', '$q', 'teamResourceApi'];

  function TeamAccountController($filter, $http, $scope, ngDialog, editableOptions, editableThemes, $q, teamResourceApi) {
    var vm = this;

    activate();
    $scope.openTimed = function (title,info) {
            var dialog = ngDialog.open({
              template: '<h3 class="text-center">'+title+'</h3><p class="text-center">'+info+'</p>',
              plain: true,
              closeByDocument: false,
              closeByEscape: false
            });
            setTimeout(function () {
              dialog.close();
            }, 2000);
    };
    $scope.DecreaseMoney = function(id) {
      ngDialog.openConfirm({
          template: 'Decrease',
          className: 'ngdialog-theme-default',
          controller: ['$scope',function($scope){
            $scope.Decrease={
              id:id,
              money:'',
              reason:''
            }
          }]
        })
        .then(function(value) {
          var info='',title='';
          if(!!value.id&&value.money!=''&&value.reason!='')
            teamResourceApi.DecreaseAccount({team_id:value.id,amount:value.money,reason:value.reason}).$promise.then(function(data){
              switch(data.status){
                case 200:title='操作成功';info='扣钱成功';break;
                case 464:title='操作失败';info='该团队不存在';break;
                case 112:title='操作失败';info='参数错误';break;
                default:break;
              }
              $scope.openTimed(title,info)
              activate();
            })
        }, function(value) {
          console.log('rejected:' + value);

        });
    };
    $scope.IncreaseMoney = function(id) {
      ngDialog.openConfirm({
          template: 'Increase',
          className: 'ngdialog-theme-default',
          controller: ['$scope',function($scope){
            $scope.Increase={
              id:id,
              money:'',
              reason:''
            }
          }]
        })
        .then(function(value) {
          var info='',title='';
          if(!!value.id&&value.money!=''&&value.reason!='')
            teamResourceApi.IncreaseAccount({team_id:value.id,amount:value.money,reason:value.reason}).$promise.then(function(data){
              switch(data.status){
                case 200:title='操作成功';info='加钱成功';break;
                case 464:title='操作失败';info='该团队不存在';break;
                case 112:title='操作失败';info='参数错误';break;
                default:break;
              }
              $scope.openTimed(title,info)
              activate();
            })
        }, function(value) {
          console.log('rejected:' + value);
        });
    };
    function activate() {
      teamResourceApi.AccountQuery(function(data) {
        console.log(data); 
        vm.teams = data.data;
      })
    }
  }
})();