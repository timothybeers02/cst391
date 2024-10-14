import { Component, OnInit } from "@angular/core";
import { MediaService } from "../service/media-service.service";
import { Media } from "../models/media.model";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"],
})
export class SearchComponent implements OnInit {
  searchTerm: string = "";
  searchBy: string = "title"; // Default search by title
  mediaItems: Media[] = [];
  errorMessage: string = "";
  isLoading: boolean = false;

  constructor(private mediaService: MediaService) {}

  ngOnInit(): void {}

  onSearch(): void {
    if (!this.searchTerm.trim()) {
      this.mediaItems = [];
      return;
    }

    if (this.searchBy === 'title') {
      this.mediaService.searchMediaByTitle(this.searchTerm, (mediaItems: Media[]) => {
        this.mediaItems = mediaItems;
      });
    } else if (this.searchBy === 'author') {
      this.mediaService.searchMediaByAuthor(this.searchTerm, (mediaItems: Media[]) => {
        this.mediaItems = mediaItems;
      });
    }
  }
}
