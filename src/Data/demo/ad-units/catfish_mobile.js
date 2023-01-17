var data={};
data.adUnit='LCR';
data.device='mobile';

var settings={};
settings.pixel='';

settings.desktop_position='';
settings.desktop_skip_home_page='';
settings.desktop_skip_pages_ending_with='';
settings.desktop1="";
settings.desktop2="";
settings.desktop3="";
settings.desktop4="";
settings.desktop5="";
settings.desktop_size='';
settings.desktop_resize_by_percent=0;
settings.desktop_margin_left=0;
settings.desktop_margin_bottom=0;
settings.desktop_margin_right=0;
settings.desktop_close_button='';
settings.desktop_close_button_size='';
settings.desktop_close_button_position='';
settings.desktop_refresh_times=0;
settings.desktop_show_adchoices='';

settings.mobile_position='center';
settings.mobile_skip_home_page='';
settings.mobile_skip_pages_ending_with='';
settings.mobile1="<script src='https://www.googletagservices.com/tag/js/gpt.js'>googletag.pubads().definePassback('/21710144538/Mp-Engg-ii-test',[320,50]).display();</script>";
settings.mobile2="<script src='https://www.googletagservices.com/tag/js/gpt.js'>googletag.pubads().definePassback('/21710144538/Mp-Engg-ii-test',[320,50]).display();</script>";
settings.mobile3="<script src='https://www.googletagservices.com/tag/js/gpt.js'>googletag.pubads().definePassback('/21710144538/Mp-Engg-ii-test',[320,50]).display();</script>";
settings.mobile4="<script src='https://www.googletagservices.com/tag/js/gpt.js'>googletag.pubads().definePassback('/21710144538/Mp-Engg-ii-test',[320,50]).display();</script>";
settings.mobile5="<script src='https://www.googletagservices.com/tag/js/gpt.js'>googletag.pubads().definePassback('/21710144538/Mp-Engg-ii-test',[320,50]).display();</script>";
settings.mobile_size='320x50';
settings.mobile_resize_by_percent=100;
settings.mobile_margin_left=0;
settings.mobile_margin_bottom=0;
settings.mobile_margin_right=0;
settings.mobile_close_button='icon';
settings.mobile_close_button_size='medium';
settings.mobile_close_button_position='left';
settings.mobile_refresh_times=1;
settings.mobile_show_adchoices='no';

function log() {
	var obj=null;
	if(arguments.length>0) {
		obj=arguments[0];
	} else return;
	var dt=new Date();
	var prefix='\u26A1\x1b[36m['+dt.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })+'] '+data.device+'-'+data.adUnit+'\u21FE ';
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
function toHTML(str) {
	var textarea1=document.createElement('textarea');
	textarea1.innerHTML=str;
	textarea1.style.display='none';
	document.body.appendChild(textarea1);
	str=textarea1.value;
	document.body.removeChild(textarea1);
	return str;
}
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

