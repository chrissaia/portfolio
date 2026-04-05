import { Link } from "react-router-dom";

const DillardResearch = () => {
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
              Analyzing Retail Sales Trends and Revenue Drivers Through Statistical Modeling
            </h1>

            <p className="text-muted-foreground mb-10">
              December 16, 2025 • Christopher Saia
            </p>

            <div className="space-y-10 leading-8 text-[17px] text-foreground/90">
              <section>
                <h2 className="text-2xl font-semibold mb-4">Overview</h2>
                <p>
                  This research examines how transaction-level data can be used to identify the product,
                  color, seasonal, and regional patterns most associated with high unit profit margin at
                  Dillard’s. The project focuses on whether an individual sale is likely to produce a
                  strong unit profit margin and compares two interpretable predictive approaches:
                  a decision tree and a logistic regression model.
                </p>
                <p className="mt-4">
                  The broader goal was not simply to classify profitable transactions, but to extract
                  practical guidance that could help merchandising and leadership teams make better
                  decisions about inventory, promotion, and regional emphasis.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Dataset and Target</h2>
                <p>
                  The analysis used approximately 76,000 Dillard’s transaction records. Each row
                  contained product and sales information such as category, primary color, original
                  retail price, month, fiscal year, tender type, and item count.
                </p>
                <p className="mt-4">
                  From this data, gross profit and unit profit margin were derived. A binary target,
                  <span className="font-medium"> HighPM</span>, was then created to flag transactions with strong
                  profitability. This transformed the project into a supervised classification problem
                  focused on separating high-margin transactions from lower-margin ones.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Methodology</h2>
                <p>
                  The workflow began with variable review, metadata correction, and exploratory
                  analysis. Variables were assigned appropriate roles and measurement levels, and
                  category levels such as state and merchandise class were cleaned and consolidated
                  where necessary.
                </p>
                <p className="mt-4">
                  After feature preparation, the data was split into training and validation sets using
                  a 50/50 partition. Two models were then fit using the same prepared inputs:
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2 text-foreground/90">
                  <li>Decision Tree</li>
                  <li>Logistic Regression with backward selection</li>
                </ul>
                <p className="mt-4">
                  Validation misclassification rate was used as the primary assessment metric in order
                  to compare both models consistently.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Key Findings</h2>
                <p>
                  The strongest profitability signals came from a combination of
                  <span className="font-medium"> product category, primary color, month, and region</span>.
                  Across both models, color consistently emerged as one of the strongest drivers of
                  margin behavior.
                </p>
                <p className="mt-4">
                  The decision tree outperformed logistic regression on validation misclassification rate,
                  making it the selected model. The tree achieved a validation misclassification rate of
                  roughly 0.434, compared with approximately 0.452 for logistic regression.
                </p>
                <p className="mt-4">
                  Several actionable rules emerged:
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2 text-foreground/90">
                  <li>Accessories in blue, white, pink, yellow, and tan outside spring tended to be high-margin.</li>
                  <li>Girls’ merchandise in certain darker or saturated colors performed especially well.</li>
                  <li>Nude and orange apparel across several categories were much more likely to be low-margin.</li>
                  <li>Some menswear in colors such as wine, teal, and purple showed weak margin performance.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Business Interpretation</h2>
                <p>
                  The practical value of the project lies in its interpretability. Rather than only scoring
                  transactions, the models highlighted which combinations of category, color, season,
                  and geography were most likely to support strong margin performance.
                </p>
                <p className="mt-4">
                  The findings suggest that Dillard’s should prioritize inventory and visibility for
                  categories and color combinations that repeatedly appear in high-margin segments,
                  while reevaluating weaker-performing combinations for pricing, merchandising,
                  or markdown strategy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
                <p>
                  This project shows how interpretable machine learning and statistical modeling can
                  be used to turn retail transaction data into concrete operational guidance. Although
                  the models were only moderately accurate, they still uncovered repeatable patterns
                  that could support better decisions around assortment planning, promotion, and
                  inventory allocation.
                </p>
                <p className="mt-4">
                  More importantly, the work reinforced a core theme in applied analytics: even when
                  predictive performance is not perfect, a well-structured model can still generate
                  highly useful business insight.
                </p>
              </section>
            </div>

            <div className="mt-12 pt-8 border-t border-border">
              <a
                href="https://drive.google.com/file/d/1WnccjiiLIIVgi6upDraorXW8KqCEmpXo/view?usp=sharing"
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

export default DillardResearch;