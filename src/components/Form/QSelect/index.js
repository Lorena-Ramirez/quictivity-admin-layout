import React from 'react'
import Select from 'react-select';
import customStyles from '../../../utils/CustomStyles';

const QSelect = ({ id, label, options }) => {
  return (
    <div className="form-group text-left">
      <label for={id}>{label}</label>
      <Select
        id={id}
        isMulti={true}
        styles={customStyles}
        options={options}
        theme={theme => ({
          ...theme,
          borderRadius: 0,
        })}
      />
    </div>
  )
}

export default QSelect;