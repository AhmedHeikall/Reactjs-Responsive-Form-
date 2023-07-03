import { useState } from "react";
import { Button, Input, Select } from "./index";
import useInput from "../../hooks/use-input";
import "./Form.css";

function validateEmail(value) {
  let validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (value.match(validRegex)) {
    return true;
  }
  return false;
}

function validatePhone(value) {
  let validRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im;
  if (value.match(validRegex)) {
    return true;
  }
  return false;
}

const Form = () => {
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");

  const {
    value: enteredName,
    hasError: nameInputHasError,
    isValid: nameInputIsValid,
    valueChangeHandler: nameChangeHandler,
    inputBlurHndler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    hasError: emailInputHasError,
    isValid: emailInputIsValid,
    valueChangeHandler: emailChangeHandler,
    inputBlurHndler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput(validateEmail);

  const {
    value: enteredPhone,
    hasError: phoneInputHasError,
    isValid: phoneInputIsValid,
    valueChangeHandler: phoneChangeHandler,
    inputBlurHndler: phoneBlurHandler,
    reset: resetPhoneInput,
  } = useInput(validatePhone);

  const {
    value: enteredDate,
    hasError: dateInputHasError,
    isValid: dateInputIsValid,
    valueChangeHandler: dateChangeHandler,
    inputBlurHndler: dateBlurHandler,
    reset: resetDateInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredAddress,
    hasError: addressInputHasError,
    isValid: addressInputIsValid,
    valueChangeHandler: addressChangeHandler,
    inputBlurHndler: addressBlurHandler,
    reset: resetAddressInput,
  } = useInput((value) => value.trim() !== "");

  // validate over all form
  let formValid = false;

  if (
    nameInputIsValid &&
    emailInputIsValid &&
    phoneInputIsValid &&
    dateInputIsValid &&
    addressInputIsValid
  ) {
    formValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!formValid) {
      return;
    }

    // print form
    console.log(enteredName);
    console.log(enteredEmail);
    console.log(enteredPhone);
    console.log(enteredDate);
    console.log(gender);
    console.log(enteredAddress);
    console.log(country);

    // clear input after submit
    resetNameInput();
    resetEmailInput();
    resetPhoneInput();
    resetDateInput();
    setGender("");
    setCountry("");
    resetAddressInput();
  };

  return (
    <section className="container">
      <header>Registration Form</header>
      <form onSubmit={formSubmitHandler}>
        <Input
          label="Full Name"
          hasError={nameInputHasError}
          message="Your name must not be an empty!"
          input={{
            onChange: nameChangeHandler,
            onBlur: nameBlurHandler,
            value: enteredName,
            id: "fullname",
            type: "text",
            placeholder: "Enter full name",
            name: "fullname",
          }}
        />

        <Input
          label="Email"
          hasError={emailInputHasError}
          message="Email must not be embty"
          input={{
            onChange: emailChangeHandler,
            onBlur: emailBlurHandler,
            value: enteredEmail,
            id: "email",
            type: "email",
            placeholder: "Example@mail.com",
            name: "email",
          }}
        />

        <div className="column">
          <Input
            label="Phone number is wrong"
            hasError={phoneInputHasError}
            message="Phone required"
            input={{
              onChange: phoneChangeHandler,
              onBlur: phoneBlurHandler,
              value: enteredPhone,
              id: "phonenumber",
              type: "text",
              placeholder: "123-456-7890",
              name: "phonenumber",
              minLength: 0,
              maxLength: 15,
            }}
          />
          <Input
            label="Birth Date"
            hasError={dateInputHasError}
            message="Birth Date required"
            input={{
              onChange: dateChangeHandler,
              onBlur: dateBlurHandler,
              value: enteredDate,
              id: "birthdate",
              type: "date",
              name: "birthdate",
            }}
          />
        </div>

        <div className="gender-box">
          <h3>Gender</h3>
          <div className="gender-option">
            <div className="gender">
              <input
                type="radio"
                id="male"
                name="gender"
                value="Male"
                onClick={(e) => setGender(e.target.value)}
              />
              <label htmlFor="male">Male</label>
            </div>
            <div className="gender">
              <input
                type="radio"
                id="femail"
                name="gender"
                value="Femail"
                onClick={(e) => setGender(e.target.value)}
              />
              <label htmlFor="femail">Femail</label>
            </div>
            <div className="gender">
              <input
                type="radio"
                id="others"
                name="gender"
                value="Prefered not say"
                onClick={(e) => setGender(e.target.value)}
              />
              <label htmlFor="others">Prefered not say</label>
            </div>
          </div>
        </div>

        <Input
          label="Address"
          hasError={addressInputHasError}
          message="required"
          input={{
            onChange: addressChangeHandler,
            onBlur: addressBlurHandler,
            value: enteredAddress,
            id: "address",
            type: "text",
            placeholder: "Enter street address",
            name: "address",
          }}
        />

        <Select onChange={(e) => setCountry(e.target.value)}>
          <option hidden>Country</option>
          <option>Egypt</option>
          <option>USA</option>
          <option>Germany</option>
        </Select>
        <Button>Submit</Button>
      </form>
    </section>
  );
};

export default Form;
