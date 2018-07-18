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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Item.__proto__ || Object.getPrototypeOf(Item)).call.apply(_ref, [this].concat(args))), _this), _this.props = {}, _this.data = {
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
    value: function onLoad() {
      // console.log(this.props.checkIndex,'checkIndex');

    }
  }]);

  return Item;
}(_wepy2.default.component);

exports.default = Item;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW0uanMiXSwibmFtZXMiOlsiSXRlbSIsInByb3BzIiwiZGF0YSIsImhlaWdodCIsImRlbHRhSGVpZ2h0IiwibWV0aG9kcyIsInRhcCIsImlkIiwiZXZlbnQiLCJ0aGF0IiwicXVlcnkiLCJ3eCIsImNyZWF0ZVNlbGVjdG9yUXVlcnkiLCJzZWxlY3QiLCJib3VuZGluZ0NsaWVudFJlY3QiLCJyZXMiLCIkYXBwbHkiLCJleGVjIiwiJGVtaXQiLCJldmVudHMiLCJ3ZXB5IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxJOzs7Ozs7Ozs7Ozs7OztrTEFDbkJDLEssR0FBUSxFLFFBRVJDLEksR0FBTztBQUNMQyxjQUFRLEVBREg7QUFFTEMsbUJBQWE7QUFGUixLLFFBU1BDLE8sR0FBVTtBQUNSQyxTQURRLGVBQ0pDLEVBREksRUFDQUMsS0FEQSxFQUNPO0FBQ2IsWUFBSUMsT0FBTyxJQUFYO0FBQ0E7QUFDQSxZQUFJQyxRQUFRQyxHQUFHQyxtQkFBSCxFQUFaO0FBQ0FGLGNBQ0dHLE1BREgsQ0FDVSxVQURWLEVBRUdDLGtCQUZILENBRXNCLFVBQVNDLEdBQVQsRUFBYztBQUNoQ04sZUFBS0wsV0FBTCxHQUFtQlcsSUFBSVosTUFBdkI7QUFDQU0sZUFBS08sTUFBTDtBQUNELFNBTEgsRUFNR0MsSUFOSDtBQU9FO0FBQ0ZSLGFBQUtTLEtBQUwsQ0FBVyxhQUFYLEVBQTBCWCxFQUExQixFQVphLENBWWtCO0FBQ2hDO0FBZE8sSyxRQWdCVlksTSxHQUFTO0FBQ1A7QUFDQTtBQUNBO0FBSE8sSzs7Ozs7NkJBcEJBO0FBQ1A7O0FBRUQ7Ozs7RUFYK0JDLGVBQUtDLFM7O2tCQUFsQnJCLEkiLCJmaWxlIjoiaXRlbS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJdGVtIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICBwcm9wcyA9IHtcbiAgfTtcbiAgZGF0YSA9IHtcbiAgICBoZWlnaHQ6IDIwLFxuICAgIGRlbHRhSGVpZ2h0OiAwXG4gIH07XG5cbiAgb25Mb2FkKCkge1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucHJvcHMuY2hlY2tJbmRleCwnY2hlY2tJbmRleCcpO1xuICAgIFxuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgdGFwKGlkLCBldmVudCkge1xuICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgICAgLy8g6I635Y+W6IqC54K55L+h5oGvXG4gICAgICB2YXIgcXVlcnkgPSB3eC5jcmVhdGVTZWxlY3RvclF1ZXJ5KCk7XG4gICAgICBxdWVyeVxuICAgICAgICAuc2VsZWN0KCcudWwtbGlzdCcpXG4gICAgICAgIC5ib3VuZGluZ0NsaWVudFJlY3QoZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgdGhhdC5kZWx0YUhlaWdodCA9IHJlcy5oZWlnaHQ7XG4gICAgICAgICAgdGhhdC4kYXBwbHkoKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmV4ZWMoKTtcbiAgICAgICAgLy8gdGhpcy4kZW1pdCgnaW5kZXgtZW1pdCcsIGlkKVxuICAgICAgdGhhdC4kZW1pdCgnY2hpbGRIYW5kbGUnLCBpZCk7IC8v5a2Q57uE5Lu26LCD5Y+W54i257uE5Lu255qE5pa55rOVXG4gICAgfVxuICB9O1xuICBldmVudHMgPSB7XG4gICAgLy8gaGFuZGxlQ2hlY2soaW5kZXgpe1xuICAgIC8vICAgIGNvbnNvbGUubG9nKCfmiJHmmK/lpKvnu4Tku7bosIPnlKjnmoTlrZDnu4Tku7bmlrnms5UtLScsaW5kZXgpO1xuICAgIC8vIH1cbiAgfTtcbn1cbiJdfQ==