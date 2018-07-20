"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

var _wepyRedux = require('./npm/wepy-redux/lib/index.js');

var _store = require('./store/index.js');

var _store2 = _interopRequireDefault(_store);

var _api = require('./utils/api.js');

var _api2 = _interopRequireDefault(_api);

var _wxRequest = require('./utils/wxRequest.js');

var _wxRequest2 = _interopRequireDefault(_wxRequest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var store = (0, _store2.default)();
(0, _wepyRedux.setStore)(store);

var _default = function (_wepy$app) {
  _inherits(_default, _wepy$app);

  function _default() {
    _classCallCheck(this, _default);

    var _this2 = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

    _this2.config = {
      pages: ["pages/index", "pages/home"],
      window: {
        backgroundTextStyle: "light",
        navigationBarBackgroundColor: "#fff",
        navigationBarTitleText: "WeChat",
        navigationBarTextStyle: "black"
      }
    };
    _this2.globalData = {
      userInfo: null
    };

    _this2.use("requestfix"); //在app.wpy中使API promise化
    _this2.use("promisify");
    return _this2;
  }

  _createClass(_default, [{
    key: "onLaunch",
    value: function onLaunch() {}
    // console.log("onLaunch--");
    // 微信预登陆
    // wx.login({
    //   success: function(e) {
    //     console.log("登录成功", e);
    //   }
    // });

    // 全局获取用户信息

  }, {
    key: "getUserInfo",
    value: function getUserInfo(res) {
      var _this = this;
      // console.log("获取用户信息--", res);
      if (res.detail.errMsg == "getUserInfo:fail auth deny") {
        wx.showModal({
          title: "用户授权",
          content: "本小程序需用户授权，请重新点击按钮授权。",
          mask: true,
          confirmColor: "#F45C43",
          success: function success(res) {}
        });
      } else if (res.detail.errMsg == "getUserInfo:ok") {
        var userInfo = res.detail.userInfo;
        _this.globalData.userInfo = userInfo;
        wx.setStorageSync("userinfo", userInfo);
        // callback({
        //   hasUserInfo: true,
        //   userInfo: userInfo
        // });
        _this.wxLogin(res.detail.encryptedData, res.detail.iv);
      }
    }

    //授权登录，拿token

  }, {
    key: "wxLogin",
    value: function wxLogin(encryptedData, iv) {
      wx.login({
        success: function success(res) {
          "use strict";

          if (res.code) {
            var params = {
              appid: _api2.default.APP_ID,
              code: res.code,
              encryptedData: encryptedData,
              iv: iv
            };
            _wxRequest2.default.fetch(_api2.default.authLogin, null, params, "POST").then(function (res) {
              "use strict";
              // console.log()

              if (res.data.resultCode === "100") {
                console.log(res.data.resultContent);
                wx.setStorageSync("unionid", res.data.resultContent.unionId);
                wx.setStorageSync("openid", res.data.resultContent.openId);
                AuthProvider.onLogin();
              } else {
                console.log("error");
              }
            });
          }
        }
      });
    }

    // 获取全局属性 用户信息，登录状态

  }, {
    key: "getGlobalData",
    value: function getGlobalData(canIUse, callback) {
      // console.log(canIUse, callback, "canIUse, callback");
      var _this = this;
      var userinfos = wx.getStorageSync("userinfo");
      if (userinfos.hasOwnProperty("nickName")) {
        // console.log(userinfos, "获取全局属性 用户信息，登录状态");
        callback({
          userInfo: userinfos,
          hasUserInfo: true
        });
      } else {
        if (_this.globalData.userInfo) {
          callback({
            userInfo: _this.globalData.userInfo,
            hasUserInfo: true
          });
          return;
        } else if (canIUse) {
          // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
          // 所以此处加入 callback 以防止这种情况
          _this.userInfoReadyCallback = function (res) {
            console.log(res, "res---");

            callback({
              userInfo: res.userInfo,
              hasUserInfo: true
            });
          };
        } else if (!canIUse) {
          console.log("low version");
          wx.showModal({
            // 向用户提示升级至最新版微信。
            title: "提示",
            confirmColor: "#F45C43",
            content: "微信版本过低，请升级至最新版。",
            mask: true
          });
          callback({
            userInfo: null,
            hasUserInfo: false
          });
        } else {
          //没有授权
          callback({
            userInfo: null,
            hasUserInfo: false
          });
        }
      }
    }
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {"noPromiseAPI":["createSelectorQuery"]}));
require('./_wepylogs.js')

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJzdG9yZSIsImNvbmZpZyIsInBhZ2VzIiwid2luZG93IiwiYmFja2dyb3VuZFRleHRTdHlsZSIsIm5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3IiLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwibmF2aWdhdGlvbkJhclRleHRTdHlsZSIsImdsb2JhbERhdGEiLCJ1c2VySW5mbyIsInVzZSIsInJlcyIsIl90aGlzIiwiZGV0YWlsIiwiZXJyTXNnIiwid3giLCJzaG93TW9kYWwiLCJ0aXRsZSIsImNvbnRlbnQiLCJtYXNrIiwiY29uZmlybUNvbG9yIiwic3VjY2VzcyIsInNldFN0b3JhZ2VTeW5jIiwid3hMb2dpbiIsImVuY3J5cHRlZERhdGEiLCJpdiIsImxvZ2luIiwiY29kZSIsInBhcmFtcyIsImFwcGlkIiwiQVBJIiwiQVBQX0lEIiwid3hSZXF1ZXN0IiwiZmV0Y2giLCJhdXRoTG9naW4iLCJ0aGVuIiwiZGF0YSIsInJlc3VsdENvZGUiLCJjb25zb2xlIiwibG9nIiwicmVzdWx0Q29udGVudCIsInVuaW9uSWQiLCJvcGVuSWQiLCJBdXRoUHJvdmlkZXIiLCJvbkxvZ2luIiwiY2FuSVVzZSIsImNhbGxiYWNrIiwidXNlcmluZm9zIiwiZ2V0U3RvcmFnZVN5bmMiLCJoYXNPd25Qcm9wZXJ0eSIsImhhc1VzZXJJbmZvIiwidXNlckluZm9SZWFkeUNhbGxiYWNrIiwid2VweSIsImFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7QUFFQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFFBQVEsc0JBQWQ7QUFDQSx5QkFBU0EsS0FBVDs7Ozs7QUFpQkUsc0JBQWM7QUFBQTs7QUFBQTs7QUFBQSxXQWRkQyxNQWNjLEdBZEw7QUFDUEMsYUFBTyxDQUFDLGFBQUQsRUFBZ0IsWUFBaEIsQ0FEQTtBQUVQQyxjQUFRO0FBQ05DLDZCQUFxQixPQURmO0FBRU5DLHNDQUE4QixN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LE1BTU8sSUFBSUwsT0FBSixFQUFhO0FBQ2xCO0FBQ0E7QUFDQWpDLGdCQUFNdUMscUJBQU4sR0FBOEIsZUFBTztBQUNuQ2Isb0JBQVFDLEdBQVIsQ0FBWTVCLEdBQVosRUFBaUIsUUFBakI7O0FBRUFtQyxxQkFBUztBQUNQckMsd0JBQVVFLElBQUlGLFFBRFA7QUFFUHlDLDJCQUFhO0FBRk4sYUFBVDtBQUlELFdBUEQ7QUFRRCxTQVhNLE1BV0EsSUFBSSxDQUFDTCxPQUFMLEVBQWM7QUFDbkJQLGtCQUFRQyxHQUFSLENBQVksYUFBWjtBQUNBeEIsYUFBR0MsU0FBSCxDQUFhO0FBQ1g7QUFDQUMsbUJBQU8sSUFGSTtBQUdYRywwQkFBYyxTQUhIO0FBSVhGLHFCQUFTLGlCQUpFO0FBS1hDLGtCQUFNO0FBTEssV0FBYjtBQU9BMkIsbUJBQVM7QUFDUHJDLHNCQUFVLElBREg7QUFFUHlDLHlCQUFhO0FBRk4sV0FBVDtBQUlELFNBYk0sTUFhQTtBQUNMO0FBQ0FKLG1CQUFTO0FBQ1ByQyxzQkFBVSxJQURIO0FBRVB5Qyx5QkFBYTtBQUZOLFdBQVQ7QUFJRDtBQUNGO0FBQ0Y7Ozs7RUF0STBCRSxlQUFLQyxHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSBcIndlcHlcIjtcbmltcG9ydCBcIndlcHktYXN5bmMtZnVuY3Rpb25cIjtcblxuaW1wb3J0IHsgc2V0U3RvcmUgfSBmcm9tIFwid2VweS1yZWR1eFwiO1xuaW1wb3J0IGNvbmZpZ1N0b3JlIGZyb20gXCIuL3N0b3JlXCI7XG5pbXBvcnQgQVBJIGZyb20gXCIuL3V0aWxzL2FwaS5qc1wiO1xuaW1wb3J0IHd4UmVxdWVzdCBmcm9tIFwiLi91dGlscy93eFJlcXVlc3QuanNcIjtcblxuY29uc3Qgc3RvcmUgPSBjb25maWdTdG9yZSgpO1xuc2V0U3RvcmUoc3RvcmUpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIHdlcHkuYXBwIHtcbiAgY29uZmlnID0ge1xuICAgIHBhZ2VzOiBbXCJwYWdlcy9pbmRleFwiLCBcInBhZ2VzL2hvbWVcIl0sXG4gICAgd2luZG93OiB7XG4gICAgICBiYWNrZ3JvdW5kVGV4dFN0eWxlOiBcImxpZ2h0XCIsXG4gICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiBcIiNmZmZcIixcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6IFwiV2VDaGF0XCIsXG4gICAgICBuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlOiBcImJsYWNrXCJcbiAgICB9XG4gIH07XG5cbiAgZ2xvYmFsRGF0YSA9IHtcbiAgICB1c2VySW5mbzogbnVsbFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy51c2UoXCJyZXF1ZXN0Zml4XCIpOyAvL+WcqGFwcC53cHnkuK3kvb9BUEkgcHJvbWlzZeWMllxuICAgIHRoaXMudXNlKFwicHJvbWlzaWZ5XCIpO1xuICB9XG5cbiAgb25MYXVuY2goKSB7XG4gICAgLy8gY29uc29sZS5sb2coXCJvbkxhdW5jaC0tXCIpO1xuICAgIC8vIOW+ruS/oemihOeZu+mZhlxuICAgIC8vIHd4LmxvZ2luKHtcbiAgICAvLyAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGUpIHtcbiAgICAvLyAgICAgY29uc29sZS5sb2coXCLnmbvlvZXmiJDlip9cIiwgZSk7XG4gICAgLy8gICB9XG4gICAgLy8gfSk7XG4gIH1cbiAgLy8g5YWo5bGA6I635Y+W55So5oi35L+h5oGvXG4gIGdldFVzZXJJbmZvKHJlcykge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG4gICAgLy8gY29uc29sZS5sb2coXCLojrflj5bnlKjmiLfkv6Hmga8tLVwiLCByZXMpO1xuICAgIGlmIChyZXMuZGV0YWlsLmVyck1zZyA9PSBcImdldFVzZXJJbmZvOmZhaWwgYXV0aCBkZW55XCIpIHtcbiAgICAgIHd4LnNob3dNb2RhbCh7XG4gICAgICAgIHRpdGxlOiBcIueUqOaIt+aOiOadg1wiLFxuICAgICAgICBjb250ZW50OiBcIuacrOWwj+eoi+W6j+mcgOeUqOaIt+aOiOadg++8jOivt+mHjeaWsOeCueWHu+aMiemSruaOiOadg+OAglwiLFxuICAgICAgICBtYXNrOiB0cnVlLFxuICAgICAgICBjb25maXJtQ29sb3I6IFwiI0Y0NUM0M1wiLFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHt9XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHJlcy5kZXRhaWwuZXJyTXNnID09IFwiZ2V0VXNlckluZm86b2tcIikge1xuICAgICAgbGV0IHVzZXJJbmZvID0gcmVzLmRldGFpbC51c2VySW5mbztcbiAgICAgIF90aGlzLmdsb2JhbERhdGEudXNlckluZm8gPSB1c2VySW5mbztcbiAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKFwidXNlcmluZm9cIiwgdXNlckluZm8pO1xuICAgICAgLy8gY2FsbGJhY2soe1xuICAgICAgLy8gICBoYXNVc2VySW5mbzogdHJ1ZSxcbiAgICAgIC8vICAgdXNlckluZm86IHVzZXJJbmZvXG4gICAgICAvLyB9KTtcbiAgICAgIF90aGlzLnd4TG9naW4ocmVzLmRldGFpbC5lbmNyeXB0ZWREYXRhLCByZXMuZGV0YWlsLml2KTtcbiAgICB9XG4gIH1cblxuICAvL+aOiOadg+eZu+W9le+8jOaLv3Rva2VuXG5cbiAgd3hMb2dpbihlbmNyeXB0ZWREYXRhLCBpdikge1xuICAgIHd4LmxvZ2luKHtcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICBcInVzZSBzdHJpY3RcIjtcbiAgICAgICAgaWYgKHJlcy5jb2RlKSB7XG4gICAgICAgICAgbGV0IHBhcmFtcyA9IHtcbiAgICAgICAgICAgIGFwcGlkOiBBUEkuQVBQX0lELFxuICAgICAgICAgICAgY29kZTogcmVzLmNvZGUsXG4gICAgICAgICAgICBlbmNyeXB0ZWREYXRhOiBlbmNyeXB0ZWREYXRhLFxuICAgICAgICAgICAgaXY6IGl2XG4gICAgICAgICAgfTtcbiAgICAgICAgICB3eFJlcXVlc3QuZmV0Y2goQVBJLmF1dGhMb2dpbiwgbnVsbCwgcGFyYW1zLCBcIlBPU1RcIikudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygpXG4gICAgICAgICAgICBpZiAocmVzLmRhdGEucmVzdWx0Q29kZSA9PT0gXCIxMDBcIikge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YS5yZXN1bHRDb250ZW50KTtcbiAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoXCJ1bmlvbmlkXCIsIHJlcy5kYXRhLnJlc3VsdENvbnRlbnQudW5pb25JZCk7XG4gICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKFwib3BlbmlkXCIsIHJlcy5kYXRhLnJlc3VsdENvbnRlbnQub3BlbklkKTtcbiAgICAgICAgICAgICAgQXV0aFByb3ZpZGVyLm9uTG9naW4oKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3JcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8vIOiOt+WPluWFqOWxgOWxnuaApyDnlKjmiLfkv6Hmga/vvIznmbvlvZXnirbmgIFcbiAgZ2V0R2xvYmFsRGF0YShjYW5JVXNlLCBjYWxsYmFjaykge1xuICAgIC8vIGNvbnNvbGUubG9nKGNhbklVc2UsIGNhbGxiYWNrLCBcImNhbklVc2UsIGNhbGxiYWNrXCIpO1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG4gICAgbGV0IHVzZXJpbmZvcyA9IHd4LmdldFN0b3JhZ2VTeW5jKFwidXNlcmluZm9cIik7XG4gICAgaWYgKHVzZXJpbmZvcy5oYXNPd25Qcm9wZXJ0eShcIm5pY2tOYW1lXCIpKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyh1c2VyaW5mb3MsIFwi6I635Y+W5YWo5bGA5bGe5oCnIOeUqOaIt+S/oeaBr++8jOeZu+W9leeKtuaAgVwiKTtcbiAgICAgIGNhbGxiYWNrKHtcbiAgICAgICAgdXNlckluZm86IHVzZXJpbmZvcyxcbiAgICAgICAgaGFzVXNlckluZm86IHRydWVcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoX3RoaXMuZ2xvYmFsRGF0YS51c2VySW5mbykge1xuICAgICAgICBjYWxsYmFjayh7XG4gICAgICAgICAgdXNlckluZm86IF90aGlzLmdsb2JhbERhdGEudXNlckluZm8sXG4gICAgICAgICAgaGFzVXNlckluZm86IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gZWxzZSBpZiAoY2FuSVVzZSkge1xuICAgICAgICAvLyDnlLHkuo4gZ2V0VXNlckluZm8g5piv572R57uc6K+35rGC77yM5Y+v6IO95Lya5ZyoIFBhZ2Uub25Mb2FkIOS5i+WQjuaJjei/lOWbnlxuICAgICAgICAvLyDmiYDku6XmraTlpITliqDlhaUgY2FsbGJhY2sg5Lul6Ziy5q2i6L+Z56eN5oOF5Ya1XG4gICAgICAgIF90aGlzLnVzZXJJbmZvUmVhZHlDYWxsYmFjayA9IHJlcyA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2cocmVzLCBcInJlcy0tLVwiKTtcblxuICAgICAgICAgIGNhbGxiYWNrKHtcbiAgICAgICAgICAgIHVzZXJJbmZvOiByZXMudXNlckluZm8sXG4gICAgICAgICAgICBoYXNVc2VySW5mbzogdHJ1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgfSBlbHNlIGlmICghY2FuSVVzZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImxvdyB2ZXJzaW9uXCIpO1xuICAgICAgICB3eC5zaG93TW9kYWwoe1xuICAgICAgICAgIC8vIOWQkeeUqOaIt+aPkOekuuWNh+e6p+iHs+acgOaWsOeJiOW+ruS/oeOAglxuICAgICAgICAgIHRpdGxlOiBcIuaPkOekulwiLFxuICAgICAgICAgIGNvbmZpcm1Db2xvcjogXCIjRjQ1QzQzXCIsXG4gICAgICAgICAgY29udGVudDogXCLlvq7kv6HniYjmnKzov4fkvY7vvIzor7fljYfnuqfoh7PmnIDmlrDniYjjgIJcIixcbiAgICAgICAgICBtYXNrOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBjYWxsYmFjayh7XG4gICAgICAgICAgdXNlckluZm86IG51bGwsXG4gICAgICAgICAgaGFzVXNlckluZm86IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy/msqHmnInmjojmnYNcbiAgICAgICAgY2FsbGJhY2soe1xuICAgICAgICAgIHVzZXJJbmZvOiBudWxsLFxuICAgICAgICAgIGhhc1VzZXJJbmZvOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==