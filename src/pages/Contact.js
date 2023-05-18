import React, { useState } from "react";
import "./contact.css";
import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum();

const Contact = () => {
  const [phoneNumbers, setPhoneNumbers] = useState([""]);
  const [showAddressDetails, setShowAddressDetails] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const loremIpsumSentence = lorem.generateSentences(1);

  const addPhoneNumber = () => {
    setPhoneNumbers([...phoneNumbers, ""]);
  };

  const toggleAddressDetails = () => {
    setShowAddressDetails(!showAddressDetails);
  };

  const handleRadioChange = () => {
    setIsChecked(!isChecked);
    toggleAddressDetails(); 
  };
  
  

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const fullName = event.target[0].value;
    const email = event.target[1].value;
    const phone = phoneNumbers
      .filter((phoneNumber) => phoneNumber !== "")
      .join(", ");
    var message = event.target[5].value;
    if (showAddressDetails) {
      console.log("hello");
      var addressLine1 = event.target[5].value;
      var addressLine2 = event.target[6].value;
      var cityTown = event.target[7].value;
      var stateCounty = event.target[8].value;
      var postcode = event.target[9].value;
      var country = event.target[10].value;
      var message = event.target[11].value;
      var formData = {
        FullName: fullName,
        EmailAddress: email,
        PhoneNumbers: phone ? [phone] : [],
        Message: message,
        bIncludeAddressDetails: showAddressDetails,
        AddressDetails: {
          AddressLine1: addressLine1,
          AddressLine2: addressLine2,
          CityTown: cityTown,
          StateCounty: stateCounty,
          Postcode: postcode,
          Country: country,
        },
      };
    } else {
      console.log("bye");
      var formData = {
        FullName: fullName,
        EmailAddress: email,
        PhoneNumbers: phone ? [phone] : [],
        Message: message,
        bIncludeAddressDetails: showAddressDetails,
      };
    }

    console.log(formData);
    fetch(
      "https://interview-assessment.api.avamae.co.uk/api/v1/contact-us/submit",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    )
      .then((response) => {
        if (response.ok) {
          console.log("Form submitted successfully");
          event.target.reset();
        } else {
          console.error("Form submission failed");
        }
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      });
  };

  return (
    <div className="contact-container" style={{ fontFamily: "Prima Sans BT" }}>
      <div className="contact-form">
        <h2 className="headline-contact-us">Contact us</h2>
        <h3 className="contact-lorem">{loremIpsumSentence}</h3>
        <form onSubmit={handleFormSubmit}>
          <div className="contact-form-line-1">
            <div className="input-container">
              <label htmlFor="fullName">Full Name</label>
              <input type="text" id="fullName" name="fullName" required />
            </div>

            <div className="input-container">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" required />
            </div>
          </div>
          {phoneNumbers.map((phoneNumber, index) => (
            <div key={index}>
              <label htmlFor={`phone${index + 1}`}>
                Phone Number 0{index + 1}{" "}
                <span className="optional">-optional</span>
              </label>
              <div className="input-container">
                <input
                  type="tel"
                  id={`phone${index + 1}`}
                  name={`phone${index + 1}`}
                  value={phoneNumber}
                  onChange={(e) => {
                    const updatedPhoneNumbers = [...phoneNumbers];
                    updatedPhoneNumbers[index] = e.target.value;
                    setPhoneNumbers(updatedPhoneNumbers);
                  }}
                />
              </div>
            </div>
          ))}
          <button
            className="add-new-phone-number-button"
            type="button"
            onClick={addPhoneNumber}
          >
            Add new phone number
          </button>
          <div>
            <input
              className="radio"
              type="radio"
              id="addAddressDetails"
              name="addAddressDetails"
              value="yes"
              checked={isChecked}
              onChange={handleRadioChange}
            />

            <label htmlFor="addAddressDetails">Add Address Details</label>
          </div>

          {showAddressDetails && (
            <>
              <div className="address-lines">
                <div className="text-area-container">
                  <label htmlFor="addressLine1">Address Line 1</label>
                  <textarea
                    id="addressLine1"
                    name="addressLine1"
                    required
                  ></textarea>
                </div>
                <div className="text-area-container">
                  <label htmlFor="addressLine2">
                    Address Line 2 <span className="optional">-optional</span>
                  </label>
                  <textarea
                    id="addressLine2"
                    name="addressLine2"
                    required
                  ></textarea>
                </div>
              </div>
              <div className="address-info">
                <div className="text-area-container">
                  <label htmlFor="cityTown">City/Town</label>
                  <textarea id="cityTown" name="cityTown" required></textarea>
                </div>
                <div className="text-area-container">
                  <label htmlFor="stateCounty">State/County</label>
                  <textarea
                    id="stateCounty"
                    name="stateCounty"
                    required
                  ></textarea>
                </div>
                <div className="text-area-container">
                  <label htmlFor="postcode">Postcode</label>
                  <textarea id="postcode" name="postcode" required></textarea>
                </div>
                <div className="text-area-container">
                  <label htmlFor="country">Country</label>
                  <textarea id="country" name="country" required></textarea>
                </div>
              </div>
            </>
          )}
          <div className="text-area-container-message">
            <div className="text-area-label">
              <label htmlFor="message">Message</label>
              <span className="text-limit-info">
                Maximum text length is 500 characters
              </span>
            </div>
            <textarea
              id="message"
              name="message"
              maxLength={500}
              required
            ></textarea>
          </div>

          <button className="submit-button" type="submit">
            Submit
          </button>
        </form>
      </div>

      <div className="contact-logo">
        <img
          src={process.env.PUBLIC_URL + "/LogoRotated.jpg"}
          alt="Company Logo"
        />
      </div>
    </div>
  );
};

export default Contact;
