import React from "react";

class Hello extends React.Component {
  render () {
    return <div>Hello {this.props.firstName} {this.props.lastName}! How are you ?</div>;
  }
}

export default Hello;
