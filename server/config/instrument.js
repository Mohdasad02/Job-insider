// Import with `import * as Sentry from "@sentry/node"` if you are using ESM
import * as Sentry from "@sentry/node"


Sentry.init({
  dsn: "https://f98e06ca55e2f97800a931164400e787@o4509490767200256.ingest.us.sentry.io/4509490771722240",
 integrations: [Sentry.mongooseIntegration()],
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
});