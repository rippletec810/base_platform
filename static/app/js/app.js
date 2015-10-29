/*!
 * 
 * Angle - Bootstrap Admin App + AngularJS
 * 
 * Version: 3.0.0
 * Author: @themicon_co
 * Website: http://themicon.co
 * License: https://wrapbootstrap.com/help/licenses
 * 
 */

// APP START
// ----------------------------------- 

(function() {
    'use strict';

    angular
        .module('app', [
            'app.core',
            'app.services',
            'app.filters',
            'app.routes',
            'app.sidebar',
            'app.preloader',
            'app.loadingbar',
            'app.translate',
            'app.settings',
            'app.icons',
            'app.notify',
            'app.bootstrapui',
            'app.panels',
            'app.forms',
            'app.pages',
            'app.tables',
            'app.extras',
            'app.mailbox',
            'app.utils',
            'app.controllers'
        ])              
})();
(function() {
    'use strict';

    angular
        .module('app.bootstrapui', []);
})();
(function() {
    'use strict';

    angular
        .module('app.colors', []);
})();
(function() {
    'use strict';

    angular
        .module('app.extras', []);
})();
(function() {
    'use strict';

    angular
        .module('app.forms', []);
})();
(function() {
    'use strict';

    angular
        .module('app.icons', []);
})();
(function() {
    'use strict';

    angular
        .module('app.loadingbar', []);
})();
(function() {
    'use strict';

    angular
        .module('app.mailbox', []);
})();
(function() {
    'use strict';

    angular
        .module('app.navsearch', []);
})();
(function() {
    'use strict';

    angular
        .module('app.notify', []);
})();
(function() {
    'use strict';

    angular
        .module('app.pages', []);
})();
(function() {
    'use strict';

    angular
        .module('app.panels', []);
})();
(function() {
    'use strict';

    angular
        .module('app.preloader', []);
})();


(function() {
    'use strict';

    angular
        .module('app.tables', []);
})();
(function() {
    'use strict';

    angular
        .module('app.translate', []);
})();
(function() {
    'use strict';

    angular
        .module('app.utils', [
          'app.colors'
          ]);
})();

/**=========================================================
 * Module: demo-alerts.js
 * Provides a simple demo for pagination
 =========================================================*/
(function() {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('AlertDemoCtrl', AlertDemoCtrl);

    function AlertDemoCtrl() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          vm.alerts = [
            { type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' },
            { type: 'warning', msg: 'Well done! You successfully read this important alert message.' }
          ];

          vm.addAlert = function() {
            vm.alerts.push({msg: 'Another alert!'});
          };

          vm.closeAlert = function(index) {
            vm.alerts.splice(index, 1);
          };
        }
    }
})();

(function() {
    'use strict';

    angular
        .module('app.bootstrapui')
        .config(bootstrapuiConfig);

    bootstrapuiConfig.$inject = ['$tooltipProvider'];
    function bootstrapuiConfig($tooltipProvider){
      $tooltipProvider.options({appendToBody: true});
    }
})();
/**=========================================================
 * Module: demo-buttons.js
 * Provides a simple demo for buttons actions
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('ButtonsCtrl', ButtonsCtrl);

    function ButtonsCtrl() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          vm.singleModel = 1;

          vm.radioModel = 'Middle';

          vm.checkModel = {
            left: false,
            middle: true,
            right: false
          };
        }
    }
})();

/**=========================================================
 * Module: demo-carousel.js
 * Provides a simple demo for bootstrap ui carousel
 =========================================================*/
(function() {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('CarouselDemoCtrl', CarouselDemoCtrl);

    function CarouselDemoCtrl() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          vm.myInterval = 5000;
          
          var slides = vm.slides = [];
          vm.addSlide = function() {
            var newWidth = 800 + slides.length;
            slides.push({
              image: '//placekitten.com/' + newWidth + '/300',
              text: ['More','Extra','Lots of','Surplus'][slides.length % 2] + ' ' +
                ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 2]
            });
          };
          
          for (var i=0; i<2; i++) {
            vm.addSlide();
          }

        }
    }
})();

/**=========================================================
 * Module: demo-datepicker.js
 * Provides a simple demo for bootstrap datepicker
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('DatepickerDemoCtrl', DatepickerDemoCtrl);

    function DatepickerDemoCtrl() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          vm.today = function() {
            vm.dt = new Date();
          };
          vm.today();

          vm.clear = function () {
            vm.dt = null;
          };

          // Disable weekend selection
          vm.disabled = function(date, mode) {
            return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
          };

          vm.toggleMin = function() {
            vm.minDate = vm.minDate ? null : new Date();
          };
          vm.toggleMin();

          vm.open = function($event) {
            $event.preventDefault();
            $event.stopPropagation();

            vm.opened = true;
          };

          vm.dateOptions = {
            formatYear: '@',
            startingDay: 1,
            navigationAsDateFormat: true
          };

          vm.initDate = new Date('2019-10-20');
          vm.formats = ['dd-MMMM-yyyy', 'yyyy年-MM号-dd日', 'dd.MM.yyyy', 'shortDate'];
          vm.format = vm.formats[1];
        }
    }
})();


/**=========================================================
 * Module: modals.js
 * Provides a simple way to implement bootstrap modals from templates
 =========================================================*/
(function() {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('ModalController', ModalController);

    ModalController.$inject = ['$modal'];
    function ModalController($modal) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

          vm.open = function (size) {

            var modalInstance = $modal.open({
              templateUrl: '/myModalContent.html',
              controller: ModalInstanceCtrl,
              size: size
            });

            var state = $('#modal-state');
            modalInstance.result.then(function () {
              state.text('Modal dismissed with OK status');
            }, function () {
              state.text('Modal dismissed with Cancel status');
            });
          };

          // Please note that $modalInstance represents a modal window (instance) dependency.
          // It is not the same as the $modal service used above.

          ModalInstanceCtrl.$inject = ['$scope', '$modalInstance'];
          function ModalInstanceCtrl($scope, $modalInstance) {

            $scope.ok = function () {
              $modalInstance.close('closed');
            };

            $scope.cancel = function () {
              $modalInstance.dismiss('cancel');
            };
          }
        }
    }

})();

/**=========================================================
 * Module: demo-pagination.js
 * Provides a simple demo for pagination
 =========================================================*/
(function() {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('PaginationDemoCtrl', PaginationDemoCtrl);

    function PaginationDemoCtrl() {
        var vm = this;


        activate();

        ////////////////

        function activate() {
          vm.totalItems = 64;
          vm.currentPage = 4;

          vm.setPage = function (pageNo) {
            vm.currentPage = pageNo;
          };

          vm.pageChanged = function() {
            console.log('Page changed to: ' + vm.currentPage);
          };

          vm.maxSize = 5;
          vm.bigTotalItems = 175;
          vm.bigCurrentPage = 1;
        }
    }
})();

/**=========================================================
 * Module: demo-popover.js
 * Provides a simple demo for popovers
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('PopoverDemoCtrl', PopoverDemoCtrl);

    function PopoverDemoCtrl() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          vm.dynamicPopover = 'Hello, World!';
          vm.dynamicPopoverTitle = 'Title';
        }
    }
})();

/**=========================================================
 * Module: demo-progress.js
 * Provides a simple demo to animate progress bar
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('ProgressDemoCtrl', ProgressDemoCtrl);

    function ProgressDemoCtrl() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          vm.max = 200;

          vm.random = function() {
            var value = Math.floor((Math.random() * 100) + 1);
            var type;

            if (value < 25) {
              type = 'success';
            } else if (value < 50) {
              type = 'info';
            } else if (value < 75) {
              type = 'warning';
            } else {
              type = 'danger';
            }

            vm.showWarning = (type === 'danger' || type === 'warning');

            vm.dynamic = value;
            vm.type = type;
          };
          vm.random();

          vm.randomStacked = function() {
            vm.stacked = [];
            var types = ['success', 'info', 'warning', 'danger'];

            for (var i = 0, n = Math.floor((Math.random() * 4) + 1); i < n; i++) {
                var index = Math.floor((Math.random() * 4));
                vm.stacked.push({
                  value: Math.floor((Math.random() * 30) + 1),
                  type: types[index]
                });
            }
          };
          vm.randomStacked();
        }
    }
})();

/**=========================================================
 * Module: demo-rating.js
 * Provides a demo for ratings UI
 =========================================================*/
(function() {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('RatingDemoCtrl', RatingDemoCtrl);

    function RatingDemoCtrl() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          vm.rate = 7;
          vm.max = 10;
          vm.isReadonly = false;

          vm.hoveringOver = function(value) {
            vm.overStar = value;
            vm.percent = 100 * (value / vm.max);
          };

          vm.ratingStates = [
            {stateOn: 'fa fa-check', stateOff: 'fa fa-check-circle'},
            {stateOn: 'fa fa-star', stateOff: 'fa fa-star-o'},
            {stateOn: 'fa fa-heart', stateOff: 'fa fa-ban'},
            {stateOn: 'fa fa-heart'},
            {stateOff: 'fa fa-power-off'}
          ];
        }
    }
})();

/**=========================================================
 * Module: demo-timepicker.js
 * Provides a simple demo for bootstrap ui timepicker
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('TimepickerDemoCtrl', TimepickerDemoCtrl);

    function TimepickerDemoCtrl() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          vm.mytime = new Date();

          vm.hstep = 1;
          vm.mstep = 15;

          vm.options = {
            hstep: [1, 2, 3],
            mstep: [1, 5, 10, 15, 25, 30]
          };

          vm.ismeridian = true;
          vm.toggleMode = function() {
            vm.ismeridian = ! vm.ismeridian;
          };

          vm.update = function() {
            var d = new Date();
            d.setHours( 14 );
            d.setMinutes( 0 );
            vm.mytime = d;
          };

          vm.changed = function () {
            console.log('Time changed to: ' + vm.mytime);
          };

          vm.clear = function() {
            vm.mytime = null;
          };
        }
    }
})();

/**=========================================================
 * Module: demo-tooltip.js
 * Provides a simple demo for tooltip
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('TooltipDemoCtrl', TooltipDemoCtrl);

    function TooltipDemoCtrl() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          vm.dynamicTooltip = 'Hello, World!';
          vm.dynamicTooltipText = 'dynamic';
          vm.htmlTooltip = 'I\'ve been made <b>bold</b>!';

          vm.autoplace = function (context, source) {
            //return (predictTooltipTop(source) < 0) ?  "bottom": "top";
            var pos = 'top';
            if(predictTooltipTop(source) < 0)
              pos = 'bottom';
            if(predictTooltipLeft(source) < 0)
              pos = 'right';
            return pos;
          };

            // Predicts tooltip top position 
            // based on the trigger element
            function predictTooltipTop(el) {
              var top = el.offsetTop;
              var height = 40; // asumes ~40px tooltip height

              while(el.offsetParent) {
                el = el.offsetParent;
                top += el.offsetTop;
              }
              return (top - height) - (window.pageYOffset);
            }

            // Predicts tooltip top position 
            // based on the trigger element
            function predictTooltipLeft(el) {
              var left = el.offsetLeft;
              var width = el.offsetWidth;

              while(el.offsetParent) {
                el = el.offsetParent;
                left += el.offsetLeft;
              }
              return (left - width) - (window.pageXOffset);
            }
        }
    }
})();

/**=========================================================
 * Module: demo-typeahead.js
 * Provides a simple demo for typeahead
 =========================================================*/
(function() {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('TypeaheadCtrl', TypeaheadCtrl);

    TypeaheadCtrl.$inject = ['$http'];
    function TypeaheadCtrl($http) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

          vm.selected = undefined;
          vm.states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

          // Any function returning a promise object can be used to load values asynchronously
          vm.getLocation = function(val) {
            return $http.get('//maps.googleapis.com/maps/api/geocode/json', {
              params: {
                address: val,
                sensor: false
              }
            }).then(function(res){
              var addresses = [];
              angular.forEach(res.data.results, function(item){
                /*jshint -W106*/
                addresses.push(item.formatted_address);
              });
              return addresses;
            });
          };

          vm.statesWithFlags = [{'name':'Alabama','flag':'5/5c/Flag_of_Alabama.svg/45px-Flag_of_Alabama.svg.png'},{'name':'Alaska','flag':'e/e6/Flag_of_Alaska.svg/43px-Flag_of_Alaska.svg.png'},{'name':'Arizona','flag':'9/9d/Flag_of_Arizona.svg/45px-Flag_of_Arizona.svg.png'},{'name':'Arkansas','flag':'9/9d/Flag_of_Arkansas.svg/45px-Flag_of_Arkansas.svg.png'},{'name':'California','flag':'0/01/Flag_of_California.svg/45px-Flag_of_California.svg.png'},{'name':'Colorado','flag':'4/46/Flag_of_Colorado.svg/45px-Flag_of_Colorado.svg.png'},{'name':'Connecticut','flag':'9/96/Flag_of_Connecticut.svg/39px-Flag_of_Connecticut.svg.png'},{'name':'Delaware','flag':'c/c6/Flag_of_Delaware.svg/45px-Flag_of_Delaware.svg.png'},{'name':'Florida','flag':'f/f7/Flag_of_Florida.svg/45px-Flag_of_Florida.svg.png'},{'name':'Georgia','flag':'5/54/Flag_of_Georgia_%28U.S._state%29.svg/46px-Flag_of_Georgia_%28U.S._state%29.svg.png'},{'name':'Hawaii','flag':'e/ef/Flag_of_Hawaii.svg/46px-Flag_of_Hawaii.svg.png'},{'name':'Idaho','flag':'a/a4/Flag_of_Idaho.svg/38px-Flag_of_Idaho.svg.png'},{'name':'Illinois','flag':'0/01/Flag_of_Illinois.svg/46px-Flag_of_Illinois.svg.png'},{'name':'Indiana','flag':'a/ac/Flag_of_Indiana.svg/45px-Flag_of_Indiana.svg.png'},{'name':'Iowa','flag':'a/aa/Flag_of_Iowa.svg/44px-Flag_of_Iowa.svg.png'},{'name':'Kansas','flag':'d/da/Flag_of_Kansas.svg/46px-Flag_of_Kansas.svg.png'},{'name':'Kentucky','flag':'8/8d/Flag_of_Kentucky.svg/46px-Flag_of_Kentucky.svg.png'},{'name':'Louisiana','flag':'e/e0/Flag_of_Louisiana.svg/46px-Flag_of_Louisiana.svg.png'},{'name':'Maine','flag':'3/35/Flag_of_Maine.svg/45px-Flag_of_Maine.svg.png'},{'name':'Maryland','flag':'a/a0/Flag_of_Maryland.svg/45px-Flag_of_Maryland.svg.png'},{'name':'Massachusetts','flag':'f/f2/Flag_of_Massachusetts.svg/46px-Flag_of_Massachusetts.svg.png'},{'name':'Michigan','flag':'b/b5/Flag_of_Michigan.svg/45px-Flag_of_Michigan.svg.png'},{'name':'Minnesota','flag':'b/b9/Flag_of_Minnesota.svg/46px-Flag_of_Minnesota.svg.png'},{'name':'Mississippi','flag':'4/42/Flag_of_Mississippi.svg/45px-Flag_of_Mississippi.svg.png'},{'name':'Missouri','flag':'5/5a/Flag_of_Missouri.svg/46px-Flag_of_Missouri.svg.png'},{'name':'Montana','flag':'c/cb/Flag_of_Montana.svg/45px-Flag_of_Montana.svg.png'},{'name':'Nebraska','flag':'4/4d/Flag_of_Nebraska.svg/46px-Flag_of_Nebraska.svg.png'},{'name':'Nevada','flag':'f/f1/Flag_of_Nevada.svg/45px-Flag_of_Nevada.svg.png'},{'name':'New Hampshire','flag':'2/28/Flag_of_New_Hampshire.svg/45px-Flag_of_New_Hampshire.svg.png'},{'name':'New Jersey','flag':'9/92/Flag_of_New_Jersey.svg/45px-Flag_of_New_Jersey.svg.png'},{'name':'New Mexico','flag':'c/c3/Flag_of_New_Mexico.svg/45px-Flag_of_New_Mexico.svg.png'},{'name':'New York','flag':'1/1a/Flag_of_New_York.svg/46px-Flag_of_New_York.svg.png'},{'name':'North Carolina','flag':'b/bb/Flag_of_North_Carolina.svg/45px-Flag_of_North_Carolina.svg.png'},{'name':'North Dakota','flag':'e/ee/Flag_of_North_Dakota.svg/38px-Flag_of_North_Dakota.svg.png'},{'name':'Ohio','flag':'4/4c/Flag_of_Ohio.svg/46px-Flag_of_Ohio.svg.png'},{'name':'Oklahoma','flag':'6/6e/Flag_of_Oklahoma.svg/45px-Flag_of_Oklahoma.svg.png'},{'name':'Oregon','flag':'b/b9/Flag_of_Oregon.svg/46px-Flag_of_Oregon.svg.png'},{'name':'Pennsylvania','flag':'f/f7/Flag_of_Pennsylvania.svg/45px-Flag_of_Pennsylvania.svg.png'},{'name':'Rhode Island','flag':'f/f3/Flag_of_Rhode_Island.svg/32px-Flag_of_Rhode_Island.svg.png'},{'name':'South Carolina','flag':'6/69/Flag_of_South_Carolina.svg/45px-Flag_of_South_Carolina.svg.png'},{'name':'South Dakota','flag':'1/1a/Flag_of_South_Dakota.svg/46px-Flag_of_South_Dakota.svg.png'},{'name':'Tennessee','flag':'9/9e/Flag_of_Tennessee.svg/46px-Flag_of_Tennessee.svg.png'},{'name':'Texas','flag':'f/f7/Flag_of_Texas.svg/45px-Flag_of_Texas.svg.png'},{'name':'Utah','flag':'f/f6/Flag_of_Utah.svg/45px-Flag_of_Utah.svg.png'},{'name':'Vermont','flag':'4/49/Flag_of_Vermont.svg/46px-Flag_of_Vermont.svg.png'},{'name':'Virginia','flag':'4/47/Flag_of_Virginia.svg/44px-Flag_of_Virginia.svg.png'},{'name':'Washington','flag':'5/54/Flag_of_Washington.svg/46px-Flag_of_Washington.svg.png'},{'name':'West Virginia','flag':'2/22/Flag_of_West_Virginia.svg/46px-Flag_of_West_Virginia.svg.png'},{'name':'Wisconsin','flag':'2/22/Flag_of_Wisconsin.svg/45px-Flag_of_Wisconsin.svg.png'},{'name':'Wyoming','flag':'b/bc/Flag_of_Wyoming.svg/43px-Flag_of_Wyoming.svg.png'}];

        }
    }
})();

(function() {
    'use strict';

    angular
        .module('app.colors')
        .constant('APP_COLORS', {
          'primary':                '#5d9cec',
          'success':                '#27c24c',
          'info':                   '#23b7e5',
          'warning':                '#ff902b',
          'danger':                 '#f05050',
          'inverse':                '#131e26',
          'green':                  '#37bc9b',
          'pink':                   '#f532e5',
          'purple':                 '#7266ba',
          'dark':                   '#3a3f51',
          'yellow':                 '#fad732',
          'gray-darker':            '#232735',
          'gray-dark':              '#3a3f51',
          'gray':                   '#dde6e9',
          'gray-light':             '#e4eaec',
          'gray-lighter':           '#edf1f2'
        })
        ;
})();
/**=========================================================
 * Module: colors.js
 * Services to retrieve global colors
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.colors')
        .service('Colors', Colors);

    Colors.$inject = ['APP_COLORS'];
    function Colors(APP_COLORS) {
        this.byName = byName;

        ////////////////

        function byName(name) {
          return (APP_COLORS[name] || '#fff');
        }
    }

})();

/**=========================================================
 * Module: article.js
 =========================================================*/
(function() {
    'use strict';

    angular
        .module('app.extras')
        .controller('ArticleController', ArticleController);

    function ArticleController() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          vm.htmlContent = 'Article content...';

          vm.postDemo = {};
          vm.postDemo.tags = ['coding', 'less'];
          vm.availableTags = ['coding', 'less', 'sass', 'angularjs', 'node', 'expressJS'];
          vm.postDemo.categories = ['JAVASCRIPT','WEB'];
          vm.availableCategories = ['JAVASCRIPT','WEB', 'BOOTSTRAP', 'SERVER', 'HTML5', 'CSS'];

          vm.reviewers = [
            { name: 'Adam',      email: 'adam@email.com',      age: 10 },
            { name: 'Amalie',    email: 'amalie@email.com',    age: 12 },
            { name: 'Wladimir',  email: 'wladimir@email.com',  age: 30 },
            { name: 'Samantha',  email: 'samantha@email.com',  age: 31 },
            { name: 'Estefanía', email: 'estefanía@email.com', age: 16 },
            { name: 'Natasha',   email: 'natasha@email.com',   age: 54 },
            { name: 'Nicole',    email: 'nicole@email.com',    age: 43 },
            { name: 'Adrian',    email: 'adrian@email.com',    age: 21 }
          ];


          vm.alerts = [
            { type: 'info', msg: 'There is an autosaved version of this article that is more recent than the version below. <a href="#" class="text-white">Restore</a>' }
          ];

          vm.closeAlert = function(index) {
            vm.alerts.splice(index, 1);
          };
        }
    }
})();

/**=========================================================
 * Module: calendar-ui.js
 * This script handle the calendar demo with draggable 
 * events and events creations
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.extras')
        .directive('calendar', calendar);

    calendar.$inject = ['$rootScope'];
    function calendar ($rootScope) {
        var directive = {
            link: link,
            restrict: 'EA'
        };
        return directive;

        function link(scope, element) {
          
          if(!$.fn.fullCalendar) return;
          
          // The element that will display the calendar
          var calendar = element;

          var demoEvents = createDemoEvents();

          initExternalEvents(calendar);

          initCalendar(calendar, demoEvents, $rootScope.app.layout.isRTL);
        }
    }


    // global shared var to know what we are dragging
    var draggingEvent = null;


    /**
     * ExternalEvent object
     * @param jQuery Object elements Set of element as jQuery objects
     */
    function ExternalEvent(elements) {
        
        if (!elements) return;
        
        elements.each(function() {
            var $this = $(this);
            // create an Event Object (http://arshaw.com/fullcalendar/docs/event_data/Event_Object/)
            // it doesn't need to have a start or end
            var calendarEventObject = {
                title: $.trim($this.text()) // use the element's text as the event title
            };

            // store the Event Object in the DOM element so we can get to it later
            $this.data('calendarEventObject', calendarEventObject);

            // make the event draggable using jQuery UI
            $this.draggable({
                zIndex: 1070,
                revert: true, // will cause the event to go back to its
                revertDuration: 0  //  original position after the drag
            });

        });
    }

    /**
     * Invoke full calendar plugin and attach behavior
     * @param  jQuery [calElement] The calendar dom element wrapped into jQuery
     * @param  EventObject [events] An object with the event list to load when the calendar displays
     */
    function initCalendar(calElement, events, isRTL) {

        // check to remove elements from the list
        var removeAfterDrop = $('#remove-after-drop');

        calElement.fullCalendar({
            isRTL: isRTL,
            header: {
                left:   'prev,next today',
                center: 'title',
                right:  'month,agendaWeek,agendaDay'
            },
            buttonIcons: { // note the space at the beginning
                prev:    ' fa fa-caret-left',
                next:    ' fa fa-caret-right'
            },
            buttonText: {
                today: 'today',
                month: 'month',
                week:  'week',
                day:   'day'
            },
            editable: true,
            droppable: true, // this allows things to be dropped onto the calendar 
            drop: function(date, allDay) { // this function is called when something is dropped
                
                var $this = $(this),
                    // retrieve the dropped element's stored Event Object
                    originalEventObject = $this.data('calendarEventObject');

                // if something went wrong, abort
                if(!originalEventObject) return;

                // clone the object to avoid multiple events with reference to the same object
                var clonedEventObject = $.extend({}, originalEventObject);

                // assign the reported date
                clonedEventObject.start = date;
                clonedEventObject.allDay = allDay;
                clonedEventObject.backgroundColor = $this.css('background-color');
                clonedEventObject.borderColor = $this.css('border-color');

                // render the event on the calendar
                // the last `true` argument determines if the event "sticks" 
                // (http://arshaw.com/fullcalendar/docs/event_rendering/renderEvent/)
                calElement.fullCalendar('renderEvent', clonedEventObject, true);
                
                // if necessary remove the element from the list
                if(removeAfterDrop.is(':checked')) {
                  $this.remove();
                }
            },
            eventDragStart: function (event/*, js, ui*/) {
              draggingEvent = event;
            },
            // This array is the events sources
            events: events
        });
    }

    /**
     * Inits the external events panel
     * @param  jQuery [calElement] The calendar dom element wrapped into jQuery
     */
    function initExternalEvents(calElement){
      // Panel with the external events list
      var externalEvents = $('.external-events');

      // init the external events in the panel
      new ExternalEvent(externalEvents.children('div'));

      // External event color is danger-red by default
      var currColor = '#f6504d';
      // Color selector button
      var eventAddBtn = $('.external-event-add-btn');
      // New external event name input
      var eventNameInput = $('.external-event-name');
      // Color switchers
      var eventColorSelector = $('.external-event-color-selector .circle');

      // Trash events Droparea 
      $('.external-events-trash').droppable({
        accept:       '.fc-event',
        activeClass:  'active',
        hoverClass:   'hovered',
        tolerance:    'touch',
        drop: function(event, ui) {
          
          // You can use this function to send an ajax request
          // to remove the event from the repository
          
          if(draggingEvent) {
            var eid = draggingEvent.id || draggingEvent._id;
            // Remove the event
            calElement.fullCalendar('removeEvents', eid);
            // Remove the dom element
            ui.draggable.remove();
            // clear
            draggingEvent = null;
          }
        }
      });

      eventColorSelector.click(function(e) {
          e.preventDefault();
          var $this = $(this);

          // Save color
          currColor = $this.css('background-color');
          // De-select all and select the current one
          eventColorSelector.removeClass('selected');
          $this.addClass('selected');
      });

      eventAddBtn.click(function(e) {
          e.preventDefault();
          
          // Get event name from input
          var val = eventNameInput.val();
          // Dont allow empty values
          if ($.trim(val) === '') return;
          
          // Create new event element
          var newEvent = $('<div/>').css({
                              'background-color': currColor,
                              'border-color':     currColor,
                              'color':            '#fff'
                          })
                          .html(val);

          // Prepends to the external events list
          externalEvents.prepend(newEvent);
          // Initialize the new event element
          new ExternalEvent(newEvent);
          // Clear input
          eventNameInput.val('');
      });
    }

    /**
     * Creates an array of events to display in the first load of the calendar
     * Wrap into this function a request to a source to get via ajax the stored events
     * @return Array The array with the events
     */
    function createDemoEvents() {
      // Date for the calendar events (dummy data)
      var date = new Date();
      var d = date.getDate(),
          m = date.getMonth(),
          y = date.getFullYear();

      return  [
                {
                    title: 'All Day Event',
                    start: new Date(y, m, 1),
                    backgroundColor: '#f56954', //red 
                    borderColor: '#f56954' //red
                },
                {
                    title: 'Long Event',
                    start: new Date(y, m, d - 5),
                    end: new Date(y, m, d - 2),
                    backgroundColor: '#f39c12', //yellow
                    borderColor: '#f39c12' //yellow
                },
                {
                    title: 'Meeting',
                    start: new Date(y, m, d, 10, 30),
                    allDay: false,
                    backgroundColor: '#0073b7', //Blue
                    borderColor: '#0073b7' //Blue
                },
                {
                    title: 'Lunch',
                    start: new Date(y, m, d, 12, 0),
                    end: new Date(y, m, d, 14, 0),
                    allDay: false,
                    backgroundColor: '#00c0ef', //Info (aqua)
                    borderColor: '#00c0ef' //Info (aqua)
                },
                {
                    title: 'Birthday Party',
                    start: new Date(y, m, d + 1, 19, 0),
                    end: new Date(y, m, d + 1, 22, 30),
                    allDay: false,
                    backgroundColor: '#00a65a', //Success (green)
                    borderColor: '#00a65a' //Success (green)
                },
                {
                    title: 'Open Google',
                    start: new Date(y, m, 28),
                    end: new Date(y, m, 29),
                    url: '//google.com/',
                    backgroundColor: '#3c8dbc', //Primary (light-blue)
                    borderColor: '#3c8dbc' //Primary (light-blue)
                }
            ];
    }

})();

(function() {
    'use strict';

    angular
        .module('app.extras')
        .service('LoadTreeService', LoadTreeService);

    LoadTreeService.$inject = ['$resource'];
    function LoadTreeService($resource) {
        // Loads the list of files to populate the treeview
        return $resource('server/editor/filetree.json');
    }

})();
/**=========================================================
 * Module: code-editor.js
 * Codemirror code editor controller
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.extras')
        .controller('CodeEditorController', CodeEditorController);

    CodeEditorController.$inject = ['$rootScope', '$scope', '$http', '$ocLazyLoad', 'filetree'];
    function CodeEditorController($rootScope, $scope, $http, $ocLazyLoad, filetree) {
        var vm = this;

        layout();
        activate();

        ////////////////
        /*jshint -W106*/
        function layout() {
          // Setup the layout mode 
          $rootScope.app.useFullLayout = true;
          $rootScope.app.hiddenFooter = true;
          $rootScope.app.layout.isCollapsed = true;
          
          // Restore layout for demo
          $scope.$on('$destroy', function(){
              $rootScope.app.useFullLayout = false;
              $rootScope.app.hiddenFooter = false;
          });

        }

        function activate() {

          // Set the tree data into the scope
          vm.filetree_data = filetree;

          // Available themes
          vm.editorThemes = ['3024-day','3024-night','ambiance-mobile','ambiance','base16-dark','base16-light','blackboard','cobalt','eclipse','elegant','erlang-dark','lesser-dark','mbo','mdn-like','midnight','monokai','neat','neo','night','paraiso-dark','paraiso-light','pastel-on-dark','rubyblue','solarized','the-matrix','tomorrow-night-eighties','twilight','vibrant-ink','xq-dark','xq-light'];

          vm.editorOpts = {
            mode: 'javascript',
            lineNumbers: true,
            matchBrackets: true,
            theme: 'mbo',
            viewportMargin: Infinity
          };

          vm.refreshEditor = 0;

          // Load dinamically the stylesheet for the selected theme
          // You can use ozLazyLoad to load also the mode js based 
          // on the file extension that is loaded (see handle_filetree)
          vm.loadTheme = function() {
            var BASE = 'vendor/codemirror/theme/';
            $ocLazyLoad.load(BASE + vm.editorOpts.theme + '.css');
            vm.refreshEditor = !vm.refreshEditor;
          };
          // load default theme
          vm.loadTheme(vm.editorOpts.theme);
          // Add some initial text
          vm.code = '// Open a file from the left menu \n' +
                        '// It will be requested to the server and loaded into the editor\n' +
                        '// Also try adding a New File from the toolbar\n';


          // Tree

          var selectedBranch;
          vm.handle_filetree = function(branch) {
            
            selectedBranch = branch;

            var basePath = 'server/editor/';
            var isFolder = !!branch.children.length;

            console.log('You selected: ' + branch.label + ' - isFolder? ' + isFolder);

            if ( ! isFolder ) {

              $http
                .get( basePath + branch.path )
                .success(function(response){
                  
                  console.log('Loaded.. ' + branch.path);
                  // set the new code into the editor
                  vm.code = response;
                  
                  vm.editorOpts.mode = detectMode(branch.path);
                  console.log( 'Mode is: ' + vm.editorOpts.mode);

                });
            }
          };

          function detectMode(file) {
            var ext = file.split('.');
            ext = ext ? ext[ext.length - 1] : '';
            switch (ext) {
              case 'html':  return 'htmlmixed';
              case 'css':   return 'css';
              default:      return 'javascript';
            }
          }

          var tree;
          tree = vm.filetree = {};

          // Adds a new branch to the tree
          vm.new_filetree = function() {
            var b;
            b = tree.get_selected_branch();

            // if we select a leaf -> select the parent folder
            if ( b && b.children.length === 0 ) {
              b = tree.get_parent_branch(b);
            }
            
            return tree.add_branch(b, {
              'label': 'another.html',
              'path': 'source/another.html'
            });
          };
        }
    }
})();


