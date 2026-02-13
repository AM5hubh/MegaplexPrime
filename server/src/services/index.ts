import { getContent, updateContent } from '../data/content';

export const ContentService = {
    getContent: async () => {
        return await getContent();
    },
    updateContent: async (newContent: any) => {
        return await updateContent(newContent);
    }
};