import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const Context = createContext();

function HeaderContext({ children, theme }) {
  const [incidentsCount, setIncidentsCount] = useState(0);

  function incidentsCountChange(size) {
    setIncidentsCount(Number(size));
  }

  return (
    <Context.Provider value={{ incidentsCount, incidentsCountChange, theme }}>
      {children}
    </Context.Provider>
  );
}

HeaderContext.propTypes = {
  children: PropTypes.node,
  theme: PropTypes.string.isRequired,
};

HeaderContext.defaultProps = {
  children: [],
};

export { Context, HeaderContext };