(function() {
    'use strict';

    angular
        .module('app.extras')
        .controller('TodoController', TodoController);

    TodoController.$inject = ['$filter'];
    function TodoController($filter) {
        var vm = this;

        activate();

        ////////////////

        function activate() {
           vm.items = [
            {
              todo: {title: '-300', description: '买了个凳子 '},
              complete: true
            },
            {
              todo: {title: '-200', description: '购买显示器'},
              complete: false
            },
            {
              todo: {title: '+1000', description: '团队收入'},
              complete: false
            }
            ];
          
          vm.editingTodo = false;
          vm.todo = {};

          vm.addTodo = function() {
            
            if( vm.todo.title === '' ) return;
            if( !vm.todo.description ) vm.todo.description = '';
            
            if( vm.editingTodo ) {
              vm.todo = {};
              vm.editingTodo = false;
            }
            else {
              vm.items.push({todo: angular.copy(vm.todo), complete: false});
              vm.todo.title = '';
              vm.todo.description = '';
            }
          };
          
          vm.editTodo = function(index, $event) {
            $event.preventDefault();
            $event.stopPropagation();
            vm.todo = vm.items[index].todo;
            vm.editingTodo = true;
          };

          vm.removeTodo = function(index/*, $event*/) {
            vm.items.splice(index, 1);
          };
          
          vm.clearAll = function() {
            vm.items = [];
          };

          vm.totalCompleted = function() {
            return $filter('filter')(vm.items, function(item){
              return item.complete;
            }).length;
          };

          vm.totalPending = function() {
            return $filter('filter')(vm.items, function(item){
              return !item.complete;
            }).length;
          };

        }
    }
})();

/**=========================================================
 * Module: word-cloud.js
 * Controller for jqCloud
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.extras')
        .controller('WordCloudController', WordCloudController);

    function WordCloudController() {
        var vm = this;

        activate();

        ////////////////

        function activate() {

          vm.words = [
              {
                text: 'Lorem',
                weight: 13
                //link: 'http://themicon.co'
              }, {
                text: 'Ipsum',
                weight: 10.5
              }, {
                text: 'Dolor',
                weight: 9.4
              }, {
                text: 'Sit',
                weight: 8
              }, {
                text: 'Amet',
                weight: 6.2
              }, {
                text: 'Consectetur',
                weight: 5
              }, {
                text: 'Adipiscing',
                weight: 5
              }, {
                text: 'Sit',
                weight: 8
              }, {
                text: 'Amet',
                weight: 6.2
              }, {
                text: 'Consectetur',
                weight: 5
              }, {
                text: 'Adipiscing',
                weight: 5
              }
          ];
        }
    }
})();

/**=========================================================
 * Module: filestyle.js
 * Initializes the fielstyle plugin
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.forms')
        .directive('filestyle', filestyle);

    function filestyle () {
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element) {
          var options = element.data();
          
          // old usage support
          options.classInput = element.data('classinput') || options.classInput;
          
          element.filestyle(options);
        }
    }

})();

/**=========================================================
 * Module: form-imgcrop.js
 * Image crop controller
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.forms')
        .controller('ImageCropController', ImageCropController);

    ImageCropController.$inject = ['$scope'];
    function ImageCropController($scope) {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          vm.reset = function() {
            vm.myImage        = '';
            vm.myCroppedImage = '';
            vm.imgcropType    = 'square';
          };

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
        }
    }
})();

/**=========================================================
 * Module: FormValidationController
 * Input validation with UI Validate
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.forms')
        .controller('FormValidationController', FormValidationController);

    function FormValidationController() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          vm.notBlackListed = function(value) {
            var blacklist = ['some@mail.com','another@email.com'];
            return blacklist.indexOf(value) === -1;
          };

          vm.words = function(value) {
            return value && value.split(' ').length;
          };

          vm.submitted = false;
          vm.validateInput = function(name, type) {
            var input = vm.formValidate[name];
            return (input.$dirty || vm.submitted) && input.$error[type];
          };

          // Submit form
          vm.submitForm = function() {
            vm.submitted = true;
            if (vm.formValidate.$valid) {
              console.log('Submitted!!');
            } else {
              console.log('Not valid!!');
              return false;
            }
          };
        }
    }
})();

/**=========================================================
 * Module: form-wizard.js
 * Handles form wizard plugin and validation
 =========================================================*/


(function() {
    'use strict';

    angular
        .module('app.forms')
        .directive('formWizard', formWizard);

    formWizard.$inject = ['$parse'];
    function formWizard ($parse) {
        var directive = {
            link: link,
            restrict: 'A',
            scope: true
        };
        return directive;

        function link(scope, element, attrs) {
          var validate = $parse(attrs.validateSteps)(scope),
              wiz = new Wizard(attrs.steps, !!validate, element);
          scope.wizard = wiz.init();
        }

        function Wizard (quantity, validate, element) {
          
          var self = this;
          self.quantity = parseInt(quantity,10);
          self.validate = validate;
          self.element = element;
          
          self.init = function() {
            self.createsteps(self.quantity);
            self.go(1); // always start at fist step
            return self;
          };

          self.go = function(step) {
            
            if ( angular.isDefined(self.steps[step]) ) {

              if(self.validate && step !== 1) {
                var form = $(self.element),
                    group = form.children().children('div').get(step - 2);

                if (false === form.parsley().validate( group.id )) {
                  return false;
                }
              }

              self.cleanall();
              self.steps[step] = true;
            }
          };

          self.active = function(step) {
            return !!self.steps[step];
          };

          self.cleanall = function() {
            for(var i in self.steps){
              self.steps[i] = false;
            }
          };

          self.createsteps = function(q) {
            self.steps = [];
            for(var i = 1; i <= q; i++) self.steps[i] = false;
          };

        }
    }


})();

/**=========================================================
 * Module: form-xeditable.js
 * Form xEditable controller
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.forms')
        .controller('FormxEditableController', FormxEditableController);

    FormxEditableController.$inject = ['$scope', 'editableOptions', 'editableThemes', '$filter', '$http'];
    function FormxEditableController($scope, editableOptions, editableThemes, $filter, $http) {
        var vm = this;
        vm.title = 'Controller';

        activate();

        ////////////////

        function activate() {

          editableOptions.theme = 'bs3';

          editableThemes.bs3.inputClass = 'input-sm';
          editableThemes.bs3.buttonsClass = 'btn-sm';
          editableThemes.bs3.submitTpl = '<button type="submit" class="btn btn-success"><span class="fa fa-check"></span></button>';
          editableThemes.bs3.cancelTpl = '<button type="button" class="btn btn-default" ng-click="$form.$cancel()">'+
                                           '<span class="fa fa-times text-muted"></span>'+
                                         '</button>';

          vm.user = {
            email: 'email@example.com',
            tel: '123-45-67',
            number: 29,
            range: 10,
            url: 'http://example.com',
            search: 'blabla',
            color: '#6a4415',
            date: null,
            time: new Date(),
            datetime: null,
            month: null,
            week: null,
            desc: 'Sed pharetra euismod dolor, id feugiat ante volutpat eget. '
          };

          // Local select
          // ----------------------------------- 

          vm.user2 = {
            status: 2
          };

          vm.statuses = [
            {value: 1, text: 'status1'},
            {value: 2, text: 'status2'},
            {value: 3, text: 'status3'},
            {value: 4, text: 'status4'}
          ];

          vm.showStatus = function() {
            var selected = $filter('filter')(vm.statuses, {value: vm.user2.status});
            return (vm.user2.status && selected.length) ? selected[0].text : 'Not set';
          };

          // select remote
          // ----------------------------------- 

          vm.user3 = {
            id: 4,
            text: 'admin' // original value
          };

          vm.groups = [];

          vm.loadGroups = function() {
            return vm.groups.length ? null : $http.get('server/xeditable-groups.json').success(function(data) {
              vm.groups = data;
            });
          };

          $scope.$watch('user3.id', function(newVal, oldVal) {
            if (newVal !== oldVal) {
              var selected = $filter('filter')(vm.groups, {id: vm.user3.id});
              vm.user3.text = selected.length ? selected[0].text : null;
            }
          });

          // Typeahead
          // ----------------------------------- 

          vm.user4 = {
            state: 'Arizona'
          };

          vm.states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

        }
    }
})();


(function() {
    'use strict';

    angular
        .module('app.forms')
        .controller('FormDemoCtrl', FormDemoCtrl);

    FormDemoCtrl.$inject = ['$resource'];
    function FormDemoCtrl($resource) {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          // the following allow to request array $resource instead of object (default)
          var actions = {'get': {method: 'GET', isArray: true}};
          
          // Tags inputs
          // ----------------------------------- 
          var Cities = $resource('server/cities.json', {}, actions);

          Cities.get(function(data){

              vm.cities = data;

          });
          // for non ajax form just fill the scope variable
          // vm.cities = ['Amsterdam','Washington','Sydney','Beijing','Cairo'];

          // Slider demo values
          vm.slider1 = 5;
          vm.slider2 = 10;
          vm.slider3 = 15;
          vm.slider4 = 20;
          vm.slider5 = 25;
          vm.slider6 = 30;
          vm.slider7 = 10;
          vm.slider8 = [250,750];

          // Chosen data
          // ----------------------------------- 

          var States = $resource('server/chosen-states.json', {},  {'query':    {method:'GET', isArray:true} });

          vm.states = States.query();


          vm.alertSubmit = function(){
            alert('Form submitted!');
            return false;
          };

          // Angular wysiwyg 
          // ----------------------------------- 

          vm.wysiwygContent = '<p> Write something here.. </p>';

          // Text Angular (wysiwyg)
          // ----------------------------------- 
          
          vm.htmlContent = '<h2>Try me!</h2><p>textAngular is a super cool WYSIWYG Text Editor directive for AngularJS</p><p><b>Features:</b></p><ol><li>Automatic Seamless Two-Way-Binding</li><li style="color: blue;">Super Easy <b>Theming</b> Options</li><li>Simple Editor Instance Creation</li><li>Safely Parses Html for Custom Toolbar Icons</li><li>Doesn&apos;t Use an iFrame</li><li>Works with Firefox, Chrome, and IE8+</li></ol><p><a href="https://github.com/fraywing/textAngular">Source</a> </p>';

        }
    }
})();

/**=========================================================
 * Module: masked,js
 * Initializes the masked inputs
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.forms')
        .directive('masked', masked);

    function masked () {
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element) {
          var $elem = $(element);
          if($.fn.inputmask)
            $elem.inputmask();
        }
    }

})();

/**
 * AngularJS default filter with the following expression:
 * "person in people | filter: {name: $select.search, age: $select.search}"
 * performs a AND between 'name: $select.search' and 'age: $select.search'.
 * We want to perform a OR.
 */

(function() {
    'use strict';

    angular
        .module('app.forms')
        .filter('propsFilter', propsFilter);

    function propsFilter() {
        return filterFilter;

        ////////////////
        function filterFilter(items, props) {
          var out = [];

          if (angular.isArray(items)) {
            items.forEach(function(item) {
              var itemMatches = false;

              var keys = Object.keys(props);
              for (var i = 0; i < keys.length; i++) {
                var prop = keys[i];
                var text = props[prop].toLowerCase();
                if (item[prop].toString().toLowerCase().indexOf(text) !== -1) {
                  itemMatches = true;
                  break;
                }
              }

              if (itemMatches) {
                out.push(item);
              }
            });
          } else {
            // Let the output be the input untouched
            out = items;
          }

          return out;
        }
    }

})();
/**=========================================================
 * Module: tags-input.js
 * Initializes the tag inputs plugin
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.forms')
        .directive('tagsinput', tagsinput);

    tagsinput.$inject = ['$timeout'];
    function tagsinput ($timeout) {
        var directive = {
            link: link,
            require: 'ngModel',
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs, ngModel) {
          element.on('itemAdded itemRemoved', function(){
            // check if view value is not empty and is a string
            // and update the view from string to an array of tags
            if(ngModel.$viewValue && ngModel.$viewValue.split) {
              ngModel.$setViewValue( ngModel.$viewValue.split(',') );
              ngModel.$render();
            }
          });

          $timeout(function(){
            element.tagsinput();
          });
        }
    }

})();

/**=========================================================
 * Module: uiselect.js
 * uiSelect controller
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.forms')
        .controller('uiSelectController', uiSelectController);

    uiSelectController.$inject = ['$scope', '$http'];
    function uiSelectController($scope, $http) {
        /* jshint validthis:true */
        var vm = this;

        activate();

        ////////////////

        function activate() {

          vm.disabled = undefined;

          vm.enable = function() {
            vm.disabled = false;
          };

          vm.disable = function() {
            vm.disabled = true;
          };

          vm.clear = function() {
            vm.person.selected = undefined;
            vm.address.selected = undefined;
            vm.country.selected = undefined;
          };

          vm.person = {};
          vm.people = [
            { name: 'Adam',      email: 'adam@email.com',      age: 10 },
            { name: 'Amalie',    email: 'amalie@email.com',    age: 12 },
            { name: 'Wladimir',  email: 'wladimir@email.com',  age: 30 },
            { name: 'Samantha',  email: 'samantha@email.com',  age: 31 },
            { name: 'Estefanía', email: 'estefanía@email.com', age: 16 },
            { name: 'Natasha',   email: 'natasha@email.com',   age: 54 },
            { name: 'Nicole',    email: 'nicole@email.com',    age: 43 },
            { name: 'Adrian',    email: 'adrian@email.com',    age: 21 }
          ];

          vm.address = {};
          vm.refreshAddresses = function(address) {
            var params = {address: address, sensor: false};
            return $http.get(
              'http://maps.googleapis.com/maps/api/geocode/json',
              {params: params}
            ).then(function(response) {
              vm.addresses = response.data.results;
            });
          };

          vm.country = {};
          vm.countries = [ // Taken from https://gist.github.com/unceus/6501985
            {name: 'Afghanistan', code: 'AF'},
            {name: 'Åland Islands', code: 'AX'},
            {name: 'Albania', code: 'AL'},
            {name: 'Algeria', code: 'DZ'},
            {name: 'American Samoa', code: 'AS'},
            {name: 'Andorra', code: 'AD'},
            {name: 'Angola', code: 'AO'},
            {name: 'Anguilla', code: 'AI'},
            {name: 'Antarctica', code: 'AQ'},
            {name: 'Antigua and Barbuda', code: 'AG'},
            {name: 'Argentina', code: 'AR'},
            {name: 'Armenia', code: 'AM'},
            {name: 'Aruba', code: 'AW'},
            {name: 'Australia', code: 'AU'},
            {name: 'Austria', code: 'AT'},
            {name: 'Azerbaijan', code: 'AZ'},
            {name: 'Bahamas', code: 'BS'},
            {name: 'Bahrain', code: 'BH'},
            {name: 'Bangladesh', code: 'BD'},
            {name: 'Barbados', code: 'BB'},
            {name: 'Belarus', code: 'BY'},
            {name: 'Belgium', code: 'BE'},
            {name: 'Belize', code: 'BZ'},
            {name: 'Benin', code: 'BJ'},
            {name: 'Bermuda', code: 'BM'},
            {name: 'Bhutan', code: 'BT'},
            {name: 'Bolivia', code: 'BO'},
            {name: 'Bosnia and Herzegovina', code: 'BA'},
            {name: 'Botswana', code: 'BW'},
            {name: 'Bouvet Island', code: 'BV'},
            {name: 'Brazil', code: 'BR'},
            {name: 'British Indian Ocean Territory', code: 'IO'},
            {name: 'Brunei Darussalam', code: 'BN'},
            {name: 'Bulgaria', code: 'BG'},
            {name: 'Burkina Faso', code: 'BF'},
            {name: 'Burundi', code: 'BI'},
            {name: 'Cambodia', code: 'KH'},
            {name: 'Cameroon', code: 'CM'},
            {name: 'Canada', code: 'CA'},
            {name: 'Cape Verde', code: 'CV'},
            {name: 'Cayman Islands', code: 'KY'},
            {name: 'Central African Republic', code: 'CF'},
            {name: 'Chad', code: 'TD'},
            {name: 'Chile', code: 'CL'},
            {name: 'China', code: 'CN'},
            {name: 'Christmas Island', code: 'CX'},
            {name: 'Cocos (Keeling) Islands', code: 'CC'},
            {name: 'Colombia', code: 'CO'},
            {name: 'Comoros', code: 'KM'},
            {name: 'Congo', code: 'CG'},
            {name: 'Congo, The Democratic Republic of the', code: 'CD'},
            {name: 'Cook Islands', code: 'CK'},
            {name: 'Costa Rica', code: 'CR'},
            {name: 'Cote D\'Ivoire', code: 'CI'},
            {name: 'Croatia', code: 'HR'},
            {name: 'Cuba', code: 'CU'},
            {name: 'Cyprus', code: 'CY'},
            {name: 'Czech Republic', code: 'CZ'},
            {name: 'Denmark', code: 'DK'},
            {name: 'Djibouti', code: 'DJ'},
            {name: 'Dominica', code: 'DM'},
            {name: 'Dominican Republic', code: 'DO'},
            {name: 'Ecuador', code: 'EC'},
            {name: 'Egypt', code: 'EG'},
            {name: 'El Salvador', code: 'SV'},
            {name: 'Equatorial Guinea', code: 'GQ'},
            {name: 'Eritrea', code: 'ER'},
            {name: 'Estonia', code: 'EE'},
            {name: 'Ethiopia', code: 'ET'},
            {name: 'Falkland Islands (Malvinas)', code: 'FK'},
            {name: 'Faroe Islands', code: 'FO'},
            {name: 'Fiji', code: 'FJ'},
            {name: 'Finland', code: 'FI'},
            {name: 'France', code: 'FR'},
            {name: 'French Guiana', code: 'GF'},
            {name: 'French Polynesia', code: 'PF'},
            {name: 'French Southern Territories', code: 'TF'},
            {name: 'Gabon', code: 'GA'},
            {name: 'Gambia', code: 'GM'},
            {name: 'Georgia', code: 'GE'},
            {name: 'Germany', code: 'DE'},
            {name: 'Ghana', code: 'GH'},
            {name: 'Gibraltar', code: 'GI'},
            {name: 'Greece', code: 'GR'},
            {name: 'Greenland', code: 'GL'},
            {name: 'Grenada', code: 'GD'},
            {name: 'Guadeloupe', code: 'GP'},
            {name: 'Guam', code: 'GU'},
            {name: 'Guatemala', code: 'GT'},
            {name: 'Guernsey', code: 'GG'},
            {name: 'Guinea', code: 'GN'},
            {name: 'Guinea-Bissau', code: 'GW'},
            {name: 'Guyana', code: 'GY'},
            {name: 'Haiti', code: 'HT'},
            {name: 'Heard Island and Mcdonald Islands', code: 'HM'},
            {name: 'Holy See (Vatican City State)', code: 'VA'},
            {name: 'Honduras', code: 'HN'},
            {name: 'Hong Kong', code: 'HK'},
            {name: 'Hungary', code: 'HU'},
            {name: 'Iceland', code: 'IS'},
            {name: 'India', code: 'IN'},
            {name: 'Indonesia', code: 'ID'},
            {name: 'Iran, Islamic Republic Of', code: 'IR'},
            {name: 'Iraq', code: 'IQ'},
            {name: 'Ireland', code: 'IE'},
            {name: 'Isle of Man', code: 'IM'},
            {name: 'Israel', code: 'IL'},
            {name: 'Italy', code: 'IT'},
            {name: 'Jamaica', code: 'JM'},
            {name: 'Japan', code: 'JP'},
            {name: 'Jersey', code: 'JE'},
            {name: 'Jordan', code: 'JO'},
            {name: 'Kazakhstan', code: 'KZ'},
            {name: 'Kenya', code: 'KE'},
            {name: 'Kiribati', code: 'KI'},
            {name: 'Korea, Democratic People\'s Republic of', code: 'KP'},
            {name: 'Korea, Republic of', code: 'KR'},
            {name: 'Kuwait', code: 'KW'},
            {name: 'Kyrgyzstan', code: 'KG'},
            {name: 'Lao People\'s Democratic Republic', code: 'LA'},
            {name: 'Latvia', code: 'LV'},
            {name: 'Lebanon', code: 'LB'},
            {name: 'Lesotho', code: 'LS'},
            {name: 'Liberia', code: 'LR'},
            {name: 'Libyan Arab Jamahiriya', code: 'LY'},
            {name: 'Liechtenstein', code: 'LI'},
            {name: 'Lithuania', code: 'LT'},
            {name: 'Luxembourg', code: 'LU'},
            {name: 'Macao', code: 'MO'},
            {name: 'Macedonia, The Former Yugoslav Republic of', code: 'MK'},
            {name: 'Madagascar', code: 'MG'},
            {name: 'Malawi', code: 'MW'},
            {name: 'Malaysia', code: 'MY'},
            {name: 'Maldives', code: 'MV'},
            {name: 'Mali', code: 'ML'},
            {name: 'Malta', code: 'MT'},
            {name: 'Marshall Islands', code: 'MH'},
            {name: 'Martinique', code: 'MQ'},
            {name: 'Mauritania', code: 'MR'},
            {name: 'Mauritius', code: 'MU'},
            {name: 'Mayotte', code: 'YT'},
            {name: 'Mexico', code: 'MX'},
            {name: 'Micronesia, Federated States of', code: 'FM'},
            {name: 'Moldova, Republic of', code: 'MD'},
            {name: 'Monaco', code: 'MC'},
            {name: 'Mongolia', code: 'MN'},
            {name: 'Montserrat', code: 'MS'},
            {name: 'Morocco', code: 'MA'},
            {name: 'Mozambique', code: 'MZ'},
            {name: 'Myanmar', code: 'MM'},
            {name: 'Namibia', code: 'NA'},
            {name: 'Nauru', code: 'NR'},
            {name: 'Nepal', code: 'NP'},
            {name: 'Netherlands', code: 'NL'},
            {name: 'Netherlands Antilles', code: 'AN'},
            {name: 'New Caledonia', code: 'NC'},
            {name: 'New Zealand', code: 'NZ'},
            {name: 'Nicaragua', code: 'NI'},
            {name: 'Niger', code: 'NE'},
            {name: 'Nigeria', code: 'NG'},
            {name: 'Niue', code: 'NU'},
            {name: 'Norfolk Island', code: 'NF'},
            {name: 'Northern Mariana Islands', code: 'MP'},
            {name: 'Norway', code: 'NO'},
            {name: 'Oman', code: 'OM'},
            {name: 'Pakistan', code: 'PK'},
            {name: 'Palau', code: 'PW'},
            {name: 'Palestinian Territory, Occupied', code: 'PS'},
            {name: 'Panama', code: 'PA'},
            {name: 'Papua New Guinea', code: 'PG'},
            {name: 'Paraguay', code: 'PY'},
            {name: 'Peru', code: 'PE'},
            {name: 'Philippines', code: 'PH'},
            {name: 'Pitcairn', code: 'PN'},
            {name: 'Poland', code: 'PL'},
            {name: 'Portugal', code: 'PT'},
            {name: 'Puerto Rico', code: 'PR'},
            {name: 'Qatar', code: 'QA'},
            {name: 'Reunion', code: 'RE'},
            {name: 'Romania', code: 'RO'},
            {name: 'Russian Federation', code: 'RU'},
            {name: 'Rwanda', code: 'RW'},
            {name: 'Saint Helena', code: 'SH'},
            {name: 'Saint Kitts and Nevis', code: 'KN'},
            {name: 'Saint Lucia', code: 'LC'},
            {name: 'Saint Pierre and Miquelon', code: 'PM'},
            {name: 'Saint Vincent and the Grenadines', code: 'VC'},
            {name: 'Samoa', code: 'WS'},
            {name: 'San Marino', code: 'SM'},
            {name: 'Sao Tome and Principe', code: 'ST'},
            {name: 'Saudi Arabia', code: 'SA'},
            {name: 'Senegal', code: 'SN'},
            {name: 'Serbia and Montenegro', code: 'CS'},
            {name: 'Seychelles', code: 'SC'},
            {name: 'Sierra Leone', code: 'SL'},
            {name: 'Singapore', code: 'SG'},
            {name: 'Slovakia', code: 'SK'},
            {name: 'Slovenia', code: 'SI'},
            {name: 'Solomon Islands', code: 'SB'},
            {name: 'Somalia', code: 'SO'},
            {name: 'South Africa', code: 'ZA'},
            {name: 'South Georgia and the South Sandwich Islands', code: 'GS'},
            {name: 'Spain', code: 'ES'},
            {name: 'Sri Lanka', code: 'LK'},
            {name: 'Sudan', code: 'SD'},
            {name: 'Suriname', code: 'SR'},
            {name: 'Svalbard and Jan Mayen', code: 'SJ'},
            {name: 'Swaziland', code: 'SZ'},
            {name: 'Sweden', code: 'SE'},
            {name: 'Switzerland', code: 'CH'},
            {name: 'Syrian Arab Republic', code: 'SY'},
            {name: 'Taiwan, Province of China', code: 'TW'},
            {name: 'Tajikistan', code: 'TJ'},
            {name: 'Tanzania, United Republic of', code: 'TZ'},
            {name: 'Thailand', code: 'TH'},
            {name: 'Timor-Leste', code: 'TL'},
            {name: 'Togo', code: 'TG'},
            {name: 'Tokelau', code: 'TK'},
            {name: 'Tonga', code: 'TO'},
            {name: 'Trinidad and Tobago', code: 'TT'},
            {name: 'Tunisia', code: 'TN'},
            {name: 'Turkey', code: 'TR'},
            {name: 'Turkmenistan', code: 'TM'},
            {name: 'Turks and Caicos Islands', code: 'TC'},
            {name: 'Tuvalu', code: 'TV'},
            {name: 'Uganda', code: 'UG'},
            {name: 'Ukraine', code: 'UA'},
            {name: 'United Arab Emirates', code: 'AE'},
            {name: 'United Kingdom', code: 'GB'},
            {name: 'United States', code: 'US'},
            {name: 'United States Minor Outlying Islands', code: 'UM'},
            {name: 'Uruguay', code: 'UY'},
            {name: 'Uzbekistan', code: 'UZ'},
            {name: 'Vanuatu', code: 'VU'},
            {name: 'Venezuela', code: 'VE'},
            {name: 'Vietnam', code: 'VN'},
            {name: 'Virgin Islands, British', code: 'VG'},
            {name: 'Virgin Islands, U.S.', code: 'VI'},
            {name: 'Wallis and Futuna', code: 'WF'},
            {name: 'Western Sahara', code: 'EH'},
            {name: 'Yemen', code: 'YE'},
            {name: 'Zambia', code: 'ZM'},
            {name: 'Zimbabwe', code: 'ZW'}
          ];


          // Multiple
          vm.someGroupFn = function (item){

            if (item.name[0] >= 'A' && item.name[0] <= 'M')
                return 'From A - M';

            if (item.name[0] >= 'N' && item.name[0] <= 'Z')
                return 'From N - Z';

          };

          vm.counter = 0;
          vm.someFunction = function (item, model){
            vm.counter++;
            vm.eventResult = {item: item, model: model};
          };

          vm.availableColors = ['Red','Green','Blue','Yellow','Magenta','Maroon','Umbra','Turquoise'];

          vm.multipleDemo = {};
          vm.multipleDemo.colors = ['Blue','Red'];
          vm.multipleDemo.selectedPeople = [vm.people[5], vm.people[4]];
          vm.multipleDemo.selectedPeopleWithGroupBy = [vm.people[8], vm.people[6]];
          vm.multipleDemo.selectedPeopleSimple = ['samantha@email.com','wladimir@email.com'];
        }
    }

})();

/**=========================================================
 * Module: upload.js
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.forms')
        .controller('FileUploadController', FileUploadController);

    FileUploadController.$inject = ['FileUploader'];
    function FileUploadController(FileUploader) {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          var uploader = vm.uploader = new FileUploader({
              url: 'server/upload.php'
          });

          // FILTERS

          uploader.filters.push({
              name: 'customFilter',
              fn: function(/*item, options*/) {
                  return this.queue.length < 10;
              }
          });

          // CALLBACKS

          uploader.onWhenAddingFileFailed = function(item /*{File|FileLikeObject}*/, filter, options) {
              console.info('onWhenAddingFileFailed', item, filter, options);
          };
          uploader.onAfterAddingFile = function(fileItem) {
              console.info('onAfterAddingFile', fileItem);
          };
          uploader.onAfterAddingAll = function(addedFileItems) {
              console.info('onAfterAddingAll', addedFileItems);
          };
          uploader.onBeforeUploadItem = function(item) {
              console.info('onBeforeUploadItem', item);
          };
          uploader.onProgressItem = function(fileItem, progress) {
              console.info('onProgressItem', fileItem, progress);
          };
          uploader.onProgressAll = function(progress) {
              console.info('onProgressAll', progress);
          };
          uploader.onSuccessItem = function(fileItem, response, status, headers) {
              console.info('onSuccessItem', fileItem, response, status, headers);
          };
          uploader.onErrorItem = function(fileItem, response, status, headers) {
              console.info('onErrorItem', fileItem, response, status, headers);
          };
          uploader.onCancelItem = function(fileItem, response, status, headers) {
              console.info('onCancelItem', fileItem, response, status, headers);
          };
          uploader.onCompleteItem = function(fileItem, response, status, headers) {
              console.info('onCompleteItem', fileItem, response, status, headers);
          };
          uploader.onCompleteAll = function() {
              console.info('onCompleteAll');
          };

          console.info('uploader', uploader);
        }
    }
})();

