"use client"
import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';


const PhoneNumberValidation = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [valid, setValid] = useState(true);

  const handleChange = (value: string) => {
    setPhoneNumber(value);
    setValid(validatePhoneNumber(value));
  };

  const validatePhoneNumber = (phoneNumber: string) => {
    const phoneNumberPattern = /^\+?[1-9]\d{1,14}$/;

    return phoneNumberPattern.test(phoneNumber);
  };

  return (
    <div>
      <label>
        Phone Number:
        <PhoneInput
          country={'in'}
          value={phoneNumber}
          onChange={handleChange}
          inputProps={{
            required: true,
          }}
        />
      </label>
      {!valid && (
        <p>Please enter a valid phone number.</p>
      )}
    </div>
  );
};

export default PhoneNumberValidation;