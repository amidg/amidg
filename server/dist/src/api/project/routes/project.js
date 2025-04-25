"use strict";
// src/api/project/routes/project.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    routes: [
        // Custom route first (IMPORTANT: must come before the :id route)
        {
            method: 'GET',
            path: '/projects/recent',
            handler: 'api::project.project.recentProjects',
            config: {
                auth: false
            }
        },
        // Then standard routes
        {
            method: 'GET',
            path: '/projects',
            handler: 'api::project.project.find',
        },
        {
            method: 'GET',
            path: '/projects/:id',
            handler: 'api::project.project.findOne',
        },
        {
            method: 'POST',
            path: '/projects',
            handler: 'api::project.project.create',
        },
        {
            method: 'PUT',
            path: '/projects/:id',
            handler: 'api::project.project.update',
        },
        {
            method: 'DELETE',
            path: '/projects/:id',
            handler: 'api::project.project.delete',
        }
    ]
};
