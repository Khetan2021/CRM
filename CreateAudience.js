import React, { useState } from 'react';
import { Button, TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const CreateAudience = () => {
  const [filters, setFilters] = useState([{ field: '', operator: '', value: '' }]);

  const addFilter = () => {
    setFilters([...filters, { field: '', operator: '', value: '' }]);
  };

  const handleChange = (index, event) => {
    const values = [...filters];
    values[index][event.target.name] = event.target.value;
    setFilters(values);
  };

  return (
    <div>
      <h2>Create Audience</h2>
      {filters.map((filter, index) => (
        <div key={index}>
          <FormControl>
            <InputLabel>Field</InputLabel>
            <Select name="field" value={filter.field} onChange={(e) => handleChange(index, e)}>
              <MenuItem value="totalSpends">Total Spends</MenuItem>
              <MenuItem value="visits">Visits</MenuItem>
              <MenuItem value="lastVisitDate">Last Visit Date</MenuItem>
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel>Operator</InputLabel>
            <Select name="operator" value={filter.operator} onChange={(e) => handleChange(index, e)}>
              <MenuItem value=">"></MenuItem>
              <MenuItem value="<"></MenuItem>
              <MenuItem value="=">=</MenuItem>
            </Select>
          </FormControl>
          <TextField name="value" value={filter.value} onChange={(e) => handleChange(index, e)} />
        </div>
      ))}
      <Button onClick={addFilter}>Add Filter</Button>
      <Button variant="contained" color="primary">Check Audience Size</Button>
      <Button variant="contained" color="secondary">Save Audience</Button>
    </div>
  );
};

export default CreateAudience;
