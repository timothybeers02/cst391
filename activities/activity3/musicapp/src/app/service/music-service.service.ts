import { Injectable } from '@angular/core';

import exampledata from '../../data/sample-music-data.json';

import { Album } from '../models/Album';
import { Artist } from '../models/Artist';
import { Track } from '../models/Track';

@Injectable({ providedIn: 'root' })
export class MusicServiceService {
	// Stores the list of artists
	private readonly artists: Artist[] = [];

	// Stores the list of albums
	private readonly albums: Album[] = [];

	constructor() {
   		// Initialize the artist and albums data upon service instantiation
    		this.createArtists();
    		this.createAlbums();
  	}

	// Creates and adds sample artists to the list
	private createArtists(): void {
		this.artists.push(new Artist(0, 'The Beatles'));
	}

	// Creates and adds albums to the list based on sample data
	private createAlbums(): void {
		exampledata.forEach((data: any) => {
			if (data.artist === 'The Beatles') {
				const tracks = data.tracks.map((trackData: any) => new Track(trackData.id, trackData.number, trackData.title, trackData.lyrics, trackData.video));
				const album = new Album(data.id, data.title, data.artist, data.description, data.year, data.image, tracks);
				this.albums.push(album);
			}
		});
	}

	// Retrieves list of artists
	public getArtists(): Artist[] {
		return this.artists;
	}

	// Retrieves list of albums
	public getAlbums(artist: string): Album[] {
		return this.albums;
	}

	// Retrieves a specific album by artist name and album ID
	public getAlbum(artist: string, id: number): Album | undefined {
		const album = this.albums.find((a) => a.Artist === artist && a.Id === id);

		if (album) {
			const tracks = album.Tracks.map((track) => new Track(track.Id, track.Number, track.Title, track.Lyrics, track.Video));
			return new Album(album.Id, album.Title, album.Artist, album.Description, album.Year, album.Image, tracks);
		}

		return undefined;
	}

	// Adds a new album to the list
	public createAlbum(album: Album): void {
		this.albums.push(album);
	}

	// Updates an existing album by replacing it
	public updateAlbum(album: Album): void {
		const index = this.albums.findIndex((a) => a.Id === album.Id);

		if (index !== -1) {
			this.albums.splice(index, 1, album);
		}
	}

	// Deletes an album from the list by ID
	public deleteAlbum(id: number, artist: string): void {
		const index = this.albums.findIndex((a) => a.Id === id);

		if (index !== -1) {
			this.albums.splice(index, 1);
		}
	}
}
