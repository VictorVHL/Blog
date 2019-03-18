
module.exports = function(LikeunlikeForComment){
    
  LikeunlikeForComment.LikesArticle = async ( userId, commentId) => {
    if(!(await LikeunlikeForComment.find({where: { userId: userId, commentId:commentId}})).length){
      await LikeunlikeForComment.create({
        userId: userId,
        commentId: commentId
      });
    }else{
      await LikeunlikeForComment.destroyAll({ userId: userId, commentId: commentId});
    }
    return await LikeunlikeForComment.count({ commentId: commentId})
}

LikeunlikeForComment.remoteMethod( 'LikesComment', {
    description: 'make like for comment',
    accepts: [{ arg: 'userId', type: 'string', required: true },
              { arg: 'commentId', type: 'string', required: true }],
    returns: { arg: 'countlike', type: 'array' },
    http: { verb: 'post' }
});
}