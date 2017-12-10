(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.Programming_1 = function() {
	this.initialize(img.Programming_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1600,1600);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(50.1,1,1).p("EAwNgLZIAAWzEgwMgKnIAAQZ");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(50.1,1,1).p("EAs2AAAMhZrAAA");
	this.shape_1.setTransform(-9.5,-15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-333.5,-98,667.1,196.1);


(lib.TextCoverer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(16,1,1).p("EggqABQIAAifMBBVAAAIAACfg");
	this.shape.setTransform(209.1,8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("EggqABQIAAifMBBVAAAIAACfg");
	this.shape_1.setTransform(209.1,8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.TextCoverer, new cjs.Rectangle(-8,-8,434.1,32), null);


(lib.LineRight = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(94.7,1,1).p("Egw6Az5MBh1g3UMhh1gwd");
	this.shape.setTransform(349.1,24);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.LineRight, new cjs.Rectangle(-11.2,-355.3,720.8,758.8), null);


(lib.LineLeft = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(94.7,1,1).p("Egw6Az5MBh1g3UMhh1gwd");
	this.shape.setTransform(294.1,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.LineLeft, new cjs.Rectangle(-66.3,-379.3,720.8,758.8), null);


(lib.Line = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(94.7,1,1).p("EATohJOMgnPCSd");
	this.shape.setTransform(254.1,-11.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(81.3,-527.9,345.8,1032);


(lib.ProgrammingAnimation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Line("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(25,18.5,0.042,0.039,0,0,0,282.9,-11.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ProgrammingAnimation, new cjs.Rectangle(16.5,-1.9,14.6,40.9), null);


(lib.printline = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-32.4,-32.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},9).wait(11).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-366,-131,667.1,196.1);


// stage content:
(lib.Programming = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// LINE LEFT
	this.instance = new lib.LineLeft();
	this.instance.parent = this;
	this.instance.setTransform(90.2,83.9,0.024,0.03,0,0,0,294.7,1.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:294.1,regY:0,x:90.1,y:91.9},0).wait(1).to({y:100},0).wait(1).to({y:108.1},0).wait(1).to({y:116.2},0).wait(1).to({y:124.3},0).wait(1).to({y:132.3},0).wait(1).to({y:140.4},0).wait(1).to({y:148.5},0).wait(1).to({y:156.6},0).wait(142).to({y:151},0).wait(1).to({y:145.4},0).wait(1).to({y:139.8},0).wait(1).to({y:134.2},0).wait(1).to({y:128.6},0).wait(1).to({y:123},0).wait(1).to({y:117.4},0).wait(1).to({y:111.8},0).wait(1).to({y:106.2},0).wait(1).to({y:100.6},0).wait(1).to({y:95},0).wait(1).to({y:89.4},0).wait(1).to({y:83.8},0).wait(1));

	// Line right
	this.instance_1 = new lib.LineRight();
	this.instance_1.parent = this;
	this.instance_1.setTransform(129,84,0.024,0.03,0,0,0,350.7,28.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:349.1,regY:24,x:128.4,y:91.9},0).wait(1).to({x:127.9,y:100},0).wait(1).to({x:127.4,y:108.1},0).wait(1).to({x:126.8,y:116.2},0).wait(1).to({x:126.3,y:124.3},0).wait(1).to({x:125.8,y:132.4},0).wait(1).to({x:125.3,y:140.5},0).wait(1).to({x:124.7,y:148.6},0).wait(1).to({x:124.2,y:156.6},0).wait(1).to({x:129.8},0).wait(1).to({x:135.3},0).wait(1).to({x:140.9},0).wait(1).to({x:146.5},0).wait(1).to({x:152.1},0).wait(1).to({x:157.6},0).wait(1).to({x:163.2},0).wait(1).to({x:168.8},0).wait(1).to({x:174.4},0).wait(1).to({x:179.9},0).wait(1).to({x:185.5},0).wait(1).to({x:191.1},0).wait(1).to({x:196.6},0).wait(1).to({x:202.2},0).wait(1).to({x:207.8},0).wait(1).to({x:213.4},0).wait(1).to({x:218.9},0).wait(1).to({x:224.5},0).wait(1).to({x:230.1},0).wait(1).to({x:235.7},0).wait(1).to({x:241.2},0).wait(1).to({x:246.8},0).wait(1).to({x:252.4},0).wait(1).to({x:258},0).wait(1).to({x:263.5},0).wait(1).to({x:269.1},0).wait(1).to({x:274.7},0).wait(1).to({x:280.2},0).wait(1).to({x:285.8},0).wait(1).to({x:291.4},0).wait(1).to({x:297},0).wait(1).to({x:302.5},0).wait(1).to({x:308.1},0).wait(1).to({x:313.7},0).wait(1).to({x:319.3},0).wait(1).to({x:324.8},0).wait(1).to({x:330.4},0).wait(1).to({x:336},0).wait(1).to({x:341.5},0).wait(1).to({x:347.1},0).wait(1).to({x:352.7},0).wait(1).to({x:358.3},0).wait(1).to({x:363.8},0).wait(1).to({x:369.4},0).wait(1).to({x:375},0).wait(1).to({x:380.6},0).wait(1).to({x:386.1},0).wait(1).to({x:391.7},0).wait(1).to({x:397.3},0).wait(1).to({x:402.9},0).wait(1).to({x:408.4},0).wait(1).to({x:414},0).wait(1).to({x:419.6},0).wait(1).to({x:425.1},0).wait(1).to({x:430.7},0).wait(1).to({x:436.3},0).wait(1).to({x:441.9},0).wait(1).to({x:447.4},0).wait(1).to({x:453},0).wait(1).to({x:458.6},0).wait(1).to({x:464.2},0).wait(1).to({x:469.7},0).wait(1).to({x:475.3},0).wait(1).to({x:480.9},0).wait(1).to({x:486.4},0).wait(1).to({x:492},0).wait(1).to({x:497.6},0).wait(1).to({x:503.2},0).wait(1).to({x:508.7},0).wait(1).to({x:514.3},0).wait(1).to({x:519.9},0).wait(1).to({x:525.5},0).wait(1).to({x:531},0).wait(1).to({x:536.6},0).wait(1).to({x:542.2},0).wait(1).to({x:547.8},0).wait(1).to({x:553.3},0).wait(1).to({x:558.9},0).wait(1).to({x:564.5},0).wait(1).to({x:570},0).wait(1).to({x:575.6},0).wait(1).to({x:581.2},0).wait(1).to({x:586.8},0).wait(1).to({x:592.3},0).wait(1).to({x:597.9},0).wait(1).to({x:603.5},0).wait(1).to({x:609.1},0).wait(1).to({x:614.6},0).wait(1).to({x:620.2},0).wait(1).to({x:625.8},0).wait(1).to({x:631.3},0).wait(16).to({x:617},0).wait(1).to({x:602.6},0).wait(1).to({x:588.2},0).wait(1).to({x:573.8},0).wait(1).to({x:559.4},0).wait(1).to({x:545},0).wait(1).to({x:530.7},0).wait(1).to({x:516.3},0).wait(1).to({x:501.9},0).wait(1).to({x:487.5},0).wait(1).to({x:473.1},0).wait(1).to({x:458.7},0).wait(1).to({x:444.4},0).wait(1).to({x:430},0).wait(1).to({x:415.6},0).wait(1).to({x:401.2},0).wait(1).to({x:386.8},0).wait(1).to({x:372.4},0).wait(1).to({x:358},0).wait(1).to({x:343.7},0).wait(1).to({x:329.3},0).wait(1).to({x:314.9},0).wait(1).to({x:300.5},0).wait(1).to({x:286.1},0).wait(1).to({x:271.7},0).wait(1).to({x:257.4},0).wait(1).to({x:243},0).wait(1).to({x:228.6},0).wait(1).to({x:214.2},0).wait(1).to({x:199.8},0).wait(1).to({x:185.4},0).wait(1).to({x:171.1},0).wait(1).to({x:156.7},0).wait(1).to({x:142.3},0).wait(1).to({x:127.9},0).wait(1).to({x:128,y:151},0).wait(1).to({x:128.2,y:145.4},0).wait(1).to({x:128.3,y:139.8},0).wait(1).to({x:128.4,y:134.2},0).wait(1).to({x:128.6,y:128.6},0).wait(1).to({x:128.7,y:123},0).wait(1).to({x:128.8,y:117.3},0).wait(1).to({x:129,y:111.7},0).wait(1).to({x:129.1,y:106.1},0).wait(1).to({x:129.2,y:100.5},0).wait(1).to({x:129.4,y:94.9},0).wait(1).to({x:129.5,y:89.3},0).wait(1).to({x:129.6,y:83.6},0).wait(1));

	// Layer 4
	this.instance_2 = new lib.ProgrammingAnimation();
	this.instance_2.parent = this;
	this.instance_2.setTransform(107.8,84.2,1,1,0,0,0,23.8,18.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regY:18.5,x:107.3,y:92.4},0).wait(1).to({x:106.7,y:100.5},0).wait(1).to({x:106.2,y:108.6},0).wait(1).to({x:105.7,y:116.7},0).wait(1).to({x:105.2,y:124.7},0).wait(1).to({x:104.6,y:132.8},0).wait(1).to({x:104.1,y:140.9},0).wait(1).to({x:103.6,y:149},0).wait(1).to({x:103.1,y:157.1},0).wait(1).to({x:108.6},0).wait(1).to({x:114.2},0).wait(1).to({x:119.8},0).wait(1).to({x:125.3},0).wait(1).to({x:130.9},0).wait(1).to({x:136.5},0).wait(1).to({x:142.1},0).wait(1).to({x:147.6},0).wait(1).to({x:153.2},0).wait(1).to({x:158.8},0).wait(1).to({x:164.4},0).wait(1).to({x:169.9},0).wait(1).to({x:175.5},0).wait(1).to({x:181.1},0).wait(1).to({x:186.6},0).wait(1).to({x:192.2},0).wait(1).to({x:197.8},0).wait(1).to({x:203.4},0).wait(1).to({x:208.9},0).wait(1).to({x:214.5},0).wait(1).to({x:220.1},0).wait(1).to({x:225.7},0).wait(1).to({x:231.2},0).wait(1).to({x:236.8},0).wait(1).to({x:242.4},0).wait(1).to({x:247.9},0).wait(1).to({x:253.5},0).wait(1).to({x:259.1},0).wait(1).to({x:264.7},0).wait(1).to({x:270.2},0).wait(1).to({x:275.8},0).wait(1).to({x:281.4},0).wait(1).to({x:287},0).wait(1).to({x:292.5},0).wait(1).to({x:298.1},0).wait(1).to({x:303.7},0).wait(1).to({x:309.2},0).wait(1).to({x:314.8},0).wait(1).to({x:320.4},0).wait(1).to({x:326},0).wait(1).to({x:331.5},0).wait(1).to({x:337.1},0).wait(1).to({x:342.7},0).wait(1).to({x:348.3},0).wait(1).to({x:353.8},0).wait(1).to({x:359.4},0).wait(1).to({x:365},0).wait(1).to({x:370.6},0).wait(1).to({x:376.1},0).wait(1).to({x:381.7},0).wait(1).to({x:387.3},0).wait(1).to({x:392.8},0).wait(1).to({x:398.4},0).wait(1).to({x:404},0).wait(1).to({x:409.6},0).wait(1).to({x:415.1},0).wait(1).to({x:420.7},0).wait(1).to({x:426.3},0).wait(1).to({x:431.9},0).wait(1).to({x:437.4},0).wait(1).to({x:443},0).wait(1).to({x:448.6},0).wait(1).to({x:454.1},0).wait(1).to({x:459.7},0).wait(1).to({x:465.3},0).wait(1).to({x:470.9},0).wait(1).to({x:476.4},0).wait(1).to({x:482},0).wait(1).to({x:487.6},0).wait(1).to({x:493.2},0).wait(1).to({x:498.7},0).wait(1).to({x:504.3},0).wait(1).to({x:509.9},0).wait(1).to({x:515.5},0).wait(1).to({x:521},0).wait(1).to({x:526.6},0).wait(1).to({x:532.2},0).wait(1).to({x:537.7},0).wait(1).to({x:543.3},0).wait(1).to({x:548.9},0).wait(1).to({x:554.5},0).wait(1).to({x:560},0).wait(1).to({x:565.6},0).wait(1).to({x:571.2},0).wait(1).to({x:576.8},0).wait(1).to({x:582.3},0).wait(1).to({x:587.9},0).wait(1).to({x:593.5},0).wait(1).to({x:599},0).wait(1).to({x:604.6},0).wait(1).to({x:610.2},0).wait(16).to({x:595.8},0).wait(1).to({x:581.4},0).wait(1).to({x:567},0).wait(1).to({x:552.7},0).wait(1).to({x:538.3},0).wait(1).to({x:523.9},0).wait(1).to({x:509.5},0).wait(1).to({x:495.1},0).wait(1).to({x:480.7},0).wait(1).to({x:466.4},0).wait(1).to({x:452},0).wait(1).to({x:437.6},0).wait(1).to({x:423.2},0).wait(1).to({x:408.8},0).wait(1).to({x:394.4},0).wait(1).to({x:380.1},0).wait(1).to({x:365.7},0).wait(1).to({x:351.3},0).wait(1).to({x:336.9},0).wait(1).to({x:322.5},0).wait(1).to({x:308.1},0).wait(1).to({x:293.7},0).wait(1).to({x:279.4},0).wait(1).to({x:265},0).wait(1).to({x:250.6},0).wait(1).to({x:236.2},0).wait(1).to({x:221.8},0).wait(1).to({x:207.4},0).wait(1).to({x:193.1},0).wait(1).to({x:178.7},0).wait(1).to({x:164.3},0).wait(1).to({x:149.9},0).wait(1).to({x:135.5},0).wait(1).to({x:121.1},0).wait(1).to({x:106.8},0).wait(1).to({x:106.9,y:151.5},0).wait(1).to({x:107,y:145.9},0).wait(1).to({x:107.2,y:140.3},0).wait(1).to({x:107.3,y:134.6},0).wait(1).to({x:107.4,y:129},0).wait(1).to({x:107.6,y:123.4},0).wait(1).to({x:107.7,y:117.8},0).wait(1).to({x:107.8,y:112.2},0).wait(1).to({x:108,y:106.6},0).wait(1).to({x:108.1,y:100.9},0).wait(1).to({x:108.2,y:95.3},0).wait(1).to({x:108.4,y:89.7},0).wait(1).to({x:108.5,y:84.1},0).wait(1));

	// line
	this.instance_3 = new lib.printline();
	this.instance_3.parent = this;
	this.instance_3.setTransform(114.4,166.6,0.041,0.068);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(14).to({_off:false},0).wait(1).to({regX:-32.5,regY:-33,x:118,y:164.4},0).wait(1).to({x:123},0).wait(1).to({x:128},0).wait(1).to({x:133},0).wait(1).to({x:138},0).wait(1).to({x:143},0).wait(1).to({x:148},0).wait(1).to({x:153},0).wait(1).to({x:157.9},0).wait(1).to({x:162.9},0).wait(1).to({x:167.9},0).wait(1).to({x:172.9},0).wait(1).to({x:177.9},0).wait(1).to({x:182.9},0).wait(1).to({x:187.9},0).wait(1).to({x:192.9},0).wait(1).to({x:197.9},0).wait(1).to({x:202.8},0).wait(1).to({x:207.8},0).wait(1).to({x:212.8},0).wait(1).to({x:217.8},0).wait(1).to({x:222.8},0).wait(1).to({x:227.8},0).wait(1).to({x:232.8},0).wait(1).to({x:237.8},0).wait(1).to({x:242.7},0).wait(1).to({x:247.7},0).wait(1).to({x:252.7},0).wait(1).to({x:257.7},0).wait(1).to({x:262.7},0).wait(1).to({x:267.7},0).wait(1).to({x:272.7},0).wait(1).to({x:277.7},0).wait(1).to({x:282.7},0).wait(1).to({x:287.6},0).wait(1).to({x:292.6},0).wait(1).to({x:297.6},0).wait(1).to({x:302.6},0).wait(1).to({x:307.6},0).wait(1).to({x:312.6},0).wait(1).to({x:317.6},0).wait(1).to({x:322.6},0).wait(1).to({x:327.6},0).wait(1).to({x:332.5},0).wait(1).to({x:337.5},0).wait(1).to({x:342.5},0).wait(1).to({x:347.5},0).wait(1).to({x:352.5},0).wait(1).to({x:357.5},0).wait(1).to({x:362.5},0).wait(1).to({x:367.5},0).wait(1).to({x:372.4},0).wait(1).to({x:377.4},0).wait(1).to({x:382.4},0).wait(1).to({x:387.4},0).wait(1).to({x:392.4},0).wait(1).to({x:397.4},0).wait(1).to({x:402.4},0).wait(1).to({x:407.4},0).wait(1).to({x:412.4},0).wait(1).to({x:417.3},0).wait(1).to({x:422.3},0).wait(1).to({x:427.3},0).wait(1).to({x:432.3},0).wait(1).to({x:437.3},0).wait(1).to({x:442.3},0).wait(1).to({x:447.3},0).wait(1).to({x:452.3},0).wait(1).to({x:457.2},0).wait(1).to({x:462.2},0).wait(1).to({x:467.2},0).wait(1).to({x:472.2},0).wait(1).to({x:477.2},0).wait(1).to({x:482.2},0).wait(1).to({x:487.2},0).wait(1).to({x:492.2},0).wait(1).to({x:497.2},0).wait(1).to({x:502.1},0).wait(1).to({x:507.1},0).wait(1).to({x:512.1},0).wait(1).to({x:517.1},0).wait(1).to({x:522.1},0).wait(1).to({x:527.1},0).wait(1).to({x:532.1},0).wait(1).to({x:537.1},0).wait(1).to({x:542.1},0).wait(16).to({x:524.8},0).wait(1).to({x:507.5},0).wait(1).to({x:490.2},0).wait(1).to({x:472.9},0).wait(1).to({x:455.7},0).wait(1).to({x:438.4},0).wait(1).to({x:421.1},0).wait(1).to({x:403.8},0).wait(1).to({x:386.6},0).wait(1).to({x:369.3},0).wait(1).to({x:352},0).wait(1).to({x:334.7},0).wait(1).to({x:317.5},0).wait(1).to({x:300.2},0).wait(1).to({x:282.9},0).wait(1).to({x:265.6},0).wait(1).to({x:248.4},0).wait(1).to({x:231.1},0).wait(1).to({x:213.8},0).wait(1).to({x:196.5},0).wait(1).to({x:179.3},0).wait(1).to({x:162},0).wait(1).to({x:144.7},0).wait(1).to({x:127.4},0).wait(1).to({x:110.2},0).to({_off:true},1).wait(23));

	// Text Cover
	this.instance_4 = new lib.TextCoverer();
	this.instance_4.parent = this;
	this.instance_4.setTransform(662.9,162.5,1.352,1.75,0,0,0,418.1,8.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:209.1,regY:8,x:381.3,y:162.1},0).wait(1).to({x:382.2},0).wait(1).to({x:383.1,y:162},0).wait(1).to({x:384.1},0).wait(1).to({x:385,y:161.9},0).wait(1).to({x:385.9},0).wait(1).to({x:386.8,y:161.8},0).wait(1).to({x:387.8},0).wait(1).to({x:388.7,y:161.7},0).wait(1).to({x:389.6},0).wait(1).to({x:390.6,y:161.6},0).wait(1).to({x:391.5},0).wait(1).to({x:392.4,y:161.5},0).wait(1).to({x:393.3},0).wait(1).to({x:398.3},0).wait(1).to({x:403.3},0).wait(1).to({x:408.3},0).wait(1).to({x:413.3},0).wait(1).to({x:418.3},0).wait(1).to({x:423.2},0).wait(1).to({x:428.2},0).wait(1).to({x:433.2},0).wait(1).to({x:438.2},0).wait(1).to({x:443.2},0).wait(1).to({x:448.1},0).wait(1).to({x:453.1},0).wait(1).to({x:458.1},0).wait(1).to({x:463.1},0).wait(1).to({x:468.1},0).wait(1).to({x:473.1},0).wait(1).to({x:478},0).wait(1).to({x:483},0).wait(1).to({x:488},0).wait(1).to({x:493},0).wait(1).to({x:498},0).wait(1).to({x:502.9},0).wait(1).to({x:507.9},0).wait(1).to({x:512.9},0).wait(1).to({x:517.9},0).wait(1).to({x:522.9},0).wait(1).to({x:527.9},0).wait(1).to({x:532.8},0).wait(1).to({x:537.8},0).wait(1).to({x:542.8},0).wait(1).to({x:547.8},0).wait(1).to({x:552.8},0).wait(1).to({x:557.7},0).wait(1).to({x:562.7},0).wait(1).to({x:567.7},0).wait(1).to({x:572.7},0).wait(1).to({x:577.7},0).wait(1).to({x:582.7},0).wait(1).to({x:587.6},0).wait(1).to({x:592.6},0).wait(1).to({x:597.6},0).wait(1).to({x:602.6},0).wait(1).to({x:607.6},0).wait(1).to({x:612.6},0).wait(1).to({x:617.5},0).wait(1).to({x:622.5},0).wait(1).to({x:627.5},0).wait(1).to({x:632.5},0).wait(1).to({x:637.5},0).wait(1).to({x:642.4},0).wait(1).to({x:647.4},0).wait(1).to({x:652.4},0).wait(1).to({x:657.4},0).wait(1).to({x:662.4},0).wait(1).to({x:667.4},0).wait(1).to({x:672.3},0).wait(1).to({x:677.3},0).wait(1).to({x:682.3},0).wait(1).to({x:687.3},0).wait(1).to({x:692.3},0).wait(1).to({x:697.2},0).wait(1).to({x:702.2},0).wait(1).to({x:707.2},0).wait(1).to({x:712.2},0).wait(1).to({x:717.2},0).wait(1).to({x:722.2},0).wait(1).to({x:727.1},0).wait(1).to({x:732.1},0).wait(1).to({x:737.1},0).wait(1).to({x:742.1},0).wait(1).to({x:747.1},0).wait(1).to({x:752},0).wait(1).to({x:757},0).wait(1).to({x:762},0).wait(1).to({x:767},0).wait(1).to({x:772},0).wait(1).to({x:777},0).wait(1).to({x:781.9},0).wait(1).to({x:786.9},0).wait(1).to({x:791.9},0).wait(1).to({x:796.9},0).wait(1).to({x:801.9},0).wait(1).to({x:806.8},0).wait(1).to({x:811.8},0).wait(1).to({x:816.8},0).wait(1).to({x:821.8},0).wait(1).to({x:822},0).wait(1).to({x:822.3},0).wait(1).to({x:822.5},0).wait(1).to({x:822.7},0).wait(1).to({x:823},0).wait(1).to({x:823.2},0).wait(1).to({x:823.4},0).wait(1).to({x:823.7},0).wait(1).to({x:823.9},0).wait(1).to({x:824.1},0).wait(1).to({x:824.4},0).wait(1).to({x:824.6},0).wait(1).to({x:824.8},0).wait(1).to({x:825.1},0).wait(1).to({x:825.3},0).wait(1).to({x:808},0).wait(1).to({x:790.7},0).wait(1).to({x:773.5},0).wait(1).to({x:756.2},0).wait(1).to({x:738.9},0).wait(1).to({x:721.6},0).wait(1).to({x:704.4},0).wait(1).to({x:687.1},0).wait(1).to({x:669.8},0).wait(1).to({x:652.5},0).wait(1).to({x:635.3},0).wait(1).to({x:618},0).wait(1).to({x:600.7},0).wait(1).to({x:583.4},0).wait(1).to({x:566.2},0).wait(1).to({x:548.9},0).wait(1).to({x:531.6},0).wait(1).to({x:514.3},0).wait(1).to({x:497.1},0).wait(1).to({x:479.8},0).wait(1).to({x:462.5},0).wait(1).to({x:445.2},0).wait(1).to({x:427.9},0).wait(1).to({x:410.7},0).wait(1).to({x:393.4},0).wait(24));

	// Text ani
	this.text = new cjs.Text("public void helloWorld();", "bold 15px 'Helvetica Neue'", "#FFFFFF");
	this.text.lineHeight = 20;
	this.text.lineWidth = 200;
	this.text.parent = this;
	this.text.setTransform(102.6,146.7,2.495,1);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(164));

	// Ani
	this.instance_5 = new lib.Programming_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(60,29,0.063,0.063);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(164));

	// Text
	this.text_1 = new cjs.Text("Programming", "bold 33px 'Helvetica Neue'", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 41;
	this.text_1.lineWidth = 246;
	this.text_1.parent = this;
	this.text_1.setTransform(337,75.9);

	this.timeline.addTween(cjs.Tween.get(this.text_1).wait(164));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(410,129,613.7,161.2);
// library properties:
lib.properties = {
	id: 'DF11D3DB3E3F4B58B963D211E97D5C92',
	width: 700,
	height: 200,
	fps: 60,
	color: "#000000",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/Programming_1.png", id:"Programming_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['DF11D3DB3E3F4B58B963D211E97D5C92'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;