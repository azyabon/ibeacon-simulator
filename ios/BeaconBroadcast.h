#if __has_include(<React/RCTBridgeModule.h>)
  #import <React/RCTBridgeModule.h>
#else
  #import "RCTBridgeModule.h"
#endif

#import <CoreBluetooth/CoreBluetooth.h>
#import <CoreLocation/CoreLocation.h>

@interface BeaconBroadcast : NSObject <RCTBridgeModule, CLLocationManagerDelegate, CBPeripheralManagerDelegate>

@end
