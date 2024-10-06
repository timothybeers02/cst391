# Milestone 3

<!-- 1. Cover Sheet -->
Timothy Beers \
College of Science, Engineering, & Technology, Grand Canyon University \
CST-391: JavaScript Web Application Development \
Professor Bobby Estey

## Introduction

In this milestone I will be creating a REST API to interface with the Christian Library database. This API will allow consumers (the application) to retrieve information about users and the media on the platform. There will be endpoints for admins to add and update media, and endpoints for the application to display this media to the users.

## Design Report

### Updates made

- Added Models, Queries, DAOs, Controllers, and Routes for users and media.
- Added simple authorization middleware that currently checks a hardcoded token, but will verify logged in state and user roles in the future.

### REST API Documentation

- The [Postman Documentation](https://www.postman.com/aviation-engineer-11414492/workspace/cst-391/collection/38823987-3e52d552-9cd7-42cd-bc3a-587710914cbc?action=share&creator=38823987) has all currently functioning endpoints listed with the required parameters and headers.

## Challenges Encountered

- One challenge encountered was with secure authentication and role checking. I didn't have enough time to research working password hashing methods and a way to generate an authorization token based on those. Instead, I went with a hardcoded authorization token and no role checking for now.
- Some issues were encountered with the expected responses from endpoints during the screen recording, like the login endpoint.

## Pending Bugs and Issues

- Passwords are not hashed. They are currently sent and stored in plain text, which would be a large security flaw in production.
- Roles are not currently checked when making requests to the API. This means a logged in user could technically make admin requests if the endpoint was known. Obscurity of endpoint details is not enough security for production here.
- The authorization token is hardcoded. This is a placeholder until real authorization is implemented, and should never make it to production this way.

## Screencast

[Loom Screen Recording](https://www.loom.com/share/c05d44bd6b9c4d75a0c34414e91bd24f?sid=b3cb93bf-c199-46ae-b74e-0d02d3362dbc) demonstrating the REST API usage through Postman and analyzing the resulting table contents in our SQL server using phpMyAdmin.

## Conclusion

In this milestone I created the beginning of the REST API to interface with the Christian Library database. The API now has endpoints for CRUD operations on media and users. With this, users will be able to register and login, and allow the application to display media to users, and get updated by admins. There are currently some security vulnerabilities, but I plan to iron those out as the project progresses.