// IT IS A CLASS BASED COMPONENT

// import User from "./User";
import UserClass from "./UserClass";
import {Component} from "react";
import UserContext from "../utils/UserContext";

class About extends Component{

constructor(props) {
      super(props);

      console.log("Parent Constructor")
    }

    componentDidMount(){
      console.log("Parent Component Did Mount");

      

    };

  render () {
    console.log("Parent Render")
    return (
      <div>
        <h1>About</h1>
        <div>
          LoggedIn User
          <UserContext.Consumer>
            {/* using as jsx */}
            {({loggedInUser})=>(<h1 className="text-xl font-bold">{loggedInUser}</h1>)}
          </UserContext.Consumer>
        </div>
        <h2>Shreya Jain</h2>
  
       
        <UserClass name={"Shreya Jain"} location={"Noida "} />
      </div>
    );
  };
}

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>Shreya Jain</h2>

//       {/* Functional Component */}
//       {/* <User name={"SJ (function)"} /> */}


//       {/* Class Based Component */}
//       <UserClass name={"Shreya Jain"} location={"Noida "} />
//     </div>
//   );
// };

export default About;
