import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      maxChars: props.maxChars ,
      message: ""
    };
  }

  handleChange = (event) => {
    const newMessage = event.target.value
    this.setState(
     {
        maxChars: this.props.maxChars - newMessage.length,
        message: newMessage
     }
    )
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message"
         value={this.state.message} 
         onChange={event => this.handleChange(event)} 
        /><br />
        The remaining characters: {this.state.maxChars}
      </div>
    );
  }
}

export default TwitterMessage;
