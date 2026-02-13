import { Request, Response } from 'express';
import * as contentService from '../services';

export const getContent = async (req: Request, res: Response) => {
    try {
        const content = await contentService.getContent();
        res.status(200).json(content);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching content', error });
    }
};

export const updateContent = async (req: Request, res: Response) => {
    try {
        const updatedContent = await contentService.updateContent(req.body);
        res.status(200).json(updatedContent);
    } catch (error) {
        res.status(500).json({ message: 'Error updating content', error });
    }
};