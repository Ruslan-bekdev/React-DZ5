import React from "react";

class ContactPage extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    }
  }

  render() {
    const saveValue = (event) => {
      const value = event.target.value;
      this.setState({value: value.trim()});
    }
    const clearValue = () => {
      document.querySelector('input').value = '';
    }
    const addValue = () => {
      console.log(this.state.value);
      clearValue();
    }
    return(
      <>
        <input onChange={saveValue} type="text"/>
        <button onClick={addValue} className='btn'>add</button>
        <button onClick={clearValue} className='btn'>clear</button>
      </>
    )
  }
}

export default ContactPage;