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

export async function submitApplication(formData) {
  const token = Cookies.get("token");
  if (!token) {
    throw new Error("Authentication required");
  }

  try {
    const token = Cookies.get("token");
    console.log("token: ", token);

    if (!token) console.log("No jwttoken");
    const response = await axios.post(
      "http://localhost:5000/api/jobApplication/submit-form",
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );

    setMessage(response.data.message);
    console.log("Success");
    navigate("/candidate/dashboard");
  } catch (error) {
    console.error("Error submitting application:", error);
    throw new Error("Failed to submit application");
    // console.log("Error: ", error.response.data);
    setMessage(error.response.data.message);
  }
}
