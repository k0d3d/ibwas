import React from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'
import Anime from 'react-anime'


import './index.scss'

class Slider extends React.Component {
    render(){
      return <section>
          <div className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="container">
                        <aside>
                                <h1 className="slide-in-blurred-top">
                                    Open the door to a world of the best furniture materials.
                                </h1>

                                <p className="slide-in-blurred-left">
                                    Whatever your wood furniture needs, you can order quality materials from us. 
                                </p>
                        </aside>
                    </div>
                </div>
            </div>
            <div className="d-flex flex-row">
                <figure className="icon-figure">
                    <FontAwesomeIcon icon={faAngleDoubleDown} size="2x" />
                </figure>
            </div>
        </div>
      </section>
    }
}

export default Slider