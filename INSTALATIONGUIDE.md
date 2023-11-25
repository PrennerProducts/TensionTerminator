# Installationsanleitung für die Entwicklung mit React Native und expo

Für die optimale Arbeit mit React Native sind einige Vorbereitungen erforderlich. Hier sind die nötigen Schritte, um loszulegen. Diese Tools sind für Windows, Linux und MacOS kostenlos verfügbar.

## 1. Installation von Node.js

- **Was ist es?** Node.js ist eine JavaScript-Laufzeitumgebung für serverseitiges JavaScript.
- **Verwendung:** Hilft bei der Entwicklung durch Bereitstellung eines Entwicklungsservers und Management von Packages via npm.
- **Installation:** Besuchen Sie [Node.js](https://nodejs.org/en/), laden Sie die Version neueste Version (LTS) herunter und installieren Sie diese.

## 2. Installation von Android Studio

- **Was ist es?** Android Studio ist eine integrierte Entwicklungsumgebung (IDE) für Android-Apps.
- **Verwendung:** Primär genutzt für den Android Emulator, um Apps direkt zu testen.
- **Installation:** Laden Sie [Android Studio](https://developer.android.com/studio) herunter und folgen Sie den Installationsanweisungen.

## 3. Einrichtung von Android Studio und Erstellen eines Emulators

- **CPU Virtualization aktivieren:** Nötig für die Emulation. Die Einstellung finden Sie im BIOS Ihres Computers.
- **SDK-Management:**
  - Öffnen Sie Android Studio, gehen Sie zu "More Actions -> SDK Manager".
  - Installieren Sie folgende Komponenten:
    - Unter "SDK Platforms": Android Tiramisu (Tiramisu), Android 12.0 (S).
    - Unter "SDK Tools": Android SDK Build-Tools, Command-line Tools, Android Emulator, Platform-Tools, Intel x86 Emulator Accelerator (HAXM).
- **Erstellen eines Emulators:**
  - Gehen Sie zu "More Actions -> Virtual Device Manager".
  - Erstellen Sie ein neues Gerät, z.B. "Pixel 7".
  - Laden Sie das Systemimage für Android Version "S" herunter und installieren Sie es.
  - Benennen Sie das Gerät und schließen Sie den Vorgang ab.

## 4. Installation von Expo

- **Installation von Expo:**
  - Folgen Sie der [Expo-Installationsanleitung](https://expo.io/learn).
  - Stellen Sie sicher, dass alle Voraussetzungen erfüllt sind.

## 5. Klonen und Einrichten des React Native Projekts

- **Projekt klonen:**

  - Öffnen Sie ein Terminal oder eine Eingabeaufforderung.
  - Klonen Sie das Projekt mit dem Befehl:

    ```bash
    git clone https://github.com/PrennerProducts/TensionTerminator
    ```

  - Wechseln Sie in das Projektverzeichnis:

    ```bash
    cd TensionTerminator
    ```

- **Installation der Projekt-Abhängigkeiten:**

  - Stellen Sie sicher, dass Sie sich im Projektverzeichnis befinden.
  - Führen Sie den Befehl aus:

    ```bash
    npm install
    ```

    Dies wird alle notwendigen Abhängigkeiten des Projekts installieren.

- **Starten des Expo-Projekts:**

  - Starten Sie das Projekt mit Expo:

    ```bash
    npx expo start
    ```

  - Ein QR-Code wird im Terminal oder in der Expo Developer Tools-Oberfläche angezeigt. Scannen Sie diesen Code mit der Expo-App auf Ihrem Smartphone oder starten Sie einen Emulator über Android Studio, um die App auszuführen.

## 6. Forken des GitHub Repositories (optional)

- **Forken des Projekts:**
  - Besuchen Sie die GitHub-Seite des Projekts: [TensionTerminator](https://github.com/PrennerProducts/TensionTerminator).
  - Klicken Sie auf den "Fork"-Button in der oberen rechten Ecke, um eine Kopie des Repositories in Ihrem eigenen GitHub-Account zu erstellen.
  - Nach dem Forken können Sie Änderungen vornehmen und diese in Ihrem eigenen Fork speichern.

## 7. Allternative Einrichtung des Projekts aus einer ZIP-Datei

- **ZIP-Datei entpacken:**

  - Laden Sie die ZIP-Datei des Projekts herunter.
  - Entpacken Sie die ZIP-Datei in einen gewünschten Ordner auf Ihrem Computer.

- **Projektverzeichnis öffnen:**

  - Öffnen Sie ein Terminal oder eine Eingabeaufforderung.
  - Navigieren Sie in das entpackte Projektverzeichnis:

    ```bash
    cd Pfad-zum-Projektverzeichnis
    ```

- **Installation der Abhängigkeiten:**

  - Stellen Sie sicher, dass Sie sich im Projektverzeichnis befinden.
  - Führen Sie den Befehl aus:

    ```bash
    npm install
    ```

    Dies installiert alle notwendigen Abhängigkeiten, die in der `package.json`-Datei des Projekts definiert sind.

- **Starten des Expo-Projekts:**

  - Starten Sie das Projekt mit dem Befehl:

    ```bash
    npx expo start
    ```

  - Ein QR-Code wird im Terminal oder in der Expo Developer Tools-Oberfläche angezeigt. Scannen Sie diesen Code mit der Expo-App auf Ihrem Smartphone oder starten Sie einen Emulator über Android Studio, um die App auszuführen.
