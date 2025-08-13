const Post = require("../Models/Post");

const createPost = async (req, res) => {
  try {
    const { userId, content, media } = req.body;
    const post = new Post({ userId, content, media });
    await post.save();
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ error: "Unable to create post" });
  }
};

const getposts = async (req, res) => {
  try {
    const posts = await Post.find().populate(
      "userId",
      "username profilePicture"
    );
    res.status(200).json(posts);
  } catch (error) {
    res.status(404).json({ error: "Unable to create post" });
  }
};

const likepost = async (req, res) => {
  const { postId } = req.params;
  const { userId } = req.boby;
  try {
    const post = await post.findBy(postId);
    if (!post) return res.status(404).json({ message: "Post not found" });
    const linkIndex = post.likes.indexOf(userId);
    if (linkIndex === -1) {
      post.likes.push(userId);
    }
    else{
        post.likes.splice(linkIndex,1)
    }
    await post.save()
    res.status(200).json({message:'like update', like:post.likes})
  } catch (error) {
    res.status(404).json({ error: "Unable to Like post" });
  }
};

const comment = async (req,res)=>{
    const {postId} = req.params;
    const {userId, text, userName} = req.boby
    try {
        const post = await Post.findId(postId)
        if (!post) return res.status(404).json({ message: "Post not found" });
        const comment = {
            userId : userId,
            text,
            CreatedAt
        }
    } catch (error) {
        
    }

}

module.exports = {
  createPost,
  getposts,
  likepost
};
