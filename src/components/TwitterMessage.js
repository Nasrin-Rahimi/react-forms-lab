import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      message: ""
    };
  }

  handleChange = (event) => { 
    this.setState({  
        message: event.target.value
     })
  }

  render() {
    let charNumber = this.props.maxChars - this.state.message.length;
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message"
         value={this.state.message} 
         onChange={event => this.handleChange(event)} 
        /><br />
        The remaining characters: {charNumber}
      </div>
    );
  }
}

export default TwitterMessage;
