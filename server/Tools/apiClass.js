
// const urllib = require('urllib')
// const City = require("../../models/City")
// const mongoose = require('mongoose')

class API {
    constructor() {

    }

    filtereHomeData(data) {
        let pureData = {}
        pureData['title'] = data.title
        pureData['url'] = data.url
        pureData['explanation'] = data.explanation
        return pureData
    }


    filtereSearchData(data) {
        let items = data.collection.items
        items = items.map(i => {
            return (
                {
                    'title': i.data[0].title,
                    'href': i.links[0].href,
                }
            )
        })
        return items
    }
}

module.exports = API

