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

var _countDownOther = require('./../components/shareComponent/countDownOther.js');

var _countDownOther2 = _interopRequireDefault(_countDownOther);

var _swiper = require('./../components/shareComponent/swiper.js');

var _swiper2 = _interopRequireDefault(_swiper);

var _promptBox = require('./../components/shareComponent/promptBox.js');

var _promptBox2 = _interopRequireDefault(_promptBox);

var _getUserInfo = require('./../components/shareComponent/getUserInfo.js');

var _getUserInfo2 = _interopRequireDefault(_getUserInfo);

var _timeDown = require('./../components/shareComponent/timeDown.js');

var _timeDown2 = _interopRequireDefault(_timeDown);

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
      this.$parent.getGlobalData(this.canIUse, function (res) {
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
  }, {
    key: "showTips",

    // 自定义方法
    value: function showTips() {
      _utils2.default.ErrorTips(this, 'show tips', 3000);
    }
    // wxml事件处理函数对象，存放响应wxml中所捕获到的事件的函数，如bindtap、bindchange

    //声明组件之间的事件处理函数
    //  WePY组件事件处理函数对象，存放响应组件之间通过$broadcast、$emit、$invoke所传递的事件的函数
    //用于监听组件之间的通信与交互事件的事件处理函数需要写在组件和页面的events对象中

  }, {
    key: "Functions",
    value: function Functions() {
      _utils2.default.ErrorTips(this.$parent, 'This is a function!', 2000);
    }
    // 初登陆时 如果没有存储的userinfo则点击获取，

  }, {
    key: "getUserInfo",
    value: function getUserInfo(e) {
      var _this3 = this;

      // console.log(e, this.$parent, "e");

      // 在Page页面实例中，可以通过this.$parent来访问App实例。
      // this.$parent.getUserInfo(e, "sell", res => {
      //   "use strict";
      //   console.log("getUserInfo", res);
      //   this.hasUserInfo = res.hasUserInfo;
      //   this.userInfo = res.userInfo;
      //   this.$apply();
      // });
      this.$parent.getUserInfo(e);
      this.$parent.getGlobalData(this.canIUse, function (res) {
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
  this.$props = { "CountDown": { "v-bind:timeUpdate.once": "downTime" }, "CountDown1": { "v-bind:timeUpdate.once": "downTime2" }, "CountDownOther": { "v-bind:timer.sync": "timer" }, "TimeDown": { "v-bind:clickBtn.once": "Functions" }, "Swiper": { "v-bind:swiperArray.sync": "imgUrls", "v-bind:swiperParmas.once": "swiperParmas", "xmlns:v-on": "" }, "PromptBox": { "v-bind:prompt.sync": "popErrorMsg" }, "GetUserInfo": { "xmlns:v-bind": "", "v-bind:btnTxt.sync": "btnTxt", "v-bind:that.sync": "this" } };
  this.$events = { "Swiper": { "v-on:handleSwiper": "handleSwiper" } };
  this.components = {
    CountDown: _countDown2.default,
    CountDown1: _countDown2.default,
    CountDownOther: _countDownOther2.default,
    TimeDown: _timeDown2.default,
    Swiper: _swiper2.default,
    PromptBox: _promptBox2.default,
    GetUserInfo: _getUserInfo2.default
  };
  this.data = {
    userInfo: null,
    hasUserInfo: false, //用户授权状态
    canIUse: wx.canIUse("button.open-type.getUserInfo"), //判断是否支持button微信授权
    btnTxt: '立即授权',
    downTime: {
      timeUpdate: 1535008742837, //倒计时
      type: 1
    },
    downTime2: {
      timeUpdate: 1534008742850, //倒计时
      type: 2
    },
    timer: 1534008742850,
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
    popErrorMsg: null
  };
  this.computed = {};
  this.methods = {
    // methods方法中的方法 
    handleSwiper: function handleSwiper(id, pic, index, options) {
      // console.log(222,id, pic,index, options);
      _utils2.default.ErrorTips(this, '我是第' + index + 1 + '张图片', 3000);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uc29sZSIsImxvZyIsIiRwYXJlbnQiLCJnZXRHbG9iYWxEYXRhIiwiY2FuSVVzZSIsImhhc1VzZXJJbmZvIiwicmVzIiwidXNlckluZm8iLCIkYXBwbHkiLCIkYnJvYWRjYXN0IiwiVXRpbHMiLCJFcnJvclRpcHMiLCJlIiwiZ2V0VXNlckluZm8iLCJ3ZXB5IiwicGFnZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJDb3VudERvd24iLCJDb3VudERvd24xIiwiQ291bnREb3duT3RoZXIiLCJUaW1lRG93biIsIlN3aXBlciIsIlByb21wdEJveCIsIkdldFVzZXJJbmZvIiwiZGF0YSIsInd4IiwiYnRuVHh0IiwiZG93blRpbWUiLCJ0aW1lVXBkYXRlIiwidHlwZSIsImRvd25UaW1lMiIsInRpbWVyIiwiaW1nVXJscyIsImlkIiwiTWF0aCIsInJhbmRvbSIsInRvU3RyaW5nIiwic2xpY2UiLCJwaWMiLCJzd2lwZXJQYXJtYXMiLCJwb3BFcnJvck1zZyIsImNvbXB1dGVkIiwibWV0aG9kcyIsImhhbmRsZVN3aXBlciIsImluZGV4Iiwib3B0aW9ucyIsImV2ZW50cyIsIiRldmVudCIsImxlbmd0aCIsIiRuYW1lIiwibmFtZSIsInNvdXJjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQThEbkI7NkJBQ1M7QUFBQTs7QUFDUEMsY0FBUUMsR0FBUixDQUFZLGVBQVo7QUFDQTtBQUNBLFdBQUtDLE9BQUwsQ0FBYUMsYUFBYixDQUEyQixLQUFLQyxPQUFoQyxFQUF5QyxlQUFPO0FBQzlDLGVBQUtDLFdBQUwsR0FBbUJDLElB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QkFBaUIsSUFKTixFQUlZO0FBQ3ZCLHlCQUFrQixNQUxQLEVBS2U7QUFDMUIsZ0NBQXlCLFNBTmQsRUFNd0I7QUFDbkMsa0JBQVcsSUFQQSxFQU9NO0FBQ2pCLGtCQUFXLElBUkEsRUFRSztBQUNoQixrQkFBVyxHQVRBLEVBU0k7QUFDZix5QkFBa0IsTUFWUCxFQVVlO0FBQzFCLHFCQUFjLE1BWEgsRUFXVTtBQUNyQixnQ0FBeUIsQ0FaZCxDQVlnQjtBQVpoQixLQTVCUjtBQTBDTEMsaUJBQVk7QUExQ1AsRztPQStEUEMsUSxHQUFXLEU7T0FNWEMsTyxHQUFVO0FBQ1I7QUFDQUMsZ0JBRlEsd0JBRUtWLEVBRkwsRUFFU0ssR0FGVCxFQUVjTSxLQUZkLEVBRW9CQyxPQUZwQixFQUU2QjtBQUNuQztBQUNBeEMsc0JBQU1DLFNBQU4sQ0FBZ0IsSUFBaEIsRUFBcUIsUUFBTXNDLEtBQU4sR0FBWSxDQUFaLEdBQWMsS0FBbkMsRUFBeUMsSUFBekM7QUFDQTtBQUNEO0FBTk8sRztPQVdWRSxNLEdBQVM7QUFDUCxrQkFBYyxxQkFBYTtBQUFBOztBQUN6QixVQUFJQyxrQkFBYyxVQUFLQyxNQUFMLEdBQWMsQ0FBNUIsMkRBQUo7O0FBRUFyRCxjQUFRQyxHQUFSLENBQ0ssT0FBS3FELEtBRFYsaUJBQzJCRixPQUFPRyxJQURsQyxjQUMrQ0gsT0FBT0ksTUFBUCxDQUFjRixLQUQ3RDtBQUdEO0FBUE0sRzs7O2tCQWpHVXZELEsiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gXCJ3ZXB5XCI7XG5pbXBvcnQgd3hSZXF1ZXN0IGZyb20gXCIuLi91dGlscy93eFJlcXVlc3QuanNcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vdXRpbHMvdXRpbHMuanNcIjtcbmltcG9ydCBDb3VudERvd24gZnJvbSBcIi4uL2NvbXBvbmVudHMvc2hhcmVDb21wb25lbnQvY291bnREb3duXCI7XG5pbXBvcnQgQ291bnREb3duMSBmcm9tIFwiLi4vY29tcG9uZW50cy9zaGFyZUNvbXBvbmVudC9jb3VudERvd25cIjtcbmltcG9ydCBDb3VudERvd25PdGhlciBmcm9tIFwiLi4vY29tcG9uZW50cy9zaGFyZUNvbXBvbmVudC9jb3VudERvd25PdGhlclwiO1xuaW1wb3J0IFN3aXBlciBmcm9tIFwiLi4vY29tcG9uZW50cy9zaGFyZUNvbXBvbmVudC9zd2lwZXJcIjtcbmltcG9ydCBQcm9tcHRCb3ggZnJvbSBcIi4uL2NvbXBvbmVudHMvc2hhcmVDb21wb25lbnQvcHJvbXB0Qm94XCI7XG5pbXBvcnQgR2V0VXNlckluZm8gZnJvbSBcIi4uL2NvbXBvbmVudHMvc2hhcmVDb21wb25lbnQvZ2V0VXNlckluZm9cIjtcbmltcG9ydCBUaW1lRG93biBmcm9tIFwiLi4vY29tcG9uZW50cy9zaGFyZUNvbXBvbmVudC90aW1lRG93blwiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogXCLojrflj5bnlKjmiLfkv6Hmga9cIlxuICB9O1xuICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiQ291bnREb3duXCI6e1widi1iaW5kOnRpbWVVcGRhdGUub25jZVwiOlwiZG93blRpbWVcIn0sXCJDb3VudERvd24xXCI6e1widi1iaW5kOnRpbWVVcGRhdGUub25jZVwiOlwiZG93blRpbWUyXCJ9LFwiQ291bnREb3duT3RoZXJcIjp7XCJ2LWJpbmQ6dGltZXIuc3luY1wiOlwidGltZXJcIn0sXCJUaW1lRG93blwiOntcInYtYmluZDpjbGlja0J0bi5vbmNlXCI6XCJGdW5jdGlvbnNcIn0sXCJTd2lwZXJcIjp7XCJ2LWJpbmQ6c3dpcGVyQXJyYXkuc3luY1wiOlwiaW1nVXJsc1wiLFwidi1iaW5kOnN3aXBlclBhcm1hcy5vbmNlXCI6XCJzd2lwZXJQYXJtYXNcIixcInhtbG5zOnYtb25cIjpcIlwifSxcIlByb21wdEJveFwiOntcInYtYmluZDpwcm9tcHQuc3luY1wiOlwicG9wRXJyb3JNc2dcIn0sXCJHZXRVc2VySW5mb1wiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6YnRuVHh0LnN5bmNcIjpcImJ0blR4dFwiLFwidi1iaW5kOnRoYXQuc3luY1wiOlwidGhpc1wifX07XHJcbiRldmVudHMgPSB7XCJTd2lwZXJcIjp7XCJ2LW9uOmhhbmRsZVN3aXBlclwiOlwiaGFuZGxlU3dpcGVyXCJ9fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgQ291bnREb3duOiBDb3VudERvd24sXG4gICAgQ291bnREb3duMTogQ291bnREb3duMSxcbiAgICBDb3VudERvd25PdGhlcjpDb3VudERvd25PdGhlcixcbiAgICBUaW1lRG93bjpUaW1lRG93bixcbiAgICBTd2lwZXI6U3dpcGVyLFxuICAgIFByb21wdEJveDpQcm9tcHRCb3gsXG4gICAgR2V0VXNlckluZm86R2V0VXNlckluZm9cbiAgfTtcblxuICBkYXRhID0ge1xuICAgIHVzZXJJbmZvOiBudWxsLFxuICAgIGhhc1VzZXJJbmZvOiBmYWxzZSwgLy/nlKjmiLfmjojmnYPnirbmgIFcbiAgICBjYW5JVXNlOiB3eC5jYW5JVXNlKFwiYnV0dG9uLm9wZW4tdHlwZS5nZXRVc2VySW5mb1wiKSwgLy/liKTmlq3mmK/lkKbmlK/mjIFidXR0b27lvq7kv6HmjojmnYNcbiAgICBidG5UeHQ6ICfnq4vljbPmjojmnYMnLFxuICAgIGRvd25UaW1lOntcbiAgICAgIHRpbWVVcGRhdGU6IDE1MzUwMDg3NDI4MzcsIC8v5YCS6K6h5pe2XG4gICAgICB0eXBlOiAxLFxuICAgIH0sXG4gICAgZG93blRpbWUyOntcbiAgICAgIHRpbWVVcGRhdGU6IDE1MzQwMDg3NDI4NTAsIC8v5YCS6K6h5pe2XG4gICAgICB0eXBlOiAyLFxuICAgIH0sXG4gICAgdGltZXI6MTUzNDAwODc0Mjg1MCxcbiAgICBpbWdVcmxzOiBbXG4gICAgICB7XG4gICAgICAgIGlkOiBNYXRoLnJhbmRvbSgpIC50b1N0cmluZygpIC5zbGljZSgtMTIpLFxuICAgICAgICBwaWM6XCJodHRwOi8vaW1nMDIudG9vb3Blbi5jb20vaW1hZ2VzLzIwMTUwOTI4L3Rvb29wZW5fc3lfMTQzOTEyNzU1NzI2LmpwZ1wiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogTWF0aC5yYW5kb20oKSAudG9TdHJpbmcoKSAuc2xpY2UoLTEyKSxcbiAgICAgICAgcGljOiBcImh0dHA6Ly9pbWcwNi50b29vcGVuLmNvbS9pbWFnZXMvMjAxNjA4MTgvdG9vb3Blbl9zeV8xNzU4NjY0MzQyOTYuanBnXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiBNYXRoLnJhbmRvbSgpIC50b1N0cmluZygpIC5zbGljZSgtMTIpLFxuICAgICAgICBwaWM6IFwiaHR0cDovL2ltZzA2LnRvb29wZW4uY29tL2ltYWdlcy8yMDE2MDgxOC90b29vcGVuX3N5XzE3NTgzMzA0NzcxNS5qcGdcIlxuICAgICAgfVxuICAgIF0sXG4gICAgc3dpcGVyUGFybWFzOntcbiAgICAgIC8vIOS4unN3aXBlcuWPguaVsO+8jOS4jeeUqOWPr+S4jeS8oFxuICAgICAgXCJ2ZXJ0aWNhbFwiOmZhbHNlLC8v5ruR5Yqo5pa55ZCR5piv5ZCm5Li657q15ZCRXG4gICAgICAnYXV0b3BsYXknOnRydWUsLy/mmK/lkKboh6rliqjliIfmjaJcbiAgICAgIFwiaW5kaWNhdG9yLWRvdHNcIjp0cnVlICwvL+aYr+WQpuaYvuekuumdouadv+aMh+ekuueCuVxuICAgICAgXCJpbmRpY2F0b3ItY29sb3JcIjonI2ZmZicgLC8v5oyH56S654K56aKc6ImyXG4gICAgICBcImluZGljYXRvci1hY3RpdmUtY29sb3JcIjonI0ZGNjY2NicsLy/lvZPliY3pgInkuK3nmoTmjIfnpLrngrnpopzoibJcbiAgICAgIFwiY2lyY3VsYXJcIjp0cnVlLCAvL+aYr+WQpumHh+eUqOihlOaOpea7keWKqFxuICAgICAgXCJpbnRlcnZhbFwiOjUwMDAsLy/oh6rliqjliIfmjaLml7bpl7Tpl7TpmpRcbiAgICAgIFwiZHVyYXRpb25cIjo1MDAsLy/mu5HliqjliqjnlLvml7bplb9cbiAgICAgIFwicHJldmlvdXMtbWFyZ2luXCI6JzIwcHgnICwvL+WJjei+uei3ne+8jFxuICAgICAgXCJuZXh0LW1hcmdpblwiOicyMHB4JywvL+WQjui+uei3nSDkuI5jaXJjdWxhcuS4gOi1t+eUqOaViOaenOabtOWlvVxuICAgICAgXCJkaXNwbGF5LW11bHRpcGxlLWl0ZW1zXCI6MSwvL+WQjOaXtuaYvuekuueahOa7keWdl+aVsOmHj1xuICAgIH0sXG4gICAgcG9wRXJyb3JNc2c6bnVsbCxcbiAgfTtcblxuICAvL+mhtemdoueahOeUn+WRveWRqOacn+WHveaVsFxuICBvbkxvYWQoKSB7XG4gICAgY29uc29sZS5sb2coXCLliJ3lp4vljJbliqDovb0tLW9uTG9hZFwiKTtcbiAgICAvLyDliJ3lp4vljJbml7bojrflj5Z1c2VyaW5mb1xuICAgIHRoaXMuJHBhcmVudC5nZXRHbG9iYWxEYXRhKHRoaXMuY2FuSVVzZSwgcmVzID0+IHtcbiAgICAgIHRoaXMuaGFzVXNlckluZm8gPSByZXMuaGFzVXNlckluZm87XG4gICAgICB0aGlzLnVzZXJJbmZvID0gcmVzLnVzZXJJbmZvO1xuICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICB9KTtcbiAgICB0aGlzLiRicm9hZGNhc3QoJ2hhbmRsZVN3aXBlcicpOyAvL+eUseeItue7hOS7tuWPkei1t++8jOaJgOacieWtkOe7hOS7tumDveS8muaUtuWIsOatpOW5v+aSreS6i+S7tlxuXG4gICAgLy8g6I635Y+W5pWw5o2uXG4gICAgLy8gbGV0IHVybCA9ICdodHRwOi8vb25zLm1lL3Rvb2xzL2Ryb3Bsb2FkL2pzb24ucGhwP3BhZ2U9MCZzaXplPTEwJztcbiAgICAvLyB3eFJlcXVlc3QuZmV0Y2godXJsLCBudWxsLCBudWxsLCAnR0VUJykudGhlbihyZXMgPT4ge1xuICAgIC8vICAgdGhpcy5pbWdVcmxzID0gcmVzLmRhdGE7XG4gICAgLy8gICB0aGlzLiRhcHBseSgpO1xuICAgIC8vIH0pO1xuICB9XG4gIGNvbXB1dGVkID0ge307XG4gIC8vIOiHquWumuS5ieaWueazlVxuICBzaG93VGlwcygpe1xuICAgICBVdGlscy5FcnJvclRpcHModGhpcywnc2hvdyB0aXBzJywzMDAwKVxuICB9XG4gIC8vIHd4bWzkuovku7blpITnkIblh73mlbDlr7nosaHvvIzlrZjmlL7lk43lupR3eG1s5Lit5omA5o2V6I635Yiw55qE5LqL5Lu255qE5Ye95pWw77yM5aaCYmluZHRhcOOAgWJpbmRjaGFuZ2VcbiAgbWV0aG9kcyA9IHtcbiAgICAvLyBtZXRob2Rz5pa55rOV5Lit55qE5pa55rOVIFxuICAgIGhhbmRsZVN3aXBlcihpZCwgcGljLCBpbmRleCxvcHRpb25zKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZygyMjIsaWQsIHBpYyxpbmRleCwgb3B0aW9ucyk7XG4gICAgICBVdGlscy5FcnJvclRpcHModGhpcywn5oiR5piv56ysJytpbmRleCsxKyflvKDlm77niYcnLDMwMDApXG4gICAgICAvLyB1dGlscy5wYWdlR28oXCIvcGFnZXMvaG9tZT90eXBlPVwiICsgaWQsIDEpO1xuICAgIH1cbiAgfTtcbiAgLy/lo7DmmI7nu4Tku7bkuYvpl7TnmoTkuovku7blpITnkIblh73mlbBcbiAgLy8gIFdlUFnnu4Tku7bkuovku7blpITnkIblh73mlbDlr7nosaHvvIzlrZjmlL7lk43lupTnu4Tku7bkuYvpl7TpgJrov4ckYnJvYWRjYXN044CBJGVtaXTjgIEkaW52b2tl5omA5Lyg6YCS55qE5LqL5Lu255qE5Ye95pWwXG4gIC8v55So5LqO55uR5ZCs57uE5Lu25LmL6Ze055qE6YCa5L+h5LiO5Lqk5LqS5LqL5Lu255qE5LqL5Lu25aSE55CG5Ye95pWw6ZyA6KaB5YaZ5Zyo57uE5Lu25ZKM6aG16Z2i55qEZXZlbnRz5a+56LGh5LitXG4gIGV2ZW50cyA9IHtcbiAgICBcImluZGV4LWVtaXRcIjogKC4uLmFyZ3MpID0+IHtcbiAgICAgIGxldCAkZXZlbnQgPSBhcmdzW2FyZ3MubGVuZ3RoIC0gMV07XG5cbiAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICBgJHt0aGlzLiRuYW1lfSByZWNlaXZlICR7JGV2ZW50Lm5hbWV9IGZyb20gJHskZXZlbnQuc291cmNlLiRuYW1lfWBcbiAgICAgICk7XG4gICAgfVxuICB9O1xuXG4gIEZ1bmN0aW9ucygpIHtcbiAgICBVdGlscy5FcnJvclRpcHModGhpcy4kcGFyZW50LCAnVGhpcyBpcyBhIGZ1bmN0aW9uIScsIDIwMDApXG4gIH1cbiAgLy8g5Yid55m76ZmG5pe2IOWmguaenOayoeacieWtmOWCqOeahHVzZXJpbmZv5YiZ54K55Ye76I635Y+W77yMXG5cbiAgZ2V0VXNlckluZm8oZSkge1xuICAgIC8vIGNvbnNvbGUubG9nKGUsIHRoaXMuJHBhcmVudCwgXCJlXCIpO1xuICAgXG4gICAgLy8g5ZyoUGFnZemhtemdouWunuS+i+S4re+8jOWPr+S7pemAmui/h3RoaXMuJHBhcmVudOadpeiuv+mXrkFwcOWunuS+i+OAglxuICAgIC8vIHRoaXMuJHBhcmVudC5nZXRVc2VySW5mbyhlLCBcInNlbGxcIiwgcmVzID0+IHtcbiAgICAvLyAgIFwidXNlIHN0cmljdFwiO1xuICAgIC8vICAgY29uc29sZS5sb2coXCJnZXRVc2VySW5mb1wiLCByZXMpO1xuICAgIC8vICAgdGhpcy5oYXNVc2VySW5mbyA9IHJlcy5oYXNVc2VySW5mbztcbiAgICAvLyAgIHRoaXMudXNlckluZm8gPSByZXMudXNlckluZm87XG4gICAgLy8gICB0aGlzLiRhcHBseSgpO1xuICAgIC8vIH0pO1xuICAgIHRoaXMuJHBhcmVudC5nZXRVc2VySW5mbyhlKVxuICAgIHRoaXMuJHBhcmVudC5nZXRHbG9iYWxEYXRhKHRoaXMuY2FuSVVzZSxyZXM9PntcbiAgICAgIHRoaXMuaGFzVXNlckluZm8gPSByZXMuaGFzVXNlckluZm87XG4gICAgICB0aGlzLnVzZXJJbmZvID0gcmVzLnVzZXJJbmZvO1xuICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICB9KVxuICB9XG59XG4iXX0=