var dbUtils = {
	insertMany: function(mongoCollection, itemCollection) {
		return itemCollection.map(function(item) {
			return mongoCollection.insert(item)
		})
	}
}

module.exports = dbUtils;