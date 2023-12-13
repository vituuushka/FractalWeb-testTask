import React from 'react';
import './Step1.css'
import stepper1 from '../../assets/images/stepper1.png'
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {useNavigate} from 'react-router-dom';
import { useData } from '../../DataContext';
// const schema = yup.object().shape({
//     phone: yup.string().required('Обязательное поле').matches(/[+7][0-9]{10}$/, 'Неверный номер телефона'),
//     email: yup.string().required('Обязательное поле').email('Неверный адрес почты')
// })
const Step1 = () => {
    const { setValues, data: globalData } = useData();
    const navigate = useNavigate()
    const { register, handleSubmit, formState:{errors} } = useForm({
        mode: "onBlur",
        // resolver: yupResolver(schema)
        defaultValues: { nickname: globalData.nickname, lastName: globalData.lastName, firstName: globalData.firstName, },
    })
    const onSubmit = (data) => {
        setValues(data)
        navigate('/step2')
    }
    const goBack = () => {
        navigate('/')
    }
    return (
        <div className='background background-step1'>
            <div className='stepper'>
                <img src={stepper1} />
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className='step-form'>
                <div className='step-input'>
                    <label>Никнейм</label>
                    <input type='text' name='nickname'
                    placeholder='Placeholder' {...register("nickname")}/>
                </div>
                <div className='step-input'>
                    <label>Имя</label>
                    <input type='text' name='firstName' 
                    placeholder='Placeholder' {...register("firstName")}/>
                </div>
                <div className='step-input'>
                    <label>Фамилия</label>
                    <input type='text' name='lastName' 
                    placeholder='Placeholder' {...register("lastName")}/>
                </div>
                <div className='step-input'>
                    <label>Пол</label>
                    <select >
                        <option value='0' >Не выбрано</option>
                        <option>мужской</option>
                        <option>женский</option>
                    </select>
                </div>
                <div className='step-buttons'>
                <button onClick={goBack} type="button" className='button-back'>Назад</button>
                <button type='submit' className='button-next'>Далее</button>
                </div>
                
            </form>
        </div>
    )
}
export default Step1;