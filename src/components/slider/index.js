import React from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'
import Anime from 'react-anime'


import './index.scss'

const Slider = () => (
    <div className="carousel slide" data-ride="carousel">

        <div className="carousel-inner">
            <div className="carousel-item active">
                <div className="container">
                    <aside>
                            <h1 class="slide-in-blurred-top">
                                Open the door to a world of the best furniture materials.
                            </h1>

                            <p>
                                Whatever your wood furniture needs, you can order quality materials from us. 
                            </p>
                    </aside>
                </div>
            </div>
        </div>
        <figure className="icon-figure">
            <FontAwesomeIcon icon={faAngleDoubleDown} size="lg" />
        </figure>
    </div>
)
export default Slider