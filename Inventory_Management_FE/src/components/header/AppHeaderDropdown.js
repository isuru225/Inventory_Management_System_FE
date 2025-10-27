import React, { useState } from 'react';

import {
  CModal,
  CModalHeader,
  CModalFooter,
  CModalTitle,
  CModalBody,
  CAvatar,
  CButton,
  CDropdown,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react';

import {
  cilAccountLogout,
  cilBellExclamation,
  cilUser,
  cilX,
  cilWarning
} from '@coreui/icons';

import CIcon from '@coreui/icons-react';
import { modalInfo } from './Constants/constants.ts';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LoginActions } from '../../actions/Login/Login.ts';
import { HomeActions } from '../../actions/Home/Home.ts';
import { JWTDecoder } from '../../GlobalFunctions/Functions.tsx';


const AppHeaderDropdown = ({ logoutHandler }) => {

  const [visible, setVisible] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userLogOutHandler = () => {
    
    setVisible(true);
  }

  const logOut = () => {
    localStorage.removeItem('token');
    setVisible(false);
    dispatch({ type: 'LOG_OUT_USER', payload: {} });
    //dispatch(HomeActions.cleanTokenData.clear(null))
    logoutHandler();
    navigate('/login');
  }

  const bookingHistoryHandler = () => {
    navigate('/booking-history');
  }

  const userProfileHandler = () => {
    navigate('/user-profile');
  }

  const onCancel = () => {
    setVisible(false)
  }

  const avatarNameHandler = () => {
    const encodedValue = localStorage.getItem('token');
    if (encodedValue !== null) {
      const decodedPayload = JWTDecoder(encodedValue);
      const { fullName } = decodedPayload;
      const nameSegments = fullName.split(" ");
      return nameSegments[0][0].toUpperCase() + nameSegments[1][0].toUpperCase();
    }
  }

  return (
    <>
      <CDropdown variant="nav-item">
        <CDropdownToggle placement="bottom-end" className="py-0 pe-0" caret={false}>
          <CAvatar size="md" >
            {avatarNameHandler()}
          </CAvatar>
        </CDropdownToggle>
        <CDropdownMenu className="pt-0" placement="bottom-end">
          <CDropdownHeader className="bg-body-secondary fw-semibold my-2">User Info</CDropdownHeader>
          <CDropdownItem onClick={userProfileHandler} component="button"
            type="button">
            <CIcon icon={cilUser} className="me-2" />
            Profile
          </CDropdownItem>
          {/* <CDropdownItem onClick={bookingHistoryHandler} component="button"
            type="button">
            <CIcon icon={cilHistory} className="me-2" />
            Booking History
          </CDropdownItem> */}
          <CDropdownItem onClick={userLogOutHandler} component="button"
            type="button">
            <CIcon icon={cilAccountLogout} className="me-2" />
            Logout
          </CDropdownItem>
        </CDropdownMenu>
      </CDropdown>
      {visible && <CModal alignment="center" visible={visible} onClose={onCancel} className="logout-confirmation-modal">
      <CModalHeader className="modal-header-logout" closeButton>
        {/* 'closeButton' prop handles the X icon and closure. No need for custom CIcon and onClick */}
        <div className="header-text">Log Out</div>
      </CModalHeader>
      
      <CModalBody className="modal-body-logout">
        You will need to log back in to access your account. Are you sure you want to log out?
      </CModalBody>
      
      <CModalFooter className="modal-footer-logout">
        {/* Secondary action: Cancel. Typically a neutral or 'ghost' button. */}
        <CButton color="secondary" onClick={onCancel}>
          Cancel
        </CButton>
        
        {/* Primary action: Log Out. Use 'danger' to visually signal a final action. */}
        <CButton color="danger" onClick={logOut}>
          Log Out
        </CButton>
      </CModalFooter>
    </CModal>
      }
    </>
  )
}

export default AppHeaderDropdown
