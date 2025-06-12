import axiosClient from "./axiosClient";

export const createRazorpayOrder = (amount, billingData) => {
  return axiosClient.post("/payment", { amount, billingData });
};

export const verifyPaymentAndPlaceOrder = (verifyData) => {
  return axiosClient.post("/payment/verify", verifyData, {
    withCredentials: true,
  });
};

export const redeemCoins = (coinsToRedeem) => {
  return axiosClient.post(
    "/payment/redeem",
    { coinsToRedeem },
    {
      withCredentials: true,
    }
  );
};
