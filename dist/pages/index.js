"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wxRequest = require('./../utils/wxRequest.js');

var _wxRequest2 = _interopRequireDefault(_wxRequest);

var _utils = require('./../utils/utils.js');

var _utils2 = _interopRequireDefault(_utils);

var _countDown = require('./../components/shareComponent/countDown.js');

var _countDown2 = _interopRequireDefault(_countDown);

var _swiper = require('./../components/shareComponent/swiper.js');

var _swiper2 = _interopRequireDefault(_swiper);

var _promptBox = require('./../components/shareComponent/promptBox.js');

var _promptBox2 = _interopRequireDefault(_promptBox);

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
  this.$props = { "CountDown": { "xmlns:v-bind": "", "v-bind:timeUpdate.once": "downTime" }, "CountDown1": { "v-bind:timeUpdate.once": "downTime2" }, "Swiper": { "v-bind:swiperArray.sync": "imgUrls", "v-bind:swiperParmas.once": "swiperParmas", "xmlns:v-on": "" }, "PromptBox": { "v-bind:prompt.sync": "prompt" } };
  this.$events = { "Swiper": { "v-on:handleSwiper": "handleSwiper" } };
  this.components = {
    CountDown: _countDown2.default,
    CountDown1: _countDown2.default,
    Swiper: _swiper2.default,
    PromptBox: _promptBox2.default
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
    },
    prompt: null
  };
  this.computed = {};
  this.methods = {
    handleSwiper: function handleSwiper(id, pic, index, options) {
      // console.log(222,id, pic,index, options);
      this.prompt = '我是第' + index + '张图片';
      console.log(this.prompt);
      console.log(_typeof(this.prompt));

      this.$apply();
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uc29sZSIsImxvZyIsIiRwYXJlbnQiLCJnZXRHbG9iYWxEYXRhcyIsImNhbklVc2UiLCJyZXMiLCJoYXNVc2VySW5mbyIsInVzZXJJbmZvIiwiJGFwcGx5IiwiJGJyb2FkY2FzdCIsImUiLCJnZXRVc2VySW5mbyIsIndlcHkiLCJwYWdlIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsIkNvdW50RG93biIsIkNvdW50RG93bjEiLCJTd2lwZXIiLCJQcm9tcHRCb3giLCJkYXRhIiwid3giLCJkb3duVGltZSIsInRpbWVVcGRhdGUiLCJ0eXBlIiwiZG93blRpbWUyIiwiaW1nVXJscyIsImlkIiwiTWF0aCIsInJhbmRvbSIsInRvU3RyaW5nIiwic2xpY2UiLCJwaWMiLCJzd2lwZXJQYXJtYXMiLCJwcm9tcHQiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJoYW5kbGVTd2lwZXIiLCJpbmRleCIsIm9wdGlvbnMiLCJldmVudHMiLCIkZXZlbnQiLCJsZW5ndGgiLCIkbmFtZSIsIm5hbWUiLCJzb3VyY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlEbkI7NkJBQ1M7QUFBQTs7QUFDUEMsY0FBUUMsR0FBUixDQUFZLGVBQVo7QUFDQTtBQUNBLFdBQUtDLE9BQUwsQ0FBYUMsY0FBYixDQUE0QixLQUFLQyxPQUFqQyxFQUEwQyxlQUFPO0FBQy9DSixnQkFBUUMsR0FBUixDQUFZLFNBQVosRUFBdUJJLEdBQXZCO0FBQ0EsZUFBS0MsV0FBTCxHQUFtQkQsSUFBSUMsV0FBdkI7QUFDQSxlQUFLQyxRQUFMLEdBQWdCRixJQUFJRSxRQUFwQjtBQUNBLGVBQUtDLE1BQUw7QUFD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QVksS0FBS3FDLE1BQWpCO0FBQ0F0QyxjQUFRQyxHQUFSLFNBQW1CLEtBQUtxQyxNQUF4Qjs7QUFFQSxXQUFLOUIsTUFBTDtBQUNBO0FBQ0Q7QUFUTyxHO09BY1ZvQyxNLEdBQVM7QUFDUCxrQkFBYyxxQkFBYTtBQUFBOztBQUN6QixVQUFJQyxrQkFBYyxVQUFLQyxNQUFMLEdBQWMsQ0FBNUIsMkRBQUo7O0FBRUE5QyxjQUFRQyxHQUFSLENBQ0ssT0FBSzhDLEtBRFYsaUJBQzJCRixPQUFPRyxJQURsQyxjQUMrQ0gsT0FBT0ksTUFBUCxDQUFjRixLQUQ3RDtBQUdEO0FBUE0sRzs7O2tCQTdGVWhELEsiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gXCJ3ZXB5XCI7XG5pbXBvcnQgd3hSZXF1ZXN0IGZyb20gXCIuLi91dGlscy93eFJlcXVlc3QuanNcIjtcbmltcG9ydCB1dGlscyBmcm9tIFwiLi4vdXRpbHMvdXRpbHMuanNcIjtcbmltcG9ydCBDb3VudERvd24gZnJvbSBcIi4uL2NvbXBvbmVudHMvc2hhcmVDb21wb25lbnQvY291bnREb3duXCI7XG5pbXBvcnQgQ291bnREb3duMSBmcm9tIFwiLi4vY29tcG9uZW50cy9zaGFyZUNvbXBvbmVudC9jb3VudERvd25cIjtcbmltcG9ydCBTd2lwZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvc2hhcmVDb21wb25lbnQvc3dpcGVyXCI7XG5pbXBvcnQgUHJvbXB0Qm94IGZyb20gXCIuLi9jb21wb25lbnRzL3NoYXJlQ29tcG9uZW50L3Byb21wdEJveFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiBcIuiOt+WPlueUqOaIt+S/oeaBr1wiXG4gIH07XG4gJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJDb3VudERvd25cIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnRpbWVVcGRhdGUub25jZVwiOlwiZG93blRpbWVcIn0sXCJDb3VudERvd24xXCI6e1widi1iaW5kOnRpbWVVcGRhdGUub25jZVwiOlwiZG93blRpbWUyXCJ9LFwiU3dpcGVyXCI6e1widi1iaW5kOnN3aXBlckFycmF5LnN5bmNcIjpcImltZ1VybHNcIixcInYtYmluZDpzd2lwZXJQYXJtYXMub25jZVwiOlwic3dpcGVyUGFybWFzXCIsXCJ4bWxuczp2LW9uXCI6XCJcIn0sXCJQcm9tcHRCb3hcIjp7XCJ2LWJpbmQ6cHJvbXB0LnN5bmNcIjpcInByb21wdFwifX07XHJcbiRldmVudHMgPSB7XCJTd2lwZXJcIjp7XCJ2LW9uOmhhbmRsZVN3aXBlclwiOlwiaGFuZGxlU3dpcGVyXCJ9fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgQ291bnREb3duOiBDb3VudERvd24sXG4gICAgQ291bnREb3duMTogQ291bnREb3duMSxcbiAgICBTd2lwZXI6U3dpcGVyLFxuICAgIFByb21wdEJveDpQcm9tcHRCb3hcbiAgfTtcblxuICBkYXRhID0ge1xuICAgIHVzZXJJbmZvOiBudWxsLFxuICAgIGhhc1VzZXJJbmZvOiBmYWxzZSwgLy/nlKjmiLfmjojmnYPnirbmgIFcbiAgICBjYW5JVXNlOiB3eC5jYW5JVXNlKFwiYnV0dG9uLm9wZW4tdHlwZS5nZXRVc2VySW5mb1wiKSwgLy/liKTmlq3mmK/lkKbmlK/mjIFidXR0b27lvq7kv6HmjojmnYNcbiAgICBkb3duVGltZTp7XG4gICAgICB0aW1lVXBkYXRlOiAxNTMyMDA4NzQyODM3LCAvL+WAkuiuoeaXtlxuICAgICAgdHlwZTogMSxcbiAgICB9LFxuICAgIGRvd25UaW1lMjp7XG4gICAgICB0aW1lVXBkYXRlOiAxNTM0MDA4NzQyODUwLCAvL+WAkuiuoeaXtlxuICAgICAgdHlwZTogMixcbiAgICB9LFxuICAgIGltZ1VybHM6IFtcbiAgICAgIHtcbiAgICAgICAgaWQ6IE1hdGgucmFuZG9tKCkgLnRvU3RyaW5nKCkgLnNsaWNlKC0xMiksXG4gICAgICAgIHBpYzpcImh0dHA6Ly9pbWcwMi50b29vcGVuLmNvbS9pbWFnZXMvMjAxNTA5MjgvdG9vb3Blbl9zeV8xNDM5MTI3NTU3MjYuanBnXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiBNYXRoLnJhbmRvbSgpIC50b1N0cmluZygpIC5zbGljZSgtMTIpLFxuICAgICAgICBwaWM6IFwiaHR0cDovL2ltZzA2LnRvb29wZW4uY29tL2ltYWdlcy8yMDE2MDgxOC90b29vcGVuX3N5XzE3NTg2NjQzNDI5Ni5qcGdcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IE1hdGgucmFuZG9tKCkgLnRvU3RyaW5nKCkgLnNsaWNlKC0xMiksXG4gICAgICAgIHBpYzogXCJodHRwOi8vaW1nMDYudG9vb3Blbi5jb20vaW1hZ2VzLzIwMTYwODE4L3Rvb29wZW5fc3lfMTc1ODMzMDQ3NzE1LmpwZ1wiXG4gICAgICB9XG4gICAgXSxcbiAgICBzd2lwZXJQYXJtYXM6e1xuICAgICAgLy8g5Li6c3dpcGVy5Y+C5pWw77yM5LiN55So5Y+v5LiN5LygXG4gICAgICBcInZlcnRpY2FsXCI6ZmFsc2UsLy/mu5HliqjmlrnlkJHmmK/lkKbkuLrnurXlkJFcbiAgICAgICdhdXRvcGxheSc6dHJ1ZSwvL+aYr+WQpuiHquWKqOWIh+aNolxuICAgICAgXCJpbmRpY2F0b3ItZG90c1wiOnRydWUgLC8v5piv5ZCm5pi+56S66Z2i5p2/5oyH56S654K5XG4gICAgICBcImluZGljYXRvci1jb2xvclwiOicjZmZmJyAsLy/mjIfnpLrngrnpopzoibJcbiAgICAgIFwiaW5kaWNhdG9yLWFjdGl2ZS1jb2xvclwiOicjRkY2NjY2JywvL+W9k+WJjemAieS4reeahOaMh+ekuueCueminOiJslxuICAgICAgXCJjaXJjdWxhclwiOnRydWUsIC8v5piv5ZCm6YeH55So6KGU5o6l5ruR5YqoXG4gICAgICBcImludGVydmFsXCI6NTAwMCwvL+iHquWKqOWIh+aNouaXtumXtOmXtOmalFxuICAgICAgXCJkdXJhdGlvblwiOjUwMCwvL+a7keWKqOWKqOeUu+aXtumVv1xuICAgICAgXCJwcmV2aW91cy1tYXJnaW5cIjonMjBweCcgLC8v5YmN6L656Led77yMXG4gICAgICBcIm5leHQtbWFyZ2luXCI6JzIwcHgnLC8v5ZCO6L656LedIOS4jmNpcmN1bGFy5LiA6LW355So5pWI5p6c5pu05aW9XG4gICAgICBcImRpc3BsYXktbXVsdGlwbGUtaXRlbXNcIjoxLC8v5ZCM5pe25pi+56S655qE5ruR5Z2X5pWw6YePXG4gICAgfSxcbiAgICBwcm9tcHQ6bnVsbCxcbiAgfTtcblxuICAvL+mhtemdoueahOeUn+WRveWRqOacn+WHveaVsFxuICBvbkxvYWQoKSB7XG4gICAgY29uc29sZS5sb2coXCLliJ3lp4vljJbliqDovb0tLW9uTG9hZFwiKTtcbiAgICAvLyDliJ3lp4vljJbml7bojrflj5Z1c2VyaW5mb1xuICAgIHRoaXMuJHBhcmVudC5nZXRHbG9iYWxEYXRhcyh0aGlzLmNhbklVc2UsIHJlcyA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcIuWIneWni+WMluWKoOi9vS0tXCIsIHJlcyk7XG4gICAgICB0aGlzLmhhc1VzZXJJbmZvID0gcmVzLmhhc1VzZXJJbmZvO1xuICAgICAgdGhpcy51c2VySW5mbyA9IHJlcy51c2VySW5mbztcbiAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgfSk7XG4gICAgdGhpcy4kYnJvYWRjYXN0KCdoYW5kbGVTd2lwZXInKTsgLy/nlLHniLbnu4Tku7blj5HotbfvvIzmiYDmnInlrZDnu4Tku7bpg73kvJrmlLbliLDmraTlub/mkq3kuovku7ZcblxuICAgIC8vIOiOt+WPluaVsOaNrlxuICAgIC8vIGxldCB1cmwgPSAnaHR0cDovL29ucy5tZS90b29scy9kcm9wbG9hZC9qc29uLnBocD9wYWdlPTAmc2l6ZT0xMCc7XG4gICAgLy8gd3hSZXF1ZXN0LmZldGNoKHVybCwgbnVsbCwgbnVsbCwgJ0dFVCcpLnRoZW4ocmVzID0+IHtcbiAgICAvLyAgIHRoaXMuaW1nVXJscyA9IHJlcy5kYXRhO1xuICAgIC8vICAgdGhpcy4kYXBwbHkoKTtcbiAgICAvLyB9KTtcbiAgfVxuICBjb21wdXRlZCA9IHt9O1xuXG4gIC8vIHd4bWzkuovku7blpITnkIblh73mlbDlr7nosaHvvIzlrZjmlL7lk43lupR3eG1s5Lit5omA5o2V6I635Yiw55qE5LqL5Lu255qE5Ye95pWw77yM5aaCYmluZHRhcOOAgWJpbmRjaGFuZ2VcbiAgbWV0aG9kcyA9IHtcbiAgICBoYW5kbGVTd2lwZXIoaWQsIHBpYywgaW5kZXgsb3B0aW9ucykge1xuICAgICAgLy8gY29uc29sZS5sb2coMjIyLGlkLCBwaWMsaW5kZXgsIG9wdGlvbnMpO1xuICAgICAgdGhpcy5wcm9tcHQgPSAn5oiR5piv56ysJytpbmRleCsn5byg5Zu+54mHJztcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvbXB0KTtcbiAgICAgIGNvbnNvbGUubG9nKHR5cGVvZiB0aGlzLnByb21wdCk7XG4gICAgICBcbiAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgIC8vIHV0aWxzLnBhZ2VHbyhcIi9wYWdlcy9ob21lP3R5cGU9XCIgKyBpZCwgMSk7XG4gICAgfVxuICB9O1xuICAvL+WjsOaYjue7hOS7tuS5i+mXtOeahOS6i+S7tuWkhOeQhuWHveaVsFxuICAvLyAgV2VQWee7hOS7tuS6i+S7tuWkhOeQhuWHveaVsOWvueixoe+8jOWtmOaUvuWTjeW6lOe7hOS7tuS5i+mXtOmAmui/hyRicm9hZGNhc3TjgIEkZW1pdOOAgSRpbnZva2XmiYDkvKDpgJLnmoTkuovku7bnmoTlh73mlbBcbiAgLy/nlKjkuo7nm5HlkKznu4Tku7bkuYvpl7TnmoTpgJrkv6HkuI7kuqTkupLkuovku7bnmoTkuovku7blpITnkIblh73mlbDpnIDopoHlhpnlnKjnu4Tku7blkozpobXpnaLnmoRldmVudHPlr7nosaHkuK1cbiAgZXZlbnRzID0ge1xuICAgIFwiaW5kZXgtZW1pdFwiOiAoLi4uYXJncykgPT4ge1xuICAgICAgbGV0ICRldmVudCA9IGFyZ3NbYXJncy5sZW5ndGggLSAxXTtcblxuICAgICAgY29uc29sZS5sb2coXG4gICAgICAgIGAke3RoaXMuJG5hbWV9IHJlY2VpdmUgJHskZXZlbnQubmFtZX0gZnJvbSAkeyRldmVudC5zb3VyY2UuJG5hbWV9YFxuICAgICAgKTtcbiAgICB9XG4gIH07XG5cbiAgLy8g5Yid55m76ZmG5pe2IOWmguaenOayoeacieWtmOWCqOeahHVzZXJpbmZv5YiZ54K55Ye76I635Y+W77yMXG5cbiAgZ2V0VXNlckluZm8oZSkge1xuICAgIGNvbnNvbGUubG9nKGUsIHRoaXMuJHBhcmVudCwgXCJlXCIpO1xuICAgIC8vIOWcqFBhZ2XpobXpnaLlrp7kvovkuK3vvIzlj6/ku6XpgJrov4d0aGlzLiRwYXJlbnTmnaXorr/pl65BcHDlrp7kvovjgIJcbiAgICB0aGlzLiRwYXJlbnQuZ2V0VXNlckluZm8oZSwgXCJzZWxsXCIsIHJlcyA9PiB7XG4gICAgICBcInVzZSBzdHJpY3RcIjtcbiAgICAgIGNvbnNvbGUubG9nKFwiZ2V0VXNlckluZm9cIiwgcmVzKTtcbiAgICAgIHRoaXMuaGFzVXNlckluZm8gPSByZXMuaGFzVXNlckluZm87XG4gICAgICB0aGlzLnVzZXJJbmZvID0gcmVzLnVzZXJJbmZvO1xuICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICB9KTtcbiAgfVxufVxuIl19