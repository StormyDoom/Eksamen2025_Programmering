// register.js

// Liste over stillinger
const stillinger = [
  "Rektor",     // index 0
  "Dekan",      // index 1
  "Vaktmester", // index 2
  "Professor",  // index 3
  "Lektor"      // index 4
];

// Liste over ansatte
const ansatte = [
  // Rektor
  {
    etternavn: "Hansen",
    fornavn: "Kari",
    kontor: "A101",
    stilling: 0,
    epost: "kari.hansen@hoyskole.no",
    kursansvar: []
  },

  // Dekaner
  {
    etternavn: "Olsen",
    fornavn: "Per",
    kontor: "B201",
    stilling: 1,
    epost: "per.olsen@hoyskole.no",
    kursansvar: []
  },
  {
    etternavn: "Johansen",
    fornavn: "Anne",
    kontor: "B202",
    stilling: 1,
    epost: "anne.johansen@hoyskole.no",
    kursansvar: []
  },

  // Vaktmestere
  {
    etternavn: "Nilsen",
    fornavn: "Tom",
    kontor: "Vaktmesterbod",
    stilling: 2,
    epost: "tom.nilsen@hoyskole.no",
    kursansvar: []
  },
  {
    etternavn: "Berg",
    fornavn: "Lise",
    kontor: "Vaktmesterbod",
    stilling: 2,
    epost: "lise.berg@hoyskole.no",
    kursansvar: []
  },
  {
    etternavn: "Andreassen",
    fornavn: "Morten",
    kontor: "Vaktmesterbod",
    stilling: 2,
    epost: "morten.andreassen@hoyskole.no",
    kursansvar: []
  },

  // Professorer
  {
    etternavn: "Svendsen",
    fornavn: "Eva",
    kontor: "C301",
    stilling: 3,
    epost: "eva.svendsen@hoyskole.no",
    kursansvar: ["Matematikk 1", "Statistikk"] // minst to kurs
  },
  {
    etternavn: "Karlsen",
    fornavn: "Jonas",
    kontor: "C302",
    stilling: 3,
    epost: "jonas.karlsen@hoyskole.no",
    kursansvar: ["Fysikk 1"]
  },
  {
    etternavn: "Pettersen",
    fornavn: "Maria",
    kontor: "C303",
    stilling: 3,
    epost: "maria.pettersen@hoyskole.no",
    kursansvar: ["Kjemi", "Biologi"] // minst to kurs
  },
  {
    etternavn: "Solberg",
    fornavn: "Henrik",
    kontor: "C304",
    stilling: 3,
    epost: "henrik.solberg@hoyskole.no",
    kursansvar: ["Informatikk"]
  },
  {
    etternavn: "Dahl",
    fornavn: "Camilla",
    kontor: "C305",
    stilling: 3,
    epost: "camilla.dahl@hoyskole.no",
    kursansvar: ["Økonomi"]
  },

  // Lektorer
  {
    etternavn: "Moen",
    fornavn: "Siri",
    kontor: "D401",
    stilling: 4,
    epost: "siri.moen@hoyskole.no",
    kursansvar: ["Engelsk", "Fransk"] // minst to kurs
  },
  {
    etternavn: "Lie",
    fornavn: "Erik",
    kontor: "D402",
    stilling: 4,
    epost: "erik.lie@hoyskole.no",
    kursansvar: ["Historie"]
  },
  {
    etternavn: "Halvorsen",
    fornavn: "Nina",
    kontor: "D403",
    stilling: 4,
    epost: "nina.halvorsen@hoyskole.no",
    kursansvar: ["Samfunnsfag"]
  },
  {
    etternavn: "Fredriksen",
    fornavn: "Ole",
    kontor: "D404",
    stilling: 4,
    epost: "ole.fredriksen@hoyskole.no",
    kursansvar: ["Geografi"]
  },
  {
    etternavn: "Aas",
    fornavn: "Linda",
    kontor: "D405",
    stilling: 4,
    epost: "linda.aas@hoyskole.no",
    kursansvar: ["Pedagogikk"]
  },
  {
    etternavn: "Rasmussen",
    fornavn: "Knut",
    kontor: "D406",
    stilling: 4,
    epost: "knut.rasmussen@hoyskole.no",
    kursansvar: ["IT-Grunnkurs"]
  },
  {
    etternavn: "Holm",
    fornavn: "Marte",
    kontor: "D407",
    stilling: 4,
    epost: "marte.holm@hoyskole.no",
    kursansvar: ["Kunsthistorie"]
  },
  {
    etternavn: "Lund",
    fornavn: "Anders",
    kontor: "D408",
    stilling: 4,
    epost: "anders.lund@hoyskole.no",
    kursansvar: ["Musikk"]
  },
  {
    etternavn: "Kristiansen",
    fornavn: "Helene",
    kontor: "D409",
    stilling: 4,
    epost: "helene.kristiansen@hoyskole.no",
    kursansvar: ["Sosiologi"]
  },
  {
    etternavn: "Bakken",
    fornavn: "Tor",
    kontor: "D410",
    stilling: 4,
    epost: "tor.bakken@hoyskole.no",
    kursansvar: ["Religion"]
  }
];