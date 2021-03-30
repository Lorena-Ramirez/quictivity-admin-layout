import React from 'react';

const QInput = ({ id, name, label, placeholder, icon, type, disabled, setForm }) => {
  const renderIcon = (icon) => {
    if (icon) {
      return (
        <div className="input-group-prepend">
          <div className="input-group-text icon">
            <i className={icon} />
          </div>
        </div>
      );
    }
    return null;
  }

  const updateForm = (event) => {
    if(setForm){
      const { value, name } = event.target;
      setForm(form => ({ ...form, [name]: value }));
    }
    return null;
  }

  // had to take out , readonly: disabled in order to get reps and hold duration disabled function working
  const options = { disabled };

  return (
    <div className="form-group text-left">
      <label for={id}>{label}</label>
      <div className="input-group">
        {renderIcon(icon)}
        <input type={type || "text"} className="form-control input-style" name={name || id} id={id} placeholder={placeholder} {...options} onChange={"" || updateForm} />
      </div>
    </div>
  )
}

export default QInput;