// @input float initialValue = 0.5
// @input Component.ScriptComponent colorPickerScript
// @input Asset.RemoteServiceModule rsm
// @input Component.Text t
// @input Component.Text tDate;
// @input float number = 0;
// @input  bool updated = false;

// This function takes the slider value and returns a date offset
// ranging from five years ago to fifteen minutes ago.
function sliderToDate(sliderVal) {
    const fiveYearsAgo = 60*60*24*365*5*1000;
    const fifteenMinsAgo = 15*60*1000;
    offset = sliderVal * (fiveYearsAgo-fifteenMinsAgo) + fifteenMinsAgo
    return(offset)
}

// Handles API responses, checking for errors and success
function handleAPIResponse(response, cb) {
    if (response.statusCode !== 1) {
        print("ERROR: The API call did not succeed!. Please check your request");
        cb(true);
    } else {
        try {
            var parsedBody = JSON.parse(response.body);
            if (cb) {
                cb(false, parsedBody);
            }
        } catch (e) {
            print("ERROR: Failed to parse response");
            if (cb) {
                cb(true);
            }
        }
    }
}

// Gets bar data from Alpaca according to params
var getBars = function(symbol, start, end, limit, page_token, timeframe, adjustment, cb) {
    var request = global.RemoteApiRequest.create();
    request.endpoint = "get_bars";
    request.parameters = {"symbol": symbol, "start": start, "end": end, "limit": limit, "page_token": page_token, "timeframe": timeframe, "adjustment": adjustment};
    script.rsm.performApiRequest(request, function(response) {
        if (cb) {
            handleAPIResponse(response, cb);
        }
    });
};

// This function will update the textbox according to $TLSA's high at the given date
function updateTeslaPrice(sliderVal) {
//    print(sliderVal)
    // Alpaca API requires calls to be 15 minutes ago or more
    var offset = sliderToDate(sliderVal)
    var dateOfStockPrice = new Date();

    dateOfStockPrice = new Date(dateOfStockPrice.getTime() - offset);
    var sevenDaysAgo = 60*60*24*7*1000;
    var oneWeekAgo = new Date(dateOfStockPrice.getTime() - sevenDaysAgo);
    
    // Gets the bars for a whole week even though we only need one bar. Change later
    getBars(symbol, oneWeekAgo.toISOString(), dateOfStockPrice.toISOString(), undefined, undefined, "1Hour", "all", function(err, body) {
        if (err) {
            print("ERROR: API did not return correctly");
        } else {
            last_idx = body.bars.length - 1
            barsObject = JSON.stringify(body.bars[last_idx]);
            highPrice = body.bars[last_idx].h.toFixed(2);
            //updates values for instantiating
            global.number = highPrice;
            global.updated = true;
            
            script.t.text = "#TSLA = $" + String(highPrice);
            script.tDate.text = String(oneWeekAgo).slice(4, -24);
            
            // Read about the parsed bodys data here https://alpaca.markets/docs/api-documentation/api-v2/market-data/alpaca-data-api-v2/historical/#bars
        } 
    });
}

var symbol = "TSLA"

script.colorPickerScript.api.addCallback("onSliderValueChanged", updateTeslaPrice);

updateTeslaPrice(script.initialValue);
script.colorPickerScript.api.setSliderValue(script.initialValue);

