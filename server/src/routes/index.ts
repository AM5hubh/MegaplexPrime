import { Router } from 'express';
import { getContent, updateContent } from '../controllers';

const router = Router();

// Route to get the content for the real estate website
router.get('/content', getContent);

// Route to update the content for the admin panel
router.put('/content', updateContent);

export default router;