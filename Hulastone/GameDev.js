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



(lib.ghost512 = function() {
	this.initialize(img.ghost512);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,512,512);// helper functions:

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


(lib.Pacman = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(12,1,1).p("AgilAQAAgDAAAAQgCgXADgRQAAARgBAaQABAGACAQQABABAAAAQACgDAFAAQAAAJAAAIQgBAOAAAUQgCgSgCgRQgBgHgBgGAgjkRQABgCAAgCQAAgHABgDQAAgGADgEAgilAQAAAOgBASQAAAEAAAFQAAADAAADAhTghQgBgkgBg4QAAgfAAgkQAAgYAAgbIAFAOIAAACIAIAZQgCgNAAgRQgBgXADgeIAHAAQAAATABAkQAAAEAAAEQABAIAAAIIAAABQAFAAACgCQAEgGgCgRQgBgLACgHQABgEABgCIACgCIAEgEQAAgFAAgGQgBACAAABQgCADgBADQgDAHgDAHQgCAFgCAGQgBADgBADQgBAEgCAFQgCAHgCAIQgBACAAABQgBADgBADIACAEIALAkIADAHIAMAlQACAJAEABQAEABAEgCQAAgBABgBQABgBABgBQABgCAAgCQAAgEAAgFQABgRAAgZQAAgBAAgBQAAgGAAgGQABgPAAgSQAAgLAAgMQACAGABAHQgCgJgCgKQAAgCAAgCQAAAHgBAIQAAASAAAXQAAAGABAEAgtkEIACgBQAEgDACgEQABAAAAgBIAAAAQABgCAAgCQABAKADAFQACAFAFAEQAAAAAAAAQAAAFAAAEQAAALAAAKQAAAEABAEQABAUACAXQgCABgCABAgtkPQAAgCAAgBQAAgDACgEQACgDADAAQgEAGgDAHgAgYj5IAAAAQAAADAAACQgBgDgBgDQABAJAAAMQABAFAAAFQAAARgBAOAgXkbQAAASgBAQAAOiMQgBgHAAgHQgBgDgBgDQgEgggJgfQgBgGgCgFQAAALAAANQABAMAAANQAAAJAAAJQABAFAAAGQAAALABALQAAAEAAAFQgBgFgBgGQgDgWgHgiQAAgCgBgDIAAAXIAAAWIAAA8QAAADAAABQABADAAADQAAAFAAAEQAAADAAAEQAAALgBANQAAAZAAAeQAAASAAAVQAAABAAABQAAAAAAABQABgFABgEIAAAXQABADABACQAAAAAAABQACADACADIABAAQABABABABQAEADAEgCQAAgGAAgGQAAAAAAgBQgBgOgCgPQAAABgBABQAAABAAABQgFATgCAQQAAABAAAAQAAACAAACQAAAEAAAFQgCgEgCgEQgBgCAAgCQgBgBAAgCQAAAAAAgBIAAADIAAAAQAAAAABABQACABABABQABAAABABQAIAHACANQABADAAADQACAHABAJQABAEAAAEQACAGAGAKQABACABACQABABAAAAQABAAAAABQABACABACAgPjLIAAAGQgCgLgDgNQADAJACAJQABACAAACQACAHACAHQADAOAEAPQADAQADAQQAGAdAFAbIAAAfQAEgegBgeQAAgNgBgNQAAgBgBgCQAAgEAAgEQAAgKAAgJQAAgqgBgcIAABTIAAAjIAAAlQABAFABAEQAAgWAAgUQAAgNgBgMQAAgHgBgHAgOjAQAAgDAAgEQAAgggBgXIAAAzAgOiXQABgMAAgOQAAABgBAAQAAABgBABQgBADgDACQgBAAAAABQAAAEAAAFQACAfADAkIAAANQAAgEAAgFQABgQAAgXIAAgQQAAgEAAgDIAAgBQAAgNAAgMQAAgIAAgIAAFg0QgCgigFgmQAAgBAAAAQACAsADAxQAAACAAABQgBANgCAMQgCAMgDANQgBgPAFgLQABAAAAABQADAEACAHQAAACAAACQABgDgBgEQABgCgBgCQABABAAABQAAgPAAgSQAAgEAAgFQAAgGgBgGQAAAKgCAKQAAACAAABQABAPABAOQABgOAAgRQAAgEAAgFQAAgMAAgOQAAgMAAgMAgOh2QABgEgBgDQABgBgBgBAgribQgBgPAAgUQAAgJgBgKQAAgCAAgDQAAgUAAgaAhIjKIABAEQAAABAAAAQAAgCgBgDgAgOhSQAAAFABAFQAAgYgBgWQAAAQAAAUgAAGhCQAAAHgBAHAAFALQABAEAAADIAAABQAAAPgBAXQAAAEAAADQAAAHAAAHQAAABAAABQAAgCAAgCQAAgDgBgCQABgZAAgjgAgNBPQgDgKABgJQAAgDAAgCQAAAIACAGgAgPCEQAAgLAAgPQABACAAACQAAgKAAgKQAAgEABgEIAAAIIAAAjIAAAJIgCgCIgNgfIgCgFIgRglAgOCTQAAgBAAgBQAAgBAAgBQgHgLgJgLQAAAAAAgBQgGgIgHgHQAHAKAGAIQAAAAABABQAHAKAFAIQACACABADgAgNCQIAAABIAAACIAAADQAAgCgBgBIABAAQABACAAABQABABAAAAQAEAFADAEQACACABACQACAFACAEIgDgIIgNgfIAAAKQgBgBAAAAQAAgFgBgGAgOBuQAAAGABAJAAFBQQAAAPgBARAgxA3IgDgIQgBAGgBAGQgCAXAGAYQAAABABABQACAJAEAKQAFAJAFAJQAFAGAFAGQAGAIACAGQACAKgFADQgLAFgIgOQgCgDgCgCQgLgRgEgUQgCgFAAgGQACABACAAQAGABAFADQAHACAGAEQAAABABABQADACAEAEQACACACACQAHAJAEAJQADAHAAAHQABAGAAAHQgCAOAAAFQABAKAGAFQAJgXgLgcIgCgJQgBgCgBgCQgCgDgBgDQgDgFgDgFAhnBeQAEAJANARQAAAAABABQANAQAEAKQACAEACAGQABADABADQABAEABAEQAEAHAIAKQAFAGADAEQADAEABACQACACAFAKQACADACAFQAGAMAHAGQAEAEAIAEQADADAJAEQAJAIANAUQAHAIAfAdQACACACACQAVAUAHASAAIC4QAIgIAEgJIAAAAQABgDABgCQACADAAACQADAKgCAIQAAABAAAAQAAAAgBABQAAABAAAAQgBACgBACQgBABgBABIAAAAQgCACgEABIgGgNIgFgL");
	this.shape.setTransform(133.4,71.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(7,1,1).p("AAjAAQAAAOgKAKQgKALgPAAQgOAAgKgLQgKgKAAgOQAAgNAKgLQAKgKAOAAQAPAAAKAKQAKALAAANg");
	this.shape_1.setTransform(73.5,20.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(5.2,1,1).p("AIwlCQAIAPAHAOQAPAeAMAeAJjjPQAAABABACQACAGACAHAJwiiQgCgHgBgIQAAADAAACQABAFACAFgAJ5hWQAAgDgBgEQgBgTgCgGQAAgCAAgDQgBgKgCgMQgBgIgBgJQABAGABAGQAEAPADAQQAEAZACAZQAEAKADAKQAGAUAFAUQADANADAOQgDgJgDgLQgDgJgEgLQgEgLgDgKQgBgDgBgDQgEgMgBgHQgCgHgBgLQADAIADAJQABAKABAKQAAAEABAEQAAAGAAAGQABAPAAAOQAAADAAAEQAAABAAABQAAAEAAAFAJtisQAAAWgHAyQAAADgBADQgCASAAAOQAAABAAABQgBAQACANQAAADAAAEAJ1CMQgEAQgDAPQgCAHgCAHQAAABgBABQgBAFgBAEQgEANgEAMQgCADAAADQgQApgVAnQgtBThHBIQi/C/kOAAQkPAAi/i/Qi/i/AAkPQAAkOC/i/QA7g6BBgoQAngYAqgSQB2gzCLAAQEOAAC/C/QBBBBArBKIouFoII2EN");
	this.shape_2.setTransform(66.3,65.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(17.2,1,1).p("AgrjNQACgCACABQAAAAABABQAAAAAAAAQACABABACQABACABADQAAgIAAgJQAAgCAAgDQgBgXAAgQQAAgKgBgHAhBjCQAAgCAAgCQAAgMAAgKAhBiyQAAgEAAgEQAAgEAAgEQAAAFABAFQACAjAJAgQAAgSgBgQQAAgFAAgFQAAgJAAgIQAAAIABAFQAAABABABQACACACgCQABgBABgBQADgEAAgFQAAgLAAgJQAAgGAAgFQgBgLAAgJQAAgPgBgKIAAAWIAAAYQABgBABAAAgNgNQACACABACQACABABABQAEAEADADQAIAGAKAEIABAAQABAAABABIAAAAQAFABAGABQAAABABAAQADgbAAgPQAAgBAAgCQAAgNgEgLQAAgCgBgCQgBgCAAgCQgDgFgDgFQgDgEgDgFQgDgFgDgFQgBgBAAgBQgFgHgFgHAABhsQgBgBAAgBQgCgDgCgEQgCgCgCgDQgIgKgHgJQgCgCgBgBQgCgCgBgCQgCgCgBgCQgFAUgDAYQgDAVgBAYQAAACAAABQAAADAAAFQAAACAAADQgBAIAAALQAAAYAAAjQgKgTAAgTQAAgJABgIQAAgUgBgTQAFAJAGAHQAAABABAAQAEAEAEAEQAHAFAIAKQABADACACAhAhkQAAARAIARQABACAAABQgBg9gJg2QAAANAAANQAAAbABAWQAAABAAACQAAAfAEAYQABABAAABQACAKADAJABAhTQADAjgBAlQgBAVgCAWQgCAQgCARQgCgUgCgRQgCgcgDgUQgCgYgCgQQgBAQAAAVQAAAUgBAYQAAAAAAABQAAAMAAANIAAAAQAAAIAAAIQAAACAAADQAAASAAAUQAAAEAAAEQgIAAgCgLQgBgGABgKQACgKAAgMQAAgBAAgCQAAgQgEgSQgBgGgCgHIgIAgIgBADIgGAZAgPCWQAAgEACgDQAAAAABgBQAEgDAJgHQAAAAAAAAQABgBACgBQABgBABgCQABgBABgBQAAgBAAAAQAIgNgBgXQAAgGgBgHIAAAAQABAFABAGQACAOACAPQAAABAAACQAAACABABQACAXACAZQgBgVAAgfQAHAfADAgQABAKAAAKQAAAFAAAEQABAOAAANQAAAEAAAEQAAgEAAgEQgBgPAAgMQAAgFAAgEQgBgGAAgEQAAABAAAAQAAAEAAADQAAAEgBACQgIAFgKgCQgBAAgBAAQAAAAgBAAQgDgCgCgBQgDgHgBgFQgBgCAAgBQgBgBAAAAQAAgBAAAAQgBgCgCgBQgCgBgDAAQAAAAgBAAQgGABgDADQgCABgBACQgGAHABAQQAAABAAACIAAABQAAAEAAAHQAAADABAFQAAACAAADQAAAOACAVQAHgBACgIQAAgEAAgFQgBgDgCgDQgFgIgCgFQgBgCAAgBAAOBLIgLAqIgBAGIgBABIAAACQgEgJgHgPQgCgGgCgGQgBgBAAAAIAAAyIAAALIAAAIIAAAFIAAACIAAALIAAAGQABgCAAgDQABgEgBgGQAAgCAAgCQAAAAAAgBQgBgDAAgBAAZCpIAAAGQAAAIAJAIAg2iyQAAgZgBgR");
	this.shape_3.setTransform(131.9,67.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Pacman, new cjs.Rectangle(-2.6,-2.6,152.5,135.7), null);


(lib.Ghost = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ghost512();
	this.instance.parent = this;
	this.instance.setTransform(-73,-76,0.293,0.293);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Ghost, new cjs.Rectangle(-73,-76,150,150), null);


(lib.bracket2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(7.1,1,1).p("ABikLIibDNIgyBBIAyA9ICRCzIAUAZ");
	this.shape.setTransform(10.8,26.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.5,-3.5,28.6,60.6);


(lib.bracket = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(7.1,1,1).p("ABikLIibDNIgyBBIAyA9ICRCzIAUAZ");
	this.shape.setTransform(9,27,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.3,-3.3,28.6,60.6);


(lib.Ghosting = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Ghost();
	this.instance.parent = this;
	this.instance.setTransform(46.7,58.1,0.644,0.734,0,0,0,-0.6,3.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,96.7,110.2);


// stage content:
(lib.GameDev = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// bracket
	this.instance = new lib.bracket("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(184.5,87.4,0.605,0.561,0,0,0,9,27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:-5.4,x:188.2,y:83.2},0).wait(1).to({rotation:-10.7,x:192,y:78.9},0).wait(1).to({scaleY:0.56,rotation:-16.1,x:195.8,y:74.6},0).wait(1).to({scaleY:0.56,rotation:-21.4,x:199.6,y:70.4},0).wait(1).to({rotation:-26.8,x:203.4,y:66.1},0).wait(1).to({rotation:-32.1,x:207.1,y:61.9},0).wait(1).to({rotation:-37.5,x:210.9,y:57.7},0).wait(1).to({rotation:-42.9,x:214.7,y:53.3},0).wait(1).to({rotation:-48.2,x:218.5,y:49.1},0).wait(1).to({rotation:-53.6,x:222.3,y:44.8},0).wait(1).to({rotation:-58.9,x:226.1,y:40.6},0).wait(1).to({rotation:-64.3,x:229.8,y:36.4},0).wait(1).to({rotation:-69.6,x:233.6,y:32.1},0).wait(1).to({rotation:-75,x:237.4,y:27.8},0).wait(1).to({rotation:-73.6,x:235.9,y:29.3},0).wait(1).to({scaleY:0.56,rotation:-72.3,x:234.3,y:30.7},0).wait(1).to({scaleY:0.56,rotation:-70.9,x:232.8,y:32.2},0).wait(1).to({rotation:-69.5,x:231.2,y:33.7},0).wait(1).to({rotation:-68.2,x:229.7,y:35.2},0).wait(1).to({scaleY:0.56,rotation:-66.8,x:228.2,y:36.6},0).wait(1).to({scaleY:0.56,rotation:-65.5,x:226.6,y:38.1},0).wait(1).to({rotation:-64.1,x:225.1,y:39.5},0).wait(1).to({rotation:-62.7,x:223.5,y:41},0).wait(1).to({rotation:-61.4,x:222,y:42.5},0).wait(1).to({rotation:-60,x:220.5,y:44},0).wait(1).to({rotation:-58.6,x:218.9,y:45.4},0).wait(1).to({rotation:-57.3,x:217.4,y:46.9},0).wait(1).to({rotation:-55.9,x:215.8,y:48.4},0).wait(1).to({rotation:-54.5,x:214.3,y:49.8},0).wait(1).to({rotation:-53.2,x:212.7,y:51.3},0).wait(1).to({rotation:-51.8,x:211.2,y:52.7},0).wait(1).to({rotation:-50.5,x:209.6,y:54.2},0).wait(1).to({rotation:-49.1,x:208.1,y:55.7},0).wait(1).to({rotation:-47.7,x:206.5,y:57.1},0).wait(1).to({rotation:-46.4,x:205,y:58.6},0).wait(1).to({rotation:-45,x:203.5,y:60.1},0).wait(1).to({rotation:-40.5,x:201.8,y:62.8},0).wait(1).to({rotation:-36,x:200,y:65.4},0).wait(1).to({rotation:-31.5,x:198.3,y:68.1},0).wait(1).to({rotation:-27,x:196.6,y:70.7},0).wait(1).to({scaleY:0.56,rotation:-22.5,x:194.9,y:73.4},0).wait(1).to({scaleY:0.56,rotation:-18,x:193.2,y:76},0).wait(1).to({rotation:-13.5,x:191.5,y:78.7},0).wait(1).to({rotation:-9,x:189.7,y:81.3},0).wait(1).to({rotation:-4.5,x:188,y:84},0).wait(1).to({rotation:0,x:186.3,y:86.6},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// Ghost
	this.instance_1 = new lib.Ghosting("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-71.6,87.2,0.641,0.545,0,0,0,47.2,55.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:48.3,x:-64},0).wait(1).to({x:-57.2},0).wait(1).to({x:-50.3},0).wait(1).to({x:-43.5},0).wait(1).to({x:-36.6},0).wait(1).to({x:-29.8},0).wait(1).to({x:-22.9},0).wait(1).to({x:-16},0).wait(1).to({x:-9.2},0).wait(1).to({x:-2.3},0).wait(1).to({x:4.5},0).wait(1).to({x:11.4},0).wait(1).to({x:18.2},0).wait(1).to({x:25.1},0).wait(1).to({x:32},0).wait(1).to({x:39},0).wait(1).to({x:45.9},0).wait(1).to({x:52.9,y:87.1},0).wait(1).to({x:59.8},0).wait(1).to({x:66.8},0).wait(1).to({x:73.7},0).wait(1).to({x:80.7},0).wait(1).to({x:87.6},0).wait(1).to({x:94.6},0).wait(1).to({x:101.5,y:87},0).wait(1).to({x:108.5},0).wait(1).to({x:115.5},0).wait(1).to({x:122.4},0).wait(1).to({x:129.4},0).wait(1).to({x:136.3},0).wait(1).to({x:143.3},0).wait(1).to({x:150.2},0).wait(1).to({x:157.2,y:86.9},0).wait(1).to({x:164.1},0).wait(1).to({x:171.1},0).wait(1).to({x:178},0).wait(1).to({x:175.3},0).wait(1).to({x:172.6},0).wait(1).to({x:169.9},0).wait(1).to({x:167.1,y:86.8},0).wait(1).to({x:164.4},0).wait(1).to({x:161.7},0).wait(1).to({x:159},0).wait(1).to({x:156.2},0).wait(1).to({x:153.5},0).wait(1).to({x:150.8},0).wait(1).to({x:148.1},0).wait(1).to({x:145.4,y:86.7},0).wait(1).to({x:142.6},0).wait(1).to({x:139.9},0).wait(1).to({x:137.2},0).wait(1).to({x:134.4},0).wait(1).to({x:131.7},0).wait(1).to({x:129},0).wait(1).to({x:126.3},0).wait(1).to({x:123.5,y:86.6},0).wait(1).to({x:127},0).wait(1).to({x:130.5},0).wait(1).to({x:134},0).wait(1).to({x:137.5},0).wait(1).to({x:141},0).wait(1).to({x:144.5},0).wait(1).to({x:147.9,y:86.5},0).wait(1).to({x:146.2},0).wait(1).to({x:144.4},0).wait(1).to({x:142.7},0).wait(1).to({x:140.9},0).wait(1).to({x:139.2},0).wait(1).to({x:137.4,y:86.4},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// Monitor
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(9.5,1,1).p("AqngvIVPAAIAABfI1PAAg");
	this.shape.setTransform(136.1,145.5,0.641,0.545);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(8,1,1).p("AkugnIJdAAIAABPIpdAAg");
	this.shape_1.setTransform(136.3,134.7,0.641,0.545);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(12,1,1).p("AwopfMAhRAAAIAAS/MghRAAAg");
	this.shape_2.setTransform(135.2,87.7,0.641,0.622);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},54).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},66).wait(1));

	// bracket 2
	this.instance_2 = new lib.bracket2("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(85.8,87.1,0.641,0.545,0,0,0,10.9,26.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:10.8,regY:26.8,rotation:-5.6,x:83.9,y:90.8},0).wait(1).to({rotation:-11.2,x:82,y:94.5},0).wait(1).to({rotation:-16.9,x:80.3,y:98.3},0).wait(1).to({rotation:-22.5,x:78.4,y:102.1},0).wait(1).to({rotation:-28.1,x:76.6,y:105.9},0).wait(1).to({rotation:-33.7,x:74.8,y:109.6},0).wait(1).to({rotation:-39.4,x:73,y:113.4},0).wait(1).to({rotation:-45,x:71.1,y:117.1},0).wait(1).to({rotation:-50.6,x:69.4,y:120.9},0).wait(1).to({rotation:-56.2,x:67.5,y:124.7},0).wait(1).to({rotation:-61.9,x:65.7,y:128.5},0).wait(1).to({rotation:-67.5,x:63.9,y:132.2},0).wait(1).to({rotation:-73.1,x:62.1,y:136},0).wait(1).to({rotation:-78.7,x:60.3,y:139.7},0).wait(1).to({rotation:-84.4,x:58.5,y:143.5},0).wait(1).to({rotation:-90,x:56.7,y:147.3},0).wait(1).to({rotation:-86.1,x:57.9,y:144.6},0).wait(1).to({rotation:-82.2,x:59.2,y:142},0).wait(1).to({rotation:-78.3,x:60.4,y:139.3},0).wait(1).to({rotation:-74.3,x:61.7,y:136.7},0).wait(1).to({rotation:-70.4,x:62.9,y:134},0).wait(1).to({rotation:-66.5,x:64.2,y:131.3},0).wait(1).to({rotation:-62.6,x:65.5,y:128.7},0).wait(1).to({rotation:-58.7,x:66.8,y:126},0).wait(1).to({rotation:-54.8,x:68,y:123.3},0).wait(1).to({rotation:-50.9,x:69.3,y:120.7},0).wait(1).to({rotation:-47,x:70.5,y:118},0).wait(1).to({rotation:-43,x:71.8,y:115.3},0).wait(1).to({rotation:-39.1,x:73,y:112.8},0).wait(1).to({rotation:-35.2,x:74.3,y:110.1},0).wait(1).to({rotation:-31.3,x:75.6,y:107.4},0).wait(1).to({rotation:-27.4,x:76.8,y:104.7},0).wait(1).to({rotation:-23.5,x:78.1,y:102.1},0).wait(1).to({rotation:-19.6,x:79.3,y:99.4},0).wait(1).to({rotation:-15.7,x:80.6,y:96.8},0).wait(1).to({rotation:-11.7,x:81.9,y:94.1},0).wait(1).to({rotation:-7.8,x:83.1,y:91.4},0).wait(1).to({rotation:-3.9,x:84.4,y:88.8},0).wait(1).to({rotation:0,x:85.6,y:86.1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// Pacman
	this.instance_3 = new lib.Pacman();
	this.instance_3.parent = this;
	this.instance_3.setTransform(140,90,0.446,0.417,0,0,0,72.2,65.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:73.6,regY:65.2,scaleX:0.38,x:140.5,y:89.9},0).wait(1).to({scaleX:0.32},0).wait(1).to({scaleX:0.26,x:140.4},0).wait(1).to({scaleX:0.19,x:140.3},0).wait(1).to({scaleX:0.13,x:140.2},0).wait(1).to({scaleX:0.06,x:140.1},0).wait(1).to({scaleX:0,x:140},0).wait(1).to({scaleX:0.06,skewY:180,x:139.9},0).wait(1).to({scaleX:0.13,x:139.8},0).wait(1).to({scaleX:0.19,x:139.7},0).wait(1).to({scaleX:0.26,x:139.6},0).wait(1).to({scaleX:0.32,x:139.5},0).wait(1).to({scaleX:0.38},0).wait(1).to({scaleX:0.45,x:139.4},0).wait(1).to({scaleX:0.38,x:148},0).wait(1).to({scaleX:0.31,x:156.6},0).wait(1).to({scaleX:0.24,x:165.2},0).wait(1).to({scaleX:0.17,x:173.8,y:89.8},0).wait(1).to({scaleX:0.1,x:182.4},0).wait(1).to({scaleX:0.03,x:191.1},0).wait(1).to({skewY:0,x:199.6},0).wait(1).to({scaleX:0.1,x:208.2},0).wait(1).to({scaleX:0.17,x:216.8},0).wait(1).to({scaleX:0.24,x:225.5},0).wait(1).to({scaleX:0.31,x:234.1,y:89.7},0).wait(1).to({scaleX:0.38,x:242.7},0).wait(1).to({scaleX:0.45,x:251.3},0).wait(1).to({x:259.8},0).wait(1).to({x:268.3},0).wait(1).to({x:276.8},0).wait(1).to({x:285.4},0).wait(1).to({x:293.9,y:89.6},0).wait(1).to({x:302.4},0).wait(1).to({x:310.9},0).wait(1).to({x:319.4},0).wait(1).to({x:327.9},0).wait(1).to({x:336.4},0).wait(1).to({x:344.9},0).wait(1).to({x:353.5,y:89.5},0).wait(1).to({x:362},0).wait(1).to({x:370.5},0).wait(1).to({x:379},0).wait(1).to({x:387.5},0).wait(1).to({x:396},0).wait(1).to({x:404.5},0).wait(1).to({x:413,y:89.4},0).wait(1).to({x:421.6},0).wait(1).to({x:430.1},0).wait(1).to({x:438.6},0).wait(1).to({x:447.1},0).wait(1).to({x:455.6},0).wait(1).to({x:464.1},0).wait(1).to({x:472.6,y:89.3},0).wait(1).to({x:481.1},0).wait(1).to({x:489.6},0).wait(1).to({x:498.2},0).wait(1).to({x:506.7},0).wait(1).to({x:515.2},0).wait(1).to({x:523.7},0).wait(1).to({x:532.2,y:89.2},0).wait(1).to({x:540.7},0).wait(1).to({x:549.2},0).wait(1).to({x:557.7},0).wait(1).to({x:566.3},0).wait(1).to({x:574.8},0).wait(1).to({x:583.3},0).wait(1).to({x:591.8,y:89.1},0).wait(1).to({x:600.3},0).wait(1).to({x:608.8},0).wait(1).to({x:617.3},0).wait(1).to({x:625.8},0).wait(1).to({x:634.4},0).wait(1).to({x:642.9},0).wait(1).to({x:651.4,y:89},0).wait(1).to({x:659.9},0).wait(1).to({x:668.4},0).wait(1).to({x:676.9},0).wait(1).to({x:685.4},0).wait(1).to({x:693.9},0).wait(1).to({x:702.5},0).wait(1).to({x:711,y:88.9},0).wait(1).to({x:719.5},0).wait(1).to({x:728},0).wait(1).to({x:736.5},0).wait(37));

	// Game Development
	this.text = new cjs.Text("Game Development", "bold 33px 'Helvetica Neue'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 41;
	this.text.lineWidth = 313;
	this.text.parent = this;
	this.text.setTransform(450.4,71.6,0.947,0.923);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({scaleX:0.95,scaleY:0.93,x:450.6,y:73.2},0).wait(1).to({scaleX:0.95,scaleY:0.93,x:450.8,y:74.9},0).wait(1).to({scaleX:0.95,scaleY:0.93,x:451,y:76.5},0).wait(1).to({scaleX:0.95,scaleY:0.93,x:451.2,y:78.2},0).wait(1).to({scaleX:0.96,scaleY:0.94,x:451.5,y:79.8},0).wait(1).to({scaleX:0.96,scaleY:0.94,x:451.7,y:81.5},0).wait(1).to({scaleX:0.96,scaleY:0.94,x:451.8,y:83.1},0).wait(1).to({scaleX:0.96,scaleY:0.94,x:452.1,y:84.8},0).wait(1).to({scaleX:0.96,scaleY:0.95,x:452.3,y:86.4},0).wait(1).to({scaleX:0.96,scaleY:0.95,x:452.5,y:88.1},0).wait(1).to({scaleX:0.97,scaleY:0.95,x:452.7,y:89.8},0).wait(1).to({scaleX:0.97,scaleY:0.95,x:452.9,y:91.4},0).wait(1).to({scaleX:0.97,scaleY:0.96,x:453.2,y:93.1},0).wait(1).to({scaleX:0.97,scaleY:0.96,x:453.3,y:94.7},0).wait(1).to({scaleX:0.97,scaleY:0.96,x:453.6,y:96.4},0).wait(1).to({scaleX:0.97,scaleY:0.96,x:453.8,y:98},0).wait(1).to({scaleX:0.98,scaleY:0.97,x:454,y:99.7},0).wait(1).to({scaleX:0.98,scaleY:0.97,x:454.2,y:101.3},0).wait(1).to({scaleX:0.98,scaleY:0.97,x:454.4,y:103},0).wait(1).to({scaleX:0.98,scaleY:0.97,x:454.7,y:104.6},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:454.8,y:106.3},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:455,y:108},0).wait(1).to({scaleX:0.99,scaleY:0.98,x:455.3,y:109.6},0).wait(1).to({scaleX:0.99,scaleY:0.98,x:455.5,y:111.3},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:455.7,y:112.9},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:455.9,y:114.6},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:456.1,y:116.2},0).wait(1).to({scaleX:1,scaleY:0.99,x:456.3,y:117.9},0).wait(1).to({scaleX:1,scaleY:1,x:456.5,y:119.5},0).wait(1).to({scaleX:1,scaleY:1,x:456.8,y:121.2},0).wait(1).to({scaleX:1,scaleY:1,x:457,y:122.8},0).wait(1).to({x:457.2,y:124.6},0).wait(1).to({x:457.4,y:126.3},0).wait(1).to({x:457.6,y:128},0).wait(1).to({x:457.8,y:129.7},0).wait(1).to({x:458,y:131.4},0).wait(1).to({x:458.2,y:133.1},0).wait(1).to({x:458.5,y:134.8},0).wait(1).to({x:458.7,y:136.5},0).wait(1).to({x:458.9,y:138.2},0).wait(61).to({y:132},0).wait(1).to({y:125.9},0).wait(1).to({y:119.8},0).wait(1).to({y:113.6},0).wait(1).to({y:107.5},0).wait(1).to({y:101.4},0).wait(1).to({y:95.2},0).wait(1).to({y:89.1},0).wait(1).to({y:83},0).wait(1).to({y:76.8},0).wait(1).to({y:70.7},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:457.9},0).wait(1).to({scaleX:0.99,scaleY:0.98,x:457,y:70.6},0).wait(1).to({scaleX:0.98,scaleY:0.97,x:456},0).wait(1).to({scaleX:0.98,scaleY:0.97,x:455.1},0).wait(1).to({scaleX:0.97,scaleY:0.96,x:454.2},0).wait(1).to({scaleX:0.96,scaleY:0.95,x:453.2},0).wait(1).to({scaleX:0.96,scaleY:0.94,x:452.3,y:70.5},0).wait(1).to({scaleX:0.95,scaleY:0.93,x:451.3},0).wait(1).to({scaleX:0.95,scaleY:0.92,x:450.4},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(248.2,143.9,702.3,108.9);
// library properties:
lib.properties = {
	id: '1832276F60DF46FF92A53DF417E37EF9',
	width: 700,
	height: 200,
	fps: 60,
	color: "#000000",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/ghost512.png", id:"ghost512"}
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
an.compositions['1832276F60DF46FF92A53DF417E37EF9'] = {
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