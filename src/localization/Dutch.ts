//Uncomment this line on creating a translation file
import { editorLocalization, defaultStrings } from "../editorLocalization";

export var enStrings = { 
  //survey templates,  //vragenlijst sjablonen
  survey: {,  vragenlijst: {
    edit: "Aanpassen", 
    externalHelpLink: "Hoe stelt u een vragenlijst op",
    externalHelpLinkUrl:
      "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber",
    dropQuestion: "Plaats hier uw vraag uit de toolbox",
    addLogicItem: "Stel hier regels voor de flow van je vragenlijst", 
    copy: "Copieeren", 
    addToToolbox: "Toevoegen aan toolbox", 
    deletePanel: "Paneel verwijderen", 
    deleteQuestion: "Vraag verwijderen", 
    convertTo: "Converteren naar", 
    drag: "Sleep element",
  },
  //questionTypes
  qt: {
    default: "Standaard",
    checkbox: "Selectievakje",
    comment: "Commentaar",
    imagepicker: "Afbeeldingskiezer",
    image: "Afbeelding",
    dropdown: "Uitklap",
    file: "Bestand",
    html: "Html",
    matrix: "Matrix (enkelvoudige keuze)",
    matrixdropdown: "Matrix (meervoudige keuze)",
    matrixdynamic: "Matrix (dynamisch aantal rijen)",
    multipletext: "Meervoudige Tekst",
    panel: "Paneel",
    paneldynamic: "Dynamisch paneel",
    radiogroup: "keuzegroep",
    rating: "Beoordeling",
    text: "Enkelvoudige invoer",
    boolean: "Boolean",
    expression: "Expressie (alleen lezen)",
    signaturepad: "Handtekening vlak",
    flowpanel: "Flow Panel",
  },
  //Strings in Editor
  ed: {
    defaultLocale: "Default ({0})",
    survey: "vragenlijst",
    settings: "Vragenlijst instellingen",
    settingsTooltip: "Open vragenlijst instellingen",
    //opjectPropertiesHeader: "Geavanceerd",
    //showObjectProperties: "Toon Object eigenschappen",
    //hideObjectProperties: "Verstop Object eigenschappen",
    showPanel: "Toon Panel",
    hidePanel: "Verstop Panel",
    //editSurvey: "Aanpassen Vragenlijst",
    addNewPage: "Toevoegen nieuwe pagina",
    moveRight: "Scroll naar rechts",
    moveLeft: "Scroll naar links",
    deletePage: "Pagina verwijderen",
    editPage: "Pagina wijzigen",
    edit: "Wijzigen",
    newPageName: "pagina",
    newQuestionName: "vraag",
    newPanelName: "panel",
    newTextItemName: "tekst",
    testSurvey: "Test vragenlijst",
    testSurveyAgain: "Test vragenlijst opnieuw",
    testSurveyWidth: "Vragenlijst breedte: ",
    navigateToMsg: "U had moeten navigeren naar:",
    logic: "Vragenlijst logica",
    embedSurvey: "Vragenlijst intergreren",
    translation: "Vertaling",
    saveSurvey: "Opslaan Vragenlijst",
    saveSurveyTooltip: "Opslaan wijzigingen vragenlijst",
    designer: "Ontwerper Vragenlijst",
    jsonEditor: "JSON Editor",
    undo: "Ongedaan maken",
    redo: "Opnieuw",
    undoTooltip: "Laatste wijziging ongedaan maken",
    redoTooltip: "Laatste wijziging veranderen",
    options: "Opties",
    generateValidJSON: "Genereer geldig JSON",
    generateReadableJSON: "Genereer leesbaar JSON",
    toolbox: "Toolbox",
    "property-grid": "Eigendommen",
    toolboxGeneralCategory: "Toolbox algemene categorieën",
    //delSelObject: "Verwijder geselecteerd item",
    //editSelObject: "Voeg geselecteerd item toe",
    correctJSON: "Corrigeer JSON.",
    surveyResults: "Resultaten Vragenlijst: ",
    surveyResultsTable: "Resultaten vragenlijst tabel",
    surveyResultsJson: "Resultaten vragenlijst JSON",
    resultsTitle: "Resultaten titel",
    resultsName: "Resultaten naam",
    resultsValue: "Resultaat waarde",
    resultsDisplayValue: "Resultaat Display waarde",
    modified: "Aangepast",
    saving: "Opslaan",
    saved: "Opgeslagen",
    saveError: "Foutmelding! Fout bij opslaan.",
    translationAddLanguage: "Selecteer de juiste taal om te vertalen.",
    translationShowAllStrings: "Toon alle strings",
    translationShowAllPages: "Toon alle pagina's",
    translationNoStrings: "Geen opties voor vertaling. 
    translationExportToSCVButton: "Export naar CSV",
    translationImportFromSCVButton: "Importeren uit CSV",
    translationMergeLocaleWithDefault: "Bestand {0} met locaal standaard",
    bold: "Vet gedrukt",
    italic: "Cursief",
    underline: "Onderstrepen",
    fpAddQuestion: "Voeg vraag toe...",
    //completedHtmlOnConditionItemText: "Show if:",
    lg: {
      //Logic tab strings
      page_visibilityName: "Zichtbaarheid pagina",
      panel_visibilityName: "Zichtbaarheid paneel",
      panel_enableName: "Paneel toegankelijk/ontoegankelijk",
      question_visibilityName: "Zichtbaarheid vraag",
      question_enableName: "Vraag toegankelijk/ontoegankelijk",
      question_requireName: "Optionele vraag vereist",
      trigger_completeName: "Afronden vragenlijst",
      trigger_setvalueName: "Vraagwaarde instellen" 
      trigger_copyvalueName: "Vraagwaarde kopieeren"
      trigger_skipName: "Ga direct door naar de vraag"
      trigger_runExpressionName: "Aangepaste expressie uitvoeren"
      completedHtmlOnConditionName: "Aangepaste 'dank u wel pagina' tekst"

      page_visibilityDescription:
        "Maak de pagina zichtbaar wanneer het logische antwoord waar is. Houd het anders onzichtbaar."
      panel_visibilityDescription:
        "Maak het paneel zichtbaar wanneer het logische antwoord waar is. Houd het anders onzichtbaar."
      panel_enableDescription:
        "Schakel het paneel en alle interne onderdelen in, wanneer het logische antwoord waar is. Laat deze anders ontoegankelijk."
      question_visibilityDescription:
        "Maak de vraag zichtbaar wanneer het logische antwoord waar is. Houd het anders onzichtbaar."
      question_enableDescription:
        "Maak de vraag toegankelijk wanneer het logische antwoord waar is. Houd het anders ontoegankelijk."
      question_requireDescription:
        "Vraag wordt verplicht wanneer het logische antwoord waar is"
      trigger_completeDescription:
        "Wanneer de logische Expressie weer waar is dan is de vragenlijst voltooid en ziet de eindgebruiker de 'bedankt' pagina.", 
      trigger_setvalueDescription:
        "Wanneer de waarde van de vragen, die zijn gebruikt in de logische expressie, verandert is en het logische antwoord weer waar is, is de waarde op de geselecteerde vraag gezet",
      trigger_copyvalueDescription: 
		"Wanneer de waarde van de vragen, die zijn gebruikt in de logische expressie, verandert is en het logische antwoord weer waar is dan is de vraag van de geselecteerde vraag gekopieerd naar een ander geselecteerde vraag",
      trigger_skipDescription:
        "When the logic expression returns true then the survey skip to / focus the selected question.", 
		"Wanneer de logische expressie waar is wordt de naar de geselecteerde vraag gesprongen.",
      trigger_runExpressionDescription:
		"Wanneer de logische expressie waar is, dan wordt de aangepaste expressie uitgevoerd. Deze expressie resulteert in de geselecteerde vraag", 
      completedHtmlOnConditionDescription:
		"Wanneer de logische epxressie waar is, dan is de standaard 'bedankt' tekst veranderd in de aangegeven tekst.", 

      itemExpressionText: "Wanneer de expressie: '{0}' reageert met goed:", //{0} - the expression. 
	  page_visibilityText: "Maak pagina {0} zichtbaar", //{0} page name
      panel_visibilityText: "Maak panel {0} zichtbaar", //{0} panel name
      panel_enableText: "Maak panel {0} toegankelijk", //{0} panel name
      question_visibilityText: "Maak question {0} zichtbaar", //{0} question name
      question_enableText: "Maak vraag {0} toegankelijk", //{0} question name
      question_requireText: "Maak vraag {0} verplicht", //{0} question name
      trigger_completeText: "Vragenlijst is voltooid",
      trigger_setvalueText: "Stel de vraag in: {0} value {1}", //{0} vraagnaam, {1} setValue
      trigger_copyvalueText: "Copieer in de vraag: {0} waarde van de vraag {1}", //{0} and {1} question names
      trigger_skipText: "Vragenlijst, spring naar vraag {0}", //{0} question name
      trigger_runExpressionText1: "Uitvoeren expressie: '{0}'", //{0} the expression
      trigger_runExpressionText2: " en zet het resultaat in vraag: {0}", //{0} question name
      completedHtmlOnConditionText:
        "Laat aangepaste tekst van de bedankpagina zien.",
	  
      conditions: "Voorwaarden",
      actions: "Acties",
      expressionEditorTitle: "Definieer voorwaarden",
      actionsEditorTitle: "Definieer acties",

      deleteAction: "Verwijder actie",
      addNewAction: "Nieuwe actie toevoegen",
      selectedActionCaption: "Voor toevoegen, selecteer actie",

      expressionInvalid:
        "De Expressie logica is leeg of ongewldig. Corrigeerd dit.", 
      noActionError: "Voeg minimaal een actie toe",
      actionInvalid: "Los eerst de problemen op in uw actie(s)",
      expressionSetup: "",
      actionsSetup: "",
    },
  },
  //Property names in table headers
  // pel: {
  //   isRequired: "Noodzakelijk?" 
  // },
  //Property Editors 
  pe: {
    apply: "Bevestigen", 
    ok: "OK", 
    save: "Opslaan", 
    cancel: "Annuleren",
    reset: "Resetten",
    refresh: "Vernieuwen",
    // close: "Sluiten",
    delete: "Verwijderen",
    add: "Toevoegen",
    addNew: "Nieuwe toevoegen",
    addItem: "Klik voor toevoegen item...",
    addOther: "Overige",
    addSelectAll: "Alles selecteren",
    addNone: "Geen",
    removeAll: "Alles verwijderen",
    edit: "Bewerken",
    back: "Niet opslaan",
    saveAndBack: "Opslaan en terug",
    // itemValueEdit: "Zichtbaar als",
    editChoices: "Keuzes bewerken",
    showChoices: "Toon keuzes",
    move: "Verplaats",
    empty: "<leeg>",
    // notEmpty: "<aanpassen waardes>",
    fastEntry: "Snelle toegang",
    formEntry: "Toegangsformulier",
    testService: "Testen service",
    itemSelectorEmpty: "Selecteer het element",
    conditionActionEmpty: "Selecteer de actie",
    conditionSelectQuestion: Selecteer vraag...",
    conditionSelectPage: "Selecteer pagina...",
    conditionSelectPanel: "Selecteer panel...",
    conditionValueQuestionTitle: "Selecteer of voer een waarde in",
    // conditionHelp:
    //   "Voer een boolean uitdrukking in. Deze moet waar teruggeven op de vraag/pagina zichtbaar te houden. Bijvoorbeeld: {vraag1} = 'waarde1' of ({vraag2} * {vraag4}  > 20 and {vraag3} < 5)",
    expressionHelp:
      "Voer een uitdrukking in. Gebruik accolades om toegang te krijgen tot de vraag waarden: '{vraag1} + {vraag2}', '({prijs}*{aantal}) * (100 - {korting})'",
    aceEditorHelp: "Selecteer ctrl+spatie om een expressie hint te tonen",
    aceEditorRowTitle: "Huidige rij",
    aceEditorPanelTitle: "Huidig panel",
    showMore: "Selecteer de documentatie voor gedetailleerde uitleg.",
    // conditionShowMoreUrl:
    //   "https://surveyjs.io/Documentation/LibraryParameter?id=Question&parameter=visibleIf",
    assistantTitle: "Beschikbare vragen:",
    cellsEmptyRowsColumns: "Er moet minimaal één kolom of rij aanwezig zijn.",

    propertyIsEmpty: "Vul een waarde in",
    propertyNameIsNotUnique: "Vul een unieke naam in",
    listIsEmpty: "Voeg een nieuw item toe",
    expressionIsEmpty: "Deze uitdrukking is leeg",
    value: "Waarde",
    text: "Tekst", 
    rowid: "Rij ID", 
    imageLink: "Link naar afbeelding", 
    columnEdit: "Aanpassen kolom: {0}", 
    itemEdit: "Aanpassen item: {0}",

    url: "URL",
    path: "Path", 
    valueName: "Waarde naam",
    titleName: "Naam titel",
    titlePlaceholder: "Voeg titel hier in",
    surveyTitlePlaceholder: "Voeg vragenlijst titel hier in",
    pageTitlePlaceholder: "voeg naam paginatitel hier in", 
    descriptionPlaceholder: "Omschrijving invoeren", 
    surveyDescriptionPlaceholder: "Plaats hier de omschrijving van uw vragenlijst",
    pageDescriptionPlaceholder: "Toevoegen pagina omschrijving",

    hasOther: "Bevat een ander item",
    otherText: "Tekst ander item",
    hasNone: "Bevat geen item",
    noneText: "Geen item tekst",
    hasSelectAll: "Alle items geselecteerd",
    selectAllText: "Selecteer alle itemtekst",
    choicesMin: "Minimale waarde voor automatisch gegenereerde items",
    choicesMax: "Maximale waarde voor automatisch gegenereerde items",
    choicesStep: "Het verschil tussen automatisch gegenereerde items",
    name: "Naam",
    title: "Titel",
    cellType: "Celtype",
    colCount: "Kolom aantal",
    choicesOrder: "Selecteer keuze volgorde",
    visible: "Is zichtbaar?",
    isRequired: "Is verplicht",
    isAllRowRequired: "Alle rijen verplicht beantwoorden",
    requiredErrorText: "Verplichte fout tekst",
    startWithNewLine: "Starten met nieuwe regel?",
    rows: "Totaal aantal rijen",
    cols: "Totaal aantal Kolommen",
    placeHolder: "Input plaatshouder",
    showPreview: Is voorbeeld afbeelding zichtbaar?",
    storeDataAsText: "Bestand inhoud opslaan in JSON resultaat, in tekst",
    maxSize: "Maximale bestandsgrootte in bytes",
    imageHeight: "Hoogte Afbeelding",
    imageWidth: "Breedte afbeelding",
    rowCount: "Row count",
    columnLayout: "Kolom Layout",
    addRowLocation: "Toevoegen locatie rijknop",
    addRowText: "Teovoegen regeltekst",
    removeRowText: "Verwijder Tekst rij knop",
    rateMin: "Minimaal tarief",
    rateMax: "Maximaal tarief",
    rateStep: "Tarief stap",
    minRateDescription: "Omschrijving minimaal tarief",
    maxRateDescription: "Omschrijving maximaal tarief",
    inputType: "Invoer Type",
    optionsCaption: "Opties onderschrift",
    defaultValue: "Standaardwaarde",
    cellsDefaultRow: "Standaard cell tekst",

    surveyEditorTitle: "Aanpassen vragenlijstinstellingen",
    qEditorTitle: "Aanpassen: {0}", 

    maxLength: "Maximale lengte",

    buildExpression: "Ontwikkelen"
    editExpression: "Aanpassen", 
    and: "En", 
    or: "Of",
    remove: "Verwijder",
    addCondition: "Conditie toevoegen",

    //survey
    showTitle: "Titel wel/niet zichtbaar maken",
    locale: "Standaardtaal",
    simulator: "Kies apparaat",
    landscapeOrientation: "Liggend", 
    mode: "Modus alleen lezen/aanpasbaar",
    clearInvisibleValues: "Opschonen onzichtbare waardes",
    cookieName: "Naam Cookies (ter voorkoming dat dezelfde vragenlijst tweemaal wordt uitgevoerd op de zelfde machine)",
    sendResultOnPageNext: "Resultaten vragenlijst naar volgende pagina sturen",
    storeOthersAsComment: "Plaats andere waardes in apparte velden",
    showPageTitles: "Pagina titels tonen",
    showPageNumbers: "Pagina nummers tonen",
    pagePrevText: "Titel knop 'Vorige pagina'",
    pageNextText: "Titel knop 'Volgende pagina'",
    completeText: "Titel knop 'Voltooien'", 
    startSurveyText: "Titel knop 'Start'", 
    showNavigationButtons: "Toon navigatie knoppen (standaard navigatie)",
    showPrevButton: "Toon knop 'vorige' (gebruiker mag terug naar vorige pagina)",
    firstPageIsStarted: "De eerste pagina van de vragenlijst is een startpagina",
    showCompletedPage: "Toon de afgeronde pagina aan het einde (afgerondeHTML)",
    goNextPageAutomatic:
      "Automatisch naar de volgende pagina, na het beantwoorden van alle vragen",
    showProgressBar: "Voortgangsindicator zichtbaar maken",
    questionTitleLocation: "Titelvraag locatie",
    requiredText: "De vraaq verwacht symbolen.",
    questionStartIndex: "Vraag start index(1, 2 of 'A', 'a')",
    showQuestionNumbers: "Toon vraagnummers",
    questionTitleTemplate:
      "Vraag titel sjabloon, standaard is: is: '{nee}. {nodig zijn} {titel}'",
    questionErrorLocation: "Locatie foutmelding vragen",
    focusFirstQuestionAutomatic: "Zet de focus op de eerste vraag bij het veranderen van pagina",
    questionsOrder: "Elementen volgorde op de pagina",
    maxTimeToFinish: "Maximale tijd voor het invullen van de vragenlijst",
    maxTimeToFinishPage: "Maximale tijd voor het invullen van een pagina in de vragenlijst",
    showTimerPanel: "Toon timer",
    showTimerPanelMode: "Toon timer modus",
    renderMode: "Render modus",
    allowAddPanel: "Toevoegen paneel toegestaan",
    allowRemovePanel: "Verwijderen paneel toegestaan",
    panelAddText: "Toevoegen paneel tekst",
    panelRemoveText: "Verwijderen paneel tekst",
    isSinglePage: "Laat alle elementen op 1 pagina zien",
    html: "Html",
    expression: "Uitdrukking",

    minValue: "Minimale waarde",
    maxValue: "Maximale waarde",
    minLength: "Minimale lengte",
    allowDigits: "Cijfers toestaan",
    minCount: "Minimaal aantal",
    maxCount: "Maximaal aantal",
    regex: "Reguliere expressie",

    totalText: "Totale tekst",
    totalType: "Totale typering",
    totalExpression: "Totale uitdrukking",
    totalDisplayStyle: "Totale weergave stijl",
    totalCurrency: "Totale valuta",
    totalFormat: "Totaal formaat",

    // Header  adorner
    logoPosition: "Positie logo",
    addLogo: "Toevoegen logo...",
    changeLogo: "Aanpassen logo...",
    logoPositions: {
      none: "Verwijder logo",
      left: "Links",
      right: "Rechts",
      top: "Bovenaan",
      bottom: "Onderaan",
    },

    tabs: {
      general: "Algemeen",
      fileOptions: "Opties",
      html: "html editor",
      columns: "Kolommen",
      rows: "Rijen",
      choices: "Keuzes",
      items: "Items",
      visibleIf: "Zichtbaar als",
      enableIf: "Aanzetten als",
      requiredIf: "Verplicht als",
      rateValues: "Tariefwaardes",
      choicesByUrl: "Internetkeuzes",
      matrixChoices: "Standaard keuzes",
      multipleTextItems: "Tekst invoer",
      numbering: "Nummering",
      validators: "Validatoren",
      navigation: "Navigatie",
      question: "Vraag",
      completedHtml: "Voltooide html",
      completedHtmlOnCondition: "Voorwaarden voltooide html",
      loadingHtml: "Laden html",
      timer: "Timer",
      calculatedValues: "Berekende waardes",
      triggers: "Triggers",
      templateTitle: "Sjabloon titel",
      totals: "Totalen",
      logic: "Logica",
      layout: "Layout",
      data: "Data",
      validation:  "Validatie",
      cells: "Cellen",
      showOnCompleted: "Toon na voltooiing",
      logo: "Logo in vragenlijst titel",
      others: "Andere",
    },
    editProperty:  "Aanpassen eigenschap '{0}'",
    items: "Items: {0} ]",

    enterNewValue: , "Vul de waarde in.",
    noquestions: "Vragenlijst bevat geen vragen",
    createtrigger: Maak een trigger aan",
    keyboardAdornerTip: 
	  "Druk op enter om aan te passen, druk op delete om te verwijderen, klik op control en pijl omhoog of omlaag om item te verplaatsen",
    triggerOn: "Aan",
    triggerMakePagesVisible: "Pagina's zichtbaar maken",
    triggerMakeQuestionsVisible: "Onderdelen zichtbaar maken",
    triggerCompleteText: "Vragenlijst afronden wanneer deze is ingevuld",
    triggerNotSet: "De trigger is niet ingesteld",
    triggerRunIf: "Uitvoeren als",
    triggerSetToName: "Verander de waarde van: ",
    triggerFromName: "kopieer de waarde van: ",
    triggerRunExpression: "Uitvoeren expressie: ",
    triggerSetValue: "Naar",
    triggerGotoName: , "Ga naar vraag: ",
    triggerIsVariable: "Plaats de variabele niet in de vragenlijst resultaten",
    triggerRunExpressionEmpty: "Vul een geldige expressie in",
  },
  //Property values
  pv: {
    true: "waar",
    false: "Fout",
    inherit: "Overerven",
    show: "tonen",
    hide: "verbergen",
    default: "standaard",
    initial: "initieel",
    random: "willekeurig",
    collapsed: "ingepklapt",
    expanded: "uitgeklapt",
    none: "Geen",
    asc: "aflopend",
    desc: "oplopend",
    indeterminate: "tussenkomen",
    decimal: "decimaal",
    currency: "valuta",
    percent: "procent",
    firstExpanded: "eerst uitgeklapte",
    off: "uit",
    onPanel: "aan paneel" ,
    onSurvey: "aan vragenlijst",
    list: "lijst",
    progressTop: "vooruitgang bovenkant",
    progressBottom: "voortuitgang onderkant",
    progressTopBottom: "vooruitgang boven en onderkant",
    horizontal: "horizontaal",
    vertical: "verticaal",
    top: "bovenkant",
    bottom: "onderkant",
    topBottom: "boven en onderkant",
    both: "beiden",
    left: "links",
    color: "kleur",
    date: "datum",
    datetime: "datumtijd" ,
    "datetime-local": "locale datum/tijd",
    email: "email", 
    month: "maand",
    number: "nummer",
    password: "wachtwoord",
    range: "afstand",
    tel: "telefoon",
    text: "tekst",
    time: "tijd",
    url: "url",
    week: "week",
    hidden: "verborgen",
    on: "aan",
    onPage: "op pagina",
    edit: "bewerken",
    display: "display",
    onComplete: "na completering",
    onHidden: "na verbergen",
    all: "Allen",
    page: "pagina",
    survey: "vragenlijst,
    onNextPage: "na volgende pagina",
    onValueChanged: "wanneer waarde veranderd",
  },
  //Operators
  op: {
    empty: "is leeg",
    notempty: "is niet leeg", 
    equal: "gelijk aan",
    notequal: "ongelijk aan",
    contains: "bevat",
    notcontains: "bevat niet",
    anyof: "één van",
    allof: "allemaal van",
    greater: "groter",
    less: "kleiner",
    greaterorequal: "groter of gelijk aan",
    lessorequal: "kleiner of gelijk aan",
  },
  //Embed window
  ew: {
    angular: "Gebruik Angular versie",
    jquery: "Gebruik jQuary versie",
    knockout: "Gebruik Knockout versie",
    react: "Gebruik React versie",
    vue: "Gebruik Vue versie",
    bootstrap: "Voor bootstrap framework",
    standard: "Geen bootstrap",
    showOnPage: "Laat vragenlijst op een pagina zien",
    showInWindow: "Laat vragenlijst in een venster zien",
    loadFromServer: "Laad vragenlijst JSON van server",
    titleScript: "Scripts en stijlen",
    titleHtml: "HTML", 
    titleJavaScript: "JavaScript",
  },
  //Test Survey
  ts: {
    selectPage: "Selecteer pagina om te testen:",
    showInvisibleElements: "Laat onzichtbare onderdelen zien",
  },
  validators: {
    answercountvalidator: "aantal antwoorden"
    emailvalidator: "email",
    expressionvalidator: "Expressie",
    numericvalidator: "numeriek",
    regexvalidator: "regex",
    textvalidator: "tekst",
  },
  triggers: {
    completetrigger: "vragenlijst voltooïen",
    setvaluetrigger: "stel waarde in",
    copyvaluetrigger: "kopieer waarde",
    skiptrigger: "Ga door naar vraag",
    runexpressiontrigger: "Uitvoeren expressie",
    visibletrigger: "Verander zichtbaarheid (vervalt binnenkort)",
  },
  //Properties
  p: {
    name: "Naam",
    title: {
      name: "titel",
      title: "Laat leeg als het hetzelfde is als 'Naam'" ,
    },

    navigationButtonsVisibility: "navigatieknopzichtbaarheid",
    questionsOrder: "vraagVolgorde",
    maxTimeToFinish: "maxAfrondTijd",

    visible: "zichtbaar",
    visibleIf: "zichtbaarAls",
    questionTitleLocation: "vraagTitelLocatie",
    description: "beschrijving",
    state: "status",
    isRequired: "isVerplicht",
    requiredIf: "verplichtAls",
    indent: "inspringen",
    requiredErrorText: "verplichteErrorText",
    startWithNewLine: "startOpNieuweRegel",
    innerIndent: "innerlijkInspringen",
    page: "pagina",

    width: "breedte",

    commentText: "kommentaarTekst",
    valueName: "waardeNaam",
    enableIf: "toegankelijkAls",
    defaultValue: "standaardWaarde", 
    correctAnswer: "correctAntwoord",
    readOnly: "alleenLezen",
    validators:"validators",
    titleLocation: "titelLocatie",

    hasComment: "heeftReactie",
    hasOther: "heeftAnders",
    choices: "keuzes",
    choicesOrder: "keuzeVolgorde",
    choicesByUrl: "keuzeVolgensUrl",
    otherText: "overigeTekst",
    otherErrorText: "overigeFoutTekst",
    storeOthersAsComment: "bewaarAndereAlsReactie",

    label: "label",
    showTitle:  "tonenTitel",
    valueTrue: "waardeWaar",
    valueFalse: "waardeNietWaar",

    cols: "kolommen",
    rows: "rijen",
    placeHolder: "placeHolder",

    optionsCaption: "optieVastleggen",
 
    expression: "expressie",
    format: "format",
    displayStyle: "displayStijl",
    currency: "valuta",
    useGrouping: "gebruikGroepering",

    showPreview: "toonVoorbeeld",
    allowMultiple: "meerdereToegestaan",
    imageHeight: "afbeeldingHoogte",
    imageWidth: "afbeeldingBreedte",
    storeDataAsText:  "dataOpslaanAlsTekst",
    maxSize: "maxGrote",

    html: "html", 

    columns: "kolommen", 
    cells: "cellen",
    isAllRowRequired: "isTotaleRijVerplicht", 

    horizontalScroll:  "horizontaleScroll",
    cellType: "cellType",
    columnsLayout: "kolomlayout",
    columnColCount: "aantalKolommen", 
    columnMinWidth: "minBreedteKolom", 

    rowCount: "AantalRijen",
    minRowCount: "minimaleAantalRijen", 
    maxRowCount: "maximaleAantalRijen", 
    keyName: "sleutelNaam", 
    keyDuplicationError: "foutDuplikaatSleutel", 
    confirmDelete: "BevestigVerwijderen", 
    confirmDeleteText: "bevestigVerwijderenTekst", 
    addRowLocation: "toevoegenRijLocatie", 
    addRowText: "tekstToevoegenRij",
    removeRowText: "tekstVerwijderenRij",

    items: "items", 
    itemSize: "itemGrootte", 
    colCount: "aantalKolommen",

    templateTitle: "titelSjabloon", 
    templateDescription: "SjabloonBeschrijving", 
    allowAddPanel: "toevoegenPaneelToegestaan", 
    allowRemovePanel: "verwijderenPaneelToegestaan", 
    panelCount: "aantalPanels", 
    minPanelCount: "MinPaneelAantal", 
    maxPanelCount: "MaxPaneelAantal", 
    panelsState: "paneelStatus", 
    panelAddText: "toevoegenPaneelTekst",
    panelRemoveText: "verwijderenPaneelTekst", 
    panelPrevText: "vorigePaneelTekst", 
    panelNextText: "volgendePaneelTekst",
    showQuestionNumbers: "tonenVraagnummers",
    showRangeInProgress: "TonenVoortgangInBehandeling",
    renderMode: "renderMode",
    templateTitleLocation: "locatieSjabloonTitel", 

    rateValues: "tariefWaarden", 
    rateMin: "minTarief",
    rateMax: "maxTarief", 
    rateStep: "tariefStap", 
    minRateDescription: "minTariefOmschrijving",  
    maxRateDescription: "maxTariefOmschrijving",

    inputType: "inputType",

    size: "grootte", 

    locale: "lokaal", 
    focusFirstQuestionAutomatic: "automatischSelecterenEersteVraag", 
    completedHtml: "voltooideHtml", 
    completedBeforeHtml: "voltooidVoorHtml", 
    loadingHtml: "HtmlLaden",
    triggers: "triggers", 
    cookieName: "cookieNaam", 
    sendResultOnPageNext: "stuurReslultaatNaVolgendePagina",  
    showNavigationButtons: "toonNavigatieKnoppen",
    showPrevButton: "toonVorigeKnop", 
    showPageTitles: "toonPaginaTitel", 
    showCompletedPage: "toonVoltooidePagina", 
    showPageNumbers: "toonPaginanummers",
    questionErrorLocation: "vragenFoutLocatie", 
    showProgressBar: "toonVoortgangsIndicator",
    mode: "mode",
    goNextPageAutomatic: "AutomatischNaarVolgendePagina",
    checkErrorsMode: "controleFoutModus", 
    clearInvisibleValues: "opschonenOnzichtbarewaarden",
    startSurveyText: "startVragenlijstTekst", 
    pagePrevText: "vorigePaginaTekst",
    pageNextText: "volgendePaginaTekst",
    completeText: "voltooideTekst",
    requiredText: "verplichteTekst",
    questionStartIndex: "startIndexVraag", 
    questionTitleTemplate: "vraagtTitelSjabloon", 
    firstPageIsStarted: "eerstePaginaIsGestart", 
    isSinglePage: "IsEnigepagina", 
    maxTimeToFinishPage: "maxTijdOmPaginaTeVoltooien",
    showTimerPanel: "tonenPanelTimer", 
    showTimerPanelMode: "tonenTimerPanelMode",

    defaultPanelValue: "standaardWaardePanel", 
    defaultRowValue: "standaardRijWaarde",
    hasNone: "heeftGeen", 
    noneText: "geenTekst", 

    text: "tekst", 
  },
};
//Uncomment this line on creating a translation file. You should replace "en" and enStrings with your locale ("fr", "de" and so on) and your variable.
editorLocalization.locales["nl"] = nlStrings;