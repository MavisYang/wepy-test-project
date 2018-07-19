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
    prompt: '信息'
  };
  this.computed = {};
  this.methods = {
    handleSwiper: function handleSwiper(id, pic, index, options) {
      console.log(222, id, pic, index, options);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uc29sZSIsImxvZyIsIiRwYXJlbnQiLCJnZXRHbG9iYWxEYXRhcyIsImNhbklVc2UiLCJyZXMiLCJoYXNVc2VySW5mbyIsInVzZXJJbmZvIiwiJGFwcGx5IiwiJGJyb2FkY2FzdCIsImUiLCJnZXRVc2VySW5mbyIsIndlcHkiLCJwYWdlIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsIkNvdW50RG93biIsIkNvdW50RG93bjEiLCJTd2lwZXIiLCJQcm9tcHRCb3giLCJkYXRhIiwid3giLCJkb3duVGltZSIsInRpbWVVcGRhdGUiLCJ0eXBlIiwiZG93blRpbWUyIiwiaW1nVXJscyIsImlkIiwiTWF0aCIsInJhbmRvbSIsInRvU3RyaW5nIiwic2xpY2UiLCJwaWMiLCJzd2lwZXJQYXJtYXMiLCJwcm9tcHQiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJoYW5kbGVTd2lwZXIiLCJpbmRleCIsIm9wdGlvbnMiLCJldmVudHMiLCIkZXZlbnQiLCJsZW5ndGgiLCIkbmFtZSIsIm5hbWUiLCJzb3VyY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5RG5COzZCQUNTO0FBQUE7O0FBQ1BDLGNBQVFDLEdBQVIsQ0FBWSxlQUFaO0FBQ0E7QUFDQSxXQUFLQyxPQUFMLENBQWFDLGNBQWIsQ0FBNEIsS0FBS0MsT0FBakMsRUFBMEMsZUFBTztBQUMvQ0osZ0JBQVFDLEdBQVIsQ0FBWSxTQUFaLEVBQXVCSSxHQUF2QjtBQUNBLGVBQUtDLFdBQUwsR0FBbUJELElBQUlDLFdBQXZCO0FBQ0EsZUFBS0MsUUFBTCxHQUFnQkYsSUFBSUUsUUFBcEI7QUFDQSxlQUFLQyxNQUFMO0FBQ0Qs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QStCQyxPQUEvQjtBQUNBO0FBQ0Q7QUFKTyxHO09BU1ZDLE0sR0FBUztBQUNQLGtCQUFjLHFCQUFhO0FBQUE7O0FBQ3pCLFVBQUlDLGtCQUFjLFVBQUtDLE1BQUwsR0FBYyxDQUE1QiwyREFBSjs7QUFFQTlDLGNBQVFDLEdBQVIsQ0FDSyxPQUFLOEMsS0FEVixpQkFDMkJGLE9BQU9HLElBRGxDLGNBQytDSCxPQUFPSSxNQUFQLENBQWNGLEtBRDdEO0FBR0Q7QUFQTSxHOzs7a0JBeEZVaEQsSyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSBcIndlcHlcIjtcbmltcG9ydCB3eFJlcXVlc3QgZnJvbSBcIi4uL3V0aWxzL3d4UmVxdWVzdC5qc1wiO1xuaW1wb3J0IHV0aWxzIGZyb20gXCIuLi91dGlscy91dGlscy5qc1wiO1xuaW1wb3J0IENvdW50RG93biBmcm9tIFwiLi4vY29tcG9uZW50cy9zaGFyZUNvbXBvbmVudC9jb3VudERvd25cIjtcbmltcG9ydCBDb3VudERvd24xIGZyb20gXCIuLi9jb21wb25lbnRzL3NoYXJlQ29tcG9uZW50L2NvdW50RG93blwiO1xuaW1wb3J0IFN3aXBlciBmcm9tIFwiLi4vY29tcG9uZW50cy9zaGFyZUNvbXBvbmVudC9zd2lwZXJcIjtcbmltcG9ydCBQcm9tcHRCb3ggZnJvbSBcIi4uL2NvbXBvbmVudHMvc2hhcmVDb21wb25lbnQvcHJvbXB0Qm94XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6IFwi6I635Y+W55So5oi35L+h5oGvXCJcbiAgfTtcbiAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcIkNvdW50RG93blwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6dGltZVVwZGF0ZS5vbmNlXCI6XCJkb3duVGltZVwifSxcIkNvdW50RG93bjFcIjp7XCJ2LWJpbmQ6dGltZVVwZGF0ZS5vbmNlXCI6XCJkb3duVGltZTJcIn0sXCJTd2lwZXJcIjp7XCJ2LWJpbmQ6c3dpcGVyQXJyYXkuc3luY1wiOlwiaW1nVXJsc1wiLFwidi1iaW5kOnN3aXBlclBhcm1hcy5vbmNlXCI6XCJzd2lwZXJQYXJtYXNcIixcInhtbG5zOnYtb25cIjpcIlwifSxcIlByb21wdEJveFwiOntcInYtYmluZDpwcm9tcHQuc3luY1wiOlwicHJvbXB0XCJ9fTtcclxuJGV2ZW50cyA9IHtcIlN3aXBlclwiOntcInYtb246aGFuZGxlU3dpcGVyXCI6XCJoYW5kbGVTd2lwZXJcIn19O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICBDb3VudERvd246IENvdW50RG93bixcbiAgICBDb3VudERvd24xOiBDb3VudERvd24xLFxuICAgIFN3aXBlcjpTd2lwZXIsXG4gICAgUHJvbXB0Qm94OlByb21wdEJveFxuICB9O1xuXG4gIGRhdGEgPSB7XG4gICAgdXNlckluZm86IG51bGwsXG4gICAgaGFzVXNlckluZm86IGZhbHNlLCAvL+eUqOaIt+aOiOadg+eKtuaAgVxuICAgIGNhbklVc2U6IHd4LmNhbklVc2UoXCJidXR0b24ub3Blbi10eXBlLmdldFVzZXJJbmZvXCIpLCAvL+WIpOaWreaYr+WQpuaUr+aMgWJ1dHRvbuW+ruS/oeaOiOadg1xuICAgIGRvd25UaW1lOntcbiAgICAgIHRpbWVVcGRhdGU6IDE1MzIwMDg3NDI4MzcsIC8v5YCS6K6h5pe2XG4gICAgICB0eXBlOiAxLFxuICAgIH0sXG4gICAgZG93blRpbWUyOntcbiAgICAgIHRpbWVVcGRhdGU6IDE1MzQwMDg3NDI4NTAsIC8v5YCS6K6h5pe2XG4gICAgICB0eXBlOiAyLFxuICAgIH0sXG4gICAgaW1nVXJsczogW1xuICAgICAge1xuICAgICAgICBpZDogTWF0aC5yYW5kb20oKSAudG9TdHJpbmcoKSAuc2xpY2UoLTEyKSxcbiAgICAgICAgcGljOlwiaHR0cDovL2ltZzAyLnRvb29wZW4uY29tL2ltYWdlcy8yMDE1MDkyOC90b29vcGVuX3N5XzE0MzkxMjc1NTcyNi5qcGdcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IE1hdGgucmFuZG9tKCkgLnRvU3RyaW5nKCkgLnNsaWNlKC0xMiksXG4gICAgICAgIHBpYzogXCJodHRwOi8vaW1nMDYudG9vb3Blbi5jb20vaW1hZ2VzLzIwMTYwODE4L3Rvb29wZW5fc3lfMTc1ODY2NDM0Mjk2LmpwZ1wiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogTWF0aC5yYW5kb20oKSAudG9TdHJpbmcoKSAuc2xpY2UoLTEyKSxcbiAgICAgICAgcGljOiBcImh0dHA6Ly9pbWcwNi50b29vcGVuLmNvbS9pbWFnZXMvMjAxNjA4MTgvdG9vb3Blbl9zeV8xNzU4MzMwNDc3MTUuanBnXCJcbiAgICAgIH1cbiAgICBdLFxuICAgIHN3aXBlclBhcm1hczp7XG4gICAgICAvLyDkuLpzd2lwZXLlj4LmlbDvvIzkuI3nlKjlj6/kuI3kvKBcbiAgICAgIFwidmVydGljYWxcIjpmYWxzZSwvL+a7keWKqOaWueWQkeaYr+WQpuS4uue6teWQkVxuICAgICAgJ2F1dG9wbGF5Jzp0cnVlLC8v5piv5ZCm6Ieq5Yqo5YiH5o2iXG4gICAgICBcImluZGljYXRvci1kb3RzXCI6dHJ1ZSAsLy/mmK/lkKbmmL7npLrpnaLmnb/mjIfnpLrngrlcbiAgICAgIFwiaW5kaWNhdG9yLWNvbG9yXCI6JyNmZmYnICwvL+aMh+ekuueCueminOiJslxuICAgICAgXCJpbmRpY2F0b3ItYWN0aXZlLWNvbG9yXCI6JyNGRjY2NjYnLC8v5b2T5YmN6YCJ5Lit55qE5oyH56S654K56aKc6ImyXG4gICAgICBcImNpcmN1bGFyXCI6dHJ1ZSwgLy/mmK/lkKbph4fnlKjooZTmjqXmu5HliqhcbiAgICAgIFwiaW50ZXJ2YWxcIjo1MDAwLC8v6Ieq5Yqo5YiH5o2i5pe26Ze06Ze06ZqUXG4gICAgICBcImR1cmF0aW9uXCI6NTAwLC8v5ruR5Yqo5Yqo55S75pe26ZW/XG4gICAgICBcInByZXZpb3VzLW1hcmdpblwiOicyMHB4JyAsLy/liY3ovrnot53vvIxcbiAgICAgIFwibmV4dC1tYXJnaW5cIjonMjBweCcsLy/lkI7ovrnot50g5LiOY2lyY3VsYXLkuIDotbfnlKjmlYjmnpzmm7Tlpb1cbiAgICAgIFwiZGlzcGxheS1tdWx0aXBsZS1pdGVtc1wiOjEsLy/lkIzml7bmmL7npLrnmoTmu5HlnZfmlbDph49cbiAgICB9LFxuICAgIHByb21wdDon5L+h5oGvJ1xuICB9O1xuXG4gIC8v6aG16Z2i55qE55Sf5ZG95ZGo5pyf5Ye95pWwXG4gIG9uTG9hZCgpIHtcbiAgICBjb25zb2xlLmxvZyhcIuWIneWni+WMluWKoOi9vS0tb25Mb2FkXCIpO1xuICAgIC8vIOWIneWni+WMluaXtuiOt+WPlnVzZXJpbmZvXG4gICAgdGhpcy4kcGFyZW50LmdldEdsb2JhbERhdGFzKHRoaXMuY2FuSVVzZSwgcmVzID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwi5Yid5aeL5YyW5Yqg6L29LS1cIiwgcmVzKTtcbiAgICAgIHRoaXMuaGFzVXNlckluZm8gPSByZXMuaGFzVXNlckluZm87XG4gICAgICB0aGlzLnVzZXJJbmZvID0gcmVzLnVzZXJJbmZvO1xuICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICB9KTtcbiAgICB0aGlzLiRicm9hZGNhc3QoJ2hhbmRsZVN3aXBlcicpOyAvL+eUseeItue7hOS7tuWPkei1t++8jOaJgOacieWtkOe7hOS7tumDveS8muaUtuWIsOatpOW5v+aSreS6i+S7tlxuXG4gICAgLy8g6I635Y+W5pWw5o2uXG4gICAgLy8gbGV0IHVybCA9ICdodHRwOi8vb25zLm1lL3Rvb2xzL2Ryb3Bsb2FkL2pzb24ucGhwP3BhZ2U9MCZzaXplPTEwJztcbiAgICAvLyB3eFJlcXVlc3QuZmV0Y2godXJsLCBudWxsLCBudWxsLCAnR0VUJykudGhlbihyZXMgPT4ge1xuICAgIC8vICAgdGhpcy5pbWdVcmxzID0gcmVzLmRhdGE7XG4gICAgLy8gICB0aGlzLiRhcHBseSgpO1xuICAgIC8vIH0pO1xuICB9XG4gIGNvbXB1dGVkID0ge307XG5cbiAgLy8gd3htbOS6i+S7tuWkhOeQhuWHveaVsOWvueixoe+8jOWtmOaUvuWTjeW6lHd4bWzkuK3miYDmjZXojrfliLDnmoTkuovku7bnmoTlh73mlbDvvIzlpoJiaW5kdGFw44CBYmluZGNoYW5nZVxuICBtZXRob2RzID0ge1xuICAgIGhhbmRsZVN3aXBlcihpZCwgcGljLCBpbmRleCxvcHRpb25zKSB7XG4gICAgICBjb25zb2xlLmxvZygyMjIsaWQsIHBpYyxpbmRleCwgb3B0aW9ucyk7XG4gICAgICAvLyB1dGlscy5wYWdlR28oXCIvcGFnZXMvaG9tZT90eXBlPVwiICsgaWQsIDEpO1xuICAgIH1cbiAgfTtcbiAgLy/lo7DmmI7nu4Tku7bkuYvpl7TnmoTkuovku7blpITnkIblh73mlbBcbiAgLy8gIFdlUFnnu4Tku7bkuovku7blpITnkIblh73mlbDlr7nosaHvvIzlrZjmlL7lk43lupTnu4Tku7bkuYvpl7TpgJrov4ckYnJvYWRjYXN044CBJGVtaXTjgIEkaW52b2tl5omA5Lyg6YCS55qE5LqL5Lu255qE5Ye95pWwXG4gIC8v55So5LqO55uR5ZCs57uE5Lu25LmL6Ze055qE6YCa5L+h5LiO5Lqk5LqS5LqL5Lu255qE5LqL5Lu25aSE55CG5Ye95pWw6ZyA6KaB5YaZ5Zyo57uE5Lu25ZKM6aG16Z2i55qEZXZlbnRz5a+56LGh5LitXG4gIGV2ZW50cyA9IHtcbiAgICBcImluZGV4LWVtaXRcIjogKC4uLmFyZ3MpID0+IHtcbiAgICAgIGxldCAkZXZlbnQgPSBhcmdzW2FyZ3MubGVuZ3RoIC0gMV07XG5cbiAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICBgJHt0aGlzLiRuYW1lfSByZWNlaXZlICR7JGV2ZW50Lm5hbWV9IGZyb20gJHskZXZlbnQuc291cmNlLiRuYW1lfWBcbiAgICAgICk7XG4gICAgfVxuICB9O1xuXG4gIC8vIOWIneeZu+mZhuaXtiDlpoLmnpzmsqHmnInlrZjlgqjnmoR1c2VyaW5mb+WImeeCueWHu+iOt+WPlu+8jFxuXG4gIGdldFVzZXJJbmZvKGUpIHtcbiAgICBjb25zb2xlLmxvZyhlLCB0aGlzLiRwYXJlbnQsIFwiZVwiKTtcbiAgICAvLyDlnKhQYWdl6aG16Z2i5a6e5L6L5Lit77yM5Y+v5Lul6YCa6L+HdGhpcy4kcGFyZW505p2l6K6/6ZeuQXBw5a6e5L6L44CCXG4gICAgdGhpcy4kcGFyZW50LmdldFVzZXJJbmZvKGUsIFwic2VsbFwiLCByZXMgPT4ge1xuICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgICBjb25zb2xlLmxvZyhcImdldFVzZXJJbmZvXCIsIHJlcyk7XG4gICAgICB0aGlzLmhhc1VzZXJJbmZvID0gcmVzLmhhc1VzZXJJbmZvO1xuICAgICAgdGhpcy51c2VySW5mbyA9IHJlcy51c2VySW5mbztcbiAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==