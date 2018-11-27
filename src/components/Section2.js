import React, {Component} from 'react';

class Section2 extends Component {

    /* state={
        otherDisciplines: [],
        workLocation: [],
    };

    handleChange = e => {
        let target = e.target;
        let name = target.name;
        let value = target.value;
        // let value = target.type === 'checkbox' ? target.checked : target.value;
        if (target.type === 'checkbox') {
            this.setState(prevState => {
                
                if (prevState[name].includes(value)) {
                    let test = prevState[name].filter(item => {
                        return item !== value;
                    });

                    return {
                        [name]: [...test]
                    }; 
                } else {
                    return {
                        [name]: [...prevState[name], value]
                    }; 
                }
            });
        } else {
            this.setState ({
                [name]: value,
            });
        }

    }; */

    render() {
        const { primaryDiscipline, otherDisciplines, workLocation, handleChange, handleBlur } = this.props;

        return (
            <section className="mb-2">
                <div className="head-section">
                    <h4>2. Skills and location</h4>
                    <hr />
                </div>

                <div>
                    <div className="mt-1 mb-1 ">
                        <p className="bright-grey-text mb-1">Which is your primary design discipline?*</p>
                        <div className="sec2-container-1">
                            <input 
                                type="radio" 
                                className="style-radio" 
                                id="research" 
                                name="primaryDiscipline" 
                                value="Design-Research" 
                                checked={ primaryDiscipline === 'Design-Research' }
                                onChange={ handleChange }
                                onClick={ handleBlur }
                            /> 
                            <label htmlFor="research">Design Research</label>
                            <input 
                                type="radio" 
                                className="style-radio" 
                                id="visual" 
                                name="primaryDiscipline" 
                                value="Visual-Design"
                                checked={ primaryDiscipline === 'Visual-Design' }
                                onChange={ handleChange }
                                onClick={ handleBlur } 
                            />
                            <label htmlFor="visual">Visual Design</label>
                            <input 
                                type="radio" 
                                className="style-radio" 
                                id="ux" 
                                name="primaryDiscipline" 
                                value="UX-Design" 
                                checked={ primaryDiscipline === 'UX-Design' }
                                onChange={ handleChange }
                                onClick={ handleBlur } 
                            />
                            <label htmlFor="ux">UX Design</label>
                            <input 
                                type="radio" 
                                className="style-radio" 
                                id="front-end" 
                                name="primaryDiscipline" 
                                value="Front-end-Dev"
                                checked={ primaryDiscipline === 'Front-end-Dev' }
                                onChange={ handleChange }
                                onClick={ handleBlur }  
                            />
                            <label htmlFor="front-end">Front-end Dev</label>
                        </div>
                    </div>

                    <div className="sec2-container-2">
                        <div className="checkbox mt-1 mb-1">
                            <p className="bright-grey-text mb-1">Do you have experience with any other disciplines?</p>
                            <input 
                                type="checkbox" 
                                id="research2" 
                                name="otherDisciplines" 
                                value="Design-Research2" 
                                checked={ otherDisciplines.includes("Design-Research2") }
                                onChange={ handleChange }
                                onClick={ handleBlur }
                            />  
                            <label htmlFor="research2">Design Research</label>
                            <input 
                                type="checkbox" 
                                id="visual2" 
                                name="otherDisciplines" 
                                value="Visual-Design2"
                                checked={ otherDisciplines.includes("Visual-Design2") }
                                onChange={ handleChange }
                                onClick={ handleBlur }
                            />
                            <label htmlFor="visual2">Visual Design</label> 
                            <input 
                                type="checkbox" 
                                id="ux2" 
                                name="otherDisciplines" 
                                value="UX-Design2" 
                                checked={ otherDisciplines.includes("UX-Design2") }
                                onChange={ handleChange }
                                onClick={ handleBlur }
                            />
                            <label htmlFor="ux2">UX Design</label>
                            <input 
                                type="checkbox" 
                                id="front-end2" 
                                name="otherDisciplines" 
                                value="Front-end-Dev2" 
                                checked={ otherDisciplines.includes("Front-end-Dev2") }
                                onChange={ handleChange }
                                onClick={ handleBlur }
                            />
                            <label htmlFor="front-end2">Front-end Development</label>
                        </div>
                        
                        <div className="checkbox mt-1 mb-1">
                            <p className="bright-grey-text mb-0-5">Where are you interested in working?*</p>
                            <p className="grey-1-text mb-1">You must be legally authorised to work without visa sponsorship in the location you choose.</p>
                            <p className="popup-notice">
                                <span>! Please select location(s) which you are interested working in</span>
                            </p>
                            <input 
                                type="checkbox" 
                                id="texas" 
                                name="workLocation" 
                                value="Austin-Texas" 
                                checked={ workLocation.includes("Austin-Texas") }
                                onChange={ handleChange }
                                onClick={ handleBlur }
                            />
                            <label htmlFor="texas">Austin, Texas</label>
                            <input 
                                type="checkbox" 
                                id="ny" 
                                name="workLocation" 
                                value="New-York" 
                                checked={ workLocation.includes("New-York") }
                                onChange={ handleChange }
                                onClick={ handleBlur }
                            />
                            <label htmlFor="ny">New York, New York</label>
                            <input 
                                type="checkbox" 
                                id="canada" 
                                name="workLocation" 
                                value="Toronto-Canada" 
                                checked={ workLocation.includes("Toronto-Canada") }
                                onChange={ handleChange }
                                onClick={ handleBlur }
                            />
                            <label htmlFor="canada">Toronto, Canada</label>
                            <input 
                                type="checkbox" 
                                id="china" 
                                name="workLocation" 
                                value="Shanghai-China"
                                checked={ workLocation.includes("Shanghai-China") }
                                onChange={ handleChange }
                                onClick={ handleBlur }
                            />
                            <label htmlFor="china">Shanghai, China</label>
                            <input 
                                type="checkbox" 
                                id="ireland" 
                                name="workLocation" 
                                value="Dublin-Ireland" 
                                checked={ workLocation.includes("Dublin-Ireland") }
                                onChange={ handleChange }
                                onClick={ handleBlur }
                            />
                            <label htmlFor="ireland">Dublin, Ireland</label>
                            <input 
                                type="checkbox" 
                                id="uk" 
                                name="workLocation" 
                                value="Hursley-unitedkingdom" 
                                checked={ workLocation.includes("Hursley-unitedkingdom") }
                                onChange={ handleChange }
                                onClick={ handleBlur }
                            />
                            <label htmlFor="uk">Hursley, United Kingdom</label>
                            <input 
                                type="checkbox" 
                                id="germany" 
                                name="workLocation" 
                                value="Boeblingen-germany" 
                                checked={ workLocation.includes("Boeblingen-germany") }
                                onChange={ handleChange }
                                onClick={ handleBlur }
                            />
                            <label htmlFor="germany">Boeblingen, Germany</label>
                            <input 
                                type="checkbox" 
                                id="others" 
                                name="workLocation" 
                                value="Somewhere-else" 
                                checked={ workLocation.includes("Somewhere-else") }
                                onChange={ handleChange }
                                onClick={ handleBlur }
                            />
                            <label htmlFor="others">Somewhere else</label>
                        </div>
                    </div> 
                </div>
            </section>
        );
    }
}

export default Section2;

// https://magnusbenoni.com/radio-buttons-react/
// controlled components.  means that we will control whether or not a radio button is selected, based on the state.