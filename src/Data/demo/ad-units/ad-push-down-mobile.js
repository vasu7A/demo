(function(){

    var desktopTag= "<div id='id3120'><script src='https://adserver.bidsxchange.com/?id=3120&adSlot=id3120'></script></div>"
    var mobileTag = "<div id='id3118'><script src='https://adserver.bidsxchange.com/?id=3118&adSlot=id3118'></script></div>"

    console.log("Push Down 1.0");

    
    var deviceType = "desktop";
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        deviceType = "mobile"
    }

    var mobileCloseButtonPosition = "left";

    var mobileAdDimensions = [300, 50];

    console.log("Mobile dimensions: ", mobileAdDimensions);

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

        
            console.log("Mobile");

            var div = document.createElement('div');
            div.style.height = mobileAdDimensions[1] + "px";
            div.style.width = mobileAdDimensions[0] + "px";
            div.style.border = "thin black solid";
            div.style.cursor = "pointer";
            div.style.transition = "0.3s height ease-in";
            div.style.zIndex = "999"
            document.getElementById('pushdown').appendChild(div);
            var image = document.createElement('img');
            image.src = '/demo/images/170.jpg'
            image.style.transition = "0.3s height ease-in";
            console.log(image);

            var closeButton = document.createElement('img');
            closeButton.src = "/demo/images/close-icon.svg";
            closeButton.style.height = "15px";
            closeButton.style.width = "15px";
            closeButton.style.float = mobileCloseButtonPosition;
            closeButton.style.cursor = "pointer";
            closeButton.style.display = "block";
            closeButton.style.position = "relative";
            closeButton.style.top = "-260px"
            console.log("BBB:", typeof(mobileAdDimensions[1]));

            setInterval(function(){
                div.style.height = "250px";
                iframe.style.height = "250px";
                closeButton.style.display = "block";
                console.log("OVER");
                setTimeout(function(){
                    div.style.height = mobileAdDimensions[1]+"px";
                    iframe.style.height = mobileAdDimensions[1]+"px";
                    closeButton.style.display = "block";
                    image.style.display = "block"
                    console.log("LEAVE");
                }, 5000);
            }, 10000);

            closeButton.onclick = function(){
                div.onmouseover = null
                div.style.height = mobileAdDimensions[1]+"px";
                iframe.style.height = mobileAdDimensions[1]+"px";
                closeButton.style.display = "block";
                console.log("CLOSE");
            }

            var iframe = document.createElement('iframe');
            iframe.setAttribute('width',mobileAdDimensions[0]+'px');
            iframe.setAttribute('height',mobileAdDimensions[1]+'px');
            iframe.setAttribute('src', 'about:blank');
            iframe.setAttribute('frameborder',0);
            iframe.setAttribute('scrolling','no');
            iframe.style.transition = "0.3s height ease-in";
            div.appendChild(iframe);
            div.appendChild(closeButton);

            var iframeWindow = iframe.contentWindow || iframe.contentDocument.document || iframe.contentDocument;
            iframeWindow.document.open();
            var content="<!doctype html><html><head><meta http-equiv='Content-Type' content='text/html; charset=utf-8' /></head><body topmargin='0' leftmargin='0' marginwidth='0' marginheight='0' style='overflow:hidden;'>";
            content+=mobileTag;
            content+="</body></html>";
            iframeWindow.document.write(content);
            iframeWindow.document.close();
        
    }

    getTargetElement();
    insertAd();

})();