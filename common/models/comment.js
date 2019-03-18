

module.exports = function (Comment){
    Comment.beforeRemote('create', async (ctx,next) => {
        if(ctx.args.data.ancestorId) {
            const ancestor = await  CommentModel.findById(ctx.args.data.ancestorId);
            if(ancestor.ancestorId) {
                let error = new Error();
                error.status = 412;
                error.message = 'You can\'t do it';
                throw error
            }
        }
    })
}
  



