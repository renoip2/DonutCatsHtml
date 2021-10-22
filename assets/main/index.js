System.register("chunks:///_virtual/AnimalController.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var n,e,o,r,i,a,l,c,s,u;return{setters:[function(t){n=t.inheritsLoose,e=t.defineProperty,o=t.assertThisInitialized},function(t){r=t.cclegacy,i=t._decorator,a=t.RigidBody2D,l=t.Collider2D,c=t.Contact2DType,s=t.Vec2,u=t.Component}],execute:function(){var p;r._RF.push({},"25feeAS/QtCwajFsGYUawYY","AnimalController",void 0);var h=i.ccclass;i.property,t("AnimalController",h("AnimalController")(p=function(t){function r(){for(var n,r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return n=t.call.apply(t,[this].concat(i))||this,e(o(n),"rb",void 0),n}n(r,t);var i=r.prototype;return i.start=function(){this.rb=this.getComponent(a);var t=this.getComponent(l);t&&t.on(c.BEGIN_CONTACT,this.onBeginContact,this)},i.onBeginContact=function(t,n,e){"Jumper"==n.node.name&&(this.rb.linearVelocity=this.rb.linearVelocity.add(new s(0,20)))},r}(u))||p);r._RF.pop()}}}));

System.register("chunks:///_virtual/LevelController.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var t,r,o,n;return{setters:[function(e){t=e.inheritsLoose},function(e){r=e.cclegacy,o=e._decorator,n=e.Component}],execute:function(){var l;r._RF.push({},"6ad0aqF0h1IpalTuFEoZsc+","LevelController",void 0);var c=o.ccclass;o.property,e("LevelController",c("LevelController")(l=function(e){function r(){return e.apply(this,arguments)||this}return t(r,e),r.prototype.start=function(){},r}(n))||l);r._RF.pop()}}}));

System.register("chunks:///_virtual/GameController.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var r,t,n,o,c,a,i;return{setters:[function(e){r=e.inheritsLoose,t=e.defineProperty,n=e.assertThisInitialized,o=e.asyncToGenerator},function(e){c=e.cclegacy,a=e._decorator,i=e.Component}],execute:function(){var s;c._RF.push({},"84ac8Vk35lG5JbMX3kDZ3q4","GameController",void 0);var u=a.ccclass;a.property,e("GameController",u("GameController")(s=function(e){function c(){for(var r,o=arguments.length,c=new Array(o),a=0;a<o;a++)c[a]=arguments[a];return r=e.call.apply(e,[this].concat(c))||this,t(n(r),"gameScore",void 0),r}r(c,e);var a=c.prototype;return a.start=function(){this.initGameScore()},a.initGameScore=function(){var e=this,r=document.createElement("script");r.src="https://gs.eponesh.com/sdk/game-score.js?projectId=399&publicToken=7aC2YLfvFTVSXUTmdvTaXQ1i6CkCc270&callback=onGSInit",r.async=!1,document.body.append(r),window.onGSInit=function(){var r=o(regeneratorRuntime.mark((function r(t){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t.player.ready;case 2:t.ads.showSticky(),e.gameScore=t;case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},c}(i))||s);c._RF.pop()}}}));

System.register("chunks:///_virtual/SpringController.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var r,i,e,n,o,s,p,a,l,c,u,h,g;return{setters:[function(t){r=t.applyDecoratedDescriptor,i=t.inheritsLoose,e=t.defineProperty,n=t.assertThisInitialized,o=t.initializerDefineProperty},function(t){s=t.cclegacy,p=t._decorator,a=t.SpriteFrame,l=t.Sprite,c=t.Collider2D,u=t.Contact2DType,h=t.Vec3,g=t.Component}],execute:function(){var d,f,C,y,m;s._RF.push({},"aa10eYiCJ5HEJr3RAf3hFSa","SpringController",void 0);var v=p.ccclass,S=p.property;t("SpringController",(d=v("SpringController"),f=S({type:a}),d((m=r((y=function(t){function r(){for(var r,i=arguments.length,s=new Array(i),p=0;p<i;p++)s[p]=arguments[p];return r=t.call.apply(t,[this].concat(s))||this,e(n(r),"sr",void 0),e(n(r),"springIn",void 0),o(n(r),"springOut",m,n(r)),r}i(r,t);var s=r.prototype;return s.start=function(){this.sr=this.getComponent(l),this.springIn=this.sr.spriteFrame;var t=this.getComponent(c);t&&t.on(u.BEGIN_CONTACT,this.onBeginContact,this)},s.onBeginContact=function(t,r,i){"Animal"==r.node.name&&(this.sr.spriteFrame=this.springOut,this.node.position=this.node.position.add(new h(0,10,0)),this.schedule((function(){this.sr.spriteFrame=this.springIn}),0,0,.2))},r}(g)).prototype,"springOut",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),C=y))||C));s._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./AnimalController.ts","./LevelController.ts","./GameController.ts","./SpringController.ts"],(function(){"use strict";return{setters:[null,null,null,null],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});