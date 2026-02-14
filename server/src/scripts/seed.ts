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
          title: "Thinking of a Fantastic Vicinity?",
          subtitle: "Discover your dream home with premium amenities",
          pricingTitle: "Vighnaharta Infinity",
          location: "Boisar East, Palghar",
        },
        projectSection: {
          title: "About Project",
          description:
            "Vighnaharta Enclave offers premier residential spaces with modern amenities and thoughtful design. Located in the heart of Boisar, this project combines comfort with convenience, providing an ideal living environment for families.",
          brochureText: "Download Brochure",
        },
        amenitiesSection: {
          title: "Amenities",
          subtitle:
            "Thoughtfully crafted surroundings that reflect tradition, comfort, and a human-centered design approach.",
          viewMoreText: "View more",
        },
        nearbySection: {
          title: "Explore More Buildings in the Township",
        },
        aboutSection: {
          title: "About Us",
          content:
            "We are committed to creating exceptional living spaces that combine modern design with sustainable practices. With years of experience in real estate development, we strive to deliver projects that exceed expectations.",
        },
        constructionSection: {
          title: "Construction Updates",
          updateLabel: "Latest Progress",
        },
        faqSection: {
          title: "Frequently Asked Questions",
          questions: [
            {
              question: "What are the payment options available?",
              answer:
                "We offer flexible payment plans including bank loans, cash payments, and installment options.",
            },
            {
              question: "When is the expected possession date?",
              answer:
                "The project is expected to be completed by December 2025.",
            },
            {
              question: "What amenities are included?",
              answer:
                "The project includes gymnasium, kids play area, jogging track, yoga deck, and more.",
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
