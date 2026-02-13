export interface HeroSection {
    title: string;
    subtitle: string;
}

export interface ProjectOverview {
    title: string;
    description: string;
}

export interface NearbyConnectivity {
    title: string;
    description: string;
}

export interface Amenities {
    title: string;
    description: string;
}

export interface AboutUs {
    title: string;
    content: string;
}

export interface ConstructionUpdates {
    label: string;
}

export interface FAQ {
    question: string;
    answer: string;
}

export interface Content {
    heroSection: HeroSection;
    projectOverview: ProjectOverview;
    nearbyConnectivity: NearbyConnectivity;
    amenities: Amenities[];
    aboutUs: AboutUs;
    constructionUpdates: ConstructionUpdates[];
    faq: FAQ[];
}