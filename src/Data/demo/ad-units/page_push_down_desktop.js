(function(){

    console.log("1.5");

    var deviceType = "desktop";

    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        deviceType = "mobile"
    }

    var desktopAdSize = "728x90"
    var mobileAdSize = "300x250"

    var desktop_close_button_position = "left";
    var mobile_close_button_position = "left";

    var desktopAdDimensions = desktopAdSize.split("x");
    var mobileAdDimensions = mobileAdSize.split("x");

    // var desktopTag = "/kaushal/pushdown/170.jpg";
    // var mobileTag = "<div id='id1830'><script src='https://adserver.bidsxchange.com/?id=1830&adSlot=id1830'></script></div>";

    // var desktopTag= "<div id='id3120'><script src='https://adserver.bidsxchange.com/?id=3120&adSlot=id3120'></script></div>"
    var desktopTag = "<script async src='https://securepubads.g.doubleclick.net/tag/js/gpt.js'></script><div id='gpt-passback'><script>window.googletag = window.googletag || {cmd: []};googletag.cmd.push(function() {googletag.defineSlot('/21710144538/Pushdown-728x90', [728, 90], 'gpt-passback').addService(googletag.pubads()).setClickUrl('%%CLICK_URL_UNESC%%');googletag.pubads().set('page_url', 'streamlyn.com');googletag.enableServices();googletag.display('gpt-passback');});</script></div>";
    var mobileTag = "<div id='id3118'><script src='https://adserver.bidsxchange.com/?id=3118&adSlot=id3118'></script></div>"


    var targetElement = null;

    function getTargetElement(){
        var allImages = window.top.document.getElementsByTagName('img');
        var allImagesLength = allImages.length;
        for(var i = 0; i < allImagesLength; i++){
            if(allImages[i].width > 500 && allImages[i].height > 300){
                targetElement = allImages[i];
                break;
            }
        }
    }

    function insertAd(){

            var div = document.createElement('div');
            div.style.display = "none"
            div.style.height = 0+"px"
            div.style.width = desktopAdDimensions[0] + "px";
            div.style.border = "thin black solid";
            div.style.cursor = "pointer";
            div.style.transition = "transform 1s ease, top 1s ease";
            // div.style.transform = "scaleY(0.4)"
            div.style.transformOrigin = "top center"
            div.style.marginLeft = (window.innerWidth - desktopAdDimensions[0])/2 + "px";
            div.style.zIndex = "0";
            document.body.prepend(div);

            var closeButton = document.createElement('img');
            div.appendChild(closeButton);
            closeButton.src = "images/cancel.svg";
            closeButton.style.height = "20px";
            closeButton.style.width = "20px";
            closeButton.style.float = desktop_close_button_position;
            closeButton.style.cursor = "pointer";
            closeButton.style.position="relative";
            closeButton.onclick = function(){
                setInterval(() => {
                    if(div.offsetHeight > 5){
                        div.style.height = (div.offsetHeight-5)+"px"
                    }else{
                        div.style.display = "none"
                        clearInterval(close);
                        console.log("close clear");
                        div.remove();
                    }
                }, 20);
            };

            var iframe = document.createElement('iframe');
            iframe.setAttribute('width',desktopAdDimensions[0]+'px');
            iframe.setAttribute('height',desktopAdDimensions[1]+'px');
            iframe.setAttribute('src', 'about:blank');
            iframe.setAttribute('frameborder',0);
            iframe.setAttribute('scrolling','no');
            iframe.style.transition = "1s height ease-in";
            iframe.style.marginTop = "-20px"

            div.appendChild(iframe);

            var iframeWindow = iframe.contentWindow || iframe.contentDocument.document || iframe.contentDocument;
            iframeWindow.document.open();
            var content="<!doctype html><html><head><meta http-equiv='Content-Type' content='text/html; charset=utf-8' /></head><body topmargin='0' leftmargin='0' marginwidth='0' marginheight='0' style='overflow:hidden;'>";
            content+=desktopTag;
            content+="</body></html>";
            iframeWindow.document.write(content);
            iframeWindow.document.close();

            setTimeout(() => {
                var open = setInterval(() => {
                    if(div.offsetHeight < desktopAdDimensions[1]){
                        div.style.display = "block"
                        div.style.height = (div.offsetHeight+5)+"px"
                    }else{
                        clearInterval(open);                
                    }
                }, 20);
            }, 2000);

        
    }

    getTargetElement();
    insertAd();

})();