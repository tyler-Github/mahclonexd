(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{474:function(e,r,t){var content=t(518);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(32).default)("28f1127f",content,!0,{sourceMap:!1})},517:function(e,r,t){"use strict";t(474)},518:function(e,r,t){var o=t(31)(!1);o.push([e.i,".v-dialog{border-radius:15px;background-color:#fff;padding:15px}.upload-block{border:2px dashed #adadad;padding:30px;border-radius:15px;margin-bottom:20px}",""]),e.exports=o},542:function(e,r,t){"use strict";t.r(r);t(49),t(9),t(65),t(22),t(15),t(64),t(71),t(23);var o=t(7),n=(t(34),t(39),t(544));function l(e,r){var t;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=function(e,r){if(!e)return;if("string"==typeof e)return c(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return c(e,r)}(e))||r&&e&&"number"==typeof e.length){t&&(e=t);var i=0,o=function(){};return{s:o,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,l=!0,d=!1;return{s:function(){t=e[Symbol.iterator]()},n:function(){var e=t.next();return l=e.done,e},e:function(e){d=!0,n=e},f:function(){try{l||null==t.return||t.return()}finally{if(d)throw n}}}}function c(e,r){(null==r||r>e.length)&&(r=e.length);for(var i=0,t=new Array(r);i<r;i++)t[i]=e[i];return t}var d={asyncData:function(){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=$nuxt.$fire.firestore.collection("users").doc($nuxt.$fire.auth.currentUser.uid).collection("boards"),t=[],e.next=4,r.get().then((function(e){if(e.docs.length>0)try{var r,o=l(e.docs);try{for(o.s();!(r=o.n()).done;){var n=r.value,data=n.data();data.id=n.id,t.push(data)}}catch(e){o.e(e)}finally{o.f()}}catch(e){}})).catch((function(e){}));case 4:return e.abrupt("return",{boards:t});case 5:case"end":return e.stop()}}),e)})))()},data:function(){return{enableColor:!1,dialog:!1,valid:!1,board:{title:"",color:"",image:{name:"",originalName:"",downloadURL:"",uuid:""}},snackbar:!1,snackbarText:"No error message",currentImageId:"",fileToUpload:{}}},created:function(){var e=this;$nuxt.$fire.firestore.collection("users/".concat($nuxt.$fire.auth.currentUser.uid,"/boards/")).onSnapshot((function(r){if(r.docs.length>0){e.boards=[];try{var t,o=l(r.docs);try{for(o.s();!(t=o.n()).done;){var n=t.value,data=n.data();data.id=n.id,e.boards.push(data)}}catch(e){o.e(e)}finally{o.f()}}catch(e){}}}))},methods:{addBoard:function(){this.currentImageId=Object(n.a)(),this.dialog=!0},createBoard:function(){var e=this;this.$refs.form.validate()&&(this.board.dateCreated=Date.now(),this.$fire.firestore.collection("users").doc(this.$fire.auth.currentUser.uid).collection("boards").doc(this.currentImageId).set(this.board).then((function(r){e.dialog=!1,e.$refs.form.reset(),e.snackbarText="Successfully created your board",e.snackbar=!0})).catch((function(e){})))},chooseImage:function(){this.$refs.boardBackground.click()},onFileClicked:function(e){e.target.value=""},onFileSelected:function(e){try{var r=e.target.files[0];this.fileToUpload={file:r,originalName:r.name,loading:!1,progress:0,success:!1,error:!1,previewPath:"",uuid:Object(n.a)()},this.uploadFiles()}catch(e){}},uploadFiles:function(){var e=this,r=this.fileToUpload.uuid+"-"+this.fileToUpload.file.name,t="images/"+this.$fire.auth.currentUser.uid+"/boards/"+this.currentImageId+"/"+r,n=this.$fire.storage.ref().child(t),l={customMetadata:{owner:this.$fire.auth.currentUser.uid}},c=n.put(this.fileToUpload.file,l);return c.on("state_changed",(function(progress){e.fileToUpload.progress=progress.bytesTransferred/progress.totalBytes*100}),(function(r){return e.fileToUpload.failed=!0,e.fileToUpload.error=r,!1}),Object(o.a)(regeneratorRuntime.mark((function t(){var o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.snapshot.ref.getDownloadURL().catch((function(e){return!1}));case 2:o=t.sent,e.board.image={name:r,originalName:e.fileToUpload.file.name,downloadURL:o,uuid:e.fileToUpload.uuid};case 4:case"end":return t.stop()}}),t)}))))}}},f=(t(517),t(54)),v=t(67),h=t.n(v),m=t(480),y=t(471),k=t(452),x=t(538),_=t(451),w=t(537),U=t(500),C=t(440),T=t(470),$=t(449),j=t(501),R=t(543),component=Object(f.a)(d,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("v-container",[t("v-dialog",{attrs:{"max-width":"355",persistent:""},model:{value:e.dialog,callback:function(r){e.dialog=r},expression:"dialog"}},[t("v-container",{staticClass:"d-block"},[t("v-row",{attrs:{"no-gutters":"",align:"center",justify:"space-between"}},[t("v-row",{attrs:{"no-gutters":""}},[t("h3",[e._v("Add Board")])]),e._v(" "),t("v-icon",{on:{click:function(r){e.dialog=!1}}},[e._v("mdi-close")])],1),e._v(" "),t("v-form",{ref:"form",model:{value:e.valid,callback:function(r){e.valid=r},expression:"valid"}},[t("div",{staticClass:"d-flex flex-column"},[t("v-text-field",{attrs:{label:"Board title",name:"title",type:"text",rules:[function(e){return!!e||"Board title is required"}],required:""},model:{value:e.board.title,callback:function(r){e.$set(e.board,"title",r)},expression:"board.title"}}),e._v(" "),!1===e.enableColor?t("v-btn",{attrs:{depressed:""},on:{click:function(r){e.enableColor=!0}}},[e._v("\n            Choose board color\n          ")]):e._e(),e._v(" "),t("br"),e._v(" "),!0===e.enableColor?t("v-color-picker",{attrs:{"dot-size":"25","hide-inputs":"","swatches-max-height":"100"},model:{value:e.board.color,callback:function(r){e.$set(e.board,"color",r)},expression:"board.color"}}):e._e(),e._v(" "),t("div",{staticClass:"d-flex flex-column align-center justify-center flex-grow-1 upload-block",style:"background-image: url('"+(e.board.image.downloadURL?e.board.image.downloadURL:"")+"');height:150px;background-size: cover;background-position: center;",on:{click:e.chooseImage}},[e.fileToUpload.progress&&0!=e.fileToUpload.progress?e.fileToUpload.progress>0&&e.fileToUpload.progress<100?[t("div",{staticClass:"text-center"},[t("v-progress-circular",{attrs:{size:50,color:"green",indeterminate:""}})],1)]:e._e():[t("v-icon",[e._v("mdi-camera")]),e._v(" "),t("p",[e._v("Add a board background")]),e._v(" "),t("input",{ref:"boardBackground",staticStyle:{display:"none"},attrs:{type:"file",accept:"jpg, jpeg, png",multiple:"",color:"#f66f26","buffer-value":"0"},on:{click:function(r){return e.onFileClicked(r)},change:function(r){return e.onFileSelected(r)}}})]],2),e._v(" "),t("v-btn",{attrs:{disabled:!e.valid,color:"primary"},on:{click:e.createBoard}},[e._v("Submit")])],1)])],1)],1),e._v(" "),t("div",{staticClass:"d-flex flex-row align-center justify-space-between"},[t("h1",[e._v("My Boards")]),e._v(" "),t("v-btn",{attrs:{small:"",depressed:""},on:{click:e.addBoard}},[e._v("ADD BOARD")])],1),e._v(" "),t("div",{staticClass:"d-flex flex-wrap align-center justify-start"},[0===e.boards.length?t("p",[e._v("You have no boards yet.")]):e._e(),e._v(" "),e._l(e.boards,(function(r){return t("v-card",{key:r.id,staticClass:"jello-board-tile",style:""!=r.image.downloadURL?"background:url("+r.image.downloadURL+");":r.color?"background-color:"+r.color:"",on:{click:function(t){return e.$router.push("/boards/"+r.id)}}},[t("v-card-title",{style:""!=r.image.downloadURL?"color:#fff":""},[e._v("\n        "+e._s(r.title)+"\n      ")]),e._v(" "),t("v-card-subtitle",{style:""!=r.image.downloadURL?"color:#fff":""},[e._v("\n        created "+e._s(e._f("formatDate")(r.dateCreated))+"\n      ")])],1)}))],2),e._v(" "),t("v-snackbar",{attrs:{timeout:3e3,absolute:"",bottom:"",color:"primary"},model:{value:e.snackbar,callback:function(r){e.snackbar=r},expression:"snackbar"}},[e._v("\n    "+e._s(e.snackbarText)+"\n  ")])],1)}),[],!1,null,null,null);r.default=component.exports;h()(component,{VBtn:m.a,VCard:y.a,VCardSubtitle:k.b,VCardTitle:k.d,VColorPicker:x.a,VContainer:_.a,VDialog:w.a,VForm:U.a,VIcon:C.a,VProgressCircular:T.a,VRow:$.a,VSnackbar:j.a,VTextField:R.a})}}]);