'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;
//引入List、Panel和Counter组件
// alias example
// alias example
// aliasFields example
// aliasFields ignore module example


var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wepyRedux = require('./../npm/wepy-redux/lib/index.js');

var _child = require('./../components/child.js');

var _child2 = _interopRequireDefault(_child);

var _panel = require('./../components/panel.js');

var _panel2 = _interopRequireDefault(_panel);

var _counter = require('./../components/counter.js');

var _counter2 = _interopRequireDefault(_counter);

var _list = require('./../components/wepy-list.js');

var _list2 = _interopRequireDefault(_list);

var _moduleA = {};

var _moduleA2 = _interopRequireDefault(_moduleA);

var _group = require('./../components/group.js');

var _group2 = _interopRequireDefault(_group);

var _wepyComToast = require('./../npm/wepy-com-toast/toast.js');

var _wepyComToast2 = _interopRequireDefault(_wepyComToast);

var _test = require('./../mixins/test.js');

var _test2 = _interopRequireDefault(_test);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

console.log('moduleA ignored: ', _moduleA2.default); // => moduleA ignored: {}

var Index = (_dec = (0, _wepyRedux.connect)({
  num: function num(state) {
    return state.counter.num;
  },
  asyncNum: function asyncNum(state) {
    return state.counter.asyncNum;
  },
  sumNum: function sumNum(state) {
    return state.counter.num + state.counter.asyncNum;
  }
}), _dec(_class = function (_wepy$page) {
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

  // 声明页面所引用的Mixin实例


  _createClass(Index, [{
    key: 'getData',
    value: function getData() {
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          resolve({ data: 123 });
        }, 3000);
      });
    }
  }, {
    key: 'onLoad',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.getData();

              case 2:
                data = _context.sent;

                console.log('data.data--', data.data);

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onLoad() {
        return _ref2.apply(this, arguments);
      }

      return onLoad;
    }()
    // wxml事件处理函数对象，存放响应wxml中所捕获到的事件的函数，如bindtap、bindchange

    //声明组件之间的事件处理函数
    //  WePY组件事件处理函数对象，存放响应组件之间通过$broadcast、$emit、$invoke所传递的事件的函数
    //用于监听组件之间的通信与交互事件的事件处理函数需要写在组件和页面的events对象中

  }, {
    key: 'onLoad',

    //页面的生命周期函数
    value: function onLoad() {
      console.log('初始化加载--onLoad');

      var self = this;
      this.$parent.getUserInfo(function (userInfo) {
        if (userInfo) {
          self.userInfo = userInfo;
        }
        self.normalTitle = '标题已被修改';

        self.setTimeoutTitle = '标题三秒后会被修改';
        setTimeout(function () {
          self.setTimeoutTitle = '到三秒了';
          self.$apply();
        }, 3000);

        self.$apply();
      });
    }
  }]);

  return Index;
}(_wepy2.default.page)) || _class);

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.config = {
    navigationBarTitleText: 'test2'
  };
  this.$repeat = {};
  this.$props = { "child": { "xmlns:v-bind": "", "v-bind:title.once": "parentTitle", "v-bind:syncTitle.sync": "parentTitle", "v-bind:twoWayTitle.once": "parentTitle", "xmlns:v-on": "" }, "counter2": { "v-bind:num.sync": "mynum" }, "group": { "v-bind:grouplist.once": "item", "v-bind:indexa.once": "index" } };
  this.$events = { "child": { "v-on:childFn": "parentFn" }, "counter1": { "v-on:index-emit": "counterEmit" } };
  this.components = {
    panel: _panel2.default,
    child: _child2.default,
    counter1: _counter2.default,
    counter2: _counter2.default,
    list: _list2.default,
    group: _group2.default,
    toast: _wepyComToast2.default
  };
  this.mixins = [_test2.default];
  this.data = {
    parentTitle: 'p-title',
    mynum: 20,
    userInfo: {
      nickName: '加载中...'
    },
    normalTitle: '原始标题',
    setTimeoutTitle: '标题三秒后会被修改',
    count: 0,
    netrst: '',
    groupList: [{
      id: 1,
      name: '点击改变',
      list: [{
        childid: '1.1',
        childname: '子项，点我改变'
      }, {
        childid: '1.2',
        childname: '子项，点我改变'
      }, {
        childid: '1.3',
        childname: '子项，点我改变'
      }]
    }, {
      id: 2,
      name: '点击改变',
      list: [{
        childid: '2.1',
        childname: '子项，点我改变'
      }, {
        childid: '2.2',
        childname: '子项，点我改变'
      }, {
        childid: '2.3',
        childname: '子项，点我改变'
      }]
    }, {
      id: 3,
      name: '点击改变',
      list: [{
        childid: '3.1',
        childname: '子项，点我改变'
      }]
    }]
  };
  this.computed = {
    now: function now() {
      return +new Date();
    }
  };
  this.methods = {
    plus: function plus() {
      this.mynum++;
    },
    toast: function toast() {
      var promise = this.$invoke('toast', 'show', {
        title: '删除成功', //自定义标题
        img: 'https://raw.githubusercontent.com/kiinlam/wetoast/master/images/star.png'
      });

      promise.then(function (d) {
        console.log('toast done', d);
      });
    },
    tap: function tap() {
      console.log('do noting from ' + this.$name);
    },
    communicate: function communicate() {
      console.log(this.$name + ' tap');

      this.$invoke('counter2', 'minus', 45, 6);
      this.$invoke('counter1', 'plus', 45, 6);

      this.$broadcast('index-broadcast', 1, 3, 4);
    },
    request: function request() {
      var self = this;
      var i = 10;
      var map = ['MA==', 'MQo=', 'Mg==', 'Mw==', 'NA==', 'NQ==', 'Ng==', 'Nw==', 'OA==', 'OQ=='];
      while (i--) {
        // 请求接口
        _wepy2.default.request({
          url: 'https://www.madcoder.cn/tests/sleep.php?time=1&t=css&c=' + map[i] + '&i=' + i,
          success: function success(d) {
            console.log('d---', d);

            self.netrst += d.data + '.';
            self.$apply();
          }
        });
      }
    },

    // 自定义组件函数
    counterEmit: function counterEmit() {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      console.log('args---:', args);

      var $event = args[args.length - 1];
      console.log('event--', $event);

      console.log(this.$name + ' receive ' + $event.name + ' from ' + $event.source.$name);
    },
    parentFn: function parentFn(num, evt) {
      console.log('parent received emit event, number is: ' + num + evt);
    }
  };
  this.events = {
    'index-emit': function indexEmit() {
      var _ref3;

      var $event = (_ref3 = arguments.length - 1, arguments.length <= _ref3 ? undefined : arguments[_ref3]);
      console.log(_this2, 'this');

      console.log(_this2.$name + ' receive ' + $event.name + ' from ' + $event.source.$name);
    }
  };
};


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCJtb2R1bGVBIiwiSW5kZXgiLCJudW0iLCJzdGF0ZSIsImNvdW50ZXIiLCJhc3luY051bSIsInN1bU51bSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic2V0VGltZW91dCIsImRhdGEiLCJnZXREYXRhIiwic2VsZiIsIiRwYXJlbnQiLCJnZXRVc2VySW5mbyIsInVzZXJJbmZvIiwibm9ybWFsVGl0bGUiLCJzZXRUaW1lb3V0VGl0bGUiLCIkYXBwbHkiLCJ3ZXB5IiwicGFnZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJwYW5lbCIsIlBhbmVsIiwiY2hpbGQiLCJDaGlsZCIsImNvdW50ZXIxIiwiQ291bnRlciIsImNvdW50ZXIyIiwibGlzdCIsIkxpc3QiLCJncm91cCIsIkdyb3VwIiwidG9hc3QiLCJUb2FzdCIsIm1peGlucyIsInRlc3RNaXhpbiIsInBhcmVudFRpdGxlIiwibXludW0iLCJuaWNrTmFtZSIsImNvdW50IiwibmV0cnN0IiwiZ3JvdXBMaXN0IiwiaWQiLCJuYW1lIiwiY2hpbGRpZCIsImNoaWxkbmFtZSIsImNvbXB1dGVkIiwibm93IiwiRGF0ZSIsIm1ldGhvZHMiLCJwbHVzIiwicHJvbWlzZSIsIiRpbnZva2UiLCJ0aXRsZSIsImltZyIsInRoZW4iLCJkIiwidGFwIiwiJG5hbWUiLCJjb21tdW5pY2F0ZSIsIiRicm9hZGNhc3QiLCJyZXF1ZXN0IiwiaSIsIm1hcCIsInVybCIsInN1Y2Nlc3MiLCJjb3VudGVyRW1pdCIsImFyZ3MiLCIkZXZlbnQiLCJsZW5ndGgiLCJzb3VyY2UiLCJwYXJlbnRGbiIsImV2dCIsImV2ZW50cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUdBO0FBRXdDO0FBQ1Q7QUFDUTtBQUNQOzs7QUFQaEM7Ozs7QUFDQTs7QUFFQTs7OztBQUNBOzs7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QyxHQUFSLENBQ0ssS0FBS2tFLEtBRFYsaUJBQzJCVSxPQUFPekIsSUFEbEMsY0FDK0N5QixPQUFPRSxNQUFQLENBQWNaLEtBRDdEO0FBR0QsS0FwRE87QUFxRFJhLFlBckRRLG9CQXFEQzVFLEdBckRELEVBcURLNkUsR0FyREwsRUFxRFM7QUFDZmpGLGNBQVFDLEdBQVIsQ0FBWSw0Q0FBNENHLEdBQTVDLEdBQWdENkUsR0FBNUQ7QUFDRDtBQXZETyxHO09BNERWQyxNLEdBQVM7QUFDUCxrQkFBYyxxQkFBYTtBQUFBOztBQUN6QixVQUFJTCxrQkFBYyxVQUFLQyxNQUFMLEdBQWMsQ0FBNUIsMkRBQUo7QUFDQTlFLGNBQVFDLEdBQVIsQ0FBWSxNQUFaLEVBQWlCLE1BQWpCOztBQUVBRCxjQUFRQyxHQUFSLENBQ0ssT0FBS2tFLEtBRFYsaUJBQzJCVSxPQUFPekIsSUFEbEMsY0FDK0N5QixPQUFPRSxNQUFQLENBQWNaLEtBRDdEO0FBR0Q7QUFSTSxHOzs7a0JBOUpVaEUsSyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAnd2VweS1yZWR1eCc7XG4vL+W8leWFpUxpc3TjgIFQYW5lbOWSjENvdW50ZXLnu4Tku7ZcbmltcG9ydCBDaGlsZCBmcm9tICcuLi9jb21wb25lbnRzL2NoaWxkJztcbmltcG9ydCBQYW5lbCBmcm9tICdAL2NvbXBvbmVudHMvcGFuZWwnOyAvLyBhbGlhcyBleGFtcGxlXG5pbXBvcnQgQ291bnRlciBmcm9tICdjb3VudGVyJzsgLy8gYWxpYXMgZXhhbXBsZVxuaW1wb3J0IExpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9saXN0JzsgLy8gYWxpYXNGaWVsZHMgZXhhbXBsZVxuaW1wb3J0IG1vZHVsZUEgZnJvbSAnbW9kdWxlLWEnOyAvLyBhbGlhc0ZpZWxkcyBpZ25vcmUgbW9kdWxlIGV4YW1wbGVcbmltcG9ydCBHcm91cCBmcm9tICcuLi9jb21wb25lbnRzL2dyb3VwJztcbmltcG9ydCBUb2FzdCBmcm9tICd3ZXB5LWNvbS10b2FzdCc7XG5pbXBvcnQgdGVzdE1peGluIGZyb20gJy4uL21peGlucy90ZXN0JztcblxuY29uc29sZS5sb2coJ21vZHVsZUEgaWdub3JlZDogJywgbW9kdWxlQSk7IC8vID0+IG1vZHVsZUEgaWdub3JlZDoge31cblxuQGNvbm5lY3Qoe1xuICBudW0oc3RhdGUpIHtcbiAgICByZXR1cm4gc3RhdGUuY291bnRlci5udW07XG4gIH0sXG4gIGFzeW5jTnVtKHN0YXRlKSB7XG4gICAgcmV0dXJuIHN0YXRlLmNvdW50ZXIuYXN5bmNOdW07XG4gIH0sXG4gIHN1bU51bShzdGF0ZSkge1xuICAgIHJldHVybiBzdGF0ZS5jb3VudGVyLm51bSArIHN0YXRlLmNvdW50ZXIuYXN5bmNOdW07XG4gIH1cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAndGVzdDInXG4gIH07XG4gJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJjaGlsZFwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6dGl0bGUub25jZVwiOlwicGFyZW50VGl0bGVcIixcInYtYmluZDpzeW5jVGl0bGUuc3luY1wiOlwicGFyZW50VGl0bGVcIixcInYtYmluZDp0d29XYXlUaXRsZS5vbmNlXCI6XCJwYXJlbnRUaXRsZVwiLFwieG1sbnM6di1vblwiOlwiXCJ9LFwiY291bnRlcjJcIjp7XCJ2LWJpbmQ6bnVtLnN5bmNcIjpcIm15bnVtXCJ9LFwiZ3JvdXBcIjp7XCJ2LWJpbmQ6Z3JvdXBsaXN0Lm9uY2VcIjpcIml0ZW1cIixcInYtYmluZDppbmRleGEub25jZVwiOlwiaW5kZXhcIn19O1xyXG4kZXZlbnRzID0ge1wiY2hpbGRcIjp7XCJ2LW9uOmNoaWxkRm5cIjpcInBhcmVudEZuXCJ9LFwiY291bnRlcjFcIjp7XCJ2LW9uOmluZGV4LWVtaXRcIjpcImNvdW50ZXJFbWl0XCJ9fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgcGFuZWw6IFBhbmVsLFxuICAgIGNoaWxkOiBDaGlsZCxcbiAgICBjb3VudGVyMTogQ291bnRlcixcbiAgICBjb3VudGVyMjogQ291bnRlcixcbiAgICBsaXN0OiBMaXN0LFxuICAgIGdyb3VwOiBHcm91cCxcbiAgICB0b2FzdDogVG9hc3RcbiAgfTtcblxuICAvLyDlo7DmmI7pobXpnaLmiYDlvJXnlKjnmoRNaXhpbuWunuS+i1xuICBtaXhpbnMgPSBbdGVzdE1peGluXTtcblxuICBkYXRhID0ge1xuICAgIHBhcmVudFRpdGxlOiAncC10aXRsZScsXG4gICAgbXludW06IDIwLFxuICAgIHVzZXJJbmZvOiB7XG4gICAgICBuaWNrTmFtZTogJ+WKoOi9veS4rS4uLidcbiAgICB9LFxuICAgIG5vcm1hbFRpdGxlOiAn5Y6f5aeL5qCH6aKYJyxcbiAgICBzZXRUaW1lb3V0VGl0bGU6ICfmoIfpopjkuInnp5LlkI7kvJrooqvkv67mlLknLFxuICAgIGNvdW50OiAwLFxuICAgIG5ldHJzdDogJycsXG4gICAgZ3JvdXBMaXN0OiBbXG4gICAgICB7XG4gICAgICAgIGlkOiAxLFxuICAgICAgICBuYW1lOiAn54K55Ye75pS55Y+YJyxcbiAgICAgICAgbGlzdDogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNoaWxkaWQ6ICcxLjEnLFxuICAgICAgICAgICAgY2hpbGRuYW1lOiAn5a2Q6aG577yM54K55oiR5pS55Y+YJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2hpbGRpZDogJzEuMicsXG4gICAgICAgICAgICBjaGlsZG5hbWU6ICflrZDpobnvvIzngrnmiJHmlLnlj5gnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjaGlsZGlkOiAnMS4zJyxcbiAgICAgICAgICAgIGNoaWxkbmFtZTogJ+WtkOmhue+8jOeCueaIkeaUueWPmCdcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAyLFxuICAgICAgICBuYW1lOiAn54K55Ye75pS55Y+YJyxcbiAgICAgICAgbGlzdDogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNoaWxkaWQ6ICcyLjEnLFxuICAgICAgICAgICAgY2hpbGRuYW1lOiAn5a2Q6aG577yM54K55oiR5pS55Y+YJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2hpbGRpZDogJzIuMicsXG4gICAgICAgICAgICBjaGlsZG5hbWU6ICflrZDpobnvvIzngrnmiJHmlLnlj5gnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjaGlsZGlkOiAnMi4zJyxcbiAgICAgICAgICAgIGNoaWxkbmFtZTogJ+WtkOmhue+8jOeCueaIkeaUueWPmCdcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAzLFxuICAgICAgICBuYW1lOiAn54K55Ye75pS55Y+YJyxcbiAgICAgICAgbGlzdDogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNoaWxkaWQ6ICczLjEnLFxuICAgICAgICAgICAgY2hpbGRuYW1lOiAn5a2Q6aG577yM54K55oiR5pS55Y+YJ1xuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfTtcblxuICBjb21wdXRlZCA9IHtcbiAgICBub3coKSB7XG4gICAgICByZXR1cm4gK25ldyBEYXRlKCk7XG4gICAgfVxuICB9O1xuXG4gIGdldERhdGEoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICByZXNvbHZlKHsgZGF0YTogMTIzIH0pO1xuICAgICAgfSwgMzAwMCk7XG4gICAgfSk7XG4gIH1cbiAgYXN5bmMgb25Mb2FkKCkge1xuICAgIGxldCBkYXRhID0gYXdhaXQgdGhpcy5nZXREYXRhKCk7XG4gICAgY29uc29sZS5sb2coJ2RhdGEuZGF0YS0tJywgZGF0YS5kYXRhKTtcbiAgfVxuICAvLyB3eG1s5LqL5Lu25aSE55CG5Ye95pWw5a+56LGh77yM5a2Y5pS+5ZON5bqUd3htbOS4reaJgOaNleiOt+WIsOeahOS6i+S7tueahOWHveaVsO+8jOWmgmJpbmR0YXDjgIFiaW5kY2hhbmdlXG4gIG1ldGhvZHMgPSB7XG4gICAgcGx1cygpIHtcbiAgICAgIHRoaXMubXludW0rKztcbiAgICB9LFxuICAgIHRvYXN0KCkge1xuICAgICAgbGV0IHByb21pc2UgPSB0aGlzLiRpbnZva2UoJ3RvYXN0JywgJ3Nob3cnLCB7XG4gICAgICAgIHRpdGxlOiAn5Yig6Zmk5oiQ5YqfJywvL+iHquWumuS5ieagh+mimFxuICAgICAgICBpbWc6ICdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20va2lpbmxhbS93ZXRvYXN0L21hc3Rlci9pbWFnZXMvc3Rhci5wbmcnLFxuICAgICAgfSk7XG5cbiAgICAgIHByb21pc2UudGhlbihkID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ3RvYXN0IGRvbmUnLGQpO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICB0YXAoKSB7XG4gICAgICBjb25zb2xlLmxvZygnZG8gbm90aW5nIGZyb20gJyArIHRoaXMuJG5hbWUpO1xuICAgIH0sXG4gICAgY29tbXVuaWNhdGUoKSB7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLiRuYW1lICsgJyB0YXAnKTtcblxuICAgICAgdGhpcy4kaW52b2tlKCdjb3VudGVyMicsICdtaW51cycsIDQ1LCA2KTtcbiAgICAgIHRoaXMuJGludm9rZSgnY291bnRlcjEnLCAncGx1cycsIDQ1LCA2KTtcblxuICAgICAgdGhpcy4kYnJvYWRjYXN0KCdpbmRleC1icm9hZGNhc3QnLCAxLCAzLCA0KTtcbiAgICB9LFxuICAgIHJlcXVlc3QoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICBsZXQgaSA9IDEwO1xuICAgICAgbGV0IG1hcCA9IFsgJ01BPT0nLCAnTVFvPScsICdNZz09JywgJ013PT0nLCAnTkE9PScsICdOUT09JywgJ05nPT0nLCAnTnc9PScsICdPQT09JywgJ09RPT0nIF07XG4gICAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgIC8vIOivt+axguaOpeWPo1xuICAgICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICAgIHVybDogJ2h0dHBzOi8vd3d3Lm1hZGNvZGVyLmNuL3Rlc3RzL3NsZWVwLnBocD90aW1lPTEmdD1jc3MmYz0nICsgbWFwW2ldICsgJyZpPScgKyBpLFxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkLS0tJyxkKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgc2VsZi5uZXRyc3QgKz0gZC5kYXRhICsgJy4nO1xuICAgICAgICAgICAgc2VsZi4kYXBwbHkoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG4gICAgLy8g6Ieq5a6a5LmJ57uE5Lu25Ye95pWwXG4gICAgY291bnRlckVtaXQoLi4uYXJncykge1xuICAgICAgY29uc29sZS5sb2coJ2FyZ3MtLS06JyxhcmdzKTtcbiAgICAgIFxuICAgICAgbGV0ICRldmVudCA9IGFyZ3NbYXJncy5sZW5ndGggLSAxXTtcbiAgICAgIGNvbnNvbGUubG9nKCdldmVudC0tJywkZXZlbnQpO1xuICAgICAgXG4gICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgYCR7dGhpcy4kbmFtZX0gcmVjZWl2ZSAkeyRldmVudC5uYW1lfSBmcm9tICR7JGV2ZW50LnNvdXJjZS4kbmFtZX1gXG4gICAgICApO1xuICAgIH0sXG4gICAgcGFyZW50Rm4obnVtLGV2dCl7XG4gICAgICBjb25zb2xlLmxvZygncGFyZW50IHJlY2VpdmVkIGVtaXQgZXZlbnQsIG51bWJlciBpczogJyArIG51bStldnQpXG4gICAgfVxuICB9O1xuICAvL+WjsOaYjue7hOS7tuS5i+mXtOeahOS6i+S7tuWkhOeQhuWHveaVsFxuICAvLyAgV2VQWee7hOS7tuS6i+S7tuWkhOeQhuWHveaVsOWvueixoe+8jOWtmOaUvuWTjeW6lOe7hOS7tuS5i+mXtOmAmui/hyRicm9hZGNhc3TjgIEkZW1pdOOAgSRpbnZva2XmiYDkvKDpgJLnmoTkuovku7bnmoTlh73mlbBcbiAgLy/nlKjkuo7nm5HlkKznu4Tku7bkuYvpl7TnmoTpgJrkv6HkuI7kuqTkupLkuovku7bnmoTkuovku7blpITnkIblh73mlbDpnIDopoHlhpnlnKjnu4Tku7blkozpobXpnaLnmoRldmVudHPlr7nosaHkuK1cbiAgZXZlbnRzID0ge1xuICAgICdpbmRleC1lbWl0JzogKC4uLmFyZ3MpID0+IHtcbiAgICAgIGxldCAkZXZlbnQgPSBhcmdzW2FyZ3MubGVuZ3RoIC0gMV07XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLCd0aGlzJyk7XG4gICAgICBcbiAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICBgJHt0aGlzLiRuYW1lfSByZWNlaXZlICR7JGV2ZW50Lm5hbWV9IGZyb20gJHskZXZlbnQuc291cmNlLiRuYW1lfWBcbiAgICAgICk7XG4gICAgfVxuICB9O1xuICAvL+mhtemdoueahOeUn+WRveWRqOacn+WHveaVsFxuICBvbkxvYWQoKSB7XG4gICAgY29uc29sZS5sb2coJ+WIneWni+WMluWKoOi9vS0tb25Mb2FkJyk7XG5cbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgdGhpcy4kcGFyZW50LmdldFVzZXJJbmZvKGZ1bmN0aW9uKHVzZXJJbmZvKSB7XG4gICAgICBpZiAodXNlckluZm8pIHtcbiAgICAgICAgc2VsZi51c2VySW5mbyA9IHVzZXJJbmZvO1xuICAgICAgfVxuICAgICAgc2VsZi5ub3JtYWxUaXRsZSA9ICfmoIfpopjlt7Looqvkv67mlLknO1xuXG4gICAgICBzZWxmLnNldFRpbWVvdXRUaXRsZSA9ICfmoIfpopjkuInnp5LlkI7kvJrooqvkv67mlLknO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNlbGYuc2V0VGltZW91dFRpdGxlID0gJ+WIsOS4ieenkuS6hic7XG4gICAgICAgIHNlbGYuJGFwcGx5KCk7XG4gICAgICB9LCAzMDAwKTtcblxuICAgICAgc2VsZi4kYXBwbHkoKTtcbiAgICB9KTtcbiAgfVxufVxuIl19