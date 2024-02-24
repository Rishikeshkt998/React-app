import React,{useEffect, useState} from 'react'
import axios from 'axios'

import { Form,Col,Button,Row } from 'react-bootstrap'
import MainScreen from '../../components/MainScreen'
import AdminHeader from '../../components/adminHeader/AdminHeaders'
import AdminFooter from '../../components/adminFooter/AdminFooters'
import ErrorMessage from '../../components/ErrorMessage'
import Loading from '../../components/Loading'
import { useNavigate } from 'react-router-dom'

const AdminLoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
//   const [errors, setErrors] = useState(false);
//   const [loadings, setLoadings] = useState;
const navigate=useNavigate()
useEffect(()=>{
  const adminInfo=localStorage.getItem("adminInfo")
  if(adminInfo){
    navigate('/adminhome')
  }
},[navigate])
    const submitHandler = async (e) => {
  e.preventDefault()
  console.log(email,password)
  try{
      const config={
          headers:{
              "Content-type":"application/json"
          }
      }
    //   setLoadings(true)
      const {data}=await axios.post("/api/admin/login",{
          email,password
      },config)
      console.log(data)
      localStorage.setItem("adminInfo",JSON.stringify(data))
    //   setLoadings(false)
    navigate('/adminhome')
  }catch(error){
    console.log(error)
    //   setErrors(error.response.data.message)
    //   setLoadings(false)
  }
    };
  return (
    <div>
        <AdminHeader/>
    <MainScreen title="LOGIN">
      <div className="loginContainer">
        {/* {errors && <ErrorMessage varient="danger">{errors}</ErrorMessage>}
        {loadings && <Loading />} */}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              value={email}
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <Row className="py-3">
          <Col>New Customer ? Register Here</Col>
        </Row>
      </div>
    </MainScreen>
    <AdminFooter/>
    </div>
  )
}

export default AdminLoginPage