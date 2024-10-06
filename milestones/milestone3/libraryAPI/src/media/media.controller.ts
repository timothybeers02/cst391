import { Request, RequestHandler, Response } from "express";
import { Media } from "./media.model";
import * as MediaDao from "./media.dao";
import { OkPacket } from "mysql";

// Read all media items or a specific media item by ID
export const readMedia: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    let mediaItems: Media[];
    let mediaId = parseInt(req.query.mediaId as string);

    console.log("mediaId", mediaId);
    if (Number.isNaN(mediaId)) {
      mediaItems = await MediaDao.readMedias();
    } else {
      mediaItems = [await MediaDao.readMediaByMediaId(mediaId)];
    }

    res.status(200).json(mediaItems);
  } catch (error) {
    console.error("[media.controller][readMedia][Error] ", error);
    res.status(500).json({
      message: "There was an error when fetching media items",
    });
  }
};

// Read media items by type
export const readMediaByType: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const mediaType = req.params.type;
    const mediaItems = await MediaDao.readMediasByType(mediaType);

    res.status(200).json(mediaItems);
  } catch (error) {
    console.error("[media.controller][readMediaByType][Error] ", error);
    res.status(500).json({
      message: "There was an error when fetching media items by type",
    });
  }
};

// Search media items by title
export const readMediaByTitleSearch: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const search = "%" + req.params.search + "%";
    console.log("search", search);
    const mediaItems = await MediaDao.readMediaByTitleSearch(search);

    res.status(200).json(mediaItems);
  } catch (error) {
    console.error("[media.controller][readMediaByTitleSearch][Error] ", error);
    res.status(500).json({
      message: "There was an error when searching media by title",
    });
  }
};

// Search media items by author
export const readMediaByAuthorSearch: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const search = "%" + req.params.search + "%";
    console.log("search", search);
    const mediaItems = await MediaDao.readMediaByAuthorSearch(search);

    res.status(200).json(mediaItems);
  } catch (error) {
    console.error("[media.controller][readMediaByAuthorSearch][Error] ", error);
    res.status(500).json({
      message: "There was an error when searching media by author",
    });
  }
};

// Create a new media item
export const createMedia: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const okPacket: OkPacket = await MediaDao.createMedia(req.body);

    console.log("req.body", req.body);
    console.log("media", okPacket);

    res.status(200).json(okPacket);
  } catch (error) {
    console.error("[media.controller][createMedia][Error] ", error);
    res.status(500).json({
      message: "There was an error when creating the media item",
    });
  }
};

// Update an existing media item
export const updateMedia: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const okPacket: OkPacket = await MediaDao.updateMedia(req.body);

    console.log("req.body", req.body);
    console.log("media", okPacket);

    res.status(200).json(okPacket);
  } catch (error) {
    console.error("[media.controller][updateMedia][Error] ", error);
    res.status(500).json({
      message: "There was an error when updating the media item",
    });
  }
};

// Delete a media item
export const deleteMedia: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    let mediaId = parseInt(req.params.mediaId as string);

    console.log("mediaId", mediaId);
    if (!Number.isNaN(mediaId)) {
      const response = await MediaDao.deleteMedia(mediaId);

      res.status(200).json(response);
    } else {
      throw new Error("Integer expected for mediaId");
    }
  } catch (error) {
    console.error("[media.controller][deleteMedia][Error] ", error);
    res.status(500).json({
      message: "There was an error when deleting the media item",
    });
  }
};
