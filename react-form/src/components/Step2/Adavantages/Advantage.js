import React from "react";
import { useForm } from "react-hook-form";
import { useRef } from "react";
import advDelete from '../../../assets/images/delete-adv.png'
import s from './Advantage.module.css'


const Advantage = ({name,removeAdvantage,id,onTextChange,advantage, errors,register}) => {
    const advValue = useRef()
    const onChange = (e)=> {
        onTextChange(id,e.target.value)
    }
    const deleteAdv = () => {
        removeAdvantage(id)
    }
    
    return (
        <div className={s.input}>
            <input type="text" name={name}
             placeholder="Placeholder"
             ref={advValue}
             value={advantage}
             {...register(name)}
             onChange={onChange}/>
             <p>{errors[name]?.message}</p>
            <button className={s.button} type="button" onClick={deleteAdv}><img src={advDelete} /></button>
        </div>
    )
}
export default Advantage;