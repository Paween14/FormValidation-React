import React, {Component} from 'react';

class Section3 extends Component {

    isValidLink = link => {
        return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/.test(link);
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

    render() {
        const { portfolio, comment, handleChange, handleBlur } = this.props;

        return (
            <section className="mb-2">
                <div className="head-section">
                    <h4>3. Portfolio</h4>
                    <hr />
                </div>
                <p className="bright-grey-text mt-1-5 mb-3">Prove you're IBM's next great designer by showing us who you are. What you've done. How you think. Tell us your story.</p>

                <div>
                    <p className="popup-notice">
                        <input 
                            type="url" 
                            name="portfolio" 
                            id="portfolio-link" 
                            value={ portfolio }
                            onChange={ handleChange }
                            onInput={ this.createListener(this.isValidLink) }
                            onBlur={ handleBlur }
                            placeholder="Portfolio link*  (http://example.com)" 
                        />
                        <span>Must be a valid url</span>
                    </p>
                    <textarea 
                        rows="5" 
                        cols="100" 
                        name="comment"
                        className="mt-2" 
                        maxLength="250" 
                        id="comment" 
                        value={ comment }
                        onChange={ handleChange }
                        onBlur={ handleBlur }
                        placeholder="Anything else (another link, availability, etc)?"
                    >
                    </textarea> 
                    <br /> 
                </div>
            </section>
        );
    }
}

export default Section3;