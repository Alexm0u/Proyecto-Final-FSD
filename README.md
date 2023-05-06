# Welcome to Scoobike Backend

<details>
  <summary>Content 📝</summary>
  <ol>
    <li><a href="#objective">Objective</a></li>
    <li><a href="#about-the-project">About the project</a></li>
    <li><a href="#stack">Stack</a></li>
    <li><a href="#diagram">Diagram</a></li>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#dependencies">Dependencies</a></li>
    <li><a href="#endpoints">Endpoints</a></li>
    <li><a href="#licence">Licence</a></li>
    <li><a href="#development">Development</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

## Objective
This project requires an API connected to a database with at least one relation "One to Many" and "Many to Many". The API should be functional.

## About the project
The project goal is to help with the organization on a Bike and Scooter repairs. Trough this API you can manage basics functions: 

- Create and update users.
- Admin services, users and appointments.
- Manage user permission for staff and clients.

## Stack
Used tech:
<div align="center">
<a href="https://www.expressjs.com/">
    <img src= "https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"/>
</a>
<a href="https://nodejs.org/es/">
    <img src= "https://img.shields.io/badge/node.js-026E00?style=for-the-badge&logo=node.js&logoColor=white"/>
</a>
<a href="https://developer.mozilla.org/es/docs/Web/JavaScript">
    <img src= "https://img.shields.io/badge/javascipt-EFD81D?style=for-the-badge&logo=javascript&logoColor=black"/>
</a>
 </div>


## Diagram
<!-- ![image](https://user-images.githubusercontent.com/121814511/222975585-e33b1ecd-fc84-4b23-83bd-6e77fd566c60.png) -->

## Installation
1. Clone repository.
2. Install dependencies.
3. Connect repo with database.
4. ``` $ Execute migrations ``` 
5. ``` $ Execute seeders ``` 
6. ``` $ npm run dev ``` 

## Dependencies
1. Bcrypt 5.1.0
2. Dotenv 16.0.3
3. Express 4.18.2 
4. Jsonwebtoken 9.0.0
5. Mysql2 3.2.0
6. Nodemon 2.0.22
7. Sequelize 6.31.0
8. Sequelize-cli 6.6.0
9. Cors 2.8.5


## Endpoints
<details>
<summary>Endpoints</summary>


    - REGISTER

            POST http://localhost:3000/user
        body:
        ``` js
            {
                "dni": "1245978QR",
                "name": "Joseph Man",
                "phone": 654789632,
                "email": "joseph@gmail.com",
                "password": "joseph1234",
                "comments": "New client",
                "role_id": 1
            }
        ```

    - LOGIN

            POST localhost:3000/login  
        body:
        ``` js
            {
                "email": "joseph@gmail.com",
                "password": "joseph1234"
            }
        ```

    - UPDATE USER

            PUT http://localhost:3000/updateuser
        body:
        ``` js
            {
                "name": "Adam",
                "email": "Adam@adam.com",
                "password": "Adam1234"
            }
        ```

    - NEW APPOINTMENT

            POST http://localhost:3000/users/appointment 
        body:
        ``` js
            {
                "email": "Adam@adam.com",
                "password": "Adam1234",
                "service_id": 1,
                "user_id": 4,
                "mechanic_id": 1,
                "updatedAt": "2023-05-03T15:51:57.538Z",
                "createdAt": "2023-05-03T15:51:57.538Z"
            }
        ```

    - UPDATE APPOINTMENT

            PUT  http://localhost:3000/users/appointment/delete/1
        body:
        ``` js
            {
                "email": "Adam@adam.com",
                "password": "Adam1234",
                "service_id": 2,
                "user_id": 4,
                "mechanic_id": 1,
                "updatedAt": "2023-04-03T15:51:57.538Z",
                "createdAt": "2023-03-03T15:51:57.538Z"
            }
        ```

    - DELETE APPOINTMENT

            POST  http://localhost:3000/users/appointment/delete/1
        body:
        ``` js
            {
                "email": "Adan@adam.com",
                "password": "princeofeternia",
                "service_id": 1,
                "user_id": 4,
                "doctor_id": 1,
                "updatedAt": "2023-03-03T15:51:57.538Z",
                "createdAt": "2023-03-03T15:51:57.538Z"
            }
        ```
    - SEE OWN APPOINTMENTS AS CLIENT

            GET  http://localhost:3000/appointmentuser
        body:
         ``` js
            {
                "email": "Adam@adam.com",
                "password": "Adam1234",
                "service_id": 2,
                "user_id": 4,
                "mechanic_id": 1,
                "updatedAt": "2023-05-03T15:51:57.538Z",
                "createdAt": "2023-05-03T15:51:57.538Z"
            }
        ```
    - SEE ALL APPOINTMENTS AS MECHANIC ****

            GET  http://localhost:3000/appointments/
        body:
         ``` js
            {
                "email": "Adam@adam.com",
                "password": "Adam1234",
                "service_id": 2,
                "user_id": 4,
                "mechanic_id": 1,
                "updatedAt": "2023-05-03T15:51:57.538Z",
                "createdAt": "2023-05-03T15:51:57.538Z"
            }
        ```
    - SEE ALL USERS AS MECHANIC ****

            GET  http://localhost:3000/appointments/
        body:
         ``` js
            {
                "email": "Adam@adam.com",
                "password": "Adam1234",
                "service_id": 2,
                "user_id": 4,
                "mechanic_id": 1,
                "updatedAt": "2023-04-03T15:51:57.538Z",
                "createdAt": "2023-03-03T15:51:57.538Z"
            }
        ```
</details>

## Licence

This project it's under licence of Àlex Moya Camps.

## Development

``` js
 thisApp.belongsTo.Alex

 Developed by: Alexm0u
```  

## Contact
Àlex links:
<a href = "mailto:alex.moyacamps@gmail.com"><img src="https://img.shields.io/badge/Gmail-C6362C?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
<a href="https://www.linkedin.com/in/alejandro-moya-camps-5448a477/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a> 
</p>
