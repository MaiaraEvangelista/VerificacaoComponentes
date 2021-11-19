package com.benvgroup;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViweManager;
import com.facebook.react.bridge.JavaScriptModule;

public class RNFullBatteryStatusPackage implements ReactPackage{
    @Override
    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext){
        return Arrays.<NativeModule>asList(new RNFullBatteryStatusModule(reactContext));
    }

    public List<Class<?  extends JavaScriptModule>> createJSModules(){
        return Collections.emptyList();
    }

    @Override
    public List<ViweManager> createViewManagers(ReactApplicationContext reactContext){
        return Collections.emptyList();
    }
}