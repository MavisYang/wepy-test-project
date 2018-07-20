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
      },
      changeNum: {
        type: Number,
        default: 0,
        twoWay: true
      }

    }, _this.data = {
      // num:1 
    }, _this.watch = {
      changeNum: function changeNum(newValue, oldValue) {
        console.log('num value: ' + oldValue + ' -> ' + newValue);
      }
    }, _this.methods = {
      tap: function tap(index) {
        //  console.log('child is clicked')
        this.$emit('childFn', index);
        //
        /** 
         * childFn 对应<child v-on:childFn='parentFn'></child>
         *  parentFn父级组件中对应自定义的函数 
         * parentFn(num,evt){ console.log('parent received emit event, number is: ' + num) }
        */
      },
      changeNum: function changeNum() {
        this.changeNum++;
        this.$apply();
      },
      changeTitle: function changeTitle() {
        this.twoWayTitle = 'change title';
        this.$apply();
      },
      invokeTest: function invokeTest() {
        console.log('I am this.$invoke ');
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Child, [{
    key: 'onLoad',
    value: function onLoad() {

      // console.log(this.title); // mytitle
      // this.title='c-title';
      // this.twoWayTitle = 'two-way-title';
      // this.$apply();
      // console.log(this.$parent.parentTitle);
      //  // two-way-title.  --- twoWay为true时，子组件props中的属性值改变时，会同时改变父组件对应的值
      // this.$parent.parentTitle = 'p-title-changed'
      // this.$parent.$apply();
      //  console.log(this.title); // 'c-title';
      // console.log(this.syncTitle); 
      // 'p-title-changed' --- 有.sync修饰符的props属性值，当在父组件中改变时，会同时改变子组件对应的值。

    }
  }]);

  return Child;
}(_wepy2.default.component);

