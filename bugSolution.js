```javascript
//Correct usage of $inc operator for nested fields
db.collection('myCollection').updateOne({"_id":ObjectId("someId")},{$inc:{"nested.counter":1}});
```