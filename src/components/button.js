import PropTypes from 'prop-types'

const button = ({bgColor, text , onClick}) => {
  return <button 
            onClick={onClick}
            style={{backgroundColor: bgColor}} 
            className='btn'> {text} 
        </button>
}

// this is use to set default Props for its value
button.defaultProps = {
    bgColor : 'steeblue', 
}

// this is use to limit data , mean what kind of data it is ,
// int sting etc 
button.protoTypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    onClick: PropTypes.func
}

export default button
