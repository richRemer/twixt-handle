twixt-handle Function
=====================

```js
var doc = require("twixt-document"),
    handle = require("twixt-handle");

doc(function(document) {
    handle(document.getElementById("action"), "click", function(evt) {
        evt.stopPropagation();
        evt.preventDefault();
        alert("clicked");
    });
});

