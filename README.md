React Native Module that broadcasts an iBeacon uuid.

# Setup
```
npm install --save @jaidis/react-native-ibeacon-simulator
```

Please don't try to use react-native link at your RN 0.60.X project

# Setup Android

Add project to `android/settings.gradle`:
```
rootProject.name = 'MyApp'

include ':@jaidis_react-native-ibeacon-simulator'
project(':@jaidis_react-native-ibeacon-simulator').projectDir = new File(rootProject.projectDir, '../node_modules/@jaidis/react-native-ibeacon-simulator/android')

include ':app'
```

Add in `MainApplication.java`:
```
package com.myapp;

import com.ibeacon.simulator.BeaconBroadcastPackage;
```

# Setup iOS

Add in your `Podfile`
```
pod 'BeaconBroadcast', :path => '../node_modules/@jaidis/react-native-ibeacon-simulator'
```

Then run `pod install`

# Usage

Import in your project:

```
`import BeaconBroadcast from '@jaidis/react-native-ibeacon-simulator'`
```

# API

Start iBeacon on device:

### uuid: String

 You can get from here http://openuuid.net/

### identifier: String

### minor and major:

are integer values between 0 and 65535.

### Start Broadcasting iBeacon:

`BeaconBroadcast.startAdvertisingBeaconWithString(uuid, identifier, major, minor)`

### Stop Broadcasting iBeacon:

`BeaconBroadcast.stopAdvertisingBeacon()`

# iOS

```
BeaconBroadcast.stopAdvertisingBeacon()
BeaconBroadcast.startAdvertisingBeaconWithString(uuid, identifier, major, minor)
```

# Android

```
BeaconBroadcast.checkTransmissionSupported()
.then(() => {
  BeaconBroadcast.stopAdvertisingBeacon()
  BeaconBroadcast.startAdvertisingBeaconWithString(uuid, identifier, major, minor)
})
.catch((e) => {
  /* handle return errors */
  - NOT_SUPPORTED_MIN_SDK
  - NOT_SUPPORTED_BLE
  - DEPRECATED_NOT_SUPPORTED_MULTIPLE_ADVERTISEMENTS
  - NOT_SUPPORTED_CANNOT_GET_ADVERTISER
  - NOT_SUPPORTED_CANNOT_GET_ADVERTISER_MULTIPLE_ADVERTISEMENTS
})
```

# Contributors
- William Tran [https://github.com/williamtran29]
- Dennis Borshchevski [https://github.com/dennis-b]
- Harvey Connor [https://github.com/harveyconnor]
- Manuel Muñoz [https://github.com/jaidis]

# Features WIP
- [x] Create beacon
- [ ] Allow peripherals to connect to beacon
- [ ] Read/write characteristics to beacon
- [ ] Read/write characteristics to central

# TODO
- [ ] Create a types file for the class