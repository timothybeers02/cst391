import { Router } from "express";
import * as MediaController from "./media.controller";

const router = Router();

// Get all media items
router.get(
      "/media",
      MediaController.readMedia
);

// Add new media item (Admin only)
router.post(
      "/media", 
      MediaController.createMedia
);

// Update media item (Admin only)
router.put(
      "/media/:mediaId", 
      MediaController.updateMedia
);

// Delete media item (Admin only)
router.delete(
      "/media/:mediaId", 
      MediaController.deleteMedia
);

// Get media items by type
router.get(
      "/media/type/:type", 
      MediaController.readMediaByType
);

// Search media by title
router.get(
      "/media/search/title/:search",
      MediaController.readMediaByTitleSearch
);

// Search media by author
router.get(
      "/media/search/author/:search",
      MediaController.readMediaByAuthorSearch
);

export default router;
