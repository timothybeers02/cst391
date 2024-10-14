# Milestone 4

<!-- 1. Cover Sheet -->
Timothy Beers \
College of Science, Engineering, & Technology, Grand Canyon University \
CST-391: JavaScript Web Application Development \
Professor Bobby Estey

## Introduction

In this milestone I'll be creating an Angular application that consumes the Christian Library REST API. This will consist of basic operations to create, read, update, and delete media in the database. 

## Design Report

### Updates made

- An Angular application to perform CRUD operations on our library database consisting of:
  - application router and navigation bar
  - create-media, update-media, browse-media, delete-media, and search components
  - media service to consume the API

### REST API Documentation

- The [Postman Documentation](https://www.postman.com/aviation-engineer-11414492/workspace/cst-391/collection/38823987-3e52d552-9cd7-42cd-bc3a-587710914cbc?action=share&creator=38823987) has all currently functioning endpoints listed with the required parameters and headers.

## Challenges Encountered

- Initially had some difficulties converting the API data into local models, but resolved them quickly after referring to the activities.
- Could not display components to the appropriate roles without login/registration functionality, all features are visible to all users.

## Pending Bugs and Issues

- All features are visible to all roles
- No login/registration or account based features
- Minimal styling; could use improvements

## Screencast

[Loom Screen Recording](https://www.loom.com/share/8713c955e93c47d0a5695b82a278411d?sid=125b8e6c-da68-4498-b37e-b43d6384fccb) showcasing the CRUD operations performed through the Angular application in the browser.

## Conclusion

In this milestone I created a frontend Angular application for the Christian Library. This included a service to consume the API, components for CRUD operations, and a basic router and navigation bar to expose all of the component's views through the GUI. The application is still missing login/registration, and all features are visible by default as a result. On future iterations, the application could benefit from this functionality as well as additional styling for a cleaner look and better UX.