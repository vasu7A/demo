var data={};
data.adUnit='parallax';
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
function transform(element,top,left,transformOrigin,scale,translate) {
	if(top!=null) element.style.top=top;
	if(left!=null) element.style.left=left;
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
function toHTML(str) {
	var textarea1=document.createElement('textarea');
	textarea1.innerHTML=str;
	textarea1.style.display='none';
	document.body.appendChild(textarea1);
	str=textarea1.value;
	document.body.removeChild(textarea1);
	return str;
}

try {
function parseBoolean(key) { return (key=='yes')?true:false; }
(function(W,D) {

	data.id=getId();
	data.adSlot=D.getElementById('parallax');
	data.tag="<div id='id1962'><script src='https://adserver.bidsxchange.com/?id=1962&adSlot=id1962'></script></div>";
	// data.tag = "<script async src='https://securepubads.g.doubleclick.net/tag/js/gpt.js'></script><div id='gpt-passback'><script>window.googletag = window.googletag || {cmd: []};googletag.cmd.push(function() {googletag.defineSlot('/21710144538/qube-bidsxchange-300x600-1', [300, 600], 'gpt-passback').addService(googletag.pubads()).setClickUrl('%%CLICK_URL_UNESC%%');googletag.pubads().set('page_url', 'bidsxchange.com');googletag.enableServices();googletag.display('gpt-passback');});</script></div>";
	data.width=300;
	data.height=600;
	data.barHeight=20;
	data.adSlot.style.position='relative';
	data.adSlot.style.height=(getDim(data.adSlot).height+data.barHeight)+'px';
	data.adSlot.id='adSlot-'+data.id;
	// data.tag.style.transform = "scale("+ (W.innerHeight/600) +")";
	
	data.main=D.createElement('div');
	data.adSlot.appendChild(data.main);
	data.main.style.position='absolute';
	data.main.style.left='0px';
	data.main.style.top='0px';
	data.main.style.width=getDim(data.adSlot).width+'px';
	// data.main.style.width = "100%";
	data.main.style.height=(getDim(data.adSlot)+data.barHeight)+'px';
	data.main.id='main-'+data.id;
	// data.main.style.border='1px solid gray';

	data.topBar=D.createElement('div');
	data.topBar.id='topBar-'+data.id;
	data.main.appendChild(data.topBar);
	data.topBar.style.fontSize='10pt';
	data.topBar.style.color='white';
	data.topBar.style.backgroundColor='black';
	data.topBar.style.width=(getDim(data.main).width-2)+'px';
	data.topBar.style.height=(data.barHeight-1)+'px';
	// data.topBar.style.width = "100%";
	// data.topBar.style.height = (data.barHeight-1)+'px';
	data.topBar.style.textAlign='center';
	data.topBar.innerHTML='Advertisement';
	
	data.sandbox=D.createElement('div');
	data.sandbox.id='sandbox-'+data.id;
	data.main.appendChild(data.sandbox);
	data.sandbox.style.width=(getDim(data.main).width-2)+'px';
	data.sandbox.style.height='250px';
	data.sandbox.style.position='relative';
	
	data.adIframe=createAdIframe(data.sandbox,data.tag,('adIframe-'+data.id),data.width,data.height);
	data.adIframeCtl=getWindowFromIframe(data.adIframe);
	data.adIframe.style.width=data.width+'px';
	data.adIframe.style.height=data.height+'px';
	data.adIframe.style.position='fixed';
	data.adIframe.style.zIndex='99999999';
	transform(data.adIframe,'50%','50%','50% 50%',1,'-50%,-50%')
	data.top=getDim(data.adIframe).top;
	set();
	W.addEventListener('scroll',set,false);
	W.addEventListener('load',set,false);
	W.addEventListener('resize',set,false);
	function set() {
		var D=data.sandbox.getBoundingClientRect();
		var T=D.top-data.top;
		var L=0;
		var R=D.width;
		var B=D.top+D.height-data.top;
		data.adIframe.style.clip='rect('+T+'px,'+R+'px,'+B+'px,'+L+'px)';
	}
	function createAdIframe(element,tag,id,width,height) {
		var adIframe=D.createElement('iframe');
		var parentElement=element.parentNode;
		parentElement.insertBefore(adIframe,element);
		adIframe.id=id;
		adIframe.src='about:blank';
		adIframe.setAttribute('width',width);
		adIframe.setAttribute('height',height);
		adIframe.setAttribute('allow','autoplay;fullscreen;');
		adIframe.setAttribute('frameborder',0);
		adIframe.setAttribute('scrolling','no');
		adIframe.setAttribute('marginheight',0);
		adIframe.setAttribute('marginwidth',0);
		adIframe.style.width=width+'px';
		adIframe.style.height=height+'px';
		adIframe.style.margin='0px';
		adIframe.style.padding='0px';
		adIframe.style.overflow='hidden';

		var adIframeCtl=getWindowFromIframe(adIframe);
		adIframeCtl.document.open();
		var html='';
		html+='<!doctype html>';
		html+='<html>';
		html+='<head>';
		html+='</head>';
		html+='<body topmargin=0 leftmargin=0 marginwidth=0 marginheight=0>';
		html+='<body>';

		var adTag=tag;
		if(tag.search(/{{sas}}/ig)>-1) {
			adTag=tag.replace(/{{sas}}/ig,'_bx_aio');
		}
		html+=adTag;
		html+='</body>';
		html+='</html>';
		adIframeCtl.document.write(html);
		adIframeCtl.document.close();
		return adIframe;
	}
})(window,window.document);

} catch(ex) {
	log(ex.message);
}