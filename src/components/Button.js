

const Button = ({ text, color, onClick }) => {
    return (
        <button className='btn' style={{ backgroundColor: color }} onClick={onClick}>{text}</button>
    )
}

Button.defaultProps = {
    color: 'green'
}

export default Button
