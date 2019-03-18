
module.exports = function(LikeunlikeForArticle){

  LikeunlikeForArticle.LikesArticle = async ( userId, articleId) => {
      if(!(await LikeunlikeForArticle.find({where: { userId: userId, articleId:articleId}})).length){
        await LikeunlikeForArticle.create({
          userId: userId,
          articleId: articleId
        });
      }else{
        await LikeunlikeForArticle.destroyAll({ userId: userId, articleId: articleId});
      }
      return await LikeunlikeForArticle.count({ articleId: articleId})
  }

  LikeunlikeForArticle.remoteMethod( 'LikesArticle', {
      description: 'make like for article',
      accepts: [{ arg: 'userId', type: 'string', required: true },
              { arg: 'articleId', type: 'string', required: true }],
      returns: { arg: 'countlike', type: 'array' },
      http: { verb: 'post' }
  })
}