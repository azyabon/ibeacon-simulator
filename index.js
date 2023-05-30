/**
 * @providesModule BeaconBroadcast
 * @flow
 */
'use strict';
import React from 'react';
import {
  NativeModules,
  Platform,
} from 'react-native';

const NativeBeaconBroadcast = NativeModules.BeaconBroadcast;

let BeaconBroadcastPlatform;

if (Platform.OS === 'ios') {
  BeaconBroadcastPlatform = {
    startAdvertisingBeaconWithString: function (uuid, identifier, major, minor) {
      NativeBeaconBroadcast.startSharedAdvertisingBeaconWithString(uuid, major, minor, identifier);
    },

    stopAdvertisingBeacon: function () {
      NativeBeaconBroadcast.stopSharedAdvertisingBeacon();
    },
  };
}
else {
  BeaconBroadcastPlatform = {
    checkTransmissionSupported: function () {
      return new Promise((resolve, reject) => {
        NativeBeaconBroadcast.checkTransmissionSupported(function (result) {
          const errors = {
            1: 'NOT_SUPPORTED_MIN_SDK',
            2: 'NOT_SUPPORTED_BLE',
            3: 'DEPRECATED_NOT_SUPPORTED_MULTIPLE_ADVERTISEMENTS',
            4: 'NOT_SUPPORTED_CANNOT_GET_ADVERTISER',
            5: 'NOT_SUPPORTED_CANNOT_GET_ADVERTISER_MULTIPLE_ADVERTISEMENTS'
          }
          if (result === 0) {
            resolve()
          } else {
            reject(errors[result])
          }
        });
      });
    },
    startAdvertisingBeaconWithString: function (uuid, identifier, major, minor, onError) {
      NativeBeaconBroadcast.startSharedAdvertisingBeaconWithString(uuid, major, minor, identifier, onError);
    },

    stopAdvertisingBeacon: function () {
      NativeBeaconBroadcast.stopSharedAdvertisingBeacon();
    },
  };
}

const BeaconBroadcast = BeaconBroadcastPlatform


export default BeaconBroadcast;
