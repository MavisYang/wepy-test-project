'use strict';

function wxPromisify(fn) {
    // fn 方法 wx.request
    return function () {
        var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        return new Promise(function (resolve, reject) {
            obj.success = function (res) {
                //成功
                wx.hideToast();
                // console.log('→返回数据：'+ res.data)
                console.log('→end');
                resolve(res);
            };
            obj.fail = function (res) {
                //失败
                console.log('→请求失败：' + JSON.stringify(res));
                console.log('→end');
                wx.hideToast();
                reject(res);
            };
            fn(obj);
        });
    };
}
//无论promise对象最后状态如何都会执行
Promise.prototype.finally = function (callback) {
    var P = this.constructor;
    return this.then(function (value) {
        return P.resolve(callback()).then(function () {
            return value;
        });
    }, function (reason) {
        return P.resolve(callback()).then(function () {
            throw reason;
        });
    });
};

/**
 * 微信请求，以是否有token传入判断是否走鉴权
 */

function wxRequest(url, token, data, type) {
    var datas = JSON.stringify(data);
    wx.showToast({
        title: '加载中',
        icon: 'loading',
        duration: 10000
    });
    var wxtRequest = wxPromisify(wx.request); //进行请求
    var header = {
        'Content-Type': 'application/json;charset=UTF-8'
    };
    if (token) {
        header = {
            'Content-Type': 'application/json;charset=UTF-8',
            "Authorization": token.type + ' ' + token.value //base64加密liz-youli-wx:secret
        };
    }
    return wxtRequest({
        url: url,
        method: type,
        data: datas,
        dataType: 'json',
        header: header
    });
}

