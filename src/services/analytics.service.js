import AnalyticsModel from "../models/analytics.model.js";

class AnalyticsService {
    static async trackVisit(ip, page, userAgent) {
        const existingVisit =
            await AnalyticsModel.findRecentVisit(
                ip,
                page
            );

        if (existingVisit.length === 0) {
            await AnalyticsModel.createVisit(
                ip,
                page,
                userAgent
            );
        }

        return {
            success: true,
        };
    }

    static async getDashboardStats() {
        const total =
            await AnalyticsModel.getTotalVisits();

        const today =
            await AnalyticsModel.getTodayVisits();

        const pages =
            await AnalyticsModel.getPagesStats();

        return {
            total: total.total,
            today: today.today,
            pages,
        };
    }
}

export default AnalyticsService;