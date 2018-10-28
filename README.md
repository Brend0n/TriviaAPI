![alt text](https://github.com/Brend0n/TriviaAPI/blob/master/assets/Trivia.png?raw=true)
## TriviaAPI
#API providing questions and answers

* [Guidelines](#guidelines)
* [API EndPoints](#api-endpoints)
* [DB Schemas](#db-schemas)
* [Request & Response Examples](#request--response-examples)
* [How to install](#how-to-install)

## Guidelines
This document provide guidelines and example of use for this API

## API EndPoints
* ./                      => GET
* ./questions             => GET/POST/DELETE
* ./questions/random      => GET

## DB Schemas

| Column      | Type                    | Nullable  | Default                                    |
| ----------- | ------------------------| --------- | ------------------------------------------ |
| id          | integer                 | not null  | nextval('questions_id_seq'::regclass)      |
| question    | character varying(255)  | not null  |                                            |
| answer      | character varying(255)  | not null  |                                            |
| created_at  | timestamp with time zone|           | CURRENT_TIMESTAMP                          |
| updated_at  | timestamp with time zone|           | CURRENT_TIMESTAMP                          |


|Indexes:   "questions_pkey" PRIMARY KEY, btree (id)

## Request & Response Examples
 * GET ./: 
      * ![alt text](https://github.com/Brend0n/TriviaAPI/blob/master/assets/front-end.png?raw=true)
      
 * GET ./questions:
      * return an array of JSON object:
      ```bash
            [
                {
                    "id": 20,
                    "question": "What is your question?",
                    "answer": "Nothing",
                    "created_at": "2018-10-28T08:38:38.346Z",
                    "updated_at": "2018-10-28T08:38:38.346Z"
                },
                {
                    "id": 21,
                    "question": "What is your question?",
                    "answer": "Nothing",
                    "created_at": "2018-10-28T08:40:29.641Z",
                    "updated_at": "2018-10-28T08:40:29.641Z"
                },
                {
                    "id": 22,
                    "question": "What is your question?",
                    "answer": "Nothing",
                    "created_at": "2018-10-28T08:41:42.580Z",
                    "updated_at": "2018-10-28T08:41:42.580Z"
                },
                {
                    "id": 23,
                    "question": "What is your question?",
                    "answer": "v",
                    "created_at": "2018-10-28T08:44:22.160Z",
                    "updated_at": "2018-10-28T08:44:22.160Z"
                }
            ]
        ```
   
 * GET ./questions/random:
      * return an array of a unique JSON object:
      ```bash
            [
                {
                    "id": 20,
                    "question": "Whatweweweis your name?",
                    "answer": "fwferf",
                    "created_at": "2018-10-28T08:38:38.346Z",
                    "updated_at": "2018-10-28T08:38:38.346Z"
                }
            ]
      ```
            
 * POST ./questions 
      * To create a new question you need at least a non empty question and answer:
      ```bash
      {
          "question": "In hockey, how many players from each team are allowed to be on the ice at the same time?", 
          "answer":   "Environment"},
      }
     ```
      
      * Response will look like this:
      ```bash
        [
          {
              "id": 13,
              "question": "What is your name?",
              "answer": "John",
              "created_at": "2018-10-28T15:02:36.278Z",
              "updated_at": "2018-10-28T15:02:36.278Z"
          }
        ]
     ```
        
  ## How to Install
       
 Install PostGres Database:
       
    ```bash
      echo "CREATE DATABASE clack;" | psql
    ```
    
To install dependencies:

    ```bash
        yarn
    ```

To run migrations and set up the database:

    ```bash
        yarn migrate
    ```

To roll back migrations

    ```bash
        yarn rollback
    ```

To run tests:

    ```bash
        yarn test
    ```

 
      
 





