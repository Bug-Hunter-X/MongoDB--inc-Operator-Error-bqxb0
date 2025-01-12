# MongoDB $inc Operator Error
This repository demonstrates a common error encountered when using the `$inc` operator in MongoDB.
The incorrect usage of the `$inc` operator can lead to unexpected behavior. This issue arises when trying to increment a field within a nested object using incorrect syntax.
The correct usage involves ensuring that the field path within the `$inc` operator is a string, even for nested fields.  Failure to follow this pattern results in the update failing to increment the counter as expected. 