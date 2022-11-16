import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import { makeStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function CountrySelector() {
  const classes = useStyles();
  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel shrink htmlFor="country-selector">
          Quốc Gia
        </InputLabel>
        <NativeSelect
          value={{}}
                onChange={{}}
                inputProps={{
                  name:'country',
                  id:'country-selector',
                }}
        ></NativeSelect>
      </FormControl>
    </div>

    // <FormControl>
    //     <InputLabel shrink htmlFor="country-selector">
    //       Quốc Gia
    //     </InputLabel>
    //     <NativeSelect
    //       value={value}
    //       onChange={handleOnChange}
    //       inputProps={{
    //         name:'country',
    //         id:'country-selector',
    //       }}
    //     >

    //     </NativeSelect>
    //    <FormHelperText>Lựa chọn quốc gia</FormHelperText>

    //   </FormControl>
  );
}
