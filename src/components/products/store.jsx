import React, { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';

export const ProductContext = createContext();

export const ProductProvider = ({ reducer, initialState, children }) => (
  <ProductContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </ProductContext.Provider>
);

ProductProvider.propTypes = {

  /**
   * @return {React.Node}
   */
  children: PropTypes.node.isRequired,

  /**
   * Object containing initial state value.
   */
  initialState: PropTypes.shape({}).isRequired,

  /**
   *
   * @param {object} state
   * @param {object} action
   */
  reducer: PropTypes.func.isRequired
}

export const useStateContext = () => useContext(ProductContext);

