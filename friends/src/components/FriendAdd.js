import React from 'react';
import { axiosWithAuth } from "../util/axiosWithAuth";

class FriendAdd extends React.Component {
    state = {
        friend: {
          id: "",
          name: "",
          age: "",
          email: ""
        }
      };
    
      handleChange = (e) => {
        this.setState({
          friend: {
            ...this.state.friend,
            [e.target.name]: e.target.value
          }
        });
      };

      submitHandler=e=>{
        e.preventDefault();
        axiosWithAuth().post('/api/friends')
        this.setState({
            id: "",
          name: "",
          age: "",
          email: ""
     });
    };
    render() {
        return (
          <div>
            <form onSubmit={this.submitHandler}>
              {
                <input
                type="id"
                name="id"
                placeholder="id"
                value={this.state.friend.id}
                onChange={this.handleChange}
              /> }
              <input
                type="name"
                name="name"
                placeholder="name"
                value={this.state.friend.name}
                onChange={this.handleChange}
              />
               <input
                type="age"
                name="age"
                placeholder="age"
               value={this.state.friend.age}
               onChange={this.handleChange}
              />
                <input
                type="email"
                name="email"
                placeholder="email"
               value={this.state.friend.email}
               onChange={this.handleChange}
              />
              <button>Add Friend</button>
             
            </form>
          </div>

        );
      }
}
 
export default FriendAdd;