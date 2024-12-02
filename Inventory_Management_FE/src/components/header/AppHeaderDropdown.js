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
  cilHistory,
} from '@coreui/icons';

import CIcon from '@coreui/icons-react';

import avatar8 from './../../assets/images/avatars/8.jpg';
import { modalInfo } from './Constants/constants.ts';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

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
    dispatch(LoginActions.userlogout.logout());
    dispatch(HomeActions.cleanTokenData.clear(null))
    logoutHandler();
    navigate('/login');
  }

  const bookingHistoryHandler = () => {
    navigate('/booking-history');
  }

  const userProfileHandler = () => {
    navigate('/user-profile');
  }

  return (
    <>
      <CDropdown variant="nav-item">
        <CDropdownToggle placement="bottom-end" className="py-0 pe-0" caret={false}>
          <CAvatar src={avatar8} size="md" />
        </CDropdownToggle>
        <CDropdownMenu className="pt-0" placement="bottom-end">
          <CDropdownHeader className="bg-body-secondary fw-semibold my-2">User Info</CDropdownHeader>
          <CDropdownItem onClick={userProfileHandler}>
            <CIcon icon={cilUser} className="me-2" />
            Profile
          </CDropdownItem>
          {/* <CDropdownItem href="#">
            <CIcon icon={cilSettings} className="me-2" />
            Settings
          </CDropdownItem> */}
          <CDropdownItem onClick={bookingHistoryHandler}>
            <CIcon icon={cilHistory} className="me-2"/>
            Booking History
          </CDropdownItem>
          <CDropdownItem onClick={userLogOutHandler}>
            <CIcon icon={cilAccountLogout} className="me-2" />
            Logout
          </CDropdownItem>
        </CDropdownMenu>
      </CDropdown>
      {visible && <CModal
        alignment="center"
        visible={visible}
        onClose={() => setVisible(false)}
        aria-labelledby="VerticallyCenteredExample"
      >
        <CModalHeader>
          <CIcon icon={cilBellExclamation} />
          <CModalTitle id="VerticallyCenteredExample">{modalInfo.TITLE}</CModalTitle>
        </CModalHeader>
        <CModalBody>
          {modalInfo.BODY}
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setVisible(false)}>
            {modalInfo.NO}
          </CButton>
          <CButton color="primary" onClick= {logOut}>{modalInfo.YES}</CButton>
        </CModalFooter>
      </CModal>}
    </>
  )
}

export default AppHeaderDropdown
