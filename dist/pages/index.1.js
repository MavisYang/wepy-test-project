'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

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

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LjEuanMiXSwibmFtZXMiOlsiY29uc29sZSIsImxvZyIsIm1vZHVsZUEiLCJJbmRleCIsIm51bSIsInN0YXRlIiwiY291bnRlciIsImFzeW5jTnVtIiwic3VtTnVtIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzZXRUaW1lb3V0IiwiZGF0YSIsImdldERhdGEiLCJzZWxmIiwiJHBhcmVudCIsImdldFVzZXJJbmZvIiwidXNlckluZm8iLCJub3JtYWxUaXRsZSIsInNldFRpbWVvdXRUaXRsZSIsIiRhcHBseSIsIndlcHkiLCJwYWdlIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsInBhbmVsIiwiUGFuZWwiLCJjaGlsZCIsIkNoaWxkIiwiY291bnRlcjEiLCJDb3VudGVyIiwiY291bnRlcjIiLCJsaXN0IiwiTGlzdCIsImdyb3VwIiwiR3JvdXAiLCJ0b2FzdCIsIlRvYXN0IiwibWl4aW5zIiwidGVzdE1peGluIiwicGFyZW50VGl0bGUiLCJteW51bSIsIm5pY2tOYW1lIiwiY291bnQiLCJuZXRyc3QiLCJncm91cExpc3QiLCJpZCIsIm5hbWUiLCJjaGlsZGlkIiwiY2hpbGRuYW1lIiwiY29tcHV0ZWQiLCJub3ciLCJEYXRlIiwibWV0aG9kcyIsInBsdXMiLCJwcm9taXNlIiwiJGludm9rZSIsInRpdGxlIiwiaW1nIiwidGhlbiIsImQiLCJ0YXAiLCIkbmFtZSIsImNvbW11bmljYXRlIiwiJGJyb2FkY2FzdCIsInJlcXVlc3QiLCJpIiwibWFwIiwidXJsIiwic3VjY2VzcyIsImNvdW50ZXJFbWl0IiwiYXJncyIsIiRldmVudCIsImxlbmd0aCIsInNvdXJjZSIsInBhcmVudEZuIiwiZXZ0IiwiZXZlbnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBR0E7QUFFd0M7QUFDVDtBQUNRO0FBQ1A7OztBQVBoQzs7OztBQUNBOztBQUVBOzs7O0FBQ0E7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QVFDLEdBQVIsQ0FDSyxLQUFLa0UsS0FEVixpQkFDMkJVLE9BQU96QixJQURsQyxjQUMrQ3lCLE9BQU9FLE1BQVAsQ0FBY1osS0FEN0Q7QUFHRCxLQXBETztBQXFEUmEsWUFyRFEsb0JBcURDNUUsR0FyREQsRUFxREs2RSxHQXJETCxFQXFEUztBQUNmakYsY0FBUUMsR0FBUixDQUFZLDRDQUE0Q0csR0FBNUMsR0FBZ0Q2RSxHQUE1RDtBQUNEO0FBdkRPLEc7T0E0RFZDLE0sR0FBUztBQUNQLGtCQUFjLHFCQUFhO0FBQUE7O0FBQ3pCLFVBQUlMLGtCQUFjLFVBQUtDLE1BQUwsR0FBYyxDQUE1QiwyREFBSjtBQUNBOUUsY0FBUUMsR0FBUixDQUFZLE1BQVosRUFBaUIsTUFBakI7O0FBRUFELGNBQVFDLEdBQVIsQ0FDSyxPQUFLa0UsS0FEVixpQkFDMkJVLE9BQU96QixJQURsQyxjQUMrQ3lCLE9BQU9FLE1BQVAsQ0FBY1osS0FEN0Q7QUFHRDtBQVJNLEc7OztrQkE5SlVoRSxLIiwiZmlsZSI6ImluZGV4LjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3dlcHktcmVkdXgnO1xuLy/lvJXlhaVMaXN044CBUGFuZWzlkoxDb3VudGVy57uE5Lu2XG5pbXBvcnQgQ2hpbGQgZnJvbSAnLi4vY29tcG9uZW50cy9jaGlsZCc7XG5pbXBvcnQgUGFuZWwgZnJvbSAnQC9jb21wb25lbnRzL3BhbmVsJzsgLy8gYWxpYXMgZXhhbXBsZVxuaW1wb3J0IENvdW50ZXIgZnJvbSAnY291bnRlcic7IC8vIGFsaWFzIGV4YW1wbGVcbmltcG9ydCBMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvbGlzdCc7IC8vIGFsaWFzRmllbGRzIGV4YW1wbGVcbmltcG9ydCBtb2R1bGVBIGZyb20gJ21vZHVsZS1hJzsgLy8gYWxpYXNGaWVsZHMgaWdub3JlIG1vZHVsZSBleGFtcGxlXG5pbXBvcnQgR3JvdXAgZnJvbSAnLi4vY29tcG9uZW50cy9ncm91cCc7XG5pbXBvcnQgVG9hc3QgZnJvbSAnd2VweS1jb20tdG9hc3QnO1xuaW1wb3J0IHRlc3RNaXhpbiBmcm9tICcuLi9taXhpbnMvdGVzdCc7XG5cbmNvbnNvbGUubG9nKCdtb2R1bGVBIGlnbm9yZWQ6ICcsIG1vZHVsZUEpOyAvLyA9PiBtb2R1bGVBIGlnbm9yZWQ6IHt9XG5cbkBjb25uZWN0KHtcbiAgbnVtKHN0YXRlKSB7XG4gICAgcmV0dXJuIHN0YXRlLmNvdW50ZXIubnVtO1xuICB9LFxuICBhc3luY051bShzdGF0ZSkge1xuICAgIHJldHVybiBzdGF0ZS5jb3VudGVyLmFzeW5jTnVtO1xuICB9LFxuICBzdW1OdW0oc3RhdGUpIHtcbiAgICByZXR1cm4gc3RhdGUuY291bnRlci5udW0gKyBzdGF0ZS5jb3VudGVyLmFzeW5jTnVtO1xuICB9XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ3Rlc3QyJ1xuICB9O1xuICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiY2hpbGRcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnRpdGxlLm9uY2VcIjpcInBhcmVudFRpdGxlXCIsXCJ2LWJpbmQ6c3luY1RpdGxlLnN5bmNcIjpcInBhcmVudFRpdGxlXCIsXCJ2LWJpbmQ6dHdvV2F5VGl0bGUub25jZVwiOlwicGFyZW50VGl0bGVcIixcInhtbG5zOnYtb25cIjpcIlwifSxcImNvdW50ZXIyXCI6e1widi1iaW5kOm51bS5zeW5jXCI6XCJteW51bVwifSxcImdyb3VwXCI6e1widi1iaW5kOmdyb3VwbGlzdC5vbmNlXCI6XCJpdGVtXCIsXCJ2LWJpbmQ6aW5kZXhhLm9uY2VcIjpcImluZGV4XCJ9fTtcclxuJGV2ZW50cyA9IHtcImNoaWxkXCI6e1widi1vbjpjaGlsZEZuXCI6XCJwYXJlbnRGblwifSxcImNvdW50ZXIxXCI6e1widi1vbjppbmRleC1lbWl0XCI6XCJjb3VudGVyRW1pdFwifX07XHJcbiBjb21wb25lbnRzID0ge1xuICAgIHBhbmVsOiBQYW5lbCxcbiAgICBjaGlsZDogQ2hpbGQsXG4gICAgY291bnRlcjE6IENvdW50ZXIsXG4gICAgY291bnRlcjI6IENvdW50ZXIsXG4gICAgbGlzdDogTGlzdCxcbiAgICBncm91cDogR3JvdXAsXG4gICAgdG9hc3Q6IFRvYXN0XG4gIH07XG5cbiAgLy8g5aOw5piO6aG16Z2i5omA5byV55So55qETWl4aW7lrp7kvotcbiAgbWl4aW5zID0gW3Rlc3RNaXhpbl07XG5cbiAgZGF0YSA9IHtcbiAgICBwYXJlbnRUaXRsZTogJ3AtdGl0bGUnLFxuICAgIG15bnVtOiAyMCxcbiAgICB1c2VySW5mbzoge1xuICAgICAgbmlja05hbWU6ICfliqDovb3kuK0uLi4nXG4gICAgfSxcbiAgICBub3JtYWxUaXRsZTogJ+WOn+Wni+agh+mimCcsXG4gICAgc2V0VGltZW91dFRpdGxlOiAn5qCH6aKY5LiJ56eS5ZCO5Lya6KKr5L+u5pS5JyxcbiAgICBjb3VudDogMCxcbiAgICBuZXRyc3Q6ICcnLFxuICAgIGdyb3VwTGlzdDogW1xuICAgICAge1xuICAgICAgICBpZDogMSxcbiAgICAgICAgbmFtZTogJ+eCueWHu+aUueWPmCcsXG4gICAgICAgIGxpc3Q6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjaGlsZGlkOiAnMS4xJyxcbiAgICAgICAgICAgIGNoaWxkbmFtZTogJ+WtkOmhue+8jOeCueaIkeaUueWPmCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNoaWxkaWQ6ICcxLjInLFxuICAgICAgICAgICAgY2hpbGRuYW1lOiAn5a2Q6aG577yM54K55oiR5pS55Y+YJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2hpbGRpZDogJzEuMycsXG4gICAgICAgICAgICBjaGlsZG5hbWU6ICflrZDpobnvvIzngrnmiJHmlLnlj5gnXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogMixcbiAgICAgICAgbmFtZTogJ+eCueWHu+aUueWPmCcsXG4gICAgICAgIGxpc3Q6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjaGlsZGlkOiAnMi4xJyxcbiAgICAgICAgICAgIGNoaWxkbmFtZTogJ+WtkOmhue+8jOeCueaIkeaUueWPmCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNoaWxkaWQ6ICcyLjInLFxuICAgICAgICAgICAgY2hpbGRuYW1lOiAn5a2Q6aG577yM54K55oiR5pS55Y+YJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2hpbGRpZDogJzIuMycsXG4gICAgICAgICAgICBjaGlsZG5hbWU6ICflrZDpobnvvIzngrnmiJHmlLnlj5gnXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogMyxcbiAgICAgICAgbmFtZTogJ+eCueWHu+aUueWPmCcsXG4gICAgICAgIGxpc3Q6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjaGlsZGlkOiAnMy4xJyxcbiAgICAgICAgICAgIGNoaWxkbmFtZTogJ+WtkOmhue+8jOeCueaIkeaUueWPmCdcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH07XG5cbiAgY29tcHV0ZWQgPSB7XG4gICAgbm93KCkge1xuICAgICAgcmV0dXJuICtuZXcgRGF0ZSgpO1xuICAgIH1cbiAgfTtcblxuICBnZXREYXRhKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgcmVzb2x2ZSh7IGRhdGE6IDEyMyB9KTtcbiAgICAgIH0sIDMwMDApO1xuICAgIH0pO1xuICB9XG4gIGFzeW5jIG9uTG9hZCgpIHtcbiAgICBsZXQgZGF0YSA9IGF3YWl0IHRoaXMuZ2V0RGF0YSgpO1xuICAgIGNvbnNvbGUubG9nKCdkYXRhLmRhdGEtLScsIGRhdGEuZGF0YSk7XG4gIH1cbiAgLy8gd3htbOS6i+S7tuWkhOeQhuWHveaVsOWvueixoe+8jOWtmOaUvuWTjeW6lHd4bWzkuK3miYDmjZXojrfliLDnmoTkuovku7bnmoTlh73mlbDvvIzlpoJiaW5kdGFw44CBYmluZGNoYW5nZVxuICBtZXRob2RzID0ge1xuICAgIHBsdXMoKSB7XG4gICAgICB0aGlzLm15bnVtKys7XG4gICAgfSxcbiAgICB0b2FzdCgpIHtcbiAgICAgIGxldCBwcm9taXNlID0gdGhpcy4kaW52b2tlKCd0b2FzdCcsICdzaG93Jywge1xuICAgICAgICB0aXRsZTogJ+WIoOmZpOaIkOWKnycsLy/oh6rlrprkuYnmoIfpophcbiAgICAgICAgaW1nOiAnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2tpaW5sYW0vd2V0b2FzdC9tYXN0ZXIvaW1hZ2VzL3N0YXIucG5nJyxcbiAgICAgIH0pO1xuXG4gICAgICBwcm9taXNlLnRoZW4oZCA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd0b2FzdCBkb25lJyxkKTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgdGFwKCkge1xuICAgICAgY29uc29sZS5sb2coJ2RvIG5vdGluZyBmcm9tICcgKyB0aGlzLiRuYW1lKTtcbiAgICB9LFxuICAgIGNvbW11bmljYXRlKCkge1xuICAgICAgY29uc29sZS5sb2codGhpcy4kbmFtZSArICcgdGFwJyk7XG5cbiAgICAgIHRoaXMuJGludm9rZSgnY291bnRlcjInLCAnbWludXMnLCA0NSwgNik7XG4gICAgICB0aGlzLiRpbnZva2UoJ2NvdW50ZXIxJywgJ3BsdXMnLCA0NSwgNik7XG5cbiAgICAgIHRoaXMuJGJyb2FkY2FzdCgnaW5kZXgtYnJvYWRjYXN0JywgMSwgMywgNCk7XG4gICAgfSxcbiAgICByZXF1ZXN0KCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgbGV0IGkgPSAxMDtcbiAgICAgIGxldCBtYXAgPSBbICdNQT09JywgJ01Rbz0nLCAnTWc9PScsICdNdz09JywgJ05BPT0nLCAnTlE9PScsICdOZz09JywgJ053PT0nLCAnT0E9PScsICdPUT09JyBdO1xuICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICAvLyDor7fmsYLmjqXlj6NcbiAgICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgICB1cmw6ICdodHRwczovL3d3dy5tYWRjb2Rlci5jbi90ZXN0cy9zbGVlcC5waHA/dGltZT0xJnQ9Y3NzJmM9JyArIG1hcFtpXSArICcmaT0nICsgaSxcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZC0tLScsZCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHNlbGYubmV0cnN0ICs9IGQuZGF0YSArICcuJztcbiAgICAgICAgICAgIHNlbGYuJGFwcGx5KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIC8vIOiHquWumuS5iee7hOS7tuWHveaVsFxuICAgIGNvdW50ZXJFbWl0KC4uLmFyZ3MpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdhcmdzLS0tOicsYXJncyk7XG4gICAgICBcbiAgICAgIGxldCAkZXZlbnQgPSBhcmdzW2FyZ3MubGVuZ3RoIC0gMV07XG4gICAgICBjb25zb2xlLmxvZygnZXZlbnQtLScsJGV2ZW50KTtcbiAgICAgIFxuICAgICAgY29uc29sZS5sb2coXG4gICAgICAgIGAke3RoaXMuJG5hbWV9IHJlY2VpdmUgJHskZXZlbnQubmFtZX0gZnJvbSAkeyRldmVudC5zb3VyY2UuJG5hbWV9YFxuICAgICAgKTtcbiAgICB9LFxuICAgIHBhcmVudEZuKG51bSxldnQpe1xuICAgICAgY29uc29sZS5sb2coJ3BhcmVudCByZWNlaXZlZCBlbWl0IGV2ZW50LCBudW1iZXIgaXM6ICcgKyBudW0rZXZ0KVxuICAgIH1cbiAgfTtcbiAgLy/lo7DmmI7nu4Tku7bkuYvpl7TnmoTkuovku7blpITnkIblh73mlbBcbiAgLy8gIFdlUFnnu4Tku7bkuovku7blpITnkIblh73mlbDlr7nosaHvvIzlrZjmlL7lk43lupTnu4Tku7bkuYvpl7TpgJrov4ckYnJvYWRjYXN044CBJGVtaXTjgIEkaW52b2tl5omA5Lyg6YCS55qE5LqL5Lu255qE5Ye95pWwXG4gIC8v55So5LqO55uR5ZCs57uE5Lu25LmL6Ze055qE6YCa5L+h5LiO5Lqk5LqS5LqL5Lu255qE5LqL5Lu25aSE55CG5Ye95pWw6ZyA6KaB5YaZ5Zyo57uE5Lu25ZKM6aG16Z2i55qEZXZlbnRz5a+56LGh5LitXG4gIGV2ZW50cyA9IHtcbiAgICAnaW5kZXgtZW1pdCc6ICguLi5hcmdzKSA9PiB7XG4gICAgICBsZXQgJGV2ZW50ID0gYXJnc1thcmdzLmxlbmd0aCAtIDFdO1xuICAgICAgY29uc29sZS5sb2codGhpcywndGhpcycpO1xuICAgICAgXG4gICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgYCR7dGhpcy4kbmFtZX0gcmVjZWl2ZSAkeyRldmVudC5uYW1lfSBmcm9tICR7JGV2ZW50LnNvdXJjZS4kbmFtZX1gXG4gICAgICApO1xuICAgIH1cbiAgfTtcbiAgLy/pobXpnaLnmoTnlJ/lkb3lkajmnJ/lh73mlbBcbiAgb25Mb2FkKCkge1xuICAgIGNvbnNvbGUubG9nKCfliJ3lp4vljJbliqDovb0tLW9uTG9hZCcpO1xuXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIHRoaXMuJHBhcmVudC5nZXRVc2VySW5mbyhmdW5jdGlvbih1c2VySW5mbykge1xuICAgICAgaWYgKHVzZXJJbmZvKSB7XG4gICAgICAgIHNlbGYudXNlckluZm8gPSB1c2VySW5mbztcbiAgICAgIH1cbiAgICAgIHNlbGYubm9ybWFsVGl0bGUgPSAn5qCH6aKY5bey6KKr5L+u5pS5JztcblxuICAgICAgc2VsZi5zZXRUaW1lb3V0VGl0bGUgPSAn5qCH6aKY5LiJ56eS5ZCO5Lya6KKr5L+u5pS5JztcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzZWxmLnNldFRpbWVvdXRUaXRsZSA9ICfliLDkuInnp5LkuoYnO1xuICAgICAgICBzZWxmLiRhcHBseSgpO1xuICAgICAgfSwgMzAwMCk7XG5cbiAgICAgIHNlbGYuJGFwcGx5KCk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==