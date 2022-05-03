window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  black: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1d653K6oidGRJxHCYicXmDT", "black");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        _defaultX: 0,
        _scaleTo: 3
      },
      start: function start() {
        cc.log("Hello");
        this._defaultX = this.node.x;
        this._defaultY = this.node.y;
        this.moveTo = this.node.x;
      },
      update: function update(dt) {
        if (this.node.scaleY < this._scaleTo) {
          this.node.scaleX += .05;
          this.node.scaleY += .05;
        }
        if (this.node.scale >= this._scaleTo && this.moveTo < this._defaultX + 100) {
          this.node.x++;
          this.moveTo++;
          if (this.node.x == this._defaultX + 100) {
            this.moveBack = this._defaultX + 100;
            this.node.scaleX = -3;
          }
        }
        if (!(this.moveBack > this._defaultX)) return;
        this.moveBack--;
        this.node.x--;
      }
    });
    cc._RF.pop();
  }, {} ],
  brown: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d0089taystMbatCcRuAdHbH", "brown");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        getGrayBunny: {
          default: null,
          type: cc.Component
        }
      },
      start: function start() {
        this.defaultLocation = this.node.x;
        cc.log("Hello!!!");
        cc.log("Im Brownie");
      },
      update: function update(dt) {
        if (this.node.x == this.defaultLocation + 100) {
          this.getGrayBunny.node.active = true;
          return;
        }
        this.node.angle -= 7;
        this.node.x += 1;
      }
    });
    cc._RF.pop();
  }, {} ],
  gray: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8b742hsRQFBSb/Jxdql1FAk", "gray");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        getBlackBunny: {
          default: null,
          type: cc.Component
        },
        _defaultLocationY: 0
      },
      start: function start() {
        this._defaultLocationY = this.node.y;
        this.jump = 0;
        this.count = 0;
        this.tempCount = 0;
        cc.log("Hmmm!!!");
      },
      update: function update(dt) {
        if (!(this.count < 3)) {
          this.getBlackBunny.node.active = true;
          return;
        }
        if (this.node.y < this._defaultLocationY + 50 && this.jump < 50) {
          this.node.y += 1;
          this.jump += 1;
        }
        if (50 == this.jump && this.node.y != this._defaultLocationY) {
          this.node.y -= 1;
          if (this.node.y == this._defaultLocationY) {
            this.jump = 0;
            this.count++;
          }
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  white: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ec78eG8smhBprIHtIZkFbnr", "white");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        getBrownBunny: {
          default: null,
          type: cc.Component
        }
      },
      start: function start() {
        this.defaultLocation = this.node.x;
        cc.log("Hello");
        this.parentNode = this.node.parent;
      },
      update: function update(dt) {
        if (this.node.x == this.defaultLocation + 100) {
          this.getBrownBunny.node.active = true;
          return;
        }
        this.node.x += 1;
      }
    });
    cc._RF.pop();
  }, {} ]
}, {}, [ "black", "brown", "gray", "white" ]);