window.__require=function e(t,s,i){function n(r,c){if(!s[r]){if(!t[r]){var u=r.split("/");if(u=u[u.length-1],!t[u]){var a="function"==typeof __require&&__require;if(!c&&a)return a(u,!0);if(o)return o(u,!0);throw new Error("Cannot find module '"+r+"'")}}var l=s[r]={exports:{}};t[r][0].call(l.exports,function(e){return n(t[r][1][e]||e)},l,l.exports,e,t,s,i)}return s[r].exports}for(var o="function"==typeof __require&&__require,r=0;r<i.length;r++)n(i[r]);return n}({DeleteNode:[function(e,t,s){"use strict";cc._RF.push(t,"5f36eMgyYVK2Il85SgGFTtO","DeleteNode"),cc.Class({extends:cc.Component,properties:{_nodeArray:[],content:{default:null,type:cc.Component},register:e("Register")},checkedEvent:function(){},removeNode:function(){var e=this,t=this.content.node.children;t.forEach(function(s,i){t[i].getComponent("cc.Toggle").isChecked&&(t[i].destroy(),e.register._listUser.splice(i,1))})},start:function(){}}),cc._RF.pop()},{Register:"Register"}],Register:[function(e,t,s){"use strict";cc._RF.push(t,"e58bd44iRxPwacdvieua/wh","Register"),cc.Class({extends:cc.Component,properties:{_yourUsername:"",_yourEmail:"",_yourPassword:"",_users:cc.Object,_listUser:[],showUser:{default:null,type:cc.Component},showPopupLogin:{default:null,type:cc.Component},resetUsernameBox:{default:null,type:cc.Component},resetEmailBox:{default:null,type:cc.Component},resetPassBox:{default:null,type:cc.Component},messageBox:cc.Label},getUsername:function(e){e&&(this._yourUsername=e)},getEmail:function(e){e&&(this._yourEmail=e)},getPassword:function(e){e&&(this._yourPassword=e)},btnRegisterClick:function(){var e=this;this._yourUsername&&this._yourPassword&&this._yourEmail?(this._users={id:this._listUser.length,userName:this._yourUsername,email:this._yourEmail,password:this._yourPassword},this._listUser.push(this._users),this.node.active=!1,this.showPopupLogin.node.active=!0,this._yourUsername="",this._yourEmail="",this._yourPassword="",this.messageBox.node.active=!1,this.scheduleOnce(function(){e.showPopupLogin.node.active=!1,e.showUser.node.active=!0},1.5),cc.log(this._listUser)):(this.messageBox.node.active=!0,this.messageBox.string="Vui l\xf2ng nh\u1eadp \u0111\u1ea7y \u0111\u1ee7 th\xf4ng tin")},resetEditBox:function(){this.resetUsernameBox.string="",this.resetEmailBox.string="",this.resetPassBox.string=""},start:function(){}}),cc._RF.pop()},{}],listUser:[function(e,t,s){"use strict";cc._RF.push(t,"d1d2fUNpO5EmYFtuXRNqaCD","listUser"),cc.Class({extends:cc.Component,properties:{register:e("Register"),item:{default:null,type:cc.Prefab}},insertUsers:function(){var e=this.register._listUser;if(this.node.active){var t=cc.instantiate(this.item);t.parent=this.node,t.y=-30*e.length,this.node.children[e.length-1].children[2].getComponent("cc.Label").string=e[e.length-1].userName}},start:function(){}}),cc._RF.pop()},{Register:"Register"}],loadingLogin:[function(e,t,s){"use strict";cc._RF.push(t,"532a9PW4BBAyIZ4YXUorMdJ","loadingLogin"),cc.Class({extends:cc.Component,properties:{getListUser:{default:null,type:cc.Component},getLoading:{default:null,type:cc.ProgressBar}},start:function(){this.getLoading.progress=0},update:function(e){this.getLoading.progress+=.7*e}}),cc._RF.pop()},{}],showRegister:[function(e,t,s){"use strict";cc._RF.push(t,"522860l4VFL/o50OfydAk9H","showRegister"),cc.Class({extends:cc.Component,properties:{showRegister:{default:null,type:cc.Component},hideScrollView:{default:null,type:cc.Component},resetLoading:{default:null,type:cc.ProgressBar}},backRegisterClick:function(){this.showRegister.node.active=!0,this.hideScrollView.node.active=!1,this.resetLoading.progress=0},start:function(){}}),cc._RF.pop()},{}]},{},["DeleteNode","Register","listUser","loadingLogin","showRegister"]);