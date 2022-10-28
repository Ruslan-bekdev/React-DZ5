import React from "react";
import List from "../../components/list/List";

class PortfolioPage extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      works:[],
    }
  }

  render() {
    const get = () => {
      this.setState({works: ['Work1','Work2']})
    }

    return (
      <>
        <button onClick={get}>get</button>
        <List array={this.state.works}/>
      </>
    );
  }
}

export default PortfolioPage;