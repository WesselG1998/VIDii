// JavaScript Document
console.log("Howdy!");

// Alle variabelen bovenaan mn JS opgeslagen zoals ik heb geleerd bij Inleiding Programmeren

var inputNaam = prompt('Wie speelt er?');
var outputNaam = document.querySelector("ul li:nth-of-type(2) h4");
var verkochtePlaystations = document.querySelector("header ul li:nth-of-type(1) h1");
var jaartalPlaystations = document.querySelector("header ul li:nth-of-type(3) h1");
var ps5 = document.querySelector("ol li:nth-of-type(1) button");
var ps4 = document.querySelector("ol li:nth-of-type(2) button");
var ps3 = document.querySelector("ol li:nth-of-type(3) button");
var ps2 = document.querySelector("ol li:nth-of-type(4) button");
var ps1 = document.querySelector("ol li:nth-of-type(5) button");
var deContent = document.querySelector("main ul");
var deKopjes = document.querySelector("section:nth-of-type(2)");
var pijlTerug = document.querySelector("section:nth-of-type(1)");
var dePlaystations = document.querySelector("main ol");
var deSpecificatiesTitel = document.querySelector("section h3:nth-of-type(1)");
var deControllerTitel = document.querySelector("section h3:nth-of-type(2)");
var deSpecificaties = document.querySelector("ul li p");
var deControllerFoto = document.querySelector("main ul li:nth-of-type(2) img");
var deGame = document.querySelector("main ul li:nth-of-type(3) img")
var deAchtergrond = document.querySelector("body");

// functie voor input prompt met customized gebruikersnaam als easter egg
// Hulp van Jeffrey

function deNaam() {
    if (inputNaam == 'Sanne') {
        outputNaam.innerHTML = 'PepsiMaxLover1971'
        console.log('hey')
    } else if (inputNaam == 'Jeffrey') {
        outputNaam.innerHTML = 'Studentassistentje'
    } else if (inputNaam == 'Wessel') {
        outputNaam.innerHTML = 'WeSsEl_1998'
    } else {
        outputNaam.innerHTML = inputNaam;
    }

}


deNaam();


// buttons laten luisteren met eventlisteners en functies

ps5.addEventListener("click", klikken5);
ps4.addEventListener("click", klikken4);
ps3.addEventListener("click", klikken3);
ps2.addEventListener("click", klikken2);
ps1.addEventListener("click", klikken1);

pijlTerug.addEventListener("click", terug);
pijlTerug.addEventListener("click", terug);
pijlTerug.addEventListener("click", terug);
pijlTerug.addEventListener("click", terug);
pijlTerug.addEventListener("click", terug);


// functies laten uitvoeren met klasses toevoegen/removen en inner html laten aanpassen

function klikken5() {
    deContent.classList.remove("terug");
    deKopjes.classList.remove("terug");
    pijlTerug.classList.remove("terug");
    dePlaystations.classList.remove("terug");
    deContent.classList.add("geselecteerd");
    deKopjes.classList.add("geselecteerd");
    pijlTerug.classList.add("geselecteerd");
    dePlaystations.classList.add("geselecteerd");
    verkochtePlaystations.innerHTML = '25.000.000 exemplaren verkocht';
    jaartalPlaystations.innerHTML = '2020';
    deSpecificatiesTitel.innerHTML = 'Specificaties Playstation 5';
    deControllerTitel.innerHTML = 'DualShock 5 controller';
    deSpecificaties.innerHTML = 'Met de kracht van een aangepaste CPU, GPU en SSD met geïntegreerd I/O-systeem verlegt deze PlayStation-consoles de grenzen van wat mogelijk is. Geniet van ongelooflijke graphics en ervaar nieuwe PS5-functies. Ontdek een diepere game-ervaring met ondersteuning voor haptische feedback, adaptieve triggers en 3D-audiotechnologie. Met Ray tracing ga je helemaal op in werelden die realistischer zijn dan ooit. Lichtstralen worden individueel gesimuleerd, waardoor levensechte schaduwen en reflecties worden gecreëerd in ondersteunde PS5™-games. Geniet van vloeiende gameplay met een hoge framerate tot 120 fps voor compatibele games, met ondersteuning voor 120 Hz op 4K-schermen. PS5 digitale editie is een PS5-console voor uitsluitend digitale games. Het apparaat heeft dus geen disc-speler. Uiteraard kun je via de PlayStation®Store met onder andere PlayStation tegoedkaarten games te kopen, downloaden en spelen.';
    deControllerFoto.src = "images/ps5_controller.png";
    deGame.src = "images/fortnite.jpeg";
    deAchtergrond.classList.add("ps5achtergrond");
}

