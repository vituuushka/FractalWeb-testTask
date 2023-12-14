import {React, useState} from "react";
import { useData } from "../../DataContext";
import {useNavigate} from 'react-router-dom';
import { useForm } from "react-hook-form";
import stepper3 from '../../assets/images/stepper3.png';
import './Step3.css';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import { sendFormMock } from "../../api/sendForm";
import Modal from "../Modal/Modal";

const schema = yup.object().shape({
    about: yup.string().required('Обязательное поле').max(30, 'Максимальное число символов: 200')
})
const Step3 = () => {
    const { setValues, data: globalData } = useData();
    const navigate = useNavigate()
    const { register, handleSubmit, formState:{errors} } = useForm({
        mode: "onBlur",
        resolver: yupResolver(schema),
        defaultValues: { about: globalData.about}
    })

    const[isSent,setIsSent] = useState(false)
    const[result,setResult] = useState()
    const onSubmit = async(data) => {
        setIsSent(true)
        const res = await sendFormMock(data)
        setResult(res)
    }

    const goBack = () => {
        navigate('/step2')
    }




    return(
        <div className="background background-step3">
            <div className='stepper'>
                <img src={stepper3} />
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className='step-form step3-form' >
            <div className='step-input'>
                    <label>О себе</label>
                    <input type='text' name='about'
                    placeholder='Placeholder' {...register("about")}/>
                    <p>{errors.about?.message}</p>
                </div>
            <div className='step-buttons'>
                <button onClick={goBack} type="button" className='button button-back'>Назад</button>
                <button type='submit' className='button button-next'>Отправить</button>
                </div>
            </form>
            {isSent && <div className="modal">
                <div className="hidden"></div>
                
                {result && <Modal ok={result.ok} />}
             
                
                </div>}
        </div>
        
    )
}
export default Step3;