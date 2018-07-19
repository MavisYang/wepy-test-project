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

var Child = function (_wepy$component) {
  _inherits(Child, _wepy$component);

  function Child() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Child);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Child.__proto__ || Object.getPrototypeOf(Child)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      // 静态传值
      title: String,

      // 父向子单向动态传值
      syncTitle: {
        type: String, //String  Function  Boolean
        default: null
      },
      // 双向绑定 
      twoWayTitle: {
        type: String,
        default: 'nothing',
        twoWay: true
      }

    }, _this.methods = {
      tap: function tap() {
        //  console.log('child is clicked')
        this.$emit('childFn', 100);
        //
        /** 
         * childFn 对应<child v-on:childFn='parentFn'></child>
         *  parentFn父级组件中对应自定义的函数 
         * parentFn(num,evt){ console.log('parent received emit event, number is: ' + num) }
        */
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Child, [{
    key: 'onLoad',
    value: function onLoad() {
      console.log(this.title); // mytitle
      this.title = 'c-title';
      this.twoWayTitle = 'two-way-title';
      this.$apply();
      console.log(this.$parent.parentTitle);
      // two-way-title.  --- twoWay为true时，子组件props中的属性值改变时，会同时改变父组件对应的值
      this.$parent.parentTitle = 'p-title-changed';
      this.$parent.$apply();
      console.log(this.title); // 'c-title';
      console.log(this.syncTitle);
      // 'p-title-changed' --- 有.sync修饰符的props属性值，当在父组件中改变时，会同时改变子组件对应的值。
    }
  }]);

  return Child;
}(_wepy2.default.component);

