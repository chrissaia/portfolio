const Research = () => {
  const research = [
    {
      title: "Dillard's Data Mining Research Paper",
      description: "Analyzing Retail Sales Trends and Revenue Drivers Through Statistical Modeling",
      date: "December 16, 2025",
      link: "https://drive.google.com/file/d/1WnccjiiLIIVgi6upDraorXW8KqCEmpXo/view?usp=sharing"
    },
    {
      title: "Movie Recommender Systems",
      description: "Designing an Effective Movie Recommendation System Using Efficient Content-Based Techniques",
      date: "March 23, 2024",
      link: "https://drive.google.com/file/d/10mLEbo06bpRBHM9i_BNxd6OnMufJsVTb/view?usp=sharing"
    },
  ];

  return (
    <section id="Research" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 animate-fade-in">
            Research & Articles
          </h2>
          
          <p className="text-center text-muted-foreground mb-12 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Sharing insights on AI, Machine Learning, and Data Science
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {research.map((search, index) => (
              <div
                key={index}
                className="glass-card rounded-lg p-6 animate-fade-in hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <h3 className="text-lg font-semibold text-primary mb-3">
                  {search.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-4">
                  {search.description}
                </p>

                <div className="flex justify-between items-center">
                  <span className="text-xs text-muted-foreground">{search.date}</span>
                  <a
                    href={search.link}
                    className="text-primary hover:text-primary/80 text-sm font-medium transition-colors"
                  >
                    Read More →
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <p className="text-muted-foreground">
              More articles coming soon! Follow me on LinkedIn for updates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;