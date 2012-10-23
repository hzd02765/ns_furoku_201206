self.addEventListener("message", function(evt){
    postMessage("Workerが受け取ったメッセージは「" + evt.data + "」です");
}, false);