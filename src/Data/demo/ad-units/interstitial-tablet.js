(function(){

    var deviceType;

    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        // true for mobile device
        deviceType = "mobile"
      }else{
        // false for not mobile device
        deviceType = "desktop";
      }

    console.log("Interstitial test ad unit 1.1");

    var mobile_tag="<div id='id1830'><script src='https://adserver.bidsxchange.com/?id=1830&adSlot=id1830'></script></div>";
    var desktop_tag="<div id='id1830'><script src='https://adserver.bidsxchange.com/?id=1830&adSlot=id1830'></script></div>";
    var mobile_size='300x250';
    var mobile_adDimensions = mobile_size.split("x");
    var desktop_size='300x250';
    var desktop_adDimensions = desktop_size.split("x");
    var mobile_close_button_position='right';
    var desktop_close_button_position='right';

    var window_height=window.innerHeight;
    var window_width=window.innerWidth;

    // console.log("----------------");
    // console.log(window_height);
    // console.log("toop");
    // console.log(document.getRootNode.toString());
    // console.log(window.top.innerHeight);
    // console.log("----------------");

    function appendContainer(){

        // var interstitialContainer = document.createElement('div');
        // interstitialContainer.style.position = "fixed";
        // interstitialContainer.style.top = "0";
        // interstitialContainer.style.left = "0";
        // interstitialContainer.style.zIndex = "9999999999999999999"
        // interstitialContainer.style.height = "50vh";
        // interstitialContainer.style.width = "50vw";
        // interstitialContainer.style.margin = "5vh 5vw"
        // interstitialContainer.style.backgroundColor = "rgba(0, 0, 0, 0.5)";

        // window.parent.document.body.appendChild(interstitialContainer);

        if(deviceType == "desktop"){
            var screen = document.createElement('div');
            screen.style.height = "100vh";
            screen.style.width = "100vw";
            // screen.style.backgroundColor = "black"
            screen.style.background = "rgb(2 7 26 / 37%)";
            screen.style.backdropFilter = "blur(8px)"
            screen.style.position = "fixed";
            screen.style.top = "0"
            screen.style.left = "0"
            // screen.style.opacity = "0.9";
            // screen.style.opacity = "0.37"
            screen.style.zIndex = "999998";
            document.body.appendChild(screen);

            screen.onclick = function(){
                backDiv.remove();
                screen.remove();
            }

            var backDiv = document.createElement('div');
            document.body.appendChild(backDiv);
            backDiv.style.height = parseInt(desktop_adDimensions[1])+100+"px";
            backDiv.style.width = parseInt(desktop_adDimensions[0])+100+"px";
            backDiv.style.backgroundColor= "white";
            backDiv.style.position= "fixed"
            backDiv.style.zIndex = "999999"
            backDiv.style.top = (window_height - (parseInt(desktop_adDimensions[1])+100))/2+"px"; 
            backDiv.style.left = (window_width - (parseInt(desktop_adDimensions[0])+100))/2+"px";
            backDiv.style.borderRadius = "5px"
            // backDiv.style.boxShadow = "0 0 50px 5px #ccc"

            var textDiv = document.createElement("div");
            textDiv.innerText = "Ad";
            textDiv.style.position= "relative"
            textDiv.style.top ="20px"
            textDiv.style.left = "50px"
            backDiv.prepend(textDiv)

            var adContainer = document.createElement('div');
            backDiv.appendChild(adContainer);
            adContainer.style.height = desktop_adDimensions[1] + "px";
            adContainer.style.width = desktop_adDimensions[0] + "px";
            adContainer.style.position = "relative"
            adContainer.style.top = "30px"
            adContainer.style.left = "50px"
            adContainer.style.boxShadow = "0 0 50px 5px #ccc"
            // adContainer.style.marginTop = (window_height - desktop_adDimensions[1])/2+"px"; 
            // adContainer.style.marginLeft = (window_width - desktop_adDimensions[0])/2+"px";
            // adContainer.style.zIndex = "999999"

            var closeButton = document.createElement('img');
            // adContainer.appendChild(closeButton);
            closeButton.src = "images/cancel.svg";
            closeButton.style.height = "20px";
            closeButton.style.width = "20px";
            closeButton.style.float = desktop_close_button_position;
            closeButton.style.cursor = "pointer";
            closeButton.onclick = function(){
                adContainer.remove();
                screen.remove();
            };


            var iframe = document.createElement('iframe'); 
            adContainer.appendChild(iframe);
            iframe.setAttribute('width',desktop_adDimensions[0]+'px');
            iframe.setAttribute('height',desktop_adDimensions[1]+'px');
            iframe.setAttribute('src','about:blank');
            iframe.setAttribute('frameborder',0);
            iframe.setAttribute('scrolling','no');

            var iframeWindow = iframe.contentWindow || iframe.contentDocument.document || iframe.contentDocument;
            iframeWindow.document.open();
            var content="<!doctype html><html><head><meta http-equiv='Content-Type' content='text/html; charset=utf-8' /></head><body topmargin='0' leftmargin='0' marginwidth='0' marginheight='0' style='overflow:hidden;'>";
            content+=desktop_tag;
            content+="</body></html>";
            iframeWindow.document.write(content);
            iframeWindow.document.close();

        }else{
            var screen = document.createElement('div');
            screen.style.height = "100vh";
            screen.style.width = "100vw";
            // screen.style.backgroundColor = "black"
            screen.style.background = "rgb(2 7 26 / 37%)";
            screen.style.backdropFilter = "blur(8px)"
            screen.style.position = "fixed";
            screen.style.top = "0"
            screen.style.left = "0"
            // screen.style.opacity = "0.9";
            // screen.style.opacity = "0.37"
            screen.style.zIndex = "999998";
            document.body.appendChild(screen);

            screen.onclick = function(){
                backDiv.remove();
                screen.remove();
            }

            var backDiv = document.createElement('div');
            document.body.appendChild(backDiv);
            backDiv.style.height = parseInt(mobile_adDimensions[1])+100+"px";
            backDiv.style.width = parseInt(mobile_adDimensions[0])+100+"px";
            backDiv.style.backgroundColor= "white";
            backDiv.style.position= "fixed"
            backDiv.style.zIndex = "999999"
            backDiv.style.top = (window_height - (parseInt(mobile_adDimensions[1])+100))/2+"px"; 
            backDiv.style.left = (window_width - (parseInt(mobile_adDimensions[0])+100))/2+"px";
            backDiv.style.borderRadius = "5px"
            // backDiv.style.boxShadow = "0 0 50px 5px #ccc"

            var textDiv = document.createElement("div");
            textDiv.innerText = "Ad";
            textDiv.style.position= "relative"
            textDiv.style.top ="20px"
            textDiv.style.left = "50px"
            backDiv.prepend(textDiv)

            var adContainer = document.createElement('div');
            backDiv.appendChild(adContainer);
            adContainer.style.height = mobile_adDimensions[1] + "px";
            adContainer.style.width = mobile_adDimensions[0] + "px";
            adContainer.style.position = "relative"
            adContainer.style.top = "30px"
            adContainer.style.left = "50px"
            adContainer.style.boxShadow = "0 0 50px 5px #ccc"
            // adContainer.style.marginTop = (window_height - desktop_adDimensions[1])/2+"px"; 
            // adContainer.style.marginLeft = (window_width - desktop_adDimensions[0])/2+"px";
            // adContainer.style.zIndex = "999999"

            var closeButton = document.createElement('img');
            // adContainer.appendChild(closeButton);
            closeButton.src = "images/cancel.svg";
            closeButton.style.height = "20px";
            closeButton.style.width = "20px";
            closeButton.style.float = mobile_close_button_position;
            closeButton.style.cursor = "pointer";
            closeButton.onclick = function(){
                adContainer.remove();
                screen.remove();
            };


            var iframe = document.createElement('iframe'); 
            adContainer.appendChild(iframe);
            iframe.setAttribute('width',mobile_adDimensions[0]+'px');
            iframe.setAttribute('height',mobile_adDimensions[1]+'px');
            iframe.setAttribute('src','about:blank');
            iframe.setAttribute('frameborder',0);
            iframe.setAttribute('scrolling','no');

            var iframeWindow = iframe.contentWindow || iframe.contentDocument.document || iframe.contentDocument;
            iframeWindow.document.open();
            var content="<!doctype html><html><head><meta http-equiv='Content-Type' content='text/html; charset=utf-8' /></head><body topmargin='0' leftmargin='0' marginwidth='0' marginheight='0' style='overflow:hidden;'>";
            content+=desktop_tag;
            content+="</body></html>";
            iframeWindow.document.write(content);
            iframeWindow.document.close();
        
        }

    }

    appendContainer();

})();