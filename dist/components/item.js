'use strict';

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

var Item = function (_wepy$component) {
  _inherits(Item, _wepy$component);

  function Item() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Item);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Item.__proto__ || Object.getPrototypeOf(Item)).call.apply(_ref, [this].concat(args))), _this), _this.props = {

      // // 静态传值
      // title: String,

      // // 父向子单向动态传值
      // syncTitle: {
      //     type: String,
      //     default: 'null'
      // },

      // twoWayTitle: {
      //     type: String,
      //     default: 'nothing',
      //     twoWay: true
      // }
    }, _this.data = {
      height: 20,
      deltaHeight: 0
    }, _this.methods = {
      tap: function tap(id, event) {
        var that = this;
        // 获取节点信息
        var query = wx.createSelectorQuery();
        query.select('.ul-list').boundingClientRect(function (res) {
          that.deltaHeight = res.height;
          that.$apply();
        }).exec();
        // this.$emit('index-emit', id)
        that.$emit('childHandle', id); //子组件调取父组件的方法
      }
    }, _this.events = {
      // handleCheck(index){
      //    console.log('我是夫组件调用的子组件方法--',index);
      // }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Item, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Item;
}(_wepy2.default.component);

exports.default = Item;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW0uanMiXSwibmFtZXMiOlsiSXRlbSIsInByb3BzIiwiZGF0YSIsImhlaWdodCIsImRlbHRhSGVpZ2h0IiwibWV0aG9kcyIsInRhcCIsImlkIiwiZXZlbnQiLCJ0aGF0IiwicXVlcnkiLCJ3eCIsImNyZWF0ZVNlbGVjdG9yUXVlcnkiLCJzZWxlY3QiLCJib3VuZGluZ0NsaWVudFJlY3QiLCJyZXMiLCIkYXBwbHkiLCJleGVjIiwiJGVtaXQiLCJldmVudHMiLCJ3ZXB5IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxJOzs7Ozs7Ozs7Ozs7OztrTEFDbkJDLEssR0FBUTs7QUFFTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWZNLEssUUFpQlJDLEksR0FBTztBQUNMQyxjQUFRLEVBREg7QUFFTEMsbUJBQWE7QUFGUixLLFFBUVBDLE8sR0FBVTtBQUNSQyxTQURRLGVBQ0pDLEVBREksRUFDQUMsS0FEQSxFQUNPO0FBQ2IsWUFBSUMsT0FBTyxJQUFYO0FBQ0E7QUFDQSxZQUFJQyxRQUFRQyxHQUFHQyxtQkFBSCxFQUFaO0FBQ0FGLGNBQ0dHLE1BREgsQ0FDVSxVQURWLEVBRUdDLGtCQUZILENBRXNCLFVBQVNDLEdBQVQsRUFBYztBQUNoQ04sZUFBS0wsV0FBTCxHQUFtQlcsSUFBSVosTUFBdkI7QUFDQU0sZUFBS08sTUFBTDtBQUNELFNBTEgsRUFNR0MsSUFOSDtBQU9FO0FBQ0ZSLGFBQUtTLEtBQUwsQ0FBVyxhQUFYLEVBQTBCWCxFQUExQixFQVphLENBWWtCO0FBQ2hDO0FBZE8sSyxRQWdCVlksTSxHQUFTO0FBQ1A7QUFDQTtBQUNBO0FBSE8sSzs7Ozs7NkJBbkJBLENBRVI7Ozs7RUF6QitCQyxlQUFLQyxTOztrQkFBbEJyQixJIiwiZmlsZSI6Iml0ZW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSXRlbSBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgcHJvcHMgPSB7XG5cbiAgICAvLyAvLyDpnZnmgIHkvKDlgLxcbiAgICAvLyB0aXRsZTogU3RyaW5nLFxuXG4gICAgLy8gLy8g54i25ZCR5a2Q5Y2V5ZCR5Yqo5oCB5Lyg5YC8XG4gICAgLy8gc3luY1RpdGxlOiB7XG4gICAgLy8gICAgIHR5cGU6IFN0cmluZyxcbiAgICAvLyAgICAgZGVmYXVsdDogJ251bGwnXG4gICAgLy8gfSxcblxuICAgIC8vIHR3b1dheVRpdGxlOiB7XG4gICAgLy8gICAgIHR5cGU6IFN0cmluZyxcbiAgICAvLyAgICAgZGVmYXVsdDogJ25vdGhpbmcnLFxuICAgIC8vICAgICB0d29XYXk6IHRydWVcbiAgICAvLyB9XG4gIH07XG4gIGRhdGEgPSB7XG4gICAgaGVpZ2h0OiAyMCxcbiAgICBkZWx0YUhlaWdodDogMFxuICB9O1xuXG4gIG9uTG9hZCgpIHtcbiAgICBcbiAgfVxuICBtZXRob2RzID0ge1xuICAgIHRhcChpZCwgZXZlbnQpIHtcbiAgICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICAgIC8vIOiOt+WPluiKgueCueS/oeaBr1xuICAgICAgdmFyIHF1ZXJ5ID0gd3guY3JlYXRlU2VsZWN0b3JRdWVyeSgpO1xuICAgICAgcXVlcnlcbiAgICAgICAgLnNlbGVjdCgnLnVsLWxpc3QnKVxuICAgICAgICAuYm91bmRpbmdDbGllbnRSZWN0KGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgIHRoYXQuZGVsdGFIZWlnaHQgPSByZXMuaGVpZ2h0O1xuICAgICAgICAgIHRoYXQuJGFwcGx5KCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5leGVjKCk7XG4gICAgICAgIC8vIHRoaXMuJGVtaXQoJ2luZGV4LWVtaXQnLCBpZClcbiAgICAgIHRoYXQuJGVtaXQoJ2NoaWxkSGFuZGxlJywgaWQpOyAvL+WtkOe7hOS7tuiwg+WPlueItue7hOS7tueahOaWueazlVxuICAgIH1cbiAgfTtcbiAgZXZlbnRzID0ge1xuICAgIC8vIGhhbmRsZUNoZWNrKGluZGV4KXtcbiAgICAvLyAgICBjb25zb2xlLmxvZygn5oiR5piv5aSr57uE5Lu26LCD55So55qE5a2Q57uE5Lu25pa55rOVLS0nLGluZGV4KTtcbiAgICAvLyB9XG4gIH07XG59XG4iXX0=