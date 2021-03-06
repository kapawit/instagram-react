import React, {Component} from "react";
import MessageContainer from "../component/MessageContainer";
import ContactContainer from "../component/ContactContainer";
import '../assets/css/DirectMessage.css';

class DirectMessage extends Component { 

  render() {
    return (
        <div className="content-wrapper">
            <div className="message-box">
                <div className="contact-list">
                    <div className="account-list">
                        <div className="account-switch">
                            <h2>Kapaw.it</h2>
                            <button/>
                        </div>
                        <button className="icon-write"/>
                    </div>
                    <div className="menu-tab">
                        <button className="active">PRIMARY</button>
                        <button>GENERAL</button>
                    </div>
                    <ContactContainer/>  
                </div>
                <MessageContainer/>
            </div>
        </div>
    );
  }
}
export default DirectMessage;