import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StyledTable from './index.style';
import columnKeyName from '../../utils/table';

const Table = ({ columnNames, data }) => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });

  const handleSort = (column) => {
    let direction = 'ascending';
    if (sortConfig.key === column && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key: column, direction });
  };

  const sortedData = () => {
    let sortedData = [...data];
    if (sortConfig.key) {
      sortedData.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortedData;
  };

  return (
    <div>
      {data.length > 0 && (
        <StyledTable cellSpacing="0">
          <thead>
            <tr>
              {columnNames.map((headerName, index) => (
                <th key={index} onClick={() => handleSort(columnKeyName(headerName))}>
                  {headerName.toUpperCase()}
                  {sortConfig.key && sortConfig.key === columnKeyName(headerName) && (
                    <span> {sortConfig.direction === 'ascending' ? ' ▼' : ' ▲'}</span>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sortedData().map((object, index) => (
              <tr index={index} key={index}>
                {Object.values(object).map((value, index2) => (
                  <td index={index2} key={index2}>
                    {' '}
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </StyledTable>
      )}
    </div>
  );
};

Table.propTypes = {
  columnNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Table;
