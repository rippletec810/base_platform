(function() {
    'use strict';

    angular
        .module('app.controllers')
        .controller('BaseIntroduceCtroller', BaseIntroduceCtroller)
        
    BaseIntroduceCtroller.$inject=['$scope','$timeout','schoolResourceApi','adminResourceApi','ngDialog','APP_PARMAS']
    function BaseIntroduceCtroller($scope,$timeout,schoolResourceApi,adminResourceApi,ngDialog,APP_PARMAS) {
      var vm = this;
          vm.wysiwygContent='';
          vm.reset = function() {
            vm.myImage='';
            vm.myCroppedImage = '';
            vm.myImage='';
            vm.imgcropType    = 'square';
            // schoolResourceApi.IntroduceContentQuery(function(data){
            //   $timeout(function(){vm.wysiwygContent=data?data.data.content:'';console.log(vm.wysiwygContent)},0,true)
            // })
            schoolResourceApi.IntroduceLogoQuery(function(data){
              $timeout(function(){vm.myImage= data?DataWrap(data.data.content):'';console.log(vm.myImage)},0,true)             
            })
          };
          function DataWrap(str){
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
            schoolResourceApi.UpdateIntroduce({logo_file:transition,content:vm.wysiwygContent},function(data){
                dialog.close();            
            })
          }
        }
})();