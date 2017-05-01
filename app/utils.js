module.exports = {

  /**
   * @description 加载图片
   * @param {String} [imgSrc] 图片地址
   * @param {Object} [imgElem] 填充图片的dom原生对象
   * @param {Function} [successCallback] 图片加载成功的回调函数
   */
  fireImage: function (imgSrc, imgElem, successCallback) {
    var oImage = new Image();
    oImage.onload = function () {
      imgElem.style.backgroundImage = 'url(' + imgSrc + ')';
      imgElem.style.backgroundSize = 'cover';
      successCallback();
    };
    oImage.src = imgSrc;
  }
}