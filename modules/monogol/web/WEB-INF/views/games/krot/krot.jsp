<%--
  Created by IntelliJ IDEA.
  User: miha
  Date: 22.12.2014
  Time: 16:17
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<style type="text/css">body{margin: 0;padding: 0;}</style>
<div id="poleGame" style="margin: 0 auto; width: 1819px;">
</div>
<%--<div id="waitGwin" style="position:absolute;z-index:1000;left:0;top:0; background:black; height:1000px;opacity: 0.8;width: 100%;">--%>
<%--<div style="color: white;font-size: 40pt;margin: 0 auto;padding: 300px;text-align: center;width: 500px;">Ожидание игроков!!</div>--%>
<%--</div>--%>

<style type="text/css">
    .classBut{
        text-shadow:white 1px 0px, white 1px 1px, white 0px 1px, white -1px 1px, white -1px 0px, white -1px -1px, white 0px -1px, white 1px -1px, white 0 0 1px, white 0 0 1px, white 0 0 1px, white 0 0 1px, white 0 0 1px, white 0 0 1px, white 0 0 1px, white 0 0 1px;
        font-color:white;
        cursor:pointer;
    }
    .classButOut {
        text-shadow: red 1px 0px, red 1px 1px, red 0px 1px, red -1px 1px, red -1px 0px, red -1px -1px, red 0px -1px, red 1px -1px, red 0 0 1px, red 0 0 1px, red 0 0 1px, red 0 0 1px, red 0 0 1px, red 0 0 1px, red 0 0 1px, red 0 0 1px;
    }

    .classOff {
        text-shadow: gray 1px 0px, gray 1px 1px, gray 0px 1px, gray -1px 1px, gray -1px 0px, gray -1px -1px, gray 0px -1px, gray 1px -1px, gray 0 0 1px, gray 0 0 1px, gray 0 0 1px, gray 0 0 1px, gray 0 0 1px, gray 0 0 1px, gray 0 0 1px, gray 0 0 1px;
    }
</style>

<script type="application/javascript">
function  getPageSize(){
    var xScroll, yScroll;
    if (window.innerHeight && window.scrollMaxY) {
        xScroll = document.body.scrollWidth;
        yScroll = window.innerHeight + window.scrollMaxY;
    } else if (document.body.scrollHeight > document.body.offsetHeight){ // all but Explorer Mac
        xScroll = document.body.scrollWidth;
        yScroll = document.body.scrollHeight;
    } else if (document.documentElement && document.documentElement.scrollHeight > document.documentElement.offsetHeight){ // Explorer 6 strict mode
        xScroll = document.documentElement.scrollWidth;
        yScroll = document.documentElement.scrollHeight;
    } else { // Explorer Mac...would also work in Mozilla and Safari
        xScroll = document.body.offsetWidth;
        yScroll = document.body.offsetHeight;
    }
    var windowWidth, windowHeight;
    if (self.innerHeight) { // all except Explorer
        windowWidth = self.innerWidth;
        windowHeight = self.innerHeight;
    } else if (document.documentElement && document.documentElement.clientHeight) { // Explorer 6 Strict Mode
        windowWidth = document.documentElement.clientWidth;
        windowHeight = document.documentElement.clientHeight;
    } else if (document.body) { // other Explorers
        windowWidth = document.body.clientWidth;
        windowHeight = document.body.clientHeight;
    }
    // for small pages with total height less then height of the viewport
    if(yScroll < windowHeight){
        pageHeight = windowHeight;
    } else {
        pageHeight = yScroll;
    }
    // for small pages with total width less then width of the viewport
    if(xScroll < windowWidth){
        pageWidth = windowWidth;
    } else {
        pageWidth = xScroll;
    }
    return [pageWidth,pageHeight,windowWidth,windowHeight];
}

