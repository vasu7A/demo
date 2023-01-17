(function(){

    var deviceType;

    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        deviceType = "mobile"
      }else{
        deviceType = "desktop";
      }

    var mobile_tag = "<script async src='https://securepubads.g.doubleclick.net/tag/js/gpt.js'></script><div id='gpt-passback'><script>;window.googletag=window.googletag||{cmd:[]};googletag.cmd.push(function(){googletag.defineSlot('/21674279164/sl-standard-banners-4',[300,250],'gpt-passback').addService(googletag.pubads());googletag.enableServices();googletag.display('gpt-passback')});</script></div>";
    var desktop_tag = "<script async src='https://securepubads.g.doubleclick.net/tag/js/gpt.js'></script><div id='gpt-passback'><script>;window.googletag=window.googletag||{cmd:[]};googletag.cmd.push(function(){googletag.defineSlot('/21674279164/sl-standard-banners-4',[300,250],'gpt-passback').addService(googletag.pubads());googletag.enableServices();googletag.display('gpt-passback')});</script></div>";
    var mobile_size = "300x250";
    var mobile_adDimensions = mobile_size.split("x");
    var desktop_size = "300x250";
    var desktop_adDimensions = desktop_size.split("x");
    var mobile_close_button_position = "left";
    var desktop_close_button_position = "left";

    var window_height = window.top.innerHeight;
    var window_width = window.top.innerWidth;

    function appendContainer(){

        if(deviceType == "desktop"){

            var screen = document.createElement('div');
            screen.style.height = "100vh";
            screen.style.width = "100vw";
            screen.style.background = "rgb(2 7 26 / 37%)";
            screen.style.backdropFilter = "blur(8px)"
            screen.style.position = "fixed";
            screen.style.top = "0"
            screen.style.left = "0"
            screen.style.zIndex = "9999999998";
            window.parent.document.body.appendChild(screen);

            screen.onclick = function(){
                backDiv.remove();
                screen.remove();
            }

            var backDiv = document.createElement('div');
            window.parent.document.body.appendChild(backDiv);
            backDiv.style.height = parseInt(desktop_adDimensions[1])+100+"px";
            backDiv.style.width = parseInt(desktop_adDimensions[0])+100+"px";
            backDiv.style.backgroundColor= "white";
            backDiv.style.position= "fixed"
            backDiv.style.zIndex = "9999999999"
            backDiv.style.top = (window_height - (parseInt(desktop_adDimensions[1])+100))/2+"px"; 
            backDiv.style.left = (window_width - (parseInt(desktop_adDimensions[0])+100))/2+"px";
            backDiv.style.borderRadius = "5px"

            var textDiv = document.createElement("div");
            textDiv.style.position= "relative"
            textDiv.style.width = mobile_adDimensions[0]+"px"
            textDiv.style.height = "30px"
            var textLeft = document.createElement("div");
            textLeft.innerHTML = "Ads by Bidsxchange";
            textLeft.style.position = "relative";
            textLeft.style.float = "left";
            textLeft.style.top ="20px"
            textLeft.style.left = "50px"
            textDiv.appendChild(textLeft);
            backDiv.prepend(textDiv);

            var adContainer = document.createElement('div');
            backDiv.appendChild(adContainer);
            adContainer.style.height = desktop_adDimensions[1] + "px";
            adContainer.style.width = desktop_adDimensions[0] + "px";
            adContainer.style.position = "relative"
            adContainer.style.top = "30px"
            adContainer.style.left = "50px"
            adContainer.style.boxShadow = "0 0 50px 5px #ccc"
            
            var closeButton = document.createElement('div');
            closeButton.style.height = "25px";
            closeButton.style.width = "25px";
            closeButton.style.position = "relative";
            closeButton.style.float = desktop_close_button_position;
            closeButton.style.marginTop = "-25px";
            closeButton.style.cursor ="pointer"
            closeButton.innerHTML = '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 26 26" style="enable-background:new 0 0 26 26;" xml:space="preserve"><g><path style="fill:#030104;" d="M21.125,0H4.875C2.182,0,0,2.182,0,4.875v16.25C0,23.818,2.182,26,4.875,26h16.25C23.818,26,26,23.818,26,21.125V4.875C26,2.182,23.818,0,21.125,0z M18.78,17.394l-1.388,1.387c-0.254,0.255-0.67,0.255-0.924,0L13,15.313L9.533,18.78c-0.255,0.255-0.67,0.255-0.925-0.002L7.22,17.394c-0.253-0.256-0.253-0.669,0-0.926l3.468-3.467L7.221,9.534c-0.254-0.256-0.254-0.672,0-0.925l1.388-1.388c0.255-0.257,0.671-0.257,0.925,0L13,10.689l3.468-3.468 c0.255-0.257,0.671-0.257,0.924,0l1.388,1.386c0.254,0.255,0.254,0.671,0.001,0.927l-3.468,3.467l3.468,3.467C19.033,16.725,19.033,17.138,18.78,17.394z"/></g></svg>';
            closeButton.onclick = function(){
                backDiv.remove();
                screen.remove();
            }
            backDiv.prepend(closeButton);

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
            screen.style.background = "rgb(2 7 26 / 37%)";
            screen.style.backdropFilter = "blur(8px)"
            screen.style.position = "fixed";
            screen.style.top = "0"
            screen.style.left = "0"
            screen.style.zIndex = "9999999998";
            window.parent.document.body.appendChild(screen);

            screen.onclick = function(){
                backDiv.remove();
                screen.remove();
            }

            var backDiv = document.createElement('div');
            window.parent.document.body.appendChild(backDiv);
            backDiv.style.height = parseInt(mobile_adDimensions[1])+100+"px";
            backDiv.style.width = parseInt(mobile_adDimensions[0])+50+"px";
            backDiv.style.backgroundColor= "white";
            backDiv.style.zIndex = "9999999999"
            backDiv.style.top = (window_height - (parseInt(mobile_adDimensions[1])+100))/2+"px"; 
            backDiv.style.left = (window_width - (parseInt(mobile_adDimensions[0])+50))/2+"px";
            backDiv.style.borderRadius = "5px"
            backDiv.style.position= "fixed"

            var textDiv = document.createElement("div");
            textDiv.style.position= "relative"
            textDiv.style.width = mobile_adDimensions[0]+"px"
            textDiv.style.height = "30px"
            var textLeft = document.createElement("div");
            textLeft.innerHTML = "Ad";
            textLeft.style.position = "relative";
            textLeft.style.float = "left";
            textLeft.style.top ="20px"
            textLeft.style.left = "25px"
            textDiv.appendChild(textLeft);
            backDiv.prepend(textDiv);

            var adContainer = document.createElement('div');
            backDiv.appendChild(adContainer);
            adContainer.style.height = mobile_adDimensions[1] + "px";
            adContainer.style.width = mobile_adDimensions[0] + "px";
            adContainer.style.position = "relative"
            adContainer.style.top = "30px"
            adContainer.style.left = "25px"
            adContainer.style.boxShadow = "0 0 50px 5px #ccc";

            var closeButton = document.createElement('div');
            closeButton.style.height = "20px";
            closeButton.style.width = "20px";
            closeButton.style.position = "relative";
            closeButton.style.float = mobile_close_button_position;
            closeButton.style.marginTop = "-20px";
            closeButton.style.cursor ="pointer"
            closeButton.innerHTML = '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 26 26" style="enable-background:new 0 0 26 26;" xml:space="preserve"><g><path style="fill:#030104;" d="M21.125,0H4.875C2.182,0,0,2.182,0,4.875v16.25C0,23.818,2.182,26,4.875,26h16.25C23.818,26,26,23.818,26,21.125V4.875C26,2.182,23.818,0,21.125,0z M18.78,17.394l-1.388,1.387c-0.254,0.255-0.67,0.255-0.924,0L13,15.313L9.533,18.78c-0.255,0.255-0.67,0.255-0.925-0.002L7.22,17.394c-0.253-0.256-0.253-0.669,0-0.926l3.468-3.467L7.221,9.534c-0.254-0.256-0.254-0.672,0-0.925l1.388-1.388c0.255-0.257,0.671-0.257,0.925,0L13,10.689l3.468-3.468 c0.255-0.257,0.671-0.257,0.924,0l1.388,1.386c0.254,0.255,0.254,0.671,0.001,0.927l-3.468,3.467l3.468,3.467C19.033,16.725,19.033,17.138,18.78,17.394z"/></g></svg>';
            closeButton.onclick = function(){
                backDiv.remove();
                screen.remove();
            }
            backDiv.prepend(closeButton);

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
            content+=mobile_tag;
            content+="</body></html>";
            iframeWindow.document.write(content);
            iframeWindow.document.close();
        
        }

    }

    appendContainer();

})();