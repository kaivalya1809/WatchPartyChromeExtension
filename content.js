


chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    console.log(request.pathid);
    if(request.pathid === "background to content")
    {
        sendResponse("response content to background");
        var v = document.getElementsByTagName("video");
        console.log(v)
        if(v[0].paused)
        {
            v[0].play();
        }
        else
        {
            v[0].pause();
        }
    }
});
