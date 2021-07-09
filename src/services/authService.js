import jwtDecode from "jwt-decode";
import axios from "axios";
import { apiUrl } from "../config.json";
import dotenv from "dotenv";
import { encrypt } from "./authService";

const apiEndpoint = apiUrl + "/login";

dotenv.config();
const crypto = require("crypto");
const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY;
const IV_LENGTH = 16;
export function encrypt(text) {
  let iv = crypto.randomBytes(IV_LENGTH);
  let cipher = crypto.createCipheriv(
    "aes-256-cbc",
    Buffer.from(ENCRYPTION_KEY),
    iv
  );
  let encrypted = cipher.update(text);

  encrypted = Buffer.concat([encrypted, cipher.final()]);

  return iv.toString("hex") + ":" + encrypted.toString("hex");
}

function decrypt(text) {
  let textParts = text.split(":");
  let iv = Buffer.from(textParts.shift(), "hex");
  let encryptedText = Buffer.from(textParts.join(":"), "hex");
  let decipher = crypto.createDecipheriv(
    "aes-256-cbc",
    Buffer.from(ENCRYPTION_KEY),
    iv
  );
  let decrypted = decipher.update(encryptedText);

  decrypted = Buffer.concat([decrypted, decipher.final()]);

  return decrypted.toString();
}

export async function login(username, password) {
  const encryptUsername = encrypt(username);
  const encryptPassword = encrypt(password);
  const { data: jwt } = await axios.post(apiEndpoint, {
    encryptUsername,
    encryptPassword,
  });

  localStorage.setItem("token", decrypt(jwt.token));
  localStorage.setItem("theme", "dark");
}

export function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("theme");
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem("token");
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}

const exportObject = {
  login,
  logout,
  getCurrentUser,
};

export default exportObject;
