'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _groupitem = require('./groupitem.js');

var _groupitem2 = _interopRequireDefault(_groupitem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Group = function (_wepy$component) {
  _inherits(Group, _wepy$component);

  function Group() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Group);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Group.__proto__ || Object.getPrototypeOf(Group)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      groupItem: {},
      indexa: {}
    }, _this.$repeat = { "groupItem": { "com": "GroupItem", "props": "gitem" } }, _this.$props = { "GroupItem": { "xmlns:v-bind": { "value": "", "for": "groupItem.list", "item": "item", "index": "index", "key": "key" }, "v-bind:gitem.once": { "value": "item", "type": "item", "for": "groupItem.list", "item": "item", "index": "index", "key": "key" } } }, _this.$events = {}, _this.components = {
      GroupItem: _groupitem2.default
    }, _this.methods = {
      tap: function tap() {
        this.$emit('index-emit', this.groupItem.id, this.groupItem.name);
        this.groupItem.name = 'Parent Random(' + Math.random() + ')';

        // console.log(`Clicked Group ${this.$index}, ID is ${this.groupItem.id}`)
      }
    }, _this.events = {
      // 'index-broadcast':(...args)=>{
      //   console.log(args,'broadcast');

      // }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Group, [{
    key: 'onLoad',
    value: function onLoad() {
      console.log(this.groupItem, 'this.groupItem');
    }
  }]);

  return Group;
}(_wepy2.default.component);

exports.default = Group;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyb3VwLmpzIl0sIm5hbWVzIjpbIkdyb3VwIiwicHJvcHMiLCJncm91cEl0ZW0iLCJpbmRleGEiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJHcm91cEl0ZW0iLCJtZXRob2RzIiwidGFwIiwiJGVtaXQiLCJpZCIsIm5hbWUiLCJNYXRoIiwicmFuZG9tIiwiZXZlbnRzIiwiY29uc29sZSIsImxvZyIsIndlcHkiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxLLEdBQVE7QUFDTkMsaUJBQVcsRUFETDtBQUVOQyxjQUFRO0FBRkYsSyxRQVFUQyxPLEdBQVUsRUFBQyxhQUFZLEVBQUMsT0FBTSxXQUFQLEVBQW1CLFNBQVEsT0FBM0IsRUFBYixFLFFBQ2JDLE0sR0FBUyxFQUFDLGFBQVksRUFBQyxnQkFBZSxFQUFDLFNBQVEsRUFBVCxFQUFZLE9BQU0sZ0JBQWxCLEVBQW1DLFFBQU8sTUFBMUMsRUFBaUQsU0FBUSxPQUF6RCxFQUFpRSxPQUFNLEtBQXZFLEVBQWhCLEVBQThGLHFCQUFvQixFQUFDLFNBQVEsTUFBVCxFQUFnQixRQUFPLE1BQXZCLEVBQThCLE9BQU0sZ0JBQXBDLEVBQXFELFFBQU8sTUFBNUQsRUFBbUUsU0FBUSxPQUEzRSxFQUFtRixPQUFNLEtBQXpGLEVBQWxILEVBQWIsRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDUkMsaUJBQVdBO0FBREgsSyxRQUdWQyxPLEdBQVU7QUFDUkMsU0FEUSxpQkFDRDtBQUNMLGFBQUtDLEtBQUwsQ0FBVyxZQUFYLEVBQXlCLEtBQUtULFNBQUwsQ0FBZVUsRUFBeEMsRUFBMkMsS0FBS1YsU0FBTCxDQUFlVyxJQUExRDtBQUNBLGFBQUtYLFNBQUwsQ0FBZVcsSUFBZixzQkFBdUNDLEtBQUtDLE1BQUwsRUFBdkM7O0FBRUE7QUFDRDtBQU5PLEssUUFRVkMsTSxHQUFPO0FBQ0w7QUFDQTs7QUFFQTtBQUpLLEs7Ozs7OzZCQWxCRztBQUNQQyxjQUFRQyxHQUFSLENBQVksS0FBS2hCLFNBQWpCLEVBQTJCLGdCQUEzQjtBQUVEOzs7O0VBUitCaUIsZUFBS0MsUzs7a0JBQW5CcEIsSyIsImZpbGUiOiJncm91cC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgR3JvdXBJdGVtIGZyb20gJy4vZ3JvdXBpdGVtJ1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyb3VwIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICAgIHByb3BzID0ge1xuICAgICAgZ3JvdXBJdGVtOiB7fSxcbiAgICAgIGluZGV4YToge31cbiAgICB9XG4gICAgIG9uTG9hZCAoKXtcbiAgICAgICBjb25zb2xlLmxvZyh0aGlzLmdyb3VwSXRlbSwndGhpcy5ncm91cEl0ZW0nKTtcbiAgICAgICBcbiAgICAgfVxuICAgJHJlcGVhdCA9IHtcImdyb3VwSXRlbVwiOntcImNvbVwiOlwiR3JvdXBJdGVtXCIsXCJwcm9wc1wiOlwiZ2l0ZW1cIn19O1xyXG4kcHJvcHMgPSB7XCJHcm91cEl0ZW1cIjp7XCJ4bWxuczp2LWJpbmRcIjp7XCJ2YWx1ZVwiOlwiXCIsXCJmb3JcIjpcImdyb3VwSXRlbS5saXN0XCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwia2V5XCJ9LFwidi1iaW5kOmdpdGVtLm9uY2VcIjp7XCJ2YWx1ZVwiOlwiaXRlbVwiLFwidHlwZVwiOlwiaXRlbVwiLFwiZm9yXCI6XCJncm91cEl0ZW0ubGlzdFwiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImtleVwifX19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgR3JvdXBJdGVtOiBHcm91cEl0ZW1cbiAgICB9XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHRhcCAoKSB7XG4gICAgICAgIHRoaXMuJGVtaXQoJ2luZGV4LWVtaXQnLCB0aGlzLmdyb3VwSXRlbS5pZCx0aGlzLmdyb3VwSXRlbS5uYW1lKVxuICAgICAgICB0aGlzLmdyb3VwSXRlbS5uYW1lID0gYFBhcmVudCBSYW5kb20oJHtNYXRoLnJhbmRvbSgpfSlgXG4gICAgICAgIFxuICAgICAgICAvLyBjb25zb2xlLmxvZyhgQ2xpY2tlZCBHcm91cCAke3RoaXMuJGluZGV4fSwgSUQgaXMgJHt0aGlzLmdyb3VwSXRlbS5pZH1gKVxuICAgICAgfVxuICAgIH1cbiAgICBldmVudHM9e1xuICAgICAgLy8gJ2luZGV4LWJyb2FkY2FzdCc6KC4uLmFyZ3MpPT57XG4gICAgICAvLyAgIGNvbnNvbGUubG9nKGFyZ3MsJ2Jyb2FkY2FzdCcpO1xuICAgICAgICBcbiAgICAgIC8vIH1cbiAgICB9XG4gIH1cbiJdfQ==