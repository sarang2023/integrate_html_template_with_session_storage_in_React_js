import React from "react";
import axios from "axios";
class Service extends React.Component {
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
     <section id="service">
        <div className="container">
            <h6 className="section-subtitle text-center">Makes Happen</h6>
            <h5 className="section-title text-center mb-6">Our Service</h5> 
            <div className="row">
                <div className="col-sm-4 col-md-3">
                    <div className="card mb-4">
                        <div className="card-body">
                            <h2 className="mb-4"><i className="ti-filter text-primary"></i></h2>
                            <h6 className="card-title">corporis assumenda</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis amet saepe et!</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4 col-md-3">
                    <div className="card mb-4">
                        <div className="card-body">
                            <h2 className="mb-4"><i className="ti-paint-roller text-primary"></i></h2>
                            <h6 className="card-title">Debitis amet</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis amet saepe et!</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4 col-md-3">
                    <div className="card mb-4">
                        <div className="card-body">
                            <h2 className="mb-4"><i className="ti-ruler-pencil text-primary"></i></h2>
                            <h6 className="card-title">Libero temporibus</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis amet saepe et!</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4 col-md-3">
                    <div className="card mb-4">
                        <div className="card-body">
                            <h2 className="mb-4"><i className="ti-layers text-primary"></i></h2>
                            <h6 className="card-title">Perspiciatis explicabo</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis amet saepe et!</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4 col-md-3">
                    <div className="card mb-4">
                        <div className="card-body">
                            <h2 className="mb-4"><i className="ti-bolt text-primary"></i></h2>
                            <h6 className="card-title">Poluptatum</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis amet saepe et!</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4 col-md-3">
                    <div className="card mb-4">
                        <div className="card-body">
                            <h2 className="mb-4"><i className="ti-palette text-primary"></i></h2>
                            <h6 className="card-title">Nihil dicta</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis amet saepe et!</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4 col-md-3">
                    <div className="card mb-4">
                        <div className="card-body">
                            <h2 className="mb-4"><i className="ti-stats-up text-primary"></i></h2>
                            <h6 className="card-title">Repellendus maxime</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis amet saepe et!</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4 col-md-3">
                    <div className="card mb-4">
                        <div className="card-body">
                            <h2 className="mb-4"><i className="ti-location-arrow text-primary"></i></h2>
                            <h6 className="card-title">Sint vitae</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis amet saepe et!</p>
                        </div>
                    </div>
                </div>

            </div>  
        </div>
    </section>
    
    
    
    </>)
}
    }
export default Service;