import React from "react";
import './Main.css'
import avatar from '../../assets/images/avatar.png'
import { useForm } from "react-hook-form";
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import folder from '../../assets/images/folder.png'

const schema = yup.object().shape({
    phone: yup.string().required().matches(/[+7][0-9]{10}$/, 'Неверный номер телефона'),
    email: yup.string().required().email()
})
const Main = () => {
    const { register, handleSubmit, formState:{errors} } = useForm({
        mode: "onBlur",
        resolver: yupResolver(schema)
    })
    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <div className="background">
            <header className="header">
                <div className="header-image">
                   <img src={avatar} className="header-img"/>
                </div>
                <div className="header-text" >
                    <div className="header-title">Алексей Иванов</div>
                    <div className="header-items">
                        <div className="header-item">
                            <img src={folder} />
                            <div className="header-item-text">Telegram</div>
                        </div>
                        <div className="header-item">
                            <img src={folder} />
                            <div className="header-item-text">GitHub</div>
                        </div>
                        <div className="header-item">
                            <img src={folder} />
                            <div className="header-item-text">Резюме</div>
                        </div>
                    </div>
                </div>
            </header>
            <form onSubmit={handleSubmit(onSubmit)} className="main-form">
                <div className="main-input">
                    <label>Номер телефона</label>
                    <input type="number" name="phone" 
                    placeholder="+7 999 999-99-99" {...register("phone")}/>
                    <p>{errors.phone?.message}</p>
                </div>
                <div className="main-input">
                    <label>Email</label>
                    <input type="email" name="email" 
                    placeholder="webstudio.fractal@example.com" {...register("email")} />
                    <p>{errors.email?.message}</p>
                </div>
                <button type="submit" className="button-start">Начать</button>
            </form>
        </div>
    )
}
export default Main