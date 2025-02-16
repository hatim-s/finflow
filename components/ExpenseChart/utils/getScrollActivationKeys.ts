function getOperatingSystem() {
  // Fall back to userAgent string (broader support)
  const userAgent = navigator.userAgent.toLowerCase();
  if (userAgent.includes("mac")) return "mac";
  if (userAgent.includes("win")) return "windows";
  if (userAgent.includes("linux")) return "linux";

  return "unknown";
}

export function getScrollActivationKeys() {
  const os = getOperatingSystem();

  if (os === "mac") return ["Meta"];
  return ["Control"];
}