function klikken4() {
    deContent.classList.remove("terug");
    deKopjes.classList.remove("terug");
    pijlTerug.classList.remove("terug");
    dePlaystations.classList.remove("terug");
    deContent.classList.add("geselecteerd");
    deKopjes.classList.add("geselecteerd");
    pijlTerug.classList.add("geselecteerd");
    dePlaystations.classList.add("geselecteerd");
    verkochtePlaystations.innerHTML = '117.200.000 exemplaren verkocht';
    jaartalPlaystations.innerHTML = '2013';
    deSpecificatiesTitel.innerHTML = 'Specificaties Playstation 4';
    deControllerTitel.innerHTML = 'DualShock 4 controller';
    deSpecificaties.innerHTML = 'De PlayStation 4 maakt gebruik van een aangepaste "accelerated processing unit" (APU) ontwikkeld door AMD in samenwerking met Sony. De PS4-APU is een chip die processor (CPU) en videogeheugen (GPU) combineert, evenals een geheugencontroller en videodecoder. De CPU bestaat uit acht x86-64-kernen, gebaseerd op de toekomstige Jaguar CPU-architectuur van AMD. Deze processor moet het beter gaan doen dan de Celprocessor van de PlayStation 3, die krachtig was maar ook erg moeilijk om mee te werken voor ontwikkelaars. De GPU zal bestaan uit 18 computereenheden die samenwerken om een theoretische piek van 1,84 TFLOPS te bereiken. Deze rekenkracht kan worden gebruikt voor zeer gedetailleerde grafische beelden, natuurkundige simulaties of een combinatie van de twee. Er wordt tevens een secundaire chip inbegrepen in de PS4, die online functies zoals downloaden, uploaden en sociale gameplay op zich neemt. Deze taken kunnen hierdoor moeiteloos worden gedraaid op de achtergrond, tijdens het spelen of terwijl het systeem in de slaapstand staat.';
    deControllerFoto.src = "images/ps4_controller.png";
    deGame.src = "images/gta.jpeg";
    deAchtergrond.classList.add("ps4achtergrond");
}

function klikken3() {
    deContent.classList.remove("terug");
    deKopjes.classList.remove("terug");
    pijlTerug.classList.remove("terug");
    dePlaystations.classList.remove("terug");
    deContent.classList.add("geselecteerd");
    deKopjes.classList.add("geselecteerd");
    pijlTerug.classList.add("geselecteerd");
    dePlaystations.classList.add("geselecteerd");
    verkochtePlaystations.innerHTML = '87.400.000 exemplaren verkocht';
    jaartalPlaystations.innerHTML = '2006';
    deSpecificatiesTitel.innerHTML = 'Specificaties Playstation 3';
    deControllerTitel.innerHTML = 'DualShock 3 controller';
    deSpecificaties.innerHTML = 'In tegenstelling tot de PlayStation 2, worden de spellen niet op dvd maar op blu-raydisk (BD) uitgegeven. De PlayStation 3 werkt met bd-rom-discs, waar ongeveer zes keer zoveel informatie op past als op een dvd, ongeveer 50 gigabyte. Met extra lagen past er ongeveer 200 GB op. Theoretisch kan er 1 TB op een schijf, maar praktisch is dit voorlopig onmogelijk. Blu-raydisk is intussen al als opvolger van de dvd gebleken. Vanwege de hogere opslagcapaciteit past er veel meer data op, en daardoor is het mogelijk om er speelfilms op te zetten van high definition-kwaliteit (HD), maar ook spellen van hogere kwaliteit. Dankzij blu-ray kan men door de capaciteit hogere kwaliteit geluid op de PS3 krijgen, zoals DolbyTrue HD en DTS HD. 7.1. De console nam het vooral op tegen Microsofts Xbox 360 en Nintendo Wii. Deze horen samen tot de zogenaamde zevende generatie van spelcomputers.';
    deControllerFoto.src = "images/ps3_controller.png";
    deGame.src = "images/gta.jpeg";
    deAchtergrond.classList.add("ps3achtergrond");
}

