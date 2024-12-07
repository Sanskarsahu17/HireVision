import React from "react";
import MetricCard from "./metrics/MetricCard";
import { metrics } from "./metrics/metricData";

export default function AnalyticsOverview() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
      {metrics.map((metric, index) => (
        <MetricCard key={index} {...metric} />
      ))}
    </div>
  );
}
