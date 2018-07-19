'use strict';

function wxPromisify(fn) {
    return function () {
        var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        return new Promise(function (resolve, reject) {
            obj.success = function (res) {
                //成功
                wx.hideToast();
                console.log('→返回数据：' + JSON.stringify(res.data));
                // console.log('→end')
                resolve(res);
            };
            obj.fail = function (res) {
                //失败
                console.log('→请求失败：' + JSON.stringify(res));
                // console.log('→end')
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

function wxUpLoadFile(url, formData, token) {
    wx.showToast({
        title: '加载中',
        icon: 'loading',
        duration: 10000
    });
    var wxtUpLoadFile = wxPromisify(wx.uploadFile);
    return wxtUpLoadFile({
        url: url,
        name: 'file',
        filePath: formData,
        header: {
            "Authorization": 'Bearer ' + token
        }
    });
}

module.exports = {
    uploadFile: wxUpLoadFile
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwbG9hZEZpbGUuanMiXSwibmFtZXMiOlsid3hQcm9taXNpZnkiLCJmbiIsIm9iaiIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic3VjY2VzcyIsInJlcyIsInd4IiwiaGlkZVRvYXN0IiwiY29uc29sZSIsImxvZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwiZmFpbCIsInByb3RvdHlwZSIsImZpbmFsbHkiLCJjYWxsYmFjayIsIlAiLCJjb25zdHJ1Y3RvciIsInRoZW4iLCJ2YWx1ZSIsInJlYXNvbiIsInd4VXBMb2FkRmlsZSIsInVybCIsImZvcm1EYXRhIiwidG9rZW4iLCJzaG93VG9hc3QiLCJ0aXRsZSIsImljb24iLCJkdXJhdGlvbiIsInd4dFVwTG9hZEZpbGUiLCJ1cGxvYWRGaWxlIiwibmFtZSIsImZpbGVQYXRoIiwiaGVhZGVyIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFDQSxTQUFTQSxXQUFULENBQXFCQyxFQUFyQixFQUF3QjtBQUNwQixXQUFPLFlBQW1CO0FBQUEsWUFBVEMsR0FBUyx1RUFBSCxFQUFHOztBQUN0QixlQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVNDLE1BQVQsRUFBbUI7QUFDbENILGdCQUFJSSxPQUFKLEdBQWMsVUFBU0MsR0FBVCxFQUFhO0FBQ3ZCO0FBQ0FDLG1CQUFHQyxTQUFIO0FBQ0FDLHdCQUFRQyxHQUFSLENBQVksV0FBVUMsS0FBS0MsU0FBTCxDQUFlTixJQUFJTyxJQUFuQixDQUF0QjtBQUNBO0FBQ0FWLHdCQUFRRyxHQUFSO0FBQ0gsYUFORDtBQU9BTCxnQkFBSWEsSUFBSixHQUFXLFVBQVNSLEdBQVQsRUFBYTtBQUNwQjtBQUNBRyx3QkFBUUMsR0FBUixDQUFZLFdBQVVDLEtBQUtDLFNBQUwsQ0FBZU4sR0FBZixDQUF0QjtBQUNBO0FBQ0FDLG1CQUFHQyxTQUFIO0FBQ0FKLHVCQUFPRSxHQUFQO0FBQ0gsYUFORDtBQU9BTixlQUFHQyxHQUFIO0FBQ0gsU0FoQk0sQ0FBUDtBQWlCSCxLQWxCRDtBQW1CSDtBQUNEO0FBQ0FDLFFBQVFhLFNBQVIsQ0FBa0JDLE9BQWxCLEdBQTRCLFVBQVVDLFFBQVYsRUFBb0I7QUFDNUMsUUFBSUMsSUFBSSxLQUFLQyxXQUFiO0FBQ0EsV0FBTyxLQUFLQyxJQUFMLENBQ0w7QUFBQSxlQUFTRixFQUFFZixPQUFGLENBQVVjLFVBQVYsRUFBc0JHLElBQXRCLENBQTJCO0FBQUEsbUJBQU1DLEtBQU47QUFBQSxTQUEzQixDQUFUO0FBQUEsS0FESyxFQUVMO0FBQUEsZUFBVUgsRUFBRWYsT0FBRixDQUFVYyxVQUFWLEVBQXNCRyxJQUF0QixDQUEyQixZQUFNO0FBQUUsa0JBQU1FLE1BQU47QUFBYyxTQUFqRCxDQUFWO0FBQUEsS0FGSyxDQUFQO0FBSUQsQ0FOSDs7QUFTRSxTQUFTQyxZQUFULENBQXVCQyxHQUF2QixFQUEyQkMsUUFBM0IsRUFBb0NDLEtBQXBDLEVBQTBDO0FBQ3hDbkIsT0FBR29CLFNBQUgsQ0FBYTtBQUNUQyxlQUFPLEtBREU7QUFFVEMsY0FBTSxTQUZHO0FBR1RDLGtCQUFVO0FBSEQsS0FBYjtBQUtBLFFBQUlDLGdCQUFnQmhDLFlBQVlRLEdBQUd5QixVQUFmLENBQXBCO0FBQ0EsV0FBT0QsY0FBYztBQUNqQlAsYUFBSUEsR0FEYTtBQUVqQlMsY0FBSyxNQUZZO0FBR2pCQyxrQkFBU1QsUUFIUTtBQUlqQlUsZ0JBQU87QUFDSCw2QkFBaUIsWUFBVVQ7QUFEeEI7QUFKVSxLQUFkLENBQVA7QUFRRDs7QUFFRFUsT0FBT0MsT0FBUCxHQUFpQjtBQUNmTCxnQkFBV1Q7QUFESSxDQUFqQiIsImZpbGUiOiJ1cGxvYWRGaWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5mdW5jdGlvbiB3eFByb21pc2lmeShmbil7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChvYmogPSB7fSl7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpID0+e1xuICAgICAgICAgICAgb2JqLnN1Y2Nlc3MgPSBmdW5jdGlvbihyZXMpe1xuICAgICAgICAgICAgICAgIC8v5oiQ5YqfXG4gICAgICAgICAgICAgICAgd3guaGlkZVRvYXN0KClcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn4oaS6L+U5Zue5pWw5o2u77yaJysgSlNPTi5zdHJpbmdpZnkocmVzLmRhdGEpKVxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCfihpJlbmQnKVxuICAgICAgICAgICAgICAgIHJlc29sdmUocmVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9iai5mYWlsID0gZnVuY3Rpb24ocmVzKXtcbiAgICAgICAgICAgICAgICAvL+Wksei0pVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfihpLor7fmsYLlpLHotKXvvJonKyBKU09OLnN0cmluZ2lmeShyZXMpKVxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCfihpJlbmQnKVxuICAgICAgICAgICAgICAgIHd4LmhpZGVUb2FzdCgpXG4gICAgICAgICAgICAgICAgcmVqZWN0KHJlcylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZuKG9iailcbiAgICAgICAgfSlcbiAgICB9XG59XG4vL+aXoOiuunByb21pc2Xlr7nosaHmnIDlkI7nirbmgIHlpoLkvZXpg73kvJrmiafooYxcblByb21pc2UucHJvdG90eXBlLmZpbmFsbHkgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICBsZXQgUCA9IHRoaXMuY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIHRoaXMudGhlbihcbiAgICAgIHZhbHVlID0+IFAucmVzb2x2ZShjYWxsYmFjaygpKS50aGVuKCgpID0+IHZhbHVlKSxcbiAgICAgIHJlYXNvbiA9PiBQLnJlc29sdmUoY2FsbGJhY2soKSkudGhlbigoKSA9PiB7IHRocm93IHJlYXNvbiB9KVxuICAgICk7XG4gIH07XG5cblxuICBmdW5jdGlvbiB3eFVwTG9hZEZpbGUgKHVybCxmb3JtRGF0YSx0b2tlbil7XG4gICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgdGl0bGU6ICfliqDovb3kuK0nLFxuICAgICAgICBpY29uOiAnbG9hZGluZycsXG4gICAgICAgIGR1cmF0aW9uOiAxMDAwMFxuICAgICAgfSlcbiAgICB2YXIgd3h0VXBMb2FkRmlsZSA9IHd4UHJvbWlzaWZ5KHd4LnVwbG9hZEZpbGUpO1xuICAgIHJldHVybiB3eHRVcExvYWRGaWxlKHtcbiAgICAgICAgdXJsOnVybCxcbiAgICAgICAgbmFtZTonZmlsZScsXG4gICAgICAgIGZpbGVQYXRoOmZvcm1EYXRhLFxuICAgICAgICBoZWFkZXI6e1xuICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6ICdCZWFyZXIgJyt0b2tlbiBcbiAgICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICB1cGxvYWRGaWxlOnd4VXBMb2FkRmlsZVxuIH1cbiJdfQ==