import React from "react";

class AboutUs extends React.Component{
    constructor(props) {
      super(props);

      this.state = {
        status: true,
      }
    }

    render() {
      const setStatus = () => {
        this.state.status
          ?this.setState({status:false})
          :this.setState({status:true})
      }

      return(
        <>
          <button onClick={setStatus} className='btn'>hide/show<br/>text</button>
          {
            this.state.status ?<p>text</p> : false
          }
        </>
      )
    }
}

export default AboutUs;