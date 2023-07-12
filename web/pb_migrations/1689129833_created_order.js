migrate((db) => {
  const collection = new Collection({
    "id": "w5ljamigrcl8iog",
    "created": "2023-07-12 02:43:53.886Z",
    "updated": "2023-07-12 02:43:53.886Z",
    "name": "order",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "erzm1aqq",
        "name": "status",
        "type": "bool",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "azuaajlj",
        "name": "movie_title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "bhrlt1n6",
        "name": "seat_number",
        "type": "json",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "hydxqq8e",
        "name": "cost",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("w5ljamigrcl8iog");

  return dao.deleteCollection(collection);
})
