'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _child = require('./child.js');

var _child2 = _interopRequireDefault(_child);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GroupItem = function (_wepy$component) {
  _inherits(GroupItem, _wepy$component);

  function GroupItem() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, GroupItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = GroupItem.__proto__ || Object.getPrototypeOf(GroupItem)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      gitem: {}
    }, _this.data = {}, _this.components = {
      Child: _child2.default
    }, _this.methods = {
      tap: function tap() {
        this.$invoke('Child', 'invokeTest');
        this.gitem.childname = 'Child Random(' + Math.random() + ')';
        console.log('Clicked Group ' + this.$parent.$index + '. Item ' + this.$index + ', ID is ' + this.gitem.childid);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return GroupItem;
}(_wepy2.default.component);

exports.default = GroupItem;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyb3VwaXRlbS5qcyJdLCJuYW1lcyI6WyJHcm91cEl0ZW0iLCJwcm9wcyIsImdpdGVtIiwiZGF0YSIsImNvbXBvbmVudHMiLCJDaGlsZCIsIm1ldGhvZHMiLCJ0YXAiLCIkaW52b2tlIiwiY2hpbGRuYW1lIiwiTWF0aCIsInJhbmRvbSIsImNvbnNvbGUiLCJsb2ciLCIkcGFyZW50IiwiJGluZGV4IiwiY2hpbGRpZCIsIndlcHkiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLFM7Ozs7Ozs7Ozs7Ozs7OzRMQUNuQkMsSyxHQUFRO0FBQ05DLGFBQU87QUFERCxLLFFBR1JDLEksR0FBTyxFLFFBRVBDLFUsR0FBVztBQUNUQyxhQUFNQTtBQURHLEssUUFHWEMsTyxHQUFVO0FBQ1JDLFNBRFEsaUJBQ0Q7QUFDTCxhQUFLQyxPQUFMLENBQWEsT0FBYixFQUFxQixZQUFyQjtBQUNBLGFBQUtOLEtBQUwsQ0FBV08sU0FBWCxxQkFBdUNDLEtBQUtDLE1BQUwsRUFBdkM7QUFDQUMsZ0JBQVFDLEdBQVIsb0JBQTZCLEtBQUtDLE9BQUwsQ0FBYUMsTUFBMUMsZUFBMEQsS0FBS0EsTUFBL0QsZ0JBQWdGLEtBQUtiLEtBQUwsQ0FBV2MsT0FBM0Y7QUFDRDtBQUxPLEs7Ozs7RUFUMkJDLGVBQUtDLFM7O2tCQUF2QmxCLFMiLCJmaWxlIjoiZ3JvdXBpdGVtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCBDaGlsZCBmcm9tIFwiLi9jaGlsZFwiO1xuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBHcm91cEl0ZW0gZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gICAgcHJvcHMgPSB7XG4gICAgICBnaXRlbToge31cbiAgICB9XG4gICAgZGF0YSA9IHtcbiAgICB9XG4gICAgY29tcG9uZW50cz17XG4gICAgICBDaGlsZDpDaGlsZCxcbiAgICB9XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHRhcCAoKSB7XG4gICAgICAgIHRoaXMuJGludm9rZSgnQ2hpbGQnLCdpbnZva2VUZXN0JylcbiAgICAgICAgdGhpcy5naXRlbS5jaGlsZG5hbWUgPSBgQ2hpbGQgUmFuZG9tKCR7TWF0aC5yYW5kb20oKX0pYFxuICAgICAgICBjb25zb2xlLmxvZyhgQ2xpY2tlZCBHcm91cCAke3RoaXMuJHBhcmVudC4kaW5kZXh9LiBJdGVtICR7dGhpcy4kaW5kZXh9LCBJRCBpcyAke3RoaXMuZ2l0ZW0uY2hpbGRpZH1gKVxuICAgICAgfVxuICAgIH1cbiAgfVxuIl19