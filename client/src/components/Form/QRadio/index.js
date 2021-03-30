import React from 'react'

const QRadio = ({id, label, options}) => {
 
  const renderRadios = (buttons) => {
    return buttons.map(({id, label}) => (
      <label className="btn btn-secondary difficulty-btn mr-2 ">
        <input type="radio" name={id} id={id} autocomplete="off" /> {label}
      </label>
    ));
  }
  return (
    <div className="form-group text-left">
      <label for={id}>{label}</label>
      <div className="d-flex">
        <div className="btn-group-toggle" data-toggle="buttons">
          {renderRadios(options)}
        </div>
      </div>
    </div>
  )
}

export default QRadio;