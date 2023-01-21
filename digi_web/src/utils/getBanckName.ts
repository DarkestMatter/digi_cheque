import { bankData } from "./bankMockData";

export const getBankName = (id: string | null) => {
  return bankData.find((bank) => bank.id === id)?.name;
};