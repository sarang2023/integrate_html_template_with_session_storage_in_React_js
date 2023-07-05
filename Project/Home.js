import React from "react";
import axios from "axios";
class Home extends React.Component {
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
    return (
      <>
        <div class="box text-center">
          <div class="box-item">
            <i class="ti-vector"></i>
            <h6 class="box-title">UX/UI Design</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
              excepturi, repellat esse laborum explicabo quia.
            </p>
          </div>
          <div class="box-item">
            <i class="ti-filter"></i>
            <h6 class="box-title">Web Development</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
              excepturi, repellat esse laborum explicabo quia.
            </p>
          </div>
          <div class="box-item">
            <i class="ti-mobile"></i>
            <h6 class="box-title">App Design</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
              excepturi, repellat esse laborum explicabo quia.
            </p>
          </div>
        </div>
      </>
    );
  }
}
export default Home;
