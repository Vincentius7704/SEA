migrate((db) => {
  const collection = new Collection({
    "id": "eew2rdx2anj8p26",
    "created": "2023-07-12 02:44:01.365Z",
    "updated": "2023-07-12 02:44:01.365Z",
    "name": "user",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "f6lf5vqa",
        "name": "balance",
        "type": "number",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "ppsvo1yy",
        "name": "order_history",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "w5ljamigrcl8iog",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
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
  const collection = dao.findCollectionByNameOrId("eew2rdx2anj8p26");

  return dao.deleteCollection(collection);
})
