import React,{useState,useEffect} from 'react'
import axios from 'axios'

function Testing() {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get("http://localhost:5000/api/hr-dashboard/checkEligibility",{
                withCredentials:true,
            });
            console.log(response.data.data)
            setData(response.data.data);
          } catch (error) {
            setError(error.message);
          }
        };
        console.log(data);
        fetchData();
      }, []); // Empty dependency array means this runs once when the component mounts.
    

  return (
    <div>
    <h2>Job Applications</h2>
    <table border="1">
      <thead>
        <tr>
          <th>Email</th>
          <th>Company</th>
          <th>Job Position</th>
          <th>Recruiter Email</th>
          <th>Uploaded At</th>
        </tr>
      </thead>
      <tbody>
        {data.map((app, index) => (
          <tr key={index}>
            <td>{app.email}</td>
            <td>
              {app.company}
            </td>
            <td>{app.jobPosition}</td>
            <td>{app.recruiterEmail}</td>
            <td>{new Date(app.uploadedAt).toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  )
}

export default Testing
