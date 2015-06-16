function outputPrice(stockCode){
    var halfUrl = 'http://hq.sinajs.cn/list=';
    var marketMark;
    if (stockCode.slice(0,2) === '60'){
        marketMark = 'sh';
    }
    else {
        marketMark = 'sz';
    }
    var fullUrl = halfUrl + marketMark + stockCode;
    return fullUrl;
}

$(document).ready(function(){
    localStorage.setItem('sgStocks', ['600449', '000538'])
    var curStocks = localStorage.getItem('sgStocks');
    if (!curStocks){
        $('#favStockInfo').html('You did not choose any stocks.');
    }
    else {
        var tempStocks = curStocks.split(',');
        for (var i = 0; i < tempStocks.length; i++){
            var thisStockUrl = outputPrice(tempStocks[i]);
            console
            $('#favStockInfo').append('<p>' + thisStockUrl + '</p>');
        }
    }
    outputPrice('000374');
});
