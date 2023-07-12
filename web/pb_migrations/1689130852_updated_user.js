migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("eew2rdx2anj8p26")

  // remove
  collection.schema.removeField("ppsvo1yy")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("eew2rdx2anj8p26")

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
