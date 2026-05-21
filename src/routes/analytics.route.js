import express from "express";

import AnalyticsController from "../controllers/analytics.controller.js";

const router = express.Router();

router.post(
    "/track-visit",
    AnalyticsController.trackVisit
);

router.get(
    "/admin/stats",
    AnalyticsController.getStats
);

export default router;