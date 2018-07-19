"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _utils = require('./../../utils/utils.js');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CountDown = function (_wepy$component) {
  _inherits(CountDown, _wepy$component);

  function CountDown() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, CountDown);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CountDown.__proto__ || Object.getPrototypeOf(CountDown)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      timeUpdate: {
        type: Object,
        default: "",
        twoWay: true
      }
    }, _this.data = {
      typeTime: "",
      downTime: ""
    }, _this.methods = {
      tap: function tap() {}
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CountDown, [{
    key: "onshow",
    value: function onshow() {}
  }, {
    key: "onLoad",
    value: function onLoad() {
      // 获取父组件中的参数:this.$parent
      // 获取props中的参数 ：this.timeUpdate
      // 获取data中的参数：this.downTime
      // 获取方法：this.countDownTime
      // console.log(this.$parent,'this.$parent');
      // console.log(this.$parent.$props,'this.$parent');
      // console.log(this.timeUpdate, "timeUpdate");
      // console.log(this.countDownTime,'countDownTime');
      this.handleCountDownTime();
    }
  }, {
    key: "handleCountDownTime",
    value: function handleCountDownTime() {
      var _this2 = this;

      var timeUpdate = this.timeUpdate.timeUpdate;
      var type = this.timeUpdate.type;
      this.typeTime = type;
      var current = new Date().getTime();
      if (current < timeUpdate) {
        var time = Math.floor((timeUpdate - current) / 1000);
        this.downTime = this.countDownTime(time, type);
        this.$apply();
        setTimeout(function () {
          _this2.handleCountDownTime();
        }, 500);
      }
    }
  }, {
    key: "countDownTime",


    // time 团购倒计时
    value: function countDownTime(time, type) {
      var leave1 = time % (24 * 3600);
      var hours = Math.floor(leave1 / 3600);
      //计算相差分钟数
      var leave2 = leave1 % 3600; //计算小时数后剩余的秒数
      var minutes = Math.floor(leave2 / 60);
      //计算相差秒数
      var leave3 = leave2 % 60;
      var seconds = leave3;
      if (hours < 0 || minutes < 0 || seconds < 0) {
        return "00:00:00";
      }
      switch (type) {
        case 1:
          return [this.formatZero(hours), this.formatZero(minutes), this.formatZero(seconds)];
          break;
        case 2:
          return this.formatZero(hours) + ":" + this.formatZero(minutes) + ":" + this.formatZero(seconds);
          break;
        default:
          break;
      }
    }
  }, {
    key: "formatZero",
    value: function formatZero(str) {
      return str < 10 ? "0" + str : str;
    }
  }]);

  return CountDown;
}(_wepy2.default.component);

