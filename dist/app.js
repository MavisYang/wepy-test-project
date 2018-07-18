'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

var _wepyRedux = require('./npm/wepy-redux/lib/index.js');

var _store = require('./store/index.js');

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var store = (0, _store2.default)();
(0, _wepyRedux.setStore)(store);

var _default = function (_wepy$app) {
  _inherits(_default, _wepy$app);

  function _default() {
    _classCallCheck(this, _default);

    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

    _this.config = {
      pages: ['pages/index', 'pages/home'],
      window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#fff',
        navigationBarTitleText: 'WeChat',
        navigationBarTextStyle: 'black'
      }
    };
    _this.globalData = {
      userInfo: null
    };

    _this.use('requestfix'); //在app.wpy中使API promise化
    _this.use('promisify');

    /**
     * 方法
     * use(middleWare:String|Function)：使用中间件。
     *  requestfix: 修复小程序请求并发问题。
     *  promisify：使用wepy.xxx的方式请求小程序原生API都将Promise化。
     * intercept(api:String, provider:Object)：使用拦截器对原生API请求进行拦截。
     */

    // 拦截request请求
    _this.intercept('request', {

      // 发出请求时的回调函数
      config: function config(p) {
        console.log('intercept111');
        // 对所有request请求中的OBJECT参数对象统一附加时间戳属性
        p.timestamp = +new Date();
        return p;
      },
      success: function success(obj) {
        console.log('intercept111');
        console.log('request success');
      }
    });
    return _this;
  }

  _createClass(_default, [{
    key: 'onLaunch',
    value: function onLaunch() {
      this.testAsync();
    }
  }, {
    key: 'sleep',
    value: function sleep(s) {
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          resolve('promise resolved');
        }, s * 1000);
      });
    }
  }, {
    key: 'testAsync',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.sleep(3);

              case 2:
                data = _context.sent;

                console.log('data--', data);

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function testAsync() {
        return _ref.apply(this, arguments);
      }

      return testAsync;
    }()
  }, {
    key: 'getUserInfo',
    value: function getUserInfo(cb) {
      var that = this;
      if (this.globalData.userInfo) {
        console.log(1);
        return this.globalData.userInfo;
      }
      _wepy2.default.getUserInfo({
        success: function success(res) {
          console.log(2, res.userInfo);
          that.globalData.userInfo = res.userInfo;
          cb && cb(res.userInfo);
        }
      });
    }
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {"noPromiseAPI":["createSelectorQuery"]}));
require('./_wepylogs.js')

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJzdG9yZSIsImNvbmZpZyIsInBhZ2VzIiwid2luZG93IiwiYmFja2dyb3VuZFRleHRTdHlsZSIsIm5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3IiLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwibmF2aWdhdGlvbkJhclRleHRTdHlsZSIsImdsb2JhbERhdGEiLCJ1c2VySW5mbyIsInVzZSIsImludGVyY2VwdCIsInAiLCJjb25zb2xlIiwibG9nIiwidGltZXN0YW1wIiwiRGF0ZSIsInN1Y2Nlc3MiLCJvYmoiLCJ0ZXN0QXN5bmMiLCJzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzZXRUaW1lb3V0Iiwic2xlZXAiLCJkYXRhIiwiY2IiLCJ0aGF0Iiwid2VweSIsImdldFVzZXJJbmZvIiwicmVzIiwiYXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOztBQUVBOztBQUNBOzs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFFBQVEsc0JBQWQ7QUFDQSx5QkFBU0EsS0FBVDs7Ozs7QUFvQkUsc0JBQWM7QUFBQTs7QUFBQTs7QUFBQSxVQWpCZEMsTUFpQmMsR0FqQkw7QUFDUEMsYUFBTyxDQUNMLGFBREssRUFFTCxZQUZLLENBREE7QUFLUEMsY0FBUTtBQUNOQyw2QkFBcUIsT0FEZjtBQUVOQyxzQ0FBOEIsTUFGeEI7QUFHTkMsZ0NBQXdCLFFBSGxCO0FBSU5DLGdDQUF3QjtBQUpsQjtBQUxELEtBaUJLO0FBQUEsVUFKZEMsVUFJYyxHQUpEO0FBQ1hDLGdCQUFVO0FBREMsS0FJQzs7QUFFWixVQUFLQyxHQUFMLENBQVMsWUFBVCxFQUZZLENBRVk7QUFDeEIsVUFBS0EsR0FBTCxDQUFTLFdBQVQ7O0FBRUE7Ozs7Ozs7O0FBUUE7QUFDQSxVQUFLQyxTQUFMLENBQWUsU0FBZixFQUEwQjs7QUFFeEI7QUFDQVYsWUFId0Isa0JBR2pCVyxDQUhpQixFQUdkO0FBQ1JDLGdCQUFRQyxHQUFSLENBQVksY0FBWjtBQUNDO0FBQ0RGLFVBQUVHLFNBQUYsR0FBYyxDQUFDLElBQUlDLElBQUosRUFBZjtBQUNBLGVBQU9KLENBQVA7QUFDRCxPQVJ1QjtBQVN4QkssYUFUd0IsbUJBU2hCQyxHQVRnQixFQVNYO0FBQ1hMLGdCQUFRQyxHQUFSLENBQVksY0FBWjtBQUNBRCxnQkFBUUMsR0FBUixDQUFZLGlCQUFaO0FBQ0Q7QUFadUIsS0FBMUI7QUFkWTtBQTRCYjs7OzsrQkFFVTtBQUNULFdBQUtLLFNBQUw7QUFDRDs7OzBCQUVLQyxDLEVBQUc7QUFDUCxhQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdENDLG1CQUFXLFlBQU07QUFDZkYsa0JBQVEsa0JBQVI7QUFDRCxTQUZELEVBRUdGLElBQUksSUFGUDtBQUdELE9BSk0sQ0FBUDtBQUtEOzs7Ozs7Ozs7Ozt1QkFHb0IsS0FBS0ssS0FBTCxDQUFXLENBQVgsQzs7O0FBQWJDLG9COztBQUNOYix3QkFBUUMsR0FBUixDQUFZLFFBQVosRUFBc0JZLElBQXRCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0NBR1VDLEUsRUFBSTtBQUNkLFVBQU1DLE9BQU8sSUFBYjtBQUNBLFVBQUksS0FBS3BCLFVBQUwsQ0FBZ0JDLFFBQXBCLEVBQThCO0FBQzVCSSxnQkFBUUMsR0FBUixDQUFZLENBQVo7QUFDQSxlQUFPLEtBQUtOLFVBQUwsQ0FBZ0JDLFFBQXZCO0FBQ0Q7QUFDRG9CLHFCQUFLQyxXQUFMLENBQWlCO0FBQ2ZiLGVBRGUsbUJBQ1BjLEdBRE8sRUFDRjtBQUNYbEIsa0JBQVFDLEdBQVIsQ0FBWSxDQUFaLEVBQWVpQixJQUFJdEIsUUFBbkI7QUFDQW1CLGVBQUtwQixVQUFMLENBQWdCQyxRQUFoQixHQUEyQnNCLElBQUl0QixRQUEvQjtBQUNBa0IsZ0JBQU1BLEdBQUdJLElBQUl0QixRQUFQLENBQU47QUFDRDtBQUxjLE9BQWpCO0FBT0Q7Ozs7RUE5RTBCb0IsZUFBS0csRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuaW1wb3J0ICd3ZXB5LWFzeW5jLWZ1bmN0aW9uJztcblxuaW1wb3J0IHsgc2V0U3RvcmUgfSBmcm9tICd3ZXB5LXJlZHV4JztcbmltcG9ydCBjb25maWdTdG9yZSBmcm9tICcuL3N0b3JlJztcblxuY29uc3Qgc3RvcmUgPSBjb25maWdTdG9yZSgpO1xuc2V0U3RvcmUoc3RvcmUpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIHdlcHkuYXBwIHtcbiAgY29uZmlnID0ge1xuICAgIHBhZ2VzOiBbXG4gICAgICAncGFnZXMvaW5kZXgnLFxuICAgICAgJ3BhZ2VzL2hvbWUnXG4gICAgXSxcbiAgICB3aW5kb3c6IHtcbiAgICAgIGJhY2tncm91bmRUZXh0U3R5bGU6ICdsaWdodCcsXG4gICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAnV2VDaGF0JyxcbiAgICAgIG5hdmlnYXRpb25CYXJUZXh0U3R5bGU6ICdibGFjaydcbiAgICB9XG4gIH07XG5cbiAgZ2xvYmFsRGF0YSA9IHtcbiAgICB1c2VySW5mbzogbnVsbFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy51c2UoJ3JlcXVlc3RmaXgnKTsgLy/lnKhhcHAud3B55Lit5L2/QVBJIHByb21pc2XljJZcbiAgICB0aGlzLnVzZSgncHJvbWlzaWZ5JylcblxuICAgIC8qKlxuICAgICAqIOaWueazlVxuICAgICAqIHVzZShtaWRkbGVXYXJlOlN0cmluZ3xGdW5jdGlvbinvvJrkvb/nlKjkuK3pl7Tku7bjgIJcbiAgICAgKiAgcmVxdWVzdGZpeDog5L+u5aSN5bCP56iL5bqP6K+35rGC5bm25Y+R6Zeu6aKY44CCXG4gICAgICogIHByb21pc2lmee+8muS9v+eUqHdlcHkueHh455qE5pa55byP6K+35rGC5bCP56iL5bqP5Y6f55SfQVBJ6YO95bCGUHJvbWlzZeWMluOAglxuICAgICAqIGludGVyY2VwdChhcGk6U3RyaW5nLCBwcm92aWRlcjpPYmplY3Qp77ya5L2/55So5oum5oiq5Zmo5a+55Y6f55SfQVBJ6K+35rGC6L+b6KGM5oum5oiq44CCXG4gICAgICovXG5cbiAgICAvLyDmi6bmiKpyZXF1ZXN06K+35rGCXG4gICAgdGhpcy5pbnRlcmNlcHQoJ3JlcXVlc3QnLCB7XG4gICAgXG4gICAgICAvLyDlj5Hlh7ror7fmsYLml7bnmoTlm57osIPlh73mlbBcbiAgICAgIGNvbmZpZyhwKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdpbnRlcmNlcHQxMTEnKTtcbiAgICAgICAgIC8vIOWvueaJgOaciXJlcXVlc3Tor7fmsYLkuK3nmoRPQkpFQ1Tlj4LmlbDlr7nosaHnu5/kuIDpmYTliqDml7bpl7TmiLPlsZ7mgKdcbiAgICAgICAgcC50aW1lc3RhbXAgPSArbmV3IERhdGUoKTtcbiAgICAgICAgcmV0dXJuIHA7XG4gICAgICB9LFxuICAgICAgc3VjY2VzcyhvYmopIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2ludGVyY2VwdDExMScpO1xuICAgICAgICBjb25zb2xlLmxvZygncmVxdWVzdCBzdWNjZXNzJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBvbkxhdW5jaCgpIHtcbiAgICB0aGlzLnRlc3RBc3luYygpO1xuICB9XG5cbiAgc2xlZXAocykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgcmVzb2x2ZSgncHJvbWlzZSByZXNvbHZlZCcpO1xuICAgICAgfSwgcyAqIDEwMDApO1xuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgdGVzdEFzeW5jKCkge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLnNsZWVwKDMpO1xuICAgIGNvbnNvbGUubG9nKCdkYXRhLS0nLCBkYXRhKTtcbiAgfVxuXG4gIGdldFVzZXJJbmZvKGNiKSB7XG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgaWYgKHRoaXMuZ2xvYmFsRGF0YS51c2VySW5mbykge1xuICAgICAgY29uc29sZS5sb2coMSk7XG4gICAgICByZXR1cm4gdGhpcy5nbG9iYWxEYXRhLnVzZXJJbmZvO1xuICAgIH1cbiAgICB3ZXB5LmdldFVzZXJJbmZvKHtcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKDIsIHJlcy51c2VySW5mbyk7XG4gICAgICAgIHRoYXQuZ2xvYmFsRGF0YS51c2VySW5mbyA9IHJlcy51c2VySW5mbztcbiAgICAgICAgY2IgJiYgY2IocmVzLnVzZXJJbmZvKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIl19