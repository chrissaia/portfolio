const Skills = () => {
  const skillCategories = [
    {
      title: "Machine Learning & AI",
      skills: [
        "Python",
        "PyTorch",
        "XGBoost",
        "LightGBM",
        "Scikit-learn",
        "Pandas",
        "NumPy",
        "OpenCV"
      ]
    },
    {
      title: "ML Engineering & MLOps",
      skills: [
        "FastAPI",
        "MLflow",
        "Docker",
        "TensorRT",
        "Pydantic",
        "Pandera",
        "Pytest",
        "OpenTelemetry"
      ]
    },
    {
      title: "Software & Cloud",
      skills: [
        "SQL",
        "TypeScript",
        "Java",
        "C",
        "AWS",
        "Google Cloud",
        "Git",
        "Linux"
      ]
    }
  ];

  const focusAreas = [
    "Machine Learning Engineering",
    "Recommendation Systems",
    "Computer Vision",
    "Financial ML",
    "Model Serving",
    "LLM Integration"
  ];

  const additionalTools = [
    "Next.js",
    "LiteLLM",
    "REST APIs",
    "GitHub Actions",
    "Power BI",
    "SAS",
    "Tableau"
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 animate-fade-in">
            Technical Skills
          </h2>

          <p
            className="text-center text-muted-foreground mb-12 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            Experience building machine learning systems across forecasting,
            recommendation systems, computer vision, model deployment, and
            production ML infrastructure.
          </p>

          <div
            className="grid md:grid-cols-3 gap-6 animate-fade-in"
            style={{ animationDelay: "0.7s" }}
          >
            {/* Areas of Focus */}
            <div className="glass-card rounded-lg p-6 text-center">
              <h4 className="text-lg font-semibold text-primary mb-4">
                Areas of Focus
              </h4>

              <div className="flex flex-wrap gap-2 justify-center">
                {focusAreas.map((focus) => (
                  <span
                    key={focus}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                  >
                    {focus}
                  </span>
                ))}
              </div>
            </div>

            {/* Additional Tools */}
            <div className="glass-card rounded-lg p-6 text-center">
              <h4 className="text-lg font-semibold text-primary mb-4">
                Additional Tools
              </h4>

              <div className="flex flex-wrap gap-2 justify-center">
                {additionalTools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="glass-card rounded-lg p-6 text-center">
              <h4 className="text-lg font-semibold text-primary mb-4">
                Certifications
              </h4>

              <div className="space-y-3">
                <span className="block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  IBM AI Developer
                </span>

                <span className="block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  SAS Business Intelligence & Analytics
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
