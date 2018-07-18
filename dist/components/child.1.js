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
        console.log('child is clicked');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoaWxkLjEuanMiXSwibmFtZXMiOlsiQ2hpbGQiLCJwcm9wcyIsInRpdGxlIiwiU3RyaW5nIiwic3luY1RpdGxlIiwidHlwZSIsImRlZmF1bHQiLCJ0d29XYXlUaXRsZSIsInR3b1dheSIsIm1ldGhvZHMiLCJ0YXAiLCJjb25zb2xlIiwibG9nIiwiJGVtaXQiLCIkYXBwbHkiLCIkcGFyZW50IiwicGFyZW50VGl0bGUiLCJ3ZXB5IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLEssR0FBUTtBQUNKO0FBQ0ZDLGFBQU9DLE1BRkQ7O0FBSUw7QUFDREMsaUJBQVc7QUFDVEMsY0FBTUYsTUFERyxFQUNJO0FBQ2JHLGlCQUFTO0FBRkEsT0FMTDtBQVNOO0FBQ0FDLG1CQUFhO0FBQ1hGLGNBQU1GLE1BREs7QUFFWEcsaUJBQVMsU0FGRTtBQUdYRSxnQkFBUTtBQUhHOztBQVZQLEssUUFrQlJDLE8sR0FBUTtBQUNOQyxTQURNLGlCQUNEO0FBQ0pDLGdCQUFRQyxHQUFSLENBQVksa0JBQVo7QUFDQSxhQUFLQyxLQUFMLENBQVcsU0FBWCxFQUFxQixHQUFyQjtBQUNBO0FBQ0E7Ozs7O0FBTUE7QUFYSyxLOzs7Ozs2QkFhQztBQUNQRixjQUFRQyxHQUFSLENBQVksS0FBS1YsS0FBakIsRUFETyxDQUNrQjtBQUN6QixXQUFLQSxLQUFMLEdBQVcsU0FBWDtBQUNBLFdBQUtLLFdBQUwsR0FBbUIsZUFBbkI7QUFDQSxXQUFLTyxNQUFMO0FBQ0FILGNBQVFDLEdBQVIsQ0FBWSxLQUFLRyxPQUFMLENBQWFDLFdBQXpCO0FBQ0M7QUFDRCxXQUFLRCxPQUFMLENBQWFDLFdBQWIsR0FBMkIsaUJBQTNCO0FBQ0EsV0FBS0QsT0FBTCxDQUFhRCxNQUFiO0FBQ0NILGNBQVFDLEdBQVIsQ0FBWSxLQUFLVixLQUFqQixFQVRNLENBU21CO0FBQzFCUyxjQUFRQyxHQUFSLENBQVksS0FBS1IsU0FBakI7QUFDQTtBQUVEOzs7O0VBN0NnQ2EsZUFBS0MsUzs7a0JBQW5CbEIsSyIsImZpbGUiOiJjaGlsZC4xLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoaWxkIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICBwcm9wcyA9IHtcbiAgICAgIC8vIOmdmeaAgeS8oOWAvFxuICAgIHRpdGxlOiBTdHJpbmcsXG5cbiAgICAgLy8g54i25ZCR5a2Q5Y2V5ZCR5Yqo5oCB5Lyg5YC8XG4gICAgc3luY1RpdGxlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsLy9TdHJpbmcgIEZ1bmN0aW9uICBCb29sZWFuXG4gICAgICBkZWZhdWx0OiBudWxsXG4gICAgfSxcbiAgICAvLyDlj4zlkJHnu5HlrpogXG4gICAgdHdvV2F5VGl0bGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdub3RoaW5nJyxcbiAgICAgIHR3b1dheTogdHJ1ZVxuICAgIH0sXG5cbiAgfTtcblxuICBtZXRob2RzPXtcbiAgICB0YXAoKXtcbiAgICAgY29uc29sZS5sb2coJ2NoaWxkIGlzIGNsaWNrZWQnKVxuICAgICB0aGlzLiRlbWl0KCdjaGlsZEZuJywxMDApO1xuICAgICAvL1xuICAgICAvKiogXG4gICAgICAqIGNoaWxkRm4g5a+55bqUPGNoaWxkIHYtb246Y2hpbGRGbj0ncGFyZW50Rm4nPjwvY2hpbGQ+XG4gICAgICAqICBwYXJlbnRGbueItue6p+e7hOS7tuS4reWvueW6lOiHquWumuS5ieeahOWHveaVsCBcbiAgICAgICogcGFyZW50Rm4obnVtLGV2dCl7IGNvbnNvbGUubG9nKCdwYXJlbnQgcmVjZWl2ZWQgZW1pdCBldmVudCwgbnVtYmVyIGlzOiAnICsgbnVtKSB9XG4gICAgICovXG4gICAgICAgICBcbiAgICB9XG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMudGl0bGUpOyAvLyBteXRpdGxlXG4gICAgdGhpcy50aXRsZT0nYy10aXRsZSc7XG4gICAgdGhpcy50d29XYXlUaXRsZSA9ICd0d28td2F5LXRpdGxlJztcbiAgICB0aGlzLiRhcHBseSgpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuJHBhcmVudC5wYXJlbnRUaXRsZSk7XG4gICAgIC8vIHR3by13YXktdGl0bGUuICAtLS0gdHdvV2F55Li6dHJ1ZeaXtu+8jOWtkOe7hOS7tnByb3Bz5Lit55qE5bGe5oCn5YC85pS55Y+Y5pe277yM5Lya5ZCM5pe25pS55Y+Y54i257uE5Lu25a+55bqU55qE5YC8XG4gICAgdGhpcy4kcGFyZW50LnBhcmVudFRpdGxlID0gJ3AtdGl0bGUtY2hhbmdlZCdcbiAgICB0aGlzLiRwYXJlbnQuJGFwcGx5KCk7XG4gICAgIGNvbnNvbGUubG9nKHRoaXMudGl0bGUpOyAvLyAnYy10aXRsZSc7XG4gICAgY29uc29sZS5sb2codGhpcy5zeW5jVGl0bGUpOyBcbiAgICAvLyAncC10aXRsZS1jaGFuZ2VkJyAtLS0g5pyJLnN5bmPkv67ppbDnrKbnmoRwcm9wc+WxnuaAp+WAvO+8jOW9k+WcqOeItue7hOS7tuS4reaUueWPmOaXtu+8jOS8muWQjOaXtuaUueWPmOWtkOe7hOS7tuWvueW6lOeahOWAvOOAglxuXG4gIH1cbn1cbiJdfQ==