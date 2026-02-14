import mongoose from "mongoose";

export interface IContent {
  heroSection: {
    heading: string;
    subheading: string;
    price: string;
    priceLabel: string;
    priceUnit: string;
    highlights: string[];
  };
  projectSection: {
    heading: string;
    description: string;
  };
  amenitiesSection: {
    heading: string;
    amenities: Array<{
      name: string;
      icon: string;
    }>;
  };
  nearbySection: {
    heading: string;
    locations: Array<{
      name: string;
      distance: string;
    }>;
  };
  aboutSection: {
    heading: string;
    description: string;
  };
  constructionSection: {
    heading: string;
    updates: Array<{
      title: string;
      description: string;
      date: string;
    }>;
  };
  faqSection: {
    heading: string;
    faqs: Array<{
      question: string;
      answer: string;
    }>;
  };
}

const ContentSchema = new mongoose.Schema(
  {
    heroSection: {
      heading: { type: String, required: true },
      subheading: { type: String, required: true },
      price: { type: String, required: true },
      priceLabel: { type: String, required: true },
      priceUnit: { type: String, required: true },
      highlights: [{ type: String }],
    },
    projectSection: {
      heading: { type: String, required: true },
      description: { type: String, required: true },
    },
    amenitiesSection: {
      heading: { type: String, required: true },
      amenities: [
        {
          name: { type: String, required: true },
          icon: { type: String, required: true },
        },
      ],
    },
    nearbySection: {
      heading: { type: String, required: true },
      locations: [
        {
          name: { type: String, required: true },
          distance: { type: String, required: true },
        },
      ],
    },
    aboutSection: {
      heading: { type: String, required: true },
      description: { type: String, required: true },
    },
    constructionSection: {
      heading: { type: String, required: true },
      updates: [
        {
          title: { type: String, required: true },
          description: { type: String, required: true },
          date: { type: String, required: true },
        },
      ],
    },
    faqSection: {
      heading: { type: String, required: true },
      faqs: [
        {
          question: { type: String, required: true },
          answer: { type: String, required: true },
        },
      ],
    },
  },
  {
    timestamps: true,
  },
);

// @ts-ignore - Mongoose type instantiation issue
export default mongoose.model("Content", ContentSchema) as any;
