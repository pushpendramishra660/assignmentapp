package com.qnaapp;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.segment.analytics.Analytics;

public class SegmentAnalyticsModule extends ReactContextBaseJavaModule {

    public SegmentAnalyticsModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "SegmentAnalytics";
    }

    @ReactMethod
    public void initialize(String writeKey) {
        Analytics analytics = new Analytics.Builder(getReactApplicationContext(), writeKey).build();
        Analytics.setSingletonInstance(analytics);
    }

    @ReactMethod
    public void trackEvent(String event, ReadableMap properties) {
        Analytics.with(getReactApplicationContext()).track(event, Arguments.toBundle(properties));
    }
}
