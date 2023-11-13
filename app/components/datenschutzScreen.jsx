import React from 'react';
import { ScrollView, Text, StyleSheet, Linking } from 'react-native';

const datenschutzScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Datenschutzerklärung</Text>
      {/* Abschnitt 1 */}
      <Text style={styles.paragraph}>
        Personenbezogene Daten (nachfolgend zumeist nur „Daten“ genannt) werden
        von uns nur im Rahmen der Erforderlichkeit sowie zum Zwecke der
        Bereitstellung eines funktionsfähigen und nutzerfreundlichen
        Internetauftritts, inklusive seiner Inhalte und der dort angebotenen
        Leistungen, verarbeitet.
      </Text>
      <Text style={styles.paragraph}>
        Gemäß Art. 4 Ziffer 1. der Verordnung (EU) 2016/679, also der
        Datenschutz-Grundverordnung (nachfolgend nur „DSGVO“ genannt), gilt als
        „Verarbeitung“ jeder mit oder ohne Hilfe automatisierter Verfahren
        ausgeführter Vorgang oder jede solche Vorgangsreihe im Zusammenhang mit
        personenbezogenen Daten, wie das Erheben, das Erfassen, die
        Organisation, das Ordnen, die Speicherung, die Anpassung oder
        Veränderung, das Auslesen, das Abfragen, die Verwendung, die Offenlegung
        durch Übermittlung, Verbreitung oder eine andere Form der
        Bereitstellung, den Abgleich oder die Verknüpfung, die Einschränkung,
        das Löschen oder die Vernichtung.
      </Text>
      <Text style={styles.paragraph}>
        Mit der nachfolgenden Datenschutzerklärung informieren wir Sie
        insbesondere über Art, Umfang, Zweck, Dauer und Rechtsgrundlage der
        Verarbeitung personenbezogener Daten, soweit wir entweder allein oder
        gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung
        entscheiden. Zudem informieren wir Sie nachfolgend über die von uns zu
        Optimierungszwecken sowie zur Steigerung der Nutzungsqualität
        eingesetzten Fremdkomponenten, soweit hierdurch Dritte Daten in wiederum
        eigener Verantwortung verarbeiten.
      </Text>
      <Text style={styles.paragraph}>
        Unsere Datenschutzerklärung ist wie folgt gegliedert:
      </Text>
      <Text style={styles.paragraph}>
        I. Informationen über uns als Verantwortliche II. Rechte der Nutzer und
        Betroffenen III. Informationen zur Datenverarbeitung
      </Text>

      <Text style={styles.subHeading}>
        I. Informationen über uns als Verantwortliche
      </Text>
      <Text style={styles.paragraph}>
        Verantwortlicher Anbieter dieses Internetauftritts im
        datenschutzrechtlichen Sinne ist:
      </Text>
      <Text>ErgoPhysion</Text>
      <Text>Etrichgasse 28</Text>
      <Text>6020 Innsbruck</Text>
      <Text>Österreich</Text>
      <Text> </Text>
      <Text>Telefon: +43 699 10222520</Text>
      <Text>E-Mail: info@ergophysion.com</Text>
      <Text> </Text>
      <Text style={styles.subHeading}>
        II. Rechte der Nutzer und Betroffenen
      </Text>
      <Text style={styles.paragraph}>
        Mit Blick auf die nachfolgend noch näher beschriebene Datenverarbeitung
        haben die Nutzer und Betroffenen das Recht
      </Text>
      <Text style={styles.paragraph}>
        • auf Bestätigung, ob sie betreffende Daten verarbeitet werden, auf
        Auskunft über die verarbeiteten Daten, auf weitere Informationen über
        die Datenverarbeitung sowie auf Kopien der Daten (vgl. auch Art. 15
        DSGVO);
      </Text>
      <Text style={styles.paragraph}>
        • auf Berichtigung oder Vervollständigung unrichtiger bzw.
        unvollständiger Daten (vgl. auch Art. 16 DSGVO);
      </Text>
      <Text style={styles.paragraph}>
        • auf unverzügliche Löschung der sie betreffenden Daten (vgl. auch Art.
        17 DSGVO), oder, alternativ, soweit eine weitere Verarbeitung gemäß Art.
        17 Abs. 3 DSGVO erforderlich ist, auf Einschränkung der Verarbeitung
        nach Maßgabe von Art. 18 DSGVO;
      </Text>
      <Text style={styles.paragraph}>
        • auf Erhalt der sie betreffenden und von ihnen bereitgestellten Daten
        und auf Übermittlung dieser Daten an andere Anbieter/Verantwortliche
        (vgl. auch Art. 20 DSGVO);
      </Text>
      <Text style={styles.paragraph}>
        • auf Beschwerde gegenüber der Aufsichtsbehörde, sofern sie der Ansicht
        sind, dass die sie betreffenden Daten durch den Anbieter unter Verstoß
        gegen datenschutzrechtliche Bestimmungen verarbeitet werden (vgl. auch
        Art. 77 DSGVO).
      </Text>
      <Text style={styles.bold}>
        Ebenfalls haben die Nutzer und Betroffenen nach Art. 21 DSGVO das Recht
        auf Widerspruch gegen die künftige Verarbeitung der sie betreffenden
        Daten, sofern die Daten durch den Anbieter nach Maßgabe von Art. 6 Abs.
        1 lit. f) DSGVO verarbeitet werden. Insbesondere ist ein Widerspruch
        gegen die Datenverarbeitung zum Zwecke der Direktwerbung statthaft.
      </Text>
      <Text style={styles.subHeading}>
        III. Informationen zur Datenverarbeitung
      </Text>
      <Text style={styles.paragraph}>
        Ihre bei Nutzung unseres Internetauftritts verarbeiteten Daten werden
        gelöscht oder gesperrt, sobald der Zweck der Speicherung entfällt, der
        Löschung der Daten keine gesetzlichen Aufbewahrungspflichten
        entgegenstehen und nachfolgend keine anderslautenden Angaben zu
        einzelnen Verarbeitungsverfahren gemacht werden.
      </Text>
      <Text style={styles.subHeading}>Cookies</Text>
      <Text style={styles.bold}>a) Sitzungs-Cookies/Session-Cookies</Text>
      <Text style={styles.paragraph}>
        Wir verwenden mit unserem Internetauftritt sog. Cookies. Cookies sind
        kleine Textdateien oder andere Speichertechnologien, die durch den von
        Ihnen eingesetzten Internet-Browser auf Ihrem Endgerät ablegt und
        gespeichert werden. Durch diese Cookies werden im individuellen Umfang
        bestimmte Informationen von Ihnen, wie beispielsweise Ihre Browser- oder
        Standortdaten oder Ihre IP-Adresse, verarbeitet.
      </Text>
      <Text style={styles.paragraph}>
        Durch diese Verarbeitung wird unser Internetauftritt
        benutzerfreundlicher, effektiver und sicherer, da die Verarbeitung bspw.
        die Wiedergabe unseres Internetauftritts in unterschiedlichen Sprachen
        oder das Angebot einer Warenkorbfunktion ermöglicht.
      </Text>
      <Text style={styles.paragraph}>
        Rechtsgrundlage dieser Verarbeitung ist Art. 6 Abs. 1 lit b.) DSGVO,
        sofern diese Cookies Daten zur Vertragsanbahnung oder Vertragsabwicklung
        verarbeitet werden.
      </Text>
      <Text style={styles.paragraph}>
        Falls die Verarbeitung nicht der Vertragsanbahnung oder
        Vertragsabwicklung dient, liegt unser berechtigtes Interesse in der
        Verbesserung der Funktionalität unseres Internetauftritts.
        Rechtsgrundlage ist in dann Art. 6 Abs. 1 lit. f) DSGVO.
      </Text>
      <Text style={styles.paragraph}>
        Mit Schließen Ihres Internet-Browsers werden diese Session-Cookies
        gelöscht.
      </Text>
      <Text style={styles.bold}>b) Drittanbieter-Cookies</Text>
      <Text style={styles.paragraph}>
        Gegebenenfalls werden mit unserem Internetauftritt auch Cookies von
        Partnerunternehmen, mit denen wir zum Zwecke der Werbung, der Analyse
        oder der Funktionalitäten unseres Internetauftritts zusammenarbeiten,
        verwendet.
      </Text>
      <Text style={styles.paragraph}>
        Die Einzelheiten hierzu, insbesondere zu den Zwecken und den
        Rechtsgrundlagen der Verarbeitung solcher Drittanbieter-Cookies,
        entnehmen Sie bitte den nachfolgenden Informationen.
      </Text>
      <Text style={styles.paragraph}></Text>
      <Text style={styles.paragraph}></Text>
      <Text style={styles.paragraph}></Text>
      <Text style={styles.paragraph}></Text>
      <Text style={styles.paragraph}></Text>
      <Text style={styles.paragraph}></Text>
      <Text style={styles.paragraph}></Text>
      <Text style={styles.paragraph}></Text>
      <Text style={styles.paragraph}></Text>
      <Text style={styles.paragraph}></Text>
      <Text style={styles.paragraph}></Text>
      <Text style={styles.paragraph}></Text>
      <Text style={styles.paragraph}></Text>
      <Text style={styles.paragraph}></Text>
      <Text style={styles.paragraph}></Text>
      <Text style={styles.paragraph}></Text>
      <Text style={styles.paragraph}></Text>
      <Text style={styles.paragraph}></Text>
      <Text style={styles.paragraph}></Text>
      <Text style={styles.paragraph}></Text>
      <Text style={styles.paragraph}></Text>
      <Text style={styles.paragraph}></Text>
      <Text style={styles.paragraph}></Text>
      <Text style={styles.paragraph}></Text>
      <Text style={styles.paragraph}></Text>
      <Text style={styles.paragraph}></Text>
      <Text style={styles.paragraph}></Text>
      <Text style={styles.paragraph}></Text>
      <Text style={styles.paragraph}></Text>
      <Text style={styles.paragraph}></Text>
      <Text style={styles.paragraph}></Text>
      <Text style={styles.paragraph}></Text>
      <Text style={styles.paragraph}></Text>
      <Text style={styles.paragraph}></Text>
      <Text style={styles.paragraph}></Text>
      <Text style={styles.paragraph}></Text>
      <Text style={styles.paragraph}></Text>
      <Text style={styles.paragraph}></Text>
      <Text style={styles.paragraph}></Text>
      <Text style={styles.paragraph}></Text>
      <Text style={styles.paragraph}></Text>
      {/* Weitere Abschnitte ... */}
      <Text
        style={styles.link}
        onPress={() => Linking.openURL('https://example.com')}
      >
        Externer Link
      </Text>
      {/* Rest des Textes */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
    color: '#004a7c',
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 10,
  },
  bold: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default datenschutzScreen;
