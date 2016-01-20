/*
 Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or http://ckeditor.com/license
*/
!function(){CKEDITOR.dialog.add("link",function(e){var t,n=CKEDITOR.plugins.link,a=function(){var t=this.getDialog(),n=t.getContentElement("target","popupFeatures"),t=t.getContentElement("target","linkTargetName"),a=this.getValue();if(n&&t)switch(n=n.getElement(),n.hide(),t.setValue(""),a){case"frame":t.setLabel(e.lang.link.targetFrameName),t.getElement().show();break;case"popup":n.show(),t.setLabel(e.lang.link.targetPopupName),t.getElement().show();break;default:t.setValue(a),t.getElement().hide()}},i=function(e){e.target&&this.setValue(e.target[this.id]||"")},r=function(e){e.advanced&&this.setValue(e.advanced[this.id]||"")},o=function(e){e.target||(e.target={}),e.target[this.id]=this.getValue()||""},l=function(e){e.advanced||(e.advanced={}),e.advanced[this.id]=this.getValue()||""},s=e.lang.common,d=e.lang.link;return{title:d.title,minWidth:350,minHeight:230,contents:[{id:"info",label:d.info,title:d.info,elements:[{id:"linkType",type:"select",label:d.type,"default":"url",items:[[d.toUrl,"url"],[d.toAnchor,"anchor"],[d.toEmail,"email"]],onChange:function(){var t=this.getDialog(),n=["urlOptions","anchorOptions","emailOptions"],a=this.getValue(),i=t.definition.getContents("upload"),i=i&&i.hidden;for("url"==a?(e.config.linkShowTargetTab&&t.showPage("target"),i||t.showPage("upload")):(t.hidePage("target"),i||t.hidePage("upload")),i=0;i<n.length;i++){var r=t.getContentElement("info",n[i]);r&&(r=r.getElement().getParent().getParent(),n[i]==a+"Options"?r.show():r.hide())}t.layout()},setup:function(e){this.setValue(e.type||"url")},commit:function(e){e.type=this.getValue()}},{type:"vbox",id:"urlOptions",children:[{type:"hbox",widths:["25%","75%"],children:[{id:"protocol",type:"select",label:s.protocol,"default":"http://",items:[["http://\u200e","http://"],["https://\u200e","https://"],["ftp://\u200e","ftp://"],["news://\u200e","news://"],[d.other,""]],setup:function(e){e.url&&this.setValue(e.url.protocol||"")},commit:function(e){e.url||(e.url={}),e.url.protocol=this.getValue()}},{type:"text",id:"url",label:s.url,required:!0,onLoad:function(){this.allowOnChange=!0},onKeyUp:function(){this.allowOnChange=!1;var e=this.getDialog().getContentElement("info","protocol"),t=this.getValue(),n=/^((javascript:)|[#\/\.\?])/i,a=/^(http|https|ftp|news):\/\/(?=.)/i.exec(t);a?(this.setValue(t.substr(a[0].length)),e.setValue(a[0].toLowerCase())):n.test(t)&&e.setValue(""),this.allowOnChange=!0},onChange:function(){this.allowOnChange&&this.onKeyUp()},validate:function(){var t=this.getDialog();return t.getContentElement("info","linkType")&&"url"!=t.getValueOf("info","linkType")?!0:!e.config.linkJavaScriptLinksAllowed&&/javascript\:/.test(this.getValue())?(alert(s.invalidValue),!1):this.getDialog().fakeObj?!0:CKEDITOR.dialog.validate.notEmpty(d.noUrl).apply(this)},setup:function(e){this.allowOnChange=!1,e.url&&this.setValue(e.url.url),this.allowOnChange=!0},commit:function(e){this.onChange(),e.url||(e.url={}),e.url.url=this.getValue(),this.allowOnChange=!1}}],setup:function(){this.getDialog().getContentElement("info","linkType")||this.getElement().show()}},{type:"button",id:"browse",hidden:"true",filebrowser:"info:url",label:s.browseServer}]},{type:"vbox",id:"anchorOptions",width:260,align:"center",padding:0,children:[{type:"fieldset",id:"selectAnchorText",label:d.selectAnchor,setup:function(){t=n.getEditorAnchors(e),this.getElement()[t&&t.length?"show":"hide"]()},children:[{type:"hbox",id:"selectAnchor",children:[{type:"select",id:"anchorName","default":"",label:d.anchorName,style:"width: 100%;",items:[[""]],setup:function(e){if(this.clear(),this.add(""),t)for(var n=0;n<t.length;n++)t[n].name&&this.add(t[n].name);e.anchor&&this.setValue(e.anchor.name),(e=this.getDialog().getContentElement("info","linkType"))&&"email"==e.getValue()&&this.focus()},commit:function(e){e.anchor||(e.anchor={}),e.anchor.name=this.getValue()}},{type:"select",id:"anchorId","default":"",label:d.anchorId,style:"width: 100%;",items:[[""]],setup:function(e){if(this.clear(),this.add(""),t)for(var n=0;n<t.length;n++)t[n].id&&this.add(t[n].id);e.anchor&&this.setValue(e.anchor.id)},commit:function(e){e.anchor||(e.anchor={}),e.anchor.id=this.getValue()}}],setup:function(){this.getElement()[t&&t.length?"show":"hide"]()}}]},{type:"html",id:"noAnchors",style:"text-align: center;",html:'<div role="note" tabIndex="-1">'+CKEDITOR.tools.htmlEncode(d.noAnchors)+"</div>",focus:!0,setup:function(){this.getElement()[t&&t.length?"hide":"show"]()}}],setup:function(){this.getDialog().getContentElement("info","linkType")||this.getElement().hide()}},{type:"vbox",id:"emailOptions",padding:1,children:[{type:"text",id:"emailAddress",label:d.emailAddress,required:!0,validate:function(){var e=this.getDialog();return e.getContentElement("info","linkType")&&"email"==e.getValueOf("info","linkType")?CKEDITOR.dialog.validate.notEmpty(d.noEmail).apply(this):!0},setup:function(e){e.email&&this.setValue(e.email.address),(e=this.getDialog().getContentElement("info","linkType"))&&"email"==e.getValue()&&this.select()},commit:function(e){e.email||(e.email={}),e.email.address=this.getValue()}},{type:"text",id:"emailSubject",label:d.emailSubject,setup:function(e){e.email&&this.setValue(e.email.subject)},commit:function(e){e.email||(e.email={}),e.email.subject=this.getValue()}},{type:"textarea",id:"emailBody",label:d.emailBody,rows:3,"default":"",setup:function(e){e.email&&this.setValue(e.email.body)},commit:function(e){e.email||(e.email={}),e.email.body=this.getValue()}}],setup:function(){this.getDialog().getContentElement("info","linkType")||this.getElement().hide()}}]},{id:"target",requiredContent:"a[target]",label:d.target,title:d.target,elements:[{type:"hbox",widths:["50%","50%"],children:[{type:"select",id:"linkTargetType",label:s.target,"default":"notSet",style:"width : 100%;",items:[[s.notSet,"notSet"],[d.targetFrame,"frame"],[d.targetPopup,"popup"],[s.targetNew,"_blank"],[s.targetTop,"_top"],[s.targetSelf,"_self"],[s.targetParent,"_parent"]],onChange:a,setup:function(e){e.target&&this.setValue(e.target.type||"notSet"),a.call(this)},commit:function(e){e.target||(e.target={}),e.target.type=this.getValue()}},{type:"text",id:"linkTargetName",label:d.targetFrameName,"default":"",setup:function(e){e.target&&this.setValue(e.target.name)},commit:function(e){e.target||(e.target={}),e.target.name=this.getValue().replace(/\W/gi,"")}}]},{type:"vbox",width:"100%",align:"center",padding:2,id:"popupFeatures",children:[{type:"fieldset",label:d.popupFeatures,children:[{type:"hbox",children:[{type:"checkbox",id:"resizable",label:d.popupResizable,setup:i,commit:o},{type:"checkbox",id:"status",label:d.popupStatusBar,setup:i,commit:o}]},{type:"hbox",children:[{type:"checkbox",id:"location",label:d.popupLocationBar,setup:i,commit:o},{type:"checkbox",id:"toolbar",label:d.popupToolbar,setup:i,commit:o}]},{type:"hbox",children:[{type:"checkbox",id:"menubar",label:d.popupMenuBar,setup:i,commit:o},{type:"checkbox",id:"fullscreen",label:d.popupFullScreen,setup:i,commit:o}]},{type:"hbox",children:[{type:"checkbox",id:"scrollbars",label:d.popupScrollBars,setup:i,commit:o},{type:"checkbox",id:"dependent",label:d.popupDependent,setup:i,commit:o}]},{type:"hbox",children:[{type:"text",widths:["50%","50%"],labelLayout:"horizontal",label:s.width,id:"width",setup:i,commit:o},{type:"text",labelLayout:"horizontal",widths:["50%","50%"],label:d.popupLeft,id:"left",setup:i,commit:o}]},{type:"hbox",children:[{type:"text",labelLayout:"horizontal",widths:["50%","50%"],label:s.height,id:"height",setup:i,commit:o},{type:"text",labelLayout:"horizontal",label:d.popupTop,widths:["50%","50%"],id:"top",setup:i,commit:o}]}]}]}]},{id:"upload",label:d.upload,title:d.upload,hidden:!0,filebrowser:"uploadButton",elements:[{type:"file",id:"upload",label:s.upload,style:"height:40px",size:29},{type:"fileButton",id:"uploadButton",label:s.uploadSubmit,filebrowser:"info:url","for":["upload","upload"]}]},{id:"advanced",label:d.advanced,title:d.advanced,elements:[{type:"vbox",padding:1,children:[{type:"hbox",widths:["45%","35%","20%"],children:[{type:"text",id:"advId",requiredContent:"a[id]",label:d.id,setup:r,commit:l},{type:"select",id:"advLangDir",requiredContent:"a[dir]",label:d.langDir,"default":"",style:"width:110px",items:[[s.notSet,""],[d.langDirLTR,"ltr"],[d.langDirRTL,"rtl"]],setup:r,commit:l},{type:"text",id:"advAccessKey",requiredContent:"a[accesskey]",width:"80px",label:d.acccessKey,maxLength:1,setup:r,commit:l}]},{type:"hbox",widths:["45%","35%","20%"],children:[{type:"text",label:d.name,id:"advName",requiredContent:"a[name]",setup:r,commit:l},{type:"text",label:d.langCode,id:"advLangCode",requiredContent:"a[lang]",width:"110px","default":"",setup:r,commit:l},{type:"text",label:d.tabIndex,id:"advTabIndex",requiredContent:"a[tabindex]",width:"80px",maxLength:5,setup:r,commit:l}]}]},{type:"vbox",padding:1,children:[{type:"hbox",widths:["45%","55%"],children:[{type:"text",label:d.advisoryTitle,requiredContent:"a[title]","default":"",id:"advTitle",setup:r,commit:l},{type:"text",label:d.advisoryContentType,requiredContent:"a[type]","default":"",id:"advContentType",setup:r,commit:l}]},{type:"hbox",widths:["45%","55%"],children:[{type:"text",label:d.cssClasses,requiredContent:"a(cke-xyz)","default":"",id:"advCSSClasses",setup:r,commit:l},{type:"text",label:d.charset,requiredContent:"a[charset]","default":"",id:"advCharset",setup:r,commit:l}]},{type:"hbox",widths:["45%","55%"],children:[{type:"text",label:d.rel,requiredContent:"a[rel]","default":"",id:"advRel",setup:r,commit:l},{type:"text",label:d.styles,requiredContent:"a{cke-xyz}","default":"",id:"advStyles",validate:CKEDITOR.dialog.validate.inlineStyle(e.lang.common.invalidInlineStyle),setup:r,commit:l}]}]}]}],onShow:function(){var e=this.getParentEditor(),t=e.getSelection(),a=null;(a=n.getSelectedLink(e))&&a.hasAttribute("href")?t.getSelectedElement()||t.selectElement(a):a=null,e=n.parseLinkAttributes(e,a),this._.selectedElement=a,this.setupContent(e)},onOk:function(){var t={};this.commitContent(t);var a=e.getSelection(),i=n.getLinkAttributes(e,t);if(this._.selectedElement){var r=this._.selectedElement,o=r.data("cke-saved-href"),l=r.getHtml();r.setAttributes(i.set),r.removeAttributes(i.removed),(o==l||"email"==t.type&&-1!=l.indexOf("@"))&&(r.setHtml("email"==t.type?t.email.address:i.set["data-cke-saved-href"]),a.selectElement(r)),delete this._.selectedElement}else a=a.getRanges()[0],a.collapsed&&(t=new CKEDITOR.dom.text("email"==t.type?t.email.address:i.set["data-cke-saved-href"],e.document),a.insertNode(t),a.selectNodeContents(t)),i=new CKEDITOR.style({element:"a",attributes:i.set}),i.type=CKEDITOR.STYLE_INLINE,i.applyToRange(a,e),a.select()},onLoad:function(){e.config.linkShowAdvancedTab||this.hidePage("advanced"),e.config.linkShowTargetTab||this.hidePage("target")},onFocus:function(){var e=this.getContentElement("info","linkType");e&&"url"==e.getValue()&&(e=this.getContentElement("info","url"),e.select())}}})}();