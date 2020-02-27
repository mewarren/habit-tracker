import React from 'react';

const Checkbox = ({ type="checkbox", name, checked, onChange}) => (
    <input type={type} name={name} checked={checked} onChange={onChange} />
);

export default Checkbox;