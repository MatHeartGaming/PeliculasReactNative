module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugin: [
    ["module:react-native-dotenv",
      {
        "envNName": "APP_ENV",
        "moduleName": "@env",
        "path": ".env",
      }
    ]
  ]
};
