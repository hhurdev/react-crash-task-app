import PropTypes from 'prop-types'

const Button = ({ color, text, onClick }) => {
  return (
    <button 
      className = 'btn' 
      style={{backgroundColor: color}}
      onClick={onClick}
      >
        {text}
      </button>
  )
}

Button.defaultProps = { 
  color: 'steelblue',

}

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,

}

export default Button

// const Button = ({ color, text }) => {
//   return (
//     <button className = 'btn' style={{backgroundColor: color}}>{text}</button>
//   )
// }
