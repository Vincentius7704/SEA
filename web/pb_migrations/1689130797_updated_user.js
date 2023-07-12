migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("eew2rdx2anj8p26")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "td74ins9",
    "name": "history",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "w5ljamigrcl8iog",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("eew2rdx2anj8p26")

  // remove
  collection.schema.removeField("td74ins9")

  return dao.saveCollection(collection)
})
