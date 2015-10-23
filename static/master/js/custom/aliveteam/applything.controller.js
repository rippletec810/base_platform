(function() {
  'use strict';

  angular
    .module('app.controllers')
    .controller('ApplyThingController', ApplyThingController);

  ApplyThingController.$inject = ['$scope', '$http', '$timeout', '$state', 'teamResourceApi','ngDialog'];

  function ApplyThingController($scope, $http, $timeout, $state, teamResourceApi,ngDialog) {
    var vm=$scope;
    vm.apply = {
      applything: '',
      endtime:'',
      starttime:'',
      startMinue:'',
      endMinue:''
    };
    vm.setApplyThing = function(value) {
      vm.apply.applything = value;
    }
    vm.clear = function() {
      vm.apply.endtime = '';
      vm.apply.starttime = '';
    };

    // Disable weekend selection
    vm.disabled = function(date, mode) {
      return (mode === 'day' && (date.getDay() === 0 || date.getDay() === 6));
    };

    vm.toggleMin = function() {
      vm.minDate = vm.minDate ? null : new Date();
    };
    vm.toggleMin();

    vm.startopen = function($event) {
      $event.preventDefault();
      $event.stopPropagation();
      $timeout(function(){vm.startopened = true;},0,true)
    };
    vm.endopen = function($event) {
      $event.preventDefault();
      $event.stopPropagation();
      $timeout(function(){vm.endopened = true;},0,true)
    };
    vm.openTimed = function (info) {
            var dialog = ngDialog.open({
              template: info,
              plain: true,
              closeByDocument: false,
              closeByEscape: false
            });
            setTimeout(function () {
              dialog.close();
            }, 2000);
    };
    vm.finishApply=function(){
      var starttime=Math.round(new Date(vm.apply.starttime).getTime()/1000)+parseInt(vm.apply.startMinue.slice(0,2))*3600+parseInt(vm.apply.startMinue.slice(3))*60,
          endtime=Math.round(new Date(vm.apply.endtime).getTime()/1000)+parseInt(vm.apply.endMinue.slice(0,2))*3600+parseInt(vm.apply.endMinue.slice(3))*60;
      if(starttime<endtime&&vm.apply.applything!='')
        teamResourceApi.ApplyForThing({place_name:vm.apply.applything,start_time:starttime, end_time:endtime},function(data){
          if(data.status==200)
            vm.openTimed('<h3 class="text-center text-success">申请成功</h3><p class="text-center">请耐心等候管理员审批</p>')
          $timeout(function(){$state.go('team.suportlist')},2000,true)
        })
      else
            vm.openTimed('<h3 class="text-center">时间填写有误</h3><p class="text-center">请认真核对起止时间，开始使用时间不能大于停止使用时间</p>')
    }
    vm.dateOptions = {
      formatYear: '@',
      startingDay: 1,
      navigationAsDateFormat: true
    };
    vm.initDate = new Date('2019-10-20');
    vm.format = 'yyyy年-MM号-dd日';
  }
})();