/**=========================================================
 * Module: validate-form.js
 * Initializes the validation plugin Parsley
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.forms')
        .directive('validateForm', validateForm);

    function validateForm () {
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element) {
          var $elem = $(element);
          if($.fn.parsley)
            $elem.parsley();
        }
    }

})();

/**=========================================================
 * Module: skycons.js
 * Include any animated weather icon from Skycons
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.icons')
        .directive('skycon', skycon);

    function skycon () {

        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs) {
          var skycons = new Skycons({'color': (attrs.color || 'white')});

          element.html('<canvas width="' + attrs.width + '" height="' + attrs.height + '"></canvas>');

          skycons.add(element.children()[0], attrs.skycon);

          skycons.play();
        }
    }

})();

(function() {
    'use strict';

    angular
        .module('app.loadingbar')
        .config(loadingbarConfig)
        ;
    loadingbarConfig.$inject = ['cfpLoadingBarProvider'];
    function loadingbarConfig(cfpLoadingBarProvider){
      cfpLoadingBarProvider.includeBar = true;
      cfpLoadingBarProvider.includeSpinner = false;
      cfpLoadingBarProvider.latencyThreshold = 500;
      cfpLoadingBarProvider.parentSelector = '.wrapper > section';
    }
})();
(function() {
    'use strict';

    angular
        .module('app.loadingbar')
        .run(loadingbarRun)
        ;
    loadingbarRun.$inject = ['$rootScope', '$timeout', 'cfpLoadingBar'];
    function loadingbarRun($rootScope, $timeout, cfpLoadingBar){

      // Loading bar transition
      // ----------------------------------- 
      var thBar;
      $rootScope.$on('$stateChangeStart', function() {
          if($('.wrapper > section').length) // check if bar container exists
            thBar = $timeout(function() {
              cfpLoadingBar.start();
            }, 0); // sets a latency Threshold
      });
      $rootScope.$on('$stateChangeSuccess', function(event) {
          event.targetScope.$watch('$viewContentLoaded', function () {
            $timeout.cancel(thBar);
            cfpLoadingBar.complete();
          });
      });

    }

})();
/**=========================================================
 * Module: demo-pagination.js
 * Provides a simple demo for pagination
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.mailbox')
        .controller('MailboxController', MailboxController);

    function MailboxController() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          vm.folders = [
            {name: 'Inbox',   folder: 'inbox',   alert: 42, icon: 'fa-inbox' },
            {name: 'Starred', folder: 'starred', alert: 10, icon: 'fa-star' },
            {name: 'Sent',    folder: 'sent',    alert: 0,  icon: 'fa-paper-plane-o' },
            {name: 'Draft',   folder: 'draft',   alert: 5,  icon: 'fa-edit' },
            {name: 'Trash',   folder: 'trash',   alert: 0,  icon: 'fa-trash'}
          ];

          vm.labels = [
            {name: 'Red',     color: 'danger'},
            {name: 'Pink',    color: 'pink'},
            {name: 'Blue',    color: 'info'},
            {name: 'Yellow',  color: 'warning'}
          ];

          vm.mail = {
            cc: false,
            bcc: false
          };
          // Mailbox editr initial content
          vm.content = '<p>Type something..</p>';
        }
    }
})();

(function() {
    'use strict';

    angular
        .module('app.mailbox')
        .controller('MailFolderController', MailFolderController);

    MailFolderController.$inject = ['mails', '$stateParams'];
    function MailFolderController(mails, $stateParams) {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          
          vm.folder = {};
          // no filter for inbox
          vm.folder.folder = $stateParams.folder === 'inbox' ? '' : $stateParams.folder;

          mails.all().then(function(mails){
            vm.mails = mails;
          });
        }
    }
})();

// A RESTful factory for retrieving mails from json file

(function() {
    'use strict';

    angular
        .module('app.mailbox')
        .factory('mails', mails);

    mails.$inject = ['$http'];
    function mails($http) {
        var service = {
            all: all,
            get: get
        };
        return service;

        ////////////////
        
        function readMails() {
          var path = 'server/mails.json';
          return $http.get(path).then(function (resp) {
            return resp.data.mails;
          });
        }

        function all() {
          return readMails();
        }

        function get(id) {
          return readMails().then(function(mails){
            for (var i = 0; i < mails.length; i++) {
              if (+mails[i].id === +id) return mails[i];
            }
            return null;
          });
        }
    }
})();


(function() {
    'use strict';

    angular
        .module('app.mailbox')
        .controller('MailViewController', MailViewController);

    MailViewController.$inject = ['mails', '$stateParams'];
    function MailViewController(mails, $stateParams) {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          mails.get($stateParams.mid).then(function(mail){
            vm.mail = mail;
          });
        }
    }
})();

/**=========================================================
 * Module: navbar-search.js
 * Navbar search toggler * Auto dismiss on ESC key
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.navsearch')
        .directive('searchOpen', searchOpen)
        .directive('searchDismiss', searchDismiss);

    //
    // directives definition
    // 
    
    function searchOpen () {
        var directive = {
            controller: searchOpenController,
            restrict: 'A'
        };
        return directive;

    }

    function searchDismiss () {
        var directive = {
            controller: searchDismissController,
            restrict: 'A'
        };
        return directive;
        
    }

    //
    // Contrller definition
    // 
    
    searchOpenController.$inject = ['$scope', '$element', 'NavSearch'];
    function searchOpenController ($scope, $element, NavSearch) {
      $element
        .on('click', function (e) { e.stopPropagation(); })
        .on('click', NavSearch.toggle);
    }

    searchDismissController.$inject = ['$scope', '$element', 'NavSearch'];
    function searchDismissController ($scope, $element, NavSearch) {
      
      var inputSelector = '.navbar-form input[type="text"]';

      $(inputSelector)
        .on('click', function (e) { e.stopPropagation(); })
        .on('keyup', function(e) {
          if (e.keyCode === 27) // ESC
            NavSearch.dismiss();
        });
        
      // click anywhere closes the search
      $(document).on('click', NavSearch.dismiss);
      // dismissable options
      $element
        .on('click', function (e) { e.stopPropagation(); })
        .on('click', NavSearch.dismiss);
    }

})();


/**=========================================================
 * Module: nav-search.js
 * Services to share navbar search functions
 =========================================================*/
 
(function() {
    'use strict';

    angular
        .module('app.navsearch')
        .service('NavSearch', NavSearch);

    function NavSearch() {
        this.toggle = toggle;
        this.dismiss = dismiss;

        ////////////////

        var navbarFormSelector = 'form.navbar-form';

        function toggle() {
          var navbarForm = $(navbarFormSelector);

          navbarForm.toggleClass('open');
          
          var isOpen = navbarForm.hasClass('open');
          
          navbarForm.find('input')[isOpen ? 'focus' : 'blur']();
        }

        function dismiss() {
          $(navbarFormSelector)
            .removeClass('open') // Close control
            .find('input[type="text"]').blur() // remove focus
            .val('') // Empty input
            ;
        }        
    }
})();

/**=========================================================
 * Module: demo-notify.js
 * Provides a simple demo for notify
 =========================================================*/
(function() {
    'use strict';

    angular
        .module('app.notify')
        .controller('NotifyDemoCtrl', NotifyDemoCtrl);

    NotifyDemoCtrl.$inject = ['Notify', '$timeout'];
    function NotifyDemoCtrl(Notify, $timeout) {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          vm.msgHtml = '<em class="fa fa-check"></em> Message with icon..';

          vm.notifyMsg = 'Some messages here..';
          vm.notifyOpts = {
            status: 'danger',
            pos: 'bottom-center'
          };

          // Service usage example
          $timeout(function(){
            
            Notify.alert( 
                'This is a custom message from notify..', 
                {status: 'success'}
            );
          
          }, 500);
        }
    }
})();

/**=========================================================
 * Module: notify.js
 * Directive for notify plugin
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.notify')
        .directive('notify', notify);

    notify.$inject = ['$window', 'Notify'];
    function notify ($window, Notify) {

        var directive = {
            link: link,
            restrict: 'A',
            scope: {
              options: '=',
              message: '='
            }
        };
        return directive;

        function link(scope, element) {

          element.on('click', function (e) {
            e.preventDefault();
            Notify.alert(scope.message, scope.options);
          });
        }

    }

})();


/**=========================================================
 * Module: notify.js
 * Create a notifications that fade out automatically.
 * Based on Notify addon from UIKit (http://getuikit.com/docs/addons_notify.html)
 =========================================================*/

(function() {
    'use strict';
    angular
        .module('app.notify')
        .service('Notify', Notify);

    Notify.$inject = ['$timeout'];
    function Notify($timeout) {

        this.alert = notifyAlert;

        ////////////////

        function notifyAlert(msg, opts) {
            if ( msg ) {
                $timeout(function(){
                    $.notify(msg, opts || {});
                });
            }
        }
    }

})();

/**
 * Notify Addon definition as jQuery plugin
 * Adapted version to work with Bootstrap classes
 * More information http://getuikit.com/docs/addons_notify.html
 */
(function($){
    'use strict';
    var containers = {},
        messages   = {},
        notify     =  function(options){
            if ($.type(options) === 'string') {
                options = { message: options };
            }
            if (arguments[1]) {
                options = $.extend(options, $.type(arguments[1]) === 'string' ? {status:arguments[1]} : arguments[1]);
            }
            return (new Message(options)).show();
        },
        closeAll  = function(group, instantly){
            var id;
            if(group) {
                for(id in messages) { if(group===messages[id].group) messages[id].close(instantly); }
            } else {
                for(id in messages) { messages[id].close(instantly); }
            }
        };
    var Message = function(options){
        // var $this = this;
        this.options = $.extend({}, Message.defaults, options);
        this.uuid    = 'ID'+(new Date().getTime())+'RAND'+(Math.ceil(Math.random() * 100000));
        this.element = $([
            // @geedmo: alert-dismissable enables bs close icon
            '<div class="uk-notify-message alert-dismissable">',
                '<a class="close">&times;</a>',
                '<div>'+this.options.message+'</div>',
            '</div>'
        ].join('')).data('notifyMessage', this);
        // status
        if (this.options.status) {
            this.element.addClass('alert alert-'+this.options.status);
            this.currentstatus = this.options.status;
        }
        this.group = this.options.group;
        messages[this.uuid] = this;
        if(!containers[this.options.pos]) {
            containers[this.options.pos] = $('<div class="uk-notify uk-notify-'+this.options.pos+'"></div>').appendTo('body').on('click', '.uk-notify-message', function(){
                $(this).data('notifyMessage').close();
            });
        }
    };
    $.extend(Message.prototype, {
        uuid: false,
        element: false,
        timout: false,
        currentstatus: '',
        group: false,
        show: function() {
            if (this.element.is(':visible')) return;
            var $this = this;
            containers[this.options.pos].show().prepend(this.element);
            var marginbottom = parseInt(this.element.css('margin-bottom'), 10);
            this.element.css({'opacity':0, 'margin-top': -1*this.element.outerHeight(), 'margin-bottom':0}).animate({'opacity':1, 'margin-top': 0, 'margin-bottom':marginbottom}, function(){
                if ($this.options.timeout) {
                    var closefn = function(){ $this.close(); };
                    $this.timeout = setTimeout(closefn, $this.options.timeout);
                    $this.element.hover(
                        function() { clearTimeout($this.timeout); },
                        function() { $this.timeout = setTimeout(closefn, $this.options.timeout);  }
                    );
                }
            });
            return this;
        },
        close: function(instantly) {
            var $this    = this,
                finalize = function(){
                    $this.element.remove();
                    if(!containers[$this.options.pos].children().length) {
                        containers[$this.options.pos].hide();
                    }
                    delete messages[$this.uuid];
                };
            if(this.timeout) clearTimeout(this.timeout);
            if(instantly) {
                finalize();
            } else {
                this.element.animate({'opacity':0, 'margin-top': -1* this.element.outerHeight(), 'margin-bottom':0}, function(){
                    finalize();
                });
            }
        },
        content: function(html){
            var container = this.element.find('>div');
            if(!html) {
                return container.html();
            }
            container.html(html);
            return this;
        },
        status: function(status) {
            if(!status) {
                return this.currentstatus;
            }
            this.element.removeClass('alert alert-'+this.currentstatus).addClass('alert alert-'+status);
            this.currentstatus = status;
            return this;
        }
    });
    Message.defaults = {
        message: '',
        status: 'normal',
        timeout: 5000,
        group: null,
        pos: 'top-center'
    };
    
    $.notify          = notify;
    $.notify.message  = Message;
    $.notify.closeAll = closeAll;
    
    return notify;
}(jQuery));

/**=========================================================
 * Module: access-login.js
 * Demo for login api
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.pages')
        .controller('LoginFormController', LoginFormController);

    LoginFormController.$inject = ['$http', '$state'];
    function LoginFormController($http, $state) {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          // bind here all data from the form
          vm.account = {};
          // place the message if something goes wrong
          vm.authMsg = '';

          vm.login = function() {
            vm.authMsg = '';

            if(vm.loginForm.$valid) {

              $http
                .post('api/account/login', {email: vm.account.email, password: vm.account.password})
                .then(function(response) {
                  // assumes if ok, response is an object with some data, if not, a string with error
                  // customize according to your api
                  if ( !response.account ) {
                    vm.authMsg = 'Incorrect credentials.';
                  }else{
                    $state.go('app.dashboard');
                  }
                }, function() {
                  vm.authMsg = 'Server Request Error';
                });
            }
            else {
              // set as dirty if the user click directly to login so we show the validation messages
              /*jshint -W106*/
              vm.loginForm.account_email.$dirty = true;
              vm.loginForm.account_password.$dirty = true;
            }
          };
        }
    }
})();

/**=========================================================
 * Module: access-register.js
 * Demo for register account api
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.pages')
        .controller('RegisterFormController', RegisterFormController);

    RegisterFormController.$inject = ['$http', '$state'];
    function RegisterFormController($http, $state) {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          // bind here all data from the form
          vm.account = {};
          // place the message if something goes wrong
          vm.authMsg = '';
            
          vm.register = function() {
            vm.authMsg = '';

            if(vm.registerForm.$valid) {

              $http
                .post('api/account/register', {email: vm.account.email, password: vm.account.password})
                .then(function(response) {
                  // assumes if ok, response is an object with some data, if not, a string with error
                  // customize according to your api
                  if ( !response.account ) {
                    vm.authMsg = response;
                  }else{
                    $state.go('app.dashboard');
                  }
                }, function() {
                  vm.authMsg = 'Server Request Error';
                });
            }
            else {
              // set as dirty if the user click directly to login so we show the validation messages
              /*jshint -W106*/
              vm.registerForm.account_email.$dirty = true;
              vm.registerForm.account_password.$dirty = true;
              vm.registerForm.account_agreed.$dirty = true;
              
            }
          };
        }
    }
})();

/**=========================================================
 * Collapse panels * [panel-collapse]
 =========================================================*/
(function() {
    'use strict';

    angular
        .module('app.panels')
        .directive('panelCollapse', panelCollapse);

    function panelCollapse () {
        var directive = {
            controller: Controller,
            restrict: 'A',
            scope: false
        };
        return directive;
    }

    Controller.$inject = ['$scope', '$element', '$timeout', '$localStorage'];
    function Controller ($scope, $element, $timeout, $localStorage) {
      var storageKeyName = 'panelState';

      // Prepare the panel to be collapsible
      var $elem   = $($element),
          parent  = $elem.closest('.panel'), // find the first parent panel
          panelId = parent.attr('id');

      // Load the saved state if exists
      var currentState = loadPanelState( panelId );
      if ( typeof currentState !== 'undefined') {
        $timeout(function(){
            $scope[panelId] = currentState; },
          10);
      }

      // bind events to switch icons
      $element.bind('click', function(e) {
        e.preventDefault();
        savePanelState( panelId, !$scope[panelId] );

      });
  
      // Controller helpers
      function savePanelState(id, state) {
        if(!id) return false;
        var data = angular.fromJson($localStorage[storageKeyName]);
        if(!data) { data = {}; }
        data[id] = state;
        $localStorage[storageKeyName] = angular.toJson(data);
      }
      function loadPanelState(id) {
        if(!id) return false;
        var data = angular.fromJson($localStorage[storageKeyName]);
        if(data) {
          return data[id];
        }
      }
    }

})();

/**=========================================================
 * Dismiss panels * [panel-dismiss]
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.panels')
        .directive('panelDismiss', panelDismiss);

    function panelDismiss () {

        var directive = {
            controller: Controller,
            restrict: 'A'
        };
        return directive;

    }

    Controller.$inject = ['$scope', '$element', '$q', 'Utils'];
    function Controller ($scope, $element, $q, Utils) {
      var removeEvent   = 'panel-remove',
          removedEvent  = 'panel-removed';

      $element.on('click', function (e) {
        e.preventDefault();

        // find the first parent panel
        var parent = $(this).closest('.panel');

        removeElement();

        function removeElement() {
          var deferred = $q.defer();
          var promise = deferred.promise;
          
          // Communicate event destroying panel
          $scope.$emit(removeEvent, parent.attr('id'), deferred);
          promise.then(destroyMiddleware);
        }

        // Run the animation before destroy the panel
        function destroyMiddleware() {
          if(Utils.support.animation) {
            parent.animo({animation: 'bounceOut'}, destroyPanel);
          }
          else destroyPanel();
        }

        function destroyPanel() {

          var col = parent.parent();
          parent.remove();
          // remove the parent if it is a row and is empty and not a sortable (portlet)
          col
            .filter(function() {
            var el = $(this);
            return (el.is('[class*="col-"]:not(.sortable)') && el.children('*').length === 0);
          }).remove();

          // Communicate event destroyed panel
          $scope.$emit(removedEvent, parent.attr('id'));

        }

      });
    }
})();



/**=========================================================
 * Refresh panels
 * [panel-refresh] * [data-spinner="standard"]
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.panels')
        .directive('panelRefresh', panelRefresh);

    function panelRefresh () {
        var directive = {
            controller: Controller,
            restrict: 'A',
            scope: false
        };
        return directive;

    }

    Controller.$inject = ['$scope', '$element'];
    function Controller ($scope, $element) {
      var refreshEvent   = 'panel-refresh',
          whirlClass     = 'whirl',
          defaultSpinner = 'standard';

      // catch clicks to toggle panel refresh
      $element.on('click', function (e) {
        e.preventDefault();

        var $this   = $(this),
            panel   = $this.parents('.panel').eq(0),
            spinner = $this.data('spinner') || defaultSpinner
            ;

        // start showing the spinner
        panel.addClass(whirlClass + ' ' + spinner);

        // Emit event when refresh clicked
        $scope.$emit(refreshEvent, panel.attr('id'));

      });

      // listen to remove spinner
      $scope.$on('removeSpinner', removeSpinner);

      // method to clear the spinner when done
      function removeSpinner (ev, id) {
        if (!id) return;
        var newid = id.charAt(0) === '#' ? id : ('#'+id);
        angular
          .element(newid)
          .removeClass(whirlClass);
      }
    }
})();



/**=========================================================
 * Module panel-tools.js
 * Directive tools to control panels. 
 * Allows collapse, refresh and dismiss (remove)
 * Saves panel state in browser storage
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.panels')
        .directive('paneltool', paneltool);

    paneltool.$inject = ['$compile', '$timeout'];
    function paneltool ($compile, $timeout) {
        var directive = {
            link: link,
            restrict: 'E',
            scope: false
        };
        return directive;

        function link(scope, element, attrs) {

          var templates = {
            /* jshint multistr: true */
            collapse:'<a href="#" panel-collapse="" tooltip="Collapse Panel" ng-click="{{panelId}} = !{{panelId}}"> \
                        <em ng-show="{{panelId}}" class="fa fa-plus"></em> \
                        <em ng-show="!{{panelId}}" class="fa fa-minus"></em> \
                      </a>',
            dismiss: '<a href="#" panel-dismiss="" tooltip="Close Panel">\
                       <em class="fa fa-times"></em>\
                     </a>',
            refresh: '<a href="#" panel-refresh="" data-spinner="{{spinner}}" tooltip="Refresh Panel">\
                       <em class="fa fa-refresh"></em>\
                     </a>'
          };

          var tools = scope.panelTools || attrs;
      
          $timeout(function() {
            element.html(getTemplate(element, tools )).show();
            $compile(element.contents())(scope);
            
            element.addClass('pull-right');
          });
  
          function getTemplate( elem, attrs ){
            var temp = '';
            attrs = attrs || {};
            if(attrs.toolCollapse)
              temp += templates.collapse.replace(/{{panelId}}/g, (elem.parent().parent().attr('id')) );
            if(attrs.toolDismiss)
              temp += templates.dismiss;
            if(attrs.toolRefresh)
              temp += templates.refresh.replace(/{{spinner}}/g, attrs.toolRefresh);
            return temp;
          }
        }// link
    } 

})();

/**=========================================================
 * Module: demo-panels.js
 * Provides a simple demo for panel actions
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.panels')
        .controller('PanelsCtrl', PanelsCtrl);

    PanelsCtrl.$inject = ['$scope', '$timeout'];
    function PanelsCtrl($scope, $timeout) {

        activate();

        ////////////////

        function activate() {

          // PANEL COLLAPSE EVENTS
          // ----------------------------------- 

          // We can use panel id name for the boolean flag to [un]collapse the panel
          $scope.$watch('panelDemo1',function(newVal){
              
              console.log('panelDemo1 collapsed: ' + newVal);

          });


          // PANEL DISMISS EVENTS
          // ----------------------------------- 

          // Before remove panel
          $scope.$on('panel-remove', function(event, id, deferred){
            
            console.log('Panel #' + id + ' removing');
            
            // Here is obligatory to call the resolve() if we pretend to remove the panel finally
            // Not calling resolve() will NOT remove the panel
            // It's up to your app to decide if panel should be removed or not
            deferred.resolve();
          
          });

          // Panel removed ( only if above was resolved() )
          $scope.$on('panel-removed', function(event, id){

            console.log('Panel #' + id + ' removed');

          });


          // PANEL REFRESH EVENTS
          // ----------------------------------- 

          $scope.$on('panel-refresh', function(event, id) {
            var secs = 3;
            
            console.log('Refreshing during ' + secs +'s #'+id);

            $timeout(function(){
              // directive listen for to remove the spinner 
              // after we end up to perform own operations
              $scope.$broadcast('removeSpinner', id);
              
              console.log('Refreshed #' + id);

            }, 3000);

          });

          // PANELS VIA NG-REPEAT
          // ----------------------------------- 

          $scope.panels = [
            {
              id: 'panelRepeat1',
              title: 'Panel Title 1',
              body: 'Nulla eget lorem leo, sit amet elementum lorem. '
            },
            {
              id: 'panelRepeat2',
              title: 'Panel Title 2',
              body: 'Nulla eget lorem leo, sit amet elementum lorem. '
            },
            {
              id: 'panelRepeat3',
              title: 'Panel Title 3',
              body: 'Nulla eget lorem leo, sit amet elementum lorem. '
            }
          ];
        }

    } //PanelsCtrl

})();


/**=========================================================
 * Drag and drop any panel based on jQueryUI portlets
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.panels')
        .directive('portlet', portlet);

    portlet.$inject = ['$timeout', '$localStorage'];
    function portlet ($timeout, $localStorage) {
      var storageKeyName = 'portletState';

      return {
        restrict: 'A',
        link: link
      };

      /////////////

      function link(scope, element) {
          
        // not compatible with jquery sortable
        if(!$.fn.sortable) return;

        element.sortable({
          connectWith:          '[portlet]', // same like directive 
          items:                'div.panel',
          handle:               '.portlet-handler',
          opacity:              0.7,
          placeholder:          'portlet box-placeholder',
          cancel:               '.portlet-cancel',
          forcePlaceholderSize: true,
          iframeFix:            false,
          tolerance:            'pointer',
          helper:               'original',
          revert:               200,
          forceHelperSize:      true,
          update:               savePortletOrder,
          create:               loadPortletOrder
        });

      }


      function savePortletOrder(event/*, ui*/) {
        var self = event.target;
        var data = angular.fromJson($localStorage[storageKeyName]);
        
        if(!data) { data = {}; }

        data[self.id] = $(self).sortable('toArray');

        if(data) {
          $timeout(function() {
            $localStorage[storageKeyName] = angular.toJson(data);
          });
        }
      }

      function loadPortletOrder(event) {
        var self = event.target;
        var data = angular.fromJson($localStorage[storageKeyName]);

        if(data) {
          
          var porletId = self.id,
              panels   = data[porletId];

          if(panels) {
            var portlet = $('#'+porletId);
            
            $.each(panels, function(index, value) {
               $('#'+value).appendTo(portlet);
            });
          }

        }
      }

    }

})();
 
(function() {
    'use strict';

    angular
        .module('app.preloader')
        .directive('preloader', preloader);

    preloader.$inject = ['$animate', '$timeout', '$q'];
    function preloader ($animate, $timeout, $q) {

        var directive = {
            restrict: 'EAC',
            template: 
              '<div class="preloader-progress">' +
                  '<div class="preloader-progress-bar" ' +
                       'ng-style="{height: loadCounter + \'%\'}"></div>' +
              '</div>'
            ,
            link: link
        };
        return directive;

        ///////

        function link(scope, el) {

          scope.loadCounter = 0;

          var counter  = 0,
              timeout;

          // disables scrollbar
          angular.element('body').css('overflow', 'hidden');
          // ensure class is present for styling
          el.addClass('preloader');

          appReady().then(endCounter);

          timeout = $timeout(startCounter);

          ///////

          function startCounter() {

            var remaining = 100 - counter;
            counter = counter + (0.015 * Math.pow(1 - Math.sqrt(remaining), 2));

            scope.loadCounter = parseInt(counter, 10);

            timeout = $timeout(startCounter, 20);
          }

          function endCounter() {

            $timeout.cancel(timeout);

            scope.loadCounter = 100;

            $timeout(function(){
              // animate preloader hiding
              $animate.addClass(el, 'preloader-hidden');
              // retore scrollbar
              angular.element('body').css('overflow', '');
            }, 300);
          }

          function appReady() {
            var deferred = $q.defer();
            var viewsLoaded = 0;
            // if this doesn't sync with the real app ready
            // a custom event must be used instead
            var off = scope.$on('$viewContentLoaded', function () {
              viewsLoaded ++;
              // we know there are at least two views to be loaded 
              // before the app is ready (1-index.html 2-app*.html)
              if ( viewsLoaded === 2) {
                // with resolve this fires only once
                $timeout(function(){
                  deferred.resolve();
                }, 3000);

                off();
              }

            });

            return deferred.promise;
          }

        } //link
    }

})();
/**=========================================================
 * Module: angular-grid.js
 * Example for Angular Grid
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.tables')
        .controller('AngularGridController', AngularGridController);

    AngularGridController.$inject = ['$http'];
    function AngularGridController($http) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

            // Basic
            var columnDefs = [
                {displayName: 'Athlete', field: 'athlete', width: 150},
                {displayName: 'Age', field: 'age', width: 90},
                {displayName: 'Country', field: 'country', width: 120},
                {displayName: 'Year', field: 'year', width: 90},
                {displayName: 'Date', field: 'date', width: 110},
                {displayName: 'Sport', field: 'sport', width: 110},
                {displayName: 'Gold', field: 'gold', width: 100},
                {displayName: 'Silver', field: 'silver', width: 100},
                {displayName: 'Bronze', field: 'bronze', width: 100},
                {displayName: 'Total', field: 'total', width: 100}
            ];

            vm.gridOptions = {
                columnDefs: columnDefs,
                rowData: null,
                ready: function(api){
                  api.sizeColumnsToFit();
                }
            };

            // Filter Example
            var irishAthletes = ['John Joe Nevin','Katie Taylor','Paddy Barnes','Kenny Egan','Darren Sutherland', 'Margaret Thatcher', 'Tony Blair', 'Ronald Regan', 'Barack Obama'];

            var columnDefsFilter = [
                {displayName: 'Athlete', field: 'athlete', width: 150, filter: 'set',
                    filterParams: { cellHeight: 20, values: irishAthletes} },
                {displayName: 'Age', field: 'age', width: 90, filter: 'number'},
                {displayName: 'Country', field: 'country', width: 120},
                {displayName: 'Year', field: 'year', width: 90},
                {displayName: 'Date', field: 'date', width: 110},
                {displayName: 'Sport', field: 'sport', width: 110},
                {displayName: 'Gold', field: 'gold', width: 100, filter: 'number'},
                {displayName: 'Silver', field: 'silver', width: 100, filter: 'number'},
                {displayName: 'Bronze', field: 'bronze', width: 100, filter: 'number'},
                {displayName: 'Total', field: 'total', width: 100, filter: 'number'}
            ];

            vm.gridOptions1 = {
                columnDefs: columnDefsFilter,
                rowData: null,
                enableFilter: true,
                ready: function(api){
                  api.sizeColumnsToFit();
                }

            };


            // Pinning Example

            vm.gridOptions2 = {
                columnDefs: columnDefs,
                rowData: null,
                pinnedColumnCount: 2,
                ready: function(api){
                  api.sizeColumnsToFit();
                }
            };

            //-----------------------------
            // Get the data from SERVER
            //-----------------------------

            $http.get('server/ag-owinners.json')
                .then(function(res){
                    // basic
                    vm.gridOptions.rowData = res.data;
                    vm.gridOptions.api.onNewRows();
                    // filter
                    vm.gridOptions1.rowData = res.data;
                    vm.gridOptions1.api.onNewRows();
                    // pinning
                    vm.gridOptions2.rowData = res.data;
                    vm.gridOptions2.api.onNewRows();
                });

        }
    }
})();

/**=========================================================
 * Module: datatable,js
 * Angular Datatable controller
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.tables')
        .controller('DataTableController', DataTableController);

    DataTableController.$inject = ['$resource', 'DTOptionsBuilder', 'DTColumnDefBuilder'];
    function DataTableController($resource, DTOptionsBuilder, DTColumnDefBuilder) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

          // Ajax

          $resource('server/datatable.json').query().$promise.then(function(persons) {
             vm.persons = persons;
          });

          // Changing data

          vm.heroes = [{
              'id': 860,
              'firstName': 'Superman',
              'lastName': 'Yoda'
            }, {
              'id': 870,
              'firstName': 'Ace',
              'lastName': 'Ventura'
            }, {
              'id': 590,
              'firstName': 'Flash',
              'lastName': 'Gordon'
            }, {
              'id': 803,
              'firstName': 'Luke',
              'lastName': 'Skywalker'
            }
          ];

          vm.dtOptions = DTOptionsBuilder.newOptions().withPaginationType('full_numbers');
          vm.dtColumnDefs = [
              DTColumnDefBuilder.newColumnDef(0),
              DTColumnDefBuilder.newColumnDef(1),
              DTColumnDefBuilder.newColumnDef(2),
              DTColumnDefBuilder.newColumnDef(3).notSortable()
          ];
          vm.person2Add = _buildPerson2Add(1);
          vm.addPerson = addPerson;
          vm.modifyPerson = modifyPerson;
          vm.removePerson = removePerson;

          function _buildPerson2Add(id) {
              return {
                  id: id,
                  firstName: 'Foo' + id,
                  lastName: 'Bar' + id
              };
          }
          function addPerson() {
              vm.heroes.push(angular.copy(vm.person2Add));
              vm.person2Add = _buildPerson2Add(vm.person2Add.id + 1);
          }
          function modifyPerson(index) {
              vm.heroes.splice(index, 1, angular.copy(vm.person2Add));
              vm.person2Add = _buildPerson2Add(vm.person2Add.id + 1);
          }
          function removePerson(index) {
              vm.heroes.splice(index, 1);
          }

        }
    }
})();

/**=========================================================
 * Module: ng-grid.js
 * ngGrid demo
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.tables')
        .controller('NGGridController', NGGridController);

    NGGridController.$inject = ['$scope', '$http', '$timeout'];
    function NGGridController($scope, $http, $timeout) {

        activate();

        ////////////////

        function activate() {

          $scope.filterOptions = {
              filterText: '',
              useExternalFilter: true
          };
          $scope.totalServerItems = 0;
          $scope.pagingOptions = {
              pageSizes:   [250, 500, 1000],  // page size options
              pageSize:    250,              // default page size
              currentPage: 1                 // initial page
          };

          $scope.gridOptions = {
              data:             'myData',
              enablePaging:     true,
              showFooter:       true,
              rowHeight:        36,
              headerRowHeight:  38,
              totalServerItems: 'totalServerItems',
              pagingOptions:    $scope.pagingOptions,
              filterOptions:    $scope.filterOptions
          };

          $scope.setPagingData = function(data, page, pageSize){
              // calc for pager
              var pagedData = data.slice((page - 1) * pageSize, page * pageSize);
              // Store data from server
              $scope.myData = pagedData;
              // Update server side data length
              $scope.totalServerItems = data.length;

              if (!$scope.$$phase) {
                  $scope.$apply();
              }

          };

          $scope.getPagedDataAsync = function (pageSize, page, searchText) {
            var ngGridResourcePath = 'server/ng-grid-data.json';

            $timeout(function () {

                if (searchText) {
                    var ft = searchText.toLowerCase();
                    $http.get(ngGridResourcePath).success(function (largeLoad) {
                        var data = largeLoad.filter(function(item) {
                            return JSON.stringify(item).toLowerCase().indexOf(ft) !== -1;
                        });
                        $scope.setPagingData(data,page,pageSize);
                    });
                } else {
                    $http.get(ngGridResourcePath).success(function (largeLoad) {
                        $scope.setPagingData(largeLoad,page,pageSize);
                    });
                }
            }, 100);
          };


          $scope.$watch('pagingOptions', function (newVal, oldVal) {
              if (newVal !== oldVal && newVal.currentPage !== oldVal.currentPage) {
                $scope.getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage, $scope.filterOptions.filterText);
              }
          }, true);
          $scope.$watch('filterOptions', function (newVal, oldVal) {
              if (newVal !== oldVal) {
                $scope.getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage, $scope.filterOptions.filterText);
              }
          }, true);

          $scope.getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage);
        }
    }
})();

(function() {
    'use strict';

    angular
        .module('app.tables')
        .service('ngTableDataService', ngTableDataService);

    function ngTableDataService() {
        /* jshint validthis:true */
        var self = this;
        this.cache = null;
        this.getData = getData;

        ////////////////

        function getData($defer, params, api) {
          // if no cache, request data and filter
          if ( ! self.cache ) {
            if ( api ) {
              api.get(function(data){
                self.cache = data;
                filterdata($defer, params);
              });
            }
          }
          else {
            filterdata($defer, params);
          }
          
          function filterdata($defer, params) {
            var from = (params.page() - 1) * params.count();
            var to = params.page() * params.count();
            var filteredData = self.cache.result.slice(from, to);

            params.total(self.cache.total);
            $defer.resolve(filteredData);
          }

        }
    }
})();

