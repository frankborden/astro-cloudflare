/// <reference types="astro/client" />

type ENV = {
  DB: D1Database;
  BUCKET: R2Bucket;
};

type Runtime = import("@astrojs/cloudflare").AdvancedRuntime<ENV>;

declare namespace App {
  interface Locals extends Runtime {}
}
