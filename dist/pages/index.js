"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wxRequest = require('./../utils/wxRequest.js');

var _wxRequest2 = _interopRequireDefault(_wxRequest);

var _utils = require('./../utils/utils.js');

var _utils2 = _interopRequireDefault(_utils);

var _countDown = require('./../components/countDown.js');

var _countDown2 = _interopRequireDefault(_countDown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: "onLoad",


    //页面的生命周期函数
    value: function onLoad() {
      var _this2 = this;

      console.log("初始化加载--onLoad");
      // 初始化时获取userinfo
      this.$parent.getGlobalDatas(this.canIUse, function (res) {
        console.log("初始化加载--", res);
        _this2.hasUserInfo = res.hasUserInfo;
        _this2.userInfo = res.userInfo;
        _this2.$apply();
      });

      // 获取数据
      // let url = 'http://ons.me/tools/dropload/json.php?page=0&size=10';
      // wxRequest.fetch(url, null, null, 'GET').then(res => {
      //   this.imgUrls = res.data;
      //   this.$apply();
      // });
    }

    // wxml事件处理函数对象，存放响应wxml中所捕获到的事件的函数，如bindtap、bindchange

    //声明组件之间的事件处理函数
    //  WePY组件事件处理函数对象，存放响应组件之间通过$broadcast、$emit、$invoke所传递的事件的函数
    //用于监听组件之间的通信与交互事件的事件处理函数需要写在组件和页面的events对象中

  }, {
    key: "getUserInfo",


    // 初登陆时 如果没有存储的userinfo则点击获取，

    value: function getUserInfo(e) {
      var _this3 = this;

      console.log(e, this.$parent, "e");
      // 在Page页面实例中，可以通过this.$parent来访问App实例。
      this.$parent.getUserInfo(e, "sell", function (res) {
        "use strict";

        console.log("getUserInfo", res);
        _this3.hasUserInfo = res.hasUserInfo;
        _this3.userInfo = res.userInfo;
        _this3.$apply();
      });
    }
  }]);

  return Index;
}(_wepy2.default.page);

