import type { ExtendedPermissionName } from "./interface";

export const getPermission = async (name: ExtendedPermissionName) => {
  try {
    const { state } = await navigator.permissions.query({
      name: name as PermissionName,
    });
    return state;
  } catch (err) {
    console.error(err);
    return "denied" as PermissionState;
  }
};

export const permissionsCase = (state: PermissionState) => {
  switch (state) {
    case "granted":
      // granted logic
      break;

    case "prompt":
      // prompt logic
      break;

    case "denied":
      // denied logic
      break;

    default:
      // optional: handle unsupported or unknown states
      break;
  }
};

export const getMicrophoneAccess = async () => {
  try {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      console.error("getUserMedia is not supported in this browser.");
      return false;
    }

    await navigator.mediaDevices.getUserMedia({ audio: true });
    return true;
  } catch (err) {
    console.error("Microphone permission denied:", err);
    return false;
  }
};

export const getCameraAccess = async () => {
  try {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      throw new Error("getUserMedia is not supported in this browser.");
    }
    await navigator.mediaDevices.getUserMedia({ video: true });
  } catch (err) {
    console.error(err, "err in accessing the camera");
    return false;
  }
};

export const getLocationAccess = async () => {
  return new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition(
      () => resolve(true),
      (err) => {
        console.log("Location permission denied: ", err);
        resolve(false);
      }
    );
  });
};

export const getNotificationAccess = async () => {
  try {
    const permission = await Notification.requestPermission();
    return permission === "granted";
  } catch (err) {
    console.log("Notification permission error:", err);
    return false;
  }
};

export const getAccessPrompt = async (perm: string) => {
  switch (perm) {
    case "microphone":
      return await getMicrophoneAccess();

    case "camera":
      return await getCameraAccess();

    case "geolocation":
      return await getLocationAccess();

    case "notifications":
      return await getNotificationAccess();

    default:
      console.warn(`Unknown permission type: ${perm}`);
      return false;
  }
};
