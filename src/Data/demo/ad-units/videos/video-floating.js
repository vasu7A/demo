var bxVid={
	adUnit:'Video In-Read',
	log:function() {
		var obj=null;
		if(arguments.length>0) {
			obj=arguments[0];
		} else {
			obj=bxVid;
		}
		var dt=new Date();
		var prefix='\u26A1\x1b[36m['+dt.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })+'] '+bxVid.adUnit+'\u21FE ';
		if(typeof(obj)==='string') {
			console.log(prefix+obj);
		} else {
			console.log(prefix);
			console.log(obj);
		}
	},
	getRandomInt:function(min,max) { return Math.floor(Math.random()*(max-min+1))+min; },
	generateId:function() {
	 var ts=(+new Date).toString();
	 var parts=ts.split('').reverse();
	 var id='';
	 for(var i=0;i<8;++i) {
		var index=bxVid.getRandomInt(0,parts.length-1);
		id+=parts[index];
	 }
	 return id;
	},
	getIframeWindow:function(iframe_object) {
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
	},
	isWindow:function(obj) { return obj!=null && obj===obj.window; },
	getWindow:function(elem) { return bxVid.isWindow(elem) ? elem : elem.nodeType===9 && elem.defaultView; },
	round:function(value,decimals) { return (Number(Math.round(value+"e"+decimals)+"e-"+decimals)).toFixed(decimals); },
	offset:function(elem) {
		var docElem,win,
		box={top:0,left:0},
		doc=elem && elem.ownerDocument;
		docElem=doc.documentElement;
		if(typeof(elem.getBoundingClientRect)!== typeof(undefined)) {
			box=elem.getBoundingClientRect();
		}
		win=bxVid.getWindow(doc);
		return {
			top: box.top+win.pageYOffset-docElem.clientTop,
			left: box.left+win.pageXOffset-docElem.clientLeft
		};
	},
	getDim:function(element) {
		return {
			width: element.getBoundingClientRect().width,
			height: element.getBoundingClientRect().height,
			left: bxVid.offset(element).left,
			top: bxVid.offset(element).top
		};
	},
	saveSettings:function() {
		bxVid.settings={};
		bxVid.instances=[];
		bxVid.counter=1;
		bxVid.userAgent=navigator.userAgent||navigator.vendor||window.opera;
		bxVid.userAgentPart=bxVid.userAgent.substr(0,4);

		bxVid.device='mobile';
		if(
				!(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(bxVid.userAgentPart))
			) {
			bxVid.device='desktop';
		}

        bxVid.screenHeight=window.screen.availHeight;
        bxVid.screenWidth=window.screen.availWidth
        //bxVid.log(bxVid.screenHeight+'*'+bxVid.screenWidth);
		var tas=document.getElementsByTagName('textarea');
		/*var params={};
		for(var i=0;i<tas.length;++i) {
			params[tas[i].getAttribute('name')]=tas[i].value;
		}*/
		var params={
			"third_party": null,
			"width": "640",
			"height": "360",
			"videoContent_url": "https://video-hub.bidsxchange.com/videos/sports/video/en/en-popular-winter-sports.mp4",
			"videoContent_thumbnail": "https://video-hub.bidsxchange.com/videos/sports/thumbnail/popular-winter-sports.jpg",
			"videoContent_loop": "NO",
			"close_button": "NO",
			"closeBtn_position": "outter-right",
			"closeBtn_text": "Ad by Bidsxchange",
			"closeBtn_height": "18",
			"closeBtn_width": "18",
			"skip_home": "NO",
			"skip_urls_ending_with": "",
			"skip_urls_containing": "",
			"show_logo": "YES",
			"show_logoToolTip": "YES",
			"Logo_text": "Ad by Bidsxchange",
			"Logo_text_fontSize": "18",
			"pubLogo_url": "https://admin.bidsxchange.com/images/shards-dashboards-logo.png",
			"pubLogo_lpu": "https://streamlyn.com/products-seller",
			"logo_position": "left",
			"logo_height": "30",
			"logo_width": "30",
			"refresh_time": "30",
			"content_identifier": "Tag",
			"content_numbers": "3",
			"content_helper": "p",
			"alignment": "center",
			"margin_left": "0",
			"margin_bottom": "10",
			"margin_top": "0",
			"margin_right": "0",
			"z_index": "999999",
			"floating_onStart": "YES",
			"floating_closeButton": "YES",
			"floating_percentage": "60",
			"floating_placement": "right",
			"vastTag": "https://pubads.g.doubleclick.net/gampad/live/ads?iu=/21674279164/BDX-Demo-Video-Ad&description_url=https%3A%2F%2Fstreamlyn.com%2F&tfcd=0&npa=0&sz=640x360&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator=[AV_RANDOM]"
		}
        bxVid.log(params);
        bxVid.videoContent_url=params.videoContent_url;
        bxVid.videoContent_thumbnail=params.videoContent_thumbnail;
        bxVid.loop=(params.loop=='yes')?true:false;
		//params.third_party=(params.third_party.length>0)?params.third_party:null;
		bxVid.third_party=params.third_party;
		bxVid.width=parseInt(params.width);
		bxVid.height=parseInt(params.height);
		if(isNaN(parseInt(params.z_index))){bxVid.z_index='999999';}else{bxVid.z_index=parseInt(params.z_index);}
		bxVid.close_button=params.close_button;
		bxVid.skip_home=(params.skip_home.toLowerCase()=='yes')?true:false;
		bxVid.skip_urls_ending_with=(params.skip_urls_ending_with.length>0)?params.skip_urls_ending_with.length:null;
		bxVid.skip_urls_containing=(params.skip_urls_containing.length>0)?params.skip_urls_containing.length:null;
		bxVid.refresh_time=parseInt(params.refresh_time);
		bxVid.Next_Previous=false;
		bxVid.playbackRates=false;

		bxVid.vastTag=params.vastTag;
		bxVid.isClosed=false;
		bxVid.closeBtn_position=params.closeBtn_position; //outter-left,outter-right,inner-right,inner-left
        //bxVid.closeBtn_position='inner-right';
		bxVid.closeBtn_text =params.closeBtn_text;
        bxVid.closeBtn_height =params.closeBtn_height;
        bxVid.closeBtn_width =params.closeBtn_width;

		bxVid.pubLogo=params.pubLogo_url;
		//bxVid.pubLogo='https://media.streamlyn.com/wp-content/uploads/2020/04/cropped-512x512-1icon-32x32.png';
		bxVid.pubLogo_lpu=params.pubLogo_lpu;
		bxVid.logo_position=params.logo_position; //left,right
		bxVid.logo_height=params.logo_height;
		bxVid.logo_width=params.logo_width;
		bxVid.show_logo=params.show_logo; //yes,no
		bxVid.show_logoToolTip=params.show_logoToolTip;  //yes,no
		bxVid.Logo_text=params.Logo_text;
		bxVid.Logo_text_fontSize=params.Logo_text_fontSize;
		
		bxVid.content_identifier=params.content_identifier;
		bxVid.content_numbers=params.content_numbers;
		bxVid.floating_onStart=(params.floating_onStart.toLowerCase()=='yes')?true:false;
		bxVid.floating_closeButton=(params.floating_closeButton.toLowerCase()=='yes')?true:false;
		bxVid.floating_placement=params.floating_placement;
		bxVid.floating_percentage=parseInt(params.floating_percentage); 
		bxVid.content_helper=params.content_helper;

		bxVid.margin_left=params.margin_left;
		bxVid.margin_top=params.margin_top;
		bxVid.margin_bottom=params.margin_bottom;
		bxVid.margin_right=params.margin_right;

		var status=true;
		if(bxVid.skip_home) {
			var url=bxVid.W.location.href;
			var forwardSlashCount=0;
			for(var i=0;i<url.length;++i) {
				if(url[i]=='/') {
					++forwardSlashCount;
				}
			}
			if(forwardSlashCount<=3) {
				status=false;
				bxVid.log('skipped-1');
			}
		}
		if(bxVid.skip_urls_ending_with!=null&&bxVid.W.location.href.endsWith(bxVid.skip_urls_ending_with)) {
			status=false;
			bxVid.log('skipped-2');
		} else if(bxVid.skip_urls_containing!=null&&bxVid.W.location.href.search(bxVid.skip_urls_containing)>-1) {
			status=false;
			bxVid.log('skipped-3');
		}
		if(status) {
			bxVid.Helper();
		}
		
		return status;
	},
	Helper:function() {
		var stack=[];
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
				element.querySelectorAll('a').length>0 
				//||
				//element.innerHTML.length<bxVid.content_length
			) isOk=false;
			return isOk;
		}
		function filter(element) {
			var status=false;
			if(element.classList == bxVid.content_helper){
				if(bxVid.content_identifier =='Class'){
					stack.push(element);
					status=true;
					//bxVid.log(element);
				}
			}

			if( 
				checkContent(element,'SPAN')||
				checkContent(element,'P')||
				checkContent(element,'DIV')||
				checkContent(element,'UL')||
				checkContent(element,'OL')||
				checkContent(element,'A')||
				checkContent(element,'H1')||
				checkContent(element,'H2')||
				checkContent(element,'H4')||
				checkContent(element,'H3')
				) {
					//bxVid.log(element.tagName);
					//if(bxVid.content_identifier =='Tag') {
					if(bxVid.content_identifier =='Tag' && element.tagName == bxVid.content_helper.toUpperCase()){
						//bxVid.log(element);
						var dim=bxVid.getDim(element);
						//bxVid.log(dim.height);
						var minWidth=400;
						if(bxVid.device=='mobile') minWidth=300;
						//if(dim.width>=minWidth&&dim.width<1000&&dim.height>=30) {
						if(dim.width>=minWidth&&dim.width<1000&&dim.height>=20) {
							//bxVid.log(element);
							//bxVid.log(dim.height);
							//bxVid.log(element.innerHTML.length);
							//bxVid.log(bxVid.content_length);
							stack.push(element);
							status=true;
						}
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
			//bxVid.log(parent.getElementsByClassName('media mb-4 single-media')[0]);
			var childrenArray=[];
			for(var i=0;i<children.length;++i) {
				var element=children[i];
				childrenArray.push(element);
			}
			return childrenArray;
		}
		
		var children=getChildren(document.body);
			//bxVid.log(children);
		for(var i=0;i<children.length;++i) {
			var element=children[i];
			if(filter(element)) continue;
			getTargets(element);
		}
		bxVid.stack=stack;
		if(bxVid.content_numbers=='0') {
			bxVid.stack=stack;
		} else {
			bxVid.stack=[];
			bxVid.content_numbers=bxVid.content_numbers.split(',');
			bxVid.content_numbers.forEach(function(e,i) {
				try {
					var content_number=parseInt(e);
					bxVid.stack.push(stack[content_number-1]);
				} catch(ex) {
					bxVid.log(ex.message);
				}
			});
		}
		//bxVid.log(stack);
		//bxVid.log(bxVid.stack);
	},
	startProcess:function() {
		bxVid.processHandle=setInterval(bxVid.process,1);
	},
	process:function() {
		for(var i=0;i<bxVid.instances.length;++i) {
			var instance=bxVid.instances[i];
			if(instance.isClosed) continue;
			var diff=((new Date().getTime())-instance.create_time)/1000;
			/*if(instance.google.status&&instance.google.last=='gpt') {
				if(diff>bxVid.google.time&&instance.google.isEmpty) {
					if(bxVid.google.option=='firstlook') instance.google.status=false;
					instance.render();
					//bxVid.recordRefresh(instance.main);
				}else if(diff>instance.refresh_time){
					if(bxVid.google.option=='firstlook') instance.google.status=false;
					instance.render();
					bxVid.refreshImpresions();
				}
			} else if(diff>=instance.refresh_time) {
				instance.render();
				bxVid.refreshImpresions();
			}*/
		}
	},
	refreshImpresions:function() {
		
	},
	recordRefresh:function(element) {
		
	},
	isScrolledIntoView:function(This) {
		bxVid.log(This);
		bxVid.rect = This.main.getBoundingClientRect();
		bxVid.elemTop =  bxVid.rect.top;
		bxVid.elemBottom =  bxVid.rect.bottom;

		// Only completely visible elements return true:
		//isVisible = (elemTop >= 0) && (elemBottom <= bxVid.W.innerHeight);
		// Partially visible elements return true:
		//bxVid.isVisible = bxVid.elemTop < bxVid.W.innerHeight && bxVid.elemBottom >= 0;
		bxVid.IframeWindow=This.adIframe.contentWindow;
		if(bxVid.floating_onStart){
			bxVid.isVisible = bxVid.elemTop < bxVid.W.innerHeight && bxVid.elemBottom >= Math.round((bxVid.width/100)*25);
		}else{
			bxVid.isVisible = bxVid.elemBottom >= Math.round((bxVid.width/100)*25);
		}
		bxVid.log(bxVid.isVisible);
		
		if(bxVid.isVisible){
			/*setTimeout(function() {
				bxVid.player=bxVid.IframeWindow.videojs("content_video");
				bxVid.player.play();
			},500);*/
			bxVid.resize(This.adContainer,100);
			This.adContainer.style.position='relative';
			This.adContainer.style.width=bxVid.width+'px';
			This.adContainer.style.width=bxVid.width+'px';
			This.adContainer.style.height=bxVid.height+'px';
			if(bxVid.close_button!='NO') {
				setTimeout(function() {
					bxVid.infoDiv=bxVid.D.getElementById('infoDiv');
					bxVid.infoDiv.style.position='relative';
					bxVid.infoDiv.style.width=bxVid.width+'px';
					bxVid.infoDiv.style.top='-4px';
					bxVid.infoDiv.style.right='0px';
					This.main.before(bxVid.infoDiv);
				},500);
			}else{
				setTimeout(function() {
					bxVid.infoDiv=bxVid.D.getElementById('infoDiv');
					bxVid.infoDiv.style.display='none';
					//This.main.before(bxVid.infoDiv);
				},500);
			}
		}else if(bxVid.isVisible == false && bxVid.floating_placement=='right'){
			/*setTimeout(function() {
				bxVid.player=bxVid.IframeWindow.videojs("content_video");
				bxVid.player.play();
			},500);*/
			bxVid.resize(This.adContainer,bxVid.floating_percentage);
			This.adContainer.style.position='fixed';
			This.adContainer.style.width=Math.round((bxVid.width/100)*bxVid.floating_percentage).toString()+'px';
			This.adContainer.style.height=Math.round((bxVid.height/100)*bxVid.floating_percentage).toString()+'px';
			This.main.style.height='0';
			This.adContainer.style.bottom='0';
			This.adContainer.style.right='0';
			if(bxVid.close_button!='NO' || bxVid.floating_closeButton) {
				setTimeout(function() {
					bxVid.infoDiv=bxVid.D.getElementById('infoDiv');
					bxVid.infoDiv.style.zIndex='999999';
					bxVid.infoDiv.style.display='block';
					bxVid.infoDiv.style.position='fixed';
					bxVid.infoDiv.style.width=Math.round((bxVid.width/100)*bxVid.floating_percentage).toString()+'px';
					bxVid.infoDiv.style.bottom=(Math.round((bxVid.height/100)*bxVid.floating_percentage)+14).toString()+'px';
					bxVid.infoDiv.style.right='0px';
					bxVid.infoDiv.style.top='auto';
					This.adContainer.before(bxVid.infoDiv);
				},500);
			}
		}else if(bxVid.isVisible == false && bxVid.floating_placement=='left'){
			/*setTimeout(function() {
				bxVid.player=bxVid.IframeWindow.videojs("content_video");
				bxVid.player.play();
			},500);*/
			bxVid.resize(This.adContainer,bxVid.floating_percentage);
			This.adContainer.style.position='fixed';
			This.adContainer.style.width=Math.round((bxVid.width/100)*bxVid.floating_percentage).toString()+'px';
			This.adContainer.style.height=Math.round((bxVid.height/100)*bxVid.floating_percentage).toString()+'px';
			This.main.style.height='0';
			This.adContainer.style.bottom='0';
			This.adContainer.style.left='0';

			if(bxVid.close_button!='NO' || bxVid.floating_closeButton) {
				setTimeout(function() {
					bxVid.infoDiv=bxVid.D.getElementById('infoDiv');
					bxVid.infoDiv.style.zIndex='999999';
					bxVid.infoDiv.style.display='block';
					bxVid.infoDiv.style.position='fixed';
					bxVid.infoDiv.style.width=Math.round((bxVid.width/100)*bxVid.floating_percentage).toString()+'px';
					bxVid.infoDiv.style.bottom=(Math.round((bxVid.height/100)*bxVid.floating_percentage)+14).toString()+'px';
					bxVid.infoDiv.style.left='0px';
					bxVid.infoDiv.style.top='auto';
					This.adContainer.before(bxVid.infoDiv);
				},500);
			}else{
				setTimeout(function() {
					bxVid.infoDiv=bxVid.D.getElementById('infoDiv');
					bxVid.infoDiv.style.display='none';
					//This.main.before(bxVid.infoDiv);
				},500);
			}
		}
	},
	resize:function(element,percentage) {
		percentage=percentage/100.0;
		var transformOrigin='0% 0%';
		var transform='scale('+percentage+','+percentage+')';
		/*if(alignment=='left') {
			element.style.left='0%';
		} else if(alignment=='center') {
			element.style.left='50%';
			transform+=' translate(-50%,0%)';
		} else if(alignment=='right') {
			element.style.right='0%';
		}*/
		element.style.webkitTransformOrigin=transformOrigin;
		element.style.mozTransformOrigin=transformOrigin;
		element.style.msTransformOrigin=transformOrigin;
		element.style.oTransformOrigin=transformOrigin;
		element.style.transformOrigin=transformOrigin;
		element.style.transformOrigin=transformOrigin;
		element.style.webkitTransform=transform;
		element.style.mozTransform=transform;
		element.style.msTransform=transform;
		element.style.oTransform=transform;
		element.style.transform=transform;
	},
	getComputedStyle:function(element) {
		try {
			return bxVid.W.getComputedStyle(element);
		} catch(ex) {
			return {marginBottom:0};
		}
	},
	create_close_button:function(This) {
		bxVid.IframeWindow=This.adIframe.contentWindow;
		setTimeout(function() {
            bxVid.player=bxVid.IframeWindow.videojs("content_video");
            //bxVid.log(bxVid.player);
		
			bxVid.isMouseHover = false;
			bxVid.test =  bxVid.IframeWindow.document.getElementById('content_video');
			bxVid.test.addEventListener("mouseleave", function (event) {
				bxVid.isMouseHover = false;
				bxVid.player.removeClass('vjs-user-active'); 
				bxVid.player.addClass('vjs-user-inactive'); 
				//console.log(isMouseHover);
			}, false);
			bxVid.test.addEventListener("mouseover", function (event) {
				bxVid.isMouseHover = true;
				bxVid.player.removeClass('vjs-user-inactive'); 
				bxVid.player.addClass('vjs-user-active');
				//console.log(isMouseHover);
			}, false);

			bxVid.BannerSlot=bxVid.IframeWindow.document.querySelector('.vjs-control-bar');
			//bxVid.log(bxVid.BannerSlot);
			bxVid.BannerDiv = bxVid.D.createElement('div');
            bxVid.BannerDiv.setAttribute('id','BannerDiv');
        	bxVid.BannerDiv.style.height='90px';
        	bxVid.BannerDiv.style.width='728px';
            bxVid.BannerDiv.style.position='relative';
            bxVid.BannerDiv.style.bottom='0px';
            bxVid.BannerDiv.style.background='black';
			//bxVid.BannerSlot.parentNode.insertBefore(bxVid.BannerDiv, bxVid.BannerSlot);
			//bxVid.BannerSlot.parentNode.insertBefore(bxVid.BannerDiv, bxVid.BannerSlot.nextSibling);

			bxVid.player.on('beforeplaylistitem', function() { rate = this.playbackRate(); });
			bxVid.player.on('playlistitem', function() { this.playbackRate(rate); });
			var buttonComponent = bxVid.IframeWindow.videojs.getComponent('Button');
			
			bxVid.prevButton = bxVid.IframeWindow.videojs.extend(buttonComponent, {    
				constructor: function() {
				buttonComponent.apply(this, arguments);
				this.addClass('vjs-icon-previous-item');
				this.controlText('Previous');
				},
				handleClick: function(e) {
					bxVid.player.playlist.previous();
				}
			});

			bxVid.nextButton = bxVid.IframeWindow.videojs.extend(buttonComponent, {    
				constructor: function() {
				buttonComponent.apply(this, arguments);
				this.addClass('vjs-icon-next-item');
				this.controlText('Next');
				},
				handleClick: function(e) {
					bxVid.player.playlist.next();
				// this.controlText('Next (part 3)');
				}
			});

			if(bxVid.Next_Previous){
				bxVid.IframeWindow.videojs.registerComponent('prevButton', bxVid.prevButton);
				bxVid.IframeWindow.videojs.registerComponent('nextButton', bxVid.nextButton);

				bxVid.player.getChild('controlBar').addChild('prevButton', {}, 0);
				bxVid.player.getChild('controlBar').addChild('nextButton', {}, 2);
			}

            if(bxVid.close_button!='none') {
                //bxVid.log(bxVid.IframeWindow.document.querySelector('.vjs-text-track-display'));
                bxVid.playerDiv = bxVid.IframeWindow.document.querySelector('.vjs-text-track-display');
                bxVid.contentDiv = bxVid.IframeWindow.document.querySelector('.video-js');

                bxVid.infoDiv = bxVid.D.createElement('div');
                bxVid.infoDiv.setAttribute('id','infoDiv');
                bxVid.infoDiv.style.height=bxVid.closeBtn_height+'px';
                bxVid.infoDiv.style.width=bxVid.player.width_+'px';
                bxVid.infoDiv.style.position='relative';
                if(bxVid.closeBtn_position=='inner-right'|| bxVid.closeBtn_position=='inner-left'){
                    bxVid.playerDiv.parentNode.insertBefore(bxVid.infoDiv, bxVid.playerDiv.nextSibling);
                }else{
                    bxVid.infoDiv.style.top='-4px';
                    This.main.before(bxVid.infoDiv);
                    //This.adSlot.appendChild(bxVid.infoDiv);
                }
        
                bxVid.closeBtn = bxVid.D.createElement('a');
                bxVid.infoDiv.appendChild(bxVid.closeBtn);
                bxVid.closeBtn.setAttribute('id','close_button');
                bxVid.closeBtn.setAttribute('href','javascript:;');
                bxVid.closeBtn.addEventListener('click',function(event) {
                    console.log('video Player closed');
                    //console.log(player.eventBusEl_);
                    if(bxVid.closeBtn_position=='inner-right'|| bxVid.closeBtn_position=='inner-left'){
                        //bxVid.player.eventBusEl_.parentNode.removeChild(bxVid.player.eventBusEl_);
                        This.main.parentNode.removeChild(This.main);
                    }else{
                        //bxVid.player.eventBusEl_.parentNode.removeChild(bxVid.player.eventBusEl_);
                        This.main.parentNode.removeChild(This.main);
                        bxVid.infoDiv.parentNode.removeChild(bxVid.infoDiv);
                    }
                    bxVid.isClosed=true;
                },false);
                bxVid.closeBtn.style.height=bxVid.closeBtn_height+'px';
                bxVid.closeBtn.style.width=bxVid.closeBtn_width+'px';
                bxVid.closeBtn.style.top='2px';
                bxVid.closeBtn.style.position='absolute';
                if(bxVid.closeBtn_position=='inner-right'){
                    bxVid.closeBtn.style.right='2px';
                } else if(bxVid.closeBtn_position=='inner-left'){
                    bxVid.closeBtn.style.left='2px';
                } else if(bxVid.closeBtn_position=='outter-right'){
                    bxVid.closeBtn.style.right='0px'; bxVid.closeBtn.style.top='-2px';
                }else{
                    bxVid.closeBtn.style.left='0px'; bxVid.closeBtn.style.top='-2px';
                }
                bxVid.closeBtn.innerHTML='<img width="'+bxVid.closeBtn_width+'" height="'+bxVid.closeBtn_height+'" style="width:'+bxVid.closeBtn_width+'px!important;height:'+bxVid.closeBtn_height+'px!important;min-height:'+bxVid.closeBtn_height+'px!important;" src="https://bsrv.bidsxchange.com/extras/new_close_button.png" />';

                bxVid.infoBtn = bxVid.D.createElement('a');
                bxVid.closeBtn.appendChild(bxVid.infoBtn);
                bxVid.infoBtn.setAttribute('id','info_button');
                bxVid.infoBtn.setAttribute('target','_blank');
                bxVid.infoBtn.setAttribute('href','https://streamlyn.com/products-seller');
                bxVid.infoBtn.style.height=bxVid.closeBtn_height+'px';
                bxVid.infoBtn.style.width=bxVid.closeBtn_width+'px';
                bxVid.infoBtn.style.top='0px';
                bxVid.infoBtn.style.position='absolute';
                if(bxVid.closeBtn_position=='inner-right'){
                    bxVid.infoBtn.style.right='19px'; 
                } else if(bxVid.closeBtn_position=='inner-left'){
                    bxVid.infoBtn.style.left='19px';
                } else if(bxVid.closeBtn_position=='outter-right'){ 
                    bxVid.infoBtn.style.right='19px';
                } else{
                    bxVid.infoBtn.style.left='19px';
                }
                bxVid.infoBtn.innerHTML='<img width="'+bxVid.closeBtn_width+'" height="'+bxVid.closeBtn_height+'" style="width:'+bxVid.closeBtn_width+'px!important;height:'+bxVid.closeBtn_height+'px!important;min-height:'+bxVid.closeBtn_height+'px!important;" src="https://bsrv.bidsxchange.com/extras/info_button.png" /><span class="adTooltip">&nbsp; '+bxVid.closeBtn_text+' &nbsp;</span>';
                if(bxVid.closeBtn_position=='inner-right'){
                    bxVid.toolTipPos=bxVid.IframeWindow.document.querySelector('.adTooltip');
                    bxVid.toolTipPos.style.right='105%'; bxVid.toolTipPos.style.borderBottomLeftRadius= '6px'; 
                }else if(bxVid.closeBtn_position=='inner-left'){
                    bxVid.toolTipPos=bxVid.IframeWindow.document.querySelector('.adTooltip');
                    bxVid.toolTipPos.style.left='105%'; bxVid.toolTipPos.style.borderBottomRightRadius= '6px'; 
                }else if(bxVid.closeBtn_position=='outter-right'){ 
                    bxVid.toolTipPos=bxVid.D.querySelector('.adTooltip');
                    bxVid.toolTipPos.style.right='112%'; bxVid.toolTipPos.style.borderTopLeftRadius= '6px';  bxVid.toolTipPos.style.top='4px'; bxVid.toolTipPos.style.height='22px'; bxVid.toolTipPos.style.padding='0px 0px';
                }else{
                    bxVid.toolTipPos=bxVid.D.querySelector('.adTooltip');
                    bxVid.toolTipPos.style.left='112%'; bxVid.toolTipPos.style.borderTopRightRadius= '6px';  bxVid.toolTipPos.style.top='4px'; bxVid.toolTipPos.style.height='22px'; bxVid.toolTipPos.style.padding='0px 0px';
                }


                bxVid.logoTag = bxVid.D.createElement('a');
                bxVid.logoTag.setAttribute('id','pubLogo');
                bxVid.logoTag.setAttribute('target','_blank');
                bxVid.logoTag.setAttribute('href',''+bxVid.pubLogo_lpu+'');
                if(bxVid.show_logo=='YES'){
                    bxVid.logoTag.style.display='block';
                } else{
                    bxVid.logoTag.style.display='none';
                }
                bxVid.logoTag.style.height=bxVid.logo_height+'px';
                bxVid.logoTag.style.width=bxVid.logo_width+'px';
                bxVid.logoTag.style.top='25px';
                bxVid.logoTag.style.position='absolute';
                if(bxVid.logo_position=='right'){
                    bxVid.logoTag.style.right='5px';
                } else{
                    bxVid.logoTag.style.left='10px';
                }
                bxVid.logoTag.innerHTML='<img width="'+bxVid.logo_width+'" height="'+bxVid.logo_height+'" style="width:'+bxVid.logo_width+'px!important;height:'+bxVid.logo_height+'px!important;min-height:'+bxVid.logo_height+'px!important;" src="'+bxVid.pubLogo+'" /><span class="logoTooltip">&nbsp; '+bxVid.Logo_text+' &nbsp;</span>';
                bxVid.playerDiv.parentNode.insertBefore(bxVid.logoTag, bxVid.playerDiv.nextSibling);
                bxVid.LogoTipPos= bxVid.IframeWindow.document.querySelector('.logoTooltip');
				bxVid.LogoTipPos.style.fontSize=bxVid.Logo_text_fontSize+'px';
                if(bxVid.show_logoToolTip=='YES'){ bxVid.LogoTipPos.style.display='block'; } else{ bxVid.LogoTipPos.style.display='none'; }
                if(bxVid.logo_position=='right'){
                    bxVid.LogoTipPos.style.right='105%'; bxVid.LogoTipPos.style.borderBottomLeftRadius= '6px';  bxVid.LogoTipPos.style.borderTopLeftRadius= '6px'
                }else {
                    bxVid.LogoTipPos.style.left='105%'; bxVid.LogoTipPos.style.borderBottomRightRadius= '6px';  bxVid.LogoTipPos.style.borderTopRightRadius= '6px';
                }
            }
        },500);
	},
	createAd:function(target) {
		//bxVid.log(target);
		var This=this;
		This.isClosed=false;
		This.index=0;
		This.z_index=bxVid.z_index;
		This.zoom_percentage=bxVid.zoom_percentage;
		This.refresh_time=bxVid.refresh_time;
		This.id=bxVid.generateId();
		
		This.refresh_time=bxVid.refresh_time;
		This.target=target;	
		This.getCSS=function() { return bxVid.getComputedStyle(This.target); };
		This.main=bxVid.D.createElement('div');
		This.target.parentNode.insertBefore(This.main,This.target.nextSibling);
		This.main.setAttribute('id','main-'+This.id);
		This.main.style.position='relative';

		This.adContainer=bxVid.D.createElement('div');
		This.main.appendChild(This.adContainer);
		This.adContainer.setAttribute('id','adContainer-'+This.id);
		This.adContainer.style.width=bxVid.width+'px';
		This.adContainer.style.position='absolute';
		//This.adContainer.style.marginTop=bxVid.closeBtn_height+'px';
		This.adContainer.style.margin='auto';
		This.adContainer.style.zIndex='999999999';

		This.adSlot=bxVid.D.createElement('div');
		This.adContainer.appendChild(This.adSlot);
		This.adSlot.setAttribute('id','adSlot-'+This.id);
		This.adSlot.style.width=bxVid.width+'px';
		This.adSlot.style.position='absolute';
		This.adSlot.style.left='0px';

		This.close_button_height=0;

		This.adSlot.style.top=This.close_button_height+'px';
		This.main.style.height=(bxVid.height+This.close_button_height+'px');
		This.adContainer.style.height=(bxVid.height+This.close_button_height+'px');
		This.adSlot.style.height=bxVid.height+'px';
		This.set=function() {
			//This.main.style.marginTop='-'+This.getCSS().marginBottom;
			//This.main.style.marginBottom=This.getCSS().marginBottom;
			This.main.style.marginTop=bxVid.margin_top+'px';
			This.main.style.marginLeft=bxVid.margin_left+'px';
			This.main.style.marginBottom=bxVid.margin_bottom+'px';
			This.main.style.marginRight=bxVid.margin_right+'px';
			This.main.style.width=bxVid.getDim(This.target).width+'px';
			This.main.style.zIndex=This.z_index;
			bxVid.resize(This.adContainer,100);
			for(var percentage=100;bxVid.getDim(This.adContainer).width>bxVid.getDim(This.main).width;--percentage)
				bxVid.resize(This.adContainer,percentage);
                This.main.style.height=bxVid.getDim(This.adContainer).height+'px';
			
			bxVid.isScrolledIntoView(This);
		};
		This.render=function() {
			This.adIframe=bxVid.D.createElement('iframe');
			This.adSlot.appendChild(This.adIframe);
			This.adIframe.setAttribute('id','adIframe-'+This.id);
			This.adIframe.style.width=bxVid.width+'px';
			This.adIframe.style.height=bxVid.height+'px';
			This.adIframe.style.margin='0px';
			This.adIframe.style.padding='0px';
			This.adIframe.style.overflow='hidden';
			This.adIframe.style.position='relative';
			This.adIframe.style.zIndex='99999999';
			This.adIframe.style.bottom=bxVid.closeBtn_height+'px';
			This.adIframe.setAttribute('width',bxVid.width);
			This.adIframe.setAttribute('height',bxVid.height);
			This.adIframe.setAttribute('src','about:blank');
			This.adIframe.setAttribute('allow','autoplay;fullscreen;');
			This.adIframe.setAttribute('frameborder',0);
			This.adIframe.setAttribute('scrolling','no');
			This.adIframe.setAttribute('marginheight',0);
			This.adIframe.setAttribute('marginwidth',0);
			This.adIframeCtl=bxVid.getIframeWindow(This.adIframe);
			This.adIframe.gpt_callback=function(event) { bxVid.google.isEmpty=event.isEmpty; };
			This.adIframeCtl.document.open();
			if(bxVid.playbackRates){
				bxVid.ShowPlaybackRates='playbackRates: [0.5, 1, 1.5, 2]';
			}
			var html='';
				html+='<!doctype html>';
				html+='<html>';
				html+='<head>';
				html+='<link rel="stylesheet" href="//dev.streamlyn.com/video/ima/css/video-js.min.css">'
                html+='<link rel="stylesheet" href="//dev.streamlyn.com/video/ima/css/videojs.ads.css" />'
                html+='<link rel="stylesheet" href="//dev.streamlyn.com/video/ima/css/videojs.ima.css" />'
                html+='<link rel="stylesheet" href="//dev.streamlyn.com/video/ima/css/style.css" />'
				html+='<link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Poppins" />'
				html+='</head>';
				html+='<body topmargin=0 leftmargin=0 marginwidth=0 marginheight=0>';
				html+='<video id="content_video" class="video-js" controls poster="https://video-hub.bidsxchange.com/videos/arts/thumbnail/things-to-know-before-you-get-a-tattoo.jpg" preload="auto" muted autoplay width="640" height="360"><source src="https://video-hub.bidsxchange.com/videos/arts/video/en/en-things-to-know-before-you-get-a-tattoo.mp4" type="video/mp4"></video>'
                html+='<script type="text/javascript" src="//imasdk.googleapis.com/js/sdkloader/ima3.js"></script>'
                html+='<script type="text/javascript" src="//dev.streamlyn.com/video/ima/js/video.min.js"></script>'
                html+='<script type="text/javascript" src="//dev.streamlyn.com/video/ima/js/videojs.ads.min.js"></script>'
                html+='<script type="text/javascript" src="//dev.streamlyn.com/video/ima/js/videojs.ima.js"></script>'
				html+='<script>var player=videojs("content_video", {'+bxVid.ShowPlaybackRates+',loop: '+bxVid.loop+'}),options={id:"content_video",adTagUrl:"'+bxVid.vastTag+'"};player.ima(options);var contentPlayer=document.getElementById("content_video_html5_api");(navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/Android/i))&&contentPlayer.hasAttribute("controls")&&contentPlayer.removeAttribute("controls");var initAdDisplayContainer=function(){player.ima.initializeAdDisplayContainer(),wrapperDiv.removeEventListener(startEvent,initAdDisplayContainer)},startEvent="click";(navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/Android/i))&&(startEvent="touchend");var wrapperDiv=document.getElementById("content_video");wrapperDiv.addEventListener(startEvent,initAdDisplayContainer);</script>'
				html+='</body>';
				html+='</html>';
			This.adIframeCtl.document.write(html);
			This.adIframeCtl.document.close();
			This.create_time=new Date().getTime();
			bxVid.adSelector=This.adIframe;
			
		};
		This.render();
		bxVid.create_close_button(This);
		bxVid.W.addEventListener('resize',This.set,false);
		bxVid.W.addEventListener('scroll',This.set,false);
		bxVid.W.addEventListener('load',This.set,false);
		This.set();
	},
	boot:function() {
		//bxVid.jsonBsrvLog=bsrv;
		/*if(typeof(bxVid.W._bxVid_in_content)!=='undefined') {
			bxVid.log('DUPLICATE');
			return;
		}*/
		bxVid.W._bxVid_in_content=true;
		if(bxVid.saveSettings()==false) return;
		bxVid.startProcess();
		bxVid.stack.forEach(function(e,i) {
			setTimeout(function() {
				bxVid.instances.push(new bxVid.createAd(e));
			},1);
		});
	},
};
try {
	bxVid.W=window.top;
	bxVid.D=bxVid.W.document;
	bxVid.boot();
} catch(ex) {
	bxVid.log(ex.message);
} 