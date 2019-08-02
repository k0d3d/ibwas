import React from 'react';
import PropTypes from 'prop-types'


const PageTitle = ({title}) => {
  return (
    <>
      <style jsx>{`
        $height: 100px;
        .page-title {
          background: #b3d7ff;
          min-height: $height;
          h4 {
            display: inline-block;
            vertical-align: middle;
            line-height: normal;
            margin: 1.1em 0;
            color: white;
          }
          .container {
            display: flex;
            align-items: center; 
          }
        }
      `}</style>
      <div className="page-title">
        <div className="container">
          <h4>
            {title}
          </h4>
        </div>
      </div>
    </>    
  );
}

PageTitle.propTypes = {
  title: PropTypes.string
}

export default PageTitle;