exports.default = CountDown;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdW50RG93bi5qcyJdLCJuYW1lcyI6WyJDb3VudERvd24iLCJwcm9wcyIsInRpbWVVcGRhdGUiLCJ0eXBlIiwiT2JqZWN0IiwiZGVmYXVsdCIsInR3b1dheSIsImRhdGEiLCJ0eXBlVGltZSIsImRvd25UaW1lIiwibWV0aG9kcyIsInRhcCIsImhhbmRsZUNvdW50RG93blRpbWUiLCJjdXJyZW50IiwiRGF0ZSIsImdldFRpbWUiLCJ0aW1lIiwiTWF0aCIsImZsb29yIiwiY291bnREb3duVGltZSIsIiRhcHBseSIsInNldFRpbWVvdXQiLCJsZWF2ZTEiLCJob3VycyIsImxlYXZlMiIsIm1pbnV0ZXMiLCJsZWF2ZTMiLCJzZWNvbmRzIiwiZm9ybWF0WmVybyIsInN0ciIsIndlcHkiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsUzs7Ozs7Ozs7Ozs7Ozs7NExBQ25CQyxLLEdBQVE7QUFDTkMsa0JBQVk7QUFDVkMsY0FBTUMsTUFESTtBQUVWQyxpQkFBUyxFQUZDO0FBR1ZDLGdCQUFRO0FBSEU7QUFETixLLFFBT1JDLEksR0FBTztBQUNMQyxnQkFBVSxFQURMO0FBRUxDLGdCQUFVO0FBRkwsSyxRQWdCUEMsTyxHQUFVO0FBQ1JDLFNBRFEsaUJBQ0YsQ0FBRTtBQURBLEs7Ozs7OzZCQVpELENBQUU7Ozs2QkFDRjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFLQyxtQkFBTDtBQUNEOzs7MENBSXFCO0FBQUE7O0FBQ3BCLFVBQUlWLGFBQWEsS0FBS0EsVUFBTCxDQUFnQkEsVUFBakM7QUFDQSxVQUFJQyxPQUFPLEtBQUtELFVBQUwsQ0FBZ0JDLElBQTNCO0FBQ0EsV0FBS0ssUUFBTCxHQUFnQkwsSUFBaEI7QUFDQSxVQUFJVSxVQUFVLElBQUlDLElBQUosR0FBV0MsT0FBWCxFQUFkO0FBQ0EsVUFBSUYsVUFBVVgsVUFBZCxFQUEwQjtBQUN4QixZQUFJYyxPQUFPQyxLQUFLQyxLQUFMLENBQVcsQ0FBQ2hCLGFBQWFXLE9BQWQsSUFBeUIsSUFBcEMsQ0FBWDtBQUNBLGFBQUtKLFFBQUwsR0FBZ0IsS0FBS1UsYUFBTCxDQUFtQkgsSUFBbkIsRUFBd0JiLElBQXhCLENBQWhCO0FBQ0EsYUFBS2lCLE1BQUw7QUFDQUMsbUJBQVcsWUFBTTtBQUNmLGlCQUFLVCxtQkFBTDtBQUNELFNBRkQsRUFFRyxHQUZIO0FBSUQ7QUFDRjs7Ozs7QUFFRDtrQ0FDY0ksSSxFQUFNYixJLEVBQU07QUFDeEIsVUFBSW1CLFNBQVNOLFFBQVEsS0FBSyxJQUFiLENBQWI7QUFDQSxVQUFJTyxRQUFRTixLQUFLQyxLQUFMLENBQVdJLFNBQVMsSUFBcEIsQ0FBWjtBQUNBO0FBQ0EsVUFBSUUsU0FBU0YsU0FBUyxJQUF0QixDQUp3QixDQUlJO0FBQzVCLFVBQUlHLFVBQVVSLEtBQUtDLEtBQUwsQ0FBV00sU0FBUyxFQUFwQixDQUFkO0FBQ0E7QUFDQSxVQUFJRSxTQUFTRixTQUFTLEVBQXRCO0FBQ0EsVUFBSUcsVUFBVUQsTUFBZDtBQUNBLFVBQUlILFFBQVEsQ0FBUixJQUFhRSxVQUFVLENBQXZCLElBQTRCRSxVQUFVLENBQTFDLEVBQTZDO0FBQzNDLGVBQU8sVUFBUDtBQUNEO0FBQ0QsY0FBUXhCLElBQVI7QUFDRSxhQUFLLENBQUw7QUFDRSxpQkFBTyxDQUFFLEtBQUt5QixVQUFMLENBQWdCTCxLQUFoQixDQUFGLEVBQTBCLEtBQUtLLFVBQUwsQ0FBZ0JILE9BQWhCLENBQTFCLEVBQW9ELEtBQUtHLFVBQUwsQ0FBZ0JELE9BQWhCLENBQXBELENBQVA7QUFDQTtBQUNGLGFBQUssQ0FBTDtBQUNFLGlCQUFRLEtBQUtDLFVBQUwsQ0FBZ0JMLEtBQWhCLElBQXlCLEdBQXpCLEdBQStCLEtBQUtLLFVBQUwsQ0FBZ0JILE9BQWhCLENBQS9CLEdBQTBELEdBQTFELEdBQWdFLEtBQUtHLFVBQUwsQ0FBZ0JELE9BQWhCLENBQXhFO0FBQ0E7QUFDRjtBQUNFO0FBUko7QUFVRDs7OytCQUNVRSxHLEVBQUs7QUFDZCxhQUFPQSxNQUFNLEVBQU4sR0FBVyxNQUFNQSxHQUFqQixHQUF1QkEsR0FBOUI7QUFDRDs7OztFQXJFb0NDLGVBQUtDLFM7O2tCQUF2Qi9CLFMiLCJmaWxlIjoiY291bnREb3duLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tIFwid2VweVwiO1xuaW1wb3J0IHV0aWxzIGZyb20gXCIuLi8uLi91dGlscy91dGlscy5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ291bnREb3duIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICBwcm9wcyA9IHtcbiAgICB0aW1lVXBkYXRlOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICBkZWZhdWx0OiBcIlwiLFxuICAgICAgdHdvV2F5OiB0cnVlXG4gICAgfVxuICB9O1xuICBkYXRhID0ge1xuICAgIHR5cGVUaW1lOiBcIlwiLFxuICAgIGRvd25UaW1lOiBcIlwiXG4gIH07XG4gIG9uc2hvdygpIHt9XG4gIG9uTG9hZCgpIHtcbiAgICAvLyDojrflj5bniLbnu4Tku7bkuK3nmoTlj4LmlbA6dGhpcy4kcGFyZW50XG4gICAgLy8g6I635Y+WcHJvcHPkuK3nmoTlj4LmlbAg77yadGhpcy50aW1lVXBkYXRlXG4gICAgLy8g6I635Y+WZGF0YeS4reeahOWPguaVsO+8mnRoaXMuZG93blRpbWVcbiAgICAvLyDojrflj5bmlrnms5XvvJp0aGlzLmNvdW50RG93blRpbWVcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLiRwYXJlbnQsJ3RoaXMuJHBhcmVudCcpO1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuJHBhcmVudC4kcHJvcHMsJ3RoaXMuJHBhcmVudCcpO1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMudGltZVVwZGF0ZSwgXCJ0aW1lVXBkYXRlXCIpO1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuY291bnREb3duVGltZSwnY291bnREb3duVGltZScpO1xuICAgIHRoaXMuaGFuZGxlQ291bnREb3duVGltZSgpO1xuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgdGFwKCkge31cbiAgfTtcbiAgaGFuZGxlQ291bnREb3duVGltZSgpIHtcbiAgICBsZXQgdGltZVVwZGF0ZSA9IHRoaXMudGltZVVwZGF0ZS50aW1lVXBkYXRlO1xuICAgIGxldCB0eXBlID0gdGhpcy50aW1lVXBkYXRlLnR5cGU7XG4gICAgdGhpcy50eXBlVGltZSA9IHR5cGVcbiAgICBsZXQgY3VycmVudCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIGlmIChjdXJyZW50IDwgdGltZVVwZGF0ZSkge1xuICAgICAgbGV0IHRpbWUgPSBNYXRoLmZsb29yKCh0aW1lVXBkYXRlIC0gY3VycmVudCkgLyAxMDAwKTtcbiAgICAgIHRoaXMuZG93blRpbWUgPSB0aGlzLmNvdW50RG93blRpbWUodGltZSx0eXBlKTtcbiAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5oYW5kbGVDb3VudERvd25UaW1lKCk7XG4gICAgICB9LCA1MDApO1xuICAgICBcbiAgICB9XG4gIH07XG4gIFxuICAvLyB0aW1lIOWboui0reWAkuiuoeaXtlxuICBjb3VudERvd25UaW1lKHRpbWUsIHR5cGUpIHtcbiAgICB2YXIgbGVhdmUxID0gdGltZSAlICgyNCAqIDM2MDApO1xuICAgIHZhciBob3VycyA9IE1hdGguZmxvb3IobGVhdmUxIC8gMzYwMCk7XG4gICAgLy/orqHnrpfnm7jlt67liIbpkp/mlbBcbiAgICB2YXIgbGVhdmUyID0gbGVhdmUxICUgMzYwMDsgLy/orqHnrpflsI/ml7bmlbDlkI7liankvZnnmoTnp5LmlbBcbiAgICB2YXIgbWludXRlcyA9IE1hdGguZmxvb3IobGVhdmUyIC8gNjApO1xuICAgIC8v6K6h566X55u45beu56eS5pWwXG4gICAgdmFyIGxlYXZlMyA9IGxlYXZlMiAlIDYwO1xuICAgIHZhciBzZWNvbmRzID0gbGVhdmUzO1xuICAgIGlmIChob3VycyA8IDAgfHwgbWludXRlcyA8IDAgfHwgc2Vjb25kcyA8IDApIHtcbiAgICAgIHJldHVybiBcIjAwOjAwOjAwXCI7XG4gICAgfVxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAxOlxuICAgICAgICByZXR1cm4gWyB0aGlzLmZvcm1hdFplcm8oaG91cnMpLCB0aGlzLmZvcm1hdFplcm8obWludXRlcyksIHRoaXMuZm9ybWF0WmVybyhzZWNvbmRzKSBdO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgcmV0dXJuICB0aGlzLmZvcm1hdFplcm8oaG91cnMpICsgXCI6XCIgKyB0aGlzLmZvcm1hdFplcm8obWludXRlcykgKyBcIjpcIiArIHRoaXMuZm9ybWF0WmVybyhzZWNvbmRzKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgZm9ybWF0WmVybyhzdHIpIHtcbiAgICByZXR1cm4gc3RyIDwgMTAgPyBcIjBcIiArIHN0ciA6IHN0cjtcbiAgfVxufVxuIl19