import React from 'react';
import { Table } from 'reactstrap';
import PropTypes from 'prop-types';

function DNSTable({ items }) {
  return (
    <Table responsive>
      <thead>
        <tr>
          <th>Type</th>
          <th>Name</th>
          <th>TTL</th>
          <th>Target</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <th scope="row">{item.type}</th>
            <td>{item.name}</td>
            <td>{item.ttl}</td>
            <td>{item.target}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

DNSTable.propTypes = {
  items: PropTypes.array.isRequired,
};

export default DNSTable;
