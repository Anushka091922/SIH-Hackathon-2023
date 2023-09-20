import React, { useState } from 'react';
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

console.log(process.env.REACT_APP_API_KEY); // Check if this prints your API key

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_API_KEY}`,
  authDomain: `${process.env.REACT_APP_AUTH_DOMAIN}`,
  projectId: `${process.env.REACT_APP_PROJECT_ID}`,
  storageBucket: `${process.env.REACT_APP_STORAGE_BUCKET}`,
  messagingSenderId: `${process.env.REACT_APP_MESSAGING_SENDER_ID}`,
  appId: `${process.env.REACT_APP_APP_ID}`,
};
 

console.log(firebaseConfig); // Check if this prints your Firebase configuration



firebase.initializeApp(firebaseConfig);
 
const handleGoogleSignIn = async () => {
  try {
    const provider = new firebase.auth.GoogleAuthProvider();
    await firebase.auth().signInWithPopup(provider);

    // You can now access the user's information, e.g.,:
    const user = firebase.auth().currentUser;
    console.log('Logged in user:', user);
  } catch (error) {
    console.error('Google Sign-In Error:', error);
  }
};

function App() {

  const [justifyActive, setJustifyActive] = useState('tab1');;

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

      <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
            Login
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
            Register
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>

        <MDBTabsPane show={justifyActive === 'tab1'}>

          <div className="text-center mb-3">
            <p>Sign in with:</p>

            <div className='d-flex justify-content-center  mx-auto' style={{width: '40%'}}>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' } }onClick={handleGoogleSignIn}>
                <MDBIcon fab icon='google' size="lg" className='hover-on'/>
              </MDBBtn>


            </div>

            <p className="text-center mt-3">or:</p>
          </div>

          <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email'/>
          <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password'/>

          <div className="d-flex justify-content-between mx-4 mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            <a href="!#">Forgot password?</a>
          </div>

          <MDBBtn className="mb-4 w-100">Sign in</MDBBtn>
          <p className="text-center">Not a member? <a href="#!" onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>Register</a></p>

        </MDBTabsPane>

        <MDBTabsPane show={justifyActive === 'tab2'}>

          <div className="text-center mb-3">
            <p>Sign un with:</p>

            <div className='d-flex justify-content-center mx-auto' style={{width: '40%'}}>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}onClick={handleGoogleSignIn}>
                <MDBIcon fab icon='google' size="lg" className='hover-on'/>
              </MDBBtn>


            </div>

            <p className="text-center mt-3">or:</p>
          </div>

          <MDBInput wrapperClass='mb-4' label='Name' id='form1' type='text'/>
          <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email'/>
          <MDBInput wrapperClass='mb-4' label='Contact' id='form1' type='text'/>
          <MDBInput wrapperClass='mb-4' label='ID Number' id='form1' type='text'/>
          <MDBInput wrapperClass='mb-4' label='License Number' id='form1' type='text'/>
          <MDBInput wrapperClass='mb-4' label='Area of Work' id='form1' type='text'/>
          <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password'/>
          <MDBInput wrapperClass='mb-4' label='Confirm Password' id='form1' type='password'/>

          <div className='d-flex justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I have read and agree to the terms' />
          </div>

          <MDBBtn className="mb-4 w-100">Sign up</MDBBtn>

        </MDBTabsPane>

      </MDBTabsContent>

    </MDBContainer>
  );
}

export default App;
