import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import desktop_img from "./img/bg-main-desktop.png";
import card_front from "./img/bg-card-front.png";
import card_back from "./img/bg-card-back.png";
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
function App() {
  const [name, setName] = useState('');
  //const [isValidName, setIsValidName] = useState(true);
  const [nameErrorMsg, setNameErrorMsg] = useState('');

  const [number, setNumber] = useState('');
  //const [isValidNumber, setIsValidNumber] = useState(true);
  const [numberErrorMsg, setNumberErrorMsg] = useState('');

  const [month, setMonth] = useState('');
  //const [isValidMonth, setIsValidMonth] = useState(true);
  const [monthErrorMsg, setMonthErrorMsg] = useState('');

  const [year, setYear] = useState('');
  //const [isValidYear, setIsValidYear] = useState(true);
  const [yearErrorMsg, setYearErrorMsg] = useState('');

  const [cvv, setCvv] = useState('');
  // const [isValidCvv, setIsValidCvv] = useState(true);
  const [cvvErrorMsg, setCvvErrorMsg] = useState('');

  const [isSubmit, setIsSubmit] = useState(false);
  // const handleName = (e) => {
  //   const newName = e.target.value;
  //   const validName = /^[A-za-z]+$/.test(newName);
  //   setIsValidName(validName);
  //   setName(newName);
  //   console.log(name);
  // }
  const handleName = (e) => {
    setName('Jane Appleseed');
    const newName = e.target.value;
    setName(newName);
    setNameErrorMsg('');
    if (newName.length === 0) {
      setNameErrorMsg('');
    }
    // else
    // {
    //   setName(newName);
    // }
  }
  // const handleNumber = (e) => {
  //   setNumber('0000000000000000');
  //   const newNumber = e.target.value;
  //   if (newNumber.length === 0) {
  //     setIsValidNumber(true);
  //     setNumber('0000000000000000');
  //   }
  //   else
  //   {
  //     setNumber(newNumber);
  //   }
  // }


  const handleNumber = (e) => {
    const newNumber = e.target.value;
    setNumber(newNumber);
    setNumberErrorMsg('');
    if (newNumber.length === 0) {
      setNameErrorMsg('');
    }
    // // if(newNumber.length>16)
    // // {
    // //   setIsValidNumber(false);
    // // } 
    // else
    // {
    //   setNumber(newNumber);
    // }   
  }

  const handleMonth = (e) => {
    const newMonth = e.target.value;
    setMonth(newMonth);
    setMonthErrorMsg('');
    if (newMonth.length === 0) {
      setMonthErrorMsg('');
    }
  }

  const handleYear = (e) => {
    const newYear = e.target.value;
    setYear(newYear);
    setYearErrorMsg('');
    if (newYear.length === 0) {
      setYearErrorMsg('');
    }
  }
  const handleCvv = (e) => {
    const newCvv = e.target.value;
    setCvv(newCvv);
    setCvvErrorMsg('');
    if (newCvv.length === 0) {
      setCvvErrorMsg('');
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const validName = /^[a-zA-Z]+$/.test(name);

    setIsSubmit(true);
    setNameErrorMsg('');
    setNumberErrorMsg('');
    setMonthErrorMsg('');
    setYearErrorMsg('');
    setCvvErrorMsg('');
    if (validName === false) {
      setNameErrorMsg("Wrong Name");
      setIsSubmit(false);
    }
    if (name.length === 0) {
      setNameErrorMsg("Can't Blank");
      setIsSubmit(false);
    }

    if (isNaN(number)) {
      setNumberErrorMsg("Only number is allowed");
      setIsSubmit(false);
    }
    if(number.length!==16)
    {
      setNumberErrorMsg("Number must contains 16 digits");
      setIsSubmit(false);
    }
    if (number.length === 0) {
      setNumberErrorMsg("can't Blank");
      setIsSubmit(false);
    }
    
    if (isNaN(month) || month > 13 || month < 0) {
      setMonthErrorMsg("Wrong Number")
    }
    if (month.length === 0) {
      setMonthErrorMsg("can't Blank");
    }
    
    if (isNaN(year) || year > 30 || year < 0) {
      setYearErrorMsg("Wrong Number")
      setIsSubmit(false);
    }
    if (year.length === 0) {
      setYearErrorMsg("can't Blank");
      setIsSubmit(false);
    }
    
    if (isNaN(cvv)) {
      setCvvErrorMsg("Wrong Number");
      setIsSubmit(false);
    }
    if (cvv.length === 0) {
      setCvvErrorMsg("can't Blank");
      setIsSubmit(false);
    }

  }
  return (
    <div className='Container' style={{ height: '100%', position: 'relative' }}>
      <div className='row' style={{ height: '100%' }}>
        <div className='col-md-3' style={{ backgroundImage: `url(${desktop_img})` }}>
        </div>

        <div className='col-md-6'>
          <div style={{ marginLeft: '50%', marginTop: '50%' }}>
            {
              isSubmit ? (
                <div>
                  THAMK YOU
                  We've added your card details
                  <Button variant="dark" style={{ marginTop: '10px', width: '100%' }} onClick={()=> setIsSubmit(false)}>Continue</Button>{' '}
                </div>
              ) : (
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="formName">

                    <Form.Label>NAME</Form.Label>
                    <Form.Control type="Text" placeholder="e.g. Jane Appleseed" maxLength={20} onChange={handleName} />
                    {/* {!isValidName && <p style={{ color: 'red' }}>Enter a valid name</p>} */}
                    <p style={{ color: 'red' }}>{nameErrorMsg}</p>
                  </Form.Group>

                  <Form.Group controlId="formCardNumber">
                    <Form.Label>CARD NUMBER</Form.Label>
                    <Form.Control type="text" placeholder="e.g. 1234 5678 9123 0000" maxLength={16} onChange={handleNumber} />
                    {/* <Form.Control type="text" placeholder="e.g. 1234 5678 9123 0000" onChange={(e)=>handleAll(e.target.value,'number')} /> */}
                    <p style={{ color: 'red' }}>{numberErrorMsg}</p>
                  </Form.Group>

                  <Form.Group controlId="formDate">
                    <Form.Label>EXP DATE</Form.Label>
                    <Form.Control type="text" placeholder="MM" maxLength={2} style={{ padding: '6px' }} onChange={handleMonth} />
                    <p style={{ color: 'red' }}>{monthErrorMsg}</p>
                    <Form.Control type="text" placeholder="YY" maxLength={2} onChange={handleYear} />
                    <p style={{ color: 'red' }}>{yearErrorMsg}</p>
                  </Form.Group>

                  <Form.Group controlId="formCVV">
                    <Form.Label>CVV</Form.Label>
                    <Form.Control type="text" placeholder="e.g. 123" maxLength={3} onChange={handleCvv} />
                    <p style={{ color: 'red' }}>{cvvErrorMsg}</p>
                  </Form.Group>
                  <Button type="submit" variant="dark" style={{ marginTop: '10px', width: '100%' }}>Confirm</Button>{' '}
                </Form>
              )
            }

          </div>
        </div>

      </div>
      <div style={{ position: 'absolute', left: '10%', top: '10%', backgroundRepeat: 'no-repeat' }}>
        <img src={card_front} />
        <table style={{ marginLeft: '40px', marginTop: '-140px', width: '80%' }}>
          <tbody>
            <tr>
              <td colSpan={2}>
                {number.length > 1 ? (
                  <span style={{ color: 'white', fontSize: '40px' }}>{number}</span>
                ) : (
                  <span style={{ color: 'white', fontSize: '40px' }}>0000000000000000</span>
                )}
              </td>
            </tr>
            <tr>
              <td>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  {name.length > 1 ? (

                    <span style={{ color: 'white', fontSize: '20px' }}>{name}</span>
                  ) : (
                    <>
                      <span style={{ color: 'white', fontSize: '20px' }}>Jane Appleseed</span>
                    </>
                  )
                  }

                  <span style={{ color: 'white', fontSize: '20px' }}>
                    {month.length > 0 ? (
                      <span>{month}</span>
                    ) : (
                      <span>00</span>
                    )}
                    /
                    {year.length > 0 ? (
                      <span>{year}</span>
                    ) : (
                      <span>00</span>
                    )}
                  </span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <br />
      </div>


      <div style={{ position: 'absolute', left: '10%', top: '50%', backgroundRepeat: 'no-repeat' }}>
        <img src={card_back} />
        {cvv.length > 1 ? (
          <span style={{ marginLeft: '-80px', color: 'white', fontSize: '20px' }}>{cvv}</span>
        ) : (
          <span style={{ marginLeft: '-80px', color: 'white', fontSize: '20px' }}>000</span>
        )
        }

      </div>
      {/* <div style={{ position: 'absolute', left: '10%', top: '50%', height: '100%', width: '100%', backgroundRepeat: 'no-repeat', backgroundImage: `url(${card_back})`}}></div> */}
    </div>
  );
}

export default App;
