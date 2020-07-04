import React from 'react';
import PropTypes from 'prop-types';
import DNSNavbar from '~/components/Navbar';

function DefaultLayout({ children }) {
  return (
    <>
      <DNSNavbar />
      <div>{children}</div>
    </>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default DefaultLayout;
