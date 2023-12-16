# Expo Build-Prozess Dokumentation

## Einleitung

Diese Dokumentation beschreibt, wie Sie Builds für ein Expo-Projekt durchführen können, einschließlich Expo-Cloud-Builds und lokaler Builds für Android und iOS.

## Voraussetzungen

- Installieren Sie die neueste Version von Expo CLI:

  ```bash
  npm install -g expo-cli
  ```

- Stellen Sie sicher, dass Sie ein Konto bei [Expo](https://expo.dev/) haben und bei der Expo CLI angemeldet sind:

  ```bash
  expo login
  ```

- Konfigurieren Sie das Projekt für EAS Build:

  ```bash
  eas build:configure
  ```

- Installieren Sie `eas-cli` für EAS Build:

  ```bash
  npm install -g eas-cli
  ```

## Expo-Cloud-Build

### Schritt 1: Cloud Build starten

- Führen Sie den folgenden Befehl aus, um einen Cloud Build zu starten:

  ```bash
  eas build --profile development --platform android
  ```

  oder für iOS:

  ```bash
  eas device:create
  eas build --profile development --platform ios
  ```

- Folgen Sie den Anweisungen in der Konsole, um das Build zu konfigurieren und zu starten.

### Schritt 2: Build Status überwachen

- Überwachen Sie den Status Ihres Builds auf der Expo-Website.

## Lokaler Build

### Schritt 1: Lokale Build-Vorbereitung

- Stellen Sie sicher, dass Sie über die erforderlichen SDKs und Tools für den lokalen Build verfügen:
  - Android: Android Studio und entsprechende Build-Tools.
  - iOS: Xcode und Command Line Tools.

### Schritt 2: Lokalen Build starten

- Für einen lokalen Android-Build führen Sie aus:

  ```bash
   eas build --profile development --platform android --local
  ```

- Für einen lokalen iOS-Build führen Sie aus:

  ```bash
  geht leider nur auf einem Mac
  ```

- Folgen Sie den Anweisungen in der Konsole.

### Schritt 3: Build überwachen

- Die Build-Logs werden direkt in der Konsole angezeigt. Überwachen Sie diese, um den Fortschritt zu verfolgen.

### Schritt 4: Fehlerbehebung

- Falls beim Build-Prozess Fehler auftreten, überprüfen Sie die Fehlermeldungen und führen Sie die erforderlichen Korrekturen durch.

### Schritt 4: Build überwachen

- Der Custom Build funktioniert im grunde wie expo, man muss

```bash
  nxp expo run
```

ausführen und dann funktes quasi wie expo, wenn neue module instaliert weden muss neu gebuildet werden.

## Nützliche Ressourcen

- [Expo Documentation](https://docs.expo.dev/)
- [EAS Build Documentation](https://docs.expo.dev/build/introduction/)

-[Run xCode on Linux](https://www.baeldung.com/linux/xcode)
i use Darling (quasi Wine für mac)
