import jwtDecode from "jwt-decode";
import axios from "axios";
import { apiUrl } from "../config.json";
import { notKey } from "../notKey";

const apiEndpoint = apiUrl + "/login";

const crypto = require("crypto");
const ENCRYPTION_KEY = notKey;
const IV_LENGTH = 16;
export function encrypts(text) {
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

export async function login(usernameCheck, passwordCheck) {
  const username = encrypts(usernameCheck);
  const password = encrypts(passwordCheck);
  const { data: jwt } = await axios.post(apiEndpoint, { username, password });

  localStorage.setItem("token", jwt.token);
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
