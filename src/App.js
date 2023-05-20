import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React, { Component } from "react";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
  faYoutube,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
  faYoutube,
  faPinterest
);

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentYear: new Date().getFullYear(),
    };
  }
  render() {
    return (
      <>
        <div id="container">
          <div id="header">
            <nav>
              <img src="./Logoretinklogo.png" className="App-logo" alt="logo" />
            </nav>
          </div>
          <div id="wrapper">
            <div id="content">
              <h2 className="text-top">
                Get Advance AI <br />+ Expert Created
                <span className="spn">Logos</span>{" "}
              </h2>
              <img
                src="./Retink-avatar (1) 1mainlogo.png"
                className="avatar"
                alt="avatar"
              ></img>
            </div>
            <p className="p-top">
              Boost your sales <span className="spn">10x faster</span> with
              content customized by our <br />
              unique partnership of{" "}
              <span className="spn">creativity and AI optimization human</span>
            </p>
            <div id="article">
              <h3 className="text-h3 mg">EXPLAINER VIDEO</h3>
              <img
                src="./Screenshot 2021-10-24 at 14.53 1.png"
                className="screen"
                alt=""
              ></img>
              <div id="group">
                <div className="row1">
                  <div id="card">
                    <img
                      src="./artificial-intelligence-svgrepo-com 1brain.svg"
                      className="dei"
                      alt=""
                    ></img>
                    <h4>MakeAI-assisted Content Choices</h4>
                    <p>
                      Access and Order from an extensive catalogue in any
                      language and on your budgets terms. If unsure, our AI
                      guides you to the best.
                    </p>
                  </div>
                  <div id="card">
                    <img src="./Groupbrand.png" className="dei" alt=""></img>
                    <h4>upload and maintain your brand identity</h4>
                    <p>
                      Add your preferences and brand assets to ensure the
                      contents is consistent with your brand identity. No brand
                      asset? We can make for you!
                    </p>
                  </div>
                  <div id="card">
                    <img src="./Vector.svg" className="dei" alt=""></img>
                    <h4> </h4>
                    <p>
                      Your details are translated and sent to the AI, FP, or
                      both (per your choice) as you relax and receive continuous
                      updates.
                    </p>
                  </div>
                </div>
                <div className="row2">
                  <div id="card" className="item1">
                    <img
                      src="./direct-customer-svgrepo-com 1.png"
                      className="dei"
                      alt=""
                    ></img>
                    <h4>Receive and Review</h4>
                    <p>
                      The finished content is delivered and you can make
                      corrections that we will effect to satisfy your
                      requirements.
                    </p>
                  </div>
                  <div id="card" className="item2">
                    <img src="./Vectorpublish.svg" className="dei" alt=""></img>
                    <h4>Publish and Monitor your contents progress</h4>
                    <p>
                      The finished content is delivered and you can make
                      corrections that we will effect to satisfy your
                      requirements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div id="section">
              <div>
                <h4 className="text-h3">Transform your Creation Process</h4>
                <p className="align">
                  {" "}
                  with a new approach to ordering content, you can now stop
                  juggling multiple <br /> document and meeting and start
                  publishing content faster and on demand
                </p>
              </div>
              <div>
                <h4 className="text-h3">
                  Activate your buiness groth with Retink Content
                </h4>
                <p className="align">
                  Save time and maintain your brand identity within your budget
                  range or <br />
                  sign up for affordable plans and still access multiple content
                  services like:
                </p>
              </div>
            </div>
            <div id="section-c">
              <div className="last">
                <div className="item">
                  <div>
                    <img
                      src="./unsplash_niUkImZcSP8.svg"
                      className="image"
                      alt=""
                    ></img>
                  </div>
                  <p className="style">Logo</p>
                  <p>
                    {" "}
                    Have a unique & creative logo designed to express and
                    represent your brand identity.
                  </p>
                </div>
                <div className="item">
                  <div>
                    <img
                      src="./unsplash_HOrhCnQsxnQ.png"
                      className="image"
                      alt=""
                    ></img>
                  </div>
                  <p className="style">Blog writting</p>
                  <p>
                    {" "}
                    Write SEO enriched blog posts as long or short articles on
                    any topic of your choice .
                  </p>
                </div>
                <div className="item">
                  <div>
                    <img
                      src="./unsplash_I6wCDYW6ij8.jpg"
                      className="image"
                      alt=""
                    ></img>
                  </div>
                  <p className="style">Animated Videos</p>
                  <p>
                    {" "}
                    Bring animated characters to life to keep your viewers
                    engaged and entertained.
                  </p>
                </div>
              </div>
              <div className="last">
                <div className="item">
                  <div>
                    <img
                      src="./unsplash_6TeIOdNnMaM.png"
                      className="image"
                      alt=""
                    ></img>
                  </div>
                  <p className="style">Product Demo</p>
                  <p>
                    {" "}
                    Introduce your product to potential customers in a clear and
                    creative video.
                  </p>
                </div>
                <div className="item">
                  <div>
                    <img
                      src="./unsplash_MrWOCGKFVDg.png"
                      className="image"
                      alt=""
                    ></img>
                  </div>
                  <p className="style">Copywriting</p>
                  <p>
                    {" "}
                    Have creative and compelling copies written to boost your
                    product, brand, service or company.
                  </p>
                </div>
                <div className="item">
                  <div>
                    <img
                      src="./unsplash_QRKJwE6yfJo.png"
                      className="image"
                      alt=""
                    ></img>
                  </div>
                  <p className="style">Social Media Ads</p>
                  <p>
                    {" "}
                    Boost sales and awareness with tailor made ads from experts.
                  </p>
                </div>
              </div>
            </div>
            <div id="last section">
              <div>
                <h3 className="text-h3">Sign Up For The BETA To See More</h3>
              </div>
              <div className="form align">
                <form>
                  <input
                    type="text"
                    id="bname"
                    name="bname"
                    placeholder="buisness name"
                    defaultValue=""
                    // onChange={(e) => setSearchString(e.target.value)}
                  ></input>
                  <input
                    type="text"
                    id="ename"
                    name="ename"
                    placeholder="Email Name"
                    defaultValue=""
                    // onChange={(e) => setSearchString(e.target.value)}
                  ></input>
                  <br />

                  <input
                    className="button"
                    type="submit"
                    value="Notify me"
                  ></input>
                </form>

                <div className="lin">
                  <a className="link" href="https://retink.io/fap/">
                    sign up as a freelance partner
                  </a>
                </div>
              </div>
            </div>
            <footer>
              <div>
                <img
                  src="./Logoretinklogo.png"
                  className="App-logo pd"
                  alt=""
                ></img>
                <div className="sub">
                  <ul>
                    <li>Product by Retink Media UG</li>
                    <li>Bonn, Germany</li>
                  </ul>
                  <ul>
                    <li>Get Early Acess</li>
                    <li>Provide Feedback</li>
                  </ul>
                  <ul>
                    <li>connect with us</li>
                    <div>
                      <FontAwesomeIcon
                        className="font"
                        icon={faInstagram}
                        style={{ color: "#ff0a0a" }}
                      />
                      <FontAwesomeIcon
                        className="font"
                        icon={faTwitter}
                        style={{ color: "#005eff" }}
                      />
                      <FontAwesomeIcon
                        className="font"
                        icon={faYoutube}
                        style={{ color: "#ff0000" }}
                      />
                      <FontAwesomeIcon
                        className="font"
                        icon={faPinterest}
                        style={{ color: "#c11f1f" }}
                      />
                      <FontAwesomeIcon
                        className="font"
                        icon={faLinkedin}
                        style={{ color: "#1561e5" }}
                      />
                      <FontAwesomeIcon
                        className="font"
                        icon={faFacebook}
                        style={{ color: "#0c5be4" }}
                      />
                    </div>
                  </ul>
                </div>
                <div className="c-section">
                  <div>
                    {" "}
                    copyright &copy; <em>{this.state.currentYear}</em>
                    Retink
                  </div>
                  <div className="inline">
                    <p>privacy policy</p>
                    <p>Terms of Service</p>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </>
    );
  }
}

export default App;
