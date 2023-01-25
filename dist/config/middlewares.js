"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = [
    'strapi::errors',
    'strapi::security',
    'strapi::cors',
    'strapi::poweredBy',
    'strapi::logger',
    'strapi::query',
    {
        name: 'strapi::body',
        config: {
            jsonLimit: '256mb',
        },
    },
    'strapi::session',
    'strapi::favicon',
    'strapi::public',
    'plugin::strapi-plugin-moesif.moesif',
];
