import React from "react"
import { axiosWithAuth } from "../util/axiosWithAuth";


class Friends extends React.Component {
    state = {
      friends:[]
    };
componentDidMount (){
    this.friendsList();
}

   friendsList =()=>{
    axiosWithAuth()
    .get ('api/friends')
       .then(res=>{
           this.setState({friends:res.data})
           console.log(res.data)
       })
       .catch(err=> console.log(err))

     }

     render() {
        return (
          <div>
            <h1>Friends</h1>
            
          { this.state.friends.map((item)=>
        <div className="friends"key={item.id}>
            <p >Id:{item.id}</p>
           <p >Name:{item.name}</p>
           <p>Age:{item.age}</p>
           <p>Email:{item.email}</p>
           <button className="delete">Delete Friend</button>
       </div>
          )
          }
           
          </div>
        );
      }
    
}

export default Friends;
