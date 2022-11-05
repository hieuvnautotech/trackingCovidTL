import React from 'react'
import { FormControl, InputLabel, NativeSelect } from '@material-ui/core'
export default function CountrySelector({ value, handleOnChange }) {
  return (
    <>
      <FormControl>
        <InputLabel htmlFor="" shrink>
          Quốc gia
        </InputLabel>
        <NativeSelect
          value={value}
          onChange={handleOnChange}
          inputProps={{
            name: "country",
            id: "country-selector",
          }}
        ></NativeSelect>
      </FormControl>
    </>
  );
}
