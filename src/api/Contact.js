import axiosClient from "./axiosClient";

// Send contact form data (email to admin)
export const sendContactForm = (formData) => {
  return axiosClient.post("/contact-us", formData);
};