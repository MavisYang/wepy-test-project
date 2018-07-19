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
      console.log("onLaunch--");
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
      console.log("获取用户信息--", res);
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
        console.log(_this.globalData.userInfo, "_this.globalData.userInfo");
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJzdG9yZSIsImNvbmZpZyIsInBhZ2VzIiwid2luZG93IiwiYmFja2dyb3VuZFRleHRTdHlsZSIsIm5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3IiLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwibmF2aWdhdGlvbkJhclRleHRTdHlsZSIsImdsb2JhbERhdGEiLCJ1c2VySW5mbyIsInVzZSIsImNvbnNvbGUiLCJsb2ciLCJ3eCIsImxvZ2luIiwic3VjY2VzcyIsImUiLCJyZXMiLCJ0eXBlIiwiY2FsbGJhY2siLCJfdGhpcyIsImRldGFpbCIsImVyck1zZyIsInNob3dNb2RhbCIsInRpdGxlIiwiY29udGVudCIsIm1hc2siLCJjb25maXJtQ29sb3IiLCJzZXRTdG9yYWdlU3luYyIsImhhc1VzZXJJbmZvIiwid3hMb2dpbiIsImVuY3J5cHRlZERhdGEiLCJpdiIsImNvZGUiLCJwYXJhbXMiLCJhcHBpZCIsIkFQSSIsIkFQUF9JRCIsInd4UmVxdWVzdCIsImZldGNoIiwiYXV0aExvZ2luIiwidGhlbiIsImRhdGEiLCJyZXN1bHRDb2RlIiwicmVzdWx0Q29udGVudCIsInVuaW9uSWQiLCJvcGVuSWQiLCJBdXRoUHJvdmlkZXIiLCJvbkxvZ2luIiwiY2FuSVVzZSIsInVzZXJpbmZvcyIsImdldFN0b3JhZ2VTeW5jIiwiaGFzT3duUHJvcGVydHkiLCJhcHAiLCJ1c2VySW5mb1JlYWR5Q2FsbGJhY2siLCJnZXRVc2VySW5mbyIsIndlcHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFDQTs7QUFFQSxJQUFNQSxRQUFRLHNCQUFkO0FBQ0EseUJBQVNBLEtBQVQ7Ozs7O0FBb0JFLHNCQUFjO0FBQUE7O0FBQUE7O0FBQUEsV0FqQmRDLE1BaUJjLEdBakJMO0FBQ1BDLGFBQU8sQ0FDTCxhQURLLEVBRUosWUFGSSxDQURBO0FBS1BDLGNBQVE7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LENBQVkscUJBQVo7QUFDQSxZQUFJUSxNQUFNWixVQUFOLENBQWlCQyxRQUFyQixFQUErQjtBQUM3QlUsbUJBQVM7QUFDUFYsc0JBQVU0QyxJQUFJN0MsVUFBSixDQUFlQyxRQURsQjtBQUVQb0IseUJBQWE7QUFGTixXQUFUO0FBSUQsU0FMRCxNQUtPLElBQUlvQixPQUFKLEVBQWE7QUFDbEI7QUFDQTtBQUNBN0IsZ0JBQU1rQyxxQkFBTixHQUE4QixlQUFPO0FBQ25DbkMscUJBQVM7QUFDUFYsd0JBQVVRLElBQUlSLFFBRFA7QUFFUG9CLDJCQUFhO0FBRk4sYUFBVDtBQUlELFdBTEQ7QUFNQVYsbUJBQVM7QUFDUFYsc0JBQVUsSUFESDtBQUVQb0IseUJBQWE7QUFGTixXQUFUO0FBSUQsU0FiTSxNQWFBLElBQUksQ0FBQ29CLE9BQUwsRUFBYztBQUNuQnRDLGtCQUFRQyxHQUFSLENBQVksYUFBWjtBQUNBQyxhQUFHVSxTQUFILENBQWE7QUFDWDtBQUNBQyxtQkFBTyxJQUZJO0FBR1hHLDBCQUFjLFNBSEg7QUFJWEYscUJBQVMsaUJBSkU7QUFLWEMsa0JBQU07QUFMSyxXQUFiO0FBT0QsU0FUTSxNQVNBO0FBQ0w7QUFDQWIsYUFBRzBDLFdBQUgsQ0FBZTtBQUNieEM7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsY0FBUyxlQUFPO0FBQ2RLLG9CQUFNWixVQUFOLENBQWlCQyxRQUFqQixHQUE0QlEsSUFBSVIsUUFBaEM7QUFDQVUsdUJBQVM7QUFDUFYsMEJBQVVRLElBQUlSLFFBRFA7QUFFUG9CLDZCQUFhO0FBRk4sZUFBVDtBQUlBbEIsc0JBQVFDLEdBQVIsQ0FBWUcsT0FBWjtBQUNELGFBUEQ7QUFEYSxXQUFmO0FBVUQ7QUFDRjtBQUNGOzs7O0VBbkswQnlDLGVBQUtILEciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tIFwid2VweVwiO1xuaW1wb3J0IFwid2VweS1hc3luYy1mdW5jdGlvblwiO1xuXG5pbXBvcnQgeyBzZXRTdG9yZSB9IGZyb20gXCJ3ZXB5LXJlZHV4XCI7XG5pbXBvcnQgY29uZmlnU3RvcmUgZnJvbSBcIi4vc3RvcmVcIjtcbmltcG9ydCBBUEkgZnJvbSBcIi4vdXRpbHMvYXBpLmpzXCI7XG5pbXBvcnQgd3hSZXF1ZXN0IGZyb20gXCIuL3V0aWxzL3d4UmVxdWVzdC5qc1wiO1xuLy8gaW1wb3J0IHV0aWwgZnJvbSAnLi91dGlscy91dGlsLmpzJztcblxuY29uc3Qgc3RvcmUgPSBjb25maWdTdG9yZSgpO1xuc2V0U3RvcmUoc3RvcmUpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIHdlcHkuYXBwIHtcbiAgY29uZmlnID0ge1xuICAgIHBhZ2VzOiBbXG4gICAgICBcInBhZ2VzL2luZGV4XCIsXG4gICAgICAgXCJwYWdlcy9ob21lXCJcbiAgICBdLFxuICAgIHdpbmRvdzoge1xuICAgICAgYmFja2dyb3VuZFRleHRTdHlsZTogXCJsaWdodFwiLFxuICAgICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogXCIjZmZmXCIsXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiBcIldlQ2hhdFwiLFxuICAgICAgbmF2aWdhdGlvbkJhclRleHRTdHlsZTogXCJibGFja1wiXG4gICAgfVxuICB9O1xuXG4gIGdsb2JhbERhdGEgPSB7XG4gICAgdXNlckluZm86IG51bGxcbiAgfTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMudXNlKFwicmVxdWVzdGZpeFwiKTsgLy/lnKhhcHAud3B55Lit5L2/QVBJIHByb21pc2XljJZcbiAgICB0aGlzLnVzZShcInByb21pc2lmeVwiKTtcbiAgfVxuXG4gIG9uTGF1bmNoKCkge1xuICAgIGNvbnNvbGUubG9nKFwib25MYXVuY2gtLVwiKTtcbiAgICAvLyDlvq7kv6HpooTnmbvpmYZcbiAgICB3eC5sb2dpbih7XG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi55m75b2V5oiQ5YqfXCIsIGUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIC8vIOWFqOWxgOiOt+WPlueUqOaIt+S/oeaBr1xuICBnZXRVc2VySW5mbyhyZXMsIHR5cGUsIGNhbGxiYWNrKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcbiAgICBjb25zb2xlLmxvZyhcIuiOt+WPlueUqOaIt+S/oeaBry0tXCIsIHJlcyk7XG4gICAgaWYgKHJlcy5kZXRhaWwuZXJyTXNnID09IFwiZ2V0VXNlckluZm86ZmFpbCBhdXRoIGRlbnlcIikge1xuICAgICAgd3guc2hvd01vZGFsKHtcbiAgICAgICAgdGl0bGU6IFwi55So5oi35o6I5p2DXCIsXG4gICAgICAgIGNvbnRlbnQ6IFwi5pys5bCP56iL5bqP6ZyA55So5oi35o6I5p2D77yM6K+36YeN5paw54K55Ye75oyJ6ZKu5o6I5p2D44CCXCIsXG4gICAgICAgIG1hc2s6IHRydWUsXG4gICAgICAgIGNvbmZpcm1Db2xvcjogXCIjRjQ1QzQzXCIsXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge31cbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAocmVzLmRldGFpbC5lcnJNc2cgPT0gXCJnZXRVc2VySW5mbzpva1wiKSB7XG4gICAgICBsZXQgdXNlckluZm8gPSByZXMuZGV0YWlsLnVzZXJJbmZvO1xuICAgICAgX3RoaXMuZ2xvYmFsRGF0YS51c2VySW5mbyA9IHVzZXJJbmZvO1xuICAgICAgY29uc29sZS5sb2coX3RoaXMuZ2xvYmFsRGF0YS51c2VySW5mbywgXCJfdGhpcy5nbG9iYWxEYXRhLnVzZXJJbmZvXCIpO1xuICAgICAgd3guc2V0U3RvcmFnZVN5bmMoXCJ1c2VyaW5mb1wiLCB1c2VySW5mbyk7XG4gICAgICBjYWxsYmFjayh7XG4gICAgICAgIGhhc1VzZXJJbmZvOiB0cnVlLFxuICAgICAgICB1c2VySW5mbzogdXNlckluZm9cbiAgICAgIH0pO1xuICAgICAgX3RoaXMud3hMb2dpbihyZXMuZGV0YWlsLmVuY3J5cHRlZERhdGEsIHJlcy5kZXRhaWwuaXYsIHR5cGUpO1xuICAgIH1cbiAgfVxuXG4gIC8v5o6I5p2D55m75b2V77yM5ou/dG9rZW5cblxuICB3eExvZ2luKGVuY3J5cHRlZERhdGEsIGl2LCB0eXBlKSB7XG4gICAgd3guc2V0U3RvcmFnZVN5bmMoXCJ1c2VyVHlwZVwiLCB0eXBlKTsgLy91c2Vy55m75b2V5pa55byP77yMc2VsbO+8jGJ1eVxuICAgIHd4LmxvZ2luKHtcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICBcInVzZSBzdHJpY3RcIjtcbiAgICAgICAgaWYgKHJlcy5jb2RlKSB7XG4gICAgICAgICAgbGV0IHBhcmFtcyA9IHtcbiAgICAgICAgICAgIGFwcGlkOiBBUEkuQVBQX0lELFxuICAgICAgICAgICAgY29kZTogcmVzLmNvZGUsXG4gICAgICAgICAgICBlbmNyeXB0ZWREYXRhOiBlbmNyeXB0ZWREYXRhLFxuICAgICAgICAgICAgaXY6IGl2XG4gICAgICAgICAgfTtcbiAgICAgICAgICBpZiAodHlwZSA9PT0gXCJzZWxsXCIpIHtcbiAgICAgICAgICAgIHd4UmVxdWVzdCAuZmV0Y2goIEFQSS5hdXRoTG9naW4gKyBcIj9faXNjcmVhdGVVc2VyPWZhbHNlXCIsIG51bGwsIHBhcmFtcywgXCJQT1NUXCIgKVxuICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIFwidXNlIHN0cmljdFwiO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKClcbiAgICAgICAgICAgICAgICBpZiAocmVzLmRhdGEucmVzdWx0Q29kZSA9PT0gXCIxMDBcIikge1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEucmVzdWx0Q29udGVudCk7XG4gICAgICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlU3luYyhcInVuaW9uaWRcIiwgcmVzLmRhdGEucmVzdWx0Q29udGVudC51bmlvbklkKTtcbiAgICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKFwib3BlbmlkXCIsIHJlcy5kYXRhLnJlc3VsdENvbnRlbnQub3BlbklkKTtcbiAgICAgICAgICAgICAgICAgIC8vIHV0aWwucGFnZUdvKCcvcGFnZXMvc2VsbC9hcHBseS9pbmRleCcsIDEpXG4gICAgICAgICAgICAgICAgICAvLyBBdXRoUHJvdmlkZXIub25Mb2dpbih0eXBlLCByZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKHJlcywgJ+iOt+WPlnRva2VuJylcbiAgICAgICAgICAgICAgICAgIC8vIH0pXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3JcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiYnV5XCIpIHtcbiAgICAgICAgICAgIHd4UmVxdWVzdC5mZXRjaChBUEkuYXV0aExvZ2luLCBudWxsLCBwYXJhbXMsIFwiUE9TVFwiKS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgIFwidXNlIHN0cmljdFwiO1xuICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygpXG4gICAgICAgICAgICAgIGlmIChyZXMuZGF0YS5yZXN1bHRDb2RlID09PSBcIjEwMFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhLnJlc3VsdENvbnRlbnQpO1xuICAgICAgICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlU3luYyhcInVuaW9uaWRcIiwgcmVzLmRhdGEucmVzdWx0Q29udGVudC51bmlvbklkKTtcbiAgICAgICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoXCJvcGVuaWRcIiwgcmVzLmRhdGEucmVzdWx0Q29udGVudC5vcGVuSWQpO1xuICAgICAgICAgICAgICAgICAgICBBdXRoUHJvdmlkZXIub25Mb2dpbih0eXBlLCBudWxsLCByZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMsIFwi6I635Y+WdG9rZW5cIik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcnJvclwiKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvLyDojrflj5blhajlsYDlsZ7mgKcg55So5oi35L+h5oGv77yM55m75b2V54q25oCBXG4gIGdldEdsb2JhbERhdGFzKGNhbklVc2UsIGNhbGxiYWNrKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcbiAgICBsZXQgdXNlcmluZm9zID0gd3guZ2V0U3RvcmFnZVN5bmMoXCJ1c2VyaW5mb1wiKTtcbiAgICBpZiAodXNlcmluZm9zLmhhc093blByb3BlcnR5KFwibmlja05hbWVcIikpIHtcbiAgICAgIGNvbnNvbGUubG9nKHVzZXJpbmZvcywgXCLojrflj5blhajlsYDlsZ7mgKcg55So5oi35L+h5oGv77yM55m75b2V54q25oCBXCIpO1xuICAgICAgY2FsbGJhY2soe1xuICAgICAgICB1c2VySW5mbzogdXNlcmluZm9zLFxuICAgICAgICBoYXNVc2VySW5mbzogdHJ1ZVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiZ2xvYmFsRGF0YSB1c2VySW5mb1wiKTtcbiAgICAgIGlmIChfdGhpcy5nbG9iYWxEYXRhLnVzZXJJbmZvKSB7XG4gICAgICAgIGNhbGxiYWNrKHtcbiAgICAgICAgICB1c2VySW5mbzogYXBwLmdsb2JhbERhdGEudXNlckluZm8sXG4gICAgICAgICAgaGFzVXNlckluZm86IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKGNhbklVc2UpIHtcbiAgICAgICAgLy8g55Sx5LqOIGdldFVzZXJJbmZvIOaYr+e9kee7nOivt+axgu+8jOWPr+iDveS8muWcqCBQYWdlLm9uTG9hZCDkuYvlkI7miY3ov5Tlm55cbiAgICAgICAgLy8g5omA5Lul5q2k5aSE5Yqg5YWlIGNhbGxiYWNrIOS7pemYsuatoui/meenjeaDheWGtVxuICAgICAgICBfdGhpcy51c2VySW5mb1JlYWR5Q2FsbGJhY2sgPSByZXMgPT4ge1xuICAgICAgICAgIGNhbGxiYWNrKHtcbiAgICAgICAgICAgIHVzZXJJbmZvOiByZXMudXNlckluZm8sXG4gICAgICAgICAgICBoYXNVc2VySW5mbzogdHJ1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjYWxsYmFjayh7XG4gICAgICAgICAgdXNlckluZm86IG51bGwsXG4gICAgICAgICAgaGFzVXNlckluZm86IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmICghY2FuSVVzZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImxvdyB2ZXJzaW9uXCIpO1xuICAgICAgICB3eC5zaG93TW9kYWwoe1xuICAgICAgICAgIC8vIOWQkeeUqOaIt+aPkOekuuWNh+e6p+iHs+acgOaWsOeJiOW+ruS/oeOAglxuICAgICAgICAgIHRpdGxlOiBcIuaPkOekulwiLFxuICAgICAgICAgIGNvbmZpcm1Db2xvcjogXCIjRjQ1QzQzXCIsXG4gICAgICAgICAgY29udGVudDogXCLlvq7kv6HniYjmnKzov4fkvY7vvIzor7fljYfnuqfoh7PmnIDmlrDniYjjgIJcIixcbiAgICAgICAgICBtYXNrOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8g5Zyo5rKh5pyJIG9wZW4tdHlwZT1nZXRVc2VySW5mbyDniYjmnKznmoTlhbzlrrnlpITnkIZcbiAgICAgICAgd3guZ2V0VXNlckluZm8oe1xuICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgICAgICBfdGhpcy5nbG9iYWxEYXRhLnVzZXJJbmZvID0gcmVzLnVzZXJJbmZvO1xuICAgICAgICAgICAgY2FsbGJhY2soe1xuICAgICAgICAgICAgICB1c2VySW5mbzogcmVzLnVzZXJJbmZvLFxuICAgICAgICAgICAgICBoYXNVc2VySW5mbzogdHJ1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzdWNjZXNzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19