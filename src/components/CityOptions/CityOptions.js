import './CityOptions.css'
import {PropTypes} from 'prop-types'

function CityOptions(props) {
  return (
    <section className='city-options-container'>
      {(props.cityList.length !== 0 && props.changed === true) && props.cityList.map((city) => <button onClick={() => {
          props.showedButtons()
          props.getNewCoordinates(city.lon, city.lat, city.name, city.state)
      }} key={Date.now() + props.cityList.indexOf(city)} className='city-button'>{city.name}, {city.state}</button>)}
    </section>
  )
}

CityOptions.propTypes = {
  cityList: PropTypes.array
 }

export default CityOptions