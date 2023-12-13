import React from "react";
import { useForm } from "react-hook-form";
import { useRef } from "react";



const Advantage = ({name,removeAdvantage,id,onTextChange,advantage}) => {
    const { register, handleSubmit, formState:{errors} } = useForm()
    const advValue = useRef()
    const onChange = (e)=> {
        onTextChange(id,e.target.value)
    }
    const deleteAdv = () => {
        removeAdvantage(id)
    }
    
    return (
        <div>
            <input type="text" name={name}
             placeholder="Placeholder"
             ref={advValue}
             value={advantage}
             {...register(name)}

             onChange={onChange}
             ></input>
            <button type="button"  onClick={deleteAdv} >delete</button>
        </div>
    )
}
export default Advantage;