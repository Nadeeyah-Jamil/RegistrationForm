import React, { useState } from 'react';
import './registrationform.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock, faGlobe } from '@fortawesome/free-solid-svg-icons';
import image1 from './image1.png';

const RegistrationForm = () => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isAccepted, setIsAccepted] = useState(false);
    const [message, setMessage] = useState("");

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
    };

    const setAcceptanceStatus = () => {
        setIsAccepted(!isAccepted);
    };

    const validatePasswords = () => {
        if (password === "" || confirmPassword === "") {
            setMessage("Password fields cannot be empty.");
        } else if (password !== confirmPassword) {
            setMessage("Passwords do not match.");
        } else {
            setMessage("Registered successfully!");
        }
    };

    return (
        <div className='registrationform'>
            <div className="image">
                <img src={image1} alt="logo" className='image-1'/>
            </div>
            <div className="text">
                <div className="registration">
                    <h3 className='heading1'>COMPANY <span className="heading2">REGISTRATION</span></h3>
                    <p className="info">Registration for an account. Your role shall be assigned manually by your organization.</p>
                    <hr className='scale' />
                    <div className="form">
                        <div className="input1">
                            <div className="inputimg">
                                <FontAwesomeIcon icon={faUser} />
                            </div>
                            <div className="inputtext">
                                <input type="text" placeholder='Enter your Full Name'/>
                            </div>
                        </div>
                        <div className="input1">
                            <div className="inputimg">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </div>
                            <div className="inputtext">
                                <input type="text" placeholder='Enter Email'/>
                            </div>
                        </div>
                        <div className="input1">
                            <div className="inputimg">
                                <FontAwesomeIcon icon={faLock} />
                            </div>
                            <div className="inputtextwidlock">
                                <input type={password} value={password} onChange={handlePasswordChange} placeholder='Enter Password'/>  
                            </div>
                        </div>
                        <div className="input1">
                            <div className="inputimg">
                                <FontAwesomeIcon icon={faLock} />
                            </div>
                            <div className="inputtext">
                                <input type={password} value={confirmPassword} onChange={handleConfirmPasswordChange} placeholder='Confirm Password'/>
                            </div>
                        </div>
                        <div className="input1">
                            <div className="inputimg">
                                <FontAwesomeIcon icon={faGlobe} />
                            </div>
                            <div className="inputtext">
                                <input type="text" placeholder='Enter your Organization ID'/>
                            </div>
                        </div>
                        <div className="terms">
                            <div className="checkbox" onClick={setAcceptanceStatus}>
                                {isAccepted ? <p className='Ticksymbol'>✔</p> : null}
                            </div>
                            <div className="termstext">
                                <p className='termssubtext'>I accept Company's <span className='conditions'>Terms of service</span></p>
                            </div>
                        </div>
                        {message && <p className='error-message'>{message}</p>}
                        <button className="registerbtn" onClick={validatePasswords}>
                            Register
                        </button>
                        <div className="additionalinfo">
                            <p className='additionalsubinfo'>Already have an account? <a href='#home' className='loginopt'>Login</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegistrationForm;
