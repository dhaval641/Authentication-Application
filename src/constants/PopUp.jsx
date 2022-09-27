import React from 'react';
import Modal from 'react-modal';
import useCredStore from '../stores/useCredStore.js';

export const PopUp = () => {
  let subtitle; 
  const [
    isUpdatePassword, 
    setUpdatePassword,
    setErrorDetails,
    errorDetails,
  ] = useCredStore((state) => [
    state.isUpdatePassword,
    state.setUpdatePassword,
    state.setErrorDetails,
    state.errorDetails,
  ]);

  const closeModal = () => {
    setErrorDetails("");
    setUpdatePassword(false);
  }
  const onEditPassword = event => {
    event.preventDefault();
    const oldPass = (new FormData(event.target).get("oldPass"));
    const newPass = (new FormData(event.target).get("newPass"));
    const confirmPass = (new FormData(event.target).get("cPass"));
    if(newPass.length < 8){
        setErrorDetails("Password must be atleast 8 character long");
    }
    else if((!newPass.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=])/))) {
        setErrorDetails("Password must contain atleast one capital letter and one number and one special Character");
    }
    else if(newPass != confirmPass){
        setErrorDetails("New password does not match confirm password");
    }
    else if(confirmPass == newPass && oldPass == oldPass) {

        setUpdatePassword(false);
    }
  }

  return (
    <div>
      <Modal
        isOpen={isUpdatePassword}
        onRequestClose={!isUpdatePassword}
        contentLabel="Example Modal"
        className={"popup-modal"}
      >
        <div className='modal-header'>
            <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Change Password</h2>
            <button className='modal-close-button' onClick={closeModal}>x</button>
        </div>
        <form className='modal-form' onSubmit={onEditPassword}>
          <input type="password" name="oldPass" placeholder='Enter Old Password...' required/>
          <input type="password" name="newPass" placeholder='Enter New Password...' required/>
          <input type="password" name="cPass" placeholder='Confirm Password...' required/>
          <div className='error'>{errorDetails}</div>
          <button type="submit" className='modal-button'>Update Password</button>
        </form>
      </Modal>
    </div>
  );
}

export default PopUp;