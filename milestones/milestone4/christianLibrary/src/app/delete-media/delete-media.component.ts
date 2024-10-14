import { Component, OnInit } from "@angular/core";
import { MediaService } from "../service/media-service.service";
import { Media } from "../models/media.model";

@Component({
  selector: "app-delete-media",
  templateUrl: "./delete-media.component.html",
  styleUrls: ["./delete-media.component.css"],
})
export class DeleteMediaComponent implements OnInit {
  mediaItems: Media[] = [];
  errorMessage: string = "";

  constructor(private mediaService: MediaService) {}

  ngOnInit(): void {
    this.loadMediaItems();
  }

  loadMediaItems(): void {
    this.mediaService.getAllMedia((mediaItems: Media[]) => {
        this.mediaItems = mediaItems;
      }
    );
  }

  deleteMediaItem(mediaId: number): void {
    this.mediaService.deleteMedia(mediaId, () => {
        this.mediaItems = this.mediaItems.filter(
          (item) => item.mediaId !== mediaId
        );
      }
    );
  }
}
