import axios from "axios";
import md5 from "js-md5";
import config from "../configs";

const publicKey = config.marvel.publicKey;
const privateKey = config.marvel.privateKey;

const instance = axios.create({
  baseURL: "https://gateway.marvel.com"
});

instance.interceptors.request.use(config => {
  const timestamp = Number(new Date());
  const hash = md5.create();

  hash.update(timestamp + privateKey + publicKey);

  config.params = {
    ...config.params,
    apikey: publicKey,
    ts: timestamp,
    hash: hash.hex()
  };

  return config;
});

export default instance;
