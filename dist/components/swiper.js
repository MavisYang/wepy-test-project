"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _utils = require('./../utils/utils.js');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Swiper = function (_wepy$component) {
  _inherits(Swiper, _wepy$component);

  function Swiper() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Swiper);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Swiper.__proto__ || Object.getPrototypeOf(Swiper)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      swiperArray: {
        type: Array,
        default: [],
        twoWay: true
      },
      swiperParmas: {
        type: Object,
        default: {},
        twoWay: true
        /**
        swiperParmas:{
        // 为swiper参数，不用可不传
        "vertical":false,//滑动方向是否为纵向
        'autoplay':true,//是否自动切换
        "indicator-dots":true ,//是否显示面板指示点
        "indicator-color":'#fff' ,//指示点颜色
        "indicator-active-color":'#FF6666',//当前选中的指示点颜色
        "circular":false, //是否采用衔接滑动
        "interval":5000,//自动切换时间间隔
        "duration":500,//滑动动画时长
        "previous-margin":'20px' ,//前边距，
        "next-margin":'20px',//后边距 与circular一起用效果更好
        "display-multiple-items":1,//同时显示的滑块数量
        } 
        */
      } }, _this.data = {
      // imgUrls: []
    }, _this.methods = {
      tapSwiper: function tapSwiper(id, pic, index, options) {
        console.log(1111, id, pic, index, options);
        this.$emit('handleSwiper', id, pic, index, options);
        /**
         * id:11111
         * pic:"http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg"
         *  options:_class {active: true, name: "system", source: e, type: "tap", timeStamp: 4463, …}
         */
        /**
         * 传参数
         * id==options.currentTarget.detaset.wpyhandleswiperA
         * pic==options.currentTarget.detaset.wpyhandleswiperB
         */
        //   utils.pageGo("/pages/home?type=" + id, 1);
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Swiper, [{
    key: "onLoad",
    value: function onLoad() {

      console.log(this.swiperParmas, 'swiperParmas');
      console.log(this.swiperParmas['indicator-dots'], 'swiperParmas');
    }
  }, {
    key: "customFunc",

    // 自定义方法
    value: function customFunc() {}
  }]);

  return Swiper;
}(_wepy2.default.component);

