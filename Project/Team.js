import React from "react";
import axios from "axios";
class Team extends React.Component {
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



     <section id="team">
        <div className="container">
            <h6 className="section-subtitle text-center">Meet With</h6>
            <h6 className="section-title mb-5 text-center">Our Angels</h6>
            <div className="row">
                <div className="col-sm-6 col-md-4">
                    <div className="card text-center mb-4">
                        <img className="card-img-top inset" src="assets/imgs/avatar.jpg"/>
                        <div className="card-body">
                            <h6 className="small text-primary font-weight-bold">FOUNDER</h6>
                            <h5 className="card-title">Matthew Davis</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni quos esse tenetur illo qui, nostrum.</p>
                            <div className="socials">
                                <a href="javascript:void(0)"><i className="ti-facebook"></i> </a>
                                <a href="javascript:void(0)"><i className="ti-github"></i></a>
                                <a href="javascript:void(0)"><i className="ti-dropbox"></i></a>
                                <a href="javascript:void(0)"><i className="ti-twitter"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-4">
                    <div className="card text-center mb-4">
                        <img className="card-img-top inset" src="assets/imgs/avatar-1.jpg"/>
                        <div className="card-body">
                            <h6 className="small text-primary font-weight-bold">CEO</h6>
                            <h5 className="card-title">Barbara Ross</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni quos esse tenetur illo qui, nostrum.</p>
                            <div className="socials">
                                <a href="javascript:void(0)"><i className="ti-facebook"></i> </a>
                                <a href="javascript:void(0)"><i className="ti-github"></i></a>
                                <a href="javascript:void(0)"><i className="ti-dropbox"></i></a>
                                <a href="javascript:void(0)"><i className="ti-twitter"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-4">
                    <div className="card text-center mb-4">
                        <img className="card-img-top inset" src="assets/imgs/avatar-2.jpg"/>
                        <div className="card-body">
                            <h6 className="small text-primary font-weight-bold">Designer</h6>
                            <h5 className="card-title">Karen Perry</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni quos esse tenetur illo qui, nostrum.</p>
                            <div className="socials">
                                <a href="javascript:void(0)"><i className="ti-facebook"></i> </a>
                                <a href="javascript:void(0)"><i className="ti-github"></i></a>
                                <a href="javascript:void(0)"><i className="ti-dropbox"></i></a>
                                <a href="javascript:void(0)"><i className="ti-twitter"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-4">
                    <div className="card text-center mb-4">
                        <img className="card-img-top inset" src="assets/imgs/avatar-3.jpg"/>
                        <div className="card-body">
                            <h6 className="small text-primary font-weight-bold">App Designer</h6>
                            <h5 className="card-title">Ashley Diaz</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni quos esse tenetur illo qui, nostrum.</p>
                            <div className="socials">
                                <a href="javascript:void(0)"><i className="ti-facebook"></i> </a>
                                <a href="javascript:void(0)"><i className="ti-github"></i></a>
                                <a href="javascript:void(0)"><i className="ti-dropbox"></i></a>
                                <a href="javascript:void(0)"><i className="ti-twitter"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-4">
                    <div className="card text-center mb-4">
                        <img className="card-img-top inset" src="assets/imgs/avatar-4.jpg"/>
                        <div className="card-body">
                            <h6 className="small text-primary font-weight-bold">Developer</h6>
                            <h5 className="card-title">Edward Harris</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni quos esse tenetur illo qui, nostrum.</p>
                            <div className="socials">
                                <a href="javascript:void(0)"><i className="ti-facebook"></i> </a>
                                <a href="javascript:void(0)"><i className="ti-github"></i></a>
                                <a href="javascript:void(0)"><i className="ti-dropbox"></i></a>
                                <a href="javascript:void(0)"><i className="ti-twitter"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-4">
                    <div className="card text-center mb-4">
                        <img className="card-img-top inset" src="assets/imgs/avatar-5.jpg"/>
                        <div className="card-body">
                            <h6 className="small text-primary font-weight-bold">photographer</h6>
                            <h5 className="card-title">Brian Scott</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni quos esse tenetur illo qui, nostrum.</p>
                            <div className="socials">
                                <a href="javascript:void(0)"><i className="ti-facebook"></i> </a>
                                <a href="javascript:void(0)"><i className="ti-github"></i></a>
                                <a href="javascript:void(0)"><i className="ti-dropbox"></i></a>
                                <a href="javascript:void(0)"><i className="ti-twitter"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>



    <section className="has-bg-img bg-img-2">
        <div className="container text-center">
            <h6 className="section-subtitle">We Are Awesome</h6>
            <h6 className="section-title mb-6">Some Fun Fucts</h6>
                <div className="widget-2">
                    <div className="widget-item">
                        <i className="ti-cup"></i>
                        <h6 className="title">100+</h6>
                        <div className="subtitle">Awards Won</div>
                    </div>
                    <div className="widget-item">
                        <i className="ti-face-smile"></i>
                        <h6 className="title">100+</h6>
                        <div className="subtitle">Happy Clients</div>
                    </div>
                    <div className="widget-item">
                        <i className="ti-blackboard"></i>
                        <h6 className="title">845+</h6>
                        <div className="subtitle">Project Completed</div>
                    </div>
                    <div className="widget-item">
                        <i className="ti-comments-smiley"></i>
                        <h6 className="title">15K+</h6>
                        <div className="subtitle">Comments</div>
                    </div>
                </div>
        </div>
    </section>
    
    </>)
}
}
export default Team;