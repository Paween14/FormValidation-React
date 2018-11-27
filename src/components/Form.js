import React, { Component } from 'react';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';

class Form extends Component {
    state = {
        fullName: '',
        email: '',
        reEmail: '',
        phone: '',
        address1: '',
        address2: '',
        city: '',
        state: '',
        countryOrRegion: '',
        zipCode: '',
        howDidYouHearAboutUs: '',
        primaryDiscipline: 'Design-Research',
        otherDisciplines: [],
        workLocation: [],
        portfolio: '',
        comment: '',
        touched: {
            fullName: false,
            email: false,
            reEmail: false,
            phone: false,
            address: false,
            city: false,
            countryOrRegion: false, 
            primaryDiscipline: false,
            workLocation:  false,
            portfolio: false
        }
    };

    handleChange = e => {
        let target = e.target;
        let name = target.name;
        let value = target.value;
        // let value = target.type === 'checkbox' ? target.checked : target.value;
        if (target.type === 'checkbox') {
            this.setState(prevState => {
                // console.log(this.state[name]);
                // console.log(prevState[name]);
                
                if (this.state[name].includes(value)) {
                    let test = this.state[name].filter(item => {                        
                        return item !== value;
                    });
                    return {
                        [name]: [...test]
                    }; 
                } else {
                    return {
                        [name]: [...this.state[name], value]
                    }; 
                }
            });
        } else {
            this.setState ({
                [name]: value,
            });
        } 

    };

    handleBlur = e => {
        let name;
        if (e.target.name === 'address1' || e.target.name === 'address2') {
            name = 'address';
        } else {
            name = e.target.name;
        }
        let value = e.target.value
        this.setState ({
          touched: {...this.state.touched, [name]: true},
        });

        if (name === 'fullName') {
            this.setState({
                fullName: this.formatFullName(value)
            });
        } else if (name === 'phone') {
            this.setState({
                phone: this.formatTelephone(value)
            });
        } else if (name === 'city' || name === 'state' || name === 'countryOrRegion' ) {
            this.setState({
                [name]: this.formatCityStateCountry(value)
            });
        } else if (name === 'zipCode') {
            this.setState({
                zipCode: this.formatZipCode(value)
            });
        } else if (name === 'reEmail') {
            // console.log(e.target);
            if (this.state.email !== this.state.reEmail) {
                e.target.style.color = 'red';
            } else {
                e.target.style.color = 'greenyellow';
            }
        }
    };

    
    formatFullName = text => {
        const regex = /^\s*([a-zA-Z]+)\s([a-zA-Z]+)\s*$/;
        const name = text.replace(regex, '$1 $2');
        const spiltName = name.split(' ');
        let fullName = '';
    
        for (let i = 0 ; i < spiltName.length ; i++) {
            const firstChar = spiltName[i].slice(0, 1).toUpperCase();
            const otherChars = spiltName[i].slice(1);
            fullName += firstChar + otherChars;   
        }
    
        return fullName.replace(/([A-Z])/g, ' $1' ).trim();
    }

    formatTelephone = text => {
        const regex = /^\D*(\d{3})\D*(\d{3})\D*(\d{4})\D*$/;
        return text.replace(regex, '($1) $2-$3');
    }

    formatCityStateCountry = text => {
        const textWithOutSpace = text.trim();
        const spiltSpace = textWithOutSpace.split(' ');
       
        let fullWord = '';
        for (let i = 0 ; i < spiltSpace.length ; i++) {
            const firstChar = spiltSpace[i].slice(0, 1).toUpperCase();
            const otherChars = spiltSpace[i].slice(1);
            fullWord += firstChar + otherChars;   
        }
    
        return fullWord.replace(/([A-Z])/g, ' $1' ).trim();
    }

    formatZipCode = code => {
        const regex = /^\s*([0-9-]{1,})\s*$/;
        return code.replace(regex, '$1').trim();
    }

    isCheckBoxChecked = () => {
        const popupNoticeForCheckBox = document.querySelector('.checkbox .popup-notice span');        
        if (this.state.workLocation.length === 0) {
            this.showOrHideTip(true, popupNoticeForCheckBox);    
        } else {
            this.showOrHideTip(false, popupNoticeForCheckBox);    
        }
    }

    createListener(validator) {
        return e => {
          const text = e.target.value;
          const valid = validator(text);
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

    handleSubmit = e => {
        e.preventDefault();

        let allTrue =   
            this.state.touched.fullName &&
            this.state.touched.email &&
            this.state.touched.reEmail &&
            this.state.touched.phone &&
            this.state.touched.address &&
            this.state.touched.city &&
            this.state.touched.countryOrRegion &&
            this.state.touched.primaryDiscipline &&
            this.state.touched.workLocation &&
            this.state.touched.portfolio &&
            this.state.fullName !== '' &&
            this.state.email !== '' &&
            this.state.reEmail !== '' &&
            this.state.phone !== '' &&
            (this.state.address1 !== '' || this.state.address2 !== '') &&
            this.state.city !== '' &&
            this.state.countryOrRegion !== '' &&
            this.state.primaryDiscipline !== '' &&
            this.state.workLocation.length !== 0;

        if( allTrue ) {
            // checks if all are filled correctly!
            this.props.addUser(this.state);
            alert('Your form is SUBMITTED')
            this.reformAfterSubmit();
            // here is for function that sends form to server
        } else {
            alert('Please correctly fill all the required fields with * sign!')
            this.isCheckBoxChecked();
        }
    };

    reformAfterSubmit = () => {
        this.setState({
            fullName: '',
            email: '',
            reEmail: '',
            phone: '',
            address1: '',
            address2: '',
            city: '',
            state: '',
            countryOrRegion: '',
            zipCode: '',
            howDidYouHearAboutUs: '',
            primaryDiscipline: 'Design-Research',
            otherDisciplines: [],
            workLocation: [],
            portfolio: '',
            comment: '',
            touched: {
                fullName: false,
                email: false,
                reEmail: false,
                phone: false,
                address: false,
                city: false,
                countryOrRegion: false, 
                primaryDiscipline: false,
                workLocation:  false,
                portfolio: false
            }
        });
    } 




    render() {

        return (
            <form id="myform" onSubmit={this.handleSubmit}>
                {/* <!-- Part 1 Personal Info --> */}
            <Section1 
                fullName = { this.state.fullName }
                email={ this.state.email }
                reEmail={ this.state.reEmail }
                phone={ this.state.phone }
                address1={ this.state.address1 }
                address2={ this.state.address2 }
                city={ this.state.city }
                state={ this.state.state }
                countryOrRegion={ this.state.countryOrRegion }
                zipCode={ this.state.zipCode }
                howDidYouHearAboutUs={ this.state.howDidYouHearAboutUs }
                handleChange={ this.handleChange }
                handleBlur={ this.handleBlur }
            />
                {/* <!-- Part 2 Skills and location --> */}
            <Section2 
                primaryDiscipline={ this.state.primaryDiscipline }
                otherDisciplines={ this.state.otherDisciplines }
                workLocation={ this.state.workLocation }
                handleChange={ this.handleChange }
                handleBlur={ this.handleBlur }
            />
                {/* <!-- Part 3 Portfolio --> */}
            <Section3 
                portfolio={ this.state.portfolio }
                comment={ this.state.comment }
                handleChange={ this.handleChange }
                handleBlur={ this.handleBlur }
            />
            <input 
                type="submit" 
                className="submit-btn mt-2 mb-2" 
                id="submit" 
                value="Submit" 
            /> 
            </form>
        );
    }
}

export default Form;