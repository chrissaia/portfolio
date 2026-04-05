import { Link } from "react-router-dom";

const MovieResearch = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/"
            className="text-sm text-primary hover:text-primary/80 transition-colors"
          >
            ← Back to Home
          </Link>

          <article className="mt-8">
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-3">
              Research Paper
            </p>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Designing an Effective Movie Recommendation System Using Efficient Content-Based Techniques
            </h1>

            <p className="text-muted-foreground mb-10">
              March 23, 2024 • Christopher Saia
            </p>

            <div className="space-y-10 leading-8 text-[17px] text-foreground/90">
              <section>
                <h2 className="text-2xl font-semibold mb-4">Abstract</h2>
                <p>
                  This paper explores the design of a movie recommendation system built around
                  content-based filtering, feature extraction, and cosine similarity. The central challenge
                  was to improve recommendation relevance while avoiding the over-specialization that
                  often limits traditional recommendation systems.
                </p>
                <p className="mt-4">
                  The project also considered the difficulty of making useful recommendations when
                  user preference data is limited, which is a common constraint in real-world systems.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Motivation</h2>
                <p>
                  Streaming platforms and digital media libraries present users with an overwhelming
                  amount of content. Recommendation systems act as filters, helping users discover
                  movies aligned with their interests. The challenge is making those suggestions both
                  relevant and varied.
                </p>
                <p className="mt-4">
                  This research aimed to improve user satisfaction by designing a recommendation
                  system that could better reflect a user’s preferences while still surfacing a broader
                  set of relevant titles.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Dataset</h2>
                <p>
                  The dataset used in this project contained 6,284 movies spanning the years 1980
                  through 2020. It included a rich set of attributes such as genre, director, cast,
                  runtime, company, budget, gross revenue, rating, and number of votes.
                </p>
                <p className="mt-4">
                  This wide attribute range made the dataset particularly suitable for content-based
                  recommendation, since each film could be represented through a feature profile
                  rather than only through user interaction history.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Core Method</h2>
                <p>
                  At the heart of the recommendation system was
                  <span className="font-medium"> cosine similarity</span>, which was used to compare movie
                  feature vectors and identify titles that were most similar to a user’s stated
                  preferences.
                </p>
                <p className="mt-4">
                  The workflow involved:
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2 text-foreground/90">
                  <li>Collecting and organizing movie metadata</li>
                  <li>Cleaning and preprocessing the dataset</li>
                  <li>Extracting useful features from each title</li>
                  <li>Flattening data structures for efficient similarity computation</li>
                  <li>Computing cosine similarity across the movie matrix</li>
                  <li>Generating recommendations from the highest-similarity matches</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Implementation</h2>
                <p>
                  The full system was implemented in Python using pandas for data handling and
                  transformation. To make similarity computation more efficient, the dataset was
                  flattened into one-dimensional structures before computing similarity scores across
                  the full matrix.
                </p>
                <p className="mt-4">
                  This preprocessing step significantly reduced redundant work and made large-scale
                  similarity comparisons more manageable. In the paper, this optimization is described
                  as a key performance improvement in the recommendation pipeline.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Results</h2>
                <p>
                  The system was evaluated through a user-centered approach. Users selected their
                  top five favorite movies, and the system generated recommendations in two ways:
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2 text-foreground/90">
                  <li>Recommendations based on each individual movie</li>
                  <li>Recommendations based on the combined preference profile of all five selections</li>
                </ul>
                <p className="mt-4">
                  Early results were encouraging. The recommendations were generally more relevant
                  than simpler baseline methods and also showed stronger diversity, reducing the risk
                  of repeatedly suggesting nearly identical content.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Challenges and Limitations</h2>
                <p>
                  One of the major challenges was limited user preference information. With only a
                  small set of favorite films as input, the system had to infer broader taste patterns
                  from relatively sparse signals.
                </p>
                <p className="mt-4">
                  Even so, the expanded dataset and richer feature set helped the recommender go
                  beyond exact genre matches and capture subtler relationships between films.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
                <p>
                  This project demonstrates how a carefully engineered content-based system can
                  produce useful, interpretable recommendations using structured movie metadata
                  and cosine similarity. It also highlights the importance of optimization when similarity
                  computations scale across thousands of titles.
                </p>
                <p className="mt-4">
                  More broadly, the work reflects a practical lesson in machine learning system design:
                  strong recommendation quality often comes from thoughtful feature engineering and
                  efficient implementation, not just model complexity.
                </p>
              </section>
            </div>

            <div className="mt-12 pt-8 border-t border-border">
              <a
                href="https://drive.google.com/file/d/10mLEbo06bpRBHM9i_BNxd6OnMufJsVTb/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 font-medium transition-colors"
              >
                Open original PDF →
              </a>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default MovieResearch;