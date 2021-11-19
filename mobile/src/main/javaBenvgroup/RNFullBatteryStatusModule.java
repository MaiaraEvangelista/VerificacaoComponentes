package com.benvgroup;

import android.content.Intent;
import android.content.IntentFilter;

import com.facebook.react.bridge.LifecycleEventListener;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class RNFullBatteryStatusModule extends ReactContextBaseJavaModule implements LifecycleEventListener{
    private final ReactApplicationContext reactContext;
    private BatteryStatus batteryStatusReceiver;

    public RNFullBatteryStatusModule(ReactApplicationContext reactContext){
        super(reactContext);
        this.reactContext = reactContext;
    }

    @Override
    public String getName(){
       return "RNFullBatteryStatus";
    }

    @ReactMethod
    public void getTemperature(final Promise promise){
       try{
           float type = batteryStatusReceiver.getTemperatureResult();
           promise.resolve(type);
        }catch (Exception ex){
            promise.reject("ERR_UNEXPECTED_EXCEPTION", ex);
        }
    }

    @Override
    public void getCharginStatus(final Promise promise){
        try{
            String type = batteryStatusReceiver.getCharginStatus();
            promise.resolve(type);
        }catch (Exception ex){
            promise.reject("ERR_UNEXPECTED_EXCEPTION", ex);
        }
    }

    @Override
    public void getPluggedStatus(final Promise promise){
        try{
            String type = batteryStatusReceiver.getPluggedStatus();
            promise.resolve(type);
        }catch (Exception ex){
            promise.reject("ERR_UNEXPECTED_EXCEPTION", ex);
        }
    }

    @Override
    public void getHealthStatus(final Promise promise){
        try{
            String type = batteryStatusReceiver.getHealthStatus();
            promise.resolve(type);
        }catch (Exception ex){
            promise.reject("ERR_UNEXPECTED_EXCEPTION", ex);
        }
    }

    @Override
    public void getVoltage(final Promise promise){
        try{
            String type = batteryStatusReceiver.getVoltage();
            promise.resolve(type);
        }catch (Exception ex){
            promise.reject("ERR_UNEXPECTED_EXCEPTION", ex);
        }
    }
}