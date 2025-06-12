import axiosClient from "./axiosClient";

export const calculateBillingAmount = ({ state, coinsUsed }) => {
  return axiosClient.post("/billing", {
    billingData: { state },
    coinsUsed,
  });
};
