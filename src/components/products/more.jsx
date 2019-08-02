import React, {useEffect} from 'react';
import PropTypes from 'prop-types'
import AOS from 'aos'


import {useStateContext} from './store'
export function MoreStuff ({children}) {
  const [product] = useStateContext()
  useEffect(() => {
    try {
      // eslint-disable-next-line no-undef
      AOS.refreshHard();
    } catch (e) {
      //
    }
  }, [product.inCart])
  return (
    <>
      {
        !product.inCart && children
      }
    </>
  )
}

MoreStuff.propTypes = {
  children: PropTypes.func
}