exports.default = Child;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbi5qcyJdLCJuYW1lcyI6WyJDaGlsZCIsInByb3BzIiwidGl0bGUiLCJTdHJpbmciLCJzeW5jVGl0bGUiLCJ0eXBlIiwiZGVmYXVsdCIsInR3b1dheVRpdGxlIiwidHdvV2F5IiwibWV0aG9kcyIsInRhcCIsIiRlbWl0IiwiY29uc29sZSIsImxvZyIsIiRhcHBseSIsIiRwYXJlbnQiLCJwYXJlbnRUaXRsZSIsIndlcHkiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsSyxHQUFRO0FBQ0o7QUFDRkMsYUFBT0MsTUFGRDs7QUFJTDtBQUNEQyxpQkFBVztBQUNUQyxjQUFNRixNQURHLEVBQ0k7QUFDYkcsaUJBQVM7QUFGQSxPQUxMO0FBU047QUFDQUMsbUJBQWE7QUFDWEYsY0FBTUYsTUFESztBQUVYRyxpQkFBUyxTQUZFO0FBR1hFLGdCQUFRO0FBSEc7O0FBVlAsSyxRQWtCUkMsTyxHQUFRO0FBQ05DLFNBRE0saUJBQ0Q7QUFDTDtBQUNDLGFBQUtDLEtBQUwsQ0FBVyxTQUFYLEVBQXFCLEdBQXJCO0FBQ0E7QUFDQTs7Ozs7QUFNQTtBQVhLLEs7Ozs7OzZCQWFDO0FBQ1BDLGNBQVFDLEdBQVIsQ0FBWSxLQUFLWCxLQUFqQixFQURPLENBQ2tCO0FBQ3pCLFdBQUtBLEtBQUwsR0FBVyxTQUFYO0FBQ0EsV0FBS0ssV0FBTCxHQUFtQixlQUFuQjtBQUNBLFdBQUtPLE1BQUw7QUFDQUYsY0FBUUMsR0FBUixDQUFZLEtBQUtFLE9BQUwsQ0FBYUMsV0FBekI7QUFDQztBQUNELFdBQUtELE9BQUwsQ0FBYUMsV0FBYixHQUEyQixpQkFBM0I7QUFDQSxXQUFLRCxPQUFMLENBQWFELE1BQWI7QUFDQ0YsY0FBUUMsR0FBUixDQUFZLEtBQUtYLEtBQWpCLEVBVE0sQ0FTbUI7QUFDMUJVLGNBQVFDLEdBQVIsQ0FBWSxLQUFLVCxTQUFqQjtBQUNBO0FBRUQ7Ozs7RUE3Q2dDYSxlQUFLQyxTOztrQkFBbkJsQixLIiwiZmlsZSI6ImNvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGlsZCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgcHJvcHMgPSB7XG4gICAgICAvLyDpnZnmgIHkvKDlgLxcbiAgICB0aXRsZTogU3RyaW5nLFxuXG4gICAgIC8vIOeItuWQkeWtkOWNleWQkeWKqOaAgeS8oOWAvFxuICAgIHN5bmNUaXRsZToge1xuICAgICAgdHlwZTogU3RyaW5nLC8vU3RyaW5nICBGdW5jdGlvbiAgQm9vbGVhblxuICAgICAgZGVmYXVsdDogbnVsbFxuICAgIH0sXG4gICAgLy8g5Y+M5ZCR57uR5a6aIFxuICAgIHR3b1dheVRpdGxlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnbm90aGluZycsXG4gICAgICB0d29XYXk6IHRydWVcbiAgICB9LFxuXG4gIH07XG5cbiAgbWV0aG9kcz17XG4gICAgdGFwKCl7XG4gICAgLy8gIGNvbnNvbGUubG9nKCdjaGlsZCBpcyBjbGlja2VkJylcbiAgICAgdGhpcy4kZW1pdCgnY2hpbGRGbicsMTAwKTtcbiAgICAgLy9cbiAgICAgLyoqIFxuICAgICAgKiBjaGlsZEZuIOWvueW6lDxjaGlsZCB2LW9uOmNoaWxkRm49J3BhcmVudEZuJz48L2NoaWxkPlxuICAgICAgKiAgcGFyZW50Rm7niLbnuqfnu4Tku7bkuK3lr7nlupToh6rlrprkuYnnmoTlh73mlbAgXG4gICAgICAqIHBhcmVudEZuKG51bSxldnQpeyBjb25zb2xlLmxvZygncGFyZW50IHJlY2VpdmVkIGVtaXQgZXZlbnQsIG51bWJlciBpczogJyArIG51bSkgfVxuICAgICAqL1xuICAgICAgICAgXG4gICAgfVxuICB9XG4gIG9uTG9hZCgpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnRpdGxlKTsgLy8gbXl0aXRsZVxuICAgIHRoaXMudGl0bGU9J2MtdGl0bGUnO1xuICAgIHRoaXMudHdvV2F5VGl0bGUgPSAndHdvLXdheS10aXRsZSc7XG4gICAgdGhpcy4kYXBwbHkoKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLiRwYXJlbnQucGFyZW50VGl0bGUpO1xuICAgICAvLyB0d28td2F5LXRpdGxlLiAgLS0tIHR3b1dheeS4unRydWXml7bvvIzlrZDnu4Tku7Zwcm9wc+S4reeahOWxnuaAp+WAvOaUueWPmOaXtu+8jOS8muWQjOaXtuaUueWPmOeItue7hOS7tuWvueW6lOeahOWAvFxuICAgIHRoaXMuJHBhcmVudC5wYXJlbnRUaXRsZSA9ICdwLXRpdGxlLWNoYW5nZWQnXG4gICAgdGhpcy4kcGFyZW50LiRhcHBseSgpO1xuICAgICBjb25zb2xlLmxvZyh0aGlzLnRpdGxlKTsgLy8gJ2MtdGl0bGUnO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuc3luY1RpdGxlKTsgXG4gICAgLy8gJ3AtdGl0bGUtY2hhbmdlZCcgLS0tIOaciS5zeW5j5L+u6aWw56ym55qEcHJvcHPlsZ7mgKflgLzvvIzlvZPlnKjniLbnu4Tku7bkuK3mlLnlj5jml7bvvIzkvJrlkIzml7bmlLnlj5jlrZDnu4Tku7blr7nlupTnmoTlgLzjgIJcblxuICB9XG59XG4iXX0=