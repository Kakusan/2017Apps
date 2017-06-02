var storeId = '18';

module.exports = {
    istore: {
        fcmServerKey: 'AIzaSyCa_MXHiw6SS9aqYYJ_VXmTm-_xNRFdl9g'
    },

    store: {
        storeId: storeId,
        storeName: `Store ${storeId}`,
        storeDB: `mongodb://Apps${storeId}:a1234@ilab.csie.io:27017/Apps${storeId}`,
        storeSecret: `store${storeId}`,
        storePath: `/apps${storeId}/istore`,
        storeTopic: `/topics/store${storeId}`,
        istoreJwt: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiY3VzdG9tZXIiLCJpYXQiOjE0OTUyNjMyMjcsImV4cCI6MTUyNjc5OTIyN30.IoFk47eFUTp6lfY_iO6slaubWz02LnL3_oqezZ5tOjo`
    },

    line: {
        channelSecret: '9b6fcbf46379280e69c280bdec031c9b',
        channelAccessToken: 'j+fxUGowLRQFipN2tB+x7pOIDp9Y8J95kdj97ngW+hNujQ6CWnUIZx+6m7FkGBYGzcZpDfmJTrOU/BCb6gpDWhS5iiQE5Vz8DZYTdWfKvl4SHzWuZXYLLDZGlYtL0F/7WTuCHFI2y6wFPQoPH8PONgdB04t89/1O/w1cDnyilFU=',
        lineJwt: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoibGluZSIsImlhdCI6MTQ5NTM3NTIxMywiZXhwIjoxNDk1Mzc1MjEzfQ.qC6d97Kp5GJHQ6Vmaq34ANGVffm-zncf8v9d8P7SAEE'
    },

    url: {
        lineIconUrl: `https://ilab.csie.io/apps${storeId}/istore/public/picture/2017Apps_icon.png`,
        lineUserUrl: `https://ilab.csie.io/apps${storeId}/istore/public/www/index.html#/user`,
        lineDepositUrl: `https://ilab.csie.io/apps${storeId}/istore/account/deposit`,
        lineBuyUrl: `https://ilab.csie.io/apps${storeId}/istore/account/buy`,
        lineProdutsUrl: `https://ilab.csie.io/apps${storeId}/istore/product`
    }
};