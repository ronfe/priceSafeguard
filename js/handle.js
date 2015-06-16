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
    $('#info').html(fullUrl);
}

$(document).ready(function(){
    var curStocks = localStorage.getItem('sgStocks');
    outputPrice('000374');
});
