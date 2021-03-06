<script type="application/javascript">
Number.prototype.degree = function () {
    return this * Math.PI / 180;
};
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
    SCORE:"Вы выбили: ",  StartGame:"Начать игру",  Settings:"Настройки",  TableLider:"Таблица лидеров",  Exit:"Выход",  Lang:"Язык",  GoToMenu:"Вернуться в меню",  GameName:"ПОЦЕЛУЙ Иринку",  StudiosName:"NULAY GAME",  YourLoose:"С ДНЕМ СВЯТОГО ВАЛЕНТИНА!!!",  YouScore:"Ваш результат ",  From:" из ",  Moles:"поцелуев",  LangName:"Русский",  On:"вкл.",  Off:"выкл.",  Mouse:"Мышь",  Sound:"Звук",  Back:"Назад",  Up:"Вверх",  Right:"Вправо",  Down:"Вниз",  Left:"Влево",  Keybord:"Клавиатура",  Joystick:"Джойстик",  Action:"Действие"
}

langS['En']={
    SCORE:"SCORE: ",  StartGame:"Start Game",  Settings:"Settings",  TableLider:"Lider Table",  Exit:"Exit",  Lang:"Langvich",  GoToMenu:"Go to menu",  GameName:"KISS Irishka",  StudiosName:"NULAY GAME",  YourLoose:"Happy Valentine's Day!!!",  YouScore:"You score ",  From:" from ",  Moles:"kesses",  LangName:"English",  On:"on",  Off:"off",  Mouse:"Mouse",  Sound:"Sound",  Back:"Back",  Up:"Up",  Right:"Right",  Down:"Down",  Left:"Left",  Keybord:"Keybord",  Joystick:"Joystick",  Action:"Action"
}

