(function(){

    console.log("Push Down 0.3");

    var deviceType = "desktop";

    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        deviceType = "mobile"
    }

    var desktopAdTag = document.getElementById('desktop_ad_tag').value;
    var mobileAdTag = document.getElementById('mobile_ad_tag').value;
    var desktopAdSize = document.getElementById('desktop_ad_size').innerHTML;
    var mobileAdSize = document.getElementById('mobile_ad_size').innerHTML;
    var desktopCloseButtonPosition = document.getElementById('desktop_close_button_position').innerHTML;
    var mobileCloseButtonPosition = document.getElementById('mobile_close_button_position').innerHTML;

    var desktopAdDimensions = desktopAdSize.split("x");
    var mobileAdDimensions = mobileAdSize.split("x");

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

        if(deviceType == "desktop"){
            var div = document.createElement('div');
            div.style.height = desktopAdDimensions[1] + "px";
            div.style.width = desktopAdDimensions[0] + "px";
            div.style.border = "thin black solid";
            div.style.cursor = "pointer";
            div.style.transition = "0.3s height ease-in";
            // div.style.marginLeft = (window.top.innerWidth - desktopAdDimensions[0])/2 + "px";
            div.style.zIndex = "999"
            // div.addEventListener('click', divEventListener, div);
            window.top.document.getElementById('pushdown').appendChild(div);

            var image = document.createElement('img');
            image.src = '/demo/images/170.jpg'
            image.style.transition = "0.3s height ease-in";
            // div.appendChild(image)
            console.log(image);

            var closeButton = document.createElement('img');
            closeButton.src = "/kaushal/pushdown/close-icon.svg";
            closeButton.style.height = "15px";
            closeButton.style.width = "15px";
            closeButton.style.float = desktopCloseButtonPosition;
            closeButton.style.cursor = "pointer";
            closeButton.style.display = "block";
            closeButton.style.position = "relative";
            closeButton.style.top = "-410px"
            console.log("BBB:", typeof(desktopAdDimensions[1]));

            div.onmouseover = function(){
                div.style.height = "400px";
                iframe.style.height = "400px";
                closeButton.style.display = "block";
                console.log("OVER");
                // div.onmouseover = null;
            }

            div.onmouseleave = function(){

                div.style.height = desktopAdDimensions[1]+"px";
                iframe.style.height = desktopAdDimensions[1]+"px";
                closeButton.style.display = "block";
                image.style.display = "block"
                console.log("LEAVE");
                div.onmouseover = function(){
                    div.style.height = "400px";
                    iframe.style.height = "400px";
                    closeButton.style.display = "block";
                    image.style.display = "block"
                    console.log("OVER");
                }

            }

            closeButton.onclick = function(){
                div.onmouseover = null
                div.style.height = desktopAdDimensions[1]+"px";
                iframe.style.height = desktopAdDimensions[1]+"px";
                closeButton.style.display = "block";
                console.log("CLOSE");
            }

            var iframe = document.createElement('iframe');
            iframe.setAttribute('width',desktopAdDimensions[0]+'px');
            iframe.setAttribute('height',desktopAdDimensions[1]+'px');
            iframe.setAttribute('src','/kaushal/pushdown/170.jpg');
            iframe.setAttribute('frameborder',0);
            iframe.setAttribute('scrolling','no');
            iframe.style.transition = "0.3s height ease-in";
            // iframe.style.display = "none"
            // iframe.appendChild(image);
            div.appendChild(iframe);
            div.appendChild(closeButton);
            
            // var iframeWindow = iframe.contentWindow || iframe.contentDocument.document || iframe.contentDocument;
            // iframeWindow.document.open();
            // var content="<!doctype html><html><head><meta http-equiv='Content-Type' content='text/html; charset=utf-8' /></head><body topmargin='0' leftmargin='0' marginwidth='0' marginheight='0' style='overflow:hidden;'>";
            // content+=image;
            // content+="</body></html>";
            // iframeWindow.document.write(content);
            // iframeWindow.document.close();

        }else{
            console.log("Mobile");
        }
    }

    getTargetElement();
    insertAd();

})();