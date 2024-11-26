import {useEffect, useState } from "react";
import './CheckboxStyles.css'

export default function Checkbox({children, blackCheck, modalCheck, onChange, value}) {
    const [checked, setChecked] = useState(false)

    const handleCheck = (e) => {
        setChecked(e.target.checked);

        if (typeof onChange === 'function') {
            onChange(e.target.checked)
        }
    }


    return (
        <label style={{color: 'white'}} className={modalCheck ? 'checkbox-wrapper modal-check-wrapper' : 'checkbox-wrapper'}>
            <section>
                <input name="check" className={blackCheck ? 'checkbox-element-black' : 'checkbox-element'} type='checkbox' checked={checked} onChange={handleCheck} Reset/>
                <p>{children}</p>           
            </section>
        </label>
    );
}