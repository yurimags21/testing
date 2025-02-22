import React from "react";
import { AlertCircle, CheckCircle2, XCircle, Clock } from "lucide-react";
import { Alert, AlertTitle, AlertDescription } from "./ui/alert";

type StatusType = "error" | "success" | "warning" | "loading";

interface StatusMessageProps {
  type?: StatusType;
  title?: string;
  message?: string;
}

const getStatusConfig = (type: StatusType) => {
  const configs = {
    error: {
      icon: XCircle,
      className: "border-red-500 bg-red-50",
      title: "Error",
      message: "An error occurred while fetching repositories.",
    },
    success: {
      icon: CheckCircle2,
      className: "border-green-500 bg-green-50",
      title: "Success",
      message: "Repositories loaded successfully!",
    },
    warning: {
      icon: AlertCircle,
      className: "border-yellow-500 bg-yellow-50",
      title: "Warning",
      message: "API rate limit reached. Please try again later.",
    },
    loading: {
      icon: Clock,
      className: "border-blue-500 bg-blue-50",
      title: "Loading",
      message: "Fetching repositories...",
    },
  };

  return configs[type];
};

const StatusMessage = ({
  type = "loading",
  title,
  message,
}: StatusMessageProps) => {
  const config = getStatusConfig(type);
  const Icon = config.icon;

  return (
    <Alert className={`flex items-center ${config.className} shadow-sm`}>
      <Icon className="h-5 w-5 mr-2" />
      <div>
        <AlertTitle>{title || config.title}</AlertTitle>
        <AlertDescription>{message || config.message}</AlertDescription>
      </div>
    </Alert>
  );
};

export default StatusMessage;
