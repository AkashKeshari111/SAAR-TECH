import React from "react";
import {
  MDBContainer,
  MDBCol,
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBListGroup,
  MDBListGroupItem,
  MDBRow,
  MDBIcon
} from 'mdb-react-ui-kit';
import styles from "./Navbar.module.css"

const SideNavbar = () => {
  return (
    <MDBNavbar  expand='xxlg'   light  className={styles.sideNavBtn} >
      <MDBContainer fluid>
        <MDBNavbarNav className='me-auto ps-lg-0' >
          <MDBNavbarItem>
            
          </MDBNavbarItem>

          <MDBNavbarItem className='position-static' style={{width:"100%"}}>
         
            <MDBDropdown  >
              <MDBDropdownToggle   tag='a'  ca  className={styles.navbardropdownName}>
                CATEGORY
              </MDBDropdownToggle>
              
              <MDBDropdownMenu
                className='mt-0 w-100 justify-content-center'
                style={{
                  borderTopLeftRadius: '0',
                  borderTopRightRadius: '0',
                }}
              >
                <MDBContainer fluid={"true"}>
                  <MDBRow className='my-4' >
                    <MDBCol md='6' lg='3' className='mb-3 mb-lg-0'>
                      <MDBListGroup flush>
                        <MDBListGroupItem className='text-uppercase' style={{fontWeight:"bold"}} tag='a' href='#' action>
                        Consumer Electronics
                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='' action>
                          <MDBIcon icon='caret-right' className='pe-2' /> Smart Electronics
                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='#' action>
                          <MDBIcon icon='caret-right' className='pe-2' />
                          Headphones & Earphones
                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='#' action>
                          <MDBIcon icon='caret-right' className='pe-2' />
                          Xiaomi Ecosystem Products
                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='#' action>
                          <MDBIcon icon='caret-right' className='pe-2' />
                          Security & Protection
                        </MDBListGroupItem>
                      </MDBListGroup>
                    </MDBCol>
                    <MDBCol md='6' lg='3' className='mb-3 mb-lg-0'>
                      <MDBListGroup flush>
                        <MDBListGroupItem className='text-uppercase'  style={{fontWeight:"bold"}} tag='a' href='#' action>
                        Industrial & Scientific
                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='#' action>
                          <MDBIcon icon='caret-right' className='pe-2' /> 3D Printer & Supplies
                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='#' action>
                          <MDBIcon icon='caret-right' className='pe-2' />
                          Laser Engraver & CNC
                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='#' action>
                          <MDBIcon icon='caret-right' className='pe-2' /> Power Tools
                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='#' action>
                          <MDBIcon icon='caret-right' className='pe-2' /> Professional Tools
                        </MDBListGroupItem>
                      </MDBListGroup>
                    </MDBCol>
                    <MDBCol md='6' lg='3' className='mb-3 mb-md-0'>
                      <MDBListGroup flush>
                        <MDBListGroupItem className='text-uppercase'  style={{fontWeight:"bold"}} tag='a' href='#' action>
                        Computers & Tablets
                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='#' action>
                          <MDBIcon icon='caret-right' className='pe-2' /> Computers & Tablets
                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='#' action>
                          <MDBIcon icon='caret-right' className='pe-2' /> Computer Peripherals
                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='#' action>
                          <MDBIcon icon='caret-right' className='pe-2' /> Computer Components
                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='#' action>
                          <MDBIcon icon='caret-right' className='pe-2' /> Ofice Supply
                        </MDBListGroupItem>
                      </MDBListGroup>
                    </MDBCol>
                    <MDBCol md='6' lg='3'>
                      <MDBListGroup flush>
                        <MDBListGroupItem className='text-uppercase' style={{fontWeight:"bold"}} tag='a' href='#' action>
                        Health & Personal Care
                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='#' action>
                          <MDBIcon icon='caret-right' className='pe-2' /> Health Care
                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='#' action>
                          <MDBIcon icon='caret-right' className='pe-2' /> Beauty Care Tools
                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='#' action>
                          <MDBIcon icon='caret-right' className='pe-2' /> Shaving & Hair Removal
                        </MDBListGroupItem>
                        <MDBListGroupItem tag='a' href='#' action>
                          <MDBIcon icon='caret-right' className='pe-2' /> Body scales
                        </MDBListGroupItem>
                      </MDBListGroup>
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
              </MDBDropdownMenu>
            </MDBDropdown>
          </MDBNavbarItem>
        </MDBNavbarNav>
      </MDBContainer>
    </MDBNavbar>
  );
}
export default SideNavbar;
