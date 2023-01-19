import * as React from "react";
import { Dayjs } from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useDispatch, useSelector } from "react-redux";
import { updateChequeFormData } from "../../slices/CreateCheque";
import { RootState } from "../../store";
export const ChequeClearanceDate = () => {
  const dispatch = useDispatch();
  const handleUpdate = (value: any) => {
    dispatch(updateChequeFormData({ name: "chequeClearanceDate", value }));
  };
  const { chequeClearanceDate } = useSelector(
    (state: RootState) => state.createCheque.createChequeForm
  );
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Cheque Clearance Date"
        value={chequeClearanceDate}
        onChange={(newValue) => {
          handleUpdate(newValue);
        }}
        renderInput={(params) => (
          <TextField
            name="chequeClearanceDate"
            fullWidth
            variant="standard"
            required
            {...params}
          />
        )}
      />
    </LocalizationProvider>
  );
};
