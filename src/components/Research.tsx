import { Link } from "react-router-dom";

const Research = () => {
  const research = [
    {
      title: "Dillard's Data Mining Research Paper",
      description:
        "Analyzing retail sales trends and revenue drivers through decision trees and logistic regression to identify high-margin transaction patterns.",
      date: "December 16, 2025",
      link: "https://drive.google.com/file/d/1WnccjiiLIIVgi6upDraorXW8KqCEmpXo/view?usp=sharing",
    },
    {
      title: "Movie Recommender Systems",
      description:
        "Designing a content-based recommendation system using cosine similarity, feature extraction, and large-scale movie metadata.",
      date: "March 23, 2024",
      link: "https://drive.google.com/file/d/10mLEbo06bpRBHM9i_BNxd6OnMufJsVTb/view?usp=sharing",
    },
  ];

  return (
    <section id="research" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 animate-fade-in">
            Research & Articles
          </h2>

          <p
            className="text-center text-muted-foreground mb-12 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            Research writing across machine learning, recommendation systems, and predictive analytics
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {research.map((paper, index) => (
              <div
                key={paper.title}
                className="glass-card rounded-lg p-6 animate-fade-in hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <h3 className="text-lg font-semibold text-primary mb-3">
                  {paper.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-4">
                  {paper.description}
                </p>

                <div className="flex justify-between items-center">
                  <span className="text-xs text-muted-foreground">{paper.date}</span>
                    <a
                      href={paper.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 font-medium transition-colors"
                    >
                      Read More →
                    </a>
                </div>
              </div>
            ))}
          </div>

          <div
            className="text-center mt-12 animate-fade-in"
            style={{ animationDelay: "0.8s" }}
          >
            <p className="text-muted-foreground">
              More technical writing and research summaries will be added over time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;