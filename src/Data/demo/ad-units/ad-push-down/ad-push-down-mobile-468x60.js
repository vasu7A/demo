(function(){

    var svg = '<svg width="20" height="150" viewBox="0 0 20 150" fill="none" xmlns="http://www.w3.org/2000/svg">  <rect width="20" height="150" fill="#E5E5E5"/>  <rect y="150" width="150" height="20" transform="rotate(-90 0 150)" fill="#414141"/>  <path d="M15.5 135.17H2.70312L2.70313 130.688C2.70313 129.135 3.00195 127.957 3.59961 127.154C4.19141 126.352 5.06152 125.95 6.20996 125.95C6.83691 125.95 7.39063 126.111 7.87109 126.434C8.3457 126.756 8.69434 127.204 8.91699 127.778C9.08105 127.122 9.41211 126.606 9.91016 126.231C10.4082 125.851 11.0176 125.66 11.7383 125.66C12.9688 125.66 13.9004 126.053 14.5332 126.838C15.166 127.623 15.4883 128.742 15.5 130.195V135.17ZM9.92773 132.533H13.3818V130.274C13.3818 129.653 13.2354 129.17 12.9424 128.824C12.6436 128.473 12.2334 128.297 11.7119 128.297C10.54 128.297 9.94531 128.903 9.92773 130.116V132.533ZM8.06445 132.533V130.582C8.04102 129.252 7.51074 128.587 6.47363 128.587C5.89355 128.587 5.47754 128.757 5.22559 129.097C4.96777 129.431 4.83887 129.961 4.83887 130.688V132.533H8.06445ZM15.5 120.87V123.507H2.70313V120.87H15.5ZM15.5 118.418H2.70313L2.70313 114.48C2.70313 113.355 2.95801 112.351 3.46777 111.466C3.97168 110.575 4.69238 109.881 5.62988 109.383C6.56152 108.885 7.62207 108.636 8.81152 108.636H9.40039C10.5898 108.636 11.6475 108.882 12.5732 109.374C13.499 109.86 14.2168 110.549 14.7266 111.439C15.2363 112.33 15.4941 113.335 15.5 114.454V118.418ZM4.83887 115.781H13.3818V114.507C13.3818 113.476 13.0449 112.688 12.3711 112.143C11.6973 111.598 10.7334 111.319 9.47949 111.308H8.80273C7.50195 111.308 6.51758 111.577 5.84961 112.116C5.17578 112.655 4.83887 113.443 4.83887 114.48L4.83887 115.781ZM12.1426 100.075C11.6445 100.075 11.2637 100.251 11 100.603C10.7305 100.954 10.4492 101.587 10.1563 102.501C9.85742 103.415 9.56445 104.139 9.27734 104.672C8.49219 106.125 7.43457 106.852 6.10449 106.852C5.41309 106.852 4.79785 106.658 4.25879 106.271C3.71387 105.879 3.28906 105.319 2.98438 104.593C2.67969 103.86 2.52734 103.04 2.52734 102.132C2.52734 101.218 2.69434 100.403 3.02832 99.6885C3.35645 98.9736 3.82227 98.4199 4.42578 98.0273C5.0293 97.6289 5.71484 97.4297 6.48242 97.4297V100.066C5.89648 100.066 5.44238 100.251 5.12012 100.62C4.79199 100.989 4.62793 101.508 4.62793 102.176C4.62793 102.82 4.76563 103.321 5.04102 103.679C5.31055 104.036 5.66797 104.215 6.11328 104.215C6.5293 104.215 6.87793 104.007 7.15918 103.591C7.44043 103.169 7.7041 102.551 7.9502 101.736C8.40137 100.236 8.96094 99.1436 9.62891 98.458C10.2969 97.7725 11.1289 97.4297 12.125 97.4297C13.2324 97.4297 14.1025 97.8486 14.7354 98.6865C15.3623 99.5244 15.6758 100.652 15.6758 102.07C15.6758 103.055 15.4971 103.951 15.1396 104.76C14.7764 105.568 14.2813 106.187 13.6543 106.614C13.0273 107.036 12.3008 107.247 11.4746 107.247V104.602C12.8867 104.602 13.5928 103.758 13.5928 102.07C13.5928 101.443 13.4668 100.954 13.2148 100.603C12.957 100.251 12.5996 100.075 12.1426 100.075ZM7.11523 91.0576L2.70313 88.6582V85.626L9.04883 89.3525L15.5 85.5293V88.5967L11.0176 91.0576L15.5 93.5186V96.5859L9.04883 92.7627L2.70313 96.4893V93.457L7.11523 91.0576ZM11.2373 74.376C12.6143 74.4756 13.6982 74.9854 14.4893 75.9053C15.2803 76.8193 15.6758 78.0264 15.6758 79.5264C15.6758 81.167 15.125 82.459 14.0234 83.4023C12.916 84.3398 11.3984 84.8086 9.4707 84.8086H8.68848C7.45801 84.8086 6.37402 84.5918 5.43652 84.1582C4.49902 83.7246 3.78125 83.1064 3.2832 82.3037C2.7793 81.4951 2.52734 80.5576 2.52734 79.4912C2.52734 78.0146 2.92285 76.8252 3.71387 75.9229C4.50488 75.0205 5.61523 74.499 7.04492 74.3584V76.9951C6.21875 77.0596 5.62109 77.291 5.25195 77.6895C4.87695 78.082 4.68945 78.6826 4.68945 79.4912C4.68945 80.3701 5.00586 81.0293 5.63867 81.4688C6.26563 81.9023 7.24121 82.125 8.56543 82.1367H9.53223C10.915 82.1367 11.9258 81.9287 12.5645 81.5127C13.2031 81.0908 13.5225 80.4287 13.5225 79.5264C13.5225 78.7119 13.3379 78.1055 12.9688 77.707C12.5938 77.3027 12.0166 77.0713 11.2373 77.0127V74.376ZM15.5 62.2295V64.8662H10.0156V70.0078H15.5V72.6445H2.70313V70.0078H7.88867V64.8662H2.70313V62.2295H15.5ZM12.8633 52.5352V57.1582L15.5 58.0371V60.8408L2.70313 56.0771V53.6338L15.5 48.8438L15.5 51.6475L12.8633 52.5352ZM10.7275 56.4463V53.2471L5.9375 54.8555L10.7275 56.4463ZM15.5 37.2422V39.8789L7.08008 45.0117H15.5V47.6484H2.70313L2.70313 45.0117L11.1406 39.8701H2.70313L2.70313 37.2422H15.5ZM13.8828 24.8145C14.4512 25.2891 14.8936 25.96 15.21 26.8271C15.5205 27.6943 15.6758 28.6553 15.6758 29.71C15.6758 30.8174 15.4355 31.79 14.9551 32.6279C14.4688 33.46 13.7656 34.1045 12.8457 34.5615C11.9258 35.0127 10.8447 35.2441 9.60254 35.2559H8.73242C7.45508 35.2559 6.35059 35.042 5.41895 34.6143C4.48145 34.1807 3.7666 33.5596 3.27441 32.751C2.77637 31.9365 2.52734 30.9844 2.52734 29.8945C2.52734 28.377 2.89063 27.1904 3.61719 26.335C4.33789 25.4795 5.38965 24.9727 6.77246 24.8145V27.3809C6.04004 27.498 5.50391 27.7588 5.16406 28.1631C4.82422 28.5615 4.6543 29.1123 4.6543 29.8154C4.6543 30.7119 4.99121 31.3945 5.66504 31.8633C6.33887 32.332 7.34082 32.5693 8.6709 32.5752H9.48828C10.8301 32.5752 11.8438 32.3203 12.5293 31.8105C13.2148 31.3008 13.5576 30.5537 13.5576 29.5693C13.5576 28.5791 13.3467 27.873 12.9248 27.4512H10.7188V29.8506H8.77637V24.8145H13.8828ZM9.9541 14.9707V20.0332H13.3818V14.0918H15.5V22.6699H2.70313L2.70313 14.1094H4.83887V20.0332H7.88867V14.9707H9.9541Z" fill="#FDFDFD"/></svg>';

    var desktopTag=  "<script async src='https://securepubads.g.doubleclick.net/tag/js/gpt.js'></script><div id='gpt-passback'><script>;window.googletag=window.googletag||{cmd:[]};googletag.cmd.push(function(){googletag.defineSlot('/21674279164/sl-standard-banners-3',[468,60],'gpt-passback').addService(googletag.pubads());googletag.enableServices();googletag.display('gpt-passback')});</script></div>"
    var mobileTag =  "<script async src='https://securepubads.g.doubleclick.net/tag/js/gpt.js'></script><div id='gpt-passback'><script>;window.googletag=window.googletag||{cmd:[]};googletag.cmd.push(function(){googletag.defineSlot('/21674279164/sl-standard-banners-3',[468,60],'gpt-passback').addService(googletag.pubads());googletag.enableServices();googletag.display('gpt-passback')});</script></div>"


    console.log("Push Down 1.0");

    var deviceType = "desktop";

    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        deviceType = "mobile"
    }
    deviceType = "mobile"

    var desktopCloseButtonPosition = "left";
    var mobileCloseButtonPosition = "left";

    var desktopAdDimensions = [468, 60];
    var mobileAdDimensions = [468, 60];

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

        var scale =1;
        if(parseInt(desktopAdDimensions[1])<150){
            scale = parseInt(desktopAdDimensions[1])/150
        }

        var closeButton = document.createElement('div');
        closeButton.style.position = "relative";
        closeButton.style.transform = "scale("+scale+")";
        closeButton.style.transformOrigin = "top right"
        closeButton.style.width = "22px"
        closeButton.style.height = "150px"
        closeButton.style.top = "0px"
        closeButton.innerHTML = svg
        closeButton.style.cursor= "pointer"

        var xButton = document.createElement('div');
        xButton.innerHTML = '<svg width="15px" height="15px" clip-rule="evenodd" fill-rule="evenodd" image-rendering="optimizeQuality" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" viewBox="0 0 13547 13547" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><defs><style type="text/css">   <![CDATA[    .fil0 {fill:none}    .fil1 {fill:black}   ]]>  </style></defs><polygon class="fil0" points="0 0 13547 0 13547 13547 0 13547"/><path class="fil1" d="m714 12832h12118v-12117h-12118v12117zm4188-2990 1871-1871 1871 1871 1197-1197-1871-1871 1871-1871-1197-1197-1871 1871-1871-1871-1197 1197 1871 1871-1871 1871 1197 1197z"/></svg>';
        xButton.style.height = "15px"
        xButton.style.width = "15px"
        xButton.style.cursor ="pointer"
        // xButton.style.position = "relative"
        // xButton.style.zIndex = "99999"

        closeButton.onclick = function(){
            window.top.open('https://streamlyn.com/', "_blank");
        };

        xButton.onclick = function(){
            mainDiv.remove();
        }

            var div = document.createElement('div');
            div.style.height = "0px";
            div.style.width = desktopAdDimensions[0] + "px";
            div.style.cursor = "pointer";
            console.log("0.6");
            div.style.zIndex = "999"
            
            var mainDiv  = document.getElementById('pushdown');
            mainDiv.appendChild(closeButton);
            mainDiv.appendChild(div);
            //mainDiv.appendChild(xButton);
            mainDiv.style.display = "flex";
            mainDiv.style.justifyContent = "center";
            mainDiv.style.height = "0px"
            mainDiv.style.transform = "scale(0.85)"

            setTimeout(() => {
                var open = setInterval(() => {
                    if(mainDiv.offsetHeight < (parseInt(desktopAdDimensions[1]))){
                        mainDiv.style.height = mainDiv.offsetHeight + 5 + "px";
                        div.style.height = mainDiv.offsetHeight + 5 + "px";
                        iframe.style.height = mainDiv.offsetHeight + 5 + "px";
                    }else{
                        mainDiv.style.height = mainDiv.offsetHeight + 5 + "px";
                        clearInterval(open);                
                    }
                }, 40);
            }, 1000);

            var iframe = document.createElement('iframe');
            iframe.setAttribute('width',desktopAdDimensions[0]+'px');
            iframe.setAttribute('height','0px');
            iframe.setAttribute('src', 'about:blank');
            iframe.setAttribute('frameborder',0);
            iframe.setAttribute('scrolling','no');
            div.appendChild(iframe);

            var iframeWindow = iframe.contentWindow || iframe.contentDocument.document || iframe.contentDocument;
            iframeWindow.document.open();
            var content="<!doctype html><html><head><meta http-equiv='Content-Type' content='text/html; charset=utf-8' /></head><body topmargin='0' leftmargin='0' marginwidth='0' marginheight='0' style='overflow:hidden;'>";
            content+=desktopTag;
            content+="</body></html>";
            iframeWindow.document.write(content);
            iframeWindow.document.close();

        
    }

    getTargetElement();
    insertAd();

})();