var Class={create:function(){return function(){this.initialize.apply(this, arguments);}}}
Object.extend = function(d,s){for (var property in s) {d[property] = s[property];}return d;}
if (typeof KeyEvent == "undefined") {
    var KeyEvent = {DOM_VK_CANCEL: 3,DOM_VK_HELP: 6,DOM_VK_BACK_SPACE: 8,DOM_VK_TAB: 9,DOM_VK_CLEAR: 12,DOM_VK_RETURN: 13,DOM_VK_ENTER: 14,DOM_VK_SHIFT: 16,DOM_VK_CONTROL: 17,DOM_VK_ALT: 18,DOM_VK_PAUSE: 19,DOM_VK_CAPS_LOCK: 20,DOM_VK_ESCAPE: 27,DOM_VK_SPACE: 32,DOM_VK_PAGE_UP: 33,DOM_VK_PAGE_DOWN: 34,DOM_VK_END: 35,DOM_VK_HOME: 36,DOM_VK_LEFT: 37,DOM_VK_UP: 38,DOM_VK_RIGHT: 39,DOM_VK_DOWN: 40,DOM_VK_PRINTSCREEN: 44,DOM_VK_INSERT: 45,DOM_VK_DELETE: 46,DOM_VK_0: 48,DOM_VK_1: 49,DOM_VK_2: 50,DOM_VK_3: 51,DOM_VK_4: 52,DOM_VK_5: 53,DOM_VK_6: 54,DOM_VK_7: 55,DOM_VK_8: 56,DOM_VK_9: 57,DOM_VK_SEMICOLON: 59,DOM_VK_EQUALS: 61,DOM_VK_A: 65,DOM_VK_B: 66,DOM_VK_C: 67,DOM_VK_D: 68,DOM_VK_E: 69,DOM_VK_F: 70,DOM_VK_G: 71,DOM_VK_H: 72,DOM_VK_I: 73,DOM_VK_J: 74,DOM_VK_K: 75,DOM_VK_L: 76,DOM_VK_M: 77,DOM_VK_N: 78,DOM_VK_O: 79,DOM_VK_P: 80,DOM_VK_Q: 81,DOM_VK_R: 82,DOM_VK_S: 83,DOM_VK_T: 84,DOM_VK_U: 85,DOM_VK_V: 86,DOM_VK_W: 87,DOM_VK_X: 88,DOM_VK_Y: 89,DOM_VK_Z: 90,DOM_VK_CONTEXT_MENU: 93,DOM_VK_NUMPAD0: 96,DOM_VK_NUMPAD1: 97,DOM_VK_NUMPAD2: 98,DOM_VK_NUMPAD3: 99,DOM_VK_NUMPAD4: 100,DOM_VK_NUMPAD5: 101,DOM_VK_NUMPAD6: 102,DOM_VK_NUMPAD7: 103,DOM_VK_NUMPAD8: 104,DOM_VK_NUMPAD9: 105,DOM_VK_MULTIPLY: 106,DOM_VK_ADD: 107,DOM_VK_SEPARATOR: 108,DOM_VK_SUBTRACT: 109,DOM_VK_DECIMAL: 110,DOM_VK_DIVIDE: 111,DOM_VK_F1: 112,DOM_VK_F2: 113,DOM_VK_F3: 114,DOM_VK_F4: 115,DOM_VK_F5: 116,DOM_VK_F6: 117,DOM_VK_F7: 118,DOM_VK_F8: 119,DOM_VK_F9: 120,DOM_VK_F10: 121,DOM_VK_F11: 122,DOM_VK_F12: 123,DOM_VK_F13: 124,DOM_VK_F14: 125,DOM_VK_F15: 126,DOM_VK_F16: 127,DOM_VK_F17: 128,DOM_VK_F18: 129,DOM_VK_F19: 130,DOM_VK_F20: 131,DOM_VK_F21: 132,DOM_VK_F22: 133,DOM_VK_F23: 134,DOM_VK_F24: 135,DOM_VK_NUM_LOCK: 144,DOM_VK_SCROLL_LOCK: 145,DOM_VK_COMMA: 188,DOM_VK_PERIOD: 190,DOM_VK_SLASH: 191,DOM_VK_BACK_QUOTE: 192,DOM_VK_OPEN_BRACKET: 219,DOM_VK_BACK_SLASH: 220,DOM_VK_CLOSE_BRACKET: 221,DOM_VK_QUOTE: 222,DOM_VK_META: 224
    };
}
var langS=[];
langS['Ru']={
    SCORE:"Вы выбили: ",  StartGame:"Начать игру",  Settings:"Настройки",  TableLider:"Таблица лидеров",  Exit:"Выход",  Lang:"Язык",  GoToMenu:"Вернуться в меню",  GameName:"УБЕЙ КРОТОВ",  StudiosName:"NULAY GAME",  YourLoose:"Вы проиграли!!!",  YouScore:"Ваш результат ",  From:" из ",  Moles:"кротов",  LangName:"Русский",  On:"вкл.",  Off:"выкл.",  Mouse:"Мышь",  Sound:"Звук",  Back:"Назад",  Up:"Вверх",  Right:"Вправо",  Down:"Вниз",  Left:"Влево",  Keybord:"Клавиатура",  Joystick:"Джойстик",  Action:"Действие"
}
langS['En']={
    SCORE:"SCORE: ",  StartGame:"Start Game",  Settings:"Settings",  TableLider:"Lider Table",  Exit:"Exit",  Lang:"Langvich",  GoToMenu:"Go to menu",  GameName:"KILLER MOLES",  StudiosName:"NULAY GAME",  YourLoose:"Your LOOSE!!!",  YouScore:"You score ",  From:" from ",  Moles:"moles",  LangName:"English",  On:"on",  Off:"off",  Mouse:"Mouse",  Sound:"Sound",  Back:"Back",  Up:"Up",  Right:"Right",  Down:"Down",  Left:"Left",  Keybord:"Keybord",  Joystick:"Joystick",  Action:"Action"
}

