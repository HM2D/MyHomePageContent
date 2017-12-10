(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bp1 = function() {
	this.initialize(img.bp1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,69,101);


(lib.bp2 = function() {
	this.initialize(img.bp2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,102);


(lib.bp3 = function() {
	this.initialize(img.bp3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,55,123);


(lib.bp4 = function() {
	this.initialize(img.bp4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,82,118);


(lib.Game = function() {
	this.initialize(img.Game);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,512,512);


(lib.window = function() {
	this.initialize(img.window);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,280,449);


(lib.Xboxcontroller = function() {
	this.initialize(img.Xboxcontroller);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,350);// helper functions:

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


(lib.Thirdpart = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bp3();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.15,1.193);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Thirdpart, new cjs.Rectangle(0,0,63.3,146.8), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Xboxcontroller();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.18,0.211);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,90.2,74), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Game();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.168,0.141);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,86.1,72.1), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AiXlOIGPAAIhgKdImPAAg");
	this.shape.setTransform(35.2,33.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag2K8IBfqeIGQAAIhgKegAogK8IBgqeIGQAAIhgKegAAxgdIBgqeIGQAAIhgKegAm4gdIBgqeIGPAAIhfKeg");
	this.shape_1.setTransform(54.5,70);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,-1,109,141), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.window();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,280,449), null);


(lib.Secondpart = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bp4();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.034,1.044);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Secondpart, new cjs.Rectangle(0,0,84.8,123.3), null);


(lib.fourthpart = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bp2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.031,1.085);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.fourthpart, new cjs.Rectangle(0,0,66,110.7), null);


(lib.FirstPart = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bp1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.283,1.282);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.FirstPart, new cjs.Rectangle(0,0,88.6,129.5), null);


(lib.Brokenwindow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// window.png
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(-133.5,173.8,1,1,0,0,0,0,449);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:140,regY:224.5,x:6.5,y:-50.7},0).wait(60).to({rotation:6,x:29.2,y:-34.9},0).wait(1).to({rotation:12,x:50,y:-16.8},0).wait(1).to({rotation:17.9,x:68.8,y:3.3},0).wait(1).to({rotation:23.9,x:85.5,y:25.3},0).wait(1).to({rotation:29.9,x:99.8,y:48.9},0).wait(1).to({rotation:35.9,x:111.5,y:73.9},0).wait(1).to({rotation:41.8,x:120.6,y:99.9},0).wait(1).to({rotation:47.8,x:126.9,y:126.8},0).wait(1).to({rotation:53.8,x:130.4,y:154.1},0).wait(1).to({rotation:59.8,x:131,y:181.7},0).wait(1).to({rotation:65.8,x:128.7,y:209.2},0).wait(1).to({rotation:71.7,x:123.6,y:236.3},0).wait(1).to({rotation:77.7,x:115.7,y:262.7},0).wait(1).to({rotation:83.7,x:105,y:288.2},0).wait(1).to({rotation:89.7,x:91.8,y:312.4},0).wait(1).to({rotation:95.6,x:76.2,y:335.1},0).wait(1).to({rotation:101.6,x:58.2,y:356.1},0).wait(1).to({rotation:107.6,x:38.2,y:375},0).wait(1).to({rotation:113.6,x:16.3,y:391.8},0).wait(1).to({rotation:119.5,x:-7.2,y:406.3},0).wait(1).to({rotation:125.5,x:-32.1,y:418.1},0).wait(10));

	// bp1.png
	this.instance_1 = new lib.FirstPart();
	this.instance_1.parent = this;
	this.instance_1.setTransform(60.2,-123,1,1,0,0,0,44.2,65);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:44.3,regY:64.8,scaleX:0.92,scaleY:1,skewX:-2.9,skewY:-1.5,x:67.3,y:-117.5},0).wait(1).to({scaleX:0.84,scaleY:1.01,skewX:-5.8,skewY:-3,x:74.3,y:-112},0).wait(1).to({scaleX:0.76,scaleY:1.01,skewX:-8.7,skewY:-4.5,x:81.2,y:-106.4},0).wait(1).to({scaleX:0.67,scaleY:1.01,skewX:-11.6,skewY:-6,x:88.3,y:-100.7},0).wait(1).to({scaleX:0.59,scaleY:1.01,skewX:-14.5,skewY:-7.5,x:95.2,y:-95.2},0).wait(1).to({scaleX:0.51,scaleY:1.02,skewX:-17.4,skewY:-9,x:102.2,y:-89.6},0).wait(1).to({scaleX:0.43,scaleY:1.02,skewX:-20.2,skewY:-10.5,x:109.2,y:-83.9},0).wait(1).to({scaleX:0.35,scaleY:1.02,skewX:-23.1,skewY:-12,x:116.2,y:-78.3},0).wait(1).to({scaleX:0.27,scaleY:1.03,skewX:-26,skewY:-13.5,x:123.2,y:-72.7},0).wait(1).to({scaleX:0.19,scaleY:1.03,skewX:-28.9,skewY:-15,x:130.2,y:-67.1},0).wait(1).to({scaleX:0.1,scaleY:0.87,x:135.5,y:-45.3},0).wait(1).to({scaleX:0.02,scaleY:0.71,x:140.8,y:-23.5},0).wait(1).to({scaleX:0.06,scaleY:0.55,skewY:165,x:146.1,y:-1.7},0).wait(1).to({scaleX:0.14,scaleY:0.39,x:151.4,y:20.1},0).wait(1).to({scaleX:0.22,scaleY:0.22,skewX:-28.8,x:156.8,y:41.9},0).wait(1).to({scaleX:0.3,scaleY:0.06,x:162,y:63.7},0).wait(1).to({scaleX:0.39,scaleY:0.1,skewX:151.2,x:167.3,y:85.5},0).wait(1).to({scaleX:0.47,scaleY:0.26,x:172.6,y:107.3},0).wait(1).to({scaleX:0.55,scaleY:0.42,x:178,y:129.2},0).wait(1).to({scaleX:0.63,scaleY:0.58,x:183.3,y:151},0).wait(1).to({scaleX:0.55,scaleY:0.51,y:164.9},0).wait(1).to({scaleX:0.47,scaleY:0.44,x:183.2,y:178.8},0).wait(1).to({scaleX:0.39,scaleY:0.37,x:183.3,y:192.8},0).wait(1).to({scaleX:0.31,scaleY:0.29,x:183.2,y:206.6},0).wait(1).to({scaleX:0.23,scaleY:0.22,y:220.6},0).wait(1).to({scaleX:0.14,scaleY:0.15,y:234.5},0).wait(1).to({scaleX:0.07,scaleY:0.07,x:183.3,y:248.5},0).wait(1).to({scaleX:0.02,scaleY:0,skewY:-15,y:262.3},0).wait(1).to({scaleX:0.1,scaleY:0.07,skewX:-28.8,y:276.3},0).wait(1).to({scaleX:0.18,scaleY:0.14,skewX:-28.8,x:183.2,y:290.2},0).wait(1).to({scaleX:0.26,scaleY:0.22,x:183.3,y:304.1},0).wait(1).to({scaleX:0.34,scaleY:0.29,x:183.2,y:318},0).wait(1).to({scaleX:0.42,scaleY:0.36,y:332},0).wait(1).to({scaleX:0.5,scaleY:0.44,y:345.9},0).wait(1).to({scaleX:0.58,scaleY:0.51,y:359.8},0).wait(1).to({y:370.8},0).wait(1).to({y:381.8},0).wait(1).to({y:392.7},0).wait(1).to({y:403.7},0).wait(1).to({y:414.7},0).wait(1).to({y:425.6},0).wait(1).to({y:436.6},0).wait(1).to({y:447.6},0).wait(1).to({y:458.6},0).wait(1).to({y:469.5},0).wait(1).to({y:480.5},0).wait(1).to({y:491.5},0).wait(44));

	// bp4.png
	this.instance_2 = new lib.Secondpart();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-46.5,18.6,1,1,0,0,0,42.5,61.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:42.4,scaleX:1,rotation:4.5,x:-40.2,y:30.5},0).wait(1).to({scaleX:1,rotation:9,x:-33.9,y:42.4},0).wait(1).to({scaleX:1,rotation:13.4,x:-27.6,y:54.2},0).wait(1).to({scaleX:1,rotation:17.9,x:-21.2,y:66.1},0).wait(1).to({scaleX:1,rotation:22.4,x:-14.9,y:77.9},0).wait(1).to({scaleX:1.01,rotation:26.9,x:-8.6,y:89.8},0).wait(1).to({scaleX:1.01,rotation:31.4,x:-2.2,y:101.7},0).wait(1).to({scaleX:1.01,rotation:35.9,x:4.1,y:113.5},0).wait(1).to({scaleX:1.01,rotation:40.3,x:10.4,y:125.4},0).wait(1).to({scaleX:1.01,rotation:44.8,x:16.8,y:137.3},0).wait(1).to({scaleX:0.82,scaleY:0.96,x:24.5,y:142.8},0).wait(1).to({scaleX:0.62,scaleY:0.93,x:32.3,y:148.5},0).wait(1).to({scaleX:0.43,scaleY:0.89,x:40.2,y:154},0).wait(1).to({scaleX:0.24,scaleY:0.86,x:48,y:159.7},0).wait(1).to({scaleX:0.04,scaleY:0.82,x:55.8,y:165.3},0).wait(1).to({scaleX:0.15,scaleY:0.78,rotation:0,skewX:44.8,skewY:-135.2,x:63.7,y:170.9},0).wait(1).to({scaleX:0.34,scaleY:0.75,x:71.4,y:176.5},0).wait(1).to({scaleX:0.54,scaleY:0.71,x:79.3,y:182.1},0).wait(1).to({scaleX:0.73,scaleY:0.68,x:87.1,y:187.8},0).wait(1).to({scaleX:0.92,scaleY:0.64,x:94.9,y:193.4},0).wait(1).to({scaleX:0.82,scaleY:0.57,y:202.4},0).wait(1).to({scaleX:0.72,scaleY:0.5,y:211.4},0).wait(1).to({scaleX:0.62,scaleY:0.43,y:220.3},0).wait(1).to({scaleX:0.52,scaleY:0.36,y:229.3},0).wait(1).to({scaleX:0.42,scaleY:0.29,y:238.3},0).wait(1).to({scaleX:0.31,scaleY:0.22,y:247.3},0).wait(1).to({scaleX:0.21,scaleY:0.15,y:256.3},0).wait(1).to({scaleX:0.11,scaleY:0.08,y:265.3},0).wait(1).to({scaleX:0.01,scaleY:0.01,y:274.3},0).wait(1).to({scaleX:0.09,scaleY:0.06,skewX:-135.2,skewY:44.8,y:283.3},0).wait(1).to({scaleX:0.19,scaleY:0.13,skewY:44.8,x:94.8,y:292.3},0).wait(1).to({scaleX:0.29,scaleY:0.2,y:301.3},0).wait(1).to({scaleX:0.39,scaleY:0.27,y:310.3},0).wait(1).to({scaleX:0.5,scaleY:0.34,y:319.3},0).wait(1).to({scaleX:0.6,scaleY:0.41,y:328.3},0).wait(1).to({x:95.8,y:343.4},0).wait(1).to({x:96.9,y:358.6},0).wait(1).to({x:97.9,y:373.8},0).wait(1).to({x:98.9,y:388.9},0).wait(1).to({x:99.9,y:404.1},0).wait(1).to({x:101,y:419.3},0).wait(1).to({x:102,y:434.4},0).wait(1).to({x:103,y:449.6},0).wait(1).to({x:104,y:464.8},0).wait(1).to({x:105.1,y:479.9},0).wait(1).to({x:106.1,y:495.1},0).wait(1).to({x:107.1,y:510.3},0).wait(44));

	// bp3.png
	this.instance_3 = new lib.Thirdpart();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-23.4,-131.6,1,1,0,0,0,31.6,73.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({scaleX:0.91,scaleY:0.99,rotation:-1.5,x:-7,y:-121.4},0).wait(1).to({scaleX:0.82,scaleY:0.98,rotation:-3,x:9.2,y:-111.3},0).wait(1).to({scaleX:0.73,scaleY:0.97,rotation:-4.5,x:25.6,y:-101.2},0).wait(1).to({scaleX:0.64,scaleY:0.96,rotation:-6,x:41.8,y:-91},0).wait(1).to({scaleX:0.55,scaleY:0.95,rotation:-7.5,x:58.2,y:-80.9},0).wait(1).to({scaleX:0.46,scaleY:0.94,rotation:-9,x:74.4,y:-70.8},0).wait(1).to({scaleX:0.37,scaleY:0.93,rotation:-10.5,x:90.7,y:-60.7},0).wait(1).to({scaleX:0.28,scaleY:0.92,rotation:-12,x:107.1,y:-50.5},0).wait(1).to({scaleX:0.19,scaleY:0.91,rotation:-13.5,x:123.4,y:-40.4},0).wait(1).to({scaleX:0.1,scaleY:0.9,rotation:-15,x:139.7,y:-30.3},0).wait(1).to({scaleX:0.01,scaleY:0.89,rotation:-19.5,x:149.6,y:-16},0).wait(1).to({scaleX:0.08,scaleY:0.88,rotation:0,skewX:-24,skewY:156,x:159.5,y:-1.8},0).wait(1).to({scaleX:0.17,scaleY:0.87,skewX:-28.4,skewY:151.6,x:169.3,y:12.6},0).wait(1).to({scaleX:0.26,scaleY:0.86,skewX:-32.9,skewY:147.1,x:179.3,y:26.9},0).wait(1).to({scaleX:0.36,scaleY:0.85,skewX:-37.4,skewY:142.6,x:189.2,y:41.2},0).wait(1).to({scaleX:0.45,scaleY:0.84,skewX:-41.9,skewY:138.1,x:199.1,y:55.4},0).wait(1).to({scaleX:0.54,scaleY:0.83,skewX:-46.4,skewY:133.6,x:209,y:69.7},0).wait(1).to({scaleX:0.63,scaleY:0.81,skewX:-50.9,skewY:129.1,x:218.9,y:84},0).wait(1).to({scaleX:0.72,scaleY:0.8,skewX:-55.3,skewY:124.7,x:228.9,y:98.3},0).wait(1).to({scaleX:0.81,scaleY:0.79,skewX:-59.8,skewY:120.2,x:238.8,y:112.6},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:242.3,y:127.8},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:245.8,y:142.9},0).wait(1).to({scaleX:0.55,scaleY:0.56,x:249.2,y:158.1},0).wait(1).to({scaleX:0.46,scaleY:0.48,x:252.8,y:173.3},0).wait(1).to({scaleX:0.38,scaleY:0.4,x:256.3,y:188.5},0).wait(1).to({scaleX:0.29,scaleY:0.32,x:259.8,y:203.6},0).wait(1).to({scaleX:0.21,scaleY:0.24,x:263.3,y:218.8},0).wait(1).to({scaleX:0.12,scaleY:0.16,x:266.8,y:234},0).wait(1).to({scaleX:0.04,scaleY:0.08,x:270.3,y:249.2},0).wait(1).to({scaleX:0.05,scaleY:0,rotation:-59.8,skewX:0,skewY:0,x:273.9,y:264.3},0).wait(1).to({scaleX:0.14,scaleY:0.08,rotation:0,skewX:120.2,skewY:-59.8,x:277.3,y:279.5},0).wait(1).to({scaleX:0.22,scaleY:0.15,x:280.8,y:294.7},0).wait(1).to({scaleX:0.31,scaleY:0.23,x:284.3,y:309.9},0).wait(1).to({scaleX:0.39,scaleY:0.31,x:287.8,y:325},0).wait(1).to({scaleX:0.48,scaleY:0.39,x:291.4,y:340.2},0).wait(1).to({x:285.9,y:355.7},0).wait(1).to({x:280.5,y:371.3},0).wait(1).to({x:275.1,y:386.9},0).wait(1).to({x:269.7,y:402.5},0).wait(1).to({x:264.3,y:418.1},0).wait(1).to({x:258.9,y:433.7},0).wait(1).to({x:253.4,y:449.2},0).wait(1).to({x:248,y:464.8},0).wait(1).to({x:242.6,y:480.4},0).wait(1).to({x:237.2,y:496},0).wait(1).to({x:231.8,y:511.6},0).wait(1).to({x:226.4,y:527.2},0).wait(44));

	// bp2.png
	this.instance_4 = new lib.fourthpart();
	this.instance_4.parent = this;
	this.instance_4.setTransform(41,12.4,1,1,0,0,0,33,55.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({scaleX:0.89,scaleY:0.99,rotation:4.5,x:47.1,y:16.8},0).wait(1).to({scaleX:0.78,scaleY:0.98,rotation:9,x:53.3,y:21.1},0).wait(1).to({scaleX:0.67,scaleY:0.97,rotation:13.5,x:59.4,y:25.4},0).wait(1).to({scaleX:0.56,scaleY:0.95,rotation:18,x:65.5,y:29.8},0).wait(1).to({scaleX:0.45,scaleY:0.94,rotation:22.5,x:71.6,y:34.1},0).wait(1).to({scaleX:0.34,scaleY:0.93,rotation:27,x:77.8,y:38.4},0).wait(1).to({scaleX:0.23,scaleY:0.92,rotation:31.5,x:83.8,y:42.7},0).wait(1).to({scaleX:0.12,scaleY:0.91,rotation:36,x:90,y:47},0).wait(1).to({scaleX:0.01,scaleY:0.9,rotation:40.5,x:96.2,y:51.4},0).wait(1).to({scaleX:0.1,scaleY:0.89,rotation:0,skewX:45,skewY:-135,x:102.2,y:55.7},0).wait(1).to({scaleX:0.21,scaleY:0.87,x:121.9,y:79.8},0).wait(1).to({scaleX:0.31,scaleY:0.86,x:141.7,y:103.9},0).wait(1).to({scaleX:0.42,scaleY:0.85,x:161.3,y:127.9},0).wait(1).to({scaleX:0.53,scaleY:0.84,x:181.1,y:152.1},0).wait(1).to({scaleX:0.64,scaleY:0.83,x:200.8,y:176.2},0).wait(1).to({scaleX:0.75,scaleY:0.82,x:220.5,y:200.2},0).wait(1).to({scaleX:0.86,scaleY:0.81,x:240.2,y:224.3},0).wait(1).to({scaleX:0.97,scaleY:0.79,x:259.9,y:248.5},0).wait(1).to({scaleX:1.08,scaleY:0.78,x:279.6,y:272.5},0).wait(1).to({scaleX:1.19,scaleY:0.77,x:299.3,y:296.6},0).wait(1).to({scaleX:1.18,scaleY:0.7,x:302.6,y:298.9},0).wait(1).to({scaleX:1.17,scaleY:0.62,x:305.8,y:301.2},0).wait(1).to({scaleX:1.16,scaleY:0.54,x:309.1,y:303.4},0).wait(1).to({scaleX:1.16,scaleY:0.47,x:312.3,y:305.7},0).wait(1).to({scaleX:1.15,scaleY:0.39,x:315.6,y:307.9},0).wait(1).to({scaleX:1.14,scaleY:0.31,x:318.9,y:310.2},0).wait(1).to({scaleX:1.13,scaleY:0.24,x:322.2,y:312.5},0).wait(1).to({scaleX:1.12,scaleY:0.16,x:325.4,y:314.7},0).wait(1).to({scaleX:1.11,scaleY:0.08,x:328.7,y:317},0).wait(1).to({scaleX:1.1,scaleY:0.01,x:332,y:319.3},0).wait(1).to({scaleX:1.09,scaleY:0.07,rotation:-135,skewX:0,skewY:0,x:335.3,y:321.5},0).wait(1).to({scaleX:1.08,scaleY:0.15,x:338.5,y:323.8},0).wait(1).to({scaleX:1.07,scaleY:0.22,x:341.8,y:326},0).wait(1).to({scaleX:1.06,scaleY:0.3,x:345,y:328.3},0).wait(1).to({scaleX:1.06,scaleY:0.38,x:348.3,y:330.6},0).wait(1).to({x:346.8,y:343.7},0).wait(1).to({x:345.3,y:356.8},0).wait(1).to({x:343.8,y:369.8},0).wait(1).to({x:342.3,y:382.9},0).wait(1).to({x:340.8,y:396},0).wait(1).to({x:339.3,y:409.1},0).wait(1).to({x:337.8,y:422.2},0).wait(1).to({x:336.3,y:435.3},0).wait(1).to({x:334.8,y:448.3},0).wait(1).to({x:333.3,y:461.4},0).wait(1).to({x:331.8,y:474.5},0).wait(1).to({x:330.3,y:487.6},0).wait(44));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-133.5,-275.2,280,449);


