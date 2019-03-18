
module.exports = function(Category){
 
    Category.getAllCategoryArticle = async (categoryId) => {
     const article = await Category.findOne({
        where: { id: categoryId},
        include: [{relation: 'articles'}]
     })
     return article;
    }

    Category.remoteMethod( 'getAllCategoryArticle', {
        description: 'get all category articles',
        accepts: { arg: 'categoryId', type: 'String', required: true},
        returns: { arg: 'articles', type: 'array' },
        http: { verb: 'get'}
    });
}

