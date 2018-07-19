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

// import util from './utils/util.js';

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
    value: function onLaunch() {
      // console.log("onLaunch--");
      // 微信预登陆
      wx.login({
        success: function success(e) {
          console.log("登录成功", e);
        }
      });
    }
    // 全局获取用户信息

  }, {
    key: "getUserInfo",
    value: function getUserInfo(res, type, callback) {
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
        // console.log(_this.globalData.userInfo, "_this.globalData.userInfo");
        wx.setStorageSync("userinfo", userInfo);
        callback({
          hasUserInfo: true,
          userInfo: userInfo
        });
        _this.wxLogin(res.detail.encryptedData, res.detail.iv, type);
      }
    }

    //授权登录，拿token

  }, {
    key: "wxLogin",
    value: function wxLogin(encryptedData, iv, type) {
      wx.setStorageSync("userType", type); //user登录方式，sell，buy
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
            if (type === "sell") {
              _wxRequest2.default.fetch(_api2.default.authLogin + "?_iscreateUser=false", null, params, "POST").then(function (res) {
                "use strict";
                // console.log()

                if (res.data.resultCode === "100") {
                  console.log(res.data.resultContent);
                  wx.setStorageSync("unionid", res.data.resultContent.unionId);
                  wx.setStorageSync("openid", res.data.resultContent.openId);
                  // util.pageGo('/pages/sell/apply/index', 1)
                  // AuthProvider.onLogin(type, res => {
                  //     console.log(res, '获取token')
                  // })
                } else {
                  console.log("error");
                }
              });
            } else if (type === "buy") {
              _wxRequest2.default.fetch(_api2.default.authLogin, null, params, "POST").then(function (res) {
                "use strict";
                // console.log()

                if (res.data.resultCode === "100") {
                  console.log(res.data.resultContent);
                  wx.setStorageSync("unionid", res.data.resultContent.unionId);
                  wx.setStorageSync("openid", res.data.resultContent.openId);
                  AuthProvider.onLogin(type, null, function (res) {
                    console.log(res, "获取token");
                  });
                } else {
                  console.log("error");
                }
              });
            }
          }
        }
      });
    }

    // 获取全局属性 用户信息，登录状态

  }, {
    key: "getGlobalDatas",
    value: function getGlobalDatas(canIUse, callback) {
      var _this = this;
      var userinfos = wx.getStorageSync("userinfo");
      if (userinfos.hasOwnProperty("nickName")) {
        console.log(userinfos, "获取全局属性 用户信息，登录状态");
        callback({
          userInfo: userinfos,
          hasUserInfo: true
        });
      } else {
        console.log("globalData userInfo");
        if (_this.globalData.userInfo) {
          callback({
            userInfo: app.globalData.userInfo,
            hasUserInfo: true
          });
        } else if (canIUse) {
          // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
          // 所以此处加入 callback 以防止这种情况
          _this.userInfoReadyCallback = function (res) {
            callback({
              userInfo: res.userInfo,
              hasUserInfo: true
            });
          };
          callback({
            userInfo: null,
            hasUserInfo: false
          });
        } else if (!canIUse) {
          console.log("low version");
          wx.showModal({
            // 向用户提示升级至最新版微信。
            title: "提示",
            confirmColor: "#F45C43",
            content: "微信版本过低，请升级至最新版。",
            mask: true
          });
        } else {
          // 在没有 open-type=getUserInfo 版本的兼容处理
          wx.getUserInfo({
            success: function (_success) {
              function success(_x) {
                return _success.apply(this, arguments);
              }

              success.toString = function () {
                return _success.toString();
              };

              return success;
            }(function (res) {
              _this.globalData.userInfo = res.userInfo;
              callback({
                userInfo: res.userInfo,
                hasUserInfo: true
              });
              console.log(success);
            })
          });
        }
      }
    }
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {"noPromiseAPI":["createSelectorQuery"]}));
require('./_wepylogs.js')

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJzdG9yZSIsImNvbmZpZyIsInBhZ2VzIiwid2luZG93IiwiYmFja2dyb3VuZFRleHRTdHlsZSIsIm5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3IiLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwibmF2aWdhdGlvbkJhclRleHRTdHlsZSIsImdsb2JhbERhdGEiLCJ1c2VySW5mbyIsInVzZSIsInd4IiwibG9naW4iLCJzdWNjZXNzIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJyZXMiLCJ0eXBlIiwiY2FsbGJhY2siLCJfdGhpcyIsImRldGFpbCIsImVyck1zZyIsInNob3dNb2RhbCIsInRpdGxlIiwiY29udGVudCIsIm1hc2siLCJjb25maXJtQ29sb3IiLCJzZXRTdG9yYWdlU3luYyIsImhhc1VzZXJJbmZvIiwid3hMb2dpbiIsImVuY3J5cHRlZERhdGEiLCJpdiIsImNvZGUiLCJwYXJhbXMiLCJhcHBpZCIsIkFQSSIsIkFQUF9JRCIsInd4UmVxdWVzdCIsImZldGNoIiwiYXV0aExvZ2luIiwidGhlbiIsImRhdGEiLCJyZXN1bHRDb2RlIiwicmVzdWx0Q29udGVudCIsInVuaW9uSWQiLCJvcGVuSWQiLCJBdXRoUHJvdmlkZXIiLCJvbkxvZ2luIiwiY2FuSVVzZSIsInVzZXJpbmZvcyIsImdldFN0b3JhZ2VTeW5jIiwiaGFzT3duUHJvcGVydHkiLCJhcHAiLCJ1c2VySW5mb1JlYWR5Q2FsbGJhY2siLCJnZXRVc2VySW5mbyIsIndlcHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFDQTs7QUFFQSxJQUFNQSxRQUFRLHNCQUFkO0FBQ0EseUJBQVNBLEtBQVQ7Ozs7O0FBb0JFLHNCQUFjO0FBQUE7O0FBQUE7O0FBQUEsV0FqQmRDLE1BaUJjLEdBakJMO0FBQ1BDLGFBQU8sQ0FDTCxhQURLLEVBRUosWUFGSSxDQURBO0FBS1BDLGNBQVE7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b0IseUJBQWE7QUFGTixXQUFUO0FBSUQsU0FMRCxNQUtPLElBQUlvQixPQUFKLEVBQWE7QUFDbEI7QUFDQTtBQUNBN0IsZ0JBQU1rQyxxQkFBTixHQUE4QixlQUFPO0FBQ25DbkMscUJBQVM7QUFDUFYsd0JBQVVRLElBQUlSLFFBRFA7QUFFUG9CLDJCQUFhO0FBRk4sYUFBVDtBQUlELFdBTEQ7QUFNQVYsbUJBQVM7QUFDUFYsc0JBQVUsSUFESDtBQUVQb0IseUJBQWE7QUFGTixXQUFUO0FBSUQsU0FiTSxNQWFBLElBQUksQ0FBQ29CLE9BQUwsRUFBYztBQUNuQmxDLGtCQUFRQyxHQUFSLENBQVksYUFBWjtBQUNBTCxhQUFHWSxTQUFILENBQWE7QUFDWDtBQUNBQyxtQkFBTyxJQUZJO0FBR1hHLDBCQUFjLFNBSEg7QUFJWEYscUJBQVMsaUJBSkU7QUFLWEMsa0JBQU07QUFMSyxXQUFiO0FBT0QsU0FUTSxNQVNBO0FBQ0w7QUFDQWYsYUFBRzRDLFdBQUgsQ0FBZTtBQUNiMUM7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsY0FBUyxlQUFPO0FBQ2RPLG9CQUFNWixVQUFOLENBQWlCQyxRQUFqQixHQUE0QlEsSUFBSVIsUUFBaEM7QUFDQVUsdUJBQVM7QUFDUFYsMEJBQVVRLElBQUlSLFFBRFA7QUFFUG9CLDZCQUFhO0FBRk4sZUFBVDtBQUlBZCxzQkFBUUMsR0FBUixDQUFZSCxPQUFaO0FBQ0QsYUFQRDtBQURhLFdBQWY7QUFVRDtBQUNGO0FBQ0Y7Ozs7RUFuSzBCMkMsZUFBS0gsRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gXCJ3ZXB5XCI7XG5pbXBvcnQgXCJ3ZXB5LWFzeW5jLWZ1bmN0aW9uXCI7XG5cbmltcG9ydCB7IHNldFN0b3JlIH0gZnJvbSBcIndlcHktcmVkdXhcIjtcbmltcG9ydCBjb25maWdTdG9yZSBmcm9tIFwiLi9zdG9yZVwiO1xuaW1wb3J0IEFQSSBmcm9tIFwiLi91dGlscy9hcGkuanNcIjtcbmltcG9ydCB3eFJlcXVlc3QgZnJvbSBcIi4vdXRpbHMvd3hSZXF1ZXN0LmpzXCI7XG4vLyBpbXBvcnQgdXRpbCBmcm9tICcuL3V0aWxzL3V0aWwuanMnO1xuXG5jb25zdCBzdG9yZSA9IGNvbmZpZ1N0b3JlKCk7XG5zZXRTdG9yZShzdG9yZSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgd2VweS5hcHAge1xuICBjb25maWcgPSB7XG4gICAgcGFnZXM6IFtcbiAgICAgIFwicGFnZXMvaW5kZXhcIixcbiAgICAgICBcInBhZ2VzL2hvbWVcIlxuICAgIF0sXG4gICAgd2luZG93OiB7XG4gICAgICBiYWNrZ3JvdW5kVGV4dFN0eWxlOiBcImxpZ2h0XCIsXG4gICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiBcIiNmZmZcIixcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6IFwiV2VDaGF0XCIsXG4gICAgICBuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlOiBcImJsYWNrXCJcbiAgICB9XG4gIH07XG5cbiAgZ2xvYmFsRGF0YSA9IHtcbiAgICB1c2VySW5mbzogbnVsbFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy51c2UoXCJyZXF1ZXN0Zml4XCIpOyAvL+WcqGFwcC53cHnkuK3kvb9BUEkgcHJvbWlzZeWMllxuICAgIHRoaXMudXNlKFwicHJvbWlzaWZ5XCIpO1xuICB9XG5cbiAgb25MYXVuY2goKSB7XG4gICAgLy8gY29uc29sZS5sb2coXCJvbkxhdW5jaC0tXCIpO1xuICAgIC8vIOW+ruS/oemihOeZu+mZhlxuICAgIHd4LmxvZ2luKHtcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCLnmbvlvZXmiJDlip9cIiwgZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgLy8g5YWo5bGA6I635Y+W55So5oi35L+h5oGvXG4gIGdldFVzZXJJbmZvKHJlcywgdHlwZSwgY2FsbGJhY2spIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuICAgIC8vIGNvbnNvbGUubG9nKFwi6I635Y+W55So5oi35L+h5oGvLS1cIiwgcmVzKTtcbiAgICBpZiAocmVzLmRldGFpbC5lcnJNc2cgPT0gXCJnZXRVc2VySW5mbzpmYWlsIGF1dGggZGVueVwiKSB7XG4gICAgICB3eC5zaG93TW9kYWwoe1xuICAgICAgICB0aXRsZTogXCLnlKjmiLfmjojmnYNcIixcbiAgICAgICAgY29udGVudDogXCLmnKzlsI/nqIvluo/pnIDnlKjmiLfmjojmnYPvvIzor7fph43mlrDngrnlh7vmjInpkq7mjojmnYPjgIJcIixcbiAgICAgICAgbWFzazogdHJ1ZSxcbiAgICAgICAgY29uZmlybUNvbG9yOiBcIiNGNDVDNDNcIixcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7fVxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChyZXMuZGV0YWlsLmVyck1zZyA9PSBcImdldFVzZXJJbmZvOm9rXCIpIHtcbiAgICAgIGxldCB1c2VySW5mbyA9IHJlcy5kZXRhaWwudXNlckluZm87XG4gICAgICBfdGhpcy5nbG9iYWxEYXRhLnVzZXJJbmZvID0gdXNlckluZm87XG4gICAgICAvLyBjb25zb2xlLmxvZyhfdGhpcy5nbG9iYWxEYXRhLnVzZXJJbmZvLCBcIl90aGlzLmdsb2JhbERhdGEudXNlckluZm9cIik7XG4gICAgICB3eC5zZXRTdG9yYWdlU3luYyhcInVzZXJpbmZvXCIsIHVzZXJJbmZvKTtcbiAgICAgIGNhbGxiYWNrKHtcbiAgICAgICAgaGFzVXNlckluZm86IHRydWUsXG4gICAgICAgIHVzZXJJbmZvOiB1c2VySW5mb1xuICAgICAgfSk7XG4gICAgICBfdGhpcy53eExvZ2luKHJlcy5kZXRhaWwuZW5jcnlwdGVkRGF0YSwgcmVzLmRldGFpbC5pdiwgdHlwZSk7XG4gICAgfVxuICB9XG5cbiAgLy/mjojmnYPnmbvlvZXvvIzmi790b2tlblxuXG4gIHd4TG9naW4oZW5jcnlwdGVkRGF0YSwgaXYsIHR5cGUpIHtcbiAgICB3eC5zZXRTdG9yYWdlU3luYyhcInVzZXJUeXBlXCIsIHR5cGUpOyAvL3VzZXLnmbvlvZXmlrnlvI/vvIxzZWxs77yMYnV5XG4gICAgd3gubG9naW4oe1xuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIFwidXNlIHN0cmljdFwiO1xuICAgICAgICBpZiAocmVzLmNvZGUpIHtcbiAgICAgICAgICBsZXQgcGFyYW1zID0ge1xuICAgICAgICAgICAgYXBwaWQ6IEFQSS5BUFBfSUQsXG4gICAgICAgICAgICBjb2RlOiByZXMuY29kZSxcbiAgICAgICAgICAgIGVuY3J5cHRlZERhdGE6IGVuY3J5cHRlZERhdGEsXG4gICAgICAgICAgICBpdjogaXZcbiAgICAgICAgICB9O1xuICAgICAgICAgIGlmICh0eXBlID09PSBcInNlbGxcIikge1xuICAgICAgICAgICAgd3hSZXF1ZXN0IC5mZXRjaCggQVBJLmF1dGhMb2dpbiArIFwiP19pc2NyZWF0ZVVzZXI9ZmFsc2VcIiwgbnVsbCwgcGFyYW1zLCBcIlBPU1RcIiApXG4gICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coKVxuICAgICAgICAgICAgICAgIGlmIChyZXMuZGF0YS5yZXN1bHRDb2RlID09PSBcIjEwMFwiKSB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YS5yZXN1bHRDb250ZW50KTtcbiAgICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKFwidW5pb25pZFwiLCByZXMuZGF0YS5yZXN1bHRDb250ZW50LnVuaW9uSWQpO1xuICAgICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoXCJvcGVuaWRcIiwgcmVzLmRhdGEucmVzdWx0Q29udGVudC5vcGVuSWQpO1xuICAgICAgICAgICAgICAgICAgLy8gdXRpbC5wYWdlR28oJy9wYWdlcy9zZWxsL2FwcGx5L2luZGV4JywgMSlcbiAgICAgICAgICAgICAgICAgIC8vIEF1dGhQcm92aWRlci5vbkxvZ2luKHR5cGUsIHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2cocmVzLCAn6I635Y+WdG9rZW4nKVxuICAgICAgICAgICAgICAgICAgLy8gfSlcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcnJvclwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJidXlcIikge1xuICAgICAgICAgICAgd3hSZXF1ZXN0LmZldGNoKEFQSS5hdXRoTG9naW4sIG51bGwsIHBhcmFtcywgXCJQT1NUXCIpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKClcbiAgICAgICAgICAgICAgaWYgKHJlcy5kYXRhLnJlc3VsdENvZGUgPT09IFwiMTAwXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEucmVzdWx0Q29udGVudCk7XG4gICAgICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKFwidW5pb25pZFwiLCByZXMuZGF0YS5yZXN1bHRDb250ZW50LnVuaW9uSWQpO1xuICAgICAgICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlU3luYyhcIm9wZW5pZFwiLCByZXMuZGF0YS5yZXN1bHRDb250ZW50Lm9wZW5JZCk7XG4gICAgICAgICAgICAgICAgICAgIEF1dGhQcm92aWRlci5vbkxvZ2luKHR5cGUsIG51bGwsIHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcywgXCLojrflj5Z0b2tlblwiKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yXCIpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8vIOiOt+WPluWFqOWxgOWxnuaApyDnlKjmiLfkv6Hmga/vvIznmbvlvZXnirbmgIFcbiAgZ2V0R2xvYmFsRGF0YXMoY2FuSVVzZSwgY2FsbGJhY2spIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuICAgIGxldCB1c2VyaW5mb3MgPSB3eC5nZXRTdG9yYWdlU3luYyhcInVzZXJpbmZvXCIpO1xuICAgIGlmICh1c2VyaW5mb3MuaGFzT3duUHJvcGVydHkoXCJuaWNrTmFtZVwiKSkge1xuICAgICAgY29uc29sZS5sb2codXNlcmluZm9zLCBcIuiOt+WPluWFqOWxgOWxnuaApyDnlKjmiLfkv6Hmga/vvIznmbvlvZXnirbmgIFcIik7XG4gICAgICBjYWxsYmFjayh7XG4gICAgICAgIHVzZXJJbmZvOiB1c2VyaW5mb3MsXG4gICAgICAgIGhhc1VzZXJJbmZvOiB0cnVlXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coXCJnbG9iYWxEYXRhIHVzZXJJbmZvXCIpO1xuICAgICAgaWYgKF90aGlzLmdsb2JhbERhdGEudXNlckluZm8pIHtcbiAgICAgICAgY2FsbGJhY2soe1xuICAgICAgICAgIHVzZXJJbmZvOiBhcHAuZ2xvYmFsRGF0YS51c2VySW5mbyxcbiAgICAgICAgICBoYXNVc2VySW5mbzogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoY2FuSVVzZSkge1xuICAgICAgICAvLyDnlLHkuo4gZ2V0VXNlckluZm8g5piv572R57uc6K+35rGC77yM5Y+v6IO95Lya5ZyoIFBhZ2Uub25Mb2FkIOS5i+WQjuaJjei/lOWbnlxuICAgICAgICAvLyDmiYDku6XmraTlpITliqDlhaUgY2FsbGJhY2sg5Lul6Ziy5q2i6L+Z56eN5oOF5Ya1XG4gICAgICAgIF90aGlzLnVzZXJJbmZvUmVhZHlDYWxsYmFjayA9IHJlcyA9PiB7XG4gICAgICAgICAgY2FsbGJhY2soe1xuICAgICAgICAgICAgdXNlckluZm86IHJlcy51c2VySW5mbyxcbiAgICAgICAgICAgIGhhc1VzZXJJbmZvOiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGNhbGxiYWNrKHtcbiAgICAgICAgICB1c2VySW5mbzogbnVsbCxcbiAgICAgICAgICBoYXNVc2VySW5mbzogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKCFjYW5JVXNlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwibG93IHZlcnNpb25cIik7XG4gICAgICAgIHd4LnNob3dNb2RhbCh7XG4gICAgICAgICAgLy8g5ZCR55So5oi35o+Q56S65Y2H57qn6Iez5pyA5paw54mI5b6u5L+h44CCXG4gICAgICAgICAgdGl0bGU6IFwi5o+Q56S6XCIsXG4gICAgICAgICAgY29uZmlybUNvbG9yOiBcIiNGNDVDNDNcIixcbiAgICAgICAgICBjb250ZW50OiBcIuW+ruS/oeeJiOacrOi/h+S9ju+8jOivt+WNh+e6p+iHs+acgOaWsOeJiOOAglwiLFxuICAgICAgICAgIG1hc2s6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyDlnKjmsqHmnIkgb3Blbi10eXBlPWdldFVzZXJJbmZvIOeJiOacrOeahOWFvOWuueWkhOeQhlxuICAgICAgICB3eC5nZXRVc2VySW5mbyh7XG4gICAgICAgICAgc3VjY2VzczogcmVzID0+IHtcbiAgICAgICAgICAgIF90aGlzLmdsb2JhbERhdGEudXNlckluZm8gPSByZXMudXNlckluZm87XG4gICAgICAgICAgICBjYWxsYmFjayh7XG4gICAgICAgICAgICAgIHVzZXJJbmZvOiByZXMudXNlckluZm8sXG4gICAgICAgICAgICAgIGhhc1VzZXJJbmZvOiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHN1Y2Nlc3MpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=