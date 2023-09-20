# Git Flow: Anleitung für Teammitglieder

[Git Flow: https://www.atlassian.com/de/git/tutorials/comparing-workflows/gitflow-workflow](https://www.atlassian.com/de/git/tutorials/comparing-workflows/gitflow-workflow)

[Git Flow CheatSheet](<[URL](https://danielkummer.github.io/git-flow-cheatsheet/index.de_DE.html)>)

## Einleitung

Git Flow ist ein Workflow, der die parallele Entwicklung unterstützt, indem er einem festen Branching-Modell folgt. Diese Anleitung führt Sie durch die wichtigsten Schritte und Best Practices.

Es gibt eine spezielle Erweiterung namens "Git Flow Integration", die Git Flow in VS Code integriert und Ihnen eine grafische Benutzeroberfläche bietet, um die Git Flow-Befehle auszuführen.

## Hier ist, wie Sie es einrichten und verwenden können

### Einrichtung von Git Flow in VS Code

- **Erweiterung installieren**:
  Öffnen Sie VS Code und gehen Sie zum Erweiterungsmarktplatz. Suchen Sie nach "Git Flow Integration" und installieren Sie die Erweiterung.

- **Git Flow initialisieren**:
  1. Öffnen Sie Ihr Git-Repository in VS Code.
  2. Klicken Sie mit der rechten Maustaste auf den Quellcode-Editor oder den Datei-Explorer und wählen Sie "Initialize Repository for Git Flow". Dies wird Git Flow für Ihr Repository initialisieren.
  3. Akzeptieren Sie die vorgeschlagenen Standardzweignamen oder passen Sie sie nach Bedarf an.

### Verwendung von Git Flow in VS Code:

- **Neues Feature starten**:
  Klicken Sie mit der rechten Maustaste auf den Quellcode-Editor oder den Datei-Explorer und wählen Sie "Git Flow: Start New Feature". Geben Sie einen Namen für das Feature ein.

- **Feature abschließen**:
  Klicken Sie mit der rechten Maustaste auf den Quellcode-Editor oder den Datei-Explorer und wählen Sie "Git Flow: Finish Feature".

- **Release starten und abschließen**:
  Verwenden Sie die Optionen "Git Flow: Start New Release" und "Git Flow: Finish Release" auf die gleiche Weise wie bei den Feature-Befehlen.

- **Hotfix starten und abschließen**:
  Verwenden Sie die Optionen "Git Flow: Start New Hotfix" und "Git Flow: Finish Hotfix".

- **Weitere Befehle**:
  Die Erweiterung bietet auch andere nützliche Befehle wie das Veröffentlichen von Features und das Abrufen von veröffentlichten Features. Sie können auf diese Befehle zugreifen, indem Sie mit der rechten Maustaste auf den Quellcode-Editor oder den Datei-Explorer klicken und die entsprechende Option auswählen.

Durch die Verwendung der Git Flow Integration in VS Code können Sie und Ihr Team effizienter arbeiten, da Sie nicht ständig zum Terminal wechseln müssen, um Git Flow-Befehle auszuführen. Es bietet auch eine visuellere und intuitivere Möglichkeit, den Git Flow-Workflow zu verwalten.

## 1. Allternative Einrichtung mit Terminal

Stellen Sie sicher, dass Git Flow auf Ihrem System installiert ist. Klonen Sie das Repository und initialisieren Sie Git Flow:

\```bash
git clone [URL-des-Repositories]
cd [Repository-Name]
git flow init
\```

Akzeptieren Sie die Standardzweignamen oder die von Ihrem Team festgelegten Namen.

## 2. Arbeiten an einem Feature

- **Neues Feature starten**:
  \```bash
  git flow feature start MEIN-FEATURE
  \```

- **Änderungen committen**:
  \```bash
  git add .
  git commit -m "Beschreibung der Änderungen"
  \```

- **Feature veröffentlichen**:
  \```bash
  git flow feature publish MEIN-FEATURE
  \```

- **Feature abschließen**:
  \```bash
  git flow feature finish MEIN-FEATURE
  \```

## 3. Mit einem Release arbeiten

- **Release starten**:
  \```bash
  git flow release start RELEASE-VERSION
  \```

- **Release veröffentlichen**:
  \```bash
  git flow release publish RELEASE-VERSION
  \```

- **Release abschließen**:
  \```bash
  git flow release finish RELEASE-VERSION
  \```

## 4. Hotfixes

- **Hotfix starten**:
  \```bash
  git flow hotfix start HOTFIX-NAME
  \```

- **Hotfix abschließen**:
  \```bash
  git flow hotfix finish HOTFIX-NAME
  \```

## 5. Pull Requests

Nachdem Sie ein Feature oder einen Hotfix abgeschlossen haben, sollten Sie einen Pull Request (PR) erstellen:

1. Gehen Sie zu Ihrem Repository auf der Hosting-Plattform.
2. Wählen Sie den `develop`-Zweig und klicken Sie auf "New Pull Request".
3. Wählen Sie Ihren Feature-Zweig als "compare" aus.
4. Geben Sie eine klare Beschreibung Ihrer Änderungen an.
5. Fordern Sie ein Review von einem oder mehreren Teammitgliedern an.
6. Nach Genehmigung, mergen Sie den PR in den `develop`-Zweig.

## 6. Allgemeine Best Practices

- **Immer pullen, vor dem pushen**.
- **Kommunizieren**.
- **Kleine, fokussierte Commits**.
- **Klare Commit-Nachrichten auf englisch**.
