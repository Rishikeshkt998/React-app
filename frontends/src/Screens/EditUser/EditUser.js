import React ,{useState,useEffect}from 'react'
import MainScreen from '../../components/MainScreen'
import { Col, Row,Form,Button} from 'react-bootstrap'
import axios from 'axios'
import AdminHeader from '../../components/adminHeader/AdminHeaders'
import AdminFooter from '../../components/adminFooter/AdminFooters'
import { useParams,useNavigate } from 'react-router-dom'



const EditUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pic, setPic] = useState();
  const [password, setPassword] = useState("");
//   const [picMessage, setPicMessage] = useState();
const {id}=useParams()
const navigate=useNavigate()


useEffect(() => {
    axios.get(`/api/admin/edituser/${id}`).then((res)=>{
        setEmail(res.data.email)
        setName(res.data.name)
        setPic(res.data.pic)

    })
  }, []); 

  const postDetails = (pics) => {
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "notezipper");
      data.append("cloud_name", "piyushproj");
      fetch("https://api.cloudinary.com/v1_1/piyushproj/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setPic(data.url.toString());
          console.log(pic);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return console.log("Please Select an Image");
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`/api/admin/update`, {
        id,
        name,
        pic,
        email,
        password
      });

      console.log('User updated:', response.data);
      // Handle success (e.g., show a success message)
      navigate('/adminhome')
    } catch (error) {
      console.error('Error updating user:', error.response.data.error);
    }
  };

  return (
    <div>
      <AdminHeader/>
      <MainScreen title="EDIT USER">
      <div>
        <Row className="profileContainer">
          <Col md={6}>
            <Form onSubmit={submitHandler}>
              {/* {loading && <Loading />}
              {success && (
                <ErrorMessage variant="success">
                  Updated Successfully
                </ErrorMessage>
              )}
              {error && <ErrorMessage variant="danger">{error}</ErrorMessage>} */}
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></Form.Control>
              </Form.Group>
              {" "}
              {/* {picMessage && (
                <ErrorMessage variant="danger">{picMessage}</ErrorMessage>
              )} */}
              <Form.Group controlId="pic">
                <Form.Label>Change Profile Picture</Form.Label>
                            <input
              type="file"
              className="form-control"
              id="customFile"
              accept="image/png, image/jpeg"
              onChange={(e) => postDetails(e.target.files[0])}
            />
        
              </Form.Group>
              <Button type="submit" varient="primary">
                Update
              </Button>
            </Form>
          </Col>
          <Col
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={pic} alt={name} className="profilePic" />
          </Col>
        </Row>
      </div>
    </MainScreen>
      <AdminFooter/>
    </div>

  )
}

export default EditUser
