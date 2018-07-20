'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _config = require('./../utils/config.js');

var _config2 = _interopRequireDefault(_config);

var _wxRequest = require('./../utils/wxRequest.js');

var _wxRequest2 = _interopRequireDefault(_wxRequest);

var _utils = require('./../utils/utils.js');

var _utils2 = _interopRequireDefault(_utils);

var _child = require('./../components/child.js');

var _child2 = _interopRequireDefault(_child);

var _item = require('./../components/item.js');

var _item2 = _interopRequireDefault(_item);

var _group = require('./../components/group.js');

var _group2 = _interopRequireDefault(_group);

var _promptBox = require('./../components/shareComponent/promptBox.js');

var _promptBox2 = _interopRequireDefault(_promptBox);

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
    }, _this.$repeat = { "groupList": { "com": "Item", "props": "groupItem.sync" }, "groupListData": { "com": "Group", "props": "groupItem.sync" } }, _this.$props = { "Item": { "v-bind:groupItem.sync": { "value": "item", "type": "item", "for": "groupList", "item": "item", "index": "index", "key": "index" }, "v-bind:checkIndex.once": { "value": "checkIndex", "for": "groupList", "item": "item", "index": "index", "key": "index" }, "xmlns:v-on": { "value": "", "for": "groupList", "item": "item", "index": "index", "key": "index" } }, "Group": { "v-bind:groupItem.sync": { "value": "item", "type": "item", "for": "groupListData", "item": "item", "index": "index", "key": "index" }, "v-bind:indexa.sync": { "value": "index", "type": "index", "for": "groupListData", "item": "item", "index": "index", "key": "index" } }, "Child": { "v-bind:changeNum.sync": "num", "v-bind:twoWayTitle.sync": "title" }, "PromptBox": { "xmlns:wx": "", "xmlns:v-bind": "", "v-bind:prompt.sync": "popErrorMsg" } }, _this.$events = { "Item": { "v-on:childHandle": "handleCheck" }, "Group": { "v-on:index-emit": "counterEmit" } }, _this.components = {
      Child: _child2.default,
      Item: _item2.default,
      Group: _group2.default,
      PromptBox: _promptBox2.default
    }, _this.data = {
      index: 0,
      title: 'my item.title',
      checkIndex: -1,
      groupList: [],
      popErrorMsg: null,
      num: 1,
      date: '2018-09-01',
      groupListData: [{
        id: 1,
        name: '点击改变',
        list: [{
          childid: '1.1',
          childname: '子项，点我改变'
        }, {
          childid: '1.2',
          childname: '子项，点我改变'
        }, {
          childid: '1.3',
          childname: '子项，点我改变'
        }]
      }, {
        id: 2,
        name: '点击改变',
        list: [{
          childid: '2.1',
          childname: '子项，点我改变'
        }, {
          childid: '2.2',
          childname: '子项，点我改变'
        }, {
          childid: '2.3',
          childname: '子项，点我改变'
        }]
      }, {
        id: 3,
        name: '点击改变',
        list: [{
          childid: '3.1',
          childname: '子项，点我改变'
        }]
      }]

    }, _this.computed = {
      now: function now() {
        return +new Date();
      }
    }, _this.watch = {
      // // 监听器函数名必须跟需要被监听的data对象中的属性num同名，
      // 其参数中的newValue为属性改变后的新值，oldValue为改变前的旧值
      num: function num(newValue, oldValue) {
        console.log('pather num value: ' + oldValue + ' -> ' + newValue);
      },
      title: function title(newValue, oldValue) {
        console.log('pather title value: ' + oldValue + ' -> ' + newValue);
      }
    }, _this.methods = {
      tapName: function tapName(id, title, other, event) {
        _utils2.default.ErrorTips(this, 'home show tips 2', 3000);
      },
      handleCheck: function handleCheck(index) {
        // 赋值，修改data中的数据
        this.checkIndex = index;
        this.groupList = this.groupList.map(function (item, id) {
          return index == id ? Object.assign({}, _extends({}, item, { isExpand: false }), {}) : Object.assign({}, _extends({}, item, { isExpand: !item.isExpand }), {});
        });
      },
      counterEmit: function counterEmit(index, name) {
        console.log(index, name, 'counterEmit-');
      },
      handleCopy: function handleCopy() {
        console.log(2);
        _utils2.default.copyText('12');
      },
      bindDateChange: function bindDateChange(e) {
        console.log('e', e);
        console.log('picker发送选择改变，携带值为', e.detail.value);
        this.date = e.detail.value;
      }
    }, _this.events = {
      // 'index-emit':(...args)=>{
      //   console.log(this.groupList,'this.groupList');

      //   console.log(args,'index-emit---');
      // }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }
  // computed 计算属性

  // watcher 监听器


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
      // this.$broadcast('counterEmit')
    }
  }, {
    key: 'showTips',
    value: function showTips() {
      _utils2.default.ErrorTips(this, 'home show tips', 3000);
    }
  }]);

  return Home;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Home , 'pages/home'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuanMiXSwibmFtZXMiOlsiSG9tZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRleHRTdHlsZSIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsIkNoaWxkIiwiSXRlbSIsIkdyb3VwIiwiUHJvbXB0Qm94IiwiZGF0YSIsImluZGV4IiwidGl0bGUiLCJjaGVja0luZGV4IiwiZ3JvdXBMaXN0IiwicG9wRXJyb3JNc2ciLCJudW0iLCJkYXRlIiwiZ3JvdXBMaXN0RGF0YSIsImlkIiwibmFtZSIsImxpc3QiLCJjaGlsZGlkIiwiY2hpbGRuYW1lIiwiY29tcHV0ZWQiLCJub3ciLCJEYXRlIiwid2F0Y2giLCJuZXdWYWx1ZSIsIm9sZFZhbHVlIiwiY29uc29sZSIsImxvZyIsIm1ldGhvZHMiLCJ0YXBOYW1lIiwib3RoZXIiLCJldmVudCIsIlV0aWxzIiwiRXJyb3JUaXBzIiwiaGFuZGxlQ2hlY2siLCJtYXAiLCJpdGVtIiwiT2JqZWN0IiwiYXNzaWduIiwiaXNFeHBhbmQiLCJjb3VudGVyRW1pdCIsImhhbmRsZUNvcHkiLCJjb3B5VGV4dCIsImJpbmREYXRlQ2hhbmdlIiwiZSIsImRldGFpbCIsInZhbHVlIiwiZXZlbnRzIiwib3B0aW9ucyIsInVybCIsInd4UmVxdWVzdCIsImZldGNoIiwidGhlbiIsInJlcyIsIiRhcHBseSIsIiRicm9hZGNhc3QiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEk7Ozs7Ozs7Ozs7Ozs7O2tMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QixTQURqQjtBQUVQQyxvQ0FBOEIsU0FGdkI7QUFHUEMsOEJBQXdCO0FBSGpCLEssUUFLVkMs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QmlCLENBQWhCO0FBQ0FsQixnQkFBUUMsR0FBUixDQUFZLG1CQUFaLEVBQWlDaUIsRUFBRUMsTUFBRixDQUFTQyxLQUExQztBQUNBLGFBQUtqQyxJQUFMLEdBQVkrQixFQUFFQyxNQUFGLENBQVNDLEtBQXJCO0FBQ0g7QUF4Qk8sSyxRQTZCVkMsTSxHQUFTO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBTE8sSzs7QUE1RFQ7O0FBTUE7Ozs7OzJCQVdPQyxPLEVBQVM7QUFBQTs7QUFDZHRCLGNBQVFDLEdBQVIsQ0FBWXFCLE9BQVosRUFBb0IsU0FBcEI7QUFDQSxVQUFJQyxNQUFNLHFEQUFWO0FBQ0FDLDBCQUFVQyxLQUFWLENBQWdCRixHQUFoQixFQUFxQixJQUFyQixFQUEyQixJQUEzQixFQUFpQyxLQUFqQyxFQUF3Q0csSUFBeEMsQ0FBNkMsZUFBTztBQUNsRCxlQUFLMUMsU0FBTCxHQUFpQjJDLElBQUkvQyxJQUFKLENBQVM2QixHQUFULENBQWEsZ0JBQVE7QUFDcEMsOEJBQVlDLElBQVosSUFBa0JHLFVBQVUsS0FBNUI7QUFDRCxTQUZnQixDQUFqQjtBQUdBLGVBQUtlLE1BQUw7QUFDQTVCLGdCQUFRQyxHQUFSLENBQVksT0FBS2pCLFNBQWpCLEVBQTRCLFFBQTVCO0FBQ0QsT0FORDtBQU9BLFdBQUs2QyxVQUFMLENBQWdCLGFBQWhCLEVBVmMsQ0FVa0I7QUFDaEM7QUFDRDs7OytCQTRCUztBQUNQdkIsc0JBQU1DLFNBQU4sQ0FBZ0IsSUFBaEIsRUFBcUIsZ0JBQXJCLEVBQXNDLElBQXRDO0FBQ0Y7Ozs7RUFwSStCdUIsZUFBS0MsSTs7a0JBQWxCaEUsSSIsImZpbGUiOiJob21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbmltcG9ydCBDb25maWdBcGkgZnJvbSBcIi4uL3V0aWxzL2NvbmZpZy5qc1wiO1xuaW1wb3J0IHd4UmVxdWVzdCBmcm9tICcuLi91dGlscy93eFJlcXVlc3QuanMnO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi91dGlscy91dGlscy5qc1wiO1xuaW1wb3J0IENoaWxkIGZyb20gJy4uL2NvbXBvbmVudHMvY2hpbGQnO1xuaW1wb3J0IEl0ZW0gZnJvbSAnLi4vY29tcG9uZW50cy9pdGVtJztcbmltcG9ydCBHcm91cCBmcm9tIFwiLi4vY29tcG9uZW50cy9ncm91cFwiO1xuaW1wb3J0IFByb21wdEJveCBmcm9tIFwiLi4vY29tcG9uZW50cy9zaGFyZUNvbXBvbmVudC9wcm9tcHRCb3hcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ215IHdlcHknLFxuICAgIG5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3I6IFwiI0ZGNjY2NlwiLFxuICAgIG5hdmlnYXRpb25CYXJUZXh0U3R5bGU6IFwid2hpdGVcIlxuICB9O1xuICRyZXBlYXQgPSB7XCJncm91cExpc3RcIjp7XCJjb21cIjpcIkl0ZW1cIixcInByb3BzXCI6XCJncm91cEl0ZW0uc3luY1wifSxcImdyb3VwTGlzdERhdGFcIjp7XCJjb21cIjpcIkdyb3VwXCIsXCJwcm9wc1wiOlwiZ3JvdXBJdGVtLnN5bmNcIn19O1xyXG4kcHJvcHMgPSB7XCJJdGVtXCI6e1widi1iaW5kOmdyb3VwSXRlbS5zeW5jXCI6e1widmFsdWVcIjpcIml0ZW1cIixcInR5cGVcIjpcIml0ZW1cIixcImZvclwiOlwiZ3JvdXBMaXN0XCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwiaW5kZXhcIn0sXCJ2LWJpbmQ6Y2hlY2tJbmRleC5vbmNlXCI6e1widmFsdWVcIjpcImNoZWNrSW5kZXhcIixcImZvclwiOlwiZ3JvdXBMaXN0XCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwiaW5kZXhcIn0sXCJ4bWxuczp2LW9uXCI6e1widmFsdWVcIjpcIlwiLFwiZm9yXCI6XCJncm91cExpc3RcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJpbmRleFwifX0sXCJHcm91cFwiOntcInYtYmluZDpncm91cEl0ZW0uc3luY1wiOntcInZhbHVlXCI6XCJpdGVtXCIsXCJ0eXBlXCI6XCJpdGVtXCIsXCJmb3JcIjpcImdyb3VwTGlzdERhdGFcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJpbmRleFwifSxcInYtYmluZDppbmRleGEuc3luY1wiOntcInZhbHVlXCI6XCJpbmRleFwiLFwidHlwZVwiOlwiaW5kZXhcIixcImZvclwiOlwiZ3JvdXBMaXN0RGF0YVwiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImluZGV4XCJ9fSxcIkNoaWxkXCI6e1widi1iaW5kOmNoYW5nZU51bS5zeW5jXCI6XCJudW1cIixcInYtYmluZDp0d29XYXlUaXRsZS5zeW5jXCI6XCJ0aXRsZVwifSxcIlByb21wdEJveFwiOntcInhtbG5zOnd4XCI6XCJcIixcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6cHJvbXB0LnN5bmNcIjpcInBvcEVycm9yTXNnXCJ9fTtcclxuJGV2ZW50cyA9IHtcIkl0ZW1cIjp7XCJ2LW9uOmNoaWxkSGFuZGxlXCI6XCJoYW5kbGVDaGVja1wifSxcIkdyb3VwXCI6e1widi1vbjppbmRleC1lbWl0XCI6XCJjb3VudGVyRW1pdFwifX07XHJcbiBjb21wb25lbnRzID0ge1xuICAgIENoaWxkOiBDaGlsZCxcbiAgICBJdGVtOiBJdGVtLFxuICAgIEdyb3VwOkdyb3VwLFxuICAgIFByb21wdEJveDpQcm9tcHRCb3hcbiAgfTtcbiAgZGF0YSA9IHtcbiAgICBpbmRleDogMCxcbiAgICB0aXRsZTogJ215IGl0ZW0udGl0bGUnLFxuICAgIGNoZWNrSW5kZXg6IC0xLFxuICAgIGdyb3VwTGlzdDogW10sXG4gICAgcG9wRXJyb3JNc2c6bnVsbCxcbiAgICBudW06MSxcbiAgICBkYXRlOiAnMjAxOC0wOS0wMScsXG4gICAgZ3JvdXBMaXN0RGF0YTogW1xuICAgICAge1xuICAgICAgICBpZDogMSxcbiAgICAgICAgbmFtZTogJ+eCueWHu+aUueWPmCcsXG4gICAgICAgIGxpc3Q6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjaGlsZGlkOiAnMS4xJyxcbiAgICAgICAgICAgIGNoaWxkbmFtZTogJ+WtkOmhue+8jOeCueaIkeaUueWPmCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNoaWxkaWQ6ICcxLjInLFxuICAgICAgICAgICAgY2hpbGRuYW1lOiAn5a2Q6aG577yM54K55oiR5pS55Y+YJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2hpbGRpZDogJzEuMycsXG4gICAgICAgICAgICBjaGlsZG5hbWU6ICflrZDpobnvvIzngrnmiJHmlLnlj5gnXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogMixcbiAgICAgICAgbmFtZTogJ+eCueWHu+aUueWPmCcsXG4gICAgICAgIGxpc3Q6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjaGlsZGlkOiAnMi4xJyxcbiAgICAgICAgICAgIGNoaWxkbmFtZTogJ+WtkOmhue+8jOeCueaIkeaUueWPmCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNoaWxkaWQ6ICcyLjInLFxuICAgICAgICAgICAgY2hpbGRuYW1lOiAn5a2Q6aG577yM54K55oiR5pS55Y+YJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2hpbGRpZDogJzIuMycsXG4gICAgICAgICAgICBjaGlsZG5hbWU6ICflrZDpobnvvIzngrnmiJHmlLnlj5gnXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogMyxcbiAgICAgICAgbmFtZTogJ+eCueWHu+aUueWPmCcsXG4gICAgICAgIGxpc3Q6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjaGlsZGlkOiAnMy4xJyxcbiAgICAgICAgICAgIGNoaWxkbmFtZTogJ+WtkOmhue+8jOeCueaIkeaUueWPmCdcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gICBcbiAgfTtcbiAgLy8gY29tcHV0ZWQg6K6h566X5bGe5oCnXG4gIGNvbXB1dGVkID0ge1xuICAgIG5vdygpIHtcbiAgICAgIHJldHVybiArbmV3IERhdGUoKTtcbiAgICB9XG4gIH07XG4gIC8vIHdhdGNoZXIg55uR5ZCs5ZmoXG4gIHdhdGNoPXtcbiAgICAvLyAvLyDnm5HlkKzlmajlh73mlbDlkI3lv4Xpobvot5/pnIDopoHooqvnm5HlkKznmoRkYXRh5a+56LGh5Lit55qE5bGe5oCnbnVt5ZCM5ZCN77yMXG4gICAgLy8g5YW25Y+C5pWw5Lit55qEbmV3VmFsdWXkuLrlsZ7mgKfmlLnlj5jlkI7nmoTmlrDlgLzvvIxvbGRWYWx1ZeS4uuaUueWPmOWJjeeahOaXp+WAvFxuICAgIG51bShuZXdWYWx1ZSwgb2xkVmFsdWUpe1xuICAgICAgY29uc29sZS5sb2coYHBhdGhlciBudW0gdmFsdWU6ICR7b2xkVmFsdWV9IC0+ICR7bmV3VmFsdWV9YClcbiAgICB9LFxuICAgIHRpdGxlKG5ld1ZhbHVlLCBvbGRWYWx1ZSl7XG4gICAgIGNvbnNvbGUubG9nKGBwYXRoZXIgdGl0bGUgdmFsdWU6ICR7b2xkVmFsdWV9IC0+ICR7bmV3VmFsdWV9YClcbiAgICB9XG4gIH1cbiAgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICBjb25zb2xlLmxvZyhvcHRpb25zLCdvcHRpb25zJyk7XG4gICAgbGV0IHVybCA9ICdodHRwOi8vb25zLm1lL3Rvb2xzL2Ryb3Bsb2FkL2pzb24ucGhwP3BhZ2U9MCZzaXplPTUnO1xuICAgIHd4UmVxdWVzdC5mZXRjaCh1cmwsIG51bGwsIG51bGwsICdHRVQnKS50aGVuKHJlcyA9PiB7XG4gICAgICB0aGlzLmdyb3VwTGlzdCA9IHJlcy5kYXRhLm1hcChpdGVtID0+IHtcbiAgICAgICAgcmV0dXJuIHsgLi4uaXRlbSwgaXNFeHBhbmQ6IGZhbHNlIH07XG4gICAgICB9KTtcbiAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmdyb3VwTGlzdCwgJ3Jlcy0tLScpO1xuICAgIH0pO1xuICAgIHRoaXMuJGJyb2FkY2FzdCgnaGFuZGxlQ2hlY2snKTsgLy/nlLHniLbnu4Tku7blj5HotbfvvIzmiYDmnInlrZDnu4Tku7bpg73kvJrmlLbliLDmraTlub/mkq3kuovku7ZcbiAgICAvLyB0aGlzLiRicm9hZGNhc3QoJ2NvdW50ZXJFbWl0JylcbiAgfVxuXG4gIG1ldGhvZHMgPSB7XG4gICAgdGFwTmFtZShpZCwgdGl0bGUsIG90aGVyLCBldmVudCkge1xuICAgICAgVXRpbHMuRXJyb3JUaXBzKHRoaXMsJ2hvbWUgc2hvdyB0aXBzIDInLDMwMDApXG4gICAgfSxcbiAgICBoYW5kbGVDaGVjayhpbmRleCkge1xuICAgICAgLy8g6LWL5YC877yM5L+u5pS5ZGF0YeS4reeahOaVsOaNrlxuICAgICAgdGhpcy5jaGVja0luZGV4ID0gaW5kZXg7XG4gICAgICB0aGlzLmdyb3VwTGlzdCA9IHRoaXMuZ3JvdXBMaXN0Lm1hcCgoaXRlbSwgaWQpID0+IHtcbiAgICAgICAgcmV0dXJuIGluZGV4ID09IGlkXG4gICAgICAgICAgPyBPYmplY3QuYXNzaWduKHt9LHsgLi4uaXRlbSwgaXNFeHBhbmQ6IGZhbHNlIH0se30pXG4gICAgICAgICAgOiBPYmplY3QuYXNzaWduKHt9LHsgLi4uaXRlbSwgaXNFeHBhbmQ6ICFpdGVtLmlzRXhwYW5kIH0se30pXG4gICAgICB9KTtcbiAgICB9LFxuICAgIGNvdW50ZXJFbWl0KGluZGV4LG5hbWUpe1xuICAgICAgY29uc29sZS5sb2coaW5kZXgsbmFtZSwnY291bnRlckVtaXQtJyk7XG4gICAgfSxcbiAgICBoYW5kbGVDb3B5KCl7XG4gICAgICBjb25zb2xlLmxvZygyKTtcbiAgICAgIFV0aWxzLmNvcHlUZXh0KCcxMicpXG4gICAgfSxcbiAgICBiaW5kRGF0ZUNoYW5nZShlKXtcbiAgICAgICAgY29uc29sZS5sb2coJ2UnLGUpXG4gICAgICAgIGNvbnNvbGUubG9nKCdwaWNrZXLlj5HpgIHpgInmi6nmlLnlj5jvvIzmkLrluKblgLzkuLonLCBlLmRldGFpbC52YWx1ZSlcbiAgICAgICAgdGhpcy5kYXRlID0gZS5kZXRhaWwudmFsdWVcbiAgICB9XG4gIH07XG4gIHNob3dUaXBzKCl7XG4gICAgIFV0aWxzLkVycm9yVGlwcyh0aGlzLCdob21lIHNob3cgdGlwcycsMzAwMClcbiAgfVxuICBldmVudHMgPSB7XG4gICAgLy8gJ2luZGV4LWVtaXQnOiguLi5hcmdzKT0+e1xuICAgIC8vICAgY29uc29sZS5sb2codGhpcy5ncm91cExpc3QsJ3RoaXMuZ3JvdXBMaXN0Jyk7XG4gICAgICBcbiAgICAvLyAgIGNvbnNvbGUubG9nKGFyZ3MsJ2luZGV4LWVtaXQtLS0nKTtcbiAgICAvLyB9XG4gIH07XG4gICAgXG59XG4iXX0=