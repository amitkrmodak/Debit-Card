import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import desktop_img from "./img/bg-main-desktop.png";
import card_front from "./img/bg-card-front.png";
import card_back from "./img/bg-card-back.png";
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
function App() {
  const[name,setName]=useState('') ;
  const[isValid, setIsValid]=useState(true);
  const handleName =(e)=>{
    const newName=e.target.value;
    const validName=/^[A-za-z]+$/.test(newName);
    setIsValid(validName);
    setName(newName);

  }
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <div className='Container' style={{ height: '100%', position: 'relative' }}>
      <div className='row' style={{ height:'100%'}}>
        <div className='col-md-3' style={{ backgroundImage: `url(${desktop_img})`, }}>
        </div>

        <div className='col-md-6'>
          <div style={{marginLeft:'50%', marginTop:'50%'}}>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formCardNumber">
                <Form.Label>CARD NUMBER</Form.Label>
                <Form.Control type="text" placeholder="e.g. Jane Appleseed" />
              </Form.Group>

              <Form.Group controlId="formName">
                <Form.Label>NAME</Form.Label>
                <Form.Control type="Text" placeholder="e.g. 1234 5678 9123 0000" onChange={handleName}/>
                {!isValid && <p style={{color:'red'}}>Enter a valid name</p>}
              </Form.Group>

              <Form.Group controlId="formDate">
                <Form.Label>EXP DATE</Form.Label>
                <Form.Control type="text" placeholder="MM" style={{ padding: '6px' }} />
                <Form.Control type="text" placeholder="YY" />
              </Form.Group>

              <Form.Group controlId="formCVV">
                <Form.Label>CVV</Form.Label>
                <Form.Control type="text" placeholder="e.g. 123" />
              </Form.Group>
              <Button variant="dark" style={{ marginTop: '10px', width: '100%' }}>Confirm</Button>{' '}
            </Form>
          </div>
        </div>
      </div>
      <div style={{ position: 'absolute', left: '10%', top: '10%', backgroundRepeat: 'no-repeat', backgroundImage: `url(${card_front})`}}>
        <img src={card_front} />
        <span style={{marginLeft:'-100px', color:'white', fontSize:'40px'}}>000000000</span>
      </div>
      <div style={{ position: 'absolute', left: '10%', top: '50%', backgroundRepeat: 'no-repeat'}}>
        <img src={card_back} />
      </div>
      {/* <div style={{ position: 'absolute', left: '10%', top: '50%', height: '100%', width: '100%', backgroundRepeat: 'no-repeat', backgroundImage: `url(${card_back})`}}></div> */}
    </div>
  );
}

export default App;
