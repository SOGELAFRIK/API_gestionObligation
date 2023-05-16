import Head from 'next/head'
import { Button, Col, Form, Row,Alert, Container, Card} from 'react-bootstrap';
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.scss'
import favicon from "../public/assets/img/brand/favicon.ico"
import { useState } from 'react';
import Link from "next/link";
// import Dashboard from "../pages/components/dashboard/dashboard"


//Images
import logolight from "../public/assets/img/brand/logo-light.png"
import user from "../public/assets/img/svgs/user.svg"
import logo from "../public/assets/img/brand/logo.png"


const Home = ()=>{

  const [err, setError] = useState("");
  const [data, setData] = useState({
   "email": "JohnDoe@gmail.com",
  "password": "1234567890",
  })
  const { email, password } = data;
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
    setError("");
  }
  let navigate = useRouter(); 
  const routeChange = () =>{ 
    let path = `/components/dashboard/dashboard/`; 
    navigate.push(path);
  }

  const Login = (e) => {
    console.log(data);
    if (data.email == "JohnDoe@gmail.com" && data.password == "1234567890"){
      routeChange()
    }
    else{
      setError("The Auction details did not Match")
      setData({
        "email": "JohnDoes@gmail.com",
       "password": "1234567890",
       })
    }
  }


  return (
    <div className={styles.container}>
      <Head>
        <title>R-MY</title>
        <meta name="description" content="r-my" />
        <link rel="icon" href={favicon.src} />
      </Head>
      <div className="page main-signin-wrapper"
    >
      <Row className="signpages text-center" >
        <Col md={12}>
          <Card>
            <Row className="row-sm">
              <Col
                lg={6}
                xl={5}
                className="d-none d-lg-block text-center bg-primary details"
              >
                <div className="mt-5 pt-4 p-2 pos-absolute">
                  {/* <img
                    src={logolight.src}
                    className="header-brand-img mb-4"
                    alt="logo-light"
                  /> */}
                  <h1>R-MY</h1>
                  <div className="clearfix"></div>
                  <img
                    src={user.src}
                    className="ht-100 mb-0"
                    alt="user"
                  />
                  <h5 className="mt-4 text-white">Connexion a votre compte</h5>
                  <span className="tx-white-6 tx-13 mb-5 mt-xl-0">
                   Connectez-vous afin de beneficier de vos services
                  </span>
                </div>
              </Col>
              <Col lg={6} xl={7} xs={12} sm={12} className="login_form ">
                <Container fluid>
                  <Row className="row-sm">
                    <Card.Body className="mt-2 mb-2">
                      {/* <img
                        src={logo.src}
                        className=" d-lg-none header-brand-img text-start float-start mb-4 auth-light-logo"
                        alt="logo"
                      />
                      <img
                        src={logolight.src}
                        className=" d-lg-none header-brand-img text-start float-start mb-4 auth-dark-logo"
                        alt="logo"
                      /> */}
                      <h1>R-MY</h1>
                      <div className="clearfix"></div>
                      {err && <Alert variant="danger">{err}</Alert>}
                      <Form>
                        <h5 className="text-start mb-2">
                        CONNEXION A VOTRE COMPTE
                        </h5>
                        {/* <p className="mb-4 text-muted tx-13 ms-0 text-start">
                        COnnectez-vous
                        </p> */}
                        <Form.Group className="text-start form-group" controlId="formEmail">
                          <Form.Label>Email</Form.Label>
                          <Form.Control
                                  className="form-control"
                                  placeholder="Enter your email"
                                  name="email"
                                  type='text'
                                  value={email}
                                  onChange={changeHandler}
                                  required
                                />
                        </Form.Group>
                        <Form.Group
                          className="text-start form-group"
                          controlId="formpassword"
                        >
                          <Form.Label>MOT DE PASSE</Form.Label>
                          <Form.Control
                                  className="form-control"
                                  placeholder="Enter your password"
                                  name="password"
                                  type='password'
                                  value={password}
                                  onChange={changeHandler}
                                  required
                                />
                        </Form.Group>
                        <Button onClick={Login} className="btn ripple btn-main-primary btn-block mt-2">
                         CONNEXION
                        </Button>
                      </Form>
                     
                    </Card.Body>
                  </Row>
                </Container>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
    </div>
  )
}
Home.layout = "Authenticationlayout"

export default Home