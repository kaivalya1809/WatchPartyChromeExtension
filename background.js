const socket = new WebSocket('ws://localhost:3000');

socket.addEventListener('open', function (event) {
    console.log('Connected to WS Server');
});
socket.addEventListener('message', function (event) {
    console.log(event);
    chrome.tabs.query({active:true,},function(tabs)
        {
            var response = chrome.tabs.sendMessage(tabs[0].id,{pathid:"background to content"});
                    
        })
}); 


chrome.runtime.onMessage.addListener(function(request,sender,sendResponse)
    {

        
        socket.send("brave to chrome");
        console.log("on click brave");
        sendResponse({pathid:"response from bg to popup"});
        chrome.tabs.query({active:true},function(tabs)
        {
            var response = chrome.tabs.sendMessage(tabs[0].id,{pathid:"background to content"});

        })

    })


