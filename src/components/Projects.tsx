import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Churn Prediction Model",
      description: "This project delivers an end to end workflow for churn prediction using the Telco Customer Churn dataset. It ensures consistency between training and inference, validates incoming data, and exposes a FastAPI service for real time predictions.",
      tags: ["Python", "XGBoost", "CI/CD", "LiteLLM", "Google Cloud", "OTEL Tracing", "Optuna", "Pytest", "Kaggle"],
      liveUrl: "https://churn-app-157873727094.europe-west1.run.app/ui"
    },
    {
      title: "XAI | Sentiment Analysis Explanations with LIME/SHAP ",
      description: "Using LIME and SHAP to uncover a black-box sentiment‑analysis model. The goal is to better understand how a pre‑trained DistilBERT model makes predictions, to find its strengths and weaknesses, and to evaluate its behaviour under negation, sarcasm, spelling noise and fairness scenarios.",
      tags: ["NLP", "Pytorch", "Pandas", "Lime", "SHAP", "Matplotlib"],
      githubUrl: "https://github.com/chrissaia/CS483-final-NLP-Model-Testing"
    },
    {
      title: "Movie Recommendation System",
      description: "Engineered a content-based movie recommender in Python using TF-IDF and cosine similarity across 6,000+ films.",
      tags: ["Recommendation System", "Python", "Data Pipline", "Kaggle"],
      githubUrl: "https://github.com/chrissaia/Movie-Reccomender-AI"
    },
    {
      title: "Computational Intelligence Course Projects",
      description: "This repo contains five projects covering class material. Optimization, Evolutionary Algorithms, Reinforcement Learning, Neural Networks, and Neuroevolution. Each project uses strictly numpy for creating each algorithm to fully understand the algorithms and their implementations.",
      tags: ["Numpy", "Scikit-learn", "Pytorch", "Neural Networks", "Neuroevolution", "Reinforcement Learning", "Optimization", "Gymnasium"],
      githubUrl: "https://github.com/chrissaia/Computational_Intelligence"
    },
    {
      title: "Stanford CS229 Lesson Projects",
      description: "Covers every single lesson in the infamous stanford CS229 course with 2D/3D visualization and explanations of algorithms using math. Topics covered: Gradient descent, Logistic Regression, Generalized Linear Model, GDA, Naive Bayes, Support Vector Machines, SVM Dual + KKT, Kernels, K-Means Cluster, EM, PCA + ICA, MDPs, Continuous MDPs + Simulators, LQR, Policy Search",
      tags: ["Numpy", "Scikit-learn"],
      githubUrl: "https://github.com/chrissaia/Concept-Overview_StanfordCS229"
    },
    {
      title: "Spotify Playlist Manager",
      description: "Fetches playlist data from the Spotify API using playlist ID. Organizes tracks by artist, genre, and popularity. Exports playlist data to a CSV file. Visualizes genre distribution using bar charts generated with Matplotlib. Sorts tracks based on multiple metrics such as genre and popularity. Caches results to reduce API calls for repeated playlist requests.",
      tags: ["Flask", "Spotify API", "Matplotlib", "Python"],
      githubUrl: "https://github.com/chrissaia/spotify-API"
    },
  ];

  return (
    <section id="projects" className="py-20 section-bg">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 animate-fade-in">
            My Projects
          </h2>
          
          <p className="text-center text-muted-foreground mb-12 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            A showcase of machine learning and AI projects spanning computer vision, NLP, and predictive analytics
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.title}
                className="glass-card rounded-lg p-6 group hover:transform hover:scale-105 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project content */}
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-semibold text-primary leading-tight">
                      {project.title}
                    </h3>
                    <div className="flex space-x-2 ml-2">
                      {project.githubUrl && (
                        <Button size="sm" variant="outline" asChild>
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4" />
                          </a>
                        </Button>
                      )}
                      {project.liveUrl && (
                        <Button size="sm" variant="outline" asChild>
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* View more projects button */}
          <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <Button variant="outline" size="lg" className="border-primary/20 hover:bg-primary/10" asChild>
              <a href="https://www.github.com/chrissaia" target="_blank" rel="noopener noreferrer">
                View All Projects on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;