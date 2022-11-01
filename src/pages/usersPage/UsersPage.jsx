import React from "react";
import UsersList from "../../components/usersList/UsersList";
import ShowInfo from "../../components/showInfo/ShowInfo";

class UsersPage extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      users:[],
      userInfo: '',
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => this.setState({users:data}))
      .catch(error => console.error(error))
  }

  getUserInfo = e => {
    const id = e.target.dataset.id;
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => response.json())
      .then(data => this.setState({userInfo:data}))
      .catch(error => console.error(error))
  }

  render() {
    return(
      <div className='flex-evenly'>
        <UsersList
          users={this.state.users}
          getUserInfo={this.getUserInfo}/>

        {this.state.userInfo
            ?<ShowInfo userInfo={this.state.userInfo}/>
            :false}
      </div>
    )
  }
}

export default UsersPage;