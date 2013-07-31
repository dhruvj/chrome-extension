// JavaScript Document

	var data;
	var i = 0;
	function getCookie(){
		
		
		chrome.cookies.get({ url: "https://www.facebook.com/" ,name : "chrome_extension_for_facebook" }, function (cookie) {
				
			 data = cookie.value; 
			 var dataa = data.split('|');
			 //alert(data);
			 var codeXXX = " $('#pagelet_ego_pane_w,#pagelet_ego_pane,.ego_section').hide('highlight',300); $(function() {  $( '#home_stream' ).sortable();    $( '#home_stream' ).disableSelection();  });            $('li[class*=uiUnifiedStory]').each(function(){   var i=0; var temp=0; var dataxxx = '"+data+"'; var x = dataxxx.split('|'); for( ; i < "+dataa.length+" - 1; i++){ if ($(this).find('.actorDescription.actorName').children().text().search(x[i]) > -1 || $(this).find('span.userContent').text().search(x[i]) > -1 || $(this).find('.uiStreamMessage.uiStreamHeadline.uiStreamPassive').children().text().indexOf(x[i]) > -1 ){ temp=1; break; }  }     if(temp==1 ){ $(this).hide('highlight', 600);  }  else  { $(this).show('shake','fast'); }     });";
			 				// var codeXXX =  "var a = new Array(); var k;    for(k=0;k<500;k++){a[k]=0;}    k=0;  $('span.userContent').each(function(){   var i=0; var temp=0; var dataxxx = '"+data+"'; var x = dataxxx.split('|'); for( ; i < "+dataa.length+" - 1; i++){ if ($(this).text().indexOf(x[i]) > -1 ){ temp=1;a[k]=1; break; } }     if(temp==1 ){ $(this).parents('[class*=uiUnifiedStory]').hide('fast');  }  else if(a[k]==0) { $(this).parents('[class*=uiUnifiedStory]').show('fast'); } k++;    });                              k=0;                   	$('div.actorDescription.actorName').each(function(){   var i=0; var temp=0;var dataxxx = '"+data+"'; var x = dataxxx.split('|');  for( ; i < "+dataa.length+" - 1; i++){ if ($(this).children().text().indexOf(x[i]) > -1 ){temp=1;a[k]=1; break;} }     if(temp==1){ $(this).parents('[class*=uiUnifiedStory]').hide('fast');  }   else if(a[k]==0){ $(this).parents('[class*=uiUnifiedStory]').show('fast'); }   k++;  });" ;                                                               // should work allways cause its loaded when page loading completes :P ..but not working when new post load :\ 

			 		//	 var codeXXX =  " var a[50],k;for(k=0;k<50;k++)a[k]=0; k=0;$('span.userContent , div.actorDescription.actorName').each(function(){   var i=0; var temp=0;var dataxxx = '"+data+"'; var x = dataxxx.split('|');  for( ; i < "+dataa.length+" - 1; i++){           if($(this).is('span.userContent')){  if ($(this).text().indexOf(x[i]) > -1 ){temp=1; break;}   }    else {if ($(this).children().text().indexOf(x[i]) > -1 ){temp=1; break;}}     }     if(temp==1  ){   $(this).parents('[class*=uiUnifiedStory]').hide('fast');  }    });   ";  // should work allways cause its loaded when page loading completes :P ..but not working when new post load :\ 

			 	chrome.tabs.executeScript( { code :  codeXXX });
				//test
				//var script-d = "$('#see-more').click(function() { new div hide });";
				
				  //else if(!$(this).parents('[class*=uiUnifiedStory].is(':hidden')){$(this).parents('[class*=uiUnifiedStory]').show('fast');}
				
		});//ui[class*=uiList.uiStream.uiStreamHomepage]
		
				
	}//$(function() {$( 'ui[class*=uiList.uiStream.uiStreamHomepage]' ).sortable();$( 'ui[class*=uiList.uiStream.uiStreamHomepage]' ).disableSelection();});
	

	//$('ul li.userContent').each(function(){if ($(this).text().indexOf('tablet') > -1){$(this).hide('slow');}});
	//$('ul li.xyz')
	

	function checkForValidUrl(tabId, changeInfo, tab) {
		if (tab.url.indexOf('facebook.com') > -1) {
	   		
				chrome.pageAction.show(tabId);
				getCookie();
				setInterval(function(){getCookie()},1600); 
			}
		
		
			
					
					
			
	  		
		
	};
	
	
	chrome.tabs.onUpdated.addListener(checkForValidUrl); // <-
	
	
	
