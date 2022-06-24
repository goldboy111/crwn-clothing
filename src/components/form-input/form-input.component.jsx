import { Component } from "react";
import './form-input.styles.scss';

const FormInput = ({label,handleChange,...otherprops})=>(

    <div className="group">
        <input type="form-input" onChange={handleChange} {...otherprops} />
        {
            label ? (
                <label className={`${otherprops.value.length ? 'shrink':''} form-input-label` } >
                    {label}
                </label>
            ):null
        }
    </div>
)

export default FormInput;