// Created by iWeb 3.0.2 local-build-20100911

function createMediaStream_id3()
{return IWCreatePhotocast("http://davidandshawna.us/David_and_Shawna/Photos/Pages/Cruise_files/rss.xml",true);}
function initializeMediaStream_id3()
{createMediaStream_id3().load('http://davidandshawna.us/David_and_Shawna/Photos/Pages',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget0'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id3',{pageIndex:0}));});}
function layoutMediaGrid_id3(range)
{createMediaStream_id3().load('http://davidandshawna.us/David_and_Shawna/Photos/Pages',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id3',new IWPhotoGridLayout(3,new IWSize(211,211),new IWSize(211,42),new IWSize(219,268),27,27,0,new IWSize(12,13)),new IWPhotoFrame([IWCreateImage('Cruise_files/Silkscreen_shape_01.png'),IWCreateImage('Cruise_files/Silkscreen_shape_02.png'),IWCreateImage('Cruise_files/Silkscreen_shape_03.png'),IWCreateImage('Cruise_files/Silkscreen_shape_06.png'),IWCreateImage('Cruise_files/Silkscreen_shape_09.png'),IWCreateImage('Cruise_files/Silkscreen_shape_08.png'),IWCreateImage('Cruise_files/Silkscreen_shape_07.png'),IWCreateImage('Cruise_files/Silkscreen_shape_04.png')],null,2,0.597368,0.000000,0.000000,0.000000,0.000000,9.000000,11.000000,9.000000,9.000000,258.000000,354.000000,258.000000,354.000000,null,null,null,0.100000),imageStream,range,null,null,1.000000,{backgroundColor:'rgb(0, 0, 0)',reflectionHeight:100,reflectionOffset:2,captionHeight:100,fullScreen:0,transitionIndex:2},'../../Media/slideshow.html','widget0','widget1','widget2')});}
function relayoutMediaGrid_id3(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id3(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id3(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('../../Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','../../Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','../../Media/Photo-Overlay-Movie.png')
loadMozillaCSS('Cruise_files/CruiseMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');NotificationCenter.addObserver(null,relayoutMediaGrid_id3,'RangeChanged','id3')
fixupAllIEPNGBGs();fixAllIEPNGs('../../Media/transparent.gif');Widget.onload();fixupIECSS3Opacity('id4');initializeMediaStream_id3()
performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
