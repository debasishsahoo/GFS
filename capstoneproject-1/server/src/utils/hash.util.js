const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
dotenv.config();

const saltRounds = Number(process.env.SALT_ROUNDER);

async function HashPassword(password) {
  return await bcrypt.hash(password, saltRounds);
}

async function MatchPassword(newPassword, oldPassword) {
  return await bcrypt.compare(newPassword, oldPassword);
}

module.exports = { HashPassword,MatchPassword };
