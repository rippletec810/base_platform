(function() {
  'use strict';

  angular
    .module('app.controllers') 
    .controller('TeamRecordController', TeamRecordController);

  TeamRecordController.$inject = ['$filter','$anchorScroll','$location', 'teamResourceApi','ngDialog'];

  function TeamRecordController($filter,$anchorScroll,$location, teamResourceApi,ngDialog) {
    var vm = this;
    vm.dateList = [];
    activate();
    vm.ColorRandom =function(i) {
        var color = ['timeline-badge primary', 'timeline-badge warning', 'timeline-badge danger', 'timeline-badge info', 'timeline-badge success'];
        return color[i];
    }
    vm.gotoEdit=function(){
      document.querySelector('input[name=amount]').focus();
    }
    function activate() {
      function haskey(obj, key) {
        for (var i in obj) {
          if (i == key)
            return true;
        }
        return false;
      }
      vm.gotoTarget = function(event,target) {
            vm.selectDate = target;
            $location.hash(target);
            $anchorScroll();
      }
      function getList() {
        vm.items = {};
        teamResourceApi.FlowListQuery({
          page_num: 1,
          page_size: 100
        }, function(data) {
          for (var i in data.data.flow_list) {
            data.data.flow_list[i].add_time = moment.unix(data.data.flow_list[i].add_time).format('L');
            data.data.flow_list[i].class=vm.ColorRandom(i%5);
          }
          for (var i in data.data.flow_list) {
            if (haskey(vm.items, data.data.flow_list[i].add_time))
              vm.items[data.data.flow_list[i].add_time].push(data.data.flow_list[i]);
            else {
              vm.items[data.data.flow_list[i].add_time] = [];
              vm.dateList.push(data.data.flow_list[i].add_time);
              vm.items[data.data.flow_list[i].add_time].push(data.data.flow_list[i])
            }
          }
          vm.selectDate = vm.dateList[0];
        })
      }
      vm.editingTodo = false;
      vm.todo = {
        type: '+',
        description: '',
        amount: ''
      };
      getList();
      vm.addTodo = function() {

        if (vm.todo.amount === '') return;
        if (!vm.todo.description) vm.todo.description = '';

        if (vm.editingTodo) {
          vm.todo = {};
          vm.editingTodo = false;
        } else {
          teamResourceApi.AddFlow({
            description: vm.todo.description,
            amount: parseInt(vm.todo.type + vm.todo.amount)
          }, function(data) {
             getList();
          })
          vm.todo.amount = '';
          vm.todo.description = '';
        }
      };

      vm.editTodo = function(index, $event) {
        $event.preventDefault();
        $event.stopPropagation();
        vm.todo = vm.items[index].todo;
        vm.editingTodo = true;
      };

      vm.removeTodo = function(id) {
        ngDialog.openConfirm({
          template: 'confirm',
          className: 'ngdialog-theme-default'
        }).then(function(value) {
          teamResourceApi.DeleteFlow({
            flow_id: id
          }, function(data) {
            getList();
          })
        }, function(reason) {});
      };


      vm.totalCompleted = function() {
        return $filter('filter')(vm.items, function(item) {
          return item.complete;
        }).length;
      };

      vm.totalPending = function() {
        return $filter('filter')(vm.items, function(item) {
          return !item.complete;
        }).length;
      };

    }
  }
})();