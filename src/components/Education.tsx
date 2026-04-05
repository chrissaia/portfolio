const Education = () => {
  const education = [
    {
      degree: "Bachelor of Science in Data Science",
      degree2: "Bachelor of Science in Computer Science",
      minor: "Mathematics"
      school: "Loyola Maryland University Maryland",
      location: "Baltimore, Maryland - United States",
      period: "Sep 2023 – May 2027",
      gpa: "President of Data Science Club"
      relevant_coursework: "Coursework: Business Intelligence & Data Mining, Database Management Systems, Experimental Research Methods, Software Testing, Computer Systems, Computer Engineering, Object-Oriented Software Design"
    },
    {
      degree: "Study Abroad Semester",
      school: "Vrije Universiteit Amsterdam",
      location: "Amsterdam, NL",
      period: "Jan 2026 – May 2026",
      gpa: ""
      relevant_coursework: "Computational Intelligence (Machine Learning), Linear Algebra, Information Management for CS"
    }
  ];


  return (
    <section id="education" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 animate-fade-in">
            Education
          </h2>
          
          <p className="text-center text-muted-foreground mb-12 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Academic Background
          </p>
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div 
                key={index}
                className="glass-card rounded-lg p-6 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">
                      {edu.degree}
                    </h3>
                    <h3 className="text-xl font-semibold text-primary mb-2">
                      {edu.degree2}
                    </h3>
                    <h4 className="text-xl font-semibold text-primary mb-2">
                      {edu.minor}
                    </h4>
                    <p className="text-lg font-medium mb-1">{edu.school}</p>
                    <p className="text-muted-foreground">{edu.location}</p>
                    <p></p>
                    <h6 className="text-muted-foreground">{edu.relevant_coursework}</h6>
                  </div>
                  <div className="text-right mt-4 md:mt-0">
                    <p className="text-sm text-muted-foreground">{edu.period}</p>
                    {edu.gpa && <p className="text-sm font-medium text-primary">{edu.gpa}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;