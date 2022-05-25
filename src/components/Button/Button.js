import './button.css';

const Button = ({text, isClickButton, handleClick})=> {
    return (
        <button
            className={isClickButton ? 'clickButton' : 'restartButton'}
            onClick={()=> handleClick()}>
            {text}
        </button>
    )
}

export default Button;