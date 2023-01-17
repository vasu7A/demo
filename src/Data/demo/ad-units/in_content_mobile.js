var data={};
data.adUnit='IA';
data.device='mobile';

var settings={};
settings.desktop_pixel='';
settings.desktop_language='english';
settings.desktop_type='in_content';
settings.desktop_tag1="<script src='https://www.googletagservices.com/tag/js/gpt.js'>googletag.pubads().definePassback('/21710144538/Engg-II-test',[728,90]).display();</script>";
settings.desktop_tag2="<script src='https://www.googletagservices.com/tag/js/gpt.js'>googletag.pubads().definePassback('/21710144538/Engg-II-test',[728,90]).display();</script>";
settings.desktop_tag3="<script src='https://www.googletagservices.com/tag/js/gpt.js'>googletag.pubads().definePassback('/21710144538/Engg-II-test',[728,90]).display();</script>";
settings.desktop_tag4="<script src='https://www.googletagservices.com/tag/js/gpt.js'>googletag.pubads().definePassback('/21710144538/Engg-II-test',[728,90]).display();</script>";
settings.desktop_tag5="<script src='https://www.googletagservices.com/tag/js/gpt.js'>googletag.pubads().definePassback('/21710144538/Engg-II-test',[728,90]).display();</script>";
settings.desktop_size='728x90';
settings.desktop_skip_home_page='no';
settings.desktop_skip_pages_ending_with='';
settings.desktop_cap=1;
settings.desktop_alternate='no';
settings.desktop_selector='';
settings.desktop_close_button='icon';
settings.desktop_close_button_size='medium';
settings.desktop_close_button_position='left';
settings.desktop_refresh_when='always';
settings.desktop_refresh_times=1;
settings.desktop_show_adchoices='no';

settings.mobile_pixel='';
settings.mobile_language='english';
settings.mobile_type='in_content';
settings.mobile_tag1="<script src='https://www.googletagservices.com/tag/js/gpt.js'>googletag.pubads().definePassback('/21710144538/Test-House-320x50',[[320,50],[300,50]]).display();</script>";
settings.mobile_tag2="<script src='https://www.googletagservices.com/tag/js/gpt.js'>googletag.pubads().definePassback('/21710144538/Test-House-320x50',[[320,50],[300,50]]).display();</script>";
settings.mobile_tag3="<script src='https://www.googletagservices.com/tag/js/gpt.js'>googletag.pubads().definePassback('/21710144538/Test-House-320x50',[[320,50],[300,50]]).display();</script>";
settings.mobile_tag4="<script src='https://www.googletagservices.com/tag/js/gpt.js'>googletag.pubads().definePassback('/21710144538/Test-House-320x50',[[320,50],[300,50]]).display();</script>";
settings.mobile_tag5="<script src='https://www.googletagservices.com/tag/js/gpt.js'>googletag.pubads().definePassback('/21710144538/Test-House-320x50',[[320,50],[300,50]]).display();</script>";
settings.mobile_size='320x50';
settings.mobile_skip_home_page='no';
settings.mobile_skip_pages_ending_with='';
settings.mobile_cap=1;
settings.mobile_alternate='no';
settings.mobile_selector='';
settings.mobile_close_button='icon';
settings.mobile_close_button_size='medium';
settings.mobile_close_button_position='left';
settings.mobile_refresh_when='always';
settings.mobile_refresh_times=1;
settings.mobile_show_adchoices='no';

function log() {
	var obj=null;
	if(arguments.length>0) {
		obj=arguments[0];
	} else {
		console.clear();
		return;
	}
	var dt=new Date();
	var prefix='\u26A1\x1b[36m['+dt.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })+'] '+data.device+'-'+data.adUnit+'\u21FE ';
	if(typeof(obj)==='string') {
		console.log(prefix+obj);
	} else {
		console.log(prefix);
		console.log(obj);
	}
}
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
	

