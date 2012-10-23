self.addEventListener("message", function(evt){
    var x = evt.data * 5;
    postMessage(x);
}, false);