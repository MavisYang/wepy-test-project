'use strict';

// const ORIGIN_NAME = 'https://cloud.gemii.cc/lizcloud/api';//生产环境
// const ORIGIN_NAME = 'http://dev.gemii.cc:58080/lizcloud/api'; //开发模式
var ORIGIN_NAME = 'http://test.gemii.cc:58080/lizcloud/api'; //测试模式


var USER_LOGIN = ORIGIN_NAME + '/basis-api/noauth/'; //授权绑定，用户登录1
var TOKRN = ORIGIN_NAME + '/uaa/oauth/token?'; //获取token


var api = {
    SECRET: "bGl6LXNob3Atb3duZXI6c2VjcmV0", //base64加密liz-shop-owner:secret
    APP_ID: 'wx50d128239e413fe0', //APPID
    authLogin: USER_LOGIN + 'wdwd/loadUserAuthorizeWechat', //获取unionid
    getToken: ORIGIN_NAME + '/basis-api/noauth/usermgmt/loginShopOwner', //卖家获取token
    // getToken: ORIGIN_NAME + '/basis-api/noauth/usermgmt/v2/loginShopOwner', //卖家获取token
    getTokenC: TOKRN + 'grant_type=password&password=&username=', //买家获取token
    refreshToken: TOKRN + 'grant_type=refresh_token&refresh_token=', //刷新token

    getPhoneCode: ORIGIN_NAME + '/basis-api/noauth/usermgmt/sendPhoneCode?_templateCode=SHOP_OWNER_VCODE_MSG&_phone=', //获取手机号码code
    codeYAN: ORIGIN_NAME + '/basis-api/noauth/usermgmt/checkPhoneCode', //验证手机号码

    getSmallPro: ORIGIN_NAME + '/basis-api/noauth/oauth/login/smallpro', //获取oppenid

    uploadImg: ORIGIN_NAME + '/gridfs-api/noauth/media', //上传图片

    apply: ORIGIN_NAME + '/basis-api/noauth/usermgmt/applyShopOwnerWhiteList', //申请入驻
    queryShopOwnerWhiteList: ORIGIN_NAME + '/basis-api/noauth/usermgmt/queryShopOwnerWhiteList/', //判断是否入驻申请

    createProduct: ORIGIN_NAME + '/e-goods-api/authsec/miniprogram/product', //创建秒杀商品
    createBargain: ORIGIN_NAME + '/e-goods-api/authsec/miniprogram/bargain/product', //创建砍价商品
    getGoodDetail: ORIGIN_NAME + '/e-goods-api/noauth/miniprogram/good/brief?goodId=', //商品详细信息
    getProductList: ORIGIN_NAME + '/e-goods-api/authsec/miniprogram/goods', //获取商品列表 post
    stopActivity: ORIGIN_NAME + '/e-goods-api/authsec/miniprogram/removeshop/', //终止活动 put
    getOrdersList: ORIGIN_NAME + '/e-order-api/authsec/miniApp/orderapi/supplier/orders', //获取订单列表

    getShopMessage: ORIGIN_NAME + '/e-goods-api/authsec/miniprogram/tenant/address', //获取地址店铺

    getGoodInfo: ORIGIN_NAME + '/e-goods-api/noauth/miniprogram/good/brief', //获取商品信息 get
    getSkuInfo: ORIGIN_NAME + '/e-goods-api/noauth/tenant/good/', //获取skuInfo
    // submitOrder: ORIGIN_NAME + '/e-purchase-api/authsec/goods/miniapp/submit/buy',//商品提交购买
    submitOrder: ORIGIN_NAME + '/e-purchase-api/authsec/goods/miniapp/submit/buyandpay', //商品提交购买
    bargainSubmit: ORIGIN_NAME + '/e-purchase-api/authsec/goods/miniapp/bargain/submit/buyandpay', //砍价购买
    submitPayment: ORIGIN_NAME + '/marketplaceui/authsec/payment/prePayment/program', //小程序发起预支付
    bookGood: ORIGIN_NAME + '/e-goods-api/authsec/miniprogram/notice/good', //订阅商品

    withDrawPay: ORIGIN_NAME + '/tenantadmin-api/authsec/accountthird/createWithDraw/pay', //提现
    loadAccountInfo: ORIGIN_NAME + '/tenantadmin-api/authsec/account/loadAccountInfo', //资金流水
    templateNews: ORIGIN_NAME + '/basis-api/authsec/oauth/user/formId', //小程序推送模板消息 authsec
    templateNew: ORIGIN_NAME + '/basis-api/noauth/oauth/user/formId', //小程序推送模板消息 authsec

    longToshort: ORIGIN_NAME + '/e-goods-api/noauth/support/longToshort?type=0&longId=', //长转短
    shortTolong: ORIGIN_NAME + '/e-goods-api/noauth/support/shortTolong?shortId=', //短转长

    weChatNo: ORIGIN_NAME + '/e-goods-api/authsec/miniprogram/user/wechatno', //获取微信号
    fulfillment: ORIGIN_NAME + '/e-order-api/authsec/fulfillment/miniApp/ticket', //上传图片

    getOrderImg: ORIGIN_NAME + '/e-order-api/authsec/fulfillment/miniApp/order/', //查订单图片

    wexxImg: ORIGIN_NAME + '/basis-api/noauth/program/qrcode?appId=wx5dcfaad36777e61d&page=pages/buyer/secKill/index&scene=', //小程序码

    bargainProductNoauth: ORIGIN_NAME + '/e-purchase-api/noauth/goods/miniapp/bargain/product', //砍价商品非鉴权
    bargainProductAuthsec: ORIGIN_NAME + '/e-purchase-api/authsec/goods/miniapp/bargain/product', //砍价商品鉴权

    launchBargain: ORIGIN_NAME + '/e-purchase-api/authsec/goods/miniapp/bargain', //发起砍价
    helpBargain: ORIGIN_NAME + '/e-purchase-api/authsec/goods/miniapp/help/bargain?bargainBuyId=' //帮砍
};

