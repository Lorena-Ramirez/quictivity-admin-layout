import React from 'react'

const QSwitch = ({ name, setForm }) => {

  const handleCheck = (event) => {
    const { name } = event.target;
    setForm(form => ({ ...form, [name]: !form[name] }));
  }

  return (
    <label class="c-switch c-switch-pill">
      <input type="checkbox"
        class="c-switch-input"
        name={name}
        onChange={handleCheck} />
      <span class="c-switch-slider approve-switch"></span>
    </label>
  )
}
export default QSwitch;
