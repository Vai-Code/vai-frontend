import React, { useRef } from 'react';
import { styles } from "../styles";
import "./ChatWindow.css"
import Logo from "../../../images/logo.png"
import TextArea from "antd/lib/input/TextArea";
import emailjs from '@emailjs/browser';

const ChatWindow = (props) => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_jdi7qfy', 'template_i0249tl', form.current, 'aHWaiOv2NEANPwN7i')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
    return (
        <div>
            <div 
                className='transition-3 c-container formulario-chat'
                style={{
                    ...styles.supportWindow,
                    ...{ opacity: props.visible ? '1' : '0' }
                }}
            >
                <div className="c-banner">
                    <img src={Logo}></img>
                </div>
                <div className="c-form">
                    <form className="c-form-form" ref={form} onSubmit={sendEmail}>
                        <div className="c-form-form-name"><input type="text" name="name" placeholder="Escribe tu nombre completo" required/></div>
                        <div className="c-form-form-university"><input type="text" name="university" placeholder="Escribe tu universidad" required/></div>
                        <div className="c-form-form-mail"><input type="email" name="mail" placeholder="Escribe tu correo" required/></div>
                        <div className="c-form-form-message"><TextArea name="message" placeholder="Escribe tu mensaje" required></TextArea> </div>
                        <div>
                            <button className='c-form-form-submit'>
                                <span className='text_1'>Enviar</span>
                                <span className='text_2'>Su mensaje fue enviado</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default ChatWindow;