import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section
        id="features"
        className="py-16 md:py-20 lg:py-28"
        aria-label="ShipStation Features"
      >
        <div className="container">
          <SectionTitle
            title="Why Choose ShipStation for Your Personal Website?"
            paragraph="Create, design, and deploy your professional portfolio with ease - no coding required."
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Add structured data for better SEO */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": [
              ${featuresData.map((feature, index) => `
                {
                  "@type": "ListItem",
                  "position": ${index + 1},
                  "name": "${feature.title}",
                  "description": "${feature.paragraph}"
                }
              `).join(',')}
            ]
          }
        `}
      </script>
    </>
  );
};

export default Features;