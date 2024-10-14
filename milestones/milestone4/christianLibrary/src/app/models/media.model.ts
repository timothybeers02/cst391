export interface Media {
  mediaId: number
  mediaType: string
  title: string
  author: string
  category: string
  description: string
  filePath: string
}

// export class Media {
//   private mediaId: number = -1;
//   private mediaType: string = "";
//   private title: string = "";
//   private author: string = "";
//   private category: string = "";
//   private description: string = "";
//   private filePath: string = "";

//   constructor(
//     mediaId: number,
//     mediaType: string,
//     title: string,
//     author: string,
//     category: string,
//     description: string,
//     filePath: string
//   ) {
//     this.mediaId = mediaId;
//     this.mediaType = mediaType;
//     this.title = title;
//     this.author = author;
//     this.category = category;
//     this.description = description;
//     this.filePath = filePath;
//   }

//   get MediaId(): number {
//     return this.mediaId;
//   }
//   set MediaId(mediaId: number) {
//     this.mediaId = mediaId;
//   }

//   get MediaType(): string {
//     return this.mediaType;
//   }
//   set MediaType(mediaType: string) {
//     this.mediaType = mediaType;
//   }

//   get Title(): string {
//     return this.title;
//   }
//   set Title(title: string) {
//     this.title = title;
//   }

//   get Author(): string {
//     return this.author;
//   }
//   set Author(author: string) {
//     this.author = author;
//   }

//   get Category(): string {
//     return this.category;
//   }
//   set Category(category: string) {
//     this.category = category;
//   }

//   get Description(): string {
//     return this.description;
//   }
//   set Description(description: string) {
//     this.description = description;
//   }

//   get FilePath(): string {
//     return this.filePath;
//   }
//   set FilePath(filePath: string) {
//     this.filePath = filePath;
//   }
// }
