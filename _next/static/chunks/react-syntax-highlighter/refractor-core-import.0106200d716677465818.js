(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5082,131,5008,7279,2496],{6588:function(e){"use strict";e.exports=JSON.parse('{"AElig":"\xc6","AMP":"&","Aacute":"\xc1","Acirc":"\xc2","Agrave":"\xc0","Aring":"\xc5","Atilde":"\xc3","Auml":"\xc4","COPY":"\xa9","Ccedil":"\xc7","ETH":"\xd0","Eacute":"\xc9","Ecirc":"\xca","Egrave":"\xc8","Euml":"\xcb","GT":">","Iacute":"\xcd","Icirc":"\xce","Igrave":"\xcc","Iuml":"\xcf","LT":"<","Ntilde":"\xd1","Oacute":"\xd3","Ocirc":"\xd4","Ograve":"\xd2","Oslash":"\xd8","Otilde":"\xd5","Ouml":"\xd6","QUOT":"\\"","REG":"\xae","THORN":"\xde","Uacute":"\xda","Ucirc":"\xdb","Ugrave":"\xd9","Uuml":"\xdc","Yacute":"\xdd","aacute":"\xe1","acirc":"\xe2","acute":"\xb4","aelig":"\xe6","agrave":"\xe0","amp":"&","aring":"\xe5","atilde":"\xe3","auml":"\xe4","brvbar":"\xa6","ccedil":"\xe7","cedil":"\xb8","cent":"\xa2","copy":"\xa9","curren":"\xa4","deg":"\xb0","divide":"\xf7","eacute":"\xe9","ecirc":"\xea","egrave":"\xe8","eth":"\xf0","euml":"\xeb","frac12":"\xbd","frac14":"\xbc","frac34":"\xbe","gt":">","iacute":"\xed","icirc":"\xee","iexcl":"\xa1","igrave":"\xec","iquest":"\xbf","iuml":"\xef","laquo":"\xab","lt":"<","macr":"\xaf","micro":"\xb5","middot":"\xb7","nbsp":"\xa0","not":"\xac","ntilde":"\xf1","oacute":"\xf3","ocirc":"\xf4","ograve":"\xf2","ordf":"\xaa","ordm":"\xba","oslash":"\xf8","otilde":"\xf5","ouml":"\xf6","para":"\xb6","plusmn":"\xb1","pound":"\xa3","quot":"\\"","raquo":"\xbb","reg":"\xae","sect":"\xa7","shy":"\xad","sup1":"\xb9","sup2":"\xb2","sup3":"\xb3","szlig":"\xdf","thorn":"\xfe","times":"\xd7","uacute":"\xfa","ucirc":"\xfb","ugrave":"\xf9","uml":"\xa8","uuml":"\xfc","yacute":"\xfd","yen":"\xa5","yuml":"\xff"}')},6852:function(e){"use strict";e.exports=JSON.parse('{"0":"\ufffd","128":"\u20ac","130":"\u201a","131":"\u0192","132":"\u201e","133":"\u2026","134":"\u2020","135":"\u2021","136":"\u02c6","137":"\u2030","138":"\u0160","139":"\u2039","140":"\u0152","142":"\u017d","145":"\u2018","146":"\u2019","147":"\u201c","148":"\u201d","149":"\u2022","150":"\u2013","151":"\u2014","152":"\u02dc","153":"\u2122","154":"\u0161","155":"\u203a","156":"\u0153","158":"\u017e","159":"\u0178"}')},6851:function(e,n){"use strict";n.Q=function(e){var n,t=[],a=String(e||""),r=a.indexOf(","),l=0,i=!1;for(;!i;)-1===r&&(r=a.length,i=!0),!(n=a.slice(l,r).trim())&&i||t.push(n),l=r+1,r=a.indexOf(",",l);return t}},8892:function(e){"use strict";e.exports=function(e,t){var a,r,l,i=e||"",o=t||"div",s={},u=0;for(;u<i.length;)n.lastIndex=u,l=n.exec(i),(a=i.slice(u,l?l.index:i.length))&&(r?"#"===r?s.id=a:s.className?s.className.push(a):s.className=[a]:o=a,u+=a.length),l&&(r=l[0],u++);return{type:"element",tagName:o,properties:s,children:[]}};var n=/[#.]/g},2502:function(e,n,t){"use strict";var a=t(9560),r=t(6632),l=t(8892),i=t(6582).Q,o=t(6851).Q;e.exports=function(e,n,t){var r=t?function(e){var n,t=e.length,a=-1,r={};for(;++a<t;)r[(n=e[a]).toLowerCase()]=n;return r}(t):null;return function(e,t){var a,i=l(e,n),o=Array.prototype.slice.call(arguments,2),p=i.tagName.toLowerCase();i.tagName=r&&s.call(r,p)?r[p]:p,t&&u(t,i)&&(o.unshift(t),t=null);if(t)for(a in t)g(i.properties,a,t[a]);c(i.children,o),"template"===i.tagName&&(i.content={type:"root",children:i.children},i.children=[]);return i};function g(n,t,r){var l,s,u;null!==r&&void 0!==r&&r===r&&(s=(l=a(e,t)).property,"string"===typeof(u=r)&&(l.spaceSeparated?u=i(u):l.commaSeparated?u=o(u):l.commaOrSpaceSeparated&&(u=i(o(u).join(" ")))),"style"===s&&"string"!==typeof r&&(u=function(e){var n,t=[];for(n in e)t.push([n,e[n]].join(": "));return t.join("; ")}(u)),"className"===s&&n.className&&(u=n.className.concat(u)),n[s]=function(e,n,t){var a,r,l;if("object"!==typeof t||!("length"in t))return p(e,n,t);r=t.length,a=-1,l=[];for(;++a<r;)l[a]=p(e,n,t[a]);return l}(l,s,u))}};var s={}.hasOwnProperty;function u(e,n){return"string"===typeof e||"length"in e||function(e,n){var t=n.type;if("input"===e||!t||"string"!==typeof t)return!1;if("object"===typeof n.children&&"length"in n.children)return!0;if(t=t.toLowerCase(),"button"===e)return"menu"!==t&&"submit"!==t&&"reset"!==t&&"button"!==t;return"value"in n}(n.tagName,e)}function c(e,n){var t,a;if("string"!==typeof n&&"number"!==typeof n)if("object"===typeof n&&"length"in n)for(t=-1,a=n.length;++t<a;)c(e,n[t]);else{if("object"!==typeof n||!("type"in n))throw new Error("Expected node, nodes, or string, got `"+n+"`");e.push(n)}else e.push({type:"text",value:String(n)})}function p(e,n,t){var a=t;return e.number||e.positiveNumber?isNaN(a)||""===a||(a=Number(a)):(e.boolean||e.overloadedBoolean)&&("string"!==typeof a||""!==a&&r(t)!==r(n)||(a=!0)),a}},2579:function(e,n,t){"use strict";var a=t(7247),r=t(2502)(a,"div");r.displayName="html",e.exports=r},1742:function(e,n,t){"use strict";e.exports=t(2579)},6260:function(e){"use strict";e.exports=function(e){var n="string"===typeof e?e.charCodeAt(0):e;return n>=97&&n<=122||n>=65&&n<=90}},7961:function(e,n,t){"use strict";var a=t(6260),r=t(6195);e.exports=function(e){return a(e)||r(e)}},6195:function(e){"use strict";e.exports=function(e){var n="string"===typeof e?e.charCodeAt(0):e;return n>=48&&n<=57}},9480:function(e){"use strict";e.exports=function(e){var n="string"===typeof e?e.charCodeAt(0):e;return n>=97&&n<=102||n>=65&&n<=70||n>=48&&n<=57}},9435:function(e){"use strict";var n;e.exports=function(e){var t,a="&"+e+";";if((n=n||document.createElement("i")).innerHTML=a,59===(t=n.textContent).charCodeAt(t.length-1)&&"semi"!==e)return!1;return t!==a&&t}},7574:function(e,n,t){"use strict";var a=t(6588),r=t(6852),l=t(6195),i=t(9480),o=t(7961),s=t(9435);e.exports=function(e,n){var t,l,i={};n||(n={});for(l in g)t=n[l],i[l]=null===t||void 0===t?g[l]:t;(i.position.indent||i.position.start)&&(i.indent=i.position.indent||[],i.position=i.position.start);return function(e,n){var t,l,i,g,w,k,A,F,S,C,P,E,O,L,N,j,$,M,T,D=n.additional,_=n.nonTerminated,I=n.text,z=n.reference,R=n.warning,B=n.textContext,U=n.referenceContext,H=n.warningContext,q=n.position,W=n.indent||[],Z=e.length,V=0,K=-1,G=q.column||1,Q=q.line||1,J="",Y=[];"string"===typeof D&&(D=D.charCodeAt(0));j=X(),F=R?ee:p,V--,Z++;for(;++V<Z;)if(10===w&&(G=W[K]||1),38===(w=e.charCodeAt(V))){if(9===(A=e.charCodeAt(V+1))||10===A||12===A||32===A||38===A||60===A||A!==A||D&&A===D){J+=c(w),G++;continue}for(E=O=V+1,T=O,35===A?(T=++E,88===(A=e.charCodeAt(T))||120===A?(L=f,T=++E):L=m):L=d,t="",P="",g="",N=v[L],T--;++T<Z&&N(A=e.charCodeAt(T));)g+=c(A),L===d&&u.call(a,g)&&(t=g,P=a[g]);(i=59===e.charCodeAt(T))&&(T++,(l=L===d&&s(g))&&(t=g,P=l)),M=1+T-O,(i||_)&&(g?L===d?(i&&!P?F(5,1):(t!==g&&(M=1+(T=E+t.length)-E,i=!1),i||(S=t?1:3,n.attribute?61===(A=e.charCodeAt(T))?(F(S,M),P=null):o(A)?P=null:F(S,M):F(S,M))),k=P):(i||F(2,M),b(k=parseInt(g,h[L]))?(F(7,M),k=c(65533)):k in r?(F(6,M),k=r[k]):(C="",x(k)&&F(6,M),k>65535&&(C+=c((k-=65536)>>>10|55296),k=56320|1023&k),k=C+c(k))):L!==d&&F(4,M)),k?(ne(),j=X(),V=T-1,G+=T-O+1,Y.push(k),($=X()).offset++,z&&z.call(U,k,{start:j,end:$},e.slice(O-1,T)),j=$):(g=e.slice(O-1,T),J+=g,G+=g.length,V=T-1)}else 10===w&&(Q++,K++,G=0),w===w?(J+=c(w),G++):ne();return Y.join("");function X(){return{line:Q,column:G,offset:V+(q.offset||0)}}function ee(e,n){var t=X();t.column+=n,t.offset+=n,R.call(H,y[e],t,e)}function ne(){J&&(Y.push(J),I&&I.call(B,J,{start:j,end:X()}),J="")}}(e,i)};var u={}.hasOwnProperty,c=String.fromCharCode,p=Function.prototype,g={warning:null,reference:null,text:null,warningContext:null,referenceContext:null,textContext:null,position:{},additional:null,attribute:!1,nonTerminated:!0},d="named",f="hexadecimal",m="decimal",h={hexadecimal:16,decimal:10},v={};v.named=o,v[m]=l,v[f]=i;var y={};function b(e){return e>=55296&&e<=57343||e>1114111}function x(e){return e>=1&&e<=8||11===e||e>=13&&e<=31||e>=127&&e<=159||e>=64976&&e<=65007||65535===(65535&e)||65534===(65535&e)}y[1]="Named character references must be terminated by a semicolon",y[2]="Numeric character references must be terminated by a semicolon",y[3]="Named character references cannot be empty",y[4]="Numeric character references cannot be empty",y[5]="Named character references must be known",y[6]="Numeric character references cannot be disallowed",y[7]="Numeric character references cannot be outside the permissible Unicode range"},9560:function(e,n,t){"use strict";var a=t(6632),r=t(8805),l=t(7643),i="data";e.exports=function(e,n){var t=a(n),g=n,d=l;if(t in e.normal)return e.property[e.normal[t]];t.length>4&&t.slice(0,4)===i&&o.test(n)&&("-"===n.charAt(4)?g=function(e){var n=e.slice(5).replace(s,p);return i+n.charAt(0).toUpperCase()+n.slice(1)}(n):n=function(e){var n=e.slice(4);if(s.test(n))return e;"-"!==(n=n.replace(u,c)).charAt(0)&&(n="-"+n);return i+n}(n),d=r);return new d(g,n)};var o=/^data[-\w.:]+$/i,s=/-[a-z]/g,u=/[A-Z]/g;function c(e){return"-"+e.toLowerCase()}function p(e){return e.charAt(1).toUpperCase()}},7247:function(e,n,t){"use strict";var a=t(9940),r=t(8289),l=t(5812),i=t(4397),o=t(7716),s=t(1805);e.exports=a([l,r,i,o,s])},7716:function(e,n,t){"use strict";var a=t(7e3),r=t(7596),l=a.booleanish,i=a.number,o=a.spaceSeparated;e.exports=r({transform:function(e,n){return"role"===n?n:"aria-"+n.slice(4).toLowerCase()},properties:{ariaActiveDescendant:null,ariaAtomic:l,ariaAutoComplete:null,ariaBusy:l,ariaChecked:l,ariaColCount:i,ariaColIndex:i,ariaColSpan:i,ariaControls:o,ariaCurrent:null,ariaDescribedBy:o,ariaDetails:null,ariaDisabled:l,ariaDropEffect:o,ariaErrorMessage:null,ariaExpanded:l,ariaFlowTo:o,ariaGrabbed:l,ariaHasPopup:null,ariaHidden:l,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:o,ariaLevel:i,ariaLive:null,ariaModal:l,ariaMultiLine:l,ariaMultiSelectable:l,ariaOrientation:null,ariaOwns:o,ariaPlaceholder:null,ariaPosInSet:i,ariaPressed:l,ariaReadOnly:l,ariaRelevant:null,ariaRequired:l,ariaRoleDescription:o,ariaRowCount:i,ariaRowIndex:i,ariaRowSpan:i,ariaSelected:l,ariaSetSize:i,ariaSort:null,ariaValueMax:i,ariaValueMin:i,ariaValueNow:i,ariaValueText:null,role:null}})},1805:function(e,n,t){"use strict";var a=t(7e3),r=t(7596),l=t(855),i=a.boolean,o=a.overloadedBoolean,s=a.booleanish,u=a.number,c=a.spaceSeparated,p=a.commaSeparated;e.exports=r({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:l,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:p,acceptCharset:c,accessKey:c,action:null,allow:null,allowFullScreen:i,allowPaymentRequest:i,allowUserMedia:i,alt:null,as:null,async:i,autoCapitalize:null,autoComplete:c,autoFocus:i,autoPlay:i,capture:i,charSet:null,checked:i,cite:null,className:c,cols:u,colSpan:null,content:null,contentEditable:s,controls:i,controlsList:c,coords:u|p,crossOrigin:null,data:null,dateTime:null,decoding:null,default:i,defer:i,dir:null,dirName:null,disabled:i,download:o,draggable:s,encType:null,enterKeyHint:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:i,formTarget:null,headers:c,height:u,hidden:i,high:u,href:null,hrefLang:null,htmlFor:c,httpEquiv:c,id:null,imageSizes:null,imageSrcSet:p,inputMode:null,integrity:null,is:null,isMap:i,itemId:null,itemProp:c,itemRef:c,itemScope:i,itemType:c,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:i,low:u,manifest:null,max:null,maxLength:u,media:null,method:null,min:null,minLength:u,multiple:i,muted:i,name:null,nonce:null,noModule:i,noValidate:i,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforePrint:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextMenu:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:i,optimum:u,pattern:null,ping:c,placeholder:null,playsInline:i,poster:null,preload:null,readOnly:i,referrerPolicy:null,rel:c,required:i,reversed:i,rows:u,rowSpan:u,sandbox:c,scope:null,scoped:i,seamless:i,selected:i,shape:null,size:u,sizes:null,slot:null,span:u,spellCheck:s,src:null,srcDoc:null,srcLang:null,srcSet:p,start:u,step:null,style:null,tabIndex:u,target:null,title:null,translate:null,type:null,typeMustMatch:i,useMap:null,value:s,width:u,wrap:null,align:null,aLink:null,archive:c,axis:null,background:null,bgColor:null,border:u,borderColor:null,bottomMargin:u,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:i,declare:i,event:null,face:null,frame:null,frameBorder:null,hSpace:u,leftMargin:u,link:null,longDesc:null,lowSrc:null,marginHeight:u,marginWidth:u,noResize:i,noHref:i,noShade:i,noWrap:i,object:null,profile:null,prompt:null,rev:null,rightMargin:u,rules:null,scheme:null,scrolling:s,standby:null,summary:null,text:null,topMargin:u,valueType:null,version:null,vAlign:null,vLink:null,vSpace:u,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:i,disableRemotePlayback:i,prefix:null,property:null,results:u,security:null,unselectable:null}})},855:function(e,n,t){"use strict";var a=t(8740);e.exports=function(e,n){return a(e,n.toLowerCase())}},8740:function(e){"use strict";e.exports=function(e,n){return n in e?e[n]:n}},7596:function(e,n,t){"use strict";var a=t(6632),r=t(9607),l=t(8805);e.exports=function(e){var n,t,i=e.space,o=e.mustUseProperty||[],s=e.attributes||{},u=e.properties,c=e.transform,p={},g={};for(n in u)t=new l(n,c(s,n),u[n],i),-1!==o.indexOf(n)&&(t.mustUseProperty=!0),p[n]=t,g[a(n)]=n,g[a(t.attribute)]=n;return new r(p,g,i)}},8805:function(e,n,t){"use strict";var a=t(7643),r=t(7e3);e.exports=o,o.prototype=new a,o.prototype.defined=!0;var l=["boolean","booleanish","overloadedBoolean","number","commaSeparated","spaceSeparated","commaOrSpaceSeparated"],i=l.length;function o(e,n,t,o){var u,c=-1;for(s(this,"space",o),a.call(this,e,n);++c<i;)s(this,u=l[c],(t&r[u])===r[u])}function s(e,n,t){t&&(e[n]=t)}},7643:function(e){"use strict";e.exports=t;var n=t.prototype;function t(e,n){this.property=e,this.attribute=n}n.space=null,n.attribute=null,n.property=null,n.boolean=!1,n.booleanish=!1,n.overloadedBoolean=!1,n.number=!1,n.commaSeparated=!1,n.spaceSeparated=!1,n.commaOrSpaceSeparated=!1,n.mustUseProperty=!1,n.defined=!1},9940:function(e,n,t){"use strict";var a=t(7529),r=t(9607);e.exports=function(e){var n,t,l=e.length,i=[],o=[],s=-1;for(;++s<l;)n=e[s],i.push(n.property),o.push(n.normal),t=n.space;return new r(a.apply(null,i),a.apply(null,o),t)}},9607:function(e){"use strict";e.exports=t;var n=t.prototype;function t(e,n,t){this.property=e,this.normal=n,t&&(this.space=t)}n.space=null,n.normal={},n.property={}},7e3:function(e,n){"use strict";var t=0;function a(){return Math.pow(2,++t)}n.boolean=a(),n.booleanish=a(),n.overloadedBoolean=a(),n.number=a(),n.spaceSeparated=a(),n.commaSeparated=a(),n.commaOrSpaceSeparated=a()},8289:function(e,n,t){"use strict";var a=t(7596);e.exports=a({space:"xlink",transform:function(e,n){return"xlink:"+n.slice(5).toLowerCase()},properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}})},5812:function(e,n,t){"use strict";var a=t(7596);e.exports=a({space:"xml",transform:function(e,n){return"xml:"+n.slice(3).toLowerCase()},properties:{xmlLang:null,xmlBase:null,xmlSpace:null}})},4397:function(e,n,t){"use strict";var a=t(7596),r=t(855);e.exports=a({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:r,properties:{xmlns:null,xmlnsXLink:null}})},6632:function(e){"use strict";e.exports=function(e){return e.toLowerCase()}},1215:function(e,n,t){"use strict";var a="object"===typeof globalThis?globalThis:"object"===typeof self?self:"object"===typeof window?window:"object"===typeof t.g?t.g:{},r=function(){var e="Prism"in a,n=e?a.Prism:void 0;return function(){e?a.Prism=n:delete a.Prism;e=void 0,n=void 0}}();a.Prism={manual:!0,disableWorkerMessageHandler:!0};var l=t(1742),i=t(7574),o=t(9216),s=t(2717),u=t(2049),c=t(9726),p=t(6155);r();var g={}.hasOwnProperty;function d(){}d.prototype=o;var f=new d;function m(e){if("function"!==typeof e||!e.displayName)throw new Error("Expected `function` for `grammar`, got `"+e+"`");void 0===f.languages[e.displayName]&&e(f)}e.exports=f,f.highlight=function(e,n){var t,a=o.highlight;if("string"!==typeof e)throw new Error("Expected `string` for `value`, got `"+e+"`");if("Object"===f.util.type(n))t=n,n=null;else{if("string"!==typeof n)throw new Error("Expected `string` for `name`, got `"+n+"`");if(!g.call(f.languages,n))throw new Error("Unknown language: `"+n+"` is not registered");t=f.languages[n]}return a.call(this,e,t,n)},f.register=m,f.alias=function(e,n){var t,a,r,l,i=f.languages,o=e;n&&((o={})[e]=n);for(t in o)for(a=o[t],r=(a="string"===typeof a?[a]:a).length,l=-1;++l<r;)i[a[l]]=i[t]},f.registered=function(e){if("string"!==typeof e)throw new Error("Expected `string` for `language`, got `"+e+"`");return g.call(f.languages,e)},f.listLanguages=function(){var e,n=f.languages,t=[];for(e in n)g.call(n,e)&&"object"===typeof n[e]&&t.push(e);return t},m(s),m(u),m(c),m(p),f.util.encode=function(e){return e},f.Token.stringify=function(e,n,t){var a;if("string"===typeof e)return{type:"text",value:e};if("Array"===f.util.type(e))return function(e,n){var t,a=[],r=e.length,l=-1;for(;++l<r;)""!==(t=e[l])&&null!==t&&void 0!==t&&a.push(t);l=-1,r=a.length;for(;++l<r;)t=a[l],a[l]=f.Token.stringify(t,n,a);return a}(e,n);a={type:e.type,content:f.Token.stringify(e.content,n,t),tag:"span",classes:["token",e.type],attributes:{},language:n,parent:t},e.alias&&(a.classes=a.classes.concat(e.alias));return f.hooks.run("wrap",a),l(a.tag+"."+a.classes.join("."),function(e){var n;for(n in e)e[n]=i(e[n]);return e}(a.attributes),a.content)}},9726:function(e){"use strict";function n(e){e.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/}}e.exports=n,n.displayName="clike",n.aliases=[]},2049:function(e){"use strict";function n(e){!function(e){var n=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+n.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+n.source+"$"),alias:"url"}}},selector:RegExp("[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|"+n.source+")*(?=\\s*\\{)"),string:{pattern:n,greedy:!0},property:/(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,important:/!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var t=e.languages.markup;t&&(t.tag.addInlined("style","css"),e.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/(^|["'\s])style\s*=\s*(?:"[^"]*"|'[^']*')/i,lookbehind:!0,inside:{"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{style:{pattern:/(["'])[\s\S]+(?=["']$)/,lookbehind:!0,alias:"language-css",inside:e.languages.css},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},"attr-name":/^style/i}}},t.tag))}(e)}e.exports=n,n.displayName="css",n.aliases=[]},6155:function(e){"use strict";function n(e){e.languages.javascript=e.languages.extend("clike",{"class-name":[e.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|(?:get|set)(?=\s*[\[$\w\xA0-\uFFFF])|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),e.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,e.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:e.languages.regex},"regex-flags":/[a-z]+$/,"regex-delimiter":/^\/|\/$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:e.languages.javascript},{pattern:/(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,inside:e.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:e.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:e.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),e.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:e.languages.javascript}},string:/[\s\S]+/}}}),e.languages.markup&&e.languages.markup.tag.addInlined("script","javascript"),e.languages.js=e.languages.javascript}e.exports=n,n.displayName="javascript",n.aliases=["js"]},2717:function(e){"use strict";function n(e){e.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/,name:/[^\s<>'"]+/}},cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},e.languages.markup.tag.inside["attr-value"].inside.entity=e.languages.markup.entity,e.languages.markup.doctype.inside["internal-subset"].inside=e.languages.markup,e.hooks.add("wrap",(function(e){"entity"===e.type&&(e.attributes.title=e.content.value.replace(/&amp;/,"&"))})),Object.defineProperty(e.languages.markup.tag,"addInlined",{value:function(n,t){var a={};a["language-"+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:e.languages[t]},a.cdata=/^<!\[CDATA\[|\]\]>$/i;var r={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:a}};r["language-"+t]={pattern:/[\s\S]+/,inside:e.languages[t]};var l={};l[n]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,(function(){return n})),"i"),lookbehind:!0,greedy:!0,inside:r},e.languages.insertBefore("markup","cdata",l)}}),e.languages.html=e.languages.markup,e.languages.mathml=e.languages.markup,e.languages.svg=e.languages.markup,e.languages.xml=e.languages.extend("markup",{}),e.languages.ssml=e.languages.xml,e.languages.atom=e.languages.xml,e.languages.rss=e.languages.xml}e.exports=n,n.displayName="markup",n.aliases=["html","mathml","svg","xml","ssml","atom","rss"]},9216:function(e,n,t){var a=function(e){var n=/\blang(?:uage)?-([\w-]+)\b/i,t=0,a={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function e(n){return n instanceof r?new r(n.type,e(n.content),n.alias):Array.isArray(n)?n.map(e):n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function e(n,t){var r,l;switch(t=t||{},a.util.type(n)){case"Object":if(l=a.util.objId(n),t[l])return t[l];for(var i in r={},t[l]=r,n)n.hasOwnProperty(i)&&(r[i]=e(n[i],t));return r;case"Array":return l=a.util.objId(n),t[l]?t[l]:(r=[],t[l]=r,n.forEach((function(n,a){r[a]=e(n,t)})),r);default:return n}},getLanguage:function(e){for(;e&&!n.test(e.className);)e=e.parentElement;return e?(e.className.match(n)||[,"none"])[1].toLowerCase():"none"},currentScript:function(){if("undefined"===typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(a){var e=(/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(a.stack)||[])[1];if(e){var n=document.getElementsByTagName("script");for(var t in n)if(n[t].src==e)return n[t]}return null}},isActive:function(e,n,t){for(var a="no-"+n;e;){var r=e.classList;if(r.contains(n))return!0;if(r.contains(a))return!1;e=e.parentElement}return!!t}},languages:{extend:function(e,n){var t=a.util.clone(a.languages[e]);for(var r in n)t[r]=n[r];return t},insertBefore:function(e,n,t,r){var l=(r=r||a.languages)[e],i={};for(var o in l)if(l.hasOwnProperty(o)){if(o==n)for(var s in t)t.hasOwnProperty(s)&&(i[s]=t[s]);t.hasOwnProperty(o)||(i[o]=l[o])}var u=r[e];return r[e]=i,a.languages.DFS(a.languages,(function(n,t){t===u&&n!=e&&(this[n]=i)})),i},DFS:function e(n,t,r,l){l=l||{};var i=a.util.objId;for(var o in n)if(n.hasOwnProperty(o)){t.call(n,o,n[o],r||o);var s=n[o],u=a.util.type(s);"Object"!==u||l[i(s)]?"Array"!==u||l[i(s)]||(l[i(s)]=!0,e(s,t,o,l)):(l[i(s)]=!0,e(s,t,null,l))}}},plugins:{},highlightAll:function(e,n){a.highlightAllUnder(document,e,n)},highlightAllUnder:function(e,n,t){var r={callback:t,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",r),r.elements=Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)),a.hooks.run("before-all-elements-highlight",r);for(var l,i=0;l=r.elements[i++];)a.highlightElement(l,!0===n,r.callback)},highlightElement:function(t,r,l){var i=a.util.getLanguage(t),o=a.languages[i];t.className=t.className.replace(n,"").replace(/\s+/g," ")+" language-"+i;var s=t.parentElement;s&&"pre"===s.nodeName.toLowerCase()&&(s.className=s.className.replace(n,"").replace(/\s+/g," ")+" language-"+i);var u={element:t,language:i,grammar:o,code:t.textContent};function c(e){u.highlightedCode=e,a.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,a.hooks.run("after-highlight",u),a.hooks.run("complete",u),l&&l.call(u.element)}if(a.hooks.run("before-sanity-check",u),!u.code)return a.hooks.run("complete",u),void(l&&l.call(u.element));if(a.hooks.run("before-highlight",u),u.grammar)if(r&&e.Worker){var p=new Worker(a.filename);p.onmessage=function(e){c(e.data)},p.postMessage(JSON.stringify({language:u.language,code:u.code,immediateClose:!0}))}else c(a.highlight(u.code,u.grammar,u.language));else c(a.util.encode(u.code))},highlight:function(e,n,t){var l={code:e,grammar:n,language:t};return a.hooks.run("before-tokenize",l),l.tokens=a.tokenize(l.code,l.grammar),a.hooks.run("after-tokenize",l),r.stringify(a.util.encode(l.tokens),l.language)},tokenize:function(e,n){var t=n.rest;if(t){for(var a in t)n[a]=t[a];delete n.rest}var r=new o;return s(r,r.head,e),i(e,r,n,r.head,0),function(e){var n=[],t=e.head.next;for(;t!==e.tail;)n.push(t.value),t=t.next;return n}(r)},hooks:{all:{},add:function(e,n){var t=a.hooks.all;t[e]=t[e]||[],t[e].push(n)},run:function(e,n){var t=a.hooks.all[e];if(t&&t.length)for(var r,l=0;r=t[l++];)r(n)}},Token:r};function r(e,n,t,a){this.type=e,this.content=n,this.alias=t,this.length=0|(a||"").length}function l(e,n,t,a){e.lastIndex=n;var r=e.exec(t);if(r&&a&&r[1]){var l=r[1].length;r.index+=l,r[0]=r[0].slice(l)}return r}function i(e,n,t,o,c,p){for(var g in t)if(t.hasOwnProperty(g)&&t[g]){var d=t[g];d=Array.isArray(d)?d:[d];for(var f=0;f<d.length;++f){if(p&&p.cause==g+","+f)return;var m=d[f],h=m.inside,v=!!m.lookbehind,y=!!m.greedy,b=m.alias;if(y&&!m.pattern.global){var x=m.pattern.toString().match(/[imsuy]*$/)[0];m.pattern=RegExp(m.pattern.source,x+"g")}for(var w=m.pattern||m,k=o.next,A=c;k!==n.tail&&!(p&&A>=p.reach);A+=k.value.length,k=k.next){var F=k.value;if(n.length>e.length)return;if(!(F instanceof r)){var S,C=1;if(y){if(!(S=l(w,A,e,v)))break;var P=S.index,E=S.index+S[0].length,O=A;for(O+=k.value.length;P>=O;)O+=(k=k.next).value.length;if(A=O-=k.value.length,k.value instanceof r)continue;for(var L=k;L!==n.tail&&(O<E||"string"===typeof L.value);L=L.next)C++,O+=L.value.length;C--,F=e.slice(A,O),S.index-=A}else if(!(S=l(w,0,F,v)))continue;P=S.index;var N=S[0],j=F.slice(0,P),$=F.slice(P+N.length),M=A+F.length;p&&M>p.reach&&(p.reach=M);var T=k.prev;j&&(T=s(n,T,j),A+=j.length),u(n,T,C),k=s(n,T,new r(g,h?a.tokenize(N,h):N,b,N)),$&&s(n,k,$),C>1&&i(e,n,t,k.prev,A,{cause:g+","+f,reach:M})}}}}}function o(){var e={value:null,prev:null,next:null},n={value:null,prev:e,next:null};e.next=n,this.head=e,this.tail=n,this.length=0}function s(e,n,t){var a=n.next,r={value:t,prev:n,next:a};return n.next=r,a.prev=r,e.length++,r}function u(e,n,t){for(var a=n.next,r=0;r<t&&a!==e.tail;r++)a=a.next;n.next=a,a.prev=n,e.length-=r}if(e.Prism=a,r.stringify=function e(n,t){if("string"==typeof n)return n;if(Array.isArray(n)){var r="";return n.forEach((function(n){r+=e(n,t)})),r}var l={type:n.type,content:e(n.content,t),tag:"span",classes:["token",n.type],attributes:{},language:t},i=n.alias;i&&(Array.isArray(i)?Array.prototype.push.apply(l.classes,i):l.classes.push(i)),a.hooks.run("wrap",l);var o="";for(var s in l.attributes)o+=" "+s+'="'+(l.attributes[s]||"").replace(/"/g,"&quot;")+'"';return"<"+l.tag+' class="'+l.classes.join(" ")+'"'+o+">"+l.content+"</"+l.tag+">"},!e.document)return e.addEventListener?(a.disableWorkerMessageHandler||e.addEventListener("message",(function(n){var t=JSON.parse(n.data),r=t.language,l=t.code,i=t.immediateClose;e.postMessage(a.highlight(l,a.languages[r],r)),i&&e.close()}),!1),a):a;var c=a.util.currentScript();function p(){a.manual||a.highlightAll()}if(c&&(a.filename=c.src,c.hasAttribute("data-manual")&&(a.manual=!0)),!a.manual){var g=document.readyState;"loading"===g||"interactive"===g&&c&&c.defer?document.addEventListener("DOMContentLoaded",p):window.requestAnimationFrame?window.requestAnimationFrame(p):window.setTimeout(p,16)}return a}("undefined"!==typeof window?window:"undefined"!==typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});e.exports&&(e.exports=a),"undefined"!==typeof t.g&&(t.g.Prism=a)},6582:function(e,n){"use strict";n.Q=function(e){var n=String(e||"").trim();return""===n?[]:n.split(t)};var t=/[ \t\n\r\f]+/g},7529:function(e){e.exports=function(){for(var e={},t=0;t<arguments.length;t++){var a=arguments[t];for(var r in a)n.call(a,r)&&(e[r]=a[r])}return e};var n=Object.prototype.hasOwnProperty}}]);