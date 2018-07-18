// const ORIGIN_NAME = 'https://cloud.gemii.cc/lizcloud/api';//生产环境
const ORIGIN_NAME = 'http://dev.gemii.cc:58080/lizcloud/api'; //开发模式
// const ORIGIN_NAME = 'http://test.gemii.cc:58080/lizcloud/api' //测试模式


const USER_LOGIN = ORIGIN_NAME + '/basis-api/noauth/';//授权绑定，用户登录1
const TOKRN = ORIGIN_NAME + '/uaa/oauth/token?';//获取token

const api ={
    SECRET: "bGl6LXNob3Atb3duZXI6c2VjcmV0", //base64加密liz-shop-owner:secret
    APP_ID: 'wx5dcfaad36777e61d', //APPID
    authLogin: USER_LOGIN + 'wdwd/loadUserAuthorizeWechat', //获取unionid
    getToken: ORIGIN_NAME + '/basis-api/noauth/usermgmt/loginShopOwner', //卖家获取token
    getTokenC: TOKRN + 'grant_type=password&password=&username=', //买家获取token
    refreshToken: TOKRN + 'grant_type=refresh_token&refresh_token=', //刷新token

    getPhoneCode: ORIGIN_NAME + '/basis-api/noauth/usermgmt/sendPhoneCode?_templateCode=SHOP_OWNER_VCODE_MSG&_phone=',//获取手机号码code
    codeYAN: ORIGIN_NAME + '/basis-api/noauth/usermgmt/checkPhoneCode',//验证手机号码

    getSmallPro: ORIGIN_NAME + '/basis-api/noauth/oauth/login/smallpro',//获取oppenid

    uploadImg: ORIGIN_NAME + '/gridfs-api/noauth/media',//上传图片

    testListUrl:'http://ons.me/tools/dropload/json.php'
}

export default api;