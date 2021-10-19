/**
 * valid css value
 *
 * 30px, -30px, 3.0px or 30%, -30%, 3.0%
 */
export const cssValue = /^\-?[0-9]*\.?[0-9]+(px|%|rem|em|vh|vm)/;



/**
 * singed integer
 *
 * -1, 1
 */
 export const uint = /^-?[0-9]+(?:\.[0-9]+)?$/;

/**
 * unsigned integer
 *
 * 1
 */
export const uIntString = /(^[^\-]{0,1})?(^[\d]*)$/;

/**
 * unsinged integer string
 *
 * -1, 1
 */
export const stringFloat = /^-?[0-9]+(?:\.[0-9]+)?$/;
