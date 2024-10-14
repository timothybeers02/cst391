import { Component, OnInit } from "@angular/core";
import { MediaService } from "../service/media-service.service";
import { Media } from "../models/media.model";

@Component({
  selector: "app-browse-media",
  templateUrl: "./browse-media.component.html",
  styleUrls: ["./browse-media.component.css"],
})
export class BrowseMediaComponent implements OnInit {
  mediaItems: Media[] = [];
  errorMessage: string = "";

  constructor(private mediaService: MediaService) {}

  ngOnInit(): void {
    this.loadMediaItems();
  }

  private loadMediaItems(): void {
    this.mediaService.getAllMedia((mediaItems: Media[]) => {
      this.mediaItems = mediaItems;
    });
  }
}
