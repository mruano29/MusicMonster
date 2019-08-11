import React from "react";
import PropTypes from 'prop-types';

import './styles.css'

const List = (props) => {

  console.log(props)

  return (
    <div className="list-wrapper">
      {props.items.map((v, index) => {
        return (
          <div
            key={`${v.primaryLabel}+${v.primaryData}`}
            className="list-wrapper--list-item"
            // value={v.id}
            // onClick={onClick}
          >
            {`${v.primaryLabel}: ${v.primaryData} | ${v.secondaryLabel}: ${v.secondaryData}`}
          </div>
        );
      })}
    </div>
  );
}

List.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      primaryLabel: PropTypes.string.isRequired,
      primaryData: PropTypes.string.isRequired,
      secondaryLabel: PropTypes.string,
      secondaryData: PropTypes.string
  }))
}

export default List;