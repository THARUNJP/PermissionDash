export const STATUS = [
  { name: "Geolocation", status: "🟢 Granted" },
  { name: "Notifications", status: "🟡 Prompt" },
  { name: "Camera", status: "🔴 Denied" },
  { name: "Microphone", status: "⚪ Not Supported" },
  { name: "Clipboard Read", status: "🟢 Granted" },
  { name: "Clipboard Write", status: "🟡 Prompt" },
];

export const colorMap = {
  granted: "green",
  denied: "red",
  prompt: "yellow",
  "not supported": "gray",
};

export const PERMISSIONS = [
  "geolocation",
  "notifications",
  "camera",
  "microphone",
  "clipboard-read",
  "clipboard-write",
];