var _initialiseProps = function _initialiseProps() {
  var _this4 = this;

  this.config = {
    navigationBarTitleText: "获取用户信息"
  };
  this.$repeat = {};
  this.$props = { "CountDown": { "xmlns:v-bind": "", "v-bind:timeUpdate.once": "downTime" }, "CountDown1": { "v-bind:timeUpdate.once": "downTime2" } };
  this.$events = {};
  this.components = {
    CountDown: _countDown2.default,
    CountDown1: _countDown2.default
  };
  this.data = {
    userInfo: null,
    hasUserInfo: false, //用户授权状态
    canIUse: wx.canIUse("button.open-type.getUserInfo"), //判断是否支持button微信授权
    downTime: {
      timeUpdate: 1532008742837, //倒计时
      type: 1
    },
    downTime2: {
      timeUpdate: 1534008742850, //倒计时
      type: 2
    },
    imgUrls: [{
      id: Math.random().toString().slice(-12),
      pic: "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg"
    }, {
      id: Math.random().toString().slice(-12),
      pic: "http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg"
    }, {
      id: Math.random().toString().slice(-12),
      pic: "http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg"
    }]
  };
  this.computed = {};
  this.methods = {
    handleSwiper: function handleSwiper(id, pic, options) {
      console.log(id, pic, options);
      /**
       * id:11111
       * pic:"http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg"
       *  options:_class {active: true, name: "system", source: e, type: "tap", timeStamp: 4463, …}
       */
      /**
       * 传参数
       * id==options.currentTarget.detaset.wpyhandleswiperA
       * pic==options.currentTarget.detaset.wpyhandleswiperB
       */
      _utils2.default.pageGo("/pages/home?type=" + id, 1);
    }
  };
  this.events = {
    "index-emit": function indexEmit() {
      var _ref2;

      var $event = (_ref2 = arguments.length - 1, arguments.length <= _ref2 ? undefined : arguments[_ref2]);

      console.log(_this4.$name + " receive " + $event.name + " from " + $event.source.$name);
    }
  };
};


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uc29sZSIsImxvZyIsIiRwYXJlbnQiLCJnZXRHbG9iYWxEYXRhcyIsImNhbklVc2UiLCJyZXMiLCJoYXNVc2VySW5mbyIsInVzZXJJbmZvIiwiJGFwcGx5IiwiZSIsImdldFVzZXJJbmZvIiwid2VweSIsInBhZ2UiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiQ291bnREb3duIiwiQ291bnREb3duMSIsImRhdGEiLCJ3eCIsImRvd25UaW1lIiwidGltZVVwZGF0ZSIsInR5cGUiLCJkb3duVGltZTIiLCJpbWdVcmxzIiwiaWQiLCJNYXRoIiwicmFuZG9tIiwidG9TdHJpbmciLCJzbGljZSIsInBpYyIsImNvbXB1dGVkIiwibWV0aG9kcyIsImhhbmRsZVN3aXBlciIsIm9wdGlvbnMiLCJ1dGlscyIsInBhZ2VHbyIsImV2ZW50cyIsIiRldmVudCIsImxlbmd0aCIsIiRuYW1lIiwibmFtZSIsInNvdXJjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaURuQjs2QkFDUztBQUFBOztBQUNQQyxjQUFRQyxHQUFSLENBQVksZUFBWjtBQUNBO0FBQ0EsV0FBS0MsT0FBTCxDQUFhQyxjQUFiLENBQTRCLEtBQUtDLE9BQWpDLEVBQTBDLGVBQU87QUFDL0NKLGdCQUFRQyxHQUFSLENBQVksU0FBWixFQUF1QkksR0FBdkI7QUFDQSxlQUFLQyxXQUFMLEdBQW1CRCxJQUFJQyxXQUF2QjtBQUNBLGVBQUtDLFFBQUwsR0FBZ0JGLElBQUlFLFFBQXBCO0FBQ0EsZUFBS0MsTUFBTDtBQUNELE9BTEQ7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Q7O0FBR0Q7O0FBaUJBO0FBQ0E7QUFDQTs7Ozs7O0FBV0E7O2dDQUVZQyxDLEVBQUc7QUFBQTs7QUFDYlQsY0FBUUMsR0FBUixDQUFZUSxDQUFaLEVBQWUsS0FBS1AsT0FBcEIsRUFBNkIsR0FBN0I7QUFDQTtBQUNBLFdBQUtBLE9BQUwsQ0FBYVEsV0FBYixDQUF5QkQsQ0FBekIsRUFBNEIsTUFBNUIsRUFBb0MsZUFBTztBQUN6Qzs7QUFDQVQsZ0JBQVFDLEdBQVIsQ0FBWSxhQUFaLEVBQTJCSSxHQUEzQjtBQUNBLGVBQUtDLFdBQUwsR0FBbUJELElBQUlDLFdBQXZCO0FBQ0EsZUFBS0MsUUFBTCxHQUFnQkYsSUFBSUUsUUFBcEI7QUFDQSxlQUFLQyxNQUFMO0FBQ0QsT0FORDtBQU9EOzs7O0VBL0dnQ0csZUFBS0MsSTs7Ozs7T0FDdENDLE0sR0FBUztBQUNQQyw0QkFBd0I7QUFEakIsRztPQUdWQyxPLEdBQVUsRTtPQUNYQyxNLEdBQVMsRUFBQyxhQUFZLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsMEJBQXlCLFVBQTVDLEVBQWIsRUFBcUUsY0FBYSxFQUFDLDBCQUF5QixXQUExQixFQUFsRixFO09BQ1RDLE8sR0FBVSxFO09BQ1RDLFUsR0FBYTtBQUNWQyxlQUFXQSxtQkFERDtBQUVWQyxnQkFBWUE7QUFGRixHO09BS1pDLEksR0FBTztBQUNMZCxjQUFVLElBREw7QUFFTEQsaUJBQWEsS0FGUixFQUVlO0FBQ3BCRixhQUFTa0IsR0FBR2xCLE9BQUgsQ0FBVyw4QkFBWCxDQUhKLEVBR2dEO0FBQ3JEbUIsY0FBUztBQUNQQyxrQkFBWSxhQURMLEVBQ29CO0FBQzNCQyxZQUFNO0FBRkMsS0FKSjtBQVFMQyxlQUFVO0FBQ1JGLGtCQUFZLGFBREosRUFDbUI7QUFDM0JDLFlBQU07QUFGRSxLQVJMO0FBWUxFLGFBQVMsQ0FDUDtBQUNFQyxVQUFJQyxLQUFLQyxNQUFMLEdBQ0RDLFFBREMsR0FFREMsS0FGQyxDQUVLLENBQUMsRUFGTixDQUROO0FBSUVDLFdBQ0U7QUFMSixLQURPLEVBUVA7QUFDRUwsVUFBSUMsS0FBS0MsTUFBTCxHQUNEQyxRQURDLEdBRURDLEtBRkMsQ0FFSyxDQUFDLEVBRk4sQ0FETjtBQUlFQyxXQUNFO0FBTEosS0FSTyxFQWVQO0FBQ0VMLFVBQUlDLEtBQUtDLE1BQUwsR0FDREMsUUFEQyxHQUVEQyxLQUZDLENBRUssQ0FBQyxFQUZOLENBRE47QUFJRUMsV0FDRTtBQUxKLEtBZk87QUFaSixHO09BdURQQyxRLEdBQVcsRTtPQUdYQyxPLEdBQVU7QUFDUkMsZ0JBRFEsd0JBQ0tSLEVBREwsRUFDU0ssR0FEVCxFQUNjSSxPQURkLEVBQ3VCO0FBQzdCckMsY0FBUUMsR0FBUixDQUFZMkIsRUFBWixFQUFnQkssR0FBaEIsRUFBcUJJLE9BQXJCO0FBQ0E7Ozs7O0FBS0E7Ozs7O0FBS0FDLHNCQUFNQyxNQUFOLENBQWEsc0JBQXNCWCxFQUFuQyxFQUF1QyxDQUF2QztBQUNEO0FBZE8sRztPQW1CVlksTSxHQUFTO0FBQ1Asa0JBQWMscUJBQWE7QUFBQTs7QUFDekIsVUFBSUMsa0JBQWMsVUFBS0MsTUFBTCxHQUFjLENBQTVCLDJEQUFKOztBQUVBMUMsY0FBUUMsR0FBUixDQUNLLE9BQUswQyxLQURWLGlCQUMyQkYsT0FBT0csSUFEbEMsY0FDK0NILE9BQU9JLE1BQVAsQ0FBY0YsS0FEN0Q7QUFHRDtBQVBNLEc7OztrQkF6RlU1QyxLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tIFwid2VweVwiO1xuaW1wb3J0IHd4UmVxdWVzdCBmcm9tIFwiLi4vdXRpbHMvd3hSZXF1ZXN0LmpzXCI7XG5pbXBvcnQgdXRpbHMgZnJvbSBcIi4uL3V0aWxzL3V0aWxzLmpzXCI7XG5pbXBvcnQgQ291bnREb3duIGZyb20gXCIuLi9jb21wb25lbnRzL2NvdW50RG93blwiO1xuaW1wb3J0IENvdW50RG93bjEgZnJvbSBcIi4uL2NvbXBvbmVudHMvY291bnREb3duXCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiBcIuiOt+WPlueUqOaIt+S/oeaBr1wiXG4gIH07XG4gJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJDb3VudERvd25cIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnRpbWVVcGRhdGUub25jZVwiOlwiZG93blRpbWVcIn0sXCJDb3VudERvd24xXCI6e1widi1iaW5kOnRpbWVVcGRhdGUub25jZVwiOlwiZG93blRpbWUyXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICBDb3VudERvd246IENvdW50RG93bixcbiAgICBDb3VudERvd24xOiBDb3VudERvd24xXG4gIH07XG5cbiAgZGF0YSA9IHtcbiAgICB1c2VySW5mbzogbnVsbCxcbiAgICBoYXNVc2VySW5mbzogZmFsc2UsIC8v55So5oi35o6I5p2D54q25oCBXG4gICAgY2FuSVVzZTogd3guY2FuSVVzZShcImJ1dHRvbi5vcGVuLXR5cGUuZ2V0VXNlckluZm9cIiksIC8v5Yik5pat5piv5ZCm5pSv5oyBYnV0dG9u5b6u5L+h5o6I5p2DXG4gICAgZG93blRpbWU6e1xuICAgICAgdGltZVVwZGF0ZTogMTUzMjAwODc0MjgzNywgLy/lgJLorqHml7ZcbiAgICAgIHR5cGU6IDEsXG4gICAgfSxcbiAgICBkb3duVGltZTI6e1xuICAgICAgdGltZVVwZGF0ZTogMTUzNDAwODc0Mjg1MCwgLy/lgJLorqHml7ZcbiAgICAgIHR5cGU6IDIsXG4gICAgfSxcbiAgICBpbWdVcmxzOiBbXG4gICAgICB7XG4gICAgICAgIGlkOiBNYXRoLnJhbmRvbSgpXG4gICAgICAgICAgLnRvU3RyaW5nKClcbiAgICAgICAgICAuc2xpY2UoLTEyKSxcbiAgICAgICAgcGljOlxuICAgICAgICAgIFwiaHR0cDovL2ltZzAyLnRvb29wZW4uY29tL2ltYWdlcy8yMDE1MDkyOC90b29vcGVuX3N5XzE0MzkxMjc1NTcyNi5qcGdcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IE1hdGgucmFuZG9tKClcbiAgICAgICAgICAudG9TdHJpbmcoKVxuICAgICAgICAgIC5zbGljZSgtMTIpLFxuICAgICAgICBwaWM6XG4gICAgICAgICAgXCJodHRwOi8vaW1nMDYudG9vb3Blbi5jb20vaW1hZ2VzLzIwMTYwODE4L3Rvb29wZW5fc3lfMTc1ODY2NDM0Mjk2LmpwZ1wiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogTWF0aC5yYW5kb20oKVxuICAgICAgICAgIC50b1N0cmluZygpXG4gICAgICAgICAgLnNsaWNlKC0xMiksXG4gICAgICAgIHBpYzpcbiAgICAgICAgICBcImh0dHA6Ly9pbWcwNi50b29vcGVuLmNvbS9pbWFnZXMvMjAxNjA4MTgvdG9vb3Blbl9zeV8xNzU4MzMwNDc3MTUuanBnXCJcbiAgICAgIH1cbiAgICBdXG4gIH07XG5cbiAgLy/pobXpnaLnmoTnlJ/lkb3lkajmnJ/lh73mlbBcbiAgb25Mb2FkKCkge1xuICAgIGNvbnNvbGUubG9nKFwi5Yid5aeL5YyW5Yqg6L29LS1vbkxvYWRcIik7XG4gICAgLy8g5Yid5aeL5YyW5pe26I635Y+WdXNlcmluZm9cbiAgICB0aGlzLiRwYXJlbnQuZ2V0R2xvYmFsRGF0YXModGhpcy5jYW5JVXNlLCByZXMgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCLliJ3lp4vljJbliqDovb0tLVwiLCByZXMpO1xuICAgICAgdGhpcy5oYXNVc2VySW5mbyA9IHJlcy5oYXNVc2VySW5mbztcbiAgICAgIHRoaXMudXNlckluZm8gPSByZXMudXNlckluZm87XG4gICAgICB0aGlzLiRhcHBseSgpO1xuICAgIH0pO1xuXG4gICAgLy8g6I635Y+W5pWw5o2uXG4gICAgLy8gbGV0IHVybCA9ICdodHRwOi8vb25zLm1lL3Rvb2xzL2Ryb3Bsb2FkL2pzb24ucGhwP3BhZ2U9MCZzaXplPTEwJztcbiAgICAvLyB3eFJlcXVlc3QuZmV0Y2godXJsLCBudWxsLCBudWxsLCAnR0VUJykudGhlbihyZXMgPT4ge1xuICAgIC8vICAgdGhpcy5pbWdVcmxzID0gcmVzLmRhdGE7XG4gICAgLy8gICB0aGlzLiRhcHBseSgpO1xuICAgIC8vIH0pO1xuICB9XG4gIGNvbXB1dGVkID0ge307XG5cbiAgLy8gd3htbOS6i+S7tuWkhOeQhuWHveaVsOWvueixoe+8jOWtmOaUvuWTjeW6lHd4bWzkuK3miYDmjZXojrfliLDnmoTkuovku7bnmoTlh73mlbDvvIzlpoJiaW5kdGFw44CBYmluZGNoYW5nZVxuICBtZXRob2RzID0ge1xuICAgIGhhbmRsZVN3aXBlcihpZCwgcGljLCBvcHRpb25zKSB7XG4gICAgICBjb25zb2xlLmxvZyhpZCwgcGljLCBvcHRpb25zKTtcbiAgICAgIC8qKlxuICAgICAgICogaWQ6MTExMTFcbiAgICAgICAqIHBpYzpcImh0dHA6Ly9pbWcwMi50b29vcGVuLmNvbS9pbWFnZXMvMjAxNTA5MjgvdG9vb3Blbl9zeV8xNDM5MTI3NTU3MjYuanBnXCJcbiAgICAgICAqICBvcHRpb25zOl9jbGFzcyB7YWN0aXZlOiB0cnVlLCBuYW1lOiBcInN5c3RlbVwiLCBzb3VyY2U6IGUsIHR5cGU6IFwidGFwXCIsIHRpbWVTdGFtcDogNDQ2MyzCoOKApn1cbiAgICAgICAqL1xuICAgICAgLyoqXG4gICAgICAgKiDkvKDlj4LmlbBcbiAgICAgICAqIGlkPT1vcHRpb25zLmN1cnJlbnRUYXJnZXQuZGV0YXNldC53cHloYW5kbGVzd2lwZXJBXG4gICAgICAgKiBwaWM9PW9wdGlvbnMuY3VycmVudFRhcmdldC5kZXRhc2V0LndweWhhbmRsZXN3aXBlckJcbiAgICAgICAqL1xuICAgICAgdXRpbHMucGFnZUdvKFwiL3BhZ2VzL2hvbWU/dHlwZT1cIiArIGlkLCAxKTtcbiAgICB9XG4gIH07XG4gIC8v5aOw5piO57uE5Lu25LmL6Ze055qE5LqL5Lu25aSE55CG5Ye95pWwXG4gIC8vICBXZVBZ57uE5Lu25LqL5Lu25aSE55CG5Ye95pWw5a+56LGh77yM5a2Y5pS+5ZON5bqU57uE5Lu25LmL6Ze06YCa6L+HJGJyb2FkY2FzdOOAgSRlbWl044CBJGludm9rZeaJgOS8oOmAkueahOS6i+S7tueahOWHveaVsFxuICAvL+eUqOS6juebkeWQrOe7hOS7tuS5i+mXtOeahOmAmuS/oeS4juS6pOS6kuS6i+S7tueahOS6i+S7tuWkhOeQhuWHveaVsOmcgOimgeWGmeWcqOe7hOS7tuWSjOmhtemdoueahGV2ZW50c+WvueixoeS4rVxuICBldmVudHMgPSB7XG4gICAgXCJpbmRleC1lbWl0XCI6ICguLi5hcmdzKSA9PiB7XG4gICAgICBsZXQgJGV2ZW50ID0gYXJnc1thcmdzLmxlbmd0aCAtIDFdO1xuXG4gICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgYCR7dGhpcy4kbmFtZX0gcmVjZWl2ZSAkeyRldmVudC5uYW1lfSBmcm9tICR7JGV2ZW50LnNvdXJjZS4kbmFtZX1gXG4gICAgICApO1xuICAgIH1cbiAgfTtcblxuICAvLyDliJ3nmbvpmYbml7Yg5aaC5p6c5rKh5pyJ5a2Y5YKo55qEdXNlcmluZm/liJnngrnlh7vojrflj5bvvIxcblxuICBnZXRVc2VySW5mbyhlKSB7XG4gICAgY29uc29sZS5sb2coZSwgdGhpcy4kcGFyZW50LCBcImVcIik7XG4gICAgLy8g5ZyoUGFnZemhtemdouWunuS+i+S4re+8jOWPr+S7pemAmui/h3RoaXMuJHBhcmVudOadpeiuv+mXrkFwcOWunuS+i+OAglxuICAgIHRoaXMuJHBhcmVudC5nZXRVc2VySW5mbyhlLCBcInNlbGxcIiwgcmVzID0+IHtcbiAgICAgIFwidXNlIHN0cmljdFwiO1xuICAgICAgY29uc29sZS5sb2coXCJnZXRVc2VySW5mb1wiLCByZXMpO1xuICAgICAgdGhpcy5oYXNVc2VySW5mbyA9IHJlcy5oYXNVc2VySW5mbztcbiAgICAgIHRoaXMudXNlckluZm8gPSByZXMudXNlckluZm87XG4gICAgICB0aGlzLiRhcHBseSgpO1xuICAgIH0pO1xuICB9XG59XG4iXX0=