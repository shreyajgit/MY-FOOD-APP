import React from "react";

class UserClass extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "default",
        avatar_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcaJXzC2Jg3_aLiPIcD-vRWiDM2y5eqjWd9g&s"
      },
    };

    console.log("Child Constructor");
  }

  async componentDidMount() {
    console.log("Child Component Did Mount");

    // API call
    const data = await fetch("https://api.github.com/users/shreyajgit");
    const json = await data.json();
    console.log(json);

    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate(){
    console.log("Component Did Update");
  }

  render() {
    console.log("Child Render");

    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <div className="user-info">
          <h2>Name: {name}</h2>
          <h3>Location: {location}</h3>
          <h4>Contact: @Shreya_j23</h4>
        </div>
        <img className="mypic" src={avatar_url} alt="User Avatar" />
      </div>
    );
  }
}

export default UserClass;
