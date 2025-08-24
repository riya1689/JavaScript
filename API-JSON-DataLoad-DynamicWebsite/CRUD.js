/**
 * CRUD
 * CRUD refers to the four fundamental operations we perform directly on a database to manage data
 * CREATE:Insert new records
 * INSERT INTO users (name, email) VALUES ("Riya", "riya@gmail.com");

 * READ  :Retrieve records
SELECT * FROM users;

 * UPDATE :Modify existing records
UPDATE users SET email = "riyasoftengineer@gmail.com" WHERE id = 1;
 * DELETE :Remove records
 DELETE FROM users WHERE id = 1;


CRUD = database-level actions
REST API = client ↔ server communication over HTTP that uses CRUD principles
 */

/**
 * [ Client (Browser / Mobile App) ]
                |
                |  (HTTP Request)
                v
[ REST API (Server) ]
   |        |        |        |
   |        |        |        |
  POST     GET      PUT     DELETE
(Create) (Read)   (Update) (Delete)
   |        |        |        |
   v        v        v        v
[ Database (CRUD operations) ]
   |        |        |        |
 INSERT   SELECT   UPDATE   DELETE

 */