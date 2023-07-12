migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2zrq37ezoxvh94u")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yqyucsoe",
    "name": "poster2",
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
  collection.schema.removeField("yqyucsoe")

  return dao.saveCollection(collection)
})
