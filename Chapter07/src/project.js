window.__require=function e(t,n,i){function s(c,r){if(!n[c]){if(!t[c]){var l=c.split("/");if(l=l[l.length-1],!t[l]){var h="function"==typeof __require&&__require;if(!r&&h)return h(l,!0);if(o)return o(l,!0);throw new Error("Cannot find module '"+c+"'")}}var a=n[c]={exports:{}};t[c][0].call(a.exports,function(e){return s(t[c][1][e]||e)},a,a.exports,e,t,n,i)}return n[c].exports}for(var o="function"==typeof __require&&__require,c=0;c<i.length;c++)s(i[c]);return s}({1:[function(e,t,n){function i(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function s(e){return"function"==typeof e}function o(e){return"number"==typeof e}function c(e){return"object"==typeof e&&null!==e}function r(e){return void 0===e}t.exports=i,i.EventEmitter=i,i.prototype._events=void 0,i.prototype._maxListeners=void 0,i.defaultMaxListeners=10,i.prototype.setMaxListeners=function(e){if(!o(e)||e<0||isNaN(e))throw TypeError("n must be a positive number");return this._maxListeners=e,this},i.prototype.emit=function(e){var t,n,i,o,l,h;if(this._events||(this._events={}),"error"===e&&(!this._events.error||c(this._events.error)&&!this._events.error.length)){if((t=arguments[1])instanceof Error)throw t;var a=new Error('Uncaught, unspecified "error" event. ('+t+")");throw a.context=t,a}if(r(n=this._events[e]))return!1;if(s(n))switch(arguments.length){case 1:n.call(this);break;case 2:n.call(this,arguments[1]);break;case 3:n.call(this,arguments[1],arguments[2]);break;default:o=Array.prototype.slice.call(arguments,1),n.apply(this,o)}else if(c(n))for(o=Array.prototype.slice.call(arguments,1),i=(h=n.slice()).length,l=0;l<i;l++)h[l].apply(this,o);return!0},i.prototype.addListener=function(e,t){var n;if(!s(t))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",e,s(t.listener)?t.listener:t),this._events[e]?c(this._events[e])?this._events[e].push(t):this._events[e]=[this._events[e],t]:this._events[e]=t,c(this._events[e])&&!this._events[e].warned&&(n=r(this._maxListeners)?i.defaultMaxListeners:this._maxListeners)&&n>0&&this._events[e].length>n&&(this._events[e].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[e].length),"function"==typeof console.trace&&console.trace()),this},i.prototype.on=i.prototype.addListener,i.prototype.once=function(e,t){if(!s(t))throw TypeError("listener must be a function");var n=!1;function i(){this.removeListener(e,i),n||(n=!0,t.apply(this,arguments))}return i.listener=t,this.on(e,i),this},i.prototype.removeListener=function(e,t){var n,i,o,r;if(!s(t))throw TypeError("listener must be a function");if(!this._events||!this._events[e])return this;if(o=(n=this._events[e]).length,i=-1,n===t||s(n.listener)&&n.listener===t)delete this._events[e],this._events.removeListener&&this.emit("removeListener",e,t);else if(c(n)){for(r=o;r-- >0;)if(n[r]===t||n[r].listener&&n[r].listener===t){i=r;break}if(i<0)return this;1===n.length?(n.length=0,delete this._events[e]):n.splice(i,1),this._events.removeListener&&this.emit("removeListener",e,t)}return this},i.prototype.removeAllListeners=function(e){var t,n;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[e]&&delete this._events[e],this;if(0===arguments.length){for(t in this._events)"removeListener"!==t&&this.removeAllListeners(t);return this.removeAllListeners("removeListener"),this._events={},this}if(s(n=this._events[e]))this.removeListener(e,n);else if(n)for(;n.length;)this.removeListener(e,n[n.length-1]);return delete this._events[e],this},i.prototype.listeners=function(e){return this._events&&this._events[e]?s(this._events[e])?[this._events[e]]:this._events[e].slice():[]},i.prototype.listenerCount=function(e){if(this._events){var t=this._events[e];if(s(t))return 1;if(t)return t.length}return 0},i.listenerCount=function(e,t){return e.listenerCount(t)}},{}],BulletCollider:[function(e,t,n){"use strict";cc._RF.push(t,"334936STNdJXKdtVfW5bUkq","BulletCollider");var i=e("mEmitter"),s=e("emitName");cc.Class({extends:cc.Component,properties:{},start:function(){},onCollisionEnter:function(e,t){2==e.tag&&i.instance.emit(s.killBunny,e)}}),cc._RF.pop()},{emitName:"emitName",mEmitter:"mEmitter"}],MainController:[function(e,t,n){"use strict";cc._RF.push(t,"42c51CQxy5Kc4YVSzgMX95L","MainController");var i=e("mEmitter"),s=e("emitName");cc.Class({extends:cc.Component,properties:{spineBoy:sp.Skeleton,bulletPrefab:cc.Prefab,getBunny:cc.Component,boomSprite:cc.Sprite,_isAction:!0,_isRunning:!1,_listBullet:[]},onLoad:function(){i.instance=new i,this.eventCollisionBunny=this.collisionBunny.bind(this),this.eventCollisionRip=this.collissionRip.bind(this),this.eventCollisionRipBunny=this.collissionRipBunny.bind(this),this.eventWining=this.collissionWinning.bind(this),i.instance.registerOnce(s.eventCollisionBunny,this.eventCollisionBunny),i.instance.registerOnce(s.collissionRip,this.eventCollisionRip),i.instance.registerOnce(s.collissionBunny,this.eventCollisionRipBunny),i.instance.registerOnce(s.win,this.eventWining)},start:function(){this.spineBoy.setAnimation(0,"portal",!1),cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,this.onKeyUp,this),cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP,this.onKeyDown,this)},onKeyUp:function(e){this.actionForKeyCode(e.keyCode)},onKeyDown:function(e){this.actionForKeyCodeUp(e.keyCode)},actionForKeyCodeUp:function(e){switch(e){case cc.macro.KEY.left:this.moveLeftUp();break;case cc.macro.KEY.right:this.moveRightUp();break;case cc.macro.KEY.up:this.moveUpUp(),this._isAction=!1}},actionForKeyCode:function(e){if(this._isAction)switch(e){case cc.macro.KEY.left:this.moveLeft();break;case cc.macro.KEY.right:this.moveRight();break;case cc.macro.KEY.space:this.spaceShoot()}},moveUpUp:function(){var e=this;this._isAction&&(this.spineBoy.setAnimation(0,"hoverboard",!1),this.spineBoy.node.scaleX>0?cc.tween(this.spineBoy.node).by(.5,{x:150,y:150},{easing:"smooth"}).by(.5,{x:150,y:-150},{easing:"smooth"}).call(function(){e._isAction=!0,e.spineBoy.setAnimation(0,"idle",!1)}).start():cc.tween(this.spineBoy.node).by(.5,{x:-150,y:150}).by(.5,{x:-150,y:-150}).call(function(){e._isAction=!0}).start())},moveLeft:function(){this._isAction&&(this.spineBoy.setAnimation(0,"run",!0),this._isAction=!1,this.spineTween=cc.tween(this.spineBoy.node).to(0,{scaleX:-.3}).by(15,{x:-1500}).start())},moveRight:function(){this._isAction&&(this._isAction=!1,this.spineBoy.setAnimation(0,"run",!0),this._isRunning=!0,this.spineTween=cc.tween(this.spineBoy.node).to(0,{scaleX:.3}).by(15,{x:1500}).start())},moveRightUp:function(e){this._isRunning&&(this._isAction=!0,this.spineTween&&(this.spineTween.stop(),this._isRunning=!1),this.spineBoy.setAnimation(0,"idle",!1))},moveLeftUp:function(e){this._isAction||(this._isAction=!0,this.spineTween&&this.spineTween.stop(),this.spineBoy.setAnimation(0,"idle",!1))},spaceShoot:function(){var e=this.bulletPrefab,t=cc.instantiate(e);if(this.spineBoy.node.scaleX>0){t.parent=this.node.parent,t.x=this.spineBoy.node.x+50,t.y=this.spineBoy.node.y+50;var n=cc.sequence(cc.moveBy(1,cc.v2(500,0)),cc.delayTime(.1));this.bulletAction=t.runAction(cc.sequence(n,cc.callFunc(function(){t.destroy()}))),this._listBullet.push(t)}else{t.parent=this.node.parent,t.x=this.spineBoy.node.x-150,t.y=this.spineBoy.node.y+50;var i=cc.sequence(cc.moveBy(1,cc.v2(-500,0)),cc.delayTime(.1));this.bulletAction=t.runAction(cc.sequence(i,cc.callFunc(function(){t.opacity=0}))),this._listBullet.push(t)}},collisionBunny:function(e){this.boomSprite.node.x=e.node.x,this.boomSprite.node.runAction(cc.sequence(cc.fadeIn(1),cc.fadeOut(1)))},collissionRip:function(e){this._isAction=!1,this.spineTween&&this.spineTween.stop(),this.spineBoy.setAnimation(0,"death",!0),e.node.active=!0;var t=e.node.getChildByName("richtext");cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN,this.onKeyUp,this),cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP,this.onKeyDown,this),cc.tween(t).by(1,{scale:2}).delay(.5).call(function(){cc.director.loadScene("Chapter07")}).start()},collissionRipBunny:function(e){if(this.getBunny.node.scaleY>0){this.spineTween&&this.spineTween.stop(),this.spineBoy.setAnimation(0,"death",!0),e.node.active=!0;var t=e.node.getChildByName("richtext");cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN,this.onKeyUp,this),cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP,this.onKeyDown,this),cc.tween(t).by(1,{scale:2}).delay(.5).call(function(){cc.director.loadScene("Chapter07")}).start()}},collissionWinning:function(e){e.node.getChildByName("richtext").getComponent("cc.RichText").string="<color=#00ff00>You </color><color=#0fffff>Win</color>",this._isAction=!1,this.spineTween&&this.spineTween.stop(),this.spineBoy.setAnimation(0,"jump",!0),e.node.active=!0;var t=e.node.getChildByName("richtext");cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP,this.onKeyDown,this),cc.tween(t).by(1,{scale:2}).delay(.5).call(function(){cc.director.loadScene("Chapter07")}).start()},jumpTo:function(){},update:function(e){}}),cc._RF.pop()},{emitName:"emitName",mEmitter:"mEmitter"}],RipControl:[function(e,t,n){"use strict";cc._RF.push(t,"e7d83bc/xlLrqd1S3Nbf35U","RipControl");var i=e("mEmitter"),s=e("emitName");cc.Class({extends:cc.Component,properties:{gameOver:cc.Component,getBunny:cc.Component},onLoad:function(){cc.director.getCollisionManager().enabled=!0},start:function(){},onCollisionEnter:function(e,t){1==e.tag&&i.instance.emit(s.collissionRip,this.gameOver),2==e.tag&&i.instance.emit(s.collissionBunny,this.gameOver),3==e.tag&&i.instance.emit(s.win,this.gameOver)}}),cc._RF.pop()},{emitName:"emitName",mEmitter:"mEmitter"}],bunnyMove:[function(e,t,n){"use strict";cc._RF.push(t,"5799fxvWoVJ44xIjybVHLmZ","bunnyMove");var i=e("mEmitter"),s=e("emitName");cc.Class({extends:cc.Component,properties:{getBunny:cc.Component,_bunnyAction:null},onLoad:function(){this.eventKillBunny=this.killBunny.bind(this),i.instance.registerOnce(s.killBunny,this.eventKillBunny)},start:function(){var e=cc.sequence(cc.moveBy(2,cc.v2(200,0)),cc.flipX(!0)),t=cc.sequence(cc.moveBy(2,cc.v2(-200,0)),cc.flipX(!1)),n=cc.sequence(e,t);this._bunnyAction=this.getBunny.node.runAction(cc.repeatForever(n))},killBunny:function(e){this.node.runAction(cc.sequence(cc.flipY(!0),cc.moveBy(0,cc.v2(0,-50)))),this.node.stopAction(this._bunnyAction),i.instance.emit(s.eventCollisionBunny,e)},update:function(e){}}),cc._RF.pop()},{emitName:"emitName",mEmitter:"mEmitter"}],emitName:[function(e,t,n){"use strict";cc._RF.push(t,"6938eBh2U5C1ZbH4Q+wcpOX","emitName");t.exports={eventCollisionBunny:"eventCollisionBunny",killBunny:"killBunny",collissionRip:"collissionRip",collissionBunny:"collissionBunny",win:"winning"},cc._RF.pop()},{}],mEmitter:[function(e,t,n){"use strict";cc._RF.push(t,"9001a8HT0hM5Y7kSmV6Q7Cg","mEmitter");var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=e("events"),c=function(){function e(){s(this,e),this._emiter=new o,this._emiter.setMaxListeners(100)}return i(e,[{key:"emit",value:function(){var e;(e=this._emiter).emit.apply(e,arguments)}},{key:"registerEvent",value:function(e,t){this._emiter.on(e,t)}},{key:"registerOnce",value:function(e,t){this._emiter.once(e,t)}},{key:"removeEvent",value:function(e,t){this._emiter.removeListener(e,t)}},{key:"destroy",value:function(){this._emiter.removeAllListeners(),this._emiter=null,e.instance=null}}]),e}();c.instance=null,t.exports=c,cc._RF.pop()},{events:1}]},{},["BulletCollider","MainController","RipControl","bunnyMove","emitName","mEmitter"]);