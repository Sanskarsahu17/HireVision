import React from "react";
import {
  CheckCircle2,
  Clock,
  ArrowRight,
  FileText,
  UserCheck,
  Award,
  Calendar,
  Users,
} from "lucide-react";
import { toast } from "sonner";

const ApplicationStatus = ({ currentStage, testProgress, onStartTest }) => {
  const handleResumeUpload = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      toast.success("Resume uploaded successfully!");
    }
  };

  const getStageInfo = () => {
    switch (currentStage) {
      case "RESUME_SUBMITTED":
        return {
          icon: <FileText className='w-5 h-5' />,
          message: "Resume has been submitted",
          color: "text-blue-400",
          bgColor: "bg-blue-500/10",
        };
      case "UNDER_REVIEW":
        return {
          icon: <Clock className='w-5 h-5' />,
          message: "Resume is under review",
          color: "text-yellow-400",
          bgColor: "bg-yellow-500/10",
        };
      case "SHORTLISTED":
        return {
          icon: <UserCheck className='w-5 h-5' />,
          message: "You have been shortlisted",
          color: "text-green-400",
          bgColor: "bg-green-500/10",
        };
      case "TEST_PENDING":
        return {
          icon: <Clock className='w-5 h-5' />,
          message: "Online assessment pending",
          color: "text-orange-400",
          bgColor: "bg-orange-500/10",
        };
      case "TEST_IN_PROGRESS":
        return {
          icon: <Clock className='w-5 h-5' />,
          message: "Test in progress",
          color: "text-purple-400",
          bgColor: "bg-purple-500/10",
        };
      case "TEST_COMPLETED":
        return {
          icon: <CheckCircle2 className='w-5 h-5' />,
          message: "Test completed",
          color: "text-green-400",
          bgColor: "bg-green-500/10",
        };
      case "INTERVIEW_SCHEDULED":
        return {
          icon: <Calendar className='w-5 h-5' />,
          message: "Interview scheduled",
          color: "text-blue-400",
          bgColor: "bg-blue-500/10",
        };
      case "HR_INTERVIEW":
        return {
          icon: <Users className='w-5 h-5' />,
          message: "HR Interview stage",
          color: "text-purple-400",
          bgColor: "bg-purple-500/10",
        };
      case "OFFER_EXTENDED":
        return {
          icon: <Award className='w-5 h-5' />,
          message: "Offer extended",
          color: "text-green-400",
          bgColor: "bg-green-500/10",
        };
      default:
        return {
          icon: <Clock className='w-5 h-5' />,
          message: "Application in progress",
          color: "text-slate-400",
          bgColor: "bg-slate-500/10",
        };
    }
  };

  const stageInfo = getStageInfo();

  return (
    <div className='grid gap-6 md:grid-cols-2'>
      {/* Application Status */}
      <div className={`rounded-xl p-6 ${stageInfo.bgColor}`}>
        <h3 className='text-xl font-semibold text-white mb-3'>
          Application Status
        </h3>
        <div className={`flex items-center gap-2 ${stageInfo.color}`}>
          {stageInfo.icon}
          {stageInfo.message}
        </div>
        {currentStage === "RESUME_SUBMITTED" && (
          <div className='mt-4'>
            <label className='relative inline-block'>
              <input
                type='file'
                className='hidden'
                accept='.pdf,.doc,.docx'
                onChange={handleResumeUpload}
              />
              <span className='bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg cursor-pointer inline-flex items-center gap-2'>
                <FileText className='w-4 h-4' />
                Update Resume
              </span>
            </label>
          </div>
        )}
      </div>

      {/* Test Assessment Section */}
      {currentStage === "TEST_PENDING" && (
        <div className='bg-emerald-500/10 rounded-xl p-6'>
          <h3 className='text-xl font-semibold text-white mb-3'>
            Take Assessment
          </h3>
          <button
            onClick={onStartTest}
            className='inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-medium'
          >
            Start Test Now
            <ArrowRight className='w-4 h-4' />
          </button>
        </div>
      )}

      {/* Test Progress Section (Hidden for Interviews) */}
      {currentStage === "TEST_IN_PROGRESS" &&
        testProgress !== undefined &&
        currentStage !== "INTERVIEW_SCHEDULED" &&
        currentStage !== "HR_INTERVIEW" && (
          <div className='bg-emerald-500/10 rounded-xl p-6'>
            <h3 className='text-xl font-semibold text-white mb-3'>
              Assessment Progress
            </h3>
            <div className='flex items-center gap-3'>
              <Clock className='w-5 h-5 text-emerald-400' />
              <div className='flex-1'>
                <div className='h-2 bg-slate-700 rounded-full overflow-hidden'>
                  <div
                    className='h-full bg-emerald-400 transition-all duration-500'
                    style={{ width: `${testProgress}%` }}
                  />
                </div>
              </div>
              <span className='text-emerald-400'>{testProgress}%</span>
            </div>
          </div>
        )}
    </div>
  );
};

export default ApplicationStatus;
