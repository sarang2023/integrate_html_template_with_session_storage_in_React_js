import React from "react";
import axios from "axios";
class Portfolio extends React.Component {
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
    
    <section id="portfolio">
        <div className="container text-center">
            <h6 className="section-subtitle">Our Awesome Works</h6>
            <h6 className="section-title mb-5">Our Portfolio</h6>
            <div className="row">
                <div className="col-sm-4">
                    <div className="img-wrapper">
                        <img src="assets/imgs/folio-1.jpg" alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, Creative studio Landing page"/>
                        <div className="overlay">
                            <div className="overlay-infos">
                                <h5>Project Title</h5>
                                <a href="javascript:void(0)"><i className="ti-zoom-in"></i></a>
                                <a href="javascript:void(0)"><i className="ti-link"></i></a>
                            </div>  
                        </div>
                    </div>
                    <div className="img-wrapper">
                        <img src="assets/imgs/folio-2.jpg" alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, Creative studio Landing page"/>
                        <div className="overlay">
                            <div className="overlay-infos">
                                <h5>Project Title</h5>
                                <a href="javascript:void(0)"><i className="ti-zoom-in"></i></a>
                                <a href="javascript:void(0)"><i className="ti-link"></i></a>
                            </div>                              
                        </div>
                    </div>                  
                </div>
                <div className="col-sm-4">
                    <div className="img-wrapper">
                        <img src="assets/imgs/folio-3.jpg" alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, Creative studio Landing page"/>
                        <div className="overlay">
                            <div className="overlay-infos">
                                <h5>Project Title</h5>
                                <a href="javascript:void(0)"><i className="ti-zoom-in"></i></a>
                                <a href="javascript:void(0)"><i className="ti-link"></i></a>
                            </div>  
                        </div>
                    </div>
                    <div className="img-wrapper">
                        <img src="assets/imgs/folio-4.jpg" alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, Creative studio Landing page"/>
                        <div className="overlay">
                            <div className="overlay-infos">
                                <h5>Project Title</h5>
                                <a href="javascript:void(0)"><i className="ti-zoom-in"></i></a>
                                <a href="javascript:void(0)"><i className="ti-link"></i></a>
                            </div>                              
                        </div>
                    </div>                  
                </div>
                <div className="col-sm-4">
                    <div className="img-wrapper">
                        <img src="assets/imgs/folio-5.jpg" alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, Creative studio Landing page"/>
                        <div className="overlay">
                            <div className="overlay-infos">
                                <h5>Project Title</h5>
                                <a href="javascript:void(0)"><i className="ti-zoom-in"></i></a>
                                <a href="javascript:void(0)"><i className="ti-link"></i></a>
                            </div>  
                        </div>
                    </div>
                    <div className="img-wrapper">
                        <img src="assets/imgs/folio-6.jpg" alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, Creative studio Landing page"/>
                        <div className="overlay">
                            <div className="overlay-infos">
                                <h5>Project Title</h5>
                                <a href="javascript:void(0)"><i className="ti-zoom-in"></i></a>
                                <a href="javascript:void(0)"><i className="ti-link"></i></a>
                            </div>                              
                        </div>
                    </div>                  
                </div>
            </div>
        </div>
    </section>


    
    
    
    </>)
  } 
}
export default Portfolio;