import React, { useState } from "react";
import { styles } from './styles'
import "./styles.css"

const Avatar = (props) => {
    const [hovered, setHovered] = useState(false)
    return (
        <div style={props.style}>
            <div 
            
                className='transition-3'
                style={{
                    ...styles.avatarHello,
                    ...{ opacity: hovered ? '1' : '0' }
                }}
            >
                ¡Hola, envianos un mensaje!
            </div>

            <div 
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                onClick={() => props.onClick && props.onClick()}
                className='transition-3'
                style={{
                    ...styles.chatWithMeButton,
                    ...{ border: hovered ? '1px solid #ffffff' : '3px solid #2ca5ff' }
                }}
            />
        </div>
    )
}

export default Avatar;