function transform(element,transformOrigin,scale,translate) {
	element.style.transformOrigin=transformOrigin;
	element.style.webkitTransformOrigin=transformOrigin;
	element.style.mozTransformOrigin=transformOrigin;
	element.style.msTransformOrigin=transformOrigin;
	element.style.oTransformOrigin=transformOrigin;
	element.style.transformOrigin=transformOrigin;
	element.style.webkitTransform='scale('+scale+','+scale+') translate('+translate+')';
	element.style.mozTransform='scale('+scale+','+scale+') translate('+translate+')';
	element.style.msTransform='scale('+scale+','+scale+') translate('+translate+')';
	element.style.oTransform='scale('+scale+','+scale+') translate('+translate+')';
	element.style.transform='scale('+scale+','+scale+') translate('+translate+')';
}
try {
(function(W,D){
	
	data.tags=[];
	for(var i=1;i<6;++i) {
		if(settings[data.device+i].length>0) {
			data.tags.push(toHTML(settings[data.device+i]));
		}
	}
	if(data.tags.length==0) {
		log('no '+data.device+' tags');
		return;
	}
	data.id=getId();
	if(settings.pixel!=null&&settings.pixel.length>0) {
		data.pixel=settings.pixel.trim();
		if(data.pixel.length>0) {
			data.pixel=toHTML(data.pixel);
		} else {
			data.pixel=null;
		}
	} else {
		data.pixel=null;
	}

	data.position=settings[data.device+'_position'];
	data.skip_home_page=(settings[data.device+'_skip_home_page']=='yes')?true:false;
	data.skip_pages_ending_with=settings[data.device+'_skip_pages_ending_with'];
	data.width=parseInt(settings[data.device+'_size'].split('x')[0]);
	data.height=parseInt(settings[data.device+'_size'].split('x')[1]);
	data.resize=parseInt(settings[data.device+'_resize_by_percent'])/100;
	data.margin_left=parseInt(settings[data.device+'_margin_left']);
	data.margin_bottom=parseInt(settings[data.device+'_margin_bottom']);
	data.margin_right=parseInt(settings[data.device+'_margin_right']);
	data.close_button=settings[data.device+'_close_button'];
	data.close_button_size=settings[data.device+'_close_button_size'];
	data.close_button_position=settings[data.device+'_close_button_position'];
	data.refresh_times=parseInt(settings[data.device+'_refresh_times']);
	data.show_adchoices=(settings[data.device+'_show_adchoices']=='yes')?true:false;
	data.show_adchoices=false;

	if(data.skip_pages_ending_with.length>0&&W.location.href.endsWith(settings.skip_pages_ending_with)) {
		log('triggered: skip_pages_ending_with');
		return;
	}
	if(data.skip_home_page==true) {
		var url=W.location.href;
		var forwardSlashCount=0;
		for(var i=0;i<url.length;++i) {
			if(url[i]=='/') {
				++forwardSlashCount;
			}
		}
		if(forwardSlashCount==3&&W.location.href.endsWith('/')) {
			log('triggered: skip_home_page');
			return;
		}
	}
	data.sasAdCon=null;
	data.render=false;
	data.isClosed=false;
	data.adCon=null;
	data.main=D.createElement('div');
	D.body.appendChild(data.main);
	data.main.id=data.device+'-'+data.adUnit+'-'+data.position+'-'+data.id;
	data.main.style.zIndex='99999999';
	data.main.style.backgroundColor='rgba(128,128,128,0)';
	data.main.style.width=data.width+'px';
	if(data.close_button!='none') {
		data.main.style.height=(data.height+20)+'px';
	} else {
		data.main.style.height=data.height+'px';
	}
	data.main.style.position='fixed';
	data.main.style.bottom='0%';
	switch(data.position) {
		case 'left': {
			data.main.style.left='0%';
			transform(data.main,'0% 100%',data.resize,'0%,0%');
			data.main.style.marginLeft=(data.margin_left+1)+'px';
		} break;
		case 'center': {
			data.main.style.left='50%';
			transform(data.main,'0% 100%',data.resize,'-50%,0%');
			if(data.margin_left>0) {
				data.main.style.marginLeft=(data.margin_left+1)+'px';
			}
			if(data.margin_right>0) {
				data.main.style.marginRight=(data.margin_right+1)+'px';
			}
		} break;
		case 'right': {
			data.main.style.right='0%';
			transform(data.main,'100% 100%',data.resize,'0%,0%');
			data.main.style.marginRight=(data.margin_right+1)+'px';
		} break;
	}
	data.main.style.marginBottom=(data.margin_bottom+1)+'px';

	data.index=0;
	function render() {
		data.main.innerHTML='';
		data.topBar={};
		if(data.close_button!='none') {
			data.topBar.main=D.createElement('div');
			data.main.appendChild(data.topBar.main);
			data.topBar.main.id=data.close_button+'-'+data.close_button_position+'-'+data.close_button_size;
			data.topBar.main.style.zIndex='999999999';
			data.topBar.main.style.position='relative';
			data.topBar.main.style.width=data.width+'px';
			data.topBar.main.style.height='20px';

			data.topBar.bar=D.createElement('div');
			data.topBar.main.appendChild(data.topBar.bar);
			data.topBar.bar.style.position='absolute';
			if(data.close_button_position=='left') {
				data.topBar.bar.style.left='0%';
			} else {
				data.topBar.bar.style.right='0%';
			}
			data.topBar.bar.style.top='0%';
			data.topBar.bar.style.width='100px';
			data.topBar.bar.style.height='20px';
			
			data.topBar.closeButton=D.createElement('div');
			data.topBar.bar.appendChild(data.topBar.closeButton);
			data.topBar.closeButton.addEventListener('click',function() {
				close();
			},false);
			data.topBar.closeButton.style.width='25px';
			data.topBar.closeButton.style.height='20px';
			data.topBar.closeButton.style.position='absolute';
			data.topBar.closeButton.style.left='0px';
			data.topBar.closeButton.style.top='-5px';
			data.topBar.closeButton.style.cursor='pointer';
			data.topBar.closeButton.style.fontWeight='bolder';
			data.topBar.closeButton.style.display='inline-block';
			data.topBar.closeButton.title='Ads by Streamlyn';
			
			if(data.show_adchoices) {
				data.adchoicesImg=D.createElement('img');
				data.topBar.bar.appendChild(data.adchoicesImg);
				data.adchoicesImg.addEventListener('click',function() {
					W.open('https://streamlyn.com', '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes');
				},false);
				data.adchoicesImg.style.width='20px';
				data.adchoicesImg.style.cursor='pointer';
				data.adchoicesImg.style.position='absolute';
				data.adchoicesImg.style.left='25px';
				data.adchoicesImg.style.top='3px';
				data.adchoicesImg.style.cursor='pointer';
				data.adchoicesImg.style.display='inline-block';
				data.adchoicesImg.setAttribute('src','http://bmwbp83489qwwkl.belugacdn.link/adchoices.png');
				if(data.close_button=='icon') {
				} else {
					data.adchoicesImg.style.left='47px';
				}
			}
			if(data.close_button=='icon') {
				data.topBar.bar.style.width='50px';
				data.topBar.closeButton.innerHTML="<svg version='1.0' xmlns='http://www.w3.org/2000/svg' width='25px' height='25px' viewBox='0 0 350 350' preserveAspectRatio='xMidYMid meet'> <g transform='translate(0.000000,350.000000) scale(0.100000,-0.100000)' fill='#000000' stroke='none'> <path d='M1400 3204 c-70 -9 -227 -45 -305 -70 -117 -37 -326 -144 -430 -219 -213 -153 -414 -396 -515 -620 -17 -38 -35 -79 -40 -90 -5 -11 -19 -49 -30 -85 -66 -207 -75 -272 -75 -515 0 -243 9 -308 75 -515 24 -75 25 -78 76 -185 52 -109 86 -165 165 -270 236 -316 555 -518 959 -608 81 -17 129 -21 320 -21 199 -1 237 2 327 22 163 37 332 98 443 161 25 15 57 33 73 40 109 56 335 262 435 396 28 39 55 75 60 80 27 32 94 160 153 290 33 72 80 250 99 370 12 73 12 410 0 480 -21 132 -64 291 -99 370 -110 246 -198 376 -365 540 -222 218 -488 360 -796 427 -74 16 -139 21 -295 23 -110 2 -216 1 -235 -1z m-419 -607 c42 -21 116 -89 339 -312 l285 -285 300 299 c293 292 301 300 359 316 135 39 263 -14 331 -137 26 -46 30 -63 30 -128 -1 -118 -13 -134 -339 -460 l-286 -285 299 -300 c286 -288 298 -302 316 -359 42 -137 -17 -270 -149 -338 -59 -31 -174 -31 -236 0 -31 15 -137 114 -335 312 l-290 290 -290 -290 c-308 -307 -331 -325 -433 -337 -112 -13 -235 61 -282 168 -27 64 -25 171 4 234 12 26 120 141 308 328 158 159 288 291 288 295 0 4 -129 135 -288 292 -190 188 -295 299 -308 325 -29 62 -31 170 -4 232 64 149 235 212 381 140z'/> </g> </svg>";
			} else {
				data.topBar.bar.style.width='70px';
				data.topBar.closeButton.innerHTML="Close";
			}
			var scaleXY=1;
			switch(data.close_button_size) {
				case 'small': scaleXY=0.5; break;
				case 'medium': scaleXY=0.75; break;
				case 'large': scaleXY=1; break;
			}
			if(scaleXY>0&&scaleXY<1) {
				if(data.close_button_position=='left') {
					data.topBar.bar.style.left='0%';
					data.topBar.bar.style.webkitTransformOrigin='0% 0%';
					data.topBar.bar.style.mozTransformOrigin='0% 0%';
					data.topBar.bar.style.msTransformOrigin='0% 0%';
					data.topBar.bar.style.oTransformOrigin='0% 0%';
					data.topBar.bar.style.transformOrigin='0% 0%';
					data.topBar.bar.style.transformOrigin='0% 0%';
				} else {
					data.topBar.bar.style.right='0%';
					data.topBar.bar.style.webkitTransformOrigin='100% 0%';
					data.topBar.bar.style.mozTransformOrigin='100% 0%';
					data.topBar.bar.style.msTransformOrigin='100% 0%';
					data.topBar.bar.style.oTransformOrigin='100% 0%';
					data.topBar.bar.style.transformOrigin='100% 0%';
					data.topBar.bar.style.transformOrigin='100% 0%';
				}
				data.topBar.bar.style.webkitTransform='scale('+scaleXY+','+scaleXY+')';
				data.topBar.bar.style.mozTransform='scale('+scaleXY+','+scaleXY+')';
				data.topBar.bar.style.msTransform='scale('+scaleXY+','+scaleXY+')';
				data.topBar.bar.style.oTransform='scale('+scaleXY+','+scaleXY+')';
				data.topBar.bar.style.transform='scale('+scaleXY+','+scaleXY+')';
			}
		}
		data.iframe=D.createElement('iframe');
		data.main.appendChild(data.iframe);
		data.iframe.id='LCR-iframe-'+data.id;
		data.iframe.src='about:blank';
		data.iframe.setAttribute('width',data.width);
		data.iframe.setAttribute('height',data.height);
		data.iframe.setAttribute('allow','autoplay;fullscreen;');
		data.iframe.setAttribute('frameborder',0);
		data.iframe.setAttribute('scrolling','no');
		data.iframe.setAttribute('marginheight',0);
		data.iframe.setAttribute('marginwidth',0);
		
		data.iframe.style.width=data.width+'px';
		data.iframe.style.height=data.height+'px';
		data.iframe.style.margin='0px';
		data.iframe.style.padding='0px';
		data.iframe.style.overflow='hidden';

		data.iframeWin=getWindowFromIframe(data.iframe);
		data.iframeWin.document.open();
		var html='';
		html+='<!doctype html>';
		html+='<html>';
		html+='<head>';
		html+='</head>';
		html+='<body topmargin=0 leftmargin=0 marginwidth=0 marginheight=0>';
		html+='<body>';
		html+=data.tags[data.index++];
		if(data.pixel!=null) {
			html+='<img style="width:1px; height:1px; display: none;" src="'+data.pixel+'" />';
			data.pixel=null;
		}
		html+='</body>';
		html+='</html>';
		data.iframeWin.document.write(html);
		data.iframeWin.document.close();
		log(data.index+'/'+data.tags.length);
		data.render=true;
	}
	render();	
	data.getMS=function() { return new Date().getTime()/1000; };
	data.refreshStartTime=data.getMS();
	data.getRefreshTime=function() { return data.getMS()-data.refreshStartTime; };
	data.resetRefreshTime=function() { data.refreshStartTime=data.getMS(); };

	data.main_thread=setInterval(function() {
		if(data.isClosed) {
			clearInterval(data.main_thread);
			return;
		}
		var diff=29;
		if(W.location.href.search('zoombangla.com')>-1) {
			diff=40;
		}
		if(data.getRefreshTime()>diff) {
			data.resetRefreshTime();
			if(data.index<data.tags.length) {
				render();
			} else if(data.refreshTimes>1) {
				--data.refreshTimes;
				data.index=0;
			} else {
				clearInterval(data.main_thread);
				return;
			}
		}
		var listOfElements=data.main.querySelectorAll('div');
		var target=null;
		for(var i=0;i<listOfElements.length;++i) {
			if(listOfElements[i].getAttribute('id')&&listOfElements[i].getAttribute('id').startsWith('sas')) {
				if(getDim(listOfElements[i]).width>=data.width||getDim(listOfElements[i]).height>=data.height) {
					target=listOfElements[i];
					break;
				}
			}
		}
		if(target==null) {
			listOfElements=data.iframeWin.document.body.querySelectorAll('iframe');
			for(var i=0;i<listOfElements.length;++i) {
				if(getDim(listOfElements[i]).width>=1||getDim(listOfElements[i]).height>=1) {
					target=listOfElements[i];
					break;
				}
			}
			if(target!=null&&getDim(target).width>data.width) {
				for(var scaleXY=1;getDim(target).width>data.width;scaleXY-=0.01) {
					target.style.bottom='0%';
					target.style.left='0%';
					target.style.webkitTransformOrigin='0% 0%';
					target.style.mozTransformOrigin='0% 0%';
					target.style.msTransformOrigin='0% 0%';
					target.style.oTransformOrigin='0% 0%';
					target.style.transformOrigin='0% 0%';
					target.style.transformOrigin='0% 0%';
					target.style.webkitTransform='scale('+scaleXY+','+scaleXY+')';
					target.style.mozTransform='scale('+scaleXY+','+scaleXY+')';
					target.style.msTransform='scale('+scaleXY+','+scaleXY+')';
					target.style.oTransform='scale('+scaleXY+','+scaleXY+')';
					target.style.transform='scale('+scaleXY+','+scaleXY+')';
				}
			}
		} else {
			data.iframe.style.display='none';
		}
	},1);

	function close() {
		data.main.parentElement.removeChild(data.main);
		data.isClosed=true;
		log('"'+data.main.id+'" closed');
	}

})(window,window.document);

} catch(ex) {
	log(ex.message);
}