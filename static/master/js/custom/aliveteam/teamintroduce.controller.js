(function() {
    'use strict';

    angular
        .module('app.controllers')
        .controller('TeamIntroduceCtroller', TeamIntroduceCtroller)
        
    TeamIntroduceCtroller.$inject=['$scope','$timeout','schoolResourceApi','APP_PARMAS']
    function TeamIntroduceCtroller($scope,$timeout,schoolResourceApi,PP_PARMAS) {
      var vm = this;
          vm.wysiwygContent='';
          vm.reset = function() {
            vm.myImage='';
            vm.myCroppedImage = '';
            vm.myImage='';
            vm.imgcropType    = 'square';
            schoolResourceApi.TeamDetailGet({team_id:9},function(data){
              $timeout(function(){vm.wysiwygContent=data?data.data.content:'';console.log(vm.wysiwygContent)},0,true)
            })
            schoolResourceApi.TeamLogo({team_id:9},function(data){
              $timeout(function(){vm.myImage= data?DataWrap(data.data.content):'';console.log(vm.myImage)},0,true)             
            })
          };
          function DataWrap(str){
            console.log(str)
            return 'data:image/png;base64,'+str;
          }
          vm.reset();

          var handleFileSelect=function(evt) {
            var file=evt.currentTarget.files[0];
            var reader = new FileReader();
            reader.onload = function (evt) {
              $scope.$apply(function(/*$scope*/){
                vm.myImage=evt.target.result;
              });
            };
            if(file)
              reader.readAsDataURL(file);
          };
          angular.element(document.querySelector('#fileInput')).on('change',handleFileSelect);
          vm.saveIntroduce=function(){
            var transition=vm.myCroppedImage.slice(22);
            var dialog = ngDialog.open({
              template: '<div class="panel-body loader-demo"><div class="sk-spinner sk-spinner-double-bounce"><div class="sk-double-bounce1"></div><div class="sk-double-bounce2"></div></div></div>',
              plain: true,
              closeByDocument: false,
              closeByEscape: false
            });
            teamResourceApi.UpdateIntroduce({team_logo:transition,description:vm.wysiwygContent,project_description:' '},function(data){
                dialog.close();            
            })
          }
        }
})();