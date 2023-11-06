package com.qnaapp;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.ReadableMapKeySetIterator;
import com.segment.analytics.Analytics;
import com.facebook.react.bridge.ReadableType;
import com.segment.analytics.Properties;
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
        Analytics analytics = new Analytics.Builder(getReactApplicationContext(), writeKey)
                .trackApplicationLifecycleEvents()
                .build();
        Analytics.setSingletonInstance(analytics);
    }

    @ReactMethod
    public void trackEvent(String event, ReadableMap properties) {
        Properties segmentProperties = new Properties();
        ReadableMapKeySetIterator iterator = properties.keySetIterator();
        while (iterator.hasNextKey()) {
            String key = iterator.nextKey();
            ReadableType type = properties.getType(key);
            switch (type) {
                case Boolean:
                    segmentProperties.putValue(key, properties.getBoolean(key));
                    break;
                case Number:
                    segmentProperties.putValue(key, properties.getDouble(key));
                    break;
                case String:
                    segmentProperties.putValue(key, properties.getString(key));
                    break;
            }
        }
        Analytics.with(getReactApplicationContext()).track(event, segmentProperties);
    }
}
