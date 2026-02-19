// Created by iWeb 3.0.2 local-build-20101030

function createMediaStream_id2()
{return IWCreateMediaCollection("http://davidandshawna.us/David_and_Shawna/Photos/Photos_files/rss.xml",true,255,["No photos yet","%d photo","%d photos"],["","%d clip","%d clips"]);}
function initializeMediaStream_id2()
{createMediaStream_id2().load('http://davidandshawna.us/David_and_Shawna/Photos',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget8'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id2',{pageIndex:0}));});}
function layoutMediaGrid_id2(range)
{createMediaStream_id2().load('http://davidandshawna.us/David_and_Shawna/Photos',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id2',new IWPhotoGridLayout(2,new IWSize(288,216),new IWSize(288,38),new IWSize(302,269),27,27,0,new IWSize(16,16)),new IWPhotoFrame([IWCreateImage('Photos_files/Crayon_BK_v4%20%2801%29.png'),IWCreateImage('Photos_files/Crayon_BK_v4%20%2802%29.png'),IWCreateImage('Photos_files/Crayon_BK_v4%20%2803%29.png'),IWCreateImage('Photos_files/Crayon_BK_v4%20%2805%29.png'),IWCreateImage('Photos_files/Crayon_BK_v4%20%2808%29.png'),IWCreateImage('Photos_files/Crayon_BK_v4%20%2807%29.png'),IWCreateImage('Photos_files/Crayon_BK_v4%20%2806%29.png'),IWCreateImage('Photos_files/Crayon_BK_v4%20%2804%29.png')],null,0,0.350000,19.000000,19.000000,19.000000,19.000000,41.000000,41.000000,41.000000,41.000000,2.000000,1.000000,2.000000,1.000000,null,null,null,0.100000),imageStream,range,(null),null,1.000000,null,'../Media/slideshow.html','widget8',null,'widget9',{showTitle:true,showMetric:true})});}
function relayoutMediaGrid_id2(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id2(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id2(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('../Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','../Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','../Media/Photo-Overlay-Movie.png')
loadMozillaCSS('Photos_files/PhotosMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');NotificationCenter.addObserver(null,relayoutMediaGrid_id2,'RangeChanged','id2')
fixupAllIEPNGBGs();fixAllIEPNGs('../Media/transparent.gif');Widget.onload();fixupIECSS3Opacity('id3');initializeMediaStream_id2()
performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