// stage content:
(lib.Gaming = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Xbox controller.png
	this.instance = new lib.Symbol4();
	this.instance.parent = this;
	this.instance.setTransform(117.1,276,1,1,0,0,0,45.1,37);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(92).to({_off:false},0).wait(1).to({y:269.5},0).wait(1).to({y:263},0).wait(1).to({y:256.4},0).wait(1).to({y:249.9},0).wait(1).to({y:243.4},0).wait(1).to({y:236.9},0).wait(1).to({y:230.4},0).wait(1).to({y:223.8},0).wait(1).to({y:217.3},0).wait(1).to({y:210.8},0).wait(1).to({y:204.3},0).wait(1).to({y:197.8},0).wait(1).to({y:191.2},0).wait(1).to({y:184.7},0).wait(1).to({y:178.2},0).wait(1).to({y:171.7},0).wait(1).to({y:165.2},0).wait(1).to({y:158.6},0).wait(1).to({y:152.1},0).wait(1).to({y:145.6},0).wait(1).to({y:139.1},0).wait(1).to({y:132.6},0).wait(1).to({y:126},0).wait(1).to({y:119.5},0).wait(1).to({y:113},0).wait(72));

	// Broken window
	this.instance_1 = new lib.Symbol2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(402.6,101.8,1.101,1.143,0,0,0,54.5,69.8);

	this.instance_2 = new lib.Brokenwindow();
	this.instance_2.parent = this;
	this.instance_2.setTransform(442.1,165,0.429,0.356,0,0,0,98.2,126.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},72).to({state:[]},75).wait(42));

	// Gaming
	this.text = new cjs.Text("Gaming", "bold 33px 'Helvetica Neue'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 41;
	this.text.lineWidth = 139;
	this.text.parent = this;
	this.text.setTransform(259.5,93.9);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(4).to({rotation:-1.9,x:260.9,y:98.3},0).wait(1).to({rotation:-3.7,x:262.3,y:102.7},0).wait(1).to({rotation:-5.6,x:263.7,y:107.1},0).wait(1).to({rotation:-7.5,x:265.1,y:111.6},0).wait(1).to({rotation:-9.4,x:266.5,y:116.1},0).wait(1).to({rotation:-11.2,x:267.9,y:120.7},0).wait(1).to({rotation:-13.1,x:269.3,y:125.2},0).wait(1).to({rotation:-15,x:270.7,y:129.9},0).wait(1).to({rotation:-14.7,x:270.3,y:132.3},0).wait(1).to({rotation:-14.4,x:269.8,y:134.6},0).wait(1).to({rotation:-14.1,x:269.4,y:135},0).wait(1).to({rotation:-13.9,x:269,y:135.4},0).wait(1).to({rotation:-13.6,x:268.5,y:135.8},0).wait(1).to({rotation:-13.3,x:268.1,y:136.2},0).wait(1).to({rotation:-13,x:267.7,y:136.5},0).wait(1).to({rotation:-12.7,x:267.3,y:137.1},0).wait(1).to({rotation:-12.4,x:266.9,y:137.7},0).wait(1).to({rotation:-12.1,x:266.6,y:138.3},0).wait(1).to({rotation:-11.8,x:266.2,y:138.9},0).wait(1).to({rotation:-11.6,x:265.8,y:139.5},0).wait(1).to({rotation:-11.3,x:265.4,y:140.1},0).wait(1).to({rotation:-11,x:265.1,y:140.6},0).wait(1).to({rotation:-10.7,x:264.7,y:141.2},0).wait(1).to({rotation:-10.4,x:264.3,y:141.8},0).wait(1).to({rotation:-10.1,x:263.9,y:142.4},0).wait(1).to({rotation:-9.8,x:263.6,y:143},0).wait(1).to({rotation:-9.6,x:263.2,y:143.6},0).wait(1).to({rotation:-9.3,x:262.8,y:144.2},0).wait(1).to({rotation:-9,x:262.4,y:144.8},0).wait(1).to({rotation:-8.7,x:261.2,y:134.6},0).wait(1).to({rotation:-8.4,x:260,y:124.5},0).wait(1).to({rotation:-8.1,x:258.8,y:114.4},0).wait(1).to({rotation:-7.8,x:257.6,y:104.2},0).wait(1).to({rotation:-7.6,x:256.5,y:94.1},0).wait(1).to({rotation:-7.3,x:255.3,y:84},0).wait(1).to({rotation:-7,x:254.1,y:73.9},0).wait(1).to({rotation:-6.7,x:252.9,y:63.7},0).wait(1).to({rotation:-6.4,x:251.7,y:53.6},0).wait(1).to({rotation:-6.1,x:250.5,y:43.5},0).wait(1).to({rotation:-5.8,x:249.3,y:33.4},0).wait(1).to({rotation:-5.6,x:248.1,y:23.3},0).wait(1).to({rotation:-5.3,x:247,y:13.1},0).wait(1).to({rotation:-5,x:245.9,y:14.1},0).wait(1).to({rotation:-4.7,x:244.8,y:15.1},0).wait(1).to({rotation:-4.4,x:243.7,y:16},0).wait(1).to({rotation:-4.1,x:242.6,y:17},0).wait(1).to({rotation:-3.8,x:241.5,y:18},0).wait(1).to({rotation:-3.5,x:240.4,y:19},0).wait(1).to({rotation:-3.3,x:239.4,y:20},0).wait(1).to({rotation:-3,x:238.3,y:20.9},0).wait(1).to({rotation:-2.7,x:237.2,y:21.9},0).wait(1).to({rotation:-2.4,x:236.1,y:22.9},0).wait(1).to({rotation:-2.1,x:235,y:23.9},0).wait(1).to({rotation:-1.8,x:233.9,y:24.9},0).wait(1).to({rotation:-1.5,x:232.8,y:25.9},0).wait(1).to({rotation:-1.3,x:231.8,y:26.8},0).wait(1).to({rotation:-1,x:230.7,y:27.8},0).wait(1).to({rotation:-0.7,x:229.6,y:28.8},0).wait(1).to({rotation:-0.4,x:228.5,y:29.8},0).wait(1).to({rotation:-0.1,x:227.4,y:30.7},0).wait(1).to({rotation:0.2,x:226.3,y:31.7},0).wait(1).to({x:229,y:36.1},0).wait(1).to({x:231.6,y:40.5},0).wait(1).to({x:234.2,y:44.9},0).wait(1).to({x:236.8,y:49.3},0).wait(1).to({x:239.4,y:53.7},0).wait(1).to({x:242,y:58},0).wait(1).to({x:244.7,y:62.4},0).wait(1).to({x:247.3,y:66.8},0).wait(1).to({x:249.9,y:71.2},0).wait(1).to({x:252.5,y:75.6},0).wait(1).to({x:255.1,y:80},0).wait(1).to({x:257.7,y:84.4},0).wait(1).to({x:260.3,y:88.7},0).wait(112));

	// Game.png
	this.instance_3 = new lib.Symbol3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(138.1,108.1,1,1,0,0,0,43.1,36.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regY:36,rotation:-5.6,x:129.5,y:111.4},0).wait(1).to({rotation:-11.2,x:120.8,y:114.7},0).wait(1).to({rotation:-16.9,x:112.2,y:118.1},0).wait(1).to({rotation:-22.5,x:103.6,y:121.5},0).wait(1).to({rotation:-28.1,x:94.9,y:124.9},0).wait(1).to({rotation:-33.7,x:86.3,y:128.2},0).wait(1).to({rotation:-39.4,x:77.7,y:131.6},0).wait(1).to({rotation:-45,x:69.1,y:134.9},0).wait(1).to({x:68.9,y:135.1},0).wait(1).to({x:68.7,y:135.3},0).wait(1).to({x:68.6,y:135.5},0).wait(1).to({x:68.4,y:135.7},0).wait(1).to({x:68.2,y:135.9},0).wait(1).to({x:68.1,y:136.1},0).wait(1).to({x:67.9,y:136.3},0).wait(1).to({x:67.7,y:136.4},0).wait(1).to({x:67.6,y:136.6},0).wait(1).to({x:67.4,y:136.8},0).wait(1).to({x:67.2,y:137},0).wait(1).to({x:67.1,y:137.2},0).wait(1).to({x:66.9,y:137.4},0).wait(1).to({x:66.7,y:137.6},0).wait(1).to({x:66.6,y:137.8},0).wait(1).to({x:66.4,y:137.9},0).wait(1).to({x:66.2,y:138.1},0).wait(1).to({x:66.1,y:138.3},0).wait(1).to({x:65.9,y:138.5},0).wait(1).to({x:65.8,y:138.7},0).wait(1).to({x:72.9,y:138.2},0).wait(1).to({x:80,y:137.6},0).wait(1).to({x:87.1,y:137.1},0).wait(1).to({x:94.2,y:136.5},0).wait(1).to({x:101.3,y:136},0).wait(1).to({x:108.4,y:135.5},0).wait(1).to({x:115.5,y:134.9},0).wait(1).to({x:122.6,y:134.4},0).wait(1).to({x:129.7,y:133.8},0).wait(1).to({x:136.8,y:133.3},0).wait(1).to({x:143.9,y:132.8},0).wait(1).to({x:151,y:132.2},0).wait(1).to({x:158.1,y:131.7},0).wait(1).to({x:165.2,y:131.1},0).wait(1).to({x:172.3,y:130.6},0).wait(1).to({x:179.4,y:130},0).wait(1).to({x:186.5,y:129.5},0).wait(1).to({x:193.6,y:129},0).wait(1).to({x:200.7,y:128.4},0).wait(1).to({x:207.9,y:127.9},0).wait(1).to({x:215,y:127.3},0).wait(1).to({x:222.1,y:126.8},0).wait(1).to({x:229.2,y:126.3},0).wait(1).to({x:236.3,y:125.7},0).wait(1).to({x:243.4,y:125.2},0).wait(1).to({x:250.5,y:124.6},0).wait(1).to({x:257.6,y:124.1},0).wait(1).to({x:264.7,y:123.6},0).wait(1).to({x:271.8,y:123},0).wait(1).to({x:278.9,y:122.5},0).wait(1).to({x:286,y:121.9},0).wait(1).to({x:293.1,y:121.4},0).wait(1).to({x:300.2,y:120.9},0).wait(1).to({x:307.3,y:120.3},0).wait(1).to({x:314.4,y:119.8},0).wait(1).to({x:321.5,y:119.2},0).wait(1).to({x:328.6,y:118.7},0).wait(1).to({x:335.7,y:118.2},0).wait(1).to({x:342.8,y:117.6},0).wait(1).to({x:350,y:117.1},0).wait(1).to({x:357.1,y:116.5},0).wait(1).to({x:364.2,y:116},0).wait(1).to({x:371.3,y:115.5},0).wait(1).to({x:378.4,y:114.9},0).wait(1).to({rotation:-40.5,x:389.3,y:121.6},0).wait(1).to({rotation:-36,x:400.2,y:128.3},0).wait(1).to({rotation:-31.5,x:411.2,y:134.9},0).wait(1).to({rotation:-27,x:422.2,y:141.6},0).wait(1).to({rotation:-22.5,x:433.1,y:148.2},0).wait(1).to({rotation:-18,x:444,y:154.9},0).wait(1).to({rotation:-13.5,x:455,y:161.5},0).wait(1).to({rotation:-9,x:465.9,y:168.2},0).wait(1).to({rotation:-4.5,x:476.9,y:174.9},0).wait(1).to({rotation:0,x:487.9,y:181.5},0).wait(1).to({rotation:4.5,x:498.8,y:188.2},0).wait(1).to({rotation:9,x:509.7,y:194.8},0).wait(1).to({rotation:13.5,x:520.7,y:201.5},0).wait(1).to({rotation:18,x:531.6,y:208.1},0).wait(1).to({rotation:22.5,x:542.6,y:214.8},0).wait(1).to({rotation:27,x:553.6,y:221.4},0).wait(1).to({rotation:31.5,x:564.5,y:228.1},0).wait(1).to({rotation:36,x:575.4,y:234.7},0).wait(1).to({rotation:40.5,x:586.4,y:241.4},0).wait(1).to({rotation:45,x:597.3,y:248.1},0).wait(8).to({_off:true},1).wait(88));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(445,121.5,367.6,160.6);
// library properties:
lib.properties = {
	id: '58FE330D5EE040EE807D30DE418571DF',
	width: 700,
	height: 200,
	fps: 60,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"images/bp1.png?1510160253964", id:"bp1"},
		{src:"images/bp2.png?1510160253964", id:"bp2"},
		{src:"images/bp3.png?1510160253964", id:"bp3"},
		{src:"images/bp4.png?1510160253964", id:"bp4"},
		{src:"images/Game.png?1510160253964", id:"Game"},
		{src:"images/window.png?1510160253964", id:"window"},
		{src:"images/Xboxcontroller.png?1510160253964", id:"Xboxcontroller"}
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
an.compositions['58FE330D5EE040EE807D30DE418571DF'] = {
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