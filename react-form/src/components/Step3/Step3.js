import React from "react";
import { useData } from "../../DataContext";
import {useNavigate} from 'react-router-dom';
import { useForm } from "react-hook-form";

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
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className='step-form' >
            <div className='step-buttons'>
                <button onClick={goBack} type="button" className='button-back'>Назад</button>
                <button type='submit' className='button-next'>Далее</button>
                </div>
            </form>
        </div>
    )
}
export default Step3;