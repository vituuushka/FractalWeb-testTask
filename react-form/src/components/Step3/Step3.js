import React from "react";
import { useData } from "../../DataContext";
import {useNavigate} from 'react-router-dom';
import { useForm } from "react-hook-form";
import stepper3 from '../../assets/images/stepper3.png'

const Step3 = () => {
    const { setValues, data: globalData } = useData();
    const navigate = useNavigate()
    const { register, handleSubmit, formState:{errors} } = useForm({
        mode: "onBlur",
        // resolver: yupResolver(schema)
    })
    const onSubmit = (data) => {
        setValues(data)
        navigate('/')
    }

    const goBack = () => {
        navigate('/step2')
    }

    return(
        <div background background-step3>
            <div className='stepper'>
                <img src={stepper3} />
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className='step-form' >
            <div className='step-input'>
                    <label>О себе</label>
                    <input type='text' name='about'
                    placeholder='Placeholder' {...register("about")}/>
                    <p>{errors.about?.message}</p>
                </div>
            <div className='step-buttons'>
                <button onClick={goBack} type="button" className='button button-back'>Назад</button>
                <button type='submit' className='button button-next'>Далее</button>
                </div>
            </form>
        </div>
    )
}
export default Step3;