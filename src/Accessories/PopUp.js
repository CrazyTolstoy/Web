import React, { Component, useState } from 'react';
import Modal from 'react-awesome-modal';

class PopUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      firstName: this.props.user.firstName,
      lastName: this.props.user.lastName,
      email: this.props.user.email
    };
  }

  openModal() {
    this.setState({
      visible: true
    });
  }

  closeModal() {
    this.setState({
      visible: false
    });
  }

  handleFirstNameChange(event) {
    this.setState({ firstName: event.target.value });
  }

  handleLastNameChange(event) {
    this.setState({ lastName: event.target.value });
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  handleSave() {
    const { user } = this.props;
    const updatedUser = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email
    };
    
    // Call the updateUser function with the userId and the updated user information
    this.props.updateUser(user.id, updatedUser);
    
    this.closeModal();
  }

  render() {
   
    const { user } = this.props;
    return (
      <section>
        <input type="button" value="Edit" onClick={() => this.openModal()} />
        <Modal
          visible={this.state.visible}
          width="320"
          height="450"
          effect="fadeInUp"
          onClickAway={() => this.closeModal()}
          className="modal"
         
        >
          <div className='popup'>
            <h1>Izmenite podatke</h1>
            <div className="input-container ic1">
              <input
                id="firstname"
                className="input"
                type="text"
                placeholder=" "
                value={this.state.firstName}
                onChange={(event) => this.handleFirstNameChange(event)}
              />

              <div className="cut"></div>

              <label htmlFor="firstname" className="placeholder">
                First name
              </label>
            </div>

            <div className="input-container ic2">
              <input
                id="lastname"
                className="input"
                type="text"
                placeholder=" "
                value={this.state.lastName}
                onChange={(event) => this.handleLastNameChange(event)}
              />

              <div className="cut"></div>

              <label htmlFor="lastname" className="placeholder">
                Last name
              </label>
            </div>

            <div className="input-container ic2">
              <input
                id="email"
                className="input"
                type="text"
                placeholder=" "
                value={this.state.email}
                onChange={(event) => this.handleEmailChange(event)}
              />

              <div className="cut cut-short"></div>

              <label htmlFor="email" className="placeholder">
                Email
              </label>
            </div>
            <br/>
            <button className='dugme' onClick={() => this.handleSave()}>Save</button>
            <br />
            
            <button className='dugme' onClick={() => this.closeModal()}>Close</button>
            
          </div>
        </Modal>
      </section>
    );
  }
}
export default PopUp;