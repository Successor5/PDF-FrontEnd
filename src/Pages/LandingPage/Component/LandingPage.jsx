import React from "react";
import "../Style/LandingPageStyle.css"

export const LandingPage=()=>{
    return(
        <>
        <div className="LandingPageMainContainer">
            <div className="LandingPageTopNav">
                <div className="LandingPageLogoBox">
                </div>
                <div className="LandingPageTopNavLeft">
                <div className="TopNavLeft">Solutions</div>
                <div className="TopNavLeft">Products</div>
                <div className="TopNavLeft">Pricing</div>
                </div>
                <div className="LandingPageTopNavRight">
                <div className="TopNavRight">Search</div>
                <div className="TopNavRight">Login</div>
                <div className="TopNavRightButton">Join for free  {'\u27A1'} {'\u27A1'}</div>
                </div>
                
            </div>
            
            <div className="LandingPageFirst">
                <div className="LandingPageFirstFlex">
                    <div className="LandingPageFullBigText">
               <div className="LandingPageFirstBigText"> Educative Accelerates<br></br> Developer Productivity</div>
              <div className="LandingPageFirstSmallText"> Explore over 600 courses on: Programming | Cloud <br></br> Computing | Data Science | Machine Learning</div>
                <div className="LandingPageFirstSmallBlueButton">Explore Courses</div>
                Join 1.9 Million developers working in companies like
                <div className="company">
                <a href="https://www.netflix.com/ng/" className="Netflix">    </a>
                <a href="https://about.meta.com/" className="meta">  </a>
                <a href="https://www.apple.com/ng/" className="Apple">    </a>
                <a href="https://www.google.com/" className="Google">    </a>
                <a href="https://www.amazon.com/" className="amazon">    </a>
                </div>
                </div>
                </div>

                <div className="LandingPageSecondFlex"></div>

            </div>
            <div className="LandingPageSecond">
            <div className="LandingPageSecondFirstFlex">
            <div className="LandingPageSecondFullBigText">
            interactive
            <div className="LandingPageSecondBigText">
            Hands-on coding<br></br> environments
            </div>
            You don’t get better at swimming by watching others.<br></br> Coding is no different. Practice as you learn with live <br></br>code environments inside your browser.
            <div className="LandingPageEmojiFlex">
                <div className="LandingPageFirstEmoji">
                    <div className="BlueCode">
                    &lt;/&gt;
                    </div>
                    <div>
                    Hands-on Projects: Build<br></br> Real World Applications
                    </div>
                </div>

                <div className="LandingPageSecondEmoji">
                Run Live Applications In Your Browser 
                </div>
            </div>
            </div>
            </div>
            <div className="LandingPageSecondSecondFlex">
            </div>

            </div>
        </div>
        </>
    );
}