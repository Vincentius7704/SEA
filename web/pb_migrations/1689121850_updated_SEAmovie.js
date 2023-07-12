migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2zrq37ezoxvh94u")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nnkh771x",
    "name": "posterurl",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2zrq37ezoxvh94u")

  // remove
  collection.schema.removeField("nnkh771x")

  return dao.saveCollection(collection)
})