function in_content_helper(contentLength) {
	var inContentStack=[];
	var minTop=100;
	function checkContent(element,selector) {
		if(element.nodeName!==selector) return false;
		var isOk=true;
		if( 
			element.getBoundingClientRect().top<minTop ||
			element.querySelectorAll('script').length>0 ||
			element.querySelectorAll('iframe').length>0 ||
			element.querySelectorAll('style').length>0 ||
			element.querySelectorAll('ul').length>0 ||
			element.querySelectorAll('ol').length>0 ||
			element.querySelectorAll('h1').length>0 ||
			element.querySelectorAll('h2').length>0 ||
			element.querySelectorAll('h3').length>0 ||
			element.querySelectorAll('h4').length>0 ||
			element.querySelectorAll('h5').length>0 ||
			element.querySelectorAll('h6').length>0 ||
			element.querySelectorAll('section').length>0 ||
			element.querySelectorAll('article').length>0 ||
			element.querySelectorAll('div').length>0 ||
			element.querySelectorAll('p').length>0 ||
			element.querySelectorAll('span').length>0 ||
			element.querySelectorAll('img').length>0 ||
			element.innerHTML.length<contentLength
		) isOk=false;
		return isOk;
	}
	function filter(element) {
		var status=false;
		if( 
			checkContent(element,'SPAN')||
			checkContent(element,'P')||
			checkContent(element,'DIV')||
			checkContent(element,'UL')||
			checkContent(element,'OL')||
			checkContent(element,'H3')
			) {
			var dim=getDim(element);
			var minWidth=400;
			if(data.device=='mobile') minWidth=300;
			if(dim.width>=minWidth&&dim.width<1000&&dim.height>=50) {
				inContentStack.push(element);
				status=true;
			}
		}
		return status;
	}
	function getTargets(element) {
		var children=getChildren(element);
		for(var i=0;i<children.length;++i) {
			var element=children[i];
			if(filter(element)) {
				continue;
			}
			getTargets(element);
		}
	}
	function getChildren(parent) {
		var children=parent.childNodes;
		var childrenArray=[];
		for(var i=0;i<children.length;++i) {
			var element=children[i];
			childrenArray.push(element);
		}
		return childrenArray;
	}
	var children=getChildren(D.body);
	for(var i=0;i<children.length;++i) {
		var element=children[i];
		if(filter(element)) continue;
		getTargets(element);
	}
	return inContentStack;
}

	data.tags=[];
	for(var i=1;i<6;++i) {
		if(settings[data.device+'_tag'+i].length>0) {
			data.tags.push(toHTML(settings[data.device+'_tag'+i]));
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
	data.type=settings[data.device+'_type'];
	data.skip_home_page=(settings[data.device+'_skip_home_page']=='yes')?true:false;
	data.skip_pages_ending_with=settings[data.device+'_skip_pages_ending_with'];
	data.width=parseInt(settings[data.device+'_size'].split('x')[0]);
	data.height=parseInt(settings[data.device+'_size'].split('x')[1]);
	data.cap=parseInt(settings[data.device+'_cap']);
	data.alternate=(settings[data.device+'_alternate']=='yes')?true:false;
	data.selector=settings[data.device+'_selector'];
	data.close_button=settings[data.device+'_close_button'];

	data.language=settings[data.device+'_language'];
	data.contentLength=150;
	switch(data.language) {
		case 'english': {
			data.contentLength=150;
		} break;
		case 'chinese': {
			data.contentLength=90;
		} break;
	}

	data.close_button_size=settings[data.device+'_close_button_size'];
	data.topBarHeight=20;
	data.scaleXY=0.5;
	if(data.close_button_size=='medium') {
		data.topBarHeight=25;
		data.scaleXY=0.75;
	} else if(data.close_button_size=='large') {
		data.topBarHeight=35;
		data.scaleXY=1;
	}
	
	data.close_button_position=settings[data.device+'_close_button_position'];
	data.refresh_when=settings[data.device+'_refresh_when'];
	data.refresh_times=parseInt(settings[data.device+'_refresh_times']);
	data.show_adchoices=(settings[data.device+'_show_adchoices']=='yes')?true:false;
	data.show_adchoices=false;
	data.margin=2;

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
	data.objects=[];
	data.alternateStatus=false;
	if(data.selector.length>0) {
		var target=null;
		if(data.selector.startsWith('#')) {
			target=D.querySelector(data.selector);
		} else {
			target=Array.from(D.querySelectorAll(data.selector.split('#')[0]))[parseInt(data.selector.split('#')[1])-1];
		}
		if(target==null||typeof(target)==='undefined'||target.length==0) {
		} else {
			data.objects.push(new createAdUnit(target));
		}
	} else {
		var capture_thread=setInterval(function() {
			var targets=in_content_helper(data.contentLength);
			if(targets.length>0) {
				clearInterval(capture_thread);
				for(var i=0;i<targets.length;++i) {
					if(data.cap>0) {
						if(i<data.cap);
						else break;
					}
					if(data.alternate) {
						if(data.alternateStatus) {
							data.alternateStatus=false;
						} else {
							data.alternateStatus=true;
							data.objects.push(new createAdUnit(targets[i]));
						}
					} else {
						data.objects.push(new createAdUnit(targets[i]));
					}
				}
			}
		},1);
	}

	function createAdUnit(target) {
		var This=this;
		This.isClosed=false;
		This.id=getId();
		This.target=target;
		This.main=D.createElement('div');
		target.parentNode.insertBefore(This.main,target.nextSibling);
		This.main.id=data.adUnit+'-'+data.device+'-'+This.id;
		This.main.style.margin=data.margin+'px';
		This.main.style.width=getDim(This.target).width+'px';
		This.main.style.position='relative';
		if(data.close_button!='none') {
			This.main.style.height=(data.height+data.topBarHeight)+'px';
		} else {
			This.main.style.height=data.height+'px';
		}

		This.adContainer=D.createElement('div');
		This.adContainer.id='adContainer-'+data.adUnit+'-'+data.device+'-'+This.id;
		This.main.appendChild(This.adContainer);
		This.adContainer.style.position='absolute';
		This.adContainer.style.width=data.width+'px';
		if(data.close_button!='none') {
			This.adContainer.style.height=(data.height+data.topBarHeight)+'px';
		} else {
			This.adContainer.style.height=data.height+'px';
		}
		This.adContainer.style.bottom='0%';
		This.adContainer.style.left='50%';
		This.adContainer.style.webkitTransformOrigin='50% 100%';
		This.adContainer.style.mozTransformOrigin='50% 100%';
		This.adContainer.style.msTransformOrigin='50% 100%';
		This.adContainer.style.oTransformOrigin='50% 100%';
		This.adContainer.style.transformOrigin='50% 100%';
		This.adContainer.style.transformOrigin='50% 100%';
		This.adContainer.style.webkitTransform='translate(-50%,0%)';
		This.adContainer.style.mozTransform='translate(-50%,0%)';
		This.adContainer.style.msTransform='translate(-50%,0%)';
		This.adContainer.style.oTransform='translate(-50%,0%)';
		This.adContainer.style.transform='translate(-50%,0%)';

		This.topBar={};
		if(data.close_button!='none') {
			This.topBar.main=D.createElement('div');
			This.adContainer.appendChild(This.topBar.main);
			This.topBar.main.id=data.close_button+'-'+data.close_button_position+'-'+data.close_button_size;
			This.topBar.main.style.position='relative';
			This.topBar.main.style.width=This.width+'px';
			This.topBar.main.style.height=data.topBarHeight+'px';

			This.topBar.bar=D.createElement('div');
			This.topBar.main.appendChild(This.topBar.bar);
			This.topBar.bar.style.position='absolute';
			if(data.close_button_position=='left') {
				This.topBar.bar.style.left='0%';
			} else {
				This.topBar.bar.style.right='0%';
			}
			This.topBar.bar.style.top='0%';
			This.topBar.bar.style.width='100px';
			This.topBar.bar.style.height=data.topBarHeight+'px';
			
			This.topBar.closeButton=D.createElement('div');
			This.topBar.bar.appendChild(This.topBar.closeButton);
			This.topBar.closeButton.addEventListener('click',function() { close(This); },false);
			This.topBar.closeButton.style.width='25px';
			This.topBar.closeButton.style.height=data.topBarHeight+'px';
			This.topBar.closeButton.style.position='absolute';
			This.topBar.closeButton.style.left='0px';
			This.topBar.closeButton.style.top='5px';
			This.topBar.closeButton.style.cursor='pointer';
			This.topBar.closeButton.style.fontWeight='bolder';
			This.topBar.closeButton.style.display='inline-block';
			This.topBar.closeButton.title='Ads by Streamlyn';
			
			if(data.show_adchoices) {
				This.topBar.adchoicesImg=D.createElement('img');
				This.topBar.bar.appendChild(This.topBar.adchoicesImg);
				This.topBar.adchoicesImg.addEventListener('click',function() { W.open('https://streamlyn.com', '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes'); },false);
				This.topBar.adchoicesImg.style.width='20px';
				This.topBar.adchoicesImg.style.cursor='pointer';
				This.topBar.adchoicesImg.style.position='absolute';
				This.topBar.adchoicesImg.style.top='3px';
				This.topBar.adchoicesImg.style.left='25px';
				This.topBar.adchoicesImg.style.cursor='pointer';
				This.topBar.adchoicesImg.style.display='inline-block';
				This.topBar.adchoicesImg.setAttribute('src','http://bmwbp83489qwwkl.belugacdn.link/adchoices.png');
				if(data.close_button=='icon') {
					This.topBar.closeButton.style.top='0px';
				} else {
					This.topBar.adchoicesImg.style.left='47px';
				}
			}
			if(data.close_button=='icon') {
				This.topBar.bar.style.width='50px';
				This.topBar.closeButton.innerHTML="<svg version='1.0' xmlns='http://www.w3.org/2000/svg' width='25px' height='25px' viewBox='0 0 350 350' preserveAspectRatio='xMidYMid meet'> <g transform='translate(0.000000,350.000000) scale(0.100000,-0.100000)' fill='#000000' stroke='none'> <path d='M1400 3204 c-70 -9 -227 -45 -305 -70 -117 -37 -326 -144 -430 -219 -213 -153 -414 -396 -515 -620 -17 -38 -35 -79 -40 -90 -5 -11 -19 -49 -30 -85 -66 -207 -75 -272 -75 -515 0 -243 9 -308 75 -515 24 -75 25 -78 76 -185 52 -109 86 -165 165 -270 236 -316 555 -518 959 -608 81 -17 129 -21 320 -21 199 -1 237 2 327 22 163 37 332 98 443 161 25 15 57 33 73 40 109 56 335 262 435 396 28 39 55 75 60 80 27 32 94 160 153 290 33 72 80 250 99 370 12 73 12 410 0 480 -21 132 -64 291 -99 370 -110 246 -198 376 -365 540 -222 218 -488 360 -796 427 -74 16 -139 21 -295 23 -110 2 -216 1 -235 -1z m-419 -607 c42 -21 116 -89 339 -312 l285 -285 300 299 c293 292 301 300 359 316 135 39 263 -14 331 -137 26 -46 30 -63 30 -128 -1 -118 -13 -134 -339 -460 l-286 -285 299 -300 c286 -288 298 -302 316 -359 42 -137 -17 -270 -149 -338 -59 -31 -174 -31 -236 0 -31 15 -137 114 -335 312 l-290 290 -290 -290 c-308 -307 -331 -325 -433 -337 -112 -13 -235 61 -282 168 -27 64 -25 171 4 234 12 26 120 141 308 328 158 159 288 291 288 295 0 4 -129 135 -288 292 -190 188 -295 299 -308 325 -29 62 -31 170 -4 232 64 149 235 212 381 140z'/> </g> </svg>";
			} else {
				This.topBar.bar.style.width='70px';
				This.topBar.closeButton.innerHTML="Close";
			}
			if(data.close_button_position=='left') {
				This.topBar.bar.style.left='0%';
				This.topBar.bar.style.webkitTransformOrigin='0% 0%';
				This.topBar.bar.style.mozTransformOrigin='0% 0%';
				This.topBar.bar.style.msTransformOrigin='0% 0%';
				This.topBar.bar.style.oTransformOrigin='0% 0%';
				This.topBar.bar.style.transformOrigin='0% 0%';
				This.topBar.bar.style.transformOrigin='0% 0%';
			} else {
				This.topBar.bar.style.right='0%';
				This.topBar.bar.style.webkitTransformOrigin='100% 0%';
				This.topBar.bar.style.mozTransformOrigin='100% 0%';
				This.topBar.bar.style.msTransformOrigin='100% 0%';
				This.topBar.bar.style.oTransformOrigin='100% 0%';
				This.topBar.bar.style.transformOrigin='100% 0%';
				This.topBar.bar.style.transformOrigin='100% 0%';
			}
			This.topBar.bar.style.webkitTransform='scale('+data.scaleXY+','+data.scaleXY+')';
			This.topBar.bar.style.mozTransform='scale('+data.scaleXY+','+data.scaleXY+')';
			This.topBar.bar.style.msTransform='scale('+data.scaleXY+','+data.scaleXY+')';
			This.topBar.bar.style.oTransform='scale('+data.scaleXY+','+data.scaleXY+')';
			This.topBar.bar.style.transform='scale('+data.scaleXY+','+data.scaleXY+')';
		}
		This.adCon=null;
		This.index=0;
		This.refresh_times=data.refresh_times;
		This.render=function() {
			try { This.iframe.parentNode.removeChild(This.iframe); } catch(ex) {}
			try { This.adCon.parentNode.removeChild(This.adCon); } catch(ex) {}
			This.iframe=D.createElement('iframe');
			This.adContainer.appendChild(This.iframe);
			This.iframe.style.margin='0px';
			This.iframe.style.padding='0px';

			This.iframe.style.width=data.width+'px';
			This.iframe.style.height=data.height+'px';
			This.iframe.setAttribute('width',data.width);
			This.iframe.setAttribute('height',data.height);

			This.iframe.setAttribute('src','about:blank');
			This.iframe.setAttribute('frameborder',0);
			This.iframe.setAttribute('scrolling','no');
			This.iframe.setAttribute('marginheight',0);
			This.iframe.setAttribute('marginwidth',0);
			This.iframeWindow=This.iframe.contentWindow||This.iframe.contentDocument.document||This.iframe.contentDocument;
			This.iframeWindow.document.open();
			var content="<!doctype html><html><head><meta http-equiv='Content-Type' content='text/html; charset=utf-8' /></head><body topmargin='0' leftmargin='0' marginwidth='0' marginheight='0' style='overflow:hidden;'>";
			if(data.pixel!=null) {
				content+="<img src='"+data.pixel+"' style='display: none;' />";
				delete data.pixel;
			}
			content+=data.tags[This.index++];
			content+="</body></html>";
			This.iframeWindow.document.write(content);
			This.iframeWindow.document.close();
			This.time_created=new Date().getTime();
			log(This.index+'/'+data.tags.length+' ['+This.id+']');
		};

		This.render();

		This.set=function() {
			if(This.isClosed) {
				clearInterval(This.main_thread);
				return;
			}
			var time_now=new Date().getTime();
			var time_diff=(time_now-This.time_created)/1000;
			if(time_diff>29) {
				if(This.refresh_times>0) {
					if(This.index<data.tags.length) {
						This.render();
					} else {
						This.index=0;
						--This.refresh_times;
					}
				}
			}
			This.main.style.width=getDim(This.target).width+'px';
			if(data.close_button!='none') {
				This.main.style.height=(data.height+data.topBarHeight)+'px';
			} else {
				This.main.style.height=data.height+'px';
			}
			var adIframes=This.iframeWindow.document.body.querySelectorAll('iframe');
			var adIframe=null;
			for(var i=0;i<adIframes.length;++i) {
				if(getDim(adIframes[i]).width>=1||getDim(adIframes[i]).height>=1) {
					adIframe=adIframes[i];
					break;
				}
			}
			if(adIframe!=null) {
				var adIframeWH=getDim(adIframe);
				This.adContainer.style.width=adIframeWH.width+'px';
				if(data.close_button!='none') {
					This.adContainer.style.height=(adIframeWH.height+20)+'px';
				} else {
					This.adContainer.style.height=adIframeWH.height+'px';
				}
				var h1=getDim(This.adContainer).height;
				for(var scaleXY=1;getDim(This.adContainer).width>getDim(This.main).width;scaleXY-=0.01) {
					This.adContainer.style.bottom='0%';
					This.adContainer.style.left='50%';
					This.adContainer.style.webkitTransformOrigin='50% 0%';
					This.adContainer.style.mozTransformOrigin='50% 0%';
					This.adContainer.style.msTransformOrigin='50% 0%';
					This.adContainer.style.oTransformOrigin='50% 0%';
					This.adContainer.style.transformOrigin='50% 0%';
					This.adContainer.style.transformOrigin='50% 0%';
					This.adContainer.style.webkitTransform='translate(-50%,0%) scale('+scaleXY+','+scaleXY+')';
					This.adContainer.style.mozTransform='translate(-50%,0%) scale('+scaleXY+','+scaleXY+')';
					This.adContainer.style.msTransform='translate(-50%,0%) scale('+scaleXY+','+scaleXY+')';
					This.adContainer.style.oTransform='translate(-50%,0%) scale('+scaleXY+','+scaleXY+')';
					This.adContainer.style.transform='translate(-50%,0%) scale('+scaleXY+','+scaleXY+')';
				}
				var h2=getDim(This.adContainer).height;
				if(h2<h1) {
					This.main.style.marginBottom=-(h1-h2-5)+'px';
				}
			}
		}
		This.main_thread=setInterval(This.set,1);
	};
	function close(obj) {
		obj.main.parentElement.removeChild(obj.main);
		obj.isClosed=true;
		log('"'+obj.main.id+'" closed');
	}
})(window,window.document);
} catch(ex) {
	log(ex.message);
}