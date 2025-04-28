import Cookies from "js-cookie";
import axios from "axios";
import { toast } from "sonner";





export async function submitApplication(formData, job) {
  // const navigate = useNavigate();
  const token = Cookies.get("token");
  if (!token) {
    throw new Error("Authentication required");
  }

  try {
    console.log(job);
    console.log(token);
    console.log("trying to submit");
    if (!token) console.log("No jwttoken");
    const API_URL = "http://localhost:5000/api/jobApplication/submit-form";
    console.log("Submitting to URL:", API_URL);

    console.log("Form Data Contents:");
    for (let pair of formData.entries()) {
      console.log(pair[0] + ": " + pair[1]);
    }

    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    };
    console.log("Headers:", headers);

    const response = await axios.post(API_URL, formData, {
      headers,
      withCredentials: true,
      maxBodyLength: Infinity,
      maxContentLength: Infinity,
    });

    console.log("Response received:", response);

    // setMessage(response.data.message);
    console.log("Success");
    // navigate("/candidate/dashboard");
  } catch (error) {
    // console.error("Full error object:", error);
    // console.error("Response data:", error.response?.data);
    // console.error("Response status:", error.response?.status);
    if (error.response.data.message) {
      toast.error("Application Already Submitted");
    }
    const errorMessage =
      error.response?.data?.message || "Failed to submit application";

    console.error("Application submission error:", error);

    // console.log("Error: ", error.response.data);
    // setMessage(error.response.data.message);
  }
}