exports.default = Child;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoaWxkLmpzIl0sIm5hbWVzIjpbIkNoaWxkIiwicHJvcHMiLCJ0aXRsZSIsIlN0cmluZyIsInN5bmNUaXRsZSIsInR5cGUiLCJkZWZhdWx0IiwidHdvV2F5VGl0bGUiLCJ0d29XYXkiLCJjaGFuZ2VOdW0iLCJOdW1iZXIiLCJkYXRhIiwid2F0Y2giLCJuZXdWYWx1ZSIsIm9sZFZhbHVlIiwiY29uc29sZSIsImxvZyIsIm1ldGhvZHMiLCJ0YXAiLCJpbmRleCIsIiRlbWl0IiwiJGFwcGx5IiwiY2hhbmdlVGl0bGUiLCJpbnZva2VUZXN0Iiwid2VweSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxLLEdBQVE7O0FBRUo7QUFDRkMsYUFBT0MsTUFIRDs7QUFLTDtBQUNEQyxpQkFBVztBQUNUQyxjQUFNRixNQURHLEVBQ0k7QUFDYkcsaUJBQVM7QUFGQSxPQU5MO0FBVU47QUFDQUMsbUJBQWE7QUFDWEYsY0FBTUYsTUFESztBQUVYRyxpQkFBUyxTQUZFO0FBR1hFLGdCQUFRO0FBSEcsT0FYUDtBQWdCTkMsaUJBQVU7QUFDUkosY0FBTUssTUFERTtBQUVSSixpQkFBUyxDQUZEO0FBR1JFLGdCQUFRO0FBSEE7O0FBaEJKLEssUUF1QlJHLEksR0FBSztBQUNIO0FBREcsSyxRQUdMQyxLLEdBQU07QUFDSkgsZUFESSxxQkFDTUksUUFETixFQUNnQkMsUUFEaEIsRUFDeUI7QUFDM0JDLGdCQUFRQyxHQUFSLGlCQUEwQkYsUUFBMUIsWUFBeUNELFFBQXpDO0FBQ0Q7QUFIRyxLLFFBS05JLE8sR0FBUTtBQUNOQyxTQURNLGVBQ0ZDLEtBREUsRUFDSTtBQUNWO0FBQ0MsYUFBS0MsS0FBTCxDQUFXLFNBQVgsRUFBcUJELEtBQXJCO0FBQ0E7QUFDQTs7Ozs7QUFNQSxPQVhLO0FBWU5WLGVBWk0sdUJBWUs7QUFDVCxhQUFLQSxTQUFMO0FBQ0EsYUFBS1ksTUFBTDtBQUNELE9BZks7QUFnQk5DLGlCQWhCTSx5QkFnQk87QUFDWCxhQUFLZixXQUFMLEdBQW1CLGNBQW5CO0FBQ0EsYUFBS2MsTUFBTDtBQUNELE9BbkJLO0FBb0JORSxnQkFwQk0sd0JBb0JNO0FBQ1ZSLGdCQUFRQyxHQUFSLENBQVksb0JBQVo7QUFFRDtBQXZCSyxLOzs7Ozs2QkF5QkM7O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFRDs7OztFQXZFZ0NRLGVBQUtDLFM7O2tCQUFuQnpCLEsiLCJmaWxlIjoiY2hpbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hpbGQgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gIHByb3BzID0ge1xuICAgIFxuICAgICAgLy8g6Z2Z5oCB5Lyg5YC8XG4gICAgdGl0bGU6IFN0cmluZyxcblxuICAgICAvLyDniLblkJHlrZDljZXlkJHliqjmgIHkvKDlgLxcbiAgICBzeW5jVGl0bGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZywvL1N0cmluZyAgRnVuY3Rpb24gIEJvb2xlYW5cbiAgICAgIGRlZmF1bHQ6IG51bGxcbiAgICB9LFxuICAgIC8vIOWPjOWQkee7keWumiBcbiAgICB0d29XYXlUaXRsZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ25vdGhpbmcnLFxuICAgICAgdHdvV2F5OiB0cnVlXG4gICAgfSxcbiAgICBjaGFuZ2VOdW06e1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgZGVmYXVsdDogMCxcbiAgICAgIHR3b1dheTogdHJ1ZVxuICAgIH0sXG5cbiAgfTtcbiAgZGF0YT17XG4gICAgLy8gbnVtOjEgXG4gIH1cbiAgd2F0Y2g9e1xuICAgIGNoYW5nZU51bShuZXdWYWx1ZSwgb2xkVmFsdWUpe1xuICAgICAgY29uc29sZS5sb2coYG51bSB2YWx1ZTogJHtvbGRWYWx1ZX0gLT4gJHtuZXdWYWx1ZX1gKVxuICAgIH1cbiAgfVxuICBtZXRob2RzPXtcbiAgICB0YXAoaW5kZXgpe1xuICAgIC8vICBjb25zb2xlLmxvZygnY2hpbGQgaXMgY2xpY2tlZCcpXG4gICAgIHRoaXMuJGVtaXQoJ2NoaWxkRm4nLGluZGV4KTtcbiAgICAgLy9cbiAgICAgLyoqIFxuICAgICAgKiBjaGlsZEZuIOWvueW6lDxjaGlsZCB2LW9uOmNoaWxkRm49J3BhcmVudEZuJz48L2NoaWxkPlxuICAgICAgKiAgcGFyZW50Rm7niLbnuqfnu4Tku7bkuK3lr7nlupToh6rlrprkuYnnmoTlh73mlbAgXG4gICAgICAqIHBhcmVudEZuKG51bSxldnQpeyBjb25zb2xlLmxvZygncGFyZW50IHJlY2VpdmVkIGVtaXQgZXZlbnQsIG51bWJlciBpczogJyArIG51bSkgfVxuICAgICAqL1xuICAgICAgICAgXG4gICAgfSxcbiAgICBjaGFuZ2VOdW0oKXtcbiAgICAgIHRoaXMuY2hhbmdlTnVtKys7XG4gICAgICB0aGlzLiRhcHBseSgpO1xuICAgIH0sXG4gICAgY2hhbmdlVGl0bGUoKXtcbiAgICAgIHRoaXMudHdvV2F5VGl0bGUgPSAnY2hhbmdlIHRpdGxlJztcbiAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgfSxcbiAgICBpbnZva2VUZXN0KCl7XG4gICAgICBjb25zb2xlLmxvZygnSSBhbSB0aGlzLiRpbnZva2UgJyk7XG4gICAgICBcbiAgICB9XG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIFxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMudGl0bGUpOyAvLyBteXRpdGxlXG4gICAgLy8gdGhpcy50aXRsZT0nYy10aXRsZSc7XG4gICAgLy8gdGhpcy50d29XYXlUaXRsZSA9ICd0d28td2F5LXRpdGxlJztcbiAgICAvLyB0aGlzLiRhcHBseSgpO1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuJHBhcmVudC5wYXJlbnRUaXRsZSk7XG4gICAgLy8gIC8vIHR3by13YXktdGl0bGUuICAtLS0gdHdvV2F55Li6dHJ1ZeaXtu+8jOWtkOe7hOS7tnByb3Bz5Lit55qE5bGe5oCn5YC85pS55Y+Y5pe277yM5Lya5ZCM5pe25pS55Y+Y54i257uE5Lu25a+55bqU55qE5YC8XG4gICAgLy8gdGhpcy4kcGFyZW50LnBhcmVudFRpdGxlID0gJ3AtdGl0bGUtY2hhbmdlZCdcbiAgICAvLyB0aGlzLiRwYXJlbnQuJGFwcGx5KCk7XG4gICAgLy8gIGNvbnNvbGUubG9nKHRoaXMudGl0bGUpOyAvLyAnYy10aXRsZSc7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5zeW5jVGl0bGUpOyBcbiAgICAvLyAncC10aXRsZS1jaGFuZ2VkJyAtLS0g5pyJLnN5bmPkv67ppbDnrKbnmoRwcm9wc+WxnuaAp+WAvO+8jOW9k+WcqOeItue7hOS7tuS4reaUueWPmOaXtu+8jOS8muWQjOaXtuaUueWPmOWtkOe7hOS7tuWvueW6lOeahOWAvOOAglxuXG4gIH1cbn1cbiJdfQ==