/**=========================================================
 * Module: NGTableCtrl.js
 * Controller for ngTables
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.tables')
        .controller('NGTableCtrl', NGTableCtrl);
    /*jshint -W055 */
    NGTableCtrl.$inject = ['$filter', 'ngTableParams', '$resource', '$timeout', 'ngTableDataService'];
    function NGTableCtrl($filter, ngTableParams, $resource, $timeout, ngTableDataService) {
        var vm = this;
        vm.title = 'Controller';

        activate();

        ////////////////

        function activate() {
          var data = [
              {name: 'Moroni',  age: 50, money: -10   },
              {name: 'Tiancum', age: 43, money: 120   },
              {name: 'Jacob',   age: 27, money: 5.5   },
              {name: 'Nephi',   age: 29, money: -54   },
              {name: 'Enos',    age: 34, money: 110   },
              {name: 'Tiancum', age: 43, money: 1000  },
              {name: 'Jacob',   age: 27, money: -201  },
              {name: 'Nephi',   age: 29, money: 100   },
              {name: 'Enos',    age: 34, money: -52.5 },
              {name: 'Tiancum', age: 43, money: 52.1  },
              {name: 'Jacob',   age: 27, money: 110   },
              {name: 'Nephi',   age: 29, money: -55   },
              {name: 'Enos',    age: 34, money: 551   },
              {name: 'Tiancum', age: 43, money: -1410 },
              {name: 'Jacob',   age: 27, money: 410   },
              {name: 'Nephi',   age: 29, money: 100   },
              {name: 'Enos',    age: 34, money: -100  }
          ];

          // SELECT ROWS
          // ----------------------------------- 

          vm.data = data;

          vm.tableParams3 = new ngTableParams({
              page: 1,            // show first page
              count: 10          // count per page
          }, {
              total: data.length, // length of data
              getData: function ($defer, params) {
                  // use build-in angular filter
                  var filteredData = params.filter() ?
                          $filter('filter')(data, params.filter()) :
                          data;
                  var orderedData = params.sorting() ?
                          $filter('orderBy')(filteredData, params.orderBy()) :
                          data;

                  params.total(orderedData.length); // set total for recalc pagination
                  $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
              }
          });

          vm.changeSelection = function(user) {
            console.info(user);
          };

          // EXPORT CSV
          // -----------------------------------  

          var data4 = [{name: 'Moroni', age: 50},
              {name: 'Tiancum', age: 43},
              {name: 'Jacob', age: 27},
              {name: 'Nephi', age: 29},
              {name: 'Enos', age: 34},
              {name: 'Tiancum', age: 43},
              {name: 'Jacob', age: 27},
              {name: 'Nephi', age: 29},
              {name: 'Enos', age: 34},
              {name: 'Tiancum', age: 43},
              {name: 'Jacob', age: 27},
              {name: 'Nephi', age: 29},
              {name: 'Enos', age: 34},
              {name: 'Tiancum', age: 43},
              {name: 'Jacob', age: 27},
              {name: 'Nephi', age: 29},
              {name: 'Enos', age: 34}];

          vm.tableParams4 = new ngTableParams({
              page: 1,            // show first page
              count: 10           // count per page
          }, {
              total: data4.length, // length of data4
              getData: function($defer, params) {
                  $defer.resolve(data4.slice((params.page() - 1) * params.count(), params.page() * params.count()));
              }
          });


          // SORTING
          // ----------------------------------- 



          vm.tableParams = new ngTableParams({
              page: 1,            // show first page
              count: 10,          // count per page
              sorting: {
                  name: 'asc'     // initial sorting
              }
          }, {
              total: data.length, // length of data
              getData: function($defer, params) {
                  // use build-in angular filter
                  var orderedData = params.sorting() ?
                          $filter('orderBy')(data, params.orderBy()) :
                          data;
          
                  $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
              }
          });

          // FILTERS
          // ----------------------------------- 

          vm.tableParams2 = new ngTableParams({
              page: 1,            // show first page
              count: 10,          // count per page
              filter: {
                  name: '',
                  age: ''
                  // name: 'M'       // initial filter
              }
          }, {
              total: data.length, // length of data
              getData: function($defer, params) {
                  // use build-in angular filter
                  var orderedData = params.filter() ?
                         $filter('filter')(data, params.filter()) :
                         data;

                  vm.users = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count());

                  params.total(orderedData.length); // set total for recalc pagination
                  $defer.resolve(vm.users);
              }
          });

          // AJAX
          
          var Api = $resource('server/table-data.json');

          vm.tableParams5 = new ngTableParams({
              page: 1,            // show first page
              count: 10           // count per page
          }, {
              total: 0,           // length of data
              counts: [],         // hide page counts control
              getData: function($defer, params) {
                  
                  // Service using cache to avoid mutiple requests
                  ngTableDataService.getData( $defer, params, Api);
                  
                  /* direct ajax request to api (perform result pagination on the server)
                  Api.get(params.url(), function(data) {
                      $timeout(function() {
                          // update table params
                          params.total(data.total);
                          // set new data
                          $defer.resolve(data.result);
                      }, 500);
                  });
                  */
              }
          });
        }
    }
})();



/**=========================================================
 * Module: UIGridController
  =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.tables')
        .controller('UIGridController', UIGridController);

    UIGridController.$inject = ['uiGridConstants', '$http'];
    function UIGridController(uiGridConstants, $http) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

          // Basic example
          // ----------------------------------- 

          vm.gridOptions = {
            rowHeight: 34,
            data: [
              {
                  'name': 'Wilder Gonzales',
                  'gender': 'male',
                  'company': 'Geekko'
              },
              {
                  'name': 'Georgina Schultz',
                  'gender': 'female',
                  'company': 'Suretech'
              },
              {
                  'name': 'Carroll Buchanan',
                  'gender': 'male',
                  'company': 'Ecosys'
              },
              {
                  'name': 'Valarie Atkinson',
                  'gender': 'female',
                  'company': 'Hopeli'
              },
              {
                  'name': 'Schroeder Mathews',
                  'gender': 'male',
                  'company': 'Polarium'
              },
              {
                  'name': 'Ethel Price',
                  'gender': 'female',
                  'company': 'Enersol'
              },
              {
                  'name': 'Claudine Neal',
                  'gender': 'female',
                  'company': 'Sealoud'
              },
              {
                  'name': 'Beryl Rice',
                  'gender': 'female',
                  'company': 'Velity'
              },
              {
                  'name': 'Lynda Mendoza',
                  'gender': 'female',
                  'company': 'Dogspa'
              },
              {
                  'name': 'Sarah Massey',
                  'gender': 'female',
                  'company': 'Bisba'
              },
              {
                  'name': 'Robles Boyle',
                  'gender': 'male',
                  'company': 'Comtract'
              },
              {
                  'name': 'Evans Hickman',
                  'gender': 'male',
                  'company': 'Parleynet'
              },
              {
                  'name': 'Dawson Barber',
                  'gender': 'male',
                  'company': 'Dymi'
              },
              {
                  'name': 'Bruce Strong',
                  'gender': 'male',
                  'company': 'Xyqag'
              },
              {
                  'name': 'Nellie Whitfield',
                  'gender': 'female',
                  'company': 'Exospace'
              },
              {
                  'name': 'Jackson Macias',
                  'gender': 'male',
                  'company': 'Aquamate'
              },
              {
                  'name': 'Pena Pena',
                  'gender': 'male',
                  'company': 'Quarx'
              },
              {
                  'name': 'Lelia Gates',
                  'gender': 'female',
                  'company': 'Proxsoft'
              },
              {
                  'name': 'Letitia Vasquez',
                  'gender': 'female',
                  'company': 'Slumberia'
              },
              {
                  'name': 'Trevino Moreno',
                  'gender': 'male',
                  'company': 'Conjurica'
              }
            ]
          };
          
          // Complex example
          // ----------------------------------- 

          var data = [];
           
          vm.gridOptionsComplex = {
              showGridFooter: true,
              showColumnFooter: true,
              enableFiltering: true,
              columnDefs: [
                  { field: 'name', width: '13%' },
                  { field: 'address.street',aggregationType: uiGridConstants.aggregationTypes.sum, width: '13%' },
                  { field: 'age', aggregationType: uiGridConstants.aggregationTypes.avg, aggregationHideLabel: true, width: '13%' },
                  { name: 'ageMin', field: 'age', aggregationType: uiGridConstants.aggregationTypes.min, width: '13%', displayName: 'Age for min' },
                  { name: 'ageMax', field: 'age', aggregationType: uiGridConstants.aggregationTypes.max, width: '13%', displayName: 'Age for max' },
                  { name: 'customCellTemplate', 
                    field: 'age', 
                    width: '14%', 
                    footerCellTemplate: '<div class="ui-grid-cell-contents bg-info text-center">Custom HTML</div>' 
                  },
                  { name: 'registered', field: 'registered', width: '20%', cellFilter: 'date', footerCellFilter: 'date', aggregationType: uiGridConstants.aggregationTypes.max }
              ],
              data: data,
              onRegisterApi: function(gridApi) {
                vm.gridApi = gridApi;
              }
          };
           
          $http.get('server/uigrid-complex.json')
            .success(function(data) {
              data.forEach( function(row) {
                row.registered = Date.parse(row.registered);
              });
              vm.gridOptionsComplex.data = data;
            });


           vm.gridOptions1 = {
              paginationPageSizes: [25, 50, 75],
              paginationPageSize: 25,
              columnDefs: [
                { name: 'name' },
                { name: 'gender' },
                { name: 'company' }
              ]
            };
           
            $http.get('server/uigrid-100.json')
            .success(function (data) {
              vm.gridOptions1.data = data;
            });

        }
    }
})();

(function() {
    'use strict';

    angular
        .module('app.translate')
        .config(translateConfig)
        ;
    translateConfig.$inject = ['$translateProvider'];
    function translateConfig($translateProvider){
  
      $translateProvider.useStaticFilesLoader({
          prefix : 'app/i18n/',
          suffix : '.json'
      });
      $translateProvider.preferredLanguage('en');
      $translateProvider.useLocalStorage();
      $translateProvider.usePostCompiling(true);

    }
})();
(function() {
    'use strict';

    angular
        .module('app.translate')
        .run(translateRun)
        ;
    translateRun.$inject = ['$rootScope', '$translate'];
    
    function translateRun($rootScope, $translate){

      // Internationalization
      // ----------------------

      $rootScope.language = {
        // Handles language dropdown
        listIsOpen: false,
        // list of available languages
        available: {
          'en':       'English',
          'es_AR':    'Español'
        },
        // display always the current ui language
        init: function () {
          var proposedLanguage = $translate.proposedLanguage() || $translate.use();
          var preferredLanguage = $translate.preferredLanguage(); // we know we have set a preferred one in app.config
          $rootScope.language.selected = $rootScope.language.available[ (proposedLanguage || preferredLanguage) ];
        },
        set: function (localeId) {
          // Set the new idiom
          $translate.use(localeId);
          // save a reference for the current language
          $rootScope.language.selected = $rootScope.language.available[localeId];
          // finally toggle dropdown
          $rootScope.language.listIsOpen = ! $rootScope.language.listIsOpen;
        }
      };

      $rootScope.language.init();

    }
})();
/**=========================================================
 * Module: animate-enabled.js
 * Enable or disables ngAnimate for element with directive
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.utils')
        .directive('animateEnabled', animateEnabled);

    animateEnabled.$inject = ['$animate'];
    function animateEnabled ($animate) {
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs) {
          scope.$watch(function () {
            return scope.$eval(attrs.animateEnabled, scope);
          }, function (newValue) {
            $animate.enabled(!!newValue, element);
          });
        }
    }

})();

/**=========================================================
 * Module: browser.js
 * Browser detection
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.utils')
        .service('Browser', Browser);

    Browser.$inject = ['$window'];
    function Browser($window) {
      return $window.jQBrowser;
    }

})();

/**=========================================================
 * Module: clear-storage.js
 * Removes a key from the browser storage via element click
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.utils')
        .directive('resetKey', resetKey);

    resetKey.$inject = ['$state', '$localStorage'];
    function resetKey ($state, $localStorage) {
        var directive = {
            link: link,
            restrict: 'A',
            scope: {
              resetKey: '@'
            }
        };
        return directive;

        function link(scope, element) {
          element.on('click', function (e) {
              e.preventDefault();

              if(scope.resetKey) {
                delete $localStorage[scope.resetKey];
                $state.go($state.current, {}, {reload: true});
              }
              else {
                $.error('No storage key specified for reset.');
              }
          });
        }
    }

})();

/**=========================================================
 * Module: fullscreen.js
 * Toggle the fullscreen mode on/off
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.utils')
        .directive('toggleFullscreen', toggleFullscreen);

    toggleFullscreen.$inject = ['Browser'];
    function toggleFullscreen (Browser) {
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element) {
          // Not supported under IE
          if( Browser.msie ) {
            element.addClass('hide');
          }
          else {
            element.on('click', function (e) {
                e.preventDefault();

                if (screenfull.enabled) {
                  
                  screenfull.toggle();
                  
                  // Switch icon indicator
                  if(screenfull.isFullscreen)
                    $(this).children('em').removeClass('fa-expand').addClass('fa-compress');
                  else
                    $(this).children('em').removeClass('fa-compress').addClass('fa-expand');

                } else {
                  $.error('Fullscreen not enabled');
                }

            });
          }
        }
    }


})();

/**=========================================================
 * Module: load-css.js
 * Request and load into the current page a css file
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.utils')
        .directive('loadCss', loadCss);

    function loadCss () {
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs) {
          element.on('click', function (e) {
              if(element.is('a')) e.preventDefault();
              var uri = attrs.loadCss,
                  link;

              if(uri) {
                link = createLink(uri);
                if ( !link ) {
                  $.error('Error creating stylesheet link element.');
                }
              }
              else {
                $.error('No stylesheet location defined.');
              }

          });
        }
        
        function createLink(uri) {
          var linkId = 'autoloaded-stylesheet',
              oldLink = $('#'+linkId).attr('id', linkId + '-old');

          $('head').append($('<link/>').attr({
            'id':   linkId,
            'rel':  'stylesheet',
            'href': uri
          }));

          if( oldLink.length ) {
            oldLink.remove();
          }

          return $('#'+linkId);
        }
    }

})();

/**=========================================================
 * Module: now.js
 * Provides a simple way to display the current time formatted
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.utils')
        .directive('now', now);

    now.$inject = ['dateFilter', '$interval'];
    function now (dateFilter, $interval) {
        var directive = {
            link: link,
            restrict: 'EA'
        };
        return directive;

        function link(scope, element, attrs) {
          var format = attrs.format;

          function updateTime() {
            var dt = dateFilter(new Date(), format);
            element.text(dt);
          }

          updateTime();
          var intervalPromise = $interval(updateTime, 1000);

          scope.$on('$destroy', function(){
            $interval.cancel(intervalPromise);
          });

        }
    }

})();

/**=========================================================
 * Module: table-checkall.js
 * Tables check all checkbox
 =========================================================*/
(function() {
    'use strict';

    angular
        .module('app.utils')
        .directive('checkAll', checkAll);

    function checkAll () {
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element) {
          element.on('change', function() {
            var $this = $(this),
                index= $this.index() + 1,
                checkbox = $this.find('input[type="checkbox"]'),
                table = $this.parents('table');
            // Make sure to affect only the correct checkbox column
            table.find('tbody > tr > td:nth-child('+index+') input[type="checkbox"]')
              .prop('checked', checkbox[0].checked);

          });
        }
    }

})();

/**=========================================================
 * Module: trigger-resize.js
 * Triggers a window resize event from any element
 =========================================================*/
(function() {
    'use strict';

    angular
        .module('app.utils')
        .directive('triggerResize', triggerResize);

    triggerResize.$inject = ['$window', '$timeout'];
    function triggerResize ($window, $timeout) {
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element) {
          element.on('click', function(){
            $timeout(function(){
              $window.dispatchEvent(new Event('resize'));
            });
          });
        }
    }

})();

/**=========================================================
 * Module: utils.js
 * Utility library to use across the theme
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.utils')
        .service('Utils', Utils);

    Utils.$inject = ['$window', 'APP_MEDIAQUERY'];
    function Utils($window, APP_MEDIAQUERY) {

        var $html = angular.element('html'),
            $win  = angular.element($window),
            $body = angular.element('body');

        return {
          // DETECTION
          support: {
            transition: (function() {
                    var transitionEnd = (function() {

                        var element = document.body || document.documentElement,
                            transEndEventNames = {
                                WebkitTransition: 'webkitTransitionEnd',
                                MozTransition: 'transitionend',
                                OTransition: 'oTransitionEnd otransitionend',
                                transition: 'transitionend'
                            }, name;

                        for (name in transEndEventNames) {
                            if (element.style[name] !== undefined) return transEndEventNames[name];
                        }
                    }());

                    return transitionEnd && { end: transitionEnd };
                })(),
            animation: (function() {

                var animationEnd = (function() {

                    var element = document.body || document.documentElement,
                        animEndEventNames = {
                            WebkitAnimation: 'webkitAnimationEnd',
                            MozAnimation: 'animationend',
                            OAnimation: 'oAnimationEnd oanimationend',
                            animation: 'animationend'
                        }, name;

                    for (name in animEndEventNames) {
                        if (element.style[name] !== undefined) return animEndEventNames[name];
                    }
                }());

                return animationEnd && { end: animationEnd };
            })(),
            requestAnimationFrame: window.requestAnimationFrame ||
                                   window.webkitRequestAnimationFrame ||
                                   window.mozRequestAnimationFrame ||
                                   window.msRequestAnimationFrame ||
                                   window.oRequestAnimationFrame ||
                                   function(callback){ window.setTimeout(callback, 1000/60); },
            /*jshint -W069*/
            touch: (
                ('ontouchstart' in window && navigator.userAgent.toLowerCase().match(/mobile|tablet/)) ||
                (window.DocumentTouch && document instanceof window.DocumentTouch)  ||
                (window.navigator['msPointerEnabled'] && window.navigator['msMaxTouchPoints'] > 0) || //IE 10
                (window.navigator['pointerEnabled'] && window.navigator['maxTouchPoints'] > 0) || //IE >=11
                false
            ),
            mutationobserver: (window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver || null)
          },
          // UTILITIES
          isInView: function(element, options) {
              /*jshint -W106*/
              var $element = $(element);

              if (!$element.is(':visible')) {
                  return false;
              }

              var window_left = $win.scrollLeft(),
                  window_top  = $win.scrollTop(),
                  offset      = $element.offset(),
                  left        = offset.left,
                  top         = offset.top;

              options = $.extend({topoffset:0, leftoffset:0}, options);

              if (top + $element.height() >= window_top && top - options.topoffset <= window_top + $win.height() &&
                  left + $element.width() >= window_left && left - options.leftoffset <= window_left + $win.width()) {
                return true;
              } else {
                return false;
              }
          },
          
          langdirection: $html.attr('dir') === 'rtl' ? 'right' : 'left',

          isTouch: function () {
            return $html.hasClass('touch');
          },

          isSidebarCollapsed: function () {
            return $body.hasClass('aside-collapsed');
          },

          isSidebarToggled: function () {
            return $body.hasClass('aside-toggled');
          },

          isMobile: function () {
            return $win.width() < APP_MEDIAQUERY.tablet;
          }

        };
    }
})();

(function() {
    'use strict';

    angular
        .module('app.core', [
            'ngRoute',
            'ngAnimate',
            'ngStorage',
            'ngCookies',
            'ngResource',
            'pascalprecht.translate',
            'ui.bootstrap',
            'ui.router',
            'oc.lazyLoad',
            'cfp.loadingBar',
            'ngSanitize',
            'ngResource',
            'tmh.dynamicLocale',
            'ui.utils'
        ]);
})();
(function() {
    'use strict';

    angular
        .module('app.lazyload', []);
})();
(function() {
    'use strict';

    angular
        .module('app.routes', [
            'app.lazyload'
        ]);
})();
(function() {
    'use strict';

    angular
        .module('app.settings', []);
})();
(function() {
    'use strict';

    angular
        .module('app.sidebar', []);
})();
(function() {
	'use strict';
	angular.module('app.services', []);
	angular.module('app.filters',[]);
	angular.module('app.controllers', [
		'app.core',
		'app.routes',
		'app.sidebar',
		'app.translate',
		'app.settings',
		// 'ngMd5'
	]);
})();
/**=========================================================
 * Module: access-login.js
 * Demo for login api
 =========================================================*/

(function() {
  'use strict';

  angular
    .module('app.controllers')
    .controller('Application', Application)

  Application.$inject = ['$rootScope', '$scope', '$location', '$http', '$state', 'userResourceApi', 'USER_ROLES', 'AUTH_EVENTS', 'AuthService'];

  function Application($rootScope, $scope, $location, $http, $state, userResourceApi, USER_ROLES, AUTH_EVENTS, AuthService) {
    //--未登录--
    $scope.$on(AUTH_EVENTS.notAuthenticated, function() {
       console.log('未登录')
        $state.go('page.login');
      })
      //--权限不足--
    $scope.$on(AUTH_EVENTS.notAuthorized, function() {
      console.log('权限不足')
        $state.go('page.login');
      })
      //--系统出错--
    $scope.$on(AUTH_EVENTS.systemError, function() {
      console.log('系统出错')
      $state.go('page.login');
    })
    $scope.$on('$stateChangeStart', function(event, toState) {
      var authorizedRoles = toState.data.authorizedRoles;
      if (!AuthService.isAuthorized(authorizedRoles)) {
        event.preventDefault();
        if (AuthService.isAuthenticated()) {
          // user is not allowed
          $rootScope.$broadcast(AUTH_EVENTS.notAuthorized);
        } else {
          // user not login in
          $rootScope.$broadcast(AUTH_EVENTS.notAuthenticated);
        }
      }
    });
  }
})();
/**=========================================================
 * Module: access-login.js
 * Demo for login api
 =========================================================*/