var keyVal=[87,68,83,65];
var joyVal=[2,3,1,0];
var carKeyDown=null;
var carJoyDown=null;

var MenuGame=Class.create();
MenuGame.prototype = {
    size:getPageSize(),
    initialize:function(option){
        var thisEl=this;
        if(option){
            this.option=option;
            if(option.lang){this.lang = option.lang;}else{this.lang = langS.Ru;}
        }else{
            this.lang = langS.Ru;
            this.option={'lang':langS.Ru,'soundOn':true,'mouseOn':false};
        }
        this.game=this.createGame(this.option);
        this.poleG=$('#poleGame');
        var butStartGame=$('<div class="classBut">').append(this.lang.StartGame);
        var butSettings=$('<div class="classBut">').append(this.lang.Settings);
        var butLang=$('<div class="classBut">').append(this.lang.Lang);
        var butTableLider=$('<div class="classBut">').append(this.lang.TableLider);
        var butExit=$('<div class="classBut">').append(this.lang.Exit);

        this.menuGame=$('<div style="margin-top:100px;">').append(butStartGame).append(butSettings).append(butLang).append(butTableLider).append(butExit);
        //this.menuPanel={view:menuPanelView,butStartGame:butStartGame,butSettings:butSettings,butTableLider:butTableLider,butExit:butExit};
        this.menuPanel=$('<div style="position:absolute;top:100px;left:0;z-index:40;text-align: center;width:'+this.size[0]+'px;">').append('<div style="font-size:15pt;font-weight:bold;">'+this.lang.StudiosName+'</div>').append('<div style="font-size:20pt;font-weight:bold;">'+this.lang.GameName+'</div>').append(this.menuGame).append(this.menuLang);
        this.poleG.append($('<div>').append(this.menuPanel));
        butStartGame.click(function(){thisEl.menuPanel.hide();thisEl.game.startGame();});
        this.menuLang=$('<div style="margin-top:100px;">');
        for(var key in langS){
            var butL=$('<div class="classBut">').append(langS[key].LangName);
            this.menuLang.append(butL);
            butL.click(thisEl.getFL(langS[key]));
        }
        this.menuLang.hide();
        this.menuPanel.append(this.menuLang);
        butLang.click(function(){
            thisEl.menuGame.hide();
            thisEl.menuLang.show();
        })

        this.menuSetting=$('<div style="margin-top:100px;">');
        var soundOn=$('<span class="classBut">'+this.lang.On+'</span>').click(function(){thisEl.option.soundOn=true;thisEl.onOff(soundOn,soundOff);});
        var soundOff=$('<span class="classBut">'+this.lang.Off+'</span>').click(function(){thisEl.option.soundOn=false;thisEl.onOff(soundOff,soundOn);});
        this.menuSetting.append($('<div></div>').append('<span>'+this.lang.Sound+' : </span>').append(soundOn).append('<span> / </span>').append(soundOff));
        var mouseOn=$('<span class="classBut">'+this.lang.On+'</span>').click(function(){thisEl.option.mouseOn=true;thisEl.onOff(mouseOn,mouseOff);});
        var mouseOff=$('<span class="classBut">'+this.lang.Off+'</span>').click(function(){thisEl.option.mouseOn=false;thisEl.onOff(mouseOff,mouseOn);});
        this.menuSetting.append($('<div></div>').append('<span>'+this.lang.Mouse+' : </span>').append(mouseOn).append('<span> / </span>').append(mouseOff));
        var backBut=$('<span class="classBut">'+this.lang.Back+'</span>');

        var butKeyUp=$('<span class="classBut keyVal" ind="0">'+this.getNameKey(keyVal[0])+'</span>');
        var butKeyRight=$('<span class="classBut keyVal" ind="1">'+this.getNameKey(keyVal[1])+'</span>');
        var butKeyDown=$('<span class="classBut keyVal" ind="2">'+this.getNameKey(keyVal[2])+'</span>');
        var butKeyLeft=$('<span class="classBut keyVal" ind="3">'+this.getNameKey(keyVal[3])+'</span>');
        var butJoyUp=$('<span class="classBut joyVal" ind="0">Joy_'+joyVal[0]+'</span>');
        var butJoyRight=$('<span class="classBut joyVal" ind="1">Joy_'+joyVal[1]+'</span>');
        var butJoyDown=$('<span class="classBut joyVal" ind="2">Joy_'+joyVal[2]+'</span>');
        var butJoyLeft=$('<span class="classBut joyVal" ind="3">Joy_'+joyVal[3]+'</span>');

        this.menuSetting.append('<div align="center"><table style="text-align: center;">' +
                '<tr style="text-align: left; color:white;"><td>'+this.lang.Action+'</td><td>'+this.lang.Keybord+'</td><td>'+this.lang.Joystick+'</td></tr>' +
                '<tr><td style="text-align: left;">'+this.lang.Up+'</td><td></td><td></td></tr>' +
                '<tr><td style="text-align: left;">'+this.lang.Right+'</td><td></td><td></td></tr>' +
                '<tr><td style="text-align: left;">'+this.lang.Down+'</td><td></td><td></td></tr>' +
                '<tr><td style="text-align: left;">'+this.lang.Left+'</td><td></td><td></td></tr></table></div>');

        this.menuSetting.find('td:eq(4)').append(butKeyUp);
        this.menuSetting.find('td:eq(5)').append(butJoyUp);
        this.menuSetting.find('td:eq(7)').append(butKeyRight);
        this.menuSetting.find('td:eq(8)').append(butJoyRight);
        this.menuSetting.find('td:eq(10)').append(butKeyDown);
        this.menuSetting.find('td:eq(11)').append(butJoyDown);
        this.menuSetting.find('td:eq(13)').append(butKeyLeft);
        this.menuSetting.find('td:eq(14)').append(butJoyLeft);

        this.menuSetting.append(backBut);

        this.menuSetting.hide();
        this.menuLang.hide();
        this.menuPanel.append(this.menuLang).append(this.menuSetting);
        if(this.option.mouseOn){
            this.onOff(mouseOn,mouseOff);
        }else{
            this.onOff(mouseOff,mouseOn);
        }
        if(this.option.soundOn){
            this.onOff(soundOn,soundOff);
        }else{
            this.onOff(soundOff,soundOn);
        }
        butSettings.click(function(){
            thisEl.menuGame.hide();
            thisEl.menuSetting.show();
        })
        backBut.click(function(){
            thisEl.stopEntKey();
            thisEl.menuGame.show();
            thisEl.menuSetting.hide();
        })

        $('.classBut').on('mouseover',function(){$(this).addClass('classButOut')}).on('mouseout',function(){$(this).removeClass('classButOut');});

        $('.keyVal').on("click",function(ev){thisEl.changeKey($(ev.target));});
        $('.joyVal').on("click",function(ev){thisEl.changeJoy($(ev.target));});
    },
    getNameKey:function(kC){
        for(var key in KeyEvent){
            if(KeyEvent[key]==kC){
                return key.substr(7,key.length);
            }
        }
    },
    changeJoy:function(el){
        this.stopEntKey();
        var thisEl=this;
        el.text("_ _ _");
        var tit=setInterval(function(){if(el.hasClass("classBut")){el.removeClass("classBut")}else{el.addClass("classBut")}},1000);
        this.pad.runF=1;
        carKeyDown=keyVal[parseInt(el.attr('ind'))];
        var fun=function(ev){
            var kc=(ev.keyCode)?ev.keyCode:ev.which;
            if(kc==carKeyDown){
                if(carJoyDown!=null){
                    joyVal[parseInt(thisEl.curJoy.el.attr('ind'))]=carJoyDown;
                    thisEl.stopEntKey();
                }
            }
        }
        this.curJoy={'el':el,'tic':tit,'fun':fun};
        $(document).on("keydown",thisEl.curJoy.fun);
    },
    changeKey:function(el){
        this.stopEntKey();
        var thisEl=this;
        el.text("_ _ _");
        var tit=setInterval(function(){if(el.hasClass("classBut")){el.removeClass("classBut");}else{el.addClass("classBut");}},1000);
        var fun=function(ev){
            if(/[a-zA-Z]/.test(ev.key)){
                var ind=thisEl.curKey.el.attr('ind');
                keyVal[ind]=(ev.keyCode)?ev.keyCode:ev.which;
                thisEl.stopEntKey();
                thisEl.game.setAxisAndKey();
            }
        }
        this.curKey={'el':el,'tic':tit,'fun':fun};
        $(document).on("keydown",thisEl.curKey.fun);
    },
    stopEntKey:function(){
        var thisEl=this;
        if(this.curJoy!=null){
            clearInterval(this.curJoy.tic);
            this.curJoy.el.addClass("classBut");
            this.curJoy.el.text("Joy_"+joyVal[parseInt(this.curJoy.el.attr('ind'))]);
            carJoyDown=null;
            carKeyDown=null;
            $(document).off("keydown",thisEl.curJoy.fun);
            this.pad.runF=0;
        }
        this.curJoy=null;
        if(this.curKey!=null){
            clearInterval(this.curKey.tic);
            this.curKey.el.addClass("classBut");
            this.curKey.el.text(thisEl.getNameKey(keyVal[parseInt(this.curKey.el.attr('ind'))]));
            $(document).off("keydown",thisEl.curKey.fun);
        }
        this.curKey=null;
    },
    onOff:function(elOn,elOff){
        this.stopEntKey();
        elOn.addClass("classOff");
        elOff.removeClass("classOff");
    },
    getFL:function(lang){
        var thisEl=this;
        return function(){
            thisEl.poleG.empty();
            thisEl.option.lang=lang;
            var pad=mainMenu.pad;
            mainMenu=new MenuGame(thisEl.option);
            mainMenu.pad=pad;
        }
    },
    menuShow:function(){
        this.menuPanel.show();
    },
    createGame:function(lang){
        return new Krot(this.option);
    }
}

