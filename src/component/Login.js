import React from 'react';
import '../assets/css/login.css';
import Kiri from '../assets/images/kiri.svg';
import Tengah from '../assets/images/tengah.svg';
import Kanan from '../assets/images/right.svg';
import Spark from '../assets/images/spark.svg';
import LoginBox from '../assets/images/loginBox.svg';
import Sun from '../assets/images/sun.svg';
import Fall from '../assets/images/fallstar.svg';
import Mata from '../assets/images/matahari.svg';
import {Form, Button, Row, Col} from 'react-bootstrap';

class Login extends React.Component{
    render(){
        return(
            <body>
                <img src={Tengah} id="tengah" alt="tengah"></img>
                <img src={Kiri} id="left" alt="left"></img>
                <img src={Kanan} id="right" alt="right"></img>
                <img src={Fall} id="fall" alt="fall"></img>
                <img src={Spark} id="spark1" alt="spark"></img>
                <img src={Spark} id="spark2" alt="spark"></img>
                <img src={Spark} id="spark3" alt="spark"></img>
                <img src={Spark} id="spark4" alt="spark"></img>
                <img src={Spark} id="spark5" alt="spark"></img>
                <img src={Spark} id="spark6" alt="spark"></img>
                <img src={Spark} id="spark7" alt="spark"></img>
                <img src={Spark} id="spark8" alt="spark"></img>
                <img src={Spark} id="spark9" alt="spark"></img>
                <img src={Spark} id="spark10" alt="spark"></img>
                <img src={Spark} id="spark11" alt="spark"></img>
                <img src={Spark} id="spark12" alt="spark"></img>
                <img src={Spark} id="spark13" alt="spark"></img>

                <div class="container">
                    <div class="login-box">
                    <img src={LoginBox} id="loginbox" alt="loginbox"></img>
                    <img src={Sun} id="sun" alt="sun"></img>
                        <p>Sign in to start your session</p>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Enter email" />
                                
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                
                            <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Row>
                                <Col>
                                    <Form.Group controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="Remember Me" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                <Button variant="primary" type="submit">
                                    Sign In
                                </Button>
                                </Col>
                            </Row>
                            
                            
                        </Form>
                        <img src={Spark} id="spark14" alt="spark"></img>
                        <img src={Spark} id="spark15" alt="spark"></img>
                        <img src={Spark} id="spark16" alt="spark"></img>
                        <img src={Spark} id="spark17" alt="spark"></img>
                        <img src={Spark} id="spark18" alt="spark"></img>
                        <img src={Spark} id="spark19" alt="spark"></img>
                        <img src={Spark} id="spark20" alt="spark"></img>
                        <img src={Mata} id="matahari" alt="spark"></img>
                    </div>
                </div>
            </body>
        );
    }
}

export default Login;