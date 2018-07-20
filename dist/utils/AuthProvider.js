'use strict';

var wxRequest = require('./wxRequest.js');
var API = require('./api.js');

function onLogin() {
    var url = API.getToken + 'unionid_' + wx.getStorageSync('unionId') + '_type_2';
    var token = API.SECRET;

    return wxRequest.fetch(url, { type: "Basic", value: token }, {}, "POST").then(function (res) {
        saveTokens(res.data.access_token, res.data.refresh_token, res.data.expires_in);
        return res.data.access_token;
    }).catch(function (req) {
        callback({ msg: '请求出错', code: 502 });
        return 'error';
    });
}
function setWait() {
    wx.removeStorageSync('access_token');
}
function saveTokens(access_token, refresh_token, expires_in) {
    wx.setStorageSync('access_token', access_token);
    wx.setStorageSync('refresh_token', refresh_token);
    var exp = new Date();
    var expires_ins = exp.getTime() + expires_in * 1000 - 30000;
    wx.setStorageSync('expires_in', expires_ins);
}
function onRefreshToken() {
    setWait();
    var token = API.SECRET;
    var url = API.refreshToken + wx.getStorageSync('refresh_token');
    return wxRequest.fetch(url, { type: 'Basic', value: token }, '', 'POST').then(function (res) {
        if (res.data.access_token) {
            saveTokens(res.data.access_token, res.data.refresh_token, res.data.expires_in);
            return res.data.access_token;
        } else {
            return onLogin().then(function (res) {
                return res;
            });
        }
    }).catch(function (req) {
        if (wx.getStorageSync('refresh_token') != null) {
            return onLogin().then(function (res) {
                return res;
            });
        }
    });
}
function getAccessToken() {
    var date = new Date();
    var dt = date.getTime();
    var expires_in = wx.getStorageSync('expires_in');
    if (!wx.getStorageSync('access_token') || !wx.getStorageSync('expires_in') || !wx.getStorageSync('refresh_token')) {
        return onLogin(), then(function (res) {
            return res;
        });
    } else {
        if ((!expires_in || dt >= expires_in) && wx.getStorageSync('access_token')) {
            return onRefreshToken();
        } else if (!wx.getStorageSync('access_token')) {
            return new Promise(function (resolve, reject) {
                setTimeout(function () {
                    resolve(wx.getStorageSync('access_token'));
                }, 2000);
            });
        } else {
            console.log("555");
            return new Promise(function (resolve, reject) {
                resolve(wx.getStorageSync('access_token'));
            });
        }
    }
}
module.exports = {
    onLogin: onLogin,
    getAccessToken: getAccessToken
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkF1dGhQcm92aWRlci5qcyJdLCJuYW1lcyI6WyJ3eFJlcXVlc3QiLCJyZXF1aXJlIiwiQVBJIiwib25Mb2dpbiIsInVybCIsImdldFRva2VuIiwid3giLCJnZXRTdG9yYWdlU3luYyIsInRva2VuIiwiU0VDUkVUIiwiZmV0Y2giLCJ0eXBlIiwidmFsdWUiLCJ0aGVuIiwicmVzIiwic2F2ZVRva2VucyIsImRhdGEiLCJhY2Nlc3NfdG9rZW4iLCJyZWZyZXNoX3Rva2VuIiwiZXhwaXJlc19pbiIsImNhdGNoIiwicmVxIiwiY2FsbGJhY2siLCJtc2ciLCJjb2RlIiwic2V0V2FpdCIsInJlbW92ZVN0b3JhZ2VTeW5jIiwic2V0U3RvcmFnZVN5bmMiLCJleHAiLCJEYXRlIiwiZXhwaXJlc19pbnMiLCJnZXRUaW1lIiwib25SZWZyZXNoVG9rZW4iLCJyZWZyZXNoVG9rZW4iLCJnZXRBY2Nlc3NUb2tlbiIsImRhdGUiLCJkdCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic2V0VGltZW91dCIsImNvbnNvbGUiLCJsb2ciLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQU1BLFlBQVlDLFFBQVEsYUFBUixDQUFsQjtBQUNBLElBQU1DLE1BQU1ELFFBQVEsT0FBUixDQUFaOztBQUVBLFNBQVNFLE9BQVQsR0FBbUI7QUFDZixRQUFJQyxNQUFNRixJQUFJRyxRQUFKLEdBQWUsVUFBZixHQUE0QkMsR0FBR0MsY0FBSCxDQUFrQixTQUFsQixDQUE1QixHQUEyRCxTQUFyRTtBQUNBLFFBQUlDLFFBQVFOLElBQUlPLE1BQWhCOztBQUdBLFdBQU9ULFVBQVVVLEtBQVYsQ0FBZ0JOLEdBQWhCLEVBQXFCLEVBQUVPLE1BQU0sT0FBUixFQUFpQkMsT0FBT0osS0FBeEIsRUFBckIsRUFBc0QsRUFBdEQsRUFBMEQsTUFBMUQsRUFDTkssSUFETSxDQUNELFVBQUNDLEdBQUQsRUFBUztBQUNYQyxtQkFBV0QsSUFBSUUsSUFBSixDQUFTQyxZQUFwQixFQUFrQ0gsSUFBSUUsSUFBSixDQUFTRSxhQUEzQyxFQUEwREosSUFBSUUsSUFBSixDQUFTRyxVQUFuRTtBQUNBLGVBQU9MLElBQUlFLElBQUosQ0FBU0MsWUFBaEI7QUFDSCxLQUpNLEVBSUpHLEtBSkksQ0FJRSxVQUFDQyxHQUFELEVBQVM7QUFDZEMsaUJBQVMsRUFBRUMsS0FBSyxNQUFQLEVBQWVDLE1BQU0sR0FBckIsRUFBVDtBQUNBLGVBQU8sT0FBUDtBQUNILEtBUE0sQ0FBUDtBQVFIO0FBQ0QsU0FBU0MsT0FBVCxHQUFtQjtBQUNmbkIsT0FBR29CLGlCQUFILENBQXFCLGNBQXJCO0FBQ0g7QUFDRCxTQUFTWCxVQUFULENBQW9CRSxZQUFwQixFQUFrQ0MsYUFBbEMsRUFBaURDLFVBQWpELEVBQTZEO0FBQ3pEYixPQUFHcUIsY0FBSCxDQUFrQixjQUFsQixFQUFrQ1YsWUFBbEM7QUFDQVgsT0FBR3FCLGNBQUgsQ0FBa0IsZUFBbEIsRUFBbUNULGFBQW5DO0FBQ0EsUUFBSVUsTUFBTSxJQUFJQyxJQUFKLEVBQVY7QUFDQSxRQUFJQyxjQUFjRixJQUFJRyxPQUFKLEtBQWdCWixhQUFhLElBQTdCLEdBQW9DLEtBQXREO0FBQ0FiLE9BQUdxQixjQUFILENBQWtCLFlBQWxCLEVBQWdDRyxXQUFoQztBQUNIO0FBQ0QsU0FBU0UsY0FBVCxHQUEwQjtBQUN0QlA7QUFDQSxRQUFJakIsUUFBUU4sSUFBSU8sTUFBaEI7QUFDQSxRQUFJTCxNQUFNRixJQUFJK0IsWUFBSixHQUFtQjNCLEdBQUdDLGNBQUgsQ0FBa0IsZUFBbEIsQ0FBN0I7QUFDQSxXQUFPUCxVQUFVVSxLQUFWLENBQWdCTixHQUFoQixFQUFxQixFQUFFTyxNQUFNLE9BQVIsRUFBaUJDLE9BQU9KLEtBQXhCLEVBQXJCLEVBQXNELEVBQXRELEVBQTBELE1BQTFELEVBQWtFSyxJQUFsRSxDQUF1RSxVQUFDQyxHQUFELEVBQVM7QUFDbkYsWUFBSUEsSUFBSUUsSUFBSixDQUFTQyxZQUFiLEVBQTJCO0FBQ3ZCRix1QkFBV0QsSUFBSUUsSUFBSixDQUFTQyxZQUFwQixFQUFrQ0gsSUFBSUUsSUFBSixDQUFTRSxhQUEzQyxFQUEwREosSUFBSUUsSUFBSixDQUFTRyxVQUFuRTtBQUNBLG1CQUFPTCxJQUFJRSxJQUFKLENBQVNDLFlBQWhCO0FBQ0gsU0FIRCxNQUdPO0FBQ0gsbUJBQU9kLFVBQVVVLElBQVYsQ0FBZSxlQUFPO0FBQ3pCLHVCQUFPQyxHQUFQO0FBQ0gsYUFGTSxDQUFQO0FBR0g7QUFDSixLQVRNLEVBU0pNLEtBVEksQ0FTRSxlQUFPO0FBQ1osWUFBSWQsR0FBR0MsY0FBSCxDQUFrQixlQUFsQixLQUFzQyxJQUExQyxFQUFnRDtBQUM1QyxtQkFBT0osVUFBVVUsSUFBVixDQUFlLGVBQU87QUFDekIsdUJBQU9DLEdBQVA7QUFDSCxhQUZNLENBQVA7QUFHSDtBQUNKLEtBZk0sQ0FBUDtBQWdCSDtBQUNELFNBQVNvQixjQUFULEdBQTBCO0FBQ3RCLFFBQUlDLE9BQU8sSUFBSU4sSUFBSixFQUFYO0FBQ0EsUUFBSU8sS0FBS0QsS0FBS0osT0FBTCxFQUFUO0FBQ0EsUUFBSVosYUFBYWIsR0FBR0MsY0FBSCxDQUFrQixZQUFsQixDQUFqQjtBQUNBLFFBQUcsQ0FBQ0QsR0FBR0MsY0FBSCxDQUFrQixjQUFsQixDQUFELElBQXNDLENBQUNELEdBQUdDLGNBQUgsQ0FBa0IsWUFBbEIsQ0FBdkMsSUFBMEUsQ0FBQ0QsR0FBR0MsY0FBSCxDQUFrQixlQUFsQixDQUE5RSxFQUFpSDtBQUM3RyxlQUFPSixXQUFVVSxLQUFLLGVBQUs7QUFDdkIsbUJBQU9DLEdBQVA7QUFDSCxTQUZnQixDQUFqQjtBQUdILEtBSkQsTUFJTTtBQUNGLFlBQUksQ0FBQyxDQUFDSyxVQUFELElBQWVpQixNQUFNakIsVUFBdEIsS0FBcUNiLEdBQUdDLGNBQUgsQ0FBa0IsY0FBbEIsQ0FBekMsRUFBNEU7QUFDeEUsbUJBQU95QixnQkFBUDtBQUNILFNBRkQsTUFFTyxJQUFJLENBQUMxQixHQUFHQyxjQUFILENBQWtCLGNBQWxCLENBQUwsRUFBd0M7QUFDM0MsbUJBQU8sSUFBSThCLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDcENDLDJCQUFXLFlBQU07QUFDYkYsNEJBQVFoQyxHQUFHQyxjQUFILENBQWtCLGNBQWxCLENBQVI7QUFDSCxpQkFGRCxFQUVHLElBRkg7QUFHSCxhQUpNLENBQVA7QUFLSCxTQU5NLE1BTUE7QUFDSGtDLG9CQUFRQyxHQUFSLENBQVksS0FBWjtBQUNBLG1CQUFPLElBQUlMLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDcENELHdCQUFRaEMsR0FBR0MsY0FBSCxDQUFrQixjQUFsQixDQUFSO0FBQ0gsYUFGTSxDQUFQO0FBR0g7QUFDSjtBQUNKO0FBQ0RvQyxPQUFPQyxPQUFQLEdBQWlCO0FBQ2J6QyxhQUFTQSxPQURJO0FBRWIrQixvQkFBZ0JBO0FBRkgsQ0FBakIiLCJmaWxlIjoiQXV0aFByb3ZpZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgd3hSZXF1ZXN0ID0gcmVxdWlyZSgnLi93eFJlcXVlc3QnKTtcbmNvbnN0IEFQSSA9IHJlcXVpcmUoJy4vYXBpJyk7XG5cbmZ1bmN0aW9uIG9uTG9naW4oKSB7XG4gICAgbGV0IHVybCA9IEFQSS5nZXRUb2tlbiArICd1bmlvbmlkXycgKyB3eC5nZXRTdG9yYWdlU3luYygndW5pb25JZCcpICsgJ190eXBlXzInO1xuICAgIGxldCB0b2tlbiA9IEFQSS5TRUNSRVQ7XG4gICAgXG5cbiAgICByZXR1cm4gd3hSZXF1ZXN0LmZldGNoKHVybCwgeyB0eXBlOiBcIkJhc2ljXCIsIHZhbHVlOiB0b2tlbiB9LCB7fSwgXCJQT1NUXCIpXG4gICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBzYXZlVG9rZW5zKHJlcy5kYXRhLmFjY2Vzc190b2tlbiwgcmVzLmRhdGEucmVmcmVzaF90b2tlbiwgcmVzLmRhdGEuZXhwaXJlc19pbik7XG4gICAgICAgIHJldHVybiByZXMuZGF0YS5hY2Nlc3NfdG9rZW5cbiAgICB9KS5jYXRjaCgocmVxKSA9PiB7XG4gICAgICAgIGNhbGxiYWNrKHsgbXNnOiAn6K+35rGC5Ye66ZSZJywgY29kZTogNTAyIH0pO1xuICAgICAgICByZXR1cm4gJ2Vycm9yJ1xuICAgIH0pXG59XG5mdW5jdGlvbiBzZXRXYWl0KCkge1xuICAgIHd4LnJlbW92ZVN0b3JhZ2VTeW5jKCdhY2Nlc3NfdG9rZW4nKTtcbn1cbmZ1bmN0aW9uIHNhdmVUb2tlbnMoYWNjZXNzX3Rva2VuLCByZWZyZXNoX3Rva2VuLCBleHBpcmVzX2luKSB7XG4gICAgd3guc2V0U3RvcmFnZVN5bmMoJ2FjY2Vzc190b2tlbicsIGFjY2Vzc190b2tlbik7XG4gICAgd3guc2V0U3RvcmFnZVN5bmMoJ3JlZnJlc2hfdG9rZW4nLCByZWZyZXNoX3Rva2VuKTtcbiAgICB2YXIgZXhwID0gbmV3IERhdGUoKTtcbiAgICB2YXIgZXhwaXJlc19pbnMgPSBleHAuZ2V0VGltZSgpICsgZXhwaXJlc19pbiAqIDEwMDAgLSAzMDAwMDtcbiAgICB3eC5zZXRTdG9yYWdlU3luYygnZXhwaXJlc19pbicsIGV4cGlyZXNfaW5zKTtcbn1cbmZ1bmN0aW9uIG9uUmVmcmVzaFRva2VuKCkge1xuICAgIHNldFdhaXQoKTtcbiAgICBsZXQgdG9rZW4gPSBBUEkuU0VDUkVUO1xuICAgIHZhciB1cmwgPSBBUEkucmVmcmVzaFRva2VuICsgd3guZ2V0U3RvcmFnZVN5bmMoJ3JlZnJlc2hfdG9rZW4nKTtcbiAgICByZXR1cm4gd3hSZXF1ZXN0LmZldGNoKHVybCwgeyB0eXBlOiAnQmFzaWMnLCB2YWx1ZTogdG9rZW4gfSwgJycsICdQT1NUJykudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGlmIChyZXMuZGF0YS5hY2Nlc3NfdG9rZW4pIHtcbiAgICAgICAgICAgIHNhdmVUb2tlbnMocmVzLmRhdGEuYWNjZXNzX3Rva2VuLCByZXMuZGF0YS5yZWZyZXNoX3Rva2VuLCByZXMuZGF0YS5leHBpcmVzX2luKTtcbiAgICAgICAgICAgIHJldHVybiByZXMuZGF0YS5hY2Nlc3NfdG9rZW47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gb25Mb2dpbigpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pLmNhdGNoKHJlcSA9PiB7XG4gICAgICAgIGlmICh3eC5nZXRTdG9yYWdlU3luYygncmVmcmVzaF90b2tlbicpICE9IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBvbkxvZ2luKCkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSlcbn1cbmZ1bmN0aW9uIGdldEFjY2Vzc1Rva2VuKCkge1xuICAgIHZhciBkYXRlID0gbmV3IERhdGUoKTtcbiAgICB2YXIgZHQgPSBkYXRlLmdldFRpbWUoKTtcbiAgICB2YXIgZXhwaXJlc19pbiA9IHd4LmdldFN0b3JhZ2VTeW5jKCdleHBpcmVzX2luJyk7XG4gICAgaWYoIXd4LmdldFN0b3JhZ2VTeW5jKCdhY2Nlc3NfdG9rZW4nKSB8fCAhd3guZ2V0U3RvcmFnZVN5bmMoJ2V4cGlyZXNfaW4nKSB8fCAhd3guZ2V0U3RvcmFnZVN5bmMoJ3JlZnJlc2hfdG9rZW4nKSl7XG4gICAgICAgIHJldHVybiBvbkxvZ2luKCksdGhlbihyZXM9PntcbiAgICAgICAgICAgIHJldHVybiByZXNcbiAgICAgICAgfSlcbiAgICB9ZWxzZSB7XG4gICAgICAgIGlmICgoIWV4cGlyZXNfaW4gfHwgZHQgPj0gZXhwaXJlc19pbikgJiYgd3guZ2V0U3RvcmFnZVN5bmMoJ2FjY2Vzc190b2tlbicpKSB7XG4gICAgICAgICAgICByZXR1cm4gb25SZWZyZXNoVG9rZW4oKTtcbiAgICAgICAgfSBlbHNlIGlmICghd3guZ2V0U3RvcmFnZVN5bmMoJ2FjY2Vzc190b2tlbicpKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHd4LmdldFN0b3JhZ2VTeW5jKCdhY2Nlc3NfdG9rZW4nKSlcbiAgICAgICAgICAgICAgICB9LCAyMDAwKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiNTU1XCIpXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIHJlc29sdmUod3guZ2V0U3RvcmFnZVN5bmMoJ2FjY2Vzc190b2tlbicpKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbn1cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIG9uTG9naW46IG9uTG9naW4sXG4gICAgZ2V0QWNjZXNzVG9rZW46IGdldEFjY2Vzc1Rva2VuXG59Il19