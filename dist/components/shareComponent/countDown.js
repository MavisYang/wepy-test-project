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
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
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
      var current = Date.now(); //==new Date().getTime()
      if (current < timeUpdate) {
        var timeC = Math.floor((timeUpdate - current) / 1000);
        this.downTime = this.countDownTime(timeC, type);
        this.$apply();
        if (timeC <= 0) return;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdW50RG93bi5qcyJdLCJuYW1lcyI6WyJDb3VudERvd24iLCJwcm9wcyIsInRpbWVVcGRhdGUiLCJ0eXBlIiwiT2JqZWN0IiwiZGVmYXVsdCIsInR3b1dheSIsImRhdGEiLCJ0eXBlVGltZSIsImRvd25UaW1lIiwibWV0aG9kcyIsImhhbmRsZUNvdW50RG93blRpbWUiLCJjdXJyZW50IiwiRGF0ZSIsIm5vdyIsInRpbWVDIiwiTWF0aCIsImZsb29yIiwiY291bnREb3duVGltZSIsIiRhcHBseSIsInNldFRpbWVvdXQiLCJ0aW1lIiwibGVhdmUxIiwiaG91cnMiLCJsZWF2ZTIiLCJtaW51dGVzIiwibGVhdmUzIiwic2Vjb25kcyIsImZvcm1hdFplcm8iLCJzdHIiLCJ3ZXB5IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLFM7Ozs7Ozs7Ozs7Ozs7OzRMQUNuQkMsSyxHQUFRO0FBQ05DLGtCQUFZO0FBQ1ZDLGNBQU1DLE1BREk7QUFFVkMsaUJBQVMsRUFGQztBQUdWQyxnQkFBUTtBQUhFO0FBRE4sSyxRQU9SQyxJLEdBQU87QUFDTEMsZ0JBQVUsRUFETDtBQUVMQyxnQkFBVTtBQUZMLEssUUFnQlBDLE8sR0FBVSxFOzs7Ozs2QkFaRCxDQUFFOzs7NkJBQ0Y7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBS0MsbUJBQUw7QUFDRDs7OzBDQUVxQjtBQUFBOztBQUNwQixVQUFJVCxhQUFhLEtBQUtBLFVBQUwsQ0FBZ0JBLFVBQWpDO0FBQ0EsVUFBSUMsT0FBTyxLQUFLRCxVQUFMLENBQWdCQyxJQUEzQjtBQUNBLFdBQUtLLFFBQUwsR0FBZ0JMLElBQWhCO0FBQ0EsVUFBSVMsVUFBVUMsS0FBS0MsR0FBTCxFQUFkLENBSm9CLENBSUs7QUFDekIsVUFBSUYsVUFBVVYsVUFBZCxFQUEwQjtBQUN4QixZQUFJYSxRQUFRQyxLQUFLQyxLQUFMLENBQVcsQ0FBQ2YsYUFBYVUsT0FBZCxJQUF5QixJQUFwQyxDQUFaO0FBQ0EsYUFBS0gsUUFBTCxHQUFnQixLQUFLUyxhQUFMLENBQW1CSCxLQUFuQixFQUF5QlosSUFBekIsQ0FBaEI7QUFDQSxhQUFLZ0IsTUFBTDtBQUNBLFlBQUlKLFNBQVMsQ0FBYixFQUFnQjtBQUNoQkssbUJBQVcsWUFBTTtBQUNmLGlCQUFLVCxtQkFBTDtBQUNELFNBRkQsRUFFRyxHQUZIO0FBSUQ7QUFDRjs7Ozs7QUFFRDtrQ0FDY1UsSSxFQUFNbEIsSSxFQUFNO0FBQ3hCLFVBQUltQixTQUFTRCxRQUFRLEtBQUssSUFBYixDQUFiO0FBQ0EsVUFBSUUsUUFBUVAsS0FBS0MsS0FBTCxDQUFXSyxTQUFTLElBQXBCLENBQVo7QUFDQTtBQUNBLFVBQUlFLFNBQVNGLFNBQVMsSUFBdEIsQ0FKd0IsQ0FJSTtBQUM1QixVQUFJRyxVQUFVVCxLQUFLQyxLQUFMLENBQVdPLFNBQVMsRUFBcEIsQ0FBZDtBQUNBO0FBQ0EsVUFBSUUsU0FBU0YsU0FBUyxFQUF0QjtBQUNBLFVBQUlHLFVBQVVELE1BQWQ7QUFDQSxVQUFJSCxRQUFRLENBQVIsSUFBYUUsVUFBVSxDQUF2QixJQUE0QkUsVUFBVSxDQUExQyxFQUE2QztBQUMzQyxlQUFPLFVBQVA7QUFDRDtBQUNELGNBQVF4QixJQUFSO0FBQ0UsYUFBSyxDQUFMO0FBQ0UsaUJBQU8sQ0FBRSxLQUFLeUIsVUFBTCxDQUFnQkwsS0FBaEIsQ0FBRixFQUEwQixLQUFLSyxVQUFMLENBQWdCSCxPQUFoQixDQUExQixFQUFvRCxLQUFLRyxVQUFMLENBQWdCRCxPQUFoQixDQUFwRCxDQUFQO0FBQ0E7QUFDRixhQUFLLENBQUw7QUFDRSxpQkFBUSxLQUFLQyxVQUFMLENBQWdCTCxLQUFoQixJQUF5QixHQUF6QixHQUErQixLQUFLSyxVQUFMLENBQWdCSCxPQUFoQixDQUEvQixHQUEwRCxHQUExRCxHQUFnRSxLQUFLRyxVQUFMLENBQWdCRCxPQUFoQixDQUF4RTtBQUNBO0FBQ0Y7QUFDRTtBQVJKO0FBVUQ7OzsrQkFDVUUsRyxFQUFLO0FBQ2QsYUFBT0EsTUFBTSxFQUFOLEdBQVcsTUFBTUEsR0FBakIsR0FBdUJBLEdBQTlCO0FBQ0Q7Ozs7RUFwRW9DQyxlQUFLQyxTOztrQkFBdkIvQixTIiwiZmlsZSI6ImNvdW50RG93bi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSBcIndlcHlcIjtcbmltcG9ydCB1dGlscyBmcm9tIFwiLi4vLi4vdXRpbHMvdXRpbHMuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvdW50RG93biBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgcHJvcHMgPSB7XG4gICAgdGltZVVwZGF0ZToge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgZGVmYXVsdDogXCJcIixcbiAgICAgIHR3b1dheTogdHJ1ZVxuICAgIH1cbiAgfTtcbiAgZGF0YSA9IHtcbiAgICB0eXBlVGltZTogXCJcIixcbiAgICBkb3duVGltZTogXCJcIlxuICB9O1xuICBvbnNob3coKSB7fVxuICBvbkxvYWQoKSB7XG4gICAgLy8g6I635Y+W54i257uE5Lu25Lit55qE5Y+C5pWwOnRoaXMuJHBhcmVudFxuICAgIC8vIOiOt+WPlnByb3Bz5Lit55qE5Y+C5pWwIO+8mnRoaXMudGltZVVwZGF0ZVxuICAgIC8vIOiOt+WPlmRhdGHkuK3nmoTlj4LmlbDvvJp0aGlzLmRvd25UaW1lXG4gICAgLy8g6I635Y+W5pa55rOV77yadGhpcy5jb3VudERvd25UaW1lXG4gICAgLy8gY29uc29sZS5sb2codGhpcy4kcGFyZW50LCd0aGlzLiRwYXJlbnQnKTtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLiRwYXJlbnQuJHByb3BzLCd0aGlzLiRwYXJlbnQnKTtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnRpbWVVcGRhdGUsIFwidGltZVVwZGF0ZVwiKTtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmNvdW50RG93blRpbWUsJ2NvdW50RG93blRpbWUnKTtcbiAgICB0aGlzLmhhbmRsZUNvdW50RG93blRpbWUoKTtcbiAgfVxuICBtZXRob2RzID0ge307XG4gIGhhbmRsZUNvdW50RG93blRpbWUoKSB7XG4gICAgbGV0IHRpbWVVcGRhdGUgPSB0aGlzLnRpbWVVcGRhdGUudGltZVVwZGF0ZTtcbiAgICBsZXQgdHlwZSA9IHRoaXMudGltZVVwZGF0ZS50eXBlO1xuICAgIHRoaXMudHlwZVRpbWUgPSB0eXBlXG4gICAgbGV0IGN1cnJlbnQgPSBEYXRlLm5vdygpOy8vPT1uZXcgRGF0ZSgpLmdldFRpbWUoKVxuICAgIGlmIChjdXJyZW50IDwgdGltZVVwZGF0ZSkge1xuICAgICAgbGV0IHRpbWVDID0gTWF0aC5mbG9vcigodGltZVVwZGF0ZSAtIGN1cnJlbnQpIC8gMTAwMCk7XG4gICAgICB0aGlzLmRvd25UaW1lID0gdGhpcy5jb3VudERvd25UaW1lKHRpbWVDLHR5cGUpO1xuICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgIGlmICh0aW1lQyA8PSAwKSByZXR1cm5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmhhbmRsZUNvdW50RG93blRpbWUoKTtcbiAgICAgIH0sIDUwMCk7XG4gICAgIFxuICAgIH1cbiAgfTtcbiAgXG4gIC8vIHRpbWUg5Zui6LSt5YCS6K6h5pe2XG4gIGNvdW50RG93blRpbWUodGltZSwgdHlwZSkge1xuICAgIHZhciBsZWF2ZTEgPSB0aW1lICUgKDI0ICogMzYwMCk7XG4gICAgdmFyIGhvdXJzID0gTWF0aC5mbG9vcihsZWF2ZTEgLyAzNjAwKTtcbiAgICAvL+iuoeeul+ebuOW3ruWIhumSn+aVsFxuICAgIHZhciBsZWF2ZTIgPSBsZWF2ZTEgJSAzNjAwOyAvL+iuoeeul+Wwj+aXtuaVsOWQjuWJqeS9meeahOenkuaVsFxuICAgIHZhciBtaW51dGVzID0gTWF0aC5mbG9vcihsZWF2ZTIgLyA2MCk7XG4gICAgLy/orqHnrpfnm7jlt67np5LmlbBcbiAgICB2YXIgbGVhdmUzID0gbGVhdmUyICUgNjA7XG4gICAgdmFyIHNlY29uZHMgPSBsZWF2ZTM7XG4gICAgaWYgKGhvdXJzIDwgMCB8fCBtaW51dGVzIDwgMCB8fCBzZWNvbmRzIDwgMCkge1xuICAgICAgcmV0dXJuIFwiMDA6MDA6MDBcIjtcbiAgICB9XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHJldHVybiBbIHRoaXMuZm9ybWF0WmVybyhob3VycyksIHRoaXMuZm9ybWF0WmVybyhtaW51dGVzKSwgdGhpcy5mb3JtYXRaZXJvKHNlY29uZHMpIF07XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyOlxuICAgICAgICByZXR1cm4gIHRoaXMuZm9ybWF0WmVybyhob3VycykgKyBcIjpcIiArIHRoaXMuZm9ybWF0WmVybyhtaW51dGVzKSArIFwiOlwiICsgdGhpcy5mb3JtYXRaZXJvKHNlY29uZHMpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICBmb3JtYXRaZXJvKHN0cikge1xuICAgIHJldHVybiBzdHIgPCAxMCA/IFwiMFwiICsgc3RyIDogc3RyO1xuICB9XG59XG4iXX0=