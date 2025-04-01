import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();
    res.send(postMessages);
    console.log(postMessages);
  } catch (error) {
    res.send({ error: error.message });
  }
  res.send({ message: "this works" });
};

export const createPost = async (req, res) => {
  const post = req.body;
  const newPost = new PostMessage(post);
  try {
    await newPost.save();
  } catch (error) {}
  res.send({ message: "post created" });
};
