const About = () => {
  return (
    <section id="about" className="py-20 section-bg">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 animate-fade-in">
            Summary
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text content */}
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <p className="text-lg text-muted-foreground">
                AI Engineer and Data Engineer with <span className="text-primary font-semibold">2+ years of internship experience </span>
                delivering scalable machine learning and generative AI solutions across 
                <span className="text-primary font-semibold"> security, consulting and fintech</span>. Interested in fintech,
                healthcare, product management and leading a team.
              </p>
              
              <p className="text-lg text-muted-foreground">
                Developed and deployed prediction models and LLM tools, Computer Vision compliance models,
                and recommendation engines using <span className="text-primary font-semibold">Python, PyTorch, LiteLLM, SQL and Google Cloud</span>.
                Passionate about leveraging AI to create meaningful impact and drive innovation across diverse industries. I am confident
                in my ability to provide reliable results and serve as a dedicated leader with creative and powerful solutions.
              </p>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-primary">Core Expertise</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• AI-Powered Solutions</li>
                  <li>• LLM Development</li>
                  <li>• MLOps & Automated Pipelines</li>
                  <li>• Recommendation Systems</li>
                </ul>
              </div>
            </div>
            
            {/* Experience stats */}
            <div className="grid grid-cols-2 gap-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="glass-card rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">2+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              
              <div className="glass-card rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">3.8</div>
                <div className="text-muted-foreground">GPA </div>
              </div>
              
              <div className="glass-card rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">6+</div>
                <div className="text-muted-foreground">Projects Completed</div>
              </div>
              
              <div className="glass-card rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">7+</div>
                <div className="text-muted-foreground">Years of Python</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;