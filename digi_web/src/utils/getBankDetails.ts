import { bankData } from "./bankMockData";

export const getBankDetails = (id: string | null) => {
    return bankData.find((bank) => bank.id === id);
  };