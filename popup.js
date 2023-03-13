function temp()
{
    console.log("hello popup");
    chrome.runtime.sendMessage({pathid:"popup to background"},function(response)
    {
        console.log(response.pathid);
    })
}

document.getElementById('button').addEventListener('click', temp);

