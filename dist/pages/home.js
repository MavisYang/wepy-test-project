'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _child = require('./../components/child.js');

var _child2 = _interopRequireDefault(_child);

var _item = require('./../components/item.js');

var _item2 = _interopRequireDefault(_item);

var _wxRequest = require('./../utils/wxRequest.js');

var _wxRequest2 = _interopRequireDefault(_wxRequest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_wepy$page) {
  _inherits(Home, _wepy$page);

  function Home() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Home);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Home.__proto__ || Object.getPrototypeOf(Home)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: 'my wepy',
      navigationBarBackgroundColor: "#FF6666",
      navigationBarTextStyle: "white"
    }, _this.$repeat = { "groupList": { "com": "Item", "props": "item.sync" } }, _this.$props = { "Item": { "xmlns:v-bind": { "value": "", "for": "groupList", "item": "item", "index": "index", "key": "index" }, "v-bind:item.sync": { "value": "item", "type": "item", "for": "groupList", "item": "item", "index": "index", "key": "index" }, "v-bind:checkIndex.once": { "value": "checkIndex", "for": "groupList", "item": "item", "index": "index", "key": "index" }, "xmlns:v-on": { "value": "", "for": "groupList", "item": "item", "index": "index", "key": "index" } } }, _this.$events = { "Item": { "v-on:childHandle": "handleCheck" } }, _this.components = {
      child: _child2.default,
      Item: _item2.default
    }, _this.data = {
      index: 0,
      title: 'my item.title',
      checkIndex: -1,
      groupList: []
    }, _this.methods = {
      tapName: function tapName(id, title, other, event) {
        console.log(id, title, other);
        console.log('event', event);
      },
      handleCheck: function handleCheck(index) {
        // 赋值，修改data中的数据
        this.checkIndex = index;
        this.groupList = this.groupList.map(function (item, id) {
          return index == id ? Object.assign({}, _extends({}, item, { isExpand: false }), {}) : Object.assign({}, _extends({}, item, { isExpand: !item.isExpand }), {});
        });
        // console.log(this.groupList, 'new list');
      }
    }, _this.events = {
      // 'index-emit':(index)=>{
      //   console.log(index,'');
      // }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Home, [{
    key: 'onLoad',
    value: function onLoad(options) {
      var _this2 = this;

      console.log(options, 'options');

      var url = 'http://ons.me/tools/dropload/json.php?page=0&size=5';
      _wxRequest2.default.fetch(url, null, null, 'GET').then(function (res) {
        _this2.groupList = res.data.map(function (item) {
          return _extends({}, item, { isExpand: false });
        });

        _this2.$apply();
        console.log(_this2.groupList, 'res---');
      });
      this.$broadcast('handleCheck'); //由父组件发起，所有子组件都会收到此广播事件
    }
  }]);

  return Home;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Home , 'pages/home'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuanMiXSwibmFtZXMiOlsiSG9tZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRleHRTdHlsZSIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImNoaWxkIiwiQ2hpbGQiLCJJdGVtIiwiZGF0YSIsImluZGV4IiwidGl0bGUiLCJjaGVja0luZGV4IiwiZ3JvdXBMaXN0IiwibWV0aG9kcyIsInRhcE5hbWUiLCJpZCIsIm90aGVyIiwiZXZlbnQiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQ2hlY2siLCJtYXAiLCJpdGVtIiwiT2JqZWN0IiwiYXNzaWduIiwiaXNFeHBhbmQiLCJldmVudHMiLCJvcHRpb25zIiwidXJsIiwid3hSZXF1ZXN0IiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwiJGFwcGx5IiwiJGJyb2FkY2FzdCIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEk7Ozs7Ozs7Ozs7Ozs7O2tMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QixTQURqQjtBQUVQQyxvQ0FBOEIsU0FGdkI7QUFHUEMsOEJBQXdCO0FBSGpCLEssUUFLVkMsTyxHQUFVLEVBQUMsYUFBWSxFQUFDLE9BQU0sTUFBUCxFQUFjLFNBQVEsV0FBdEIsRUFBYixFLFFBQ1hDLE0sR0FBUyxFQUFDLFFBQU8sRUFBQyxnQkFBZSxFQUFDLFNBQVEsRUFBVCxFQUFZLE9BQU0sV0FBbEIsRUFBOEIsUUFBTyxNQUFyQyxFQUE0QyxTQUFRLE9BQXBELEVBQTRELE9BQU0sT0FBbEUsRUFBaEIsRUFBMkYsb0JBQW1CLEVBQUMsU0FBUSxNQUFULEVBQWdCLFFBQU8sTUFBdkIsRUFBOEIsT0FBTSxXQUFwQyxFQUFnRCxRQUFPLE1BQXZELEVBQThELFNBQVEsT0FBdEUsRUFBOEUsT0FBTSxPQUFwRixFQUE5RyxFQUEyTSwwQkFBeUIsRUFBQyxTQUFRLFlBQVQsRUFBc0IsT0FBTSxXQUE1QixFQUF3QyxRQUFPLE1BQS9DLEVBQXNELFNBQVEsT0FBOUQsRUFBc0UsT0FBTSxPQUE1RSxFQUFwTyxFQUF5VCxjQUFhLEVBQUMsU0FBUSxFQUFULEVBQVksT0FBTSxXQUFsQixFQUE4QixRQUFPLE1BQXJDLEVBQTRDLFNBQVEsT0FBcEQsRUFBNEQsT0FBTSxPQUFsRSxFQUF0VSxFQUFSLEUsUUFDVEMsTyxHQUFVLEVBQUMsUUFBTyxFQUFDLG9CQUFtQixhQUFwQixFQUFSLEUsUUFDVEMsVSxHQUFhO0FBQ1ZDLGFBQU9DLGVBREc7QUFFVkMsWUFBTUE7QUFGSSxLLFFBSVpDLEksR0FBTztBQUNMQyxhQUFPLENBREY7QUFFTEMsYUFBTyxlQUZGO0FBR0xDLGtCQUFZLENBQUMsQ0FIUjtBQUlMQyxpQkFBVztBQUpOLEssUUFzQlBDLE8sR0FBVTtBQUNSQyxhQURRLG1CQUNBQyxFQURBLEVBQ0lMLEtBREosRUFDV00sS0FEWCxFQUNrQkMsS0FEbEIsRUFDeUI7QUFDL0JDLGdCQUFRQyxHQUFSLENBQVlKLEVBQVosRUFBZ0JMLEtBQWhCLEVBQXVCTSxLQUF2QjtBQUNBRSxnQkFBUUMsR0FBUixDQUFZLE9BQVosRUFBcUJGLEtBQXJCO0FBQ0QsT0FKTztBQUtSRyxpQkFMUSx1QkFLSVgsS0FMSixFQUtXO0FBQ2pCO0FBQ0EsYUFBS0UsVUFBTCxHQUFrQkYsS0FBbEI7QUFDQSxhQUFLRyxTQUFMLEdBQWlCLEtBQUtBLFNBQUwsQ0FBZVMsR0FBZixDQUFtQixVQUFDQyxJQUFELEVBQU9QLEVBQVAsRUFBYztBQUNoRCxpQkFBT04sU0FBU00sRUFBVCxHQUNIUSxPQUFPQyxNQUFQLENBQWMsRUFBZCxlQUFzQkYsSUFBdEIsSUFBNEJHLFVBQVUsS0FBdEMsS0FBOEMsRUFBOUMsQ0FERyxHQUVIRixPQUFPQyxNQUFQLENBQWMsRUFBZCxlQUFzQkYsSUFBdEIsSUFBNEJHLFVBQVUsQ0FBQ0gsS0FBS0csUUFBNUMsS0FBdUQsRUFBdkQsQ0FGSjtBQUdELFNBSmdCLENBQWpCO0FBS0E7QUFDRDtBQWRPLEssUUFpQlZDLE0sR0FBUztBQUNQO0FBQ0E7QUFDQTtBQUhPLEs7Ozs7OzJCQWhDRkMsTyxFQUFTO0FBQUE7O0FBQ2RULGNBQVFDLEdBQVIsQ0FBWVEsT0FBWixFQUFvQixTQUFwQjs7QUFFQSxVQUFJQyxNQUFNLHFEQUFWO0FBQ0FDLDBCQUFVQyxLQUFWLENBQWdCRixHQUFoQixFQUFxQixJQUFyQixFQUEyQixJQUEzQixFQUFpQyxLQUFqQyxFQUF3Q0csSUFBeEMsQ0FBNkMsZUFBTztBQUNsRCxlQUFLbkIsU0FBTCxHQUFpQm9CLElBQUl4QixJQUFKLENBQVNhLEdBQVQsQ0FBYSxnQkFBUTtBQUNwQyw4QkFBWUMsSUFBWixJQUFrQkcsVUFBVSxLQUE1QjtBQUNELFNBRmdCLENBQWpCOztBQUlBLGVBQUtRLE1BQUw7QUFDQWYsZ0JBQVFDLEdBQVIsQ0FBWSxPQUFLUCxTQUFqQixFQUE0QixRQUE1QjtBQUNELE9BUEQ7QUFRQSxXQUFLc0IsVUFBTCxDQUFnQixhQUFoQixFQVpjLENBWWtCO0FBQ2pDOzs7O0VBakMrQkMsZUFBS0MsSTs7a0JBQWxCeEMsSSIsImZpbGUiOiJob21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbmltcG9ydCBDaGlsZCBmcm9tICcuLi9jb21wb25lbnRzL2NoaWxkJztcbmltcG9ydCBJdGVtIGZyb20gJy4uL2NvbXBvbmVudHMvaXRlbSc7XG5pbXBvcnQgd3hSZXF1ZXN0IGZyb20gJy4uL3V0aWxzL3d4UmVxdWVzdC5qcyc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICdteSB3ZXB5JyxcbiAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiBcIiNGRjY2NjZcIixcbiAgICBuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlOiBcIndoaXRlXCJcbiAgfTtcbiAkcmVwZWF0ID0ge1wiZ3JvdXBMaXN0XCI6e1wiY29tXCI6XCJJdGVtXCIsXCJwcm9wc1wiOlwiaXRlbS5zeW5jXCJ9fTtcclxuJHByb3BzID0ge1wiSXRlbVwiOntcInhtbG5zOnYtYmluZFwiOntcInZhbHVlXCI6XCJcIixcImZvclwiOlwiZ3JvdXBMaXN0XCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwiaW5kZXhcIn0sXCJ2LWJpbmQ6aXRlbS5zeW5jXCI6e1widmFsdWVcIjpcIml0ZW1cIixcInR5cGVcIjpcIml0ZW1cIixcImZvclwiOlwiZ3JvdXBMaXN0XCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwiaW5kZXhcIn0sXCJ2LWJpbmQ6Y2hlY2tJbmRleC5vbmNlXCI6e1widmFsdWVcIjpcImNoZWNrSW5kZXhcIixcImZvclwiOlwiZ3JvdXBMaXN0XCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwiaW5kZXhcIn0sXCJ4bWxuczp2LW9uXCI6e1widmFsdWVcIjpcIlwiLFwiZm9yXCI6XCJncm91cExpc3RcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJpbmRleFwifX19O1xyXG4kZXZlbnRzID0ge1wiSXRlbVwiOntcInYtb246Y2hpbGRIYW5kbGVcIjpcImhhbmRsZUNoZWNrXCJ9fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgY2hpbGQ6IENoaWxkLFxuICAgIEl0ZW06IEl0ZW0sXG4gIH07XG4gIGRhdGEgPSB7XG4gICAgaW5kZXg6IDAsXG4gICAgdGl0bGU6ICdteSBpdGVtLnRpdGxlJyxcbiAgICBjaGVja0luZGV4OiAtMSxcbiAgICBncm91cExpc3Q6IFtdXG4gIH07XG5cbiAgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICBjb25zb2xlLmxvZyhvcHRpb25zLCdvcHRpb25zJyk7XG4gICAgXG4gICAgbGV0IHVybCA9ICdodHRwOi8vb25zLm1lL3Rvb2xzL2Ryb3Bsb2FkL2pzb24ucGhwP3BhZ2U9MCZzaXplPTUnO1xuICAgIHd4UmVxdWVzdC5mZXRjaCh1cmwsIG51bGwsIG51bGwsICdHRVQnKS50aGVuKHJlcyA9PiB7XG4gICAgICB0aGlzLmdyb3VwTGlzdCA9IHJlcy5kYXRhLm1hcChpdGVtID0+IHtcbiAgICAgICAgcmV0dXJuIHsgLi4uaXRlbSwgaXNFeHBhbmQ6IGZhbHNlIH07XG4gICAgICB9KTtcblxuICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuZ3JvdXBMaXN0LCAncmVzLS0tJyk7XG4gICAgfSk7XG4gICAgdGhpcy4kYnJvYWRjYXN0KCdoYW5kbGVDaGVjaycpOyAvL+eUseeItue7hOS7tuWPkei1t++8jOaJgOacieWtkOe7hOS7tumDveS8muaUtuWIsOatpOW5v+aSreS6i+S7tlxuICB9XG5cbiAgbWV0aG9kcyA9IHtcbiAgICB0YXBOYW1lKGlkLCB0aXRsZSwgb3RoZXIsIGV2ZW50KSB7XG4gICAgICBjb25zb2xlLmxvZyhpZCwgdGl0bGUsIG90aGVyKTtcbiAgICAgIGNvbnNvbGUubG9nKCdldmVudCcsIGV2ZW50KTtcbiAgICB9LFxuICAgIGhhbmRsZUNoZWNrKGluZGV4KSB7XG4gICAgICAvLyDotYvlgLzvvIzkv67mlLlkYXRh5Lit55qE5pWw5o2uXG4gICAgICB0aGlzLmNoZWNrSW5kZXggPSBpbmRleDtcbiAgICAgIHRoaXMuZ3JvdXBMaXN0ID0gdGhpcy5ncm91cExpc3QubWFwKChpdGVtLCBpZCkgPT4ge1xuICAgICAgICByZXR1cm4gaW5kZXggPT0gaWRcbiAgICAgICAgICA/IE9iamVjdC5hc3NpZ24oe30seyAuLi5pdGVtLCBpc0V4cGFuZDogZmFsc2UgfSx7fSlcbiAgICAgICAgICA6IE9iamVjdC5hc3NpZ24oe30seyAuLi5pdGVtLCBpc0V4cGFuZDogIWl0ZW0uaXNFeHBhbmQgfSx7fSlcbiAgICAgIH0pO1xuICAgICAgLy8gY29uc29sZS5sb2codGhpcy5ncm91cExpc3QsICduZXcgbGlzdCcpO1xuICAgIH1cbiAgfTtcblxuICBldmVudHMgPSB7XG4gICAgLy8gJ2luZGV4LWVtaXQnOihpbmRleCk9PntcbiAgICAvLyAgIGNvbnNvbGUubG9nKGluZGV4LCcnKTtcbiAgICAvLyB9XG4gIH07XG59XG4iXX0=