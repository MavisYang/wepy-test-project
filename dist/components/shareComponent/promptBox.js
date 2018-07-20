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
    }, _this.data = {}, _this.components = {}, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(PromptBox, [{
    key: "onLoad",
    value: function onLoad() {

      //   console.log(this.prompt,1);

      //   this.showPromptBox()
      // }
      // showPromptBox(){
      //   if(this.prompt){
      //      this.promptWord = this.prompt;
      //      this.isPrompt=this.isPrompt;
      //      this.hidePromptBox()
      //      this.$apply()
      //   }
      // }
      // hidePromptBox(){
      //   let that = this;
      //   let fadeOutTimeout = setTimeout(() => {
      //       that.isPrompt=false;
      //       this.promptWord=null;
      //       that.$apply()
      //       clearTimeout(fadeOutTimeout);
      //   }, 2000);
    }
  }, {
    key: "customFunc",

    // 自定义方法
    value: function customFunc() {}
  }]);

  return PromptBox;
}(_wepy2.default.component);

exports.default = PromptBox;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb21wdEJveC5qcyJdLCJuYW1lcyI6WyJQcm9tcHRCb3giLCJwcm9wcyIsInByb21wdCIsInR5cGUiLCJTdHJpbmciLCJkZWZhdWx0IiwidHdvV2F5IiwiZGF0YSIsImNvbXBvbmVudHMiLCJtZXRob2RzIiwiZXZlbnRzIiwid2VweSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxTOzs7Ozs7Ozs7Ozs7Ozs0TEFDbkJDLEssR0FBUTtBQUNOQyxjQUFPO0FBQ0xDLGNBQUtDLE1BREE7QUFFTEMsaUJBQVMsSUFGSjtBQUdMQyxnQkFBUTtBQUhIO0FBREQsSyxRQU9SQyxJLEdBQU8sRSxRQUVQQyxVLEdBQWEsRSxRQXdCYkMsTyxHQUFVLEUsUUFDVkMsTSxHQUFTLEU7Ozs7OzZCQXhCQTs7QUFFVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQzs7OztBQUdEO2lDQUNhLENBQUU7Ozs7RUFyQ3NCQyxlQUFLQyxTOztrQkFBdkJaLFMiLCJmaWxlIjoicHJvbXB0Qm94LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tIFwid2VweVwiO1xuaW1wb3J0IHV0aWxzIGZyb20gXCIuLi8uLi91dGlscy91dGlscy5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvbXB0Qm94IGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICBwcm9wcyA9IHtcbiAgICBwcm9tcHQ6e1xuICAgICAgdHlwZTpTdHJpbmcsXG4gICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgdHdvV2F5OiB0cnVlXG4gICAgfVxuICB9O1xuICBkYXRhID0ge1xuICB9O1xuICBjb21wb25lbnRzID0ge307XG4gIG9uTG9hZCgpIHtcbiAgICBcbiAgLy8gICBjb25zb2xlLmxvZyh0aGlzLnByb21wdCwxKTtcbiAgICBcbiAgLy8gICB0aGlzLnNob3dQcm9tcHRCb3goKVxuICAvLyB9XG4gIC8vIHNob3dQcm9tcHRCb3goKXtcbiAgLy8gICBpZih0aGlzLnByb21wdCl7XG4gIC8vICAgICAgdGhpcy5wcm9tcHRXb3JkID0gdGhpcy5wcm9tcHQ7XG4gIC8vICAgICAgdGhpcy5pc1Byb21wdD10aGlzLmlzUHJvbXB0O1xuICAvLyAgICAgIHRoaXMuaGlkZVByb21wdEJveCgpXG4gIC8vICAgICAgdGhpcy4kYXBwbHkoKVxuICAvLyAgIH1cbiAgLy8gfVxuICAvLyBoaWRlUHJvbXB0Qm94KCl7XG4gIC8vICAgbGV0IHRoYXQgPSB0aGlzO1xuICAvLyAgIGxldCBmYWRlT3V0VGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAvLyAgICAgICB0aGF0LmlzUHJvbXB0PWZhbHNlO1xuICAvLyAgICAgICB0aGlzLnByb21wdFdvcmQ9bnVsbDtcbiAgLy8gICAgICAgdGhhdC4kYXBwbHkoKVxuICAvLyAgICAgICBjbGVhclRpbWVvdXQoZmFkZU91dFRpbWVvdXQpO1xuICAvLyAgIH0sIDIwMDApO1xuICB9XG4gIG1ldGhvZHMgPSB7fTtcbiAgZXZlbnRzID0ge307XG4gIC8vIOiHquWumuS5ieaWueazlVxuICBjdXN0b21GdW5jKCkge31cbn1cbiJdfQ==