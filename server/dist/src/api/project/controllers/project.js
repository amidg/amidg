"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const strapi_1 = require("@strapi/strapi");
exports.default = strapi_1.factories.createCoreController("api::project.project", ({ strapi }) => ({
    async recentProjects(ctx) {
        var _a;
        try {
            const sanitizedQuery = await this.sanitizeQuery(ctx);
            const limit = parseInt(((_a = sanitizedQuery.limit) === null || _a === void 0 ? void 0 : _a.toString()) || "5");
            // Query for projects sorted by year and date
            // Filter to only include published content
            const projects = await strapi.db
                .query("api::project.project")
                .findMany({
                where: {
                    publishedAt: { $notNull: true }, // Only get published entries
                },
                orderBy: [{ year: "desc" }, { date: "desc" }],
                populate: ["technologies"],
                limit,
            });
            // Group projects by year
            const projectsByYear = {};
            for (const project of projects) {
                const year = project.year;
                if (!projectsByYear[year]) {
                    projectsByYear[year] = [];
                }
                projectsByYear[year].push(project);
            }
            // Create an ordered result object
            const orderedProjectsByYear = {};
            // Get years and sort them in descending order
            const years = Object.keys(projectsByYear)
                .map(Number)
                .sort((a, b) => b - a);
            // Build the ordered result
            years.forEach((year) => {
                orderedProjectsByYear[year] = projectsByYear[year];
            });
            // Sanitize and return
            const sanitizedResults = await this.sanitizeOutput(orderedProjectsByYear, ctx);
            return { data: sanitizedResults };
        }
        catch (error) {
            console.error("Error in recentProjects:", error);
            return { error: "Failed to retrieve recent projects" };
        }
    },
}));
