require('./index.less');

require('script-loader!zepto');
require('../resource/libs/fullpage');

var utils = require('./utils');



function PageControll () {

}
PageControll.prototype = {
  init: function () {
    var self = this;

    self.preloading();
    self.pages();
  },
  pages: function () {
    
  },
  preloading: function () {
    var self = this;
    var $loadingArea = $('.j_LoadingArea');
    var $loadingBar = $('.j_LoadingBar');
    var $page1Title = $('.j_Page1Title');
    var $loadingStarter = $('.j_LoadingStarter');

    var preLoadingImglist = [require('../resource/images/1-loading.png')];

    utils.fireImage(preLoadingImglist[0], $loadingArea[0], function () {
      fakeMoveLoading();
    })



    function fakeMoveLoading () {
      var timer = null;
      var count = 0;
      timer = setInterval(function () {
        count++;
        $loadingBar.width($loadingBar.width() + $loadingBar.parent().width()/10);
        if (count === 7) {
          clearInterval(timer);
        }
      }, 1000)

      $(window).on('load', function () {
        clearInterval(timer);
        $loadingBar.width($loadingBar.parent().width());
        $page1Title.addClass('tada');
        $loadingStarter.addClass('active');
      }) 
    }
  }
}


new PageControll().init();
 