var Krot=Class.create();
Krot.prototype = {
    size:getPageSize(),
    maxTimeShow:2000,
    minTimeShow:1000,
    maxTimeNotShow:10000,
    minTimeNotShow:1000,
    timeUpDown:500,
    action:null,
    score:0,
    count:0,
    lang:langS['Ru'],
    imgFolder:'/resources/images/games/krot/',
    initialize:function(option){
        var thisEl=this;
        this.option=option;
        if(option && option.lang){
            this.lang=option.lang;
        }
        this.scaleW=this.size[0]/800;
        this.scaleH=this.size[1]/600;
        this.goTop=Math.round(this.scaleH*40);
        this.axis=[];
        this.krot=[];
        this.krotCl=[];
        this.bit=[];
        this.func=[];
        this.funcM=[];
        this.mus=[];
        var poleG=$('#poleGame').css({'position':'relative','width':this.size[0]+'px','height':this.size[1]+'px','font-size':Math.round(this.size[0]/800)+'em'});
        poleG.append($('<div style="position:absolute;top:0;left:0;z-index:20;">').append($('<img src="'+this.imgFolder+'pole.png">').css({'width':this.size[0]+'px','height':this.size[1]+'px'})));
        poleG.append($('<div style="position:absolute;top:0;left:0;z-index:10;">').append($('<img src="'+this.imgFolder+'pole2.png">').css({'width':this.size[0]+'px','height':this.size[1]+'px'})));
        poleG.append($('<div style="position:absolute;top:0;left:0;z-index:25;">').css({'position':'relative','width':this.size[0]+'px','height':this.size[1]+'px'}));

        this.joyH=$('<span>').text('');
        this.countScore=$('<span>').text('0');
        this.inpCount=$('<span>').text('0');
        poleG.append($('<div style="position:absolute;top:20px;left:30px;z-index:30;" class="classButR">').append($('<div>').append(this.joyH).append('<span>'+this.lang.SCORE+'</span>').append(this.countScore).append('<span>'+this.lang.From+'</span>').append(this.inpCount).append('<span> '+this.lang.Moles+'</span>')));
        this.setAxisAndKey();
        this.action='keydown';
        for(var i=0;i<4;i++){
            this.krotCl[i]=$('<div style="position:absolute;top:'+(this.axis[i].t-40)+'px;left:'+this.axis[i].l+'px;z-index:30;">').append($('<img src="'+this.imgFolder+'krot1.png">').css({'visibility':'hidden','width':Math.round(57*this.scaleW)+'px','height':Math.round(58*this.scaleH)+'px'}));
            this.krot[i]=$('<div style="position:absolute;top:'+this.axis[i].t+'px;left:'+this.axis[i].l+'px;z-index:15;">').append($('<img src="'+this.imgFolder+'krot1.png">').css({'width':Math.round(57*this.scaleW)+'px','height':Math.round(58*this.scaleH)+'px'}));
            this.func[i]= this.getFunc(i,0);
            this.funcM[i]= this.getFunc(i,2);
            this.bit[i]=$('<img src="'+this.imgFolder+'mozgcrack.gif?ind='+i+'"/>').css({'width':Math.round(57*this.scaleW)+'px','height':Math.round(58*this.scaleH)+'px'}).hide();
            this.krot[i].append($('<div style="position:absolute;top:-'+Math.round(this.scaleH*35)+'px;left:'+Math.round(this.scaleW*5)+'px;z-index:28;">').append(this.bit[i]));
            this.mus[i]=$('<audio src="'+this.imgFolder+'buh'+i+'.mp3"></audio>');
            poleG.append(this.mus[i]).append(this.krot[i]).append(this.krotCl[i]);
        }
    },
    setAxisAndKey:function(){
        this.axis[0]={'t':Math.round(this.size[1]*0.51),'l':Math.round(this.size[0]*0.5),'kC': keyVal[0]};
        this.axis[1]={'t':Math.round(this.size[1]*0.64),'l':Math.round(this.size[0]*0.78),'kC': keyVal[1]};
        this.axis[2]={'t':Math.round(this.size[1]*0.83),'l':Math.round(this.size[0]*0.51),'kC': keyVal[2]};
        this.axis[3]={'t':Math.round(this.size[1]*0.63),'l':Math.round(this.size[0]*0.2),'kC': keyVal[3]};
    },
    startGame:function(){
        this.maxTimeShow=2000;
        this.minTimeShow=1000;
        this.maxTimeNotShow=10000;
        this.minTimeNotShow=1000;
        this.timeUpDown=500;
        this.score=0;
        this.count=0;
        this.gameStart=true;
        for(var i=0;i<4;i++) {
            setTimeout(this.getFunc(i,1), this.getRandomInt(this.minTimeNotShow, this.maxTimeNotShow));
        }
    },
    getFunc:function(ind, numf){
        var thisEl=this;
        switch (numf){
            case 0: return function(ev){var keyK=(ev.keyCode)?ev.keyCode:ev.which;if(keyK==thisEl.axis[ind].kC){thisEl.actionDo(ind,ev);}};break;
            case 1: return function(){thisEl.krotTudaSuda(ind);};break;
            case 2: return function(ev){thisEl.actionDo(ind,ev);};break;
        }
        return null;
    },
    krotTudaSuda:function(ind){
        if(!this.gameStart) return;
        var thisEl=this;
        //включаем событие
        this.inpCount.text(this.count+=1);
        this.bit[ind].hide();
        if(this.option.mouseOn){
            thisEl.krotCl[ind].on("click",thisEl.funcM[ind]);
        }
        $(document).on(thisEl.action,thisEl.func[ind]);
        this.krot[ind].css({'visibility':'visible'});
        this.krot[ind].animate({
            top: "-="+this.goTop
        }, thisEl.timeUpDown, function() {
            setTimeout(
                    function(){
                        //прячем крота
                        thisEl.krot[ind].animate({top: "+="+thisEl.goTop},thisEl.timeUpDown,
                                function(){
                                    //выключаем событие
                                    if(thisEl.option.mouseOn){
                                        thisEl.krotCl[ind].off("click",thisEl.funcM[ind]);
                                    }
                                    $(document).off(thisEl.action,thisEl.func[ind]);
                                    //проверяем разницу в выползании и попадании
                                    if(thisEl.count-thisEl.score>4){
                                        thisEl.endGame();
                                    }else{
                                        setTimeout(function(){thisEl.krotTudaSuda(ind);},thisEl.getRandomInt(thisEl.minTimeNotShow,thisEl.maxTimeNotShow));
                                    }
                                });
                    },thisEl.getRandomInt(thisEl.minTimeShow,thisEl.maxTimeShow)

            );
        });
    },
    endGame:function(){
        if(this.gameStart==true){
            var thisEl=this;
            this.gameStart=false;
            for(var i=0;i<4;i++) {
                if(thisEl.option.mouseOn){
                    thisEl.krotCl[i].off("click",thisEl.funcM[i]);
                }
                $(document).off(thisEl.action,thisEl.func[i]);
            }
            var kd=$('<div class="classBut"  style="font-size:30px;text-align:center;">'+this.lang.GoToMenu+'</div>');
            var bb=$('<div style="position:absolute;top:200px;left:0;z-index:50;">').css({'width':this.size[0]+'px','height':(this.size[1]-300)+'px'}).append('<div style="font-size:50px;text-align:center;">'+this.lang.YourLoose+'</div>').append('<div style="font-size:30px;text-align:center;"> '+this.lang.YouScore+this.score+this.lang.From+this.count+'</div>').append(kd);
            kd.click(function(){
                bb.remove();
                mainMenu.menuShow();
            });
            $('#poleGame').append(bb);
            this.countScore.text('0');
            this.inpCount.text('0');
        }
    },
    actionDo:function(ind,event){
        if(this.option.soundOn){
            this.mus[ind][0].play();
        }
        var thisEl=this;
        if(this.option.mouseOn) {
            thisEl.krotCl[ind].off("click", thisEl.funcM[ind]);
        }
        $(document).off(thisEl.action,thisEl.func[ind]);
        this.countScore.text(this.score+=1);
        this.maxTimeNotShow-=50;
        this.minTimeNotShow-=5;
        this.maxTimeShow-=10;
        this.minTimeShow-=5;
        this.timeUpDown-=1;
        this.bit[ind].show();
        this.bit[ind].attr('src',''+this.imgFolder+'mozgcrack.gif?ind='+ind);
    },
    getRandomInt:function (min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

//runF=0 выполняем иметацию нажатия клавиш
//runF=0 выполняем установку клавиш для меню
var Pad=Class.create();
Pad.prototype = {
    runF:0,
    initialize: function (option) {

    },
    startInit:function(){
        var thisEl=this;
        if (navigator.getGamepads === undefined) {
        } else {
            window.requestAnimationFrame(function(){thisEl.runAnimation();});
        }
    },
    simulateKeyPress:function(kCode) {
        jQuery.event.trigger({ type : 'keydown', which : kCode,keyCode:kCode });
    },
    // --------------------------------------
// Animation loop
// --------------------------------------
    runAnimation:function() {
        var gamepads = navigator.getGamepads();
        for (var i = 0; i < gamepads.length; i++) {
            var pad = gamepads[i];
            if (pad != undefined) {

//            if (g_fButtonPressedOnAnyGamepadEver === false) {
//                krot.joyH.text('hello');
//                setTimeout(function(){krot.joyH.text('');},500);
//                g_fButtonPressedOnAnyGamepadEver = true;
//            }
//            var fStandarMapping = (pad.mapping != undefined && pad.mapping === "standard");

                for(var i=0;i<pad.buttons.length;i++){
                    if(pad.buttons[i].pressed){
                        if(this.runF==0){
                            for(var y=0;y<joyVal.length;y++){
                                if(joyVal[y]==i){
                                    this.simulateKeyPress(keyVal[y]);
                                }
                            }
                        }
                        if(this.runF==1){
                            carJoyDown=i;
                            this.simulateKeyPress(carKeyDown);
                        }
                    }
                }
            } else {

            }
        }
        var thisEl=this;
        window.requestAnimationFrame(function(){thisEl.runAnimation();});
    }
}

var mainMenu=null;
$(function(){
    mainMenu=new MenuGame();
    mainMenu.pad=new Pad();
    mainMenu.pad.startInit();
});
</script>