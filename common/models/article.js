'use strict';

module.exports = function (Article) {
    Article.getAllArticleComments = async (articleId) => {
        const article = await Article.findOne({
            "include": [
                {
                    "relation": "comments",
                    "scope": {
                        "include": [{ "relation": "ancestor" }]
                    }
                }
            ]
        });
        return article;
    }

    Article.remoteMethod('getAllArticleComments', {
        description: 'get all article comments',
        accepts: { arg: 'articleId', type: 'String', required: true },
        returns: { arg: 'comments', type: 'array' },
        http: { verb: 'get' }
    });
}




