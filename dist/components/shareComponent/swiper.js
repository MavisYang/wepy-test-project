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
        // console.log(1111,id, pic,index, options);
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

      // console.log(this.swiperParmas,'swiperParmas');
      // console.log(this.swiperParmas['indicator-dots'],'swiperParmas');
    }
  }, {
    key: "customFunc",

    // 自定义方法
    value: function customFunc() {}
  }]);

  return Swiper;
}(_wepy2.default.component);

exports.default = Swiper;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN3aXBlci5qcyJdLCJuYW1lcyI6WyJTd2lwZXIiLCJwcm9wcyIsInN3aXBlckFycmF5IiwidHlwZSIsIkFycmF5IiwiZGVmYXVsdCIsInR3b1dheSIsInN3aXBlclBhcm1hcyIsIk9iamVjdCIsImRhdGEiLCJtZXRob2RzIiwidGFwU3dpcGVyIiwiaWQiLCJwaWMiLCJpbmRleCIsIm9wdGlvbnMiLCIkZW1pdCIsImV2ZW50cyIsIndlcHkiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsTTs7Ozs7Ozs7Ozs7Ozs7c0xBQ25CQyxLLEdBQVE7QUFDSkMsbUJBQVk7QUFDVkMsY0FBS0MsS0FESztBQUVWQyxpQkFBUyxFQUZDO0FBR1ZDLGdCQUFRO0FBSEUsT0FEUjtBQU1KQyxvQkFBYTtBQUNYSixjQUFLSyxNQURNO0FBRVhILGlCQUFTLEVBRkU7QUFHWEMsZ0JBQVE7QUFFVjs7Ozs7Ozs7Ozs7Ozs7OztBQUxhLE9BTlQsRSxRQTRCUkcsSSxHQUFPO0FBQ0w7QUFESyxLLFFBUVBDLE8sR0FBVTtBQUNSQyxlQURRLHFCQUNFQyxFQURGLEVBQ01DLEdBRE4sRUFDVUMsS0FEVixFQUNpQkMsT0FEakIsRUFDMEI7QUFDOUI7QUFDQSxhQUFLQyxLQUFMLENBQVcsY0FBWCxFQUEyQkosRUFBM0IsRUFBK0JDLEdBQS9CLEVBQW1DQyxLQUFuQyxFQUF5Q0MsT0FBekM7QUFDRjs7Ozs7QUFLQTs7Ozs7QUFLRjtBQUNDO0FBZk8sSyxRQWlCVkUsTSxHQUFTLEU7Ozs7OzZCQXRCQTs7QUFFTDtBQUNBO0FBQ0g7Ozs7QUFtQkQ7aUNBQ2EsQ0FBRTs7OztFQXhEbUJDLGVBQUtDLFM7O2tCQUFwQm5CLE0iLCJmaWxlIjoic3dpcGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tIFwid2VweVwiO1xuaW1wb3J0IHV0aWxzIGZyb20gXCIuLi8uLi91dGlscy91dGlscy5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3dpcGVyIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICBwcm9wcyA9IHtcbiAgICAgIHN3aXBlckFycmF5OntcbiAgICAgICAgdHlwZTpBcnJheSxcbiAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgIHR3b1dheTogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHN3aXBlclBhcm1hczp7XG4gICAgICAgIHR5cGU6T2JqZWN0LFxuICAgICAgICBkZWZhdWx0OiB7fSxcbiAgICAgICAgdHdvV2F5OiB0cnVlIFxuICAgICAgfVxuICAgICAgLyoqXG4gICAgICBzd2lwZXJQYXJtYXM6e1xuICAgICAgLy8g5Li6c3dpcGVy5Y+C5pWw77yM5LiN55So5Y+v5LiN5LygXG4gICAgICBcInZlcnRpY2FsXCI6ZmFsc2UsLy/mu5HliqjmlrnlkJHmmK/lkKbkuLrnurXlkJFcbiAgICAgICdhdXRvcGxheSc6dHJ1ZSwvL+aYr+WQpuiHquWKqOWIh+aNolxuICAgICAgXCJpbmRpY2F0b3ItZG90c1wiOnRydWUgLC8v5piv5ZCm5pi+56S66Z2i5p2/5oyH56S654K5XG4gICAgICBcImluZGljYXRvci1jb2xvclwiOicjZmZmJyAsLy/mjIfnpLrngrnpopzoibJcbiAgICAgIFwiaW5kaWNhdG9yLWFjdGl2ZS1jb2xvclwiOicjRkY2NjY2JywvL+W9k+WJjemAieS4reeahOaMh+ekuueCueminOiJslxuICAgICAgXCJjaXJjdWxhclwiOmZhbHNlLCAvL+aYr+WQpumHh+eUqOihlOaOpea7keWKqFxuICAgICAgXCJpbnRlcnZhbFwiOjUwMDAsLy/oh6rliqjliIfmjaLml7bpl7Tpl7TpmpRcbiAgICAgIFwiZHVyYXRpb25cIjo1MDAsLy/mu5HliqjliqjnlLvml7bplb9cbiAgICAgIFwicHJldmlvdXMtbWFyZ2luXCI6JzIwcHgnICwvL+WJjei+uei3ne+8jFxuICAgICAgXCJuZXh0LW1hcmdpblwiOicyMHB4JywvL+WQjui+uei3nSDkuI5jaXJjdWxhcuS4gOi1t+eUqOaViOaenOabtOWlvVxuICAgICAgXCJkaXNwbGF5LW11bHRpcGxlLWl0ZW1zXCI6MSwvL+WQjOaXtuaYvuekuueahOa7keWdl+aVsOmHj1xuICAgIH0gXG4gICAgICAqL1xuICB9O1xuICBkYXRhID0ge1xuICAgIC8vIGltZ1VybHM6IFtdXG4gIH07XG4gIG9uTG9hZCgpIHtcbiAgICAgIFxuICAgICAgLy8gY29uc29sZS5sb2codGhpcy5zd2lwZXJQYXJtYXMsJ3N3aXBlclBhcm1hcycpO1xuICAgICAgLy8gY29uc29sZS5sb2codGhpcy5zd2lwZXJQYXJtYXNbJ2luZGljYXRvci1kb3RzJ10sJ3N3aXBlclBhcm1hcycpO1xuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgdGFwU3dpcGVyKGlkLCBwaWMsaW5kZXgsIG9wdGlvbnMpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coMTExMSxpZCwgcGljLGluZGV4LCBvcHRpb25zKTtcbiAgICAgICAgdGhpcy4kZW1pdCgnaGFuZGxlU3dpcGVyJywgaWQsIHBpYyxpbmRleCxvcHRpb25zKTtcbiAgICAgIC8qKlxuICAgICAgICogaWQ6MTExMTFcbiAgICAgICAqIHBpYzpcImh0dHA6Ly9pbWcwMi50b29vcGVuLmNvbS9pbWFnZXMvMjAxNTA5MjgvdG9vb3Blbl9zeV8xNDM5MTI3NTU3MjYuanBnXCJcbiAgICAgICAqICBvcHRpb25zOl9jbGFzcyB7YWN0aXZlOiB0cnVlLCBuYW1lOiBcInN5c3RlbVwiLCBzb3VyY2U6IGUsIHR5cGU6IFwidGFwXCIsIHRpbWVTdGFtcDogNDQ2MyzCoOKApn1cbiAgICAgICAqL1xuICAgICAgLyoqXG4gICAgICAgKiDkvKDlj4LmlbBcbiAgICAgICAqIGlkPT1vcHRpb25zLmN1cnJlbnRUYXJnZXQuZGV0YXNldC53cHloYW5kbGVzd2lwZXJBXG4gICAgICAgKiBwaWM9PW9wdGlvbnMuY3VycmVudFRhcmdldC5kZXRhc2V0LndweWhhbmRsZXN3aXBlckJcbiAgICAgICAqL1xuICAgIC8vICAgdXRpbHMucGFnZUdvKFwiL3BhZ2VzL2hvbWU/dHlwZT1cIiArIGlkLCAxKTtcbiAgICB9XG4gIH07XG4gIGV2ZW50cyA9IHt9O1xuICAvLyDoh6rlrprkuYnmlrnms5VcbiAgY3VzdG9tRnVuYygpIHt9XG59XG4iXX0=