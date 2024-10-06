export const mediaQueries = {
  readMedia: `
    SELECT 
      id AS mediaId, media_type AS mediaType, title AS title, 
      author AS author, category AS category, description AS description, 
      file_path AS filePath
    FROM media
  `,
  readMediaByType: `
    SELECT 
      id AS mediaId, media_type AS mediaType, title AS title, 
      author AS author, category AS category, description AS description, 
      file_path AS filePath
    FROM media
    WHERE media_type = ?
  `,
  readMediaByTitleSearch: `
    SELECT 
      id AS mediaId, media_type AS mediaType, title AS title, 
      author AS author, category AS category, description AS description, 
      file_path AS filePath
    FROM media
    WHERE title LIKE ?
  `,
  readMediaByAuthorSearch: `
    SELECT 
      id AS mediaId, media_type AS mediaType, title AS title, 
      author AS author, category AS category, description AS description, 
      file_path AS filePath
    FROM media
    WHERE author LIKE ?
  `,
  readMediaByMediaId: `
    SELECT 
      id AS mediaId, media_type AS mediaType, title AS title, 
      author AS author, category AS category, description AS description, 
      file_path AS filePath
    FROM media
    WHERE id = ?
  `,
  createMedia: `
    INSERT INTO media (media_type, title, author, category, description, file_path)
    VALUES (?, ?, ?, ?, ?, ?)
  `,
  updateMedia: `
    UPDATE media
    SET media_type = ?, title = ?, author = ?, category = ?, description = ?, file_path = ?
    WHERE id = ?
  `,
  deleteMedia: `
    DELETE FROM media
    WHERE id = ?
  `,
};
