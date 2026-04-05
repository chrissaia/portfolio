const Skills = () => {
  const skillCategories = [
    {
      title: "Machine Learning & AI",
      skills: ["Python", "PyTorch", "LiteLLM", "Scikit-learn", "Hugging Face", "XGBoost", "Neural Networks"]
    },
    {
      title: "Cloud & MLOps", 
      skills: ["Google Cloud", "Open Telemetry", "MLflow", "Docker", "FastAPI", "LangFuse", "CI/CD Pipelines"]
    },
    {
      title: "Data & Analytics",
      skills: ["SQL", "Power BI", "SAS", "Tableau", "Pipelines", "Unit Testing"]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 animate-fade-in">
            Technical Skills
          </h2>
          
          <p className="text-center text-muted-foreground mb-12 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Expertise in AI/ML, Data Analytics, Data Engineering with focuses in Computer Vision, Finance and Product Management.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, categoryIndex) => (
              <div 
                key={category.title}
                className="glass-card rounded-lg p-6 animate-fade-in"
                style={{ animationDelay: `${categoryIndex * 0.2}s` }}
              >
                <h3 className="text-xl font-semibold text-primary mb-6 text-center">
                  {category.title}
                </h3>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium animate-fade-in"
                      style={{ animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Additional skill categories - Highlighted */}
          <div className="grid md:grid-cols-4 gap-6 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="glass-card rounded-lg p-6 text-center">
              <h4 className="text-lg font-semibold text-primary mb-4">LLM & AI</h4>
              <div className="space-y-2">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">OpenAI, Claude, Gemini</span>
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">Prompt Engineering</span>
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">Neural Networks</span>
                 <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">Neuroevolution</span>
              </div>
            </div>
            
            <div className="glass-card rounded-lg p-6 text-center">
              <h4 className="text-lg font-semibold text-primary mb-4">Frameworks</h4>
              <div className="space-y-2">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">FastAPI</span>
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">Flask</span>
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">Gradio</span>
              </div>
            </div>
            
            <div className="glass-card rounded-lg p-6 text-center">
              <h4 className="text-lg font-semibold text-primary mb-4">Specializations</h4>
              <div className="space-y-2">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">AI Product Management</span>
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">Computer Vision</span>
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">MLOps</span>
                 <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">Financial AI</span>
              </div>
            </div>
            
            <div className="glass-card rounded-lg p-6 text-center">
              <h4 className="text-lg font-semibold text-primary mb-4">Certifications</h4>
              <div className="space-y-2">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">SAS - Business Intelligence and Analytics</span>
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">IBM AI Developer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
