```bash


# Zum Kopieren beider Dateien innerhalb des Gerätspeichers
adb shell

cp /data/data/host.exp.exponent/files/ExperienceData/%40mcrebel%2FTensionTerminator/MaxYawL.jpg /sdcard/
cp /data/data/host.exp.exponent/files/ExperienceData/%40mcrebel%2FTensionTerminator/MaxYawR.jpg /sdcard/


# Zum Herunterladen beider Dateien vom Gerät in den Downloads-Ordner Ihres Rechners
normales Terminal

adb pull /sdcard/MaxYawL.jpg ~/Downloads/
adb pull /sdcard/MaxYawR.jpg ~/Downloads/
```