module.exports = {
    fetch: wxRequest
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInd4UmVxdWVzdC5qcyJdLCJuYW1lcyI6WyJ3eFByb21pc2lmeSIsImZuIiwib2JqIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzdWNjZXNzIiwicmVzIiwid3giLCJoaWRlVG9hc3QiLCJjb25zb2xlIiwibG9nIiwiZmFpbCIsIkpTT04iLCJzdHJpbmdpZnkiLCJwcm90b3R5cGUiLCJmaW5hbGx5IiwiY2FsbGJhY2siLCJQIiwiY29uc3RydWN0b3IiLCJ0aGVuIiwidmFsdWUiLCJyZWFzb24iLCJ3eFJlcXVlc3QiLCJ1cmwiLCJ0b2tlbiIsImRhdGEiLCJ0eXBlIiwiZGF0YXMiLCJzaG93VG9hc3QiLCJ0aXRsZSIsImljb24iLCJkdXJhdGlvbiIsInd4dFJlcXVlc3QiLCJyZXF1ZXN0IiwiaGVhZGVyIiwibWV0aG9kIiwiZGF0YVR5cGUiLCJtb2R1bGUiLCJleHBvcnRzIiwiZmV0Y2giXSwibWFwcGluZ3MiOiI7O0FBQUEsU0FBU0EsV0FBVCxDQUFxQkMsRUFBckIsRUFBeUI7QUFDckI7QUFDQSxXQUFPLFlBQWtCO0FBQUEsWUFBUkMsR0FBUSx1RUFBSixFQUFJOztBQUNyQixlQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBbUI7QUFDbENILGdCQUFJSSxPQUFKLEdBQWMsVUFBU0MsR0FBVCxFQUFjO0FBQ3hCO0FBQ0FDLG1CQUFHQyxTQUFIO0FBQ0E7QUFDQUMsd0JBQVFDLEdBQVIsQ0FBWSxNQUFaO0FBQ0FQLHdCQUFRRyxHQUFSO0FBQ0gsYUFORDtBQU9BTCxnQkFBSVUsSUFBSixHQUFTLFVBQVVMLEdBQVYsRUFBZTtBQUNwQjtBQUNBRyx3QkFBUUMsR0FBUixDQUFZLFdBQVdFLEtBQUtDLFNBQUwsQ0FBZVAsR0FBZixDQUF2QjtBQUNBRyx3QkFBUUMsR0FBUixDQUFZLE1BQVo7QUFDQUgsbUJBQUdDLFNBQUg7QUFDQUosdUJBQU9FLEdBQVA7QUFDSCxhQU5EO0FBT0FOLGVBQUdDLEdBQUg7QUFDSCxTQWhCTSxDQUFQO0FBaUJILEtBbEJEO0FBbUJIO0FBQ0Q7QUFDQUMsUUFBUVksU0FBUixDQUFrQkMsT0FBbEIsR0FBNEIsVUFBVUMsUUFBVixFQUFvQjtBQUM1QyxRQUFJQyxJQUFJLEtBQUtDLFdBQWI7QUFDQSxXQUFPLEtBQUtDLElBQUwsQ0FDSDtBQUFBLGVBQVNGLEVBQUVkLE9BQUYsQ0FBVWEsVUFBVixFQUFzQkcsSUFBdEIsQ0FBMkI7QUFBQSxtQkFBTUMsS0FBTjtBQUFBLFNBQTNCLENBQVQ7QUFBQSxLQURHLEVBRUg7QUFBQSxlQUFVSCxFQUFFZCxPQUFGLENBQVVhLFVBQVYsRUFBc0JHLElBQXRCLENBQTJCLFlBQU07QUFBRSxrQkFBTUUsTUFBTjtBQUFjLFNBQWpELENBQVY7QUFBQSxLQUZHLENBQVA7QUFJSCxDQU5EOztBQVFBOzs7O0FBSUMsU0FBU0MsU0FBVCxDQUFtQkMsR0FBbkIsRUFBdUJDLEtBQXZCLEVBQTZCQyxJQUE3QixFQUFrQ0MsSUFBbEMsRUFBd0M7QUFDcEMsUUFBSUMsUUFBUWYsS0FBS0MsU0FBTCxDQUFlWSxJQUFmLENBQVo7QUFDQWxCLE9BQUdxQixTQUFILENBQWE7QUFDVEMsZUFBTSxLQURHO0FBRVRDLGNBQU0sU0FGRztBQUdUQyxrQkFBVTtBQUhELEtBQWI7QUFLQSxRQUFJQyxhQUFhakMsWUFBWVEsR0FBRzBCLE9BQWYsQ0FBakIsQ0FQb0MsQ0FPSztBQUN6QyxRQUFJQyxTQUFTO0FBQ1Qsd0JBQWdCO0FBRFAsS0FBYjtBQUdBLFFBQUlWLEtBQUosRUFBVztBQUNSVSxpQkFBUztBQUNMLDRCQUFnQixnQ0FEWDtBQUVMLDZCQUFpQlYsTUFBTUUsSUFBTixHQUFhLEdBQWIsR0FBbUJGLE1BQU1KLEtBRnJDLENBRTJDO0FBRjNDLFNBQVQ7QUFJSDtBQUNBLFdBQU9ZLFdBQVc7QUFDZFQsYUFBS0EsR0FEUztBQUVkWSxnQkFBUVQsSUFGTTtBQUdkRCxjQUFNRSxLQUhRO0FBSWRTLGtCQUFVLE1BSkk7QUFLZEYsZ0JBQVFBO0FBTE0sS0FBWCxDQUFQO0FBT0g7O0FBRURHLE9BQU9DLE9BQVAsR0FBaUI7QUFDYkMsV0FBTWpCO0FBRE8sQ0FBakIiLCJmaWxlIjoid3hSZXF1ZXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gd3hQcm9taXNpZnkoZm4pIHtcbiAgICAvLyBmbiDmlrnms5Ugd3gucmVxdWVzdFxuICAgIHJldHVybiBmdW5jdGlvbiAob2JqPXt9KSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KT0+e1xuICAgICAgICAgICAgb2JqLnN1Y2Nlc3MgPSBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgICAgICAvL+aIkOWKn1xuICAgICAgICAgICAgICAgIHd4LmhpZGVUb2FzdCgpXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ+KGkui/lOWbnuaVsOaNru+8micrIHJlcy5kYXRhKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfihpJlbmQnKVxuICAgICAgICAgICAgICAgIHJlc29sdmUocmVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9iai5mYWlsPWZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgICAgICAvL+Wksei0pVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfihpLor7fmsYLlpLHotKXvvJonICsgSlNPTi5zdHJpbmdpZnkocmVzKSlcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn4oaSZW5kJylcbiAgICAgICAgICAgICAgICB3eC5oaWRlVG9hc3QoKVxuICAgICAgICAgICAgICAgIHJlamVjdChyZXMpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmbihvYmopXG4gICAgICAgIH0pXG4gICAgfVxufVxuLy/ml6Dorrpwcm9taXNl5a+56LGh5pyA5ZCO54q25oCB5aaC5L2V6YO95Lya5omn6KGMXG5Qcm9taXNlLnByb3RvdHlwZS5maW5hbGx5ID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgbGV0IFAgPSB0aGlzLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiB0aGlzLnRoZW4oXG4gICAgICAgIHZhbHVlID0+IFAucmVzb2x2ZShjYWxsYmFjaygpKS50aGVuKCgpID0+IHZhbHVlKSxcbiAgICAgICAgcmVhc29uID0+IFAucmVzb2x2ZShjYWxsYmFjaygpKS50aGVuKCgpID0+IHsgdGhyb3cgcmVhc29uIH0pXG4gICAgKTtcbn07XG5cbi8qKlxuICog5b6u5L+h6K+35rGC77yM5Lul5piv5ZCm5pyJdG9rZW7kvKDlhaXliKTmlq3mmK/lkKbotbDpibTmnYNcbiAqL1xuXG4gZnVuY3Rpb24gd3hSZXF1ZXN0KHVybCx0b2tlbixkYXRhLHR5cGUpIHtcbiAgICAgdmFyIGRhdGFzID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICB0aXRsZTon5Yqg6L295LitJyxcbiAgICAgICAgIGljb246ICdsb2FkaW5nJyxcbiAgICAgICAgIGR1cmF0aW9uOiAxMDAwMFxuICAgICB9KVxuICAgICB2YXIgd3h0UmVxdWVzdCA9IHd4UHJvbWlzaWZ5KHd4LnJlcXVlc3QpOy8v6L+b6KGM6K+35rGCXG4gICAgIHZhciBoZWFkZXIgPSB7XG4gICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb247Y2hhcnNldD1VVEYtOCdcbiAgICAgfTtcbiAgICAgaWYgKHRva2VuKSB7XG4gICAgICAgIGhlYWRlciA9IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PVVURi04JyxcbiAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiB0b2tlbi50eXBlICsgJyAnICsgdG9rZW4udmFsdWUgLy9iYXNlNjTliqDlr4ZsaXoteW91bGktd3g6c2VjcmV0XG4gICAgICAgIH1cbiAgICB9XG4gICAgIHJldHVybiB3eHRSZXF1ZXN0KHtcbiAgICAgICAgIHVybDogdXJsLFxuICAgICAgICAgbWV0aG9kOiB0eXBlLFxuICAgICAgICAgZGF0YTogZGF0YXMsXG4gICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgICAgaGVhZGVyOiBoZWFkZXJcbiAgICAgfSlcbiB9XG5cbiBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICAgZmV0Y2g6d3hSZXF1ZXN0XG4gfSJdfQ==