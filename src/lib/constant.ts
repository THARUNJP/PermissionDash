import type { PermissionType } from "./interface";

export const STATUS:PermissionType[] = [
  { label: "Geolocation", name: "geolocation", status: null },
  { label: "Notifications", name: "notifications", status: null },
  { label: "Camera", name: "camera", status: null },
  { label: "Microphone", name: "microphone", status: null },
  { label: "Clipboard read", name: "clipboard-read", status: null },
  { label: "Clipboard write", name: "clipboard-write", status: null },
];

 export const colorMap: Record<string, string> = {
    granted: "🟢",
    denied: "🔴",
    prompt: "🟡",
    "not-supported": "⚪",
  };

export const PERMISSIONS = [
  "geolocation",
  "notifications",
  "camera",
  "microphone",
  "clipboard-read",
  "clipboard-write",
];

