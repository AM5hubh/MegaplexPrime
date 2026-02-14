import api from "./api";

export interface HeroSectionContent {
  heading: string;
  subheading: string;
  price: string;
  priceLabel: string;
  priceUnit: string;
  highlights: string[];
}

export interface ProjectSectionContent {
  heading: string;
  description: string;
}

export interface AmenitySectionContent {
  heading: string;
  amenities: Array<{
    name: string;
    icon: string;
  }>;
}

export interface NearbySectionContent {
  heading: string;
  locations: Array<{
    name: string;
    distance: string;
  }>;
}

export interface AboutSectionContent {
  heading: string;
  description: string;
}

export interface ConstructionSectionContent {
  heading: string;
  updates: Array<{
    title: string;
    description: string;
    date: string;
  }>;
}

export interface FAQSectionContent {
  heading: string;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export interface ContentData {
  heroSection: HeroSectionContent;
  projectSection: ProjectSectionContent;
  amenitiesSection: AmenitySectionContent;
  nearbySection: NearbySectionContent;
  aboutSection: AboutSectionContent;
  constructionSection: ConstructionSectionContent;
  faqSection: FAQSectionContent;
}

export const contentService = {
  async getContent(): Promise<ContentData> {
    const response = await api.get("/content");
    return response.data;
  },

  async updateContent(content: ContentData): Promise<ContentData> {
    const response = await api.put("/content", content);
    return response.data;
  },

  async updateSection(
    section: keyof ContentData,
    data: ContentData[keyof ContentData],
  ): Promise<ContentData> {
    const response = await api.put(`/content/${section}`, data);
    return response.data;
  },
};
