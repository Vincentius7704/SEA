migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2zrq37ezoxvh94u")

  // remove
  collection.schema.removeField("6xpizzuu")

  // remove
  collection.schema.removeField("yqyucsoe")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "eh7cvicd",
    "name": "poster",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": [],
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2zrq37ezoxvh94u")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "6xpizzuu",
    "name": "poster",
    "type": "url",
    "required": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

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

  // remove
  collection.schema.removeField("eh7cvicd")

  return dao.saveCollection(collection)
})
