import { Component } from "@angular/core";
import { MediaService } from "../service/media-service.service";
import { Media } from "../models/media.model";

@Component({
  selector: "app-create-media",
  templateUrl: "./create-media.component.html",
  styleUrls: ["./create-media.component.css"],
})
export class CreateMediaComponent {
  media: Media = {
    mediaId: 0,
    mediaType: "",
    title: "",
    author: "",
    category: "",
    description: "",
    filePath: "",
  };
  errorMessage: string = "";
  successMessage: string = "";

  constructor(private mediaService: MediaService) {}

  createMedia(): void {
    this.mediaService.createMedia(
      this.media,
      () => {
        this.successMessage = "Media item created successfully.";
        this.clearForm();
      }
    );
  }

  clearForm(): void {
    this.media = {
      mediaId: 0,
      mediaType: "",
      title: "",
      author: "",
      category: "",
      description: "",
      filePath: "",
    };
  }
}
