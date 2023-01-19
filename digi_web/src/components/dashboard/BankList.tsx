import {
  FormControl,
  InputLabel,
  MenuItem,
  NativeSelect,
  Select,
} from "@mui/material";

const banks = [
  {
    name: "ICICI Bank",
    id: "icic001",
  },
  {
    name: "State Bank of India",
    id: "sbi002",
  },
];

export const BankList = () => {
  return (
    <FormControl fullWidth>
      <InputLabel variant="standard" htmlFor="uncontrolled-native">
        Select Bank
      </InputLabel>
      <NativeSelect
        defaultValue={30}
        inputProps={{
          name: "age",
          id: "uncontrolled-native",
        }}
      >
        {banks.map((bank) => {
          return (
            <option id={bank.id} value={bank.id}>
              {bank.name}
            </option>
          );
        })}
      </NativeSelect>
    </FormControl>
  );
};
