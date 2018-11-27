import React, {Component} from 'react';

class Section1 extends Component {

    isValidFullname = fullname => {
        return /^\s*[a-zA-Z]+\s[a-zA-Z]+\s*$/.test(fullname);
    }
    
    isValidEmail = email => {
        return /^[^@]+@[^@.]+\.[a-z]+$/.test(email);
    }
    
    isValidReEmail = (text, e) => {
        let validation = this.props.email === text && /^[^@]+@[^@.]+\.[a-z]+$/.test(text);
        if (validation === false) {
            // console.log(e.target);
            e.target.style.color = 'rgb(233,233,233)';
        } else {
            e.target.style.color = 'greenyellow';
        }
        return this.props.email === text && /^[^@]+@[^@.]+\.[a-z]+$/.test(text);
    }
    
    isValidTelephone = telephone => {
        return /^\D*\d{3}\D*\d{3}\D*\d{4}\D*$/.test(telephone);
    }

    isValidCityStateCountry = cityStateCountry => {
        return /^\s*[a-zA-Z -]+\s*$/.test(cityStateCountry);
    }

    isValidZipCode = zipcode => {
        return /^\s*[0-9-]{1,}\s*$/.test(zipcode);
    }

/*     isAddressFilled = () => {
        return (address1.value !== '' || address2.value !== '')? true : false;
    } */

    createListener(validator) {
        return e => {
          const text = e.target.value;
          const valid = validator(text, e);
          const showTip = text !== "" && !valid;    // meaning (text !== "") && !valid, so if 'valid' is matched => !valid is false then call showOrHideTip() with false =>> display = none;
          const tooltip = e.target.nextElementSibling;  // means to the <span> element which is the next sibling also        
          this.showOrHideTip(showTip, tooltip);
        };
    }
  
    showOrHideTip(show, element) {
        // this function accepts a Boolean value and an element, if the 'show' parameter is true, it sets the element's CSS to display property to inherit, making it visible. Otherwise, it sets the display to none, hiding it. wil use this function to show and hide the tooltips
        // show element when show is true, hide when false
        if (show) {
          element.style.display = "inherit";
        } else {
          element.style.display = "none";
        }
    }

    render() { 
        const { fullName, email, reEmail, phone, address1, address2, city, state, countryOrRegion, zipCode, howDidYouHearAboutUs, handleChange, handleBlur } = this.props;

        return (
            <section className="mb-2">
                <div className="head-section">
                    <h4>1. Personal information</h4>
                    <hr />
                </div>

                <div>
                    <div>
                        <p className="popup-notice">
                            <input 
                                type="text" 
                                name="fullName" 
                                id="fullname" 
                                minLength="1" 
                                maxLength="50" 
                                value={ fullName }
                                onChange={ handleChange }
                                onInput={ this.createListener(this.isValidFullname) }
                                onBlur={ handleBlur }
                                placeholder="Full name*" 
                                pattern ="\s*[a-zA-Z]+\s[a-zA-Z]+\s*" 
                            />
                            <span>Please type in your first name and last name</span>
                        </p>
                        <p className="popup-notice">
                            <input 
                                type="email" 
                                name="email" 
                                id="email" 
                                value={ email }
                                onChange={ handleChange }
                                onInput={ this.createListener(this.isValidEmail) }
                                onBlur={ handleBlur }
                                placeholder="Email*" 
                                pattern="[^@]+@[^@.]+\.[a-z]+" 
                            />
                            <span>Must be a valid email address</span>
                        </p>
                        <p className="popup-notice">
                            <input 
                                type="email" 
                                name="reEmail" 
                                id="re-email"
                                value={ reEmail }
                                onChange={ handleChange }
                                onInput={ this.createListener(this.isValidReEmail) }
                                onBlur={ handleBlur } 
                                placeholder="Re-enter email*" 
                                pattern="[^@]+@[^@.]+\.[a-z]+" 
                            />
                            <span>Must be the same valid email address as above</span>
                        </p>
                        <p className="popup-notice">
                            <input 
                                type="tel" 
                                name="phone" 
                                id="phone" 
                                value={ phone }
                                onChange={ handleChange }
                                onInput={ this.createListener(this.isValidTelephone) }
                                onBlur={ handleBlur }
                                placeholder="Phone#*" 
                                pattern ="\D*\d{3}\D*\d{3}\D*\d{4}\D*" 
                            />
                            <span>Must be 10 digits of telephone number</span>
                        </p>    
                    </div>

                    <div className="mt-1-5">
                        <input 
                            type="text" 
                            name="address1" 
                            id="address1"
                            value={ address1 } 
                            onChange={ handleChange }
                            onBlur={ handleBlur }
                            placeholder="Address*" 
                        />
                        <input 
                            type="text" 
                            name="address2" 
                            id="address2" 
                            value={ address2 } 
                            onChange={ handleChange }
                            onBlur={ handleBlur }
                        />
                        <div className="address-container">
                            <p className="popup-notice">
                                <input 
                                    type="text" 
                                    name="city" 
                                    id="city" 
                                    value={ city }
                                    onChange={ handleChange }
                                    onInput={ this.createListener(this.isValidCityStateCountry) }
                                    onBlur={ handleBlur }
                                    placeholder="City*" 
                                    pattern="\s*[a-zA-Z -]+\s*" 
                                />
                                <span>Can only contain city name</span>
                            </p>                        
                            <p className="popup-notice">
                                <input 
                                    type="text" 
                                    name="state" 
                                    id="state" 
                                    value={ state }
                                    onChange={ handleChange }
                                    onInput={ this.createListener(this.isValidCityStateCountry) }
                                    onBlur={ handleBlur }
                                    placeholder="State" 
                                    pattern="\s*[a-zA-Z -]+\s*" 
                                />
                                <span>Can only contain state name</span>
                            </p>
                            <p className="popup-notice">
                                <input 
                                    type="text" 
                                    name="countryOrRegion" 
                                    id="country-region" 
                                    value={ countryOrRegion }
                                    onChange={ handleChange }
                                    onInput={ this.createListener(this.isValidCityStateCountry) }
                                    onBlur={ handleBlur }
                                    placeholder="Country/Region*" 
                                    pattern="\s*[a-zA-Z -]+\s*" 
                                />
                                <span>Can only contain country name</span>
                            </p>
                            <p className="popup-notice">
                                <input 
                                    type="text" 
                                    name="zipCode" 
                                    id="zipcode" 
                                    value={ zipCode }
                                    onChange={ handleChange }
                                    onInput={ this.createListener(this.isValidZipCode) }
                                    onBlur={ handleBlur }
                                    placeholder="Zip/Postal code" 
                                    pattern ="\s*[0-9- ]{1,}\s*" 
                                />
                                <span>The zip/postal code must be only number</span>
                            </p>
                        </div>
                        <input 
                            type="text" 
                            className="mt-1-5" 
                            maxLength="100" 
                            name="howDidYouHearAboutUs" 
                            id="hearaboutus"
                            value={ howDidYouHearAboutUs }
                            onChange={ handleChange } 
                            onBlur={ handleBlur }
                            placeholder="How did you hear about us" 
                        />
                    </div>
                </div>
            </section>
        );
    }
}

export default Section1;