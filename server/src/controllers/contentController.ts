import { Request, Response } from "express";
import { Content } from "../models";

export const getContent = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    let content = await Content.findOne();

    // If no content exists, return default content
    if (!content) {
      res
        .status(404)
        .json({ message: "Content not found. Please seed the database." });
      return;
    }

    res.status(200).json(content);
  } catch (error) {
    console.error("Get content error:", error);
    res.status(500).json({ message: "Error fetching content", error });
  }
};

export const updateContent = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const updates = req.body;

    // Find existing content or create new one
    let content = await Content.findOne();

    if (!content) {
      // Create new content if it doesn't exist
      content = new Content(updates);
      await content.save();
    } else {
      // Update existing content
      Object.assign(content, updates);
      await content.save();
    }

    res.status(200).json({
      message: "Content updated successfully",
      content,
    });
  } catch (error) {
    console.error("Update content error:", error);
    res.status(500).json({ message: "Error updating content", error });
  }
};

export const updateSection = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const { section } = req.params;
    const updates = req.body;

    const content = await Content.findOne();

    if (!content) {
      res.status(404).json({ message: "Content not found" });
      return;
    }

    // Validate section exists
    const validSections = [
      "heroSection",
      "projectSection",
      "amenitiesSection",
      "nearbySection",
      "aboutSection",
      "constructionSection",
      "faqSection",
    ];

    if (!validSections.includes(section)) {
      res.status(400).json({ message: "Invalid section name" });
      return;
    }

    // Update specific section
    (content as any)[section] = { ...(content as any)[section], ...updates };
    await content.save();

    res.status(200).json({
      message: `${section} updated successfully`,
      content,
    });
  } catch (error) {
    console.error("Update section error:", error);
    res.status(500).json({ message: "Error updating section", error });
  }
};
