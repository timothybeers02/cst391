import { Component, OnInit } from "@angular/core";
import { MediaService } from "../service/media-service.service";
import { Media } from "../models/media.model";

@Component({
  selector: "app-update-media",
  templateUrl: "./update-media.component.html",
  styleUrls: ["./update-media.component.css"],
})
export class UpdateMediaComponent implements OnInit {
  mediaItems: Media[] = [];
  errorMessage: string = "";

  constructor(private mediaService: MediaService) {}

  ngOnInit(): void {
    this.loadMediaItems();
  }

  loadMediaItems(): void {
    this.mediaService.getAllMedia((mediaItems: Media[]) => {
        this.mediaItems = mediaItems;
    });
  }

  updateMediaItem(mediaId: number): void {
    const updatedMedia = this.mediaItems.find((item) => item.mediaId === mediaId);
    if (updatedMedia) {
      this.mediaService.updateMedia(mediaId, updatedMedia, () => {
          console.log("Media item updated successfully.");
          this.loadMediaItems();
      });
    }
  }
}
