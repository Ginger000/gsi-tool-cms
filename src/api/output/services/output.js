'use strict';

/**
 * output service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::output.output');
