import React, { useState } from 'react';
import './Step2.css'
import stepper2 from '../../assets/images/stepper2.png'
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {useNavigate} from 'react-router-dom';
import { useData } from '../../DataContext';
import Advantages from './Adavantages/Advantages';


const generateAdvantageName = (i) => `advantage-${i+1}`

const Step2 = () => {
    
    const { setValues, data: globalData } = useData();
    const navigate = useNavigate()


    const defaultValues = { checkbox1: globalData.checkbox1,
        checkbox2: globalData.checkbox2,
        checkbox3: globalData.checkbox3,
        radio: globalData.radio}
    
    const defaultAdvantages = globalData.advantages
    if (defaultAdvantages?.length) {
        for (let i = 0; i < defaultAdvantages.length; i++) {
            const advantageName = generateAdvantageName(i)
            defaultValues[advantageName] = defaultAdvantages[i]
        }
    }
    const[advantages,setAdvantages] = useState(defaultAdvantages || [])
    const[text,setText] = useState('')
    const shape = {}
    for (let i = 0; i < advantages.length; i++) {
        const advantageName = generateAdvantageName(i)
        shape[advantageName] = yup.string().required('Обязательное поле')
    }
    const schema = yup.object().shape(shape)
    



    const { register, handleSubmit, formState:{errors} } = useForm({
        mode: "onBlur",
        resolver: yupResolver(schema),
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
        <div className='background background-step2'>
            <div className='stepper'>
                <img src={stepper2} />
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className='step-form'>
                <div className='step-input' >
                <label className='adv-label' >Преимущества</label>
                <Advantages advantages={advantages}
                addAdvantage={addAdvantage} 
                removeAdvantage={removeAdvantage} 
                generateAdvantageName={generateAdvantageName}
                onTextChange = {onTextChange} 
                errors={errors}
                register={register}/>
                </div>
                <div className='step-input'>
                    <label>Checkbox группа</label>
                    <div className='checkbox-input'>
                        <input type='checkbox' value='1' {...register("checkbox1")}/>
                        <label>1</label>
                    </div>
                    <div className='checkbox-input'>
                        <input type='checkbox' value='2'{...register("checkbox2")}/>
                        <label>2</label>
                    </div>
                    <div className='checkbox-input'>
                        <input type='checkbox' value='3' {...register("checkbox3")}/>
                        <label>3</label>
                    </div>
                </div>
                <div className='step-input'>
                    <label>Radio группа</label>
                    <div className='checkbox-input'>
                        <input type='radio' value='1' {...register("radio")}/>
                        <label>1</label>
                    </div>
                    <div className='checkbox-input'>
                        <input type='radio' value='2'{...register("radio")}/>
                        <label>2</label>
                    </div>
                    <div className='checkbox-input'>
                        <input type='radio' value='3' {...register("radio")}/>
                        <label>3</label>
                    </div>
                </div>
                <div className='step-buttons'>
                <button onClick={goBack} type="button" className='button-back'>Назад</button>
                <button type='submit' className='button-next'>Далее</button>
                </div>
                
            </form>
        </div>
    )
}

export default Step2;