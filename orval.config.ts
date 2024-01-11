import { defineConfig } from "orval";

// require("dotenv").config();

module.exports = defineConfig({
  "orval-file": {
    input: "http://127.0.0.1:5002/openapi.json",

    output: {
      baseUrl: "http://127.0.0.1:5002",
      target: "./src/orval_api/simple2c.ts",
      client: "react-query",
      mode: "tags-split",
      schemas: "src/orval_api/model",
      mock: true,
    },
  },
  "orval-prod": {
    input: "https://api.simple2c.simple2b.org/openapi.json",

    output: {
      baseUrl: "http://127.0.0.1:5002",
      target: "./src/orval_api_prod/simple2c.ts",
      client: "axios",
      mode: "tags-split",
      schemas: "src/orval_api_prod/model",
    },
  },
  "orval-zod": {
    input: "https://api.simple2c.simple2b.org/openapi.json",

    output: {
      baseUrl: "http://127.0.0.1:5002",
      target: "./src/orval_api_zod/simple2c.ts",
      client: "zod",
      mode: "tags-split",
      schemas: "src/orval_api_zod/model",
    },
  },
});
