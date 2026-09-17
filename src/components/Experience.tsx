const Experience = () => {
  const experiences = [
    {
      title: "Data Engineer Intern",
      company: "Rocket Money",
      location: "Silver Spring, Maryland",
      period: "May 2026 - Aug 2026",
      achievements: [
        "Developed a utility-bill forecasting system to improve recurring-payment predictions for highly seasonal expenses, working with large-scale financial transaction data and an existing production codebase.",
        "Built and evaluated a 16-feature XGBoost forecasting pipeline across more than 22.5M transaction rows, reducing mean absolute error by 18.3% versus the existing repeat-last-bill baseline.",
        "Designed routing logic and calibrated prediction intervals to better handle stable bills, seasonal behavior, and asymmetric under-budgeting risk, increasing actual-bill interval coverage from 69.1% to 78.7%.",
        "Integrated feature-generation, inference, and serving components into the transaction-intelligence pipeline, added validation and testing, and deployed the model to an AWS development endpoint to verify parity between local and hosted predictions.",
        "Worked closely with engineers and product partners to evaluate tradeoffs, communicate findings, and turn an open-ended forecasting problem into a production-oriented machine learning system."
      ]
    },
    {
      title: "Deep Learning Intern",
      company: "Amizen Labs - threatvision.ai",
      location: "Remote",
      period: "May 2025 - August 2025",
      achievements: [
        "Implemented and deployed a real-time object detection prototype on the NVIDIA Jetson Nano to evaluate edge inference performance for weapon detection",
        "Trained a custom YOLOv5 model in Python through transfer learning and fine-tuning with Ultralytics/Pytorch",
        "Used a dataset with 8,000 images in Roboflow, achieving mAP@50 = 0.98",
        "Optimized inference speed with TensorRT maximizing NGC container properties, boosting throughput from 5 FPS to 27 FPS (+440%) while maintaining accuracy",
        "Researched model pruning, quantization, and GPU profiling to analyze trade-offs between speed, precision, and storage usage on Jetson Nano",
        ]
    },
    {
      title: "Data Consultant",
      company: "Wild Bay Distribution",
      location: "Baltimore, Maryland",
      period: "Sep 2024 - May 2025",
      achievements: [
        "Built and launched a B2B website to expand wholesale, so retailers can access product listings and submit bulk orders",
        "Utilized Power BI analytics to present customer engagement, revenue drivers, and website traffic recommendations",
        "Produced actionable data-driven recommendations on marketing, risk management and SEO optimization that supported a 40% increase in wholesale inquiries post-launch",
        ]
    },
    {
      title: "Data Consultant",
      company: "York Business Improvement District",
      location: "Baltimore, Maryland",
      period: "Jan 2024 - May 2024",
      achievements: [
        "Evaluated economic data from city databases to measure safety, business growth, and public maintenance outcomes",
        "Formulated a performance measurement system with 20+ key indicators to track revitalization progress and BID impact across low-income Baltimore neighborhoods",
        "Designed Power BI dashboards visualizing KPIs like crime rates, retail leakage, business longevity, and investments",
        ]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 animate-fade-in">
            Professional Experience
          </h2>
          
          <p className="text-center text-muted-foreground mb-12 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Building AI Solutions Across Industries
          </p>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="glass-card rounded-lg p-6 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-lg font-medium mb-1">{exp.company}</p>
                    <p className="text-muted-foreground text-sm">{exp.location}</p>
                  </div>
                  <div className="text-right mt-4 md:mt-0">
                    <p className="text-sm text-muted-foreground">{exp.period}</p>
                  </div>
                </div>
                
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, achievementIndex) => (
                    <li 
                      key={achievementIndex}
                      className="flex items-start space-x-2 text-sm text-muted-foreground"
                    >
                      <span className="text-primary mt-1">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;