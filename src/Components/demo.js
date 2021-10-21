// import React, { Component } from 'react';
// import axios from 'axios';

// class Demo extends Component {
//     constructor() {
//         super ()
//         this.state = {
//             data: []
//         }
//     }

//     componentDidMount(){
//         axios.get("http://jsonplaceholder.typicode.com/users").then(data => {
//             this.setState({data:data})
//         })
//     }
     
//     render() {

//         var list_of_users = this.state.data.data.map(user => {
//                             console.log(this.state.data)
//                             return (<tr key={user.id}>
//                                     <td>{user.name}</td>
//                                     <td>{user.username}</td>
//                                     <td>{user.email}</td>
//                                     <td>{user.address}</td>
//                             </tr>)
//                     })

//         return(<React.Fragment>
//             {/* {console.log(this.state.data.data)} */}
//             <table style={{width:'60%'}} className='table'>
//              <thead className="thead-light">
//                  <tr>
//                          <th>Name</th>
//                          <th>UserName</th>
//                          <th>EmailId</th>
//                          <th>Address</th>
//                  </tr>
//              </thead>
//              <tbody>
//                  {this.state.data.data.length > 0 ? list_of_users : null}
                     
//             </tbody>
//         </table>
//         </React.Fragment>)
//     }
// }

// export default Demo;

import React, { Component } from "react";
import axios from "axios";
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import { getUserDetails } from '../reducer/userDetails';
import { UserDetails } from '../action/index'

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: ""
    };
  }
  
  componentDidMount() {
    this.props.GetUserDetails();
  }
  
//   fetchEmployees() {
//     axios
//       .get("http://jsonplaceholder.typicode.com/users")
//       .then(response => {
//         this.setState({
//           result: response.data,
//           error: ""
//         });
//       });
//   }
  render() {

    return (
      <div>
        {console.log(this.props.userDetails.userDetails)}
        <div className="row">
          <div className="col-8 offset-2">
            <h3>Employee Data:</h3>
            <br />
            <Table list={this.props.userDetails.userDetails} />
          </div>
        </div>
      </div>
    );
  }
}
const Table = ({ list }) => (
  <table className="table table-striped">
    <thead>
      <tr>
        <th>Employee Id</th>
        <th>Employee Name</th>
        <th>Age</th>
        <th>Employee Achievement</th>
        <th>Employee Salary</th>
      </tr>
    </thead>
    <tbody>
      {list.map(item => (
        <tr key={item.id}>
          <td>
            <span>{item.name}</span>
          </td>
          <td>
            <span>{item.username}</span>
          </td>
          <td>
            <span>{item.email}</span>
          </td>
          <td>
            <span>{item.achievements}</span>
          </td>
          <td>
            <span>{item.salary}</span>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

const mapStateToProps = (state) => {
    console.log("In demo", state)
    return {
      userDetails: getUserDetails(state)
    }
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      GetUserDetails: () => dispatch(UserDetails())
    }
  };
  
  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Demo));
