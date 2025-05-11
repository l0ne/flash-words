# FlashWords 📱

A mobile application that enables users to quickly and effectively memorize foreign vocabulary using interactive flashcards and a modified SM-2 Spaced Repetition algorithm.

![FlashWords App](docs/mascot.webp)

## Overview

FlashWords delivers:
- One-tap study sessions with spaced repetition
- Three learning modes (Learn, Review, Test)
- Offline access to all content
- Visual progress tracking
- Customizable word sets

For detailed information about the product vision, features, and roadmap, check out our [Product Requirements Document](docs/PRD.md).

## Getting Started

### Prerequisites

- Node.js (LTS version recommended)
- npm or yarn
- Expo CLI
- iOS Simulator or Android Emulator (optional)

### Installation

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a:

- [Development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go)

## Project Structure

This project uses [file-based routing](https://docs.expo.dev/router/introduction) with files inside the **app** directory.

## Development

When you're ready to start from a clean slate:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory.

## Technology Stack

- React Native 0.74 with Expo
- Zustand for state management
- Tamagui with NativeWind for UI components
- WatermelonDB for local database
- OpenAI API integration for advanced features

## Learn More

- [Expo documentation](https://docs.expo.dev/)
- [React Native documentation](https://reactnative.dev/)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.
