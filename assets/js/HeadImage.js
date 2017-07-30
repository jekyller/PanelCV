/*
 Filename: HeadImage.js
 Project: rotating heads
 Type: javascript
 Author: Jan Dellsperger
 Initial Version: 14. October 2013
 
 This is the class for the head-image object. Per rotating head one headImage
 object has to be instanciated.
 
 Changelog:
 23.10.2013 - 1px where everyones front picture was shown removed
 */
var className;var imageTop;var imageLeft;var imageBottom;var imageRight;function HeadImage(className){this.className=className;this.imageLeft=$("."+this.className+">.head-image").offset().left;this.imageRight=this.imageLeft+$("."+this.className+">.head-image").width();this.imageTop=$("."+this.className+">.head-image").offset().top;this.imageBottom=this.imageTop+$("."+this.className+">.head-image").height();this.setImageDirection=function(){$("."+this.className+">.head-image").css("z-index","0");if(mouseX>=this.imageLeft&&mouseX<=this.imageRight&&mouseY<=this.imageTop){$("."+this.className+">.up").css("z-index","1");}else if(mouseX<this.imageLeft&&mouseY<this.imageTop){$("."+this.className+">.up-left").css("z-index","1");}else if(mouseX<=this.imageLeft&&mouseY>=this.imageTop&&mouseY<=this.imageBottom){$("."+this.className+">.left").css("z-index","1");}else if(mouseX<this.imageLeft&&mouseY>this.imageBottom){$("."+this.className+">.down-left").css("z-index","1");}else if(mouseX>=this.imageLeft&&mouseX<=this.imageRight&&mouseY>=this.imageBottom){$("."+this.className+">.down").css("z-index","1");}else if(mouseX>this.imageRight&&mouseY>this.imageBottom){$("."+this.className+">.down-right").css("z-index","1");}else if(mouseX>=this.imageRight&&mouseY>=this.imageTop&&mouseY<=this.imageBottom){$("."+this.className+">.right").css("z-index","1");}else if(mouseX>this.imageRight&&mouseY<this.imageTop){$("."+this.className+">.up-right").css("z-index","1");}else{$("."+this.className+">.front").css("z-index","1");$(".text-holder").css("display","none");$("."+this.className+".text-holder").css("display","block");}};}