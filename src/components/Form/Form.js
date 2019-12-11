import React, { useState, createContext } from "react";
import PropTypes from "prop-types";

export const FormContext = createContext({
    onValueChange: () => {}
});

const Form = (props) => {
    const [ formData, setFormData ] = useState({});
    const [ formErrors, setFormErrors ] = useState({});
    const { className, onSubmit } = props;

    const onValueChange = (key, value, error) => {
        formData[key] = value;
        setFormData(formData);
        
        if (error) {
            formErrors[key] = error;
        } else {
            /* remove the error value */
            delete formErrors[key];
        }

        setFormErrors(formErrors);
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        onSubmit({ data: formData, errors: formErrors });
    }

    return (<form onSubmit={onFormSubmit} className={className}>
        <FormContext.Provider value={{onValueChange: onValueChange}}>
            {props.children}
        </FormContext.Provider>
    </form>);
};

Form.propTypes = {
    /** Pass any additional classNames to Form component */
    className: PropTypes.string,
    onSubmit: PropTypes.func.isRequired
};

Form.defaultProps = {
    className: ""
};

export default Form;