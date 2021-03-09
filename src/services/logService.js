// import Raven from "raven-js";

function init() {
  // Raven.config(
  //   "https://5e3660437a4e4d108ac91df0cde35880@o525497.ingest.sentry.io/5639763",
  //   {
  //     release: "1.3.0",
  //   },
  // ).install();
}
function log(error) {
  // Raven.captureException(error);
  console.error(error);
}
// eslint-disable-next-line
export default {
  init,
  log,
};
