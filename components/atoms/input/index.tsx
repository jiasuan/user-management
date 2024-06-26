import { InputComponentProps } from "@/interfaces";

import {
    Field,
} from 'formik';

export default function InputComponent(props: InputComponentProps){
  
    const { inputID, inputLabel, required, placeholder, errorMessage, touched } = props;
  
    return(
      <div className="text-xs">
          <label htmlFor={inputID} className={`${(touched && errorMessage) ? 'text-red-700' : ''}`}>{inputLabel}</label>{required && <span className="text-red-500"> *</span>}
          <Field id={inputID} name={inputID} placeholder={placeholder} required={required}
            className={`border rounded-lg w-full p-2 mt-1 ${(touched && errorMessage) ? 'bg-red-50 border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500' : 'bg-gray-50 border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500'}`}
          />
          {touched && errorMessage &&<p className="mt-1 text-xxs text-red-600">{errorMessage}</p>}
      </div>
    )
}