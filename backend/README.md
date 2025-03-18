
# SYNC-STUDIO Backend

Basic RESTful api for Products 



#### INSTALLATION INSTRUCTIONS
-   Clone or download the repo. into your local system.
-   cd into that root folder you just cloned locally.

-   cd into the backend folder and do the following 

-   install all dependencies which are written in the packet.json file, type
    ```
    npm install
    ```

- head over to neon dabase website and get the postgreSQL connection link from the neon DB dashboard
- place the connection string inside the .env file, check .env.example file for reference

-  ```
    npx prisma db push
    ```

- if you need migration 

    ```
    npx prisma migrate dev
    ```


-   ```
    npx prisma generate
    ```

Now typing
    ```
    npm start
    ```
    will start a server !
    
    App should now be running on **localhost:[PORT]**
         
### Dependencies 
 - For dependencies refer package.json
