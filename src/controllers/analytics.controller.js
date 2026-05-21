import AnalyticsService from "../services/analytics.service.js";

class AnalyticsController {
    static async trackVisit(req, res) {
        try {
            const ip =
                req.headers["x-forwarded-for"] ||
                req.socket.remoteAddress;

            const userAgent =
                req.headers["user-agent"];

            const page = req.body.page || "/";

            const result =
                await AnalyticsService.trackVisit(
                    ip,
                    page,
                    userAgent
                );

            res.json(result);
        } catch (error) {
            console.error(error);

            res.status(500).json({
                error: "Server error",
            });
        }
    }

    static async getStats(req, res) {
        try {
            const stats =
                await AnalyticsService.getDashboardStats();

            res.json(stats);
        } catch (error) {
            console.error(error);

            res.status(500).json({
                error: "Server error",
            });
        }
    }
}

export default AnalyticsController;