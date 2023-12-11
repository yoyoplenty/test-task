--

# User Sector Application

## FrontEnd (UI)

- **Vercel Link:** [User Sector UI](https://user-sector-ui.vercel.app/)
- **GitHub Repository:** [User Sector UI GitHub](https://github.com/yoyoplenty/user-sector-ui)

### Login Details

#### Admin

- **Email:** admin@gmail.com
- **Password:** Admin100

#### User

- **Email:** user@gmail.com
- **Password:** User100

## Backend (API)

- **GitHub Repository:** [User Sector API GitHub](https://github.com/yoyoplenty/user-sector-api)
- **API URL:** [Sector App API](https://sector-app-api.onrender.com)
- **Swagger Documentation:** [API Documentation](https://sector-app-api.onrender.com/doc#/)

## Data Structure

### Sector

- **Name:** string
- **Parent Sector:** ObjectId

### UserSector

- **Name:** string
- **Sector:** ObjectId
- **User:** ObjectId
- **Agreed Terms:** boolean

### User

- **First Name:** string
- **Last Name:** string
- **Middle Name:** string (optional)
- **Email:** string
- **Password:** string
- **Role:** ROLE
- **Verified:** boolean

## Quick Note

There is an admin user who logs in and has the ability to create sectors, sub-sectors, and child sectors. Regular users can create user sector records based on the sectors and sub-sectors created by the admin.

Feel free to explore the UI, use the provided login details, and interact with the API. If you have any questions or issues, please refer to the respective GitHub repositories or documentation links.
