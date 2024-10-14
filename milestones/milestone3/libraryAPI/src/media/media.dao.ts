import { OkPacket } from 'mysql';
import { execute } from '../services/mysql.connector';
import { Media } from './media.model';
import { mediaQueries } from './media.queries';

export const readMedias = async () => {
  return execute<Media[]>(mediaQueries.readMedia, []);
};

export const readMediasByType = async (mediaType: string) => {
  return execute<Media[]>(mediaQueries.readMediaByType, [mediaType]);
};

export const readMediaByTitleSearch = async (search: string) => {
  console.log("search param", search);
  return execute<Media[]>(mediaQueries.readMediaByTitleSearch, [search]);
};

export const readMediaByAuthorSearch = async (search: string) => {
  console.log("search param", search);
  return execute<Media[]>(mediaQueries.readMediaByAuthorSearch, [search]);
};

export const readMediaByMediaId = async (mediaId: number) => {
  return execute<Media>(mediaQueries.readMediaByMediaId, [mediaId]);
};

export const createMedia = async (media: Media) => {
  // (media_type, title, author, category, description, file_path)
  return execute<OkPacket>(mediaQueries.createMedia, [
    media.mediaType, media.title, media.author, media.category, media.description, media.filePath
  ]);
};

export const updateMedia = async (media: Media) => {
  return execute<OkPacket>(mediaQueries.updateMedia, [
    media.mediaType, media.title, media.author, media.category, media.description, media.filePath, media.mediaId
  ]);
};

export const deleteMedia = async (mediaId: number) => {
  return execute<OkPacket>(mediaQueries.deleteMedia, [mediaId]);
};