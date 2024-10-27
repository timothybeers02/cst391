# Milestone 5

<!-- 1. Cover Sheet -->
Timothy Beers \
College of Science, Engineering, & Technology, Grand Canyon University \
CST-391: JavaScript Web Application Development \
Professor Bobby Estey

## Introduction

In this milestone I will be rewriting the frontend application for the Christian Library in React. The new frontend will consist of the same functionality, CRUD operations on library media. The approach will be similar to the activities, with a home page consisting of a search/browse feature, a add/update page for media, and buttons on media cards to edit or delete certain ones.

## Design Report

### Updates made

- Rewrote frontend app in React
  - Same functionality is supported: all CRUD operations on Media for the Christian Library

### REST API Documentation

- The [Postman Documentation](https://www.postman.com/aviation-engineer-11414492/workspace/cst-391/collection/38823987-3e52d552-9cd7-42cd-bc3a-587710914cbc?action=share&creator=38823987) has all currently functioning endpoints listed with the required parameters and headers.

## Challenges Encountered

- Initially I had some challenges with consistent data across the API and frontend, but realized this was due to a mismatching property. After refactoring to match the API model, this issue disappeared.
- Maintaining state across parent and child components was challenging, but matching the structure of the activities helped in understanding and implementing a working data flow.

## Pending Bugs and Issues

- There is still no authentication. All admin operations are available to all site visitors.
- Styling is minimal, could be improved.

## Screencast

[Loom Screen Recording](https://www.loom.com/share/bf957b0d3f9544c5a0117668ac3f64a7?sid=b331ed0a-7861-4a47-9d08-12c7766947a0) showcasing all CRUD operations performed through the new React App.

## Conclusion

In this milestone, I rewrote the frontend application for the Christian Library in React. The rewritten app still supports all CRUD operations for media in the library. Creating this included managing state between parent and child views, and connecting that state to live data coming from the REST API created in an earlier milestone. Additionally, some simple css was added for a cleaner and more readable UI.