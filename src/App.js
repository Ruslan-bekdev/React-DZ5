import './App.css';
import User1 from "./components/user1/User1";
import User2 from "./components/user2/User2";
import MessageButton from "./components/mesageButton/MessageButton";

const App = () => {
  const user = {name: "Anna", age: 19}
  return(
    <div className="App">
      <User1 user={user}/>
      <User2 user={user}/>
      <MessageButton message='Hello world'/>
    </div>
  );
}

export default App;