(function() {
  'use strict';

  angular
    .module('app.controllers')
    .factory('AuthService', ['$http','$cookieStore', 'USER_ROLES', function($http,$cookieStore, USER_ROLES) {
      var authService = {};
      authService.login = function(credentials) {

      };

      authService.isAllowRole=function(roles){
        var role=$cookieStore.get('session').role;
        if(!!!role)
          return false;
        return roles.indexOf(role)!==-1;
      }
      authService.isAuthenticated = function() {
        return !!$cookieStore.get('session');
      };

      authService.isAuthorized = function(authorizedRoles) {
        if (!angular.isArray(authorizedRoles)) {
          authorizedRoles = [authorizedRoles];
        }
        if (authorizedRoles[0] == USER_ROLES.all)
          return true;
        return (authService.isAuthenticated()&&authService.isAllowRole(authorizedRoles));
      };
      return authService;
    }]);
})();
(function() {
    'use strict';

    angular
      .module('app.controllers')
      .controller('ApplyTeamController', ApplyTeamController)
    ApplyTeamController.$inject = ['$scope', '$timeout', '$state', 'schoolResourceApi', 'ngDialog', 'Upload']

    function ApplyTeamController($scope, $timeout, $state, schoolResourceApi, ngDialog, Upload) {
      var vm = this;
      $scope.authMsg = '';
      $scope.header = '';
      vm.file = null;
      vm.uploadFiles = function(file) {
        console.log(123456)
        if (file && !file.$error) {
          Upload.dataUrl(file,true).then(function(urls){
            vm.file=urls.slice((urls.indexOf('base64,')+7))
          });
        }
      }
      vm.validateInput = function(name, type) {
        var input = vm.formValidate[name];
        return (input.$dirty || vm.submitted) && input.$error[type];
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
      vm.replyTeam = function() {
        vm.submitted = true;
        console.log(vm.formValidate.$valid ,vm.file)
        if(!vm.file){
          vm.openTimed('<p class="text-center text-danger">请上传团队文件</p>')
        }
        else if (vm.formValidate.$valid) {
              schoolResourceApi.ApplyNewTeam({team_name:vm.title,excel_file:vm.file,material:vm.content}).$promise.then(function(data){
                switch(data.status){
                  case 440:$scope.header='<span class="text-danger">注册失败<span>';$scope.authMsg='团队名已存在';break;
                  case 423:$scope.header='<span class="text-danger">注册失败<span>';$scope.authMsg='个人信息未完善';$timeout(function(){$state.go(visitor.info)});break;
                  case 200:$scope.header='<span class="text-success">注册成功<span>';$scope.authMsg='申请成功，请耐心等候管理员审核，审核结果将会通过短信通知';break;
                  default:break;
                }
                ngDialog.open({
                  template: 'alert',
                  className: 'ngdialog-theme-default',
                  scope: $scope
                })
                $timeout(function(){vm.title='';vm.content='';},0,true)
              })
            } else {
              console.log('Not valid!!');
              return false;
            }
        }
      }
      })();
  (function() {
      'use strict';

      angular
          .module('app.controllers')
          .controller('BaseActivityController', BaseActivityController)
          .filter('NowTime', NowTime)
          .filter('removeTag', removeTag);
          function NowTime(){
            return function(input,params){
              return moment.unix(input).format('ll');
            }
          }
          function removeTag(){
            return function(input,params){
              input = input.replace(/<\/?[^>]*>/g,''); //去除HTML tag
                    input = input.replace(/[ | ]*\n/g,'\n'); //去除行尾空白
                    input = input.replace(/\n[\s| | ]*\r/g,'\n'); //去除多余空行
                    input =input.replace(/ /ig,'');
                    return input;
            }
          }
          BaseActivityController.$inject=['schoolResourceApi','adminResourceApi','APP_PARMAS']
          function BaseActivityController(schoolResourceApi,adminResourceApi,APP_PARMAS) {
          var vm = this;
          vm.activity={
            title:'',
            content:'',
            type:2
          }
          loadActivityList();
          function loadActivityList(){
            adminResourceApi.BaseActivityQuery({type:2},function(data){
            vm.activities=data.data;
            })
          }
          vm.downloadExcel=function(id){
            schoolResourceApi.DownloadActivityExcel({activity_id:id},function(data){
              window.open(data.file_url);
            })
          }
          vm.submitted = false;
          vm.validateInput = function(name, type) {
              var input = vm.formValidate[name];
              return (input.$dirty || vm.submitted) && input.$error[type];
          };
          vm.delecteActivity=function(index,activitie){
            ngDialog.openConfirm({
                template: 'confirm',
                className: 'ngdialog-theme-default'
              }).then(function (value) {
            schoolResourceApi.DelectInfo({notice_id:activitie.notice_id},function(data){
              console.log(data);
            })
            vm.activities.splice(index, 1);
            }, function (reason) {
            });
          }
          vm.addActivity=function(activity){
            vm.submitted = true;
            if (vm.formValidate.$valid) {
              schoolResourceApi.BaseInfoAdd(activity,function(data){
              vm.activity.title='';
              vm.activity.content='';
              vm.formValidate.title.$dirty=false;
              vm.formValidate.content.$dirty=false;
              vm.submitted = false;
              loadActivityList();
           })
              } else {
                console.log('Not valid!!');
                return false;
              }
          }
      }
  })();
(function() {
    'use strict';

    angular
        .module('app.controllers')
        .controller('BaseGameController', BaseGameController)
        .filter('NowTime', NowTime)
        .filter('removeTag', removeTag);
          function NowTime(){
            return function(input,params){
              return moment.unix(input).format('ll');
            }
          }
          function removeTag(){
            return function(input,params){
              input = input.replace(/<\/?[^>]*>/g,''); //去除HTML tag
                    input = input.replace(/[ | ]*\n/g,'\n'); //去除行尾空白
                    input = input.replace(/\n[\s| | ]*\r/g,'\n'); //去除多余空行
                    input =input.replace(/ /ig,'');
                    return input;
            }
          }
    BaseGameController.$inject=['schoolResourceApi','adminResourceApi','ngDialog','APP_PARMAS']
    function BaseGameController(schoolResourceApi,adminResourceApi,ngDialog,APP_PARMAS) {
        var vm = this;
        vm.game={
          title:'',
          content:'',
          type:1
        }
        vm.GameQuery=function(){
        adminResourceApi.BaseGameQuery({type:1},function(data){
          vm.games=data.data;
          })
        }
        vm.GameQuery();
        vm.submitted = false;
        vm.validateInput = function(name, type) {
            var input = vm.formValidate[name];
            return (input.$dirty || vm.submitted) && input.$error[type];
        };
        vm.delecteGame=function(index,game){
          ngDialog.openConfirm({
              template: 'confirm',
              className: 'ngdialog-theme-default'
            }).then(function (value) {
          schoolResourceApi.DelectInfo({notice_id:game.notice_id},function(data){
            console.log(data);
          })
          vm.games.splice(index, 1);
          }, function (reason) {
          });
        }
        vm.addGame=function(game){
          console.log(game)
          vm.submitted = true;
          if (vm.formValidate.$valid) {
            schoolResourceApi.BaseInfoAdd(game,function(data){
            vm.game.title='';
            vm.game.content='';
            vm.formValidate.title.$dirty=false;
            vm.formValidate.content.$dirty=false;
            vm.submitted = false;
            vm.GameQuery();
         })
            } else {
              console.log('Not valid!!');
              return false;
            }
        }
    }
})();
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
            schoolResourceApi.IntroduceContentQuery(function(data){
              $timeout(function(){vm.wysiwygContent=data?data.data.content:'';},0,true)
            })
            schoolResourceApi.IntroduceLogoQuery(function(data){
              $timeout(function(){vm.myCroppedImage= data?DataWrap(data.data.content):'';console.log(vm.myImage)},0,true)             
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
(function() {
    'use strict';

    angular
        .module('app.controllers')
        .controller('BaseNoticeController', BaseNoticeController)
        .filter('NowTime', NowTime)
          .filter('removeTag', removeTag);
          function NowTime(){
            return function(input,params){
              return moment.unix(input).format('ll');
            }
          }
          function removeTag(){
            return function(input,params){
              input = input.replace(/<\/?[^>]*>/g,''); //去除HTML tag
                    input = input.replace(/[ | ]*\n/g,'\n'); //去除行尾空白
                    input = input.replace(/\n[\s| | ]*\r/g,'\n'); //去除多余空行
                    input =input.replace(/ /ig,'');
                    return input;
            }
          }
    BaseNoticeController.$inject=['schoolResourceApi','adminResourceApi','APP_PARMAS']
    function BaseNoticeController(schoolResourceApi,adminResourceApi,APP_PARMAS) {
        var vm = this;
        vm.notice={
          title:'',
          content:'',
          type:0
        }
        NoticeQuery();
        function NoticeQuery(){
          adminResourceApi.BaseInfoQuery({type:0},function(data){
            vm.notices=data.data;
          })
        }
        vm.submitted = false;
        vm.validateInput = function(name, type) {
            var input = vm.formValidate[name];
            return (input.$dirty || vm.submitted) && input.$error[type];
        };
        vm.delecteNotice=function(index,notice){
          ngDialog.openConfirm({
              template: 'confirm',
              className: 'ngdialog-theme-default'
            }).then(function (value) {
          schoolResourceApi.DelectInfo({notice_id:notice.notice_id},function(data){
            console.log(data);
          })
          vm.notices.splice(index, 1);
          }, function (reason) {
          });
        }
        vm.addNotice=function(notice){
          console.log(notice)
          vm.submitted = true;
          if (vm.formValidate.$valid) {
            schoolResourceApi.BaseInfoAdd(notice,function(data){
            vm.notice.title='';
            vm.notice.content='';
            vm.formValidate.title.$dirty=false;
            vm.formValidate.content.$dirty=false;            
            vm.submitted = false;
            NoticeQuery();
         })
            } else {
              return false;
            }
        }
    }
})();
(function() {
  'use strict';

  angular
    .module('app.controllers')
    .controller('BasePostController', BasePostController)
    .filter('fromNow', fromNow)
    .filter('removeTag', removeTag);

  function fromNow() {
    return function(input, params) {
      return moment.unix(input).fromNow();
    }
  }

  function removeTag() {
    return function(input, params) {
      input = input.replace(/<\/?[^>]*>/g, ''); //去除HTML tag
      input = input.replace(/[ | ]*\n/g, '\n'); //去除行尾空白
      input = input.replace(/\n[\s| | ]*\r/g, '\n'); //去除多余空行
      input = input.replace(/ /ig, '');
      return input;
    }
  }
  BasePostController.$inject = ['$timeout', '$state', 'schoolResourceApi', 'adminResourceApi', 'paginationConfig', 'ngDialog']

  function BasePostController($timeout, $state, schoolResourceApi, adminResourceApi, paginationConfig, ngDialog) {
    var vm = this;
    vm.maxSize = 1; //最大页码数
    vm.bigCurrentPage = 1;
    vm.delectAllPosts = function() {
      $timeout(function() {}, 0, true);
      console.log(vm.posts)
    }
    getSectionList();

    function getSectionList() {
      adminResourceApi.ModuleQuery(function(data) {
        vm.sections = data.data;
        vm.section_id = data.data[0].section_id;
        vm.getPostList(vm.bigCurrentPage, paginationConfig.itemsPerPage)
      })
    }
    vm.delectPost = function(id) {
      ngDialog.openConfirm({
        template: 'confirm',
        className: 'ngdialog-theme-default'
      }).then(function(value) {
        schoolResourceApi.PostDelete({
          recruit_id: id
        }, function(data) {
          console.log(data);
          vm.openTimed('<h3 class="text-center text-success">删除成功</h3>');
          vm.getPostList(vm.bigCurrentPage, paginationConfig.itemsPerPage);
        })
      }, function(reason) {});
    }
    vm.openTimed = function(info) {
      var dialog = ngDialog.open({
        template: info,
        plain: true,
        closeByDocument: false,
        closeByEscape: false
      });
      setTimeout(function() {
        dialog.close();
      }, 2000);
    };
    vm.getPostList = function(num, size) {
      adminResourceApi.PostListQuery({
        section_id: vm.section_id,
        page_num: num,
        page_size: size
      }, function(data) {
        vm.posts = data.data.post_list;
        $timeout(function() {
          vm.bigTotalItems = data.data.recruit_count;
        }, 0, true)
      })
    }
    vm.pageChanged = function() {
      vm.getPostList(vm.bigCurrentPage, paginationConfig.itemsPerPage)
    };
    vm.maxSize = 5;
  }
})();
/**=========================================================
 * Module: demo-buttons.js
 * Provides a simple demo for buttons actions
 =========================================================*/

(function() {
  'use strict';

  angular
    .module('app.controllers')
    .controller('BaseTeamOrderController', BaseTeamOrderController)
    .filter('NowTime', NowTime)
    .filter('TypeFilter', TypeFilter)
    .filter('MoneyFilter', MoneyFilter);

  function NowTime() {
    return function(input, params) {
      return moment.unix(input).format('l');
    }
  }

  function MoneyFilter() {
    return function(input, params) {
      return input > 0 ? '+' + input : input;
    }
  }

  function TypeFilter() {
    return function(input, params) {
      return input == 0 ? '管理员加钱' : input == 1 ? '管理员扣钱' : '团队支出';
    }
  }

  BaseTeamOrderController.$inject = ['$scope', '$timeout', 'DTOptionsBuilder', 'DTColumnDefBuilder', 'schoolResourceApi', 'teamResourceApi', 'adminResourceApi'];

  function BaseTeamOrderController($scope, $timeout, DTOptionsBuilder, DTColumnDefBuilder, schoolResourceApi, teamResourceApi, adminResourceApi) {
    var vm = this;
    vm.dtOptions = DTOptionsBuilder.newOptions().withPaginationType('full_numbers').withDisplayLength(2);
    vm.dtColumnDefs = [
      DTColumnDefBuilder.newColumnDef(0),
      DTColumnDefBuilder.newColumnDef(1),
      DTColumnDefBuilder.newColumnDef(2).notSortable(),
      DTColumnDefBuilder.newColumnDef(3),
      DTColumnDefBuilder.newColumnDef(4).notSortable(),
      DTColumnDefBuilder.newColumnDef(5)
    ];
    vm.exportExcel = function() {
      adminResourceApi.TeamRecordExport({
        team_id: $scope.selectTeam,
        start_date: vm.starttimeunix,
        end_date: vm.endtimeunix
      }, function(data) {
        window.open(data.data.file_url);
      })
    }
    vm.checkChange = function() {
      vm.starttimeunix = new Date(new Date(vm.starttime).getFullYear() + '-' + (new Date(vm.starttime).getMonth() + 1)).getTime() / 1000,
        vm.endtimeunix = new Date(new Date(vm.endtime).getFullYear() + '-' + (new Date(vm.endtime).getMonth() + 1)).getTime() / 1000;
      if (!vm.starttimeunix || !vm.endtimeunix || vm.starttimeunix >= vm.endtimeunix)
        getRecordListWithOutTime($scope.selectTeam);
      else
        getRecordListWithTime($scope.selectTeam, vm.starttimeunix, vm.endtimeunix)
    }

    function getRecordListWithTime(id, start, end) {
      schoolResourceApi.TeamRecordList({
        team_id: id,
        start_date: start,
        end_date: end,
        page_num: 1,
        page_size: 1000
      }).$promise.then(function(data) {
        vm.records = data.data.record_list;
      })
    }

    function getRecordListWithOutTime(id) {
      schoolResourceApi.TeamRecordList({
        team_id: id,
        page_num: 1,
        page_size: 1000
      }).$promise.then(function(data) {
        vm.records = data.data.record_list;
      })
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
      $timeout(function() {
        vm.startopened = true;
      }, 0, true)
    };
    vm.endopen = function($event) {
      $event.preventDefault();
      $event.stopPropagation();
      $timeout(function() {
        vm.endopened = true;
      }, 0, true)
    };
    vm.openTimed = function(info) {
      var dialog = ngDialog.open({
        template: info,
        plain: true,
        closeByDocument: false,
        closeByEscape: false
      });
      setTimeout(function() {
        dialog.close();
      }, 2000);
    };
    vm.dateOptions = {
      formatYear: '@',
      startingDay: 1,
      navigationAsDateFormat: true
    };
    vm.initDate = new Date('2019-10-20');
    vm.format = 'yyyy年-MM月';
    $scope.$on('$stateChangeSuccess', function(event, toState, toParams) {
      console.log(toParams)
      $scope.selectTeam = toParams.id;
      getRecordListWithOutTime(toParams.id)
    });
  }
})();
(function() {
  'use strict';

  angular
    .module('app.controllers')
    .controller('CheckApplyThingController', CheckApplyThingController)
    .filter('NowTime', NowTime)
    function NowTime(){
      return function(input,params){
        return moment.unix(input).format('lll');
      }
    }
  CheckApplyThingController.$inject = ['$scope', 'ngDialog', 'schoolResourceApi'];

  function CheckApplyThingController($scope, ngDialog, schoolResourceApi) {
    var vm = this;
    $scope.passApply=function(id){
      ngDialog.openConfirm({
              template: 'passconfirm',
              className: 'ngdialog-theme-default'
            }).then(function (value) {
              schoolResourceApi.PassThingApply({room_apply_id:id},function(data){
                getList();
              })
            }, function (reason) {
      });
    }
    $scope.rejectApply=function(id){
      ngDialog.openConfirm({
              template: 'rejectconfirm',
              className: 'ngdialog-theme-default'
            }).then(function (value) {
              schoolResourceApi.RejectThingApply({room_apply_id:id}).$promise.then(function(){
                getList();
              })
            }, function (reason) {
      });
    }
    function getList(){
      schoolResourceApi.ApplyThingList(function(data){
        vm.applys=data.data;
      })
    }
    getList();
  }
})();
(function() {
    'use strict';

    angular
        .module('app.controllers')
        .controller('GoodListController', GoodListController);

    GoodListController.$inject = ['$scope','$filter', '$http','ngDialog', 'editableOptions', 'editableThemes','$q','schoolResourceApi','adminResourceApi','APP_PARMAS'];
    function GoodListController($scope,$filter, $http,ngDialog, editableOptions, editableThemes, $q,schoolResourceApi,adminResourceApi,APP_PARMAS) {
        var vm = this;
        vm.goods=[];
        getGoodList();
        function getGoodList(){
          schoolResourceApi.GoodsQuery(function(data){
            vm.goods=data.data;
            console.log(vm.goods)
          })
        }
        vm.checkName = function(data) {
            if (!data||data=='') {
              return '商品名不能为空';
            }
        };
        vm.checkPrice=function(data){
            var re= /^[0-9]+$/;
            if (!re.test(data)) {
              return '请输入正确价格';
            }
        }
        vm.saveGood = function(good,id) {
          console.log(good,id)
          if(!!id){
            return adminResourceApi.EditGoods({goods_price:good.goods_price,goods_name:good.goods_name,goods_id:id},function(data){
               getGoodList();
            })
          }
          else
            return adminResourceApi.AddGoods(good,function(data){
               getGoodList();
            })
        };
        vm.removeGood = function(index,good) {
            $scope.deletedGood=good.good_name;
            ngDialog.openConfirm({
              template: 'confirm',
              className: 'ngdialog-theme-default'
            }).then(function (value) {
              adminResourceApi.DelectGoods({goods_id:index});
              vm.goods.splice(index, 1);
            }, function (reason) {
            });
          };

          // add good
          vm.addGood = function() {
            vm.inserted = {
              goods_name: '',
              goods_price: ''
            };
            vm.goods.push(vm.inserted);
          };


          // editable table
          // ----------------------------------- 

          // filter goods to show
          vm.filterUser = function(user) {
            return user.isDeleted !== true;
          };

          // mark user as deleted
          vm.deleteUser = function(id) {
            var filtered = $filter('filter')(vm.goods, {id: id});
            if (filtered.length) {
              filtered[0].isDeleted = true;
            }
          };

          vm.cancel = function(rowform,id) {
            rowform.$cancel();
            if(!!!id)
            vm.goods.pop();
          };

        }
})();

/**=========================================================
 * Module: access-login.js
 * Demo for login api
 =========================================================*/

(function() {
  'use strict';

  angular
    .module('app.controllers')
    .config(cookiesConfig)
    .controller('LoginController', LoginController);
  cookiesConfig.$inject = ['$cookiesProvider'];
  LoginController.$inject = ['$rootScope', '$scope', '$cookies', '$http', '$state', 'userResourceApi', 'USER_ROLES', 'AUTH_EVENTS'];

  function cookiesConfig($cookiesProvider){
    var date = new Date();
    $cookiesProvider.expires = date.setMinutes(date.getMinutes() + 20);
}
  function LoginController($rootScope, $scope, $cookies, $http, $state, userResourceApi, USER_ROLES, AUTH_EVENTS) {
    var vm = this;
    activate();
    $scope.logout = function() {
      removeSession();
      userResourceApi.logout(function(data) {
        $state.go('page.login');
      })
    }

    function setSession(id, role) {
      removeSession();
      $cookies.putObject('session', {
        sessionID: id,
        role: role
      })
    }

    function removeSession() {
      $cookies.remove('session');
    }

    function activate() {
      // bind here all data from the form
      vm.account = {};
      // place the message if something goes wrong
      vm.authMsg = '';

      vm.login = function() {
        vm.authMsg = '';
        if (vm.loginForm.$valid) {
          userResourceApi.login({
            username: vm.account.username,
            password: vm.account.password
          }).$promise.then(function(data) {
            if (data.status == 200) {
              $rootScope.$broadcast(AUTH_EVENTS.loginSuccess, data.data.type);
              setSession(1, data.data.type.toString())
              switch (data.data.type.toString()) {
                case USER_ROLES.baseadmin:
                  $state.go('admin.secondAdmin');
                  break;
                case USER_ROLES.admin:
                  $state.go('admin.userManagement');
                  break;
                case USER_ROLES.teamleader:
                  $state.go('team.teamworker');
                  break;
                case USER_ROLES.teamworker:
                  $state.go('team.team');
                  break;
                case USER_ROLES.visitor:
                  $state.go('visitor.info');
                  break;
                default:
                  $state.go('page.login');
              }
            } else {
              vm.authMsg = '账号名或密码错误';
            }
          })
        } else {
          vm.loginForm.account_username.$dirty = true;
          vm.loginForm.account_password.$dirty = true;
        }
      };
    }
  }
})();
(function() {
    'use strict';

    angular
        .module('app.controllers')
        .controller('ModulesListController', ModulesListController);

    ModulesListController.$inject = ['$scope','$filter', '$http','ngDialog', 'editableOptions', 'editableThemes','$q','schoolResourceApi','adminResourceApi','APP_PARMAS'];
    function ModulesListController($scope,$filter, $http,ngDialog, editableOptions, editableThemes, $q,schoolResourceApi,adminResourceApi,APP_PARMAS) {
        var vm = this;
        vm.sections=[];
        getModulesList();
        function getModulesList(){
          adminResourceApi.ModuleQuery(function(data){
            vm.sections=data.data;
            console.log(vm.sections)
          })
        }
        vm.checkName = function(data) {
            if (!data||data=='') {
              return '模块名不能为空';
            }
        };
        vm.saveModule = function(section,id) {
          console.log(section,id)
          if(!!id){
            return schoolResourceApi.ModuleEdit({section_id:id,name:section.name},function(data){
               getModulesList();
            })
          }
          else
            return schoolResourceApi.ModuleAdd(section,function(data){
               getModulesList();
            })
        };
        vm.removeModule= function(index,section) {
            ngDialog.openConfirm({
              template: 'confirm',
              className: 'ngdialog-theme-default',
              data:{name:section.section_name},
              controller:['$scope',function(scope){
                scope.deletedModule=scope.ngDialogData.name;
              }]
            }).then(function (value) {
              schoolResourceApi.ModuleDelect({sections_id:index});
               getModulesList();
            }, function (reason) {
            });
          };

          // add section
          vm.addModule = function() {
            vm.inserted = {
              name: ''
            };
            vm.sections.push(vm.inserted);
          };


          // editable table
          // ----------------------------------- 

          // filter sections to show
          vm.filterUser = function(user) {
            return user.isDeleted !== true;
          };

          // mark user as deleted
          vm.deleteUser = function(id) {
            var filtered = $filter('filter')(vm.sections, {id: id});
            if (filtered.length) {
              filtered[0].isDeleted = true;
            }
          };

          vm.cancel = function(rowform,id) {
            rowform.$cancel();
            if(!!!id)
            vm.sections.pop();
          };

        }
})();

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

(function() {
  'use strict';

  angular
    .module('app.controllers')
    .controller('PostsViewController', PostsViewController)
    .filter('fromNow', fromNow)

  function fromNow(){
    return function(input,params){
      return moment.unix(input).fromNow();
    }
  }
  PostsViewController.$inject = ['$scope', '$timeout', '$state', 'schoolResourceApi', 'ngDialog']

  function PostsViewController($scope, $timeout, $state, schoolResourceApi, ngDialog) {
    var vm = $scope;
    vm.comments=[];
    vm.submitted = false;
    vm.notMore=false;
    vm.validateInput = function(name, type) {
      var input = vm.replyFrom[name];
      return (input.$dirty || vm.submitted) && input.$error[type];
    };
    vm.openTimed = function(info) {
      var dialog = ngDialog.open({
        template: info,
        plain: true,
        closeByDocument: false,
        closeByEscape: false
      });
      setTimeout(function() {
        dialog.close();
      }, 2000);
    };
    vm.replyTo=function(){
      vm.submitted = true;
      if (vm.replyFrom.$valid) {
        schoolResourceApi.PostRepplyQuery({post_id:vm.post_id,content:vm.reply}).$promise.then(function(data){
          vm.openTimed('<h3 class="text-center text-success">回复成功</h3>');
        })
      }
      else{
          vm.openTimed('<h3 class="text-center">请填写回复内容</h3>');
      }
      console.log(vm.reply)
    }
    function getDetail(id) {
      vm.post_id=id;
      schoolResourceApi.GetPostDetail({
        post_id: id
      }, function(data) {
        vm.recruit = data.data;
      })
    }
    vm.getMoreComment=function(id){
      schoolResourceApi.RepplyQuery({post_id:vm.post_id,is_refresh:0,reply_count:5,last_reply_id:id},function(data){
        if(data.data.length<5)
          vm.notMore=true;
        $timeout(function(){vm.comments=vm.comments.concat(data.data)},0,true);
      })
    }
    vm.getCommentList=function(id){
      schoolResourceApi.RepplyQuery({post_id:id,is_refresh:1,reply_count:5},function(data){
        if(data.data.length<5)
          vm.notMore=true;
        $timeout(function(){vm.comments=vm.comments.concat(data.data)},0,true);
      })
    }
    vm.$on('$stateChangeSuccess', function(event, toState, toParams) {
      getDetail(toParams.id);
      vm.getCommentList(toParams.id)
    });
  }
})();

(function() {
    'use strict';

    angular
        .module('app.controllers')
        .controller('RegisterController', RegisterController);

    RegisterController.$inject = ['$scope','$http', '$state','$timeout','md5','schoolResourceApi'];
    function RegisterController($scope,$http, $state,$timeout,md5,schoolResourceApi) {
        var vm = this,timer;
          // bind here all data from the form
          vm.account = {};
          vm.submited=false;
          vm.checkboxShow=true;
          vm.checkCode='';
          vm.code='';
          vm.account.phone='';
          vm.register={password:'',account_password_confirm:''};
          vm.time=0;
          // place the message if something goes wrong
          vm.authMsg = '';
          vm.getCheckCode=function(){
            vm.authMsg='';
            if(vm.account.phone!=''){
              vm.checkboxShow=false;
              if(vm.time<=0){
                vm.time=60;
                schoolResourceApi.SendCode({mobile:vm.account.phone},function(data){
                  console.log(data.status,typeof data.status)
                  $timeout(function(){
                  switch(data.status){
                  case 420:vm.authMsg ='该帐号已注册';break;
                  case 431:vm.authMsg ='验证码错误';break;
                  case 420:vm.authMsg='手机号不存在';break;
                  default:break;
                 }
                 console.log(vm.authMsg)
                 vm.registerForm.account_phone.$dirty = false;
                },0,true)
                })
                timer=setInterval(function(){if(vm.time!=0)$timeout(function(){vm.time--;},0,true);else{$timeout(function(){vm.checkboxShow=true;clearInterval(timer)},0,true);}},1000)
              }
            }          
            else
              document.querySelector('input[name=account_phone]').focus();
          }
          vm.register = function() {
            vm.authMsg = '';

            if(vm.registerForm.$valid) {
              schoolResourceApi.Register({mobile:vm.account.phone,verify_code:vm.checkCode,password:vm.register.password}).$promise.then(function(data){
                console.log(data)
                $timeout(function(){
                  switch(data.status){
                  case 420:vm.authMsg ='该帐号已注册';break;
                  case 431:vm.authMsg ='验证码错误';break;
                  case 420:vm.authMsg='手机号不存在';break;
                  case 200:vm.successMsg='注册成功';$timeout(function(){$state.go('page.login');},3000,true);break;
                  default:break;
                 }
                },0,true)
                
              })
            }
            else {
              // set as dirty if the user click directly to login so we show the validation messages
              /*jshint -W106*/
              vm.registerForm.account_phone.$dirty = true;
              vm.registerForm.account_password.$dirty = true;
              vm.registerForm.account_agreed.$dirty = true;
              
            }
          };
    }
})();

/**=========================================================
 * Module: demo-buttons.js
 * Provides a simple demo for buttons actions
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.controllers')
        .controller('secondadminController', secondadminCtrlFn);

    secondadminCtrlFn.$inject = ['$filter', '$http','ngDialog', 'editableOptions', 'editableThemes','$q','schoolResourceApi','adminResourceApi','APP_PARMAS'];
    function secondadminCtrlFn($filter, $http,ngDialog, editableOptions, editableThemes, $q,schoolResourceApi,adminResourceApi,APP_PARMAS) {
        var vm = this;
        activate();
        function getAdminList(){
          adminResourceApi.AdminList(function(data){
            vm.users=data.data;
          })
        }
        function activate() {
          
          getAdminList();
          vm.loadColleges = function(id) {
            return vm.colleges? null : schoolResourceApi.CollegeQuery(function(data){
                   vm.colleges=data.data;
                   vm.loadMajors(data.data[0].school_id);
            })
          };
          vm.loadMajors=function(id){
            return id? schoolResourceApi.MajorQuery({school_id:id},function(data){
                   vm.majors=data.data;
            }):null;
          }
          vm.showColleges = function(user) {
            if(user.school_id && vm.colleges.length) {
              var selected = $filter('filter')(vm.colleges, {id: user.school_name});
              return selected.length ? selected[0].text : '暂无';
            } else {
              return user.school_name || '暂无';
            }
          };
          vm.showMajors = function(user) {
            if(user.major_id && vm.Majors.length) {
              var selected = $filter('filter')(vm.Majors, {id: user.major_name});
              return selected.length ? selected[0].text : '暂无';
            } else {
              return user.major_name || '暂无';
            }
          };

          vm.checkLoginname = function(data,name) {
            if (!data||data.length<6) {
              return '登录账号必须超过六位';
            }
            for(var i=0,len=vm.users.length-1;i<len;i++){
              if(data==vm.users[0].login_name)
                return '该用户名已存在';
            }
          };
          vm.checkName = function(data) {
            if (!data||data=='') {
              return '姓名不能为空';
            }
          };
          vm.checkPhone=function(data){
            var re= /^(13[0-9]{9})|(15[0-9]{9})|(17[0-9]{9})|(18[0-9]{9})$/;
            if (!data||data.length!==11||!re.test(data)) {
              return '请输入正确的手机号码';
            }
          }
          vm.checkID=function(data){
            if (!data) {
              return '请选择';
            }
          }
          vm.saveUser = function(user) {
            console.log(user)
            return adminResourceApi.AddAdmin({
              login_name:user.login_name,
              name:user.name,
              school_id:user.school_name,
              major_id:user.major_name,
              phone:user.phone,
              password:APP_PARMAS.DefaultPassword
            },function(data){
               getAdminList();
            })
          };


          // remove user
          vm.removeUser = function(index,id) {
            ngDialog.openConfirm({
              template: 'confirm',
              className: 'ngdialog-theme-default'
            }).then(function (value) {
              adminResourceApi.RemoveAdmin({user_id:id});
              vm.users.splice(index, 1);
            }, function (reason) {
            });
          };

          // add user
          vm.addUser = function() {
            vm.inserted = {
              login_name: '',
              name: '',
              school_name: '',
              major_name:'',
              phone:'',
              password:APP_PARMAS.DefaultPassword
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
            var filtered = $filter('filter')(vm.users, {id: id});
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

          // save edits
          vm.saveTable = function() {
            var results = [];
            for (var i = vm.users.length; i--;) {
              var user = vm.users[i];
              // actually delete user
              if (user.isDeleted) {
                vm.users.splice(i, 1);
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
    $scope.DecreaseAllMoney = function() {
      ngDialog.openConfirm({
          template: 'AllDecrease',
          className: 'ngdialog-theme-default',
          controller: ['$scope',function($scope){
            $scope.Decrease={
              money:'',
              reason:''
            }
          }]
        })
        .then(function(value) {
          var info='',title='',ids=[];
          for(var i in vm.teams){
            ids.push(vm.teams[i].team_id)
          }
          ids.join(',');
          ids='['+ids+']';
          if(value.money!=''&&value.reason!='')
            teamResourceApi.DecreaseAllMoney({team_ids:ids,amount:value.money,reason:value.reason}).$promise.then(function(data){
              switch(data.status){
                case 200:title='操作成功';info='批量扣钱成功';break;
                case 464:title='操作失败';info='操作失败';break;
                case 112:title='操作失败';info='参数错误';break;
                default:title='操作失败';info='参数错误';break;
              }
              $scope.openTimed(title,info)
              activate();
            })
        }, function(value) {
          console.log('rejected:' + value);

        });
    };
    $scope.IncreaseAllMoney = function() {
      ngDialog.openConfirm({
          template: 'AllIncrease',
          className: 'ngdialog-theme-default',
          controller: ['$scope',function($scope){
            $scope.Increase={
              money:'',
              reason:''
            }
          }]
        })
        .then(function(value) {
          var info='',title='',ids=[];
          for(var i in vm.teams){
            ids.push(vm.teams[i].team_id)
          }
          ids.join(',');
          ids='['+ids+']';
          if(value.money!=''&&value.reason!='')
            teamResourceApi.IncreaseAllMoney({team_ids:ids,amount:value.money,reason:value.reason}).$promise.then(function(data){
              switch(data.status){
                case 200:title='操作成功';info='批量加钱成功';break;
                case 464:title='操作失败';info='操作失败';break;
                case 112:title='操作失败';info='参数错误';break;
                default:title='操作失败';info='参数错误';break;
              }
              $scope.openTimed(title,info)
              activate();
            })
        }, function(value) {
          console.log('rejected:' + value);
        });
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
                default:title='操作失败';info='参数错误';break;
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
                default:title='操作失败';info='参数错误';break;
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
/**=========================================================
 * Module: demo-buttons.js
 * Provides a simple demo for buttons actions
 =========================================================*/

(function() {
  'use strict';

  angular
    .module('app.controllers')
    .controller('TeamCheckController', TeamCheckController)
    .filter('NowTime', NowTime)
    function NowTime(){
      return function(input,params){
        return moment.unix(input).format('ll');
      }
    }
  TeamCheckController.$inject = ['$scope', '$filter', 'ngDialog', 'editableOptions', 'editableThemes', '$q', 'schoolResourceApi', 'adminResourceApi', 'APP_PARMAS'];

  function TeamCheckController($scope, $filter, ngDialog, editableOptions, editableThemes, $q, schoolResourceApi, adminResourceApi, APP_PARMAS) {
    var vm = this;
    $scope.passApply=function(id){
      ngDialog.openConfirm({
              template: 'passconfirm',
              className: 'ngdialog-theme-default'
            }).then(function (value) {
              adminResourceApi.PassTeamApply({application_id:id},function(data){
                getTeamList();
              })
            }, function (reason) {
      });
    }
    $scope.getExcel=function(id){
      adminResourceApi.GetTeamcheckExcel({application_id:id},function(data){
        window.open('data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64,'+data.data.content);
      })
    }
    $scope.rejectApply=function(id){
      ngDialog.openConfirm({
              template: 'rejectconfirm',
              className: 'ngdialog-theme-default'
            }).then(function (value) {
              adminResourceApi.RejectTeamApply({application_id:id}).$promise.then(function(){
                getTeamList();
              })
            }, function (reason) {
      });
    }
    function getTeamList() {
      adminResourceApi.CreateTeamApplyQuery(function(data) {
        vm.teams = data.data;
      })
    }
    getTeamList();
    vm.showApplyDetail=function(id){
      ngDialog.open({
          template: 'ApplyDetail',
          data:{id:id},
          controller:DetailCtrl
      });
    } 
    DetailCtrl.$inject=['$scope'];  
    function DetailCtrl($scope){
      adminResourceApi.TeamApplyDetailQuery({application_id:$scope.ngDialogData.id}).$promise.then(function(data){
       $scope.detail=data.data.content;
      })
     }
  }
})();
/**=========================================================
 * Module: demo-buttons.js
 * Provides a simple demo for buttons actions
 =========================================================*/

(function() {
  'use strict';

  angular
    .module('app.controllers')
    .controller('TeamListController', TeamListCtrlFn);

  TeamListCtrlFn.$inject = ['$scope', '$filter', '$http', 'ngDialog', 'editableOptions', 'editableThemes', '$q', 'schoolResourceApi', 'adminResourceApi', 'APP_PARMAS'];

  function TeamListCtrlFn($scope, $filter, $http, ngDialog, editableOptions, editableThemes, $q, schoolResourceApi, adminResourceApi, APP_PARMAS) {
    var vm = this;
    vm.states = [{
      id: false,
      name: '软性入驻'
    }, {
      id: true,
      name: '硬性入驻'
    }]

    function getTeamList() {
      adminResourceApi.TeamListQuery(function(data) {
        vm.teams = data.data;
      })
    }
    vm.saveUser = function(data, id) {
      console.log(data, id)
      adminResourceApi.TeamSettleEdit({
        team_id: id,
        type: data.type ? 1 : 0
      }).$promise.then(function(data) {
        console.log(data);
      })
    }
    getTeamList();
    vm.removeTeam = function(name,id) {
      ngDialog.openConfirm({
              template: 'confirm',
              className: 'ngdialog-theme-default',
              data:{name:name},
              controller:['$scope',function(scope){
                scope.deletedTeam=scope.ngDialogData.name;
              }]
            }).then(function (value) {
              adminResourceApi.RemoveTeam({team_id:id},function(data){
                getTeamList();
              });
            }, function (reason) {
      });
    }
    vm.showStates = function(user) {
      if (user.is_settled && vm.states.length) {
        var selected = $filter('filter')(vm.states, {
          id: user.is_settled
        });
        return selected.length ? selected[0].name : '暂无数据';
      } else {
        if (user.is_settled)
          return APP_PARMAS.TEAMSTATE[1] || '暂无数据';
        return APP_PARMAS.TEAMSTATE[0] || '暂无数据';
      }
    };

    vm.filterUser = function(user) {
      return user.isDeleted !== true;
    };

    // mark user as deleted
    vm.deleteUser = function(id) {
      var filtered = $filter('filter')(vm.teams, {
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
      vm.teams.pop();
    };
  }
})();
/**=========================================================
 * Module: demo-buttons.js
 * Provides a simple demo for buttons actions
 =========================================================*/

(function() {
  'use strict';

  angular
    .module('app.controllers')
    .controller('BaseTeamRecordController', BaseTeamRecordController)
    .filter('NowTime', NowTime)
    .filter('TypeFilter', TypeFilter)
    .filter('MoneyFilter', MoneyFilter);

  function NowTime() {
    return function(input, params) {
      return moment.unix(input).format('l');
    }
  }
  function MoneyFilter() {
    return function(input, params) {
      return input > 0 ? '+' + input : input;
    }
  }

  function TypeFilter() {
    return function(input, params) {
      return input == 0 ? '管理员加钱' : input == 1 ? '管理员扣钱' : '团队支出';
    }
  }

  BaseTeamRecordController.$inject = ['$scope', '$timeout', 'DTOptionsBuilder', 'DTColumnDefBuilder', 'schoolResourceApi', 'teamResourceApi', 'adminResourceApi'];

  function BaseTeamRecordController($scope, $timeout, DTOptionsBuilder, DTColumnDefBuilder, schoolResourceApi, teamResourceApi, adminResourceApi) {
    var vm = this;
    vm.dtOptions = DTOptionsBuilder.newOptions().withPaginationType('full_numbers').withDisplayLength(2);
    vm.dtColumnDefs = [
      DTColumnDefBuilder.newColumnDef(0),
      DTColumnDefBuilder.newColumnDef(1),
      DTColumnDefBuilder.newColumnDef(2).notSortable(),
      DTColumnDefBuilder.newColumnDef(3).notSortable(),
      DTColumnDefBuilder.newColumnDef(4)
    ];
    vm.exportExcel = function() {
      teamResourceApi.ExportFlowExecl({
        team_id: $scope.selectTeam,
        start_date: vm.starttimeunix,
        end_date: vm.endtimeunix
      }, function(data) {
        window.open(data.data.file_url);
      })
    }
    vm.checkChange = function() {
      vm.starttimeunix = new Date(new Date(vm.starttime).getFullYear() + '-' + (new Date(vm.starttime).getMonth() + 1)).getTime() / 1000,
        vm.endtimeunix = new Date(new Date(vm.endtime).getFullYear() + '-' + (new Date(vm.endtime).getMonth() + 1)).getTime() / 1000;
      if (!vm.starttimeunix || !vm.endtimeunix || vm.starttimeunix >= vm.endtimeunix)
        getRecordListWithOutTime($scope.selectTeam);
      else
        getRecordListWithTime($scope.selectTeam, vm.starttimeunix, vm.endtimeunix)
    }
    vm.changeList = function() {
      getRecordListWithOutTime($scope.selectTeam)
    }
    activate();

    function activate() {

      schoolResourceApi.TeamQuery(function(data) {
        vm.teams = data.data;
        $scope.selectTeam = data.data[0].team_id;
        getRecordListWithOutTime(data.data[0].team_id)
      })
    }

    function getRecordListWithTime(id, start, end) {
      schoolResourceApi.AdminRecordQuery({
        team_id: id,
        start_date: start,
        end_date: end,
        page_num: 1,
        page_size: 1000
      }).$promise.then(function(data) {
        vm.records = data.data.record_list;
      })
    }

    function getRecordListWithOutTime(id) {
      schoolResourceApi.AdminRecordQuery({
        team_id: id,
        page_num: 1,
        page_size: 1000
      }).$promise.then(function(data) {
        vm.records = data.data.record_list;
      })
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
      $timeout(function() {
        vm.startopened = true;
      }, 0, true)
    };
    vm.endopen = function($event) {
      $event.preventDefault();
      $event.stopPropagation();
      $timeout(function() {
        vm.endopened = true;
      }, 0, true)
    };
    vm.openTimed = function(info) {
      var dialog = ngDialog.open({
        template: info,
        plain: true,
        closeByDocument: false,
        closeByEscape: false
      });
      setTimeout(function() {
        dialog.close();
      }, 2000);
    };
    vm.dateOptions = {
      formatYear: '@',
      startingDay: 1,
      navigationAsDateFormat: true
    };
    vm.initDate = new Date('2019-10-20');
    vm.format = 'yyyy年-MM月';
  }
})();
/**=========================================================
 * Module: demo-buttons.js
 * Provides a simple demo for buttons actions
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.controllers')
        .controller('usermanagementController', userManagementCtrlFn);

    userManagementCtrlFn.$inject = ['$scope','$timeout','$filter', '$http', 'editableOptions', 'editableThemes','$q','schoolResourceApi','teamResourceApi','adminResourceApi','APP_PARMAS'];
    function userManagementCtrlFn($scope,$timeout,$filter, $http, editableOptions, editableThemes, $q,schoolResourceApi,teamResourceApi,adminResourceApi,APP_PARMAS) {
        var vm = this;
        activate();
        function activate() {

          schoolResourceApi.TeamQuery(function(data){
            vm.teams=data.data;
            $scope.selectTeam=data.data[0].team_id;
            vm.loadUserList();
          })
          vm.types=[
            {id:0,name:'主要负责人'},
            {id:1,name:'次要负责人'},
            {id:2,name:'普通成员'}           
          ]
          $scope.selectType=vm.types[0].id;
          vm.loadUserList=function(){
            adminResourceApi.TeamMemberListQuery({type:$scope.selectType,team_id:$scope.selectTeam},function(data){
              vm.users=data.data;
              console.log(data)
            })
          }

          vm.loadColleges = function(id) {
            return vm.colleges? null : schoolResourceApi.CollegeQuery(function(data){
                   vm.colleges=data.data;
                   vm.loadMajors(data.data[0].school_id);
            })
          };
          vm.loadMajors=function(id){
            return id? schoolResourceApi.MajorQuery({school_id:id},function(data){
                   vm.majors=data.data;
            }):null;
          }
          vm.showColleges = function(user) {
            if(user.school_name &&vm.colleges&& vm.colleges.length) {
              var selected = $filter('filter')(vm.colleges, {school_name: user.school_name});
              console.log(selected[0].school_name)
              return selected.length ? selected[0].school_name : '暂无';
            } else {
              return user.school_name || '暂无';
            }
          };
          vm.showRole = function(user) {
            if(user.type && vm.types.length) {
              var selected = $filter('filter')(vm.types, {id: user.type});
              return selected.length ? selected[0].name : '暂无';
            } else {
              return APP_PARMAS.TEAMROLENAME[user.type] || '暂无';
            }
          };
          vm.showMajors = function(user) {
            if(user.major_name && vm.majors&&vm.majors.length) {
              var selected = $filter('filter')(vm.majors, {major_name: user.major_name});
              return selected.length ? selected[0].major_name : '暂无';
            } else {
              return user.major_name || '暂无';
            }
          };

          vm.checkName = function(data) {
            if (!data||data=='') {
              return '姓名不能为空';
            }
          };
          vm.checkPhone=function(data){
            var re= /^(13[0-9]{9})|(15[0-9]{9})$/;
            if (!data||data.length!==11||!re.test(data)) {
              return '请输入正确的手机号码';
            }
          }
          vm.checkID=function(data){
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
              name: '',
              school_name: '',
              major_name:'',
              team_name:'',
              type:'',
              password:APP_PARMAS.DefaultPassword
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
            var filtered = $filter('filter')(vm.users, {id: id});
            if (filtered.length) {
              filtered[0].isDeleted = true;
            }
          };

          // cancel all changes
          vm.cancel = function(rowform) {
            rowform.$cancel();
          };

          // save edits
          vm.saveTable = function() {
            var results = [];
            for (var i = vm.users.length; i--;) {
              var user = vm.users[i];
              // actually delete user
              if (user.isDeleted) {
                vm.users.splice(i, 1);
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

(function() {
  'use strict';

  angular
    .module('app.controllers')
    .controller('ApplyThingController', ApplyThingController);

  ApplyThingController.$inject = ['$scope', '$http', '$timeout', '$state', 'teamResourceApi', 'ngDialog'];

  function ApplyThingController($scope, $http, $timeout, $state, teamResourceApi, ngDialog) {
    var vm = $scope,
    NOW=new Date();
    vm.apply = {
      applything: '',
      endtime:null,
      starttime:null,
      startMinue:NOW,
      endMinue:NOW
    };
    vm.apply.hstep = 1;
    vm.apply.mstep = 15;

    vm.options = {
      hstep: [1, 2, 3],
      mstep: [1, 5, 10, 15, 25, 30]
    };
    vm.ismeridian = true;
    vm.toggleMode = function() {
      vm.ismeridian = !vm.ismeridian;
    };
    vm.update = function() {
      var d = new Date();
      d.setHours(14);
      d.setMinutes(0);
      vm.mytime = d;
    };

    vm.changed = function() {
      console.log('Time changed to: ' + vm.apply.startMinue);
    };

    vm.setApplyThing = function(value) {
      vm.apply.applything = value;
    }
    vm.clear = function() {
      vm.apply.endtime = '';
      vm.apply.starttime = '';
      vm.apply.startMinue=null;
      vm.apply.endMinue=null;
    };
    vm.toggleMin = function() {
      vm.minDate = vm.minDate ? null : new Date();
    };
    vm.toggleMin();
    vm.startdisabled = function(date, mode) {
      return (mode === 'day' && (date.getTime() < (new Date().getTime())));
    };
    vm.enddisabled = function(date, mode) {
      return (mode === 'day' && (date.getTime() <= (new Date().getTime())));
    };
    vm.startopen = function($event) {
      $event.preventDefault();
      $event.stopPropagation();
      vm.apply.startopened = true;
    };
    vm.endopen = function($event) {
      $event.preventDefault();
      $event.stopPropagation();
      console.log('open')
      vm.apply.minDate = vm.apply.starttime ? new Date(vm.apply.starttime) : new Date();
      vm.apply.endopened = true;
    };
    vm.openTimed = function(info) {
      var dialog = ngDialog.open({
        template: info,
        plain: true,
        closeByDocument: false,
        closeByEscape: false
      });
      setTimeout(function() {
        dialog.close();
      }, 2000);
    };
    vm.finishApply = function() {
      var starttime = Math.round(new Date(vm.apply.starttime).getTime() / 1000) + (new Date(vm.apply.startMinue).getHours()) * 3600 + (new Date(vm.apply.startMinue).getMinutes()) * 60,
        endtime = Math.round(new Date(vm.apply.endtime).getTime() / 1000) + (new Date(vm.apply.endMinue).getHours()) * 3600 + (new Date(vm.apply.endMinue).getMinutes()) * 60;
      if (starttime < endtime && vm.apply.applything != '')
        teamResourceApi.ApplyForThing({
          place_name: vm.apply.applything,
          start_time: starttime,
          end_time: endtime
        }, function(data) {
          if (data.status == 200)
            vm.openTimed('<h3 class="text-center text-success">申请成功</h3><p class="text-center">请耐心等候管理员审批</p>')
          $timeout(function() {
            $state.go('team.suportlist')
          }, 2000, true)
        })
      else
        vm.openTimed('<h3 class="text-center">时间填写有误</h3><p class="text-center">请认真核对起止时间，开始使用时间不能大于停止使用时间</p>')
    }
    vm.dateOptions = {
      formatYear: 'yy',
      startingDay: 1
    };
    vm.initDate = new Date('2019-10-20');
    vm.format = 'yyyy年-MM月-dd日';
  }
})();
/**=========================================================
 * Module: access-register.js
 * Demo for register account api
 =========================================================*/

(function() {
  'use strict';

  angular
    .module('app.pages')
    .controller('ChangePasswordController', ChangePasswordController);

  ChangePasswordController.$inject = ['$http','$timeout', '$state','schoolResourceApi'];

  function ChangePasswordController($http,$timeout, $state,schoolResourceApi) {
    var vm = this;
    vm.account = {};
    vm.changePassword={};
    // place the message if something goes wrong
    vm.authMsg = '';

    vm.changePassword = function() {
      vm.authMsg = '';
      vm.successInfo='';
      if (vm.changePasswordForm.$valid) {
        schoolResourceApi.ChangeUserPassword({old_password:vm.account.old_password,new_password:vm.changePassword.password},function(data){
          switch(data.status){
            case 200:vm.successInfo='修改成功,请重新登录';$timeout(function(){$state.go('page.login')},3000,true);break;
            case 430:vm.authMsg='密码不正确';break;
            case 130:vm.authMsg='密码长度不合法';break;
            case 131:vm.authMsg='密码格式不合法';break;
            default:vm.authMsg='修改失败';break;
          }
        })
      } else {
        vm.registerForm.account_email.$dirty = true;
        vm.registerForm.account_password.$dirty = true;
        vm.registerForm.account_agreed.$dirty = true;

      }
    };
  }
})();
/**=========================================================
 * Module: demo-buttons.js
 * Provides a simple demo for buttons actions
 =========================================================*/

(function() {
  'use strict';

  angular
    .module('app.tables')
    .controller('JoinerController', JoinerController)
    .filter('typeFormat', typeFormat)
  typeFormat.$inject = ['APP_PARMAS'];

  function typeFormat(APP_PARMAS) {
    return function(input, parmas) {
      return APP_PARMAS.TEAMROLENAME[input] || '';
    }
  }
  JoinerController.$inject = ['$scope', '$timeout', 'ngDialog', '$http', 'editableOptions', 'editableThemes', '$q', 'schoolResourceApi', 'teamResourceApi', 'userResourceApi', 'APP_PARMAS'];

  function JoinerController($scope, $timeout, ngDialog, $http, editableOptions, editableThemes, $q, schoolResourceApi, teamResourceApi, userResourceApi, APP_PARMAS) {
    var vm = this;
    $scope.passApply = function(id) {
      ngDialog.openConfirm({
        template: 'passconfirm',
        className: 'ngdialog-theme-default'
      }).then(function(value) {
        teamResourceApi.PassNewWorker({
          request_id: id
        }, function(data) {
          getTeamList();
        })
      }, function(reason) {});
    }
    $scope.rejectApply = function(id) {
      ngDialog.openConfirm({
        template: 'rejectconfirm',
        className: 'ngdialog-theme-default'
      }).then(function(value) {
        teamResourceApi.RejectNewWorker({
          request_id: id
        }).$promise.then(function() {
          getTeamList();
        })
      }, function(reason) {});
    }
    getTeamList();
    function getTeamList(){
      teamResourceApi.JoinerQuery(function(data) {
        vm.joiners = data.data;
        // vm.joiners=[{request_id:1,user_id:1,name:"小明",recruit_id:1,title:"招聘标题",mobile:"12345678901",qq:"123466"}];
        console.log(vm.joiners)
      })
    }

  }
})();
(function() {
    'use strict';

    angular
      .module('app.controllers')
      .controller('RecruitCmpostController', RecruitCmpostController)
    RecruitCmpostController.$inject = ['$scope', '$timeout', '$state', 'teamResourceApi', 'ngDialog']

    function RecruitCmpostController($scope, $timeout, $state, teamResourceApi, ngDialog) {
      var vm = this;
      $scope.authMsg = '';
      $scope.header = '';
      vm.validateInput = function(name, type) {
        var input = vm.formValidate[name];
        return (input.$dirty || vm.submitted) && input.$error[type];
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
      vm.newRecruit = function() {
        vm.submitted = true;
        if(vm.post.content==''){
          vm.openTimed('<p class="text-center">请填写招聘内容</p>')
        }
        else if (vm.formValidate.$valid) {
              teamResourceApi.AddRecruit(vm.post,function(data){
                if(data.status==200){
                  vm.openTimed('<h3 class="text-center text-success">发布成功</h3>');
                  $state.go('team.recruit');
                }
                else
                  vm.openTimed('<h3 class="text-center text-danger">发布失败</h3>')
              })
            } else {
              vm.openTimed('<p class="text-center text-danger">请填写必要信息</p>')
              return false;
            }
        }
      }
      })();
(function() {
  'use strict';

  angular
    .module('app.controllers')
    .controller('RecruitViewController', RecruitViewController)
    .filter('NowTime', NowTime)

  function NowTime() {
    return function(input, params) {
      return moment.unix(input).format('ll');
    }
  }
  RecruitViewController.$inject = ['$scope', '$timeout', '$state', 'schoolResourceApi', 'ngDialog']

  function RecruitViewController($scope, $timeout, $state, schoolResourceApi, ngDialog) {
    var vm = $scope;

    function getDetail(id) {
      schoolResourceApi.GetRecruitDetail({
        recruit_id: id
      }, function(data) {
        vm.recruit = data.data;
      })
    }
    $scope.$on('$stateChangeSuccess', function(event, toState, toParams) {
      getDetail(toParams.mid);
    });
  }
})();
/**=========================================================
 * Module: demo-buttons.js
 * Provides a simple demo for buttons actions
 =========================================================*/

(function() {
  'use strict';

  angular
    .module('app.controllers')
    .controller('SuportListController', SuportListController)
    .filter('NowTime', NowTime)
    .filter('statusFilter', statusFilter)
    function statusFilter(){
      return function(input,params){
        return input==0?'未审核':input==1?'已通过':'已否决';
      }
    }
    function NowTime(){
      return function(input,params){
        return moment.unix(input).format('lll');
      }
    }
  SuportListController.$inject = ['$scope', 'ngDialog', 'schoolResourceApi'];

  function SuportListController($scope, ngDialog, schoolResourceApi) {
    var vm = this;
    function getList(){
      schoolResourceApi.ApplyThingList(function(data){
        vm.applys=data.data;
      })
    }
    getList();
  }
})();
(function() {
    'use strict';

    angular
        .module('app.controllers')
        .controller('TeamIntroduceCtroller', TeamIntroduceCtroller)
        
    TeamIntroduceCtroller.$inject=['$scope','$timeout','ngDialog','schoolResourceApi','APP_PARMAS','teamResourceApi']
    function TeamIntroduceCtroller($scope,$timeout,ngDialog,schoolResourceApi,PP_PARMAS,teamResourceApi) {
      var vm = this;
          vm.wysiwygContent='';
          vm.reset = function() {
            vm.myImage='';
            vm.myCroppedImage = '';
            vm.myImage='';
            vm.imgcropType    = 'square';
            schoolResourceApi.TeamDetailGet(function(data){
              $timeout(function(){vm.wysiwygContent=data?data.data.description:'';vm.myCroppedImage=data?'data:image/png;base64,'+data.data.logo_base64:'';},0,true)
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
/**=========================================================
 * Module: demo-buttons.js
 * Provides a simple demo for buttons actions
 =========================================================*/

(function() {
  'use strict';

  angular
    .module('app.controllers')
    .controller('TeamOrderController', TeamOrderController)
    .filter('NowTime', NowTime)
    .filter('TypeFilter', TypeFilter)
    .filter('MoneyFilter', MoneyFilter);

  function NowTime() {
    return function(input, params) {
      return moment.unix(input).format('l');
    }
  }

  function MoneyFilter() {
    return function(input, params) {
      return input > 0 ? '+' + input : input;
    }
  }

  function TypeFilter() {
    return function(input, params) {
      return input == 0 ? '管理员加钱' : input == 1 ? '管理员扣钱' : '团队支出';
    }
  }

  TeamOrderController.$inject = ['$scope', '$timeout', 'DTOptionsBuilder', 'DTColumnDefBuilder', 'schoolResourceApi', 'teamResourceApi', 'adminResourceApi'];

  function TeamOrderController($scope, $timeout, DTOptionsBuilder, DTColumnDefBuilder, schoolResourceApi, teamResourceApi, adminResourceApi) {
    var vm = this;
    vm.dtOptions = DTOptionsBuilder.newOptions().withPaginationType('full_numbers').withDisplayLength(2);
    vm.dtColumnDefs = [
      DTColumnDefBuilder.newColumnDef(0),
      DTColumnDefBuilder.newColumnDef(1),
      DTColumnDefBuilder.newColumnDef(2).notSortable(),
      DTColumnDefBuilder.newColumnDef(3),
      DTColumnDefBuilder.newColumnDef(4).notSortable(),
      DTColumnDefBuilder.newColumnDef(5)
    ];
    vm.exportExcel = function() {
      adminResourceApi.TeamRecordExport({
        team_id: $scope.selectTeam,
        start_date: vm.starttimeunix,
        end_date: vm.endtimeunix
      }, function(data) {
        window.open(data.data.file_url);
      })
    }
    vm.checkChange = function() {
      vm.starttimeunix = new Date(new Date(vm.starttime).getFullYear() + '-' + (new Date(vm.starttime).getMonth() + 1)).getTime() / 1000,
        vm.endtimeunix = new Date(new Date(vm.endtime).getFullYear() + '-' + (new Date(vm.endtime).getMonth() + 1)).getTime() / 1000;
      if (!vm.starttimeunix || !vm.endtimeunix || vm.starttimeunix >= vm.endtimeunix)
        getRecordListWithOutTime($scope.selectTeam);
      else
        getRecordListWithTime($scope.selectTeam, vm.starttimeunix, vm.endtimeunix)
    }

    function getRecordListWithTime(id, start, end) {
      schoolResourceApi.TeamRecordList({
        team_id: id,
        start_date: start,
        end_date: end,
        page_num: 1,
        page_size: 1000
      }).$promise.then(function(data) {
        vm.records = data.data.record_list;
      })
    }

    function getRecordListWithOutTime(id) {
      schoolResourceApi.TeamRecordList({
        team_id: id,
        page_num: 1,
        page_size: 1000
      }).$promise.then(function(data) {
        vm.records = data.data.record_list;
      })
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
      $timeout(function() {
        vm.startopened = true;
      }, 0, true)
    };
    vm.endopen = function($event) {
      $event.preventDefault();
      $event.stopPropagation();
      $timeout(function() {
        vm.endopened = true;
      }, 0, true)
    };
    vm.openTimed = function(info) {
      var dialog = ngDialog.open({
        template: info,
        plain: true,
        closeByDocument: false,
        closeByEscape: false
      });
      setTimeout(function() {
        dialog.close();
      }, 2000);
    };
    vm.dateOptions = {
      formatYear: '@',
      startingDay: 1,
      navigationAsDateFormat: true
    };
    vm.initDate = new Date('2019-10-20');
    vm.format = 'yyyy年-MM月';
    $scope.$on('$stateChangeSuccess', function(event, toState, toParams) {
      console.log(toParams)
      $scope.selectTeam = toParams.id;
      getRecordListWithOutTime(toParams.id)
    });
  }
})();
/**=========================================================
 * Module: demo-pagination.js
 * Provides a simple demo for pagination
 =========================================================*/
(function() {
  'use strict';

  angular
    .module('app.controllers')
    .controller('TeamPostController', TeamPostController)
    .filter('fromNow', fromNow)
    .filter('removeTag', removeTag);

  function fromNow() {
    return function(input, params) {
      return moment.unix(input).fromNow();
    }
  }

  function removeTag() {
    return function(input, params) {
      input = input.replace(/<\/?[^>]*>/g, ''); //去除HTML tag
      input = input.replace(/[ | ]*\n/g, '\n'); //去除行尾空白
      input = input.replace(/\n[\s| | ]*\r/g, '\n'); //去除多余空行
      input = input.replace(/ /ig, '');
      return input;
    }
  }
  TeamPostController.$inject = ['$timeout','$state','teamResourceApi', 'paginationConfig','ngDialog']

  function TeamPostController($timeout,$state,teamResourceApi, paginationConfig,ngDialog) {
    var vm = this;
    vm.maxSize = 1; //最大页码数
    vm.bigCurrentPage = 1;
    vm.delectAllPosts=function(){
      $timeout(function(){},0,true);
      console.log(vm.posts)
    }
    vm.gotoDetail=function(id){
      $state.go('team.view',{mid:id});
    }
    vm.delectPost = function(id) {
      ngDialog.openConfirm({
        template: 'confirm',
        className: 'ngdialog-theme-default'
      }).then(function(value) {
        teamResourceApi.DelectRecruit({
          recruit_id: id
        }, function(data) {
          console.log(data);
          vm.openTimed('<h3 class="text-center text-success">删除成功</h3>');
          vm.getPostList(vm.bigCurrentPage, paginationConfig.itemsPerPage);
        })
      }, function(reason) {});
    }
    vm.openTimed = function(info) {
      var dialog = ngDialog.open({
        template: info,
        plain: true,
        closeByDocument: false,
        closeByEscape: false
      });
      setTimeout(function() {
        dialog.close();
      }, 2000);
    };
    vm.getPostList = function(num, size) {
      teamResourceApi.RecruitQuery({
        page_num: num,
        page_size: size
      }, function(data) {     
        for(var i in data.data.recruit_list){
          data.data.recruit_list[i]['selected']=false;
        };
        vm.posts = data.data.recruit_list;
        $timeout(function() {
          vm.bigTotalItems = data.data.recruit_count;
        }, 0, true)
      })
    }
    vm.getPostList(vm.bigCurrentPage, paginationConfig.itemsPerPage)

    function activate() {
      vm.pageChanged = function() {
        console.log('Page changed to: ' + vm.bigCurrentPage);
        vm.getPostList(vm.bigCurrentPage, paginationConfig.itemsPerPage)
      };

      vm.maxSize = 5;
    }
    activate();
  }
})();
(function() {
  'use strict';

  angular
    .module('app.extras')
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
(function() {
    'use strict';

    angular
        .module('app.controllers')
        .controller('TeamRecruitController', TeamRecruitController)
        
    TeamRecruitController.$inject=['$scope','$timeout','schoolResourceApi','APP_PARMAS']
    function TeamRecruitController($scope,$timeout,schoolResourceApi,APP_PARMAS) {

    }
})();
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
  teamworkerController.$inject = ['$scope', '$timeout','ngDialog', '$filter', '$http', 'editableOptions', 'editableThemes', '$q', 'schoolResourceApi', 'teamResourceApi', 'userResourceApi', 'APP_PARMAS'];

  function teamworkerController($scope, $timeout,ngDialog, $filter, $http, editableOptions, editableThemes, $q, schoolResourceApi, teamResourceAp, userResourceApi, APP_PARMAS) {
    var vm = this;
    vm.users = [];

    function getList() {
      userResourceApi.TeamWorkerQuery(function(data) {
        vm.users = data.data;
      })
    }
    getList()
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
        return selected.length ? selected[0].name : '暂无';
      } else {
        return APP_PARMAS.TEAMROLENAME[user.type] || '暂无';
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
    vm.saveUser = function(data, type, id) {
        if (data.type > type)
          schoolResourceApi.DegradeTeamer({
            user_id: id
          }, function(data) {
            getList()
          })
        else if (data.type < type)
          schoolResourceApi.UpgradeTeamer({
            user_id: id
          }, function(data) {
            getList()
          })
        else
          return;
      }
      // remove user
    vm.removeUser = function(index, id) {
      ngDialog.openConfirm({
        template: 'confirm',
        className: 'ngdialog-theme-default'
      }).then(function(value) {
        schoolResourceApi.DeleteTeamer({
          user_id: id
        }, function() {
          getList()
        });

      }, function(reason) {});
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
(function() {
  'use strict';

  angular
    .module('app.controllers')
    .controller('UserInfoController', UserInfoController);
  UserInfoController.$inject=['schoolResourceApi']
  function UserInfoController(schoolResourceApi) {
    var vm = this;
    vm.submitted = false;
    vm.validateInput = function(name, type) {
      var input = vm.formValidate[name];
      return (input.$dirty || vm.submitted) && input.$error[type];
    };
    vm.getUserInfo=function(){
      schoolResourceApi.GetUserInfo(function(data){
        vm.user=data.data;
      })
      vm.loadColleges();
    }
    vm.loadColleges = function() {
            return vm.colleges? null : schoolResourceApi.CollegeQuery(function(data){
                   vm.colleges=data.data;
                   vm.loadMajors(data.data[0].school_id);
            })
    };
    vm.loadMajors=function(id){
            return id? schoolResourceApi.MajorQuery({school_id:id},function(data){
                   vm.majors=data.data;
            }):null;
    };
    vm.getUserInfo();
    vm.submitForm = function() {
      vm.submitted = true;
      if (vm.formValidate.$valid) {
        vm.user['is_male']=1;
        for(var i in vm.user){
          if(!vm.user[i])
            delete vm.user[i];
        }
        schoolResourceApi.SetUserInfo(vm.user,function(data){
          console.log(data)
        })
      } else {
        console.log('Not valid!!');
        return false;
      }
    };
  }
})();
(function() {
    'use strict';

    angular
        .module('app.core')
        .config(coreConfig);

    coreConfig.$inject = ['$controllerProvider', '$compileProvider', '$filterProvider', '$provide'];
    function coreConfig($controllerProvider, $compileProvider, $filterProvider, $provide){
      
      var core = angular.module('app.core');
      // registering components after bootstrap
      core.controller = $controllerProvider.register;
      core.directive  = $compileProvider.directive;
      core.filter     = $filterProvider.register;
      core.factory    = $provide.factory;
      core.service    = $provide.service;
      core.constant   = $provide.constant;
      core.value      = $provide.value;

    }

})();
/**=========================================================
 * Module: constants.js
 * Define constants to inject across the application
 =========================================================*/

(function() {
  'use strict';

  angular
    .module('app.core')
    .constant('APP_MEDIAQUERY', {
      'desktopLG': 1200,
      'desktop': 992,
      'tablet': 768,
      'mobile': 480,
    })
    .constant('APP_PARMAS', {
      'DefaultPassword':'000000',
      'NOTICEITEM':1000,
      'ROLENAME':['基地管理员','二级管理员','主要负责人','次级负责人','','普通游客'],
      'TEAMROLENAME':['主要负责人','次级负责人','普通成员'],
      'TEAMSTATE':['软性入驻','硬性入驻'],
      'USERBLOCKNAME':'波纹科技',
      'USERBLOCKPICTURE':'app/img/user/01.jpg'
    })
    .constant('AUTH_EVENTS', {
      //--登录成功--
      loginSuccess: 'auth-login-success',
      //--登录失败--
      loginFailed: 'auth-login-failed',
      //--退出成功--
      logoutSuccess: 'auth-logout-success',
      //--认证超时--
      sessionTimeout: 'auth-session-timeout',
      //--未认证权限--
      notAuthenticated: 'auth-not-authenticated',
      //--未授权--
      notAuthorized: 'auth-not-authorized',
      //--服务器出错--
      systemError: 'something-wrong-system'
    })
    .constant('USER_ROLES', {
      visitor: '5',
      teamworker: '3',
      teamleader: '2',
      admin: '1',
      baseadmin: '0'
    })
})();
(function() {
    'use strict';

    angular
        .module('app.core')
        .run(appRun);

    appRun.$inject = ['$rootScope', '$state', '$stateParams',  '$window', '$templateCache', 'Colors'];
    
    function appRun($rootScope, $state, $stateParams, $window, $templateCache, Colors) {
      
      // Set reference to access them from any scope
      $rootScope.$state = $state;
      $rootScope.$stateParams = $stateParams;
      $rootScope.$storage = $window.localStorage;
      // ngdialog-theme
      $rootScope.theme = 'ngdialog-theme-default';
      // Uncomment this to disable template cache
      /*$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
          if (typeof(toState) !== 'undefined'){
            $templateCache.remove(toState.templateUrl);
          }
      });*/

      // Allows to use branding color with interpolation
      // {{ colorByName('primary') }}
      $rootScope.colorByName = Colors.byName;

      // cancel click event easily
      $rootScope.cancel = function($event) {
        $event.stopPropagation();
      };

      // Hooks Example
      // ----------------------------------- 

      // Hook not found
      $rootScope.$on('$stateNotFound',
        function(event, unfoundState/*, fromState, fromParams*/) {
            console.log(unfoundState.to); // "lazy.state"
            console.log(unfoundState.toParams); // {a:1, b:2}
            console.log(unfoundState.options); // {inherit:false} + default options
        });
      // Hook error
      $rootScope.$on('$stateChangeError',
        function(event, toState, toParams, fromState, fromParams, error){
          console.log(error);
        });
      // Hook success
      $rootScope.$on('$stateChangeSuccess',
        function(/*event, toState, toParams, fromState, fromParams*/) {
          // display new view from top
          $window.scrollTo(0, 0);
          // Save the route title
          $rootScope.currTitle = $state.current.title;
        });
      // Load a title dynamically
      $rootScope.currTitle = $state.current.title;
      $rootScope.pageTitle = function() {
        var title = $rootScope.app.name + ' - ' + ($rootScope.currTitle || $rootScope.app.description);
        document.title = title;
        return title;
      };      

    }

})();


(function() {
	'use strict';
	
	angular.module('app.controllers')
	.filter('fromNow', fromNow)
	.filter('NowTime', NowTime)
	.filter('removeTag', removeTag);
	function NowTime(){
		return function(input,params){
			return moment.unix(input).format('ll');
		}
	}
	function fromNow(){
		return function(input,params){
			return moment.unix(input).fromNow();
		}
	}
	function removeTag(){
		return function(input,params){
			input = input.replace(/<\/?[^>]*>/g,''); //去除HTML tag
            input = input.replace(/[ | ]*\n/g,'\n'); //去除行尾空白
            input = input.replace(/\n[\s| | ]*\r/g,'\n'); //去除多余空行
            input =input.replace(/ /ig,'');
            return input;
		}
    }
});
(function() {
    'use strict';

    angular
        .module('app.lazyload')
        .config(lazyloadConfig);

    lazyloadConfig.$inject = ['$ocLazyLoadProvider', 'APP_REQUIRES'];
    function lazyloadConfig($ocLazyLoadProvider, APP_REQUIRES){

      // Lazy Load modules configuration
      $ocLazyLoadProvider.config({
        debug: false,
        events: true,
        modules: APP_REQUIRES.modules
      });

    }
})();
(function() {
    'use strict';

    angular
        .module('app.lazyload')
        .constant('APP_REQUIRES', {
          // jQuery based and standalone scripts
          scripts: {
            'whirl':              ['vendor/whirl/dist/whirl.css'],
            'classyloader':       ['vendor/jquery-classyloader/js/jquery.classyloader.min.js'],
            'animo':              ['vendor/animo.js/animo.js'],
            'fastclick':          ['vendor/fastclick/lib/fastclick.js'],
            'modernizr':          ['vendor/modernizr/modernizr.js'],
            'animate':            ['vendor/animate.css/animate.min.css'],
            'skycons':            ['vendor/skycons/skycons.js'],
            'icons':              ['vendor/fontawesome/css/font-awesome.min.css',
                                   'vendor/simple-line-icons/css/simple-line-icons.css'],
            'weather-icons':      ['vendor/weather-icons/css/weather-icons.min.css'],
            'sparklines':         ['app/vendor/sparklines/jquery.sparkline.min.js'],
            'wysiwyg':            ['vendor/bootstrap-wysiwyg/bootstrap-wysiwyg.js',
                                   'vendor/bootstrap-wysiwyg/external/jquery.hotkeys.js'],
            'slimscroll':         ['vendor/slimScroll/jquery.slimscroll.min.js'],
            'screenfull':         ['vendor/screenfull/dist/screenfull.js'],
            'vector-map':         ['vendor/ika.jvectormap/jquery-jvectormap-1.2.2.min.js',
                                   'vendor/ika.jvectormap/jquery-jvectormap-1.2.2.css'],
            'vector-map-maps':    ['vendor/ika.jvectormap/jquery-jvectormap-world-mill-en.js',
                                   'vendor/ika.jvectormap/jquery-jvectormap-us-mill-en.js'],
            'loadGoogleMapsJS':   ['app/vendor/gmap/load-google-maps.js'],
            'flot-chart':         ['vendor/Flot/jquery.flot.js'],
            'flot-chart-plugins': ['vendor/flot.tooltip/js/jquery.flot.tooltip.min.js',
                                   'vendor/Flot/jquery.flot.resize.js',
                                   'vendor/Flot/jquery.flot.pie.js',
                                   'vendor/Flot/jquery.flot.time.js',
                                   'vendor/Flot/jquery.flot.categories.js',
                                   'vendor/flot-spline/js/jquery.flot.spline.min.js'],
                                  // jquery core and widgets
            'jquery-ui':          ['vendor/jquery-ui/ui/core.js',
                                   'vendor/jquery-ui/ui/widget.js'],
                                   // loads only jquery required modules and touch support
            'jquery-ui-widgets':  ['vendor/jquery-ui/ui/core.js',
                                   'vendor/jquery-ui/ui/widget.js',
                                   'vendor/jquery-ui/ui/mouse.js',
                                   'vendor/jquery-ui/ui/draggable.js',
                                   'vendor/jquery-ui/ui/droppable.js',
                                   'vendor/jquery-ui/ui/sortable.js',
                                   'vendor/jqueryui-touch-punch/jquery.ui.touch-punch.min.js'],
            'moment' :            ['vendor/moment/min/moment-with-locales.min.js'],
            'md5' :               ['vendor/angular-md5/angular-md5.min.js'],
            'inputmask':          ['vendor/jquery.inputmask/dist/jquery.inputmask.bundle.min.js'],
            'flatdoc':            ['vendor/flatdoc/flatdoc.js'],
            'codemirror':         ['vendor/codemirror/lib/codemirror.js',
                                   'vendor/codemirror/lib/codemirror.css'],
            // modes for common web files
            'codemirror-modes-web': ['vendor/codemirror/mode/javascript/javascript.js',
                                     'vendor/codemirror/mode/xml/xml.js',
                                     'vendor/codemirror/mode/htmlmixed/htmlmixed.js',
                                     'vendor/codemirror/mode/css/css.js'],
            'taginput' :          ['vendor/bootstrap-tagsinput/dist/bootstrap-tagsinput.css',
                                   'vendor/bootstrap-tagsinput/dist/bootstrap-tagsinput.min.js'],
            'filestyle':          ['vendor/bootstrap-filestyle/src/bootstrap-filestyle.js'],
            'parsley':            ['vendor/parsleyjs/dist/parsley.min.js'],
            'fullcalendar':       ['vendor/fullcalendar/dist/fullcalendar.min.js',
                                   'vendor/fullcalendar/dist/fullcalendar.css'],
            'gcal':               ['vendor/fullcalendar/dist/gcal.js'],
            'chartjs':            ['vendor/Chart.js/Chart.js'],
            'morris':             ['vendor/raphael/raphael.js',
                                   'vendor/morris.js/morris.js',
                                   'vendor/morris.js/morris.css'],
            'loaders.css':          ['vendor/loaders.css/loaders.css'],
            'spinkit':              ['vendor/spinkit/css/spinkit.css']
          },
          // Angular based script (use the right module name)
          modules: [
            {name: 'toaster',                   files: ['vendor/angularjs-toaster/toaster.js',
                                                       'vendor/angularjs-toaster/toaster.css']},
            {name: 'localytics.directives',     files: ['vendor/chosen_v1.2.0/chosen.jquery.min.js',
                                                       'vendor/chosen_v1.2.0/chosen.min.css',
                                                       'vendor/angular-chosen-localytics/chosen.js']},
            {name: 'ngDialog',                  files: ['vendor/ngDialog/js/ngDialog.min.js',
                                                       'vendor/ngDialog/css/ngDialog.min.css',
                                                       'vendor/ngDialog/css/ngDialog-theme-default.min.css'] },
            {name: 'ngWig',                     files: ['vendor/ngWig/dist/ng-wig.min.js'] },
            {name: 'ngTable',                   files: ['vendor/ng-table/dist/ng-table.min.js',
                                                        'vendor/ng-table/dist/ng-table.min.css']},
            {name: 'ngTableExport',             files: ['vendor/ng-table-export/ng-table-export.js']},
            {name: 'angularBootstrapNavTree',   files: ['vendor/angular-bootstrap-nav-tree/dist/abn_tree_directive.js',
                                                        'vendor/angular-bootstrap-nav-tree/dist/abn_tree.css']},
            {name: 'htmlSortable',              files: ['vendor/html.sortable/dist/html.sortable.js',
                                                        'vendor/html.sortable/dist/html.sortable.angular.js']},
            {name: 'xeditable',                 files: ['vendor/angular-xeditable/dist/js/xeditable.js',
                                                        'vendor/angular-xeditable/dist/css/xeditable.css']},
            {name: 'angularFileUpload',         files: ['vendor/angular-file-upload/angular-file-upload.js']},
            {name: 'ngImgCrop',                 files: ['vendor/ng-img-crop/compile/unminified/ng-img-crop.js',
                                                        'vendor/ng-img-crop/compile/unminified/ng-img-crop.css']},
            {name: 'ui.select',                 files: ['vendor/angular-ui-select/dist/select.js',
                                                        'vendor/angular-ui-select/dist/select.css']},
            {name: 'ui.codemirror',             files: ['vendor/angular-ui-codemirror/ui-codemirror.js']},
            {name: 'angular-carousel',          files: ['vendor/angular-carousel/dist/angular-carousel.css',
                                                        'vendor/angular-carousel/dist/angular-carousel.js']},
            {name: 'ngGrid',                    files: ['vendor/ng-grid/build/ng-grid.min.js',
                                                        'vendor/ng-grid/ng-grid.css' ]},
            {name: 'infinite-scroll',           files: ['vendor/ngInfiniteScroll/build/ng-infinite-scroll.js']},
            {name: 'ui.bootstrap-slider',       files: ['vendor/seiyria-bootstrap-slider/dist/bootstrap-slider.min.js',
                                                        'vendor/seiyria-bootstrap-slider/dist/css/bootstrap-slider.min.css',
                                                        'vendor/angular-bootstrap-slider/slider.js']},
            {name: 'ui.grid',                   files: ['vendor/angular-ui-grid/ui-grid.min.css',
                                                        'vendor/angular-ui-grid/ui-grid.min.js']},
            {name: 'textAngular',               files: ['vendor/textAngular/dist/textAngular.css',
                                                        'vendor/textAngular/dist/textAngular-rangy.min.js',
                                                        'vendor/textAngular/dist/textAngular-sanitize.js',
                                                        'vendor/textAngular/src/globals.js',
                                                        'vendor/textAngular/src/factories.js',
                                                        'vendor/textAngular/src/DOM.js',
                                                        'vendor/textAngular/src/validators.js',
                                                        'vendor/textAngular/src/taBind.js',
                                                        'vendor/textAngular/src/main.js',
                                                        'vendor/textAngular/dist/textAngularSetup.js'
                                                        ], serie: true},
            {name: 'angular-rickshaw',          files: ['vendor/d3/d3.min.js',
                                                        'vendor/rickshaw/rickshaw.js',
                                                        'vendor/rickshaw/rickshaw.min.css',
                                                        'vendor/angular-rickshaw/rickshaw.js'], serie: true},
            {name: 'angular-chartist',          files: ['vendor/chartist/dist/chartist.min.css',
                                                        'vendor/chartist/dist/chartist.js',
                                                        'vendor/angular-chartist.js/dist/angular-chartist.js'], serie: true},
            {name: 'ui.map',                    files: ['vendor/angular-ui-map/ui-map.js']},
            {name: 'datatables',                files: ['vendor/datatables/media/css/jquery.dataTables.css',
                                                        'vendor/datatables/media/js/jquery.dataTables.js',
                                                        'vendor/angular-datatables/dist/angular-datatables.js'], serie: true},
            {name: 'angular-jqcloud',           files: ['vendor/jqcloud2/dist/jqcloud.css',
                                                        'vendor/jqcloud2/dist/jqcloud.js',
                                                        'vendor/angular-jqcloud/angular-jqcloud.js']},
            {name: 'angularGrid',               files: ['vendor/ag-grid/dist/angular-grid.css',
                                                        'vendor/ag-grid/dist/angular-grid.js',
                                                        'vendor/ag-grid/dist/theme-dark.css',
                                                        'vendor/ag-grid/dist/theme-fresh.css']},
            {name: 'ng-nestable',               files: ['vendor/ng-nestable/src/angular-nestable.js',
                                                        'vendor/nestable/jquery.nestable.js']},
            {name: 'akoenig.deckgrid',          files: ['vendor/angular-deckgrid/angular-deckgrid.js']},
            {name: 'oitozero.ngSweetAlert',     files: ['vendor/sweetalert/dist/sweetalert.css',
                                                        'vendor/sweetalert/dist/sweetalert.min.js',
                                                        'vendor/angular-sweetalert/SweetAlert.js']},
            {name: 'bm.bsTour',                 files: ['vendor/bootstrap-tour/build/css/bootstrap-tour.css',
                                                        'vendor/bootstrap-tour/build/js/bootstrap-tour-standalone.js',
                                                        'vendor/angular-bootstrap-tour/dist/angular-bootstrap-tour.js'], serie: true},
            {name: 'slider-h',                  files: ['vendor/angular-sidebar/sidebar-h.js']},
            {name: 'slider-l',                  files: ['vendor/angular-sidebar/sidebar-l.js']},
            {name: 'slider-m',                  files: ['vendor/angular-sidebar/sidebar-m.js']}
          ]
        })
        ;

})();

/**=========================================================
 * Module: helpers.js
 * Provides helper functions for routes definition
 =========================================================*/

(function() {
  'use strict';

  angular
    .module('app.routes')
    .provider('RouteHelpers', RouteHelpersProvider)
    .factory('AuthInterceptor', AuthInterceptorFn)
  AuthInterceptorFn.$inject = ['$rootScope', '$q', 'AUTH_EVENTS'];
  RouteHelpersProvider.$inject = ['APP_REQUIRES'];

  //错误码拦截
  function AuthInterceptorFn($rootScope, $q, AUTH_EVENTS) {
    return {
      response: function(response) {
        $rootScope.$broadcast({         
          401: AUTH_EVENTS.notAuthenticated,
          410: AUTH_EVENTS.notAuthorized,
          411: AUTH_EVENTS.notAuthenticated,
          700: AUTH_EVENTS.systemError
        }[response.data.status], response);
        return response;
      }
    };
  }

  function RouteHelpersProvider(APP_REQUIRES) {

    /* jshint validthis:true */
    return {
      // provider access level
      basepath: basepath,
      resolveFor: resolveFor,
      // controller access level
      $get: function() {
        return {
          basepath: basepath,
          resolveFor: resolveFor
        };
      }
    };

    // Set here the base of the relative path
    // for all app views
    function basepath(uri) {
      return 'app/views/' + uri;
    }

    // Generates a resolve object by passing script names
    // previously configured in constant.APP_REQUIRES
    function resolveFor() {
      var _args = arguments;
      return {
        deps: ['$ocLazyLoad', '$q', function($ocLL, $q) {
          // Creates a promise chain for each argument
          var promise = $q.when(1); // empty promise
          for (var i = 0, len = _args.length; i < len; i++) {
            promise = andThen(_args[i]);
          }
          return promise;

          // creates promise to chain dynamically
          function andThen(_arg) {
            // also support a function that returns a promise
            if (typeof _arg === 'function')
              return promise.then(_arg);
            else
              return promise.then(function() {
                // if is a module, pass the name. If not, pass the array
                var whatToLoad = getRequired(_arg);
                // simple error check
                if (!whatToLoad) return $.error('Route resolve: Bad resource name [' + _arg + ']');
                // finally, return a promise
                return $ocLL.load(whatToLoad);
              });
          }
          // check and returns required data
          // analyze module items with the form [name: '', files: []]
          // and also simple array of script files (for not angular js)
          function getRequired(name) {
            if (APP_REQUIRES.modules)
              for (var m in APP_REQUIRES.modules)
                if (APP_REQUIRES.modules[m].name && APP_REQUIRES.modules[m].name === name)
                  return APP_REQUIRES.modules[m];
            return APP_REQUIRES.scripts && APP_REQUIRES.scripts[name];
          }

        }]
      };
    } // resolveFor

  }


})();
/**=========================================================
 * Module: config.js
 * App routes and resources configuration
 =========================================================*/


(function() {
  'use strict';

  angular
    .module('app.routes')
    .config(routesConfig);

  routesConfig.$inject = ['$stateProvider', '$httpProvider', '$locationProvider', '$urlRouterProvider', 'RouteHelpersProvider', 'USER_ROLES'];

  function routesConfig($stateProvider, $httpProvider, $locationProvider, $urlRouterProvider, helper, USER_ROLES) {

    $httpProvider.interceptors.push([
      '$injector',
      function($injector) {
        return $injector.get('AuthInterceptor');
      }
    ]);
    // Set the following to true to enable the HTML5 Mode
    // You may have to set <base> tag in index and a routing configuration in your server
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
    var param = function(obj) {
      var query = '',
        name, value, fullSubName, subName, subValue, innerObj, i;

      for (name in obj) {
        value = obj[name];

        if (value instanceof Array) {
          for (i = 0; i < value.length; ++i) {
            subValue = value[i];
            fullSubName = name + '[' + i + ']';
            innerObj = {};
            innerObj[fullSubName] = subValue;
            query += param(innerObj) + '&';
          }
        } else if (value instanceof Object) {
          for (subName in value) {
            subValue = value[subName];
            fullSubName = name + '[' + subName + ']';
            innerObj = {};
            innerObj[fullSubName] = subValue;
            query += param(innerObj) + '&';
          }
        } else if (value !== undefined && value !== null)
          query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
      }

      return query.length ? query.substr(0, query.length - 1) : query;
    };

    // Override $http service's default transformRequest
    $httpProvider.defaults.transformRequest = [function(data) {
      return angular.isObject(data) && String(data) !== '[object File]' ? param(data) : data;
    }];


    $locationProvider.html5Mode(false);

    // defaults to dashboard
    $urlRouterProvider.otherwise('/login');

    // 
    // Application Routes
    // -----------------------------------   
    $stateProvider
    // 
    // 单独的页面
    // ----------------------------------- 
      .state('page', {
        abstract: true,
        templateUrl: helper.basepath('common/page.html'),
        data: {
          authorizedRoles: [USER_ROLES.all]
        },
        resolve: helper.resolveFor('modernizr', 'icons'),
        controller: ['$rootScope', function($rootScope) {
          $rootScope.app.layout.isBoxed = false;
        }]
      })
      .state('page.login', {
        url: '/login',
        title: '账号登录',
        data: {
          authorizedRoles: [USER_ROLES.all]
        },
        templateUrl: helper.basepath('common/login.html'),
      })
      .state('page.register', {
        url: '/register',
        title: '账号注册',
        data: {
          authorizedRoles: [USER_ROLES.all]
        },
        templateUrl: helper.basepath('common/register.html'),
        resolve: helper.resolveFor('md5')
      })
      .state('page.recover', {
        url: '/recover',
        title: '账号注册',
        data: {
          authorizedRoles: [USER_ROLES.all]
        },
        templateUrl: helper.basepath('common/recover.html')
      })
      // --基地管理员--
      // ------------------------
      .state('admin', {
        abstract: true,
        templateUrl: helper.basepath('app.html'),
        resolve: helper.resolveFor('ngDialog', 'spinkit', 'moment', 'modernizr', 'icons', 'screenfull', 'animo', 'sparklines', 'slimscroll', 'classyloader', 'whirl')
      })
      .state('admin.secondAdmin', {
        url: '/secondAdmin',
        title: '二级管理员',
        templateUrl: helper.basepath('custom/secondadmin.html'),
        data: {
          authorizedRoles: [USER_ROLES.baseadmin]
        },
        resolve: helper.resolveFor('xeditable')
      })
      .state('admin.userManagement', {
        url: '/userManagement',
        title: '成员管理',
        data: {
          authorizedRoles: [USER_ROLES.baseadmin, USER_ROLES.admin]
        },
        templateUrl: helper.basepath('custom/usermanagement.html'),
        resolve: helper.resolveFor('xeditable')
      })
      .state('admin.teamList', {
        url: '/teamList',
        title: '团队列表',
        templateUrl: helper.basepath('custom/teamlist.html'),
        data: {
          authorizedRoles: [USER_ROLES.baseadmin, USER_ROLES.admin]
        },
        resolve: helper.resolveFor('xeditable')
      })
      .state('admin.teamCheck', {
        url: '/teamCheck',
        title: '团队审核',
        templateUrl: helper.basepath('custom/teamcheck.html'),
        data: {
          authorizedRoles: [USER_ROLES.baseadmin, USER_ROLES.admin]
        },
        resolve: helper.resolveFor('ngDialog', 'xeditable', 'spinkit')
      })
      .state('admin.teamApplyCheck', {
        url: '/teamApplyCheck',
        title: '团队审核',
        templateUrl: helper.basepath('custom/teamapplycheck.html'),
        data: {
          authorizedRoles: [USER_ROLES.baseadmin, USER_ROLES.admin]
        },
        resolve: helper.resolveFor('ngDialog', 'xeditable')
      })
      .state('admin.joinTeam', {
        url: '/joinTeam',
        title: '招聘管理',
        data: {
          authorizedRoles: [USER_ROLES.baseadmin, USER_ROLES.admin]
        },
        templateUrl: helper.basepath('custom/jointeam.html'),
        resolve: helper.resolveFor('ngDialog')
      })
      .state('admin.view', {
        url: '/recruit/{mid:[0-9]{1,4}}',
        title: '预览文章',
        templateUrl: helper.basepath('custom/adminpost-view.html'),
        data: {
          authorizedRoles: [USER_ROLES.baseadmin, USER_ROLES.secondadmin]
        },
        resolve: helper.resolveFor('ngWig', 'moment')
      })
      .state('admin.postsview', {
        url: '/posts/{id:[0-9]{1,4}}',
        title: '预览帖子',
        templateUrl: helper.basepath('common/posts-view.html'),
        data: {
          authorizedRoles: [USER_ROLES.baseadmin, USER_ROLES.secondadmin]
        },
        resolve: helper.resolveFor('ngWig', 'moment')
      })
      .state('admin.baseIntroduce', {
        url: '/baseintroduce',
        title: '基地介绍',
        templateUrl: helper.basepath('custom/baseintroduce.html'),
        data: {
          authorizedRoles: [USER_ROLES.baseadmin, USER_ROLES.admin]
        },
        resolve: helper.resolveFor('ngDialog', 'ngWig', 'ngImgCrop', 'filestyle')
      })
      .state('admin.baseNotice', {
        url: '/baseNotice',
        title: '基地通知',
        templateUrl: helper.basepath('custom/basenotice.html'),
        data: {
          authorizedRoles: [USER_ROLES.baseadmin, USER_ROLES.admin]
        },
        resolve: helper.resolveFor('taginput', 'inputmask', 'localytics.directives', 'filestyle', 'textAngular')
      })
      .state('admin.baseActivity', {
        url: '/baseActivity',
        title: '基地活动',
        templateUrl: helper.basepath('custom/baseactivities.html'),
        data: {
          authorizedRoles: [USER_ROLES.baseadmin, USER_ROLES.admin]
        },
        resolve: helper.resolveFor('taginput', 'inputmask', 'localytics.directives', 'filestyle', 'textAngular')
      })
      .state('admin.base-post', {
        url: '/基地活动详情',
        title: '',
        templateUrl: helper.basepath('custom/basepost.html'),
        data: {
          authorizedRoles: [USER_ROLES.baseadmin, USER_ROLES.admin]
        },
        resolve: helper.resolveFor('angular-jqcloud')
      })
      .state('admin.baseactivity', {
        url: '/baseactivity/:id',
        templateUrl: helper.basepath('custom/baseactivity.html'),
        data: {
          authorizedRoles: [USER_ROLES.baseadmin, USER_ROLES.admin]
        },
        resolve: helper.resolveFor('ui.select', 'textAngular')
      })
      .state('admin.baseGame', {
        url: '/game',
        title: '基地比赛',
        templateUrl: helper.basepath('custom/basegame.html'),
        data: {
          authorizedRoles: [USER_ROLES.baseadmin, USER_ROLES.admin]
        },
        resolve: helper.resolveFor('taginput', 'inputmask', 'localytics.directives', 'filestyle', 'textAngular')
      })
      .state('admin.modules', {
        url: '/modules',
        title: '基地模块',
        templateUrl: helper.basepath('custom/modules.html'),
        data: {
          authorizedRoles: [USER_ROLES.baseadmin, USER_ROLES.admin]
        },
        resolve: helper.resolveFor('xeditable')
      })
      .state('admin.posts', {
        url: '/posts',
        title: '帖子管理',
        controller: 'BasePostController',
        controllerAs: 'pag',
        data: {
          authorizedRoles: [USER_ROLES.baseadmin, USER_ROLES.admin]
        },
        templateUrl: helper.basepath('custom/posts.html')
      })
      .state('admin.changepassword', {
        url: '/changepassword',
        title: 'changepassword',
        data: {
          authorizedRoles: [USER_ROLES.baseadmin, USER_ROLES.admin]
        },
        templateUrl: helper.basepath('custom/basechangepassword.html'),
      })
      .state('admin.teamorders', {
        url: '/teamorders/:id',
        title: '操作记录',
        controller: 'BaseTeamOrderController',
        controllerAs: 'table',
        templateUrl: helper.basepath('custom/team-orders.html'),
        data: {
          authorizedRoles: [USER_ROLES.baseadmin, USER_ROLES.admin]
        },
        resolve: helper.resolveFor('datatables')
      })
      .state('admin.nestable', {
        url: '/nestable',
        title: 'Nestable',
        templateUrl: helper.basepath('custom/nestable.html'),
        data: {
          authorizedRoles: [USER_ROLES.baseadmin, USER_ROLES.admin]
        },
        resolve: helper.resolveFor('ng-nestable')
      })
      .state('admin.teamrecord', {
        url: '/teamrecord',
        title: '团队流水',
        templateUrl: helper.basepath('custom/teamrecord.html'),
        controller: 'BaseTeamRecordController',
        controllerAs: 'table',
        data: {
          authorizedRoles: [USER_ROLES.baseadmin, USER_ROLES.admin]
        },
        resolve: helper.resolveFor('datatables')
      })
      .state('admin.teamaccount', {
        url: '/teamaccount',
        title: '团队钱包',
        data: {
          authorizedRoles: [USER_ROLES.baseadmin, USER_ROLES.admin]
        },
        templateUrl: helper.basepath('custom/teamaccount.html'),
        resolve: angular.extend(helper.resolveFor('ngDialog', 'xeditable'), {
          tpl: function() {
            return {
              path: helper.basepath('ngdialog-template.html')
            };
          }
        }),
        controller: 'TeamAccountController'
      })
      .state('admin.goods', {
        url: '/goods',
        title: '团队列表',
        templateUrl: helper.basepath('custom/basegoods.html'),
        data: {
          authorizedRoles: [USER_ROLES.baseadmin, USER_ROLES.admin]
        },
        resolve: helper.resolveFor('xeditable')
      })
      .state('team', {
        abstract: true,
        templateUrl: helper.basepath('app.html'),
        resolve: helper.resolveFor('ngDialog', 'spinkit', 'fastclick', 'modernizr', 'icons', 'screenfull', 'animo', 'sparklines', 'slimscroll', 'classyloader', 'whirl')
      })
      .state('team.teamworker', {
        url: '/teamworker',
        title: '成员管理',
        templateUrl: helper.basepath('custom/teamworker.html'),
        data: {
          authorizedRoles: [USER_ROLES.teamleader]
        },
        resolve: helper.resolveFor('xeditable', 'ngDialog')
      })
      .state('team.suportlist', {
        url: '/suportlist',
        title: '团队审核',
        templateUrl: helper.basepath('custom/suportlist.html'),
        data: {
          authorizedRoles: [USER_ROLES.teamleader, USER_ROLES.teamworker]
        },
        resolve: helper.resolveFor('xeditable', 'moment', 'spinkit')
      })
      .state('team.suportcenter', {
        url: '/suportcenter',
        title: '申请中心',
        data: {
          authorizedRoles: [USER_ROLES.teamleader, USER_ROLES.teamworker]
        },
        templateUrl: helper.basepath('custom/teamroomapply.html'),
        resolve: helper.resolveFor('parsley', 'inputmask', 'ngDialog')
      })
      .state('team.team', {
        url: '/m/teamworker',
        title: '成员管理',
        templateUrl: helper.basepath('custom/m.teamworker.html'),
        data: {
          authorizedRoles: [USER_ROLES.teamworker]
        },
        resolve: helper.resolveFor('xeditable')
      })
      .state('team.joinercheck', {
        url: '/joinercheck',
        title: '招聘成员',
        templateUrl: helper.basepath('custom/joinercheck.html'),
        data: {
          authorizedRoles: [USER_ROLES.teamleader, USER_ROLES.teamworker]
        },
        resolve: helper.resolveFor('xeditable')
      })
      .state('team.teamintroduce', {
        url: '/teamintroduce',
        title: '基地介绍',
        templateUrl: helper.basepath('custom/teamintroduce.html'),
        data: {
          authorizedRoles: [USER_ROLES.teamleader, USER_ROLES.teamworker]
        },
        resolve: helper.resolveFor('ngWig', 'ngImgCrop', 'filestyle', 'ngDialog')
      })
      .state('team.recruit', {
        url: '/recruit',
        title: '招聘管理',
        controller: 'TeamRecruitController',
        data: {
          authorizedRoles: [USER_ROLES.teamleader, USER_ROLES.teamworker]
        },
        templateUrl: helper.basepath('custom/teampost.html'),
        resolve: helper.resolveFor('moment', 'ngDialog')
      })
      .state('team.record', {
        url: '/record',
        title: '记账本',
        data: {
          authorizedRoles: [USER_ROLES.teamleader, USER_ROLES.teamworker]
        },
        templateUrl: helper.basepath('custom/teamrecordlist.html'),
        controller: 'TeamRecordController',
        controllerAs: 'todo',
        resolve: helper.resolveFor('moment', 'ngDialog')
      })
      .state('team.compost', {
        url: '/compost',
        title: '发布新招聘',
        data: {
          authorizedRoles: [USER_ROLES.teamleader, USER_ROLES.teamworker]
        },
        templateUrl: helper.basepath('custom/teampost-compost.html'),
        resolve: helper.resolveFor('ngWig')
      })
      .state('team.view', {
        url: '/recruit/{mid:[0-9]{1,4}}',
        title: '预览文章',
        templateUrl: helper.basepath('custom/teampost-view.html'),
        data: {
          authorizedRoles: [USER_ROLES.teamleader, USER_ROLES.teamworker]
        },
        resolve: helper.resolveFor('ngWig', 'moment')

      })
      .state('team.orders', {
        url: '/orders',
        title: '团队补贴',
        controller: 'TeamOrderController',
        controllerAs: 'table',
        templateUrl: helper.basepath('custom/teamorder.html'),
        data: {
          authorizedRoles: [USER_ROLES.teamleader, USER_ROLES.teamworker]
        },
        resolve: helper.resolveFor('datatables', 'moment')
      })
      .state('team.changepassword', {
        url: '/password',
        title: '修改密码',
        data: {
          authorizedRoles: [USER_ROLES.teamleader, USER_ROLES.teamworker]
        },
        templateUrl: helper.basepath('custom/teamchangepassword.html'),
      })
      .state('team.userinfo', {
        url: '/info',
        title: '个人信息',
        data: {
          authorizedRoles: [USER_ROLES.teamleader, USER_ROLES.teamworker]
        },
        templateUrl: helper.basepath('custom/teamuserinfo.html'),
      })
      .state('visitor', {
        abstract: true,
        templateUrl: helper.basepath('app.html'),
        resolve: helper.resolveFor('fastclick', 'modernizr', 'icons', 'screenfull', 'animo', 'sparklines', 'slimscroll', 'classyloader', 'whirl')
      })
      .state('visitor.info', {
        url: '/perfectinfo',
        title: '个人信息',
        templateUrl: helper.basepath('custom/visitorinfo.html'),
        data: {
          authorizedRoles: [USER_ROLES.visitor]
        }
      })
      .state('visitor.applyteam', {
        url: '/applyteam',
        title: '申请新团队',
        templateUrl: helper.basepath('custom/applyteam.html'),
        data: {
          authorizedRoles: [USER_ROLES.visitor]
        },
        resolve: helper.resolveFor('taginput', 'inputmask', 'localytics.directives', 'filestyle', 'textAngular', 'angularFileUpload', 'ngDialog')
      })
      // 
      // CUSTOM RESOLVES
      //   Add your own resolves properties
      //   following this object extend
      //   method
      // ----------------------------------- 
      // .state('admin.someroute', {
      //   url: '/some_url',
      //   templateUrl: 'path_to_template.html',
      //   controller: 'someController',
      //   resolve: angular.extend(
      //     helper.resolveFor(), {
      //     // YOUR RESOLVES GO HERE
      //     }
      //   )
      // })
    ;

  } // routesConfig

})();
(function() {
	'use strict';

	angular.module('app.services')

	.factory('AuthInterceptor', AuthInterceptorFn)
	AuthInterceptorFn.$inject = ['$rootScope', '$q', 'AUTH_EVENTS'];
	//错误码拦截
	function AuthInterceptorFn($rootScope, $q, AUTH_EVENTS) {
		return {
			response: function(response) {
				$rootScope.$broadcast({					
					401: AUTH_EVENTS.notAuthenticated,
					410: AUTH_EVENTS.notAuthorized,
					411: AUTH_EVENTS.notAuthenticated,
					419: AUTH_EVENTS.sessionTimeout,
					440: AUTH_EVENTS.sessionTimeout,
					481: AUTH_EVENTS.notBaseadminAuth,
					700: AUTH_EVENTS.systemError
				}[response.status], response);
				return $q.reject(response);
			}
		};
	}
});
(function() {
	'use strict';

	angular
		.module('app.services')
		.factory('userResourceApi', userResourceApiFn)
		.factory('adminResourceApi',adminResourceApiFn)
		.factory('schoolResourceApi',schoolResourceApiFn)
		.factory('teamResourceApi',teamResourceApiFn);
 		teamResourceApiFn.$inject = ['$resource'];
 		schoolResourceApiFn.$inject = ['$resource'];
 		userResourceApiFn.$inject = ['$resource'];
 		adminResourceApiFn.$inject=['$resource'];
		//--用户权限--
		function userResourceApiFn($resource) {
		    return $resource('/user/:user/:param/:operate', {}, {
		    	//--登录--
		      	login: {method:'POST', params:{operate:'login'}},
		      	//--退出登录--
		      	logout:{method:'POST',params:{operate:'logout'}},
		      	//--获取团队成员列表--
		      	TeamWorkerQuery:{method:'POST',params:{param:'member',user:'team',operate:'list'}},
   
		    });
		}
		//--基地管理员权限
		function adminResourceApiFn($resource){
			return $resource('/admin/:user/:param/:operate/:others', {}, {
				//--团队补贴Excel导出--
				TeamRecordExport:{method:'POST',params:{user:'account',param:'record',operate:'excel',others:'export'}},
				//--帖子列表--
				PostListQuery:{method:'POST',params:{user:'community',param:'post',operate:'list'}},
				//--获取版块列表（管理员）-- 
		      	ModuleQuery:{method:'POST',params:{user:'community',param:'section',operate:'list'}},
		      	//--获取团队审核申请excel--
		      	GetTeamcheckExcel:{method:'GET',params:{user:'team',param:'apply',operate:'excel',others:'get'}},
		    	//--获取管理员列表--
		      	AdminList: {method:'POST', params:{user:'admin',operate:'list'}},
		      	//--添加二级管理员--
		      	AddAdmin: {method:'POST', params:{user:'admin',operate:'add'}},
		      	//--删除二级管理员--
		      	RemoveAdmin: {method:'POST', params:{user:'admin',operate:'delete'}},
		      	//--获取基地用户列表--
		      	TeamMemberListQuery: {method:'POST', params:{user:'team',param:'member',operate:'list'}},
		      	//--获取创建新团队的申请列表--
		      	CreateTeamApplyQuery:{method:'POST',params:{user:'team',param:'apply',operate:'list'}},
		      	//--通过团队审核--				
		      	PassTeamApply:{method:'POST',params:{user:'team',param:'apply',operate:'approve'}},				
		      	//--否决团队审核--
		      	RejectTeamApply:{method:'POST',params:{user:'team',param:'apply',operate:'decline'}},				
		      	//--获取团体审核材料--
		      	TeamApplyDetailQuery:{method:'POST',params:{user:'team',param:'apply',operate:'detail',others:'get'}},
		      	//--团队入驻情况编辑--
		      	TeamSettleEdit:{method:'POST',params:{user:'team',param:'settle',operate:'edit'}},
		      	//--获取团队列表（管理员）--
		      	TeamListQuery:{method:'POST',params:{user:'team',operate:'list'}},
		      	//--获取基地通知的列表，支持分批加载-- 
		      	BaseInfoQuery: {method:'POST', params:{user:'info',param:'notice',operate:'list'}},
		      	//--获取活动展示的列表，支持分批加载--
		      	BaseActivityQuery: {method:'POST', params:{user:'info',param:'notice',operate:'list'}},
		      	//--获取比赛事项的列表，支持分批加载--
		      	BaseGameQuery: {method:'POST', params:{user:'info',param:'notice',operate:'list'}},
		      	//--添加商品--
		      	AddGoods: {method:'POST', params:{user:'goods',operate:'add'}},
		      	//--删除商品--
		      	DelectGoods: {method:'POST', params:{user:'goods',operate:'delete'}},
		      	//--编辑商品--				
		      	EditGoods: {method:'POST', params:{user:'goods',operate:'edit'}},		      	
		      	//--删除团队--
		      	RemoveTeam:{method:'POST',params:{user:'team',operate:'delete'}}
		    });
		}
		//--团队权限--
		function teamResourceApiFn($resource){
			return $resource('/team/:user/:param/:operate', {}, {
		    	//--编辑团队资料--
		      	UpdateIntroduce: {method:'POST', params:{param:'detail',operate:'edit'}},
		      	//--导出流水EXCEL--
		      	ExportFlowExecl: {method:'POST', params:{user:'flow',param:'excel',operate:'export'}},
		      	//--通过新成员申请团队--
		      	PassNewWorker: {method:'POST', params:{user:'recruit',param:'request',operate:'approve'}},
		      	//--否决新成员申请团队--
		      	RejectNewWorker: {method:'POST', params:{user:'recruit',param:'request',operate:'decline'}},
		      	//--流水列表--
		      	FlowListQuery: {method:'POST', params:{param:'flow',operate:'list'}},
		      	//--添加流水--
		      	AddFlow: {method:'POST', params:{param:'flow',operate:'add'}},
		      	//--编辑流水--
		      	EditFlow: {method:'POST', params:{param:'flow',operate:'edit'}},
		      	//--删除流水--
		      	DeleteFlow: {method:'POST', params:{param:'flow',operate:'delete'}},
		      	//--批量加钱--
		      	IncreaseAllMoney: {method:'POST', params:{user:'account',param:'batch',operate:'increase'}},
		      	//--批量扣钱--
		      	DecreaseAllMoney: {method:'POST', params:{user:'account',param:'batch',operate:'decrease'}},
		      	//--团队申请中心--
		      	ApplyForThing: {method:'POST', params:{user:'room',param:'apply',operate:'add'}},
		      	//--添加招聘--
		      	AddRecruit: {method:'POST', params:{param:'recruit',operate:'add'}},
		      	//--修改招聘--
		      	EditRecruit: {method:'POST', params:{param:'recruit',operate:'edit'}},
		      	//--删除招聘--
		      	DelectRecruit: {method:'POST', params:{param:'recruit',operate:'delete'}},
		      	//--查询招聘--
		      	RecruitQuery: {method:'POST', params:{param:'recruit',operate:'list'}},
		      	//--获取团队应聘申请列表--
		      	JoinerQuery: {method:'POST', params:{user:'recruit',param:'request',operate:'list'}},
		      	//--给某个团队扣钱--
		      	DecreaseAccount: {method:'POST', params:{user:'account',param:'decrease'}},
		      	//--给某个团队加钱--
		      	IncreaseAccount: {method:'POST', params:{user:'account',param:'increase'}},
		      	//--获取团队钱包列表信息--
		      	AccountQuery: {method:'POST', params:{param:'account',operate:'list'}}
 
		    });
		}
		//--公共权限--
		function schoolResourceApiFn($resource){
			return $resource('/:user/:param/:operate/:others', {}, {
				//--申请物资列表--
				ApplyThingList:{method:'POST',params:{user:'room',param:'apply',operate:'list'}},
				//--获取回复列表--
				RepplyQuery:{method:'POST',params:{user:'community',param:'reply',operate:'list'}},
				//--发布回复--
				PostRepplyQuery:{method:'POST',params:{user:'community',param:'reply',operate:'add'}},
				//--获取帖子详情--
				GetPostDetail:{method:'POST',params:{user:'community',param:'post',operate:'detail',others:'get'}},
				//--团队成员升级--
				UpgradeTeamer:{method:'POST',params:{user:'user',param:'member',operate:'privilege',others:'upgrade'}},
				//--团队成员降级--
				DegradeTeamer:{method:'POST',params:{user:'user',param:'member',operate:'privilege',others:'degrade'}},
				//--剔除团队成员--
				DeleteTeamer:{method:'POST',params:{user:'user',param:'team',operate:'member',others:'delete'}},
				//--团队补贴列表--	
				TeamRecordList:{method:'POST',params:{user:'account',param:'record',operate:'list'}},	
				//--删除帖子--
				PostDelete:{method:'POST',params:{user:'community',param:'post',operate:'delete'}},	
				//--管理员获取流水列表--
				AdminRecordQuery:{method:'POST',params:{user:'account',param:'record',operate:'list'}},	
				//--团队LOGO--			
				TeamLogo:{method:'POST',params:{user:'base',param:'team',operate:'logo',others:'get'}},				
				//--团队介绍--
				TeamDetailGet:{method:'POST',params:{user:'base',param:'team',operate:'detail',others:'get'}},				
				//--获取招聘详情--
				GetRecruitDetail:{method:'POST',params:{user:'base',param:'recruit',operate:'detail',others:'get'}},				
				//--通过物资申请--
				PassThingApply:{method:'POST',params:{user:'room',param:'apply',operate:'approve'}},				
				//--否决物资申请--
				RejectThingApply:{method:'POST',params:{user:'room',param:'apply',operate:'decline'}},				
				//--获取活动报名EXCEL--
				DownloadActivityExcel:{method:'POST',params:{user:'activity',param:'apply',operate:'excel',others:'get'}},
				//--修改密码--
				ChangeUserPassword:{method:'POST',params:{user:'user',param:'password',operate:'change'}},
				//--获取用户信息--
				GetUserInfo:{method:'POST',params:{user:'user',param:'info',operate:'get'}},
				//--修改用户信息--
				SetUserInfo:{method:'POST',params:{user:'user',param:'info',operate:'set'}},
				//--添加模块--
				ModuleAdd:{method:'POST',params:{user:'community',param:'section',operate:'add'}},
				//--删除模块--
				ModuleDelect:{method:'POST',params:{user:'community',param:'section',operate:'delete'}},
				//--模块编辑--
				ModuleEdit:{method:'POST',params:{user:'community',param:'section',operate:'edit'}},
		    	//--获取学院列表--
		      	CollegeQuery: {method:'POST', params:{user:'school',param:'name',operate:'list'}},
		      	//--获取专业列表--
		      	MajorQuery: {method:'POST', params:{user:'major',param:'name',operate:'list'}},
		      	//--获取学院专业级联--
		      	CollegeMajorQuery: {method:'POST', params:{user:'school',param:'major',operate:'list'}},
		      	//--获取团队列表--
		      	TeamQuery: {method:'POST', params:{user:'team',param:'name',operate:'list'}},
		      	//--删除公告--
		      	DelectInfo: {method:'POST', params:{user:'info',param:'notice',operate:'delete'}},
		      	//--编辑基地介绍页面--/ base/description/get
		      	UpdateIntroduce: {method:'POST', params:{user:'base',param:'description',operate:'edit'}},
		      	//--获取基地介绍详情--
		      	IntroduceContentQuery: {method:'POST', params:{user:'base',param:'description',operate:'get'}},
		      	//--获取基地logo--
		      	IntroduceLogoQuery: {method:'GET', params:{user:'base',param:'logo',operate:'get'}},
		      	//--获取验证码--
		      	SendCode: {method:'POST', params:{user:'user',param:'verify',operate:'send'}},
		      	//--用户注册--
		      	Register: {method:'POST', params:{user:'user',param:'register'}},
		      	//--申请新团队--
		      	ApplyNewTeam: {method:'POST', params:{user:'team',param:'request',operate:'add'}},
		      	//--获取商品列表--
		      	GoodsQuery: {method:'POST', params:{user:'good',param:'info',operate:'list'}},
		      	//--发布新公告--
		      	BaseInfoAdd: {method:'POST', params:{user:'info',param:'notice',operate:'add'}}   
		    });
		}
})();
(function() {
    'use strict';

    angular
        .module('app.settings')
        .run(settingsRun);

    settingsRun.$inject = ['$rootScope', '$localStorage'];

    function settingsRun($rootScope, $localStorage){

      // Global Settings
      // ----------------------------------- 
      $rootScope.app = {
        name: '创业孵化基地',
        description: '广东工业大学创新创业孵化基地',
        year: ((new Date()).getFullYear()),
        layout: {
          isFixed: true,
          isCollapsed: false,
          isBoxed: false,
          isRTL: false,
          horizontal: false,
          isFloat: false,
          asideHover: false,
          theme: 'app/css/theme-d.css'
        },
        useFullLayout: false,
        hiddenFooter: false,
        offsidebarOpen: false,
        asideToggled: false,
        viewAnimation: 'ng-fadeInUp'
      };

      // Setup the layout mode
      $rootScope.app.layout.horizontal = ( $rootScope.$stateParams.layout === 'app-h') ;

      // Restore layout settings
      if( angular.isDefined($localStorage.layout) )
        $rootScope.app.layout = $localStorage.layout;
      else
        $localStorage.layout = $rootScope.app.layout;

      $rootScope.$watch('app.layout', function () {
        $localStorage.layout = $rootScope.app.layout;
      }, true);

      // Close submenu when sidebar change from collapsed to normal
      $rootScope.$watch('app.layout.isCollapsed', function(newValue) {
        if( newValue === false )
          $rootScope.$broadcast('closeSidebarMenu');
      });

    }

})();

/**=========================================================
 * Module: sidebar.js
 * Wraps the sidebar and handles collapsed state
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.sidebar')
        .directive('sidebar', sidebar);

    sidebar.$inject = ['$rootScope', '$timeout', '$window', 'Utils'];
    function sidebar ($rootScope, $timeout, $window, Utils) {
        var $win = angular.element($window);
        var directive = {
            // bindToController: true,
            // controller: Controller,
            // controllerAs: 'vm',
            link: link,
            restrict: 'EA',
            template: '<nav class="sidebar" ng-transclude></nav>',
            transclude: true,
            replace: true
            // scope: {}
        };
        return directive;

        function link(scope, element, attrs) {

          var currentState = $rootScope.$state.current.name;
          var $sidebar = element;

          var eventName = Utils.isTouch() ? 'click' : 'mouseenter' ;
          var subNav = $();

          $sidebar.on( eventName, '.nav > li', function() {

            if( Utils.isSidebarCollapsed() || $rootScope.app.layout.asideHover ) {

              subNav.trigger('mouseleave');
              subNav = toggleMenuItem( $(this), $sidebar);

              // Used to detect click and touch events outside the sidebar          
              sidebarAddBackdrop();

            }

          });

          scope.$on('closeSidebarMenu', function() {
            removeFloatingNav();
          });

          // Normalize state when resize to mobile
          $win.on('resize', function() {
            if( ! Utils.isMobile() )
          	asideToggleOff();
          });

          // Adjustment on route changes
          $rootScope.$on('$stateChangeStart', function(event, toState) {
            currentState = toState.name;
            // Hide sidebar automatically on mobile
            asideToggleOff();

            $rootScope.$broadcast('closeSidebarMenu');
          });

      	  // Autoclose when click outside the sidebar
          if ( angular.isDefined(attrs.sidebarAnyclickClose) ) {
            
            var wrapper = $('.wrapper');
            var sbclickEvent = 'click.sidebar';
            
            $rootScope.$watch('app.asideToggled', watchExternalClicks);

          }

          //////

          function watchExternalClicks(newVal) {
            // if sidebar becomes visible
            if ( newVal === true ) {
              $timeout(function(){ // render after current digest cycle
                wrapper.on(sbclickEvent, function(e){
                  // if not child of sidebar
                  if( ! $(e.target).parents('.aside').length ) {
                    asideToggleOff();
                  }
                });
              });
            }
            else {
              // dettach event
              wrapper.off(sbclickEvent);
            }
          }

          function asideToggleOff() {
            $rootScope.app.asideToggled = false;
            if(!scope.$$phase) scope.$apply(); // anti-pattern but sometimes necessary
      	  }
        }
        
        ///////

        function sidebarAddBackdrop() {
          var $backdrop = $('<div/>', { 'class': 'dropdown-backdrop'} );
          $backdrop.insertAfter('.aside-inner').on('click mouseenter', function () {
            removeFloatingNav();
          });
        }

        // Open the collapse sidebar submenu items when on touch devices 
        // - desktop only opens on hover
        function toggleTouchItem($element){
          $element
            .siblings('li')
            .removeClass('open')
            .end()
            .toggleClass('open');
        }

        // Handles hover to open items under collapsed menu
        // ----------------------------------- 
        function toggleMenuItem($listItem, $sidebar) {

          removeFloatingNav();

          var ul = $listItem.children('ul');
          
          if( !ul.length ) return $();
          if( $listItem.hasClass('open') ) {
            toggleTouchItem($listItem);
            return $();
          }

          var $aside = $('.aside');
          var $asideInner = $('.aside-inner'); // for top offset calculation
          // float aside uses extra padding on aside
          var mar = parseInt( $asideInner.css('padding-top'), 0) + parseInt( $aside.css('padding-top'), 0);
          var subNav = ul.clone().appendTo( $aside );
          
          toggleTouchItem($listItem);

          var itemTop = ($listItem.position().top + mar) - $sidebar.scrollTop();
          var vwHeight = $win.height();

          subNav
            .addClass('nav-floating')
            .css({
              position: $rootScope.app.layout.isFixed ? 'fixed' : 'absolute',
              top:      itemTop,
              bottom:   (subNav.outerHeight(true) + itemTop > vwHeight) ? 0 : 'auto'
            });

          subNav.on('mouseleave', function() {
            toggleTouchItem($listItem);
            subNav.remove();
          });

          return subNav;
        }

        function removeFloatingNav() {
          $('.dropdown-backdrop').remove();
          $('.sidebar-subnav.nav-floating').remove();
          $('.sidebar li.open').removeClass('open');
        }
    }


})();


(function() {
    'use strict';

    angular
        .module('app.sidebar')
        .service('SidebarLoader', SidebarLoader);

    SidebarLoader.$inject = ['$http','USER_ROLES'];
    function SidebarLoader($http,USER_ROLES) {
        this.getMenu = getMenu;

        ////////////////

        function getMenu(type,onReady, onError) {
          var menuJson,menuURL;
          switch(type){
            case USER_ROLES.baseadmin:menuJson = 'server/custom/baseadmin-sidebar-menu.json';break;
            case USER_ROLES.admin:menuJson = 'server/custom/admin-sidebar-menu.json';break;
            case USER_ROLES.teamleader:menuJson = 'server/custom/teamleader-sidebar-menu.json';break;
            case USER_ROLES.teamworker:menuJson = 'server/custom/teamworker-sidebar-menu.json';break;
            case USER_ROLES.visitor:menuJson = 'server/custom/visitor-sidebar-menu.json';break;
            default:menuJson = '';break;
          }          
          
          menuURL  = menuJson + '?v=' + (new Date().getTime()); // jumps cache
            
          onError = onError || function() { alert('Failure loading menu'); };

          $http
            .get(menuURL)
            .success(onReady)
            .error(onError);
        }
    }
})();
(function() {
    'use strict';

    angular
        .module('app.sidebar')
        .controller('UserBlockController', UserBlockController);

    UserBlockController.$inject = ['$rootScope'];
    function UserBlockController($rootScope) {

        activate();

        ////////////////

        function activate() {

          // Hides/show user avatar on sidebar
          $rootScope.toggleUserBlock = function(){
            $rootScope.$broadcast('toggleUserBlock');
          };

          $rootScope.userBlockVisible = true;
          
          $rootScope.$on('toggleUserBlock', function(/*event, args*/) {

            $rootScope.userBlockVisible = ! $rootScope.userBlockVisible;
            
          });
        }
    }
})();

(function() {
  'use strict';

  angular
    .module('app.sidebar')
    .controller('SidebarController', SidebarController);

  SidebarController.$inject = ['$rootScope', '$scope', '$cookieStore', '$state', '$timeout', 'SidebarLoader', 'Utils', 'USER_ROLES', 'AUTH_EVENTS', 'APP_PARMAS'];

  function SidebarController($rootScope, $scope, $cookieStore, $state, $timeout, SidebarLoader, Utils, USER_ROLES, AUTH_EVENTS, APP_PARMAS) {
    var collapseList = [];
    var type = {
        sessionID: 2,
        role: ''
      },
      newType;
    // demo: when switch from collapse to hover, close all items
    $rootScope.$watch('app.layout.asideHover', function(oldVal, newVal) {
      if (newVal === false && oldVal === true) {
        closeAllBut(-1);
      }
    });

    $rootScope.user = {
      name: APP_PARMAS.USERBLOCKNAME,
      picture: APP_PARMAS.USERBLOCKPICTURE,
      job: ''
    };
    // Load menu from json file
    // ----------------------------------- 
    $scope.$on('$stateChangeSuccess', function(event, toState) {
      newType = $cookieStore.get('session');
      if (newType && newType.sessionID !== type.sessionID) {
        type = newType;
        $timeout(function() {
          $rootScope.user.role=type.role?type.role:'';
          $rootScope.user.job = type.role ? APP_PARMAS.ROLENAME[parseInt(type.role)] : '';
        }, 0, true)
        SidebarLoader.getMenu(type ? type.role : '', sidebarReady);
      }
    });

    function sidebarReady(items) {
      $timeout(function() {
        $scope.menuItems = items;
      }, 0, true)
    }

    // Handle sidebar and collapse items
    // ----------------------------------

    $scope.getMenuItemPropClasses = function(item) {
      return (item.heading ? 'nav-heading' : '') +
        (isActive(item) ? ' active' : '');
    };

    $scope.addCollapse = function($index, item) {
      collapseList[$index] = $rootScope.app.layout.asideHover ? true : !isActive(item);
    };

    $scope.isCollapse = function($index) {
      return (collapseList[$index]);
    };

    $scope.toggleCollapse = function($index, isParentItem) {

      // collapsed sidebar doesn't toggle drodopwn
      if (Utils.isSidebarCollapsed() || $rootScope.app.layout.asideHover) return true;

      // make sure the item index exists
      if (angular.isDefined(collapseList[$index])) {
        if (!$scope.lastEventFromChild) {
          collapseList[$index] = !collapseList[$index];
          closeAllBut($index);
        }
      } else if (isParentItem) {
        closeAllBut(-1);
      }

      $scope.lastEventFromChild = isChild($index);

      return true;

    };

    // Controller helpers
    // ----------------------------------- 

    // Check item and children active state
    function isActive(item) {

      if (!item) return;

      if (!item.sref || item.sref === '#') {
        var foundActive = false;
        angular.forEach(item.submenu, function(value) {
          if (isActive(value)) foundActive = true;
        });
        return foundActive;
      } else
        return $state.is(item.sref) || $state.includes(item.sref);
    }

    function closeAllBut(index) {
      index += '';
      for (var i in collapseList) {
        if (index < 0 || index.indexOf(i) < 0)
          collapseList[i] = true;
      }
    }

    function isChild($index) {
      /*jshint -W018*/
      return (typeof $index === 'string') && !($index.indexOf('-') < 0);
    }

  }
})();