import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import { Admin, Content } from "../models";

dotenv.config();

const seedDatabase = async () => {
  try {
    const mongoURI =
      process.env.MONGODB_URI || "mongodb://localhost:27017/real-estate-admin";
    await mongoose.connect(mongoURI);
    console.log("Connected to MongoDB");

    // Create admin user
    const adminExists = await Admin.findOne({ email: "admin@gmail.com" });

    if (!adminExists) {
      const hashedPassword = await bcrypt.hash("1234", 10);
      const admin = new Admin({
        email: "admin@gmail.com",
        password: hashedPassword,
      });
      await admin.save();
      console.log(
        "✓ Admin user created (email: admin@gmail.com, password: 1234)",
      );
    } else {
      console.log("✓ Admin user already exists");
    }

    // Create default content
    const contentExists = await Content.findOne();

    if (!contentExists) {
      const defaultContent = new Content({
        heroSection: {
          heading: "Thinking of a Fantastic Vicinity?",
          subheading: "Discover your dream home with premium amenities",
          price: "70L",
          priceLabel: "Starting Price",
          priceUnit: "Onwards",
          highlights: ["RERA Registered", "Ready to Move", "Prime Location"],
        },
        projectSection: {
          heading: "About Project",
          description:
            "Vighnaharta Enclave offers premier residential spaces with modern amenities and thoughtful design. Located in the heart of Boisar, this project combines comfort with convenience, providing an ideal living environment for families. Experience luxury living with spacious apartments, beautiful landscapes, and world-class facilities that cater to all your needs.",
        },
        amenitiesSection: {
          heading: "Amenities",
          amenities: [
            { name: "Gymnasium", icon: "Dumbbell" },
            { name: "Kids Play Area", icon: "Baby" },
            { name: "Jogging Track", icon: "Footprints" },
            { name: "Yoga Deck", icon: "Sparkles" },
            { name: "Swimming Pool", icon: "Waves" },
            { name: "Clubhouse", icon: "Home" },
          ],
        },
        nearbySection: {
          heading: "Explore More Buildings in the Township",
          locations: [
            { name: "Boisar Railway Station", distance: "2 km" },
            { name: "Schools", distance: "1.5 km" },
            { name: "Hospitals", distance: "3 km" },
            { name: "Shopping Mall", distance: "2.5 km" },
            { name: "Highway", distance: "1 km" },
          ],
        },
        aboutSection: {
          heading: "About Us",
          description:
            "We are committed to creating exceptional living spaces that combine modern design with sustainable practices. With years of experience in real estate development, we strive to deliver projects that exceed expectations and create communities where families can thrive.",
        },
        constructionSection: {
          heading: "Construction Updates",
          updates: [
            {
              title: "Foundation Complete",
              description:
                "Strong foundation laid with high-quality materials ensuring long-lasting durability.",
              date: "January 2024",
            },
            {
              title: "Structure Progress",
              description:
                "Main structure construction is 80% complete with quality checks at every stage.",
              date: "November 2024",
            },
            {
              title: "Interior Work Started",
              description:
                "Interior finishing work has commenced with premium fixtures and fittings.",
              date: "December 2024",
            },
          ],
        },
        faqSection: {
          heading: "Frequently Asked Questions",
          faqs: [
            {
              question: "What are the payment options available?",
              answer:
                "We offer flexible payment plans including bank loans, cash payments, and installment options tailored to your needs.",
            },
            {
              question: "When is the expected possession date?",
              answer:
                "The project is expected to be completed by December 2025, with possession dates communicated well in advance.",
            },
            {
              question: "What amenities are included?",
              answer:
                "The project includes gymnasium, kids play area, jogging track, yoga deck, swimming pool, clubhouse, and 24/7 security.",
            },
            {
              question: "Is the project RERA registered?",
              answer:
                "Yes, the project is fully RERA registered and complies with all regulatory requirements.",
            },
          ],
        },
      });

      await defaultContent.save();
      console.log("✓ Default content created");
    } else {
      console.log("✓ Content already exists");
    }

    console.log("\n✅ Database seeded successfully!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Seeding error:", error);
    process.exit(1);
  }
};

seedDatabase();
