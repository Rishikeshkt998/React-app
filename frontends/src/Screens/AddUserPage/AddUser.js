import { Form, Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import ErrorMessage from "../../components/ErrorMessage";
import Loading from "../../components/Loading";
import { useState ,useEffect} from "react";
// import "./RegisterPage.css";
import MainScreen from "../../components/MainScreen";
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../../actions/userActions";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import axios from "axios";
import AdminHeader from "../../components/adminHeader/AdminHeaders";
import AdminFooter from "../../components/adminFooter/AdminFooters";

const AddUser = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [pic, setPic] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [picMessage, setPicMessage] = useState(null);
  // const [error, setError] = useState(false);
  // const [loading, setLoading] = useState(false);
  const navigate=useNavigate()

  const submitHandler = async (e) => {
    e.preventDefault();
      try {
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };
        const { data } = await axios.post(
          "/api/admin/add",
          {
            name,
            pic,
            email,
            password,
          },
          config
        );
        navigate('/adminhome')
      } catch (error) {
        console.log(error)
      }
    }
  const postDetails = (pics) => {
    if (!pics) {
      return setPicMessage("please select an image");
    }
    setPicMessage(null);
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "notezipper");
      data.append("cloud_name", "dey2lxdzw");
      fetch("https://api.cloudinary.com/v1_1/dey2lxdzw/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setPic(data.url.toString());
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return setPicMessage("please select an image");
    }
  };

  return (
    <div>
      <AdminHeader/>
      <MainScreen title="ADD USER">
      <div className="loginContainer">
        {/* {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        {message && <ErrorMessage variant="danger">{message}</ErrorMessage>}
        {loading && <Loading />} */}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              value={name}
              placeholder="Enter name"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

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

          {/* {picMessage && (
            <ErrorMessage variant="danger">{picMessage}</ErrorMessage>
          )} */}
          <Form.Group controlId="pic">
            <Form.Label>Profile Picture</Form.Label>
            <input
              type="file"
              className="form-control"
              id="customFile"
              accept="image/png, image/jpeg"
              onChange={(e) => postDetails(e.target.files[0])}
            />
          </Form.Group>

          <Button variant="primary" type="submit" disabled={!pic}>
            ADD USER
          </Button>
        </Form>
      </div>
    </MainScreen>
      <AdminFooter/>
    </div>
    
  );
};

export default AddUser;