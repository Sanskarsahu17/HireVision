import Cookies from "js-cookie";
import axios from "axios";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

export async function fetchQuestion(id) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching question:", error);
    return { title: "Error loading question" };
  }
}

export function simulateTranscription(onTranscriptionUpdate) {
  const demoResponses = [
    "As a software engineer, I believe my strongest skill is problem-solving...",
    "My experience includes leading a team of five developers...",
    "I handle challenging situations by breaking down the problem...",
  ];

  let transcriptionIndex = 0;
  const interval = setInterval(() => {
    if (transcriptionIndex < demoResponses.length) {
      onTranscriptionUpdate(demoResponses[transcriptionIndex]);
      transcriptionIndex++;
    } else {
      clearInterval(interval);
    }
  }, 2000);

  return () => clearInterval(interval);
}

// export async function submitApplication(formData) {
//   const token = Cookies.get("token");
//   if (!token) {
//     throw new Error("Authentication required");
//   }

//   try {
//     // First check if the API is reachable
//     // const healthCheck = await axios.get("http://localhost:5000/api/health");
//     // if (healthCheck.status !== 200) {
//     //   throw new Error("Server is not responding properly");
//     // }

//     const response = await axios.post(
//       `http://localhost:5000/api/jobApplication/submit-form`,
//       formData,
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "multipart/form-data",
//         },
//       }
//     );

//     // Check if the response indicates a database connection issue
//     if (response.data?.dbStatus === false) {
//       throw new Error("Database connection error");
//     }

//     // Move this before the return statement
//     console.log("Application submitted successfully");
//     return response.data;
//   } catch (error) {
//     // More specific error handling
//     if (error.code === "ECONNREFUSED") {
//       throw new Error("Cannot connect to server");
//     }
//     if (error.response?.status === 503) {
//       throw new Error("Database connection failed");
//     }
//     throw new Error(
//       error.response?.data?.message || "Failed to submit application"
//     );
//   }
// }

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
    if(error.response.data.message){
      toast.error("Application Already Submitted");
    }
    const errorMessage =
      error.response?.data?.message || "Failed to submit application";
    
    console.error("Application submission error:", error);
    
    // console.log("Error: ", error.response.data);
    setMessage(error.response.data.message);
  }
}
