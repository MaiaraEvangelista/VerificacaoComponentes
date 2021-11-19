package com.benvgroup;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.os.BatteryManager;
import android.os.Build;

public class BatteryStatus extends BroadcastReceiver{
    public static final String ACTION_RESP = "com.benvgroup.intent.action.MESSAGE_PROCESSED";

     private String healthStatus;
     private String pluggedStatus = "NONE";
    private String chargingStatus
   // private String
    private int temperature;
    private int voltage;
   // private int
   private float temperatureResult;
   private Context context;

    @Override
    public void onReceive(Context content, Intent intent){
       this.context,= context;
       updateBatteryData(intent);
    }

    private void updateBtteryData(Intent intent){
        boolean present = intent.getBooleanExtra(BatteryManager.EXTRA_PRESENT, false);

        if(present){
            int health = intent.getBooleanExtra(BatteryManager.EXTRA_HEALTH, 0);

            switch(health){
                case BatteryManager.BATTERY_HEALTH_COLD:
                healthStatus = "COLD";
                break;

                case BatteryManager.BATTERY_HEALTH_OVERHEATH:
                healthStatus = "OVER_HEAT";
                break;

                case BatteryManager.BATTERY_HEALTH_UNSPECIFIED_FAILURE:
                healthStatus = "UNSPECIFIED_FAILURE";
                break;
            }

            int level = intent.getIntExtra(BatteryManager.EXTRA_LEVEL, -1);
            int scale = intent.getIntExtra(BatteryManager.EXTRA_SCALE, -1);

            if(level != -1 && scale != -1){
                batteryPercent = (int) ( (level / (float) scale) * 100f);
            }

            int plugged = intent.getIntExtra(BATTERY_PLUGGED, 0);
            switch(plugged){
                case BatteryManager.BATTERY_PLUGGED_WIRELESS:
                pluggedStatus = "WIRELESS";
                break;

                case BatteryManager.BATTERY_PLUGGED_USB:
                pluggedStatus = "USB";
                break;

                case BatteryManager.BATTERY_PLUGGED_AC:
                pluggedStatus = "AC";
                break;
            }

            if(intent.getExtras() !=null){
                technology = intent.getExtras().getString(BatteryManager.EXTRA_TECHNOLOGY);
            }
            temperature = intent.getIntExtra(BatteryManager.EXTRA_TEMPERATURE, 0);

            if(temperature > 0){
                temperatureResult = ( (float) temperature) / 10f;
            }

            voltage = intent.getIntExtra(BatteryManager.EXTRA_VOLTAGE, 0);

        }
    }

    public String getHealthStatus(){
        return healthStatus;
    }

    public String getPluggedStatus(){
        return pluggedStatus;
    }

    public String getCharginStatus(){
        return chargingStatus;
    }

    public int getTemperature(){
        return temperature;
    }

    public float getTemperatureResult(){
        return temperatureResult;
    }

    public int getVoltage(){
        return voltage;
    }
}