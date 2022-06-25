import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({children,isGoogleSignIN,...otherprops})=>(
    <button className={` ${isGoogleSignIN? 'isGoogleSignIN' : '' }   custom-button`}  {...otherprops}  >
      {children}
    </button>
)

export  default CustomButton;