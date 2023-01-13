import PropTypes from 'prop-types'
import Button from './button'
const Header = ({title , onAdd ,showTask}) => {
    const onClick = () => {
        console.log('click event trig :'+title)
    }
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button onClick={onClick} text = 'Welcome' bgColor='green' />
      <Button onClick={onAdd} text = {!showTask ? 'Add' : 'Close'} bgColor={!showTask ? 'green' : 'Red'} />
    </header>
  )
}

Header.defaultProps = {
    title: 'Task Tracker default',
}

Header.propTypes = {
    title: PropTypes.string,
}

/*
const headingStyle = {
    color: 'red',
    backgroundColor: 'black',
}
*/
export default Header
