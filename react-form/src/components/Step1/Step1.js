import React from 'react';
import './Step1.css'
import stepper1 from '../../assets/images/stepper1.png'
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {useNavigate} from 'react-router-dom';
import { useData } from '../../DataContext';

const schema = yup.object().shape({
    nickname: yup.string().required('Обязательное поле')
    .matches(/^[а-яА-ЯёЁa-zA-Z0-9]+$/, 'Никнейм не должен содержать спецсимволы')
    .max(30, 'Максимальное число символов: 30'),
    firstName: yup.string().required('Обязательное поле')
    .matches(/^[а-яА-ЯёЁa-zA-Z]+$/, 'Имя должно содержать только буквы')
    .max(30, 'Максимальное число символов: 50'),
    lastName: yup.string().required('Обязательное поле')
    .matches(/^[а-яА-ЯёЁa-zA-Z]+$/, 'Имя должно содержать только буквы')
    .max(30, 'Максимальное число символов: 50'),
    sex: yup.string().required('Обязательное поле')
})

const Step1 = () => {
    const { setValues, data: globalData } = useData();
    const navigate = useNavigate()
    const { register, handleSubmit, formState:{errors} } = useForm({
        mode: "onBlur",
        resolver: yupResolver(schema),
        defaultValues: { nickname: globalData.nickname, 
            lastName: globalData.lastName, firstName: globalData.firstName,
            sex: globalData.sex },
    })
    const onSubmit = (data) => {
        console.log(data)
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
                    <p>{errors.nickname?.message}</p>
                </div>
                <div className='step-input'>
                    <label>Имя</label>
                    <input type='text' name='firstName' 
                    placeholder='Placeholder' {...register("firstName")}/>
                    <p>{errors.firstName?.message}</p>
                </div>
                <div className='step-input'>
                    <label>Фамилия</label>
                    <input type='text' name='lastName' 
                    placeholder='Placeholder' {...register("lastName")}/>
                    <p>{errors.lastName?.message}</p>
                </div>
                <div className='step-input'>
                    <label>Пол</label>
                    <select name='sex'{...register("sex")} >
                        <option selected disabled value="">Не выбрано</option>
                        <option value='man'>мужской</option>
                        <option value='woman'>женский</option>
                    </select>
                    <p>{errors.sex?.message}</p>
                </div>
                <div className='step-buttons'>
                <button onClick={goBack} type="button" className='button button-back'>Назад</button>
                <button type='submit' className='button button-next'>Далее</button>
                </div>
                
            </form>
        </div>
    )
}
export default Step1;