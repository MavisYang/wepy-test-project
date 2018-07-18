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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoaWxkLmpzIl0sIm5hbWVzIjpbIkNoaWxkIiwicHJvcHMiLCJ0aXRsZSIsIlN0cmluZyIsInN5bmNUaXRsZSIsInR5cGUiLCJkZWZhdWx0IiwidHdvV2F5VGl0bGUiLCJ0d29XYXkiLCJtZXRob2RzIiwidGFwIiwiJGVtaXQiLCJjb25zb2xlIiwibG9nIiwiJGFwcGx5IiwiJHBhcmVudCIsInBhcmVudFRpdGxlIiwid2VweSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxLLEdBQVE7QUFDSjtBQUNGQyxhQUFPQyxNQUZEOztBQUlMO0FBQ0RDLGlCQUFXO0FBQ1RDLGNBQU1GLE1BREcsRUFDSTtBQUNiRyxpQkFBUztBQUZBLE9BTEw7QUFTTjtBQUNBQyxtQkFBYTtBQUNYRixjQUFNRixNQURLO0FBRVhHLGlCQUFTLFNBRkU7QUFHWEUsZ0JBQVE7QUFIRzs7QUFWUCxLLFFBa0JSQyxPLEdBQVE7QUFDTkMsU0FETSxpQkFDRDtBQUNMO0FBQ0MsYUFBS0MsS0FBTCxDQUFXLFNBQVgsRUFBcUIsR0FBckI7QUFDQTtBQUNBOzs7OztBQU1BO0FBWEssSzs7Ozs7NkJBYUM7QUFDUEMsY0FBUUMsR0FBUixDQUFZLEtBQUtYLEtBQWpCLEVBRE8sQ0FDa0I7QUFDekIsV0FBS0EsS0FBTCxHQUFXLFNBQVg7QUFDQSxXQUFLSyxXQUFMLEdBQW1CLGVBQW5CO0FBQ0EsV0FBS08sTUFBTDtBQUNBRixjQUFRQyxHQUFSLENBQVksS0FBS0UsT0FBTCxDQUFhQyxXQUF6QjtBQUNDO0FBQ0QsV0FBS0QsT0FBTCxDQUFhQyxXQUFiLEdBQTJCLGlCQUEzQjtBQUNBLFdBQUtELE9BQUwsQ0FBYUQsTUFBYjtBQUNDRixjQUFRQyxHQUFSLENBQVksS0FBS1gsS0FBakIsRUFUTSxDQVNtQjtBQUMxQlUsY0FBUUMsR0FBUixDQUFZLEtBQUtULFNBQWpCO0FBQ0E7QUFFRDs7OztFQTdDZ0NhLGVBQUtDLFM7O2tCQUFuQmxCLEsiLCJmaWxlIjoiY2hpbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hpbGQgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gIHByb3BzID0ge1xuICAgICAgLy8g6Z2Z5oCB5Lyg5YC8XG4gICAgdGl0bGU6IFN0cmluZyxcblxuICAgICAvLyDniLblkJHlrZDljZXlkJHliqjmgIHkvKDlgLxcbiAgICBzeW5jVGl0bGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZywvL1N0cmluZyAgRnVuY3Rpb24gIEJvb2xlYW5cbiAgICAgIGRlZmF1bHQ6IG51bGxcbiAgICB9LFxuICAgIC8vIOWPjOWQkee7keWumiBcbiAgICB0d29XYXlUaXRsZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ25vdGhpbmcnLFxuICAgICAgdHdvV2F5OiB0cnVlXG4gICAgfSxcblxuICB9O1xuXG4gIG1ldGhvZHM9e1xuICAgIHRhcCgpe1xuICAgIC8vICBjb25zb2xlLmxvZygnY2hpbGQgaXMgY2xpY2tlZCcpXG4gICAgIHRoaXMuJGVtaXQoJ2NoaWxkRm4nLDEwMCk7XG4gICAgIC8vXG4gICAgIC8qKiBcbiAgICAgICogY2hpbGRGbiDlr7nlupQ8Y2hpbGQgdi1vbjpjaGlsZEZuPSdwYXJlbnRGbic+PC9jaGlsZD5cbiAgICAgICogIHBhcmVudEZu54i257qn57uE5Lu25Lit5a+55bqU6Ieq5a6a5LmJ55qE5Ye95pWwIFxuICAgICAgKiBwYXJlbnRGbihudW0sZXZ0KXsgY29uc29sZS5sb2coJ3BhcmVudCByZWNlaXZlZCBlbWl0IGV2ZW50LCBudW1iZXIgaXM6ICcgKyBudW0pIH1cbiAgICAgKi9cbiAgICAgICAgIFxuICAgIH1cbiAgfVxuICBvbkxvYWQoKSB7XG4gICAgY29uc29sZS5sb2codGhpcy50aXRsZSk7IC8vIG15dGl0bGVcbiAgICB0aGlzLnRpdGxlPSdjLXRpdGxlJztcbiAgICB0aGlzLnR3b1dheVRpdGxlID0gJ3R3by13YXktdGl0bGUnO1xuICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgY29uc29sZS5sb2codGhpcy4kcGFyZW50LnBhcmVudFRpdGxlKTtcbiAgICAgLy8gdHdvLXdheS10aXRsZS4gIC0tLSB0d29XYXnkuLp0cnVl5pe277yM5a2Q57uE5Lu2cHJvcHPkuK3nmoTlsZ7mgKflgLzmlLnlj5jml7bvvIzkvJrlkIzml7bmlLnlj5jniLbnu4Tku7blr7nlupTnmoTlgLxcbiAgICB0aGlzLiRwYXJlbnQucGFyZW50VGl0bGUgPSAncC10aXRsZS1jaGFuZ2VkJ1xuICAgIHRoaXMuJHBhcmVudC4kYXBwbHkoKTtcbiAgICAgY29uc29sZS5sb2codGhpcy50aXRsZSk7IC8vICdjLXRpdGxlJztcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN5bmNUaXRsZSk7IFxuICAgIC8vICdwLXRpdGxlLWNoYW5nZWQnIC0tLSDmnIkuc3luY+S/rumlsOespueahHByb3Bz5bGe5oCn5YC877yM5b2T5Zyo54i257uE5Lu25Lit5pS55Y+Y5pe277yM5Lya5ZCM5pe25pS55Y+Y5a2Q57uE5Lu25a+55bqU55qE5YC844CCXG5cbiAgfVxufVxuIl19