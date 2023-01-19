import { FormControl, InputLabel, NativeSelect, Select } from "@mui/material";
import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateChequeFormData } from "../../slices/CreateCheque";
import { RootState } from "../../store";

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
  const dispatch = useDispatch();
  const { bankId } = useSelector(
    (state: RootState) => state.createCheque.createChequeForm
  );
  const handleUpdate = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(
      updateChequeFormData({ name: e.target.name, value: e.target.value })
    );
  };
  return (
    <FormControl fullWidth>
      <InputLabel variant="standard" htmlFor="uncontrolled-native">
        Select Bank
      </InputLabel>
      <NativeSelect
        defaultValue={30}
        inputProps={{
          name: "bankId",
          id: "uncontrolled-native",
        }}
        onChange={(e) => handleUpdate(e)}
        value={bankId}
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