var LayerMapRB=Class.create();
LayerMapRB.prototype = {
    size: getPageSize(),
    t1:[{'x':738.2,'y':703.3},{'x':713.4,'y':703.9},{'x':703.8,'y':700.6},{'x':697.5,'y':705.7},{'x':686.1,'y':706.8},{'x':680.3,'y':714.7},{'x':672.6,'y':715.2},{'x':670.0,'y':703.5},{'x':664.1,'y':690.4},{'x':651.7,'y':705.4},{'x':642.2,'y':688.0},{'x':636.6,'y':686.4},{'x':632.6,'y':679.2},{'x':620.2,'y':679.5},{'x':618.1,'y':683.1},{'x':606.2,'y':691.4},{'x':581.1,'y':692.1},{'x':573.6,'y':683.5},{'x':563.1,'y':672.9},{'x':549.4,'y':674.5},{'x':536.1,'y':672.3},{'x':517.4,'y':653.3},{'x':518.1,'y':625.5},{'x':512.0,'y':616.8},{'x':501.2,'y':620.2},{'x':499.9,'y':616.5},{'x':487.4,'y':620.5},{'x':477.6,'y':638.5},{'x':466.3,'y':636.6},{'x':454.1,'y':636.1},{'x':447.5,'y':632.4},{'x':440.9,'y':633.2},{'x':436.6,'y':629.8},{'x':418.9,'y':652.5},{'x':408.1,'y':653.6},{'x':402.8,'y':643.8},{'x':397.3,'y':644.0},{'x':392.4,'y':634.5},{'x':386.6,'y':634.3},{'x':381.9,'y':624.5},{'x':371.9,'y':619.5},{'x':361.3,'y':618.9},{'x':343.3,'y':615.0},{'x':314.7,'y':593.8},{'x':307.6,'y':576.9},{'x':311.3,'y':567.0},{'x':311.0,'y':522.6},{'x':277.7,'y':511.0},{'x':260.8,'y':512.0},{'x':249.2,'y':502.5},{'x':238.1,'y':505.7},{'x':228.5,'y':516.3},{'x':218.4,'y':519.5},{'x':193.6,'y':508.9},{'x':188.8,'y':495.6},{'x':179.3,'y':484.0},{'x':178.8,'y':477.1},{'x':164.5,'y':478.2},{'x':162.9,'y':468.6},{'x':150.8,'y':458.1},{'x':140.7,'y':455.9},{'x':124.8,'y':473.4},{'x':115.8,'y':473.9},{'x':107.3,'y':480.9},{'x':100.5,'y':480.9},{'x':95.2,'y':494.6},{'x':93.6,'y':506.8},{'x':64.5,'y':513.1},{'x':43.9,'y':526.4},{'x':28.0,'y':487.2},{'x':14.3,'y':446.4},{'x':20.3,'y':437.4},{'x':12.1,'y':427.1},{'x':17.9,'y':424.5},{'x':18.8,'y':413.1},{'x':30.6,'y':412.6},{'x':57.6,'y':402.5},{'x':56.9,'y':390.4},{'x':49.1,'y':367.9},{'x':76.7,'y':325.3},{'x':72.7,'y':320.3},{'x':49.1,'y':320.3},{'x':30.6,'y':288.6},{'x':19.5,'y':279.3},{'x':19.3,'y':272.9},{'x':11.6,'y':258.9},{'x':16.9,'y':250.4},{'x':27.4,'y':249.3},{'x':27.2,'y':215.8},{'x':21.9,'y':206.3},{'x':14.8,'y':158.4},{'x':0.5,'y':138.3},{'x':1.0,'y':121.1},{'x':31.1,'y':95.2},{'x':49.1,'y':96.0},{'x':69.5,'y':112.1},{'x':89.3,'y':112.4},{'x':116.3,'y':121.9},{'x':143.6,'y':139.3},{'x':154.9,'y':131.7},{'x':153.3,'y':113.7},{'x':163.7,'y':111.8},{'x':172.9,'y':122.2},{'x':193.8,'y':114.5},{'x':207.1,'y':141.2},{'x':221.1,'y':114.8},{'x':221.3,'y':120.3},{'x':228.3,'y':119.3},{'x':238.1,'y':111.1},{'x':247.3,'y':115.6},{'x':252.3,'y':112.3},{'x':262.9,'y':115.3},{'x':269.8,'y':110.5},{'x':294.9,'y':121.6},{'x':349.4,'y':105.5},{'x':376.1,'y':104.7},{'x':385.9,'y':108.7},{'x':419.7,'y':129.6},{'x':460.7,'y':98.6},{'x':465.8,'y':102.8},{'x':484.8,'y':96.0},{'x':487.1,'y':86.2},{'x':503.6,'y':91.0},{'x':523.7,'y':89.9},{'x':537.1,'y':73.8},{'x':548.0,'y':83.0},{'x':563.1,'y':80.1},{'x':572.9,'y':69.0},{'x':589.5,'y':57.3},{'x':639.0,'y':58.4},{'x':644.4,'y':52.5},{'x':650.6,'y':56.0},{'x':672.6,'y':55.3},{'x':691.1,'y':39.6},{'x':692.0,'y':12.9},{'x':717.4,'y':0.5},{'x':735.0,'y':13.4},{'x':734.5,'y':34.0},{'x':742.1,'y':46.5},{'x':743.8,'y':64.2},{'x':763.0,'y':66.6},{'x':782.4,'y':56.3},{'x':797.8,'y':21.9},{'x':816.3,'y':21.9},{'x':822.6,'y':26.1},{'x':829.0,'y':27.2},{'x':859.6,'y':15.3},{'x':896.4,'y':36.2},{'x':905.4,'y':34.4},{'x':917.0,'y':41.5},{'x':920.7,'y':41.8},{'x':921.5,'y':46.3},{'x':929.7,'y':46.0},{'x':935.3,'y':48.4},{'x':936.6,'y':54.7},{'x':914.6,'y':83.3},{'x':911.2,'y':107.1},{'x':896.6,'y':155.3},{'x':863.0,'y':178.8},{'x':859.6,'y':186.9},{'x':854.0,'y':187.2},{'x':830.5,'y':216.3},{'x':831.6,'y':253.8},{'x':825.0,'y':256.3},{'x':813.4,'y':270.0},{'x':814.4,'y':301.5},{'x':809.4,'y':306.5},{'x':807.8,'y':310.4},{'x':803.9,'y':317.6},{'x':805.1,'y':325.8},{'x':801.2,'y':336.6},{'x':833.5,'y':334.3},{'x':851.5,'y':320.8},{'x':859.6,'y':315.5},{'x':899.6,'y':318.6},{'x':911.2,'y':334.1},{'x':900.6,'y':374.5},{'x':900.4,'y':415.8},{'x':890.9,'y':422.9},{'x':880.5,'y':421.9},{'x':874.5,'y':431.9},{'x':873.6,'y':438.5},{'x':878.5,'y':446.4},{'x':878.1,'y':455.7},{'x':870.5,'y':460.8},{'x':855.4,'y':454.6},{'x':839.3,'y':464.9},{'x':833.5,'y':481.6},{'x':836.6,'y':489.9},{'x':833.8,'y':497.5},{'x':821.5,'y':504.1},{'x':820.5,'y':559.4},{'x':814.7,'y':576.0},{'x':814.1,'y':591.6},{'x':834.8,'y':604.9},{'x':835.8,'y':609.4},{'x':839.3,'y':614.7},{'x':839.5,'y':643.3},{'x':835.8,'y':655.4},{'x':816.5,'y':672.9},{'x':799.5,'y':672.6},{'x':794.5,'y':676.9},{'x':791.1,'y':673.4},{'x':775.5,'y':678.2},{'x':778.4,'y':687.5},{'x':770.2,'y':690.6},{'x':752.0,'y':678.2},{'x':738.2,'y':703.3}],
    t:[],
    initialize: function (option) {
        this.maxY=0;
        this.maxX=0;
        for(var i=0;i<this.t1.length;i++){
            if(this.maxY<this.t1[i].y){
                this.maxY=this.t1[i].y;
            }
            if(this.maxX<this.t1[i].x){
                this.maxX=this.t1[i].x;
            }
        }
        this.transformInScreenAxes(this.t1,this.maxY,this.t);
//            var txt='';
//            for(var i=0;i<this.t.length;i++) {
//                txt+="{'x':"+this.t[i].x+",'y':"+this.t[i].y+"},";
//            }
        var el=$("#txt").css({'width':parseInt(this.maxX+1),'height':parseInt(this.maxY+1)});
        this.drawMap(el);
        this.drawDep(el);
        var thisEl=this;
        this.loadSt(el,"loadStEnd");

    },
    loadSt:function(el,func){
        var thisEl=this;
        $.ajax({
            url: "/resources/images/games/_stations.xml",
            dataType:"xml"
        }).done(function( data ) {
            thisEl[func](el,data);
        });
    },
    loadStEnd:function(el,data){
        var arr=$(data).find('station');
        var arrObj=[];
        for(var i=0;i<arr.length;i++){
            var obj={};
            var ar=$(arr[i]);
            obj.name=ar.find('name').text();
            obj.esr=ar.find('esr').text();
            obj.sign=ar.find('sign').text();
            obj.dep=ar.find('dep').text();
            obj.x=parseInt(ar.find('x').text())-45;
            obj.y=parseInt(ar.find('y').text())-40;
            obj.angle=parseInt(ar.find('angle').text());
//            if(obj.angle<0){
//                obj.angle=360+obj.angle
//            }
            arrObj[i]=obj;
        }
        this.stObj=arrObj
        this._drawSt(el,arrObj,8,'black',2,null);
    },
    _drawSt:function(el,arrStEl,zind,color,type,typeSt){
        var st=$('<div>').css({'width':parseInt(this.maxX+1),'height':parseInt(this.maxY+1),'position':'absolute','z-index':zind,'top':0,'left':0});
        el.append(st);
        var imgSt=$('<canvas>');
        st.append(imgSt);
        var example = imgSt[0];
        example.width=parseInt(this.maxX+1);
        example.height=parseInt(this.maxY+1);
        var ctx = example.getContext('2d');
        //ctx.beginPath();

        for(var i=0;i< arrStEl.length;i++){
            ctx.translate(arrStEl[i].x, arrStEl[i].y);
            ctx.rotate((arrStEl[i].angle).degree());
            if(typeSt!=null){
                ctx.beginPath();
                if(arrStEl[i].sign==typeSt){
                    ctx.arc(3, 3, 3, 0, Math.PI * 2, false);
                }else{
                    ctx.arc(3, 3, 1, 0, Math.PI * 2, false);
                }
                ctx.closePath();
            }else{
                ctx.beginPath();
                ctx.arc(3, 3, 3, 0, Math.PI * 2, false);
                ctx.closePath();
            }

            if(typeSt==null || arrStEl[i].sign==typeSt){
                ctx.font = "bold 8px sans-serif";
                switch (type){
                    case 0:ctx.fillText(arrStEl[i].name, 8, 5);break;
                    case 1:ctx.fillText(arrStEl[i].esr, 8, 5);break;
                    case 2:ctx.fillText("("+arrStEl[i].esr+") "+arrStEl[i].name, 8, 5);break;
                }

            }
            ctx.fillStyle = color;
            ctx.stroke();//обводим
            ctx.save();
            ctx.rotate((360-arrStEl[i].angle).degree());
            ctx.translate(0-arrStEl[i].x, 0-arrStEl[i].y);
        }

//        ctx.closePath();




    },
    drawMap:function(el){

        this.mapRBLayer=$('<div>').css({'width':parseInt(this.maxX+1),'height':parseInt(this.maxY+1),'position':'absolute','z-index':0,'top':0,'left':0});
        el.append(this.mapRBLayer);
        this.imgMapRB=$('<canvas>');
        this.mapRBLayer.append(this.imgMapRB);

        var example = this.imgMapRB[0];
        example.width=parseInt(this.maxX+1);
        example.height=parseInt(this.maxY+1);
        var ctx = example.getContext('2d');
//            ctx.translate(this.size[0]/2, this.size[1]);
//            ctx.rotate(180*Math.PI/180);
        ctx.beginPath();
        ctx.moveTo(this.t[0].x, this.t[0].y);
        for(var i=1;i< this.t.length;i++){
            ctx.lineTo(this.t[i].x, this.t[i].y);
        }
        ctx.closePath();
        var my_gradient = ctx.createLinearGradient(0, 0, 800, 800);
        my_gradient.addColorStop(0, "black");
        my_gradient.addColorStop(1, "gray");
        ctx.fillStyle = my_gradient;
//            ctx.fillRect(0, 0, 300, 225);
//            ctx.stroke();//обводим
        ctx.fill();//заливаем
    },
    drawDep:function(el){
        var dep=[];
        dep[0]=[{'x':776.9,'y':560.2},{'x':722.1,'y':562.0},{'x':705.4,'y':581.0},{'x':588.8,'y':580.5},{'x':516.0,'y':535.5},{'x':500.8,'y':542.7},{'x':484.1,'y':582.0},{'x':471.3,'y':577.5},{'x':307.6,'y':576.9},{'x':311.3,'y':567.0},{'x':311.0,'y':522.6},{'x':291.9,'y':516.0},{'x':305.3,'y':472.7},{'x':369.5,'y':401.2},{'x':381.0,'y':362.4},{'x':438.3,'y':297.1},{'x':537.8,'y':303.1},{'x':547.8,'y':309.1},{'x':570.3,'y':331.1},{'x':570.8,'y':389.6},{'x':711.8,'y':475.9},{'x':748.6,'y':478.1},{'x':756.4,'y':491.4},{'x':774.4,'y':502.4},{'x':821.5,'y':505.1},{'x':820.5,'y':559.4},{'x':814.7,'y':576.0},{'x':776.9,'y':560.2}];
        dep[1]=[{'x':93.6,'y':506.8},{'x':64.5,'y':513.1},{'x':43.9,'y':526.4},{'x':28.0,'y':487.2},{'x':14.3,'y':446.4},{'x':20.3,'y':437.4},{'x':12.1,'y':427.1},{'x':17.9,'y':424.5},{'x':18.8,'y':413.1},{'x':30.6,'y':412.6},{'x':57.6,'y':402.5},{'x':56.9,'y':390.4},{'x':49.1,'y':367.9},{'x':76.7,'y':325.3},{'x':72.7,'y':320.3},{'x':200.4,'y':320.1},{'x':311.5,'y':196.2},{'x':332.1,'y':183.8},{'x':361.4,'y':174.6},{'x':353.8,'y':154.8},{'x':383.4,'y':107.7},{'x':385.9,'y':108.7},{'x':419.7,'y':129.6},{'x':460.7,'y':98.6},{'x':465.8,'y':102.8},{'x':480.6,'y':97.5},{'x':493.6,'y':178.9},{'x':449.1,'y':185.1},{'x':437.6,'y':211.3},{'x':438.3,'y':297.1},{'x':381.0,'y':362.4},{'x':369.5,'y':401.2},{'x':305.3,'y':472.7},{'x':291.9,'y':516.0},{'x':277.7,'y':511.0},{'x':260.8,'y':512.0},{'x':249.2,'y':502.5},{'x':238.1,'y':505.7},{'x':228.5,'y':516.3},{'x':218.4,'y':519.5},{'x':193.6,'y':508.9},{'x':188.8,'y':495.6},{'x':179.3,'y':484.0},{'x':178.8,'y':477.1},{'x':164.5,'y':478.2},{'x':162.9,'y':468.6},{'x':150.8,'y':458.1},{'x':140.7,'y':455.9},{'x':124.8,'y':473.4},{'x':115.8,'y':473.9},{'x':107.3,'y':480.9},{'x':100.5,'y':480.9},{'x':95.2,'y':494.6},{'x':93.6,'y':506.8}];
        dep[2]=[{'x':332.1,'y':183.8},{'x':311.5,'y':196.2},{'x':200.4,'y':320.1},{'x':72.7,'y':320.3},{'x':49.1,'y':320.3},{'x':30.6,'y':288.6},{'x':19.5,'y':279.3},{'x':19.3,'y':272.9},{'x':11.6,'y':258.9},{'x':16.9,'y':250.4},{'x':27.4,'y':249.3},{'x':27.2,'y':215.8},{'x':21.9,'y':206.3},{'x':14.8,'y':158.4},{'x':0.5,'y':138.3},{'x':1.0,'y':121.1},{'x':31.1,'y':95.2},{'x':49.1,'y':96.0},{'x':69.5,'y':112.1},{'x':89.3,'y':112.4},{'x':116.3,'y':121.9},{'x':143.6,'y':139.3},{'x':154.9,'y':131.7},{'x':153.3,'y':113.7},{'x':163.7,'y':111.8},{'x':172.9,'y':122.2},{'x':193.8,'y':114.5},{'x':207.1,'y':141.2},{'x':221.1,'y':114.8},{'x':221.3,'y':120.3},{'x':228.3,'y':119.3},{'x':238.1,'y':111.1},{'x':247.3,'y':115.6},{'x':252.3,'y':112.3},{'x':262.9,'y':115.3},{'x':269.8,'y':110.5},{'x':294.9,'y':121.6},{'x':349.4,'y':105.5},{'x':376.1,'y':104.7},{'x':383.4,'y':107.7},{'x':353.8,'y':154.8},{'x':361.4,'y':174.6},{'x':332.1,'y':183.8}];
        dep[3]=[{'x':807.8,'y':310.4},{'x':806.4,'y':313.0},{'x':685.1,'y':313.4},{'x':686.6,'y':196.3},{'x':660.4,'y':172.6},{'x':493.6,'y':178.9},{'x':480.6,'y':97.5},{'x':484.8,'y':96.0},{'x':487.1,'y':86.2},{'x':503.6,'y':91.0},{'x':523.7,'y':89.9},{'x':537.1,'y':73.8},{'x':548.0,'y':83.0},{'x':563.1,'y':80.1},{'x':572.9,'y':69.0},{'x':589.5,'y':57.3},{'x':639.0,'y':58.4},{'x':644.4,'y':52.5},{'x':650.6,'y':56.0},{'x':672.6,'y':55.3},{'x':691.1,'y':39.6},{'x':692.0,'y':12.9},{'x':717.4,'y':0.5},{'x':735.0,'y':13.4},{'x':734.5,'y':34.0},{'x':742.1,'y':46.5},{'x':743.8,'y':64.2},{'x':763.0,'y':66.6},{'x':782.4,'y':56.3},{'x':797.8,'y':21.9},{'x':816.3,'y':21.9},{'x':822.6,'y':26.1},{'x':829.0,'y':27.2},{'x':859.6,'y':15.3},{'x':896.4,'y':36.2},{'x':905.4,'y':34.4},{'x':917.0,'y':41.5},{'x':920.7,'y':41.8},{'x':921.5,'y':46.3},{'x':929.7,'y':46.0},{'x':935.3,'y':48.4},{'x':936.6,'y':54.7},{'x':914.6,'y':83.3},{'x':911.2,'y':107.1},{'x':896.6,'y':155.3},{'x':863.0,'y':178.8},{'x':859.6,'y':186.9},{'x':854.0,'y':187.2},{'x':830.5,'y':216.3},{'x':831.6,'y':253.8},{'x':825.0,'y':256.3},{'x':813.4,'y':270.0},{'x':814.4,'y':301.5},{'x':809.4,'y':306.5},{'x':807.8,'y':310.4}];
        dep[4]=[{'x':748.6,'y':478.1},{'x':711.8,'y':475.9},{'x':570.8,'y':389.6},{'x':570.3,'y':331.1},{'x':547.8,'y':309.1},{'x':537.8,'y':303.1},{'x':438.3,'y':297.1},{'x':437.6,'y':211.3},{'x':449.1,'y':185.1},{'x':493.6,'y':178.9},{'x':660.4,'y':172.6},{'x':686.6,'y':196.3},{'x':685.1,'y':313.4},{'x':806.4,'y':313.0},{'x':803.9,'y':317.6},{'x':805.1,'y':325.8},{'x':801.2,'y':336.6},{'x':833.5,'y':334.3},{'x':851.5,'y':320.8},{'x':859.6,'y':315.5},{'x':899.6,'y':318.6},{'x':911.2,'y':334.1},{'x':900.6,'y':374.5},{'x':900.4,'y':415.8},{'x':890.9,'y':422.9},{'x':880.5,'y':421.9},{'x':874.5,'y':431.9},{'x':873.6,'y':438.5},{'x':878.5,'y':446.4},{'x':878.1,'y':455.7},{'x':870.5,'y':460.8},{'x':855.4,'y':454.6},{'x':839.3,'y':464.9},{'x':833.5,'y':481.6},{'x':836.6,'y':489.9},{'x':833.8,'y':497.5},{'x':821.5,'y':504.1},{'x':821.5,'y':505.1},{'x':774.4,'y':502.4},{'x':756.4,'y':491.4},{'x':748.6,'y':478.1}];
        dep[5]=[{'x':752.0,'y':678.2},{'x':738.2,'y':703.3},{'x':713.4,'y':703.9},{'x':703.8,'y':700.6},{'x':697.5,'y':705.7},{'x':686.1,'y':706.8},{'x':680.3,'y':714.7},{'x':672.6,'y':715.2},{'x':670.0,'y':703.5},{'x':664.1,'y':690.4},{'x':651.7,'y':705.4},{'x':642.2,'y':688.0},{'x':636.6,'y':686.4},{'x':632.6,'y':679.2},{'x':620.2,'y':679.5},{'x':618.1,'y':683.1},{'x':606.2,'y':691.4},{'x':581.1,'y':692.1},{'x':573.6,'y':683.5},{'x':563.1,'y':672.9},{'x':549.4,'y':674.5},{'x':536.1,'y':672.3},{'x':517.4,'y':653.3},{'x':518.1,'y':625.5},{'x':512.0,'y':616.8},{'x':501.2,'y':620.2},{'x':499.9,'y':616.5},{'x':487.4,'y':620.5},{'x':477.6,'y':638.5},{'x':466.3,'y':636.6},{'x':454.1,'y':636.1},{'x':447.5,'y':632.4},{'x':440.9,'y':633.2},{'x':436.6,'y':629.8},{'x':418.9,'y':652.5},{'x':408.1,'y':653.6},{'x':402.8,'y':643.8},{'x':397.3,'y':644.0},{'x':392.4,'y':634.5},{'x':386.6,'y':634.3},{'x':381.9,'y':624.5},{'x':371.9,'y':619.5},{'x':361.3,'y':618.9},{'x':343.3,'y':615.0},{'x':314.7,'y':593.8},{'x':307.6,'y':576.9},{'x':471.3,'y':577.5},{'x':484.1,'y':582.0},{'x':500.8,'y':542.7},{'x':516.0,'y':535.5},{'x':588.8,'y':580.5},{'x':705.4,'y':581.0},{'x':722.1,'y':562.0},{'x':776.9,'y':560.2},{'x':814.7,'y':576.0},{'x':814.1,'y':591.6},{'x':834.8,'y':604.9},{'x':835.8,'y':609.4},{'x':839.3,'y':614.7},{'x':839.5,'y':643.3},{'x':835.8,'y':655.4},{'x':816.5,'y':672.9},{'x':799.5,'y':672.6},{'x':794.5,'y':676.9},{'x':791.1,'y':673.4},{'x':775.5,'y':678.2},{'x':778.4,'y':687.5},{'x':770.2,'y':690.6},{'x':752.0,'y':678.2}];

        var thisEl=this;
        for(var i=0;i<dep.length;i++){
            this.transformInScreenAxes(dep[i],this.maxY,dep[i]);
            this._drawDep(el,dep[i],5,'orange');
        }
    },
    _drawNO:function(){
        var nep2=[];
        nep2[0]=[{'x':814.7,'y':576.0},{'x':776.9,'y':560.2},{'x':722.1,'y':562.0},{'x':705.4,'y':581.0},{'x':588.8,'y':580.5},{'x':516.0,'y':535.5},{'x':500.8,'y':542.7},{'x':484.1,'y':582.0},{'x':471.3,'y':577.5},{'x':307.6,'y':576.9}];
        nep2[1]=[{'x':821.5,'y':505.1},{'x':774.4,'y':502.4},{'x':756.4,'y':491.4},{'x':748.6,'y':478.1},{'x':711.8,'y':475.9},{'x':570.8,'y':389.6},{'x':570.3,'y':331.1},{'x':547.8,'y':309.1},{'x':537.8,'y':303.1},{'x':438.3,'y':297.1}];
        nep2[2]=[{'x':821.5,'y':505.1},{'x':820.5,'y':559.4},{'x':814.7,'y':576.0}];
        nep2[3]=[{'x':806.4,'y':313.0},{'x':803.9,'y':317.6},{'x':805.1,'y':325.8},{'x':801.2,'y':336.6},{'x':833.5,'y':334.3},{'x':851.5,'y':320.8},{'x':859.6,'y':315.5},{'x':899.6,'y':318.6},{'x':911.2,'y':334.1},{'x':900.6,'y':374.5},{'x':900.4,'y':415.8},{'x':890.9,'y':422.9},{'x':880.5,'y':421.9},{'x':874.5,'y':431.9},{'x':873.6,'y':438.5},{'x':878.5,'y':446.4},{'x':878.1,'y':455.7},{'x':870.5,'y':460.8},{'x':855.4,'y':454.6},{'x':839.3,'y':464.9},{'x':833.5,'y':481.6},{'x':836.6,'y':489.9},{'x':833.8,'y':497.5},{'x':821.5,'y':504.1},{'x':821.5,'y':505.1}];
        nep2[4]=[{'x':291.9,'y':516.0},{'x':277.7,'y':511.0},{'x':260.8,'y':512.0},{'x':249.2,'y':502.5},{'x':238.1,'y':505.7},{'x':228.5,'y':516.3},{'x':218.4,'y':519.5},{'x':193.6,'y':508.9},{'x':188.8,'y':495.6},{'x':179.3,'y':484.0},{'x':178.8,'y':477.1},{'x':164.5,'y':478.2},{'x':162.9,'y':468.6},{'x':150.8,'y':458.1},{'x':140.7,'y':455.9},{'x':124.8,'y':473.4},{'x':115.8,'y':473.9},{'x':107.3,'y':480.9},{'x':100.5,'y':480.9},{'x':95.2,'y':494.6},{'x':93.6,'y':506.8},{'x':64.5,'y':513.1},{'x':43.9,'y':526.4},{'x':28.0,'y':487.2},{'x':14.3,'y':446.4},{'x':20.3,'y':437.4},{'x':12.1,'y':427.1},{'x':17.9,'y':424.5},{'x':18.8,'y':413.1},{'x':30.6,'y':412.6},{'x':57.6,'y':402.5},{'x':56.9,'y':390.4},{'x':49.1,'y':367.9},{'x':76.7,'y':325.3},{'x':72.7,'y':320.3}];
        nep2[5]=[{'x':307.6,'y':576.9},{'x':311.3,'y':567.0},{'x':311.0,'y':522.6},{'x':291.9,'y':516.0}];
        nep2[6]=[{'x':291.9,'y':516.0},{'x':305.3,'y':472.7},{'x':369.5,'y':401.2},{'x':381.0,'y':362.4},{'x':438.3,'y':297.1}];
        nep2[7]=[{'x':383.4,'y':107.7},{'x':353.8,'y':154.8},{'x':361.4,'y':174.6},{'x':332.1,'y':183.8},{'x':311.5,'y':196.2}];
        nep2[8]=[{'x':438.3,'y':297.1},{'x':437.6,'y':211.3},{'x':449.1,'y':185.1},{'x':493.6,'y':178.9}];
        nep2[9]=[{'x':72.7,'y':320.3},{'x':49.1,'y':320.3},{'x':30.6,'y':288.6},{'x':19.5,'y':279.3},{'x':19.3,'y':272.9},{'x':11.6,'y':258.9},{'x':16.9,'y':250.4},{'x':27.4,'y':249.3},{'x':27.2,'y':215.8},{'x':21.9,'y':206.3},{'x':14.8,'y':158.4},{'x':0.5,'y':138.3},{'x':1.0,'y':121.1},{'x':31.1,'y':95.2},{'x':49.1,'y':96.0},{'x':69.5,'y':112.1},{'x':89.3,'y':112.4},{'x':116.3,'y':121.9},{'x':143.6,'y':139.3},{'x':154.9,'y':131.7},{'x':153.3,'y':113.7},{'x':163.7,'y':111.8},{'x':172.9,'y':122.2},{'x':193.8,'y':114.5},{'x':207.1,'y':141.2},{'x':221.1,'y':114.8},{'x':221.3,'y':120.3},{'x':228.3,'y':119.3},{'x':238.1,'y':111.1},{'x':247.3,'y':115.6},{'x':252.3,'y':112.3},{'x':262.9,'y':115.3},{'x':269.8,'y':110.5},{'x':294.9,'y':121.6},{'x':349.4,'y':105.5},{'x':376.1,'y':104.7},{'x':383.4,'y':107.7},{'x':385.9,'y':108.7},{'x':419.7,'y':129.6},{'x':460.7,'y':98.6},{'x':465.8,'y':102.8},{'x':480.6,'y':97.5}];
        nep2[10]=[{'x':72.7,'y':320.3},{'x':200.4,'y':320.1},{'x':311.5,'y':196.2}];
        nep2[11]=[{'x':480.6,'y':97.5},{'x':484.8,'y':96.0},{'x':487.1,'y':86.2},{'x':503.6,'y':91.0},{'x':523.7,'y':89.9},{'x':537.1,'y':73.8},{'x':548.0,'y':83.0},{'x':563.1,'y':80.1},{'x':572.9,'y':69.0},{'x':589.5,'y':57.3},{'x':639.0,'y':58.4},{'x':644.4,'y':52.5},{'x':650.6,'y':56.0},{'x':672.6,'y':55.3},{'x':691.1,'y':39.6},{'x':692.0,'y':12.9},{'x':717.4,'y':0.5},{'x':735.0,'y':13.4},{'x':734.5,'y':34.0},{'x':742.1,'y':46.5},{'x':743.8,'y':64.2},{'x':763.0,'y':66.6},{'x':782.4,'y':56.3},{'x':797.8,'y':21.9},{'x':816.3,'y':21.9},{'x':822.6,'y':26.1},{'x':829.0,'y':27.2},{'x':859.6,'y':15.3},{'x':896.4,'y':36.2},{'x':905.4,'y':34.4},{'x':917.0,'y':41.5},{'x':920.7,'y':41.8},{'x':921.5,'y':46.3},{'x':929.7,'y':46.0},{'x':935.3,'y':48.4},{'x':936.6,'y':54.7},{'x':914.6,'y':83.3},{'x':911.2,'y':107.1},{'x':896.6,'y':155.3},{'x':863.0,'y':178.8},{'x':859.6,'y':186.9},{'x':854.0,'y':187.2},{'x':830.5,'y':216.3},{'x':831.6,'y':253.8},{'x':825.0,'y':256.3},{'x':813.4,'y':270.0},{'x':814.4,'y':301.5},{'x':809.4,'y':306.5},{'x':807.8,'y':310.4},{'x':806.4,'y':313.0}];
        nep2[12]=[{'x':806.4,'y':313.0},{'x':685.1,'y':313.4},{'x':686.6,'y':196.3},{'x':660.4,'y':172.6},{'x':493.6,'y':178.9}];
        nep2[13]=[{'x':814.7,'y':576.0},{'x':814.1,'y':591.6},{'x':834.8,'y':604.9},{'x':835.8,'y':609.4},{'x':839.3,'y':614.7},{'x':839.5,'y':643.3},{'x':835.8,'y':655.4},{'x':816.5,'y':672.9},{'x':799.5,'y':672.6},{'x':794.5,'y':676.9},{'x':791.1,'y':673.4},{'x':775.5,'y':678.2},{'x':778.4,'y':687.5},{'x':770.2,'y':690.6},{'x':752.0,'y':678.2},{'x':738.2,'y':703.3},{'x':713.4,'y':703.9},{'x':703.8,'y':700.6},{'x':697.5,'y':705.7},{'x':686.1,'y':706.8},{'x':680.3,'y':714.7},{'x':672.6,'y':715.2},{'x':670.0,'y':703.5},{'x':664.1,'y':690.4},{'x':651.7,'y':705.4},{'x':642.2,'y':688.0},{'x':636.6,'y':686.4},{'x':632.6,'y':679.2},{'x':620.2,'y':679.5},{'x':618.1,'y':683.1},{'x':606.2,'y':691.4},{'x':581.1,'y':692.1},{'x':573.6,'y':683.5},{'x':563.1,'y':672.9},{'x':549.4,'y':674.5},{'x':536.1,'y':672.3},{'x':517.4,'y':653.3},{'x':518.1,'y':625.5},{'x':512.0,'y':616.8},{'x':501.2,'y':620.2},{'x':499.9,'y':616.5},{'x':487.4,'y':620.5},{'x':477.6,'y':638.5},{'x':466.3,'y':636.6},{'x':454.1,'y':636.1},{'x':447.5,'y':632.4},{'x':440.9,'y':633.2},{'x':436.6,'y':629.8},{'x':418.9,'y':652.5},{'x':408.1,'y':653.6},{'x':402.8,'y':643.8},{'x':397.3,'y':644.0},{'x':392.4,'y':634.5},{'x':386.6,'y':634.3},{'x':381.9,'y':624.5},{'x':371.9,'y':619.5},{'x':361.3,'y':618.9},{'x':343.3,'y':615.0},{'x':314.7,'y':593.8},{'x':307.6,'y':576.9}];

        var tttj=function(ind){return function(){thisEl._drawDep(el,nep2[ind],7+ind,'red');}}

        for(var i=0;i<nep2.length;i++){
            this.transformInScreenAxes(nep2[i],this.maxY,nep2[i]);
            setTimeout(tttj(i),i*3000);
        }
    },
    _drawDep:function(el,dep2,zind,color){
        var dep=$('<div>').css({'width':parseInt(this.maxX+1),'height':parseInt(this.maxY+1),'position':'absolute','z-index':zind,'top':0,'left':0});
        el.append(dep);
        var imgDep=$('<canvas>');
        dep.append(imgDep);
        var example2 = imgDep[0];
        example2.width=parseInt(this.maxX+1);
        example2.height=parseInt(this.maxY+1);
        var ctx2 = example2.getContext('2d');
        ctx2.beginPath();
        ctx2.moveTo(dep2[0].x, dep2[0].y);
        for(var i=1;i< dep2.length;i++){
            ctx2.lineTo(dep2[i].x, dep2[i].y);
        }

        ctx2.closePath();
        ctx2.stroke();

        ctx2.fillStyle = color;
        ctx2.fill();//обводим

    },
    transformInScreenAxes:function(arrAxces,maxY,resultArr){
        for(var i=0;i<arrAxces.length;i++){
            var t={};
            t.x=arrAxces[i].x;
            t.y=(maxY-arrAxces[i].y).toFixed(1);
            resultArr[i]=t;
        }
    }
}

$(function(){
    var data=new Date();
    new LayerMapRB();
    var dataE=new Date();
    $('body').append($('<div style="position:absolute;z-index: 5;top:10px;left: 300px;">').text(dataE.getTime()-data.getTime()));
});

</script>