import { useState } from 'react';


const PasswordInput = ({ value, onChange, placeholder }) => {
    const [isShowPassword, setIsShowPassword] = useState(false);
    
    const toggleShowPassword = () => {
        setIsShowPassword(!isShowPassword);
    };

    return (
        <div className='password-container'>
            <input 
                value={value} 
                onChange={onChange}
                type={isShowPassword ? 'text' : 'password'} 
                placeholder={placeholder || "Enter Password"}
                className='password-input'
                required
            />
            <button onClick={toggleShowPassword} className='toggle-password-btn'>
                {isShowPassword ? (
                    <box-icon name='low-vision'className='icon-primary'></box-icon>
                ) : (
                    <box-icon name='low-vision'className='icon-secondary'></box-icon>
                )}
            </button>
        </div>
    );
};

export default PasswordInput;