exports.default = Swiper;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN3aXBlci5qcyJdLCJuYW1lcyI6WyJTd2lwZXIiLCJwcm9wcyIsInN3aXBlckFycmF5IiwidHlwZSIsIkFycmF5IiwiZGVmYXVsdCIsInR3b1dheSIsInN3aXBlclBhcm1hcyIsIk9iamVjdCIsImRhdGEiLCJtZXRob2RzIiwidGFwU3dpcGVyIiwiaWQiLCJwaWMiLCJpbmRleCIsIm9wdGlvbnMiLCJjb25zb2xlIiwibG9nIiwiJGVtaXQiLCJldmVudHMiLCJ3ZXB5IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLE07Ozs7Ozs7Ozs7Ozs7O3NMQUNuQkMsSyxHQUFRO0FBQ0pDLG1CQUFZO0FBQ1ZDLGNBQUtDLEtBREs7QUFFVkMsaUJBQVMsRUFGQztBQUdWQyxnQkFBUTtBQUhFLE9BRFI7QUFNSkMsb0JBQWE7QUFDWEosY0FBS0ssTUFETTtBQUVYSCxpQkFBUyxFQUZFO0FBR1hDLGdCQUFRO0FBRVY7Ozs7Ozs7Ozs7Ozs7Ozs7QUFMYSxPQU5ULEUsUUE0QlJHLEksR0FBTztBQUNMO0FBREssSyxRQVFQQyxPLEdBQVU7QUFDUkMsZUFEUSxxQkFDRUMsRUFERixFQUNNQyxHQUROLEVBQ1VDLEtBRFYsRUFDaUJDLE9BRGpCLEVBQzBCO0FBQzlCQyxnQkFBUUMsR0FBUixDQUFZLElBQVosRUFBaUJMLEVBQWpCLEVBQXFCQyxHQUFyQixFQUF5QkMsS0FBekIsRUFBZ0NDLE9BQWhDO0FBQ0EsYUFBS0csS0FBTCxDQUFXLGNBQVgsRUFBMkJOLEVBQTNCLEVBQStCQyxHQUEvQixFQUFtQ0MsS0FBbkMsRUFBeUNDLE9BQXpDO0FBQ0Y7Ozs7O0FBS0E7Ozs7O0FBS0Y7QUFDQztBQWZPLEssUUFpQlZJLE0sR0FBUyxFOzs7Ozs2QkF0QkE7O0FBRUxILGNBQVFDLEdBQVIsQ0FBWSxLQUFLVixZQUFqQixFQUE4QixjQUE5QjtBQUNBUyxjQUFRQyxHQUFSLENBQVksS0FBS1YsWUFBTCxDQUFrQixnQkFBbEIsQ0FBWixFQUFnRCxjQUFoRDtBQUNIOzs7O0FBbUJEO2lDQUNhLENBQUU7Ozs7RUF4RG1CYSxlQUFLQyxTOztrQkFBcEJyQixNIiwiZmlsZSI6InN3aXBlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSBcIndlcHlcIjtcbmltcG9ydCB1dGlscyBmcm9tIFwiLi4vdXRpbHMvdXRpbHMuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN3aXBlciBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgcHJvcHMgPSB7XG4gICAgICBzd2lwZXJBcnJheTp7XG4gICAgICAgIHR5cGU6QXJyYXksXG4gICAgICAgIGRlZmF1bHQ6IFtdLFxuICAgICAgICB0d29XYXk6IHRydWVcbiAgICAgIH0sXG4gICAgICBzd2lwZXJQYXJtYXM6e1xuICAgICAgICB0eXBlOk9iamVjdCxcbiAgICAgICAgZGVmYXVsdDoge30sXG4gICAgICAgIHR3b1dheTogdHJ1ZSBcbiAgICAgIH1cbiAgICAgIC8qKlxuICAgICAgc3dpcGVyUGFybWFzOntcbiAgICAgIC8vIOS4unN3aXBlcuWPguaVsO+8jOS4jeeUqOWPr+S4jeS8oFxuICAgICAgXCJ2ZXJ0aWNhbFwiOmZhbHNlLC8v5ruR5Yqo5pa55ZCR5piv5ZCm5Li657q15ZCRXG4gICAgICAnYXV0b3BsYXknOnRydWUsLy/mmK/lkKboh6rliqjliIfmjaJcbiAgICAgIFwiaW5kaWNhdG9yLWRvdHNcIjp0cnVlICwvL+aYr+WQpuaYvuekuumdouadv+aMh+ekuueCuVxuICAgICAgXCJpbmRpY2F0b3ItY29sb3JcIjonI2ZmZicgLC8v5oyH56S654K56aKc6ImyXG4gICAgICBcImluZGljYXRvci1hY3RpdmUtY29sb3JcIjonI0ZGNjY2NicsLy/lvZPliY3pgInkuK3nmoTmjIfnpLrngrnpopzoibJcbiAgICAgIFwiY2lyY3VsYXJcIjpmYWxzZSwgLy/mmK/lkKbph4fnlKjooZTmjqXmu5HliqhcbiAgICAgIFwiaW50ZXJ2YWxcIjo1MDAwLC8v6Ieq5Yqo5YiH5o2i5pe26Ze06Ze06ZqUXG4gICAgICBcImR1cmF0aW9uXCI6NTAwLC8v5ruR5Yqo5Yqo55S75pe26ZW/XG4gICAgICBcInByZXZpb3VzLW1hcmdpblwiOicyMHB4JyAsLy/liY3ovrnot53vvIxcbiAgICAgIFwibmV4dC1tYXJnaW5cIjonMjBweCcsLy/lkI7ovrnot50g5LiOY2lyY3VsYXLkuIDotbfnlKjmlYjmnpzmm7Tlpb1cbiAgICAgIFwiZGlzcGxheS1tdWx0aXBsZS1pdGVtc1wiOjEsLy/lkIzml7bmmL7npLrnmoTmu5HlnZfmlbDph49cbiAgICB9IFxuICAgICAgKi9cbiAgfTtcbiAgZGF0YSA9IHtcbiAgICAvLyBpbWdVcmxzOiBbXVxuICB9O1xuICBvbkxvYWQoKSB7XG4gICAgICBcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3dpcGVyUGFybWFzLCdzd2lwZXJQYXJtYXMnKTtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3dpcGVyUGFybWFzWydpbmRpY2F0b3ItZG90cyddLCdzd2lwZXJQYXJtYXMnKTtcbiAgfVxuICBtZXRob2RzID0ge1xuICAgIHRhcFN3aXBlcihpZCwgcGljLGluZGV4LCBvcHRpb25zKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKDExMTEsaWQsIHBpYyxpbmRleCwgb3B0aW9ucyk7XG4gICAgICAgIHRoaXMuJGVtaXQoJ2hhbmRsZVN3aXBlcicsIGlkLCBwaWMsaW5kZXgsb3B0aW9ucyk7XG4gICAgICAvKipcbiAgICAgICAqIGlkOjExMTExXG4gICAgICAgKiBwaWM6XCJodHRwOi8vaW1nMDIudG9vb3Blbi5jb20vaW1hZ2VzLzIwMTUwOTI4L3Rvb29wZW5fc3lfMTQzOTEyNzU1NzI2LmpwZ1wiXG4gICAgICAgKiAgb3B0aW9uczpfY2xhc3Mge2FjdGl2ZTogdHJ1ZSwgbmFtZTogXCJzeXN0ZW1cIiwgc291cmNlOiBlLCB0eXBlOiBcInRhcFwiLCB0aW1lU3RhbXA6IDQ0NjMswqDigKZ9XG4gICAgICAgKi9cbiAgICAgIC8qKlxuICAgICAgICog5Lyg5Y+C5pWwXG4gICAgICAgKiBpZD09b3B0aW9ucy5jdXJyZW50VGFyZ2V0LmRldGFzZXQud3B5aGFuZGxlc3dpcGVyQVxuICAgICAgICogcGljPT1vcHRpb25zLmN1cnJlbnRUYXJnZXQuZGV0YXNldC53cHloYW5kbGVzd2lwZXJCXG4gICAgICAgKi9cbiAgICAvLyAgIHV0aWxzLnBhZ2VHbyhcIi9wYWdlcy9ob21lP3R5cGU9XCIgKyBpZCwgMSk7XG4gICAgfVxuICB9O1xuICBldmVudHMgPSB7fTtcbiAgLy8g6Ieq5a6a5LmJ5pa55rOVXG4gIGN1c3RvbUZ1bmMoKSB7fVxufVxuIl19