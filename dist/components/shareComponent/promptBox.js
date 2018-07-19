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

var PromptBox = function (_wepy$component) {
  _inherits(PromptBox, _wepy$component);

  function PromptBox() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, PromptBox);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PromptBox.__proto__ || Object.getPrototypeOf(PromptBox)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      prompt: {
        type: String,
        default: null,
        twoWay: true
      }
    }, _this.data = {
      isPrompt: false,
      promptWord: null
    }, _this.components = {}, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(PromptBox, [{
    key: "onLoad",
    value: function onLoad() {
      console.log(11);

      console.log(this.prompt, 1);

      this.showPromptBox();
    }
  }, {
    key: "showPromptBox",
    value: function showPromptBox() {
      if (this.prompt) {
        this.promptWord = this.prompt;
        this.isPrompt = true;
        this.hidePromptBox();
        this.$apply();
      }
    }
  }, {
    key: "hidePromptBox",
    value: function hidePromptBox() {
      var _this2 = this;

      var that = this;
      var fadeOutTimeout = setTimeout(function () {
        that.isPrompt = false;
        _this2.promptWord = null;
        that.$apply();
        clearTimeout(fadeOutTimeout);
      }, 2000);
    }
  }, {
    key: "customFunc",

    // 自定义方法
    value: function customFunc() {}
  }]);

  return PromptBox;
}(_wepy2.default.component);

exports.default = PromptBox;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb21wdEJveC5qcyJdLCJuYW1lcyI6WyJQcm9tcHRCb3giLCJwcm9wcyIsInByb21wdCIsInR5cGUiLCJTdHJpbmciLCJkZWZhdWx0IiwidHdvV2F5IiwiZGF0YSIsImlzUHJvbXB0IiwicHJvbXB0V29yZCIsImNvbXBvbmVudHMiLCJtZXRob2RzIiwiZXZlbnRzIiwiY29uc29sZSIsImxvZyIsInNob3dQcm9tcHRCb3giLCJoaWRlUHJvbXB0Qm94IiwiJGFwcGx5IiwidGhhdCIsImZhZGVPdXRUaW1lb3V0Iiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsIndlcHkiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsUzs7Ozs7Ozs7Ozs7Ozs7NExBQ25CQyxLLEdBQVE7QUFDTkMsY0FBTztBQUNMQyxjQUFLQyxNQURBO0FBRUxDLGlCQUFTLElBRko7QUFHTEMsZ0JBQVE7QUFISDtBQURELEssUUFPUkMsSSxHQUFPO0FBQ0xDLGdCQUFTLEtBREo7QUFFTEMsa0JBQVc7QUFGTixLLFFBSVBDLFUsR0FBYSxFLFFBeUJiQyxPLEdBQVUsRSxRQUNWQyxNLEdBQVMsRTs7Ozs7NkJBekJBO0FBQ1BDLGNBQVFDLEdBQVIsQ0FBWSxFQUFaOztBQUVBRCxjQUFRQyxHQUFSLENBQVksS0FBS1osTUFBakIsRUFBd0IsQ0FBeEI7O0FBRUEsV0FBS2EsYUFBTDtBQUNEOzs7b0NBQ2M7QUFDYixVQUFHLEtBQUtiLE1BQVIsRUFBZTtBQUNaLGFBQUtPLFVBQUwsR0FBa0IsS0FBS1AsTUFBdkI7QUFDQSxhQUFLTSxRQUFMLEdBQWMsSUFBZDtBQUNBLGFBQUtRLGFBQUw7QUFDQSxhQUFLQyxNQUFMO0FBQ0Y7QUFDRjs7O29DQUNjO0FBQUE7O0FBQ2IsVUFBSUMsT0FBTyxJQUFYO0FBQ0EsVUFBSUMsaUJBQWlCQyxXQUFXLFlBQU07QUFDbENGLGFBQUtWLFFBQUwsR0FBYyxLQUFkO0FBQ0EsZUFBS0MsVUFBTCxHQUFnQixJQUFoQjtBQUNBUyxhQUFLRCxNQUFMO0FBQ0FJLHFCQUFhRixjQUFiO0FBQ0gsT0FMb0IsRUFLbEIsSUFMa0IsQ0FBckI7QUFNRDs7OztBQUdEO2lDQUNhLENBQUU7Ozs7RUF4Q3NCRyxlQUFLQyxTOztrQkFBdkJ2QixTIiwiZmlsZSI6InByb21wdEJveC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSBcIndlcHlcIjtcbmltcG9ydCB1dGlscyBmcm9tIFwiLi4vLi4vdXRpbHMvdXRpbHMuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb21wdEJveCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgcHJvcHMgPSB7XG4gICAgcHJvbXB0OntcbiAgICAgIHR5cGU6U3RyaW5nLFxuICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgIHR3b1dheTogdHJ1ZVxuICAgIH1cbiAgfTtcbiAgZGF0YSA9IHtcbiAgICBpc1Byb21wdDpmYWxzZSxcbiAgICBwcm9tcHRXb3JkOm51bGxcbiAgfTtcbiAgY29tcG9uZW50cyA9IHt9O1xuICBvbkxvYWQoKSB7XG4gICAgY29uc29sZS5sb2coMTEpO1xuICAgIFxuICAgIGNvbnNvbGUubG9nKHRoaXMucHJvbXB0LDEpO1xuICAgIFxuICAgIHRoaXMuc2hvd1Byb21wdEJveCgpXG4gIH1cbiAgc2hvd1Byb21wdEJveCgpe1xuICAgIGlmKHRoaXMucHJvbXB0KXtcbiAgICAgICB0aGlzLnByb21wdFdvcmQgPSB0aGlzLnByb21wdDtcbiAgICAgICB0aGlzLmlzUHJvbXB0PXRydWU7XG4gICAgICAgdGhpcy5oaWRlUHJvbXB0Qm94KClcbiAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgfVxuICB9XG4gIGhpZGVQcm9tcHRCb3goKXtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgbGV0IGZhZGVPdXRUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoYXQuaXNQcm9tcHQ9ZmFsc2U7XG4gICAgICAgIHRoaXMucHJvbXB0V29yZD1udWxsO1xuICAgICAgICB0aGF0LiRhcHBseSgpXG4gICAgICAgIGNsZWFyVGltZW91dChmYWRlT3V0VGltZW91dCk7XG4gICAgfSwgMjAwMCk7XG4gIH1cbiAgbWV0aG9kcyA9IHt9O1xuICBldmVudHMgPSB7fTtcbiAgLy8g6Ieq5a6a5LmJ5pa55rOVXG4gIGN1c3RvbUZ1bmMoKSB7fVxufVxuIl19