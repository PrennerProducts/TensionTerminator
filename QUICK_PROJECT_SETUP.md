# Workflow

---

## Versions: node, eas, npm

```bash
mcrebel@mcrebel-kubuntu:~$ node --version
v18.17.1
mcrebel@mcrebel-kubuntu:~$ eas --version
eas-cli/5.2.0 linux-x64 node-v18.17.1
mcrebel@mcrebel-kubuntu:~$ npm --version
10.1.0
```

---

## Projekt klonen

Clone the repo from GitHub:

```bash
git clone https://github.com/PrennerProducts/TensionTerminator.git
```

```bash
cd TensionTerminator
```

## Git Flow initalization

install the Git Flow Tool:

```bash
apt-get install git-flow
```

```bash
git flow init
```

Folge den Anweisungen und verwende die Standardwerte, indem du einfach die Eingabetaste drückst.

## Prebuild

Run prebuild:

```bash
npx expo prebuild
```

[Expo Prebuild Dokumentation](https://docs.expo.dev/workflow/prebuild/)

## Build Native Projects

**Android:**

```bash
npx expo run:android
```

**iOS:**

```bash
npx expo run:ios
```

## EAS Setup

Install EAS CLI:

```bash
npm install -g eas-cli
```

Login to EAS:

```bash
eas login
```

Configure the Project:

```bash
eas build:configure
```

## Build Information

Thus the Expo FaceDetector will not be able to run on emulators or on the expoApp, we need a developement build and install it on our phisical device. You can run teh build on the expo cloud or locally using the --local option. If we build without a --profile developement we get a .aab file with is useless for our developement process.

## Development Build Locally

```bash
npx eas build --profile development --platform android --local
```

Install apk on device (from the directory with the .apk):

```bash
adb install NameDerDatei.apk
```

Start the development server:

```bash
npx expo start
```

## Congratulations you finished the Quicksetup process! :D

## The informations below are just for further information

## Run a build

- For Android:

```bash
eas build --platform android
```

- For iOS:

```bash
eas build --platform ios
```

- For both:

```bash
eas build --platform all
```

## Run build locally

[Local Builds Dokumentation](https://docs.expo.dev/build-reference/local-builds/)

- For Android:

```bash
eas build --platform android --local
```

- For iOS:

```bash
eas build --platform ios --local
```
