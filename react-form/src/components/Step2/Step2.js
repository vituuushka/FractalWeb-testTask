import React, { useState } from 'react';
import './Step2.css'
import stepper1 from '../../assets/images/stepper1.png'
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {useNavigate} from 'react-router-dom';
import { useData } from '../../DataContext';
import Advantages from './Adavantages/Advantages';

// const schema = yup.object().shape({
//     phone: yup.string().required('Обязательное поле').matches(/[+7][0-9]{10}$/, 'Неверный номер телефона'),
//     email: yup.string().required('Обязательное поле').email('Неверный адрес почты')
// })
const generateAdvantageName = (i) => `advantage-${i+1}`

const Step2 = () => {
    
    const { setValues, data: globalData } = useData();
    const navigate = useNavigate()


    const defaultValues = { checkbox: globalData.checkbox }

    const defaultAdvantages = globalData.advantages
    if (defaultAdvantages?.length) {
        for (let i = 0; i < defaultAdvantages.length; i++) {
            const adventageName = generateAdvantageName(i)
            defaultValues[adventageName] = defaultAdvantages[i]
        }
    }
    const[advantages,setAdvantages] = useState(defaultAdvantages || [])
    const[text,setText] = useState('')





    const { register, handleSubmit, formState:{errors} } = useForm({
        mode: "onBlur",
        // resolver: yupResolver(schema)
        defaultValues,
    })
    const onSubmit = (data) => {
        setValues({...data, advantages})
        navigate('/step3')
    }

    const goBack = () => {
        const res = window.confirm('При переходе на предыдущий шаг данные не будут сохранены')
        if(res) {
            navigate('/step1')
        }
    }

    const addAdvantage = () => {
        setAdvantages([...advantages,''])
    }

    const removeAdvantage = (targetIndex) => {
        const newADv = advantages.filter((value,index) => index !== targetIndex)
        setAdvantages(newADv)
    }
    const onTextChange = (index,value) => {
        advantages[index] = value
        setAdvantages([...advantages])
    }

    return (
        <div className='background background-step1'>
            <div className='stepper'>
                <img src={stepper1} />
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className='step-form'>
                <div>Advantages</div>
                <Advantages advantages={advantages}
                addAdvantage={addAdvantage} 
                removeAdvantage={removeAdvantage} 
                generateAdvantageName={generateAdvantageName}
                onTextChange = {onTextChange} />
                <div className='step-buttons'>
                <button onClick={goBack} type="button" className='button-back'>Назад</button>
                <button type='submit' className='button-next'>Далее</button>
                </div>
                
            </form>
        </div>
    )
}

export default Step2;