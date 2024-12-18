import express from "express";
import {getfeedPosts, getUsersPosts, likePost} from "/controllers/posts.js";
import { verifyToken } from "../middleware/auth";

const router = express.router();
/* READ */
router.get("/", verifyToken, getfeedPosts)
router.get("/:userId/posts", verifyToken, getUsersPosts)


/* UPDATE */

router.patch("/:id/like", verifyToken, likePost);

export default router;
