import type { ExtendedPermissionName } from "./interface";

export const getPermission = async (name: ExtendedPermissionName) => {
  try {
    const { state } = await navigator.permissions.query({
      name: name as PermissionName,
    });
    return state;
  } catch (err) {
    console.error(err);
    return "denied" as PermissionState
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