module.exports = api;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS5qcyJdLCJuYW1lcyI6WyJPUklHSU5fTkFNRSIsIlVTRVJfTE9HSU4iLCJUT0tSTiIsImFwaSIsIlNFQ1JFVCIsIkFQUF9JRCIsImF1dGhMb2dpbiIsImdldFRva2VuIiwiZ2V0VG9rZW5DIiwicmVmcmVzaFRva2VuIiwiZ2V0UGhvbmVDb2RlIiwiY29kZVlBTiIsImdldFNtYWxsUHJvIiwidXBsb2FkSW1nIiwiYXBwbHkiLCJxdWVyeVNob3BPd25lcldoaXRlTGlzdCIsImNyZWF0ZVByb2R1Y3QiLCJjcmVhdGVCYXJnYWluIiwiZ2V0R29vZERldGFpbCIsImdldFByb2R1Y3RMaXN0Iiwic3RvcEFjdGl2aXR5IiwiZ2V0T3JkZXJzTGlzdCIsImdldFNob3BNZXNzYWdlIiwiZ2V0R29vZEluZm8iLCJnZXRTa3VJbmZvIiwic3VibWl0T3JkZXIiLCJiYXJnYWluU3VibWl0Iiwic3VibWl0UGF5bWVudCIsImJvb2tHb29kIiwid2l0aERyYXdQYXkiLCJsb2FkQWNjb3VudEluZm8iLCJ0ZW1wbGF0ZU5ld3MiLCJ0ZW1wbGF0ZU5ldyIsImxvbmdUb3Nob3J0Iiwic2hvcnRUb2xvbmciLCJ3ZUNoYXRObyIsImZ1bGZpbGxtZW50IiwiZ2V0T3JkZXJJbWciLCJ3ZXh4SW1nIiwiYmFyZ2FpblByb2R1Y3ROb2F1dGgiLCJiYXJnYWluUHJvZHVjdEF1dGhzZWMiLCJsYXVuY2hCYXJnYWluIiwiaGVscEJhcmdhaW4iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQSxJQUFNQSxjQUFjLHlDQUFwQixDLENBQStEOzs7QUFHL0QsSUFBTUMsYUFBYUQsY0FBYyxvQkFBakMsQyxDQUFzRDtBQUN0RCxJQUFNRSxRQUFRRixjQUFjLG1CQUE1QixDLENBQWdEOzs7QUFHaEQsSUFBTUcsTUFBTTtBQUNSQyxZQUFRLDhCQURBLEVBQ2dDO0FBQ3hDQyxZQUFRLG9CQUZBLEVBRXNCO0FBQzlCQyxlQUFXTCxhQUFhLDhCQUhoQixFQUdnRDtBQUN4RE0sY0FBVVAsY0FBYywyQ0FKaEIsRUFJNkQ7QUFDckU7QUFDQVEsZUFBV04sUUFBUSx5Q0FOWCxFQU1zRDtBQUM5RE8sa0JBQWNQLFFBQVEseUNBUGQsRUFPeUQ7O0FBRWpFUSxrQkFBY1YsY0FBYyxxRkFUcEIsRUFTMEc7QUFDbEhXLGFBQVNYLGNBQWMsMkNBVmYsRUFVMkQ7O0FBRW5FWSxpQkFBYVosY0FBYyx3Q0FabkIsRUFZNEQ7O0FBRXBFYSxlQUFXYixjQUFjLDBCQWRqQixFQWM0Qzs7QUFFcERjLFdBQU9kLGNBQWMsb0RBaEJiLEVBZ0JrRTtBQUMxRWUsNkJBQXlCZixjQUFjLHFEQWpCL0IsRUFpQnFGOztBQUU3RmdCLG1CQUFlaEIsY0FBYywwQ0FuQnJCLEVBbUJnRTtBQUN4RWlCLG1CQUFlakIsY0FBYyxrREFwQnJCLEVBb0J3RTtBQUNoRmtCLG1CQUFlbEIsY0FBYyxvREFyQnJCLEVBcUIwRTtBQUNsRm1CLG9CQUFnQm5CLGNBQWMsd0NBdEJ0QixFQXNCK0Q7QUFDdkVvQixrQkFBY3BCLGNBQWMsOENBdkJwQixFQXVCbUU7QUFDM0VxQixtQkFBZXJCLGNBQWMsdURBeEJyQixFQXdCNkU7O0FBRXJGc0Isb0JBQWdCdEIsY0FBYyxpREExQnRCLEVBMEJ3RTs7QUFFaEZ1QixpQkFBYXZCLGNBQWMsNENBNUJuQixFQTRCZ0U7QUFDeEV3QixnQkFBWXhCLGNBQWMsa0NBN0JsQixFQTZCcUQ7QUFDN0Q7QUFDQXlCLGlCQUFhekIsY0FBYyx3REEvQm5CLEVBK0I0RTtBQUNwRjBCLG1CQUFlMUIsY0FBYyxnRUFoQ3JCLEVBZ0NzRjtBQUM5RjJCLG1CQUFlM0IsY0FBYyxtREFqQ3JCLEVBaUN5RTtBQUNqRjRCLGNBQVU1QixjQUFjLDhDQWxDaEIsRUFrQytEOztBQUV2RTZCLGlCQUFhN0IsY0FBYywwREFwQ25CLEVBb0M4RTtBQUN0RjhCLHFCQUFpQjlCLGNBQWMsa0RBckN2QixFQXFDMEU7QUFDbEYrQixrQkFBYy9CLGNBQWMsc0NBdENwQixFQXNDMkQ7QUFDbkVnQyxpQkFBYWhDLGNBQWMscUNBdkNuQixFQXVDeUQ7O0FBRWpFaUMsaUJBQWFqQyxjQUFjLHdEQXpDbkIsRUF5QzRFO0FBQ3BGa0MsaUJBQWFsQyxjQUFjLGtEQTFDbkIsRUEwQ3NFOztBQUU5RW1DLGNBQVVuQyxjQUFjLGdEQTVDaEIsRUE0Q2lFO0FBQ3pFb0MsaUJBQWFwQyxjQUFjLGlEQTdDbkIsRUE2Q3FFOztBQUU3RXFDLGlCQUFhckMsY0FBYyxpREEvQ25CLEVBK0NxRTs7QUFFN0VzQyxhQUFTdEMsY0FBYyxpR0FqRGYsRUFpRGlIOztBQUV6SHVDLDBCQUFzQnZDLGNBQWMsc0RBbkQ1QixFQW1EbUY7QUFDM0Z3QywyQkFBdUJ4QyxjQUFjLHVEQXBEN0IsRUFvRHFGOztBQUU3RnlDLG1CQUFlekMsY0FBYywrQ0F0RHJCLEVBc0RxRTtBQUM3RTBDLGlCQUFhMUMsY0FBYyxrRUF2RG5CLENBdURzRjtBQXZEdEYsQ0FBWjs7QUEwREEyQyxPQUFPQyxPQUFQLEdBQWlCekMsR0FBakIiLCJmaWxlIjoiYXBpLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gY29uc3QgT1JJR0lOX05BTUUgPSAnaHR0cHM6Ly9jbG91ZC5nZW1paS5jYy9saXpjbG91ZC9hcGknOy8v55Sf5Lqn546v5aKDXG4vLyBjb25zdCBPUklHSU5fTkFNRSA9ICdodHRwOi8vZGV2LmdlbWlpLmNjOjU4MDgwL2xpemNsb3VkL2FwaSc7IC8v5byA5Y+R5qih5byPXG5jb25zdCBPUklHSU5fTkFNRSA9ICdodHRwOi8vdGVzdC5nZW1paS5jYzo1ODA4MC9saXpjbG91ZC9hcGknOyAvL+a1i+ivleaooeW8j1xuXG5cbmNvbnN0IFVTRVJfTE9HSU4gPSBPUklHSU5fTkFNRSArICcvYmFzaXMtYXBpL25vYXV0aC8nOy8v5o6I5p2D57uR5a6a77yM55So5oi355m75b2VMVxuY29uc3QgVE9LUk4gPSBPUklHSU5fTkFNRSArICcvdWFhL29hdXRoL3Rva2VuPyc7Ly/ojrflj5Z0b2tlblxuXG5cbmNvbnN0IGFwaSA9IHtcbiAgICBTRUNSRVQ6IFwiYkdsNkxYTm9iM0F0YjNkdVpYSTZjMlZqY21WMFwiLCAvL2Jhc2U2NOWKoOWvhmxpei1zaG9wLW93bmVyOnNlY3JldFxuICAgIEFQUF9JRDogJ3d4NTBkMTI4MjM5ZTQxM2ZlMCcsIC8vQVBQSURcbiAgICBhdXRoTG9naW46IFVTRVJfTE9HSU4gKyAnd2R3ZC9sb2FkVXNlckF1dGhvcml6ZVdlY2hhdCcsIC8v6I635Y+WdW5pb25pZFxuICAgIGdldFRva2VuOiBPUklHSU5fTkFNRSArICcvYmFzaXMtYXBpL25vYXV0aC91c2VybWdtdC9sb2dpblNob3BPd25lcicsIC8v5Y2W5a626I635Y+WdG9rZW5cbiAgICAvLyBnZXRUb2tlbjogT1JJR0lOX05BTUUgKyAnL2Jhc2lzLWFwaS9ub2F1dGgvdXNlcm1nbXQvdjIvbG9naW5TaG9wT3duZXInLCAvL+WNluWutuiOt+WPlnRva2VuXG4gICAgZ2V0VG9rZW5DOiBUT0tSTiArICdncmFudF90eXBlPXBhc3N3b3JkJnBhc3N3b3JkPSZ1c2VybmFtZT0nLCAvL+S5sOWutuiOt+WPlnRva2VuXG4gICAgcmVmcmVzaFRva2VuOiBUT0tSTiArICdncmFudF90eXBlPXJlZnJlc2hfdG9rZW4mcmVmcmVzaF90b2tlbj0nLCAvL+WIt+aWsHRva2VuXG5cbiAgICBnZXRQaG9uZUNvZGU6IE9SSUdJTl9OQU1FICsgJy9iYXNpcy1hcGkvbm9hdXRoL3VzZXJtZ210L3NlbmRQaG9uZUNvZGU/X3RlbXBsYXRlQ29kZT1TSE9QX09XTkVSX1ZDT0RFX01TRyZfcGhvbmU9JywvL+iOt+WPluaJi+acuuWPt+eggWNvZGVcbiAgICBjb2RlWUFOOiBPUklHSU5fTkFNRSArICcvYmFzaXMtYXBpL25vYXV0aC91c2VybWdtdC9jaGVja1Bob25lQ29kZScsLy/pqozor4HmiYvmnLrlj7fnoIFcblxuICAgIGdldFNtYWxsUHJvOiBPUklHSU5fTkFNRSArICcvYmFzaXMtYXBpL25vYXV0aC9vYXV0aC9sb2dpbi9zbWFsbHBybycsLy/ojrflj5ZvcHBlbmlkXG5cbiAgICB1cGxvYWRJbWc6IE9SSUdJTl9OQU1FICsgJy9ncmlkZnMtYXBpL25vYXV0aC9tZWRpYScsLy/kuIrkvKDlm77niYdcblxuICAgIGFwcGx5OiBPUklHSU5fTkFNRSArICcvYmFzaXMtYXBpL25vYXV0aC91c2VybWdtdC9hcHBseVNob3BPd25lcldoaXRlTGlzdCcsLy/nlLPor7flhaXpqbtcbiAgICBxdWVyeVNob3BPd25lcldoaXRlTGlzdDogT1JJR0lOX05BTUUgKyAnL2Jhc2lzLWFwaS9ub2F1dGgvdXNlcm1nbXQvcXVlcnlTaG9wT3duZXJXaGl0ZUxpc3QvJywvL+WIpOaWreaYr+WQpuWFpempu+eUs+ivt1xuXG4gICAgY3JlYXRlUHJvZHVjdDogT1JJR0lOX05BTUUgKyAnL2UtZ29vZHMtYXBpL2F1dGhzZWMvbWluaXByb2dyYW0vcHJvZHVjdCcsLy/liJvlu7rnp5LmnYDllYblk4FcbiAgICBjcmVhdGVCYXJnYWluOiBPUklHSU5fTkFNRSArICcvZS1nb29kcy1hcGkvYXV0aHNlYy9taW5pcHJvZ3JhbS9iYXJnYWluL3Byb2R1Y3QnLC8v5Yib5bu656CN5Lu35ZWG5ZOBXG4gICAgZ2V0R29vZERldGFpbDogT1JJR0lOX05BTUUgKyAnL2UtZ29vZHMtYXBpL25vYXV0aC9taW5pcHJvZ3JhbS9nb29kL2JyaWVmP2dvb2RJZD0nLC8v5ZWG5ZOB6K+m57uG5L+h5oGvXG4gICAgZ2V0UHJvZHVjdExpc3Q6IE9SSUdJTl9OQU1FICsgJy9lLWdvb2RzLWFwaS9hdXRoc2VjL21pbmlwcm9ncmFtL2dvb2RzJywvL+iOt+WPluWVhuWTgeWIl+ihqCBwb3N0XG4gICAgc3RvcEFjdGl2aXR5OiBPUklHSU5fTkFNRSArICcvZS1nb29kcy1hcGkvYXV0aHNlYy9taW5pcHJvZ3JhbS9yZW1vdmVzaG9wLycsLy/nu4jmraLmtLvliqggcHV0XG4gICAgZ2V0T3JkZXJzTGlzdDogT1JJR0lOX05BTUUgKyAnL2Utb3JkZXItYXBpL2F1dGhzZWMvbWluaUFwcC9vcmRlcmFwaS9zdXBwbGllci9vcmRlcnMnLC8v6I635Y+W6K6i5Y2V5YiX6KGoXG5cbiAgICBnZXRTaG9wTWVzc2FnZTogT1JJR0lOX05BTUUgKyAnL2UtZ29vZHMtYXBpL2F1dGhzZWMvbWluaXByb2dyYW0vdGVuYW50L2FkZHJlc3MnLC8v6I635Y+W5Zyw5Z2A5bqX6ZO6XG5cbiAgICBnZXRHb29kSW5mbzogT1JJR0lOX05BTUUgKyAnL2UtZ29vZHMtYXBpL25vYXV0aC9taW5pcHJvZ3JhbS9nb29kL2JyaWVmJywvL+iOt+WPluWVhuWTgeS/oeaBryBnZXRcbiAgICBnZXRTa3VJbmZvOiBPUklHSU5fTkFNRSArICcvZS1nb29kcy1hcGkvbm9hdXRoL3RlbmFudC9nb29kLycsLy/ojrflj5Zza3VJbmZvXG4gICAgLy8gc3VibWl0T3JkZXI6IE9SSUdJTl9OQU1FICsgJy9lLXB1cmNoYXNlLWFwaS9hdXRoc2VjL2dvb2RzL21pbmlhcHAvc3VibWl0L2J1eScsLy/llYblk4Hmj5DkuqTotK3kubBcbiAgICBzdWJtaXRPcmRlcjogT1JJR0lOX05BTUUgKyAnL2UtcHVyY2hhc2UtYXBpL2F1dGhzZWMvZ29vZHMvbWluaWFwcC9zdWJtaXQvYnV5YW5kcGF5JywvL+WVhuWTgeaPkOS6pOi0reS5sFxuICAgIGJhcmdhaW5TdWJtaXQ6IE9SSUdJTl9OQU1FICsgJy9lLXB1cmNoYXNlLWFwaS9hdXRoc2VjL2dvb2RzL21pbmlhcHAvYmFyZ2Fpbi9zdWJtaXQvYnV5YW5kcGF5JywvL+egjeS7t+i0reS5sFxuICAgIHN1Ym1pdFBheW1lbnQ6IE9SSUdJTl9OQU1FICsgJy9tYXJrZXRwbGFjZXVpL2F1dGhzZWMvcGF5bWVudC9wcmVQYXltZW50L3Byb2dyYW0nLC8v5bCP56iL5bqP5Y+R6LW36aKE5pSv5LuYXG4gICAgYm9va0dvb2Q6IE9SSUdJTl9OQU1FICsgJy9lLWdvb2RzLWFwaS9hdXRoc2VjL21pbmlwcm9ncmFtL25vdGljZS9nb29kJywvL+iuoumYheWVhuWTgVxuXG4gICAgd2l0aERyYXdQYXk6IE9SSUdJTl9OQU1FICsgJy90ZW5hbnRhZG1pbi1hcGkvYXV0aHNlYy9hY2NvdW50dGhpcmQvY3JlYXRlV2l0aERyYXcvcGF5JywvL+aPkOeOsFxuICAgIGxvYWRBY2NvdW50SW5mbzogT1JJR0lOX05BTUUgKyAnL3RlbmFudGFkbWluLWFwaS9hdXRoc2VjL2FjY291bnQvbG9hZEFjY291bnRJbmZvJywvL+i1hOmHkea1geawtFxuICAgIHRlbXBsYXRlTmV3czogT1JJR0lOX05BTUUgKyAnL2Jhc2lzLWFwaS9hdXRoc2VjL29hdXRoL3VzZXIvZm9ybUlkJywvL+Wwj+eoi+W6j+aOqOmAgeaooeadv+a2iOaBryBhdXRoc2VjXG4gICAgdGVtcGxhdGVOZXc6IE9SSUdJTl9OQU1FICsgJy9iYXNpcy1hcGkvbm9hdXRoL29hdXRoL3VzZXIvZm9ybUlkJywvL+Wwj+eoi+W6j+aOqOmAgeaooeadv+a2iOaBryBhdXRoc2VjXG5cbiAgICBsb25nVG9zaG9ydDogT1JJR0lOX05BTUUgKyAnL2UtZ29vZHMtYXBpL25vYXV0aC9zdXBwb3J0L2xvbmdUb3Nob3J0P3R5cGU9MCZsb25nSWQ9JywvL+mVv+i9rOefrVxuICAgIHNob3J0VG9sb25nOiBPUklHSU5fTkFNRSArICcvZS1nb29kcy1hcGkvbm9hdXRoL3N1cHBvcnQvc2hvcnRUb2xvbmc/c2hvcnRJZD0nLC8v55+t6L2s6ZW/XG5cbiAgICB3ZUNoYXRObzogT1JJR0lOX05BTUUgKyAnL2UtZ29vZHMtYXBpL2F1dGhzZWMvbWluaXByb2dyYW0vdXNlci93ZWNoYXRubycsLy/ojrflj5blvq7kv6Hlj7dcbiAgICBmdWxmaWxsbWVudDogT1JJR0lOX05BTUUgKyAnL2Utb3JkZXItYXBpL2F1dGhzZWMvZnVsZmlsbG1lbnQvbWluaUFwcC90aWNrZXQnLC8v5LiK5Lyg5Zu+54mHXG5cbiAgICBnZXRPcmRlckltZzogT1JJR0lOX05BTUUgKyAnL2Utb3JkZXItYXBpL2F1dGhzZWMvZnVsZmlsbG1lbnQvbWluaUFwcC9vcmRlci8nLC8v5p+l6K6i5Y2V5Zu+54mHXG5cbiAgICB3ZXh4SW1nOiBPUklHSU5fTkFNRSArICcvYmFzaXMtYXBpL25vYXV0aC9wcm9ncmFtL3FyY29kZT9hcHBJZD13eDVkY2ZhYWQzNjc3N2U2MWQmcGFnZT1wYWdlcy9idXllci9zZWNLaWxsL2luZGV4JnNjZW5lPScsLy/lsI/nqIvluo/noIFcblxuICAgIGJhcmdhaW5Qcm9kdWN0Tm9hdXRoOiBPUklHSU5fTkFNRSArICcvZS1wdXJjaGFzZS1hcGkvbm9hdXRoL2dvb2RzL21pbmlhcHAvYmFyZ2Fpbi9wcm9kdWN0JywvL+egjeS7t+WVhuWTgemdnumJtOadg1xuICAgIGJhcmdhaW5Qcm9kdWN0QXV0aHNlYzogT1JJR0lOX05BTUUgKyAnL2UtcHVyY2hhc2UtYXBpL2F1dGhzZWMvZ29vZHMvbWluaWFwcC9iYXJnYWluL3Byb2R1Y3QnLC8v56CN5Lu35ZWG5ZOB6Ym05p2DXG5cbiAgICBsYXVuY2hCYXJnYWluOiBPUklHSU5fTkFNRSArICcvZS1wdXJjaGFzZS1hcGkvYXV0aHNlYy9nb29kcy9taW5pYXBwL2JhcmdhaW4nLC8v5Y+R6LW356CN5Lu3XG4gICAgaGVscEJhcmdhaW46IE9SSUdJTl9OQU1FICsgJy9lLXB1cmNoYXNlLWFwaS9hdXRoc2VjL2dvb2RzL21pbmlhcHAvaGVscC9iYXJnYWluP2JhcmdhaW5CdXlJZD0nLC8v5biu56CNXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFwaTsiXX0=