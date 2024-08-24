import PropTypes from 'prop-types'
import {  ClipLoader } from 'react-spinners'

const LoadingSpinner = ({ smallHeight }) => {
  return (
    <div
      className={` ${smallHeight ? 'h-[200px]' : 'h-[70vh]'}
      flex 
      flex-col 
      justify-center 
      items-center `}
    >
      <ClipLoader size={100} color='#35A6DE' />
    </div>
  )
}

LoadingSpinner.propTypes = {
  smallHeight: PropTypes.bool,
}

export default LoadingSpinner
