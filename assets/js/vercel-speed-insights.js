/**
 * Vercel Speed Insights Integration
 * This script initializes Vercel Speed Insights for the Jekyll site
 */

// Import the Speed Insights package
import { injectSpeedInsights } from "@vercel/speed-insights";

// Initialize Speed Insights when the DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initSpeedInsights);
} else {
  initSpeedInsights();
}

function initSpeedInsights() {
  injectSpeedInsights({
    // Let Vercel auto-detect the route from window.location
    framework: "jekyll",
  });
}
