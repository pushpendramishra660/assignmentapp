import {
  check,
  request,
  openSettings,
  PERMISSIONS,
  RESULTS,
} from "react-native-permissions";
import messaging from "@react-native-firebase/messaging";

type Permission =
  | typeof PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
  | typeof PERMISSIONS.ANDROID.POST_NOTIFICATIONS
  | typeof PERMISSIONS.IOS.LOCATION_WHEN_IN_USE;

type CustomPermissionStatus = "granted" | "denied" | "blocked";

const checkPermissionStatus = async (
  permission: Permission
): Promise<CustomPermissionStatus> => {
  try {
    const status = await check(permission);
    return status as CustomPermissionStatus;
  } catch (error) {
    console.error("Error checking permission:", error);
    return "denied";
  }
};

const requestPermission = async (
  permission: Permission
): Promise<CustomPermissionStatus> => {
  try {
    const status = await request(permission);
    return status as CustomPermissionStatus;
  } catch (error) {
    console.error("Error requesting permission:", error);
    return "denied";
  }
};

const requestNotificationPermission = async () => {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log("Authorization status:", authStatus);
  }
};

const handlePermission = async (
  permission: Permission
): Promise<CustomPermissionStatus> => {
  const status = await checkPermissionStatus(permission);
  if (status === RESULTS.DENIED) {
    const requestStatus = await requestPermission(permission);
    if (requestStatus === RESULTS.BLOCKED) {
      // For both iOS and Android, open app settings if the permission is blocked
      await openSettings();
    }
    return requestStatus;
  }
  return status;
};

export const checkAndRequestLocationPermission = async () => {
  const locationPermissionStatus = await handlePermission(
    PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
  );
  console.log("Location Permission Status:", locationPermissionStatus);
};

export const checkAndRequestNotificationPermission = async () => {
  const notificationPermissionStatus = await handlePermission(
    PERMISSIONS.ANDROID.POST_NOTIFICATIONS
  );
  if (notificationPermissionStatus !== 'granted') {
    requestNotificationPermission();
  }
};
