import axios from "axios";
import React from "react";
export default class Dashboard extends React.Component {
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
        <center>
          <div>
            <h1 style={{ color: "blue" }}>
              Welcome {sessionStorage.getItem("uid")}
            </h1>
            <table border={1}>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Gender</th>
                <th>Status</th>
              </tr>
              {this.state.tdata.map((s, i) => (
                <tr key={i}>
                  <td>{s.id}</td>
                  <td>{s.name}</td>
                  <td>{s.email}</td>
                  <td>{s.gender}</td>
                  <td>{s.status}</td>
                </tr>
              ))}
            </table>
          </div>
        </center>
      </>
    );
  }
}
