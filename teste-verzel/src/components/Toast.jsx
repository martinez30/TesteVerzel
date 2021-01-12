import React, {useState} from 'react'

export const Toast = props => {

    const {backgroundColor, body, header, color} = props;
    const [showToast, setshowToast] = useState(false);

    <div
                style={{
                    position: 'relative',
                    minHeight: '100px',
                }}
            >
                <Toast
                    onClose={() => setshowToast(false)} 
                    show={showToast} 
                    delay={3000} autohide
                    style={{
                    position: 'absolute',
                    top: 0,
                    right: 0
                    }}
                >
                    <Toast.Header style={{backgroundColor: {backgroundColor}, color: {color}}}>
                        <strong className="mr-auto">{header}</strong>
                    </Toast.Header>
                    <Toast.Body style={{backgroundColor: {backgroundColor}, color: {color}}}>{body}</Toast.Body>
                </Toast>
                </div>
}