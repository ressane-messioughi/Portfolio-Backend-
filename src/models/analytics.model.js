import db from "../config/db.js";

class AnalyticsModel {
    static async findRecentVisit(ip, page) {
        const [rows] = await db.query(
            `
            SELECT *
            FROM visits
            WHERE ip = ?
            AND page = ?
            AND created_at >= NOW() - INTERVAL 1 HOUR
            `,
            [ip, page]
        );

        return rows;
    }

    static async createVisit(ip, page, userAgent) {
        const [result] = await db.query(
            `
            INSERT INTO visits (ip, page, user_agent)
            VALUES (?, ?, ?)
            `,
            [ip, page, userAgent]
        );

        return result;
    }

    static async getTotalVisits() {
        const [[result]] = await db.query(
            `SELECT COUNT(*) as total FROM visits`
        );

        return result;
    }

    static async getTodayVisits() {
        const [[result]] = await db.query(
            `
            SELECT COUNT(*) as today
            FROM visits
            WHERE DATE(created_at) = CURDATE()
            `
        );

        return result;
    }

    static async getPagesStats() {
        const [rows] = await db.query(
            `
            SELECT page, COUNT(*) as count
            FROM visits
            GROUP BY page
            ORDER BY count DESC
            `
        );

        return rows;
    }
}

export default AnalyticsModel;