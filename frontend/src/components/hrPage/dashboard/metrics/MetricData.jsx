import { Users, Clock, CheckCircle, TrendingUp } from "lucide-react";

export const metrics = [
  {
    icon: Users,
    label: "Total Candidates",
    value: "2,547",
    trend: 12,
    color: "blue",
  },
  {
    icon: Clock,
    label: "Time to Hire",
    value: "18 days",
    trend: -5,
    color: "purple",
  },
  {
    icon: CheckCircle,
    label: "Offer Acceptance",
    value: "85%",
    trend: 3,
    color: "green",
  },
  {
    icon: TrendingUp,
    label: "Active Jobs",
    value: "124",
    trend: 8,
    color: "orange",
  },
];
