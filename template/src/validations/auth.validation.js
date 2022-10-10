const Joi = require('joi');
const { password } = require('./custom.validation');

/**
 * method: POST
 * url: /auth/register
 * body: {
 *   name: 'Praveen Sewak',
 *   email: 'praveensewak@gmail.com',
 *   password: 'MySuperSecretPassword'
 * }
 */
const register = {
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().custom(password),
    name: Joi.string().required(),
  }),
};

/**
 * method: POST
 * url: /auth/login
 * body: {
 *   email: 'praveensewak@gmail.com',
 *   password: 'MySuperSecretPassword'
 * }
 */
const login = {
  body: Joi.object().keys({
    email: Joi.string().required(),
    password: Joi.string().required(),
  }),
};

/**
 * method: POST
 * url: /auth/logout
 * body: {
 *   refreshToken: 'asdgasdgasdgasdgasdgadsgasdgadsg'
 * }
 */
const logout = {
  body: Joi.object().keys({
    refreshToken: Joi.string().required(),
  }),
};

/**
 * method: POST
 * url: /auth/refresh-tokens
 * body: {
 *   refreshToken: 'asdfasdfasdfasdfasdfasdfasdfasdfas'
 * }
 */
const refreshTokens = {
  body: Joi.object().keys({
    refreshToken: Joi.string().required(),
  }),
};

/**
 * method: POST
 * url: /auth/forgot-password
 * body: {
 *   email: 'praveensewak@gmail.com'
 * }
 */
const forgotPassword = {
  body: Joi.object().keys({
    email: Joi.string().email().required(),
  }),
};

/**
 * method: POST
 * url: /auth/reset-password?token=asdfasdfasdfasdfasdfasdf
 * body: {
 *   password: 'NewSuperSecretPassword1'
 * }
 */
const resetPassword = {
  query: Joi.object().keys({
    token: Joi.string().required(),
  }),
  body: Joi.object().keys({
    password: Joi.string().required().custom(password),
  }),
};

/**
 * method: POST
 * url: /auth/verify-email?token=asdfasdfasdfasdf
 */
const verifyEmail = {
  query: Joi.object().keys({
    token: Joi.string().required(),
  }),
};

module.exports = {
  register,
  login,
  logout,
  refreshTokens,
  forgotPassword,
  resetPassword,
  verifyEmail,
};
