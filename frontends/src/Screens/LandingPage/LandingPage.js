import { Container, Row,Button} from "react-bootstrap"
import './LandingPage.css'
import { Link, useNavigate} from "react-router-dom"
import { useEffect } from "react"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"

const LandingPage = () => {
    const navigate=useNavigate()
    useEffect(()=>{
        const userInfo=localStorage.getItem("userInfo")
        if(userInfo){
            navigate('/mynotes')

        }
    },[navigate])
  return (
    <div>
        <Header/>
    <div className="main">

        <Container>
            <Row>
                <div className="intro-text">
                    <div>
                        <h1 className="title">
                            Welcome to Note Zipper
                        </h1>
                        <p className="subtitle"> 
                            One Safe Place for all your notes
                        </p>
                        <div className="buttonContainer">
                            <Link to='/login'>
                            
                                <Button size="lg" className="landingButton">
                                    Login
                                </Button>
                          
                            </Link>
                            
                            <Link to='/register'>
                            
                                <Button size="lg" className="landingButton" variant="outline-primary">
                                    Signup
                                </Button>
                           
                            </Link>
                            
                        </div>
                    </div>
                </div>
            </Row>

        </Container>
        
        
      
    </div>
    <Footer/>
    </div>
    
  )
}

export default LandingPage
