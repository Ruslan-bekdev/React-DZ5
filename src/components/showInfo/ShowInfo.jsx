const ShowInfo = ({userInfo}) => {
  return(
    <ul>
      <li>id: {userInfo.id}</li>
      <li>name: {userInfo.name}</li>
      <li>username: {userInfo.username}</li>
      <li>email: {userInfo.email}</li>
      <li>phone: {userInfo.phone}</li>
      <li>website: {userInfo.website}</li>
    </ul>
  )
}

export default ShowInfo;