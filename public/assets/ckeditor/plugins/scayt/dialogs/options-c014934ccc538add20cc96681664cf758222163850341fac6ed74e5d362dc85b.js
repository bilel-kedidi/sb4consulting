CKEDITOR.dialog.add("scaytDialog",function(e){var t=e.scayt,n='<p><img src="'+t.getLogo()+'" /></p><p>'+t.getLocal("version")+t.getVersion()+"</p><p>"+t.getLocal("text_copyrights")+"</p>",a=CKEDITOR.document,i={isChanged:function(){return null===this.newLang||this.currentLang===this.newLang?!1:!0},currentLang:t.getLang(),newLang:null,reset:function(){this.currentLang=t.getLang(),this.newLang=null},id:"lang"},n=[{id:"options",label:t.getLocal("tab_options"),onShow:function(){},elements:[{type:"vbox",id:"scaytOptions",children:function(){var e,n=t.getApplicationConfig(),a=[],i={"ignore-all-caps-words":"label_allCaps","ignore-domain-names":"label_ignoreDomainNames","ignore-words-with-mixed-cases":"label_mixedCase","ignore-words-with-numbers":"label_mixedWithDigits"};for(e in n){var r={type:"checkbox"};r.id=e,r.label=t.getLocal(i[e]),a.push(r)}return a}(),onShow:function(){this.getChild();for(var t=e.scayt,n=0;n<this.getChild().length;n++)this.getChild()[n].setValue(t.getApplicationConfig()[this.getChild()[n].id])}}]},{id:"langs",label:t.getLocal("tab_languages"),elements:[{id:"leftLangColumn",type:"vbox",align:"left",widths:["100"],children:[{type:"html",id:"langBox",style:"overflow: hidden; white-space: normal;",html:'<div><div style="float:left;width:45%;margin-left:5px;" id="left-col-'+e.name+'"></div><div style="float:left;width:45%;margin-left:15px;" id="right-col-'+e.name+'"></div></div>',onShow:function(){var t=e.scayt.getLang();a.getById("scaytLang_"+t).$.checked=!0}}]}]},{id:"dictionaries",label:t.getLocal("tab_dictionaries"),elements:[{type:"vbox",id:"rightCol_col__left",children:[{type:"html",id:"dictionaryNote",html:""},{type:"text",id:"dictionaryName",label:t.getLocal("label_fieldNameDic")||"Dictionary name",onShow:function(t){var n=t.sender,a=e.scayt;setTimeout(function(){n.getContentElement("dictionaries","dictionaryNote").getElement().setText(""),null!=a.getUserDictionaryName()&&""!=a.getUserDictionaryName()&&n.getContentElement("dictionaries","dictionaryName").setValue(a.getUserDictionaryName())},0)}},{type:"hbox",id:"notExistDic",align:"left",style:"width:auto;",widths:["50%","50%"],children:[{type:"button",id:"createDic",label:t.getLocal("btn_createDic"),title:t.getLocal("btn_createDic"),onClick:function(){var t=this.getDialog(),n=r,a=e.scayt,i=t.getContentElement("dictionaries","dictionaryName").getValue();a.createUserDictionary(i,function(a){a.error||n.toggleDictionaryButtons.call(t,!0),a.dialog=t,a.command="create",a.name=i,e.fire("scaytUserDictionaryAction",a)},function(n){n.dialog=t,n.command="create",n.name=i,e.fire("scaytUserDictionaryActionError",n)})}},{type:"button",id:"restoreDic",label:t.getLocal("btn_restoreDic"),title:t.getLocal("btn_restoreDic"),onClick:function(){var t=this.getDialog(),n=e.scayt,a=r,i=t.getContentElement("dictionaries","dictionaryName").getValue();n.restoreUserDictionary(i,function(n){n.dialog=t,n.error||a.toggleDictionaryButtons.call(t,!0),n.command="restore",n.name=i,e.fire("scaytUserDictionaryAction",n)},function(n){n.dialog=t,n.command="restore",n.name=i,e.fire("scaytUserDictionaryActionError",n)})}}]},{type:"hbox",id:"existDic",align:"left",style:"width:auto;",widths:["50%","50%"],children:[{type:"button",id:"removeDic",label:t.getLocal("btn_deleteDic"),title:t.getLocal("btn_deleteDic"),onClick:function(){var t=this.getDialog(),n=e.scayt,a=r,i=t.getContentElement("dictionaries","dictionaryName"),o=i.getValue();n.removeUserDictionary(o,function(n){i.setValue(""),n.error||a.toggleDictionaryButtons.call(t,!1),n.dialog=t,n.command="remove",n.name=o,e.fire("scaytUserDictionaryAction",n)},function(n){n.dialog=t,n.command="remove",n.name=o,e.fire("scaytUserDictionaryActionError",n)})}},{type:"button",id:"renameDic",label:t.getLocal("btn_renameDic"),title:t.getLocal("btn_renameDic"),onClick:function(){var t=this.getDialog(),n=e.scayt,a=t.getContentElement("dictionaries","dictionaryName").getValue();n.renameUserDictionary(a,function(n){n.dialog=t,n.command="rename",n.name=a,e.fire("scaytUserDictionaryAction",n)},function(n){n.dialog=t,n.command="rename",n.name=a,e.fire("scaytUserDictionaryActionError",n)})}}]},{type:"html",id:"dicInfo",html:'<div id="dic_info_editor1" style="margin:5px auto; width:95%;white-space:normal;">'+t.getLocal("text_descriptionDic")+"</div>"}]}]},{id:"about",label:t.getLocal("tab_about"),elements:[{type:"html",id:"about",style:"margin: 5px 5px;",html:'<div><div id="scayt_about_">'+n+"</div></div>"}]}];e.on("scaytUserDictionaryAction",function(e){var t,n=SCAYT.prototype.UILib,a=e.data.dialog,i=a.getContentElement("dictionaries","dictionaryNote").getElement(),r=e.editor.scayt;void 0===e.data.error?(t=r.getLocal("message_success_"+e.data.command+"Dic"),t=t.replace("%s",e.data.name),i.setText(t),n.css(i.$,{color:"blue"})):(""===e.data.name?i.setText(r.getLocal("message_info_emptyDic")):(t=r.getLocal("message_error_"+e.data.command+"Dic"),t=t.replace("%s",e.data.name),i.setText(t)),n.css(i.$,{color:"red"}),null!=r.getUserDictionaryName()&&""!=r.getUserDictionaryName()?a.getContentElement("dictionaries","dictionaryName").setValue(r.getUserDictionaryName()):a.getContentElement("dictionaries","dictionaryName").setValue(""))}),e.on("scaytUserDictionaryActionError",function(e){var t,n=SCAYT.prototype.UILib,a=e.data.dialog,i=a.getContentElement("dictionaries","dictionaryNote").getElement(),r=e.editor.scayt;""===e.data.name?i.setText(r.getLocal("message_info_emptyDic")):(t=r.getLocal("message_error_"+e.data.command+"Dic"),t=t.replace("%s",e.data.name),i.setText(t)),n.css(i.$,{color:"red"}),null!=r.getUserDictionaryName()&&""!=r.getUserDictionaryName()?a.getContentElement("dictionaries","dictionaryName").setValue(r.getUserDictionaryName()):a.getContentElement("dictionaries","dictionaryName").setValue("")});var r={title:t.getLocal("text_title"),resizable:CKEDITOR.DIALOG_RESIZE_BOTH,minWidth:340,minHeight:260,onLoad:function(){if(0!=e.config.scayt_uiTabs[1]){var t=r,n=t.getLangBoxes.call(this);n.getParent().setStyle("white-space","normal"),t.renderLangList(n),this.definition.minWidth=this.getSize().width,this.resize(this.definition.minWidth,this.definition.minHeight)}},onCancel:function(){i.reset()},onHide:function(){e.unlockSelection()},onShow:function(){if(e.fire("scaytDialogShown",this),0!=e.config.scayt_uiTabs[2]){var t=e.scayt,n=this.getContentElement("dictionaries","dictionaryName"),a=this.getContentElement("dictionaries","existDic").getElement().getParent(),i=this.getContentElement("dictionaries","notExistDic").getElement().getParent();a.hide(),i.hide(),null!=t.getUserDictionaryName()&&""!=t.getUserDictionaryName()?(this.getContentElement("dictionaries","dictionaryName").setValue(t.getUserDictionaryName()),a.show()):(n.setValue(""),i.show())}},onOk:function(){var t=r,n=e.scayt;this.getContentElement("options","scaytOptions"),t=t.getChangedOption.call(this),n.commitOption({changedOptions:t})},toggleDictionaryButtons:function(e){var t=this.getContentElement("dictionaries","existDic").getElement().getParent(),n=this.getContentElement("dictionaries","notExistDic").getElement().getParent();e?(t.show(),n.hide()):(t.hide(),n.show())},getChangedOption:function(){var t={};if(1==e.config.scayt_uiTabs[0])for(var n=this.getContentElement("options","scaytOptions").getChild(),a=0;a<n.length;a++)n[a].isChanged()&&(t[n[a].id]=n[a].getValue());return i.isChanged()&&(t[i.id]=e.config.scayt_sLang=i.currentLang=i.newLang),t},buildRadioInputs:function(t,n){var a=new CKEDITOR.dom.element("div");CKEDITOR.document.createElement("div");var r="scaytLang_"+n,o=CKEDITOR.dom.element.createFromHtml('<input id="'+r+'" type="radio"  value="'+n+'" name="scayt_lang" />'),l=new CKEDITOR.dom.element("label"),s=e.scayt;return a.setStyles({"white-space":"normal",position:"relative","padding-bottom":"2px"}),o.on("click",function(e){i.newLang=e.sender.getValue()}),l.appendText(t),l.setAttribute("for",r),a.append(o),a.append(l),n===s.getLang()&&(o.setAttribute("checked",!0),o.setAttribute("defaultChecked","defaultChecked")),a},renderLangList:function(n){var a,i=n.find("#left-col-"+e.name).getItem(0),n=n.find("#right-col-"+e.name).getItem(0),r=t.getLangList(),o={},l=[],s=0;for(a in r.ltr)o[a]=r.ltr[a];for(a in r.rtl)o[a]=r.rtl[a];for(a in o)l.push([a,o[a]]);for(l.sort(function(e,t){var n=0;return e[1]>t[1]?n=1:e[1]<t[1]&&(n=-1),n}),o={},r=0;r<l.length;r++)o[l[r][0]]=l[r][1];l=Math.round(l.length/2);for(a in o)s++,this.buildRadioInputs(o[a],a).appendTo(l>=s?i:n)},getLangBoxes:function(){return this.getContentElement("langs","langBox").getElement()},contents:function(e,t){var n=[],a=t.config.scayt_uiTabs;if(!a)return e;for(var i in a)1==a[i]&&n.push(e[i]);return n.push(e[e.length-1]),n}(n,e)};return r});