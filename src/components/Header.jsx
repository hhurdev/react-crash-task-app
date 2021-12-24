import PropTypes from 'prop-types'
import Button from './Button'
// N: for inline styles use double {{}}

const Header = ({ title, onAdd, showAdd }) => {

  return (
    <header className='header'>
      <h1> {title} </h1>
      <Button 
        color={showAdd ? 'red' : 'green'}
        text={showAdd ? 'Close' : 'Add'}
        onClick={onAdd}/>
    </header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker'
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

// you can add this as inline style
// react doesn't uses dashes > background-color

// const headingStyle = {
//   color: red,
//   backgroundColor: black
// }

// <h1 style= {headingstyle}>

export default Header
