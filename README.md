# React-native_Meteor_App
This is a simplest that shows how react-native and meteor works together,it consist only user login,registration and logout functionality.

## Getting Started 
[Install Meteor](https://www.meteor.com/install)

[install React native](https://facebook.github.io/react-native/docs/getting-started.html#content) 

Clone Repo: git clone  https://github.com/hitenluck/React-native_Meteor_App.git

from MeteorApp directory run `meteor npm install`

from RNDemo directory run `npm install`

## Running on iOS Simulator
Be sure your Meteor app is running: In the `MeteorApp` directory, type `meteor`

From the RNDemo directory run `react-native run-ios`

## Running on iOS Device

Be sure your Meteor app is running: In the `MeteorApp` directory, type `meteor`

Get the IP address of your machine (you can run `ipconfig getifaddr en1` to do so)

In `RNDemo/src/config/settings.js` change IP to your machine's IP address

Plug your device into your computer (make sure it's on the same network)

Open the project in Xcode

Select your device in Xcode and press "Build and run"

## Running on Android Simulator

Be sure your Meteor app is running: In the `MeteorApp` directory, type `meteor`

Get the IP address of your machine (you can run `ifconfig` to do so)

In `RNDemo/src/config/settings.js` change IP to your machine's IP address

Make sure you have an emulator configured and running.

From the `RNDemo` directory run `react-native run-android`

## Running on Android Device

Be sure your Meteor app is running: In the `MeteorApp` directory, type `meteor`

Make sure USB Debugging is enabled

Plug your device into your computer

Run `adb devices` to make sure your device shows up

In `RNDemo/src/config/settings.js` change localhost in METEOR_URL to your computer's IP address 

Run `react-native run-android`