function klikken2() {
    deContent.classList.remove("terug");
    deKopjes.classList.remove("terug");
    pijlTerug.classList.remove("terug");
    dePlaystations.classList.remove("terug");
    deContent.classList.add("geselecteerd");
    deKopjes.classList.add("geselecteerd");
    pijlTerug.classList.add("geselecteerd");
    dePlaystations.classList.add("geselecteerd");
    verkochtePlaystations.innerHTML = '155.000.000 exemplaren verkocht';
    jaartalPlaystations.innerHTML = '2000';
    deSpecificatiesTitel.innerHTML = 'Specificaties Playstation 2';
    deControllerTitel.innerHTML = 'DualShock 2 controller';
    deSpecificaties.innerHTML = 'De komst van de PlayStation 2 zette computerspellen in een veel breder perspectief. De PlayStation 2 heeft ten opzichte van de PlayStation onder andere betere graphics, een snellere engine en de mogelijkheid om dvds, cd-roms en cds af te spelen. De discs waarop PlayStation 2-spellen werden uitgebracht weken echter af van de standaard. De PlayStation 2 kan alleen dit soort discs lezen, zodat men geen gebruik kan maken van illegale kopieën of zelfgemaakte software (ook wel homebrew).';
    deControllerFoto.src = "images/ps2_controller.png";
    deGame.src = "images/gta_sanandreas.jpeg";
    deAchtergrond.classList.add("ps2achtergrond");
}

function klikken1() {
    deContent.classList.remove("terug");
    deKopjes.classList.remove("terug");
    pijlTerug.classList.remove("terug");
    dePlaystations.classList.remove("terug");
    deContent.classList.add("geselecteerd");
    deKopjes.classList.add("geselecteerd");
    pijlTerug.classList.add("geselecteerd");
    dePlaystations.classList.add("geselecteerd");
    verkochtePlaystations.innerHTML = '102.490.000 exemplaren verkocht';
    jaartalPlaystations.innerHTML = '1994';
    deSpecificatiesTitel.innerHTML = 'Specificaties Playstation 1';
    deControllerTitel.innerHTML = 'DualShock 1 controller';
    deSpecificaties.innerHTML = 'De PlayStation ontstond door een mislukte samenwerking met Nintendo. Sony en Nintendo hadden een samenwerking gestart om voor de SNES een cd-eenheid te produceren, genaamd de "Play Station" of "SNES-CD". Dit was al in een vergevorderd stadium, totdat Nintendo de samenwerking stopte, omdat de bedrijven niet tot een overeenkomst konden komen over de verdeling van de winst. Nintendo deed Sony nog een aanbod om alleen de hardware te produceren, maar dit werd afgeslagen. Nintendo wendde zich tot Philips wat uiteindelijk resulteerde in de cd-i, terwijl Sony bekendmaakte de cd-eenheid alsnog te zullen uitbrengen.';
    deControllerFoto.src = "images/ps1_controller.png";
    deGame.src = "images/granturismo.jpeg";
    deAchtergrond.classList.add("ps1achtergrond");
}



function terug() {
    deContent.classList.remove("geselecteerd");
    deKopjes.classList.remove("geselecteerd");
    pijlTerug.classList.remove("geselecteerd");
    dePlaystations.classList.remove("geselecteerd");
    deContent.classList.add("terug");
    deKopjes.classList.add("terug");
    pijlTerug.classList.add("terug");
    dePlaystations.classList.add("terug")
    verkochtePlaystations.innerHTML = 'Aantal exemplaren verkocht';
    jaartalPlaystations.innerHTML = 'Jaartal'
    deAchtergrond.classList.remove("ps5achtergrond");
    deAchtergrond.classList.remove("ps4achtergrond");
    deAchtergrond.classList.remove("ps3achtergrond");
    deAchtergrond.classList.remove("ps2achtergrond");
    deAchtergrond.classList.remove("ps1achtergrond");
}