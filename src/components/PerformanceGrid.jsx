import React from 'react';

const PerformanceGrid = () => {
  return (
    <section className="performance-grid">
      <h2>Proven Impact & Performance</h2>
      <div className="grid-container">
        {/* Column 1 */}
        <div className="col">
          <img src="/public/images/weekly_performance1.jpg" alt="Performance 1" />
          <img src="/public/images/weekly_performance2.jpg" alt="Performance 2" />
          <img src="/public/images/daily_calls1.jpg" alt="Calls 1" />
          <img src="/public/images/actual_earnings1.jpg" alt="Earnings 1" />
        </div>
        {/* Column 2 */}
        <div className="col">
          <img src="/public/images/weekly_performance3.jpg" alt="Performance 3" />
          <img src="/public/images/weekly_performance4.jpg" alt="Performance 4" />
          <img src="/public/images/actual_earnings2.jpg" alt="Earnings 2" />
          <img src="/public/images/daily_calls2.jpg" alt="Calls 2" />
        </div>
        {/* Column 3 */}
        <div className="col">
          <img src="/public/images/global_ranking.jpg" alt="Global Ranking" />
        </div>
        {/* Column 4 */}
        <div className="col">
          <img src="/public/images/client_feedback.jfif" alt="Feedback" />
          <img src="/public/images/customer_survey1.jpg" alt="Survey 1" />
          <img src="/public/images/customer_survey2.jpg" alt="Survey 2" />
          <img src="/public/images/customer_survey3.jpg" alt="Survey 3" />
        </div>
      </div>
    </section>
  );
};

export default PerformanceGrid;
