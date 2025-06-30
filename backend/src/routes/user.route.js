import express from "express"
import protectRoute from "../middleware/auth.middleware.js";
import { getMyFriends,getRecommendedUsers } from "../controllers/user.controller.js";
import { sendFriendRequest } from "../controllers/user.controller.js";
import { acceptFriendRequest } from "../controllers/user.controller.js";
import { getFriendRequests,getOutgoingFriendReqs } from "../controllers/user.controller.js";
const router=express.Router();

router.use(protectRoute)

//apply auth middleware to all routes
router.get('/',protectRoute,getRecommendedUsers);
router.get('/friends',protectRoute,getMyFriends);
router.post('/friend-request/:id',sendFriendRequest);
router.put('/friend-send/:id/accept',acceptFriendRequest);

router.get("/friend-requests",getFriendRequests);
router.get("/outgoing-friend-requests",getOutgoingFriendReqs);

export default router;