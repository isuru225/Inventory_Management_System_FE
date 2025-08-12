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
    console.log("Siril");
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
      {visible && <CModal alignment="center" visible={visible} onClose={onCancel} className="custom-warning-modal">
        <CModalHeader className="custom-header">
          <CIcon icon={cilWarning} className="warning-icon" />
          <div className="header-text">LogOut?</div>
          <CIcon icon={cilX} className="close-icon" onClick={onCancel} />
        </CModalHeader>
        <CModalBody className="custom-body">
          Are you sure to logout from the system?
        </CModalBody>
        <CModalFooter className="custom-footer">
          <button className="btn-text" onClick={onCancel}>No</button>
          <CButton color="warning" onClick={logOut}>Yes</CButton>
        </CModalFooter>
      </CModal>
      }
    </>
  )
}

export default AppHeaderDropdown
