"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

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
    }, _this.data = {}, _this.components = {}, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(PromptBox, [{
    key: "onLoad",
    value: function onLoad() {}
  }, {
    key: "customFunc",

    // 自定义方法
    value: function customFunc() {}
  }]);

  return PromptBox;
}(_wepy2.default.component);

exports.default = PromptBox;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb21wdEJveC5qcyJdLCJuYW1lcyI6WyJQcm9tcHRCb3giLCJwcm9wcyIsInByb21wdCIsInR5cGUiLCJTdHJpbmciLCJkZWZhdWx0IiwidHdvV2F5IiwiZGF0YSIsImNvbXBvbmVudHMiLCJtZXRob2RzIiwiZXZlbnRzIiwid2VweSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsUzs7Ozs7Ozs7Ozs7Ozs7NExBQ25CQyxLLEdBQVE7QUFDTkMsY0FBTztBQUNMQyxjQUFLQyxNQURBO0FBRUxDLGlCQUFTLElBRko7QUFHSkMsZ0JBQVE7QUFISjtBQURELEssUUFPUkMsSSxHQUFPLEUsUUFDUEMsVSxHQUFhLEUsUUFHYkMsTyxHQUFVLEUsUUFDVkMsTSxHQUFTLEU7Ozs7OzZCQUhBLENBQUU7Ozs7QUFJWDtpQ0FDYSxDQUFFOzs7O0VBZnNCQyxlQUFLQyxTOztrQkFBdkJaLFMiLCJmaWxlIjoicHJvbXB0Qm94LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tIFwid2VweVwiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvbXB0Qm94IGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICBwcm9wcyA9IHtcbiAgICBwcm9tcHQ6e1xuICAgICAgdHlwZTpTdHJpbmcsXG4gICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgIHR3b1dheTogdHJ1ZVxuICAgIH1cbiAgfTtcbiAgZGF0YSA9IHt9O1xuICBjb21wb25lbnRzID0ge307XG4gIG9uTG9hZCgpIHt9XG5cbiAgbWV0aG9kcyA9IHt9O1xuICBldmVudHMgPSB7fTtcbiAgLy8g6Ieq5a6a5LmJ5pa55rOVXG4gIGN1c3RvbUZ1bmMoKSB7fVxufVxuIl19