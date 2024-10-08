# Milestone 1

<!-- 1. Cover Sheet -->
Timothy Beers \
College of Science, Engineering, & Technology, Grand Canyon University \
CST-391: JavaScript Web Application Development \
Professor Bobby Estey


<!-- 2. Introduction -->
## Introduction

In today's digital era, accessing biblical and religious resources should be easy. Christian Library is a web platform dedicated to providing users with digital copies of the Bible in various translations, alongside a diverse collection of Christian books and music. The purpose of this application is to serve as a comprehensive hub for people seeking to explore, understand, and deepen their faith through accessible Christian media. The platform enhances users' spiritual journeys by making essential Christian teachings readily available. Through this accessible and user-friendly platform, individuals can conveniently engage with scripture and inspirational content anytime, anywhere.


<!-- 3. Functionality Requirements -->
## Functionality Requirements

### Browsing Media

1. **As a visitor**, I want to browse available Bibles, books, and songs so that I can discover Christian media that interests me.

2. **As a user**, I want to view media organized by categories (e.g., Bible versions, book genres, music genres) so that I can easily find specific types of content.

3. **As a user**, I want to see featured or recommended media on the homepage so that I can explore popular or new content.

---

### Searching Content

4. **As a visitor**, I want to search for media by keywords, titles, authors, or scripture references so that I can quickly find specific content.

5. **As a user**, I want to filter search results by media type, version, author, or genre so that I can narrow down the results to what I am looking for.

6. **As a user**, I want to perform advanced searches (e.g., search within specific books of the Bible or within song lyrics) so that I can find precise information.

---

### Reading/Listening to Media

7. **As a user**, I want to download digital copies of the Bible in various versions, so that I can read scripture in the translation of my choice while offline.

8. **As a user**, I want to download Christian books, so that I can access Christian literature conveniently.

9. **As a user**, I want to download Christian songs, so that I can enjoy music while offline.

---

### User Account Management

10. **As a visitor**, I want to create a user account so that I can access personalized features.

11. **As a user**, I want to log in to my account securely so that my personal data is protected.

12. **As a user**, I want to update my profile information so that I can keep my account details current.

13. **As a user**, I want to reset my password if I forget it so that I can regain access to my account.

14. **As a user**, I want to view my reading and listening history so that I can revisit previously accessed media.

15. **As a user**, I want to manage my bookmarks and playlists so that I can organize my favorite content.

---

### Administrative Functions for Content Management

16. **As an administrator**, I want to log in to an admin panel so that I can manage the platform's content.

17. **As an administrator**, I want to add new media (Bibles, books, songs) to the library so that users have access to updated content.

18. **As an administrator**, I want to edit existing media details so that information remains accurate and current.

19. **As an administrator**, I want to delete media that is outdated or no longer appropriate so that the library maintains relevant content.

20. **As an administrator**, I want to manage user accounts (e.g., deactivate or ban users) so that I can enforce platform policies.


<!-- 4. Initial Database Design -->
## Database Design

![ER Diagram](./christianLibraryER.png)

<!-- 5. Initial UI Sitemap (Using Mermaid) -->
## UI Sitemap
![Sitemap](./christianLibrarySitemap.png)

<!-- 6. Initial UI Wireframes -->
## UI Wireframe Pages
|Page Name|Wireframe|
|--|--|
|Registration|![register](./wireframeViews/registrationPage.png)|
|Login|![login](./wireframeViews/loginPage.png)|
|Home|![home](./wireframeViews/homePage.png)|
|Browse|![browse](./wireframeViews/browseMedia.png)|
|Search|![search](./wireframeViews/searchPage.png)|
|Manage Media|![adminMedia](./wireframeViews/adminPanelMedia.png)|
|Manage Users|![adminUsers](./wireframeViews/adminPanelUsers.png)|

<!-- 7. Initial UML Classes -->

## UML Classes
![UML Diagram](./christianLibraryUML.png)

<!-- 8. Risks -->

## Risks

- **Technical Challenges**: Integrating the Angular frontend with the Express/Node.js backend and the MySQL database may have unforeseen issues that require additional time to resolve.
- **Learning Curve**: Unfamiliarity with technologies like Angular, Express, or MySQL could slow down development due to the time needed to learn and troubleshoot these tools.
- **Time Constraints**: Limited time for project completion might lead to rushed development, resulting in incomplete features or reduced code quality.
- **Scope Creep**: Adding features beyond the initial plan can overcomplicate the project, making it difficult to deliver a functional application within the allotted time.
- **Security Vulnerabilities**: Risks such as SQL injection, cross-site scripting, and improper authentication need to be addressed to protect user data and ensure application integrity.
- **Data Management**: Improper handling of user data and media files could lead to data loss, corruption, or breaches, impacting user trust and application reliability.
- **User Experience Issues**: Failing to create an intuitive and accessible user interface may result in poor user engagement and satisfaction.
- **Testing Limitations**: Insufficient testing could leave bugs undetected, affecting the application's functionality and user experience.
- **Dependency Risks**: Relying on third-party libraries or frameworks may introduce compatibility issues or vulnerabilities if those dependencies are outdated or unsupported.
- **Deployment Challenges**: Setting up the application in a live environment may present obstacles related to server configuration, hosting services, or scalability concerns.