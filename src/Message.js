import React, { Component } from 'react';

class Message extends Component {
    render() {
        return (
            <div className={this.props.isInfo}>
              {this.props.children}
            </div>
        );
    }
}

export default Message;