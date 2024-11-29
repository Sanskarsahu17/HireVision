import { useMemo, useState } from "react";
import { jobs as initialJobs } from "../data/jobs";

export function useJobs() {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");

  const filteredJobs = useMemo(() => {
    return initialJobs.filter((job) => {
      const matchesSearch =
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesLocation = job.location
        .toLowerCase()
        .includes(location.toLowerCase());
      return matchesSearch && matchesLocation;
    });
  }, [searchTerm, location]);

  return {
    jobs: filteredJobs,
    searchTerm,
    setSearchTerm,
    location,
    setLocation,
  };
}
