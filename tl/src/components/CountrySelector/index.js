import React from 'react'
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import { makeStyles } from '@material-ui/core/styles';

export default function CountrySelector() {
  return (
    

    <FormControl>
        <InputLabel shrink htmlFor="country-selector">
          Quốc Gia
        </InputLabel>
        <NativeSelect
          value={value}
          onChange={handleOnChange}
          inputProps={{
            name:'country',
            id:'country-selector',
          }}
        >
          
        </NativeSelect>
       <FormHelperText>Lựa chọn quốc gia</FormHelperText>

      </FormControl>
  )
}
