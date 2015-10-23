(function() {
    'use strict';

    angular
        .module('app.controllers')
        .controller('TeamRecruitController', TeamRecruitController)
        
    TeamRecruitController.$inject=['$scope','$timeout','schoolResourceApi','APP_PARMAS']
    function TeamRecruitController($scope,$timeout,schoolResourceApi,APP_PARMAS) {

    }
})();