/*
	https://demo.bidsxchange.com/demo/qube-300x600.html
*/
(function(){
	var data={};
	data.tags={};
	data.closeButton='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfjCRMHJDWxrGqMAAAAfElEQVQoz4WRsRHCMAxFv2jCAvjwTMxLFggdqeKCHbKAy0cDZxsJUKE76z/ZX5Zx06SL7XJB0qwqVqCQvEwB7uLEBjzIg/yunvtDDmU5xMkjEsqdqfLKznS75aP7oCgs6v/9RLMW/svo3CF+sAGJ5+6Qf8syFh2/rvuq+gQCIMf5MCc1PgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOS0wOS0xOVQwNzozNjo1MyswMDowMMALQagAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTktMDktMTlUMDc6MzY6NTMrMDA6MDCxVvkUAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg==';

	data.tags=[];
	data.width=300;
	data.height=600;
	data.tags.push('./images/300x600/300x600-1.png');
	data.tags.push('./images/300x600/300x600-2.png');
	data.tags.push('./images/300x600/300x600-3.png');
	data.tags.push('./images/300x600/300x600-4.png');
	/*
	data.tags['300x600'].push("<script src='https://www.googletagservices.com/tag/js/gpt.js'>googletag.pubads().definePassback('/21710144538/dp-streamlyncreativetype1-300x600', [300, 600]).display();</script>");
	data.tags['300x600'].push("<script src='https://www.googletagservices.com/tag/js/gpt.js'>googletag.pubads().definePassback('/21710144538/dp-streamlyncreativetype2-300x600', [300, 600]).display();</script>");
	data.tags['300x600'].push("<script src='https://www.googletagservices.com/tag/js/gpt.js'>googletag.pubads().definePassback('/21710144538/dp-streamlyncreativetype3-300x600', [300, 600]).display();</script>");
	data.tags['300x600'].push("<script src='https://www.googletagservices.com/tag/js/gpt.js'>googletag.pubads().definePassback('/21710144538/dp-streamlyncreativetype4-300x600', [300, 600]).display();</script>");
	*/
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
		faceData.iframe=faceData.doc.createElement('img');
		faceData.face.appendChild(faceData.iframe);
		faceData.iframe.style.width=faceData.width+'px';
		faceData.iframe.style.height=faceData.height+'px';
		faceData.iframe.setAttribute('src',faceData.tag);
		faceData.iframe.setAttribute('width',faceData.width);
		faceData.iframe.setAttribute('height',faceData.height);
		log(faceData.width+'x'+faceData.height+'-'+faceData.face.id);
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
		/*
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
		*/
		/*
		if(typeof(faceData.iframe)!=='undefined') {
			faceData.face.removeChild(faceData.iframe);
			return;
		}
		*/
	}	
	try {
		(function(W,D){
			data.adSlot=D.getElementById('_bx_cube');
			W._bx_af_close=function() { data.adSlot.parentElement.removeChild(data.adSlot); };
			data.adSlot.style.webkitBoxShadow='1px 2px 10px 0px rgba(0,0,0,0.75)';
			data.adSlot.style.mozBoxShadow='1px 2px 10px 0px rgba(0,0,0,0.75)';
			data.adSlot.style.msBoxShadow='1px 2px 10px 0px rgba(0,0,0,0.75)';
			data.adSlot.style.boxShadow='1px 2px 10px 0px rgba(0,0,0,0.75)';
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
					data.adSlotIframeCtl.document.body.appendChild(data.close_button);
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