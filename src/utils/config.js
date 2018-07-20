// const URL = 'https://cloud.gemii.cc/lizcloud';//生产环境
// const URL = 'http://dev.gemii.cc:58080/lizcloud'; //开发模式
const URL = 'http://test.gemii.cc:58080/lizcloud' //测试模式
const ORIGIN_NAME = URL + '/api';

const USER_LOGIN = ORIGIN_NAME + '/basis-api/noauth/';//授权绑定，用户登录1
const TOKEN = ORIGIN_NAME + '/uaa/oauth/token?';//获取token

const config = {
    SECRET: "bGl6LXlvdWxpLXd4OnNlY3JldA==", //base64加密liz-youli-wx:secret 栗子集市
    APP_ID: 'wx655b79f74ee85585', //APPID 栗子集市
    authLogin: USER_LOGIN + 'wdwd/loadUserAuthorizeWechat', //获取unionid
    getTokenC: TOKEN + 'grant_type=password&password=&username=', //买家获取token
    refreshToken: TOKEN + 'grant_type=refresh_token&refresh_token=', //刷新token
    api: {
        getToken: '/basis-api/noauth/usermgmt/loginShopOwner', //卖家获取token
        getSmallPro: '/basis-api/noauth/oauth/login/smallpro',//获取oppenid
        uploadImg:  '/gridfs-api/noauth/media',//上传图片

        templateNews: '/basis-api/authsec/oauth/user/formId',//小程序推送模板消息 authsec
        templateNew:  '/basis-api/noauth/oauth/user/formId',//小程序推送模板消息 noauth

        changeSOL: '/e-goods-api/noauth/support/shortTolong?shortId=',//短id转长id
    }
};

for (var key in config.api) {
    config.api[key] = ORIGIN_NAME + config.api[key];
}
export default config;