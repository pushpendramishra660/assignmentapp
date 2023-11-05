import { NativeModules } from "react-native";

interface SegmentAnalytics {
  initialize(writeKey: string): void;
  trackEvent(event: string, properties?: Record<string, any>): void;
}

const { SegmentAnalytics } = NativeModules;
export default SegmentAnalytics as SegmentAnalytics;
