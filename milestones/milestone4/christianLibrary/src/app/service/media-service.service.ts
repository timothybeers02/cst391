import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Media } from '../models/media.model';

@Injectable({ providedIn: 'root' })
export class MediaService {
  private apiUrl = 'http://localhost:3000/media';

  constructor(private http: HttpClient) {}

  // Get all media items
  public getAllMedia(callback: (mediaItems: Media[]) => void): void {
    this.http.get<Media[]>(this.apiUrl).subscribe((mediaItems: Media[]) => {
	// for (var mediaItem of mediaItems) {
	// 	console.log("Media Item Id/Title: " + mediaItem.MediaId + "/" + mediaItem.Title);
	// }
      callback(mediaItems);
    });
  }

  // Get a media item by ID
  public getMediaById(mediaId: number, callback: (mediaItem: Media) => void): void {
    const url = `${this.apiUrl}/${mediaId}`;
    this.http.get<Media>(url).subscribe((mediaItem: Media) => {
      callback(mediaItem);
    });
  }

  // Search media by title
  public searchMediaByTitle(title: string, callback: (mediaItems: Media[]) => void): void {
    const url = `${this.apiUrl}/search/title/${encodeURIComponent(title)}`;
    this.http.get<Media[]>(url).subscribe((mediaItems: Media[]) => {
      callback(mediaItems);
    });
  }

  // Search media by author
  public searchMediaByAuthor(author: string, callback: (mediaItems: Media[]) => void): void {
    const url = `${this.apiUrl}/search/author/${encodeURIComponent(author)}`;
    this.http.get<Media[]>(url).subscribe((mediaItems: Media[]) => {
      callback(mediaItems);
    });
  }

  // Get media items by type
  public getMediaByType(mediaType: string, callback: (mediaItems: Media[]) => void): void {
    const url = `${this.apiUrl}/type/${encodeURIComponent(mediaType)}`;
    this.http.get<Media[]>(url).subscribe((mediaItems: Media[]) => {
      callback(mediaItems);
    });
  }

  // Create a new media item
  public createMedia(media: Media, callback: () => void): void {
    this.http.post(this.apiUrl, media).subscribe(() => {
      callback();
    });
  }

  // Update an existing media item
  public updateMedia(mediaId: number, media: Media, callback: () => void): void {
    const url = `${this.apiUrl}/${mediaId}`;
    this.http.put(url, media).subscribe(() => {
      callback();
    });
  }

  // Delete a media item
  public deleteMedia(mediaId: number, callback: () => void): void {
    const url = `${this.apiUrl}/${mediaId}`;
    this.http.delete(url).subscribe(() => {
      callback();
    });
  }
}
