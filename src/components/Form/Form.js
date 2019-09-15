import React, { useState, createContext } from "react";
import PropTypes from "prop-types";

export const FormContext = createContext({
    onValueChange: () => {}
});

const Form = (props) => {
    const [ formData, setFormData ] = useState({});
    const { onSubmit } = props;

    const onValueChange = (key, value) => {
        formData[key] = value;
        setFormData(formData);
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        onSubmit({ data: formData });
    }

    return (<form onSubmit={onFormSubmit}>
        <FormContext.Provider value={{onValueChange: onValueChange}}>
            {props.children}
        </FormContext.Provider>
    </form>);
};

Form.propTypes = {
    onSubmit: PropTypes.func.isRequired
}

export default Form;