(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-03aa3702"],{"00e7":function(t,n,e){t.exports=e.p+"img/D3.1b39749c.png"},"0c0c":function(t,n,e){t.exports=e.p+"img/U1.49f549a7.png"},"10b6":function(t,n,e){t.exports=e.p+"img/R1.b69c3e68.png"},"333a":function(t,n,e){t.exports=e.p+"img/L3.de8662f6.png"},"3dd7":function(t,n,e){t.exports=e.p+"img/R3.ab6f658c.png"},"4ede":function(t,n,e){t.exports=e.p+"img/U2.35ad970a.png"},"510e":function(t,n,e){t.exports=e.p+"img/D1.118f541a.png"},"5ba5":function(t,n,e){"use strict";e("af91")},"70a8":function(t,n,e){t.exports=e.p+"img/L1.5fbdfbbb.png"},"911c":function(t,n,e){t.exports=e.p+"img/U3.f30f86c6.png"},"93d9":function(t,n,e){t.exports=e.p+"img/L2.1c617a6e.png"},9547:function(t,n,e){t.exports=e.p+"img/R2.92307139.png"},"9f88":function(t,n,e){t.exports=e.p+"img/L0.8e16a1bb.png"},a30a:function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,"#app{font-family:Avenir,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-align:center;color:#2c3e50}#nav{padding:30px}#nav a{font-weight:700;color:#2c3e50}#nav a.router-link-exact-active{color:#42b983}h1,h2{font-weight:400}ul{list-style-type:none;padding:0}li{display:inline-block;margin:0 10px}a{color:#42b983}.signin,.signup{margin:20px;display:flex;flex-flow:column nowrap;justify-content:center;align-items:center}input{margin:5px 3px;padding:5px}button{margin:5px;padding:5px}.space{margin:40px}.controller{display:flex;justify-content:center;align-items:center}.twitcharea{position:relative;height:567px}.twitchchnnel{position:absolute;left:50%;margin-right:-50%;transform:translate(-50%)}.uichanger{margin:1em}.mousebutton{width:930px;height:567px;position:absolute;top:0;left:0;left:50%;margin-right:-50%;transform:translate(-50%)}.wasd{margin:10px}.wasd-list,.wasd-text{display:flex;justify-content:center}.wasd-text{width:5em;flex-direction:column}.chest,.wasd-text{align-items:center}.chest{margin:10px;justify-content:center}.U0{display:inline-block}",""]),t.exports=n},a8f1:function(t,n,e){t.exports=e.p+"img/R0.6173844a.png"},af91:function(t,n,e){var i=e("a30a");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=e("499e").default;o("813c943c",i,!0,{sourceMap:!1,shadowMode:!1})},c3a4:function(t,n,e){"use strict";e.r(n);var i=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"about"},[i("div",[i("button",{on:{click:t.logout}},[t._v("logout")])]),i("div",{staticClass:"space"}),i("div",{staticClass:"twitcharea"},[i("iframe",{attrs:{src:"https://player.twitch.tv/?channel=it0sat0&parent=it0sat0.github.io",frameborder:"0",allowfullscreen:"true",scrolling:"no",height:"567",width:"930"}}),i("div",{staticClass:"mousebutton",on:{click:t.getxy}})]),i("div",{staticClass:"uichanger"},[i("el-button",{attrs:{type:"primary"},on:{click:t.gotoBefore}},[t._v("Before")]),i("el-button",{attrs:{type:"primary"},on:{click:t.gotoUI1}},[t._v("After1")]),i("el-button",{attrs:{type:"primary"},on:{click:t.gotoUI2}},[t._v("After2")])],1),i("div",{staticClass:"controller"},[i("div",{staticClass:"wasd"},[0===t.buttonChanger?i("button",{staticClass:"U0",on:{click:function(n){return t.colorChanger("w")}}},[i("img",{attrs:{src:e("f61f"),height:"20",width:"15"}})]):t._e(),1===t.buttonChanger?i("button",{staticClass:"U1",on:{click:function(n){return t.colorChanger("w")}}},[i("img",{attrs:{src:e("0c0c"),height:"20",width:"15"}})]):t._e(),2===t.buttonChanger?i("button",{staticClass:"U2",on:{click:function(n){return t.colorChanger("w")}}},[i("img",{attrs:{src:e("4ede"),height:"20",width:"15"}})]):t._e(),3===t.buttonChanger?i("button",{staticClass:"U3",on:{click:function(n){return t.colorChanger("w")}}},[i("img",{attrs:{src:e("911c"),height:"20",width:"15"}})]):t._e(),i("div",{staticClass:"wasd-list"},[0===t.buttonChanger?i("button",{staticClass:"L0",on:{click:function(n){return t.colorChanger("a")}}},[i("img",{attrs:{src:e("9f88"),height:"15",width:"20"}})]):t._e(),1===t.buttonChanger?i("button",{staticClass:"L1",on:{click:function(n){return t.colorChanger("a")}}},[i("img",{attrs:{src:e("70a8"),height:"15",width:"20"}})]):t._e(),2===t.buttonChanger?i("button",{staticClass:"L2",on:{click:function(n){return t.colorChanger("a")}}},[i("img",{attrs:{src:e("93d9"),height:"15",width:"20"}})]):t._e(),3===t.buttonChanger?i("button",{staticClass:"L3",on:{click:function(n){return t.colorChanger("a")}}},[i("img",{attrs:{src:e("333a"),height:"15",width:"20"}})]):t._e(),!0===t.sendTimer?i("div",{staticClass:"wasd-text"},[t._v(" movement ")]):t._e(),!1===t.sendTimer?i("div",{staticClass:"wasd-text"},[t._v(" 送信中 ")]):t._e(),0===t.buttonChanger?i("button",{staticClass:"R0",on:{click:function(n){return t.colorChanger("d")}}},[i("img",{attrs:{src:e("a8f1"),height:"15",width:"20"}})]):t._e(),1===t.buttonChanger?i("button",{staticClass:"R1",on:{click:function(n){return t.colorChanger("d")}}},[i("img",{attrs:{src:e("10b6"),height:"15",width:"20"}})]):t._e(),2===t.buttonChanger?i("button",{staticClass:"R2",on:{click:function(n){return t.colorChanger("d")}}},[i("img",{attrs:{src:e("9547"),height:"15",width:"20"}})]):t._e(),3===t.buttonChanger?i("button",{staticClass:"R3",on:{click:function(n){return t.colorChanger("d")}}},[i("img",{attrs:{src:e("3dd7"),height:"15",width:"20"}})]):t._e()]),0===t.buttonChanger?i("button",{staticClass:"D0",on:{click:function(n){return t.colorChanger("s")}}},[i("img",{attrs:{src:e("fbcc"),height:"20",width:"15"}})]):t._e(),1===t.buttonChanger?i("button",{staticClass:"D1",on:{click:function(n){return t.colorChanger("s")}}},[i("img",{attrs:{src:e("510e"),height:"20",width:"15"}})]):t._e(),2===t.buttonChanger?i("button",{staticClass:"D2",on:{click:function(n){return t.colorChanger("s")}}},[i("img",{attrs:{src:e("f894"),height:"20",width:"15"}})]):t._e(),3===t.buttonChanger?i("button",{staticClass:"D3",on:{click:function(n){return t.colorChanger("s")}}},[i("img",{attrs:{src:e("00e7"),height:"20",width:"15"}})]):t._e()]),i("div",{staticClass:"wasd"},[0===t.buttonChanger?i("button",{staticClass:"U0",on:{click:function(n){return t.colorChanger("vw")}}},[i("img",{attrs:{src:e("f61f"),height:"20",width:"15"}})]):t._e(),1===t.buttonChanger?i("button",{staticClass:"U1",on:{click:function(n){return t.colorChanger("vw")}}},[i("img",{attrs:{src:e("0c0c"),height:"20",width:"15"}})]):t._e(),2===t.buttonChanger?i("button",{staticClass:"U2",on:{click:function(n){return t.colorChanger("vw")}}},[i("img",{attrs:{src:e("4ede"),height:"20",width:"15"}})]):t._e(),3===t.buttonChanger?i("button",{staticClass:"U3",on:{click:function(n){return t.colorChanger("vw")}}},[i("img",{attrs:{src:e("911c"),height:"20",width:"15"}})]):t._e(),i("div",{staticClass:"wasd-list"},[0===t.buttonChanger?i("button",{staticClass:"L0",on:{click:function(n){return t.colorChanger("va")}}},[i("img",{attrs:{src:e("9f88"),height:"15",width:"20"}})]):t._e(),1===t.buttonChanger?i("button",{staticClass:"L1",on:{click:function(n){return t.colorChanger("va")}}},[i("img",{attrs:{src:e("70a8"),height:"15",width:"20"}})]):t._e(),2===t.buttonChanger?i("button",{staticClass:"L2",on:{click:function(n){return t.colorChanger("va")}}},[i("img",{attrs:{src:e("93d9"),height:"15",width:"20"}})]):t._e(),3===t.buttonChanger?i("button",{staticClass:"L3",on:{click:function(n){return t.colorChanger("va")}}},[i("img",{attrs:{src:e("333a"),height:"15",width:"20"}})]):t._e(),!0===t.sendTimer?i("div",{staticClass:"wasd-text"},[t._v(" view ")]):t._e(),!1===t.sendTimer?i("div",{staticClass:"wasd-text"},[t._v(" 送信中 ")]):t._e(),0===t.buttonChanger?i("button",{staticClass:"R0",on:{click:function(n){return t.colorChanger("vd")}}},[i("img",{attrs:{src:e("a8f1"),height:"15",width:"20"}})]):t._e(),1===t.buttonChanger?i("button",{staticClass:"R1",on:{click:function(n){return t.colorChanger("vd")}}},[i("img",{attrs:{src:e("10b6"),height:"15",width:"20"}})]):t._e(),2===t.buttonChanger?i("button",{staticClass:"R2",on:{click:function(n){return t.colorChanger("vd")}}},[i("img",{attrs:{src:e("9547"),height:"15",width:"20"}})]):t._e(),3===t.buttonChanger?i("button",{staticClass:"R3",on:{click:function(n){return t.colorChanger("vd")}}},[i("img",{attrs:{src:e("3dd7"),height:"15",width:"20"}})]):t._e()]),0===t.buttonChanger?i("button",{staticClass:"D0",on:{click:function(n){return t.colorChanger("vs")}}},[i("img",{attrs:{src:e("fbcc"),height:"20",width:"15"}})]):t._e(),1===t.buttonChanger?i("button",{staticClass:"D1",on:{click:function(n){return t.colorChanger("vs")}}},[i("img",{attrs:{src:e("510e"),height:"20",width:"15"}})]):t._e(),2===t.buttonChanger?i("button",{staticClass:"D2",on:{click:function(n){return t.colorChanger("vs")}}},[i("img",{attrs:{src:e("f894"),height:"20",width:"15"}})]):t._e(),3===t.buttonChanger?i("button",{staticClass:"D3",on:{click:function(n){return t.colorChanger("vs")}}},[i("img",{attrs:{src:e("00e7"),height:"20",width:"15"}})]):t._e()])]),i("div",{staticClass:"chest"},[i("button",{on:{click:function(n){return t.colorChanger("cr")}}},[t._v("craft")]),i("button",{on:{click:function(n){return t.colorChanger("op")}}},[t._v("chest")]),i("button",{on:{click:function(n){return t.colorChanger("cl")}}},[t._v("close")])])])},o=[],r=e("1da1"),s=(e("96cf"),e("d3b7"),e("3ca3"),e("ddb0"),e("9861"),e("99af"),e("2591")),c=e("bc3a"),a=e.n(c),u=e("3cba"),h=e.n(u),l={data:function(){return{channelName:this.$_getchannel(),username:this.$_getusername(),password:this.$_getpassword(),channelURL:"",email:this.$_getuseremail(),ChatCommand:"",sendTimer:!0,timeoutTimer:"",buttonChangeTimer:!0,buttonChanger:0}},created:function(){this.channelURL="https://player.twitch.tv/?channel=".concat(this.channelName,"&parent=it0sat0.github.io"),console.log("channelURL:"+this.channelURL)},mounted:function(){var t=document.getElementById("ifr");t.removeAttribute("src"),document.getElementById("ifr").src=this.channelURL,this.timeout()},methods:{gotoBefore:function(){this.$router.push("/about")},gotoUI1:function(){this.$router.push("/ui1")},gotoUI2:function(){this.$router.push("/ui2")},colorChanger:function(t){var n=this;clearTimeout(this.timeoutTimer),this.buttonChanger<3&&this.buttonChangeTimer&&("cr"!=t&&"op"!=t&&"cl"!=t&&this.buttonChanger++,setTimeout((function(){n.post(t),console.log("post"),n.buttonChangeTimer=!1}),1e3),this.sendTimer&&(this.sendTimer=!1,setTimeout((function(){n.sendTimer=!0,n.buttonChangeTimer=!0,n.buttonChanger=0}),3e3))),this.timeout()},func:function(){console.log(this.channelURL)},getxy:function(t){var n=this;clearTimeout(this.timeoutTimer),console.log("sendTimer"+this.sendTimer),this.sendTimer&&(this.post("m,"+t.offsetX/930+","+t.offsetY/567),console.log("e.offsetX"+t.offsetX/930),console.log("e.offsetY"+t.offsetY/567),this.sendTimer=!1),setTimeout((function(){n.sendTimer=!0}),3e3),this.timeout()},timeout:function(){var t=this;this.timeoutTimer=setTimeout((function(){alert("一定時間操作がなかったため、ログアウトします"),clearTimeout(t.timeoutTimer),t.logout()}),6e5)},check:function(){console.log(this.channelURL);var t=document.getElementById("ifr");t.removeAttribute("src"),document.getElementById("ifr").src=this.channelURL},logout:function(){clearTimeout(this.timeoutTimer),this.logouotRequest(this.email),s["a"].auth().signOut(),clearTimeout(this.timeoutTimer),this.$router.push("/")},logouotRequest:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(n){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=new URLSearchParams,e.append("name",n),t.next=4,a.a.post("http://localhost:8040/logout",e);case 4:alert("ログアウトしました");case 5:case"end":return t.stop()}}),t)})));function n(n){return t.apply(this,arguments)}return n}(),post:function(t){console.log("OK");var n={channels:["it0sat0"],identity:{username:"it0sat0sub",password:"oauth:3rl5k8t3wz5q4brrex0alg0efbr1h2"}},e=new h.a.client(n);function i(n,i){console.log("* Connected to ".concat(n,":").concat(i)),e.say("it0sat0","".concat(t))}e.connect(),e.on("connected",i)}}},g=l,f=(e("5ba5"),e("2877")),m=Object(f["a"])(g,i,o,!1,null,null,null);n["default"]=m.exports},f61f:function(t,n,e){t.exports=e.p+"img/U0.ebb32c6c.png"},f894:function(t,n,e){t.exports=e.p+"img/D2.642c7347.png"},fbcc:function(t,n,e){t.exports=e.p+"img/D0.43f71dfb.png"}}]);
//# sourceMappingURL=chunk-03aa3702.91d3a261.js.map