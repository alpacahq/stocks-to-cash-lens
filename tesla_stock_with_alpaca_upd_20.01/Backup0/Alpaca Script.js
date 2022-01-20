////@input Asset.RemoteServiceModule rsm
////@input Component.Text t
//
//
//function handleAPIResponse(response, cb) {
//    if (response.statusCode !== 1) {
//        print("ERROR: The API call did not succeed!. Please check your request");
//        cb(true);
//    } else {
//        try {
//            var parsedBody = JSON.parse(response.body);
//            if (cb) {
//                cb(false, parsedBody);
//            }
//        } catch (e) {
//            print("ERROR: Failed to parse response");
//            if (cb) {
//                cb(true);
//            }
//        }
//    }
//}
//
//var getBars = function(symbol, start, end, limit, page_token, timeframe, adjustment, cb) {
//    var request = global.RemoteApiRequest.create();
//    request.endpoint = "get_bars";
//    request.parameters = {"symbol": symbol, "start": start, "end": end, "limit": limit, "page_token": page_token, "timeframe": timeframe, "adjustment": adjustment};
//    script.rsm.performApiRequest(request, function(response) {
//        if (cb) {
//            handleAPIResponse(response, cb);
//        }
//    });
//};
//
//// This function will update the textbox according to $TLSA's high at the given date
//function updateTeslaPrice(sliderDate) {
//    // Alpaca API requires calls to be 15 minutes ago or more
//    var now = new Date();
//    now = new Date(now.getTime() - 30*60*1000);
//    var sevenDaysAgo = 60*60*24*7*1000;
//    var oneWeekAgo = new Date(now.getTime() - sevenDaysAgo);
//    
//    getBars(symbol, oneWeekAgo.toISOString(), now.toISOString(), undefined, undefined, "1Day", undefined, function(err, body) {
//        if (err) {
//            print("ERROR: API did not return correctly");
//        } else {
//            barsObject = JSON.stringify(body.bars[0]);
//            highPrice = body.bars[0].h.toFixed(2);
//            print(barsObject);
//            print(highPrice);
//            script.t.text = "$" + String(highPrice);
//            // Read about the parsed bodys data here https://alpaca.markets/docs/api-documentation/api-v2/market-data/alpaca-data-api-v2/historical/#bars
//        }
//    });
//}
//
//var symbol = "TSLA"
//
//updateTeslaPrice() // Currently hardcoded for TSLA and 1 textbox
//
//