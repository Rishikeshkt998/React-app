import React from 'react'
import {Navbar,Nav,NavDropdown,Container,Form} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import {logout} from  "../../actions/userActions"

const Header = () => {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const userLogin=useSelector(state=>state.userLogin)
  const {userInfo}=userLogin

  const logoutHandler=()=>{
    dispatch(logout())
    navigate('/')
  }
  return (
     <Navbar expand="lg"  bg="primary" variant='dark' className="bg-body-tertiary">
      <Container >
        <Navbar.Brand >
          <Link to='/'>
          React-App
          </Link>

        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className='m-auto'>
            <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            
          </Form>
          </Nav>
          {userInfo ? <Nav

          >
            <Nav.Link >
              <Link to='/mynotes'>
                My notes
              </Link>
              </Nav.Link>
            <NavDropdown title={userInfo?.name} id="navbarScrollingDropdown">
              <NavDropdown.Item href="/profile">My Profile</NavDropdown.Item>
              
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={logoutHandler}>
                Logout
              </NavDropdown.Item>
            </NavDropdown>
            
          </Nav>:<Nav>
            <Nav.Link >
              <Link to='/login'>
                login
              </Link>
              </Nav.Link>
              </Nav>}
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
