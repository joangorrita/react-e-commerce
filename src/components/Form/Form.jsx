import React from 'react';
import './style.css';

const Form = ({ handleChange, submit, formData, error }) => {
    return (
        <form onSubmit={submit}>
            {
                Object.keys(formData).map((key, i) => (
                    <div key={i} style={{ width: "100%" }}>
                        <label htmlFor={key}>Ingrese {key}</label>
                        <input 
                            type="text" 
                            name={key} 
                            id={key} 
                            onChange={handleChange} 
                            value={formData[key]} 
                        />
                        {error[key] && <span>{error[key]}</span>}
                    </div>
                ))
            }
            <button className='btn btn-primary'>Crear orden</button>
        </form>
    );
}

export default Form;
