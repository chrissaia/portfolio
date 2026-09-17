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

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className="glass-card rounded-lg p-6 animate-fade-in"
                style={{ animationDelay: `${categoryIndex * 0.2}s` }}
              >
                <h3 className="text-xl font-semibold text-primary mb-6 text-center">
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium animate-fade-in"
                      style={{
                        animationDelay: `${
                          categoryIndex * 0.2 + skillIndex * 0.05
                        }s`
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div
            className="grid md:grid-cols-3 gap-6 animate-fade-in"
            style={{ animationDelay: "0.7s" }}
          >
            <div className="glass-card rounded-lg p-6 text-center md:col-span-2">
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

              <h4 className="text-lg font-semibold text-primary mt-6 mb-4">
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
