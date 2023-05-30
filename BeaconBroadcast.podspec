require 'json'

package = JSON.parse(File.read(File.join(__dir__, 'package.json')))

Pod::Spec.new do |s|
  s.name         = "BeaconBroadcast"
  s.version      = package['version']
  s.summary      = "React Native Module that broadcasts an iBeacon uuid"

  s.authors      = { "Manuel Muñoz" => "manmunlop@gmail.com" }
  s.homepage     = "https://github.com/jaidis/react-native-ibeacon-simulator"
  s.license      = "MIT License"
  s.platform     = :ios, "9.0"

  s.source       = { :git => "https://github.com/jaidis/react-native-ibeacon-simulator.git" }
  s.source_files  = "ios/**/*.{h,m}"

  s.dependency 'React'
end