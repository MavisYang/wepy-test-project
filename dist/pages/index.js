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

var _swiper = require('./../components/swiper.js');

var _swiper2 = _interopRequireDefault(_swiper);

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
      this.$broadcast('handleSwiper'); //由父组件发起，所有子组件都会收到此广播事件

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
  this.$props = { "CountDown": { "xmlns:v-bind": "", "v-bind:timeUpdate.once": "downTime" }, "CountDown1": { "v-bind:timeUpdate.once": "downTime2" }, "Swiper": { "v-bind:swiperArray.sync": "imgUrls", "v-bind:swiperParmas.once": "swiperParmas", "xmlns:v-on": "" } };
  this.$events = { "Swiper": { "v-on:handleSwiper": "handleSwiper" } };
  this.components = {
    CountDown: _countDown2.default,
    CountDown1: _countDown2.default,
    Swiper: _swiper2.default
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
    }],
    swiperParmas: {
      // 为swiper参数，不用可不传
      "vertical": false, //滑动方向是否为纵向
      'autoplay': true, //是否自动切换
      "indicator-dots": true, //是否显示面板指示点
      "indicator-color": '#fff', //指示点颜色
      "indicator-active-color": '#FF6666', //当前选中的指示点颜色
      "circular": true, //是否采用衔接滑动
      "interval": 5000, //自动切换时间间隔
      "duration": 500, //滑动动画时长
      "previous-margin": '20px', //前边距，
      "next-margin": '20px', //后边距 与circular一起用效果更好
      "display-multiple-items": 1 //同时显示的滑块数量
    }
  };
  this.computed = {};
  this.methods = {
    handleSwiper: function handleSwiper(id, pic, index, options) {
      console.log(222, id, pic, index, options);
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
      // utils.pageGo("/pages/home?type=" + id, 1);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uc29sZSIsImxvZyIsIiRwYXJlbnQiLCJnZXRHbG9iYWxEYXRhcyIsImNhbklVc2UiLCJyZXMiLCJoYXNVc2VySW5mbyIsInVzZXJJbmZvIiwiJGFwcGx5IiwiJGJyb2FkY2FzdCIsImUiLCJnZXRVc2VySW5mbyIsIndlcHkiLCJwYWdlIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsIkNvdW50RG93biIsIkNvdW50RG93bjEiLCJTd2lwZXIiLCJkYXRhIiwid3giLCJkb3duVGltZSIsInRpbWVVcGRhdGUiLCJ0eXBlIiwiZG93blRpbWUyIiwiaW1nVXJscyIsImlkIiwiTWF0aCIsInJhbmRvbSIsInRvU3RyaW5nIiwic2xpY2UiLCJwaWMiLCJzd2lwZXJQYXJtYXMiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJoYW5kbGVTd2lwZXIiLCJpbmRleCIsIm9wdGlvbnMiLCJldmVudHMiLCIkZXZlbnQiLCJsZW5ndGgiLCIkbmFtZSIsIm5hbWUiLCJzb3VyY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdURuQjs2QkFDUztBQUFBOztBQUNQQyxjQUFRQyxHQUFSLENBQVksZUFBWjtBQUNBO0FBQ0EsV0FBS0MsT0FBTCxDQUFhQyxjQUFiLENBQTRCLEtBQUtDLE9BQWpDLEVBQTBDLGVBQU87QUFDL0NKLGdCQUFRQyxHQUFSLENBQVksU0FBWixFQUF1QkksR0FBdkI7QUFDQSxlQUFLQyxXQUFMLEdBQW1CRCxJQUFJQyxXQUF2QjtBQUNBLGVBQUtDLFFBQUwsR0FBZ0JGLElBQUlFLFFBQXBCO0FBQ0EsZUFBS0MsTUFBTDtBQUNELE9BTEQ7QUFNQSxXQUFLQyxVQUFMLENBQWdCLGNB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YyxVQUFLQyxNQUFMLEdBQWMsQ0FBNUIsMkRBQUo7O0FBRUE1QyxjQUFRQyxHQUFSLENBQ0ssT0FBSzRDLEtBRFYsaUJBQzJCRixPQUFPRyxJQURsQyxjQUMrQ0gsT0FBT0ksTUFBUCxDQUFjRixLQUQ3RDtBQUdEO0FBUE0sRzs7O2tCQWhHVTlDLEsiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gXCJ3ZXB5XCI7XG5pbXBvcnQgd3hSZXF1ZXN0IGZyb20gXCIuLi91dGlscy93eFJlcXVlc3QuanNcIjtcbmltcG9ydCB1dGlscyBmcm9tIFwiLi4vdXRpbHMvdXRpbHMuanNcIjtcbmltcG9ydCBDb3VudERvd24gZnJvbSBcIi4uL2NvbXBvbmVudHMvY291bnREb3duXCI7XG5pbXBvcnQgQ291bnREb3duMSBmcm9tIFwiLi4vY29tcG9uZW50cy9jb3VudERvd25cIjtcbmltcG9ydCBTd2lwZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvc3dpcGVyXCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiBcIuiOt+WPlueUqOaIt+S/oeaBr1wiXG4gIH07XG4gJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJDb3VudERvd25cIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnRpbWVVcGRhdGUub25jZVwiOlwiZG93blRpbWVcIn0sXCJDb3VudERvd24xXCI6e1widi1iaW5kOnRpbWVVcGRhdGUub25jZVwiOlwiZG93blRpbWUyXCJ9LFwiU3dpcGVyXCI6e1widi1iaW5kOnN3aXBlckFycmF5LnN5bmNcIjpcImltZ1VybHNcIixcInYtYmluZDpzd2lwZXJQYXJtYXMub25jZVwiOlwic3dpcGVyUGFybWFzXCIsXCJ4bWxuczp2LW9uXCI6XCJcIn19O1xyXG4kZXZlbnRzID0ge1wiU3dpcGVyXCI6e1widi1vbjpoYW5kbGVTd2lwZXJcIjpcImhhbmRsZVN3aXBlclwifX07XHJcbiBjb21wb25lbnRzID0ge1xuICAgIENvdW50RG93bjogQ291bnREb3duLFxuICAgIENvdW50RG93bjE6IENvdW50RG93bjEsXG4gICAgU3dpcGVyOlN3aXBlclxuICB9O1xuXG4gIGRhdGEgPSB7XG4gICAgdXNlckluZm86IG51bGwsXG4gICAgaGFzVXNlckluZm86IGZhbHNlLCAvL+eUqOaIt+aOiOadg+eKtuaAgVxuICAgIGNhbklVc2U6IHd4LmNhbklVc2UoXCJidXR0b24ub3Blbi10eXBlLmdldFVzZXJJbmZvXCIpLCAvL+WIpOaWreaYr+WQpuaUr+aMgWJ1dHRvbuW+ruS/oeaOiOadg1xuICAgIGRvd25UaW1lOntcbiAgICAgIHRpbWVVcGRhdGU6IDE1MzIwMDg3NDI4MzcsIC8v5YCS6K6h5pe2XG4gICAgICB0eXBlOiAxLFxuICAgIH0sXG4gICAgZG93blRpbWUyOntcbiAgICAgIHRpbWVVcGRhdGU6IDE1MzQwMDg3NDI4NTAsIC8v5YCS6K6h5pe2XG4gICAgICB0eXBlOiAyLFxuICAgIH0sXG4gICAgaW1nVXJsczogW1xuICAgICAge1xuICAgICAgICBpZDogTWF0aC5yYW5kb20oKSAudG9TdHJpbmcoKSAuc2xpY2UoLTEyKSxcbiAgICAgICAgcGljOlwiaHR0cDovL2ltZzAyLnRvb29wZW4uY29tL2ltYWdlcy8yMDE1MDkyOC90b29vcGVuX3N5XzE0MzkxMjc1NTcyNi5qcGdcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IE1hdGgucmFuZG9tKCkgLnRvU3RyaW5nKCkgLnNsaWNlKC0xMiksXG4gICAgICAgIHBpYzogXCJodHRwOi8vaW1nMDYudG9vb3Blbi5jb20vaW1hZ2VzLzIwMTYwODE4L3Rvb29wZW5fc3lfMTc1ODY2NDM0Mjk2LmpwZ1wiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogTWF0aC5yYW5kb20oKSAudG9TdHJpbmcoKSAuc2xpY2UoLTEyKSxcbiAgICAgICAgcGljOiBcImh0dHA6Ly9pbWcwNi50b29vcGVuLmNvbS9pbWFnZXMvMjAxNjA4MTgvdG9vb3Blbl9zeV8xNzU4MzMwNDc3MTUuanBnXCJcbiAgICAgIH1cbiAgICBdLFxuICAgIHN3aXBlclBhcm1hczp7XG4gICAgICAvLyDkuLpzd2lwZXLlj4LmlbDvvIzkuI3nlKjlj6/kuI3kvKBcbiAgICAgIFwidmVydGljYWxcIjpmYWxzZSwvL+a7keWKqOaWueWQkeaYr+WQpuS4uue6teWQkVxuICAgICAgJ2F1dG9wbGF5Jzp0cnVlLC8v5piv5ZCm6Ieq5Yqo5YiH5o2iXG4gICAgICBcImluZGljYXRvci1kb3RzXCI6dHJ1ZSAsLy/mmK/lkKbmmL7npLrpnaLmnb/mjIfnpLrngrlcbiAgICAgIFwiaW5kaWNhdG9yLWNvbG9yXCI6JyNmZmYnICwvL+aMh+ekuueCueminOiJslxuICAgICAgXCJpbmRpY2F0b3ItYWN0aXZlLWNvbG9yXCI6JyNGRjY2NjYnLC8v5b2T5YmN6YCJ5Lit55qE5oyH56S654K56aKc6ImyXG4gICAgICBcImNpcmN1bGFyXCI6dHJ1ZSwgLy/mmK/lkKbph4fnlKjooZTmjqXmu5HliqhcbiAgICAgIFwiaW50ZXJ2YWxcIjo1MDAwLC8v6Ieq5Yqo5YiH5o2i5pe26Ze06Ze06ZqUXG4gICAgICBcImR1cmF0aW9uXCI6NTAwLC8v5ruR5Yqo5Yqo55S75pe26ZW/XG4gICAgICBcInByZXZpb3VzLW1hcmdpblwiOicyMHB4JyAsLy/liY3ovrnot53vvIxcbiAgICAgIFwibmV4dC1tYXJnaW5cIjonMjBweCcsLy/lkI7ovrnot50g5LiOY2lyY3VsYXLkuIDotbfnlKjmlYjmnpzmm7Tlpb1cbiAgICAgIFwiZGlzcGxheS1tdWx0aXBsZS1pdGVtc1wiOjEsLy/lkIzml7bmmL7npLrnmoTmu5HlnZfmlbDph49cbiAgICB9XG4gIH07XG5cbiAgLy/pobXpnaLnmoTnlJ/lkb3lkajmnJ/lh73mlbBcbiAgb25Mb2FkKCkge1xuICAgIGNvbnNvbGUubG9nKFwi5Yid5aeL5YyW5Yqg6L29LS1vbkxvYWRcIik7XG4gICAgLy8g5Yid5aeL5YyW5pe26I635Y+WdXNlcmluZm9cbiAgICB0aGlzLiRwYXJlbnQuZ2V0R2xvYmFsRGF0YXModGhpcy5jYW5JVXNlLCByZXMgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCLliJ3lp4vljJbliqDovb0tLVwiLCByZXMpO1xuICAgICAgdGhpcy5oYXNVc2VySW5mbyA9IHJlcy5oYXNVc2VySW5mbztcbiAgICAgIHRoaXMudXNlckluZm8gPSByZXMudXNlckluZm87XG4gICAgICB0aGlzLiRhcHBseSgpO1xuICAgIH0pO1xuICAgIHRoaXMuJGJyb2FkY2FzdCgnaGFuZGxlU3dpcGVyJyk7IC8v55Sx54i257uE5Lu25Y+R6LW377yM5omA5pyJ5a2Q57uE5Lu26YO95Lya5pS25Yiw5q2k5bm/5pKt5LqL5Lu2XG5cbiAgICAvLyDojrflj5bmlbDmja5cbiAgICAvLyBsZXQgdXJsID0gJ2h0dHA6Ly9vbnMubWUvdG9vbHMvZHJvcGxvYWQvanNvbi5waHA/cGFnZT0wJnNpemU9MTAnO1xuICAgIC8vIHd4UmVxdWVzdC5mZXRjaCh1cmwsIG51bGwsIG51bGwsICdHRVQnKS50aGVuKHJlcyA9PiB7XG4gICAgLy8gICB0aGlzLmltZ1VybHMgPSByZXMuZGF0YTtcbiAgICAvLyAgIHRoaXMuJGFwcGx5KCk7XG4gICAgLy8gfSk7XG4gIH1cbiAgY29tcHV0ZWQgPSB7fTtcblxuICAvLyB3eG1s5LqL5Lu25aSE55CG5Ye95pWw5a+56LGh77yM5a2Y5pS+5ZON5bqUd3htbOS4reaJgOaNleiOt+WIsOeahOS6i+S7tueahOWHveaVsO+8jOWmgmJpbmR0YXDjgIFiaW5kY2hhbmdlXG4gIG1ldGhvZHMgPSB7XG4gICAgaGFuZGxlU3dpcGVyKGlkLCBwaWMsIGluZGV4LG9wdGlvbnMpIHtcbiAgICAgIGNvbnNvbGUubG9nKDIyMixpZCwgcGljLGluZGV4LCBvcHRpb25zKTtcbiAgICAgIC8qKlxuICAgICAgICogaWQ6MTExMTFcbiAgICAgICAqIHBpYzpcImh0dHA6Ly9pbWcwMi50b29vcGVuLmNvbS9pbWFnZXMvMjAxNTA5MjgvdG9vb3Blbl9zeV8xNDM5MTI3NTU3MjYuanBnXCJcbiAgICAgICAqICBvcHRpb25zOl9jbGFzcyB7YWN0aXZlOiB0cnVlLCBuYW1lOiBcInN5c3RlbVwiLCBzb3VyY2U6IGUsIHR5cGU6IFwidGFwXCIsIHRpbWVTdGFtcDogNDQ2MyzCoOKApn1cbiAgICAgICAqL1xuICAgICAgLyoqXG4gICAgICAgKiDkvKDlj4LmlbBcbiAgICAgICAqIGlkPT1vcHRpb25zLmN1cnJlbnRUYXJnZXQuZGV0YXNldC53cHloYW5kbGVzd2lwZXJBXG4gICAgICAgKiBwaWM9PW9wdGlvbnMuY3VycmVudFRhcmdldC5kZXRhc2V0LndweWhhbmRsZXN3aXBlckJcbiAgICAgICAqL1xuICAgICAgLy8gdXRpbHMucGFnZUdvKFwiL3BhZ2VzL2hvbWU/dHlwZT1cIiArIGlkLCAxKTtcbiAgICB9XG4gIH07XG4gIC8v5aOw5piO57uE5Lu25LmL6Ze055qE5LqL5Lu25aSE55CG5Ye95pWwXG4gIC8vICBXZVBZ57uE5Lu25LqL5Lu25aSE55CG5Ye95pWw5a+56LGh77yM5a2Y5pS+5ZON5bqU57uE5Lu25LmL6Ze06YCa6L+HJGJyb2FkY2FzdOOAgSRlbWl044CBJGludm9rZeaJgOS8oOmAkueahOS6i+S7tueahOWHveaVsFxuICAvL+eUqOS6juebkeWQrOe7hOS7tuS5i+mXtOeahOmAmuS/oeS4juS6pOS6kuS6i+S7tueahOS6i+S7tuWkhOeQhuWHveaVsOmcgOimgeWGmeWcqOe7hOS7tuWSjOmhtemdoueahGV2ZW50c+WvueixoeS4rVxuICBldmVudHMgPSB7XG4gICAgXCJpbmRleC1lbWl0XCI6ICguLi5hcmdzKSA9PiB7XG4gICAgICBsZXQgJGV2ZW50ID0gYXJnc1thcmdzLmxlbmd0aCAtIDFdO1xuXG4gICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgYCR7dGhpcy4kbmFtZX0gcmVjZWl2ZSAkeyRldmVudC5uYW1lfSBmcm9tICR7JGV2ZW50LnNvdXJjZS4kbmFtZX1gXG4gICAgICApO1xuICAgIH1cbiAgfTtcblxuICAvLyDliJ3nmbvpmYbml7Yg5aaC5p6c5rKh5pyJ5a2Y5YKo55qEdXNlcmluZm/liJnngrnlh7vojrflj5bvvIxcblxuICBnZXRVc2VySW5mbyhlKSB7XG4gICAgY29uc29sZS5sb2coZSwgdGhpcy4kcGFyZW50LCBcImVcIik7XG4gICAgLy8g5ZyoUGFnZemhtemdouWunuS+i+S4re+8jOWPr+S7pemAmui/h3RoaXMuJHBhcmVudOadpeiuv+mXrkFwcOWunuS+i+OAglxuICAgIHRoaXMuJHBhcmVudC5nZXRVc2VySW5mbyhlLCBcInNlbGxcIiwgcmVzID0+IHtcbiAgICAgIFwidXNlIHN0cmljdFwiO1xuICAgICAgY29uc29sZS5sb2coXCJnZXRVc2VySW5mb1wiLCByZXMpO1xuICAgICAgdGhpcy5oYXNVc2VySW5mbyA9IHJlcy5oYXNVc2VySW5mbztcbiAgICAgIHRoaXMudXNlckluZm8gPSByZXMudXNlckluZm87XG4gICAgICB0aGlzLiRhcHBseSgpO1xuICAgIH0pO1xuICB9XG59XG4iXX0=