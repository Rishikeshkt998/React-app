import React from 'react'
import {Navbar,Nav,Container, Button} from 'react-bootstrap'

import { Link, useNavigate } from 'react-router-dom'


const AdminHeader = () => {
  const navigate=useNavigate()
  
  return (
     <Navbar expand="lg"  bg="dark" variant='dark' className="bg-body-tertiary">
      <Container >
        <Navbar.Brand >
          <Link to='/'>
          Admin
          </Link>

        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className='m-auto'>
            
          </Nav>
        <Nav

          >
            <Nav.Link >
              <Link to='/adduser'>
                <Button>
                    Add User
                </Button>
              </Link>
              </Nav.Link>
              <Nav.Link >
              
                <Button onClick={()=>{localStorage.removeItem("adminInfo")
                navigate('/admin')}
                 }>
                    Logout
                </Button>
              </Nav.Link>
            
            
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default AdminHeader
