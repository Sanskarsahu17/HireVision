import { format, subDays, addDays } from "date-fns";

export const applicationStages = [
  // APPLIED: {
  //   label: "Applied",
  //   color: "bg-blue-500/20 text-blue-300",
  //   description: "Your application has been submitted successfully",
  // },
  {
    label: "Under Review",
    color: "bg-yellow-500/20 text-yellow-300",
    description: "Your application is being reviewed by our team",
  },
  {
    label: "Shortlisted",
    color: "bg-purple-500/20 text-purple-300",
    description: "Congratulations! You have been shortlisted",
  },
  {
    label: "Interview Scheduled",
    color: "bg-emerald-500/20 text-emerald-300",
    description: "Your interview has been scheduled",
  },
  {
    label: "Selected",
    color: "bg-green-500/20 text-green-300",
    description: "Congratulations! You have been selected",
  },
  {
    label: "Not Selected",
    color: "bg-red-500/20 text-red-300",
    description: "Thank you for your interest",
  },
];

export const mockApplications = [
  {
    id: "1",
    position: "Senior Frontend Developer",
    company: "TechCorp",
    appliedDate: format(subDays(new Date(), 5), "MMM dd, yyyy"),
    stage: "INTERVIEW_SCHEDULED",
    interviewDate: format(addDays(new Date(), 2), "MMM dd, yyyy"),
    companyLogo: null,
  },
  {
    id: "2",
    position: "UX Designer",
    company: "DesignStudio",
    appliedDate: format(subDays(new Date(), 10), "MMM dd, yyyy"),
    stage: "SHORTLISTED",
    companyLogo: null,
  },
  {
    id: "3",
    position: "Product Manager",
    company: "InnovateCo",
    appliedDate: format(subDays(new Date(), 15), "MMM dd, yyyy"),
    stage: "REVIEWING",
    companyLogo: null,
  },
];

export const mockUser = {
  id: "1",
  name: "Sanskar Sahu",
  email: "james.wilson@example.com",
  role: "Software Engineer",
  avatar: null,
  completedProfile: 75,
};
