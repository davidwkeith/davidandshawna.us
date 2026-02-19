// Created by iWeb 3.0.2 local-build-20100911

function createMediaStream_id3()
{return IWCreatePhotocast("http://davidandshawna.us/David_and_Shawna/Photos/Pages/Pixar_files/rss.xml",true);}
function initializeMediaStream_id3()
{createMediaStream_id3().load('http://davidandshawna.us/David_and_Shawna/Photos/Pages',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget0'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id3',{pageIndex:0}));});}
function layoutMediaGrid_id3(range)
{createMediaStream_id3().load('http://davidandshawna.us/David_and_Shawna/Photos/Pages',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id3',new IWPhotoGridLayout(3,new IWSize(218,218),new IWSize(218,42),new IWSize(219,275),27,27,0,new IWSize(8,8)),new IWPhotoFrame([IWCreateImage('Pixar_files/Modern_C_TL.png'),IWCreateImage('Pixar_files/Modern_S_T.png'),IWCreateImage('Pixar_files/Modern_C_TR.png'),IWCreateImage('Pixar_files/Modern_S_R.png'),IWCreateImage('Pixar_files/Modern_C_BR.png'),IWCreateImage('Pixar_files/Modern_S_B.png'),IWCreateImage('Pixar_files/Modern_C_BL.png'),IWCreateImage('Pixar_files/Modern_S_L.png')],null,2,0.197158,0.000000,0.000000,0.000000,0.000000,17.000000,17.000000,17.000000,20.000000,40.000000,40.000000,40.000000,240.000000,null,null,null,0.100000),imageStream,range,null,null,1.000000,{backgroundColor:'rgb(0, 0, 0)',reflectionHeight:100,reflectionOffset:2,captionHeight:100,fullScreen:0,transitionIndex:2},'../../Media/slideshow.html','widget0','widget1','widget2')});}
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
loadMozillaCSS('Pixar_files/PixarMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');NotificationCenter.addObserver(null,relayoutMediaGrid_id3,'RangeChanged','id3')
fixupAllIEPNGBGs();fixAllIEPNGs('../../Media/transparent.gif');Widget.onload();fixupIECSS3Opacity('id4');initializeMediaStream_id3()
performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
