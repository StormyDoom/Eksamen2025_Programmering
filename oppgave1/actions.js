// actions.js

/**
 * 1. Funksjon som lager HTML for én ansatt
 * Tar imot index (plassering i ansatte-listen)
 */
function lagAnsattKort(index) {
  const person = ansatte[index]; // Henter personen fra listen
  if (!person) return "<p>Ansatt ikke funnet</p>"; // Hvis index er feil

  const stilling = stillinger[person.stilling]; // Henter stilling fra stillingslisten

  // Lager kursliste (hvis personen har kursansvar)
  let kursTekst = "";
  if (person.kursansvar.length > 0) {
    kursTekst = "<ul>";
    for (let kurs of person.kursansvar) {
      kursTekst += `<li>${kurs}</li>`;
    }
    kursTekst += "</ul>";
  } else {
    kursTekst = "<p>Ingen kursansvar</p>";
  }
  const erAdmin = location.pathname.includes("admin.html") //Gjør at den vet om den er på admin.html siden eller ikke. Hentet fra CoPilot #OPPD3

  // Returnerer HTML-struktur for ansattkortet
  //Lagt til en article og en klasse som lager ansattkort #OPPD3
  //Lagt til selve knappen som sletter. Hentet fra CoPilot #OPPD3
  return `
  <article class="ansattkort"> 
    <h3>${person.fornavn} ${person.etternavn}</h3>
    <p>Stilling: ${stilling}</p>
    <p>Kontor: ${person.kontor}</p>
    <p>E-post: ${person.epost}</p>
    <p>Kursansvar: ${kursTekst}</p>
    ${erAdmin ? `<button onclick="slettAnsatt(${index})">Slett</button>` : ""} 
  </article>
  `; 
}

document.getElementById("ansattListe").innerHTML = visAlleAnsatte() //Lagt inn denne for at alle ansatte skal dukke opp med en gang #OPPD3

/**
 * 2. Funksjon som viser alle ansatte
 * Bruker lagAnsattKort for hver ansatt
 */
function visAlleAnsatte() {
  let resultat = "";
  for (let i = 0; i < ansatte.length; i++) {
    resultat += lagAnsattKort(i);
  }
  return resultat;
}

//Lagd en funksjon slik at det kommer i HTML filen #OPPD3
function visAlle() {
  document.getElementById("ansattListe").innerHTML = visAlleAnsatte()
}

/**
 * 3. Funksjon som filtrerer ansatte basert på stilling
 * Tar imot stillingsnavn (f.eks. "Lektor")
 */
function filtrerAnsattePåStilling(stillingNavn) {
  const stillingIndex = stillinger.indexOf(stillingNavn); // Finner index til stillingen
  if (stillingIndex === -1) return "<p>Stilling ikke funnet</p>";

  let resultat = "";
  for (let i = 0; i < ansatte.length; i++) {
    if (ansatte[i].stilling === stillingIndex) {
      resultat += lagAnsattKort(i);
    }
  }
  return resultat;
}

//Lagd en funksjon slik at det kommer i HTML filen #OPPD3
function filtrer(stillingNavn){
  document.getElementById("ansattListe").innerHTML = filtrerAnsattePåStilling(stillingNavn)
}

/**
 * 4. Funksjon som henter alle kurs som tilbys
 */
function hentAlleKurs() {
  let kursListe = [];
  for (let person of ansatte) {
    for (let kurs of person.kursansvar) {
      if (!kursListe.includes(kurs)) { // Sjekker at kurset ikke er lagt til før
        kursListe.push(kurs);
      }
    }
  }

  // Lager HTML-liste av kursene
  let resultat = "<ul>";
  for (let kurs of kursListe) {
    resultat += `<li>${kurs}</li>`;
  }
  resultat += "</ul>";
  return resultat;
}

document.getElementById("kursListe").innerHTML = hentAlleKurs() //Lagt inn dette for at det skal dukke opp i HTML filen #OPPD3

/**
 * 5. Funksjon som henter alle undervisere (professorer og lektorer)
 */
function hentUndervisere() {
  let resultat = "";
  for (let i = 0; i < ansatte.length; i++) {
    if (ansatte[i].stilling === 3 || ansatte[i].stilling === 4) {
      resultat += lagAnsattKort(i);
    }
  }
  return resultat;
}

//Lagd en funksjon slik at det kommer i HTML filen #OPPD3
function visUndervisere() {
  document.getElementById("ansattListe").innerHTML = hentUndervisere()
}

/**
 * 6. Funksjon som henter administrasjonen (rektor, dekan, vaktmester)
 */
function hentAdministrasjon() {
  let resultat = "";
  for (let i = 0; i < ansatte.length; i++) {
    if (ansatte[i].stilling === 0 || ansatte[i].stilling === 1 || ansatte[i].stilling === 2) {
      resultat += lagAnsattKort(i);
    }
  }
  return resultat;
}

//Lagd en funksjon slik at det kommer i HTML filen #OPPD3
function visAdministrasjon() {
  document.getElementById("ansattListe").innerHTML = hentAdministrasjon()
}
/**
 * 7. Funksjon som legger til en underviser 
 */

function leggTilUnderviser() {
  const fornavn = document.getElementById("fornavn").value; //Lagt til dette for at den skal klare å lese av verdiene som er i skjemaet #OPPD3
  const etternavn = document.getElementById("etternavn").value;
  const kontor = document.getElementById("kontor").value;
  const stilling = document.getElementById("stilling").value;
  const epost = document.getElementById("epost").value;
  const kursansvar = document.getElementById("kurs").value.split(",");

  ansatte.push({
    fornavn,
    etternavn,
    kontor,
    stilling,
    epost,
    kursansvar
  });
  
  document.getElementById("ansattListe").innerHTML = visAlleAnsatte() //Lagt inn for at det skal vises ny side med ansatte og den nye #OPPD3

  document.getElementById("ansattSkjema").reset() //Lagt inn for at skjema skal tømme seg #OPPD3 
}


/**
 * 8. Funksjon som sletter en ansatt basert på index
 */
function slettAnsatt(index) {
  if (index >= 0 && index < ansatte.length) {
    ansatte.splice(index, 1);
    document.getElementById("ansattListe").innerHTML = ansatte.map((_, i) => lagAnsattKort(i)).join(""); //Gjør at ansatte blir slettet, men ikke alle samtidig. Hentet fra CoPilot #OPPD3
    return true;
  }
  return false;
}