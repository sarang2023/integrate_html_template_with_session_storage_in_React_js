import React from "react";
import axios from "axios";
class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tdata: [] };
  }
  componentDidMount() {
    var s = sessionStorage.getItem("uid");
    console.log('session', s);
    if (s === null) {
      window.location = "login";
    }
    axios.get("https://gorest.co.in/public/v2/users").then((res) => {
      this.setState({ tdata: res.data });
    });
  }
  render() {
    return(<>
    <section id="about">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-5 col-lg-4">
                    <img src="assets/imgs/about.jpg" alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, Creative studio Landing page" className="w-100 img-thumbnail mb-3"/>
                </div>
                <div className="col-md-7 col-lg-8">
                    <h6 className="section-subtitle mb-0">We Create</h6>
                    <h6 className="section-title mb-3">Awesome Work</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente cupiditate quas, amet harum perferendis minus, cum dolorum obcaecati iste aspernatur voluptatum aut.</p>
                    <p>Cum laudantium unde nemo doloribus eligendi quodarum ea vitae dicta. Accusantium vero, ea? Alias, atque libero. Id, ut harum. </p>
                    <p>consectetur adipisicing elit. Omnis quidem, quos iure a dolorum illum culpa quia nemo soluta, ratione harum beatae minus doloribus consectetur! Similique tempora sunt doloribus molestias.</p>
                </div>
            </div>
        </div>
    </section>

    <section class="has-bg-img py-md">
        <div class="container text-center">
            <h6 class="section-subtitle">We See</h6>
            <h6 class="section-title mb-6">What Other Don't See.</h6>
            <div class="widget mb-4">
                <div class="widget-item">
                    <i class="ti-notepad"></i>
                    <h4>Planning</h4>
                </div>
                <div class="widget-item">
                    <i class="ti-layout"></i>
                    <h4>Mockup</h4>
                </div>
                <div class="widget-item">
                    <i class="ti-filter"></i>
                    <h4>Develope</h4>
                </div>
                <div class="widget-item">
                    <i class="ti-thumb-up"></i>
                    <h4>Provide</h4>
                </div>
            </div>
        </div>
    </section>
    
    
    
    </>)
}
}
export default About;