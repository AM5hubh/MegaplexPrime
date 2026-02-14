import mongoose from "mongoose";

export interface IContent {
  heroSection: {
    title: string;
    subtitle: string;
    pricingTitle: string;
    location: string;
  };
  projectSection: {
    title: string;
    description: string;
    brochureText: string;
  };
  amenitiesSection: {
    title: string;
    subtitle: string;
    viewMoreText: string;
  };
  nearbySection: {
    title: string;
  };
  aboutSection: {
    title: string;
    content: string;
  };
  constructionSection: {
    title: string;
    updateLabel: string;
  };
  faqSection: {
    title: string;
    questions: Array<{
      question: string;
      answer: string;
    }>;
  };
}

const ContentSchema = new mongoose.Schema(
  {
    heroSection: {
      title: { type: String, required: true },
      subtitle: { type: String, required: true },
      pricingTitle: { type: String, required: true },
      location: { type: String, required: true },
    },
    projectSection: {
      title: { type: String, required: true },
      description: { type: String, required: true },
      brochureText: { type: String, required: true },
    },
    amenitiesSection: {
      title: { type: String, required: true },
      subtitle: { type: String, required: true },
      viewMoreText: { type: String, required: true },
    },
    nearbySection: {
      title: { type: String, required: true },
    },
    aboutSection: {
      title: { type: String, required: true },
      content: { type: String, required: true },
    },
    constructionSection: {
      title: { type: String, required: true },
      updateLabel: { type: String, required: true },
    },
    faqSection: {
      title: { type: String, required: true },
      questions: [
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

export default mongoose.model("Content", ContentSchema);
