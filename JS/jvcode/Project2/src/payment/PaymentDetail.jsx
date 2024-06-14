/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// LeftHtml.jsx
import React from 'react';
import { FaStopwatch20 } from "react-icons/fa";
import './Payment.css';
const PaymentDetails = () => {
     return (
            <div className='Payment-body'>
                <form className='form-body' autoComplete='off'>
                    <div>
                        <header className='title'>Payment Details</header>  
                     </div>
                     <div >
                        <p className="subtitle">Contact Information</p>
                     </div>
                     <div className='form-row'>
                        <div>
                     <label>Email</label>
                     <input className='input border input-field  margin1' autoComplete='off' type="email" placeholder='Enter Email'/>
                     </div>
                     
                     
                     <div className='form-column head2'>
                      <label >Name</label>
                      <input className='input border input-field  margin2' type='text' autoComplete='off' placeholder='Enter name'/>
                      </div> 
                      </div>
                      <div className='form-row'> 
                        <header><p className='subtitle'> Select plans</p></header></div> 
                
                   <div className='form-row'>
                    <div className='border margin1 form-column'>
                    <label className=' label2 subttitle '>One-Time Payment</label>
                    <p className=' selectedit'>Charge users a one-time payment fee to access the content</p>
                   </div>
                   
                   <div className='border form-column '>
                    <label className=' label2 margin2'>Membership</label>
                    <p className=' selectedit'>Spilt the full budle price over several monthly payments</p>
                   </div>
                   </div>
                   <div>
                     <p className='subtitle'>Amount Submission</p>
                     </div>
                     <div className='form-row'>
                     <div className='form-column'>
                        <label className='column-half'>Amount</label>
                     <input className='input input-field border margin1' type="number" placeholder='Enter amount'/>
                     </div>
                     <div className='form-column'>
                      <label className='column-half'>Beneficiary</label>
                      <input className='input input-field border margin2' type='text' placeholder='Enter Beneficiary name'/>
                      </div>
                   </div>
                                      
                     <div className='form-row'>
                        <div>
                     <label>Company Name</label>
                     <input className='input input-field border margin1 column-half' type="text" placeholder='Enter Company'/>
                      </div>
                      </div>
                      <div className='para1'>
                      <p>Incoming payments are placed in a secure receving account to keep the destination account anonymously</p>
                      
                      </div>
                      <div className='expire'>
                      <FaStopwatch20 className='watch' />
                      <p className='para expire'>Payment link expires</p>
                   </div>
                   <div className='form-row'>
                     <button className='button'>Cancel</button>
                     <button className='button paybutton'>Request Payment</button>
                   </div>
                   
                   
                
                </form>
                </div>

        

      );
};

export default PaymentDetails;
