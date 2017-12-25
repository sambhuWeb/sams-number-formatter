'use strict';

/**
 * Adds comma to a number
 * @param {number} number
 * @param {strong} locale
 * @return {strong}
 */
 module.exports = function(number, locale) {
    return number.toLocaleString(locale);
 }