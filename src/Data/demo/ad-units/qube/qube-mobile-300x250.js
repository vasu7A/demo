/*
	https://demo.bidsxchange.com/demo/qube-300x600.html
*/
(function(){

	var svg = '<svg width="20" height="150" viewBox="0 0 20 150" fill="none" xmlns="http://www.w3.org/2000/svg">  <rect width="20" height="150" fill="#E5E5E5"/>  <rect y="150" width="150" height="20" transform="rotate(-90 0 150)" fill="#414141"/>  <path d="M15.5 135.17H2.70312L2.70313 130.688C2.70313 129.135 3.00195 127.957 3.59961 127.154C4.19141 126.352 5.06152 125.95 6.20996 125.95C6.83691 125.95 7.39063 126.111 7.87109 126.434C8.3457 126.756 8.69434 127.204 8.91699 127.778C9.08105 127.122 9.41211 126.606 9.91016 126.231C10.4082 125.851 11.0176 125.66 11.7383 125.66C12.9688 125.66 13.9004 126.053 14.5332 126.838C15.166 127.623 15.4883 128.742 15.5 130.195V135.17ZM9.92773 132.533H13.3818V130.274C13.3818 129.653 13.2354 129.17 12.9424 128.824C12.6436 128.473 12.2334 128.297 11.7119 128.297C10.54 128.297 9.94531 128.903 9.92773 130.116V132.533ZM8.06445 132.533V130.582C8.04102 129.252 7.51074 128.587 6.47363 128.587C5.89355 128.587 5.47754 128.757 5.22559 129.097C4.96777 129.431 4.83887 129.961 4.83887 130.688V132.533H8.06445ZM15.5 120.87V123.507H2.70313V120.87H15.5ZM15.5 118.418H2.70313L2.70313 114.48C2.70313 113.355 2.95801 112.351 3.46777 111.466C3.97168 110.575 4.69238 109.881 5.62988 109.383C6.56152 108.885 7.62207 108.636 8.81152 108.636H9.40039C10.5898 108.636 11.6475 108.882 12.5732 109.374C13.499 109.86 14.2168 110.549 14.7266 111.439C15.2363 112.33 15.4941 113.335 15.5 114.454V118.418ZM4.83887 115.781H13.3818V114.507C13.3818 113.476 13.0449 112.688 12.3711 112.143C11.6973 111.598 10.7334 111.319 9.47949 111.308H8.80273C7.50195 111.308 6.51758 111.577 5.84961 112.116C5.17578 112.655 4.83887 113.443 4.83887 114.48L4.83887 115.781ZM12.1426 100.075C11.6445 100.075 11.2637 100.251 11 100.603C10.7305 100.954 10.4492 101.587 10.1563 102.501C9.85742 103.415 9.56445 104.139 9.27734 104.672C8.49219 106.125 7.43457 106.852 6.10449 106.852C5.41309 106.852 4.79785 106.658 4.25879 106.271C3.71387 105.879 3.28906 105.319 2.98438 104.593C2.67969 103.86 2.52734 103.04 2.52734 102.132C2.52734 101.218 2.69434 100.403 3.02832 99.6885C3.35645 98.9736 3.82227 98.4199 4.42578 98.0273C5.0293 97.6289 5.71484 97.4297 6.48242 97.4297V100.066C5.89648 100.066 5.44238 100.251 5.12012 100.62C4.79199 100.989 4.62793 101.508 4.62793 102.176C4.62793 102.82 4.76563 103.321 5.04102 103.679C5.31055 104.036 5.66797 104.215 6.11328 104.215C6.5293 104.215 6.87793 104.007 7.15918 103.591C7.44043 103.169 7.7041 102.551 7.9502 101.736C8.40137 100.236 8.96094 99.1436 9.62891 98.458C10.2969 97.7725 11.1289 97.4297 12.125 97.4297C13.2324 97.4297 14.1025 97.8486 14.7354 98.6865C15.3623 99.5244 15.6758 100.652 15.6758 102.07C15.6758 103.055 15.4971 103.951 15.1396 104.76C14.7764 105.568 14.2813 106.187 13.6543 106.614C13.0273 107.036 12.3008 107.247 11.4746 107.247V104.602C12.8867 104.602 13.5928 103.758 13.5928 102.07C13.5928 101.443 13.4668 100.954 13.2148 100.603C12.957 100.251 12.5996 100.075 12.1426 100.075ZM7.11523 91.0576L2.70313 88.6582V85.626L9.04883 89.3525L15.5 85.5293V88.5967L11.0176 91.0576L15.5 93.5186V96.5859L9.04883 92.7627L2.70313 96.4893V93.457L7.11523 91.0576ZM11.2373 74.376C12.6143 74.4756 13.6982 74.9854 14.4893 75.9053C15.2803 76.8193 15.6758 78.0264 15.6758 79.5264C15.6758 81.167 15.125 82.459 14.0234 83.4023C12.916 84.3398 11.3984 84.8086 9.4707 84.8086H8.68848C7.45801 84.8086 6.37402 84.5918 5.43652 84.1582C4.49902 83.7246 3.78125 83.1064 3.2832 82.3037C2.7793 81.4951 2.52734 80.5576 2.52734 79.4912C2.52734 78.0146 2.92285 76.8252 3.71387 75.9229C4.50488 75.0205 5.61523 74.499 7.04492 74.3584V76.9951C6.21875 77.0596 5.62109 77.291 5.25195 77.6895C4.87695 78.082 4.68945 78.6826 4.68945 79.4912C4.68945 80.3701 5.00586 81.0293 5.63867 81.4688C6.26563 81.9023 7.24121 82.125 8.56543 82.1367H9.53223C10.915 82.1367 11.9258 81.9287 12.5645 81.5127C13.2031 81.0908 13.5225 80.4287 13.5225 79.5264C13.5225 78.7119 13.3379 78.1055 12.9688 77.707C12.5938 77.3027 12.0166 77.0713 11.2373 77.0127V74.376ZM15.5 62.2295V64.8662H10.0156V70.0078H15.5V72.6445H2.70313V70.0078H7.88867V64.8662H2.70313V62.2295H15.5ZM12.8633 52.5352V57.1582L15.5 58.0371V60.8408L2.70313 56.0771V53.6338L15.5 48.8438L15.5 51.6475L12.8633 52.5352ZM10.7275 56.4463V53.2471L5.9375 54.8555L10.7275 56.4463ZM15.5 37.2422V39.8789L7.08008 45.0117H15.5V47.6484H2.70313L2.70313 45.0117L11.1406 39.8701H2.70313L2.70313 37.2422H15.5ZM13.8828 24.8145C14.4512 25.2891 14.8936 25.96 15.21 26.8271C15.5205 27.6943 15.6758 28.6553 15.6758 29.71C15.6758 30.8174 15.4355 31.79 14.9551 32.6279C14.4688 33.46 13.7656 34.1045 12.8457 34.5615C11.9258 35.0127 10.8447 35.2441 9.60254 35.2559H8.73242C7.45508 35.2559 6.35059 35.042 5.41895 34.6143C4.48145 34.1807 3.7666 33.5596 3.27441 32.751C2.77637 31.9365 2.52734 30.9844 2.52734 29.8945C2.52734 28.377 2.89063 27.1904 3.61719 26.335C4.33789 25.4795 5.38965 24.9727 6.77246 24.8145V27.3809C6.04004 27.498 5.50391 27.7588 5.16406 28.1631C4.82422 28.5615 4.6543 29.1123 4.6543 29.8154C4.6543 30.7119 4.99121 31.3945 5.66504 31.8633C6.33887 32.332 7.34082 32.5693 8.6709 32.5752H9.48828C10.8301 32.5752 11.8438 32.3203 12.5293 31.8105C13.2148 31.3008 13.5576 30.5537 13.5576 29.5693C13.5576 28.5791 13.3467 27.873 12.9248 27.4512H10.7188V29.8506H8.77637V24.8145H13.8828ZM9.9541 14.9707V20.0332H13.3818V14.0918H15.5V22.6699H2.70313L2.70313 14.1094H4.83887V20.0332H7.88867V14.9707H9.9541Z" fill="#FDFDFD"/></svg>';

	var data={};
	data.tags={};
	data.closeButton='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfjCRMHJDWxrGqMAAAAfElEQVQoz4WRsRHCMAxFv2jCAvjwTMxLFggdqeKCHbKAy0cDZxsJUKE76z/ZX5Zx06SL7XJB0qwqVqCQvEwB7uLEBjzIg/yunvtDDmU5xMkjEsqdqfLKznS75aP7oCgs6v/9RLMW/svo3CF+sAGJ5+6Qf8syFh2/rvuq+gQCIMf5MCc1PgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOS0wOS0xOVQwNzozNjo1MyswMDowMMALQagAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTktMDktMTlUMDc6MzY6NTMrMDA6MDCxVvkUAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg==';

	data.tags=[];
	data.width=300;
	data.height=250;
	// data.tags.push('./images/300x600/300x600-1.png');
	// data.tags.push('./images/300x600/300x600-2.png');
	// data.tags.push('./images/300x600/300x600-3.png');
	// data.tags.push('./images/300x600/300x600-4.png');
	
	data.tags.push("<script async src=https://securepubads.g.doubleclick.net/tag/js/gpt.js></script> <div id=gpt-passback>   <script>     window.googletag = window.googletag || {cmd: []};     googletag.cmd.push(function() {     googletag.defineSlot('/21674279164/sl-standard-banners', [300, 250], 'gpt-passback').addService(googletag.pubads());     googletag.enableServices();     googletag.display('gpt-passback');     });   </script> </div>" );
	data.tags.push("<script async src=https://securepubads.g.doubleclick.net/tag/js/gpt.js></script> <div id=gpt-passback>   <script>     window.googletag = window.googletag || {cmd: []};     googletag.cmd.push(function() {     googletag.defineSlot('/21674279164/sl-standard-banners-2', [300, 250], 'gpt-passback').addService(googletag.pubads());     googletag.enableServices();     googletag.display('gpt-passback');     });   </script> </div>" );
	data.tags.push("<script async src=https://securepubads.g.doubleclick.net/tag/js/gpt.js></script> <div id=gpt-passback>   <script>     window.googletag = window.googletag || {cmd: []};     googletag.cmd.push(function() {     googletag.defineSlot('/21674279164/sl-standard-banners-3', [300, 250], 'gpt-passback').addService(googletag.pubads());     googletag.enableServices();     googletag.display('gpt-passback');     });   </script> </div>" );
	data.tags.push("<script async src=https://securepubads.g.doubleclick.net/tag/js/gpt.js></script> <div id=gpt-passback>   <script>     window.googletag = window.googletag || {cmd: []};     googletag.cmd.push(function() {     googletag.defineSlot('/21674279164/sl-standard-banners-4', [300, 250], 'gpt-passback').addService(googletag.pubads());     googletag.enableServices();     googletag.display('gpt-passback');     });   </script> </div>" );
	
	data.adUnit='AF';
	data.device='desktop';
	if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) {
		data.device='mobile';
	}
	function log() {
		var obj=null;
		if(arguments.length>0) {
			obj=arguments[0];
		} else return;
		var dt=new Date();
		var prefix='\u26A1\x1b[36m['+dt.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })+'] '+data.adUnit+'\u21FE ';
		if(typeof(obj)==='string') {
			console.log(prefix+obj);
		} else {
			console.log(prefix);
			console.log(obj);
		}
	}
	log('init');
	function IDGenerator() {
	 this.length=8;
	 this.timestamp=+new Date;
	 var getRandomInt=function(min,max) { return Math.floor(Math.random()*(max-min+1))+min; }
	 this.generate=function() {
		 var ts=this.timestamp.toString();
		 var parts=ts.split('').reverse();
		 var id='';
		 for(var i=0;i<this.length;++i) {
			var index=getRandomInt(0,parts.length-1);
			id+=parts[index];
		 }
		 return id;
	 }
	}
	var IDG=new IDGenerator();
	function getId() { return IDG.generate(); }
	function getWindowFromIframe(iframe_object) {
	  var doc;
	  if(iframe_object.contentWindow) {
		return iframe_object.contentWindow;
	  }
	  if(iframe_object.window) {
		return iframe_object.window;
	  } 
	  if(iframe_object.contentDocument) {
		doc=iframe_object.contentDocument;
	  } 
	  if(!doc && iframe_object.document) {
		doc=iframe_object.document;
	  }
	  if(doc&&doc.defaultView) {
	   return doc.defaultView;
	  }
	  if(doc&&doc.parentWindow) {
		return doc.parentWindow;
	  }
	  return undefined;
	}

	function isWindow(obj) { return obj!=null && obj===obj.window; }
	function getWindow(elem) { return isWindow(elem) ? elem : elem.nodeType===9 && elem.defaultView; }
	function round(value,decimals) { return (Number(Math.round(value+"e"+decimals)+"e-"+decimals)).toFixed(decimals); };
	function offset(elem) {
		var docElem,win,
		box={top:0,left:0},
		doc=elem && elem.ownerDocument;
		docElem=doc.documentElement;
		if(typeof(elem.getBoundingClientRect)!== typeof(undefined)) {
			box=elem.getBoundingClientRect();
		}
		win=getWindow(doc);
		return {
			top: box.top+win.pageYOffset-docElem.clientTop,
			left: box.left+win.pageXOffset-docElem.clientLeft
		};
	}
	function getDim(element) {
		return {
			width: element.getBoundingClientRect().width,
			height: element.getBoundingClientRect().height,
			left: offset(element).left,
			top: offset(element).top
		};
	}
	function createFace(faceData) {
		/*
		faceData.iframe=faceData.doc.createElement('img');
		faceData.face.appendChild(faceData.iframe);
		faceData.iframe.style.width=faceData.width+'px';
		faceData.iframe.style.height=faceData.height+'px';
		faceData.iframe.setAttribute('src',faceData.tag);
		faceData.iframe.setAttribute('width',faceData.width);
		faceData.iframe.setAttribute('height',faceData.height);
		log(faceData.width+'x'+faceData.height+'-'+faceData.face.id);
		*/
		/*
		switch(faceData.face.id) {
			case 'FRONT': {
				//faceData.face.innerHTML='FRONT';
				faceData.face.style.backgroundColor='red';
			} break;
			case 'BACK': {
				//faceData.face.innerHTML='BACK';
				faceData.face.style.backgroundColor='green';
			} break;
			case 'RIGHT': {
				//faceData.face.innerHTML='RIGHT';
				faceData.face.style.backgroundColor='blue';
			} break;
			case 'LEFT': {
				//faceData.face.innerHTML='LEFT';
				faceData.face.style.backgroundColor='yellow';
			} break;
			case 'TOP': {
				//faceData.face.innerHTML='TOP';
				faceData.face.style.backgroundColor='purple';
			} break;
			case 'BOTTOM': {
				//faceData.face.innerHTML='BOTTOM';
				faceData.face.style.backgroundColor='cyan';
			} break;
		}*/
		faceData.iframe=faceData.doc.createElement('iframe');
		faceData.face.appendChild(faceData.iframe);
		faceData.iframe.style.width=faceData.width+'px';
		faceData.iframe.style.height=faceData.height+'px';
		faceData.iframe.style.overflow='hidden';
		faceData.iframe.setAttribute('src','about:blank');
		faceData.iframe.setAttribute('width',faceData.width);
		faceData.iframe.setAttribute('height',faceData.height);
		faceData.iframe.setAttribute('frameborder',0);
		faceData.iframe.setAttribute('scrolling','no');
		faceData.iframe.setAttribute('marginheight',0);
		faceData.iframe.setAttribute('marginwidth',0);
		faceData.iframe.setAttribute('allowtransparency','true');
		faceData.iframeCtl=getWindowFromIframe(faceData.iframe);
		faceData.iframeCtl.document.open();
		var content="<!doctype html><html><head><meta http-equiv='Content-Type' content='text/html; charset=utf-8' /></head><body topmargin='0' leftmargin='0' marginwidth='0' marginheight='0' style='overflow:hidden;'>";
		content+=faceData.tag;
		content+="</body></html>";
		faceData.iframeCtl.document.write(content);
		faceData.iframeCtl.document.close();
		/*
		if(typeof(faceData.iframe)!=='undefined') {
			faceData.face.removeChild(faceData.iframe);
			return;
		}
		*/
	}	
	try {
		(function(W,D){
			var closeButton = document.createElement('div');
			var scale= 1;
			if(data.height<150){
				scale = data.height/150
			}
			closeButton.style.position = "relative";
			closeButton.style.transform = "scale("+scale+")";
			closeButton.style.transformOrigin = "top right"
			closeButton.style.width = "22px"
			closeButton.style.height = "150px"
			closeButton.style.top = "0px"
			closeButton.innerHTML = svg
			closeButton.style.cursor="pointer"
			closeButton.onclick = function(){
				window.top.open('https://streamlyn.com/', "_blank");
			};

			data.adSlot=D.getElementById('_bx_cube');
			data.adSlot.style.display = "flex"
			data.adSlot.appendChild(closeButton);
			W._bx_af_close=function() { data.adSlot.parentElement.removeChild(data.adSlot); };
			// data.adSlot.style.webkitBoxShadow='1px 2px 10px 0px rgba(0,0,0,0.75)';
			// data.adSlot.style.mozBoxShadow='1px 2px 10px 0px rgba(0,0,0,0.75)';
			// data.adSlot.style.msBoxShadow='1px 2px 10px 0px rgba(0,0,0,0.75)';
			// data.adSlot.style.boxShadow='1px 2px 10px 0px rgba(0,0,0,0.75)';
			data.adSlot.style.position='relative';
			data.adSlot.style.width=data.width+'px';
			data.adSlot.style.height=data.height+'px';			
			data.adSlot.style.webkitTransformOrigin='50% 50%';
			data.adSlot.style.msTransformOrigin='50% 50%';
			data.adSlot.style.oTransformOrigin='50% 50%';
			data.adSlot.style.transformOrigin='50% 50%';
			data.adSlot.style.webkitTransform='scale(0.9,0.9)';
			data.adSlot.style.msTransform='scale(0.9,0.9)';
			data.adSlot.style.oTransform='scale(0.9,0.9)';
			data.adSlot.style.transform='scale(0.9,0.9)';
			boot();
			function boot() {
				data.show_close_button=true;
				data.adSlotIframe=D.createElement('iframe');
				data.adSlot.appendChild(data.adSlotIframe);
				data.adSlotIframe.src='about:blank';
				data.adSlotIframe.setAttribute('width',data.width);
				data.adSlotIframe.setAttribute('height',data.height);
				data.adSlotIframe.setAttribute('allow','autoplay;fullscreen;');
				data.adSlotIframe.setAttribute('frameborder',0);
				data.adSlotIframe.setAttribute('scrolling','no');
				data.adSlotIframe.setAttribute('marginheight',0);
				data.adSlotIframe.setAttribute('marginwidth',0);
				data.adSlotIframe.style.width=data.width+'px';
				data.adSlotIframe.style.height=data.height+'px';
				data.adSlotIframe.style.margin='0px';
				data.adSlotIframe.style.padding='0px';
				data.adSlotIframe.style.overflow='hidden';
				data.adSlotIframeCtl=getWindowFromIframe(data.adSlotIframe);
				data.adSlotIframeCtl.document.open();
				data.adSlotIframeCtl.document.close();

				data.iframe=D.createElement('iframe');
				data.adSlotIframeCtl.document.body.appendChild(data.iframe);

				if(data.show_close_button) {
					data.close_button=D.createElement('a');
					// data.adSlotIframeCtl.document.body.appendChild(data.close_button);
					data.close_button.style.title='Ads by Streamlyn';
					data.close_button.style.zIndex='999999999';
					data.close_button.style.width='10px';
					data.close_button.style.display='inline';
					data.close_button.style.position='fixed';
					data.close_button.style.top='0px';
					data.close_button.style.left='0px';
					data.close_button.style.textDecoration='none';
					data.close_button.href="javascript:_bx_af_close();";
					data.close_button.innerHTML='<img style="width:10px; background: -webkit-linear-gradient(-45deg, transparent 0%, transparent 46%, white 46%, white 56%, transparent 56%, transparent 100%), -webkit-linear-gradient(45deg, transparent 0%, transparent 46%, white 46%, white 56%, transparent 56%, transparent 100%) rgba(0, 0, 0, 0.3); box-sizing: border-box; box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 5px 2px;" src="'+data.closeButton+'" />';
				}

				data.iframe.style.width=data.width+'px';
				data.iframe.style.height=data.height+'px';
				data.iframe.style.position='fixed';
				data.iframe.style.overflow='hidden';
				data.iframe.setAttribute('width',data.width);
				data.iframe.setAttribute('height',data.height);
				data.iframe.setAttribute('frameborder',0);
				data.iframe.setAttribute('scrolling','no');
				data.iframe.setAttribute('marginheight',0);
				data.iframe.setAttribute('marginwidth',0);
				data.iframe.setAttribute('allowtransparency','true');
				
				data.iframeWin=getWindowFromIframe(data.iframe);
				data.iframeDoc=data.iframeWin.document;
				data.iframeDoc.open();
				data.iframeDoc.close();

				data.mainContainer=data.iframeDoc.createElement('div');
				data.iframeDoc.body.appendChild(data.mainContainer);
				data.mainContainer.style.position='relative';
				data.mainContainer.style.display='block';
				data.mainContainer.style.width='100%';
				data.mainContainer.style.height='100%';
				data.mainContainer.style.position='relative';

				data.container=data.iframeDoc.createElement('div');
				data.mainContainer.appendChild(data.container);
				data.container.style.position='relative';
				data.container.style.perspective='1000px';
				data.container.style.width=data.width+'px';
				data.container.style.height=data.height+'px';
				
				data.cube=data.iframeDoc.createElement('div');
				data.container.appendChild(data.cube);
				data.cube.id='bx_ad_flip_cube';
				data.cube.style.transformStyle='preserve-3d';
				data.cube.style.width='100%';
				data.cube.style.height='100%';
				data.cube.style.position='absolute';
				
				data.faces=[];
				if(data.size=='728x90') {
					data.cube.style.webkitTransform='translateZ(-45px) rotateX(0deg) rotateY(0deg)';
					data.cube.style.mozTransform='translateZ(-45px) rotateX(0deg) rotateY(0deg)';
					data.cube.style.msTransform='translateZ(-45px) rotateX(0deg) rotateY(0deg)';
					data.cube.style.oTransform='translateZ(-45px) rotateX(0deg) rotateY(0deg)';
					data.cube.style.transform='translateZ(-45px) rotateX(0deg) rotateY(0deg)';
					var front={};
					data.faces.push(front);
					front.doc=data.iframeDoc;
					front.face=front.doc.createElement('div');
					data.cube.appendChild(front.face);
					front.width=data.width;
					front.height=data.height;
					front.tag=data.tags[0];
					front.face.id='FRONT';
					front.face.style.width=front.width+'px';
					front.face.style.height=front.height+'px';
					front.face.style.position='absolute';
					front.face.style.textAlign='center';
					front.face.style.display='block';
					front.face.style.transform='translateZ(45px)';
					front.face.style.webkitTransform='translateZ(45px)';
					front.face.style.mozTransform='translateZ(45px)';
					
					var bottom={};
					data.faces.push(bottom);
					bottom.doc=data.iframeDoc;
					bottom.face=bottom.doc.createElement('div');
					data.cube.appendChild(bottom.face);
					bottom.width=data.width;
					bottom.height=data.height;
					bottom.tag=data.tags[3];
					bottom.face.id='BOTTOM';
					bottom.face.style.width=bottom.width+'px';
					bottom.face.style.height=bottom.height+'px';
					bottom.face.style.position='absolute';
					bottom.face.style.textAlign='center';
					bottom.face.style.display='block';
					bottom.face.style.transform='rotateX(-90deg) translateZ(45px)';
					bottom.face.style.webkitTransform='rotateX(-90deg) translateZ(45px)';
					bottom.face.style.mozTransform='rotateX(-90deg) translateZ(45px)';

					var back={};
					data.faces.push(back);
					back.doc=data.iframeDoc;
					back.face=back.doc.createElement('div');
					data.cube.appendChild(back.face);
					back.width=data.width;
					back.height=data.height;
					back.tag=data.tags[1];
					back.face.id='BACK';
					back.face.style.width=back.width+'px';
					back.face.style.height=back.height+'px';
					back.face.style.position='absolute';
					back.face.style.textAlign='center';
					back.face.style.display='block';
					back.face.style.transform='rotateY(0deg) rotateX(180deg) translateZ(45px)';
					back.face.style.webkitTransform='rotateY(0deg) rotateX(180deg) translateZ(45px)';
					back.face.style.mozTransform='rotateY(0deg) rotateX(180deg) translateZ(45px)';

					var top={};
					data.faces.push(top);
					top.doc=data.iframeDoc;
					top.face=top.doc.createElement('div');
					data.cube.appendChild(top.face);
					top.width=data.width;
					top.height=data.height;
					top.tag=data.tags[2];
					top.face.id='TOP';
					top.face.style.width=top.width+'px';
					top.face.style.height=top.height+'px';
					top.face.style.position='absolute';
					top.face.style.textAlign='center';
					top.face.style.display='block';
					top.face.style.transform='rotateX(90deg) translateZ(45px)';
					top.face.style.webkitTransform='rotateX(90deg) translateZ(45px)';
					top.face.style.mozTransform='rotateX(90deg) translateZ(45px)';

				} else {
					data.cube.style.webkitTransform='translateZ(-'+(data.width/2)+'px) rotateX(0deg) rotateY(0deg)';
					data.cube.style.mozTransform='translateZ(-'+(data.width/2)+'px) rotateX(0deg) rotateY(0deg)';
					data.cube.style.msTransform='translateZ(-'+(data.width/2)+'px) rotateX(0deg) rotateY(0deg)';
					data.cube.style.oTransform='translateZ(-'+(data.width/2)+'px) rotateX(0deg) rotateY(0deg)';
					data.cube.style.transform='translateZ(-'+(data.width/2)+'px) rotateX(0deg) rotateY(0deg)';
					var front={};
					data.faces.push(front);
					front.doc=data.iframeDoc;
					front.face=front.doc.createElement('div');
					data.cube.appendChild(front.face);
					front.width=data.width;
					front.height=data.height;
					front.tag=data.tags[0];
					front.face.id='FRONT';
					front.face.style.width=front.width+'px';
					front.face.style.height=front.height+'px';
					front.face.style.position='absolute';
					front.face.style.textAlign='center';
					front.face.style.display='block';
					front.face.style.transform='translateZ('+front.width/2+'px)';
					front.face.style.webkitTransform='translateZ('+front.width/2+'px)';
					front.face.style.mozTransform='translateZ('+front.width/2+'px)';

					var left={};
					data.faces.push(left);
					left.doc=data.iframeDoc;
					left.face=left.doc.createElement('div');
					data.cube.appendChild(left.face);
					left.width=data.width;
					left.height=data.height;
					left.tag=data.tags[1];
					left.face.id='LEFT';
					left.face.style.width=left.width+'px';
					left.face.style.height=left.height+'px';
					left.face.style.position='absolute';
					left.face.style.textAlign='center';
					left.face.style.display='block';
					left.face.style.transform='rotateY(-90deg) translateZ('+data.width/2+'px)';
					left.face.style.webkitTransform='rotateY(-90deg) translateZ('+data.width/2+'px)';
					left.face.style.mozTransform='rotateY(-90deg) translateZ('+data.width/2+'px)';

					var back={};
					data.faces.push(back);
					back.doc=data.iframeDoc;
					back.face=back.doc.createElement('div');
					data.cube.appendChild(back.face);
					back.width=data.width;
					back.height=data.height;
					back.tag=data.tags[2];
					back.face.id='BACK';
					back.face.style.width=back.width+'px';
					back.face.style.height=back.height+'px';
					back.face.style.position='absolute';
					back.face.style.textAlign='center';
					back.face.style.display='block';
					back.face.style.transform='rotateY(-180deg) translateZ('+data.width/2+'px)';
					back.face.style.webkitTransform='rotateY(-180deg) translateZ('+data.width/2+'px)';
					back.face.style.mozTransform='rotateY(-180deg) translateZ('+data.width/2+'px)';

					var right={};
					data.faces.push(right);
					right.doc=data.iframeDoc;
					right.face=right.doc.createElement('div');
					data.cube.appendChild(right.face);
					right.width=data.width;
					right.height=data.height;
					right.tag=data.tags[3];
					right.face.id='RIGHT';
					right.face.style.width=right.width+'px';
					right.face.style.height=right.height+'px';
					right.face.style.position='absolute';
					right.face.style.textAlign='center';
					right.face.style.display='block';
					right.face.style.transform='rotateY(90deg) translateZ('+data.width/2+'px)';
					right.face.style.webkitTransform='rotateY(90deg) translateZ('+data.width/2+'px)';
					right.face.style.mozTransform='rotateY(90deg) translateZ('+data.width/2+'px)';

					/*
					var top={};
					data.faces.push(top);
					top.doc=data.iframeDoc;
					top.face=top.doc.createElement('div');
					data.cube.appendChild(top.face);
					top.width=data.width;
					top.height=data.height;
					top.tag=data.tags[3];
					top.face.id='top-face';
					top.face.style.width=top.width+'px';
					top.face.style.height=top.width+'px';
					top.face.style.position='absolute';
					top.face.style.textAlign='center';
					top.face.style.display='block';
					top.face.style.transform='rotateX(90deg) translateZ('+data.width/2+'px)';
					top.face.style.webkitTransform='rotateX(90deg) translateZ('+data.width/2+'px)';
					top.face.style.mozTransform='rotateX(90deg) translateZ('+data.width/2+'px)';
						
					var bottom={};
					data.faces.push(bottom);
					bottom.doc=data.iframeDoc;
					bottom.face=bottom.doc.createElement('div');
					data.cube.appendChild(bottom.face);
					bottom.width=data.width;
					bottom.height=data.height;
					bottom.tag=data.tags[3];
					bottom.face.id='bottom-face';
					bottom.face.style.width=bottom.width+'px';
					bottom.face.style.height=bottom.width+'px';
					bottom.face.style.position='absolute';
					bottom.face.style.textAlign='center';
					bottom.face.style.display='block';
					bottom.face.style.transform='rotateX(-90deg) translateZ('+((data.height/2)*80/100)+'px)';
					bottom.face.style.webkitTransform='rotateX(-90deg) translateZ('+((data.height/2)*80/100)+'px)';
					bottom.face.style.mozTransform='rotateX(-90deg) translateZ('+((data.height/2)*80/100)+'px)';
					*/
				}
				var whichFace=0;
				var rotateFromValue=-90;
				var rotateToValue=0;
				createFace(data.faces[whichFace]);
				W.addEventListener('load',function(event) {
					data.focus=true;
					start();
				},false);
				W.addEventListener('focus',function(event) {
					data.focus=true;
				},false);
				W.addEventListener('blur',function(event) {
					data.focus=false;
				},false);
				function start() {
					setTimeout(function() {
						var oldTime=new Date().getTime();
						var rotateCubeThread=setInterval(function() {
							if(data.focus==false) return;
							var newTime=new Date().getTime();
							var diff=newTime-oldTime;
							if(diff>=5000) {
								oldTime=newTime;
								if(rotateToValue<360) {
									rotateFromValue+=90;
									rotateToValue+=90;
									rotateFrom(rotateFromValue,rotateToValue);
									if(whichFace!=-1&&whichFace<3) {
										++whichFace;
										createFace(data.faces[whichFace]);
									} else {
										whichFace=-1;
									}
								} else {
									/*if(data.type=='Programmatic') {
										clearInterval(rotateCubeThread);
										return;
									}*/
									rotateFromValue=0;
									rotateToValue=90;
									rotateFrom(rotateFromValue,rotateToValue);
								}
							}
						},1);
						function rotateFrom(rotateFromValue,rotateToValue) {
							var rotateInterval=setInterval(function(){
								if(rotateFromValue>rotateToValue) {
									clearInterval(rotateInterval);
									return;
								}
								data.cube.style.transition='all 0.1s ease-in-out';
								data.cube.style.webkitTransition='all 0.1s ease-in-out';
								data.cube.style.mozTransform='all 0.1s ease-in-out';
								if(data.size=='728x90') {
									data.cube.style.transform='translateZ(-45px) rotateX('+rotateFromValue+'deg) rotateY(0deg)';
									data.cube.style.webkitTransform='translateZ(-45px) rotateX('+rotateFromValue+'deg) rotateY(0deg)';
									data.cube.style.mozTransform='translateZ(-45px) rotateX('+rotateFromValue+'deg) rotateY(0deg)';
								} else {
									data.cube.style.transform='translateZ(-'+data.width/2+'px) rotateX(0deg) rotateY('+rotateFromValue+'deg)';
									data.cube.style.webkitTransform='translateZ(-'+data.width/2+'px) rotateX(0deg) rotateY('+rotateFromValue+'deg)';
									data.cube.style.mozTransform='translateZ(-'+data.width/2+'px) rotateX(0deg) rotateY('+rotateFromValue+'deg)';
								}
								++rotateFromValue;
							},10);
						}
					},5000);
				}
			}
		})(window,window.document);
	} catch(ex) {
		log(ex.message);
	}


})();