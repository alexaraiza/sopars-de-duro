export type Recipe = {
  id: string;
  createdAt: string;
  title: string;
  intro: ({ h3: string } | { h4: string } | { ol: string[] } | { p: string })[];
  cost: string;
  unitCost: number;
  ingredients: ({ h3: string } | { p: string } | { ul: string[] })[];
  prep: ({ h3: string } | { h4: string } | { ol: string[] } | { p: string })[];
  variants?: ({ h3: string } | { p: string } | { ul: string[] })[];
  extras?: ({ h2: string } | { h3: string } | { p: string } | { ul: string[] })[];
  categories: string[];
  tags: string[];
};

export default [
  {
    id: 'cigrons-amb-llagostins',
    createdAt: '2020-11-28T21:00:52+02:00',
    title: 'Cigrons amb llagostins',
    intro: [
      {
        p: 'En aquest blog no sovintegen gaire les receptes amb crustacis. La premissa de 3 euros per ració limita aquesta matèria fresca a les galeres -no especialment amables de pelar-, o altres bitxos en quantitats gairebé simbòliques. Avui, però, ens saltarem la norma. Ja posats, obrirem també una ampolla de vi blanc ben fresc i ens prepararem una tatin o unes taronges amb mel i canyella per postres. El que més us agradi! Al cap i a la fi, l’any 2020 no ens ha deixat grans alegries. Un dels petits plaers que podem seguir practicant, tancats com estem a casa i pràcticament sense vida social, és el de la cuina. Aprofitem-ho mentre puguem gaudir del gust i de l’olfacte. I cuidem-nos molt!',
      },
    ],
    cost: 'Cost aproximat per ració: 3,25 €. En surten 4 racions.',
    unitCost: 3.25,
    ingredients: [
      {
        ul: [
          '800 g de cigrons ja cuits',
          '750 g de llagostins frescos',
          '350 g de tomàquets pera',
          '1 ceba',
          '1/2 pebrot vermell',
          '1/2 pebrot verd',
          '3 grans d’all',
          '2 o 3 bitxos petits secs (peperoncini o Cayena)',
          '100 ml de conyac',
          '1 fulla de llorer',
          '1 cullerada de pebre vermell fumat',
          'Sal',
          'Oli d’oliva verge extra',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Pelem els llagostins i reservem la carn a la nevera.',
          'Sofregim les pells i els caps en una paella amb un raig d’oli. Amb una cullera de fusta, els aixafem per extraure’n tot el sabor.',
          'Quan ja tinguin un color vermellós i es comencin a torrar, ruixem pells i caps amb el conyac i inclinem una mica la paella perquè prengui flama (en cas que cuineu amb gas; si no, preneu-li foc amb un llumí). Compte amb no cremar-vos o fer malbé l’extractor!',
          'Quan s’apagui la flama, cobrim amb aigua, tapem i deixem que bulli a foc baix durant uns 20 minuts. Això farà un suquet boníssim.',
          'Mentrestant, piquem la ceba i els pebrots a daus molt petits, d’uns 5-6 mm. Tallem també l’all molt fi i trossegem els peperoncini.',
          'Posem totes les verdures en una cassola baixa, preferiblement de ferro o terrissa, junt amb una fulla de llorer, i les comencem a sofregir en oli d’oliva, a foc baix.',
          'Pelem el tomàquet i el tallem a daus, eliminant les llavors.',
          'Quan la ceba transparenti, afegim a la cassola el pebre vermell fumat i el tomàquet, i deixem que es cogui tot uns 15 minuts més.',
          'Aleshores hi tirem els cigrons. Fem una remenada, cobrim amb el fumet dels llagostins i tapem la cassola.',
          'Deixem que faci xup-xup deu minuts més. Tastem i rectifiquem de sal, si és necessari.',
          'Passat aquest temps, incorporem els llagostins que teníem a la nevera i apaguem el foc. Els llagostins es couran amb l’escalfor de la cassola, i ja es podran servir en 3-4 minuts.',
        ],
      },
    ],
    variants: [
      {
        p: 'Estic segura que unes mongetes blanques, en substitució dels cigrons, farien un molt bon paper en aquest guisat. Jo bullo sempre els llegums a casa, el què em permet aprofitar part de l’aigua de cocció per allargar els suquets, però, si no teniu prou temps o ganes, compreu-los ja cuits al mercat, o (última opció) en pot.<br>També podeu fer servir llagostins congelats. Assegureu-vos només de descongelar-los correctament, deixant-los primer una estona en aigua fresca i després en un escorredor el temps necessari fins que es puguin manipular i pelar com els frescos. No els compreu pelats, però. Això us impediria fer el suquet que dona gràcia al plat.',
      },
    ],
    categories: ['plat-unic', 'primers', 'segons'],
    tags: ['cigrons', 'llagostins', 'suquet', 'tomaquet'],
  },
  {
    id: 'panada-de-porros-i-formatge',
    createdAt: '2020-08-16T20:42:55+02:00',
    title: 'Panada de porros i formatge',
    intro: [
      {
        p: 'Combinar ingredients diversos dins d’una crosta de pasta cuita al forn és molt bona idea. No és casualitat que se’n trobin exemples a la cuina de molts països. Ja siguin salades, com la quiche Lorraine dels francesos o l’steack and kidney pie dels anglesos, o dolces, com el pumpkin pie dels americans o la crostata italiana, la diversitat de guarnicions i de pastes (brisa o trencada, de full, brick…) fa que aquest tipus de preparació sigui una aposta segura, de les que agraden a tothom. Ideal per la carmanyola, a més! El d’avui és un híbrid entre crostada i quiche, alleugerit per la quantitat de verdura del farciment, i simplificat pel fet d’utilitzar pasta de full del súper. (Si teniu 29 °C a l’interior de casa, com és el cas, ni us plantegeu l’opció de fer-la vosaltres mateixos). Això sí, ha triomfat! Us animeu a provar-la?',
      },
    ],
    cost: 'Cost aproximat: 1,40 € per ració (en surten 6).',
    unitCost: 1.4,
    ingredients: [
      {
        ul: [
          '1 rotlle de pasta de full (del supermercat, elaborada amb mantega)',
          '4 porros',
          '2 cebes tendres',
          '75 g de mantega',
          '3 ous',
          '200 ml de llet sencera',
          '100 g de formatge Cheddar',
          '1 cullerada sopera de vinagre',
          '1 cullerada sopera de sucre',
          'Sal, pebre negre, nou moscada',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Descartem la part verda dels porros, els tallem longitudinalment per poder-los netejar a fons i després a rodanxes d’un dit de gruix.',
          'Els comencem a fer suar en una cassola amb la mantega i una mica de sal.',
          'Tallem també la ceba a juliana i l’afegim a la cassola.',
          'Deixem coure a foc baix durant uns 40 minuts, fins que estigui tot ben amorosit.',
          'Finalment afegim el vinagre i el sucre i deixem uns 10 min destapat, per tal que les verdures perdin força humitat, però sense arribar a ressecar-se.',
          'Apaguem el foc i, mentre la verdura es refreda una mica, engeguem el forn a 200 °C.',
          'Ratllem els 100 g de formatge.',
          'Estenem la pasta de full en un motlle (no cal untar-lo, perquè la massa té mantega i no s’enganxa). El meu era rectangular, de 20 x 30 cm., però també podria ser rodó. En qualsevol cas, cal tenir en compte que la pasta s’ha d’enfilar uns 3 cm. per les parets del motlle. Per evitar que s’infli massa, la punxem amb una forquilla.',
          'Escampem la meitat del formatge sobre la pasta de full.',
          'Hi aboquem aleshores la verdura i cobrim amb la resta del formatge.',
          'Batem els 3 ous amb la llet i la nou moscada i tirem la barreja sobre el farcit.',
          'Abaixem el forn a 190 °C i coem la crostada a la part baixa, sense ventilador, durant 35 minuts. La deixem refredar dins el forn durant uns 10 minuts més i finalment a fora, fins que el farcit estigui ben ferm i es pugui tallar sense desfer-se. Ja podem portar-la a taula!',
        ],
      },
    ],
    variants: [
      {
        p: 'No cal dir que el farciment pot variar segons el vostre gust. Proveu a substituir la ceba tendra per endívies i el formatge per un de més potent, com el Gorgonzola, o el Roquefort. La combinació no us deixarà indiferents! Igualment encertada pot ser la mescla de porros, espinacs i ricotta. Les possibilitats són infinites, exploreu-les totes!',
      },
    ],
    categories: ['berenar', 'carmanyola', 'plat-unic', 'primers'],
    tags: ['ceba-tendra', 'formatge', 'llet', 'ous', 'porro'],
  },
  {
    id: 'sopa-de-melo',
    createdAt: '2019-08-11T20:52:01+02:00',
    title: 'Sopa de meló',
    intro: [
      {
        p: 'Durant l’estiu, i quan les úniques onades que ens abracen són les de calor, només volem menjar amanides, fruita, gelat… Potser algun peix a la brasa o marisc amb gust de mar, i poca cosa més. Perdem tant la gana com les ganes de cuinar, i el sol pensament d’acostar-nos als fogons ja ens fa regalimar la suor front avall. No patiu per la paraula “sopa” que encapçala aquesta recepta. No us convido a fer escudella, sinó un dels plats més refrescants i que serà més recurrent a a vostra cuina quan el termòmetre es dispari per damunt dels 30 °C.',
      },
    ],
    cost: 'Cost aproximat per ració: 0,95 €.',
    unitCost: 0.95,
    ingredients: [
      {
        ul: [
          '1 meló Gàl·lia (el rodonet de pell groga i polpa verda)',
          '1 cogombre holandès',
          '1 ceba dolça',
          '1 cullerada de vinagre de Xerès',
          '100 ml d’oli d’oliva verge extra',
          '2 llesques de pernil de Terol',
          'Un manat de menta fresca',
          'Sal',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Trossegem el meló, eliminant la pell i les llavors.',
          'Pelem també el cogombre i el tallem a trossos.',
          'Piquem la ceba dolça.',
          'Posem aquests ingredients en una batedora de vas (o en un recipient adequat, si fem servir una batedora de peu). Salem al gust, afegim el vinagre i ho triturem tot ben fi.',
          'Baixem la velocitat de la batedora i hi anem afegint l’oli lentament, perquè s’emulsioni.',
          'Posem a la nevera al menys 4 hores.',
          'Arribat el moment de consumir la sopa, tallem el pernil a tires i el passem per una paella sense oli, per fer-ne encenalls.',
          'Decorem el plat amb el pernil i unes fulletes de menta fresca o conservades en oli.',
        ],
      },
    ],
    variants: [
      {
        p: 'El pernil aporta un contrast salat i una textura cruixent molt interessant a la sopa de meló. Tanmateix, els vegetarians el poden substituir per xips de verdures o ceba fregida. Qui vulgui fer el plat encara més refrescant, hi pot afegir tranquil·lament un parell de glaçons. I qui, com jo, apreciï el bon oli, que n’hi afegeixi un raig.',
      },
    ],
    categories: ['primers'],
    tags: ['ceba', 'cogombre', 'melo', 'menta'],
  },
  {
    id: 'galetes-negres-de-xocolata-negra',
    createdAt: '2019-07-09T21:04:28+02:00',
    title: 'Galetes negres de xocolata negra',
    intro: [
      {
        p: 'Les galetes de xocolata s’acostumen a associar amb berenars infantils, amb marques industrials com: Príncipe, Oreo, Chips Ahoy… i amb un excés de sucre i greixos dels quals preferim no conèixer la procedència. Fem bé d’abandonar-les, aquestes galetes. Per sempre més. Tanmateix, no cal renunciar al plaer que unes BONES galetes de xocolata ens poden proporcionar. Acompanyades d’un bon cafè o (no em mireu amb gest estrany) d’una <a href="https://cervesamontseny.cat/cervesa/montseny-lupulus/"><i>blonde ale</i></a>; soles o untades amb mascarpone, les galetes negres són un petit vici que sabrem apreciar només a una edat madura. Com les coses bones, que es fan esperar.',
      },
    ],
    cost: 'Cost aproximat per una ració de 4 galetes: 0,60 € (en surten unes 30).',
    unitCost: 0.6,
    ingredients: [
      {
        ul: [
          '150 g de mantega tallada a daus i a temperatura ambient',
          '100 g de xocolata negra extrafina, d’entre 55 i 70 % de cacau',
          '130 g de sucre',
          '70 g de melassa',
          '215 g de farina corrent',
          '45 g de cacau pur en pols',
          '1/2 culleradeta de sal',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Batem la mantega amb una batedora de barnilles fins que tingui consistència de pomada.',
          'Hi afegim el sucre i la melassa i seguim batent uns 5 minuts a velocitat mitja.',
          'Tamisem la farina, el cacau i la sal i els incorporem a la mescla anterior, remenant fins que s’integrin.',
          'Piquem la rajola de xocolata amb un ganivet fins fer-ne trossets irregulars d’uns 3 o 4 mm. També podríem fer-ho amb una picadora elèctrica, però polsant a cops breus i vigilant per no reduir-la a pols.',
          'Afegim la xocolata a la massa, remenant amb energia per repartir-la bé.',
          'Aboquem la barreja al marbre i amb les mans formem un cilindre d’uns 5 cm. de diàmetre.',
          'L’emboliquem amb paper film i el posem a la nevera perquè es refredi. (Com que la massa és tova, pot ser que el cilindre s’aplani una mica. Per corregir això, el podem treure de la nevera al cap d’uns 20 minuts, quan s’hagi endurit una mica, i fer-lo rodolar novament sobre el marbre).',
          'La massa ha de reposar fins que estigui completament dura. Podria quedar-se a la nevera fins i tot una setmana, si fes falta.',
          'Arribat el moment de coure les galetes, escalfem el forn a 170 °C. Desemboliquem el cilindre de massa de galeta i en tallem rodanxes d’uns 6 o 7 mm. Procurem en tot cas que siguin iguals.',
          'Col·loquem unes 10 o 12 galetes a la plata, prou separades entre sí. La resta les reservem a la nevera.',
          'Coem les galetes durant 17 minuts amb calor a dalt i a baix i sense ventilador. Quan les traurem del forn encara seran una mica toves, però les deixarem reposar a la mateixa plata uns 17 minuts més i s’acabaran de fer. (Anirà bé tenir una segona plata per coure la següent tanda de galetes. Així aprofitem el temps i l’escalfor del forn).',
          'Quan ja hagin reposat, les podrem posar sobre una reixeta perquè es refredin del tot. Aleshores estaran llestes per menjar!',
        ],
      },
    ],
    variants: [
      {
        p: 'La melassa dona a aquestes galetes un toc entre acaramel·lat i amarg que casa molt bé amb la xocolata negra, però si no en teniu podeu emprar la mateixa quantitat de mel. El que no podeu substituir és el cacau pur en pols per productes solubles com el Cola Cao o similars (que són sobretot sucre amb una mínima part de cacau). El secret d’aquestes galetes és utilitzar ingredients de qualitat, mantega (Kerrygold) inclosa.',
      },
    ],
    categories: ['berenar', 'postres'],
    tags: ['cacau', 'farina', 'mantega', 'xocolata'],
  },
  {
    id: 'flam-de-taronja',
    createdAt: '2019-03-13T19:09:40+02:00',
    title: 'Flam de taronja',
    intro: [
      {
        p: 'Per fer-nos estalviar temps i preocupacions, ens han convençut que les postres industrials són la panacea. “Tu vas a la secció de refrigerats, agafes un pack de quatre flams i, apa! No cal ni prendre’s la molèstia d’abocar-lo en un platet. A cullerades directament de l’envàs de plàstic!” I sense adonar-nos de la tristor d’aquesta escena, amb el temps hem anat oblidant el sabor dels flams d’ou cuits al bany maria, el seu tremolor tan sensual i aquella textura llustrosa, ferma i alhora flexible, com d’organisme unicel·lular. No us sembla que és hora de recuperar aquestes sensacions? Doncs la solució és ben fàcil: la propera vegada que aneu al súper deixeu els flams al seu prestatge; compreu taronges i una dotzena d’ous!',
      },
    ],
    cost: 'Cost aproximat per ració: 0,25 € (surten 10 flams).',
    unitCost: 0.25,
    ingredients: [
      {
        ul: [
          '150 g de sucre',
          '2 taronges',
          '8 ous',
          '250 ml de llet d’ametlles',
          '1 culleradeta d’aigua de tarongina',
          '1 pessic de sal',
        ],
      },
      {
        h3: 'Per al caramel:',
      },
      {
        ul: ['6 cullerades de sucre', '3 cullerades d’aigua'],
      },
    ],
    prep: [
      {
        ol: [
          'Comencem engegant el forn a 170 °C i posant una olla amb uns 2 litres d’aigua (de l’aixeta) a bullir.',
          'En primer lloc, ens ocupem del caramel. Per fer-lo, posem un cassó amb el sucre i l’aigua a foc baix, sacsejant-lo de tant en tant fins que el caramel agafi una tonalitat de color mel. Aleshores el retirem del foc i el repartim entre 10 flameres.',
          'Ratllem la pell de dues taronges amb un ratllador ultra fi i la barregem amb el sucre. Maseguem aquesta mescla amb els dits perquè es desprenguin els aromes continguts a la pell de la taronja (ja veureu, quina olor tan intensa!) i reservem.',
          'Tot seguit espremem les taronges. Ens hauria de sortir aproximadament 1/4 de litre de suc.',
          'Trenquem 4 ous i els afegim a la barreja de sucre i ratlladura de taronja. Separem els rovells i les clares dels 4 restants i hi afegim només els rovells (les clares poden servir per una truita o per una merenga).',
          'Batem aquesta barreja amb unes varetes mentre hi afegim: el suc de taronja, la llet d’ametlles, la culleradeta d’aigua de tarongina i el pessic de sal. Ens ha de quedar una mescla homogènia però no excessivament escumada.',
          'Aboquem aquest líquid a les flameres.',
          'Col·loquem les flameres en una plata fonda que vagi al forn (la de les lasanyes és ideal) i emplenem aquesta plata amb l’aigua que hem portat a ebullició. Hem de deixar un parell de centímetres sense cobrir, per evitar que l’aigua entri dins els motlles i faci malbé els flams.',
          'Cobrim les flameres amb un tros de paper d’alumini i posem la plata al forn, amb calor a dalt i a baix, durant 50 minuts.',
          'Acabada la cocció i apagat el forn, deixem refredar els flams fins que es puguin posar a la nevera. L’ideal és esperar a l’endemà per menjar-se’ls.',
        ],
      },
    ],
    variants: [
      {
        p: 'La llet d’ametlla es pot substituir per llet de xufa, de nous o de civada, sempre que no tinguin sucre afegit. No utilitzeu llet de vaca (ni de soja, que no té gaire bon gust). També podríeu substituir l’aigua de tarongina per Cointreau o un licor similar i, evidentment, fer la mateixa recepta amb mandarines. Si preferiu fer un flam ben gros en lloc de 10 d’individuals, augmenteu la cocció a 1 hora o 75 minuts, depenent de la forma del motlle.',
      },
      {
        h3: 'Us deixo també un parell de consells:',
      },
      {
        ul: [
          'Ratlleu la pell de les taronges de manera superficial amb un <a href="https://www.amazon.es/Microplane-Rallador-Inoxidable-Naranja-32-50x3-5x2-56/dp/B0024V60H0/ref=asc_df_B0024V60H0/?tag=googshopes-21&amp;linkCode=df0&amp;hvadid=54371037675&amp;hvpos=1o4&amp;hvnetw=g&amp;hvrand=17973429091532193228&amp;hvpone=&amp;hvptwo=&amp;hvqmt=&amp;hvdev=c&amp;hvdvcmdl=&amp;hvlocint=&amp;hvlocphy=9072454&amp;hvtargid=pla-83809821206&amp;psc=1">ratllador especial per a cítrics</a> de làmines super fines. Altrament, us trobareu en boca uns trossets de pell massa grossos, no precisament agradables. Si no disposeu d’un d’aquests ratlladors, podeu fer bullir la pell de la taronja (ben fina, sense la part blanca) en la llet d’ametlla i després deixar-la refredar i colar-la.',
          'Procureu batre els ous a baixa velocitat per evitar que s’incorpori un excès d’aire en la barreja. Si entrés molt aire, obtindríeu més volum de líquid, l’hauríeu de repartir en més flameres de les previstes i després us trobaríeu amb la desagradable sorpresa que els flams, un cop cuits, s’haurien desinflat i baixat molt de nivell.',
        ],
      },
    ],
    categories: ['postres'],
    tags: ['flam', 'ou', 'sucre', 'taronja'],
  },
  {
    id: 'musclos-picants',
    createdAt: '2018-08-15T18:24:30+02:00',
    title: 'Musclos picants',
    intro: [
      {
        p: 'L’all, el gingebre i el bitxo es complementen tan bé junts com ho fan les tres potes d’un tamboret. Saltats alegrement en un wok, aquest trio desencadena tot un ventall d’aromes i aconsegueix que fins i tot el tofu es converteixi en l’ingredient més interessant del rebost. Imagineu-vos doncs què pot passar si en aquesta <i>jam</i><i> </i>afegim uns musclos frescos com a ingredient estrella. Aconseguirem un plat de gust potent, addictiu i amb uns tocs asiàtics que no deixarà ningú indiferent: un sopar no apte per a pusil·lànimes!',
      },
    ],
    cost: 'Cost aproximat per ració: 1,68 €.',
    unitCost: 1.68,
    ingredients: [
      {
        ul: [
          '2 kg de musclos',
          '2 cebes tendres',
          '2 grans d’all',
          '1 tros de gingebre de la mida d’una nou',
          '1 bitxo petit (o 2, allà vosaltres…)',
          '3 llimes',
          '50 ml de salsa de soja',
          '75 ml de vi blanc sec, o sake',
          '2 cullerades de sucre morè',
          '4 cullerades soperes d’oli de llavors',
          '1 cullerada sopera d’oli de sèsam',
          'Coriandre fresc al gust',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Rentem els musclos amb aigua freda. Els arrenquem les barbes i descartem els que estiguin trencats. Els escorrem i reservem a la nevera.',
          'Tallem les dues cebes en juliana, incloent la part més tendra de la tija.',
          'Espremem dues llimes. Barregem ell suc amb la salsa de soja, el vi blanc i el sucre. Ho remenem tot i reservem.',
          'Escalfem un wok o cassola gran amb els dos olis i posem a dins el gingebre ratllat i l’all picat ben fi.',
          'Hi afegim el bitxo tallat a rodanxes.',
          'Abans que l’all agafi color (menys d’un minut), hi afegim també la ceba i la fem coure uns 5 minuts.',
          'Aleshores hi aboquem la barreja de salsa de soja que havíem reservat.',
          'Quan arrenqui el bull, hi tirem els musclos i tapem el wok.',
          'Passats cinc minuts, tots els musclos s’hauran obert (descartem els que no ho hagin fet, si no).',
          'Els servim immediatament amb un quart de llima i un grapat de coriandre per sobre.',
        ],
      },
    ],
    variants: [
      {
        p: 'Com sempre, la quantitat d’all i de picant es pot ajustar al gust dels comensals. Si n’hi ha que no suporten el coriandre (perquè el coriandre, o agrada molt o es detesta…), podeu utilitzar julivert.',
      },
    ],
    categories: ['segons'],
    tags: ['all', 'bitxo', 'ceba-tendra', 'coriandre', 'gingebre', 'musclos'],
  },
  {
    id: 'hummus',
    createdAt: '2018-08-08T19:07:13+02:00',
    title: 'Hummus',
    intro: [
      {
        p: 'D’acord, ja sabem que hem de menjar llegums tres o quatre cops per setmana. Ens convenen i ens agraden. Però ara, en plena onada de calor, només de pensar en una <i>fabada</i> ja ens comença a regalimar la suor pel front. La millor solució per mantenir aquest grup d’aliments en els menús d’estiu són els empedrats, les amanides (de llenties, de cigrons…) o qualsevol altra preparació freda, com l’hummus que us proposo avui. Aquest plat és típic a tot l’Orient Mitjà i a la península Aràbiga (de fet, “hummus” vol dir simplement “cigrons” en àrab). Allà es serveix sovint amb una mica de julivert i sempre amb pa pita per sucar, però amb uns bastonets de pastanaga, api o carbassó, es convertirà en un <i>dip</i><i> </i>ben saludable i lleuger.',
      },
    ],
    cost: 'Cost aproximat per ració: 0,18 €.',
    unitCost: 0.18,
    ingredients: [
      {
        ul: [
          '400 g de cigrons cuits',
          '70 ml de l’aigua de la cocció dels cigrons',
          '50 ml d’oli d’oliva verge extra',
          'El suc de 1/2 llimona',
          '1 gra d’all',
          '1 cullerada sopera de tahini (sèsam torrat i triturat)',
          '1/2 cullerada de postres de comí molt',
          'Sal',
          'Pebre vermell per servir',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'La nit anterior posem els cigrons a estovar en aigua abundant.',
          'Passades al menys 12 hores descartem l’aigua del remull i posem els cigrons en una olla ràpida, amb aigua freda que els cobreixi un parell de dits. De moment, no hi posem sal.',
          'Els fem coure durant 25 minuts (si ho fem amb una olla convencional, durant una hora o una hora i mitja, depenent de la qualitat i el calibre dels cigrons).',
          'Posem 400 g de cigrons cuits i 70 ml de l’aigua de cocció en un got de batedora. La resta podem congelar-la o guardar-la a la nevera per altres preparacions.',
          'Hi afegim el suc de llimona, l’oli, el tahini, 1/2 cullerada de postres de sal i 1/2 cullerada de cafè de comí.',
          'Ho triturem tot ben fi.',
          'Servim amb un rajolí d’oli i un polsim de pebre vermell per sobre.',
        ],
      },
    ],
    variants: [
      {
        p: 'No es troben gaires variacions en la recepta original, però podeu provar el que fan alguns grecs, que és afegir un iogurt natural a la barreja d’ingredients.',
      },
    ],
    categories: ['primers'],
    tags: ['cigrons', 'sesam', 'tahini'],
  },
  {
    id: 'gemista',
    createdAt: '2018-07-15T19:52:00+02:00',
    title: 'Gemistà (γεμιστά)',
    intro: [
      {
        p: 'Vaig provar aquest plat per primer cop l’any 1983, en una casa familiar del barri de Kipseli, a Atenes. En aquell primer viatge vaig descobrir la cuina grega més genuïna i em vaig enamorar de les dolmades casolanes (amb fulla de vinya o de col), dels estofats, les amanides i els plats de cullera més rústics i contundents. Menjava pel carrer: souvlaki, koulouria, <a href="/spanakotiropita" target="_blank" rel="noopener">spanakotirópita</a>… feia els tradicionals aperitius amb ouzo i després m’entaulava per gaudir de plats autènticament <a href="https://fr.wikipedia.org/wiki/Kokore%C3%A7" target="_blank" rel="noopener"><i>gore</i></a> o dels dolços més <a href="https://en.wikipedia.org/wiki/Lokma" target="_blank" rel="noopener">almivarats</a>. Seguien, naturalment, unes èpiques migdiades. Ja des de llavors, les receptes gregues es van incorporar a la meva cuina, i un parell de quilos, a la meva silueta.',
      },
    ],
    cost: 'Cost aproximat per ració: 0,86 €.',
    unitCost: 0.86,
    ingredients: [
      {
        ul: [
          '4 pebrots (del color que vulgueu, però que siguin més aviat plans de la base)',
          '2 tomàquets grossos i ben ferms, tipus monterosa',
          '1 1/2 tassa d’arròs de gra rodó',
          '1 ceba tendra',
          '2 grans d’all',
          '50 g de panses de Corint',
          'Menta',
          'Julivert',
          'Oli d’oliva verge extra',
          'Sal',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Netegem les verdures i en tallem la part superior, que farà de tapadora. Buidem els pebrots, eliminant les parts més llenyoses de l’interior.',
          'Amb cura de no perforar-los, buidem també els tomàquets i en reservem la polpa i el suc. Ens anirà molt bé tenir un <a href="https://www.gadgetscuina.com/ca/buidador-doble-fruites-i-verdures-boles-25-30-mm-2316.1003" target="_blank" rel="noopener">buidador</a> o, si no, una cullereta de postres.',
          'Piquem la ceba tendra i l’all. Els sofregim lleugerament en una paella amb oli d’oliva i sal.',
          'Hi tirem l’arròs i remenem una mica. Passats un parell de minuts, hi incorporem la polpa dels tomàquets, la menta i el julivert.',
          'Finalment hi afegim les panses i apaguem el foc.',
          'Distribuïm aquesta barreja dins les hortalisses, sense prémer i vigilant de no emplenar-les del tot. Ha de quedar gairebé 1/4 part buida perquè l’arròs es pugui expandir.',
          'Col·loquem els pebrots i els tomàquets a la cassola de manera que es recolzin els uns amb els altres i no es puguin tombar. Els tapem amb el barret que havíem tallat prèviament.',
          'Barregem el suc del tomàquet amb 6 cullerades d’oli. Si els tomàquets no eren gaire sucosos, hi afegim unes cullerades d’aigua.',
          'Aboquem aquest líquid per damunt de les verdures, tapem l’olla i fem coure a foc baix durant 40 minuts.',
          'Revisem de tant en tant que no s’evapori el líquid, i n’hi afegim si és el cas. A dins de l’olla hi ha d’haver poc suc, justet per anar generant vapor i coure les hortalisses i l’arròs que contenen a dins.',
          'Quan veieu que la carn dels pebrots ja és força tendra i l’arròs ha augmentat de volum, apagueu el foc i deixeu reposar uns minuts.',
          'La gemistà es pot menjar immediatament o també consumir freda. Poseu-hi unes culleradetes del líquid de cocció per damunt i acompanyeu-la d’un vi blanc ben fresc. Καλή όρεξη!',
        ],
      },
    ],
    variants: [
      {
        p: 'És molt habitual trobar gemistà amb arròs i carn de corder picada. Es fa exactament igual, però barrejant aquests dos ingredients a parts iguals. Al farcit també hi podeu posar pinyons. Quant a les verdures, a més de pebrots i tomàquets, és molt habitual fer servir albergínies o carbassons (si en trobeu d’aquells rodons, dits de Niça, perfecte; si no, feu com a Grècia: talleu-los en cilindres d’uns 10-15 cm i buideu-los per un extrem). Les carns d’aquestes verdures s’incorporen al sofregit i, per tant, afegeixen matisos al farcit més simple.',
      },
      {
        p: 'La cocció és també molt habitual fer-la al forn, sobretot si es prepara una quantitat massa gran per encabir-la en una simple cassola. En aquest cas, utilitzeu una safata alta (tipus la que utilitzeu per fer lasagne) i tapeu les verdures amb paper d’alumini perquè no s’ennegreixin.',
      },
    ],
    categories: ['carmanyola', 'plat-unic', 'primers'],
    tags: ['arros', 'pebrot', 'tomaquet'],
  },
  {
    id: 'pasta-al-forn-amb-alberginies',
    createdAt: '2018-06-09T22:45:10+02:00',
    title: 'Pasta al forn amb albergínies',
    intro: [
      {
        p: 'L’any 1994, Andrea Camillieri va publicar el primer llibre de la sèrie que protagonitza Salvo Montalbano. El nom d’aquest comissari sicilià, ja ho deveu saber, és un homenatge que Camillieri va retre al seu admirat Manuel Vázquez Montalbán, el creador del detectiu Pepe Carvalho. Però els gestos de complicitat no acaben aquí. Com el seu homòleg del Raval, Montalbano és un apassionat de la bona taula i de la seva litúrgia. Menja amb delit però amb bon gust, sempre amb una copa de vi, tovalló de cotó i una conversa. Mediterràniament, vaja! I de la mateixa manera que vaig preparar <a href="/arros-amb-bacalla-i-sobrassada">un contundent arròs amb bacallà i sobrassada</a> seguint la recepta que va fer Carvalho a <em>Tatuaje</em>, us proposo avui un dels plats preferits per Montalbano, el que ell anomena <a href="https://www.youtube.com/watch?v=P715MRao4_s">pasta ‘ncasciata</a>.',
      },
    ],
    cost: 'Cost aproximat per ració: 1,24 €.',
    unitCost: 1.24,
    ingredients: [
      {
        ul: [
          '300 g de pasta tipus casarecce, zitti o rigatoni',
          '2 albergínies',
          '400 ml de tomàquet triturat',
          '200 g de formatge de pasta filada (caciocavallo, mozzarella…)',
          '125 g de salsitxes de porc',
          '50 g de formatge Pecorino o Grana padano ratllat',
          '2 grans d’all',
          'Pa ratllat',
          'Oli de llavors i oli d’oliva verge extra',
          'Sal',
          'Pebre negre',
          'Alfàbrega fresca',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Amb una hora d’antelació, tallem les albergínies a daus d’1 cm. Els salem generosament i els deixem en un escorredor amb un pes al damunt.',
          'Passat aquest temps, maseguem els daus d’albergínia, prement fort perquè deixin anar el suc amarg, i els esbandim sota l’aixeta.',
          'Els escampem sobre un drap net i el retorcem per treure tota l’aigua possible de l’albergínia.',
          'Escalfem oli de llavors en una paella i fregim l’albergínia fins que quedi daurada. Fet això, la reservem damunt d’un paper de cuina perquè s’escorri.',
          'Agafem un parell de grans d’all, els piquem ben fins i els sofregim en una olla de ferro, amb tres o quatre cullerades d’oli d’oliva.',
          'Aleshores hi posem el tomàquet triturat. Deixem coure 10 minuts a foc lent i al final hi afegim l’alfàbrega.',
          'Mentrestant, engeguem el forn a 180 °C i posem l’olla al foc amb aigua i sal per bullir la pasta. Recordeu: 10 g de sal per cada litre d’aigua, i 1 litre d’aigua per cada 100 g de pasta. Fàcil!',
          'Tallem també les salsitxes i el formatge a trossets d’1 cm.',
          'Courem la pasta molt al dente. Si el paquet recomana 11 minuts de cocció (com és el cas de les casarecce), les deixarem només 7 minuts.',
          'Abans de colar la pasta, reservem una llossa de l’aigua de cocció i l’aboquem a la salsa de tomàquet.',
          'Tot seguit, hi aboquem també la pasta escorreguda, l’albergínia, la salsitxa i el formatge i remenem bé.',
          'Cobrim el fons d’una cassola o una plata de forn amb pa ratllat. Hi posem la pasta al damunt i la cobrim amb 4-5 cullerades més de pa ratllat i el Grana padano.',
          'Posem la plata al forn durant 20 minuts, sense ventilador. Ja podeu portar la cassola a taula, o bé abocar el contingut en un plat de servir, de manera que quedi com un timbal.',
        ],
      },
    ],
    variants: [
      {
        p: 'El formatge podria ser una mica més fort, tipus un cheddar no gaire madur, però és important que es fongui i no domini excessivament sobre les albergínies. De la mateixa manera, les salsitxes es podrien substituir per xistorra o carn picada, i combinar-les amb una mica de cansalada viada o tacs de pernil. En realitat, les variants que admet aquest plat són múltiples, depenent del que tingueu a la nevera i dels vostres gustos personals, però sempre pensant en l’harmonia dels ingredients.',
      },
    ],
    categories: ['carmanyola', 'plat-unic', 'primers', 'segons'],
    tags: ['alberginia', 'formatge', 'pasta', 'salsitxes', 'tomaquet'],
  },
  {
    id: 'clafoutis-de-nabius',
    createdAt: '2018-05-06T19:44:57+02:00',
    title: 'Clafoutis de nabius',
    intro: [
      {
        p: 'Si habitualment els pans de pessic us surten eixuts i atapeïts, les cremes se us deslliguen i els bunyols us queden crus per dintre i cremats per fora, aquesta és la vostra recepta. El clafoutis farà remuntar la vostra autoestima pastissera com clares a punt de neu. És un pastís tradicional del Llemosí, d’elaboració molt simple i èxit assegurat. Tot i que l’original es fa amb cireres, els nabius són una excel·lent alternativa, igualment saborosa i que no cal desossar. Ja veureu que la massa s’esquerda, i que la fruita fa esllavissades un cop servida la ració al plat, però això només accentua el seu caràcter rústic i fa aquest pastisset més apetible. Proveu a servir el clafoutis tebi per culminar un sopar a l’aire lliure i, mentre l’assaboriu, acabeu-vos l’ampolla de vi negre. La conversa (i la nit) sens dubte milloraran.',
      },
    ],
    cost: 'Cost aproximat per ració: 1,20 € (en surten 6 racions generoses).',
    unitCost: 1.2,
    ingredients: [
      {
        ul: [
          '500 g de nabius',
          '50 g d’ametlla en pols',
          '75 g de farina',
          '100 g de sucre',
          '3 ous',
          '200 ml de llet sencera',
          '100 ml de nata',
          '15 ml de licor de cireres',
          'Les llavors d’una beina de vainilla',
          'Un pessic de llevat químic, tipus Royal',
          'Un pessic de sal',
          'Mantega per untar el motlle',
          'Sucre amb aroma de vainilla per servir',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Encenem el forn a 170 °C.',
          'Untem un motlle amb mantega i l’espolsem amb sucre. L’ideal és utilitzar un motlle bonic, de ceràmica si pot ser, que serveixi per presentar les postres a la taula. Que no sigui desmuntable, perquè la massa és força líquida i podria filtrar-se.',
          'Rentem i eixuguem bé els nabius.',
          'Els repartim pel motlle.',
          'Batem els restants ingredients fins que estiguin totalment integrats.',
          'Els aboquem damunt la fruita.',
          'Coem el clafoutis durant uns 45 minuts i deixem reposar dins el forn apagat uns 10 minuts més.',
          'Deixem refredar a temperatura ambient.',
          'El clafoutis es pot servir tebi, amb un polsim de sucre aromatitzat i acompanyat d’una bola de gelat de vainilla, nata o mascarpone. Aviseu els nens i els golafres que no mengin massa de pressa. Aquestes postres s’han d’assaborir!',
        ],
      },
    ],
    variants: [
      {
        p: 'Per fer un clafoutis de color ben encès, es poden utilitzar altres fruits com gerds, groselles, cireres… sols o en combinació amb els nabius. O bé, si us decanteu pel verd, raïm o prunes clàudies, tot i que cal procurar que no siguin excessivament sucoses. Trieu fruits de temporada i ajusteu la quantitat de sucre a la dolçor natural de la fruita.',
      },
    ],
    categories: ['berenar', 'postres'],
    tags: ['nabius', 'pastis', 'vainilla'],
  },
  {
    id: 'pa-de-pessic-de-les-padrines',
    createdAt: '2018-03-18T20:41:03+02:00',
    title: 'Pa de pessic de les padrines',
    intro: [
      {
        p: 'Si hi ha una recepta que tothom ha provat, i que es postula des de fa temps com la del pastisset més fàcil de fer, aquesta és la del pa de pessic de iogurt. Un clàssic a prova de <em>dummies</em> que fa servir el potet del iogurt com a mesura, i que amb petites variants (iogur de llimona o natural, oli d’oliva o de llavors) totes les nostres padrines ens han donat per berenar. No us enganyaré. Jo els recordo eixuts i atapeïts com una mala cosa. Calia submergir-los en un got de llet amb Cola Cao i pescar-los amb la cullera, altrament no hi havia manera que baixessin coll avall! Però les receptes més senzilles poden resultar delicioses si es fan amb cura, i vaig decidir que aquest humil pa de pessic en seria la prova. Només calien unes petites modificacions per acabar amb el meu mal record. Per començar, substituint el iogurt industrial “amb aroma de llimona” per un kèfir de llet excel·lent que jo mateixa cultivo. La resta és <em>savoir faire</em>.',
      },
    ],
    cost: 'Cost aproximat per ració: 0,27 €.',
    unitCost: 0.27,
    ingredients: [
      {
        ul: [
          '2 pots de farina',
          '1 pot de fècula de blat de moro (Maizena)',
          '2 pots de sucre',
          '1 pot d’oli (barreja d’oliva verge i gira-sol)',
          '1 pot de kèfir o de iogurt natural sense ensucrar',
          '3 ous',
          '1 cullerada de postres d’essència de vainilla',
          '1 cullerada de cafè de bicarbonat',
          'La ratlladura d’una llimona',
          '1 pessic de sal',
          'Sucre aromatitzat (o de llustre) per decorar',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Per fer aquest pa de pessic no cal cap balança. Només cal tenir un pot mesurador de 125 cc o, en el seu defecte, un envàs buit de iogurt.',
          'Abans de començar, posem els ous en un pot amb aigua a 40 °C i els hi deixem uns 5 minuts.',
          'Mesurem tots els ingredients, començant pels secs, i engeguem el forn a 200 °C.',
          'Folrem un motlle metàl·lic amb paper de forn (i per fer-ho més fàcilment, l’untem amb una mica de mantega; així el paper queda enganxat).',
          'Tamisem la farina amb la Maizena i el pessic de sal. Reservem.',
          'Barregem el sucre amb la ratlladura de llimona (que sigui ben fina i sense gens de la part blanca). Maseguem i rebreguem el sucre amb els dits, com si volguéssim fer-ne engrunes.',
          'Trenquem els ous i separem els rovells de les clares. Muntem aquestes últimes a punt de neu.',
          'Afegim els rovells al bol on hi havia el sucre i la ratlladura, hi posem també el kèfir i la vainilla i ho barregem tot molt bé.',
          'A continuació, hi anem tirant l’oli a rajolins i sense deixar de remenar.',
          'Finalment, hi incorporem la farina i la Maizena, i seguim remenant perquè no quedin grumolls.',
          'Ara ve la part més delicada, que és la d’incorporar les clares sense que es desmuntin gaire. Primer afegim a la massa anterior una cullerada de clares muntades i remenem amb la llengua (la de silicona, és clar! <img class="emoji" src="https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/1f642.svg" alt="🙂">) fent moviments delicats, de baix a dalt. Aleshores tirem el bicarbonat a les clares restants i les afegim també a la massa, repetint aquest moviment suau tot just fins que la massa sigui homogènia.',
          'Immediatament posem la massa dins del motlle i al forn.',
          'Baixem la temperatura a 180 °C. Coem durant 35 minuts o fins que la part superior estigui ben daurada. (En cas de dubte, punxem amb una broqueta i mirem si ha sortit neta o encara hi ha massa crua a l’interior).',
          'Deixem el pa de pessic al motlle durant 15 minuts més (si el motlle és quadrat o rodó, millor dins del forn; si és allargat, a fora serà suficient) i després el refredem damunt d’una reixeta.',
          'Decorem el pa de pessic amb sucre aromatitzat i ja el podem tallar i repartir! Bon profit!',
        ],
      },
    ],
    extras: [
      {
        h2: 'Aclariments',
      },
      {
        p: 'Per què deixem els ous en aigua a 40 °C? Perquè a aquesta temperatura les clares es munten molt fàcilment.',
      },
      {
        p: 'Per què maseguem el sucre amb la ratlladura de llimona? Perquè es desprenguin els olis aromàtics continguts a la pell i així s’intensifiqui el gust. Mentre ho fem, ja notarem un aroma intens i deliciós!',
      },
      {
        p: 'Per què tanta història amb les clares? Les clares són les responsables que el pa de pessic sigui esponjós. Es munten a punt de neu perquè aportin aire a la massa. Per aquest mateix motiu cal tenir cura que no es “desinflin” en incorporar-les a la resta d’ingredients.',
      },
      {
        p: 'Aleshores per què hi posem bicarbonat? I per què precisament al final? El bicarbonat aportarà més esponjositat a la massa. La reacció entre un ingredient àcid (el kèfir) i el bicarbonat generarà bombolletes de manera immediata. Per això no els tenim gaire estona en contacte abans d’enfornar el nostre pa de pessic.',
      },
    ],
    categories: ['berenar', 'postres'],
    tags: ['farina', 'kefir', 'llimona', 'oli', 'pa-de-pessic', 'sucre'],
  },
  {
    id: 'patates-emmascarades',
    createdAt: '2018-03-03T21:29:45+02:00',
    title: 'Patates emmascarades',
    intro: [
      {
        p: 'Infal·libles, les patates entren cada setmana al cistell de la compra com les pilotes en un Three-Point Contest. I és que fregides, guisades, bullides, al vapor, al forn o en puré, agraden a tothom i salven el pressupost de moltes famílies. A pagès van tenir la pensada de barrejar-les amb la sang i els menuts del porc, que així condien i resultaven molt més agradables de consumir. I aquest és precisament l’origen de les patates emmascarades, que avui fem amb bull o botifarra negra (o sigui, amb sang i menuts del porc:-). És un plat rústic i econòmic, però a aquestes alçades ja sabeu que el cost no és necessàriament proporcional al bon gust.',
      },
    ],
    cost: 'Cost aproximat per ració: 1 €.',
    unitCost: 1,
    ingredients: [
      {
        ul: ['1 kg de patates', '500 g de botifarra negra', '2 grans d’all', 'Oli d’oliva verge extra', 'Sal'],
      },
    ],
    prep: [
      {
        ol: [
          'Pelem i coem les patates al vapor.',
          'Mentrestant, piquem dos granets d’all i els posem en una paella amb oli.',
          'Abans que es daurin, hi afegim la botifarra a trossos, sense la pell, i l’anem desfent amb la forquilla.',
          'Quan les patates siguin tendres, les incorporem a la paella i les aixafem una mica.',
          'Salem i remenem per integrar la barreja de botifarra i patata.',
          'Les servim ben calentes amb un rajolí d’oli cru per damunt.',
        ],
      },
    ],
    variants: [
      {
        p: 'A la patata s’hi podria afegir una punta de col, o substituir la botifarra per bull negre o bisbe. És una recepta molt simple. Si voleu donar-li un toc més gourmet, utilitzeu patates de Prades i un embotit de qualitat.',
      },
    ],
    categories: ['plat-unic', 'primers'],
    tags: ['botifarra', 'bull', 'patates'],
  },
  {
    id: 'baklavas',
    createdAt: '2018-02-02T11:36:23+02:00',
    title: 'Baklavas',
    intro: [
      {
        p: 'Els Baklavas són unes postres extraordinàriament dolces i denses, d’aquelles que deixen els dits enganxifosos i la glucèmia pels núvols. Però tan, tan bones… Vaig tastar aquest pastisset per primer cop a Atenes, molts anys abans que arribessin els euros, syriza i els jocs olímpics que van portar el metro a la ciutat. Per molt que pesi als amfitrions que me’l van donar a conèixer, sembla ser que l’origen del baklavas, així com el seu nom, ve de Turquia. No és cap sorpresa. Altres plats típics grecs provenen del nord dels Balcans, són herència del domini venecià o fruit de les rutes marítimes que van posar aquest país a mig camí entre Àsia menor i el Mediterrani occidental. És una sort que la gastronomia no s’aturi a les fronteres. I una llàstima que els conflictes entre països no es negociïn a la cuina. Potser el món funcionaria una mica millor.',
      },
    ],
    cost: 'Preu per ració: 0,55 € (Les racions són petites. Poden menjar-ne fins a 12 persones).',
    unitCost: 0.55,
    ingredients: [
      {
        ul: [
          '1 paquet de <a href="https://info.mercadona.es/es/consejos/alimentacion/nueva-masa-filo/tip">pasta filo</a>',
          '200 g de mantega',
          '200 g de festucs pelats',
          '50 g de nous sense closca',
          '50 g d’ametlles, avellanes, o una barreja de fruits secs',
          '3 cullerades de mel',
          '8 beines de cardamom',
        ],
      },
      {
        h3: 'Per a l’almívar:',
      },
      {
        ul: ['250 g de sucre', '4 cullerades de mel', '2 cullerades d’aigua de tarongina (agua de azahar)'],
      },
    ],
    prep: [
      {
        ol: [
          'Posem la mantega tallada a daus en un pot al foc fins que es fongui. Apaguem i reservem.',
          'Posem els festucs i la resta de fruits secs en una picadora o morter i els piquem (no excessivament fins, deixant trossos de la mida d’un gra de pebre).',
          'Obrim les beines de cardamom i barregem les llavors amb els fruits secs, reservant les beines per a l’almívar.',
          'Mesclem els fruits secs amb la mel i ho reservem.',
          'Escalfem el forn a 180 °C.',
          'Amb la mantega fosa i un pinzell, untem el fons i les parets d’un motlle rectangular, el més semblant possible a les dimensions de la massa filo. Si és necessari, tallem la massa sobrant amb unes tisores.',
          'Cobrim el fons del motlle amb un full de filo. L’untem de mantega i repetim la operació fins tenir quatre capes superposades.',
          'Disposem la meitat de la barreja de fruits secs i mel damunt de la 4a capa.',
          'La cobrim amb dues capes més, sempre pinzellant-les amb la mantega fosa.',
          'Hi repartim la resta dels fruits secs i tapem amb els quatre fulls restants, cadascun untat de mantega. (Si ens en sobrés algun, perquè de vegades hi ha més de 10 fulls, els posem entremig, com millor ens convingui).',
          'Amb un ganivet ben esmolat, fem uns talls en forma de rombe per marcar les racions. Aquests talls no haurien d’arribar a la base del motlle.',
          'Coem durant 35 minuts a la part central del forn, amb calor a dalt i a baix i sense ventilador.',
          'Mentrestant, preparem l’almívar barrejant el sucre, la mel, les beines de cardamom i 200 ml. d’aigua. Ho posem a foc mig.',
          'Quan arrenqui el bull, deixem coure uns 10 minuts, remenant de tant en tant. Apaguem el foc i, quan s’hagi refredat, colem i afegim l’aigua de tarongina.',
          'Quan el baklavas estigui a punt, lleugerament daurat per sobre, el traiem del forn i aboquem l’almívar per damunt dels talls que havíem fet amb el ganivet. D’aquesta manera s’impregna el farcit sense perjudicar el crocant de la superfície.',
          'Tornem el baklavas al forn i deixem que cogui uns 5 minuts addicionals.',
          'Apaguem el forn, el deixem refredar totalment i ja el podem portar a taula.',
        ],
      },
    ],
    extras: [
      {
        h2: 'Consells',
      },
      {
        p: 'La massa filo és difícil de fer a casa i, per això, el més habitual és comprar-la feta. (En trobareu al Mercadona, al Lidl i probablement en altres cadenes de supermercats. Cada paquet conté entre 10 i 12 capes finíssimes, gairebé com un paper. No la confongueu amb pasta brick o pasta de full).',
      },
      {
        p: 'Encara que no és difícil de manipular, pel fet de ser tan fina s’asseca molt ràpidament al contacte amb l’aire. Per això us aconsello que, un cop obert el paquet, estengueu la massa damunt del marbre, la cobriu immediatament amb un drap mullat amb aigua i escorregut i mantingueu els fulls tapats mentre els aneu agafant. Només així evitareu que es ressequin i s’acabin trencant.',
      },
      {
        h2: 'Alternatives',
      },
      {
        p: 'Com hem dit, aquest dolç és molt popular a Grècia i a Turquia, però es pot trobar des d’Egipte fins a l’Iran, per tot l’Orient Mitjà. Cada regió té les seves variants, tant pel que fa a ingredients com a presentació. La barreja de fruits secs pot variar doncs segons les vostres preferències, i l’almívar es podria fer també amb altres ingredients, com pell de llimona, un parell de claus o un canó de canyella. Fins i tot, si no teniu aigua de tarongina, podríeu utilitzar suc de llimona.',
      },
      {
        p: 'Per decorar aquestes postres podeu posar mitja nou o una ametlla damunt de cada rombe, o simplement reservar una barreja de festucs picats i escampar-la sobre l’últim full de pasta filo abans de ficar al forn.',
      },
    ],
    categories: ['berenar', 'postres'],
    tags: ['festucs', 'mantega', 'nous', 'pasta-filo', 'sucre'],
  },
  {
    id: 'amanida-de-capipota',
    createdAt: '2018-01-02T12:13:58+02:00',
    title: 'Amanida de capipota (nervetti)',
    intro: [
      {
        p: 'Avui els <em>nervetti</em> són un dels <em>antipasti</em> més refinats, però el seu origen és a la cuina pobra; concretament, a les <em>osterie</em> del Veneto i la Lombardia, on els preparaven per aprofitar les parts menys preuades de l’animal. Per fer la recepta original, caldria bullir genolls de bou o de vedella durant tres hores, desossar-los i tallar els tendons a bastonets, per després amanir-los amb una vinagreta. El procés no és gens complicat, però probablement ja us heu descoratjat només llegir-lo: els menuts i els temps de cocció llargs no sempre casen amb el ritme de vida actual. Anem arraconant la cuina de pobres, sense adonar-nos que és precisament així com ens empobrim! Per lluitar contra aquest procés, i així animar-vos a provar aquest plat, he optat per utilitzar capipota ja bullit. El trobareu fàcilment al mercat, conté igualment molta gelatina i no és gens feixuc de manipular. Si tot i això sou aprensius, i determinades peces de l’animal us fan recança, fixeu-vos que ni el cap ni la pota no són parts destinades a acumular greix. Són per tant molt magres, i en canvi aporten moltíssim col·lagen, una proteïna estructural que potser esteu pagant a preu d’or en forma de suplement alimentari. Ei, plantegeu-vos-ho!',
      },
    ],
    cost: 'Cost aproximat per ració: 1,30 €.',
    unitCost: 1.3,
    ingredients: [
      {
        ul: [
          '500 g de capipota de vedella ja bullit',
          '1 branca d’api',
          '2 pastanagues',
          '1 ceba de Figueres',
          '4 cogombrets en vinagre',
          '10-12 grans de pebre negre',
          '1 fulla de llorer',
          '4 cullerades de vinagre',
          '50 ml d’oli d’oliva verge extra (el més bo que trobeu!)',
          'Julivert',
          'Sal',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Posem el capipota de vedella en una olla, tallat en quatre o cinc trossos.',
          'Hi afegim les pastanagues i l’api tallats com per fer brou, la fulla de llorer, els grans de pebre i dues cullerades de vinagre.',
          'Cobrim amb aigua i portem a ebullició (ja que la cocció prèvia no és suficient).',
          'Fem coure 1 hora tapat (o 20 minuts en una olla ràpida, amb pressió alta) i deixem refredar.',
          'Tallem la carn en làmines ben fines i la reservem.',
          'Tallem la ceba a juliana.',
          'Fem una vinagreta amb l’oli d’oliva, dues cullerades de vinagre, sal i julivert. Hi podem afegir també els cogombrets tallats, o bé fer-los servir sencers per decorar el plat.',
          'Barregem les tires de capipota, la ceba i la vinagreta.',
          'Servim l’amanida a temperatura ambient.',
        ],
      },
    ],
    variants: [
      {
        p: 'Si voleu convertir aquest plat en un primer, afegiu-hi unes mongetes blanques cuites. També podríeu tallar a bastonets una mica de pebrot (dels tres colors, per allò de la presentació…), i sumar-lo a la resta d’ingredients. Finalment, si us agrada el picant, no us priveu d’afegir-hi una mica de bitxo tallat ben fi.',
      },
    ],
    categories: ['carmanyola', 'primers'],
    tags: ['amanida', 'capipota', 'ceba', 'vedella'],
  },
  {
    id: 'galetes-de-music',
    createdAt: '2017-09-30T17:19:03+02:00',
    title: 'Galetes de músic',
    intro: [
      {
        p: 'Aquesta és una recepta pròpia, que adapta els ingredients de les <em>chocolate chips</em> a la cuina mediterrània. En lloc de xocolata, hi ha panses moscatell; en lloc de nous pacanes, hi ha ametlles i avellanes torrades, com a les tradicionals postres de músic. És sabut que els fruits secs són petits concentrats de proteïna vegetal, greixos saludables, vitamines i nutrients que en fan molt recomanable el consum; que un grapat al dia pot prevenir malalties cardiovasculars, a més d’aportar l’energia necessària per acabar aquella travessa (o jornada) que se’ns comença a fer costa amunt. Però fugint de l’etiqueta snob de “superfood”, els fruits secs també són gustosos i versàtils. Si els trobem com a ingredient principal en moltes postres, picades, salses i farcits, és evident que en unes galetes han de quedar deliciosos!',
      },
    ],
    cost: 'Cost aproximat per unitat: 0,16 € (en surten 24).',
    unitCost: 0.16,
    ingredients: [
      {
        ul: [
          '115 g de mantega tallada a daus i a temperatura ambient',
          '1/2 tassa de sucre blanc*',
          '1/2 tassa de panela (sucre morè integral)',
          '1 ou',
          '1 1/4 tasses de farina de tot ús',
          '1 1/2 tassa d’avellanes i/o ametlles torrades',
          '1 tassa de panses moscatell',
          '1 cullerada sopera de Maizena',
          '1 cullerada de postres de bicarbonat',
          '1 cullerada de cafè de vainilla',
          '1 pessic de sal',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Barregem els dos sucres. Els posem en un bol amb la mantega i, amb una llengua, anem mesclant i desfent els daus de mantega fins que ens quedi una consistència cremosa, d’aspecte similar a la mantega de cacauet.',
          'Hi afegim l’ou i la vainilla. Seguim remenant fins homogeneïtzar la massa.',
          'Tamisem la farina, la Maizena, el bicarbonat i la sal i els afegim a la barreja anterior. Tornem a remenar fins a integrar els ingredients en pols.',
          'Incorporem aleshores els fruits secs, prèviament triturats amb una picadora, i les panses. La massa serà molt densa, però només cal remenar una mica perquè es cohesioni.',
          'Ja tenim la massa a punt. Ara, amb una cullera, anem agafant porcions de la mida d’una nou i els donem forma de bola. Per coincidir amb els temps de cocció indicats, hem de procurar que ens en surtin 24 (si n’hi ha menys, vol dir que són més grosses, i necessitaran més estona).',
          'Un cop formades totes les boletes, les repartim en dues plates de forn i les posem a la nevera durant una hora.** Hem de tenir present que les galetes s’expandiran i acabaran tenint uns 6 cm de diàmetre. Així doncs, les hem d’espaiar perquè no s’enganxin entre elles ni quedin deformades per les vores de la plata.',
          'Mentrestant, engeguem el forn a 175 °C.',
          'Coem la primera plata de galetes (amb calor a dalt i a baix, sense ventilador) durant 17 minuts.',
          'Passat aquest temps, traiem la plata del forn i deixem que les galetes s’acabin de fer amb l’escalfor de la plata, uns 17 minuts més. Després deixem les galetes una estona damunt d’una reixeta i ja les podem consumir o desar al pot. Fem el mateix amb la segona tanda de galetes.',
        ],
      },
    ],
    variants: [
      {
        p: 'La barreja de fruits secs utilitzada és flexible: podria incloure nous, en funció dels vostres gustos i/o de les al·lèrgies dels comensals. Fixeu-vos, això sí, que les ametlles i les avellanes siguin torrades, i que no hi hagi cap fruit salat o fregit (ni tampoc ranci, per descomptat!). Per decorar les galetes i a la vegada donar una pista dels seus  ingredients, podríem posar-hi una avellana sencera al mig, just abans de refrigerar-les.',
      },
    ],
    extras: [
      {
        h3: 'Notes',
      },
      {
        p: '* Per aquesta recepta he mesurat els ingredients en pols pel seu volum i no pel seu pes, tenint en compte que les tasses tenen 250 ml de capacitat, i els ingredients mesurats s’hi han de posar rasos i sense comprimir. Com que de mantega cal utilitzar aproximadament mitja pastilla, podríeu fer aquesta recepta encara que no tingueu bàscula.',
      },
      {
        p: '** Si voleu coure les galetes més endavant, només cal seguir la recepta fins el punt 6 i posar totes les boletes al congelador, vigilant que no s’aixafin. Arribat el dia de coure-les, les traieu una horeta abans, les distribuïu a la plata de forn i repreneu la recepta al punt 7. Us quedaran igual de bones!',
      },
    ],
    categories: ['berenar', 'postres'],
    tags: ['ametlla', 'avellana', 'farina', 'galetes', 'mantega', 'panela', 'panses', 'sucre'],
  },
  {
    id: 'brou-de-pollastre',
    createdAt: '2017-08-22T20:00:30+02:00',
    title: 'Brou de pollastre',
    intro: [
      {
        p: 'Fora tetra bricks! Fora cubets, productes deshidratats i concentrats de glutamat i greix! El brou  que compreu al súper, desenganyeu-vos, no té res a veure amb el que podeu fer vosaltres amb molts pocs diners i encara menys traça. És un tot terreny que podreu emprar en salses, guisats o, simplement, per fer sopes tan senzilles com aquesta, amb pasta, arròs, patata i cigrons. I, a més d’alimentar i reconfortar, pel preu d’una recepta tindreu també un deliciós pollastre a l’estil de Martín Berasategui. Preparats? Doncs baixeu al mercat i compreu un pollastre de corral. Perquè el brou comença aquí!',
      },
    ],
    cost: 'Cost aproximat per ració: 1,84 € (obtindreu 4 racions de pollastre i 2 litres de brou).',
    unitCost: 1.84,
    ingredients: [
      {
        ul: [
          '1 pollastre de corral de pes mitjà',
          '1 cabeça d’alls',
          '2 pastanagues',
          '1 branca d’api i 1/2 més amb les fulles',
          '1 ceba',
          '1/2 porro (o bé la tija d’una ceba tendra)',
          '10-12 grans de pebre negre',
          'Pebre mòlt',
          'Sal',
          'Oli d’oliva verge extra',
        ],
      },
    ],
    prep: [
      {
        p: 'Aquest brou és fet amb la carcassa, ossos i ales del pollastre un cop rostit. Per tant, el primer pas és coure el pollastre al forn, sense gaires additius ni complicacions.',
      },
      {
        h3: 'Per fer el pollastre:',
      },
      {
        ol: [
          'Escalfem el forn a 180 °C, amb el ventilador posat i amb una marmita de ferro (destapada i buida) a dintre.',
          'Humitegem la pell del pollastre amb 3-4 cullerades d’aigua. Tot seguit, el salpebrem per dintre i, amb les mans, l’untem amb una mica d’oli OVE per tota la superfície (com si li féssim massatge, vaja).',
          'Quan el forn hagi assolit la temperatura adequada, traiem la marmita amb cura de no cremar-nos. Hi posem la cabeça d’alls tallada horitzontalment i cap per avall (de manera que es vagi desprenent el suc de l’all) i també el pollastre. Atenció, el posarem de costat, recolzat sobre una de les ales!',
          'El tornem al forn i el coem 18 minuts.',
          'Passat aquest temps, col·loquem el pollastre sobre l’altre costat i el deixem coure 18 minuts més.',
          'Retirem l’all, salpebrem l’exterior del pollastre i ara el col·loquem sobre l’esquena. El reguem una mica amb el seu propi suc i deixem que es cogui 15 minuts.',
          'Finalment, el posem bocaterrós, recolzat sobre el pit. El deixem 12 coure minuts més en aquesta posició.',
          'Traiem la marmita del forn. La tapem, deixant una petita escletxa perquè surti el vapor, i deixem que el pollastre reposi uns 10 minuts.',
          'El pollastre ja està a punt per menjar. Això sí, reservem les ales i tota l’ossada, perquè després aquesta serà la base del brou.',
        ],
      },
      {
        h3: 'Per fer el brou:',
      },
      {
        ol: [
          'Rentem i tallem a trossos les pastanagues, l’api, la ceba i el porro (o la tija de la ceba tendra). Posem les verdures en una olla amb els ossos del pollastre, una cullerada de sal i uns quants grans de pebre negre. Si ens ha sobrat suc de cocció del pollastre, també l’hi afegim.',
          'Cobrim d’aigua (entre 2 i 2,5 litres) i portem a ebullició.',
          'Deixem coure unes 2 hores a foc lent (només 1/2 hora en una olla ràpida) o fins que la carn de la carcassa es desprengui de l’os.',
          'Colem el brou i el fem refredar. Quan ja estigui a temperatura ambient, el posem a la nevera fins l’endemà.',
          'Veurem que a la superfície del brou s’haurà creat una capa d’un dit de greix, i serà molt fàcil retirar-lo. El brou així desgreixat ja es pot consumir directament o congelar. Si haguéssim de conservar-lo uns dies a la nevera, seria preferible deixar la capa de greix fins el moment d’utilitzar el brou, ja que ajuda que es conservi millor.',
        ],
      },
    ],
    variants: [
      {
        p: 'El brou es pot fer, evidentment, amb les carns crues. O amb gallina, o amb retalls d’altres carns. És un plat de l’aprofitament, i té tantes variants com restes tingueu a la nevera. Hi podeu afegir col verda, nap, xirivia… i, si sou més agosarats, també una beina d’anís estrellat o un canó de canyella. No abuseu però dels aromes. Tingueu present que el brou es combina tot sovint amb altres sabors i no és convenient que apareguin notes discordants.',
      },
      {
        p: 'Els temps de cocció són calculats per un pollastre de mida mitjana i un forn de convecció. Si no disposeu de ventilador, o el vostre pollastre és de mida gegant, allargueu el temps de cocció en 2-3 minuts per banda.',
      },
    ],
    categories: ['primers'],
    tags: ['api', 'brou', 'ceba', 'pastanaga', 'pollastre', 'porro'],
  },
  {
    id: 'rotllets-vietnamites',
    createdAt: '2017-07-16T17:45:26+02:00',
    title: 'Rotllets vietnamites (nem)',
    intro: [
      {
        p: 'Les preparacions en forma de rotllets, ja siguin fets al vapor, fregits o combinant ambdues coccions, són com petites sorpreses. No revelen el seu contingut fins que són a la boca, afegint al plaer de menjar l’al·licient de descobrir el que la vista ens ha ocultat fins aquell moment. La cuina asiàtica en té uns quants exemples. Aquest estiu, arran d’un curs de cuina vietnamita on vaig descobrir la varietat i frescor d’una gastronomia fins llavors quasi desconeguda, vaig incorporar els <em>nem</em> als meus menús. Quan encara són crus, embolicats amb una oblea finíssima i translúcida de farina d’arròs, aquests rotllets us recordaran una crisàlide. És quan són acabats de fregir que, com un esclat, alliberen tots els sabors continguts a l’interior i de sobte desitgem viatjar a Orient per menjar-nos-ho tot.',
      },
    ],
    cost: 'Cost aproximat per ració: 1,85 € (en surten una vintena llarga).',
    unitCost: 1.85,
    ingredients: [
      {
        ul: [
          '200 g de carn de porc picada',
          '150 g de llagostins pelats',
          '1 paquet d’<a href="http://nipponstore.es/arroz/90-papel-de-arroz-vietnamita-400g.html" target="_blank" rel="noopener">oblees d’arròs</a>',
          '1 ceba tendra',
          '1 pastanaga grossa',
          '1 gra d’all',
          '1/2 tassa de <a href="https://www.cocinista.es/web/es/enciclopedia-cocinista/ingredientes-del-mundo/oreja-de-madera.html" target="_blank" rel="noopener">bolets “orella de Judes” deshidratats</a>',
          '1/2 cabdell de <a href="https://es.wikipedia.org/wiki/Fideo_celof%C3%A1n" target="_blank" rel="noopener">fideus de soja verda</a>',
          '2 ous',
          'Fulles de coriandre',
          'Fulles de menta',
          '1 enciam Trocadero',
          '<a href="https://www.cocinista.es/web/es/salsa-de-pescado-300-ml-323.html" target="_blank" rel="noopener">Salsa de peix</a>',
          'Sucre',
          'Suc de llima',
          'Salsa <a href="https://www.elcorteingles.es/club-del-gourmet/A17249824-salsa-sriracha-de-chile-lee-kum-kee/" target="_blank" rel="noopener">Sriracha</a> (opcional)',
          'Sal',
          'Pebre negre',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Posem els bolets en remull durant 1/2 hora.',
          'Submergim els fideus en aigua tèbia durant 10 minuts. Després els escorrem i els tallem amb les tisores en trossos d’uns 2 cm.',
          'Mentrestant, tallem la ceba a dauets i la pastanaga en bastonets ben fins.',
          'Piquem el coriandre, el gra d’all i els llagostins.',
          'Finalment, piquem també els bolets un cop estiguin tendres.',
          'Barregem tots aquests ingredients amb la carn de porc.',
          'Hi afegim 2 ous, sal i pebre i pastem.',
          'Deixem reposar aquesta massa a la nevera durant uns 30 minuts.',
          'Mentrestant, podem preparar la salsa. Barregem: 2 cullerades de salsa de peix, 2 de sucre, 2 de suc de llima i 8 d’aigua. Afegim salsa Sriracha si ens agrada el picant. Reservem la salsa a la nevera.',
          'Arribat el moment de fer els rotllets, traiem una oblea del paquet i la humitegem d’una d’aquestes maneres: a) remullant-la en aigua durant 5 segons, posant-la plana damunt la taula i escorrent l’excés d’aigua amb la ma; o b) col·locant-la durant 20 segons entre dos draps molls.',
          'Posem una cullerada del farcit en el terç inferior de l’oblea. Per situar-nos, si l’oblea fos una cara, el farcit seria la boca :-). No carreguem massa els rotllets, perquè aleshores costaran més de tancar i de fregir.',
          'Enrotllem, embolicant el farcit com si féssim una cigarreta, fins arribar al centre de l’oblea. Aleshores pleguem els dos costats cap a l’interior i seguim enrotllant.',
          'Repetim l’operació amb la resta de rotllets, procurant fer-los més o menys de la mateixa mida. Us en sortiran aproximadament 20. L’oblea d’arròs humida és una mica enganxosa, i per això els anem reservant separats, sense apilar-los.',
          'Els fregim per tandes en oli vegetal.',
          'Els servim calents. Es mengen embolicats amb una fulla d’enciam i un parell de fulletes de menta, i sucant-los a la salsa. Els que ens sobrin els podem fregir només a mitges i congelar. Quan els haguem de consumir, només caldrà posar-los a la paella amb oli calent i acabar-los de coure.',
        ],
      },
    ],
    variants: [
      {
        p: 'El farcit dels nem és molt variable. Pot ser només de carn, o només de llagostins, o incorporar altres verdures, com brots de soja o fins i tot moniato. Aneu provant fins trobar els ingredients i la proporció que us agradi més. Eviteu, això sí, que la massa resulti excessivament humida, ja que seria més difícil donar-los forma.',
      },
    ],
    categories: ['carmanyola', 'plat-unic', 'primers', 'segons'],
    tags: ['asia', 'carn', 'llagostins', 'porc'],
  },
  {
    id: 'pastis-de-formatge-japones',
    createdAt: '2017-06-08T08:28:58+02:00',
    title: 'Pastís de formatge japonès',
    intro: [
      {
        p: 'M’encanten els pastissos de formatge, però de vegades els trobo excessivament dolços, densos i embafosos. En l’extrem oposat, els pans de pessic em solen resultar eixuts i avorrits. El pastís de formatge japonès, o <em>soft cotton cake</em>, a mig camí entre aquests dos clàssics, és la solució als meus problemes. És un pa de pessic humit i amb un subtil aroma de formatge o, si ho preferiu, un <em>cheesecake</em> lleuger i flonjo com el cotó fluix que li dóna nom. Perquè quedi bé, només cal tenir cura de tres detalls: 1) el motlle, que ha de ser metàl·lic i d’una peça; 2) la temperatura de l’elaboració, que ha de ser tèbia. La recepta tradicional recomana batre la massa sobre una olla amb aigua calenta, però escalfar els ous submergint-los en aigua a 40 °C dóna els mateixos resultats i és menys farragós, i 3) el punt de les clares, que és tot un món. Si sou meticulosos i aprecieu la subtilesa de les elaboracions japoneses, aquest és el vostre pastís, no ho dubteu.',
      },
    ],
    cost: 'Cost aproximat per ració: 0,31 € (en surten 8 racions).',
    unitCost: 0.31,
    ingredients: [
      {
        ul: [
          '125 g de formatge cremós per untar',
          '80 g de sucre, preferiblement passat per la picadora o pel molinet de cafè',
          '30 g de mantega fosa',
          '50 ml de llet tèbia',
          '3 ous',
          '50 g de farina normal',
          '20 g de Maizena',
          '1/4 de culleradeta d’essència de vainilla',
          '1/4 de culleradeta de cremor tàrtar (un dels sobrets de les clàssiques litines, el que conté l’acidulant) o bé 1/2 culleradeta de suc de llima',
          'Sucre de llustre per decorar',
        ],
      },
      {
        p: 'També necessitarem un motlle metàl·lic no desmuntable d’uns 20 cm de diàmetre (o de costat, si és quadrat), i un altre recipient que el pugui contenir, ja que courem aquest pastís al bany Maria.',
      },
    ],
    prep: [
      {
        ol: [
          'Engeguem el forn a 160 °C.',
          'Escalfem aigua a 40 °C i hi dipositem els ous perquè agafin una mica de temperatura.',
          'Mentrestant, folrem el motlle amb paper de forn. (Millor si l’untem una mica abans, perquè així el paper s’hi enganxarà).',
          'Tamisem la farina amb la Maizena.',
          'Escalfem una mica el formatge i el barregem amb la mantega i la llet, tot remenant fins que s’integrin del tot.',
          'Separem les clares dels rovells.',
          'Armats amb les barnilles, batem els rovells amb 50 g de sucre fins que el color comenci a blanquejar. Hi afegim la vainilla, els rovells d’ou i la barreja de formatge, llet i mantega, sense deixar de batre.',
          'Hi incorporem ara la farina tamisada amb la Maizena. Si pensem que pot quedar algun grumoll, fem passar la barreja per un colador gros.',
          'Finalment, muntem les clares fins que siguin esponjoses. No defallim abans d’hora, sobretot! Hi tirem la resta del sucre i la punteta de cremor tàrtar (o el suc) i acabem de donar-los consistència de <a href="https://www.youtube.com/watch?v=zhuRyq7NrcA">pic ferm (firm peak)</a>.',
          'Afegim una cullerada d’aquesta merenga a la mescla anterior. Barregem amb cura i, quan s’hagi integrat, l’hi acabem d’afegir tota. Movem amb una espàtula de baix a dalt, vigilant que no es perdi volum. És precisament l’aire contingut en la massa el que fa esponjós aquest pastisset.',
          'Aboquem la massa al motlle.',
          'Posem dos dits d’aigua (millor si l’acabem de portar al punt d’ebullició) al recipient més gros i col·loquem el motlle amb el pastís a l’interior.',
          'Coem 10 minuts a 160 °C, sense ventilador.',
          'Abaixem la temperatura a 150 °C i deixem coure 80 minuts més.',
          'Apaguem el forn. El pastís s’ha de quedar a dintre durant uns 30 minuts. Després obrim una mica la porta i deixem que es vagi refredant gradualment.',
          'Desemmotllem el pastís capgirant el motlle. L’emboliquem amb paper film i el refrigerem una estona.',
          'En el moment de servir, hi tirem una mica de sucre de llustre per sobre.',
        ],
      },
    ],
    variants: [
      {
        p: 'Podeu prescindir perfectament de la vainilla, o bé substituir-la per ratlladures de llima o llimona, sempre que siguin ben fines i no continguin ni una mica de part blanca. Per una presentació tradicional, afegiu un grapadet de panses sultanes al fons del motlle. Si sou colla, no dubteu a doblar les quantitats indicades. Aquest pastisset es guarda molt bé a la nevera (sempre embolicat en paper film), tot i que el més probable és que no s’hi estigui gaire temps.',
      },
    ],
    categories: ['berenar', 'postres'],
    tags: ['formatge', 'japo', 'ous', 'pastis'],
  },
  {
    id: 'costella-amb-patates-i-cigrons',
    createdAt: '2017-05-11T17:26:11+02:00',
    title: 'Costella amb patates i cigrons',
    intro: [
      {
        p: 'Em direu que ja comença a fer calor; que on vaig jo, amb plats tan contundents, quan les botigues són plenes de cremes solars, productes per aprimar, ulleres de sol i roba de colors llampants. Doncs bé: no tinc excusa. Simplement m’agraden les cassoles a qualsevol època de l’any. Fins i tot hi sucaria pa, si no fos que la patata esqueixada ja fa la funció d’absorbir aquest suquet tan deliciós que cohesiona el plat. Amb una copa de vi negre, una amanida per començar i un bon tall de síndria per acabar, teniu un àpat complet, saludable i que us posarà de molt bon humor. Infinitament millor que un batut verd, creieu-me.',
      },
    ],
    cost: 'Cost aproximat per ració: 1,75 €.',
    unitCost: 1.75,
    ingredients: [
      {
        ul: [
          '500 g de costella ibèrica tallada a daus d’uns 3 cm',
          '500 g de patates',
          '200 g de cigrons prèviament cuits',
          '1 ceba',
          '1 porro',
          '2 pastanagues',
          '2 grans d’all',
          '500 ml de brou de carn',
          'Oli d’oliva verge extra',
          '1 branqueta de farigola',
          '1 culleradeta de pebre vermell (picant, dolç o fumat, com més us agradi)',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Pelem i piquem la ceba a daus. Tallem el porro i la pastanaga a rodanxes i els ofeguem tots junts en una cassola amb un raig d’oli.',
          'Hi afegim la costella. Mantenim la cassola destapada i a foc viu fins que es comenci a daurar, remenant de tant en tant.',
          'Incorporem aleshores la patata pelada i esqueixada, la farigola i els cigrons.',
          'Remenem bé i cobrim amb el brou.',
          'Deixem coure uns 30 minuts des que arrenqui el bull, a foc mitjà i amb la cassola tapada.',
          'Mentrestant, daurem l’all ben picat en una paella amb oli. Hi incorporem el pebre vermell gairebé al final i apaguem el foc.',
          'En acabar la cocció de la cassola, hi tirem aquest sofregit, remenem i deixem reposar un parell de minuts.',
        ],
      },
    ],
    variants: [
      {
        p: 'Podeu substituir els cigrons per pèsols, afegint-los una mica més tard per evitar coure’ls en excés. També podeu utilitzar altres verdures de temporada, com cors de carxofes o bolets. O simplificar i deixar-ho només en costella amb patates. En el fons, aquest plat és una cassola que admet múltiples adaptacions. La costella, que sigui ibèrica, això sí. Val la pena.',
      },
    ],
    categories: ['carmanyola', 'plat-unic', 'primers', 'segons'],
    tags: ['cigrons', 'costella', 'pastanaga', 'patata', 'porc'],
  },
  {
    id: 'pastis-de-ceba-porro-i-formatge',
    createdAt: '2017-04-28T20:44:39+02:00',
    title: 'Pastís de ceba, porro i formatge',
    intro: [
      {
        p: 'En podem dir pastís o quiche lleugera, perquè els ingredients típics de la quiche els hem substituït per cebes i porros, molt menys embafadors que la cansalada viada, a la vegada que més saludables per les arteries (però no patiu, que el formatge i la nata ja us aportaran el greix necessari per mantenir el tipus i el somriure). Una combinació d’ingredients tan senzilla com afortunada com a farciment, i una crosta que, en cas de poca traça o molta pressa, podríem substituir per pasta de full refrigerada. El resultat? Un pastís salat que durarà ben poc a la nevera i que, amb unes fulletes de ruca i canonges, resulta perfecte per la carmanyola.',
      },
    ],
    cost: 'Cost aproximat per ració: 0,58 € (en surten 6 racions).',
    unitCost: 0.58,
    ingredients: [
      {
        h3: 'Per la massa:',
      },
      {
        ul: ['150 g de farina', '100 g de mantega ben freda', '50 ml d’aigua quasi gelada', '1/4 de cullerada de sal'],
      },
      {
        h3: 'Per al farcit:',
      },
      {
        ul: [
          '2 porros',
          '2 cebes de Figueres',
          '3 ous',
          '200 ml de nata 35 % mg',
          '100 g de gruyère o cheddar ratllat',
          '1 cullerada sopera de farina',
          '50 g de mantega',
          'Un pessic de mou moscada',
          'Pebre negre',
          'Sal',
        ],
      },
      {
        p: 'També necessitarem un motllo metàl·lic o de ceràmica d’uns 24 cm de diàmetre.',
      },
    ],
    prep: [
      {
        ol: [
          'En primer lloc, prepararem la massa. Per això, tallarem la mantega a daus i la barregem molt ràpidament amb la farina i una punteta de sal. Si tenim una picadora, podem posar-ho tot a dins i engegar-la uns 10 segons. Si no, podem utilitzar un estrep o una forquilla. La idea és que la mantega no es desfaci, i per això evitem treballar-la (ergo, escalfar-la) amb els dits.',
          'Quan la barreja tingui aspecte de sorra agrumollada, hi afegim l’aigua directament de la nevera i acabem d’integrar la massa. Fixeu-vos en els vídeos que trobareu a la <a href="/pastis-de-poma-estil-america">recepta del pastís de poma</a>, i veureu la textura que hem d’assolir.',
          'Emboliquem la massa en paper film i la deixem una estona a la nevera. Podríem preparar-la el dia abans, fins i tot.',
          'Per preparar el farcit, tallem els porros a rodanxes d’uns 3 mm, incloent la part de color verd clar. Pelem i tallem també les cebes.',
          'Fonem els 50 g de mantega en una cassola de ferro o terrissa i hi sofregim les verdures a foc ben baix, amb un pessic de sal i la tapadora posada. Remenem de tant en tant.',
          'Quan el porro i la ceba ja siguin ben tendres, tirem una cullerada de farina a la cassola i deixem coure un parell de minuts més.',
          'Deixem refredar les verdures.',
          'Mentrestant, engeguem el forn a 190 °C, amb calor inferior i superior.',
          'Enfarinem bé el marbre i estenem la massa amb el corró. Des del centre, l’anem estirant fins aconseguir un diàmetre d’uns 35-40 cm, o suficient per cobrir el fons i les parets del motllo i que en sobri una mica.',
          'Traslladem la massa al motllo. Pessiguem les vores o tallem el que sobresurti fins deixar-ho ben bonic. Aquesta massa és fàcil de treballar i, com que conté mantega, no s’enganxa gens al motlle. Per tant, no cal untar-lo.',
          'Punxem el fons de la massa amb una forquilla.',
          'Quan el forn ja sigui ben calent, coem la crosta al terç superior del forn durant uns 7-8 minuts, fins que tot just es comenci a daurar.',
          'Aprofitem aquests minuts per acabar el farcit. Trenquem els ous i els barregem amb la nata, la nou moscada, el pebre i la sal.',
          'Gradualment, hi afegim la barreja de ceba i porro, ja freda, i la meitat del formatge ratllat.',
          'Aboquem aquesta barreja dins la crosta i la cobrim amb la resta del formatge.',
          'Tornem al forn i deixem que es cogui durant 35 minuts més, o fins que agafi un color torradet per les vores.',
          'Deixem que es refredi una mica i cap a la taula!',
        ],
      },
    ],
    variants: [
      {
        p: 'En aquest pastís, el tipus de formatge i de ceba que empreu determinarà la intensitat del gust. El formatge emmental, per exemple, és més suau que el cheddar i no té el punt picant del gruyère. I per tant, si no sou fans del formatge, no el notareu tant. Utilitzant cebes dolces o fins i tot cebes tendres també en suavitzareu el gust. Es tracta de trobar l’equilibri que fa per vosaltres.',
      },
    ],
    categories: ['berenar', 'carmanyola', 'plat-unic', 'primers'],
    tags: ['ceba', 'formatge', 'pastis', 'porro'],
  },
  {
    id: 'pastis-de-poma-rustic',
    createdAt: '2017-03-28T13:51:02+02:00',
    title: 'Pastís de poma rústic',
    intro: [
      {
        p: 'A casa tinc el crític gastronòmic que valora les receptes d’aquest blog i opina sobre els aspectes que caldria millorar abans de publicar-les. És exigent com sa mare i, per això, algunes receptes han seguit una evolució lenta (vam menjar molta pizza abans que sortís la definitiva!). Altres plats, però, han merescut la nota màxima* al primer intent. És el cas d’aquest pastís de poma, fàcil i baratíssim, que ha desaparegut ràpidament de la nostra nevera. Us animo a provar-lo. Si, com jo, aprecieu la sencillesa, la subtilesa dels sabors i els ingredients 100 % naturals, i detesteu les postres que entren a la boca com paper secant, agraireu el meu consell.',
      },
      {
        p: '* La nota màxima és un 9. Ja us he dit que era exigent…',
      },
    ],
    cost: 'Cost aproximat per ració: 0,20 € (en surten 6 racions).',
    unitCost: 0.2,
    ingredients: [
      {
        ul: [
          '5-6 pomes golden, o l’equivalent a 700 g',
          '175 g de sucre',
          '120 ml de llet de civada',
          '100 g de mantega',
          '75 g de farina',
          '2 ous a temperatura ambient',
          '1 llimona grossa',
          '1 beina de vainilla',
          '2 cullerades de postres de llevat Royal',
          'Un pessic de sal',
          'Un polsim de sucre amb aroma de vainilla per servir-lo',
        ],
      },
      {
        p: 'També necessitarem un motllo desmuntable d’uns 22 cm de diàmetre.',
      },
    ],
    prep: [
      {
        ol: [
          'Engeguem el forn a 185 °C sense ventilador.',
          'Posem un paper de forn a la base del motlle i engreixem una mica les parets.',
          'Ratllem la pell de la llimona (ben fina, sense gens de la part blanca) i n’espremem tot el suc. Tot això, ho posem en un bol gros.',
          'Pelem i tallem les pomes a gallons (de cadascuna en podem fer entre 8 i 12, segons com siguin de grosses). Aboquem els trossos de poma al bol amb el suc i la pell de la llimona i remenem amb les mans perquè s’impregnin bé.',
          'Fonem la mantega en un cassó.',
          'Obrim la beina de vainilla i, amb la punta del ganivet, en traiem totes les llavors. (Que això no ho heu fet mai? Doncs <a href="https://www.youtube.com/watch?v=ZlaiI13QdLM" target="_blank" rel="noopener">mireu com n’és, de fàcil</a>).',
          'Posem aquestes llavors a la mantega encara calenta i reservem.',
          'Per altra banda, tamisem la farina amb la sal i el llevat químic i reservem.',
          'Trenquem els ous i els batem junt amb el sucre fins que la barreja blanquegi i dobli el seu volum. Si teniu una batedora elèctrica, perfecte. Si no, necessitareu unes barnilles i una certa dosi de paciència. No defalliu, val la pena.',
          'Aquí afegim gradualment la mantega fosa i la llet, sense deixar de batre.',
          'Tot seguit hi incorporem la farina tamisada i remenem amb una espàtula. Hem de fer moviments suaus, de baix a dalt, fins que la mescla sigui ben homogènia.',
          'Aboquem aquesta massa (de consistència bastant líquida, ja veureu) al bol on tenim les pomes amb el suc i la ratlladura de llimona.',
          'Remenem i emplenem el motlle amb aquesta barreja. Repartim bé els fragments de poma i allisem una mica la superfície.',
          'Coem al forn durant 1 hora. En acabar, deixem reposar el pastís dins el forn uns 10 minuts més abans de treure’l i fer-lo refredar una mica.',
          'Just abans de servir, hi esposem una mica de sucre de llustre amb aroma de vainilla. Tebi, i amb una bola de gelat de vainilla, és irresistible!',
        ],
      },
    ],
    variants: [
      {
        p: 'Per aquest pastís podeu experimentar amb altres varietats de poma i aromes. Que no us agrada la vainilla? Cap problema: la canyella hi queda espectacular, i combina molt bé amb qualsevol varietat de poma. Proveu de fer-lo amb pomes Royal gala, Pink lady o Fuji, més cruixents i amb un toc més àcid. La llet de civada es pot substituir per llet de vaca normal i corrent.',
      },
    ],
    categories: ['berenar', 'postres'],
    tags: ['pastis', 'poma', 'sucre', 'vainilla'],
  },
  {
    id: 'arros-de-conill-amb-bolets',
    createdAt: '2017-02-28T19:17:09+02:00',
    title: 'Arròs de conill amb bolets',
    intro: [
      {
        p: 'L’arròs de conill és un dels plats que preparava la meva àvia els diumenges. Amb moltes probabilitats, seguit d’un fricandó o una sarsuela i una crema catalana, i rematat amb els cafès, copes i puros dels adults que convertien les sobretaules en una nebulosa. Sincerament, no recordo que aleshores el conill m’agradés tant com ara (potser ja havíem fet aquell experiment a classe de ciències naturals?), però mai no és tard per incorporar aquesta carn, magra i rica en proteïnes, al menú. Avui, amb uns bolets que, per exòtics, mai no haguessin coincidit amb el conill en una mateixa cassola.',
      },
    ],
    cost: 'Cost aproximat per ració: 2,40 €.',
    unitCost: 2.4,
    ingredients: [
      {
        ul: [
          '1/2 conill trossejat, amb el fetge',
          '400 g d’arròs rodó',
          '150 g de bolets shiitake',
          '1 ceba',
          '100 ml de vi blanc',
          '300 ml de brou vegetal',
          '2 grans d’all',
          'Oli d’oliva verge extra',
          'Sal i pebre blanc',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Posem una cassola al foc amb un raig d’oli. Quan estigui calent, hi saltem el conill, junt amb el fetge.',
          'Mentrestant, tallem la ceba a la brunesa i piquem els grans d’all ben petits.',
          'Eliminem el peu dels shiitake (que no s’aprofita, és massa llenyós) i tallem el barret a làmines fines.',
          'Un cop el conill estigui daurat per totes bandes, el retirem de la cassola. Al mateix oli, però a foc ben baix, sofregim la ceba.',
          'Passats uns cinc minuts, hi afegim els bolets i un dels grans d’all. Salpebrem i deixem que les verdures suïn.',
          'Abans que agafin color, hi tirem el vi blanc, que a la vegada ens servirà per desglaçar el fons de la cassola.',
          'Deixem que s’evapori una mica l’alcohol i tornem el conill a la cassola. Aquest cop, sense el fetge.',
          'Incorporem 300 ml de brou vegetal i 300 ml d’aigua.',
          'Tapem la cassola i deixem coure 15 minuts a foc baix des que l’aigua arrenca el bull.',
          'Aleshores hi tirem l’arròs i deixem coure 15 minuts més.',
          'Mentre, preparem una picada amb el gra d’all restant, el fetge que havíem saltat, sal i un rajolí d’oli.',
          'Aboquem la picada a la cassola. Remenem. Afegim sal o aigua, si convé, i deixem coure 5 minuts més.',
          'Deixem reposar l’arròs un parell de minuts abans de servir-lo.',
        ],
      },
    ],
    variants: [
      {
        p: 'En lloc dels shiitake podeu utilitzar camagrocs, moixernons hidratats, ceps o una barreja dels bolets que més us agradin. També podeu banyar l’arròs amb brou de pollastre, o simplement amb aigua. Per a un dinar de diumenge, afegiu al conill uns 300 g de costella ibèrica. Com sempre, l’únic que queda absolutament vetat és l’arròs de gra llarg o <em>paraboiled</em>.',
      },
    ],
    categories: ['plat-unic', 'primers', 'segons'],
    tags: ['arros', 'bolets', 'conill', 'shiitake'],
  },
  {
    id: 'cua-de-vedella-al-vi-negre',
    createdAt: '2017-01-31T19:06:47+02:00',
    title: 'Cua de vedella al vi negre',
    intro: [
      {
        p: 'La cua de vedella no és un dels talls més freqüents en la nostra cuina, segurament perquè requereix bastant temps de cocció. I com que representa un percentatge ben petit de l’animal, no sempre n’hi ha, a la carnisseria. Tanmateix és una de les carns més agraïdes de cuinar… i de menjar després! El fet que es cogui sense desossar fa que es desprengui la gelatina continguda als cartílags i adquireixi una consistència melosa, rica en col·lagen, i un sabor especial. La podeu preparar qualsevol tarda d’hivern que tingueu previst passar-la en mitjons, i premiar-vos amb un bon dinar l’endemà (d’un dia per l’altre encara millora). Aquells que, tot i menjar carn, no suporten la visió d’una vèrtebra, trobaran al final de tot una presentació alternativa en forma de timbal, amb la cua desossada i esmicolada.',
      },
    ],
    cost: 'Cost aproximat per ració: 4,78 € (Avui ens passem de pressupost, però el plat s’ho val).',
    unitCost: 4.78,
    ingredients: [
      {
        ul: [
          '2 cues de vedella tallades entremig de les vèrtebres',
          '1 ampolla de vi negre jove',
          '300 ml de brou vegetal',
          '8 escalunyes',
          '4 grans d’all',
          '1/2 branca d’api (tendra i sense fulles)',
          '2 fulles de llorer',
          '2 claus d’olor',
          '1 branqueta de timó',
          'Oli d’oliva verge extra',
          '50 g de mantega',
          'Sal, pebre',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Rentem els trossos de cua i els eixuguem amb un drap.',
          'Piquem les escalunyes i l’all. Traiem els filaments de l’api i el tallem a rodanxes ben fines.',
          'Daurem la cua a tandes, en una cassola o cocotte de ferro, amb una mica d’oli i a foc mig-alt. Procurem segellar els trossos per totes bandes. Els anem retirant de la cassola i els salpebrem.',
          'Quan ja tenim tota la carn saltada, abaixem el foc al mínim. Si cal, posem una mica més d’oli a la cassola i sofregim les escalunyes i l’api fins que comencin a transparentar.',
          'Llavors hi afegim l’all i el deixem coure tres minuts més.',
          'Tornem la cua i els sucs que s’hagin pogut desprendre cap a la cassola. Cobrim amb el vi i el brou. (I si la carn no queda coberta, hi afegim una mica d’aigua).',
          'Hi posem també el llorer, el clau i el timó i tapem.',
          'La cua ha de coure gairebé 3 hores, o fins que la carn es comenci a separar de l’os. El temps dependrà de la mida dels talls i també del recipient. Durant la cocció anem remenant de tant en tant, i incorporem aigua si veiem que s’asseca. El líquid ha de ser abundant. Sobretot, que no s’enganxi la carn!',
          'Quan veiem que la cua està a punt, la retirem de la cassola i tastem la salsa. Rectifiquem de sal, si és necessari, i descartem les herbes aromàtiques.',
          'Passem la salsa pel passa-purés. Si és excessivament líquida, la fem reduir amb la cassola destapada fins que tingui la consistència adient.',
          'La deixem refredar i la refrigerem una estona perquè es solidifiqui (quedarà totalment gelificada, ja veureu). Així podrem retirar tota la capa de greix que s’haurà format al damunt.',
          'Arribat el moment de servir el plat, tornem la carn a la cassola, junt amb la salsa, hi afegim la mantega i l’escalfem 5-10 minuts abans de portar-la a taula. La cua queda bé acompanyada de puré de patates, arròs blanc o qualsevol altra guarnició que pugui absorbir part de la salsa. O amb unes verdures confitades (pastanagues, cols de Brussel·les) i força pa per sucar.',
        ],
      },
    ],
    variants: [
      {
        p: 'Aquest plat es basa molt directament en la recepta cordovesa del <em>rabo de toro</em> o de la cua <em>alla vaccinara</em> típica de Roma, adaptant la cocció a una carn més melosa i en porcions més petites. Les verdures utilitzades per al sofregit podrien incloure també pastanaga, pebrot i tomàquet. En el fons, doncs, guisar la cua no difereix gaire de fer un estofat tradicional; només cal incrementar el temps. Tractant-se d’un ingredient principal, el tipus de vi utilitzat influirà bastant en els resultats. Per això us recomano que sigui d’una certa qualitat; no vi per cuinar.',
      },
      {
        p: 'Us aconsello també que prepareu més quantitat de la necessària i reserveu o congeleu la carn que us sobri amb la salsa apart. Així, al cap d’uns dies, podeu fer una altra presentació en forma de timbal. Per això només cal desossar i esmicolar la carn, posar-la en uns motlles cilíndrics i abocar-hi una mica de salsa calenta, fins on admeti el motlle. En refredar-se la salsa, i gràcies a la gelatina que conté, us quedarà una mena de flam, que podeu decorar amb nabius i/o xips de moniato.',
      },
    ],
    categories: ['plat-unic', 'segons'],
    tags: ['all', 'brou', 'carn', 'clau', 'escalunyes', 'llorer', 'timo', 'vedella', 'vi-negre'],
  },
  {
    id: 'sopa-de-miso',
    createdAt: '2016-12-31T18:33:26+02:00',
    title: 'Sopa de miso',
    intro: [
      {
        p: 'L’abundància i la freqüència dels àpats durant festes ja comença a saturar les meves papil·les gustatives. No vull ni pensar en les parets de les artèries, que afortunadament no puc veure. O en la bàscula! Per acabar-ho d’adobar, a les tradicionals celebracions d’aquest any s’han afegit alguns sopars d’amics i aniversaris que allarguen el període pantagruèlic fins a mitjans de gener. Per això he aparcat les receptes més típiques d’aquestes dates (canelons, escudella i carn d’olla, troncs de Nadal i similars) i he preparat allò que realment em demana el cos: una sopa lleugera, reconfortant, saborosa però no embafosa; una sopa que es pot beure directament del bol per escalfar el cos i les mans. Proveu-la si mai no heu tastat el <em>miso</em> i, quan descobriu aquest sabor, us preguntareu per què havíeu esperat tant!',
      },
    ],
    cost: 'Cost aproximat per ració: 0,85 €.',
    unitCost: 0.85,
    ingredients: [
      {
        ul: [
          '2 cullerades soperes d’algues <em><a href="http://www.orientalmarket.es/shop/algas-wakame-secas-100gr.html" target="_blank" rel="noopener">wakame</a></em> deshidratades',
          '1 pastilla de <a href="https://ca.wikipedia.org/wiki/Tofu" target="_blank" rel="noopener">tofu</a>',
          '1 cullerada sopera de <em><a href="http://www.japonshop.com/algas-condimentos/caldo-bonito-polvo-dashi-no-moto-1" target="_blank" rel="noopener">dashi granulat</a></em>',
          '4 cullerades soperes de <em><a href="https://ca.wikipedia.org/wiki/Miso" target="_blank" rel="noopener">miso</a></em> vermell',
          '2 cullerades soperes de ceba tendra a rodanxetes',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Posem a estovar el <em>wakame</em> durant 10 minuts.',
          'L’escorrem i el triturem una mica més fi amb el ganivet.',
          'Tallem el tofu a daus d’1 cm aprox.',
          'Escalfem 1 litre d’aigua i hi dissolem el brou de bonítol.',
          'Abans que arribi a bullir, separem un cullerot de brou per dissoldre-hi la pasta de <em>miso</em>. Quan el <em>miso</em> estigui del tot desfet, el reincorporem a l’olla.',
          'Afegim també el <em>wakame</em> i el tofu, i escalfem fins al llindar d’ebullició. Mai hem de superar aquest punt.',
          'Guarnim amb la ceba tendra* i servim immediatament. El <em>miso</em> s’assola i per això no convé fer-lo esperar (només cal remenar-lo una mica, si és el cas).',
        ],
      },
    ],
    variants: [
      {
        p: 'El <em>dashi</em> en pols que hem utilitzat no deixa de ser com els nostres cubets Maggi. El brou genuí es prepara bullint alga kombu i afegint-hi després flocs de bonítol sec (<em>katsuobushi</em>). Fet això, només cal deixar reposar tres minuts i filtrar. Resulta més saborós però té l’inconvenient que prèviament cal rehidratar el kombu durant unes 3 hores, i això requereix planificació. Per una versió més suau de la sopa, podeu emprar <em>miso</em> blanc en lloc de vermell.',
      },
      {
        p: '* No surt a la foto… Tenia tantes ganes de prendre’m la sopa, que m’he oblidat de posar-l’hi!',
      },
    ],
    categories: ['primers'],
    tags: ['algues', 'miso', 'sopa', 'tofu', 'wakame'],
  },
  {
    id: 'peres-al-vi',
    createdAt: '2016-11-20T20:21:22+02:00',
    title: 'Peres al vi',
    intro: [
      {
        p: 'Les peres al vi són unes postres una mica passades de moda, de les que molt probablement encara trobaríem a la carta d’un Novotel. En algun moment, i coincidint amb el <em>boom</em> dels alginats, les culleres absurdes i els plats de pissarra, aquestes postres van ser arraconades. Per sort no som gens esnobs. I res ens ve més de gust en ple hivern que unes peres banyades en vi i espècies, una versió sòlida del Glühwein que ens fa entrar en calor i que omple la casa de perfums de Nadal.',
      },
    ],
    cost: 'Cost aproximat per ració: 0,26 €.',
    unitCost: 0.26,
    ingredients: [
      {
        ul: [
          '4 peres Conference no excessivament madures',
          '75 g de sucre',
          '60 ml de vi negre (com ara un D.O. Montsant)',
          '2 cullerades soperes d’aigua',
          '1 cullerada de cafè de gingebre fresc ratllat o 1/2 cullerada si és en pols',
          '1/2 cullerada de cafè de canyella en pols',
          '4 beines de cardamom',
          '1 clau d’olor',
          '1 anís estrellat',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Pelem i partim les peres longitudinalment. Els traiem el cor amb una cullereta o un buidador.',
          'Posem totes les espècies en una paella a foc baix.',
          'Quan comencin a desprendre olor, hi afegim el sucre i remenem.',
          'Hi incorporem aleshores el vi i l’aigua.',
          'Hi afegim les mitges peres, amb la part plana a baix, i deixem que es coguin molt lentament, amb la paella tapada, durant uns 10 minuts.',
          'Tombem les peres i les deixem 10 minuts més, o fins que el líquid espesseixi però encara no comenci a caramel·litzar.',
          'Apaguem el foc i deixem refredar. Les peres es poden servir fredes o a temperatura ambient, soles o acompanyades d’una bola de gelat de vainilla.',
        ],
      },
    ],
    variants: [
      {
        p: 'La pera és ideal per aquesta preparació, ja que absorbeix el xarop i el seu gust harmonitza molt bé amb les espècies utilitzades. Tot i així, es podria provar la mateixa recepta amb meló (sobretot quan ens surt una mica insípid) o amb poma tipus golden.',
      },
    ],
    categories: ['postres'],
    tags: ['anis', 'canyella', 'cardamom', 'clau', 'gingebre', 'pera', 'sucre', 'vi-negre'],
  },
  {
    id: 'sushi',
    createdAt: '2016-10-12T19:06:35+02:00',
    title: 'Sushi',
    intro: [
      {
        p: 'Sí, <em>sushi</em>! En un blog dedicat a receptes econòmiques, i sense fer servir trucs ni ingredients de segona! El <em>kappa maki</em>, farcit amb cogombre, és un dels rotlles més populars al Japó i també un dels més senzills d’elaborar, ideal per als que s’inicien en aquest art i per als aprensius que no gosen menjar peix cru. Si no ho heu provat mai,  ja veureu que enrotllar <em>makis</em> és molt més fàcil del que sembla. Infinitament més senzill que liar-se una cigarreta a mà, i molt més profitós! Seguiu atentament les instruccions, practiqueu… i els acabareu fent amb els ulls tancats!',
      },
    ],
    cost: 'Cost aproximat per ració: 0,92 € (en surten 6 racions).',
    unitCost: 0.92,
    ingredients: [
      {
        ul: [
          '400 g d’arròs Nomen de gra rodó (no, no cal comprar arròs especial)',
          '5 fulls d’<a href="http://www.orientalmarket.es/shop/alga-yakitori-50-hojas.html" target="_blank" rel="noopener">alga nori</a>',
          '1 cogombre holandès',
          '120 ml de <a href="http://www.orientalmarket.es/shop/vinagre-de-arroz-tamanoi-500-ml.html" target="_blank" rel="noopener">vinagre d’arròs</a>',
          '3 cullerades soperes de sucre',
          '2 cullerades de postres de sal',
          'Salsa de soja',
          '<em><a href="http://www.orientalmarket.es/shop/wasabi-selected-sb-30-gr.html" target="_blank" rel="noopener">Wasabi</a></em> en pols o en pasta',
          '50 g de <a href="http://www.orientalmarket.es/shop/gengibre-encurtido-50gr.html" target="_blank" rel="noopener">gingebre</a> confitat',
          'Sèsam (opcional)',
        ],
      },
      {
        p: 'També necessitarem una <a href="http://www.orientalmarket.es/shop/esterilla-p-sushi-27x27cm-m-43.html">estoreta de bambú</a> per formar els rotlles, un colador gros per rentar l’arròs i una safata de plàstic, fusta o vidre (que no sigui metàl·lica) per refredar-lo.',
      },
    ],
    prep: [
      {
        ol: [
          'Rentem l’arròs amb 3 o 4 aigües, fins que pràcticament surtin transparents, tal com ho fa <a href="https://www.youtube.com/watch?v=knGf1OBxYxc" target="_blank" rel="noopener">aquest xicot</a>.',
          'Tot seguit, deixem l’arròs en remull durant 30 minuts com a mínim.',
          'Passat aquest temps, l’escorrem i el posem en un cassó amb el mateix volum d’aigua i una mica més (un 10 % aproximadament). L’aigua ha d’arribar un dit per sobre del nivell de l’arròs.',
          'Engeguem el foc i esperem que arrenqui el bull. Deixem bullir l’arròs 1 minut a foc viu i 10 minuts més a foc baix, amb el cassó tapat i sense remenar.',
          'Mentre es cou l’arròs, barregem el vinagre amb el sucre i la sal, remenant perquè es dissolgui tot bé. Reservem.',
          'També podem aprofitar per tallar els fulls d’alga per la meitat i per preparar el <em>wasabi</em> si l’hem comprat en pols. Simplement, l’hem de barrejar amb la mateixa quantitat d’aigua fins obtenir una massa modelable, gairebé com plastilina.',
          'Quan l’arròs sigui cuit, l’escampem sobre la safata. Hi aboquem la barreja de vinagre i la repartim bé amb una espàtula o cullera de fusta. Si cal, ventem l’arròs amb un vano perquè es refredi.',
          'Mentrestant, podem veure tot el procés que segueix en <a href="https://www.youtube.com/watch?v=UNwWeV8B1XI" target="_blank" rel="noopener">aquest vídeo</a> tan entenedor.',
          'Rentem el cogombre, el pelem o raspem lleugerament la pell i el tallem longitudinalment per la meitat. A continuació, partim cada meitat també longitudinalment en quatre o cinc trossos, segons el gruix del cogombre. Descartem la part de les llavors.',
          'Estenem l’estoreta i hi posem mitja fulla d’alga <em>nori</em>.',
          'Amb les mans molles, agafem un sarpat d’arròs i cobrim 3/4 parts de l’alga, vigilant que el gruix no sigui excessiu.',
          'Al mig de l’arròs escampem unes llavors de sèsam i a sobre hi disposem les tires de cogombre.',
          'Amb l’ajut de l’estoreta, formem el rotlle i premem perquè quedi ben compacte. Si passem un dit moll sobre el tros d’alga que queda al descobert, ens assegurem que quedi perfectament segellat.',
          'Tallem els extrems amb el ganivet. Tot seguit, dividim el cilindre en 6 trossos. El ganivet ha d’estar molt ben esmolat. Mullant la fulla amb una mica d’aigua o vinagre d’arròs, encara lliscarà millor.',
          'Servim els <em>makis</em> junt amb una muntanyeta de wasabi, uns trossets de gingebre i un petit bol de salsa de soja.',
        ],
      },
    ],
    extras: [
      {
        h2: 'Variants i consells',
      },
      {
        p: 'A més del sèsam, podeu afegir alvocat trossejat, tires de ceba tendra o de pastanaga. De fet, els ingredients poden variar molt, incloure peix (generalment tonyina o salmó, però també cranc, anxoves…) o una truita tallada a tires.',
      },
      {
        p: 'També es pot incorporar el <em>wasabi</em> dins del rotlle en lloc de servir-lo a banda. En aquest cas, caldria sucar el dit al <em>wasabi</em> i fer una pinzellada sobre l’arròs abans de posar-hi el sèsam o el cogombre. Això sí, compte, que és molt picant! Renteu-vos les mans després de tocar-lo i no se us acudeixi fregar-vos els ulls o les mucoses! Al seu favor, cal dir que és un potent bactericida i us alliberarà els sinus nasals en cas de congestió. Molt millor que el Vicks VapoRup!',
      },
      {
        h3: 'I com es menja?',
      },
      {
        p: 'Aquests <em>makis</em>, com tots els que tenen l’alga <em>nori</em> a l’exterior, es poden agafar amb els dits. Es mengen sencers, després de posar-hi una punteta de <em>wasabi</em> amb el bastonet i sucar-los lleugerament a la salsa de soja.',
      },
      {
        p: 'El gingebre se serveix com acompanyament, però no es menja junt amb el <em>maki</em>, sinó entre un mos i un altre. D’aquesta manera, al refrescar la boca, permet apreciar millor els sabors de les diverses varietats de sushi que conformen el plat o rebaixar la picor del <em>wasabi</em>.',
      },
    ],
    categories: ['carmanyola', 'plat-unic', 'primers'],
    tags: ['arros', 'asia', 'cogombre', 'sesam', 'wasabi'],
  },
  {
    id: 'musclos-al-curri',
    createdAt: '2016-09-05T11:23:39+02:00',
    title: 'Musclos al curri',
    intro: [
      {
        p: 'Quan els musclos són frescos i desprenen aquella intensa olor de mar, me’ls menjaria fins i tot amb closca. Pocs plats em recorden l’estiu com els musclos. I poques èpoques de l’any enyoro com l’estiu, especialment quan estic a punt de substituir el blau del cel pel de les pantalles. Cal ben poca cosa per condimentar aquest menjar d’escullera: una copa de vi blanc, una llimona espremuda… La intensitat del seu propi suc fa innecessària fins i tot la sal. En aquest cas, i per variar, una senzilla salsa amb curri, vellutada i groguenca com la carn del musclo, incorpora aromes exòtics a un ingredient ben pròxim i popular.',
      },
    ],
    cost: 'Cost aproximat per ració: 0,66 €.',
    unitCost: 0.66,
    ingredients: [
      {
        ul: [
          '1 kg de musclos ben frescos',
          '1 ceba',
          '1 llima',
          '1 cullerada de postres de curri suau',
          '1 cullerada de postres de farina de blat de moro',
          'Mantega',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Remullem els musclos 5 minuts en aigua salada. Descartem els que flotin i piquem els oberts contra la pica, per veure si es tanquen (o sigui, que estan vius) o no. Si no fan cap paper, també els llencem.',
          'Arrenquem els bissus (les barbes) dels musclos i rasquem les possibles adherències amb un ganivet.',
          'Els posem en un recipient gran, tapats, i engeguem el foc.',
          'Quan els musclos s’hagin obert, retirem una de les valves i els disposem en una plata de servir. Filtrem i reservem el suc que han deixat anar. Un colador amb un tros de paper de cuina farà el fet.',
          'Preparem ara una salsa d’allò més bàsic. Piquem en primer lloc la ceba.',
          'La sofregim en una nou de mantega, uns 15 minuts a foc baix, fins que estigui tendra.',
          'Hi tirem el curri i deixem un parell de minuts.',
          'Deixatem una cullerada de farina de blat de moro en el suc dels musclos i l’aboquem damunt del sofregit de ceba i curri. Tot remenant, mantenim la salsa a foc baix fins que adquireix una certa consistència.',
          'Ruixem els musclos amb el suc de la llima i repartim la salsa per sobre. Ja els podem servir!',
        ],
      },
    ],
    variants: [
      {
        p: 'Hi ha qui té el costum d’afegir una mica de vi blanc a l’olla d’obrir els musclos. Amb el curri és malaguanyat, perquè no s’hi adiu pas gaire. Millor que us el serviu el vi ben fresquet, amb unes olives, per fer l’aperitiu! Si us agrada la salsa més líquida i untuosa, empreu nata líquida en lloc d’espessir-la amb farina de blat de moro. O llet de coco, per fer un curri més genuí.',
      },
    ],
    categories: ['primers', 'segons'],
    tags: ['curri', 'musclos'],
  },
  {
    id: 'spaghetti-cacio-e-pepe',
    createdAt: '2016-07-11T20:00:20+02:00',
    title: 'Spaghetti cacio e pepe',
    intro: [
      {
        p: 'Mireu si és bàsica aquesta recepta, que el mateix nom del plat funciona a la vegada com a llista d’ingredients! A més de l’aigua i la sal per bullir la pasta, per als spaghetti <em>cacio e pepe</em> només cal això: spaghetti, formatge i pebre negre. El que més m’intrigava, de fet, no tenia res a veure amb l’elaboració del plat –ben senzilla– sinó amb l’etimologia de la paraula <em>cacio</em>, que jo associava primer amb el <em>caciocavallo, </em>una varietat de formatge que, en canvi, no apareix a la recepta<em>.</em>',
      },
      {
        p: 'I és que <em>cacio</em> prové del mot <em>caseus</em> amb què els llatins anomenaven el formatge. D’aquesta arrel deriven entre d’altres la caseïna, el <em>queso</em> castellà, el <em>Käse</em> alemany o el <em>cheese</em> anglès. Per contra, el fet que els legionaris romans utilitzessin sovint el terme <em>formaticum</em> per indicar una forma d’aquest producte va donar lloc a les denominacions del formatge en idiomes com el català, el francès o l’italià.',
      },
      {
        p: 'Els spaghetti <em>cacio e pepe</em> són un dels pilars de la <em>cucina povera</em> romana que, com tantes altres menges i tradicions, val la pena recuperar i incorporar a la nostra cuina de cada dia.',
      },
    ],
    cost: 'Cost aproximat per ració: 0,90 €.',
    unitCost: 0.9,
    ingredients: [
      {
        ul: [
          '400 g de spaghetti',
          '100 g de formatge pecorino romano',
          'Pebre negre (mínim 1 cullerada de postres plena, un cop triturat)',
          '40 g de sal',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Posem a bullir una olla amb 4 l d’aigua salada.',
          'Hi tirem la pasta i la deixem coure el temps que indiqui el paquet.',
          'Mentrestant, ratllem el formatge i triturem el pebre amb el molinet. Els barregem en un recipient gros, que després pugui contenir la pasta amb comoditat.',
          'Quan la pasta estigui al <em>dente</em>, reservem un cullerot de l’aigua de cocció. Escorrem aleshores la pasta i l’aboquem al recipient amb el formatge i el pebre, tot remenant.',
          'Hi afegim una mica de l’aigua de cocció i remenem enèrgicament fins que el formatge, en fondre’s, es converteixi en una crema. Rectifiquem de formatge o d’aigua de cocció, segons com quedi la consistència d’aquesta salsa.',
          'Servim immediatament, amb una mica més de formatge ratllat i pebre mòlt per sobre. Millor encara si prèviament escalfem els plats.',
        ],
      },
    ],
    variants: [
      {
        p: 'El pecorino romano és un formatge d’ovella curat, però més tendre que el parmesà o el grana padano. Malauradament, només es troba en tendes especialitzades. Per això, si no en podeu aconseguir, proveu a utilitzar un grana padano ben tendre, o un manxec que es ratlli bé. Si a causa del tipus de formatge emprat la crema de formatge resulta un pèl gomosa, proveu a afegir-hi una cullerada abundant d’oli d’oliva o mantega fosa.',
      },
    ],
    categories: ['primers'],
    tags: ['formatge', 'pasta', 'pebre', 'spaghetti'],
  },
  {
    id: 'pastis-de-iogurt-i-llet-condensada',
    createdAt: '2016-06-19T18:33:51+02:00',
    title: 'Pastís de iogurt i llet condensada',
    intro: [
      {
        p: 'Aquesta és una recepta ideal per la canalla. O per qui, arribat el moment de les postres o del berenar, té una certa tendència a fer retrogressions a la infantesa (que d’aquests en coneixem uns quants…). No només perquè aquest pastís té un gust dolcet i una textura gelatinosa que agrada a tothom. Té l’al·licient afegit de ser extremadament senzill i no requerir forn. I, per aquest motiu, el poden preparar tant els nens petits com els adults que es consideren ineptes per la cuina. I amb zero possibilitats de fracàs o de prendre mal! Nois, ja no us queden excuses… I per netejar els quatre estris que embrutareu, tampoc!',
      },
    ],
    cost: 'Cost aproximat per ració: 0,68 € (en surten 8 racions).',
    unitCost: 0.68,
    ingredients: [
      {
        ul: [
          '150 g de galetes tipus Digestive',
          '75 g de mantega a temperatura ambient',
          '12 fulls de <a href="http://www.carritus.com/images/images_pms/35/28781835.png" target="_blank" rel="noopener">gelatina</a>',
          '3 iogurts naturals sense ensucrar',
          '200 g de nata',
          '1 pot de llet condensada de 400 g',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Triturem les galetes i les barregem amb la mantega. (Si tenim picadora, ho podem triturar tot junt. Si no, posem les galetes en una bossa de plàstic resistent i passem el corró per sobre. Després hi barregem la mantega a mà). Al final, això ha de tenir un aspecte similar al de la sorra humida.',
          'Agafem un motlle desmuntable d’uns 20 cm de diàmetre i posem un tros de paper de forn a la base.',
          'Aboquem la barreja anterior al motlle i premem per formar una base uniforme. Reservem a la nevera.',
          'Mentrestant, posem els fulls de gelatina a estovar en aigua freda.',
          'Barregem els iogurts, la nata (tal com surt del pot, sense muntar) i la llet condensada. Mesclem amb les barnilles durant un parell de minuts.',
          'Escorrem la gelatina i la posem en un cassó a foc ben baix. (Si preparem el pastís amb la canalla, aquest serà l’únic pas del qual ens ocuparem nosaltres).',
          'Quan la gelatina s’hagi fos del tot, la incorporem a la mescla de llet, iogurt i nata i remenem bé.',
          'Aboquem la barreja al motlle i posem a la nevera durant un mínim de 3 hores.',
          'Ja podeu desemmotllar el pastís i servir-lo!',
        ],
      },
    ],
    variants: [
      {
        p: 'Per afegir una nota de color (però també un extra de dolçor), podeu recobrir el pastís amb un coulis de gerds o fruits del bosc preparat seguint la <a href="/panna-cotta-amb-coulis-vermell" target="_blank" rel="noopener">recepta de la panna cotta</a>, o bé amb melmelada de maduixes. Una altra alternativa és decorar-lo amb cacau en pols.',
      },
    ],
    categories: ['postres'],
    tags: ['gelatina', 'iogurt', 'llet-condensada', 'nata'],
  },
  {
    id: 'mandonguilles-picants',
    createdAt: '2016-05-29T19:20:22+02:00',
    title: 'Mandonguilles picants',
    intro: [
      {
        p: 'Si és cert que totes les tradicions culinàries tenen la seva pròpia versió de les mandonguilles, és fàcil endevinar d’on provenen les que us convido a fer seguint aquesta recepta: Garam Masala, cúrcuma, comí, cardamom… L’Índia té una cuina plena d’espècies que escalfen el cos i tenyeixen les salses de colors càlids. Malauradament, només puc descriure l’olor que envaeix la casa quan aquest plat fa xup-xup al foc: un aroma opulent, del color del curry, que us transportarà uns quants milers de quilòmetres cap a l’est. Acompanyeu el viatge amb una cervesa ben fresca. Sempre ajuda!',
      },
    ],
    cost: 'Cost aproximat per ració: 1,26 €.',
    unitCost: 1.26,
    ingredients: [
      {
        ul: [
          '400 g de carn picada de vedella',
          '1 ceba mitjana',
          '5 bitxos petits (4 només seran per decorar el plat)',
          '75 g de tomàquet trossejat',
          '5 grans d’all',
          'Un tros de gingebre de la mida d’una nou',
          '3 beines de cardamom',
          '1 cullerada de postres de Garam Masala',
          '1 cullerada de postres de cúrcuma',
          '1/2 cullerada de postres de llavors de comí',
          'Pebre vermell picant (al vostre gust)',
          '2 branques de coriandre',
          '30 g de farina de cigrons o de blat de moro',
          'Iogurt natural (2-3 cullerades)',
          'Sal',
          'Oli d’oliva',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Ratllem els grans d’all i el gingebre i els barregem, formant una pasta.',
          'Piquem ben fina la ceba.',
          'Piquem també un dels bitxos i les fulles de coriandre.',
          'Aboquem la carn en un bol. Hi incorporem la meitat de la pasta d’all i gingebre, la meitat de la ceba picada i del coriandre, i assaonem amb la meitat del Garam Masala i del pebre vermell (la resta d’aquests ingredients la reservem per la salsa).',
          'També hi afegim el bitxo picat, una cullerada de farina i un pessic de sal.',
          'Pastem fins que la barreja sigui homogènia i deixem reposar una estona a la nevera.',
          'Formem entre 12 i 16 mandonguilles amb les mans.',
          'Les arrebossem lleugerament amb farina i les fregim en una mica d’oli fins que siguin daurades.',
          'Les deixem escórrer damunt de paper de cuina mentre preparem la salsa.',
          'Colem l’oli de fregir les mandonguilles. Hi sofregim la ceba restant, a foc baix, durant uns 20 minuts.',
          'Hi afegim el comí i el cardamom i deixem 5 minuts més, vigilant que no se’ns cremin.',
          'Aleshores hi incorporem la pasta d’all i gingebre, el Garam Masala i el pebre vermell que teníem reservats. Hi afegim també la cúrcuma i una mica d’aigua si la barreja està massa eixuta. Remenem i deixem coure uns 3 minuts.',
          'Hi tirem el tomàquet i el iogurt, sempre remenant, i abaixem la flama al mínim.',
          'Afegim les mandonguilles a la salsa.',
          'Hi aboquem també uns 300 ml d’aigua, tapem i deixem coure un 20 minuts.',
          'Servim les mandonguilles damunt d’una base d’arròs basmati, amb una mica de coriandre pel damunt i un bitxo per comensal (per als valents!).',
        ],
      },
    ],
    variants: [
      {
        p: 'Si no suporteu gaire bé el picant, podeu prescindir del bitxo i del pebre vermell. Amb el Garam Masala, l’all i el gingebre, aquestes mandonguilles ja tenen un bon <em>punch</em>. I si els voleu donar un sabor més afruitat i exòtic, substituïu els tomàquets per trossets de mango i el iogurt per llet de coco. Que les voleu encara més índies? Utilitzeu carn picada de xai.',
      },
    ],
    categories: ['carmanyola', 'plat-unic', 'segons'],
    tags: ['bitxo', 'cardamom', 'carn', 'curcuma', 'ceba', 'comi', 'garam-masala', 'gingebre', 'mandonguilles'],
  },
  {
    id: 'flao-eivissenc',
    createdAt: '2016-04-27T22:36:32+02:00',
    title: 'Flaó eivissenc',
    intro: [
      {
        p: 'Per plantar cara als dolços excessivament ensucrats i colorits, que pacientment espero veure evolucionar cap a l’extinció, no hi ha res com recuperar els receptaris de les àvies. La pastisseria tradicional, en les seves múltiples i rústiques formes (orelletes, coques, pans de pessic, saginades…) està feta amb ingredients bàsics, naturals i de proximitat; és simple, barata, sense pretensions i, sobretot, connecta amb el nostre ADN. El flaó reuneix totes aquestes qualitats. Afortunadament, igual que s’estan recuperant varietats de tomàquet que semblaven extingides, també hi ha qui es dedica a salvar els receptaris antics de la crema i donar una nova vida als plats que durant segles han alimentat els nostres avantpassats. Tant de bo sigui aquesta la moda que s’acabi imposant.',
      },
    ],
    cost: 'Cost aproximat per ració: 0,75 € (en surten 8 racions molt generoses).',
    unitCost: 0.75,
    ingredients: [
      {
        h3: 'Per la crosta:',
      },
      {
        ul: [
          '400 g de farina',
          '100 g de mantega',
          '100 g de sucre',
          '2 rovells d’ou',
          '100 ml d’aigua freda',
          '1/2 cullerada de matafaluga picada amb el morter',
        ],
      },
      {
        h3: 'Per al farcit:',
      },
      {
        ul: [
          '250 g de formatge de Burgos',
          '250 g de <a href="http://montesinos.es/productos/queso-fresco-de-cabra/" target="_blank" rel="noopener">formatge tendre de cabra</a>',
          '300 g de sucre',
          '4 ous',
          '10 fulles de menta verda (<em>hierbabuena</em>)',
        ],
      },
      {
        p: 'També necessitarem un motlle baix i ample, d’uns 26 cm de diàmetre, i sucre de llustre per decorar.',
      },
    ],
    prep: [
      {
        ol: [
          'Engeguem el forn a 180 °C, amb calor superior i inferior (sense ventilador) i prepararem la crosta del flaó.',
          'Posem el sucre, la mantega, els dos rovells i l’aigua en un bol gros.',
          'Remenem la barreja amb una mà. Veureu que de moment és molt aigualida.',
          'Hi afegim la farina i la matafaluga en dues o tres tandes, i seguim pastant amb la mà.',
          'Arribarà un punt que la massa ja no se’ns enganxarà als dits. Aleshores parem.',
          'Enfarinem el marbre. Hi dipositem la bola de massa i l’aplanem amb les mans.',
          'Empolvorem lleugerament de farina també la superfície de la massa i l’estirem amb el corró.',
          'Quan la massa tingui el diàmetre suficient per folrar la base i les parets del motlle, l’hi traslladem amb l’ajut del corró (o de <a href="https://www.youtube.com/watch?v=Ra5qTmIb2e0">qualsevol altra manera</a> que ens pugui anar bé) i la reservem a la nevera.',
          'Per al farcit, posem els formatges, el sucre, els ous i les fulletes de menta verda al vas de la batedora. Triturem fins que la textura sigui ben fina.',
          'Aboquem aquesta mescla al motlle.',
          'Tallem les vores sobrants de la crosta, deixant que sobresurti aproximadament 1 cm. per sobre del nivell del farcit.',
          'Posem el flaó al forn i el deixem coure uns 45-50 minuts. (Ens hem de fixar en el color: el farcit es torna daurat i la massa es comença a torrar).',
          'Traiem el flaó del forn i el deixem refredar completament. No sigueu impacients. Penseu que, en refredar-se, el flaó es consolida i el podreu tallar sense que es desmunti.',
          'Un cop ben fred, l’empolvorem amb sucre de llustre, el decorem amb unes fulletes de menta verda i el servim.',
        ],
      },
    ],
    variants: [
      {
        p: 'Aquesta és una de les receptes més bàsiques del flaó eivissenc, un pastís rústic del qual existeixen tantes versions com cases hi ha a l’illa. En algunes hi afegeixen anís, o elaboren la crosta amb oli, o el serveixen amb una mica de canyella. Jo he preferit limitar els ingredients, però contemplar aquestes altres opcions com alternatives molt vàlides. El formatge tendre de cabra (compte: no és el típic rul·lo que s’acostuma a servir en amanides!) es pot substituir per mató o recuit. També es pot afegir al farcit la ratlladura d’una llimona. De qualsevol manera, el flaó resulta un pastís deliciós. Proveu-lo!',
      },
    ],
    categories: ['berenar', 'postres'],
    tags: ['farina', 'flao', 'formatge', 'mantega', 'ou', 'sucre'],
  },
  {
    id: 'croquetes-de-pollastre',
    createdAt: '2016-03-25T21:13:16+02:00',
    title: 'Croquetes de pollastre',
    intro: [
      {
        p: 'Algun cop us heu entretingut a llegir els ingredients de les croquetes industrials, especialment les congelades? I, sobretot, us heu fixat en la proporció de pollastre (o pernil, o bacallà…) que contenen? Feu-ho. Us asseguro que serà el millor al·licient per començar a fer croquetes casolanes. No us tireu enrere si us sembla una feina entretinguda. Aquí teniu uns quants motius que justifiquen el temps emprat:',
      },
      {
        ol: [
          'A les vostres croquetes hi haurà més carn (o peix) i menys beixamel que a les industrials. Això les farà més nutritives, més gustoses i menys calòriques.',
          'No hi trobareu conservants ni ingredients desconeguts.',
          'El cost és irrisori. I, si en prepareu grans quantitats per congelar, veureu que l’estona invertida tampoc no és gaire rellevant.',
          'Podeu afegir condiments o altres ingredients a la massa fins aconseguir la croqueta que més s’acosti al vostre gust personal. Innoveu! La cuina de l’aprofitament que ens agrada és aquesta: la que converteix les restes de menjar en un àpat encara millor.',
        ],
      },
    ],
    cost: 'Cost aproximat per ració: 0,42 € (surten unes 30 croquetes).',
    unitCost: 0.42,
    ingredients: [
      {
        ul: [
          '320 g de restes de pollastre a l’ast, rostit, guisat o a la planxa (i si entre els sobrants hi ha alguna verdureta, uns pinyons o unes orellanes, encara millor)',
          '250 g de ceba',
          '60 g de farina, més la que utilitzarem per arrebossar',
          '60 g de mantega',
          '400 ml de llet sencera',
          '4 o 5 cullerades del suc del guisat o de xerès.',
          '2 ous',
          'Pa ratllat',
          'Oli',
          'Sal, pebre, nou moscada',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Desossem i piquem el pollastre a trossets de la mida d’un pèsol. Ho fem amb el ganivet, ja que la picadora el deixaria massa triturat i el resultat final seria pastós.',
          'Piquem també la ceba ben fina. La posem a sofregir amb la mantega en una paella gran, a foc baix.',
          'Quan la ceba sigui transparent, hi afegim la farina i deixem que es torri lleugerament durant uns 5 minuts. Anem remenant.',
          'Incorporem tot seguit el pollastre trossejat i la mica de suc del rostit que ens hagi sobrat. Si no en tenim, hi tirem una mica de xerès o de vi de Porto.',
          'Mentre tot es va barrejant, aprofitem per escalfar la llet.',
          'Sempre remenant, l’anem abocant a poc a poc a la massa de pollastre.',
          'Quan ja l’hi haguem tirat tota, condimentem amb sal, pebre i nou moscada. Tastem per comprovar el punt de sal i sintonitzem una emissora de música dels 70.',
          'Remenem la massa fins que deixi de ser enganxifosa i veiem que ja es desenganxa de la paella. Poden passar uns 20 minuts.',
          'Aboquem la massa de croquetes en un plat. Cobrim la superfície amb paper film, sense deixar gens d’aire. D’aquesta manera evitem que es ressequi.',
          'Deixem refredar la massa. Un cop que estigui a temperatura ambient, la posem a la nevera fins l’endemà.',
          'Arribat el moment de preparar les croquetes, empolvorem el marbre amb farina i hi aboquem la massa, que ja serà molt més dura i compacta que el dia abans.',
          'La dividim en tres o quatre parts i, fent-les rodolar amb les mans, formem uns xurros de la mida d’un fuet. Perquè no se’ns enganxin, anem afegint més farina al taulell.',
          'Tallem porcions d’uns 5 cm, procurant que siguin el més regulars possible.',
          'Acostem dos plats: un amb els ous lleugerament batuts i l’altre amb pa ratllat.',
          'Passem les croquetes per l’ou i el pa ratllat, ben arrebossades, i les reservem. És el moment de congelar les que no haguem de consumir en el mateix moment.',
          'Fregim la resta en oli abundant i les dipositem damunt de paper de cuina, per absorbir l’excés d’oli. Ja les podem servir!',
        ],
      },
    ],
    variants: [
      {
        p: 'Les croquetes són sempre diferents depenent del pollastre que utilitzem. Pel meu gust, les restes d’un pollastre guisat o rostit (sobretot, si aprofitem aquell suquet tan gustós que desprèn…) són sempre preferibles a les del pollastre a la planxa. I les cuixes i les ales, molt més sucoses que el pit, també fan que les croquetes siguin més meloses. Una variant espectacular consisteix en utilitzar pollastre al curri (si és que us en sobra, és clar!).',
      },
    ],
    categories: ['carmanyola', 'segons'],
    tags: ['beixamel', 'ceba', 'croquetes', 'farina', 'llet', 'mantega', 'pollastre'],
  },
  {
    id: 'estofat-amb-castanyes-i-cervesa-negra',
    createdAt: '2016-02-21T20:43:43+02:00',
    title: 'Estofat amb castanyes i cervesa negra',
    intro: [
      {
        p: 'Un estofat, amb la carn adequada i ben condimentat, té tot el que cal per convertir-se en un clàssic dels sopars de duro. Per començar, i per complir el primer precepte del blog (menjar bé sense grans dispendis), el millor tall per als estofats és també el més respectuós amb la butxaca. El fet que les racions s’allarguin a més amb patates, pastanagues, o –en aquest cas– castanyes, permet alimentar una bona colla amb un cost més que moderat. Jo us recomano que serviu aquest estofat damunt d’un llit de puré de patates o arròs blanc. O que, com a mínim, porteu a taula un bon pa per sucar a la salsa. A més d’un vi negre que tingui (i us deixi) un bon cos, és clar! L’estofat és un plat d’hivern, que millora al cap d’un parell de dies i del qual mai no ens avorrirem. Al menys, jo.',
      },
    ],
    cost: 'Cost aproximat per ració: 2,25 € (en surten 6 racions).',
    unitCost: 2.25,
    ingredients: [
      {
        ul: [
          '700 g de conill de vedella tallat a daus',
          '18-20 castanyes precuites (en conserva o envasades al buit)',
          '3 pastanagues',
          '1 porro',
          '4 grans d’all',
          '1 cullerada de doble concentrat de tomàquet',
          '400 ml de brou de pollastre',
          '300 ml de cervesa Guinness',
          'Un pessic de sàlvia',
          'Un pessic de sucre',
          'Pebre negre',
          'Oli d’oliva verge extra',
          'Sal',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Rentem les verdures. Tallem el porro a juliana i les pastanagues a rodanxes.',
          'Aixafem els alls d’un cop.',
          'Escalfem una mica d’oli en una cassola i hi daurem la carn a foc mig alt.',
          'Quan estigui ben segellada, salpebrem i la retirem de la cassola.',
          'Al mateix oli, sofregim el porro i els alls. Salem, abaixem la flama i deixem que es facin uns 10 minuts.',
          'Quan el porro comenci a transparentar, hi incorporem les pastanagues.',
          'Afegim també el tomàquet concentrat i un pessic de sàlvia i de sucre.',
          'Tornem a posar la carn a la cassola, amb la mica de suc que hagi pogut deixar anar.',
          'Deixem reduir un parell de minuts.',
          'Aboquem aleshores la cervesa i el brou. Tapem la cassola i esperem que arrenqui el bull.',
          'Abaixem el foc al mínim i deixem que faci xup-xup durant 1 hora.',
          'Aleshores hi incorporem les castanyes. Rectifiquem de sal i de líquid, si convé.',
          'Deixem coure 30 minuts més. Apaguem i deixem reposar uns minuts abans de servir.',
        ],
      },
    ],
    variants: [
      {
        p: 'Que no trobeu castanyes? Que no us agraden o hi sou al·lèrgics? Cap problema. Substituïu-les per patates de guarnició, que podeu incorporar igualment quan falti mitja hora per acabar l’estofat. És important que per estofar utilitzeu conill de vedella (si pot ser, de la cuixa), una peça magra però amb tendrum que, un cop cuita, es torna tendra i gelatinosa. Si no en trobeu, podeu fer servir jarret, amb l’inconvenient que és més car.',
      },
      {
        p: 'Les castanyes podrien ser crues, escaldades i pelades per vosaltres mateixos, però no us vull enganyar: pelar castanyes és una feina antipàtica i no podreu evitar cremar-vos els dits.',
      },
    ],
    categories: ['carmanyola', 'segons'],
    tags: ['brou', 'carn', 'castanyes', 'cervesa', 'pastanaga', 'porro', 'vedella'],
  },
  {
    id: 'fideus-a-la-cassola',
    createdAt: '2016-02-07T22:35:48+02:00',
    title: 'Fideus a la cassola',
    intro: [
      {
        p: 'No tots els plats poden presumir de tenir un <a href="http://viulapoesia.com/pagina_3.php?tipus=1&amp;subtipus=1&amp;itinerari=2&amp;idpoema=179" target="_blank" rel="noopener">poema dedicat</a>. Els fideus a la cassola, sí. El fet que Miquel Martí i Pol els hagi escrit un poema, musicat posteriorment per Toti Soler, és un fet insòlit que deixa entreveure la gran popularitat que té aquest plat dins la cuina catalana. Però els fideus també han merescut molta prosa. Autors com Josep Pla a <em>El que hem menjat</em>, Manuel Vázquez Montalbán en diversos llibres de la sèrie Carvalho, o Narcís Comadira al seu deliciós <em>Fórmules magistrals</em> han lloat les virtuts d’aquest plat que, per descomptat, també apareix en la gran majoria de receptaris de cuina catalana des del <em><a href="https://ca.wikipedia.org/wiki/Llibre_de_Sent_Sov%C3%AD" target="_blank" rel="noopener">Llibre de Sent Soví</a></em>. Si els fideus a la cassola no ens han deixat mai d’agradar, per algun motiu deu ser.',
      },
    ],
    cost: 'Cost aproximat per ració: 1,45 €.',
    unitCost: 1.45,
    ingredients: [
      {
        ul: [
          '400 g de costella ibèrica tallada a daus',
          '400 g de fideus gruixuts (jo he fet servir <a href="http://www.dececco.it/it_it/semolina-pasta/bricchetti-174.html" target="_blank" rel="noopener">bricchetti</a>)',
          '1 ceba grossa',
          '3 grans d’all',
          '150 g de tomàquet triturat',
          '1 cullerada de pebre vermell dolç',
          '1 cullerada de pebre vermell picant',
          'Un pessic de julivert picat',
          'Un pessic de safrà',
          'Oli d’oliva verge extra',
          'Sal, pebre negre',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Tallem la ceba a daus molt petits. Piquem també els grans d’all.',
          'Sofregim els talls de costella a foc viu en una cassola de terrissa o de ferro colat.',
          'Quan siguin daurats, els apartem i sofregim la ceba en el greix que haurà desprès la costella i un fil d’oli. Aquest cop, a foc molt lent, fins que es comenci a confitar.',
          'Hi afegim l’all i el deixem sofregir fins que tot just agafi color.',
          'Tornem a posar la carn a la cassola. Hi tirem també el tomàquet triturat i els pebres vermells. Remenem i abaixem el foc.',
          'Mesurem 1 l d’aigua (750 ml, si cuinem amb ferro colat*) i l’aboquem a la cassola.',
          'Quan l’aigua arrenqui el bull, hi tirem els fideus. Salem i condimentem amb una mica de pebre, julivert i safrà.',
          'Tapem la cassola i fem coure uns 13-15 minuts. Mentrestant, no deixem els fideus desatesos: comprovem el punt de sal, fem alguna remenada i vigilem que no hi falti líquid. Si quedessin massa caldosos, continuaríem la cocció amb la cassola destapada.',
          'Apartem la cassola del foc i deixem que reposi un parell de minuts.',
          'Servim amb un rajolí d’oli cru.',
        ],
      },
    ],
    variants: [
      {
        p: 'La costella ibèrica és la companya ideal dels fideus. Pel meu gust, en aquest plat no hi falta res més però, si voleu carregar una mica més les tintes, junt amb la costella podeu sofregir una salsitxa trossejada per comensal. Igualment, podeu substituir l’aigua per un brou lleuger de pollastre.',
      },
    ],
    extras: [
      {
        p: '* De vegades us haureu trobat que les mesures de líquid que jo indico a les receptes no coincideixen amb les que vosaltres feu anar a casa. No és un error; hi ha un factor gens negligible que influeix en els resultats, i té a veure amb el recipient amb què es cuina. Si seguiu aquest blog, ja deveu saber que jo estic abonada al ferro colat, sobre tot per fer estofats o plats com aquest. Un dels motius pels quals m’agrada aquest material és perquè cal utilitzar molt menys líquid, i això fa que, al final, com que no aigualim les salses, els sabors estiguin més concentrats. I per què no es necessita tant líquid, us preguntareu? Doncs ben senzill: perquè la tapa pesa uns dos quilos. Un cop que està el “xup-xup” en marxa, farien falta uns quants cavalls de vapor per aixecar-la!',
      },
    ],
    categories: ['primers'],
    tags: ['all', 'ceba', 'costella', 'fideus', 'pasta', 'pebre', 'porc'],
  },
  {
    id: 'crema-dendivies',
    createdAt: '2016-01-17T18:26:24+02:00',
    title: 'Crema d’endívies',
    intro: [
      {
        p: 'Aquesta és una crema d’hivern, rústica i densa, que agradarà als sopers com jo. És una versió alleugerida de la sopa ardenesa, una recepta retro que podríeu trobar perfectament en un d’aquells restaurants amb jous, escalfallits i altres anacronismes decorant les parets. D’aquells que encara us servirien pijama per postres, per entendre’ns. I és que, tot i reconèixer el valor dels experiments amb esferes, fums i escumes, i de tastar tot allò que es menja amb bastonets, he de declarar també la meva simpatia per aquests plats, herois impermeables a les noves tendències i que –per algun motiu serà– tendim a recuperar quan baixen les temperatures.',
      },
    ],
    cost: 'Cost aproximat per ració: 0,81 €.',
    unitCost: 0.81,
    ingredients: [
      {
        ul: [
          '4 endívies',
          '2 patates',
          '2 porros (només la part blanca)',
          '100 g de mantega',
          '1/2 litre de llet',
          '200 g de pa sec',
          'Sal, cibulet',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Rentem les endívies i els porros. Els tallem a juliana.',
          'Pelem les patates i les tallem en rodanxes fines.',
          'Posem la mantega en una cassola que tapi bé. Sofregim el porro uns deu minuts, a foc molt baix i amb la cassola tapada.',
          'Hi afegim l’endívia i deixem que s’amoroseixi, uns cinc minuts més. Les verdures no s’han de daurar, sinó que han de quedar blanques de color.',
          'Hi afegim la patata, una cullerada de sal i uns 800 ml d’aigua.',
          'Deixem coure 45 minuts des que la sopa arrenca el bull.',
          'Al final de la cocció hi incorporem la llet i rectifiquem de sal, si convé.',
          'Triturem lleugerament la sopa amb la batedora.',
          'Tallem el pa en llesquetes molt fines i les daurem lleugerament en una paella amb una nou de mantega.',
          'Les posem en el plat, junt amb la sopa i un pessic de cibulet.',
          'Servim la sopa ben calenta.',
        ],
      },
    ],
    variants: [
      {
        p: 'Si us molesta el gust una mica amargant de l’endívia, poseu-n’hi només dues i augmenteu la quantitat de porro i patata. I per fer la sopa més densa i consistent, afegiu-hi un parell de rovells d’ou al final, just abans de triturar-la. També es podria substituir l’aigua per un brou de pollastre o de verdures.',
      },
    ],
    categories: ['primers'],
    tags: ['endivia', 'mantega', 'pa', 'patata', 'porro', 'sopa'],
  },
  {
    id: 'sorbet-de-llima-i-api',
    createdAt: '2015-12-24T18:19:18+02:00',
    title: 'Sorbet de llima i api',
    intro: [
      {
        p: 'No acabo d’entendre la teoria que els sorbets “desengreixen”. Quina sort tindríem si fos així, i el greix es fongués a còpia de menjar sorbet! Mantenir la figura no seria cap sacrifici, tot el contrari! La trista realitat, però, és que els sorbets també engreixen (porten sucre) i no tenen cap efecte sobre tot el llard que ens espera aquestes festes. Cap ni un! Ben untat en el capó, infiltrat en el pernil de gla… el greix seguirà inexorable el seu camí cap a l’interior de les nostres artèries i, un cop instal·lat, les anirà folrant d’una placa groguenca i letal. Ai las! El sorbet potser no ens salvarà d’aquests perills, però, mentre no arribin, ens farà la vida molt més dolça!',
      },
    ],
    cost: 'Cost aproximat per ració: 0,28 €.',
    unitCost: 0.28,
    ingredients: [
      {
        ul: ['4 llimes', '1 llimona', '150 g de sucre', '1 branca d’api sencera (amb fulles)'],
      },
    ],
    prep: [
      {
        ol: [
          'Rentem l’api i el tallem a trossos d’uns 2 cm. Piquem les fulles.',
          'Ratllem la pell d’una llima, evitant la part blanca.',
          'Posem l’api, la ratlladura i el sucre en un cassó amb 200 ml d’aigua.',
          'Coem a foc baix 10 minuts.',
          'Deixem refredar completament aquest almívar, el colem i el reservem a la nevera.',
          'Espremem les 4 llimes i la llimona, i barregem el suc amb l’almívar ja ben fred.',
          'Aboquem a la geladora. Si no en tenim, preparem el sorbet segons el mètode tradicional, congelant la barreja en un recipient metàl·lic i trencant els cristalls de gel amb la batedora cada 30-40 minuts, fins que tingui la consistència adequada (4 o 5 cops).',
        ],
      },
    ],
    variants: [
      {
        p: 'Podeu afegir a aquest sorbet mitja culleradeta de menta picada, i decorar-lo amb un parell de fulles senceres. Uns granets de pebre rosa o ginebrons també hi afegiran gust i una nota decorativa.',
      },
    ],
    categories: ['postres'],
    tags: ['api', 'llima', 'llimona', 'sucre'],
  },
  {
    id: 'pollastre-amb-pinya-i-datils',
    createdAt: '2015-12-15T20:23:24+02:00',
    title: 'Pollastre amb pinya i dàtils',
    intro: [
      {
        p: 'Guardeu aquesta recepta: us pot ser útil durant les festes que s’acosten, si feu dinars familiars o convideu gent a casa. En primer lloc (i perdoneu si dic sempre el mateix), perquè és molt fàcil de fer i boníssima. Però, a més, perquè es pot preparar el dia abans i només cal escalfar abans de servir. “I quina mena d’avantatge és aquest?”, em preguntareu. Doncs fonamental: això us permetrà arreglar-vos amb calma i fer l’aperitiu amb els convidats en lloc de patir per si el plat es crema o perquè són quarts de quatre i encara és cru. Podreu seure a taula relaxats i sense llànties, preparats per gaudir del plat i rebre els elogis dels comensals. Sempre parlem de les qualitats del menjar, però la tranquil·litat en degustar-lo fa que sigui encara més bo, no creieu?',
      },
    ],
    cost: 'Cost aproximat per ració: 2,85 €.',
    unitCost: 2.85,
    ingredients: [
      {
        ul: [
          '1 pollastre tallat en 12 trossos',
          '1/2 pinya natural',
          '250 g de dàtils',
          '100 ml de vi d’Oporto',
          '3 cullerades d’oli d’oliva',
          '1 cullerada de mel',
          'Un pessic de sàlvia o d’herbes de la Provença',
          'Sal i pebre',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Encenem el forn a 190 °C.',
          'Mentre el forn s’escalfa, tallem la pinya a rodanxes i les rodanxes en 8 parts, eliminant la part més llenyosa.',
          'Posem els dàtils a estovar en 250 ml d’aigua tèbia.',
          'Barregem el vi d’Oporto amb la mel.',
          'Untem els trossos de pollastre amb oli i els assaonem amb sal, pebre i un pessic de marduix.',
          'Els posem en una plata de forn, amb la pell cap a baix, i els coem durant 30 minuts.',
          'Passat aquest temps, tombem els trossos de pollastre i hi aboquem per sobre la barreja de vi.',
          'Els tornem cap al forn, baixem la temperatura a 175 °C i els hi deixem 30 minuts més.',
          'Tornem a tombar les peces de pollastre. Ara hi afegim la pinya i els dàtils, junt amb la seva aigua de remull. Enfornem 20 minuts més.',
          'Fem una última remenada perquè la fruita i el pollastre s’impregnin bé del suc de la cocció, i deixem coure els últims 10 minuts.',
          'Servim acompanyat d’arròs blanc, o deixem que es refredi per menjar l’endemà. (De fet, trobo que les aus així guisades són més bones d’un dia per l’altre).',
        ],
      },
    ],
    variants: [
      {
        p: 'Agafeu un capó de 3 o 4 quilos, dobleu les quantitats de fruita i vi, i tindreu el plat ideal per alimentar una tropa. El capó haurà de coure al menys 30 minuts més que el pollastre, depenent del volum que tingui la peça. Si no teniu vi d’Oporto, o ja us l’heu acabat tot fent l’aperitiu, utilitzeu xerès o vi dolç.',
      },
    ],
    categories: ['carmanyola', 'segons'],
    tags: ['datils', 'pinya', 'pollastre'],
  },
  {
    id: 'magdalenes-classiques',
    createdAt: '2015-11-22T20:48:54+02:00',
    title: 'Magdalenes clàssiques',
    intro: [
      {
        p: 'Entenc perfectament perquè s’han posat de moda els <em>cupcakes</em>. Només cal que us fixeu en la parafernàlia que cal per elaborar aquests pastissets, i ja podeu intuir el negoci: estris imprescindibles que acabarem utilitzant només un cop, aromes químics i colorants a preu d’or que ens faran reviure aquelles tardes jugant amb el Quimicefa…, a més de tota una línia de complements, d’estil entre infantil i <em>retro</em>, que a la meva cuina tenen el pas barrat. També han proliferat els tallers on ensenyen a la població adulta a jugar amb plastilina. Res d’això va amb mi. Jo faig magdalenes sense floritures, amb ingredients 100 % naturals, que no necessiten més del que ja tenen: un gust i una textura espectaculars.',
      },
    ],
    cost: 'Cost aproximat per unitat: 0,15 € (en surten 12).',
    unitCost: 0.15,
    ingredients: [
      {
        ul: [
          '210 g de farina',
          '175 g de sucre',
          '2 ous grossos a temperatura ambient',
          '190 ml d’oli, barreja d’oliva verge extra i de gira-sol',
          '60 ml de llet',
          '7 g de llevat químic Royal',
          'La ratlladura d’una llimona',
          '1 cullerada de postres de canyella',
          'Un pessic de sal',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'En un bol tamisem la farina amb el llevat, la sal i la canyella. Reservem.',
          'En un altre bol més gran, batem els ous amb el sucre durant uns 5 minuts, fins que el color blanquegi. Ens anirà bé utilitzar una batedora de ma amb l’accessori de barnilles, a velocitat baixa.',
          'Sense deixar de batre, afegim la llet i, molt gradualment, l’oli.',
          'Hi incorporem finalment la ratlladura de llimona.',
          'Tot seguit, hi posem la barreja de farina amb l’ajut d’un <a href="http://ca.ikea.com/es/ca/catalog/products/40014340/" target="_blank" rel="noopener">tamís</a> o amb un simple colador. Remenem amb una espàtula fins que la mescla sigui ben homogènia.',
          'Tapem amb paper film i posem a la nevera fins l’endemà.',
          'Escalfem el forn a 250 °C.',
          'Col·loquem 12 càpsules de paper a les cavitats d’un <a href="https://www.lecreuset.es/utensilios-para-reposteria/moldes/molde-12-cupcakes" target="_blank" rel="noopener">motlle per magdalenes</a> o, en el seu defecte, dins dels <a href="http://www.gadgetscuina.com/molde-flan-individual-acero-inox-2785.1003" target="_blank" rel="noopener">vasets metàl·lics</a> que s’utilitzen per fer flams. També podem utilitzar motlles de silicona.',
          'Amb una mànega o una cullera sopera, emplenem les càpsules fins a 2/3 de la seva capacitat.',
          'Quan el forn ja hagi arribat als 250 °C, tirem un pessic de sucre sobre cada magdalena i les posem immediatament al forn.',
          'Baixem la temperatura a 210 °C i coem les magdalenes durant 18-20 minuts, sense ventilador. Les traurem tan bon punt tinguin un color daurat ben apetitós i les deixarem refredar.',
        ],
      },
    ],
    variants: [
      {
        p: 'En lloc del sucre, damunt de les magdalenes hi podeu posar pinyons, ametlles laminades, pistatxos esmicolats, trossets de xocolata… Jo utilitzo oli d’oliva i de gira-sol al 50 % perquè el meu oli d’oliva té un aroma molt intens. Si no és el vostre cas, podeu utilitzar només oli d’oliva.',
      },
    ],
    categories: ['berenar', 'postres'],
    tags: ['canyella', 'farina', 'llimona', 'magdalenes', 'oli', 'ou', 'sucre'],
  },
  {
    id: 'arros-amb-galeres',
    createdAt: '2015-11-13T21:41:46+02:00',
    title: 'Arròs amb galeres',
    intro: [
      {
        p: 'Si és cert que totes les famílies tenen un parent pobre, podem afirmar que, a casa dels Squillidae, aquest desgraciat és sens dubte la galera. Sempre arraconada junt amb la morralla, resignada a un paper secundari com a ingredient del brou, la galera ha de veure cada dia com els seus cosins llagostins i gambes s’emporten la fama i els elogis dels clients. “Quin destí més injust!”, es lamenta. “Potser no em volen perquè la meva closca els punxa els dits? O perquè soc lletgeta? Quina llàstima, amb la carn tan tendra que s’amaga sota aquesta cuirassa!”. Li voleu donar una oportunitat?',
      },
    ],
    cost: 'Cost aproximat per ració: 2,20 €.',
    unitCost: 2.2,
    ingredients: [
      {
        ul: [
          '400 g d’arròs bomba',
          '24 galeres',
          '1 ceba tallada a galls',
          '1 pebrot verd tallat ben fi',
          '4 grans d’all',
          'Pebre vermell picant',
          '50 ml de mançanilla o xerès sec',
          'Oli d’oliva verge extra',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Tallem els caps de les galeres i els reservem.',
          'Posem les cues uns 45 minuts al congelador perquè la carn s’endureixi i, amb unes tisores, les obrim en canal. Com si els féssim una autòpsia.',
          'Fem el mateix tall a la part del llom. Amb cura, separem la closca i reservem la carn a la nevera.',
          'Per preparar el brou, sofregim la ceba en una olla, a foc ben baix.',
          'Al cap d’uns 35-40 minuts, hi afegim les closques i els caps de les galeres.',
          'Les aixafem amb la cullera de fusta, assaonem amb sal i pebre vermell i continuem el sofregit 5 minuts més.',
          'Hi aboquem aleshores la mançanilla. Apugem el foc i deixem que s’evapori durant un parell de minuts.',
          'Finalment hi posem 2 litres d’aigua. Fem bullir durant uns 20 minuts, colem i reservem. El brou se’ns haurà reduït, però no passa res perquè en necessitarem només 1 litre i mig.',
          'Per altra banda, comencem a sofregir el pebrot en una cassola amb poc oli.',
          'Al cap de 2 minuts, hi afegim l’all picat i remenem.',
          'Quasi immediatament, incorporem el litre i mig de brou, que haurem mantingut calent.',
          'Quan arrenqui el bull, hi tirem l’arròs a grapadets, poc a poc.',
          'Coem a foc baix durant 12 minuts.',
          'En acabar la cocció, disposem la carn de les galeres a sobre de l’arròs. Tapem la cassola i deixem coure 1 minut més. No més. Penseu que la galera té una carn molt tova, que fàcilment es desintegra.',
          'Retirem del foc i deixem reposar l’arròs 2 minuts abans de servir.',
        ],
      },
    ],
    variants: [
      {
        p: 'Aquesta recepta és adaptada del llibre <em>100 placeres para compartir</em>, de la Carme Ruscalleda. No he modificat gran cosa, tret del temps de cocció (que dependrà de l’arròs i del recipient que feu servir) i algun ingredient secundari. Si us agrada, afegiu pebrot vermell, com fa ella, o bé (i que em perdoni per l’atreviment) ruixeu el brou amb vermut blanc sec.',
      },
    ],
    categories: ['primers'],
    tags: ['arros', 'ceba', 'galeres', 'pebre-vermell', 'pebrot'],
  },
  {
    id: 'pad-thai',
    createdAt: '2015-10-17T20:03:19+02:00',
    title: 'Pad Thai',
    intro: [
      {
        p: 'El Pad Thai és el rei del <em>street food</em> tailandès. Molt senzill i d’elaboració ràpida, amalgama dolç, salat, àcid, amarg i picant en una simfonia ben exuberant de sabors. És també un plat econòmic, que admet múltiples variants i que, per tant, s’adapta al gust de tothom. No patiu si les vostres habilitats culinàries són limitades: Si sabeu tallar verdures i sacsejar la paella, ja sou aptes per fer-lo. O si alguns dels ingredients d’aquesta recepta us sonen a xinès (a tailandès, més ben dit). Cada cop hi ha més supermercats asiàtics –molts amb venda <em>online</em>–  i no tindreu cap dificultat per trobar-los. De fet, els ingredients realment exòtics d’aquesta recepta només són tres: 1) els <a href="http://www.orientalmarket.es/shop/barrita-3mm-cock-400gm.html" target="_blank" rel="noopener">fideus d’arròs</a>, plans com tallarines, de diverses amplades i un color blanc translúcid, 2) el <a href="http://deliciosa-asia.com/tienda/tamarindo-concentrado" target="_blank" rel="noopener">concentrat de tamarinde</a>, una substància cremosa i de gust complex, entre dolç i amargant, i 3) la <a href="http://deliciosa-asia.com/tienda/salsa-de-pescado" target="_blank" rel="noopener">salsa de peix</a>, feta a base d’anxoves fermentades i amb una olor tan desagradable com fabulós és el seu poder com a condiment. (Sobretot, no l’ensumeu abans, o potser cometríeu l’error de prescindir-ne!).',
      },
      {
        p: 'Si us animeu amb la cuina Thai, només us he de fer un advertiment: Crea addicció!',
      },
    ],
    cost: 'Cost aproximat per ració: 2,25 €.',
    unitCost: 2.25,
    ingredients: [
      {
        ul: [
          '250 g de fideus d’arròs d’uns 3-4 mm d’ample',
          '40 ml de concentrat de tamarinde',
          '50 ml de salsa de peix',
          '50 g de sucre morè',
          '1 cullerada de vinagre blanc',
          'Un pessic de pebre vermell picant o flocs de bitxo sec (opcional)',
          '80 ml d’oli de gira-sol',
          '2 grans d’all',
          '100 g de tofu dur',
          '8-12 llagostins pelats',
          '2 ous',
          '100 g de brots de soja',
          '6 cebollins o alls tendres',
          '1 cullerada de coriandre picat',
          '1 llima',
          'Unes tiges de cibulet',
          '2 cullerades de cacauets picolats',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'D’aquest plat en preparem només dues racions, ja que els ingredients s’han de poder moure sense estretors pel <em>wok</em> o la paella. Si tinguéssim una pallera d’aquelles ben grosses, podríem doblar les quantitats.',
          'Posem els fideus en aigua tèbia uns 20 minuts abans d’utilitzar-los. A diferència de la pasta de sèmola, els fideus d’arròs no es bullen; només cal estovar-los en aigua fins que es tornin flexibles.',
          'Deixarem tots els ingredients a punt i a la vora de la paella per poder estar pendents de la cocció, que és molt ràpida.',
          'En primer lloc fem la salsa. Barregem en un cassó el concentrat de tamarinde, la salsa de peix, el sucre, el vinagre i, si ens hi agrada un toc picant, també un pessic de pebre vermell o flocs de bitxo sec. Escalfem fins que el sucre es dissolgui completament.',
          'Pelem i piquem l’all molt petit.',
          'Tallem els cebollins al biaix, en trossets d’uns 2 cm.',
          'Escorrem bé el tofu i el tallem a daus d’uns 2 cm.',
          'Escalfem una paella ben gran (o un wok) a foc viu. Hi posem l’oli i fem que s’unti bé tota la superfície.',
          'Saltem l’all i el cebollí durant mig minut, remenant contínuament. Els arraconem una mica.',
          'Trenquem els ous a l’altra banda de la paella, de manera que no es barregin amb la verdura. Quan comencin a quallar, els remenem amb una forquilla fins que estiguin cuits i ben desintegrats.',
          'Afegim el tofu, i el saltem fins que es dauri una mica.',
          'Afegim llavors els llagostins i els brots de soja. Saltem un minut més.',
          'Finalment, hi aboquem els fideus i la barreja de salsa de peix. Remenem contínuament per integrar tots els ingredients.',
          'Quan els fideus estiguin ben calents, condimentem amb una mica de coriandre i servim immediatament.',
          'Presentem el Pad Thai amb una mica de cacauet picat, unes tiges de cibulet i uns gallons de llima. (El bitxo de la foto només és per als valents).',
        ],
      },
    ],
    variants: [
      {
        p: 'Els <a href="https://en.wikipedia.org/wiki/Scallion" target="_blank" rel="noopener">cebollins</a>, que són cebes tendres collides abans que el bulb s’hagi desenvolupat, es poden substituir perfectament per alls o cebes tendres, o fins i tot per calçots (en una versió molt <em>fusion</em> de la recepta). També es poden substituir els brots de soja per un sarpat de col tallada a juliana, o el tofu per carn magra de porc tallada a tiretes. El picant, com sempre, és opcional.',
      },
    ],
    categories: ['plat-unic', 'segons'],
    tags: [
      'all',
      'cacauets',
      'cebollins',
      'coriandre',
      'fideus',
      'llagostins',
      'llima',
      'ou',
      'salsa-de-peix',
      'soja',
      'tamarinde',
      'thai',
      'tofu',
    ],
  },
  {
    id: 'amanida-de-cigrons',
    createdAt: '2015-09-27T16:29:09+02:00',
    title: 'Amanida de cigrons',
    intro: [
      {
        p: 'O amanida dels tres ingredients, o dels tres minuts. Com preferiu. És un plat fresc i fàcil que, si el porteu com a plat únic a la carmanyola, us saciarà sense embafar. I, de passada, mengeu llegums, que ja sabeu que són molt recomanables des del punt de vista dietètic! Com tots els plats senzills, només cal procurar que els ingredients siguin excel·lents. Així, sense mitges tintes. Si pot ser, i posats a demanar, que el tomàquet sigui acabat de collir i deixi en les vostres mans  aquella olor intensa de fruit madurat pel sol, i que l’oli us provoqui una cascada de gustos i impressions similar a un <em>tripi</em>. Amb un tomàquet de plàstic i oli de llavors, correu el risc que aquest plat us deixi tristos i propensos a la malenconia.',
      },
    ],
    cost: 'Cost aproximat per ració: 0,23 €.',
    unitCost: 0.23,
    ingredients: [
      {
        ul: [
          '500 g de cigrons castellans*',
          '2 tomàquets de Tiana ben madurs',
          '2 cebes tendres',
          '1 ceba blanca',
          '3 claus d’olor',
          '1 fulla de llorer',
          'Oli de Les Garrigues',
          'Sal',
          'Alfàbrega seca',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'La vigília haurem posat els cigrons a remull en aigua freda.',
          'Unes tres hores abans de menjar, descartem l’aigua del remull i posem els cigrons en una olla amb aigua filtrada, que cobreixi els cigrons uns 3 cm.',
          'Dins l’olla posem també una fulla de llorer i una ceba pelada, en la qual haurem clavat tres claus d’olor.',
          'Encenem el foc, tapem l’olla i la fem bullir a foc baix durant 1 hora aproximadament.',
          'Quan els cigrons siguin tendres, salem moderadament, fem una remenada i apaguem el foc.',
          'Deixem refredar els cigrons dins l’aigua de cocció.',
          'Arribat el moment de menjar, apartem la quantitat de cigrons necessària per l’amanida (uns 100 g per persona) i congelem la resta amb el líquid de cocció per a altres usos.',
          'Tallem la ceba i el tomàquet a cubs de mida similar als cigrons.',
          'Barregem els tres ingredients i amanim amb oli, sal i un pessic d’alfàbrega seca.',
          'Ja tenim l’amanida a punt per menjar!',
        ],
      },
    ],
    variants: [
      {
        p: 'Segur que us haurà vingut al cap la variant “cigrons de pot”. Us l’accepto amb moltes reserves: si sortiu de la feina cansats, per exemple, o heu d’improvisar un àpat sense haver-lo planificat. Sapigueu, però, que els llegums de pot no són tan saborosos, surten més cars, porten conservants i generen residus. A més, els cigrons castellans que us suggereixo tenen la pell finíssima i es paeixen molt fàcilment. Si sou dels que dieu que no us agraden els cigrons, potser és que mai no n’heu provat de bons!',
      },
    ],
    extras: [
      {
        p: '* Trobareu cigrons castellans a granel en establiments com <a href="https://www.facebook.com/algrabcn" target="_blank" rel="noopener">Al gra</a> o <a href="https://www.facebook.com/JaimeJRenobell" target="_blank" rel="noopener">Renobell</a>, o al Caprabo, sota la marca Seleqtia.',
      },
    ],
    categories: ['carmanyola', 'plat-unic', 'primers'],
    tags: ['amanida', 'ceba-tendra', 'cigrons', 'oli', 'tomaquet'],
  },
  {
    id: 'pastis-fresc-de-mojito',
    createdAt: '2015-08-03T20:15:47+02:00',
    title: 'Pastís fresc de mojito',
    intro: [
      {
        p: 'Pel seu 18è aniversari, l’Alex em va demanar un pastís de fruita ben refrescant, “d’aquells que no embafen”. Prevèiem un dinar pantagruèlic i una pujada de temperatures, i no calia rematar els excessos calòrics amb les postres. Per això, <a href="/pastis-de-llimona" target="_blank" rel="noopener">aquest pastís de llimona</a>, que sempre ha rebut molts elogis i que té l’avantatge afegit de no requerir forn, semblava l’opció més apetible.',
      },
      {
        p: 'Ja engrescada i amb el davantal posat, vaig descobrir que a la nevera hi tenia només una llimona en procés de petrificació. I en canvi, hi havia un munt de llimes. A grans mals, grans remeis. I, és clar, la primera decisió va venir rodada: “El faré de llima”. Però poc després, en aquest estat mental indefinible que em provoca el tràfec per la cuina, vaig tenir una revelació. Un manat de menta verda, fresca, perfumada, semblava que em volia transmetre algun missatge a través del plàstic que ens separava. I una esgarrifança de gel <em>pilé</em> em va recórrer l’espinada: “Que sigui de <em>mojito</em>!”',
      },
    ],
    cost: 'Cost aproximat per ració: 0,97 € (en surten 10 racions).',
    unitCost: 0.97,
    ingredients: [
      {
        ul: [
          '100 g de galetes <a href="http://www.hipercor.es/hipercor/sm2/es_ES/020243/supermarket/desayunos-dulces-y-pan/desayunos-dulces-y-pan/galletas/galletas-especiales/0110200214302101___?publicNav=true" target="_blank" rel="noopener">speculoos</a>',
          '100 g de galetes tipus digestive',
          '90 g de mantega',
          '4 llimes',
          '175 g de sucre blanc, i dues cullerades més per la cobertura',
          '2 ous mitjans',
          '270 g de formatge Philadelphia light (45 % mg)',
          '350 g de nata per postres (35 % mg)',
          '7 fulls de gelatina',
          '4 branquetes (unes 25-30 fulles) de menta verda o <em>hierbabuena</em>',
          '2 cullerades soperes de rom blanc',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Posem un paper sulfuritzat a la base d’un motlle desmuntable d’uns 22 cm de diàmetre. Muntem l’altra part del motlle directament al damunt.',
          'Posem al congelador el bol on muntarem la nata. La nata també haurà d’estar ben freda.',
          'Comencem fonent la mantega per fer la base del pastís.',
          'Amb una picadora, triturem ben fins els dos tipus de galeta. Hi afegim la mantega fosa i barregem bé.',
          'Recobrim la base del motlle amb aquesta barreja i premem perquè quedi ben igualada.',
          'Posem el motlle a la nevera com a mínim dues hores. La mantega s’ha de tornar a solidificar.',
          'Mentrestant, preparem els ingredients per al farcit. Ratllem la pell d’una de les llimes (només la part verda més superficial) i la reservem.',
          'Piquem ben fines les fulles de menta verda i les reservem.',
          'Barregem la ratlladura de llima, la menta verda i el sucre en un bol gros. Veureu quina oloreta més bona…',
          'Posem a estovar 6 fulls de gelatina en aigua freda (compte, que a l’estiu l’aigua de l’aixeta pot sortir bastant calenta i desfer-vos del tot la gelatina!).',
          'Espremem la llima a la qual havíem ratllat la pell, junt amb una altra. Barregem aquest suc amb el rom i el posem a escalfar a foc baix. No cal que superi els 50 °C.',
          'Hi dissolem la gelatina que teníem a remull.',
          'Afegim al bol gros els dos ous i el formatge Philadelphia, remenant bé.',
          'Hi incorporem també la gelatina que acabem de dissoldre amb el suc.',
          'Barregem per homogeneïtzar la massa i tornem a posar el bol a la nevera. L’hi deixem 45 minuts.',
          'Passat aquest temps, muntem la nata amb unes barnilles, en el bol que teníem refredant-se al congelador.',
          'Quan la nata estigui ben ferma, la incorporem amb suavitat als ingredients anteriors.',
          'I ara sí: aboquem tota aquesta mescla a la base de galeta, que ja estarà dura, i la deixem a la nevera fins l’endemà.',
          'Quan el farcit hagi pres, ja podem decorar el pastís amb una cobertura de llima.',
          'Posem l’últim full de gelatina a remull.',
          'Espremem una de les dues llimes que ens quedaven i, si cal, afegim aigua al suc fins a obtenir 75 ml. en total.',
          'Endolcim aquest líquid amb dues cullerades de sucre. L’escalfem a foc baix.',
          'Hi barregem la gelatina estovada i remenem perquè es dissolgui bé.',
          'Tallem a rodanxes ben fines l’última llima. Ens han de sortir com a mínim 10 rodanxes.',
          'Les distribuïm per la vora del pastís, marcant les racions.',
          'Aboquem aleshores el suc de llima amb la gelatina dissolta i tornem a posar el pastís a la nevera unes dues hores com a mínim. L’aspecte final serà llustrós i cristal·lí. I el sabor, deliciós!',
        ],
      },
    ],
    extras: [
      {
        h2: 'Recomanacions',
      },
      {
        p: 'Aquesta recepta és molt fàcil de fer, però amb la pastisseria sempre cal ser una mica meticulós i cuidar la presentació. Peseu i mesureu els ingredients amb precisió. Només així podreu obtenir resultats sempre idèntics. A més dels ingredients de la llista, doncs, necessitareu una bona bàscula (millor si és electrònica) i gots mesuradors. Els meus són del Lidl i van la mar de bé. Hi ha altres eines, però, que són imprescindibles i que no surt a compte comprar barat. Són les de tall. És impossible fer rodanxes fines de llima sense un ganivet de bona qualitat. I no se us acudeixi ratllar la pell amb aquella andròmina del basar de la cantonada! Si us agrada la cuina, demaneu <a href="http://www.microplane-brandshop.com/epages/64741945.sf/es_ES/?ObjectPath=/Shops/64741945/Products/49720" target="_blank" rel="noopener">un bon ratllador</a> als reis. I si heu estat molt bons, afegiu-hi <a href="http://www.zwilling.es/index.php/juego-cuchillos-3-pzas-puntilla-fileteador-cebollero.html?utm_source=google&amp;utm_medium=ppc&amp;utm_campaign=Shopping&amp;gclid=CjwKEAjwovytBRCdxtyKqfL5nUISJACaugG1G-OTR365GNOP59yGXnvzfZG8zJqJzmlXQhS4IRQaQxoCH0fw_wcB" target="_blank" rel="noopener">un lot de ganivets</a>. Són una inversió per a tota la vida.',
      },
    ],
    categories: ['berenar', 'postres'],
    tags: ['formatge', 'llima', 'menta', 'mojito', 'nata', 'pastis'],
  },
  {
    id: 'pizza-margherita',
    createdAt: '2015-07-07T17:33:26+02:00',
    title: 'Pizza Margherita',
    intro: [
      {
        p: 'Pizza. Les últimes setmanes s’havia convertit en una obsessió, en un tema de tesi o un projecte sobre el qual no podia deixar de donar voltes. Em vaig posar el repte de fer una pizza de pizzeria amb un forn domèstic, habilitats limitades i ingredients a l’abast de tothom, fins arribar a merèixer l’excel·lent que atorga un fill adolescent i viatjat (poca broma, el tribunal és exigent). Per això, abans d’incorporar bolets, pernil, verduretes…, volia dominar els dos aspectes que considero bàsics d’aquest gran invent italià: la massa i la cocció. La Margherita, condimentada només amb tomàquet i mozzarella, era ideal per experimentar.',
      },
      {
        h3: '1) La massa',
      },
      {
        p: 'Si tothom diu que el secret és a la massa, 1) deu ser veritat, i 2) ha deixat de ser un secret. Ara bé, el procés pel qual arriba a ser gustosa, elàstica i cruixent pot comportar uns quants fracassos, que amb aquest <em>post</em> intentaré que us estalvieu. El primer dubte del pizzer diletant sorgeix a l’hora de comprar farina. Després de moltes lectures i visites a comerços, ja us puc dir que urgeix una normalització i un etiquetatge més entenedor i complet d’aquest producte.',
      },
      {
        h4: 'Quina farina he de comprar?',
      },
      {
        p: 'La preferible és la farina de blat de mitja força o panificable. No compreu l’envasada com a “<em>especial para pizza</em>”, perquè incorpora impulsor químic (el que vulgarment anomenem llevat en pols). Tampoc ens interessa la farina integral o provinent d’altres cereals.',
      },
      {
        h4: 'Què vol dir “farina de mitja força”?',
      },
      {
        p: 'La “força” de la farina ve donada per la quantitat de gluten que conté. I el gluten (si us plau, oblideu ara les tendències que el demonitzen, tret que sigueu celíacs) no és altra cosa que la substància elàstica que es produeix quan les proteïnes complexes de la farina de blat entren en contacte amb l’aigua. Segons la proporció de gluten que contingui, la farina es pot classificar en:',
      },
      {
        ol: [
          'Farina de força, amb un contingut de proteïna superior al 12 %.',
          'Farina de mitja força, entre 10 i 11 % de proteïna.',
          'Farina fluixa, entre 8 i 9 % de proteïna.',
        ],
      },
      {
        p: 'Un contingut adequat de gluten aporta elasticitat a la massa i la fa flexible, de manera que es podrà estirar sense que es trenqui. Per altra banda, reté el gas de la fermentació, formant els alvèols i les bombolles que fan la pizza molt més apetible. Les farines fluixes, precisament perquè tenen poc gluten, són indicades per a pans de pessic i preparacions esponjoses, però no per a la pizza.',
      },
      {
        h4: 'I on la trobo?',
      },
      {
        p: 'A qualsevol supermercat. Només cal que us fixeu en un dels laterals del paquet de farina, allà on es detalla la composició, i concretament en el percentatge de proteïna. Comprovareu que, molt sovint, el que alguna marca comercial presenta com a farina de força resulta que no ho és tant, i el que (diuen) és farina per a rebosteria té un percentatge força elevat de gluten. Feu cas omís de l’etiqueta frontal i mireu la lletra petita. <strong>Busquem una farina amb un 11-11,5 % de proteïna</strong>, aproximadament. I res més. Que al nostre súper només hi ha farina de força i farina fluixa? Doncs en comprem un paquet de cada i els barregem.',
      },
      {
        h4: 'Així de fàcil?',
      },
      {
        p: 'Sí. Només recomano que les primeres vegades que treballem amb una farina (o barreja de farines), anem incorporant l’aigua de manera progressiva, i n’afegim una mica més si la massa encara està eixuta. Cal tenir en compte que, com més força tingui la farina, més aigua absorbirà. Sempre podem afegir aigua a una massa que la necessiti, però si ens hem excedit amb l’aigua, no podrem afegir farina a posteriori. El resultat no serà el mateix.',
      },
      {
        h3: '2) La cocció',
      },
      {
        p: '<strong>Cal coure la pizza ràpidament i a alta temperatura</strong>, i per això necessitarem un forn que arribi com a mínim als 250 °C. Però no és suficient. Per fregar la perfecció hem de “sobtar” la pizza, <strong>dipositant-la damunt d’una superfície que ja estigui ben roent</strong>. Així pujarà de pressa i formarà una crosta cruixent i daurada, sense que la massa resulti dura de mossegar. A casa no arribarem mai als 400 °C dels forns de llenya dels restaurants, però l’efecte serà força similar.',
      },
      {
        p: 'Per aconseguir aquest cop de calor, ens anirà molt bé una <a href="http://www.amazon.es/Pimotti-202_002-refractaria-incluye-recetas/dp/B008HAPF28/ref=sr_1_7/279-5718969-1812435?ie=UTF8&amp;qid=1436207852&amp;sr=8-7&amp;keywords=piedra+de+pizza" target="_blank" rel="noopener">pedra refractària</a> o una <a href="http://laplanchacelsius.com/" target="_blank" rel="noopener">planxa d’acer</a>, escalfades a 250 °C durant un mínim de 3/4 d’hora per acumular el màxim de calor. (Ara potser esteu pensant: “Jo tota la vida he estat posant la pizza al forn damunt d’una safata freda”. Doncs és el moment de rectificar. Si no voleu més andròmines a la cuina, com a mínim proveu a coure la pizza directament a la base del forn).',
      },
      {
        p: 'Un altre aliat que ens facilitarà la feina, evitant que la pizza s’enganxi, és el paper de forn.',
      },
      {
        p: 'Animats i predisposats a experimentar? Us asseguro que valdrà la pena!',
      },
    ],
    cost: 'Cost aproximat per ració: 0,80 € (surten 4 pizzes de mida mitjana).',
    unitCost: 0.8,
    ingredients: [
      {
        ul: [
          '400 g de farina panificable o de mitja força (11-11,5 % de proteïna)',
          '260 g d’aigua tèbia',
          '8 g de sal',
          '7 g de <a href="http://www.carritus.com/producto/41134184-levital-pastillas-levadura-fresca" target="_blank" rel="noopener">llevat fresc</a> (el que trobareu a la nevera del súper)',
          'Salsa de tomàquet (casolana, feta amb 2 kg de tomàquet pera madur, oli, sal i sucre, o comercial, com la de la casa <a href="http://www.mutti-parma.com/it/prodotti-rossi-doc/il-resto-della-gamma" target="_blank" rel="noopener">Mutti</a>)',
          '250 g de mozzarella, preferiblement ratllada, especial per pizza. Si la feu servir fresca, escorreu-la escrupolosament amb un drap fins que no hi quedi ni una gota de sèrum.',
          'Oli d’oliva verge extra',
          'Orenga',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Dissolem el llevat en l’aigua tèbia, a uns 35 °C (mai calenta!).',
          'Tirem la sal a la farina, i hi incorporem l’aigua amb el llevat.',
          'Barregem amb una cullera de pal, fins que la mescla sigui homogènia.',
          'Tapem el bol amb paper film i deixem fermentar la massa fora de la nevera fins que hagi doblat el seu volum. El temps requerit dependrà molt de la temperatura ambient.',
          'Amb una espàtula o un ganivet molt esmolat, dividim la massa en quatre trossos.',
          'Els posem dins de quatre recipients hermètics, lleugerament sucats d’oli, i a la nevera.',
          'Deixem la massa així, ben tapada, entre dos i quatre dies. Veurem que creix encara més i es formen bombolles.',
          'Arribat el dia de fer les pizzes, ens comencem a moure unes tres hores abans. Enfarinem lleugerament el marbre. Traiem les masses de la nevera i formem unes boles que deixarem reposar durant 2 hores damunt el marbre. La consistència de la massa serà lleugera i airejada. Sobre tot, no l’hem de prémer ni aixafar amb les mans.',
          'Mentre aquestes boles reposen (s’aniran eixamplant i creixent encara una mica), preparem una salsa de tomàquet que podrem utilitzar també en altres preparacions, ja que ens en sobrarà molta. Si la comprem feta, ens saltem els següents 4 punts.',
          'Partim a quarts 2 kg de tomàquet pera madur.',
          'Posem un raig d’oli d’oliva verge extra en una paella gran. L’escalfem i hi tirem els tomàquets.',
          'Hi afegim una cullerada de postres de sal i una altra de sucre. Tapem la paella i deixem que els tomàquets es coguin durant 1 1/2 hora, remenant de tant en tant. Si la salsa no s’hagués reduït prou, continuaríem la cocció amb la paella destapada.',
          'Passem la salsa pel passapuré.',
          'Engeguem el forn al màxim, amb la pedra a la safata superior. Recordem que s’ha d’escalfar al menys 45 minuts. I anem al <a href="https://www.youtube.com/watch?v=Pr2nM4OEeDo" target="_blank" rel="noopener">quid de la qüestió</a>.',
          'Agafem la massa i l’estirem des del centre cap als extrems. Podem posar un puny a sota i deixar que el seu propi pes l’estiri, ajudant-nos amb l’altra mà. O agafar-la per les vores i anar-la rodant. Sobre tot, no hem d’utilitzar el corró per aplanar-la.',
          'Dipositem la massa en un paper de forn i li donem una forma el més regular possible.',
          'La condimentem amb unes cullerades de salsa de tomàquet, us grapats de mozzarella, un pessic de sal, un rajolí d’oli i orenga al gust.',
          'Amb el forn a màxima potència i la pedra o la planxa metàl·lica ben roent, engeguem el grill.',
          'Amb una pala o altra superfície ben plana, dipositem la pizza damunt de la pedra o planxa de metall.',
          'Veurem que les vores pugen ràpid, i que al cap de 4 o 5 minuts, el grill ja l’haurà daurat prou. És el moment de treure la pizza del forn, descartar el paper i servir-la. El vostre esforç serà finalment recompensat!',
        ],
      },
    ],
    variants: [
      {
        p: 'No acabaríem. La pizza admet mil i un condiments: verdures, xampinyons, olives, embotits, formatges, tonyina… Compte amb la combinació peix-formatge, que no lliga gens. I tingueu sempre present que LA PINYA, PER LES POSTRES.',
      },
    ],
    categories: ['plat-unic', 'primers'],
    tags: ['farina', 'llevat', 'mozzarella', 'pizza', 'tomaquet'],
  },
  {
    id: 'flam',
    createdAt: '2015-06-19T16:10:08+02:00',
    title: 'Flam',
    intro: [
      {
        p: 'La primera imatge que jo associo a aquestes clàssiques postres no té res a veure amb la de la recepta que us proposo. És la del paquet de <a href="https://www.youtube.com/watch?v=OwwfCI6x_KQ" target="_blank" rel="noopener">flan chino Mandarín</a> que ma germana i jo consumíem en format XL fa més de quaranta anys. Entranyable, però industrial al cap i a la fi. Quan més endavant es van començar a comercialitzar els flams envasats, la mare ja havia entrat en la fase “hi ha vida més enllà de la cuina”, i l’opció de fer-los a casa va quedar descartada definitivament. Quina tristor, veure’ls desfilar tots per la nostra taula sense trobar-ne ni un que m’enamorés: el de vores estriades i caramel amargant; el d’ou, ple d’ulls i amb un tel a la base; el de formatge, espés i embafós com ell sol… Quina llàstima, haver de fer-se un mateix el primer flam casolà, per començar a valorar-lo com es mereix!',
      },
    ],
    cost: 'Cost aproximat per ració: 0,46 € (en surten 6, o l’equivalent a 700 ml).',
    unitCost: 0.46,
    ingredients: [
      {
        ul: [
          '500 ml de llet sencera',
          '225 g de sucre',
          '6 ous mitjans (utilitzarem 4 rovells i 2 ous sencers)',
          '1 beina de vainilla',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Posem la llet en un cassó.',
          'Obrim la beina de vainilla amb la punta d’un ganivet i n’extraiem les llavors.',
          'Afegim les llavors i la beina a la llet, i li fem arrencar el bull. Tot seguit, apaguem el foc i deixem que reposi.',
          'Engeguem el forn a 150 °C i, per altra banda, posem a bullir uns 2 l d’aigua. Mentre tot això s’escalfa, prepararem el caramel.',
          'Posem 75 ml d’aigua i 125 g de sucre en una paella de fons gruixut.',
          'A foc mig-fort, anem sacsejant la paella perquè es dissolgui el sucre i es reparteixi bé el calor.',
          'Abaixem la flama i no remenem més fins que, al cap d’uns 10 minuts, el caramel tingui una tonalitat semblant a la de l’aram i una oloreta irresistible. No ens hem de passar d’aquest punt, si no volem que amargui.',
          'Repartim tot el caramel al fons de les flameres.',
          'Barregem els 100 g de sucre restants amb els 4 rovells i 2 ous sencers, fins que no quedi ni un gra de sucre visible.',
          'Colem la llet i la incorporem als ous amb sucre. Remenem aquesta barreja amb cura, procurant que no quedin bombolletes d’aire. A continuació l’aboquem a les flameres, deixant més o menys un centímetre sense emplenar.',
          'Per coure els flams al bany Maria, utilitzarem un recipient apte per al forn que tingui les vores altes (un motlle per lasanyes o similar).',
          'Col·loquem les flameres dins del recipient. Hi aboquem l’aigua bullint, fins que arribi a 1 cm. de les vores dels motlles, i tapem amb un tros de paper d’alumini.',
          'Enfornem 15 minuts. Retirem el paper d’alumini i deixem que els flams es coguin 15 minuts més.',
          'Passat aquest temps, la massa ja haurà quallat, malgrat que tingui una consistència elàstica i tremolosa. Tingueu fe.',
          'Deixem refredar completament els flams i els posem a la nevera durant 8 hores com a mínim.',
          'Per servir, passem un ganivet esmolat tot voltant el motlle i el capgirem sobre el plat.',
        ],
      },
    ],
    variants: [
      {
        p: 'Si no us agrada l’aroma de la vainilla, substituïu-la per un canó de canyella i l’escorça d’una llimona, com si féssiu crema catalana, o bé per dues cullerades de cafè instantani. Atenció: el caramel és molt calent i molt enganxifós. Si dubteu de la vostra habilitat o de la vostra sort, protegiu-vos amb una manyopla.',
      },
    ],
    categories: ['postres'],
    tags: ['flam', 'llet', 'ous', 'sucre', 'vainilla'],
  },
  {
    id: 'mongetes-del-ganxet-2x1',
    createdAt: '2015-05-26T19:21:35+02:00',
    title: 'Mongetes del ganxet 2×1',
    intro: [
      {
        p: 'La del ganxet és probablement la més refinada de totes les varietats de mongeta; un producte <a href="http://ca.wikipedia.org/wiki/Denominaci%C3%B3_d%27origen_protegida" target="_blank" rel="noopener">DOP</a> que trencarà per sempre més els prejudicis de qui encara associa els llegums als ranxos de caserna. A més de la forma ganxuda que li ha fet merèixer el nom, la reconeixereu perquè té una pell fina que la fa fàcilment digerible i que redueix força els temps de cocció –un dels possibles culpables que no consumim tants llegums com ens aconsellen els dietistes.',
      },
      {
        p: 'Per estalviar temps, jo acostumo a coure el doble o el triple de llegums dels que necessito per al consum immediat. Congelant l’excedent en recipients d’una o dues racions, sempre en tinc a punt per acompanyar altres plats o per elaborar un primer ràpid. Us proposo que feu el mateix: seguiu la recepta fins al punt 4, reserveu les que vulgueu guisar i congeleu les restants per consumir-les més endavant, simplement amanides amb un rajolí d’oli o passades per la paella amb un gra d’all.* Així, en ben poc temps, haureu cuit unes 6-8 racions de mongetes de dues maneres diferents. Els menys previsors, no us desanimeu, però: al mercat sempre trobareu una parada de llegums cuits!',
      },
    ],
    cost: 'Cost aproximat per ració: 1,20 € (en surten 8 racions).',
    unitCost: 1.2,
    ingredients: [
      {
        ul: [
          '750 g de mongetes del ganxet',
          '2 cebes',
          '1 pebrot verd',
          '2 grans d’all',
          '1 fulla de llorer',
          '4 claus d’olor',
          '150 ml de puré de tomàquet',
          '1 cullerada de polpa de nyora',
          '1 pessic de pebre vermell (dolç o picant, al vostre gust)',
          'Sal',
          'Oli verge extra',
          'Aigua filtrada (o mineral) si la de la l’aixeta és dura.',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Posem les mongetes en remull amb aigua filtrada i deixem que s’estovin durant tota la nit.',
          'Les passem a una olla amb més aigua filtrada i una cullerada de sal (aproximadament, el doble d’aigua que de mongetes). Afegim a l’olla una fulla de llorer i una ceba pelada, a la qual haurem clavat 4 claus d’olor.',
          'Hem de fer bullir les mongetes, a foc ben baix i sense remenar gaire, aproximadament 1 hora. Traiem l’escuma blanca que es pugui formar al principi amb una escumadora.',
          'Quan estiguin tendres, apaguem el foc i reservem. Aquestes mongetes, simplement escorregudes i amanides amb un rajolí d’oli, són ideals per acompanyar un bròquil, un tall de carn o botifarra, o per preparar una amanida de llegums. Així doncs, si m’heu fet cas i n’heu cuit més del compte, en podeu apartar algunes racions per consumir més endavant.',
          'Per guisar la resta de mongetes, prepararem un sofregit.',
          'Piquem ben fina l’altra ceba i el pebrot verd, i els posem en una cassola amb un raig d’oli. Salem lleugerament i deixem que es facin a foc baix uns deu minuts.',
          'Afegim els dos grans d’all picats ben fins.',
          'Al cap de cinc minuts, hi posem el tomàquet, la polpa de nyora i un pessic de pebre vermell. Remenem, deixant que el sofregit s’impregni de tots els sabors.',
          'Finalment, aboquem a la cassola les mongetes amb unes quantes cullerades de l’aigua de cocció. Deixem que faci xup-xup tot plegat durant cinc minuts i servim.',
        ],
      },
    ],
    variants: [
      {
        p: 'El sofregit vol ser lleuger per no emmascarar el sabor de les mongetes del ganxet però, si us ve de gust, afegiu-hi més ceba, porro o una mica d’api. O elimineu la nyora o el pebrot, si no són sants de la vostra devoció. I si voleu més contundència, ja sabeu: poseu uns trossos de xoriç o botifarra (ep, però de qualitat!) al sofregit.',
      },
    ],
    extras: [
      {
        p: '* Consell: Quan congeleu les mongetes, afegiu aigua de la cocció fins cobrir-les i després deixeu-les descongelar lentament a la nevera. Us semblaran cuites del mateix dia.',
      },
    ],
    categories: ['carmanyola', 'plat-unic', 'primers'],
    tags: ['ganxet', 'mongetes'],
  },
  {
    id: 'sardines-marinades',
    createdAt: '2015-04-30T17:27:11+02:00',
    title: 'Sardines marinades',
    intro: [
      {
        p: 'Segons escriu Josep Pla a <em>El que hem menjat</em>, “la sardina és el peix millor de tots els peixos que divaguen per les aigües amargues, sempre que es compleixin dues condicions: que arribin a taula en el moment adequat i que no s’abusi en menjar-ne. La sardina, fins i tot quan es troba en el moment de la seva màxima comestibilitat, no s’ha de menjar cada dia. Fatiga, cansa i, si és devorada amb golafreria —manera de menjar que en aquest país encara es pot veure!— és com una escopeta el tret de la qual surt per la culata. D’aquest peix, no se’n pot abusar, si no es vol arribar a resultats extravagants.”',
      },
      {
        p: 'Desconec quins són els temuts efectes que vaticina en Pla. Melangioses meditacions? Tendències a la misantropia? Sigui com sigui, fem-li cas. Moderem-nos i aprofitem que ara és el millor temps per menjar aquest peix. Començant a la segona quinzena d’abril i amb un moment culminant pel maig, la sardina “és grossa, grassa, greixosa, de carn dura però suau. És el moment d’enfrontar-s’hi d’una manera decidida i impel·lent.” Som-hi, doncs!',
      },
    ],
    cost: 'Cost aproximat per ració: 1,62 €.',
    unitCost: 1.62,
    ingredients: [
      {
        ul: [
          '20 sardines tallades a filets',
          '200 ml de vinagre blanc (de poma, si us agrada més suau)',
          'Oli d’oliva verge extra',
          'Sal i pebre',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Dissolem 100 g de sal en 1 litre d’aigua calenta i la deixem refredar completament.',
          'Mentrestant, netegem els filets de sardina, eliminant totes les espines i les escates que hi pugui haver.',
          'Les submergim en l’aigua salada (i ja ben freda) durant 5 minuts. Aquest temps ja és suficient per dessagnar-les i treure’ls una mica la fortor.',
          'A continuació, les posem a marinar en vinagre durant uns 30 minuts.',
          'Les eixuguem del tot, les passem a una plata i les cobrim amb oli d’oliva verge extra fins l’endemà.',
          'Servim les sardines damunt d’una coca salada, d’una llesca de pa amb tomàquet o amb un acompanyament de verdures cuites o crudités.',
        ],
      },
    ],
    variants: [
      {
        p: 'Una bona opció per acompanyar les sardines és fer un tartar amb tomàquet carnós (tipus cor de bou) picat ben fi, i una ceba tendra tallada a làmines quasi transparents. Només cal barrejar aquests ingredients amb unes gotes d’oli extra verge i unes fulletes d’alfàbrega, i obtindrem el company ideal de la sardina durant els mesos de més calor.',
      },
    ],
    categories: ['carmanyola', 'segons'],
    tags: ['marinada', 'sardina'],
  },
  {
    id: 'galetes-de-xocolata',
    createdAt: '2015-04-14T21:49:49+02:00',
    title: 'Galetes de xocolata',
    intro: [
      {
        p: 'No sempre surt tot bé, a la cuina. Ni a la primera. Per sort, al blog no veieu els plats que s’esguerren o surten lletjos; les salses que es tallen o les masses que s’esquerden. (Bé, tampoc passa tan sovint…) Quan això ocorre, modifico la recepta, la repeteixo tants cops com faci falta, i no la publico fins que el resultat sigui del tot satisfactori. De vegades, però, aquest moment pot trigar molt en arribar… I això ho demostra el que, fins ara, ha estat el meu taló d’Aquil·les: les galetes.',
      },
      {
        p: 'En el meu periple a la recerca de les galetes “rodones”, n’he vistes de tota mena: algunes sonses i toves; d’altres més dures que rajoles… Fins i tot vaig recrear una erupció volcànica que es va escampar fins cobrir tota la plata del forn. Però cada cop que he dit “Mai més faré galetes!”, l’endemà mateix ja barrinava sobre els motius del fracàs i posava en pràctica alguna millora. Així que, finalment, la meva tossuderia i esperit de contradicció han produït el fruit que buscava: ben rodó, en tots els sentits.',
      },
    ],
    cost: 'Cost aproximat: 0,82 € per persona (en surten 16).',
    unitCost: 0.82,
    ingredients: [
      {
        ul: [
          '240 g de farina',
          '120 g de mantega a temperatura ambient',
          '150 g de sucre',
          '1 ou',
          '1 cullerada de postres d’essència de vainilla',
          '1/2 cullerada de postres de sal',
          '1/2 cullerada de postres de bicarbonat',
          '170 g de xocolata negra (la que més us agradi)',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Cal tenir en compte que prepararem la massa de les galetes a l’avançada, i les courem l’endemà o passats dos o tres dies.',
          'En primer lloc, tamisem la farina, la sal i el bicarbonat.',
          'Amb un ganivet, tallem la xocolata a trossets irregulars d’uns 0,5 cm.',
          'Posem en un bol la mantega i el sucre. Els batem amb unes varetes o forquilla de fusta fins que el color de la mantega blanquegi una mica.',
          'Hi afegim l’essència de vainilla i l’ou, remenant fins que s’integrin en la massa anterior.',
          'Incorporem la farina. Remenem una estona més.',
          'Finalment, hi afegim els trossets de xocolata. Hem d’acabar de barrejar bé els ingredients, amb les mans o amb una cullera de fusta.',
          'Emboliquem la massa de les galetes amb paper film i la deixem a la nevera fins l’endemà, o fins a un màxim de tres dies.',
          'Quan sigui l’hora de coure-les, escalfem el forn a 180 °C i cobrim dues plates de forn amb paper o làmines de silicona especials per al forn.',
          'Traiem la massa de la nevera i la dividim per la meitat. Repetim el procés quatre vegades, fins a obtenir 16 fragments de pes molt similar. Formem boletes (com si féssim panellets) i les aplanem lleugerament perquè no rodin.',
          'Les distribuïm en les dues plates, separant-les al màxim, i les coem durant 15 minuts o fins que es comencin a daurar. Posem al forn primer una plata i després l’altra, no les dues a la vegada!',
          'Quan les traguem del forn, deixem que les galetes s’acabin de coure amb el calor residual de la plata. Passats uns 5 minuts, ja les podrem retirar i posar damunt d’una reixeta perquè es refredin.',
        ],
      },
    ],
    variants: [
      {
        p: 'En lloc de tallar manualment la rajola de xocolata, es pot fer servir xocolata en boletes, especial per fer magdalenes o aquest tipus de galeta. Això sí: és més cara, costa més de trobar i no hi ha tantes varietats. És una opció indicada doncs per als més mandrosos.',
      },
    ],
    categories: ['berenar', 'postres'],
    tags: ['farina', 'galetes', 'mantega', 'sucre', 'xocolata'],
  },
  {
    id: 'pure-de-coliflor',
    createdAt: '2015-04-04T19:03:08+02:00',
    title: 'Puré de coliflor',
    intro: [
      {
        p: 'La coliflor és una hortalissa deliciosa, però té l’inconvenient que, quan es bull, desprèn una olor fètida, descoratjadora, i a causa d’això potser no en mengem tanta com ens agradaria. La culpa la tenen uns compostos de sofre anomenats isotiocianats que, en contacte amb l’aigua bullint, alliberen àcid sulfhídric. I no hi ha trucs que valguin. Amb una cocció tradicional no hi ha manera d’evitar el tuf. Ara bé, si coem la coliflor al vapor, evitant que entri en contacte amb l’aigua bullint, podrem gaudir d’aquesta hortalissa tan delicada sense haver d’obrir finestres. De passada, també conservarà un color blanc impol·lut, un gust intens i un munt de nutrients que les coccions massa perllongades haurien destruït. Us animeu a comprovar-ho?',
      },
    ],
    cost: 'Cost aproximat per ració: 0,95 €.',
    unitCost: 0.95,
    ingredients: [
      {
        ul: [
          '1 coliflor',
          '1 ceba',
          '1 porro (només la part blanca)',
          '1 patata',
          '1/2 l de brou de pollastre',
          '100 ml de crema de llet',
          '25 g de mantega',
          '2 cullerades de vinagre de poma',
          'Oli d’oliva',
          'Sal i pebre',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Triem els brots de la coliflor, els rentem i els posem a coure al vapor durant 10 minuts. Un cop acabada la cocció, els reservem en el mateix cistell, amb l’olla tapada.',
          'Per una altra banda, piquem la ceba i la part blanca del porro, i els posem a sofregir en una olla a foc baix, amb una mica d’oli i mantega.',
          'Passats deu minuts, o abans que la ceba i el porro agafin color, hi afegim la patata pelada i tallada a daus. Remenem.',
          'Cobrim el sofregit amb el brou i les dues cullerades de vinagre. Salem només si és necessari i deixem coure deu minuts més.',
          'Triturem la coliflor amb la batedora i la incorporem a l’olla.',
          'Finalment hi afegim la crema de llet i remenem fins que la barreja sigui homogènia.',
          'Servim amb crostonets de pa, llesquetes torrades tallades molt fines o una mica de cibulet.',
        ],
      },
    ],
    variants: [
      {
        p: 'Podríem afegir un quart de fonoll, tallat finet, junt amb les verdures del sofregit. El seu gust combina molt bé amb el de la coliflor i, a més, evita possibles flatulències.',
      },
    ],
    categories: ['primers'],
    tags: ['ceba', 'coliflor', 'crema', 'patata', 'porro', 'pure'],
  },
  {
    id: 'pasta-al-forn-carmela',
    createdAt: '2015-03-21T16:31:35+02:00',
    title: 'Pasta al forn “Carmela”',
    intro: [
      {
        p: 'A cals Soprano, les millors converses, discussions i fins i tot baralles es produeixen menjant. Us hi heu fixat? Tant si l’escena és al restaurant de l’Artie, a la rebotiga on es reuneixen els homes o <a href="https://www.youtube.com/watch?v=0d2RlyAz6VQ&amp;list=PLAD1DA8ED6ED328F9" target="_blank" rel="noopener">a la casa familiar</a>, costa trobar un sol episodi on no aparegui, d’una manera o altra, la teca: els omnipresents <em>cannoli</em>, les plates de <em>ziti</em> al forn, aquells àpats tan abundants servits als (també abundants) funerals, els embotits que en Tony treu a totes hores d’una nevera sempre plena… Un altre element fonamental i molt present a la sèrie és per tant la cuina dels Soprano, autèntic pont de comandament de la casa i des d’on, parapetada rere la barra dels esmorzars i sempre impecable, la Carmela controla el seu clan. Inspirada per aquesta fantàstica sèrie, i amb les notes d’una clàssica <a href="https://www.youtube.com/watch?v=OQt9x-GZQ8g" target="_blank" rel="noopener">cançó napolitana</a> per homenatjar els orígens dels personatges, la recepta d’avui no podia ser altra que la pasta al forn.',
      },
    ],
    cost: 'Cost aproximat per ració: 1,60 € (en surten 6 racions).',
    unitCost: 1.6,
    ingredients: [
      {
        ul: [
          '500 g de rigatoni Garofalo',
          '500 g de carn picada de vedella',
          '3 salsitxes',
          '1 ceba grossa',
          '1 pastanaga petita',
          '3 grans d’all',
          '400 g de tomàquets pera, pelats i tallats a daus',
          '100 ml de vi negre',
          '150 g de parmesà ratllat',
          '150 ml de llet sencera',
          'Us daus de mantega',
          'Oli d’oliva verge extra',
          'Sal, pebre negre',
          'Un pessic d’orenga',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Escaldem els tomàquets per poder-los pelar fàcilment. Eliminem també les llavors i tallem la polpa a daus. Els reservem.',
          'Tallem la ceba i la pastanaga a daus petits. Les sofregim en una cassola gruixuda, a foc baix.',
          'Al cap d’uns minuts, hi afegim l’all ben picat.',
          'Esparraquem les salsitxes i les incorporem al sofregit, junt amb la carn picada. Pugem una mica la flama i remenem perquè la carn es torri lleugerament.',
          'Sense abaixar el foc, aboquem el vi negre a la cassola i deixem que s’evapori.',
          'Hi posem a continuació el tomàquet. Salem, condimentem amb pebre, un pessic d’orenga (o alfàbrega, o altres herbes que siguin del nostre gust) i deixem coure uns 20 minuts a foc molt baix, amb la cassola tapada.',
          'Incorporem a la salsa uns 150 ml de llet i continuem la cocció uns 20 minuts més, vigilant que no se’ns assequi la salsa.',
          'Mentrestant, engeguem el forn a 200 °C i posem al foc una olla grossa amb aigua salada.',
          'Quan l’aigua arrenqui el bull, hi tirem la pasta, que ha de quedar molt <em>al dente</em>, respectant escrupolosament el temps que indica el fabricant.',
          'En acabar la cocció, colem la pasta i l’aboquem a la cassola amb la salsa. Barregem una mica i ho disposem tot en una plata per a forn.',
          'Hi tirem per damunt uns daus de mantega i un bon grapat de formatge parmesà ratllat.',
          'Posem la plata a la part central del forn, durant uns 30 minuts o fins que adquireixi una tonalitat daurada d’allò més apetitós.',
          'Servim immediatament.',
        ],
      },
    ],
    variants: [
      {
        p: 'Us aconsello substituir la meitat de la carn per albergínia, si us agrada aquesta hortalissa. O substituir-la tota, per fer una versió totalment vegetariana. De fet, les variants pel que fa a la salsa són infinites. Quant al format de la pasta, podeu utilitzar tant <a href="http://www.pastagarofalo.it/it_it/i-prodotti/le-linee-di-pasta/pasta-corta/sigarette-ziti" target="_blank" rel="noopener">ziti</a> com macarrons o penne rigate.',
      },
    ],
    categories: ['plat-unic', 'primers'],
    tags: ['carn', 'ceba', 'forn', 'parmesa', 'pasta', 'ragu', 'salsitxes', 'tomaquet'],
  },
  {
    id: 'mousse-de-xocolata',
    createdAt: '2015-03-03T20:22:32+02:00',
    title: 'Mousse de xocolata',
    intro: [
      {
        p: 'Quina ha estat la vostra reacció davant d’aquesta recepta? Penseu que la mousse ha de ser molt difícil i no us pot sortir de cap manera? Sou del tipus “no em vull complicar” i preferiu consumir la del supermercat, tot i haver llegit les quantitats de greixos emulsionats que incorpora? Doncs aquesta recepta és precisament per a vosaltres, derrotistes i conformistes del món mundial! Per la vostra sorpresa, comprovareu que és una de les postres clàssiques més senzilles i ràpides de fer, a més de deliciosa! Davant del resultat, la vostra autoestima pujarà com les clares muntades!',
      },
    ],
    cost: 'Cost aproximat per ració: 0,45 € (en surten 6).',
    unitCost: 0.45,
    ingredients: [
      {
        ul: [
          '4 ous mitjans a temperatura ambient (traieu-los de la nevera el dia anterior)',
          '120 g de xocolata amb un mínim del 70 % de cacau',
          '2 cullerades soperes de sucre de llustre (en prescindirem si ens agrada la xocolata amarga)',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Trenquem la xocolata a trossos i la posem en un bol metàl·lic o en un cassó.',
          'Col·loquem aquest recipient en una olla amb aigua bullint (bany Maria, per als neòfits) perquè es vagi fonent la xocolata.',
          'Quan ja estigui pràcticament fosa, apaguem el foc.',
          'Separem els rovells i les clares.',
          'Muntem les clares a punt de neu. Si hi volem posar sucre, l’incorporem al final i batem una mica més.',
          'Barregem els rovells a la xocolata fosa, remenant amb brio.',
          'Afegim a la xocolata un terç de les clares muntades, <a href="https://www.youtube.com/watch?v=RaSZyrXcVdI">airejant la barreja amb una espàtula</a>. A continuació, hi incorporem la resta de les clares, mesclant amb la mateixa tècnica i durant el temps just perquè la barreja sigui homogènia, ni un minut més. D’aquesta manera s’incorpora a la mousse l’aire que li dóna la textura característica.',
          'Repartim la mousse en bols o gotets de vidre i refrigerem durant un mínim de quatre hores.',
        ],
      },
    ],
    variants: [
      {
        p: 'A la xocolata fosa hi podeu afegir una cullerada sopera de cafè o de licor. Proveu el Grand Marnier o el Cointreau si us agrada la combinació de xocolata i taronja. I si no, el conyac, el rom o el whisky també hi quedaran molt bé. Evidentment, quan més bona sigui la xocolata, millor serà també la mousse.',
      },
    ],
    categories: ['postres'],
    tags: ['mousse', 'ou', 'xocolata'],
  },
  {
    id: 'salmo-curat',
    createdAt: '2015-02-10T23:11:10+02:00',
    title: 'Salmó curat (gravlax)',
    intro: [
      {
        p: 'Si la paraula <em>gravlax</em> us fa pensar en un armari d’Ikea, no aneu desencaminats. Aquesta és una de les múltiples maneres en què els suecs preparen el seu ingredient estrella: el salmó. Junt amb les mandonguilles i el <em>knäckebröd</em>, aquest peix blau forma part de l’alimentació dels suecs des que van aprendre a pescar, i encara avui predomina en tota la cuina escandinava, generalment condimentat amb anet. El gravlax no és salmó fumat, però tampoc no és marinat (els ingredients amb què s’adoba són secs) i, malgrat això, el resultat sembla un híbrid entre totes dues tècniques. És molt fàcil de preparar i sabreu si us ha sortit bé perquè se us desfarà a la boca.',
      },
    ],
    cost: 'Cost aproximat per ració: 1,80 €.',
    unitCost: 1.8,
    ingredients: [
      {
        ul: [
          '1 llom de salmó (600-700 g) en una peça',
          '300 g de sal',
          '300 g de sucre',
          '1 cullerada sopera de pebre mòlt',
          '1 cullerada sopera d’anet triturat',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Revisem el salmó i retirem amb unes pinces les espines que hi puguin quedar.',
          'Barregem la sal, el sucre i el pebre.',
          'Cobrim el fons d’un recipient hermètic amb una mica d’aquesta barreja.',
          'Hi col·loquem el salmó, amb la pell a la part de baix.',
          'Posem l’anet per sobre del peix i el cobrim completament amb la resta de sal, sucre i pebre. Si cal, preparem més barreja: sempre al 50 %, i tanta com calgui perquè no quedi cap zona descoberta.',
          'Premem el peix amb les mans, tapem el recipient i el posem a la nevera durant 48 hores. (També podríem embolicar el peix amb paper film, però cal tenir present que deixarà anar una mica de líquid).',
          'Passat aquest temps, esbandim el salmó sota l’aixeta.',
          'El tallem ben fi, al biaix. (Caldrà fer doncs un primer tall a 45° que ens servirà d’excusa per tastar el resultat).',
          'Ja el podem servir. Per exemple, damunt de torradetes amb mantega o formatge a les fines herbes.',
        ],
      },
    ],
    variants: [
      {
        p: 'Per evitar riscos, congeleu el salmó (i després descongeleu-lo) abans de curar-lo. La barreja de sal i sucre, a més de pebre, també pot contenir altres condiments en quantitats moderades (no es tracta d’anul·lar el gust del peix). Proveu a afegir-hi una mica de pell de llimona ratllada o mig gotet de vodka.',
      },
    ],
    categories: ['berenar', 'segons'],
    tags: ['anet', 'sal', 'salmo', 'sucre'],
  },
  {
    id: 'platillo-de-festa-major',
    createdAt: '2015-02-03T21:13:04+02:00',
    title: 'Platillo de festa major',
    intro: [
      {
        p: 'Soc conscient que la llargada de la recepta pot dissuadir els més valents a l’hora de decidir-se a fer aquest plat, i que la presència de carn tampoc no el convertirà en un dels favorits entre els seguidors d’aquest blog (segons les estadístiques, sou uns llaminers!). He de reconèixer també que vaig fer la fotografia massa tard, quan un exèrcit de comensals sense aturador ja havia acabat amb les botifarres i les cebetes caramel·litzades que tan bon gust donen a la salsa i que tan decoratives resultaven. Ai…',
      },
      {
        p: 'Què dir doncs en defensa d’aquest platillo, i per animar-vos a provar la recepta? Doncs que és un plat deliciós, que evoca els sabors de la cuina medieval, i que resulta perfecte per quan tingueu convidats, ja que es pot preparar el dia anterior i encara millora. A més, les racions es poden adaptar a la gana i als gustos de cadascú: a qui li agradi la costella, li poseu més costella; a qui li agradin les mandonguilles, doncs ja sabeu… L’únic pesat (no us enganyaré) és pelar les cebetes, que no s’acaba mai… Però això se soluciona amb una copeta del vi de Porto que anireu fent servir pel platillo i una musica que us motivi. L’endemà (o al vespre, quan vinguin els convidats) podreu estar exclusivament per ells… encara que us deixin sense cebetes ni botifarres!',
      },
    ],
    cost: 'Cost aproximat per ració: 3,20 € (en surten 8 racions).',
    unitCost: 3.2,
    ingredients: [
      {
        ul: [
          '400 g de costella ibèrica, tallada a daus',
          '4 botifarres',
          '1 pollastre tallat a quarts',
          '2 cebes',
          '4 tomàquets pera',
          '2 grans d’all',
          '100 ml de vi de Porto o Xerès',
          'La pell de 1/2 taronja',
          '1 branqueta de farigola',
          'Sal',
        ],
      },
      {
        h3: 'Per les mandonguilles:',
      },
      {
        ul: [
          '350 g de carn picada de vedella',
          '150 g de papada de porc picada',
          '1 ou',
          '1 llesca de pa del dia anterior, sense crosta',
          'Llet',
          '1 gra d’all picat molt fi',
          '1 cullerada de julivert picat',
          '1/2 cullerada de postres de nou moscada',
          'Sal i pebre',
          'Farina per arrebossar-les',
        ],
      },
      {
        h3: 'Per la guarnició (cebes caramel·litzades):',
      },
      {
        ul: [
          '600 g de cebes franceses (petites)',
          '100 g de mantega',
          '50 g de sucre',
          '150 g d’orellanes d’albercoc',
          '80 g de pinyons',
        ],
      },
      {
        h3: 'Per la picada:',
      },
      {
        ul: [
          '2 grans d’all',
          '12-15 ametlles torrades, sense pell',
          '1 pessic de sal',
          '2 cullerades de vi de Porto o Xerès',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Primer, preparem la massa de les mandonguilles, que ha de reposar unes hores a la nevera. Per això, posem el pa sec a estovar amb una mica de llet. L’escorrem i el barregem amb la resta d’ingredients, pastant amb les mans i sense manies.',
          'Quan la massa sigui ben homogènia, l’emboliquem amb paper film i la posem a la nevera, durant un parell d’hores com a mínim.',
          'Mentrestant, pelem les cebetes per fer la guarnició i preparem la resta d’ingredients.',
          'Les cebetes, un cop pelades, les distribuïm en una paella ampla, de manera que cobreixin el màxim de superfície sense cavalcar les unes damunt de les altres.',
          'Hi posem la mantega a trossets, el sucre i un pessic de sal. Remenem, i deixem que es comencin a coure a foc baix.',
          'Hi afegim aigua, que tot just les cobreixi. Tapem la paella i deixem que es vagin coent, durant uns 20 minuts o fins que quedi molt poc líquid. Si les cebetes s’assequessin massa de pressa, hi afegiríem unes cullerades d’aigua.',
          'Mentre es caramel·litzen, i sempre alertes que no se’ns coguin massa, anem a atacar un altre front.',
          'Partim les botifarres per la meitat, i de cada quart del pollastre en fem 3 o 4 trossos.',
          'Tallem la ceba en juliana. Pelem i piquem els tomàquets per fer el sofregit. Aixafem els grans d’all (amb la pell) d’un cop sec.',
          'Agafem una cassola ben grossa, preferiblement de fang, ferro colat o acer inoxidable amb un fons ben gruixut. (Si no en teniu cap de bona, demaneu-la en préstec. La cassola és important).',
          'L’escalfem i hi rossegem la costella.',
          'Quan la costella estigui daurada, la retirem i, en el mateix greix, rostim les botifarres i el pollastre.',
          'Retirem les carns.',
          'Abaixem la flama al mínim i sofregim llavors la ceba a poc a poc, amb un pessic de sal.',
          'Abans que agafi color, hi afegim la pell de la mitja taronja, els grans d’all aixafats, la fulla de llorer, la farigola i, tot seguit, el vi de Porto.',
          'Deixem que el vi s’evapori una mica. Hi incorporem aleshores el tomàquet i tapem la cassola perquè vagi fent xup-xup tot plegat.',
          'Mentrestant, amb la massa que teníem a la nevera formem mandonguilles de la mida d’una nou, aproximadament. Les enfarinem, les fregim en una paella apart i les reservem.',
          'Quan el sofregit estigui a punt (al cap de 25-30 minuts, depenent de la cassola), llencem la pell de taronja, l’all, el llorer i la farigola, i el passem pel passapuré per obtenir una salsa ben fina (Si no ens molesta la textura, podem ometre aquest pas).',
          'Netegem la cassola, per tornar-hi a posar el sofregit, ara junt amb la costella, el pollastre i la botifarra. Donem una remenada enèrgica i cobrim les carns amb unes llosses d’aigua.',
          'Esperem uns 15 minuts des que la salsa arrenca el bull, i aleshores hi afegim les mandonguilles. Ho deixem coure tot junt uns 15 minuts més, sempre a foc baix i amb la cassola tapada.',
          'Afegim les orellanes i els pinyons prèviament passats per la paella per torrar-los una mica.',
          'Preparem una picada, triturant els alls i les ametlles al morter, junt amb un pessic de sal. Deixatem aquesta pasta amb una mica de vi i l’aboquem a la cassola.',
          'A l’ultim moment hi afegim les cebetes, amb la mica de salsa dolça que ha quedat a la paella. Tastem i rectifiquem de sal si és necessari.',
          'Apaguem el foc i deixem reposar el platillo fins que arribi l’hora de menjar. Només caldrà escalfar la cassola, remenant amb molta cura perquè no se’ns desintegrin les cebetes, i servir.',
        ],
      },
    ],
    variants: [
      {
        p: 'Les cebetes donen un gust dolç a la salsa que personalment trobo deliciós. Ara bé, si volguéssiu simplificar la recepta (o estalviar-vos la tasca de pelar-les), podríeu prescindir-ne i servir el platillo acompanyat d’un puré de patates. Si trobeu interessant l’aroma que li confereix la pell de taronja, i no us espanta experimentar, afegiu també un canó de canyella a la salsa.',
      },
    ],
    categories: ['plat-unic', 'segons'],
    tags: [
      'botifarra',
      'carn',
      'cebes',
      'festa-major',
      'mandonguilles',
      'orellanes',
      'picada',
      'pinyons',
      'platillo',
      'pollastre',
      'porc',
      'vedella',
    ],
  },
  {
    id: 'bundt-cake-de-platan',
    createdAt: '2015-01-24T23:20:27+02:00',
    title: 'Bundt cake de plàtan',
    intro: [
      {
        p: 'Això del <em>bundt cake</em> –per si us ho preguntàveu– no és més que un pastís en forma de corona o volcà, amb un forat al mig. És doncs l’aspecte el que dóna nom a aquest tipus de pastís, i no els ingredients, que poden ser molt diversos: panses, fruits secs, poma, xocolata… Però, tot i que alguns <a href="https://www.nordicware.com/store/category/bundt-shaped-bakeware#.VMPlTf6G8uc" target="_blank" rel="noopener">motlles</a> puguin semblar petites escultures, la forma del <em>bundt</em> no és deguda a un simple caprici decoratiu. La seva “xemeneia” central fa que hi hagi una major superfície en contacte amb l’aire calent del forn i, en conseqüència, que la cocció sigui més uniforme. Va especialment bé quan les masses són humides com la d’avui, que conté una proporció important de plàtan. El pastís, per cert, és deliciós i facilíssim. Ja podeu anar a comprar un motlle, si no en teniu, perquè l’utilitzareu molts cops!',
      },
    ],
    cost: 'Cost aproximat per ració: 0,41 € (en surten 12 racions).',
    unitCost: 0.41,
    ingredients: [
      {
        ul: [
          '350 g de farina',
          '350 g de sucre',
          '225 g de mantega a temperatura ambient',
          '4 plàtans molt madurs',
          '2 ous',
          '1 iogurt natural',
          '2 cullerades de postres d’essència de vainilla',
          '10 g de llevat en pols (tipus Royal)',
          '1/2 cullerada de sal',
        ],
      },
      {
        h3: 'Per la glassa',
      },
      {
        ul: ['100 g de sucre de llustre', 'El suc d’1 llima (o de 1/2 llimona)'],
      },
    ],
    prep: [
      {
        ol: [
          'La mantega ha de tenir una consistència molt tova, com pomada. Per tant, la traiem de la nevera amb força anticipació. La nit anterior, si convé.',
          'Untem un motlle de tipus <em>bundt</em> amb mantega. L’espolsem amb una mica de farina per evitar que se’ns enganxi la massa.',
          'Encenem el forn a 175 °C, sense ventilador.',
          'Barregem la farina, el llevat en pols i la sal.',
          'Apart, batem la mantega amb una batedora amb varetes, uns 3 minuts. Hi afegim el sucre i seguim batent fins que l’aspecte sigui flonjo i de color pollet.',
          'Afegim a aquesta barreja la vainilla i els ous, un per un. Seguim batent 2 o 3 minuts més.',
          'Pelem els plàtans i els aixafem amb una forquilla.',
          'Els incorporem a la massa, remenant amb una espàtula.',
          'Afegim llavors la meitat de la farina i, tot seguit, el iogurt.',
          'Acabem d’incorporar la farina restant, sense deixar de remenar. La massa serà ara espessa, però humida. I no ens podrem estar de llepar la cullera!',
          'Emplenem el motlle amb aquesta massa.',
          'El col·loquem damunt de la reixeta (i no damunt la safata del forn) per afavorir la circulació de l’aire.',
          'Coem el pastís durant 70 minuts, vigilant que no es cremi per sobre. Si fos així, el podríem cobrir amb un full de paper d’alumini, sense tapar-lo hermèticament.',
          'Apaguem el forn, i hi deixem el pastís uns 10 minuts més per aprofitar el calor residual.',
          'Deixem refredar el <em>bundt cake</em> dins el motlle, ja a fora del forn, durant uns 45 minuts. Cal tenir paciència. Si el volguéssim desemmotllar abans d’hora, es podria clivellar.',
          'Per preparar la glassa, pesem 100 g de sucre de llustre, hi afegim el suc d’una llima (o de 1/2 llimona) i remenem amb una cullera. Hem d’obtenir una pasta de consistència similar a la mel. Així doncs, tant pot ser que hi haguem d’afegir unes gotes d’aigua (sempre de mica en mica) com que hi haguem de posar més sucre, si la llima era molt sucosa.',
          'Desemmotllem el pastís damunt del plat de servir i hi posem la glassa per sobre amb tanta gràcia com siguem capaços.',
        ],
      },
    ],
    variants: [
      {
        p: 'A la massa, just abans d’enfornar, s’hi podrien afegir perles de xocolata (o, senzillament, la xocolata negra de la que consumiu amb el cafè, feta a trossets). O fruits secs triturats, com nous. O totes dues coses: el resultat és aleshores un pastís d’allò més energètic, capaç de ressuscitar un mort! També es podria fondre mitja rajola de xocolata i abocar-la per sobre, en lloc de la glassa de sucre.',
      },
    ],
    categories: ['berenar', 'postres'],
    tags: ['bundt', 'mantega', 'pastis', 'platan', 'sucre'],
  },
  {
    id: 'crema-de-moniato',
    createdAt: '2015-01-13T23:41:56+02:00',
    title: 'Crema de moniato',
    intro: [
      {
        p: 'Quan a casa celebrem la castanyada, una de les coses que abans desapareix de la taula són els moniatos al forn. Malgrat l’èxit que aquest tubercle tan lleig té a la nostra família, només en mengem per Tots Sants, o excepcionalment, quan estic pel·liculera i vull evocar <a href="/pastis-de-moniato" target="_blank" rel="noopener"><em>Allò que el vent s’endugué</em></a>. Potser seria hora de reivindicar un ingredient fins ara marginat i incorporar-lo de manera més habitual a la nostra dieta. Virtuts no li’n falten: és ric en betacarotè, vitamina E i àcid fòlic, per citar-ne algunes. Només cal donar-li una mica de canya (en aquest cas, bitxo, gingebre) i ell, agraït, ens mostrarà el seu temperament més fogós. Al final, qui ens ho havia de dir, la nostra història amb el moniato serà tòrrida!',
      },
    ],
    cost: 'Cost aproximat per ració: 1,60 € (en surten 6 racions).',
    unitCost: 1.6,
    ingredients: [
      {
        ul: [
          '4 moniatos, o l’equivalent a 1,2 kg',
          '1,2 l de brou de pollastre baix en greix',
          '1 llauna de 400 ml de llet de coco',
          '1 cullerada de <em>sambal oelek</em> o bitxo triturat',
          '1 cullerada de gingebre fresc ratllat',
          '1 llima',
          '2 cullerades de sucre morè',
          'Oli d’oliva',
          'Sal i pebre',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Pelem i trossegem els moniatos a daus.',
          'Escalfem 3 o 4 cullerades d’oli en una olla de cul gruixut. Hi afegim el gingebre i el bitxo picat.',
          'Tot seguit, hi aboquem els daus de moniato, el sucre i el suc de la llima. Remenem, tapem i abaixem el foc al mínim.',
          'Quan el moniato estigui tovet, hi afegim el brou de pollastre i deixem coure uns 15 minuts més.',
          'Llavors hi posem la llet de coco i deixem que reprengui el bull.',
          'Apaguem el foc i triturem amb la batedora.',
          'Decorem la crema amb unes gotes d’oli i un pessic de pebre vermell o amb crostonets de pa.',
        ],
      },
    ],
    extras: [
      {
        h2: 'El truc',
      },
      {
        p: 'Segur que, si us agrada la cuina exòtica (o si seguiu aquest blog), de tant en tant compreu gingebre fresc. I, com que amb molt poca quantitat ja n’hi ha prou, és probable que se us faci malbé i l’hagueu de llençar quan tot just n’heu fet servir una punteta. Doncs aquí no es llença res! Fiqueu-lo en una bossa ziploc i congeleu-lo. Com que en la majoria de receptes haureu d’utilitzar el gingebre triturat, només cal que, directe del congelador, ratlleu la quantitat de gingebre que necessiteu amb un ratllador microplane, i el torneu a dins fins a la propera utilització. L’aprofitareu fins al final!',
      },
    ],
    categories: ['primers'],
    tags: ['bitxo', 'gingebre', 'llet-de-coco', 'moniato'],
  },
  {
    id: 'spaghetti-alla-puttanesca',
    createdAt: '2015-01-02T20:22:13+02:00',
    title: 'Spaghetti alla puttanesca',
    intro: [
      {
        p: 'La salsa puttanesca té uns ingredients 100 % mediterranis: all, olives, tomàquets, anxoves, tàperes, bitxo, orenga… i un nom sorprenent, l’origen del qual ha donat lloc a hipòtesis tan diverses com improbables. Arthur Schwartz, autor de <em><a href="http://www.amazon.com/exec/obidos/ASIN/006018261X/thefoodmaven" target="_blank" rel="noopener">Naples at table</a>,</em> atribueix l’adjectiu “puttanesca” al fet que el propietari d’un bordell del barri espanyol acostumava a obsequiar els seus clients amb aquest plat, aprofitant la facilitat, el baix cost i la rapidesa amb què es prepara (no sabem si abans, per donar-los força, o després, perquè es refessin). Altres <a href="http://dobianchi.com/2008/01/13/the-origins-of-sugo-alla-puttanesca/" target="_blank" rel="noopener">interpretacions menys fantasioses</a> vindrien a dir que el nom és fruit de la casualitat o invenció d’algun restaurador especialment dotat per al <em>branding</em>. Naturalment, ens quedem amb la teoria de Schwartz.',
      },
    ],
    cost: 'Cost aproximat per ració: 1,60 €.',
    unitCost: 1.6,
    ingredients: [
      {
        ul: [
          '400 g de spaghetti Garofalo',
          'Oli d’oliva verge extra',
          '3 grans d’all',
          '8 – 10 anxoves',
          '1 culleradeta de tàperes',
          '6 peperoncini (bitxos de Caiena)',
          '100 g d’olives negres sense pinyol',
          '400 g de tomàquets pera madurs',
          '1 culleradeta de postres d’orenga',
          'Parmesà ratllat',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Posem a bullir una olla amb aigua i sal (per cada 100 grams de pasta, 1 litre d’aigua i 10 grams de sal).',
          'Mentrestant, pelem els tomàquets i els tallem a daus petits, eliminant les llavors.',
          'Piquem també l’all ben petit, trinxem les anxoves i tallem les olives a rodanxes.',
          'Mentre es cou la pasta, escalfem oli en una cassola. Hi sofregim l’all i els peperoncini esmicolats amb els dits durant un minut.',
          'Llavors hi posem les anxoves, que aixafarem lleugerament amb la cullera de fusta. Al cap de 2 minuts, o quan les anxoves ja s’hagin desfet, hi aboquem les olives i les tàperes. Deixem coure 2 minuts més.',
          'Afegim el tomàquet, l’orenga i un cullerot de l’aigua de cocció dels spaghetti. Tapem la cassola i fem coure 5 minuts. Com que les anxoves són molt salades, no hem afegit sal, però ara seria el moment de tastar i rectificar si fos necessari.',
          'Colem la pasta i la barregem amb la salsa. L’hi deixem un parell de minuts, que s’impregni bé dels sabors.',
          'Servim de manera facultativa amb una cullerada de parmesà ratllat.',
        ],
      },
    ],
    variants: [
      {
        p: 'Proveu de fer aquest plat amb <a href="http://www.pastagarofalo.it/it_it/i-prodotti/le-linee-di-pasta/pasta-lunga/linguine" target="_blank" rel="noopener">linguine</a>, un format de pasta més típic la Campania, i ajusteu els ingredients de la salsa als vostres gustos. Jo no soc gaire amant de les tàperes, i per això n’he reduït la quantitat. Per contra, he carregat les tintes amb el picant.',
      },
    ],
    categories: ['primers'],
    tags: ['all', 'oli', 'olives', 'pasta', 'peperoncino', 'spaghetti', 'taperes', 'tomaquet'],
  },
  {
    id: 'pastis-de-marbre',
    createdAt: '2014-12-26T12:58:00+02:00',
    title: 'Pastís de marbre',
    intro: [
      {
        p: 'No és habitual que un llibre sobre cuina faci riure. I que, a més de fer riure, estigui escrit de manera magistral per un dels novel·listes anglesos més reconeguts. <a href="http://www.julianbarnes.com/bib/pedant.html" target="_blank" rel="noopener"><em>The pedant in the kitchen</em></a>, de Julian Barnes, és l’obra d’un maniàtic en el qual em reconec plenament: un aficionat a la cuina que aspira a reproduir les receptes amb precisió i que, per tant, queda fora de joc davant d’instruccions com “afegeixi tanta farina com admeti la massa” o “enforni el tall rodó fins que estigui cuit”. Però com sabrem fins quan la farina és benvinguda en aquest coi de massa? I a quina temperatura cal coure aquest tall? Durant quant de temps?. La frustració de Barnes creix encara més davant de fotografies que no tenen res a veure amb allò que es cou als nostres fogons, igual com jo detesto els estilismes en voga, plens de ganivets rovellats i taules escrostonades que ningú no té a casa. Per simpatia amb Barnes, doncs, intento ser tan perepunyetes com ell. Provo i reprovo les receptes, i procuro escriure-les tal com a mi m’agrada llegir-les: indicant les passes per ordre cronològic i detallant sempre els temps, les quantitats i les temperatures. Amb bons ingredients, una bàscula i un forn fiable, tots els plats dels Sopars de duro han de sortir bé. Garantit! Aquí teniu el meu pastís de marbre perquè  ho comproveu avui mateix.',
      },
    ],
    cost: 'Cost aproximat per ració: 0,24 € (en surten 8 racions).',
    unitCost: 0.24,
    ingredients: [
      {
        ul: [
          '220 g de mantega a temperatura ambient',
          '210 g de sucre',
          '225 g de farina',
          '10 g de llevat químic Royal',
          '4 ous a temperatura ambient',
          '150 g de xocolata negra',
          '1 iogurt natural',
          '1 cullerada de postres d’essència de taronja',
          '2 cullerades de llet',
          'Pell ratllada de 1/2 taronja',
          '1 pessic de sal',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Engeguem el forn a 175 °C.',
          'Fem fondre la xocolata, que haurem trossejat dins d’un cassó, junt amb dues cullerades de llet. Quan s’hagi desfet, apaguem el foc i reservem.',
          'Agafem un motlle en forma de corona o rectangular. L’untem amb mantega i hi espolsem una mica de farina, per evitar que la massa s’enganxi.',
          'Tamisem la farina amb el llevat i la sal.',
          'Batem la mantega amb el sucre fins que la mescla comenci a emblanquir.',
          'Hi afegim els rovells un per un, el iogurt, i la ratlladura i l’essència de taronja.',
          'Incorporem aquests ingredients a la farina i remenem fins que s’integrin completament.',
          'Muntem les clares a punt de neu i les afegim a la massa, remenant amb moviments envolvents. Al cap d’uns 3 minuts, la mescla haurà adquirit un aspecte llis i llustrós.',
          'Aleshores dividim la massa en dues meitats. A una d’elles li afegim la xocolata fosa.',
          'Anem dipositant cullerades d’una massa i de l’altra dins el motlle, alternant els colors. Amb una broqueta o un ganivet fi, movem una mica la massa, formant vuits i espirals, perquè tots dos colors s’entortolliguin i formin aigües.',
          'Coem durant 55 minuts.',
          'Deixem que el pastís es refredi i ja podem anar preparant un cappuccino per acompanyar el berenar!',
        ],
      },
    ],
    variants: [
      {
        p: 'Per enriquir aquest pa de pessic (pel meu gust, un pèl massa), foneu també 150 g de xocolata blanca i barregeu-la amb la meitat blanca de la massa. Si feu això, us convé rebaixar la quantitat de sucre fins a uns 175 g. Aquesta versió amb doble xocolata agrada especialment als nens i als més llaminers, però compte amb les calories!',
      },
    ],
    categories: ['berenar', 'postres'],
    tags: ['farina', 'mantega', 'marbre', 'ou', 'pastis', 'sucre', 'taronja', 'xocolata'],
  },
  {
    id: 'truita-de-patates',
    createdAt: '2014-12-12T18:43:17+02:00',
    title: 'Truita de patates',
    intro: [
      {
        p: 'Per bé que la truita de patates tingui tantes versions com cuiners hi ha al nostre país, i que d’aquests milers de truites n’hi hagi moltes mereixedores de cinc estrelles, tinc la sort de poder menjar sovint la que considero la meva truita ideal: lleugerament daurada per fora, tendra i <em>baveuse</em> per dins, i al punt de sal. I per això no sóc fàcil d’acontentar. Com que és un plat tan senzill, exigeixo que els ingredients siguin de la millor qualitat, i que les proporcions siguin equilibrades i sempre idèntiques. No suporto les truites resseques i deixo directament al plat les que estan massa salades. Ja ho veieu: per fer-me una truita de patates, cal ser un primmirat.',
      },
    ],
    cost: 'Cost aproximat per ració: 0,35 €.',
    unitCost: 0.35,
    ingredients: [
      {
        ul: [
          '4 patates mitjanes (o 3 de grosses)',
          '3 ous grossos',
          'Oli d’oliva verge extra',
          'Sal (2 culleradetes de cafè, rases)',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Tallem les patates en làmines irregulars.',
          'Posem 4 cullerades d’oli en una paella grossa. Hi afegim la patata, salem i remenem.',
          'Tapem la paella i la posem a foc ben baix.',
          'Deixem que la patata, per acció de la sal i del propi vapor, es vagin amorosint durant uns 20-25 minuts. Remenem de tant en tant.',
          'Quan ja estigui ben tendra i hagi agafat color daurat, retirem la patata de la paella. Deixem que es refredi una mica.',
          'Mentre, batem lleugerament els ous.',
          'Hi incorporem la patata ja tèbia, remenant.',
          'Greixem una paella més petita (24 cm) amb una mica d’oli i l’escalfem a foc mig-alt. Quan estigui calent, hi aboquem la barreja de patata i ou. Sacsegem una mica perquè no s’enganxi.',
          'Quan estigui cuita d’una banda, tombem la truita. Jo faig servir una tapadora grossa d’alumini, i la mullo perquè no s’hi enganxi res. Giravoltem la paella, subjectant bé la tapadora al damunt, i deixem lliscar la truita per coure-la per l’altre costat.',
          'Ja la podem servir (o deixar-la refredar una estona si la volem menjar com a tapa).',
        ],
      },
    ],
    variants: [
      {
        p: 'El món es divideix en dos bàndols: els que fan la truita de patata amb ceba i els que, com jo, la prefereixen sense. Sempre he pensat que, si la truita de patates hagués de dur ceba, n’hauríem de dir “truita de patata i ceba”. A banda d’aquesta (obvia, ja coneguda) dicotomia, hi ha interpretacions inesperades i ben originals d’aquest plat tan humil. Us remeto al llibre de José Carlos Capel <a href="http://www.planetadelibros.com/homenaje-a-la-tortilla-de-patatas-libro-9395.html" target="_blank" rel="noopener"><em>Homenaje a la tortilla de patatas</em></a>, on trobareu les versions dels millors cuiners del país.',
      },
    ],
    categories: ['carmanyola', 'segons'],
    tags: ['oli', 'ou', 'patata'],
  },
  {
    id: 'cigrons-amb-espinacs',
    createdAt: '2014-12-08T12:33:28+02:00',
    title: 'Cigrons amb espinacs',
    intro: [
      {
        p: 'Ja fa dies que plou. A la cuina regna un silenci només interromput pel brunzit d’una nevera atrotinada i aquell desordre moderat (creatiu, segons algunes teories) que, sigui com sigui, ja he assumit com a inevitable: la cassola de ferro per greixar i desar; les culleres de mesurar que vaig fer servir per al pa de pessic, encara damunt del marbre; aquella tassa desaparellada amb un pòsit de cafè… Em lligo el davantal, engego la ràdio i, mentre endreço, vaig rumiant en el primer plat. Diuen que seguirà plovent? I que el cap de setmana baixen les temperatures? Doncs de sobte he vist ben clar què voldria menjar avui.',
      },
    ],
    cost: 'Cost aproximat per ració: 1,25 €.',
    unitCost: 1.25,
    ingredients: [
      {
        ul: [
          '600 g de cigrons cuits',
          '300 g d’espinacs',
          '1/2 l de brou de pollastre',
          '3 grans d’all',
          '3 tomàquets pera',
          '1 pessic de comí',
          '1 pessic de <em>pimentón</em> de La Vera',
          '1 cullerada de postres de Maizena',
          'Oli d’oliva verge extra',
          'Sal',
          'Pebre negre',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Rentem els espinacs, hi tirem una cullerada sopera de sal i els maseguem amb les mans, fins que comencin a deixar anar el suc.',
          'Els deixem en un escorredor, que perdin tota l’aigua.',
          'Finalment els esbandim sota l’aixeta i els tornem a prémer. Els reservem dins l’escorredor.',
          'Escaldem i pelem els tomàquets. Els tallem a daus petits, descartant les llavors.',
          'Piquem l’all ben fi.',
          'Escalfem oli en una cassola. Fem un sofregit amb l’all i el tomàquet, i el condimentem amb una mica de sal, comí i <em>pimentón</em> de La Vera. Vigilem la temperatura perquè no se’ns cremi l’all.',
          'Hi afegim els cigrons cuits.',
          'Apartem mig got del brou, i aboquem la resta a la cassola. Tapem i esperem que arrenqui el bull.',
          'Mentrestant, deixatem la Maizena en el brou que hem reservat, desfent tots els grumolls.',
          'Aboquem els espinacs i el brou amb Maizena a la cassola. Corregim de sal, afegim pebre negre i esperem cinc minuts, fins que la salsa s’espesseixi una mica.',
          'Servim amb un rajolí d’oli.',
        ],
      },
    ],
    variants: [
      {
        p: 'Si teniu gana, i voleu fer d’aquest plat un àpat substanciós, torreu una llesca de pa, poseu-la en un plat ben fondo i trenqueu-hi un ou. En servir els cigrons –això sí: ben calents– per sobre, l’ou es courà i el pa farà espessir la salseta.',
      },
    ],
    categories: ['primers'],
    tags: ['cigrons', 'comi', 'espinacs', 'pimenton', 'tomaquet'],
  },
  {
    id: 'mongetes-amb-cloisses',
    createdAt: '2014-11-23T21:30:57+02:00',
    title: 'Mongetes amb cloïsses',
    intro: [
      {
        p: 'Una de les preguntes del qüestionari Proust, “<em>Quina és la vostra idea de la felicitat?</em>”, em va fer rumiar que, en cas que l’entrevistada fos jo mateixa, probablement deixaria de banda les vel·leïtats pròpies dels vint anys i em decantaria per un arròs caldós amb llamàntol, uns fideus a la marinera o unes mongetes amb cloïsses com les que veieu aquí. La meva idea de la felicitat és caldosa i <a href="http://ca.wikipedia.org/wiki/Umami" target="_blank" rel="noopener">umami</a>, definitivament. Ja posats a demanar, hi afegiria una bona companyia, un vi blanc fresc, un pa rústic per sucar sense remordiments i la perspectiva d’una pel·lícula clàssica per les següents dues hores. La felicitat cal menjar-se-la a cullerades!',
      },
    ],
    cost: 'Cost aproximat per ració: 3,80 € (d’acord, ens passem una mica de pressupost…).',
    unitCost: 3.8,
    ingredients: [
      {
        ul: [
          '350 g de cloïsses',
          '500 g de mongetes blanques cuites',
          '1 ceba de Figueres',
          '2 grans d’all',
          '1 tomàquet pelat i triturat',
          '12 ametlles torrades',
          'Una branca de julivert',
          'Un bri de safrà',
          'Un pessic de timó i sajolida',
          'Oli d’oliva verge extra',
          'Sal',
        ],
      },
      {
        p: '1 litre de brou, preparat amb:',
      },
      {
        ul: ['800 g de cap i espines de rap, o peix de roca', '400 g de galeres', 'Oli d’oliva'],
      },
    ],
    prep: [
      {
        ol: [
          'El primer que cal fer és posar les cloïsses en un bol amb aigua salada durant un mínim de 2 hores, perquè deixin anar la mica de sorra que puguin tenir a dins.',
          'Preparem el brou. Posem un raig d’oli en una olla de cul gruixut i hi sofregim les galeres, aixafant-les amb la cullera de fusta perquè deixin anar tota la substància.',
          'Afegim tot seguit el cap de rap i uns 2 litres d’aigua.',
          'Quan el brou arrenqui el bull, escumem i baixem el foc. Deixarem que bulli uns 20 minuts i després el colarem. Ens sortirà més brou del que necessitem per aquesta recepta, però podem emprar la resta per un arròs o una sopa, o bé congelar-lo.',
          'Mentre bull l’olla, ens dediquem al sofregit. Piquem la ceba i la sofregim uns 5 minuts en una cassola gran, amb oli i un pessic de sal.',
          'Piquem també un gra d’all, ben fi, i l’afegim a la ceba. L’hi deixem un parell de minuts, vigilant que no es cremi. Assaonem amb una mica de timó i sajolida, i hi afegim el tomàquet triturat. Remenem i tapem la cassola.',
          'Deixem coure el sofregit durant uns 25 minuts, remenant de tant en tant i vigilant que no s’assequi.',
          'A continuació, hi afegim les mongetes cuites, sense gens d’aigua de cocció.',
          'Les reguem amb 1 litre de brou i deixem que facin xup-xup durant 1/4 d’hora.',
          'Mentrestant, escorrem les cloïsses i preparem la picada. Posem en un morter un gra d’all, les ametlles torrades i un pessic de sal. Anem picant. Hi afegim el julivert, un bri de safrà i, finalment, un rajolí d’oli per lligar-ho tot.',
          'Passat el quart d’hora de cocció de les mongetes, o quan el brou s’hagi espessit bastant, hi afegim les cloïsses i la picada. Tapem la cassola i esperem uns 3 minuts, o fins que totes les cloïsses s’hagin obert.',
          'Tastem la salseta i hi afegim sal si és necessari. Servim el plat de seguida, encara ben calent.',
        ],
      },
    ],
    variants: [
      {
        p: 'El preu (i la qualitat) de les cloïsses pot variar molt, segons si són congelades, de cultiu, o de Galícia. Si podeu, trieu-les fresques. Ara bé, com que en aquest plat no actuen com a solistes, tampoc cal que siguin les més cares del mercat. Si aneu curts de temps, podeu utilitzar brou de tetrabrick. Penseu, però, que el podríeu tenir preparat amb anticipació, junt amb el sofregit i la picada, i en només quinze minuts preparar el plat.',
      },
    ],
    categories: ['plat-unic', 'primers'],
    tags: ['all', 'brou', 'ceba', 'cloisses', 'mongetes', 'peix', 'picada', 'sofregit'],
  },
  {
    id: 'puding-de-pera-i-cacau',
    createdAt: '2014-11-19T21:08:34+02:00',
    title: 'Púding de pera i cacau',
    intro: [
      {
        p: 'La fruita en almívar és un d’aquells articles que, inexplicablement, no faltaven mai a les paneres de Nadal. Junt amb les neules, les barres de torró i el foie gras, les llaunes de pera o préssec en almívar eren un <em>must</em> als lots nadalencs dels anys 70. Si teniu l’edat suficient, potser haureu vist (o rebut) alguna d’aquelles cistelles de vímet sobre les quals, els anys bons, regnava un pernil amb una llaçada a la peülla. Però què en fèieu després, de la fruita en almívar? <a href="http://www.gallinablanca.es/receta/postre-pijama/" target="_blank" rel="noopener">Pijames</a> o altres postres igual de ràncies? Els anglesos, mestres indiscutibles de la pastisseria, han tingut una idea millor: casar la fruita amb el cacau i convertir aquests ingredients en un púding per llepar-s’hi els dits.',
      },
    ],
    cost: 'Cost aproximat per ració: 0,85 € (en surten 6 porcions abundants).',
    unitCost: 0.85,
    ingredients: [
      {
        ul: [
          '450 g de pera en almívar escorreguda',
          '175 g de sucre',
          '150 g de mantega a temperatura ambient',
          '125 g de farina',
          '2 ous a temperatura ambient',
          '25 g de cacau en pols',
          '2 cullerades de postres d’essència de vainilla',
          '1 cullerada de postres de llevat químic',
          '1 pessic de bicarbonat',
          '1 pessic de sal',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Engeguem el forn a 200 °C.',
          'Untem amb una mica de mantega un motlle rectangular tipus <em>plum cake</em> i el folrem amb paper de forn.',
          'Distribuïm les peres ben escorregudes a la base del motlle.',
          'Tamisem la farina amb el llevat, la sal i el bicarbonat.',
          'Batem els ous amb la mantega. Hi afegim el sucre, els ous i la vainilla.',
          'Incorporem aquesta barreja als ingredients secs, i remenem. Tot plegat, ha de tenir una consistència cremosa.',
          'Cobrim les peres amb aquesta massa. Deixem caure el motlle un parell de cops damunt el marbre perquè la massa es distribueixi bé per tots els racons.',
          'Coem durant 30 minuts.',
          'Esperem que el púding es refredi deixant la porta del forn entreoberta i el servim amb una mica de xocolata fosa.',
        ],
      },
    ],
    variants: [
      {
        p: 'Tot i que la pera s’adiu especialment bé amb el cacau, la recepta es podria fer igual amb préssec en almívar. Si voleu donar al púding un toc més agosarat, substituïu l’essència de vainilla per kirsch o calvados (aquells licors que també acostumaven a posar dins les paneres…).',
      },
    ],
    categories: ['berenar', 'postres'],
    tags: ['cacau', 'mantega', 'puding', 'pera', 'sucre', 'vainilla'],
  },
  {
    id: 'dorada-en-papillot',
    createdAt: '2014-11-17T19:45:50+02:00',
    title: 'Dorada en papillot',
    intro: [
      {
        p: 'Un dels atractius de comprar al mercat és poder veure com treballen els peixaters. Em fascina l’habilitat amb què netegen sèpies o espellen un peix gat, fent anar els ganivets amb l’energia i precisió d’un samurai. Mentre esperava distreta la meva tanda i vagava en disquisicions del tipus “per què n’hi diuen dorades, si són platejades?”, em vaig adonar que al blog encara no havia publicat cap peix al forn. És el moment de posar-hi remei, doncs, amb una de les receptes més fàcils i ràpides que conec.',
      },
    ],
    cost: 'Cost aproximat per ració: 4,70 €.',
    unitCost: 4.7,
    ingredients: [
      {
        ul: [
          '4 orades petites, netes d’escates i vísceres',
          '2 cebes tendres',
          '2 llimones',
          '2 grans d’all',
          'Un raig de vermut blanc sec',
          'Julivert trinxat',
          'Un rajolí d’oli d’oliva',
          'Sal',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Escalfem el forn a 200 °C.',
          'Tallem els grans d’all a làmines, la llimona a rodanxes i la ceba tendra en juliana.',
          'Salem el peix per dins i el farcim amb all i una rodanxa de llimona.',
          'Posem la ceba tendra i una mica més de llimona damunt d’uns trossos de paper d’alumini, amb els quals embolicarem les dorades.',
          'Posem la llimona restant (2 o 3 rodanxes per peça) i un bri de julivert al damunt del peix. El ruixem amb una mica d’oli i vermut.',
          'L’emboliquem bé amb el paper d’alumini, de manera que no s’escapi el vapor.',
          'Coem al forn durant 20 minuts (una mica més si la peça és gruixuda).',
          'Servim immediatament, amb unes patates al caliu o una amanida.',
        ],
      },
    ],
    variants: [
      {
        p: 'Per ajustar-nos al pressupost (que avui ens hem saltat) podem utilitzar peix congelat. I no necessàriament de ració; els lloms de salmó o de lluç van la mar de bé. Dins del farcell també podem posar altres verdures: porro, pastanaga o fonoll en juliana, xampinyons tallats a làmines… i condiments com una branqueta de timó.',
      },
    ],
    categories: ['segons'],
    tags: ['ceba-tendra', 'dorada', 'llimona', 'peix'],
  },
  {
    id: 'spanakotiropita',
    createdAt: '2014-10-19T20:18:16+02:00',
    title: 'Spanakotirópita (σπανακοτυρόπιτα)',
    intro: [
      {
        p: 'A Grècia hi ha uns establiments de parets greixoses, d’aquells “de tota la vida” on fan unes delicioses panades salades, farcides amb espinacs (Σπανάκι), formatge (Τυρί) o amb una mescla de tots dos ingredients, que són les que avui us convido a fer. Aquestes panades es mengen pel carrer, a tota hora. Són ideals per matar el cuc o per acompanyar una cervesa, com a entrant. Tot just sortides del forn, amb aquella massa tan fina que es trenca només en contacte amb els llavis, les spanakotirópites són senzillament irresistibles. Proveu-les! Repetireu i, al final, acabareu dient el seu nom sense entrebancar-vos.',
      },
    ],
    cost: 'Cost aproximat per ració: 1,20 € (en surten 8 porcions).',
    unitCost: 1.2,
    ingredients: [
      {
        ul: [
          '1 paquet de 10 fulls de pasta filo',
          '650 g d’espinacs frescos (o 2 bosses, si preferiu comprar-los ja nets)',
          '1 ceba',
          '250 g de formatge feta',
          '3 ous',
          '120 g de mantega',
          '150 ml de llet',
          '1 cullerada d’anet',
          'Oli d’oliva',
          'Sal',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Salem els espinacs generosament i els posem en una escorredora. Els comencem a esprémer fort amb les mans, fins que deixin anar un suc verd. Insistim fins que se’ns hagin reduït a 1/8 part del volum original.',
          'Quan ja estiguin ben espremuts, els esbandim sota l’aixeta per eliminar la sal. Els deixem a l’escorredora, prement perquè acabin de deixar anar tota l’aigua.',
          'Escalfem el forn a 200 °C.',
          'Piquem la ceba ben fina i la posem a sofregir en una mica d’oli d’oliva.',
          'Abans que agafi color, hi afegim els espinacs i l’anet. Deixem coure uns 5 minuts i retirem del foc.',
          'Mentre els espinacs es refreden, piquem la feta, de manera que quedi ben engrunada.',
          'També batem els ous i els reservem.',
          'Fonem la mantega i comencem a preparar la base de la spanakotirópita.',
          'Untem un motlle metàl·lic i rectangular, com el de la lasagna.',
          'Cobrim el motlle amb un full de pasta filo, de manera que pugi una mica per les vores. Pintem aquest primer full amb mantega fosa i n’hi posem un altre al damunt. Repetim l’operació, fins gastar els primers cinc fulls.',
          'Barregem els espinacs, ja tebis, amb les engrunes de feta.',
          'Emplenem el motlle amb aquesta barreja.',
          'Hi aboquem per damunt els ous batuts i els escampem bé.',
          'Ara tapem aquest farcit amb els cinc fulls restants, de la mateixa manera que hem fet abans, pinzellant-los entremig amb mantega fosa.',
          'Repleguem les vores sobrants cap a dins, per segellar la spanakotirópita, i cobrim l’última capa amb la mantega fosa que ens hagi sobrat, ben escampada.',
          'Amb un ganivet punxegut, tallem la spanakotirópita en vuit porcions regulars, però sense arribar a la capa inferior.',
          'La posem al forn durant 30 minuts. Passat aquest temps, tirem la llet per sobre dels talls que havíem fet amb el ganivet. Fent-ho així (i no abocant la llet per damunt de la pasta filo), la superfície ens quedarà més cruixent.',
          'Li donem 10 minuts més de forn i ja la podem servir.',
        ],
      },
    ],
    variants: [
      {
        p: 'Seguint el mateix procediment, podeu variar el farcit i fer <a href="https://www.youtube.com/watch?v=gUDRRO3lFe8" target="_blank" rel="noopener">panades de verdura</a>, de carn, o de formatge. Afortunadament, <a href="https://www.youtube.com/watch?v=JJKvAIgPAtk" target="_blank" rel="noopener">no cal fer la pasta filo a casa</a>. La trobareu a la secció de refrigerats del Bonpreu o del Corte Inglés. No la confongueu amb la pasta brick. La filo és blanca i prima com el paper, i fa que aquesta panada sigui crocant i alhora molt lleugera. Tingueu a mà un drap humit per mantenir la pasta filo coberta si us heu d’aturar mentre prepareu aquesta recepta, i tapeu-la hermèticament si us en sobra, perquè s’asseca molt ràpidament i queda inservible.',
      },
    ],
    categories: ['berenar', 'carmanyola', 'plat-unic', 'primers'],
    tags: ['espinacs', 'feta', 'filo', 'formatge'],
  },
  {
    id: 'codonyat',
    createdAt: '2014-10-14T20:04:21+02:00',
    title: 'Codonyat',
    intro: [
      {
        p: 'El codony és un fruit aromàtic de tardor, originari de Mesopotàmia, que cap al segle II aC va viatjar cap a la Mediterrània Oriental. Els grecs en van perfeccionar el cultiu i van obtenir una varietat de qualitat més fina en una regió de Creta anomenada Kydonia. Aquesta nova “poma d’or” es va acabar coneixent així com a <em>Cydoni</em>, i des d’aleshores s’ha utilitzat en dolços i preparats, i també com a remei contra la diarrea i la inflamació dels budells. Això si, sempre cuita, ja que pel fet de ser molt astringent no es pot consumir en cru.',
      },
      {
        p: 'Les primeres receptes documentades amb aquest fruit daten de l’Edat Mitjana. Llavors els codonys es cuinaven amb mel i vinagre, o bé es bullien prèviament en vi negre i després es coïen en mel i espècies, donant lloc a unes postres que, un cop gelificades, es tallaven i se servien de la mateixa forma que ara servim el nostre codonyat. D’origen medieval és també el <a href="http://cotignac-orleans.fr/" target="_blank" rel="noopener">Cotignac</a>, una gelatina de codony envasada en caixetes amb què els francesos de la Val de Loire obsequiaven els visitants de la reialesa, i molts altres dolços de la conca mediterrània, des de Turquia fins al Marroc.',
      },
      {
        p: 'I ara per què us explico tot això? Doncs perquè de tant en tant, em poso transcendental. Imagino els nostres avantpassats del segle XV fent codonyat d’una manera pràcticament idèntica a com encara el fem nosaltres, i de sobte l’experiència de cuinar i menjar adquireix una nova dimensió. Fa que uns gestos tan quotidians com els relacionats amb la cuina ens lliguin amb aquest fil anomenat història. O crèieu que tot es redueix a pesar ingredients i remenar olles?',
      },
    ],
    cost: 'Cost aproximat per ració: 0,15 € (en surten 24 racions).',
    unitCost: 0.15,
    ingredients: [
      {
        ul: [
          '3 codonys (o l’equivalent a 1 kg, un cop pelats i sense el cor)',
          '750 g de sucre blanc',
          'El suc de mitja llimona',
          '3 cullerades soperes de vi d’Oporto',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Espremem la llimona en un bol o un recipient gros amb tapa.',
          'Partim els codonys a quarts. Els pelem i traiem el cor i les llavors.',
          'Partim cada quart en vuit o deu trossos. Anem dipositant els trossos de codony al bol, impregnant-los amb el suc de llimona.',
          'Pesem el codony. Per cada quilo de codony, hem d’utilitzar 3/4 parts del seu pes en sucre. Ni més ni menys. Si pretenem fer un codonyat <em>light</em> amb menys proporció de sucre, no se’ns conservarà.',
          'Barregem el sucre i el codony. Tapem el bol i deixem reposar fins l’endemà.',
          'Passades 24 hores, el codony haurà deixat anar molt suc. Aboquem tot el contingut del bol en un cassó i el posem a foc moderat, sense tapa.',
          'Tan bon punt arrenqui el bull, hi afegim l’Oporto. Abaixem la flama i deixem coure uns 50 minuts.',
          'Quan el codony agafi una tonalitat vermellosa, el triturem bé amb una batedora de braç, sense necessitat de treure el cassó del foc.',
          'Deixem que cogui cinc minuts més. Per dissipar els vostres temors, i malgrat que en aquest punt el codonyat semblarà lava del Kilawea, us diré que no s’enganxa gens al cassó. Tot i això, si us heu de quedar més tranquils, remeneu de tant en tant.',
          'Aboquem aquest puré vermellós en un motlle de silicona o metàl·lic.',
          'El tapem amb un tros de paper de forn, el deixem refredar completament i el posem a la nevera.',
          'Passades unes hores, el codonyat ja es podrà desemmotllar. Es mantindrà a la nevera, preferiblement tapat amb paper de forn i dins d’un <em>tupper, </em>durant més temps del que trigareu a menjar-vos-el.',
        ],
      },
    ],
    variants: [
      {
        p: 'L’Oporto és un ingredient que jo he afegit a la recepta base (que conté només codonys i sucre), amb la intuïció que hi havia de quedar força bé. Modestament he de dir que hi dóna un toc deliciós. Com alternativa a l’Oporto, podríeu posar-hi també un canó de canyella (i, en aquest cas, recordeu-vos de retirar-lo abans de passar la batedora).',
      },
    ],
    categories: ['berenar', 'postres'],
    tags: ['codony', 'sucre'],
  },
  {
    id: 'amanida-de-patata',
    createdAt: '2014-10-11T20:17:22+02:00',
    title: 'Amanida de patata',
    intro: [
      {
        p: 'Quin plat més mal tractat, aquest! Al nostre país, les amanides de patata acostumen a ser unes masses glaçades i envidreïdes, dignes dels self-service de Salou, on l’únic brou que hi ha present és el del cultiu de la salmonel·la. Però si anem a Viena i demanem una escalopa o unes salsitxes, ens les serviran amb tota una altra cosa: una amanida cremosa i potser tèbia, que voldrem reproduir a casa i mai no ens en acabarem de sortir. No hi ha problema. Sempre podem dir que adaptem les receptes al nostre gust i als ingredients de km 0.',
      },
    ],
    cost: 'Cost aproximat per ració: 0,38 €.',
    unitCost: 0.38,
    ingredients: [
      {
        ul: [
          '750 g de patates',
          '1 ceba (60 g)',
          '2 cogombrets en vinagre',
          '150 ml de brou de carn de vedella',
          '75 ml d’oli d’oliva',
          '2 cullerades de vinagre blanc de vi',
          '2 culleradetes de mostassa antiga',
          '1 cullerada de postres de cibulet',
          'Sal, pebre i un pessic de sucre',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Posem a coure les patates amb pell, en aigua freda.',
          'Mentrestant, piquem els cogombrets i la ceba en trossos molt petits.',
          'Quan les patates estiguin cuites (uns 20 minuts. Més temps si són grosses), les traiem de l’aigua i deixem que es refredin una mica.',
          'Pelem les patates i les tallem a rodanxes gruixudes. Les reservem en un bol.',
          'Escalfem el brou i l’aboquem damunt de les patates. Hi afegim també la ceba.',
          'Mentre les patates absorbeixen el brou, preparem la vinagreta amb l’oli, el vinagre, la mostassa, el cibulet, sal, pebre i un pessic de sucre.',
          'Assaonem les patates amb la vinagreta i els cogombrets i deixem refredar uns 20-30 minuts, fins que arribi el moment de servir.',
        ],
      },
    ],
    variants: [
      {
        p: 'La recepta original austríaca s’elabora amb oli de gira-sol i cibulet fresca, i no incorpora cogombrets en vinagre (però és que a mi m’agraden tant…). Per variar, avui no ha servit d’acompanyament a cap carn vermella, sinó a aquest <a href="http://www.telecinco.es/robinfood/recetas/Pollo-asado_0_1873200082.html" target="_blank" rel="noopener">sublim pollastre de Martin Berasategui</a>.',
      },
    ],
    categories: ['primers'],
    tags: ['brou', 'ceba', 'cibulet', 'mostassa', 'patata'],
  },
  {
    id: 'pollastre-a-lestrago',
    createdAt: '2014-10-07T18:10:27+02:00',
    title: 'Pollastre a l’estragó',
    intro: [
      {
        p: 'Aquest pollastre té l’encant i la calidesa de la cuina de bistrot; la que ens remet a fa uns anys, a París, a un hotel amb els terres que cruixien. O a aquell restaurant ja desaparegut, on s’havia d’anar mudat. Per fer-li els honors, pareu la taula amb unes estovalles de quadres vermells, deixeu-hi una ampolla de vi i una cistella de pa tendre, i serviu el plat junt amb unes mongetes tendres o uns espàrrecs a la planxa: tindreu el millor exemple d’allò que els anglosaxons anomenen <em><a href="http://www.merriam-webster.com/dictionary/comfort%20food" target="_blank" rel="noopener">comfort food</a></em>, i que nosaltres només hem sabut traduir de manera esbiaixada com a “cuina dels sentits”. Teniu temps i ganes de cuinar, ara mateix? Doncs poseu-vos-hi! En menys de mitja hora, en assaborir el plat, potser se us acudeixi una expressió més encertada.',
      },
    ],
    cost: 'Cost aproximat per ració: 2,25 €.',
    unitCost: 2.25,
    ingredients: [
      {
        ul: [
          '1 pollastre tallat en vuitens',
          '4 escalunyes',
          '4 grans d’all',
          '4 branques d’estragó fresc',
          '200 ml de cava',
          '200 ml de crema de llet',
          '4 cullerades soperes d’oli',
          '20 g de mantega',
          'Sal i pebre',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Posem l’oli i la mantega en una cassola gruixuda. Marquem els trossos de pollastre, a foc mig.',
          'Mentrestant, piquem les escalunyes i l’all. Els afegim a la cassola, junt amb l’estragó.',
          'Deixem que les verdures es marceixin una mica.',
          'Quan el pollastre sigui daurat, i abans que les verdures agafin color, desglacem la cassola amb el cava. Salem i hi afegim un pessic de pebre.',
          'Baixem el foc i tapem la cassola. Deixem coure uns 20 minuts, tombant els trossos de pollastre a mitja cocció.',
          'Passat aquest temps, dipositem el pollastre a la plata de servir i el reservem calent.',
          'Afegim la crema de llet a la cassola. Apaguem el foc abans que arrenqui el bull.',
          'Retirem les branques d’estragó i passem la salsa pel passapuré.',
          'Napem el pollastre amb la salsa i el servim amb un arròs blanc o una <em>parmentier</em>.',
        ],
      },
    ],
    variants: [
      {
        p: 'Per fer el guisat podeu utilitzar només els pits de pollastre. I si no teniu cava (o preferiu reservar-lo per altres usos…) feu servir vermut o vi blanc.',
      },
    ],
    categories: ['segons'],
    tags: ['all', 'cava', 'escalunyes', 'estrago', 'nata', 'pollastre'],
  },
  {
    id: 'hamburgueses-de-peix',
    createdAt: '2014-09-30T13:56:24+02:00',
    title: 'Hamburgueses de peix',
    intro: [
      {
        p: 'Amb el peix passa com amb la fruita: tots sabem que és saludable, i que ens convé menjar-ne, però alguns mandrosos no ho fan per estalviar-se la “feina” de pelar o de treure espines. Aquest és un dels (tristos) efectes de la sobreabundància del nostre primer món. No patiu, però, que aquí no volem despertar-vos mala consciència, sinó simplement donar-vos idees per menjar bé, de manera equilibrada i amb un cost i un esforç mínims. Els pastissets o les hamburgueses de peix són ideals per introduir aquest aliment en la dieta dels més petits (a més dels mandrosos a què hem al·ludit…) sense haver de recórrer als precuinats o renunciar a l’autenticitat.',
      },
    ],
    cost: 'Cost aproximat per ració: 2,15 € aprox. (depenent del peix).',
    unitCost: 2.15,
    ingredients: [
      {
        ul: [
          '500 g de filet de salmó, o de lluç, o una barreja de tots dos',
          '1 ceba tendra',
          '1/4 de pebrot vermell',
          '12 olives farcides d’anxova',
          '1 gra d’all',
          '1 cullerada de postres de mostassa antiga',
          '1 branqueta de julivert, trinxada',
          '2 cullerades soperes de pa ratllat',
          '1 cullerada sopera de llavors de sèsam',
          '1 rajolí d’oli d’oliva',
          '1/2 llimona',
          'Sal, pebre negre',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Rentem i piquem la ceba i el pebrot vermell, ben finets, i els posem a sofregir en una paella amb poc oli i a foc molt baix.',
          'Passats uns 10 minuts, retirem la verdura de la paella i deixem que es refredi.',
          'Mentrestant, <a href="https://www.youtube.com/watch?v=LnhD4znyPrE" target="_blank" rel="noopener">traiem la pell i les espines que pugui tenir el salmó</a> i/o el lluç.',
          'Tallem el peix a daus i, tot seguit, el piquem amb el ganivet fins que tingui una consistència similar a la de la carn picada per fer hamburgueses. També podríem triturar-lo amb la picadora, però només uns segons perquè no quedi reduït a una pasta.',
          'Piquem les olives i el gra d’all.',
          'Barregem el sofregit (que ja estarà tebi) amb el salmó, l’all, les olives i dues cullerades de pa ratllat. Condimentem amb sal, pebre, julivert i una cullerada de mostassa.',
          'Pastem tots aquests ingredients i formem una bola. L’emboliquem amb paper film i la posem a la nevera durant una hora com a mínim.',
          'Dividim la massa i, amb les mans, formem quatre hamburgueses. Les arrebossem lleugerament amb una mica de pa ratllat i unes llavors de sèsam.',
          'Posem un filet d’oli en una paella i daurem les hamburgueses un parell de minuts per cada costat. Quan estiguin a punt, les ruixem amb unes gotes de suc de llimona i servim.',
        ],
      },
    ],
    variants: [
      {
        p: 'La recepta pot funcionar igualment bé sense el pebrot, o amb altres peixos com el llobarro, la tonyina o el rap. Si us agraden les tàperes, també n’hi podeu afegir una cullerada, prèviament picades. L’anet també s’adiu molt bé amb el salmó, si utilitzeu aquest peix. Ben mirat, per què no aneu canviant els ingredients de setmana en setmana?',
      },
    ],
    categories: ['carmanyola', 'segons'],
    tags: ['ceba-tendra', 'lluc', 'mostassa', 'olives', 'pa-ratllat', 'pebrot', 'peix', 'salmo', 'sesam'],
  },
  {
    id: 'pastis-de-poma-estil-america',
    createdAt: '2014-09-24T22:56:22+02:00',
    title: 'Pastís de poma estil americà',
    intro: [
      {
        p: 'El pastís tradicional de Nord-amèrica, aquell amb què Mrs. Ingalls alimentava <a href="https://www.youtube.com/watch?v=pKVvZhTQl0k" target="_blank" rel="noopener">la seva prole</a>, es basa en una crosta friable i cruixent, farcida amb pomes o nabius, una mica de canyella i poc més. De fet, no cal res més. La recepta és antiga, però el pastís segueix agradant com el primer dia. I com que l’elaboració és senzilla però entretinguda, també ens permet fer volar la imaginació mentre som a la cuina, treballant. A mi se’m representaven totes les pomeres que <a href="http://en.wikipedia.org/wiki/Johnny_Appleseed" target="_blank" rel="noopener">Johnny Appleseed</a> va escampar pel continent, i el conseqüent excedent de fruita que les pioneres es devien trobar entre mans. Suposo que una d’elles, a qui estem molt agraïts malgrat no conèixer, va tenir la bona pensada de fer-ne un pastís. També em recordava d’<a href="https://www.youtube.com/watch?v=Y0Y_XRiJsCI" target="_blank" rel="noopener">una cançó de Don McLean</a> que parla dels Chevys, de Buddy Holly, dels balls de graduació, de JFK, de la lleva cap al Vietnam, de tot allò que cap en 8 interminables minuts i, sobretot, d’una tal “Miss American Pie” que, com tota la resta de referències, forma part de l’imaginari col·lectiu d’aquest país. La diferència entre l’obra de McLean i la de l’anònima pionera és que el pastís, per sort nostra, no acusa gens el pas del temps.',
      },
    ],
    cost: 'Cost aproximat per ració: 1,30 € (en surten 12 racions).',
    unitCost: 1.3,
    ingredients: [
      {
        h3: 'Per la crosta:',
      },
      {
        ul: [
          '300 g de farina',
          '200 g de mantega ben freda',
          '100 ml d’aigua quasi gelada',
          '1/2 cullerada de sal',
          '1 cullerada de sucre',
        ],
      },
      {
        h3: 'Per al farcit:',
      },
      {
        ul: [
          '10 pomes tipus Pink Lady, o l’equivalent a 1 1/2 kg abans de pelar',
          '30 g de farina',
          '100 g de sucre',
          'El suc de 1/2 llimona',
          '1/2 culleradeta de sal',
          '2 cullerades de postres de canyella',
          'Un pessic de clau mòlt, o de 5 espècies',
          '30 g de mantega a daus',
          '1 ou',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Preparem la crosta amb anticipació. Per això, necessitarem <a href="https://www.youtube.com/watch?v=b9KH0HH-SnA">una picadora elèctrica</a> o bé <a href="https://www.youtube.com/watch?v=2QeKExMgyHQ">un estrep de pastisser</a> que ens permeti convertir la mantega ràpidament en engrunes, sense que pugi la temperatura i es desfaci.',
          'Traiem la mantega de la nevera i la tallem a daus.',
          'La posem al bol de la picadora, junt amb la farina i un pessic de sal i sucre.',
          'Engeguem l’aparell. Passats uns 30 segons, veurem que el contingut del bol sembla un munt de molles, i encara podem diferenciar trossets de mantega que no s’han desfet. Aquest és el resultat que busquem. Si treballem amb l’estrep, aconseguirem el mateix al cap d’un o dos minuts.',
          'Afegim una mica d’aigua i donem un altre impuls a la picadora, o seguim treballant amb l’estrep. Ajustem la quantitat d’aigua, procurant no passar-nos. En tindrem prou quan la massa es cohesioni en pessigar-la.',
          'Dividim en dues parts aquesta barreja d’aspecte engrunat. Formem dos discos d’uns 2 cm d’alt, els emboliquem bé amb paper film i els deixem a la nevera durant almenys 1 hora.',
          'Mentrestant, treballem en el farcit. Pelem les pomes, les partim a quarts, els llevem el cor i tallem els quarts en tres trossos.',
          'A mida que anem tallant, reservem els trossos de poma en un bol amb el suc de llimona, remenant perquè no s’oxidi, i recordem la història de Johnny Appleseed.',
          'Barregem la farina amb la canyella, el sucre i les espècies. Hi afegim un pessic de sal i mesclem aquests ingredients secs amb la poma.',
          'Tornem a la crosta, ara. Traiem un dels discos de la nevera i l’aplanem amb el corró damunt del marbre enfarinat. Procurem estirar la massa sempre des del centre, i l’anem girant 90° perquè agafi una forma circular homogènia.',
          'Preparem un motlle d’uns 22 cm de diàmetre. Quan la massa sigui lleugerament més gran que el nostre motlle, l’hi traslladem, ajudant-nos del corró, i deixant que sobresurti una mica per les vores. Tallem els excessos de massa amb unes tisores. No cal untar el motlle abans, ja que la massa conté molta mantega i per aquest motiu no s’hi enganxarà.',
          'Aboquem el farcit de poma sobre aquesta base i hi posem uns daus de mantega pel damunt.',
          'Estirem ara el segon disc de massa. Abans de moure’l cap al motlle, retallem uns forats de ventilació amb el ganivet.',
          'Tapem el pastís amb aquest disc i segellem les vores, prement amb els dits.',
          'Decorem amb el ganivet els trossos que acabem de retallar de la massa (en aquest cas, per donar-los aspecte de fulla) i els col·loquem entremig dels forats, o de la manera que ens agradi més.',
          'Posem el pastís a la nevera, durant uns 30 minuts.',
          'Escalfem el forn a 220 °C.',
          'Batem l’ou amb 2 cullerades d’aigua, pinzellem amb aquesta barreja la superfície del pastís i l’espolsem amb una mica  de sucre.',
          'El coem a 220 °C durant 15 minuts. Passat aquest temps, baixem la temperatura del forn a 190 °C i prosseguim la cocció durant 1 hora més, controlant el punt de daurat.',
          'Deixem refredar completament el pastís, durant almenys 6 hores, sense posar-lo a la nevera.',
          'El servim a temperatura ambient amb una bola de gelat de vainilla.',
        ],
      },
    ],
    variants: [
      {
        p: 'La mateixa recepta es pot elaborar amb nabius o amb altres fruites que no deixin anar gaire suc, però crec que la poma, amb l’aroma de la canyella i de la crosta rica en mantega, és una combinació ideal. Jo no canviaria res!',
      },
    ],
    categories: ['berenar', 'postres'],
    tags: ['farina', 'mantega', 'pastis', 'poma'],
  },
  {
    id: 'pasta-al-pesto',
    createdAt: '2014-09-16T19:21:01+02:00',
    title: 'Pasta al pesto',
    intro: [
      {
        p: 'El <em>pesto</em> és un condiment aromàtic, colorit i 100 % mediterrani, que es prepara fàcilment i sense haver d’encendre el foc. Això sí, cal un morter i la paciència necessària per picar deu minuts sense esbufegar… O bé una batedora elèctrica i una actitud no tan primmirada envers la tradició culinària. El que us dicti la consciència! De fet, la paraula <em>pesto</em> significa precisament <em>picada. </em>I per tant, comprèn totes les preparacions que es poden fer amb el morter. No només aquest <em>pesto</em> genovès, verd i amb l’aroma intensa que li dóna l’alfàbrega, sinó també el sicilià, vermell per l’addició del tomàquet, o altres variants que incorporen ingredients com la sàlvia, les ametlles, les nous o la ruca.',
      },
    ],
    cost: 'Cost aproximat per ració: 1,45 €.',
    unitCost: 1.45,
    ingredients: [
      {
        ul: [
          '400 g de spaghetti de bona qualitat',
          '100 ml d’oli d’oliva verge extra',
          '8 branquetes d’alfàbrega fresca',
          '2 grans d’all',
          '1 cullerada sopera de pinyons',
          '80 g de formatge ratllat, barreja de pecorino i parmesà.',
          'Sal gruixuda',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Arrenquem les fulles d’alfàbrega, les netegem i les eixuguem bé.',
          'Pelem l’all, el tallem a trossets i l’aixafem al morter.',
          'Hi afegim les fulles d’alfàbrega i un pessic de sal gruixuda, que ajudarà a triturar-les.',
          'Quan el contingut del morter s’hagi convertit en una pasta verda i lluenta, hi aboquem els pinyons. Els triturem junt amb els ingredients anteriors.',
          'Hi afegim l’oli a rajolins, com si féssim allioli, i hi anem tirant el formatge gradualment, a cullerades.',
          'Un cop lligada la salsa, la reservem.',
          'Bullim els spaghetti en aigua salada, a foc viu i sense tapar l’olla, durant el temps que indiqui el fabricant.',
          'Els escorrem i els barregem amb el pesto que acabem de preparar.',
          'Ratllem una mica més de parmesà pel damunt del plat i servim.',
        ],
      },
    ],
    variants: [
      {
        p: 'Per fer el <em>pesto</em> amb batedora, només cal posar tots els ingredients en el bol, llevat del formatge, i deixar que l’electricitat treballi per nosaltres. El formatge s’hi afegeix al final, tot remenant. Si no trobeu pecorino, substituïu-lo per grana padano, parmesà, sbrinz o un altre formatge molt sec i curat (sobretot, no utilitzeu formatges tendres, que el pesto us quedaria gomós). És imprescindible utilitzar alfàbrega fresca (mai seca!) i un oli d’oliva verge extra de primera qualitat.',
      },
    ],
    categories: ['primers'],
    tags: ['alfabrega', 'all', 'oli', 'pasta', 'pesto', 'pinyons', 'spaghetti'],
  },
  {
    id: 'escabetx-de-gall-dindi',
    createdAt: '2014-09-03T18:36:00+02:00',
    title: 'Escabetx de gall dindi',
    intro: [
      {
        p: 'D’acord: el gall dindi té una carn blanca, baixa en greix, amb proteïnes de primera i que, a més, resulta molt econòmica… però, per ser francs, si la coem simplement a la planxa ens recorda de manera massa evident que estem a dieta. O que ens hi hauríem de posar. Ens deprimeix. Per acabar-ho d’adobar, a la boca es converteix en una bola estopenca, que no hi ha manera d’engolir. No, gràcies! Per molt frugals que siguin els nostres àpats, mai no renunciarem al plaer de menjar! Us convido doncs a preparar el gall dindi en escabetx: és la millor manera de fer d’aquesta carn un plat melós i aromàtic, que de ben segur us sorprendrà. Mai un ocellot tan grotesc despertarà el vostre apetit d’aquesta manera!',
      },
    ],
    cost: 'Cost aproximat per ració: 1,35 €.',
    unitCost: 1.35,
    ingredients: [
      {
        ul: [
          '2 pits de gall dindi (uns 650 g)',
          '2 cebes',
          '2 pastanagues',
          '2 grans d’all',
          '2 fulles de llorer',
          '1 branqueta de farigola',
          '1 cullerada sopera de pebre negre en gra',
          '80-100 ml d’oli d’oliva',
          '80-100 ml de vinagre de poma',
          '80-100 ml d’aigua',
          'Sal',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Pelem les cebes i les pastanagues i en fem talls de mida similar.',
          'Salem el gall dindi i el posem en una cassola d’uns 20-22 cm de diàmetre.',
          'Hi afegim el pebre, el llorer, la farigola, la ceba, la pastanaga i els grans d’all sense pelar.',
          'Cobrim amb aigua, oli i vinagre a parts iguals (la quantitat de líquid dependrà de la mida de la vostra cassola. Procureu que no sigui massa grossa).',
          'Tapem i fem bullir a foc baix durant 45 minuts.',
          'Deixem refredar i posem a la nevera fins l’endemà.',
          'Servim l’escabetx fred o lleugerament escalfat, amb un acompanyament d’arròs blanc.',
        ],
      },
    ],
    variants: [
      {
        p: 'L’escabetx es conserva molt bé a la nevera i, de fet, millora el seu sabor d’un dia per l’altre. Així doncs, és una bona idea preparar el plat amb anticipació, per quan aneu justos de temps, o per portar a la carmanyola.',
      },
    ],
    categories: ['carmanyola', 'segons'],
    tags: ['ceba', 'escabetx', 'gall-dindi', 'llorer', 'oli', 'pastanaga', 'pebre', 'vinagre'],
  },
  {
    id: 'amanida-verda-de-cogombre-i-alvocat',
    createdAt: '2014-08-31T18:34:29+02:00',
    title: 'Amanida verda (de cogombre i alvocat)',
    intro: [
      {
        p: 'Sempre dic que jo no soc cuinera professional, sinó una llicenciada en Belles arts que porta davantal. Amb aquesta matisació pretenc excusar les meves mancances i –a la vegada– animar tothom a gaudir de la cuina. Tenir un passat entre pigments i aglutinants, però, no deixa indemne. La meva (de)formació es fa palesa aquí i allà, i en ocasions tan poc previsibles com és cuinant. <a href="/crema-verda-de-verdura" target="_blank" rel="noopener">Fa uns mesos</a> ja us recomanava que no trituréssiu junts ingredients verds i taronges. Altres cops no he publicat determinades receptes (encara que fossin realment saboroses) per l’excessiva foscor d’una salsa… Avui el repte era fàcil: he buscat la monocromia del verd per fer una amanida tan simple com refrescant. Ideal, doncs, per sopar a la terrasseta i fer baixar la temperatura.',
      },
    ],
    cost: 'Cost aproximat per ració: 1,15 €.',
    unitCost: 1.15,
    ingredients: [
      {
        ul: [
          '2 cogombres grans',
          '2 alvocats madurs',
          'El suc i la ratlladura de 1/2 llima',
          '1 cullerada sopera de menta picada',
          '2 cullerades d’oli d’oliva',
          'Sal i pebre al gust',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Pelem els cogombres, els partim longitudinalment i, si cal, raspem les llavors amb una cullera.',
          'Els tallem a trossos d’1 cm i els posem en un colador. Salem i deixem reposar durant 30 minuts, perquè deixin anar una mica d’aigua. Després els esbandirem i eixugarem amb paper de cuina.',
          'Mentrestant, rentem i piquem la menta. Ratllem també la pell de llima.',
          'Tallem els alvocats en trossos de mida similar al cogombre i els ruixem amb el suc de llimona per evitar que s’ennegreixin.',
          'En un bol, emulsionem 2 cullerades d’oli d’oliva amb el suc i la ratlladura de llima.',
          'Barregem aquesta vinagreta amb els cogombres escorreguts, la menta i els alvocats. Salpebrem al gust. Tapem i deixem reposar a la nevera uns 10 minuts perquè els sabors es barregin.',
          'Emplatem utilitzant un motlle cilíndric.',
        ],
      },
    ],
    variants: [
      {
        p: 'Us proposo que hi afegiu un tercer ingredient: el kiwi. Talleu-ne un parell a rodanxes i barregeu-les junt amb els altres ingredients, o bé utilitzeu-les per decorar el plat.',
      },
    ],
    categories: ['primers'],
    tags: ['alvocat', 'amanida', 'cogombre', 'llima', 'menta'],
  },
  {
    id: 'macedonia',
    createdAt: '2014-08-16T19:30:29+02:00',
    title: 'Macedònia',
    intro: [
      {
        p: 'Em direu que avui no m’hi he matat gaire… Però us asseguro que no és per mandra. És que de vegades no cal! La fruita fresca, a l’estiu, és un dels menjars més apetibles que hi ha. I amb el toc pungent del gingebre i l’àcid de la llimona, és la millor manera d’acabar un àpat. Penseu també que aquestes postres es preparen en cinc minuts, i que són plenes de vitamines, aigua i fibra. Vaja, tot el que ens cal per recarregar el cos i fer front a les calorades!',
      },
    ],
    cost: 'Cost aproximat per ració: 0,32 €.',
    unitCost: 0.32,
    ingredients: [
      {
        ul: [
          '2 taronges',
          '2 kiwis',
          '1 poma tipus royal gala o fuji',
          'Un tros de síndria',
          '2 cullerades de suc de llimona',
          '1/2 cullerada d’oli d’oliva',
          '1 cullerada de postres de gingebre en pols',
          '2 cullerades de sucre',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Pelem i trossegem la poma. La posem en un bol amb el suc de llimona.',
          'Pelem i tallem també el kiwi, la taronja i la síndria, i els afegim al bol.',
          'Amanim la fruita amb la resta d’ingredients. Remenem bé i reservem a la nevera.',
          'Deixem la macedònia a temperatura ambient durant uns 30 minuts abans de servir-la.',
        ],
      },
    ],
    variants: [
      {
        p: 'Quan sigui temporada, utilitzeu maduixots en lloc de síndria. També podeu fer servir altres fruites, com meló, mandarina, préssec, raïm… Procureu que siguin de colors i gustos diferents i eviteu les de textura massa tova com la figa o el caqui.',
      },
    ],
    categories: ['postres'],
    tags: ['fruita', 'gingebre', 'kiwi', 'poma', 'sindria', 'taronja'],
  },
  {
    id: 'emperador-amb-endivies-a-la-planxa',
    createdAt: '2014-07-30T16:52:32+02:00',
    title: 'Emperador amb endívies a la planxa',
    intro: [
      {
        p: 'L’estiu és època de menjar a l’aire lliure, relaxats, a l’ombra d’una pèrgola, una magnòlia o un emparrat. (Si ens hem de torrar, que sigui només per acció del vi i dels cigalons!). I per tant, també és el moment de les barbacoes, element imprescindible al jardí de tot bon amfitrió i excusa perfecta per celebrar el que sigui; potser només cal que estiguem vius i sans, faci bon temps i (alguns) tinguem vacances. L’ocasió demana plats senzills com el que us proposo avui, que es preparen a quatre mans i sense grans esforços. No patiu si, com jo, no teniu ni jardí ni barbacoa. Amb una bona planxa de ferro, us sortirà igual de bo!',
      },
    ],
    cost: 'Cost aproximat per ració: 2,65 €.',
    unitCost: 2.65,
    ingredients: [
      {
        ul: [
          '4 talls d’emperador',
          '6 endívies',
          '2 cullerades de salsa de soja',
          '4 cullerades de suc de llimona',
          '1/2 culleradeta de sucre',
          'Julivert',
          'Oli d’oliva',
        ],
      },
      {
        h3: 'Per la vinagreta:',
      },
      {
        ul: [
          '100 ml d’oli d’oliva suau',
          '3 cullerades de vinagre de poma',
          '1 cullerada de mostassa de Dijon',
          '1 cullerada de mel',
          'Sal i pebre negre, al gust',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Preparem una marinada amb la salsa de soja, el suc de llimona, el julivert i un pessic de sucre.',
          'Impregnem els talls d’emperador en la marinada i deixem que reposin a la nevera durant 30 minuts.',
          'Mentrestant, preparem la vinagreta emulsionant bé els ingredients, i ens servim una cerveseta.',
          'Cinc minuts abans de menjar, preparem la graella o escalfem una planxa fins que estigui ben roent.',
          'Tallem les endívies longitudinalment, les untem amb una mica d’oli i les coem pels dos costats fins que quedin flonges i daurades.',
          'Traiem l’emperador de la nevera, escorrem una mica la marinada i el coem a foc viu, un minut per banda.',
          'Amanim l’endívia amb unes gotes de vinagreta i servim immediatament. Amb una altra cervesa, si pot ser!',
        ],
      },
    ],
    variants: [
      {
        p: 'Les albergínies i el carbassó a la planxa són una bona alternativa per acompanyar el peix si no us agrada l’endívia. Atenció, però, que l’endívia cuita no té aquella amargor que a molta gent tira enrere. Qui sap, potser canvieu d’opinió i a partir d’ara en mengeu sovint…',
      },
    ],
    categories: ['carmanyola', 'plat-unic', 'segons'],
    tags: ['emperador', 'endivia', 'peix'],
  },
  {
    id: 'amanida-de-poma-i-api-nous-i-gruyere',
    createdAt: '2014-07-27T07:33:11+02:00',
    title: 'Amanida de poma (i api, nous i Gruyère)',
    intro: [
      {
        p: 'L’amanida de poma no entra en la categoria “amanida trista” que tristament abunda. Ja sabeu, aquella típica plata d’enciam iceberg, tomàquets d’hivernacle i (opcional, per allò de la presentació…) un trist espàrrec de llauna. Tot i que està feta amb ingredients molt senzills i saludables (adjectius que a priori semblen incompatibles amb el gaudi), la nostra amanida combina sabors, textures i colors amb alegria, contrastant el cruixent predominant amb la consistència cremosa del formatge, i lligant tots els ingredients amb una vinagreta deliciosa. És, en quatre paraules, una amanida que repetireu.',
      },
    ],
    cost: 'Cost aproximat per ració: 1,65 €.',
    unitCost: 1.65,
    ingredients: [
      {
        ul: [
          '2 pomes Pink Lady, sense pelar',
          '4 tiges d’api, preferiblement les interiors',
          '120 g de Gruyère',
          '50 g de nous',
          '1 escalunya',
          '2 cullerades de vinagre de poma',
          '1/2 cullerada de mostassa de Dijon',
          '1/2 cullerada d’estragó picat (o be un pessic de sec)',
          '4 cullerades d’oli d’oliva',
          'Sal i pebre acabat de moldre',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Tallem el formatge a daus petits.',
          'Piquem l’escalunya ben fina i la dipositem al bol de servir. Hi afegim el vinagre, un pessic de sal i pebre, remenem i deixem que s’estamordeixi durant 15 minuts.',
          'Després hi incorporem la mostassa, l’oli i l’estragó. Emulsionem i rectifiquem de sal.',
          'Tallem l’api a rodanxes d’uns 0,5 cm. Tallem també les pomes a daus d’uns 2 cm.',
          'Piquem les nous i barregem tots els ingredients amb el formatge.',
          'Els posem al bol amb la vinagreta, remenem i servim damunt d’unes fulles d’enciam.',
        ],
      },
    ],
    variants: [
      {
        p: 'La poma Pink Lady es conrea a Girona i avui en dia es pot comprar a la majoria de supermercats. Si malgrat això us costa de trobar, podeu utilitzar altres pomes de consistència dura i lleugerament àcides, com la Fuji o la Granny Smith. Si tampoc no teniu escalunya, utilitzeu mitja ceba i deixeu-la estamordir mitja hora com a mínim. I si a més sou al·lèrgics a les nous, proveu a substituir-les per anacards o per rostes de pa fregit.',
      },
    ],
    categories: ['primers'],
    tags: ['api', 'escalunyes', 'formatge', 'gruyere', 'nous', 'poma'],
  },
  {
    id: 'sopa-freda-de-sindria-i-tomaquet',
    createdAt: '2014-07-19T20:51:38+02:00',
    title: 'Sopa freda de síndria i tomàquet',
    intro: [
      {
        p: 'Els éssers vius, afortunadament, estem dotats de mecanismes prou sofisticats que netegen el nostre organisme i li procuren l’equilibri perfecte. El fetge i els ronyons, els òrgans més directament implicats en aquesta tasca, no necessiten l’ajut de <a href="http://smoda.elpais.com/articulos/tienen-los-zumos-superpoderes/1063" target="_blank" rel="noopener">beuratges miraculosos</a> ni de maniobres contra natura que proclamen evitar la nostra putrefacció. Deixeu-vos estar de modes absurdes! Una persona mitjanament sana es neteja sola sense haver de fer cap dieta “detox”. Hi ha opcions molt més recomanables, sanes, barates, refrescants i refinades amb què alimentar-vos i que, a més, us proporcionaran vitamines i alegria a cullerots.',
      },
      {
        p: 'Especialment agraïdes a l’estiu, quan tenim més set que gana, les sopes fredes de verdures, o amb fruites com en aquest cas, són ideals per obrir pas a un bon arròs, o a una parrillada de carn, o a un rostit. No patiu, que el vostre organisme no s’embruta. No és una bona perspectiva, per un sopar de duro?',
      },
    ],
    cost: 'Cost aproximat per ració: 0,35 €.',
    unitCost: 0.35,
    ingredients: [
      {
        ul: [
          '750 g de tomàquets pera',
          '750 g de síndria (tallada, sense pell ni llavors)',
          '50 ml d’oli d’alfàbrega',
          'Sal',
          'Un pessic de sucre',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Rentem i tallem els tomàquets.',
          'Els triturem a la batedora, junt amb la síndria.',
          'Ho passem tot per un colador.',
          'Assaonem la sopa amb 50 ml d’oli, un pessic de sucre i sal al gust.',
          'Servim ben fred.',
        ],
      },
    ],
    variants: [
      {
        p: 'L’oli d’alfàbrega el podeu trobar ja preparat, però no costa gaire fer-lo a casa. Només heu d’agafar una ampolla d’oli verge extra de 1/2 litre i introduir-hi una branca d’alfàbrega (10-12 fulles) ben neta i escorreguda. Això sí: perquè l’alfàbrega deixi anar tot el seu aroma, l’heu de deixar macerar durant tres o quatre setmanes, preferiblement en un lloc fosc. Com alternativa, doncs, podeu amanir la sopa amb oli normal i servir-la amb una mica d’alfàbrega picada per damunt.',
      },
    ],
    categories: ['primers'],
    tags: ['alfabrega', 'oli', 'sindria', 'sopa', 'tomaquet'],
  },
  {
    id: 'alberginia-amb-tofu-i-salsa-de-miso',
    createdAt: '2014-07-09T19:59:57+02:00',
    title: 'Albergínia amb tofu i salsa de miso',
    intro: [
      {
        p: 'Un dels llibres de cuina que més m’agrada fullejar és <em>El menjar de la família</em>, de Ferran Adrià. Lluny de l’alquímia de les esferificacions i de la cuina molecular, aquest receptari no recull els plats que se servien a la sala, sinó els que alimentaven l’equip d’El Bulli. I, per tant, les receptes són senzilles, ideals per fer a casa (algunes, fins i tot, diríeu que són de menú infantil…) i bastant ràpides. Això sí, amb pinzellades de geni, aquí i allà, i una bona dosi d’innovació. Quan vaig veure les albergínies amb salsa de miso vaig imaginar de seguida que aquests dos sabors havien de combinar i potenciar-se a les mil meravelles. Per definir el plat, un cop el vaig provar, no tenia més paraules que “deliciós”. De fet, no he rectificat ni en un sol gram la recepta original. He incorporat el tofu (que poc sabor aporta, com bé sabeu…) per fer-ne un plat únic, però les albergínies amb miso quedarien igualment bé amb pollastre o conill.',
      },
    ],
    cost: 'Cost aproximat per ració: 1,35 €.',
    unitCost: 1.35,
    ingredients: [
      {
        ul: [
          '2 albergínies grosses (o 3 de petites)',
          '2 blocs de tofu sedós',
          '2 cullerades de <a href="http://ca.wikipedia.org/wiki/Dashi" target="_blank" rel="noopener">dashi en pols</a>',
          '2 cullerades de pasta de miso vermell',
          '2 cullerades de salsa de soja',
          '1 cullerada d’oli de sèsam',
          '5 cullerades d’oli de gira-sol',
          '1 grapat de llavors de sèsam',
          'Oli d’oliva (un rajolí)',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Primer escalivem les albergínies: les posem directament sobre la flama i les anem tombant per totes bandes, durant uns 8-10 minuts, fins que siguin ben flonges i la pell es comenci a desprendre.',
          'Les emboliquem amb paper de diari i les deixem reposar un mínim de 30 minuts.',
          'Mentrestant, eixuguem el tofu amb un drap net, prement perquè deixi anar el màxim de líquid. Hem d’anar amb cura que no se’ns trenqui.',
          'El tallem en daus de mida uniforme.',
          'Escalfem una mica d’oli d’oliva en una paella i daurem lleugerament els daus de tofu per tots els costats.',
          'Posem el dashi i el miso en un bol amb 50 ml d’aigua. Batem fins que es dissolguin completament, hi afegim la salsa de soja i els dos tipus d’oli. Remenem i reservem fins al moment d’amanir.',
          'Quan l’albergínia estigui a temperatura ambient, n’eliminem la pell. L’esbandim sota el raig de l’aixeta i, amb els dits, la tallem a tires. Aprofitem per retirar tantes llavors com puguem.',
          'Posem l’albergínia en una plata, acompanyant els daus de tofu, i l’amanim amb la salsa de miso i un grapat generós de sèsam pel damunt.',
        ],
      },
    ],
    variants: [
      {
        p: 'Qui no tingui cuina de gas pot escalivar les albergínies al forn (a 220 °C, durant uns 45 min) i, de passada, s’estalviarà de netejar tots els regalims i restes de pell carbonitzada dels fogons. Val a dir que la flama directa dóna a les verdures un aroma que amb el forn no s’aconsegueix, però. Els ingredients orientals, avui en dia, no són gens difícils de trobar (de tofu en venen fins i tot al Mercadona). Per tant, no són excusa per no provar aquesta recepta!',
      },
    ],
    categories: ['carmanyola', 'plat-unic', 'primers'],
    tags: ['alberginia', 'dashi', 'miso', 'sesam', 'soja', 'tofu'],
  },
  {
    id: 'pastis-de-pinya-colada',
    createdAt: '2014-06-25T17:27:01+02:00',
    title: 'Pastís de pinya colada',
    intro: [
      {
        p: 'Estrenem l’estiu amb unes postres que tenen gust de vacances. Aquest pastís s’inspira en un <a href="https://www.youtube.com/watch?v=nlya0gSdBH0" target="_blank" rel="noopener">còctel</a> típic de Puerto Rico, que cal degustar preferiblement en una hamaca, gronxant-nos al ritme gandul de la salsa, amb poca roba i menys preocupacions. O, si més no, amb aquest esperit. El pastís, ben fresquet, us sorprendrà per la seva lleugeresa. Té consistència i textura de mousse, i (relativament) poques calories.',
      },
    ],
    cost: 'Cost aproximat per ració: 1,10 € (en surten 8 racions).',
    unitCost: 1.1,
    ingredients: [
      {
        ul: [
          '1 llauna grossa de pinya al natural (amb 8 rodanxes de pinya i aprox. 300 ml de suc)',
          '175 g de sucre i 2 cullerades extra per la cobertura',
          '110 g de <a href="http://lavalenciana.com/tienda/frutos-secos/12-coco-rallado-de-250-grs.html" target="_blank" rel="noopener">coco ratllat</a>',
          '200 ml de <a href="http://supermercado.elcorteingles.es/supermercado/sm2/es_ES/010002/supermarket/alimentacion-general/alimentacion-general/comida-internacional/comida-oriental/0110118089300265___" target="_blank" rel="noopener">llet de coco</a>',
          '250 ml de nata per muntar (mínim 30 % mg)',
          '6 fulls de gelatina incolora',
          '1 cullerada de postres d’aroma de rom',
          '200 g de galetes speculoos, digestive, o una barreja de tots dos tipus',
          '80 g de mantega',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Necessitem un motlle desmuntable d’uns 20 cm de diàmetre. Posem al fons un tros de paper de forn (que ens facilitarà desemmotllar el pastís) i ja podem preparar la base.',
          'Esmicolem les galetes amb la picadora (o les posem dins d’una bossa de plàstic i les aixafem bé amb un corró).',
          'Fem fondre la mantega. La barregem bé amb la farina de galeta, fins que aquesta mescla us recordi la sorra fina i mullada ideal per fer castells.',
          'Cobrim amb aquesta “sorra” la base del motlle i premem perquè quedi ben compacta.',
          'Deixem que la base es refredi a la nevera.',
          'Posem també a la nevera un bol gros per batre la nata, més endavant. Així el tindrem ben fred.',
          'Reservem un dels fulls de gelatina i posem els 5 restants a estovar en una mica d’aigua freda.',
          'Escalfem el sucre i la meitat del suc de la pinya en un cassó. Quan estigui calent, hi dissolem la gelatina escorreguda, remenem i apaguem el foc.',
          'Reservem 4 rodanxes de pinya i el suc restant (uns 150 ml) per a la cobertura. Triturem les altres 4 rodanxes amb la picadora. Hi afegim el coco ratllat, la llet de coco i l’aroma de rom.',
          'Quan aquesta barreja sigui bastant fina, hi aboquem el contingut del cassó i remenem.',
          'Deixem refredar uns 10 minuts a la nevera.',
          'Muntem la nata amb les varetes (amb el bol ben fred, no hem de tenir cap dificultat).',
          'Incorporem la nata a la barreja anterior, remenant suaument.',
          'Quan la massa sigui ben homogènia, l’aboquem al motlle. Deixem que qualli a la nevera durant un mínim de 8 hores.',
          'Un cop que el pastís ja està consolidat, preparem la cobertura.',
          'Posem a remull l’últim full de gelatina.',
          'Escalfem lleugerament el suc que havíem reservat, junt amb 2 cullerades de sucre, i hi dissolem la gelatina escorreguda. Remenem i apartem del foc.',
          'Mentre aquest líquid es refreda una mica, tallem per la meitat les 4 rodanxes de pinya que havíem reservat, i les disposem en forma radial damunt del pastís.',
          'Hi aboquem el suc de la pinya amb la gelatina i el sucre dissolts.',
          'Tornem a posar el pastís a la nevera un mínim de 4 hores. La cobertura ha de formar una capa llustrosa i transparent.',
        ],
      },
    ],
    variants: [
      {
        p: 'L’aroma de rom es ven (junt amb altres aromes assortits) al Lidl. També a qualsevol botiga de productes de rebosteria. Si no en trobeu, però, el podeu substituir per 80 ml de rom de canya. Paradoxalment, en aquest cas el gust del licor serà menys intens. També podríeu utilitzar pinya en almívar i rebaixar una mica la quantitat de sucre. Com a alternativa a la presentació amb rodanxes de pinya, podeu cobrir tot el pastís amb una glassa de xocolata negra (com la de la <a href="/sachertorte" target="_blank" rel="noopener">Sachertorte</a>), que combina estupendament tant amb el coco com amb la pinya o el rom.',
      },
    ],
    categories: ['postres'],
    tags: ['coco', 'nata', 'pastis', 'pinya', 'rom', 'sucre'],
  },
  {
    id: 'flam-de-verdura',
    createdAt: '2014-06-16T18:03:29+02:00',
    title: 'Flam de verdura',
    intro: [
      {
        p: 'Hi ha moltes maneres de menjar verdura, i també de convèncer aquells que no en mengen prou perquè la incorporin diàriament a la dieta. Les verdures es poden saltar al wok, gratinar al forn, coure a la brasa, amanir amb olis aromàtics, preparar en truita, amb pastes i arrossos… Se’n poden fer purés, cremes, chips, pastissos, flams… És el cuiner qui pot pecar d’insípid i mancat d’imaginació, no pas la verdura. El flam és una presentació especialment indicada per als nens i els que dinen de carmanyola. Ja veureu, però, com agradarà a tothom.',
      },
    ],
    cost: 'Cost aproximat per ració: 0,85 € (en surten 8).',
    unitCost: 0.85,
    ingredients: [
      {
        ul: [
          '2 carbassons',
          '2 pastanagues',
          '1 ceba grossa',
          '2 ous mitjans',
          '50 g de formatge Emmental ratllat',
          '2 cullerades de panses',
          '1 cullerada de pinyons',
          '2 cullerades de segó de civada o pa ratllat',
          '1/2 culleradeta de pebre vermell dolç',
          'Opcional: 1 cullerada de llavors barrejades (sèsam, lli, pipes de gira-sol…)',
          'Oli d’oliva (per sofregir la ceba i untar els motlles)',
          'Sal i pebre',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Ratllem els carbassons i les pastanagues amb la mandolina, o bé les tallem en juliana.',
          'Posem el carbassó en un bol amb un parell de cullerades de sal. Remenem amb les mans i esperem que deixi anar l’aigua, uns 30 min.',
          'Espremem el carbassó, l’esbandim sota el raig de l’aixeta i el deixem uns estona més en un colador de malles amples. El tornarem a esprémer quan ja ens sembli bastant eixut, fins que el volum s’hagi reduït a menys de la meitat.',
          'Engeguem el forn a 180 °C.',
          'Torrem els pinyons (i les llavors, si n’hi posem) en una paella sense oli. Els retirem.',
          'Tallem la ceba a daus petits i la sofregim lleugerament amb una mica d’oli.',
          'Batem els ous i els barregem amb la resta d’ingredients.',
          'Untem uns motlles de flam o de muffin, preferiblement de silicona. (Si són metàl·lics, caldrà a més arrebossar-los amb una mica de pa ratllat per evitar que la massa s’hi enganxi). Els emplenem amb la barreja anterior, prement una mica per compactar els flams.',
          'Els coem al forn durant 25 minuts.',
        ],
      },
    ],
    variants: [
      {
        p: 'Els flams són perfectes com a primer o com a guarnició. La barreja podria servir també per farcir uns vol-au-vents o una base de pasta brisa. En aquest cas, quedaria molt bé cobrir la superfície amb un extra d’Emmental i un polsim de pebre negre del molinet. Si en feu vol-au-vents, podríeu decorar-los amb una branca petita i ben tendra de broccoli.',
      },
    ],
    categories: ['carmanyola', 'primers'],
    tags: ['carbasso', 'ceba', 'flam', 'formatge', 'ou', 'pastanaga', 'verdura'],
  },
  {
    id: 'conill-amb-escabetx-suau',
    createdAt: '2014-06-08T20:24:38+02:00',
    title: 'Conill amb escabetx suau',
    intro: [
      {
        p: 'L’escabetxat és una tècnica ja descrita en tractats de cuina medievals i molt popular en els països de la conca mediterrània. La cocció en vinagre, com la salaó o el fumat, era un mètode utilitzat originàriament per conservar la carn i el peix. El fet que hagi perdurat, tot i les neveres d’avui en dia, és degut al sabor tan peculiar que confereix als aliments. El nostre escabetx, a diferència del medieval, no té el gust punyent del vinagre –que jo prefereixo en dosis petites– i contraresta l’acidesa amb l’addició  de sucre, un ingredient que segons Robert de Nola, l’autor del <em>Llibre de Coch</em>, “…<em>al meu parer ab coses de carn noy diu molt be</em>…” “<em>Empero com diu exemple vulgar may sucre affolla neguna vianda. E vet aci que esta la primor que cascu fa segons es lo seu gust: e vet ja fet.</em>” Amb el vistiplau del mestre Robert, doncs!',
      },
    ],
    cost: 'Cost aproximat per ració: 2,35 €.',
    unitCost: 2.35,
    ingredients: [
      {
        ul: [
          '1 conill tallat a trossos',
          '2 cebes morades',
          '2 pastanagues',
          '8 grans d’all',
          '100 ml de vinagre de poma',
          '200 ml d’oli d’oliva de bona qualitat',
          '200 ml d’aigua',
          '3 cullerades de sucre morè',
          '2 fulles de llorer',
          '2 claus d’olor',
          '10-12 grans de pebre negre',
          '1 branca de farigola',
          'Sal i pebre mòlt',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Salpebrem el conill. El fetge el podem congelar o reservar per una altra ocasió.',
          'Tallem la ceba a cubs i la pastanaga a rodanxes.',
          'Escalfem un rajolí d’oli en una cassola de parets gruixudes i hi fem daurar la carn. Si preparem dos conills, millor que ho fem per tandes.',
          'Retirem el conill, afegim una mica d’oli a la cassola i aleshores hi sofregim les verdures: primer la ceba, tot seguit la pastanaga i, passats uns tres minuts, l’all.',
          'Tirem tres cullerades de sucre a les verdures i deixem que es caramel·litzin lleugerament.',
          'Afegim també el llorer, la farigola, el clau i els grans de pebre a la cassola. Remenem.',
          'Hi incorporem el conill que havíem daurat prèviament, i els líquids.',
          'Deixem que cogui a foc baix i destapat durant 1 hora a partir que arrenca el bull.',
          'L’escabetxat és més bo d’un dia per l’altre, perquè la carn s’impregna dels sabors de la salsa. Es pot menjar fred o escalfat, amb un puré de patates, una polenta o un arròs blanc.',
        ],
      },
    ],
    variants: [
      {
        p: 'Podríeu substituir la farigola per romaní, o el sucre per mel, o afegir pebre vermell, safrà o gingebre (no tots alhora). Si no us agrada gens el vinagre, proveu a substituir-lo per sidra. En aquest cas, poseu-ne 300 ml i prescindiu de l’aigua. Aquest plat es conserva molt bé. Us aconsello preparar-ne més quantitat i desar el que us sobri per a un proper àpat.',
      },
    ],
    categories: ['carmanyola', 'segons'],
    tags: [
      'all',
      'carn',
      'ceba',
      'clau',
      'conill',
      'escabetx',
      'especies',
      'farigola',
      'llorer',
      'oli',
      'pastanaga',
      'pebre',
      'vinagre',
    ],
  },
  {
    id: 'magdalenes-amb-pinyons',
    createdAt: '2014-06-01T18:24:07+02:00',
    title: 'Magdalenes amb pinyons',
    intro: [
      {
        p: 'Aquestes són les magdalenes que inspiren el meu temps perdut: les tradicionals, les que s’han menjat tota la vida fins a <span style="text-decoration:line-through;">l’arribada</span> la invasió dels <em>cupcakes</em>. Amb una presa de xocolata, eren el berenar que m’acompanyava mentre feia els deures o emplenava les llibretes de dibuixos. Amb un cafè amb llet ben carregat, encara avui m’ajuden a obrir els ulls i engegar el matí amb energia. Són, en definitiva, les magdalenes sense artificis; sense els <em>frostings</em> ni les figuretes de <em>fondant</em> que, incomprensiblement, han colonitzat gran part del nostre territori dolç. Aquestes magdalenes no necessiten disfresses perquè ens agraden al natural. I a sobre, porten pinyons!',
      },
    ],
    cost: 'Cost aproximat per ració: 0,58 € (en surten 12).',
    unitCost: 0.58,
    ingredients: [
      {
        ul: [
          '200 g de farina',
          '2 ous extra grans (o l’equivalent a 125 g)',
          '175 g de sucre',
          '75 g de pinyons',
          '100 ml d’oli de gira-sol',
          '75 ml d’oli d’oliva',
          '60 ml de llet',
          '7 g de llevat químic (Royal)',
          '1 cullerada de postres de canyella',
          'La ratlladura d’una llimona',
          'Un pessic de sal',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Posem el sucre i els ous (sencers, clara i rovell) en un bol. Els batem amb les varetes o amb una batedora a velocitat mínima durant uns 12 minuts, sense defallir. La barreja es tornarà blanca i llustrosa, i doblarà el seu volum.',
          'Sense deixar de batre, hi aboquem els olis i la llet.',
          'Tot seguit, hi incorporem els ingredients secs prèviament tamisats.',
          'Quan la barreja sigui ben homogènia, tapem el bol amb paper film i el posem a la nevera. Si pot ser, que reposi fins l’endemà. Si no, un mínim de 4 hores.',
          'Arribat el moment de coure les magdalenes, escalfem el forn a 175 °C.',
          'Emplenem les càpsules (de silicona o de paper resistent) fins a 3/4 de la seva capacitat. Hi posem un grapat de pinyons al damunt.',
          'Fornegem, sense ventilador, durant 17 minuts o fins que les magdalenes es comencin a daurar.',
          'Deixem refredar les magdalenes fora del forn i ja ens les podrem menjar.',
        ],
      },
    ],
    variants: [
      {
        p: 'Damunt de les magdalenes també hi podríem posar perles de xocolata, o làmines d’ametlla, o simplement un pessic de sucre. També podríem substituir el sucre blanc de la massa per sucre morè, i part de la farina per farina integral. El fet de deixar reposar la massa fa que surtin més esponjoses. No sigueu impacients!',
      },
    ],
    categories: ['postres'],
    tags: ['canyella', 'farina', 'llimona', 'magdalenes', 'oli', 'ou', 'pinyons', 'sucre'],
  },
  {
    id: 'amanida-de-cogombre-i-feta',
    createdAt: '2014-05-26T18:58:50+02:00',
    title: 'Amanida de cogombre i feta',
    intro: [
      {
        p: 'Ens acostem al 40 de maig, data en què apareix el gaspatxo al menú de El Bierzo i desapareixen les peces d’abric dels penja-robes. Desterrats els estofats i els guisats calòrics fins que torni el mal temps, a la nostra cuina s’imposen ara els plats lleugers, rics en colors i en vitamines. Ja sigui com a acompanyament d’un peix a la graella, o com a entrant d’un menú estiuenc, l’amanida de cogombre i feta us convencerà per la seva senzillesa, per l’encertada combinació de sabors i pel color intensament verd que refresca només de veure’l.',
      },
    ],
    cost: 'Cost aproximat per ració: 1,38 €.',
    unitCost: 1.38,
    ingredients: [
      {
        ul: [
          '3 cogombres holandesos',
          '250 g de feta',
          '1 llima',
          'Oli d’oliva verge extra',
          '1 cullerada sopera de llavors de sèsam',
          '1 cullerada de postres de comí',
          'Sal marina',
          'Pebre',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Raspem els cogombres, eliminant només part de la pell. Els tallem ben fins amb la mandolina i els salem generosament.',
          'Deixem reposar el cogombre en un bol, perquè deixi anar l’aigua. Passats uns 20 minuts, l’espremem fort amb les mans, l’esbandim sota l’aixeta i el posem a escórrer en un colador.',
          'Amanim el cogombre amb el suc de llima.',
          'Al morter, piquem els grans de comí, el sèsam i un polsim de sal i pebre. Amb aquesta barreja assaonem el cogombre. Remenem i deixem a la nevera fins al moment de servir.',
          'Tallem la feta a daus petits. La incorporem a l’amanida de cogombre. Ho amanim tot amb un raig d’oli verge extra i servim.',
        ],
      },
    ],
    variants: [
      {
        p: 'A aquesta amanida hi podríeu incorporar un alvocat i uns quants pistatxos picats. Amb aquests ingredients, tindríeu l’amanida verda més verda de totes! (Per cert, maniàtics del cogombre: si li deixeu part de la pell i li afegiu una mica de comí, no us repetirà gens).',
      },
    ],
    categories: ['carmanyola', 'primers'],
    tags: ['amanida', 'cogombre', 'feta'],
  },
  {
    id: 'hamburgueses-de-quinoa',
    createdAt: '2014-05-23T21:08:45+02:00',
    title: 'Hamburgueses de quinoa',
    intro: [
      {
        p: 'Tenen forma d’hamburguesa, color de croqueta i, tanmateix, ni un sol gram de carn. Si coneixeu la quinoa, ja sabreu que és un aliment originari de les regions andines, de sabor molt agradable, que a Europa s’ha fet molt popular en els últims anys. Es cuina de manera similar a l’arròs, i potser per això pensem que es tracta d’un cereal. En realitat, la quinoa és una llavor, i concentra doncs un munt de nutrients que, en germinar, han de nodrir la planta (o a nosaltres mateixos, és clar). Si encara no l’heu provada, animeu-vos a fer-ho. A més d’aquestes hamburgueses, podreu utilitzar la quinoa per fer amanides, sopes, saltats amb verdures o, fins i tot, pastissos.',
      },
    ],
    cost: 'Cost aproximat per ració: 1,15 € (en surten 10-12 hamburgueses).',
    unitCost: 1.15,
    ingredients: [
      {
        ul: [
          '350 g de quinoa',
          '4 ous',
          '1 ceba mitjana',
          '1 pastanaga',
          '3 grans d’all',
          '100 g de panko',
          'Tres cullerades de pa ratllat',
          '2 cullerades de cibulet picada',
          '2 cullerades de parmesà ratllat',
          '2 cullerades de sèsam',
          '1 cullerada de cúrcuma',
          'Oli d’oliva',
          'Sal',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Primer coem la quinoa. L’esbandim sota l’aixeta i la bullim en aigua salada durant uns 20 minuts. D’aigua n’hem de posar l’equivalent a 2,5 cops el volum de quinoa. Sabrem quan està cuita perquè s’obren els granets.',
          'Mentre la quinoa es refreda, preparem els altres ingredients. Tallem la ceba, la pastanaga i l’all ben menuts. Batem els ous.',
          'Barregem tots els ingredients (menys l’oli) en un bol. Pastem i deixem reposar a la nevera un parell d’hores com a mínim.',
          'Passat aquest temps, la massa ha de tenir una consistència pastosa i cohesionada, ideal per formar les hamburgueses. Si calgués, hi afegiríem una mica d’aigua o més pa ratllat.',
          'Formem les hamburgueses amb la mà, donant-los la forma i la mida que preferim.',
          'Les passem lleugerament per pa ratllat i es fregim en una paella amb un raig d’oli d’oliva. Abans de servir, les deixem escórrer un moment sobre paper de cuina.',
        ],
      },
    ],
    variants: [
      {
        p: 'A més de la quinoa, en aquesta recepta hi ha un altre ingredient exòtic: el panko. El panko és un pa ratllat amb fragments més grossos i molt més crostosos que el nostre. I, per tant, pot ser fàcilment substituït si no teniu cap súper asiàtic a la vora. Les verdures també es poden variar. Com alternativa hi podríeu posar porro, pebrot vermell, col ben trinxada… Posats a fer, afegiu-hi també una culleradeta d’algues deshidratades.',
      },
    ],
    categories: ['carmanyola', 'plat-unic', 'segons'],
    tags: ['all', 'ceba', 'hamburguesa', 'ou', 'pastanaga', 'quinoa'],
  },
  {
    id: 'sorbet-de-vi-negre-i-fruits-del-bosc',
    createdAt: '2014-05-18T12:08:09+02:00',
    title: 'Sorbet de vi negre i fruits del bosc',
    intro: [
      {
        p: 'Sempre em vanto de no tenir microones, ni olla de pressió, ni màquines que cuinin o pastin per mi. Combrego amb els mètodes tradicionals de cuina, sí… però també he d’admetre que aquest minimalisme no es desprèn de cap codi ètic. La meva cuina fa exactament 5 metres quadrats, i adquirir un aparell suposaria haver de treure un volum equivalent en plats, paelles o cassoles de les quals no puc prescindir. Hi ha un petit electrodomèstic, però, que s’ha guanyat un espai d’honor a la meva minúscula cuina: la geladera. És tan fàcil d’utilitzar i, sobretot, són tan bons els resultats, que només compro gelat quan soc fora de casa. A més –i aquesta és la gràcia–, on podria trobar un sorbet de vi negre i fruits del bosc, si no?',
      },
    ],
    cost: 'Cost aproximat per ració: 1 €.',
    unitCost: 1,
    ingredients: [
      {
        ul: [
          '150 g de sucre',
          '200 ml de vi negre, preferiblement afruitat o jove',
          '100 d’aigua',
          '300 g de <a href="http://www.lasirena.es/product/&amp;path=9&amp;ID=565" target="_blank" rel="noopener">fruits del bosc congelats</a> de La Sirena',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Posem el vi, l’aigua i el sucre en un cassó, a foc mig.',
          'Fem bullir durant un parell de minuts.',
          'Hi aboquem els fruits del bosc, sense necessitat de descongelar-los abans. Retirem del foc i deixem refredar una estona.',
          'Triturem el contingut del cassó amb la batedora. El passem per un colador de malles amples i el refrigerem un parell d’hores.',
          'Posem en marxa la geladera i hi aboquem aquest líquid, que ja estarà ben fred.',
          'Al cap de 25-30 minuts ja tindrem un sorbet deliciós, que podrem prendre directament o posar dues horetes al congelador si volem que tingui una consistència més ferma.',
        ],
      },
    ],
    variants: [
      {
        p: 'Us imagineu com quedaria la mateixa recepta amb <a href="http://world.openfoodfacts.org/product/20130626/gefrorene-himbeeren-quot-green-grocer-s-quot">gerds congelats</a> i cava? Naturalment, també podríeu emprar fruita natural, sobretot si són mores o cireretes d’arboç collides per vosaltres mateixos. No convé abusar de l’alcohol (tampoc en fer gelats, vull dir…) ja que es  congela a temperatura més baixa que l’aigua, i això dificultaria la consolidació del gelat.',
      },
    ],
    categories: ['postres'],
    tags: ['fruits-del-bosc', 'gelat', 'sucre', 'vi-negre'],
  },
  {
    id: 'saltat-de-brocoli',
    createdAt: '2014-05-15T17:31:09+02:00',
    title: 'Saltat de bròcoli',
    intro: [
      {
        p: 'Des del punt de vista nutricional, el bròcoli és una autèntica joia: baix en calories, però ric en vitamina C, en fibra i en compostos que ajuden el nostre sistema a combatre els virus, les bactèries i, més interessant encara, les cèl·lules cancerígenes. Malauradament, al nostre país tenim el vici de rebullir la verdura (i la pasta, sigui dit de passada) durant massa estona, i això en destrueix quasi tots els beneficis. Hauríem de preferir les coccions al vapor o al wok. Saltant les verdures a foc viu i molt ràpidament, com proposo en aquesta recepta, de passada també estalviarem temps!',
      },
    ],
    cost: 'Cost aproximat per ració: 0,78 €.',
    unitCost: 0.78,
    ingredients: [
      {
        ul: [
          '2 bròcoli petits',
          '4 grans d’all',
          '50 ml de brou de pollastre',
          '2 cullerades de salsa d’ostres',
          '1 cullerada de vinagre',
          '1/2 cullerada de sucre',
          '1 cullerada de Maizena',
          'Oli vegetal',
          'Unes gotes d’oli de sèsam',
          'Una cullerada de llavors de sèsam',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Rentem els bròcoli. En separem les branquetes, procurant que resultin de mida similar, i tallem els tronxos en rodanxes, al biaix.',
          'Tallem l’all a làmines fines.',
          '(Aquest punt el podem obviar si ens agrada la verdura molt i molt crua): Posem dos dits d’aigua i una cullerada d’oli al wok. Quan arrenqui el bull, hi aboquem el bròcoli i el coem dos minuts, tapat. Reservem la verdura, descartem l’aigua sobrant i eixuguem el wok.',
          'Desfem la Maizena en unes cullerades de brou.',
          'Per altra banda, preparem la salsa barrejant el brou restant, el vinagre, el sucre i la salsa d’ostres.',
          'Escalfem el wok amb 2 cullerades d’oli. Quan sigui ben roent hi tirem l’all i saltem 10 segons.',
          'Hi afegim el bròcoli, sempre a foc viu. Immediatament hi posem la salsa, remenem i reduïm la flama.',
          'Aboquem la Maizena. Deixem que es faci només 1 minut, sacsejant el wok amb brio. Condimentem amb unes gotes d’oli de sèsam.',
          'Servim el bròcoli amb unes llavors de sèsam pel damunt.',
        ],
      },
    ],
    variants: [
      {
        p: 'Aquesta recepta té un deix xinès, però la podeu occidentalitzar prescindint de la salsa. Salteu l’all i el bròcoli simplement en oli d’oliva, i afegiu-hi al final un pessic de sal, pebre blanc i unes gotes de llimona. Més fàcil, impossible!',
      },
    ],
    categories: ['primers'],
    tags: ['all', 'brocoli', 'wok'],
  },
  {
    id: 'pappardelle-amb-ragu',
    createdAt: '2014-04-29T20:11:37+02:00',
    title: 'Pappardelle amb ragú',
    intro: [
      {
        p: 'El ragú és aquella salsa a base de carn triturada (o a trossets, tal com la prefereixen al sud) que fora d’Itàlia es coneix com a salsa bolonyesa. Preparar-la és en moltes llars <a href="http://www.youtube.com/watch?v=gC5eS5cqzm4" target="_blank" rel="noopener">l’esdeveniment més sagrat del ritu dominical</a>. Fins a tal punt mereix respecte aquesta recepta entre els italians que està dipositada a la Cambra de Comerç de Bolònia, entremig d’altres patents que han canviat la humanitat. Evidentment, cada família hi fa les seves variacions: hi afegeixen salsitxa, dauren la carn abans que la ceba… Els ingredients poden variar, però un és sempre constant i imprescindible: la paciència.',
      },
    ],
    cost: 'Cost aproximat per ració: 2,20 € (preparem doble quantitat de ragú, per congelar-lo).',
    unitCost: 2.2,
    ingredients: [
      {
        ul: [
          '400 g de <a href="http://www.dececco.it/IT/pasta-all-uovo/nidi/pappardelle-all-uovo-301/?Prodotto=169" target="_blank" rel="noopener">pappardelle</a> o una altra pasta amb ou de format similar',
          '750 g de carn de vedella picada',
          '250 g de cansalada viada',
          '1 pastanaga',
          '1 branca d’api',
          '1 ceba grossa',
          '1/2 got de salsa de tomàquet',
          '1 got de vi negre',
          '1 got de brou',
          '400 ml de llet sencera',
          'Sal i pebre negre',
          'Parmesà ratllat',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Hem de preparar el ragú amb força anticipació. Primer tallem la cansalada a trossets petits i la posem en una cassola gran al foc, que suï.',
          'Hi afegim les verdures tallades ben fines, amb un pessic de sal, i deixem que es panseixin una mica.',
          'Abans que agafin color, hi posem la carn picada. Remenem amb una cullera de fusta perquè es vagi esgrunant.',
          'Quan la carn ja ha perdut el vermell inicial, hi incorporem el vi negre, i deixem que es redueixi. Tot seguit, hi posem la salsa de tomàquet i el brou. Ho deixem coure a foc baix i amb la cassola tapada durant 2 hores.',
          'Mentre es va coent el ragú, hi anem afegint la llet, a poc a poc. Al final, corregim de sal i empebrem. Reservem.',
          'Per coure la pasta, agafem una olla gran, amb 1 litre d’aigua i 10 grams de sal per comensal. Quan l’aigua bulli, hi aboquem 100 g de pasta per comensal… O més, si n’hi ha de golafres.',
          'La pasta es cou destapada, a foc viu, i mai no s’ha d’esbandir amb aigua freda. En receptes com aquesta, convé deixar-la al dente. Així s’acaba de coure amb el condiment i n’absorbeix tota la substància.',
          'Quan estigui al punt, doncs, l’escorrem i la barregem amb la meitat del ragú que havíem preparat (l’altra meitat es pot congelar i fer servir en una propera ocasió). Remenem i deixem reposar un parell de minuts.',
          'Un cop al plat, ratllem parmesà per sobre de la pasta. Fem també un parell de voltes al molinet de pebre i servim immediatament.',
        ],
      },
    ],
    variants: [
      {
        p: 'El sofregit del ragú s’ha fet amb el greix de la cansalada. Si preferiu optar per una versió 50 % cansalada i 50 % d’oli d’oliva, també us quedarà deliciós.',
      },
      {
        p: 'La llet és un ingredient clau que nosaltres no tenim gaire per la mà en receptes com aquesta. I ho canvia tot: fa que les salses de carn de les nostres benintencionades mares i tietes, seques i excessivament fortes, es tornin meloses i suggerents; que la veu aspra de la carn esdevingui un xiuxiueig; que l’estridència es transformi en música… En fi, no en prescindiu. No escurceu tampoc el temps de cocció. Serviu-vos una copa del vi negre que haureu destapat i poseu-vos un CD de Paolo Conte per passar l’estona.',
      },
    ],
    categories: ['plat-unic', 'primers'],
    tags: ['api', 'cansalada', 'carn', 'ceba', 'llet', 'pappardelle', 'pasta', 'pastanaga', 'ragu'],
  },
  {
    id: 'bobotie',
    createdAt: '2014-04-21T21:59:54+02:00',
    title: 'Bobotie',
    intro: [
      {
        p: 'La història d’aquest plat comença al segle XVII, quan els vaixells de la Companyia Neerlandesa de les Índies Orientals havien de fer parada al Cap de Bona Esperança. Aquella punta de món, pas marítim obligatori entre Orient i Europa fins que es va construir el Canal de Suez, esdevingué una fita clau per al trànsit de mercaderies. A poc a poc s’hi van establir petits nuclis, sobre tot d’empleats de la Companyia que van començar a conrear fruits i productes propis de la vella Europa, com ara la vinya. A la Colònia del Cap, els vaixells provinents de Java i d’altres illes de l’Índic descarregaven espècies, però també esclaus malais destinats a treballar a les cuines dels colons blancs. Amb aquests ingredients es començava a coure un conflicte racial i, a la vegada, un dels plats amb més barreja de sabors i cultures, el bobotie. Una base de carn picada, molt comuna a la cuina holandesa, espècies de les Índies, i un aspecte que recorda el shepherd’s pie, reminiscència dels anglesos que (també) van ocupar aquell territori, fan del bobotie el plat més representatiu de Sud-àfrica i un reflex de la seva història.',
      },
    ],
    cost: 'Cost aproximat per ració: 1,85 €.',
    unitCost: 1.85,
    ingredients: [
      {
        ul: [
          '750 g de carn picada de vedella',
          '250 g de carn picada de porc',
          '2 cebes',
          '2 grans d’all',
          '1 poma verda',
          '3 cullerades soperes de panses sultanes',
          '3 cullerades soperes d’orellanes picades',
          '3 llesques de pa de motlle blanc sense crosta',
          '2 ous grossos',
          '300 ml de llet sencera',
          '2 cullerades de postres de pasta de curri verd.',
          '5 fulles de llorer',
          '50 g de mantega',
          'Sal i pebre',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Esmicolem el pa i el posem a estovar en la llet.',
          'Piquem la ceba i la sofregim lleugerament en una cassola amb mantega.',
          'Al cap d’uns 3 minuts hi afegim l’all i tot seguit la carn, remenant.',
          'Deixem que la carn es dauri una mica per totes bandes.',
          'Aleshores hi posem les espècies, una fulla de llorer, les panses, les orellanes i la poma tallada a daus petits.',
          'Salem, tapem i deixem coure durant 10 minuts amb la cassola tapada.',
          'Escalfem el forn a 180 °C, amb ventilador.',
          'Batem els ous i els aboquem a la barreja de llet i pa estovat. Remenem amb una forquilla, procurant que el pa quedi completament desfet.',
          'Preparem quatre cassoletes individuals, aptes per al forn. Hi repartim la barreja de carn, espècies i fruits secs, aplanant bé la superfície.',
          'Cobrim cada cassoleta amb la barreja de llet, pa i ous. Hi posem una mica de pebre i decorem amb una fulla de llorer.',
          'Fornegem durant 25 minuts, o fins que es formi una crosta daurada.',
          'Servim el bobotie calent, acompanyat d’arròs blanc.',
        ],
      },
    ],
    variants: [
      {
        p: 'Podeu utilitzar carn de corder en substitució de la de vedella. Això si, us recomano que la barregeu amb porc. Una altra variant és la de substituir la poma per un plàtan i afegir-hi una mica de chutney de mango o préssec.',
      },
    ],
    categories: ['plat-unic', 'segons'],
    tags: [
      'carn',
      'ceba',
      'curri',
      'especies',
      'llet',
      'llorer',
      'orellanes',
      'ou',
      'pa',
      'panses',
      'poma',
      'porc',
      'vedella',
    ],
  },
  {
    id: 'sachertorte',
    createdAt: '2014-04-16T13:47:49+02:00',
    title: 'Sachertorte',
    intro: [
      {
        p: 'La <a href="http://upload.wikimedia.org/wikipedia/commons/2/28/Sachertorte.ogg" target="_blank" rel="noopener">Sachertorte</a> és el Michael Jackson dels pastissos. Tant una com l’altre són famosos arreu del món i tenen una colla d’admiradors que els idolatren i n’imiten fins l’últim detall, de vegades amb resultats força reeixits. És una forma curiosa de reconèixer la qualitat de l’original, tant si es tracta d’un pastís o d’un cantant. En ambdós casos, i ja forçant el paral·lelisme, podem dir que la matèria prima és fonamental per arribar a assaborir l’èxit. Els ingredients d’un cantant, malauradament, depassen cada vegada més la seva qualitat vocal i musical. En el cas de la Sachertorte, en canvi, són més evidents: cal una xocolata negra de primeríssima qualitat, fina i aromàtica, especialment per la cobertura. Si fem servir xocolata amb llet o de qualitat dubtosa, la imitació serà digna de <em>Tu cara me suena</em>. Així doncs: bona xocolata, una mica de paciència, i èxit assegurat!',
      },
    ],
    cost: 'Cost aproximat per ració: 1,20 € (en surten 8 racions).',
    unitCost: 1.2,
    ingredients: [
      {
        h3: 'Per la massa:',
      },
      {
        ul: [
          '150 g de mantega a temperatura ambient',
          '150 g de xocolata negra',
          '150 g de sucre',
          '6 ous grans (o els equivalents a 80 g)',
          '200 g d’ametlla mòlta',
          '1 cullerada sopera de farina',
          '1 1/2 cullerades de postres de llevat químic (tipus Royal)',
          '1 1/2 cullerades de postres de canyella mòlta',
          '1 cullerada sopera d’oli d’oliva suau',
          '1 pessic de sal',
        ],
      },
      {
        h3: 'Per al farcit i la cobertura:',
      },
      {
        ul: [
          '200 g de melmelada d’albercoc',
          '80 g de mantega',
          '150 g de xocolata negra',
          '1 cullerada d’oli d’oliva',
          '1 cullerada de sucre',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Untem un motlle desmuntable d’uns 22 cm de diàmetre, i cobrim la base amb paper de forn.',
          'Engeguem el forn a 175 °C.',
          'Posem 150 g de xocolata a fondre al bany Maria, amb una cullerada d’oli. Apaguem el foc tot just s’hagi desfet.',
          'A part, separem els rovells de les clares.',
          'En un bol gros, batem enèrgicament la mantega amb el sucre, fins que la barreja quedi cremosa.',
          'Un per un, hi afegim els rovells, tot remenant.',
          'Barregem per una altra banda els ingredients secs: farina, canyella, llevat químic i ametlla mòlta.',
          'Incorporem els ingredients secs a la barreja de mantega, sucre i ous. Remenem bé.',
          'Muntem les clares a punt de neu, amb un pessic de sal.',
          'Aboquem al bol la xocolata desfeta, que ja no hauria de cremar.',
          'Tot seguit, i gradualment, hi afegim les clares muntades. Movem la cullera de baix a dalt, <a href="http://www.youtube.com/watch?v=RaSZyrXcVdI" target="_blank" rel="noopener">com ho fan les mestresses d’Iowa</a>, per mantenir tot l’aire que sigui possible dins la massa.',
          'Aboquem la massa dins el motlle i coem el pastís a la part central del forn, durant 1 h i sense ventilador.',
          'El deixem uns 15 minuts amb el forn apagat i la porta entreoberta, i després el traiem perquè es refredi a fora.',
          'Mentrestant, preparem el farcit i la cobertura.',
          'Barregem la melmelada amb 2 cullerades d’aigua. Si la melmelada tingués trossos de fruita, la trituraríem amb la batedora per deixar-la ben llisa.',
          'Desemmotllem el pastís. En fem tres capes amb una <a href="http://www.gadgetscuina.com/ca/pastisseria/estris-de-pastisseria/lires-de-tallar-pastissos" target="_blank" rel="noopener">lira de tallar pastissos</a> (o amb un ganivet llarg i prim, tipus <em>jamonero</em>, i bon pols). Aprofitem per allisar la superfície si hagués quedat una mica bombada.',
          'Untem amb melmelada les capes del pastís. Un cop reconstruït, untem també la superfície i les vores. La melmelada té la funció de segellar la massa esponjosa per evitar que absorbeixi la cobertura de xocolata que hi posarem a continuació.',
          'Per la cobertura, desfem al bany Maria la xocolata i la mantega amb una cullerada d’oli i una de sucre.',
          'Un cop fosa la xocolata, esperem un parell de minuts, que s’espesseixi una mica.',
          'Col·loquem el pastís en una plata grossa.',
          'Aboquem la xocolata fosa damunt del pastís, deixant que s’escampi. Podem inclinar la plata per assegurar-nos que la xocolata cobreixi totalment la superfície. Amb una espàtula llarga, recollirem la xocolata vessada per recobrir les parets del pastís. (No cal que ens atabalem si la xocolata és massa líquida i fem molt merder: a poc a poc s’anirà espessint i arribarà un moment que tindrà la consistència ideal).',
          'Retoquem la cobertura amb l’espàtula, fins donar-li un acabat ben llis, i deixem que s’endureixi. Quan estigui totalment freda, ja podem menjar la nostra Sachertorte. Per sentir-nos com a Viena, la servim amb una bona cullerada de nata muntada.',
        ],
      },
    ],
    variants: [
      {
        p: 'La recepta de la Sachertorte és propietat de l’hotel Sacher de Viena i està guardada amb clau i forrellat. Aquesta recepta nostra ja és doncs una variant, tot i que molt aproximada, de l’original. Per fer-la més diferent, podem substituir la melmelada d’albercoc per melmelada de nabius o altres fruits vermells.',
      },
    ],
    categories: ['berenar', 'postres'],
    tags: ['albercoc', 'ametlla', 'canyella', 'mantega', 'melmelada', 'ou', 'pastis', 'sacher', 'sucre', 'xocolata'],
  },
  {
    id: 'sopa-de-llenties-vermelles',
    createdAt: '2014-04-06T19:39:38+02:00',
    title: 'Sopa de llenties vermelles',
    intro: [
      {
        p: 'La principal característica de les llenties vermelles és que són taronges. I que estan pelades, cosa que les fa molt fàcils de pair i rebaixa el temps de cocció fins a 20-25 minuts, quasi el mateix de l’arròs. No s’hi val a dir, doncs, que els llegums a) costen massa de coure, o b) produeixen digestions pesades. Tampoc s’admet, per falsa, l’opció c) que són molt calòrics. Que ho fa, doncs, que d’aquestes petites perles, tan riques en proteïnes, ferro i potassi, no en mengem més sovint? Potser us les miraríeu amb altres ulls, si costessin deu vegades més? Sigueu sincers…',
      },
    ],
    cost: 'Cost aproximat per ració: 0,36 € (en surten 10 racions).',
    unitCost: 0.36,
    ingredients: [
      {
        ul: [
          '500 g de llenties vermelles',
          '2 cebes grosses',
          '7 grans d’all',
          '2 cullerades de <a href="http://www.mutti-parma.com/it/prodotti-rossi-doc/i-concentrati" target="_blank" rel="noopener">doble concentrat de tomàquet</a>',
          '1 litre de brou vegetal',
          '1,5 litres d’aigua',
          'El suc d’una llimona',
          '2 cullerades de comí',
          '1/2 cullerada de bitxos de Caiena picats',
          '2 fulles de llorer',
          '2 cullerades de cúrcuma',
          '1 cullerada de <em>pimentón</em> de La Vera',
          '1 cullerada de menta seca',
          'Oli d’oliva',
          'Sal',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Escalfem una olla gran de ferro colat. Hi torrem el comí i els bitxos durant uns 2 minuts.',
          'Mentrestant, piquem la ceba i els grans d’all.',
          'Quan el comí desprengui força olor, tirem a l’olla un raig d’oli d’oliva i, tot seguit, la ceba. Donem un parell de remenades i sofregim amb l’olla destapada uns 5 minuts. Hi afegim l’all i deixem sofregir 3 minuts més.',
          'Llavors posem a l’olla dues cullerades de concentrat de tomàquet, les llenties, el brou i l’aigua.',
          'Hi posem també les fulles de llorer i la cúrcuma. Tapem i deixem coure 20 minuts des que arrenca el bull.',
          'Quasi al final de la cocció, salem i incorporem a la sopa el suc de llimona i un pessic de <em>pimentón</em>.',
          'Deixem que la sopa reposi 5 minuts amb el calor residual de l’olla.',
          'Servim amb un polsim més de <em>pimentón</em> i una mica de menta seca.',
        ],
      },
    ],
    variants: [
      {
        p: 'Si aneu curts de temps, aquesta sopa es pot simplificar. Només cal que bulliu junts tots els ingredients, sense sofregir prèviament la ceba. Recordeu que, per estalviar temps i diners a la cuina, podeu preparar grans quantitats i congelar el que no hagueu de consumir. És molt pràctic especialment quan feu llegums o altres plats de la categoria “xup-xup”.',
      },
    ],
    categories: ['primers'],
    tags: ['all', 'ceba', 'comi', 'llenties', 'sopa'],
  },
  {
    id: 'bunyols-de-vent',
    createdAt: '2014-03-25T21:35:57+02:00',
    title: 'Bunyols de vent',
    intro: [
      {
        p: 'Els bunyols (o brunyols) de vent es menjaven dimecres i divendres, al llarg de la quaresma. D’aquesta manera es pretenia endolcir un període caracteritzat per una austeritat extrema en el menjar i en els costums. En els últims anys, però, hem anat deixant de banda tots els aspectes lligats al dejuni i l’abstinència quaresmal i, en canvi, hem mantingut els de caire festiu i gastronòmic, com la <a title="Cassola de Divendres Sant de la Rosita Latorre" href="/cassola-de-divendres-sant-de-la-rosita-latorre" target="_blank" rel="noopener">cassola de bacallà</a> o els típics bunyols de vent, que us convido a provar. Afegim doncs –que no substituïm– plats a la nostra taula, i fem de la quaresma un període (encara) més opulent que la resta de l’any. Curiós calvari, el nostre…',
      },
    ],
    cost: 'Cost aproximat per ració: 0,22 € (en surten per 6-8 persones).',
    unitCost: 0.22,
    ingredients: [
      {
        ul: [
          '150 ml d’aigua',
          '100 ml de llet',
          '100 g de llard',
          '150 g de farina',
          '4 ous mitjans',
          'La ratlladura d’una llimona',
          '150 g de sucre, més una culleradeta per la massa.',
          'Un pessic de sal',
          'Oli per fregir',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Posem al foc un cassó amb aigua, llet, llard, ratlladura de llimona, una culleradeta de sucre i un pessic de sal.',
          'Quan comenci a bullir, abaixem el foc al mínim i hi aboquem tota la farina de cop. Remenem amb una cullera de fusta fins que la pasta ja no s’enganxi al pot.',
          'Retirem del foc i aleshores hi afegim els ous, un per un. Cal remenar constantment i esperar que la massa absorbeixi un ou abans d’afegir-ne un altre.',
          'Quan la massa sigui llisa, la deixem reposar deu minuts.',
          'Mentrestant, escalfem una bona quantitat d’oli en una paella i ens preparem per fregir els bunyols.',
          'Posem la massa en una mànega pastissera amb un broquet llis i ample. Si no en tenim, utilitzarem un parell de culleres lleugerament untades d’oli per anar formant els bunyols.',
          'Quan l’oli arribi a la temperatura adequada*, anem tirant petites porcions de massa a la paella. Cal anar fregint els bunyols per tandes, i mantenir-los en moviment dins l’oli perquè es fregeixin de totes bandes.',
          'Amb una rasera, dipositem els bunyols fregits damunt de paper de cuina. Tot seguit, els passem cap a una plata amb 150 g de sucre, per arrebossar-los quan encara són calents.',
          'Els deixem refredar una mica, i servim.',
        ],
      },
      {
        p: '* L’oli no ha d’estar ni massa calent, perquè els bunyols es cremarien de fora, ni massa fred, perquè absorbirien un excés d’oli. Si teniu un termòmetre de cuina, les indicacions resulten molt més fàcils: 160 °C.',
      },
    ],
    variants: [
      {
        p: 'Si voleu donar als bunyols aquell gust anisat tan característic, afegiu una mica de matafaluga a la massa. (Si no en teniu, mitja copeta d’anís també farà el fet). Per acabar de fer-los encara més temptadors, els podeu farcir amb crema pastissera o xocolata espessa. Feu-ho un cop freds i amb l’ajut d’una mànega pastissera.',
      },
    ],
    categories: ['berenar', 'postres'],
    tags: ['bunyols', 'farina', 'llard', 'llimona', 'oli', 'ou', 'sucre'],
  },
  {
    id: 'ous-ferrats-amb-lamines-de-carxofa',
    createdAt: '2014-03-20T20:12:20+02:00',
    title: 'Ous ferrats amb làmines de carxofa',
    intro: [
      {
        p: 'Si esteu llegint aquestes línies vol dir que, poc o molt, us agrada cuinar. I que, en conseqüència, no cal que us expliqui com ferrar un ou. Probablement aquesta sigui una de les primeres destreses que conformen el “kit de supervivència” del cuiner novell, junt amb la de bullir pasta o coure un bistec. Les carxofes, per contra, pertanyen a una categoria més avançada, la dels aliments que cal triar i requereixen més temps de preparació. Res de l’altre món, però. Arrencar unes quantes fulles val la pena si després podem gaudir d’aquesta flor tan exquisida. Per cert… Heu provat mai a beure un got d’aigua després de menjar carxofes?',
      },
    ],
    cost: 'Cost aproximat per ració: 0,30 €.',
    unitCost: 0.3,
    ingredients: [
      {
        ul: ['4 ous', '8 carxofes', '2 llimones', 'Oli d’oliva verge extra', 'Sal Maldon', 'Pebre negre'],
      },
    ],
    prep: [
      {
        ol: [
          'Triem les carxofes: arrenquem les fulles exteriors, tallem les puntes i el tronc i ens quedem només amb els cors.',
          'Els tallem a làmines d’uns 8 mm, longitudinalment.',
          'Posem les làmines de carxofa en una paella, sense que s’amunteguin. Hi afegim un got d’aigua, un bon raig d’oli i el suc d’una llimona. (Tret que tinguem una paella gegant, haurem de coure les làmines de carxofa en dues tandes, o en dues paelles alhora).',
          'Escalfem la paella a foc mig, destapada. Al principi de la cocció, les carxofes s’ablaneixen amb l’aigua i el suc de llimona. Un cop que l’aigua s’haurà evaporat, i quedi només l’oli, les làmines de carxofa es començaran a fregir lentament.',
          'Quan veiem que estan daurades de baix, les girem. Esperem el temps just perquè agafin color per l’altra banda, i les retirem del foc. Salpebrem.',
          'Ferrem els ous, els salem i els disposem al mig del plat, amb les làmines de carxofa tot voltant.',
        ],
      },
    ],
    variants: [
      {
        p: 'Podeu afegiu un pessic de <i>pimentón</i> picant per sobre de l’ou. La política <i>low cost</i> dels Sopars de duro no permet posar-hi trufa laminada, però no cal dir que hi quedaria la mar de bé.',
      },
    ],
    categories: ['segons'],
    tags: ['carxofa', 'ou'],
  },
  {
    id: 'crema-catalana',
    createdAt: '2014-03-16T18:24:56+02:00',
    title: 'Crema catalana',
    intro: [
      {
        p: 'Recordo els diumenges al pis del carrer València, quan els iaios venien a dinar. A més de preparar uns arrossos de conill i unes sarsueles memorables, la iaia tenia la ma trencada amb la crema. Esperàvem amb delit que aterrés a la taula aquella plata ovalada, plena a vessar d’una crema groga i perfumada, de la qual ens servíem a cullerades més que generoses: els uns de dalt, per agafar-la ben cremada; els altres, de sota, fins deixar la plata neta i rostada. La crema, encara avui, fa diumenge. I la podem fer cada dia.',
      },
    ],
    cost: 'Cost aproximat per ració: 0,80 €.',
    unitCost: 0.8,
    ingredients: [
      {
        ul: [
          '800 ml de llet sencera',
          '6 ous',
          '150 g de sucre, i 50 g més per cremar',
          '1 canó de canyella',
          'L’escorça d’una llimona (sense gens de part blanca)',
          '15 g de Maizena',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Separem 1/2 tasseta de llet. Posem la resta amb el canó de canyella i l’escorça de llimona al foc. Just abans que arrenqui el bull, apaguem i deixem que reposi uns minuts.',
          '<a href="http://www.youtube.com/watch?v=iAp8pEaWB1Y" target="_blank" rel="noopener">Separem els rovells de les clares</a>, que aquest cop no utilitzarem.',
          'Batem els rovells amb 150 g de sucre. Deixatem la Maizena en la llet que havíem apartat i la incorporem també a la barreja.',
          'Ho aboquem tot molt a poc a poc al cassó amb la llet.',
          'Tornem el cassó al foc i fem coure la crema a foc baix, sempre remenant i sense deixar que bulli.',
          'Quan tingui la consistència desitjada, o al cap d’uns 5 minuts, apaguem el foc. Traiem la canyella i escorça de llimona. Si cal, colem per eliminar-ne qualsevol resta.',
          'Aboquem la crema en una plata o en cassoletes individuals i deixem refredar.',
          'Just abans de servir, espolsem el sucre restant pel damunt i el cremem amb un ferro roent.',
          'Servim de manera opcional amb un parell de neules o melindros.',
        ],
      },
    ],
    variants: [
      {
        p: 'Proveu a posar un pessic de sal a la llet (molt poca quantitat: tot just 1/4 de cullerada de cafè). El gust salat és imperceptible, però notareu que s’intensifiquen els sabors de la canyella i la llimona.',
      },
    ],
    categories: ['postres'],
    tags: ['canyella', 'crema', 'llimona', 'ou', 'sucre'],
  },
  {
    id: 'sopa-darros-amb-bledes',
    createdAt: '2014-03-01T14:35:57+02:00',
    title: 'Sopa d’arròs amb bledes',
    intro: [
      {
        p: 'Esteu escurats? Fa fred? Teniu colesterol, o simplement mal humor? Una sopa sana i gustosa, que amb xavalla resol el sopar d’una família, és la solució als vostres problemes. I, si no ho és, com a mínim els farà semblar més petits. La bleda, pobreta, potser és la verdura menys vistosa de l’hort. Només ens en recordem quan la butxaca no dóna per més, o quan la panxa ens demana una treva. Amb un bon arròs, una mica d’alfàbrega i brou, però, aquesta planta tan rústega us descobrirà els seus encants. I és que amb les verdures, com amb les persones, cal deixar enrere els prejudicis.',
      },
    ],
    cost: 'Cost aproximat per ració: 0,32 €.',
    unitCost: 0.32,
    ingredients: [
      {
        ul: [
          '200 g d’arròs rodó o bomba',
          '1 manat de bledes (o uns 200 g, sense les penques)',
          '1 ceba',
          '2 grans d’all',
          '1,2 l de brou de pollastre',
          'Alfàbrega fresca o en pasta',
          'Oli d’oliva verge extra',
          'Sal',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Rentem les bledes i les tallem a trossos petits, reservant les penques per una altra recepta.',
          'Piquem i sofregim la ceba en una cassola amb un raig d’oli. Hi afegim també un all picat.',
          'Abans que la ceba i l’all es tornin rossos, tirem l’arròs a la cassola. L’hi deixem un parell de minuts, que agafi una mica de sabor.',
          'Afegim llavors les bledes i el brou calent. Remenem i tapem la cassola.',
          'Deixem coure a foc baix durant 10 minuts.',
          'Passat aquest temps, apaguem el foc i deixem reposar 3 minuts.',
          'Mentrestant, preparem una picada amb un gra d’all, sal, oli i alfàbrega (o pasta d’alfàbrega). La incorporem a l’arròs, tot remenant, i tastem de sal.',
          'Servim la sopa ben calenta.',
        ],
      },
    ],
    variants: [
      {
        p: 'El mateix plat es podria fer amb espinacs, seguint el mateix procediment però sense descartar-ne els tronxos. Si no teniu arròs rodó o bomba, baixeu al súper i compreu-ne. Aquest ingredient no és negociable ni -molt menys- substituïble per l’arròs <i>paraboiled</i>.',
      },
    ],
    categories: ['primers'],
    tags: ['alfabrega', 'arros', 'bledes', 'brou', 'ceba'],
  },
  {
    id: 'pollastre-amb-escalunyes',
    createdAt: '2014-02-27T21:07:12+02:00',
    title: 'Pollastre amb escalunyes',
    intro: [
      {
        p: 'El fet que el pollastre sigui una carn molt barata sembla que li resti categoria. Com es pot fer un plat amb reminiscències d’alta cuina amb el mateix producte que despatxen a les franquícies tipus KFC? O que es pot menjar amb els dits, en <a href="http://www.youtube.com/watch?v=w_dmCOFE-08" target="_blank" rel="noopener">situacions gens elegants</a>? Certament, ni el consum massificat ni la cria en granges igualment massificades no ha contribuït al bon posicionament del producte. Caldria revertir la situació i tornar a l’època en què el pollastre era el plat fort de la festa major. Com? Jo us faig dos suggeriments: compreu-lo de pagès (val la pena) i guiseu-lo amb unes escalunyes caramel·litzades. Ja m’ho explicareu!',
      },
    ],
    cost: 'Cost aproximat per ració: 1,85 €.',
    unitCost: 1.85,
    ingredients: [
      {
        ul: [
          'Un pollastre sencer, de pagès',
          '100 g de mantega',
          '2 cebes petites',
          '2 grans d’all',
          '150 ml de vi negre',
          '300 ml de brou de pollastre',
          '1 cullerada de farina',
          '500 g d’escalunyes',
          '3 cullerades de sucre',
          '1 branca de farigola',
          '1 cullerada de canyella',
          'Julivert',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Tallem el pollastre en 8 trossos, partint les cuixes i els pits pel mig. Reservem la carcassa i les ales per fer un brou.',
          'Fonem la mantega en una cassola de ferro. Hi rostim el pollastre a foc mig, fins que estigui ben ros per fora.',
          'El reservem. En el mateix greix, sofregim les cebes tallades a quarts i, tot seguit, els grans d’all.',
          'Quan la ceba es comenci a fer transparent, hi afegim una cullerada de farina i remenem.',
          'Aleshores hi tirem el vi negre, que “arrossegarà” totes les restes de la cocció del pollastre que podien haver quedat enganxades a la cassola; allò que els francesos anomenen <i><a href="http://www.youtube.com/watch?v=vyhaeb5wRSM" target="_blank" rel="noopener">déglacer</a></i>.',
          'Hi afegim també la farigola, la canyella, el julivert i el brou.',
          'Deixem reduir el líquid durant uns 15 minuts. A continuació el colem, aprofitant tot el suc. Netegem una mica la cassola i la tornem a posar al foc amb la salsa ja colada.',
          'Afegim el pollastre a la salsa.',
          'Tapem i deixem coure a foc baix durant uns 25-35 minuts, depenent del gruix que tinguin els talls de pollastre.',
          'Mentrestant, preparem les escalunyes que acompanyaran el plat. Primer, les pelem i les rentem.',
          'Posem el sucre en una paella a foc baix. Remenem, sobretot quan es comenci a fondre, i esperem 1-2 minuts, fins que agafi una tonalitat daurada. Hi afegim aleshores un got d’aigua i remenem amb brio per desfer totes les engrunes.',
          'Incorporem les escalunyes a la paella. Hi donem un parell de sacsejades i tapem.',
          'Deixem coure uns 20 minuts, a foc molt baix, controlant que no se’ns enganxin. Aturem la cocció quan veiem que les escalunyes ja són meloses i el caramel s’ha espessit una mica.',
          'Tastem el pollastre i, si cal, rectifiquem de sal.',
          'El servim amb una mica de salsa i les escalunyes com a guarnició.',
        ],
      },
    ],
    variants: [
      {
        p: 'En aquest plat, les escalunyes aporten un toc dolç que contrasta de manera deliciosa amb el salat del pollastre. Però les opcions per guisar aquesta carn són infinites i en aquest blog en trobarem algunes més: amb cava i estragó, amb verduretes o fins i tot amb fruita. Aviat…',
      },
    ],
    categories: ['carmanyola', 'segons'],
    tags: ['brou', 'ceba', 'escalunyes', 'pollastre', 'vi-negre'],
  },
  {
    id: 'rosti',
    createdAt: '2014-02-22T18:55:02+02:00',
    title: 'Rösti',
    intro: [
      {
        p: 'Sembla una truita de patates, però és un plat encara més senzill, amb la llista d’ingredients més curta que trobarem mai en cap receptari. El rösti és l’alternativa suïssa a les guarnicions de puré, o de patata bullida o fregida que aquí ens resulten més familiars. Malgrat la seva simplicitat, acompanya de manera espectacular els ous ferrats (amb bacon o no), les salsitxes tipus bratwurst, les hamburgueses o altres plats de carn, quan més rústics millor. És un plat ideal també per cuinar (i per menjar) amb els nens.',
      },
    ],
    cost: 'Cost aproximat per ració: 0,32 €.',
    unitCost: 0.32,
    ingredients: [
      {
        ul: ['1 kg de patates blanques', '3 cullerades de llard', 'Sal'],
      },
    ],
    prep: [
      {
        ol: [
          'Pelem les patates, les rentem i les eixuguem.',
          'Les ratllem gruixudes amb l’ajut d’una mandolina o un ratllador.',
          'Fonem 2 cullerades de llard en una paella.',
          'Hi posem la patata ratllada, salem i fem un parell de remenades a la paella.',
          'Deixem que la patata es cogui 5 minuts a foc mig.',
          'Aleshores abaixem la flama. Amb una espàtula o una cullera de fusta, donem una forma plana i ben arrodonida a la patata.',
          'Tapem i deixem coure a foc molt baix durant 20 minuts.',
          'Tombem el rösti amb un plat o una tapadora plana. Untem la paella amb el llard restant i deixem que es cogui 20 minuts més per l’altra banda, a foc molt baix i tapat.',
          'Servim el rösti ben calent.',
        ],
      },
    ],
    variants: [
      {
        p: 'Podeu substituir tranquil·lament el llard per mantega, i afegir-hi per sobre una mica de formatge Gruyère o Emmental ratllat. Feu-ho quan el rösti sigui ben calent, o just abans de treure’l de la paella, per aconseguir que es fongui.',
      },
    ],
    categories: ['primers'],
    tags: ['llard', 'patata'],
  },
  {
    id: 'platans-amb-caramel-de-taronja',
    createdAt: '2014-02-11T17:52:29+02:00',
    title: 'Plàtans amb caramel de taronja',
    intro: [
      {
        p: 'Quan els anuncis (i la vida) eren en blanc i negre, ens van fer creure que s’havia de menjar un plàtan cada dia… <i>¡por lo menos!.</i> Si us sona aquesta cantarella, vol dir que teniu uns quants anys (probablement també alguns traumes derivats de l’educació segregada) i que ara sou vosaltres els que, a casa, teniu la paella pel mànec. O, en altres paraules, que passeu una considerable part del vostre temps lliure a la cuina. No us amargueu pel vostre destí: esteu en el millor dels llocs! Cuinar, convertir en aquest cas uns simples plàtans en unes postres per llepar-se els dits, és el més semblant a fer màgia que em pugui imaginar. Ah, i sense truc!',
      },
    ],
    cost: 'Cost aproximat per ració: 0,38 €.',
    unitCost: 0.38,
    ingredients: [
      {
        ul: [
          '4 plàtans grossos i madurs, però ferms',
          '2 taronges',
          '6 cullerades soperes de sucre morè',
          '1 nou de mantega',
          '1 cullerada de cafè de canyella mòlta',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Posem el sucre i la canyella en una paella a foc mig.',
          'Espremem les taronges. Aboquem el suc a la paella i remenem.',
          'Quan el líquid de la paella comenci a bullir, baixem el foc i anem remenant de tant en tant. Hem d’esperar que s’espesseixi, aproximadament uns 5 minuts.',
          'Mentrestant, pelem els plàtans i els tallem per la meitat.',
          'Els posem a la paella, hi afegim la mantega i els deixem a foc baix uns cinc minuts per banda, depenent del grau de maduració dels plàtans.',
          'Quan veiem que tenen un color daurat i un aspecte melós, apaguem el foc.',
          'Els servim calents, preferiblement amb unes boles de gelat de vainilla.',
        ],
      },
    ],
    variants: [
      {
        p: 'Aquesta és la versió per a tots els públics d’unes postres que també es poden fer substituint el suc de taronja per Cointreau o Grand Marnier. Ja veureu, en voldreu més, i més…! Els plàtans tenen moltes propietats beneficioses per la salut i l’estat anímic; són una autèntica bomba de <a href="http://es.wikipedia.org/wiki/Tript%C3%B3fano" target="_blank" rel="noopener">triptòfan</a>. Això sí: eviteu-los quan són verds perquè us poden resultar indigestos.',
      },
    ],
    categories: ['berenar', 'postres'],
    tags: ['caramel', 'platan', 'sucre', 'taronja'],
  },
  {
    id: 'spaghetti-alla-carbonara',
    createdAt: '2014-02-07T17:55:23+02:00',
    title: 'Spaghetti alla carbonara',
    intro: [
      {
        p: 'Hi ha diverses teories sobre els orígens dels <em>spaghetti alla carbonara</em>, tot i que en general s’accepta que pertanyen a la gastronomia romana. El perquè de la denominació “carbonara” ja és més discutit. Per una banda, es diu que podia haver estat un plat típic dels carboners. Altres pensen que és degut a que els queviures, antigament, es despatxaven juntament amb el carbó (la qual cosa no explica, aleshores, perquè tots els altres plats no es diuen també “<em>alla carbonara</em>”). Finalment, els més fantasiosos afirmen que la causa és el pebre negre amb què es condimenta, que, segons ells, recorda el polsim del carbó. Qui sap si aquestes teories tenen cap fonament. El que podem afirmar sens dubte és que, davant d’un bon plat de <em>carbonara</em>… <em>Chi se ne frega</em>!',
      },
    ],
    cost: 'Cost aproximat per ració: 1,20 €.',
    unitCost: 1.2,
    ingredients: [
      {
        ul: [
          '350-400 gr de spaghetti',
          '3 ous',
          '100 gr. de formatge pecorino o parmesà.',
          '200 gr de cansalada viada tallada a dauets',
          'Pebre negre',
          'Sal',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Posem 4 l d’aigua en una olla prou gran per bullir els spaghetti.',
          'Mentre s’escalfa l’aigua, fem suar els talls de cansalada en una paella grossa.',
          'Quan la cansalada sigui lleugerament torrada, la retirem del foc.',
          'Ratllem el formatge, batem els ous i barregem tots dos ingredients.',
          'Quan l’aigua bulli, hi tirem la sal (uns 10 g per litre) i, tot seguit, la pasta. Comptem el temps des que l’aigua reprèn l’ebullició i coem la pasta sempre amb l’olla destapada, respectant el temps que indica el fabricant.',
          'Un parell de minuts abans que els <em>spaghetti</em> estiguin cuits, agafem mig cullerot de l’aigua de cocció i el barregem amb la crema d’ous i formatge.',
          'Escorrem la pasta (sense esbandir-la amb aigua freda, si us plau!) i l’aboquem a la paella amb la cansalada viada. Donem un parell de voltes amb la forquilla de fusta.',
          'Immediatament hi incorporem la barreja d’ous i formatge, tot remenant fins que veiem que comença a espessir. Just llavors, hi afegim pebre negre acabat de moldre i servim.',
        ],
      },
    ],
    variants: [
      {
        p: 'Mai de la vida heu de posar nata o <a href="http://www.youtube.com/watch?v=l_EIxfOybAc" target="_blank" rel="noopener">llet evaporada</a> a la carbonara. Pitjor encara és com la preparen als Estats Units, on hi afegeixen pèsols, ceba, all, una pastilla sencera de mantega… Si voleu menjar carbonara, feu-la com els romans! És un plat nutritiu, que agrada a tothom i que és ben senzill de fer. Què més voleu? Només cal vigilar que els ous no es converteixin en truita. El condiment ha de tenir una consistència cremosa i vellutada.',
      },
    ],
    categories: ['primers'],
    tags: ['cansalada', 'formatge', 'ou', 'pasta', 'pebre', 'spaghetti'],
  },
  {
    id: 'cottage-pie',
    createdAt: '2014-01-31T23:30:33+02:00',
    title: 'Cottage pie',
    intro: [
      {
        p: 'Avui us proposo un plat rústic, d’aquells que tant s’agraeixen quan fa fred i plovisqueja. No és casual que sigui típic d’Anglaterra, on gaudeixen de clima rúfol tot l’any. Nosaltres hem d’aprofitar ara, que som a l’hivern i ens ve de gust el menjar consistent, per posar-nos el davantal i cuinar plats com aquest. Un bon <em>pie</em>, una <a href="http://ca.wikipedia.org/wiki/Stout" target="_blank" rel="noopener"><em>stout</em></a> i tot un vespre per endavant, preferiblement per passar-lo llegint o escoltant música, aconsegueixen reconciliar-nos amb la vida.',
      },
    ],
    cost: 'Cost aproximat per ració: 2,23 € (en surten 6 racions).',
    unitCost: 2.23,
    ingredients: [
      {
        ul: [
          '750 g de carn de vedella picada',
          '2 cebes',
          '2 pastanagues',
          '4 grans d’all',
          '2 tomàquets ratllats (o 3 cullerades soperes de tomàquet de pot)',
          '1/2 copa de vi negre',
          '350 ml de brou de carn',
          '1 cullerada de salsa Worcestershire',
          'Oli d’oliva',
          '25 g de mantega',
          '1 culleradeta de timó',
          '850 g de patates',
          '100 ml de llet',
          '100 g de formatge Cheddar (o Gruyère, o Emmental)',
          'Un pessic de nou moscada',
          'Pebre negre i sal',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Daurem la carn picada en una cassola amb oli. La reservem.',
          'Pelem i piquem les cebes, les pastanagues i els grans d’all. Sofregim la ceba i la pastanaga en el mateix oli de la carn (afegint-ne una mica més, si és necessari).',
          'Passats uns 3 minuts hi posem l’all i, tot seguit, el tomàquet.',
          'Al cap d’un parell de minuts, tornem la carn a la cassola. Hi tirem llavors la 1/2 copa de vi negre (l’altra mitja copa tinguem-la a mà, per amenitzar la feina…).',
          'Deixem reduir una mica, sense tapar la cassola.',
          'Afegim aleshores la salsa Worcestershire i el brou. Assaonem amb timó i deixem coure a foc baix durant 45 minuts. Mantenim la cassola destapada, ja que s’ha d’evaporar el suc. La tapem (o hi afegim més brou) només si veiem que s’asseca massa ràpidament.',
          'Preparem entretant el puré de patates: primer les pelem, les trossegem i les coem al vapor.',
          'Xafem les patates amb la llet i una mica de mantega. Hi barregem també la meitat del formatge, que es fondrà amb el puré calent, i un pessic de nou moscada i de pebre.',
          'Escalfem el forn a 200 °C.',
          'Quan la carn s’hagi refredat, la posem escampada en una plata de forn.',
          'Cobrim la carn amb el puré. Hi posem la resta de formatge ratllat i unes petites escates de mantega pel damunt.',
          'Canviem el forn a la posició de grill. Posem la plata a gratinar durant uns 10 minuts, o fins que la superfície sigui daurada.',
          'Servim immediatament, ben calent.',
        ],
      },
    ],
    variants: [
      {
        p: 'Es pot utilitzar carn de corder en lloc de la de vedella (tot i que aleshores, per parlar amb propietat, convé anomenar aquest plat <em>shepherd’s pie</em>). Si us voleu sentir com en un pub anglès, serviu el <em>pie</em> amb un bon acompanyament de pèsols amb mantega fosa. <em>Delicious</em>!',
      },
    ],
    categories: ['carmanyola', 'plat-unic', 'segons'],
    tags: ['brou', 'carn', 'patates', 'vedella'],
  },
  {
    id: 'truita-de-carbasso-i-ceba',
    createdAt: '2014-01-19T12:06:28+02:00',
    title: 'Truita de carbassó i ceba',
    intro: [
      {
        p: 'Aquesta és una recepta bàsica, apta per a les persones que només saben preparar crispetes amb el microones. L’única habilitat que requereix és la de saber agafar la paella pel mànec (no metafòricament) i tombar la truita. És també una recepta imprescindible, ja que les truites (de mil maneres, amb mil ingredients) són les reines indiscutibles dels nostres sopars. Amb ingredients d’allò més comuns, i acompanyades d’una llesca de pa amb tomàquet i una cerveseta ben fresca, fan un àpat complet i apetitós, del qual no ens avorrirem mai.',
      },
    ],
    cost: 'Cost aproximat per ració: 0,69 €.',
    unitCost: 0.69,
    ingredients: [
      {
        ul: ['3 carbassons', '2 cebes grosses', '6 ous', 'Oli d’oliva verge extra', 'Sal'],
      },
    ],
    prep: [
      {
        ol: [
          'Tallem la ceba en gallons prims o <a href="http://www.youtube.com/watch?v=l2lgcq1lVLA" target="_blank" rel="noopener">en juliana</a>.',
          'La sofregim en uns 100 ml d’oli. Utilitzem una paella grossa (d’uns 30 cm de diàmetre), tapada i a foc molt baix.',
          'Mentrestant, rentem els carbassons i els tallem en rodanxes d’uns 3 mm de gruix.',
          'Quan la ceba comenci a estar transparent, hi afegim el carbassó i 1/2 cullerada de sal. Remenem perquè la sal impregni tota la verdura i tornem a tapar.',
          'Remenem de tant en tant. El carbassó s’ha d’estovar i perdre quasi totalment la seva aigua. Segons el foc i la paella que utilitzem, podem trigar uns 45 minuts. Si convé, destapem al final de la cocció per accelerar el procés.',
          'Escorrem l’oli i reservem el carbassó i la ceba en un bol.',
          'Amb aquesta verdura farem dues truites. Trenquem doncs 3 ous, els batem lleugerament i els barregem amb la meitat de la verdura.',
          'Tirem un rajolí d’oli a una paella més petita (d’uns 20-22 cm. de diàmetre), que posem a foc mig-alt.',
          'Quan fumegi, hi aboquem la barreja de verdura i ous. Deixem que es cogui d’una banda.',
          'Utilitzem un plat gros o una tapadora com a tomba-truites i deixem que es cogui de l’altra banda. Procurem que la cocció sigui ràpida, perquè la truita quedi una mica crua de dins.',
          'Repetim el procés amb la resta d’ingredients.',
        ],
      },
    ],
    variants: [
      {
        p: 'La manera de tallar i coure els ingredients per fer una truita són diferents a cada casa: hi ha qui confita la ceba a foc molt baix, fins que agafa un color torrat; hi ha també qui talla la verdura a daus, o tira l’ou directament a la paella, sense barrejar-lo prèviament amb els ingredients de la truita. Tret d’això últim, us aconsello que exploreu totes les variants i us quedeu amb la que més us satisfaci. L’única condició imprescindible és que utilitzeu sempre un bon oli!',
      },
    ],
    categories: ['carmanyola', 'segons'],
    tags: ['carbasso', 'ceba', 'ou', 'truita'],
  },
  {
    id: 'pastis-de-pinya-amb-rom',
    createdAt: '2014-01-15T22:21:11+02:00',
    title: 'Pastís de pinya amb rom',
    intro: [
      {
        p: 'De preparació molt fàcil, semblant a la clàssica <i>tarte tatin</i>, aquest pastís harmonitza el sabor lleugerament àcid de la pinya amb la dolçor del caramel, la vainilla i el rom, uns ingredients i uns perfums que, amb una mica d’imaginació, ens traslladen fins al mar de les Antilles. La pinya és un fruit sucós, ideal per farcir la pasta de full sense que aquestes postres resultin enfarfegoses o massa espesses. El fet de coure-la en mantega i caramel també li proporciona una textura melosa, quasi tan irresistible com el perfum que desprèn.',
      },
    ],
    cost: 'Cost aproximat per ració: 0,85 € (en surten 6 racions).',
    unitCost: 0.85,
    ingredients: [
      {
        ul: [
          '1 pinya',
          '150 g de sucre',
          '1 sobre de sucre de vainilla (10 g aprox.)',
          '100 ml de rom',
          '75 g de mantega',
          '1 cercle de pasta de full (Buitoni o La Cocinera)',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Pelem i tallem la pinya a rodanxes d’uns 2 cm.',
          'De cada rodanxa en fem 8 porcions regulars. Eliminem la part llenyosa del centre i reservem.',
          'Engeguem el forn a 210 °C.',
          'Posem els sucres i el rom en una cassola de terrissa d’uns 20 cm. de diàmetre, a foc viu. La cassola també pot ser metàl·lica (preferiblement gruixuda, de ferro colat), però no ha de tenir parts de plàstic perquè anirà al forn.',
          'Fem un caramel, vigilant que el sucre no se’ns cremi. Amb una espàtula, rostem les parets de la cassola per evitar que s’hi formi una crosta.',
          'Quan el caramel tingui color avellana, hi posem la pinya. Els trossos han de cobrir el màxim de superfície de la cassola, però no s’han d’amuntegar. Afegim pel damunt la mantega tallada a daus i baixem el foc.',
          'Passats 5 minuts, tombem els trossos de pinya i els deixem al foc 5 minuts més.',
          'La pinya haurà deixat anar bastant suc. Amb una cullera, retirem l’excés de líquid i el guardem per més tard. Procurem que a la cassola en quedin unes 3-4 cullerades.',
          'Posem la pasta de full al damunt de la cassola, embolcallant els trossos de pinya.',
          'Fornegem durant 10 minuts a 210 °C. Tot seguit, baixem la temperatura del forn a 175 °C i hi deixem el pastís 15 minuts més, o fins que la pasta de full estigui una mica torrada.',
          'De seguida que traguem la cassola del forn, la cobrim amb un plat gros o una safata, cap per avall. Amb un gest ràpid i ferm, li donem la volta.',
          'Aboquem al damunt del pastís el líquid que havíem reservat de coure la pinya.',
          'Deixem que es refredi una mica i servim. Aquest pastís no s’ha de posar a la nevera.',
        ],
      },
    ],
    variants: [
      {
        p: 'Si no teniu cap recipient que pugui anar primer al foc i després al forn, utilitzeu una paella fins al punt 8. Tot seguit, traslladeu la pinya caramel·litzada a un motlle de silicona (o metàl·lic, prèviament engreixat) i seguiu les instruccions de la recepta sense modificar res. Queda molt bé acompanyar aquest pastís tebi amb una bola de gelat de vainilla.',
      },
    ],
    categories: ['berenar', 'postres'],
    tags: ['pinya', 'rom', 'sucre', 'vainilla'],
  },
  {
    id: 'gulasch',
    createdAt: '2014-01-04T18:37:43+02:00',
    title: 'Gulasch',
    intro: [
      {
        p: 'El gulasch és un estofat de carn de vedella assaonada amb paprika, un pebre vermell que dóna gràcia, color i un gust característic al plat. El trobareu escrit de mil maneres i cuinat també d’altres tantes formes. A Hongria, d’on és originari, és més semblant a una sopa que a un estofat, i pot ser que contingui ingredients com la col agra o la crema de llet (també agra…), dels qual he preferit prescindir. El gulasch, a més d’una simfonia de gustos i excel·lent font d’energia, és un plat ideal per aplicar la creativitat a la cuina.',
      },
    ],
    cost: 'Cost aproximat per ració: 2,45 €.',
    unitCost: 2.45,
    ingredients: [
      {
        ul: [
          '750 g de carn de vedella per estofar, tallada a daus',
          '4 cebes petites',
          '1 pebrot vermell',
          '5 patates petites',
          '1 pastanaga',
          '3 tomàquets pera',
          '2 grans d’all',
          '50 g de llard',
          '1 cullerada sopera de pebre vermell dolç',
          '1/2 cullerada sopera de pebre vermell picant',
          '1 cullerada de cafè de <i>pimentón</i> de La Vera',
          '1 cullerada sopera de farina',
          '1/2 l de brou de carn',
          '1/2 l d’aigua',
          '1 cullerada de postres de comí',
          '1 cullerada de postres de marduix',
          '1 cullerada de postres de sal de sèsam',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Barregem els diversos tipus de pebre vermell amb la farina i hi arrebossem els daus de carn.',
          'Tallem la ceba a quarts i la pastanaga a rodanxes.',
          'Escaldem i pelem els tomàquets.',
          'Desfem el llard en una cassola de ferro. Hi daurem la carn a foc viu, per segellar-la.',
          'Retirem la carn. En el mateix greix, daurem la ceba.',
          'Passats 5 minuts, hi afegim l’all tallat a làmines i el tomàquet. Deixem que cogui uns 10 minuts.',
          'Aboquem el brou i l’aigua a la cassola.',
          'Quan arrenqui el bull, hi tornem a posar la carn. Assaonem amb el comí i el marduix i deixem coure tapat, a foc baix, durant 30 minuts.',
          'Hi afegim aleshores la pastanaga i el pebrot tallat a trossos d’uns 2 cm. Deixem coure 20 minuts més.',
          'Finalment, hi posem les patates, pelades i tallades més aviat grosses.',
          'Deixem coure 25 minuts, o fins que les patates estiguin tendres. Condimentem amb la sal de sèsam.',
          'Apaguem el foc i deixem reposar el gulasch.',
          'El servim en una sopera, acompanyat d’arròs bomba o de <em><a href="http://es.wikipedia.org/wiki/Sp%C3%A4tzle" target="_blank" rel="noopener">Spätzle</a></em>.',
        ],
      },
    ],
    variants: [
      {
        p: 'El gulasch és un típic plat d’olla, d’aquells que es combinen amb els ingredients que hi ha a l’abast i s’adapten als gustos de cada cuina. Per això no trobarem una única versió d’aquesta recepta. Per començar, la carn tant pot ser de vedella com de porc o de corder (opteu per la que més us agradi); s’hi pot afegir una branca d’api, naps en lloc de patates, o 1/2 copa de vi negre (cosa que jo faria després del punt 6). La meva versió conté un pessic de <i>pimentón</i> de La Vera, que aporta un aroma fumat molt agradable (sempre que no se n’abusi) i una mica de sal de sèsam (altrament anomenada <em><a href="http://en.wikipedia.org/wiki/Gomashio" target="_blank" rel="noopener">gomashio</a></em>, un condiment japonès que, per sorpresa fins i tot de la cuinera, casa perfectament amb aquest tipus de plat).',
      },
    ],
    categories: ['plat-unic', 'segons'],
    tags: ['carn', 'ceba', 'gulasch', 'paprika', 'pastanaga', 'patata', 'pebrot', 'vedella'],
  },
  {
    id: 'tagliatelle-verdes-amb-carbasso-i-cloisses',
    createdAt: '2013-12-30T17:19:52+02:00',
    title: 'Tagliatelle verdes amb carbassó i cloïsses',
    intro: [
      {
        p: 'Les marques blanques són una excel·lent opció per estalviar en la compra, però també generen desconfiança. Pot ser que, fruit d’alguna mala experiència, i davant la possibilitat d’acabar cuinant una pasta rebullida i sense cos, incapaç d’aguantar ni la cocció ni la salsa que la condimenta, acabem comprant sempre les marques conegudes. Normal… I, tanmateix, són aquests mateixos fabricants els qui elaboren també altres productes que, amb un nom diferent i sense publicitat, podem trobar a un preu bastant inferior. Esbrinem doncs <a href="http://marcasblancas.wikispaces.com/" target="_blank" rel="noopener">quines empreses es troben darrera les marques blanques</a>, i basem la nostra llista de la compra en la millor relació preu-qualitat. Per fer la prova, us convido a preparar aquestes tagliatelle.',
      },
    ],
    cost: 'Cost aproximat per ració: 1,48 €.',
    unitCost: 1.48,
    ingredients: [
      {
        ul: [
          '1 1/2 paquets de pasta fresca Eroski (<i>tagliatelle</i> d’espinacs)',
          '300 g de cloïsses',
          '1 carbassó',
          '1 ceba tendra',
          '200 ml de nata per cuinar',
          '1 copa de vi blanc',
          'Julivert picat',
          '2 grans d’all',
          'Sal, oli',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Deixem les cloïsses en aigua salada durant 1-2 hores, perquè alliberin la mica de sorra i impureses que puguin tenir.',
          'Les esbandim i les posem en un pot al foc, sense aigua ni cap condiment. Al cap d’1-2 minuts ja s’hauran obert.',
          'Colem les cloïsses i reservem el suc que han deixat anar. Si cal, el podem filtrar amb un colador on haurem posat una capa de cotó fluix.',
          'Descartem les closques de les cloïsses, reservant-ne només algunes per decorar el plat.',
          'Tallem la ceba i el carbassó amb la mandolina, ben fins.',
          'Sofregim la ceba en una cassola amb oli d’oliva.',
          'Salem. Abans que es dauri la ceba, hi posem també el carbassó.',
          'Quan el carbassó s’hagi amorosit, hi afegim 2 grans d’all picats, una mica de julivert i una copa de vi blanc.',
          'Un cop el vi ja s’hagi evaporat, hi aboquem la nata i el suc de les cloïsses. Deixem coure uns 5-7 minuts amb la cassola destapada.',
          'Mentrestant, coem la pasta en aigua salada.',
          'Quan les <i>tagliatelle</i> encara estiguin molt <i>al dente</i>, les colem i les aboquem a la cassola amb la salsa.',
          'Deixem que s’acabin de coure uns 2 minuts amb la salsa de cloïsses. Servim.',
        ],
      },
    ],
    variants: [
      {
        p: 'Es podria fer el mateix plat amb <i>spaghetti</i> o <i>linguine</i>. La pasta no ha de ser necessàriament fresca. Procureu sempre que bulli lleugerament per sota del temps recomanat, i que s’acabi de coure en el suc de cloïsses, per absorbir-ne el sabor.',
      },
    ],
    categories: ['primers'],
    tags: ['carbasso', 'ceba-tendra', 'cloisses', 'pasta', 'vi-blanc'],
  },
  {
    id: 'pa-de-gingebre',
    createdAt: '2013-12-21T18:12:37+02:00',
    title: 'Pa de gingebre',
    intro: [
      {
        p: 'El pa de gingebre és un pa de pessic especiat, no excessivament dolç, que als països del centre i nord d’Europa apareix els dies freds de Nadal. Està emparentat amb el <i>pain d’épices</i> dels nostres veïns francesos o amb el <a href="http://en.wikipedia.org/wiki/Lebkuchen" target="_blank" rel="noopener">Lebkuchen</a> alemany. Forma part doncs d’una tradició que podríem anomenar “rebosteria del fred” que nosaltres, mediterranis, no cultivem per raons obvies; les mateixes per les quals preferim la sangria o la pomada ben freda en lloc del <a href="http://www.youtube.com/watch?v=lLcgUOks6BM" target="_blank" rel="noopener">glög</a> o del vi calent. Un mos de pa de gingebre, amb un te aromàtic, és un deliciós berenar, i alhora un viatge sensorial cap al nord.',
      },
    ],
    cost: 'Cost aproximat per ració: 0,60 € (en surten 6 racions).',
    unitCost: 0.6,
    ingredients: [
      {
        ul: [
          '250 g de farina',
          '150 g de sucre morè',
          '150 g de <a href="http://es.openfoodfacts.org/producto/8414445101239/melaza-de-cana-de-azucar-quot-ingenio-nuestra-senora-del-carmen-quot" target="_blank" rel="noopener">melassa</a>',
          '1 iogurt natural La Fageda (125 g)',
          '115 g de mantega a temperatura ambient',
          '115 ml d’aigua calenta',
          '1 ou gros',
          '1 cullerada sopera de gingebre mòlt',
          '1 cullerada de postres de bicarbonat',
          '1/2 cullerada de postres de canyella',
          '1 pessic de nou moscada',
          '1 pessic d’anís estrellat',
          '1 pessic de sal',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Encenem el forn a 175 °C.',
          'Preparem un motlle rectangular, d’uns 20 x 30 cm: untem una mica les vores i el fons, i el folrem amb paper de forn. (L’untem perquè el paper s’hi enganxi).',
          'En un bol mitjà barregem els ingredients secs: farina, bicarbonat, sal i espècies.',
          'En un bol més gros batem el sucre i la mantega tallada a dauets. Podem utilitzar la batedora elèctrica, amb les barnilles de muntar clares, a una velocitat baixa.',
          'Quan la mescla sigui homogènia, hi afegim l’ou.',
          'A continuació, hi afegim la melassa i el iogurt. Seguim batent. Semblarà que la mescla s’hagi tallat, però no: aquest és l’aspecte que ha de tenir (i aviat millorarà).',
          'Incorporem els ingredients secs al bol gros, tot remenant. Ara, la massa tindrà la consistència i el color d’un gelat cremós de torró.',
          'Finalment, hi afegim l’aigua calenta. Batem 1 minut més, fins que tot quedi homogeni.',
          'Aboquem aquesta massa al motlle que havíem folrat.',
          'La coem durant 40 minuts a la part central del forn.',
          'Un cop s’hagi refredat, ja podem servir el pa de gingebre (o embolicar-lo amb paper film per consumir-lo més endavant. Ben tapat, es conserva perfectament 4 o 5 dies).',
        ],
      },
    ],
    variants: [
      {
        p: 'La melassa, tot i que pot semblar un ingredient exòtic, es ven al Mercadona. Si no en teniu cap a la vora, però, podeu substituir-la per mel. També podeu aromatitzar la massa amb la ratlladura de 1/2 taronja, o amb trossets de gingebre confitat (que trobareu a qualsevol supermercat asiàtic). Una manera senzilla de presentar el pa de gingebre és amb sucre de llustre o xocolata negra ratllada pel damunt.',
      },
    ],
    categories: ['berenar', 'postres'],
    tags: ['anis', 'canyella', 'especies', 'farina', 'gingebre', 'iogurt', 'melassa', 'nou-moscada', 'ou', 'sucre'],
  },
  {
    id: 'sopa-dall',
    createdAt: '2013-12-15T22:42:35+02:00',
    title: 'Sopa d’all',
    intro: [
      {
        p: 'L’invent no és meu, ni de cap dels receptaris que volten per casa. La modesta sopa d’all és un plat que el meu pare menjava a la cuina, calçat amb sabatilles de quadres, i que ha tret la gana a un munt de generacions. Avui, però, està injustament arraconada. Ja sigui per falta de glamur, o perquè temem que ens delati en la distància curta, la sopa d’all s’ha vist convertida en una cosina pobra de la sopa de ceba francesa. Cal rescatar-la del seu trist destí. És un plat reconfortant, gustós, perfecte per a un ressopó i que –si seguiu la recepta, bullint l’all– no interferirà gens amb la vostra vida social.',
      },
    ],
    cost: 'Cost aproximat per ració: 0,36 €.',
    unitCost: 0.36,
    ingredients: [
      {
        ul: [
          '12 grans d’all',
          'Pa sec tallat ben prim (unes 4-5 llesques per persona). Millor si és rústic o gallec.',
          '1,5 l d’aigua',
          '1 branqueta de farigola',
          '8 cullerades d’oli d’oliva verge extra',
          '1/2 cullerada de sal',
          '1 cullerada de pebre negre en gra',
          '4 ous',
          '4 cullerades de formatge Gruyère ratllat',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Posem una olla al foc amb l’aigua, els grans d’all tallats en dos o tres bocins, els grans de pebre, la farigola i la sal.',
          'Deixem que bulli 20 minuts.',
          'Mentrestant passem les llesques de pa per la paella, amb una mica d’oli. Les retirem i les posem al fons de les cassoletes (o plats) on servirem la sopa.',
          'Trenquem un ou al damunt del pa.',
          'Colem el brou d’all i l’aboquem ben calent a les cassoletes.',
          'Hi tirem un rajolí d’oli, una cullerada de formatge ratllat i una mica de pebre mòlt.',
          'Gratinem cinc minuts, o fins que es comenci a daurar el formatge.',
          'Servim ben calent.',
        ],
      },
    ],
    variants: [
      {
        p: 'L’ou i el formatge són optatius. La sopa d’all es pot simplificar de moltes maneres, i adequar als gustos de cadascú. Si us agrada el gust de l’all sofregit, la podeu fer daurant l’all i el pa en una mica d’oli, i després afegint-hi aigua bullent; si per contra el preferiu cru, fregueu l’all damunt d’unes torrades i tot seguit escaldeu-les amb aigua o brou. Ara bé: si feu la sopa de qualsevol d’aquestes maneres, us convé reduir la dosi d’all, ja que el notareu més fort (…i potser no sereu els únics!).',
      },
    ],
    categories: ['primers'],
    tags: ['all', 'farigola', 'formatge', 'ou', 'sopa'],
  },
  {
    id: 'pastis-de-xocolata-i-oli-doliva',
    createdAt: '2013-12-07T15:57:03+02:00',
    title: 'Pastís de xocolata i oli d’oliva',
    intro: [
      {
        p: 'Si sou novells en l’art de la pastisseria, aquesta recepta és per a vosaltres. Els ingredients són d’allò més corrents, i no us trobareu amb maniobres delicades, ni masses que costen de pastar o de quallar. Res de res! Només cal que el cacau sigui pur i l’oli d’oliva d’una certa qualitat. Per sorpresa del cuiner, i malgrat la dificultat zero d’aquesta recepta, el resultat és un pastís de massa flonja i  humida i de gust exquisit, ideal per acompanyar el cafè amb llet o per al <i>tea break</i>.',
      },
    ],
    cost: 'Cost aproximat per ració: 0,24 € (en surten 8 racions).',
    unitCost: 0.24,
    ingredients: [
      {
        ul: [
          '50 g de cacau pur en pols',
          '150 ml d’oli d’oliva arbequina',
          '125 g de farina',
          '200 g de sucre',
          '3 ous',
          '125 ml d’aigua',
          '2 cullerades d’essència de vainilla',
          '1/2 cullerada de postres de bicarbonat',
          'Una mica de pa ratllat',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Untem el motlle i l’arrebossem amb una mica de pa ratllat, per evitar que la massa s’hi enganxi.',
          'Fem bullir l’aigua en un pot i hi tamisem el cacau amb un colador. Remenem fins que es dissolgui del tot.',
          'Hi afegim l’essència de vainilla i deixem que es refredi una mica.',
          'Mentrestant, escalfem el forn a 170 °C.',
          'Posem els ous, el sucre i l’oli en un bol. Batem aquesta barreja amb les varetes durant uns 3 minuts, enèrgicament.',
          'Baixem la velocitat i hi anem incorporant el cacau dissolt en aigua.',
          'Finalment, hi afegim la farina tamisada junt amb el bicarbonat i remenem bé.',
          'Aboquem aquesta barreja (líquida i molt fosca) al motlle.',
          'Fornegem el pastís a la part central del forn i amb ventilador durant 45 minuts.',
          'Deixem que el pastís es refredi dins el motlle.',
          'Un cop fred, el posem en una plata i decorem amb sucre de llustre.',
        ],
      },
    ],
    variants: [
      {
        p: 'Aquest pastís m’agrada sucar-lo al cafè amb llet. Per això no està farcit, ni té cap cobertura cremosa. Ara bé, unes escates de xocolata negra, o bé unes flors de nata muntada (ben freda!) fetes amb la mànega pastissera, tampoc no hi desentonarien gens.',
      },
    ],
    categories: ['berenar', 'postres'],
    tags: ['oli', 'sucre', 'vainilla', 'xocolata'],
  },
  {
    id: 'estofat-de-bou',
    createdAt: '2013-11-19T18:55:18+02:00',
    title: 'Estofat de bou',
    intro: [
      {
        p: 'Com a colofó, després del canvi d’hora i d’armaris arriba la pluja. Ja comencem a remenar calaixos, buscant mitjons gruixuts i cassoles de ferro. Els dies foscos ens obren la gana i nosaltres, obedients i alhora indulgents, satisfem el nostre desig d’estofats i plats de cullera; de vins vellutats i postres calentes. Mentre plou, ens submergim en la lectura. Els fills fan els deures. De la cuina ens arriba l’aroma de l’estofat i pensem que –malgrat tot, què coi!– som autèntics privilegiats.',
      },
    ],
    cost: 'Cost aproximat per ració: 2,80 €.',
    unitCost: 2.8,
    ingredients: [
      {
        ul: [
          '800 g de conill de bou tallat a daus d’uns 5 cm',
          '600 ml de vi negre',
          '600 ml de brou de carn suau, poc salat',
          '300 g de xampinyons grossos',
          '12 escalunyes',
          '1 pastanaga',
          '1 ceba',
          '2 grans d’all',
          'Mantega',
          'Oli',
          '1 fulla de llorer',
          'Sal, pebre',
          'Sucre moré',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Polim els talls de carn de nervis i greix i els eixuguem amb paper de cuina.',
          'Els passem per una paella ben roent, amb poc oli, perquè formin una crosta.',
          'Quan estiguin ben daurats, els reservem.',
          'Piquem la ceba i la pastanaga i les sofregim a la mateixa paella.',
          'Passats uns 10 minuts, retirem les verdures i aboquem la meitat del vi a la paella perquè arrossegui les restes del fons de cocció.',
          'Aquest vi el transvasem a una cassola de ferro colat, junt amb el brou, l’all i la fulla de llorer.',
          'Hi aboquem la carn i el sofregit de ceba i pastanaga.',
          'Tapem la cassola i coem a foc baix durant 4 hores.',
          'Mentrestant (o l’endemà!) preparem les escalunyes i els xampinyons.',
          'Pelem les escalunyes i les daurem en una paella amb 2 cullerades d’oli i 2 de mantega. Hi tirem per sobre una cullerada de sucre morè.',
          'Salpebrem i les ofeguem amb el vi restant.',
          'Tapem i deixem coure les escalunyes a foc baix, durant uns 25 minuts. Reservem.',
          'Els xampinyons els tindrem ben escorreguts i secs.',
          'Els tallem a quarts (o meitats, si no són gaire grossos) i els saltem durant 5 minuts en una barreja d’oli i mantega, fins daurar-los. En aquest cas, no cal mullar-los amb gens de líquid.',
          'Quan la carn estigui ben tendra, colem el contingut de la cassola. Apartem la carn.',
          'Fem reduir la salsa en una paella destapada, el temps que convingui. Si ens ha quedat massa densa, hi afegim en canvi una llossada de brou. N’hem de tenir en total uns 300 ml. La tastem i rectifiquem de sal.',
          'Netegem la cassola i hi aboquem aleshores tots els ingredients: carn, escalunyes, xampinyons i brou.',
          'Deixem que la cassola faci xup-xup uns cinc minuts.',
          'Servim l’estofat amb unes patates bullides o cuites al vapor.',
        ],
      },
    ],
    variants: [
      {
        p: 'La carn de bou té un gust intens, no apte per a pusil·lànimes, i és ideal per coure amb vi negre. Trieu un criança que tingui un cert cos (jo he emprat un Somontano) i no us en penedireu. La carn també podria ser conill de vedella, i aleshores es reduiria el temps de cocció fins a la meitat. Tant si són de bou com de vedella, els talls per estofar no són gens cars i, ben cuinats, donen uns resultats excel·lents. L’estofat, a més, es pot preparar amb tota tranquil·litat la vigília i encara és més bo. Tingueu en compte que les patates convé fer-les el mateix dia, això sí.',
      },
    ],
    categories: ['carmanyola', 'plat-unic', 'segons'],
    tags: ['bou', 'brou', 'carn', 'escalunyes', 'estofat', 'patates', 'vi-negre', 'xampinyons'],
  },
  {
    id: 'figues-amb-espatlla-de-terol',
    createdAt: '2013-11-09T10:40:56+02:00',
    title: 'Figues amb espatlla de Terol',
    intro: [
      {
        p: 'Aquest és el plat més senzill de tots els que he presentat fins ara als Sopars de duro: de dificultat zero, i dos minuts de preparació. Consisteix, com el meló amb pernil, en una combinació de dolç i salat, però més adient per la tardor (figues en lloc de meló) i els temps de crisi (espatlla en lloc de pernil. Això sí: que sigui de Terol i de primera. Fugiu dels envasats del súper i arribeu-vos al mercat, allà on us la deixin tastar i la tallin ben fina. La qualitat fa la diferència, i en aquest cas no us dispararà el pressupost).',
      },
    ],
    cost: 'Cost aproximat per ració: 2,60 €.',
    unitCost: 2.6,
    ingredients: [
      {
        ul: ['12-16 figues', '12-16 talls d’espatlla de Terol'],
      },
    ],
    prep: [
      {
        ol: [
          'Tallem les figues a quarts, sense que s’acabin de partir.',
          'Les posem al nostre gust, damunt dels talls d’espatlla.',
          'Servim!',
        ],
      },
    ],
    variants: [
      {
        p: 'El mateix plat el podeu preparar amb Bresaola o Bindenfleisch (carn de vedella curada típica dels Grisons). No cal dir que el pernil de Jabugo és el substitut ideal de l’espatlla!',
      },
      {
        p: 'Si teniu gràcia en les presentacions, proveu a enroscar els talls d’espatlla, donant-los una forma semblant a una rosa, i col·loqueu-los al mig de les figues. Els dos ingredients d’aquest plat ja creen un fort contrast dolç-salat, però podeu afegir un coulis de fruits vermells o una cullerada de mel si el voleu accentuar. Si, per altra banda, voleu potenciar el salat, salpebreu i afegiu un rajolí d’oli al moment de servir.',
      },
    ],
    categories: ['primers'],
    tags: ['espatlla', 'figues'],
  },
  {
    id: 'pastis-de-moniato',
    createdAt: '2013-11-07T18:24:00+02:00',
    title: 'Pastís de moniato',
    intro: [
      {
        p: 'El moniato arrossega l’estigma de ser un tubercle de postguerra. Tot i que no puc afirmar si va ser un moniato blanc o un nap, el que va fer jurar a la senyoreta Scarlett que <a href="http://www.dailymotion.com/video/xrfq4z_i-ll-never-be-hungry-again-from-gone-with-the-wind-1939_shortfilms" target="_blank" rel="noopener">mai més no tornaria a passar gana</a>, estic segura que aquest ingredient va formar part de la seva dieta a partir d’aquella escena i fins que es va refer dels estralls de la guerra, amb mètodes que ara no venen al cas. Al sud dels Estats Units, d’on prové la recepta, animen el moniato amb espècies que desperten el seu ocult <i>sex appeal</i>: gingebre, canyella, nou moscada… i també una mica de bourbon. Us imagineu, ara, l’esclat de sabor que ens reserva aquest pastís? Us quedareu de pasta de moniato!',
      },
    ],
    cost: 'Cost aproximat per ració: 0,48 € (en surten 10 racions).',
    unitCost: 0.48,
    ingredients: [
      {
        h3: 'Pel farcit',
      },
      {
        ul: [
          '3 moniatos (o l’equivalent d’uns 700 g)',
          '110 g de mantega a temperatura ambient',
          '210 g de sucre morè',
          '2 ous grossos',
          '1 cullerada de canyella',
          '1 cullerada de gingebre en pols',
          '1/2 cullerada de nou moscada',
          '2 cullerades de melassa',
          '2-3 cullerades de bourbon',
        ],
      },
      {
        h3: 'Per la crosta',
      },
      {
        ul: [
          '150 g de farina',
          '110 g de mantega',
          '1/2 culleradeta de sal',
          '1/2 culleradeta de sucre',
          '50 ml d’aigua freda',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Primer preparem la crosta: tamisem la farina amb la sal i el sucre i els posem en un bol.',
          'Hi afegim la mantega ben freda, tallada a daus. Amb una forquilla o un <a href="http://www.alambique.com/tienda/estribo-para-amasar" target="_blank" rel="noopener">estrep de pastisseria</a>, la barregem amb els ingredients secs fins que tingui aspecte d’engrunes. (Han de quedar trossets de mantega sense desfer. Per això és preferible no treballar aquesta massa amb els dits, ja que amb l’escalfor fondríem la mantega).',
          'Afegim gradualment l’aigua freda.',
          'Remenem l’imprescindible perquè la massa es cohesioni.',
          'L’aplanem una mica, l’emboliquem amb paper film i la posem a la nevera, un mínim d’1 hora o fins l’endemà. (També es podria preparar molt a l’avançada i congelar).',
          'Coem els moniatos al vapor durant 1 h aprox. (o al forn) fins que estiguin tendres. Deixem que es refredin per poder-los pelar.',
          'Mentrestant, estenem la pasta que havíem refrigerat amb el corró, fins aconseguir un cercle prou gran per folrar el nostre motlle.',
          'Cobrim el fons i les parets del motlle amb la massa. En aquest cas, no cal engreixar el motlle perquè la massa porta molta mantega.',
          'Cobrim el motlle amb paper film i el tornem a posar a la nevera mentre preparem el farcit.',
          'Escalfem el forn a 190 °C.',
          'Pelem els moniatos i els tallem a daus.',
          'Batem la mantega i el sucre, fins que la barreja sigui homogènia. Hi afegim el moniato, que acabarà reduït a puré, la melassa i el bourbon.',
          'Hi incorporem els ous, un per un, i finalment les espècies. No cal que us resistiu a tastar aquesta barreja.',
          'L’aboquem a la base de crosta que cobreix el motlle.',
          'Coem el pastís al forn durant 45 minuts.',
        ],
      },
    ],
    variants: [
      {
        p: 'Es pot afegir al farcit una cullerada de cinc espècies, o d’essència de vainilla, segons si us voleu fer-lo més especiat o més aromàtic. El mateix procediment es podria seguir també amb polpa de carbassa. Veureu que aquest pastís, malgrat el vostre escepticisme inicial, és digne de les millors èpoques de Tara.',
      },
    ],
    categories: ['berenar', 'postres'],
    tags: ['bourbon', 'canyella', 'gingebre', 'mantega', 'melassa', 'moniato', 'sucre'],
  },
  {
    id: 'calamars-farcits',
    createdAt: '2013-11-03T15:55:42+02:00',
    title: 'Calamars farcits',
    intro: [
      {
        p: 'Els calamars farcits són una d’aquelles combinacions de mar i muntanya tan típiques de la nostra cuina, que tots hem menjat en alguna ocasió. Com el pollastre amb escamarlans o la sèpia amb mandonguilles, els ingredients del mar i de la terra es combinen aquí en alegre promiscuïtat i acaben de lligar per acció d’una (també molt nostrada) picada. Al farcit, però, hi apareix un ingredient sorpresa, la pera, que aporta una nota fresca i innovadora en un plat altrament 100 % tradicional.',
      },
    ],
    cost: 'Cost aproximat per ració: 2,50 €.',
    unitCost: 2.5,
    ingredients: [
      {
        ul: [
          '8 calamars mitjans (o 12 de petits)',
          '175 g de carn picada de porc',
          '1 ceba grossa',
          '1 tomàquet',
          '2 grans d’all',
          '1 pera Conference',
          '50 g de xocolata negra',
          '12 ametlles torrades',
          'Oli, sal, pebre, julivert',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Netegem els calamars. Piquen els tentacles i les aletes ben petits i reservem la resta.',
          'Pelem i tallem la pera a daus petits.',
          'Trinxem el julivert i l’all.',
          'Barregem aquests ingredients amb la carn de porc.',
          'Farcim els calamars amb aquesta barreja i els tanquem amb un escuradents.',
          'Posem la ceba en una cassola, amb un pessic de sal.',
          'La sofregim a foc baix. Quan comenci a transparentar, hi afegim els calamars.',
          'Tirem a la cassola també el tomàquet, pelat i triturat, i mig got d’aigua.',
          'Tapem i deixem que faci xup-xup uns 20 minuts.',
          'Mentrestant, preparem una picada amb l’ametlla i la xocolata.',
          'Un parell de minuts abans d’acabar la cocció, tirem la picada a la cassola.',
          'Tastem de sal (i rectifiquem, si cal).',
          'Apaguem el foc i deixem reposar 5 minuts.',
          'Servim sobre una base d’arròs blanc.',
        ],
      },
    ],
    variants: [
      {
        p: 'L’autèntica recepta dels calamars farcits la podeu trobar a <i><a href="http://www.grup62.cat/llibre-la-cuina-de-la-meva-mare-94957.html" target="_blank" rel="noopener">La cuina de la meva mare</a></i>, de Joan Roca, un llibre imprescindible si voleu conèixer la cuina que s’ha fet tota la vida a les nostres cases, i a la qual El Celler de Can Roca segurament deu gran part del seu èxit. Us el recomano!',
      },
    ],
    categories: ['carmanyola', 'segons'],
    tags: ['calamars', 'carn', 'pera', 'porc'],
  },
  {
    id: 'sopa-de-safra',
    createdAt: '2013-10-24T17:53:35+02:00',
    title: 'Sopa de safrà',
    intro: [
      {
        p: 'A la tardor comencen a venir de gust els plats de cullera. Sopes, minestres i guisats es fan amos de la cuina i l’omplen de flaires que ja començàvem a enyorar. Com enyoràvem l’abraçada d’un jersei, o la calma quasi excessiva d’un vespre que a les set ja és fosc. Aparqueu les bicicletes i poseu-vos el davantal. Aquests dies, el cos ens demana una bona sopa de safrà.',
      },
    ],
    cost: 'Cost aproximat per ració: 1,10 €.',
    unitCost: 1.1,
    ingredients: [
      {
        ul: [
          '2 cebes tendres',
          '2 porros',
          '2 pastanagues',
          '2 grans d’all',
          'Un bri de safrà',
          '1 1/2 litre de brou de verdures',
          '8 llesquetes de pa sec',
          'Oli extra verge d’oliva',
          'Sal',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Pelem i piquem l’all. Tallem les verdures a rodanxes.',
          'Les ofeguem en una cassola (si pot ser, de terrissa o ferro colat) a foc lent.',
          'Abans que es marceixin gaire, hi afegim el brou.',
          'Deixem coure uns 30 minuts.',
          'Al final, hi afegim el safrà, que haurem remullat prèviament amb 3-4 cullerades de brou. Remenem i apaguem el foc.',
          'Mentre reposa 5 minuts, tallem unes llesques de pa sec i les dipositem als plats.',
          'Hi aboquem la sopa. Condimentem amb un raig d’oli cru i servim.',
        ],
      },
    ],
    variants: [
      {
        p: 'La tria de verdures d’aquesta sopa es pot adaptar al que hi hagi a la nevera. Hi quedarien igualment bé la carbassa, el moniato o la patata, així com una branca d’api o uns brots de coliflor. Trieu verdures de sabor no excessivament intens i que tinguin color blanc o ataronjat. El safrà té una aroma subtil i un color que és millor no barrejar amb tonalitats verdes.',
      },
    ],
    categories: ['primers'],
    tags: ['ceba-tendra', 'pastanaga', 'porro', 'safra', 'sopa'],
  },
  {
    id: 'panellets',
    createdAt: '2013-10-22T19:32:47+02:00',
    title: 'Panellets',
    intro: [
      {
        p: 'Els panellets no són precisament un menjar econòmic, com és la premissa dels Sopars de duro. L’ametlla i, sobretot, els <a href="http://lavalenciana.com/tienda/buscar?controller=search&amp;orderby=position&amp;orderway=desc&amp;search_query=pi%C3%B1%C3%B3n&amp;submit_search=Buscar" target="_blank" rel="noopener">pinyons</a> són ingredients força cars. Ara bé, cal tenir en compte que fer-los a casa sempre resulta molt més barat que comprar-los a la pastisseria (i si seguiu aquestes instruccions, us sortiran igual de bons, o més!) i que no es pot prescindir sempre de tot el que és car o engreixa. Senzillament, no se n’ha d’abusar. Un dia és un dia. Una altra història és si d’aquests dies potser n’hi hauria d’haver 365 l’any…',
      },
    ],
    cost: 'Cost aproximat per ració: 2,80 € (en surten per 8-10 persones).',
    unitCost: 2.8,
    ingredients: [
      {
        ul: [
          '500 g d’ametlla en pols',
          '350 g de sucre',
          '150 ml d’aigua',
          '1 clara d’ou + 2 rovells',
          '150 g de pinyons del país',
          '150 g de codonyat',
          '150 g de coco ratllat',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Posem al foc un cassó amb l’aigua i el sucre, per preparar un almívar.',
          'Quan veiem que arrenca el bull, hi aboquem tota l’ametlla i, armats de paciència i d’una cullera de fusta, comencem a remenar.',
          'Al cap d’uns uns 10 minuts, la consistència de la massa serà més llisa i ja no s’enganxarà al pot. És el moment d’apagar i deixar que es refredi.',
          'Incorporem la clara d’ou (només lleugerament batuda) a la massa, tot remenant.',
          'Emboliquem aquesta massa amb paper film i la posem a la nevera un mínim de dues hores o, si pot ser, fins l’endemà. Aquesta serà la base de tots els nostres panellets.',
          'Escalfem el forn a 200 °C i dividim la massa base en tres trossos iguals, per preparar tres tipus de panellets.',
        ],
      },
      {
        h4: 'Panellets de pinyons',
      },
      {
        ol: [
          'Dividim un d’aquests trossos de massa en 12 -15 parts iguals.',
          'En fem boletes, d’uns 2,5 cm de diàmetre.',
          'Les posem en un bol amb pinyons i premem perquè s’hi enganxin bé. No cal tenir por de deformar-les, que després les podem tornar a arrodonir.',
          'Pintem els panellets amb el rovell d’ou lleugerament rebaixat amb aigua.',
          'Els fornegem damunt d’un paper d’estrassa o una base de silicona, durant 7 minuts o fins que els pinyons siguin daurats.',
        ],
      },
      {
        h4: 'Panellets de codonyat',
      },
      {
        ol: [
          'Tallem el codonyat en daus regulars.',
          'Aplanem la massa d’ametlla amb el corró fins obtenir un gruix de mig dit.',
          'En tallem uns rectangles que puguin embolcallar completament els daus de codonyat.',
          'Els arrebossem amb sucre.',
          'Els posem al forn uns 6 minuts.',
        ],
      },
      {
        h4: 'Panellets de coco',
      },
      {
        ol: [
          'Reservem tres cullerades soperes de coco ratllat.',
          'Barregem la resta amb la massa d’ametlla, fins que quedi ben integrat. És possible que, quan pastem, el coco deixi anar una mica d’oli.',
          'Fem boletes d’aquesta massa i les arrebossem amb el coco que havíem reservat.',
          'Les coem durant 5 minuts.',
        ],
      },
    ],
    variants: [
      {
        p: 'A la massa d’ametlla s’hi podria afegir una mica de ratlladura de taronja o de llimona, o altres ingredients com cacau o fruita confitada. Poseu-hi una cirera, una avellana, un trosset de xocolata… Poseu-hi, sobretot, imaginació.',
      },
    ],
    categories: ['berenar', 'postres'],
    tags: ['ametlla', 'coco', 'codonyat', 'pinyons', 'sucre'],
  },
  {
    id: 'bastil-la-marroqui-amb-peres',
    createdAt: '2013-10-20T17:14:31+02:00',
    title: 'Bastil·la marroquí amb peres',
    intro: [
      {
        p: 'Si a la cuina es volen obtenir resultats suculents, hi ha una relació que, no falla, és sempre inversament proporcional: la del cost dels ingredients i el temps de preparació. La cuina tradicional és plena de receptes elaborades amb ingredients molt bàsics, per a les quals cal pagar la penyora de la laboriositat. Uns canelons, una moussaka, un tortell… requereixen un temps que cada cop estem menys disposats a dedicar a la cuina. I és una llàstima! Cuinar (sempre amb música) és una activitat relaxant, creativa, que estimula els sentits i la intuïció. Ens serveix per desconnectar i, de passada, per alimentar la família i obsequiar els nostres amics amb magdalenes, pastissos o quiches que –ni que sigui per quedar bé- sempre semblen benvinguts.',
      },
      {
        p: 'La bastil·la és un d’aquells plats que jo tenia a la carpeta des de fa temps. Només en llegir la recepta ja intuïa l’explosió de sabors que tindria aquesta combinació especiada i dolça. Em semblava més entretinguda del que finalment ha estat i, com a excusa, deia que enlloc no trobava la pasta filo. Així doncs, el mateix dia que la vaig veure al Bonpreu no vaig dubtar més. I, permeteu-me l’acudit, finalment hem fet la presa de la bastil·la!',
      },
    ],
    cost: 'Cost aproximat per ració: 1,20 € (en surten 8 racions).',
    unitCost: 1.2,
    ingredients: [
      {
        ul: [
          '850 g de pollastre (la part alta de les cuixes, sense desossar)',
          '2 peres Conference',
          '1 ceba',
          '6 fulls de pasta filo',
          '80 ml de brou de pollastre',
          '80 g d’ametlla triturada',
          '120 g de mantega',
          '4 cullerades de mel',
          '1 ou',
          '1 culleradeta de gingebre',
          'El suc i l’escorça d’una llima',
          '2 cullerades de postres de <i>ras al hanout</i>',
          'Oli d’oliva',
          'Sal, pebre, julivert',
          'Sucre de llustre i canyella',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Piquem la ceba i la sofregim en una cassola grossa amb l’oli, un polsim de sal, pebre, gingebre i una cullerada de <i>ras al hanout</i>.',
          'Immediatament hi afegim el pollastre, la meitat del suc de llima, el brou, la mel i julivert al gust. Deixem coure a foc baix i amb la cassola tapada durant 20-25 minuts.',
          'Retirem la cassola del foc. Desossem i esfilagarsem el pollastre. Reservem la carn desossada i el suc de la cassola.',
          'Batem l’ou i el barregem amb el pollastre i unes cullerades del suc de cocció.',
          'Per altra banda, fem fondre la mantega en un cassó.',
          'Pelem i tallem les peres a quarts. (banyant-les amb el suc de llima que ens quedava perquè no s’oxidin). Les ofeguem en la meitat de la mantega fosa i el <i>ras al hanout</i> restant durant uns 10 minuts.',
          'Mentrestant, escalfem el forn a 180 °C.',
          'Engreixem un motlle d’uns 22 cm de diàmetre.',
          'Col·loquem al fons del motlle un full de pasta filo i el pinzellem amb mantega fosa. Repetim aquesta operació amb tres capes més de pasta filo (que disposarem una mica girades, per embolcallar el farcit).',
          'Cobrim la base amb una capa d’ametlla triturada barrejada amb l’escorça de llima.',
          'A sobre, hi posem el pollastre i, per últim, la pera cuita. Remullem el farcit amb 3-4 cullerades del suc de cocció del pollastre que havíem reservat.',
          'Fiquem cap a dins la pasta que queda fora del motlle (“emboliquem” el farcit).',
          'Tapem amb dos fulls de pasta filo, que haurem sucat de mantega entre capa i capa, igual que havíem fet amb la base. Posem les vores cap a dins del motlle.',
          'Mullem la superfície amb la mantega restant i coem al forn durant 20 minuts.',
          'Quan la bastil·la sigui daurada, la capgirem damunt d’un plat i deixem que es refredi una mica.',
          'En el moment de servir, l’espolsem amb sucre de llustre i canyella.',
        ],
      },
    ],
    variants: [
      {
        p: 'La recepta més genuïna d’aquest plat es fa amb colomins, però us he de confessar que em fan una certa angúnia… De manera que he optat pel tall més gustós del pollastre: la part alta de la cuixa. La bastil·la original també porta coriandre, que és una herba amb la qual no sempre m’hi avinc i que aquí he substituït amb julivert. Les peres són un afegitó que aporta certa gràcia i humitat al farcit.',
      },
    ],
    categories: ['carmanyola', 'plat-unic', 'segons'],
    tags: ['ametlla', 'pasta-filo', 'pera', 'pollastre', 'ras-al-hanout'],
  },
  {
    id: 'empedrat',
    createdAt: '2013-10-19T15:00:12+02:00',
    title: 'Empedrat',
    intro: [
      {
        p: 'L’empedrat és una amanida que té com a fonament el bacallà i les mongetes. A partir d’aquí, el més aconsellable és passejar-se per les parades del mercat, triar la resta d’ingredients segons l’oferta i utilitzar el nas en el moment de combinar-los. Prepareu l’empedrat el mateix dia, per explotar la principal qualitat d’aquest plat: la frescor. Un altre aspecte que us el farà atractiu és que en cinc minuts el tindreu a taula, a punt per menjar. Ni tan sols embrutareu els fogons!',
      },
    ],
    cost: 'Cost aproximat per ració: 2,65 €.',
    unitCost: 2.65,
    ingredients: [
      {
        ul: [
          '600 g de mongetes cuites',
          '250 g de bacallà remullat per esqueixada',
          '1 ceba tendra',
          '2 tomàquets',
          '1/2 pebrot vermell (opcional)',
          '100 g d’olives negres',
          'Oli d’oliva verge extra',
          'Suc de 1/2 llimona',
          'Sal',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Trossegem el bacallà, el tomàquet, la ceba tendra i el pebrot.',
          'Els barregem amb les mongetes cuites i les olives.',
          'Amanim amb un bon raig d’oli, una mica de suc de llimona i sal (tasteu abans el punt de salabror del bacallà).',
          'Servim fresc.',
        ],
      },
    ],
    variants: [
      {
        p: 'El plat es podria enriquir amb un parell d’ous durs tallats a quarts. A l’hora de servir, un polsim de julivert o unes ratlladures de llima hi donarien un punt de frescor i de verdor molt apetitós. Com alternativa, poseu-hi unes fulles d’alga nori tallades ben primes.',
      },
    ],
    categories: ['carmanyola', 'plat-unic', 'primers'],
    tags: ['bacalla', 'ceba-tendra', 'mongetes', 'olives', 'pebrot', 'tomaquet'],
  },
  {
    id: 'sorbet-de-melo-i-oli',
    createdAt: '2013-10-01T19:20:13+02:00',
    title: 'Sorbet de meló i oli',
    intro: [
      {
        p: 'Fa uns anys, amb la geladeria es va començar a experimentar de tal manera que, si demanaves un gelat de xocolata o de maduixa-de-tota-la-vida, et miraven estrany. Els més llançats, mentre assaborien (és un dir) gelats de cabrales o favada, et titllaven d’encarcarat; d’algú que no gosa provar res nou (ni en el menjar, ni –per extensió, i amb ànim d’ofendre– en el sexe o en la vida). Curiosament, passats els anys, els vells militants que cantaven les glòries dels gelats “agosarats” assaboreixen (ara sí, ja penedits) els gustos clàssics. En honor a les persones de conducta incongruent, aquesta recepta combina el tradicional meló amb un ingredient insòlit, l’oli d’oliva. Això sí, n’hi ha poca quantitat i sempre es pot dir que “en el fons, l’oli és com el suc d’una fruita”.',
      },
    ],
    cost: 'Cost aproximat per ració: 0,26 €.',
    unitCost: 0.26,
    ingredients: [
      {
        ul: [
          '450 ml de meló (un cop liquat amb la batedora)',
          '50 ml d’oli d’oliva verge extra de Siurana',
          '4 cullerades soperes de sucre blanc',
          '2 clares d’ou',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Triturem unes tallades de meló fins aconseguir el volum indicat.',
          'Hi afegim l’oli, el sucre i la clara d’ou.',
          'Batem una mica més i refredem a la nevera.',
          'Aboquem a la geladera, fins que agafi la consistència de neu.',
          'Posem uns 30 minuts al congelador i servim.',
        ],
      },
    ],
    variants: [
      {
        p: 'La menta combina molt bé amb el meló i fa aquestes postres encara més refrescants. Podem doncs decorar el sorbet amb unes fulletes de menta fresca, o –si volem fer una presentació més <i>vintage</i>– un rajolí de peppermint o una porció d’After Eight.',
      },
    ],
    categories: ['postres'],
    tags: ['gelat', 'melo', 'oli', 'sorbet'],
  },
  {
    id: 'pollastre-al-curri',
    createdAt: '2013-09-24T17:59:38+02:00',
    title: 'Pollastre al curri',
    intro: [
      {
        p: 'Arran d’uns tallers de cuina oriental que vaig fer l’hivern passat, un prestatge de la meva (minúscula) cuina ha quedat completament envaït per pots i ampolles de salsa d’ostres, mirin, oli de sèsam, pasta de miso… Gran part d’aquests productes –tret de les menys apetibles prunes umeboshi– els vaig utilitzant en la cuina diària. I així he descobert una poció, que suposo similar al <a href="http://en.wikipedia.org/wiki/Garum" target="_blank" rel="noopener">garum</a> romà i que, utilitzant un llenguatge molt suau, anomenen <em>salsa de peix</em>. No se us acudeixi tastar-la sola. Ni tan sols olorar-la! Un ferum de salaó us impregnarà les mucoses i voldríeu no haver estat tan curiosos. Però poseu-ne una culleradeta en l’estofat, en el suquet, o en el curri que us convido a provar. Ja veureu com el plat s’il·lumina i adquireix un matís nou.',
      },
    ],
    cost: 'Cost aproximat per ració: 1,65 €.',
    unitCost: 1.65,
    ingredients: [
      {
        ul: [
          '550 g de cuixes de pollastre desossades',
          '250 ml de llet de coco',
          '2 cullerades de pasta de curri verd',
          '2 pomes Golden',
          '1 cullerada de sucre morè',
          '2 cullerades de <a href="http://deliciosa-asia.com/tienda/salsa-de-pescado" target="_blank" rel="noopener">salsa de peix</a>',
          '2 cullerades d’oli de gira-sol',
          'Alfàbrega',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Posem l’oli de gira-sol en un wok i hi escalfem dues cullerades de curri verd en pasta (1 sola cullerada si no us agrada gaire picant).',
          'Hi aboquem la llet de coco, i esperem que s’escalfi.',
          'Afegim 100 ml d’aigua i esperem que arrenqui el bull.',
          'Tallem el pollastre en daus d’uns 2 cm. L’afegim a la llet de coco i el fem coure uns 5 minuts a foc alegre, remenant de tant en tant.',
          'Pelem i tallem les pomes en trossos de mida similar al pollastre. Els tirem al wok i fem coure 5 minuts més.',
          'Afegim la salsa de peix i el sucre. Remenem.',
          'Al final de la cocció, hi posem una mica d’alfàbrega.',
          'Servim damunt un llit d’arròs blanc.',
        ],
      },
    ],
    variants: [
      {
        p: 'Si us agrada el sabor dolç, afegiu algunes panses en aquest curri, junt amb la poma. Si, per contra, preferiu un gust més “seriós”, substituïu la poma per albergínia. La denominació <i>curri</i> s’aplica a un munt de plats diferents, estofats amb espècies, que s’estenen per quasi la totalitat d’Àsia i –per efectes de la colonització– també a la Gran Bretanya i a Holanda. El que jo us proposo és una versió molt senzilla d’un curri verd tailandès, però de variants n’hi una infinitat. Atreviu-vos a experimentar!',
      },
    ],
    categories: ['carmanyola', 'plat-unic', 'segons'],
    tags: ['arros', 'curri', 'llet-de-coco', 'pollastre', 'poma'],
  },
  {
    id: 'ensaladilla-russa-a-la-catalana',
    createdAt: '2013-09-11T11:49:54+02:00',
    title: 'Ensaladilla russa (a la catalana)',
    intro: [
      {
        p: 'Quina paradoxa: un plat d’aspecte tan català, amb un nom que no ho és gens (i per al qual no he trobat alternativa, tot i que el suggeriment “amanida per pebrots” reconec que em va fer certa gràcia). L’<em>ensaladilla</em> russa és, com Mozart, un clàssic que agrada a tothom i del qual també s’han fet interpretacions infames. La pitjor és la que se serveix en determinats bars “pintorescos” i que es remunta a la setmana anterior, amb la patata envidreïda i una crosta groguenca damunt de la maionesa. No cal que caigueu tan baix. Feu-la a casa i gaudiu d’aquest plat en la seva (humil) esplendor.',
      },
    ],
    cost: 'Cost aproximat per ració: 1,30 €.',
    unitCost: 1.3,
    ingredients: [
      {
        ul: [
          '250 g de patates',
          '150 g de mongeta tendra fina',
          '3 pastanagues',
          '150 g de pèsols (que poden ser congelats)',
          '80 g d’olives verdes sense pinyol',
          '100 g de tonyina',
          '4 ous durs',
          '1/2 pebrot vermell escalivat',
          'Maionesa',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Tallem les patates i les pastanagues a daus d’1 cm aprox. i la mongeta tendra, en 2 o 3 trossos.',
          'Posem a bullir totes les verdures en aigua amb sal, per separat: no volem barrejar sabors ni temps de cocció diferents.',
          'Quan estiguin al dente, les colem i les deixem refredar.',
          'Partim les olives pel mig.',
          'Barregem les verdures, les olives i la tonyina amb una bona quantitat de maionesa.',
          'Partim els ous durs pel mig. Engrunem els rovells i tallem les clares a llesques estretes, sense que se’ns trenquin.',
          'Posem l’<em>ensaladilla</em> en una plata, la cobrim amb el rovell esmicolat i decorem amb unes tires de pebrot escalivat per sobre i la clara d’ou tot voltant.',
        ],
      },
    ],
    variants: [
      {
        p: 'A gust dels comensals, podríeu afegir blat de moro, cranc, tàperes o cogombres en vinagre, així com la resta de pebrot escalivat que hem fet servir per decorar el plat. També podríeu cobrir l’<em>ensaladilla</em> amb unes quantes anxoves.',
      },
    ],
    categories: ['primers'],
    tags: ['ensaladilla', 'maionesa', 'mongeta-tendra', 'olives', 'pastanaga', 'patata', 'pesols', 'pebrot', 'tonyina'],
  },
  {
    id: 'montaditos-de-brandada-de-bacalla',
    createdAt: '2013-09-10T18:47:00+02:00',
    title: 'Montaditos de brandada de bacallà',
    intro: [
      {
        p: 'Soc fan del bacallà, en totes les seves manifestacions. I no conec millor acompanyament per a una gerra de cervesa (de la qual també sóc devota) que aquests <i>montaditos</i> de brandada. És doncs un plat que he menjat sovint al llarg d’aquest estiu, i que recomano als menys experimentats en la cuina. Per la seva senzillesa -però sobretot perquè són deliciosos- segur que, com jo, repetireu!',
      },
    ],
    cost: 'Cost aproximat per ració: 2,40 €.',
    unitCost: 2.4,
    ingredients: [
      {
        ul: [
          '300 g de patates',
          '100 ml d’oli d’oliva',
          '1/2 l de llet',
          '450 g de bacallà dessalat',
          '4 grans d’all',
          'Julivert',
          'Unes llesques de pa torrat',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Bullim les patates, o bé les coem al vapor.',
          'Posem el bacallà en un cassó amb llet. Quan arrenqui el bull, apaguem i deixem el cassó tapat uns 5 minuts.',
          'Un cop el bacallà estigui tebi, l’esqueixem amb els dits, ben petit.',
          '<a href="https://www.youtube.com/watch?v=gvBjK9Q5Sg4" target="_blank" rel="noopener">Esclafem els grans d’all amb un cop sec de ganivet</a> (no cal pelar-los) i els fregim en oli d’oliva.',
          'Quan l’all es comenci a torrar, el retirem i reservem l’oli.',
          'Amb una forquilla, aixafem la patata.',
          'Hi afegim l’oli, el bacallà i abundant julivert picat, i pastem amb la forquilla.',
          'Amb dues culleres, formem unes <a href="https://www.youtube.com/watch?v=MXcIZ4aRHBU" target="_blank" rel="noopener">quenelles</a> de brandada i les posem damunt les llesquetes de pa.',
          'Tirem un rajolí d’oli per damunt dels <i>montaditos</i> i els servim amb una amanida verda.',
        ],
      },
    ],
    variants: [
      {
        p: 'La brandada és perfecta per farcir tomàquets, pebrots del piquillo, o fins i tot canelons. La presentació en <i>montadito</i>, sobre llesquetes de pa, és la més senzilla i la que pot resultar més pràctica com a entrant o com a tapa. Si bé en molts receptaris s’indica d’utilitzar la batedora per preparar la brandada, jo us ho desaconsello: la patata agafa consistència de xiclet, i tot plegat queda massa pastós. Prefereixo trobar-me trossets de bacallà a la boca, i que la textura no sigui tan homogènia. Naturalment, però, tot és qüestió de gustos.',
      },
    ],
    categories: ['primers', 'segons'],
    tags: ['all', 'bacalla', 'julivert', 'oli', 'patata'],
  },
  {
    id: 'peix-a-la-cassola',
    createdAt: '2013-09-08T20:21:20+02:00',
    title: 'Peix a la cassola',
    intro: [
      {
        p: 'Quan serviu aquest plat, no us oblideu de portar el pa a la taula. Com que el lluç té poques calories, als comensals no els sabrà greu sucar-hi tot el pa que admeti el suquet. I és que aquest és un plat “per sucar-hi pa”: gustós, saludable, i amb una presentació d’allò més apetitosa. I malgrat això, el peix fet a la cassola és també molt fàcil de preparar. Us hi animeu?',
      },
    ],
    cost: 'Cost aproximat per ració: 3,20 € (avui fem un extra!).',
    unitCost: 3.2,
    ingredients: [
      {
        ul: [
          '4 filets de lluç',
          '20-25 cloïsses',
          '2 escalunyes',
          'Julivert',
          '3 grans d’all',
          '250 g de pèsols',
          '12-15 ametlles torrades',
          '1/2 got de vi blanc',
          'Aigua',
          'Farina',
          'Oli i sal',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Rentem i obrim les cloïsses en un recipient tapat.',
          'Filtrem el líquid que deixen anar (per fer-ho, utilitzem un colador amb un tros de cotó fluix, que recollirà totes les impureses) i el reservem.',
          'Al morter, preparem una picada amb les ametlles, l’all, el julivert i un pessic de sal. Hi afegim el vi blanc i reservem.',
          'Coem els pèsols al vapor.',
          'Tallem l’escalunya ben fina, i la sofregim a foc baix en una cassoleta de fang o de ferro.',
          'Quan l’escalunya estigui melosa, hi posem una cullerada rasa de farina. Remenem i deixem que es dauri un parell de minuts.',
          'Aboquem l’aigua de les cloïsses i el contingut del morter al sofregit. Deixem que cogui 5 minuts.',
          'Col·loquem els filets de lluç a la cassoleta, amb la pell cap a baix. Hi posem també els pèsols.',
          'Fem coure 5 minuts més. Poc abans de servir, hi afegim les cloïsses perquè s’escalfin.',
          'Servim el peix amb una mica més de julivert per damunt.',
        ],
      },
    ],
    variants: [
      {
        p: 'A banda del tipus de peix que fem servir, aquest plat també admet variants en el sofregit, que podem fer amb ceba tendra o porro, o bé de manera més tradicional amb ceba i tomàquet. A més de pèsols, hi podríem posar espàrrecs verds o, fins i tot, una mica de patata si voleu que el plat sigui més consistent.',
      },
    ],
    categories: ['segons'],
    tags: ['cloisses', 'lluc', 'pesols', 'peix'],
  },
  {
    id: 'rotlle-de-te-matcha',
    createdAt: '2013-09-04T17:22:20+02:00',
    title: 'Rotlle de te matcha',
    intro: [
      {
        p: 'El matcha és un dels millors tes verds japonesos. Es prepara (<a href="http://www.youtube.com/watch?v=SAHcQ2YGVDo" target="_blank" rel="noopener">de manera bastant cerimoniosa</a>) barrejant-lo amb aigua a 70 °C i remenant enèrgicament, ja que aquest te es presenta en pols. Pel seu gust intens, però potser també pel seu color cridaner, el podem trobar sovint a la pastisseria nipona, ja sigui com a ingredient principal d’un gelat, o d’un pa de pessic que ens servirà de base per aquest rotlle. Cal dir que el te matcha també és un dels més cars, però n’utilitzarem quantitats tan petites que ens podem permetre la despesa, fins i tot en un blog de cuina <i>low cost</i>!',
      },
    ],
    cost: 'Cost aproximat per ració: 0,45 € (en surten 6 racions).',
    unitCost: 0.45,
    ingredients: [
      {
        h3: 'Per al pa de pessic:',
      },
      {
        ul: [
          '4 ous',
          '80 g de sucre',
          '40 g de farina',
          '1 cullerada sopera de te matcha',
          '1 cullerada de postres de bicarbonat',
        ],
      },
      {
        h3: 'Per al farcit:',
      },
      {
        ul: [
          '250 ml d’aigua',
          '75 ml de suc de llimona',
          'La pell de 1/2 llimona',
          '100 g de sucre',
          '2 ous',
          '25 g de Maizena',
          '1 full de gelatina',
          '1 cullerada sopera de te matcha',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Folrem en primer lloc una plata rectangular amb paper de forn, doblegant les vores cap amunt.',
          'Encenem el forn a 170 °C.',
          'Barregem bé la farina, el te matcha i el bicarbonat, passant-los junts tres o quatre vegades per un colador gros.',
          'Separem els rovells de les clares.',
          'Batem les clares a punt de neu, incorporant poc a poc la meitat del sucre (40 g). Reservem.',
          'Per altra banda, batem els rovells amb els restants 40 g de sucre, fins que la barreja sigui de color groc molt clar.',
          'Als rovells hi incorporem la barreja de farina i te matcha, tot remenant.',
          'Hi afegim aleshores 1/3 del merengue que havíem reservat. Remenem i, quan aquesta part s’hagi integrat de manera homogènia amb els rovells, hi aboquem la resta.',
          'Remenem suaument, movent la cullera de baix a dalt, fins que la barreja agafi llustre (uns 5 minuts, o 100 cops, per ser més precisos).',
          'Aboquem la massa al motlle folrat. Allisem amb l’espàtula i eliminem les possibles bombolles que hi puguin quedar. Com? Deixant caure la plata des d’uns 5-10 cm damunt del marbre.',
          'Coem al forn (sense ventilador) durant 25 minuts. Per garantir que pugi de manera uniforme, a mitja cocció donem a volta a la safata del forn.',
          'Desemmotllem el pa de pessic i el dipositem damunt el marbre, sense retirar el paper (que estarà enganxat a la massa). El tapem amb el motlle cap per avall i deixem que es refredi lentament. Tapat conservarà la humitat que ens interessa que tingui.',
          'Mentre es refreda, prepararem el farcit.',
          'En primer lloc, posem a estovar la gelatina en aigua freda.',
          'En un cassó, escalfem l’aigua amb el suc i la pell de llimona.',
          'Quan arrenqui el bull, hi afegim el te matcha. Remenem i reservem.',
          'En un bol, batem els ous amb el sucre. Hi afegim la Maizena dissolta en un parell de cullerades d’aigua freda.',
          'Llencem la pell de llimona. Aboquem la meitat del te calent al bol on tenim els ous barrejats amb el sucre i la Maizena. Remenem.',
          'Aboquem aquesta barreja al cassó amb la resta del te, i tornem a posar al foc.',
          'Coem fins que comenci a espessir. Aleshores, hi afegim la gelatina escorreguda, remenem i deixem que el farcit es refredi.',
          'Quan tingui la consistència d’una crema, i el pa de pessic ja estigui més o menys fred, muntarem el rotlle.',
          'En primer lloc, desenganxem les vores del paper de forn, i tapem la superfície del pa de pessic amb un nou paper. Li donem la volta, de manera que el paper enganxat ens quedi a la part superior.',
          'Amb molta cura, desenganxem el paper del pa de pessic. El tornem a dipositar on era i el tombem un altra vegada.',
          'Amb un ganivet de serreta, tallem un dels extrems del pa de pessic al biaix. Aquest tall ajudarà a que el rotlle tanqui bé, ja que l’extrem exterior no serà tan gruixut.',
          'Estenem la crema de te amb una espàtula, deixant un marge sense farcir en l’extrem que hem tallat.',
          'A continuació, utilitzarem el paper com si es tractés d’una estoreta de fer sushi, per ajudar-nos a enrotllar el pa de pessic i la crema junts.',
          'Un cop format el rotlle, l’emboliquem amb un dels papers de forn que hem utilitzat. Tapem hermèticament amb paper film i deixem refredar a la nevera.',
          'Servim amb sucre de llustre per damunt.',
        ],
      },
    ],
    variants: [
      {
        p: 'Si no trobeu te matcha, o com a alternativa per aromatitzar aquest rotlle, substituïu cada cullerada de te per dues de cacau pur, i decoreu el rotlle amb encenalls de xocolata negra. En aquest cas, per al farciment us aconsello que en lloc de llimona utilitzeu taronja. Amb el cacau i la xocolata negra hi queda d’allò més bé!',
      },
    ],
    categories: ['postres'],
    tags: ['farina', 'ou', 'pa-de-pessic', 'sucre', 'te-matcha'],
  },
  {
    id: 'musclos-amb-vermut',
    createdAt: '2013-08-23T12:59:58+02:00',
    title: 'Musclos amb vermut',
    intro: [
      {
        p: 'Aquest plat us recordarà els dies de platja i els <i>xiringuitos</i> on aneu a fer l’aperitiu amb l’excusa de refrescar-vos: els musclos, el vermut, la maionesa… Tot evoca el <i>dolce far niente</i> dels diumenges d’agost, els llibres (sempre gruixuts) que els acompanyen, i l’expectativa d’uns àpats que podem assaborir sense preocupacions, sense gaire roba, i amb un estat d’ànim que caldria conservar tot l’any.',
      },
    ],
    cost: 'Cost aproximat per ració: 1,18 €.',
    unitCost: 1.18,
    ingredients: [
      {
        ul: [
          '2 kg de musclos',
          '1 ceba grossa',
          '300 ml de vermut blanc extra sec',
          '200 ml de maionesa',
          '2 cullerades soperes d’oli d’oliva',
          '2 cullerades soperes de cibulet',
          '<i>Pimentón</i> de La Vera',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Rentem i traiem les barbes als musclos. Els reservem embolicats amb un drap moll.',
          'Posem a sofregir la ceba en una cassola gran o en un wok.',
          'Hi afegim el vermut, pugem la flama i deixem que bulli 2-3 minuts. (El temps de servir-nos una copeta de vermut i obrir una llauna d’olives).',
          'Aboquem els musclos a la cassola, tapem i abaixem el foc.',
          'Quan s’hagin obert, retirem els musclos del foc. Deixem que es refredin una mica i llencem les valves buides.',
          'Colem el suc que ha quedat a la cassola.',
          'En barregem la meitat amb la maionesa i el cibulet.',
          'Repartim aquesta salsa per damunt dels musclos.',
          'Servim el plat fred, amb un polsim de <i>pimentón</i> de La Vera pel damunt.',
        ],
      },
    ],
    variants: [
      {
        p: 'Podeu utilitzar un vi blanc sec, en substitució del vermut. I, si us agrada, afegiu una fulla de llorer a la cassola on obriu els musclos. El <i>pimentón</i> de La Vera dóna als musclos un toc fumat molt interessant, però se’n pot prescindir si algú, inexplicablement, detesta aquest aroma.',
      },
    ],
    categories: ['segons'],
    tags: ['maionesa', 'musclos', 'vermut'],
  },
  {
    id: 'pressec-amb-vi',
    createdAt: '2013-08-22T12:22:16+02:00',
    title: 'Préssec amb vi',
    intro: [
      {
        p: 'Situeu-vos en una <i>villa</i> romana. Un fresc representa una dona de cabells arrissats, amb una copa de vidre opalí a la mà. Reclinat al seu costat, embriac per la calor i el vi de Falern, un home barbut menja de mans de la jove, presagiant una migdiada tòrrida. L’escena inclou també les plantes i els ocells del jardí, pintats amb una minuciositat que permet reconèixer cada espècie. Gràcies a aquest afany detallista, es pot apreciar que la copa que sosté la dona és plena de préssecs amb vi i canyella, una delícia que –com tantes altres– els grecs i els romans ja van conèixer abans que nosaltres. Malgrat que ara tinguem a l’abast cuines sofisticades i ingredients exòtics, sempre hi haurà sabors que ens recordaran els nostres orígens, i que perviuran en el temps molt més del que ho faran les modes en el menjar… O nosaltres mateixos.',
      },
    ],
    cost: 'Cost aproximat per ració: 0,68 €.',
    unitCost: 0.68,
    ingredients: [
      {
        ul: [
          '4 préssecs madurs',
          '75 g de sucre',
          '350 ml de vi negre',
          '1 culleradeta de canyella molta',
          '1 clau d’olor',
          'La pell de 1/2 llimona (pelada ben prima, sense la part blanca)',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Barregem en un cassó el vi amb el sucre, la canyella, el clau i la pell de llimona.',
          'El posem al foc i anem remenant fins que el sucre s’hagi dissolt. Reservem.',
          'Mentrestant, pelem i tallem els préssecs, i els posem en un bol.',
          'Colem el vi i, encara una mica calent, l’aboquem al bol. Remenem, tapem amb un tros de paper film i deixem que maceri com a mínim 1 hora fora de la nevera.',
          'Abans de servir, refrigerem una estona. Repartim el préssec amb vi en copes o bols individuals i, de manera opcional, decorem amb fulletes de menta o amb groselles.',
        ],
      },
    ],
    variants: [
      {
        p: 'Aquestes postres es poden fer també amb vi blanc (no el trieu gaire sec, en aquest cas), i amb altra fruita com nectarines o peres.',
      },
    ],
    categories: ['postres'],
    tags: ['canyella', 'clau', 'llimona', 'pressec', 'sucre', 'vi'],
  },
  {
    id: 'amanida-de-bulgur',
    createdAt: '2013-08-20T12:44:24+02:00',
    title: 'Amanida de bulgur',
    intro: [
      {
        p: 'El bulgur, ja sigui de blat o d’espelta, és una excel·lent alternativa a l’arròs per preparar amanides estiuenques. Es cou de manera semblant, i ja no cal fer cap peregrinatge per anar-lo a comprar: es troba a qualsevol botiga d’aliments ecològics o en el més prosaic supermercat del Corte Inglés, i a un preu molt raonable. En lloc de coure’ls, els grans de bulgur també es poden estovar en aigua durant un parell d’hores. Això fa aquesta recepta encara més fàcil i adient per la calor que estem suportant.',
      },
    ],
    cost: 'Cost aproximat per ració: 1,80 €.',
    unitCost: 1.8,
    ingredients: [
      {
        ul: [
          '250 g de bulgur',
          '1 tomàquet d’amanir',
          '1/2 cabdell d’enciam',
          '1 ceba morada',
          '80 g de blat de moro',
          '80 g d’olives negres',
          '100 g de formatge tendre d’ovella',
          '2 pastanagues',
          '1 cibulet',
          'Oli d’oliva verge extra',
          'Sal',
          'Alfàbrega',
          'Unes gotes de suc de llimona',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Coem el bulgur en 1/2 l d’aigua salada durant 15 minuts. Si utilitzem blat de moro congelat, el podem fer bullir a la mateixa aigua.',
          'Mentre el bulgur es refreda, preparem els ingredients restants.',
          'Tallem el formatge, la pastanaga, la ceba i el tomàquet a trossos d’1 cm aprox.',
          'Partim les olives (en aquest cas, de Kalamata) i les desossem.',
          'Tallem l’enciam en juliana i el cibulet.',
          'Barregem les verdures i el formatge amb el bulgur. Deixem refredar a la nevera, en un bol cobert amb paper film.',
          'En el moment de servir, amanim amb un raig generós d’oli, salem i condimentem amb alfàbrega picada i unes gotes de suc de llimona.',
        ],
      },
    ],
    variants: [
      {
        p: 'Segons el que hi hagi a la nevera, i adaptant-vos sempre als gustos dels comensals, podríeu incorporar altres ingredients com: pebrot vermell, cogombre, api… Fins i tot, fruita (meló, poma…), o llegums cuits. Es tracta d’anar variant i combinar els ingredients de manera que harmonitzin entre si. Com descobrir aquesta harmonia? Això depèn exclusivament de vosaltres!',
      },
    ],
    categories: ['carmanyola', 'primers'],
    tags: [
      'alfabrega',
      'amanida',
      'blat-de-moro',
      'bulgur',
      'ceba',
      'enciam',
      'formatge',
      'olives',
      'pastanaga',
      'tomaquet',
    ],
  },
  {
    id: 'ceviche-dels-sopars-de-duro',
    createdAt: '2013-08-18T20:04:12+02:00',
    title: 'Ceviche dels Sopars de duro',
    intro: [
      {
        p: 'El Perú és un país amb una diversitat de productes i una gastronomia tan rica com desconeguda fora de les seves fronteres. En un país on més joves aspiren a ser cuiners que futbolistes, a més, l’èxit i la projecció de <a href="http://www.dalealplay.com/informaciondecontenido.php?con=483644" target="_blank" rel="noopener">la cuina peruana</a> estan assegurades. Farem un primer tast d’aquesta interessant gastronomia amb el <i>ceviche</i>, el seu plat més representatiu, considerat fins i tot patrimoni cultural de la nació. Això sí: per eludir la responsabilitat i els eventuals conflictes que puguin derivar-se d’algun ingredient inapropiat o procediments poc canònics, vagi per endavant que la nostra és una humil versió dels Sopars de duro. Boníssima, però de l’Eixample.',
      },
    ],
    cost: 'Cost aproximat per ració: 2,20 €.',
    unitCost: 2.2,
    ingredients: [
      {
        ul: [
          '450 g de filets d’halibut o un altre peix blanc de carn ferma.',
          '1 ceba vermella grossa',
          '3 llimes',
          '4-5 patates',
          '1 bitxo triturat o 1 cullerada sopera de <i>sambal oelek</i>',
          '1 cullerada sopera de <a href="http://ca.wikipedia.org/wiki/Pebrer_del_Brasil" target="_blank" rel="noopener">pebre rosa</a>',
          '4 beines de cardamom',
          '6 cullerades soperes d’oli d’oliva',
          '1 culleradeta de sucre',
          'Sal',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Posem les patates a coure amb la pell, durant uns 15 minuts (o 20, si són grosses).',
          'Tallem la ceba ben fina. La posem a estovar en un bol amb aigua (que tot just la cobreixi) i una culleradeta de sucre.',
          'Tallem el peix a daus d’uns 2 cm i el posem en un bol amb aigua i glaçons de gel. Això farà que el peix tingui una consistència més ferma i no s’engruni.',
          'Mentrestant, en una paella amb una mica d’oli, posem els grans de pebre rosa i les beines de cardamom obertes. Ho deixem 2 minuts i apaguem el foc.',
          'Afegim a la paella la resta de l’oli i la ratlladura de 1/2 llima. Reservem.',
          'Espremem les llimes.',
          'Escorrem el peix i la ceba. Els posem a marinar en el suc de llima, durant 15 minuts, a la nevera.',
          'Un cop ben fredes, pelem les patates i les tallem a rodanxes. Les disposem en un plat (preferiblement dins un motlle, per posar-hi el peix al damunt). Salem i condimentem amb el bitxo.',
          'Escorrem el peix, reservant part de la marinada.',
          'Disposem el peix damunt de la patata.',
          'Emulsionem dues cullerades de marinada amb l’oli que teníem reservat i amanim el ceviche amb aquesta vinagreta.',
          'Servim ben fred.',
        ],
      },
    ],
    variants: [
      {
        p: 'El dia que vulgueu passar per alt el pressupost (cosa que cal fer de tant en tant), compreu mero. És el peix ideal per aquest plat. Heu de saber que el <em>ceviche</em> més genuí no porta patata, sinó moniato, i també coriandre picat en lloc del pebre rosa i cardamom. S’acostuma a servir amb amanida i quicos torradets.',
      },
    ],
    categories: ['segons'],
    tags: ['bitxo', 'ceba', 'ceviche', 'llima', 'peix'],
  },
  {
    id: 'broquetes-de-gall-dindi-i-pinya',
    createdAt: '2013-08-01T17:33:11+02:00',
    title: 'Broquetes de gall dindi i pinya',
    intro: [
      {
        p: 'Fa anys que trobem present la pinya en moltes preparacions amb carn; sobretot, de porc o corder, però també en plats de carns blanques com el pollastre o el gall dindi. Després ens han explicat que la pinya conté <a href="http://www.cuerpomente.es/aliado.jsp?ID=33290">bromelina</a>, un enzim que, entre altres virtuts, ajuda a trencar la molècula de les proteïnes i, per tant, a pair-les. Sense saber-ho, de manera inconscient ja ho fèiem bé: carn i pinya fan una parella excel·lent.',
      },
    ],
    cost: 'Cost aproximat per ració: 1,73 €.',
    unitCost: 1.73,
    ingredients: [
      {
        ul: [
          '600 g de pit de gall dindi',
          '1 pinya natural',
          '100 ml de salsa de soja',
          '150 ml de suc de taronja',
          '20 ml d’oli de sèsam',
          'Llavors de sèsam, sal',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Tallem la carn en daus d’uns 3 cm de costat.',
          'Barregem la salsa de soja amb el suc de taronja, i posem el gall dindi a macerar en aquest líquid durant un mínim de 2 hores.',
          'Tallem la pinya en trossos de la mateixa mida que la carn, aproximadament. Recollim el suc que pugui deixar anar.',
          'Escorrem el gall dindi, conservant la marinada.',
          'Composem 8 broquetes, alternant trossos de carn i de pinya.',
          'Les coem a la planxa, a foc viu.',
          'Posem en un cassó la resta de la marinada, junt amb el suc que hem recollit en tallar la pinya. Fem reduir aquest líquid a la meitat.',
          'Servim les broquetes amb la salsa per sobre, i un pessic de llavors de sèsam.',
        ],
      },
    ],
    variants: [
      {
        p: 'Les broquetes es poden fer al forn. (En aquest cas, les courem uns 15 minuts a 200 °C. I si veiem que queden eixutes, entreobrim la porta del forn i hi tirem per sobre unes cullerades de la marinada, abans de fer-la reduir). Jo les he servit sobre uns fideus d’arròs, però podeu acompanyar-les d’amanida, pasta a l’ou o arròs blanc. També podeu afegir un pebrot vermell, tallat a quadrats, alternat entre la pinya i el gall dindi.',
      },
    ],
    categories: ['carmanyola', 'segons'],
    tags: ['broquetes', 'carn', 'gall-dindi', 'pinya'],
  },
  {
    id: 'gaspatxo',
    createdAt: '2013-07-30T22:25:59+02:00',
    title: 'Gaspatxo',
    intro: [
      {
        p: 'Segurament trobarem persones que fan escarafalls del vi en tetra-brick i, malgrat això, només consumeixen el gaspatxo d’aquests envasos. Us sona? Per superar aquest estrany comportament, convé fer-lo a casa tres o quatre cops –els necessaris per anar ajustant els ingredients al propi gust– i comparar. Si, a més del sabor, tenim en compte el <i>chute</i> de licopè i vitamines que conté el gaspatxo casolà (substàncies molt més sexis que els conservants i additius de l’industrial), no trigarem en dir adéu als tetra-bricks, per sempre més!',
      },
    ],
    cost: 'Cost aproximat per ració: 0,75 €.',
    unitCost: 0.75,
    ingredients: [
      {
        ul: [
          '1 kg de tomàquets ben madurs (tipus pera o de penjar)',
          '1/2 pebrot verd',
          '1/2 pebrot vermell',
          '1/2 cogombre',
          '1/2 ceba tendra grossa (o 1 de petita)',
          '1 gra d’all',
          '100 ml d’oli d’oliva',
          '3 cullerades de vinagre de xerès',
          'Sal',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Trossegem els tomàquets i n’eliminem la part més dura del mig. Els posem junt amb els pebrots al got de la batedora i triturem.',
          'Colem per eliminar les pells.',
          'Pelem i trossegem la ceba i el cogombre, i també els triturem.',
          'Ho batem tot junt amb l’oli i el vinagre. Salem i tastem per rectificar, si cal.',
          'Posem el gaspatxo unes hores a la nevera i el servim ben fred. Podem acompanyar-lo amb trossets de pa torrat i verdura picada.',
        ],
      },
    ],
    variants: [
      {
        p: 'És habitual incorporar al gaspatxo un parell de llesques de pa remullat, i també afegir-hi una mica d’aigua perquè no espesseixi massa. Feu-lo al vostre gust. Només cal consultar l’entrada “<a href="http://es.wikipedia.org/wiki/Gazpacho" target="_blank" rel="noopener">gazpacho</a>” a la wikipèdia per veure que és un plat amb infinites versions –i totes, bones. L’única condició és que el tomàquet sigui ben madur i saborós. Per això és impensable fer gaspatxo fora de temporada.',
      },
    ],
    categories: ['primers'],
    tags: ['all', 'ceba', 'cogombre', 'gaspatxo', 'pebrot', 'tomaquet'],
  },
  {
    id: 'pastis-de-llimona',
    createdAt: '2013-07-29T19:12:14+02:00',
    title: 'Pastís de llimona',
    intro: [
      {
        p: 'Quan el termòmetre de casa marca 30 °C, no ve gens de gust encendre el forn. Per sort, la naturalesa juga a favor dels cuiners i fa que a l’estiu també es prefereixin els plats lleugers, refrescants, que no requereixen cocció. És el cas d’aquest pastís, facilíssim de preparar i que qualla tot sol amb unes horetes a la nevera. Si teniu criatures a casa, és un pastís ideal per fer plegats (i menjar-lo després per berenar, naturalment!).',
      },
    ],
    cost: 'Cost aproximat per ració: 0,96 € (en surten 8 racions).',
    unitCost: 0.96,
    ingredients: [
      {
        ul: [
          '120 g de mantega',
          '275 g de galetes tipus Speculoos',
          '2 llimones',
          '270 g (1 pot) de formatge Philadelphia',
          '350 g de nata',
          '175 g de sucre blanc',
          '2 ous',
          '6 fulls de gelatina',
          'Unes fulletes de melissa',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Fonem la mantega a foc baix.',
          'Triturem les galetes amb la picadora. (Si no en tenim, les posem en una bossa de plàstic resistent i passem el corró pel damunt). Barregem les galetes triturades amb la mantega.',
          'Posem un tros de paper de forn sobre el fons d’un motlle desmuntable de 24-26 cm de diàmetre.',
          'Cobrim la base del motlle amb la barreja de galeta i mantega. Refredem a la nevera durant 2 hores.',
          'Posem a estovar la gelatina.',
          'Ratllem la pell d’una llimona i mitja i en fem suc. Reservem la mitja llimona restant per decorar el pastís.',
          'En un bol, barregem la ratlladura de llimona amb el sucre, els ous i el formatge.',
          'Posem el suc de llimona en un cassó a foc molt baix i hi tirem la gelatina escorreguda. Tan bon punt la gelatina s’hagi desfet, aboquem el contingut del cassó al bol, tot remenant.',
          'Deixem refredar uns 45 minuts.',
          'Muntem la nata. Amb unes varetes, la incorporem delicadament a la barreja anterior i ho aboquem tot al motlle, sobre la base de galeta que ja estarà ben freda.',
          'Tornem a la nevera i deixem que es consolidi la massa, un mínim de 3 hores. L’ideal és consumir el pastís l’endemà.',
          'Decorem amb rodanxes de llimona i fulletes de melissa.',
        ],
      },
    ],
    variants: [
      {
        p: 'Es pot substituir la llimona per 2 llimes, o bé per una taronja (rebaixant una mica la quantitat de sucre, en aquest cas). També es poden utilitzar motlles individuals i servir els pastissets amb una salsa de xocolata negra.',
      },
    ],
    categories: ['postres'],
    tags: ['formatge', 'llimona', 'nata', 'pastis'],
  },
  {
    id: 'crema-de-pastanaga',
    createdAt: '2013-07-18T19:53:49+02:00',
    title: 'Crema de pastanaga',
    intro: [
      {
        p: 'La pastanaga és una hortalissa rica en beta-carotè i pobra en calories. Bona per la pell i bona per la línia, doncs. I a més, és barata, el què la converteix en un ingredient bàsic a la cuina dels Sopars de duro. Tanmateix, té un sabor entre dolç, insípid i familiar, que la converteix en el Kevin Costner de l’horta. Per donar-li aquell punt canalla que demana a crits, li hem afegit gingebre, un condiment que aconsegueix convertir la pastanaga en un ingredient interessant.',
      },
    ],
    cost: 'Cost aproximat per ració: 0,88 €.',
    unitCost: 0.88,
    ingredients: [
      {
        ul: [
          '6 pastanagues',
          '1 ceba tendra',
          '100 ml de llet de coco',
          '1 cullerada de gingebre fresc ratllat',
          '1 l de brou de pollastre',
          '4 cullerades d’oli d’oliva',
          'Sal',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Pelem i tallem la ceba. La posem en una olla gruixuda amb oli i un pessic de sal i la sofregim durant 5 minuts.',
          'Abans que agafi color, hi afegim la pastanaga, que haurem tallat a trossos d’un dit d’ample.',
          'Quan la verdura estigui amorosida, hi afegim el gingebre i la llet de coco. Remenem perquè s’acoblin els sabors.',
          'Aleshores hi aboquem el brou. Tapem l’olla i esperem que arrenqui el bull.',
          'Passada mitja hora, apaguem la flama i triturem amb la batedora.',
          'Corregim de sal, si convé, i deixem refredar.',
          'Servim la crema freda.',
        ],
      },
    ],
    variants: [
      {
        p: 'Podeu servir la crema de pastanaga amb uns talls ben prims de pernil serrà passats per la paella, o bé amb una mica de coriandre trinxat, o amb unes gotetes d’oli cru per damunt. Si voleu menjar aquesta crema calenta, jo substituiria el gingebre fresc per una cullerada de curri.',
      },
    ],
    categories: ['primers'],
    tags: ['coco', 'crema', 'gingebre', 'pastanaga'],
  },
  {
    id: 'guacamole',
    createdAt: '2013-07-14T19:11:10+02:00',
    title: 'Guacamole',
    intro: [
      {
        p: 'El guacamole és un plat molt indicat per l’estiu, quan no apeteix estar a la cuina amb els fogons en marxa. És refrescant, fàcil de preparar i adaptable al gust de cadascú. Tret de l’alvocat, no hi ha ingredients fixos ni proporcions que calgui respectar al peu de la lletra. Per això, el meu guacamole no està triturat, sinó que té els ingredients tallats a daus (tal com el preparen a Nicaragua), però porta bitxo i ceba estamordida. El motiu? Que així està boníssim!',
      },
    ],
    cost: 'Cost aproximat per ració: 0,57 €.',
    unitCost: 0.57,
    ingredients: [
      {
        ul: [
          '2 alvocats madurs',
          '1 tomàquet',
          '1 ceba morada',
          '1 llima',
          '3-4 brins de coriandre',
          '1 culleradeta de bitxo triturat o <i>sambal oelek</i>',
          '1 1/2 cullerada de vinagre',
          '1 cullerada d’oli',
          'Sal',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Barregem l’oli, el vinagre i la sal en un bol.',
          'Tallem la ceba a daus d’entre 0,5 i 1 cm. i la deixem reposar en la barreja anterior durant 10 min.',
          'Mentrestant, tallem el tomàquet en daus de mida similar i n’eliminem les llavors.',
          'Pelem i tallem l’alvocat. N’aixafem la meitat amb una forquilla.',
          'Piquem finament el coriandre.',
          'Escorrem la ceba i ho barregem tot junt. Hi afegim la cullerada de bitxo.',
          'Amanim el guacamole amb el suc d’una llima i un polsim de sal.',
          'Servim fresc, amb torrades molt fines o <i><a href="http://es.wikipedia.org/wiki/Totopo" target="_blank" rel="noopener">totopos</a></i>.',
        ],
      },
    ],
    variants: [
      {
        p: 'El guacamole és un excel·lent entrant o <i>dip</i>, que també podeu fer servir com a guarnició d’un plat de peix. Si us agrada, afegiu mitja culleradeta de comí en pols per condimentar-lo. També el podeu fer més consistent amb un parell d’ous durs tallats a quadradets.',
      },
    ],
    categories: ['primers'],
    tags: ['alvocat', 'bitxo', 'ceba', 'llima', 'tomaquet'],
  },
  {
    id: 'kouign-amann',
    createdAt: '2013-07-10T20:40:59+02:00',
    title: 'Kouign amann',
    intro: [
      {
        p: 'Lluny de les modes que han abduït la població <i>maripili</i> de mitja Europa, a les pastisseries sortosament perviuen dolços tradicionals i autèntics com el flaó, la <em>biscotxa</em>, la <em>quesada</em>, o aquest d’origen bretó: el <em>kouign amann</em>. Són pastissos sense traces de <i>frostings</i>, <i>royal icings</i> o fondants que tant em recorden el <a href="https://en.wikipedia.org/wiki/Play-Doh" target="_blank" rel="noopener">Play doh</a>. D’aspecte rústic i aroma gloriós, els pastissos que m’agraden només necessiten quatre ingredients bàsics i una mica de paciència. El <em><a href="http://fr.wikipedia.org/wiki/Kouign-amann" target="_blank" rel="noopener">kouign amann</a></em> (pastís de mantega, en l’idioma bretó) és un dels meus preferits.',
      },
    ],
    cost: 'Cost aproximat per ració: 0,28 € (en surten 8 racions).',
    unitCost: 0.28,
    ingredients: [
      {
        ul: [
          '250 g de farina',
          '150 g de mantega salada de bona qualitat i freda de la nevera. Si no en tenim de bretona, que sigui <a href="http://www.kerrygold.com/es/products/irish-butter">Kerrygold</a>.',
          '175 g d’aigua tèbia',
          '150 g de sucre',
          '12 g de llevat fresc',
          '5 g de sal',
          'Un pessic de sal en escates',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Posem la farina en un bol gros.',
          'Hi afegim aigua de manera gradual, tot pastant amb els dits, fins que la farina l’hagi absorbida tota. Deixem reposar la massa 5 minuts dins el bol (mentre ens rentem les mans, que estaran ben enganxifoses).',
          'Enfarinem una mica el marbre i pastem la massa igual que si féssim pa. Passats uns 5 minuts, quan sembli que “s’estripa”, la tapem amb un drap humit i deixem reposar 10 min. Alternem aquest cicle de pastat i descans uns cinc o sis cops (siguem pacients, que val la pena…).',
          'Quan la massa sigui ben llisa, hi fem un clot per posar-hi el llevat, que haurem esgrunat i dissolt en una cullerada d’aigua tèbia.',
          'Tornem a pastar fins que el llevat estigui ben repartit. La massa no s’ha d’enganxar gens al marbre. Insistim i la treballem una estona més, si fos així.',
          'Tornem la massa al bol, lleugerament enfarinat, i la tapem amb un drap perquè reposi. Al cap d’1 hora haurà doblat el seu volum i l’estirarem.',
          'Enfarinem el marbre un altre cop i, amb el corró, formem un rectangle d’uns 0,6 cm d’espessor.',
          'Tallem a làmines la meitat de la mantega i la disposem sobre el terç central del rectangle (com si cobríssim la franja blanca de la bandera francesa, vaja). La mantega ha d’estar el més freda possible.',
          'Al damunt de la mantega hi repartim 50 g de sucre i un pessic de sal en escates.',
          'Pleguem la massa com si fos un tríptic. La girem 90° en sentit de les agulles del rellotge i tornem a plegar de la mateixa manera. Emboliquem la massa amb paper film i deixem 30 minuts a la nevera.',
          'Passat aquest temps, enfarinem el marbre amb sucre. Hi col·loquem la massa girant uns altres 90° (és a dir, que si abans l’últim plec ens havia quedat a la dreta, ara hauria de mirar cap a baix), i la tornem a estirar amb el corró per formar un nou rectangle.',
          'Igual que abans, posem al mig la mantega restant, 50 gr. de sucre, sal i la dobleguem en tres parts, dos cops. Es torna a tapar i a refrigerar.',
          'Podríem fer més plecs, repartint la mantega i el sucre en funció de les vegades que dobleguem la massa. (Quants més cops, més capes es crearan). Si volguéssim reservar la massa per coure-la l’endemà, només caldria esperar que agafés temperatura ambient abans de donar-li la forma final.',
          'En fer l’últim plegat, aplanem una mica la massa, li donem una forma arrodonida i la tornem a la nevera uns 10 minuts.',
          'Mentrestant, escalfem el forn a 220 graus.',
          'Untem un motllo rodó (de 20 – 23 cm, que no sigui de fons desmuntable, perquè la mantega pot gotejar) i espolsem la base amb sucre.',
          'Posem la massa al motllo, sense que arribi a tocar les vores. Amb un ganivet esmolat, fem uns talls en forma de reixa, que no arribin a baix.',
          'Espolsem el <em>kouign amann</em> amb sucre. Hi aboquem també un parell de cullerades de mantega fosa (o 50 ml de llet sencera, si de sobte us heu adonat de les calories que té…).',
          'El coem durant 45 minuts, fins que la part superior estigui caramel·litzada.',
          'El mengem tebi, el mateix dia que es cou.',
        ],
      },
    ],
    variants: [
      {
        p: 'El <em>kouign amann</em> de Douarnenez té fins i tot una denominació d’origen per garantir que la recepta és genuïna. Davant d’això, el meu únic suggeriment és que, en lloc de fer-ne un de gros, en feu uns quants de ració individual. Només cal estendre la massa, dividir-la en quadrats i plegar les cantonades de cada quadrat cap al centre, per arrodonir la forma. Poseu els petits <em>kouign amann</em> en motlles de <i>muffin</i> i coeu-los durant 35 minuts.',
      },
    ],
    categories: ['berenar', 'postres'],
    tags: ['farina', 'kouign-amman', 'mantega', 'sucre'],
  },
  {
    id: 'amanida-despinacs-raim-i-taronja',
    createdAt: '2013-07-08T13:52:24+02:00',
    title: 'Amanida d’espinacs, raïm i taronja',
    intro: [
      {
        p: 'Les amanides són plats sense cocció ni complicacions. La gràcia és que els ingredients siguin frescos, saborosos, tractats amb cura, i que el conjunt resulti harmoniós al gust i a la vista. Permeten doncs infinites combinacions i només tenen vedat un ingredient: la monotonia.',
      },
    ],
    cost: 'Cost aproximat per ració: 0,55 €.',
    unitCost: 0.55,
    ingredients: [
      {
        ul: [
          '150 g d’espinacs baby',
          '40-50 grans de raïm',
          '2 cebes tendres',
          '2 taronges',
          '50 ml d’oli d’oliva verge extra',
          '2 cullerades de sucre',
          '2 cullerades de suc de llimona',
          'Sal i un pessic de pebre',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Netegem els espinacs i els posem a la plata. Hi afegim la ceba tallada a bastonets.',
          'Pelem i tallem els gallons de taronja, <a href="https://www.youtube.com/watch?v=ZTuOjXXqQJ4">eliminant tota la part blanca</a> i recollint el suc que puguin deixar anar.',
          'Partim els grans de raïm pel mig. Incorporem les fruites a l’amanida.',
          'Fem una vinagreta amb els 4 últims ingredients i el suc de tallar les taronges.',
          'Amanim i servim el plat immediatament, ben fresc.',
        ],
      },
    ],
    variants: [
      {
        p: 'Si no us agraden els espinacs crus, podeu utilitzar enciam Lollo rosa o de fulla de roure.  A l’hivern, us recomano que feu aquesta amanida amb <a href="http://www.hortetdelbaix.com/ca/comprar/frutas-y-verduras/escarola/escarola/escarole">escarola</a>, de gust una mica més amargant i que lliga de meravella amb la taronja.',
      },
    ],
    categories: ['primers'],
    tags: ['ceba-tendra', 'espinacs', 'raim', 'taronja'],
  },
  {
    id: 'galetes-de-castanya',
    createdAt: '2013-07-06T10:49:39+02:00',
    title: 'Galetes de castanya',
    intro: [
      {
        p: 'Ens pensem que són de xocolata, però tan bon punt mosseguem una d’aquestes galetes, a la boca se’ns desperta un regust de bosc garrotxí, de ventada de novembre. La castanya! Aquest fruit de tardor, en un discret segon pla, s’alia amb el (pre)potent aroma de la xocolata i ens regala unes galetes diferents, cremoses i elegants.',
      },
    ],
    cost: 'Cost aproximat per persona: 0,85 €.',
    unitCost: 0.85,
    ingredients: [
      {
        ul: [
          '125 g de mantega a temperatura ambient',
          '250 g de puré de castanyes (en trobareu al Lidl o a <a href="http://lavalenciana.com/tienda/mieles-y-mermeladas/345-pur-de-casta%C3%B0as-bote-de-245-grs.html" target="_blank" rel="noopener">Parami</a>)',
          '125 g de xocolata negra per postres',
          '75 g de sucre de llustre, i una mica més per decorar',
          '2 rovells d’ou',
          '200 g de farina',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Fonem la xocolata al bany Maria.',
          'Batem la mantega amb unes varetes.',
          'Barregem la mantega, el puré de castanyes, el sucre de llustre, la xocolata fosa i els rovells.',
          'Remenem enèrgicament amb les varetes.',
          'Gradualment, hi tamisem la farina, sense deixar de remenar. Hem d’obtenir una mescla ben llisa, sense ni un grumoll.',
          'Engeguem el forn a 170 °C sense ventilador.',
          'Posem paper per al forn o làmines de silicona en dues safates.',
          'Intoduïm la massa en una mànega pastissera.',
          'Amb una boquilla mitjanament grossa, fem galetes en forma de ziga-zaga.',
          'Les coem al forn durant 30 minuts.',
          'En acabar, les deixem refredar fora del forn a la mateixa safata on s’han cuit. Un cop fredes, les decorem amb una mica de sucre de llustre per damunt i servim.',
        ],
      },
    ],
    variants: [
      {
        p: 'Com alternativa al puré de castanyes, podeu utilitzar qualsevol de les <a href="http://www.vicensonline.com/es/especialidades-vicens/crema-de-turron.html" target="_blank" rel="noopener">cremes de torró</a> que elaboren els Vicens d’Agramunt (i que, tot sigui dit, guanyen per golejada a aquella famosa crema per sucar el pa…) Us llepareu els dits!',
      },
    ],
    categories: ['berenar', 'postres'],
    tags: ['castanyes', 'galetes', 'xocolata'],
  },
  {
    id: 'koftes-de-vedella',
    createdAt: '2013-07-03T11:01:10+02:00',
    title: 'Koftes de vedella',
    intro: [
      {
        p: 'Es podria dir que les <em>koftes</em> són simplement la versió forana de les nostres mandonguilles, igual que els <em>cantuccini</em> ho són dels carquinyolis o la <em>ratatouille</em> de la samfaina. Els països mediterranis, pel fet de tenir un clima i vegetació semblants, estan predestinats a compartir també algunes preparacions culinàries amb els pobles veïns. Això sí, el tarannà de les gents, igualment semblant, fa que cadascú reclami l’originalitat i superioritat del “seu” producte. Les <em>koftes</em>, generalment allargades, ens resulten exòtiques per l’aroma de la canyella, el comí i el cardamom. El <em>bulgur</em>, una mena de blat trossejat semblant al cuscús, és un ingredient cada cop més freqüent al nostre rebost.',
      },
    ],
    cost: 'Cost aproximat per ració: 0,89 €.',
    unitCost: 0.89,
    ingredients: [
      {
        ul: [
          '750 g de carn picada de vedella',
          '1/2 tassa de <em>bulgur</em>',
          '1 ceba',
          '1 gra d’all',
          '1 cullerada de postres de comí mòlt',
          '1 cullerada de postres de canyella en pols',
          '1/2 cullerada de cardamom triturat',
          '2 cullerades soperes de pinyons picats',
          '1 ou',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Posem el <em>bulgur</em> a remullar durant 1 hora.',
          'L’escorrem i el barregem en un bol amb tots els altres ingredients.',
          'Deixem reposar 30 minuts a la nevera.',
          'Dividim la barreja en 12 parts. Amb les mans, formem mandonguilles allargades. Les punxem en una broqueta.',
          'Les coem a la parrilla, a foc mig, per totes bandes.',
          'Les servim, en aquest cas acompanyades d’una amanida grega (tomàquet, cogombre, formatge feta i olives de Kalamata, amb oli d’oliva extra, orenga i escates de sal).',
        ],
      },
    ],
    variants: [
      {
        p: 'La versió més genuïna del plat ens demana substituir la vedella per una cuixa desossada de corder. Unes fulletes de menta triturada, en aquest cas, no hi queden gens malament. Podeu guarnir el plat amb qualsevol amanida fresca, escalivada, <em>tzatziki</em>, o un pa de pita.',
      },
    ],
    categories: ['carmanyola', 'segons'],
    tags: ['bulgur', 'carn', 'koftes', 'vedella'],
  },
  {
    id: 'crema-verda-de-verdura',
    createdAt: '2013-07-02T16:34:15+02:00',
    title: 'Crema verda de verdura',
    intro: [
      {
        p: 'Si, com jo, penseu que cuinar és una activitat creativa, us haureu adonat que les verdures són com els colors d’una paleta extremadament rica en matisos. Les cremes de verdures poden ser fredes, calentes, lleugeres, de diversos sabors i textures… Però sempre són senzilles i, més que qualsevol altre plat, us permeten jugar amb els colors. Us recordeu d’aquells <a href="http://ca.wikipedia.org/wiki/Cercle_crom%C3%A0tic" target="_blank" rel="noopener">cercles cromàtics</a> que fèiem a l’escola i que mai no acabaven de sortir del tot bé? Recupereu-los! Feu proves i descobriu  quina és l’única regla que haureu de seguir per obtenir unes cremes de color brillant i apetitós!',
      },
    ],
    cost: 'Cost aproximat per ració: 0,38 €.',
    unitCost: 0.38,
    ingredients: [
      {
        ul: [
          '1 carbassó gros',
          '1 ceba grossa',
          '350 g de pèsols (poden ser congelats)',
          '80 ml d’oli d’oliva verge extra',
          '1 fulla de llorer',
          'Julivert',
          'Sal',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Tallem la ceba i la posem en una marmita amb la meitat de l’oli, a foc baix.',
          'Abans que agafi color, hi afegim el carbassó tallat a trossos irregulars. Salem i deixem uns minuts més.',
          'Finalment, hi afegim els pèsols, la fulla de llorer i aprox. 1 litre d’aigua.',
          'Tapem i deixem que bulli 30 minuts.',
          'Passat aquest temps, tastem de sal i rectifiquem si és necessari. Triturem amb la batedora i hi aboquem un manat de julivert picat.',
          'Servim amb un raig d’oli cru.',
        ],
      },
    ],
    variants: [
      {
        p: 'A l’estiu podeu prendre aquesta crema freda, i afegir-hi uns daus de meló o de pera cinc minuts abans d’acabar la cocció. Si, per contra, la voleu calenta i consistent, afegiu-hi patata junt amb els pèsols. Sobretot, mai no hi poseu pastanaga!',
      },
    ],
    categories: ['primers'],
    tags: ['carbasso', 'ceba', 'crema', 'pesols', 'verdura'],
  },
  {
    id: 'sorbet-de-raim',
    createdAt: '2013-07-01T13:26:17+02:00',
    title: 'Sorbet de raïm',
    intro: [
      {
        p: 'Fer gelats a casa és més fàcil del que sembla, i dóna molt joc. Els sucs de fruita, sols o combinats, són la base perfecta d’uns sorbets 100 % naturals, que posen una nota final d’excel·lent als àpats consistents. Heu sentit mai allò que “el sorbet ajuda a fer baixar…”? Certament, la sensació de frescor i lleugeresa que ens aporten aquestes postres fan que es puguin menjar tot i estar ben tips. El súmmum de la gola, vaja!',
      },
    ],
    cost: 'Cost aproximat per ració: 0,87 €.',
    unitCost: 0.87,
    ingredients: [
      {
        ul: ['1 kg de raïm negre', '150 g de sucre', '3 cullerades soperes de mel', '2 clares d’ou'],
      },
    ],
    prep: [
      {
        ol: [
          'Rentem el raïm i, armats de paciència i un ganivet, n’eliminem totes les llavors.',
          'Per tandes, triturem el raïm amb la batedora.',
          'Colem, i llencem les pells. Us quedaran aproximadament uns 600 ml de suc.',
          'Hi posem sucre i mel, ajustant les quantitats al nostre gust.',
          'Batem dues clares d’ou i les hi afegim, tot remenant.',
          'Si tenim geladera, hi aboquem aquesta barreja i deixem que el sorbet es faci sol.',
          'Si no tenim geladera, la posem en un recipient metàl·lic al congelador (us anirà bé una safata de <i>lasagne</i>, per exemple, o una cassola). Tapem i esperem una hora. Cada 30-40 minuts, anem trencant el gel amb la batedora i tornem el recipient al congelador. Repetim aquesta operació 4 o 5 vegades, o fins que la consistència del sorbet sigui apetitosa.',
        ],
      },
    ],
    variants: [
      {
        p: 'Aquest sorbet es pot fer amb altres sucs de fruita: taronja, mandarines, síndria, meló…, i amb unes fulletes de menta triturades. A la canalla el podem servir amb una cullerada de caramel o coulis de xocolata. Als més grandets, també amb un rajolí de licor tipus Kirsch, Cointreau, Grand Marnier… Sobretot, no poseu cap licor en la barreja inicial, ja que l’alcohol impedirà que es congeli.',
      },
    ],
    categories: ['postres'],
    tags: ['gelat', 'raim', 'sorbet'],
  },
  {
    id: 'fish-and-chips',
    createdAt: '2013-06-29T20:20:40+02:00',
    title: 'Fish and chips',
    intro: [
      {
        p: 'Cada cop que vaig a Londres, i després de visitar el matrimoni Arnolfini, entro en un Boots, al Waterstone’s de Piccadilly, i vaig a un pub a menjar <i>fish and chips</i>. El primer cop que ho vaig fer (menjar <i>fish and chips</i>) va ser als 16 anys, quan els de sanitat encara no havien prohibit servir-lo en paperines de diari. Me’l menjava pel carrer i els dits em quedaven oliosos i pudents, cosa que llavors m’importava ben poc. És un plat bàsic i popular. I em transporta igual que a Proust la flaire de les magdalenes. Sortosament, per treure’m les ganes de <i>fish and chips</i>, no em cal anar gaire lluny: una visita al mercat, deu minuts a la cuina, i resolt!',
      },
    ],
    cost: 'Cost aproximat per ració: 2,15 €.',
    unitCost: 2.15,
    ingredients: [
      {
        ul: [
          '4 talls de bacallà fresc',
          '4 patates grosses',
          '150 g de <i>panko</i> o pa ratllat fet a casa (triturat gruixut)',
          '1 cullerada sopera de curri suau',
          '2 cullerades soperes de farina',
          '1 ou',
          'Oli de gira-sol',
          'Vinagre de malta',
          'Sal',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Pelem i tallem les patates en tires d’un dit de gruix. Les posem sota l’aixeta per eliminar part del midó.',
          'Si tenim temps per endavant, les deixem cobertes d’aigua durant un parell d’hores.',
          'Mentrestant, eixuguem bé el bacallà.',
          'Mesclem la farina amb el curri i enfarinem els talls de bacallà.',
          'Els passem tot seguit per l’ou batut i finalment els arrebossem amb el <i>panko</i>. Reservem.',
          'Escorrem i eixuguem bé les patates amb un drap.',
          'Les fregim en abundant oli calent, fins que estiguin al nostre gust.',
          'Les deixem damunt de paper de cuina, per absorbir l’excés d’oli.',
          'Fregim tot seguit el peix, fins que l’arrebossat agafi un to daurat.',
          'Salem les patates i les amanim amb unes gotetes de vinagre de malta. Servim ben calent.',
        ],
      },
    ],
    variants: [
      {
        p: 'Podeu substituir el bacallà d’aquest plat per halibut, ja que té una carn bastant compacta, que no s’esmicola. Queda prou bé i és més econòmic. Serviu el plat amb maionesa (o salsa tàrtara) a part. Una bona cervesa, i una pel·lícula de Joseph Losey (nord-americà, per bé que atípic…) faran un trio ideal amb aquest plat.',
      },
    ],
    categories: ['segons'],
    tags: ['bacalla', 'patata', 'peix'],
  },
  {
    id: 'coca-de-sant-joan',
    createdAt: '2013-06-23T20:01:20+02:00',
    title: 'Coca de Sant Joan',
    intro: [
      {
        p: 'La coca no és un simple dolç. Amb la coca celebrem una fita anual en què s’autoritza la desobediència i es recomana la despreocupació; una nit de revetlles als terrats i de fogueres a la platja, tan distant de Nadal en el calendari com en l’esperit. La coca acompanya la diada dels saurins, dels recol·lectors d’herbes i de tots els pagans que, emparats sota el nom del sant, ens fan creure que celebrem una festa cristiana. Forma part doncs de la nostra tradició i del nostre subconscient col·lectiu com mai un <a href="http://www.guardian.co.uk/lifeandstyle/2013/jun/05/cronut-pastry-sensation-croissant-doughnut" target="_blank" rel="noopener">cronut</a> podrà fer-ho. Malaguanyada una revetlla sense coca, sense cava i sense una (certa) dosi de bogeria.',
      },
    ],
    cost: 'Cost aproximat per ració: 1,53 €.',
    unitCost: 1.53,
    ingredients: [
      {
        ul: [
          '275 g de farina de força',
          '60 ml de llet tèbia (30-40 °C)',
          '10 g de llevat de forner',
          '50 g de mantega fosa',
          '30-40 g de pinyons',
          'Fruita confitada variada',
          '3 ous',
          '120 g de sucre',
          '3 g de sal',
          '1 cullerada sopera d’aigua de taronger',
          '3 cullerades d’anís',
          'La pell ratllada de 1/2 llimona',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Dissolem el llevat en la llet tèbia. Hi afegim 30 g de farina, remenem i tapem el recipient amb un paper film.',
          'Deixem que fermenti en un lloc càlid (jo l’he embolicat amb un drap i l’he posat al sol). Esperem 30 min, o el temps necessari perquè dobli el volum i hi apareguin bombolles.',
          'Mentrestant, posem els pinyons a estovar en un got d’aigua (i així, al forn no es cremaran).',
          'En un bol gros, barregem la resta de farina amb la sal, 60 g de sucre i la ratlladura de llimona. Hi afegim la meitat de l’anís, l’aigua de taronger, la mantega fosa i 2 ous. Remenem amb una cullera de fusta, enèrgicament, durant uns 5 minuts. La pasta serà prou espessa per cansar-nos el braç, de manera que podem fer petites pauses.',
          'Hi afegim la massa fermentada i seguim remenant 5 minuts més. Ara la massa serà una mica més enganxosa.',
          'La deixem reposar dins el bol durant 1 hora o fins que dobli el seu volum.',
          'Aprofitem l’espera per tallar la fruita confitada i escórrer els pinyons.',
          'Amb l’ajuda d’una espàtula, aboquem la massa en una plata que haurem cobert amb un paper de forn o amb una làmina de silicona. L’estenem i li donem la forma que ens agradi. Deixem reposar 30-45 minuts més.',
          'Encenem el forn a 175 °C.',
          'Batem junts l’ou i l’anís que ens quedaven. Pintem la superfície de la coca amb aquest líquid. Hi col·loquem la fruita, els pinyons i uns grapadets de sucre (els 60 g restants).',
          'Coem la coca durant 25 min. Quan estigui cuita, la deixem refredar fora del forn.',
        ],
      },
    ],
    variants: [
      {
        p: 'Ja que la coca la feu vosaltres, podeu triar la fruita confitada que més us agradi, i no cal que escatimeu amb els pinyons. O fer-la només de pinyons, si la fruita no us entusiasma. O afegir matafaluga a la massa, si voleu un aroma més anisat… No us enganyaré: pastar la coca és pesat. Per això, menjar-la tal i com us agrada serà la vostra recompensa!',
      },
    ],
    categories: ['berenar', 'postres'],
    tags: ['coca', 'fruita', 'pinyons'],
  },
  {
    id: 'verat-amb-ve-baixa-i-escalivada',
    createdAt: '2013-06-22T12:06:37+02:00',
    title: 'Verat (amb ve baixa) i escalivada',
    intro: [
      {
        p: 'Les paraules homòfones són aquelles que es pronuncien igual, però cal escriure de diferent manera. Són molt útils per delatar els analfabets que, parlant, aconsegueixen dissimular la seva condició. (Si mai us envien un SMS preguntant “Haber que te apetece”, però, la vostra resposta ha de ser “Dejar de vernos”, i quan abans millor!). En el cas de <i>verat</i> (peix blau) i <i>barat</i> (adjectiu), el fet que aquest peix es caracteritzi precisament pel seu baix cost ha propiciat alhora una curiosa metonímia, que fa que alguns peixaters venguin un <i>barat</i> que també acostuma a ser el més ídem de la parada. Només us puc recomanar que en compreu (ara és l’època ideal) i el proveu. Els exemplars ressecs i plens d’espines que podeu haver menjat als restaurants de menú no li fan justícia.',
      },
    ],
    cost: 'Cost aproximat per ració: 1,20 €.',
    unitCost: 1.2,
    ingredients: [
      {
        ul: ['4 verats', '3 albergínies mitjanes', 'Oli d’oliva verge', 'Sal'],
      },
    ],
    prep: [
      {
        ol: [
          'Encenem els fogons i posem les albergínies directament sobre la flama. Les anem tombant perquè es facin per totes bandes.',
          'Les retirem del foc passats uns 10 minuts (depenent de la mida que tinguin), quan hagin adquirit una consistència flonja i la pell es comenci a desprendre.',
          'Emboliquem les albergínies amb un plec de papers de diari i deixem que es refredin.',
          'Les pelem sota el raig de l’aixeta, amb les mans. Les trossegem i en descartem les llavors.',
          'Amanim l’albergínia amb sal i oli i deixem que reposi una estona.',
          'Obrim els verats i <a href="http://www.youtube.com/watch?v=U2-vVg6T0bE" target="_blank" rel="noopener">els desespinem</a>. De cadascun en fem quatre filets, que podem tallar pel mig per fer-los més curts.',
          'Suquem una paella amb quatre gotes d’oli. Hi posem els filets per la part de la pell.',
          'Al cap d’1 minut els tombem i deixem que es facin 30 segons més. Que tot just canviïn de color!',
          'Servim el peix sobre l’albergínia escalivada.',
        ],
      },
    ],
    variants: [
      {
        p: 'Jo afegeixo a l’escalivada també un pebrot vermell. Incomprensiblement, no agrada a tothom i per això no l’he incorporat en aquesta recepta. Unes olives sevillanes i una copa de vi blanc a la temperatura adequada remataran amb èxit aquest plat tan estiuenc. Per degustar a la terrasseta amb pantalons curts.',
      },
    ],
    categories: ['carmanyola', 'segons'],
    tags: ['alberginia', 'peix', 'verat'],
  },
  {
    id: 'gyoza',
    createdAt: '2013-06-18T19:28:55+02:00',
    title: 'Gyoza',
    intro: [
      {
        p: 'Aquesta és la versió japonesa d’uns farcellets molt típics i estesos per tot l’extrem orient, que a la Xina anomenen jiaozi i mengen a tota hora. Cosins llunyans dels tortellini i dels panzerotti, són -com aquests- una menja deliciosa. Entretinguts, sí. Però gens difícils de fer. Si més no, si teniu un supermercat asiàtic a la vora i podeu aconseguir els ingredients*.',
      },
    ],
    cost: 'Cost aproximat per ració: 1,25 €.',
    unitCost: 1.25,
    ingredients: [
      {
        ul: [
          '200 g de col',
          '150 g de carn picada (barreja de porc i vedella)',
          '1 paquet d’oblies per fer <i>gyoza</i> o <i>dumplings</i> (les trobareu congelades)',
          '3 alls tendres',
          '3 cullerades d’oli de gira-sol',
          '1 gra d’all',
          'Un tros de gingebre de la mida d’un gra de raïm',
          '1 cullerada de mirin',
          '1 cullerada de salsa d’ostres',
          '1 cullerada de fècula de patata o de Maizena',
          '1/2 cullerada de salsa de soja',
          '1/2 cullerada d’oli de sèsam',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Unes hores abans, haurem tret el paquet d’oblies del congelador, sense obrir-lo.',
          'Tallem la col en juliana. La deixem reposar 10 minuts en un bol amb sal.',
          'Trinxem l’all tendre, descartant només les arrels i els últims 5-6 cm.',
          'Piquem també el gra d’all i el gingebre. Els barregem amb la carn picada.',
          'Afegim a la carn els 5 últims ingredients. Pastem fins obtenir una massa homogènia.',
          'Maseguem la col sense miraments perquè perdi aigua. Això farà també que sigui més tova.',
          'Afegim la col i l’all tendre a la pasta de carn, i ho barregem tot.',
          'Deixem reposar aquesta massa 1 hora a la nevera.',
          'Preparem un bol amb aigua i obrim el paquet d’oblies, que ja estaran descongelades. Sintonitzem també una emissora de ràdio que ens agradi.',
          'Ens posem una oblia a la palma de la mà. Hi dipositem una culleradeta de massa al mig, fent atenció a no excedir-nos. Suquem  un dit o un pinzell en aigua i humitegem la vora de l’oblia, per segellar-la.',
          '<a href="http://www.youtube.com/watch?v=QhAcCx6Je-E" target="_blank" rel="noopener">Formem els <em>gyoza</em></a> donant-los forma de <i>peineta</i>. Els anem dipositant sobre un paper de forn lleugerament enfarinat.',
          'Quan haguem acabat les oblies o la massa (perquè mai no s’acaba tot a la vegada…), ens preparem per coure els <i>gyoza</i>.',
          'Posem oli de gira-sol en una paella. Hi disposem els <em>gyoza</em> en dues rotllanes concèntriques, o de la manera que quedin més ordenats i s’aprofiti millor la superfície de cocció.',
          'Amb la paella destapada i a foc mig, els fem daurar durant uns 2 minuts.',
          'Quan agafin color i els surtin butllofes a la base, hi aboquem 1/2 got d’aigua bullint, a poc a poc i amb cura que no ens esquitxi.',
          'Tapem la paella i deixem coure 5-6 minuts o fins que s’evapori l’aigua. Ja els podem servir!',
        ],
      },
    ],
    variants: [
      {
        p: 'Com alternativa a la cocció mixta que us proposem, també trobareu <i>gyoza</i> fregits, bullits o cuits al vapor. S’acostumen a servir com a entrant, amb brou (els bullits) o amb una salsa de soja i vinagre per poder-los sucar. Tot i que la carn del farcit més tradicional és de porc 100 %, jo prefereixo barrejar-la amb vedella. De fet, amb el farcit es pot experimentar tant com es vulgui, substituint la carn per gambes o provant altres combinacions de verdures. Fins i tot, hi ha <i>gyoza</i> dolços!',
      },
    ],
    extras: [
      {
        p: '* Aquests són els supermercats asiàtics de Barcelona on acostumo a comprar, ordenats segons la meva preferència:',
      },
      {
        ul: [
          '<strong>Dong Fang</strong> – C. Balmes, 6. El més antic i freqüentat, amb molta varietat de productes. Tenen algunes verdures fresques.',
          '<strong>Yang Kuang</strong> – Passeig de Sant Joan, 12. El més gran (i destartalat). Tenen productes frescos, inclosa carn.',
          '<strong>Tokyo Ya</strong> – C. Girona, 119. Només productes japonesos. Sense producte fresc. <a href="http://tokyo-ya.es/tienda/" target="_blank" rel="noopener">Venda online</a>',
          '<strong>Oriental Market</strong> – C. Sicilia, 212. El més bonic, i també el més car. Poca varietat. No tenen productes frescos, però tenen complements i objectes de regal de bon gust. <a href="http://www.orientalmarket.es/shop/" target="_blank" rel="noopener">Venda online</a>',
          '<strong>Supermercado Honesto</strong> – C. Diputació, 342. Tenen productes frescos, però mai no m’he atrevit a comprar-ne.',
        ],
      },
    ],
    categories: ['carmanyola', 'primers'],
    tags: ['alls-tendres', 'asia', 'carn', 'col', 'porc'],
  },
  {
    id: 'amanida-de-tomaquet-i-crostons',
    createdAt: '2013-06-13T16:24:40+02:00',
    title: 'Amanida de tomàquet i crostons',
    intro: [
      {
        p: 'Un cop hem servit el tomàquet amanit, a la plata hi queda un líquid saladet, barreja de l’aigua que desprèn el tomàquet i de l’oli d’oliva i la sal amb què l’amanim. Algú es pot resistir a sucar-hi pa? Xopar la molla i escurar la plata que contenia el tomàquet és un d’aquells petits plaers que bé podria descriure <a href="http://www.labutxaca.cat/ca/llibre/el-primer-glop-de-cervesa_12074.html">Delerm</a> en un dels seus llibres. Si més no, per mi… Doncs bé, l’amanida d’avui vol recrear la mateixa experiència. El fet que els crostons estiguin incorporats dins el mateix plat fa que tothom en pugui gaudir; fins i tot, aquells que creuen que sucar pa és de mala educació i serien capaços d’abstenir-se’n. Pobrets!',
      },
    ],
    cost: 'Cost aproximat per ració: 1,25 €.',
    unitCost: 1.25,
    ingredients: [
      {
        ul: [
          '16 tomàquets pera petits',
          '2 cebes morades',
          '4 llesques gruixudes de pa sec, tallades a daus',
          '300 g de formatge tipus feta',
          '1 ceba tendra',
          'Unes tires de pebrot vermell (opcional)',
          'Oli d’oliva verge extra',
          'Vinagre de vi blanc',
          '1 gra d’all',
          '2 branquetes de timó, sal i un pessic de sucre',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Encenem el forn a 180 °C.',
          'Trossegem les cebes i els tomàquets i els dipositem en una safata de forn. Hi afegim el pebrot vermell tallat a tires primes.',
          'Ho amanim amb sal, un pessic de sucre, el timó esmicolat i l’all picat.',
          'Tirem un rajolí d’oli per sobre i ho posem al forn durant uns 20 minuts, fins que tomàquets i ceba es comencin a arrugar. Un cop fora del forn, deixarem que es refredin una mica.',
          'Mentrestant, preparem una vinagreta amb oli abundant, 5 o 6 cullerades de vinagre i una mica de ceba tendra tallada molt prima.',
          'Daurem també el pa en una paella.',
          'El barregem amb la ceba i el tomàquet, l’amanim amb la vinagreta i hi afegim el formatge engrunat. Llest per servir!',
        ],
      },
    ],
    variants: [
      {
        p: 'Si no teniu feta, podeu utilitzar formatge de cabra sec, o qualsevol altra varietat de massa friable. Si no sou gaire de formatges, proveu a substituir-lo per unes arengades o unes anxoves. En qualsevol dels casos, unes olives aragoneses o de Kalamata tampoc no hi quedarien gens malament.',
      },
    ],
    categories: ['primers'],
    tags: ['ceba', 'formatge', 'pa', 'tomaquet'],
  },
  {
    id: 'spaghetti-aglio-olio-e-peperoncino',
    createdAt: '2013-06-08T22:12:29+02:00',
    title: 'Spaghetti aglio, olio e peperoncino',
    intro: [
      {
        p: 'No em podia oblidar d’aquests <i>spaghetti</i>: són un primer plat barat, bo… i també molt ràpid i fàcil de preparar, amb ingredients que tots tenim a casa. Sort dels <i>spaghetti</i> <i>aglio, olio e peperoncino</i> quan es presenta gent sense avisar! O quan se’ns obre la gana en hores intempestives! O quan tornem de viatge, sense haver tastat res durant hores, i –nosaltres, tan pràctics– havíem aprofitat per descongelar la nevera! Després de la pasta <i>in bianco </i>(simplement bullida i amb una mica de mantega), probablement sigui la recepta més apropiada per qui s’estrena als fogons.',
      },
    ],
    cost: 'Cost aproximat per ració: 0,27 €.',
    unitCost: 0.27,
    ingredients: [
      {
        ul: [
          '400 g de <i>spaghetti</i>',
          '6 grans d’all',
          '10 <i>peperoncini</i> (<i>guindilla</i> seca)',
          'Uns 100 ml d’oli d’oliva verge extra',
          'Formatge parmesà o grana padano',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Posem al foc una olla amb aigua salada. L’ideal és 1 litre d’aigua i 10 g de sal per cada 100 g de pasta.',
          'Quan arrenqui el bull, hi tirem els <i>spaghetti</i>. Respectem el temps de cocció que s’indica al paquet.',
          'Mentrestant, escalfem l’oli en una paella.',
          'Hi posem els alls tallats a làmines fines i el <i>peperoncino</i> esmicolat. (Jo hi deixo les llavors, però si no us agrada gaire picant, les podeu treure).',
          'Retirem la paella del foc quan l’all es comenci a daurar.',
          'Colem els spaghetti i els posem a la paella amb l’oli calent. Remenem.',
          'Ratllem una mica de formatge parmesà per sobre de la pasta i servim immediatament.',
        ],
      },
    ],
    variants: [
      {
        p: 'El grau de picantor d’aquests spaghetti (ergo, la quantitat de peperoncini) s’ha d’ajustar al vostre gust. Feu proves. I, si no us agrada trobar trossets d’all al menjar (hi ha gent per a tot…), esclafeu-los amb un cop sec, poseu-los a la paella amb pell inclosa i retireu-los quan es comencin a torrar. Una alternativa barata i bona per substituir el formatge és un grapadet de pa ratllat.',
      },
    ],
    categories: ['primers'],
    tags: ['all', 'oli', 'pasta', 'peperoncino'],
  },
  {
    id: 'gallopinto',
    createdAt: '2013-06-06T19:09:15+02:00',
    title: 'Gallopinto',
    intro: [
      {
        p: 'Quan el Jaime, el meu cunyat, va entrar en la nostra família, hi van entrar també uns plats i uns sabors que fins aleshores mai no havíem tastat. A Barcelona no hi havia <i>colmados latinos</i>, i nosaltres desconeixíem l’ús (i fins i tot l’aspecte) d’algunes hortalisses i fruites exòtiques que ara trobem a tots els supermercats. Malgrat tot, alguns d’aquests menjars es van incorporar ràpidament i amb naturalitat als nostres menús. El primer a fer-ho va ser el <i>gallopinto</i>, un plat molt nutritiu que combina els dos productes bàsics de què s’alimenten els nicaragüencs: arròs i <i>frijoles</i>. Com a bon plat popular, atipa i és barat. Però ben cuinat, amb els frijoles vermells i l’arròs un punt torradets, us asseguro que no té res a envejar a altres plats (suposadament) més refinats.',
      },
    ],
    cost: 'Cost aproximat per ració: 0,38 €.',
    unitCost: 0.38,
    ingredients: [
      {
        ul: [
          '400 g d’arròs de gra llarg',
          '300 g de <i>frijoles</i> de Nicaragua (vermells i petits) ja cuits',
          '100 ml de l’aigua de cocció',
          '1 ceba',
          '1/2 pebrot verd',
          'Oli i sal',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'El <i>gallopinto</i> es prepara amb fesols ja cuits. Prèviament, doncs, els haurem deixat estovar durant 12 hores i els courem com qualsevol altre llegum, amb una olla exprés o convencional.',
          'En una cassola de cul gruixut, sofregim la ceba trinxada i una mica de pebrot verd. Hi afegim l’arròs i un volum doble d’aigua.',
          'Abaixem el foc fins al mínim. Amb la cassola ben tapada, deixem coure l’arròs 20 minuts, sense remenar-lo gens.',
          'Aboquem els <i>frijoles</i> en una paella amb oli i deixem que es fregeixin uns 5 minuts. Hi afegim una mica d’aigua de cocció.',
          'Finalment hi afegim l’arròs. El nom de <i>gallopinto</i> s’atribueix a la coloració del plat, que recorda la d’un gall amb plomes roges. Així doncs, barregem bé els ingredients fins aconseguir que tinguin aquest aspecte.',
        ],
      },
    ],
    variants: [
      {
        p: 'El gallopinto se serveix tradicionalment amb uns talls de plàtan mascle fregits, que podeu preparar tallant el plàtan en làmines fines (amb un pelador de patates, per exemple) i fregint-lo en oli vegetal fins que es comenci a torrar. Escoleu l’excés d’oli, saleu una mica, i cap al plat! Si no trobeu <i>frijoles</i> de Nicaragua, podeu substituir-los per uns de negres petits que venen a les botigues de <i>latinos</i>, o pels fesols vermells més grans que trobareu en qualsevol supermercat. Tot i que el resultat no és el mateix, dóna el <i>pego</i>.',
      },
    ],
    categories: ['plat-unic', 'primers'],
    tags: ['arros', 'frijoles', 'llegums', 'mongetes'],
  },
  {
    id: 'pollastre-amb-patates',
    createdAt: '2013-06-03T18:23:22+02:00',
    title: 'Pollastre amb patates',
    intro: [
      {
        p: 'En alguns restaurants de menú, i sovint acompanyat de patates congelades, se serveix un pollastre que té la curiosa particularitat de ser oliós i eixut a la vegada. Aquesta paradoxa, si bé ens pot resultar científicament interessant, hauria de ser motiu suficient per no tornar a posar els peus en el restaurant en qüestió. Cal reivindicar la dignitat dels plats senzills i bàsics, i abolir el ranxo de casernes amb què, erròniament, s’identifica l’etiqueta “menjar casolà” que ostenten alguns locals. Volem un pollastre amb patates de categoria!',
      },
    ],
    cost: 'Cost aproximat per ració: 1,87 €.',
    unitCost: 1.87,
    ingredients: [
      {
        ul: [
          '4 cuixes de pollastre',
          '600 g de patates',
          '1 ceba',
          '2 grans d’all',
          '100 ml de xerès sec',
          '100 ml de brou de pollastre',
          'Sal, pebre negre, timó, sàlvia i romaní',
          'Oli d’oliva verge extra',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Salem i empebrem les cuixes de pollastre.',
          'Les daurem en una cassola de ferro, uns 5 minuts per cada banda.',
          'Hi afegim els grans d’all sencers i la ceba trinxada, que deixarem suar una mica.',
          'Aleshores hi aboquem el xerès. Pugem la flama, perquè s’evapori l’alcohol.',
          'Hi afegim uns 100 ml de brou de pollastre i un bri d’herbes.',
          'Tapem i deixem coure 20 minuts, vigilant que el líquid no s’evapori del tot. Quan les cuixes estiguin a punt, les reservem.',
          'Mentrestant, trossegem unes patates i les coem al vapor durant 15 minuts.',
          'Les passem per la cassola on hem fet el pollastre, per recollir-ne els sucs de la cocció, fins que quedin ben assaonades.',
          'Rectifiquem de sal si és necessari i servim.',
        ],
      },
    ],
    variants: [
      {
        p: 'Les patates poden substituir-se per cebetes del <i>platillo</i>, pastanaga, pèsols… Qualsevol verdura que us agradi i sigui de temporada. També es pot servir el plat amb amanida, arròs, pasta, puré, cus-cus, samfaina o escalivada. És a dir, amb gairebé qualsevol acompanyament, llevat de patates congelades.',
      },
    ],
    categories: ['segons'],
    tags: ['patata', 'pollastre'],
  },
  {
    id: 'crema-carbassa-de-carbassa',
    createdAt: '2013-06-02T20:27:43+02:00',
    title: 'Crema carbassa de carbassa',
    intro: [
      {
        p: 'Per si no quedava clar, aquesta crema té un intensíssim color carbassa, capaç d’alegrar i escalfar qualsevol àpat d’hivern. El color és degut al seu ingredient principal -la carbassa, és clar- i a la cúrcuma, una espècie de propietats antiinflamatòries molt apreciada a Àsia, i que els monjos budistes utilitzen també per tenyir les seves túniques.',
      },
    ],
    cost: 'Cost aproximat per ració: 0,38 €.',
    unitCost: 0.38,
    ingredients: [
      {
        ul: [
          '500 g de carbassa',
          '1 ceba blanca petita',
          '30 g de mantega',
          '1 cullerada d’oli d’oliva',
          '1/2 copa de vi blanc sec',
          '600 ml d’aigua',
          '1 cullerada sopera de cúrcuma',
          '1 cullerada petita de curri',
          '1 cullerada petita de sal',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Tallem la ceba i la sofregim en una olla de fons gruixut amb l’oli i la mantega, sense que agafi color. Salem.',
          'Hi afegim la carbassa, tallada a daus. Deixem que agafi una mica de sabor.',
          'Hi tirem la 1/2 copa de vi blanc i les espècies. Remenem.',
          'Hi afegim aleshores l’aigua. Tapem l’olla i deixem coure uns 30 min.',
          'Triturem amb la batedora i servim.',
        ],
      },
    ],
    variants: [
      {
        p: 'Podem afegir una fulleta de llorer, junt amb les espècies. No ens oblidem de treure-la abans de triturar la verdura, però! També hi quedarà molt bé un rajolí de crema de llet en el moment de servir. Si remenem només una mica, amb la crema dibuixarem una espiral blanca que contrastarà amb el color de la crema.',
      },
    ],
    categories: ['primers'],
    tags: ['carbassa', 'crema'],
  },
  {
    id: 'sorbet-de-menta',
    createdAt: '2013-06-01T21:58:49+02:00',
    title: 'Sorbet de menta',
    intro: [
      {
        p: 'Hi ha res més refrescant que la menta? Doncs sí: el sorbet de menta! Després del curri verd (i picant) que hem menjat avui, no podíem haver triat unes postres millors. Tot i que –primera sorpresa– el color d’aquest sorbet és gairebé blanc, i no <a href="http://www.pantone.com/pages/products/product.aspx?pid=1328&amp;ca=33" target="_blank" rel="noopener">verd menta</a> com seria d’esperar, el gust no és gens aigualit. Tot el contrari. L’únic inconvenient d’aquest sorbet és que en voldreu més, i més…',
      },
    ],
    cost: 'Cost aproximat per ració: 0,48 €.',
    unitCost: 0.48,
    ingredients: [
      {
        ul: ['1 l d’aigua (mineral o filtrada)', '400 g de sucre', '1 manat de menta fresca', '1 llimona'],
      },
    ],
    prep: [
      {
        ol: [
          'Posem al foc un cassó amb l’aigua i el sucre. Quan comenci a bullir, hi tirem la menta prèviament rentada sota l’aixeta.',
          'Deixem que bulli durant uns 10 minuts.',
          'Retirem del foc i deixem reposar tapat fins a l’endemà.',
          'Colem el líquid i hi afegim el suc de la llimona.',
          'El posem a la gelatera (o en una plata metàl·lica al congelador, trencant els cristalls de el gel amb una forquilla quan comenci a solidificar-se i repetint la operació tres o quatre cops).',
          'Deixem al congelador un mínim de 2 hores i servim amb una mica de menta trinxada.',
        ],
      },
    ],
    variants: [
      {
        p: 'La mateixa preparació podríem congelar-la a la safata dels glaçons i després triturar-la amb la picadora per fer-ne granissat. Proveu de barrejar amb el sorbet alguns trossets de xocolata negra esmicolada.',
      },
    ],
    categories: ['postres'],
    tags: ['gelat', 'menta', 'sorbet', 'sucre'],
  },
  {
    id: 'pastis-de-xocolata-i-llima',
    createdAt: '2013-05-28T18:55:09+02:00',
    title: 'Pastís de xocolata i llima',
    intro: [
      {
        p: 'Aquesta recepta és de la Nigella Lawson, una mediàtica editora de cuina anglesa a qui es coneix també com la “reina del <a href="http://en.wikipedia.org/wiki/Food_porn" target="_blank" rel="noopener">food porn</a>”. Tot i que, efectivament, molts dels seus seguidors semblen més interessats en les seves corbes i el seu to insinuant que no pas en les receptes que prepara, s’ha de reconèixer que les propostes culinàries de la Nigella, sobretot quan es tracta de pastissos, no estan gens malament. Si, com ella mateixa diu, un bon menjar ens pot fer sentir “<a href="http://www.youtube.com/watch?v=EJFvqDSyWkM" target="_blank" rel="noopener">gorgeously spoiled and almost criminally indulgent</a>”, imagineu-vos què no podem aconseguir amb un pastís de xocolata!',
      },
    ],
    cost: 'Cost aproximat per ració: 0,68 € (en surten 8 racions).',
    unitCost: 0.68,
    ingredients: [
      {
        ul: [
          '150 g de xocolata negra',
          '150 g de mantega',
          '6 ous',
          '250 g de sucre',
          '125 g d’ametlles en pols',
          '4 cullerades de cacau pur en pols',
          '60 g de sucre de llustre + una mica més per espolsar damunt del pastís',
          '3-4 llimes',
          '200 ml de crema de llet',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Preparem el motlle: l’engreixem (tret que sigui de silicona) i retallem un cercle de paper de forn que col·locarem a la base.',
          'Escalfem el forn a 180 °C.',
          'Fonem la xocolata i la mantega en un cassó al bany maria. Un cop estigui fos, ho retirarem del foc perquè es refredi una mica.',
          'En un bol gros, batem junts els ous i el sucre durant uns 5 minuts i amb energia, fins que agafin un color pàl·lid i aspecte escumós.',
          'Mesclem les ametlles picades i el cacau. Ho incorporem a la barreja d’ou i sucre.',
          'Hi afegim també la mantega i la xocolata foses, tot remenant.',
          'Ratllem la pell d’una llima i l’espremem. Aboquem pell i suc al bol, amb els altres ingredients.',
          'Posem aquesta preparació al motlle.',
          'Coem al forn durant 40 minuts. Cal tenir present que aquest pastís forma una mena de crosta, i inevitablement la superfície s’esquerdarà cap al final de la cocció. Això no és cap inconvenient. Per una banda, en refredar-se, baixarà una mica i es tancaran les fissures. Per altra banda, sempre podem dir que és un pastís “rústic”.',
          'Traiem del forn i deixem refredar 1 minut. Tot seguit, tapem el pastís amb un drap i deixem refredar completament.',
          'Desemmotllem, llevem el paper que havíem posat a la base i espolsem la superfície amb una mica de sucre de llustre.',
          'Preparem la salsa de llima: Espremem les llimes restants i batem el suc (uns 50 ml) amb el sucre de llustre. Incorporem la crema de llet, remenant amb delicadesa. Obtindrem així una crema lleugera amb la qual servirem el pastís.',
        ],
      },
    ],
    variants: [
      {
        p: 'Sobretot, no utilitzeu Cola Cao o Nesquik en lloc del cacau pur que s’indica en la recepta. Són bons per barrejar amb la llet, però tenen un percentatge de cacau de <a href="http://www.insidetheproduct.es/2013/01/colacao-nesquik.html">només un 20-25 %</a>. El fet que la crema que acompanya el pastís sigui de llima, i que algunes notes d’aquest ingredient ja apareguin en la massa del pastís, fa que hi combini a la perfecció. Per això no aconsello substituir-la per custard o cap altra salsa / crema. En realitat, doncs, us recomano que feu el pastís seguint escrupolosament la recepta. Perquè modificar res, quan així és tan bo?',
      },
    ],
    categories: ['postres'],
    tags: ['crema', 'llima', 'pastis', 'xocolata'],
  },
  {
    id: 'sunomono',
    createdAt: '2013-05-22T17:12:57+02:00',
    title: 'Sunomono',
    intro: [
      {
        p: 'Si us agraden les amanides fresques, o si voleu fer una recepta japonesa però us espanta la dificultat, heu de provar el sunomono. Aquesta és la denominació genèrica amb què els japonesos es refereixen als aliments en vinagre. S’aplica doncs a diverses preparacions, la més famosa de les quals té com a ingredient bàsic el cogombre: una pobra hortalissa, avorrida pels que han fet règims hipocalòrics, i que us sorprendrà amb un sabor i una textura fins ara desconeguts.',
      },
    ],
    cost: 'Cost aproximat per ració: 0,72 €.',
    unitCost: 0.72,
    ingredients: [
      {
        ul: [
          '2 cogombres holandesos',
          '2 cullerades d’alga wakame deshidratada',
          '6 bastonets de surimi (opcional)',
          '6 cullerades de vinagre d’arròs',
          '3 cullerades de sucre',
          '2 cullerades de salsa de soja',
          'Sal',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Posem el wakame a estovar en aigua freda (i fixeu-vos com augmentarà de volum!).',
          'Tallem els cogombres a rodanxes ben primes, sense pelar.',
          'Els posem en un bol o en una escorredora i hi tirem sal abundant.',
          'Els maseguem amb es mans perquè la sal hi penetri i deixin anar tot el líquid. Deixem reposar i tornem a prémer el cogombre. Repetim l’operació fins que sigui ben flexible. (Així com el wakame creix, el cogombre minva…).',
          'Quan el cogombre estigui ben tovet, l’esbandim sota l’aixeta i escorrem l’excés d’aigua.',
          'Traiem també l’aigua del wakame, prement-lo amb les mans.',
          'Tallem els bastonets de surimi a tires.',
          'Els barregem amb les algues i el cogombre.',
          'Fem una vinagreta amb el vinagre d’arròs, el sucre i la salsa de soja.',
          'Amanim i servim ben fred.',
        ],
      },
    ],
    variants: [
      {
        p: 'Per fer la vinagreta, podríeu prescindir de la salsa de soja i utilitzar senzillament vinagre d’arròs i sucre, en proporció 2:1; posar-hi gambetes o cranc, i també una mica de sèsam per adornar. Fixeu-vos <a href="http://www.youtube.com/watch?v=8OhJiDBxEGI">com preparen el sunomono la Noriko i la Yuko</a>!',
      },
    ],
    categories: ['primers'],
    tags: ['algues', 'cogombre', 'vinagre', 'wakame'],
  },
  {
    id: 'pastis-de-mango',
    createdAt: '2013-05-20T19:09:48+02:00',
    title: 'Pastís de mango',
    intro: [
      {
        p: 'El primer cop que vaig fer aquest pastís era per l’aniversari de la meva germana. Vaig utilitzar uns mangos deliciosos: dolços, carnosos, sense ni un fil. Però eren gegants, jo no vaig compensar prou bé l’excés de fruita amb un extra de gelatina, i –ara ja ho puc dir– vaig patir. No tenia gens clar si acabaríem posant les espelmes en un pastís o en un plat de crema. Un oportú cop de congelador (i de sort!) van fer que el pastís aguantés i rebés fins i tot els compliments dels comensals. L’experiència va servir per ajustar les proporcions de la recepta i així estalviar-vos futurs patiments. Sempre que als vostres convidats els agradi el mango, teniu l’èxit assegurat.',
      },
    ],
    cost: 'Cost aproximat per ració: 0,83 € (en surten 10 racions).',
    unitCost: 0.83,
    ingredients: [
      {
        ul: [
          '3 mangos madurs grossos (d’uns 600 g cadascun), o 4 de mitjans',
          '300 ml de nata',
          '225 g de sucre',
          '200 g de Philadelphia',
          '100 g de mantega',
          '250 g de galetes (tipus speculoos o digestive)',
          '8 fulls de gelatina',
          '1 cullerada de gingebre en pols',
          'Salsa de xocolata blanca i nata muntada per decorar',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Triturem les galetes i les barregem amb la mantega fosa.',
          'Cobrim el fons d’un motlle desmuntable de 26 cm de diàmetre amb aquesta massa. Deixem que es refredi entre 1 i 2 hores a la nevera.',
          'Posem a remullar la gelatina en aigua freda.',
          'Pelem els mangos i els tallem a trossos petits.',
          'Barregem la fruita amb el sucre i coem a foc baix durant uns 10 minuts. Afegim una cullerada de gingebre mòlt a la mescla.',
          'Amb la batedora en fem un puré ben fi, evitant que quedin filaments. Podríem tastar i afegir més sucre si el mango fos una mica verd.',
          'Hi posem la gelatina escorreguda i remenem fins que es dissolgui completament.',
          'Quan aquest puré ja no estigui tan calent, hi barregem també el formatge Philadelphia, tot remenant.',
          'Muntem la nata amb les varetes i l’incorporem a la preparació de mango.',
          'Aboquem la barreja al motlle. El tornem a posar a la nevera 3 hores més, com a mínim.',
          'Quan el pastís estigui ben quallat, el desemmotllem i el decorem amb una mica de <a title="Semifred de maduixots amb salsa de xocolata blanca" href="/semifred-de-maduixots-amb-salsa-de-xocolata-blanca">salsa de xocolata blanca</a> i nata.',
        ],
      },
    ],
    variants: [
      {
        p: 'De la mateixa manera que hem utilitzat mangos, podríem fer el pastís amb altres fruites carnoses, com maduixots, préssecs, nectarines, papaia, o combinacions de plàtan i altres fruites més sucoses, com meló, raïm, pera… Generalment, 6 fulls de gelatina són indicats per 1/2 litre d’aigua. Per tant, us aconsello que mesureu la fruita, un cop triturada, i calculeu la gelatina que caldrà per donar-li consistència. Proveu a decorar el pastís amb <a href="http://commons.wikimedia.org/wiki/File:Physalis_fruit.JPG">physalis</a>, <a href="http://ca.wikipedia.org/wiki/Averrhoa_carambola">caramboles</a> o altres fruites exòtiques, o més simplement amb una cobertura de xocolata negra.',
      },
    ],
    categories: ['postres'],
    tags: ['fruita', 'mango', 'nata'],
  },
  {
    id: 'arros-del-dijous',
    createdAt: '2013-05-16T18:09:33+02:00',
    title: 'Arròs del dijous',
    intro: [
      {
        p: 'Del dijous… però també del divendres, o de qualsevol altre dia que arribi a casa passades les 3, afamada i sense haver previst res per dinar. Aquest és un arròs ràpid i senzill, que no em canso de menjar, i que conté… algues! Un ingredient per al qual tenia una pèssima predisposició i que ara, en canvi, sóc capaç de menjar directament del paquet amb més avidesa que els quicos. Les persones canviem molt, oi?',
      },
    ],
    cost: 'Cost aproximat per ració: 1,63 €.',
    unitCost: 1.63,
    ingredients: [
      {
        ul: [
          '400 g d’arròs (2 tasses)',
          '400 g de llagostins pelats (congelats, de mida mitjana)',
          '2 cullerades soperes d’<a href="http://www.portomuinos.com/produtos_produtos.php?idcatraiz=44&amp;idcat=46&amp;produtos=1&amp;idprod=10" target="_blank" rel="noopener">amanida d’algues deshidratades</a>',
          '5 grans d’all',
          'Oli d’oliva verge extra, aigua (4 tasses) i sal',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Pelem i tallem a làmines fines els grans d’all.',
          'Els sofregim en una paella amb l’oli.',
          'Abans que agafin color, hi tirem els llagostins i engeguem l’extractor.',
          'Quan la paella s’hagi refet de la gelor dels llagostins, hi aboquem l’arròs. Fem un parell de remenades.',
          'Tot seguit, hi posem l’aigua (el doble que d’arròs) i les algues. Salem molt poc.',
          'Tapem i deixem coure 15 minuts.',
          'Apaguem el foc i deixem reposar 2 minuts abans de servir.',
        ],
      },
    ],
    variants: [
      {
        p: 'Les algues intensifiquen l’aroma de mar d’aquest arròs, però si no en trobeu, proveu a posar-hi quatre fulles d’espinacs. Evidentment, l’afegitó de cloïsses o altres espècimens marins només pot millorar el plat, però heu de recordar la premissa (menús per sota dels 3 €) dels sopars de duro…',
      },
    ],
    categories: ['primers'],
    tags: ['algues', 'all', 'arros', 'llagostins'],
  },
  {
    id: 'llaminera-de-porc-amb-pinya',
    createdAt: '2013-05-12T19:39:50+02:00',
    title: 'Llaminera de porc amb pinya',
    intro: [
      {
        p: 'A aquestes alçades, ja haureu vist que m’agrada la carn, que m’agrada la pinya, i que la combinació de totes dues coses em fa literalment salivar. Servidora –que, a més, té un component visual important– no es pot resistir tampoc a l’aspecte d’aquest plat. El llustre que agafa la llaminera, fruit del suc àcid de la pinya i la dolçor de l’Oporto, mereix que se li dediqui una última mirada d’admiració abans de clavar-hi el ganivet.',
      },
    ],
    cost: 'Cost aproximat per ració: 2,65 €.',
    unitCost: 2.65,
    ingredients: [
      {
        ul: [
          '1/2 pinya',
          '2 llamineres',
          '1 ceba',
          '1 pastanaga petita',
          '2 grans d’all',
          '1 copa d’Oporto',
          'Oli d’oliva verge extra',
          'Romaní, sal i pebre',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Escalfem el forn a 210 °C.',
          'Marquem les llamineres a foc viu en una cassola amb oli. Les reservem en una safata de forn.',
          'Al mateix oli, sofregim la ceba i la pastanaga trinxades ben fines. Els grans d’all els hi posem sencers, per poder-los retirar.',
          'Quan estiguin les verdures pansides, hi aboquem l’Oporto i un pessic de romaní.',
          'Mentre s’evapora una mica l’alcohol, tallem la pinya a trossos d’uns 2 cm.',
          'Retirem l’all de la cassola Hi aboquem els trossos de pinya i deixem que es daurin durant uns tres minuts.',
          'Els col·loquem a la safata junt amb la llaminera, aboquem per damunt els sucs de la cassola i coem al forn durant 12 minuts.',
        ],
      },
    ],
    variants: [
      {
        p: 'Serviu la llaminera ja tallada i amb una mica de suc per sobre. Si hi poseu una guarnició de mesclum d’enciams o d’arròs basmati, en podeu fer un plat únic. Si no teniu Oporto, substituïu-lo per vi ranci, moscatell o xerès dolç.',
      },
    ],
    categories: ['segons'],
    tags: ['carn', 'llaminera', 'pinya', 'porc'],
  },
  {
    id: 'pasta-amb-cigrons',
    createdAt: '2013-05-11T22:51:13+02:00',
    title: 'Pasta amb cigrons',
    intro: [
      {
        p: 'L’Antonella Speranza, en un dels seus (molt recomanables) tallers de pasta, ens va parlar d’aquest plat. Jo feia anys que menjava la <a title="Pasta e fagioli" href="/pasta-e-fagioli" target="_blank" rel="noopener">pasta amb mongetes</a>, però mai no se m’havia acudit combinar-la amb cigrons, per bé que són llegums com les altres. Vaig pensar que aquest acoblament havia de ser bo per força, i vaig provar la recepta del seu blog <a href="http://www.lapastaperalscatalans.cat/" target="_blank" rel="noopener">La pasta per als catalans</a>. Tan deliciosa com senzilla de preparar! Ara que ja l’he incorporada al meu receptari habitual, m’he permès algunes llicències. Trobo que l’api hi queda molt bé. Espero que ningú no s’ofengui per haver substituït també el format de la pasta. Els cigrons, dins d’aquest amagatall que formen les <i>orecchiette</i>, queden tan bonics!',
      },
    ],
    cost: 'Cost aproximat per ració: 0,85 €.',
    unitCost: 0.85,
    ingredients: [
      {
        ul: [
          '300 g de pasta (orecchiette)',
          '300 g de cigrons cuits amb una mica d’aigua de cocció',
          '1 branca d’api',
          '3 grans d’all',
          '1 l d’aigua',
          'Oli d’oliva verge extra, sal, pebre i julivert',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Trinxem l’api i el posem a sofregir en una cassola junt amb els grans d’all.',
          'Quan sigui tou i comenci a transparentar, hi aboquem els cigrons amb una mica de l’aigua de cocció (o tot el contingut del pot de vidre, si els utilitzem en conserva).',
          'Passats uns minuts, retirem els alls i triturem aproximadament la meitat dels cigrons.',
          'Aleshores hi incorporem la pasta i el litre d’aigua.',
          'Fem coure uns 10 minuts, o el temps que requereixi la pasta que utilitzem. El plat no és de cullera, però tampoc no ha de quedar eixut. Si veieu doncs que l’aigua s’evapora massa ràpid, afegiu-ne una mica més.',
          'Deixem reposar un parell de minuts i servim amb una mica de julivert i un rajolí d’oli cru per sobre.',
        ],
      },
    ],
    variants: [
      {
        p: 'Els italians són molt respectuosos quant al format de la pasta que va amb cada plat. Cal dir que la recepta original es fa amb <i>legane</i>, una pasta semblant a les <i>tagliatelle</i>. I per tant, si volem ser fidels a la tradició, caldria triar una pasta similar. Per contra, el sofregit és un terreny idoni per a les variacions. En el d’aquest plat, tan aviat hi trobem l’all tot sol, com acompanyat de peperoncino, ceba, tomàquet, api o fins i tot de galta de porc.',
      },
    ],
    categories: ['primers'],
    tags: ['cigrons', 'pasta'],
  },
  {
    id: 'panna-cotta-amb-coulis-vermell',
    createdAt: '2013-05-06T12:53:03+02:00',
    title: 'Panna cotta amb coulis vermell',
    intro: [
      {
        p: 'La panna cotta (nata cuita) són unes postres que sovint coneixem en les seves variants més insulses, fetes a base de preparats en pols o amb fulls de gelatina. Res a veure amb la recepta tradicional, suau, i saborosa, que fa quallar la nata amb clares d’ou, bany Maria i paciència. Per no pecar de puristes, aquest cop l’hem recoberta d’un coulis de gerds.',
      },
    ],
    cost: 'Cost aproximat per ració: 0,79 €.',
    unitCost: 0.79,
    ingredients: [
      {
        h3: 'Per la panna cotta:',
      },
      {
        ul: ['500 ml de nata', '90 g de sucre blanc', '1 cullerada de mel', '4 clares d’ou', '1 beina de vainilla'],
      },
      {
        h3: 'Per al coulis:',
      },
      {
        ul: [
          '250 g de gerds (els congelats del Lidl us aniran la mar de bé)',
          '150 g de sucre',
          '125 ml d’aigua',
          'El suc de 1/2 llimona petita',
        ],
      },
    ],
    prep: [
      {
        p: 'Primer el coulis, que es pot fer amb molta anticipació i guardar:',
      },
      {
        ol: [
          'Posem un cassó amb l’aigua i el sucre a foc baix durant 10-15 minuts, sense deixar de remenar, per fer un almívar.',
          'Rentem, escorrem i triturem la fruita amb la batedora. Hi afegim el suc de llimona.',
          'Quan l’almívar estigui a punt, l’aboquem damunt la fruita, remenem i esperem 5 minuts.',
          'Triturem amb la batedora.',
          'Si us molesten les petites llavors del gerd, el colem.',
          'Deixem refredar.',
        ],
      },
      {
        p: 'La panna cotta també es pot preparar el dia anterior, i així es refredarà del tot:',
      },
      {
        ol: [
          'Posem la nata i la vainilla (oberta longitudinalment) en un pot. Hi afegim el sucre i la mel, i ho posem a foc baix.',
          'Remenem perquè el sucre es vagi dissolent. Quan arrenqui el bull, retirem el pot del foc i el deixem refredar.',
          'Mentrestant, escalfem el forn a 120°.',
          'Batem una mica les clares, com si haguéssim de fer una truita.',
          'Quan la nata ja estigui freda, traiem la beina de vainilla i hi aboquem les clares. Remenem bé perquè no hi quedin grumolls. Colem, si és necessari.',
          'Repartim això en 6 flameres, prèviament engreixades amb una mica d’oli (si són de silicona ens ho estalviarem).',
          'Emplenem una safata de forn amb aigua i hi posem les flameres, vigilant que l’aigua arribi fins al nivell de la nata, però mai a la vora de la flamera, perquè en bullir no hi pugui entrar.',
          'Posem aquesta safata a la part baixa del forn i deixem coure durant 1 h.',
          'Quan la superfície estigui llisa i compacta, apaguem del forn i deixem refredar.',
          'Posem la panna cotta a la nevera, dues hores com a mínim.',
          'Amb un ganivet, la separem de la flamera i l’aboquem en un plat. Hi posem coulis de gerds pel damunt, ad libitum.',
        ],
      },
    ],
    variants: [
      {
        p: 'La panna cotta admet diversos coulis: caramel, salsa d’albercoc o de kiwi… També es pot presentar amb mel, o amb trossets de fruita, o acompanyant petits dolços secs, com els <i>amaretti</i> o les teules. La xocolata, a trossets o en cobertura, sempre hi queda bé.',
      },
    ],
    categories: ['postres'],
    tags: ['coulis', 'gerds', 'nata', 'panna-cotta'],
  },
  {
    id: 'amanida-de-favetes',
    createdAt: '2013-05-04T07:46:04+02:00',
    title: 'Amanida de favetes',
    intro: [
      {
        p: 'Tenir un hortet té l’avantatge de poder menjar verdures, conreades per un mateix, sempre fresques i molt més saboroses que les del mercat. Tenir un amic que té un hortet té l’avantatge que, de tant en tant, es pot gaudir dels excedents sense haver de cavar, ni preocupar-se de regar, ni d’espantar els ocells o els cargols que ronden les plantes. El Juanjo em va dur a la feina una bossa de faves que, un cop desgranades, eren tan tendres i petitones que semblaven embrions. Es podien menjar crues. No calia gran cosa (ni jo volia ocultar el seu sabor amb massa ingredients) per apreciar la primavera que duien dins. Delicioses!',
      },
    ],
    cost: 'Cost aproximat per ració: 2,70 €.',
    unitCost: 2.7,
    ingredients: [
      {
        ul: [
          'Faves tendres (amb la beina, 1 kg – 1,5 kg)',
          'Un bol gros de fulles d’espinacs',
          '300 g de pernil ibèric',
          '1 branca de menta',
          'Oli d’oliva verge extra, sal i llimona',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Triem les faves.',
          'Les coem en un cassó amb aigua bullint, un pessic de sal i una branca de menta.',
          'Mentrestant, en una paella amb un rajolí d’oli, saltem els espinacs durant 1 minut, tot just perquè les fulles perdin el volum.',
          'Disposem el pernil en un plat. Hi posem també les verdures, i les amanim amb una vinagreta feta amb sal, oli de la millor qualitat i unes gotes (molt poques) de suc de llimona.',
        ],
      },
    ],
    variants: [
      {
        p: 'Tot i que el plat és improvisat, he de dir que la combinació de sabors queda molt bona. La branca de menta, en l’aigua de bullir les faves, aporta un aroma més subtil que no pas en forma de picada. Com a alternativa, provaria a substituir els espinacs per carxofes o per coliflor.',
      },
    ],
    categories: ['carmanyola', 'primers'],
    tags: ['espinacs', 'faves', 'pernil'],
  },
  {
    id: 'porrusalda',
    createdAt: '2013-05-02T15:19:47+02:00',
    title: 'Porrusalda',
    intro: [
      {
        p: 'Avui és un diumenge molt rúfol: plou, fa fred i vent… Pel carrer només es veu algun turista escadusser i els amos de gossos que no tenen més remei que sortir. Mentre el meu fill corria La Milla i jo anava feinejant, he pensat quin plat li agradaria trobar a taula, en arribar a casa xop i cansat. “Res millor que la porrusalda per refer-se d’un dia com avui”, he pensat. I sí, ha estat un encert!',
      },
    ],
    cost: 'Cost aproximat per ració: 1,55 €.',
    unitCost: 1.55,
    ingredients: [
      {
        ul: [
          '3 porros',
          '4 patates (uns 650 g aprox)',
          '250 g de bacallà dessalat i esqueixat',
          'Oli d’oliva',
          'Julivert, sal, aigua',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Posem a escalfar 1 1/4 l d’aigua en una olla, preferiblement de ferro colat.',
          'Tallem els porros en rodanxes d’1 cm aprox.',
          'Quan bulli l’aigua, els aboquem a l’olla i deixem que es coguin 10 minuts.',
          'Passat aquest temps, hi afegim les patates, tallades grosses. Deixem coure 20 minuts més.',
          'Finalment, posem a l’olla el bacallà, un raig d’oli i una mica de julivert picat.',
          'Apaguem el foc al cap de 5 minuts.',
          'Tastem el suquet, i salem si és necessari (depenent del bacallà, podríem prescindir completament de la sal).',
          'Deixem l’olla tapada 5 minuts més i servim.',
        ],
      },
    ],
    variants: [
      {
        p: 'Que la porrusalda ha de contenir porros, és una premissa inqüestionable. Tret d’això, però, admet múltiples variants. S’hi poden incorporar més verdures (pastanaga, ceba…), i també substituir el bacallà per ingredients més humils, com les carcasses de pollastre o els caps i espines del peix, o bé més golafres i greixosos, com la costella o la botifarra. Jo em decanto obertament pel bacallà. Advertència per als panarres: amb aquest plat, us fareu un tip de sucar (pa, naturalment)!',
      },
    ],
    categories: ['plat-unic', 'primers'],
    tags: ['bacalla', 'patata', 'peix', 'porro', 'verdura'],
  },
  {
    id: 'semifred-de-maduixots-amb-salsa-de-xocolata-blanca',
    createdAt: '2013-05-01T09:31:22+02:00',
    title: 'Semifred de maduixots amb salsa de xocolata blanca',
    intro: [
      {
        p: 'Mira que sempre critico els restaurants que posen noms llargs i altisonants als plats. Doncs amb el semifred he hagut de fer precisament això. Per culpa del seu color rosat i d’una no gaire afortunada elecció del motlle (ho admeto), el seu aspecte pot recordar el d’una llauna de <i>chopped</i>. No li fa justícia. I en canvi, és un dolç irresistible! Calia doncs explicar exactament en què consisteix, i avançar amb el nom el plaer que sentiran les vostres papil·les.',
      },
    ],
    cost: 'Cost aproximat per ració: 1,60 €.',
    unitCost: 1.6,
    ingredients: [
      {
        ul: [
          '250 g de maduixots',
          '100 g de sucre',
          '2 cullerades de suc de llimona',
          '5 fulls de gelatina',
          '200 g de nata',
          '175 g de <i>ricotta</i>',
        ],
      },
      {
        h3: 'Per la salsa:',
      },
      {
        ul: ['200 g de nata', '1/2 beina de vainilla', '100 g de xocolata blanca trossejada'],
      },
    ],
    prep: [
      {
        ol: [
          'Posem els fulls de gelatina a estovar en aigua freda.',
          'Triturem els maduixots amb el suc de llimona i el sucre. Reservem la meitat d’aquest puré líquid.',
          'L’altra meitat, l’escalfem. Abans que bulli, hi desfem els fulls de gelatina, ben escorreguts.',
          'Hi incorporem la <i>ricotta</i>, remenant bé, i l’altra meitat de puré de fruita que havíem reservat.',
          'Muntem la nata.',
          'Afegim una cullerada de nata muntada a la barreja anterior, remenant fins aconseguir una crema homogènia.',
          'Incorporem la resta de la nata, procurant que la mescla quedi esponjosa.',
          'L’aboquem en un motlle de pastís, o en petits motlles individuals.',
          'Deixem refredar a la nevera. Abans de servir, posem 1 hora al congelador i servim amb la salsa de xocolata blanca.',
        ],
      },
      {
        h3: 'Per preparar la salsa:',
      },
      {
        ol: [
          '<a href="http://www.youtube.com/watch?v=bICPn7Ifrh8" target="_blank" rel="noopener">Traiem les llavors de la vainilla</a> i les posem en un cassó, junt amb la beina i la meitat de la nata. Posem al foc.',
          'Abans que arribi a bullir, apaguem el foc. Retirem la beina i hi aboquem els 100 g de xocolata, a trossets.',
          'Remenem a consciència perquè la xocolata es desfaci del tot.',
          'Afegim la nata restant i deixem refredar. Aquesta salsa, que també podeu fer amb xocolata negra, us servirà per altres postres com el púding de cafè o el pastís de poma.',
        ],
      },
    ],
    variants: [
      {
        p: 'El semifred representa l’equilibri just entre la frescor dels gelats de fruita i la cremositat de les postres de nata. I permet jugar amb aquestes dues variables per adaptar-les al gust del consumidor o als ingredients que tinguem a casa. Així, la ricotta es pot substituir per mató lleuger, o per formatge Philadelphia o Mascarpone; fins i tot s’hi pot barrejar un formatge cremós baix en greix. La fruita, per la seva banda, només cal que sigui tova i sucosa, com ja ho és la majoria: préssec, kiwi, mango, gerds… Oi que ja us esteu animant?',
      },
    ],
    categories: ['postres'],
    tags: ['gelat', 'maduixots', 'nata', 'ricotta', 'semifred', 'xocolata'],
  },
  {
    id: 'vichyssoise',
    createdAt: '2013-04-26T20:37:35+02:00',
    title: 'Vichyssoise',
    intro: [
      {
        p: 'És un plat una mica <i>retro</i>, de l’època del metacrilat, però al qual m’uneix un vincle afectiu i de gratitud. En algun moment de la meva infantesa vaig tastar aquesta crema de porros de nom afrancesat i, a partir d’aleshores, i mentre vaig ser nena, va ser la meva elecció fixa als restaurants que la tenien a la carta. Probablement amb un bacallà de segon, vaig créixer (i força) gràcies a ella. Merci beaucoup!',
      },
    ],
    cost: 'Cost aproximat per ració: 0,96 €.',
    unitCost: 0.96,
    ingredients: [
      {
        ul: [
          '60 g de mantega',
          '400 g de porros (només la part blanca)',
          '400 g de patates',
          '1 l de brou de pollastre',
          '200 ml de nata per cuinar',
          'Sal, pebre blanc i cibulet',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Netegem els porros i els tallem en rodanxes.',
          'Els sofregim en mantega, a foc ben baix. No han d’agafar color.',
          'Quan comencin a transparentar, hi afegim les patates (pelades i tallades a trossos).',
          'Hi aboquem el brou. Salem (si cal), hi posem una mica de pebre blanc i portem a ebullició.',
          'Passats uns 45 minuts, triturem molt bé amb la batedora. Deixem refredar.',
          'Hi afegim la nata i batem de nou. De manera opcional, podem colar la crema perquè quedi ben fina.',
          'Posem a la nevera fins el moment de servir, amb un pessic de cibulet.',
        ],
      },
    ],
    variants: [
      {
        p: 'Sobre un plat tan senzill i amb tan pocs ingredients no hi ha gaire marge d’acció. El sol fet de servir-lo calent ja el convertiria en “crema de porros”. Les úniques llibertats que ens podem prendre són: afegir-hi una ceba o una ceba tendra (sofregida just abans que el porro), i/o una copeta de vi blanc (que deixaríem reduir) abans de tirar-hi el brou.',
      },
    ],
    categories: ['primers'],
    tags: ['crema', 'nata', 'patata', 'porro', 'sopa', 'vichyssoise'],
  },
  {
    id: 'farcells-de-gall-dindi',
    createdAt: '2013-04-24T22:34:33+02:00',
    title: 'Farcells de gall dindi',
    intro: [
      {
        p: 'El gall dindi –siguem francs- té una carn tan pobra en greix com en atractiu. Emulant el temperament d’aquells que el mengen a la planxa per mantenir la línia, es caracteritza per ser eixut, insuls i avorrit. Tanmateix, després d’aquesta entrada tan poc encoratjadora, cal dir que és ideal per embolcallar pernil, formatges cremosos, espàrrecs o altres verduretes… ja que el seu sabor no domina per sobre dels altres, i les dimensions dels filets permeten fer uns farcells ben generosos.',
      },
    ],
    cost: 'Cost aproximat per ració: 1,60 €.',
    unitCost: 1.6,
    ingredients: [
      {
        ul: [
          '4 filets de pit de gall dindi',
          '4 talls de pernil dolç de qualitat',
          '100 g de Gorgonzola',
          '50 ml de vi blanc',
          '50 ml de brou de pollastre',
          '50 g de mantega',
          'Sàlvia, romaní, sal i pebre',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Estenem els filets de gall dindi. Hi posem un polsim de sàlvia i els cobrim amb un tall de pernil dolç.',
          'Posem un tros de formatge damunt de cada tall de pernil, cap a una punta.',
          'Enrotllem els filets, de manera que el pernil i el formatge quedin a dins. Els fixem amb un escuradents.',
          'Desfem la mantega en una cassoleta. Hi afegim el romaní.',
          'Hi daurem els farcellets, a foc viu. Quan hagin agafat color, salem, empebrem i hi aboquem el vi blanc i el brou.',
          'Deixem coure, a foc baix i amb la cassoleta tapada, durant 20-25 minuts o fins que el líquid s’hagi reduït a la meitat.',
        ],
      },
    ],
    variants: [
      {
        p: 'Els farcells demanen un acompanyament sucós, com amanida o verdura. Proveu a posar-hi unes carxofes preparades de la següent manera: un cop triades i trossejades, es reserven en un bol amb aigua (que les cobreixi) i el suc de 1/2 llimona. Tot seguit, es posa una mica d’oli en un cassó, amb una cullerada de farina. Es daura una mica i s’hi aboca el contingut del bol, tal qual, amb un pessic de sal. Només cal fer bullir 15 minuts i ja es pot servir amb un rajolí d’oli cru.',
      },
    ],
    categories: ['carmanyola', 'segons'],
    tags: ['formatge', 'gall-dindi', 'gorgonzola', 'pernil'],
  },
  {
    id: 'sorbet-de-taronja',
    createdAt: '2013-04-21T19:05:57+02:00',
    title: 'Sorbet de taronja',
    intro: [
      {
        p: 'Que un sorbet sigui refrescant no és cap sorpresa. Tot el que consumim a una temperatura inferior a 4 °C, com a mínim, ens ha de refrescar. <i>Aquest</i> sorbet, però, incorpora uns matisos especiats que potencien la frescor pròpia dels cítrics i la que es pressuposa a qualsevol gelat. El cardamom, el clau d’olor, el llorer i la menta amb què servim el sorbet li donen a més un aroma ben original, que combina de meravella amb la dolçor de la taronja i en ressalta el gust.',
      },
    ],
    cost: 'Cost aproximat per ració: 0,29 €.',
    unitCost: 0.29,
    ingredients: [
      {
        ul: [
          '400 ml d’aigua mineral o filtrada',
          '200 g de sucre',
          '100 g de mel',
          '2 cullerades soperes de pell de taronja ratllada',
          '1 cullerada de gingebre en pols',
          '2 llavors de cardamom',
          '2 claus d’olor',
          '1 fulla de llorer petita',
          '1/2 l de suc de taronja',
          '1/2 culleradeta d’essència de taronja o 1 cullerada d’aigua de taronger',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Posem els vuit primers ingredients en un cassó.',
          'Fem bullir durant uns 15 minuts. El líquid es convertirà en un almívar lleuger.',
          'Deixem refredar completament. Reservem a la nevera un mínim de 2 hores.',
          'Eliminem les espècies i hi barregem el suc i l’essència de taronja.',
          'Posem la barreja a la geladera. (Si no en tenim, l’aboquem en un recipient metàl·lic i la posem al congelador. Procedim tal com s’explica en la recepta de <a href="/sorbet-de-raim">sorbet de raïm</a>, o com es pot veure en el <a href="https://www.youtube.com/watch?v=RUKe0jGNLCY">vídeo</a> d’aquesta senyora tan… expressiva).',
          'Servim amb unes fulletes de menta.',
        ],
      },
    ],
    variants: [
      {
        p: 'Aquest sorbet, sempre que sigui per consum d’adults, es pot servir en una copa, junt amb un bon raig de Cointreau. La geladeria casolana és tan senzilla i ens permet experimentar amb tants ingredients, aromes i espècies, que crea addicció.',
      },
    ],
    categories: ['postres'],
    tags: ['especies', 'gelat', 'sorbet', 'taronja'],
  },
  {
    id: 'mandonguilles-amb-salsa-dou-i-llimona',
    createdAt: '2013-04-17T20:59:49+02:00',
    title: 'Mandonguilles amb salsa d’ou i llimona',
    intro: [
      {
        p: 'Aquest plat, com d’altres típics de Grècia, es basa en una barreja de carn picada i arròs (en cru) que es cou en una salsa líquida o en un brou. De vegades, aquesta amalgama s’utilitza per farcir pebrots vermells, patates, albergínies o carbassons. En aquesta ocasió, es la base de les Γιουβαρλάκια αβγολέμονο, unes mandonguilles que s’acompanyen d’una de les salses més característiques i originals de la cuina grega, a base d’ou i llimona.',
      },
    ],
    cost: 'Cost aproximat per ració: 1,75 €.',
    unitCost: 1.75,
    ingredients: [
      {
        ul: [
          '600 g de carn picada de bou',
          '1/2 tassa d’arròs de gra rodó',
          '1 ceba mitjana',
          '1/2 l de brou de pollastre',
          '3 ous',
          'El suc de 1/2 llimona',
          'Farina',
          'Julivert',
          'Unes fulletes de menta',
          'Mantega',
          'Oli d’oliva extra verge, sal i pebre',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Rentem l’arròs sota un raig d’aigua, i deixem que s’escorri.',
          'Trinxem la ceba, el julivert i la menta.',
          'Fem una barreja amb la carn picada, la ceba, les herbes, l’arròs, un ou i tres cullerades de mantega fosa. Salpebrem i deixem reposar 30 minuts a la nevera.',
          'Formem mandonguilles de la mida d’una nou. Les enfarinem molt lleugerament.',
          'Posem les mandonguilles en una cassola amb el brou. Hi afegim aigua fins cobrir-les, i un bon raig d’oli i sal.',
          'Deixem coure amb la cassola tapada durant 20-25 minuts, vigilant que no s’evapori tot el líquid. Si cal, hi afegim aigua.',
          'Retirem les mandonguilles de la cassola i reservem el brou de la cocció.',
          'Per preparar la salsa <i>avgolémono</i>, batem els 2 ous restants en un bol, mentre hi incorporem el suc de llimona.',
          'Agafem un cullerot del líquid de cocció i l’afegim a aquesta barreja, gradualment i sense deixar de batre. L’escalfor del brou farà que l’ou qualli i, d’aquesta manera, la salsa s’espessirà. Si veieu que us està quedant massa líquida, deixateu una mica de farina en mig got d’aigua i l’hi afegiu, tot remenant. Saleu.',
          'Aboquem aquesta salsa a la cassola amb el brou de les mandonguilles. Remenem per lligar bé la salsa, i escalfem sense deixar que bulli.',
          'Tornem a posar les mandonguilles a la cassola i les hi deixem uns 5 minuts més, a foc mínim. Servim el plat ben calent i caldós.',
        ],
      },
    ],
    variants: [
      {
        p: 'Aquest plat es pot acompanyar d’unes patates al caliu o al vapor, que podem incorporar en els últims minuts, junt amb les mandonguilles, perquè coguin en la salsa <i>avgolémono</i>. Igualment bé hi quedarien uns pèsols, unes faves tendres o uns cors de carxofa tallats a quarts.',
      },
    ],
    categories: ['segons'],
    tags: ['brou', 'carn', 'llimona', 'mandonguilles', 'ou'],
  },
  {
    id: 'magdalenes-lletges',
    createdAt: '2013-04-14T18:42:40+02:00',
    title: 'Magdalenes lletges',
    intro: [
      {
        p: 'Contra la tendència actual, farcida de sucre i d’anglicismes, els meus gustos en pastisseria es decanten clarament per l’autèntic. M’agraden els dolços tradicionals, rústics, d’aquells que diries lletjos però que tomben de tan bons que són. En un <a href="/pastis-de-xocolata-i-guinness" target="_blank" rel="noopener">post precedent</a>, ja vaig deixar clar que jo, a les meves magdalenes, no hi poso <i>frostings</i>. Per principi. Perquè defujo les modes. Perquè trobo aquests excessos de sucre senzillament aberrants. I, sobretot, perquè les meves magdalenes, per lletges que siguin, són sensacionals.',
      },
    ],
    cost: 'Cost aproximat per unitat: 0,49 €.',
    unitCost: 0.49,
    ingredients: [
      {
        ul: [
          '300 g de farina blanca',
          '60 g de farina integral',
          '90 ml d’oli verge extra de Siurana',
          '185 g de sucre, barreja de blanc i morè',
          '250 g de fruits del bosc deshidratats (=2 bossetes d’<i>arándanos</i> del Mercadona)',
          '2 ous',
          '250 ml de llet sencera',
          '1 culleradeta d’extracte de vainilla',
          '4 culleradetes de llevat en pols',
          '1/2 culleradeta de sal',
          '6 cullerades soperes de flocs de civada',
          '3 cullerades soperes de sucre morè',
          '1 cullerada de canyella',
          '30 g de mantega freda',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Abans que res, posem els fruits del bosc en aigua calenta per hidratar-los.',
          'Comencem preparant la cobertura de les magdalenes. Posem els 4 últims ingredients en un bol i els mesclem amb els dits, tot “pessigant”. Obtindrem una barreja d’aspecte esgrunat, que reservarem a la nevera.',
          'Engeguem el forn, a 190 °C.',
          'Barregem la farina amb el llevat i la sal.',
          'En un bol gros, posem el sucre i l’oli. Mesclem amb les varetes.',
          'Hi afegim els ous.',
          'Hi aboquem la meitat de la farina, sempre remenant bé. La cosa s’espesseix…',
          'Ara hi posem la llet i l’extracte de vainilla, sense deixar de remenar.',
          'Aboquem més farina al bol, reservant-ne dues o tres cullerades. Remenem.',
          'Colem bé els fruits del bosc. Els posem en la farina sobrant i sacsegem, perquè quedin ben enfarinats.',
          'Ara els incorporem a la barreja. Com que estan enfarinats, no “rellisquen” cap a baix, i queden ben distribuïts en la massa.',
          'Repartim aquesta barreja en els motllos, sense emplenar-los.',
          'Posem la cobertura de flocs de civada al damunt.',
          'Enfornem les magdalenes (amb calor superior i inferior, sense aire) durant 20 minuts.',
          'Les deixem refredar, i les traiem del motlle un cop fredes.',
        ],
      },
    ],
    variants: [
      {
        p: 'Si no us van les magdalenes tan rústiques i alimentoses, podeu substituir els flocs de civada de la cobertura per 45 g de farina. Igualment us ha de quedar una barreja esgrunada, però molt més fina, que els donarà un aspecte més convencional. Quant a la fruita, podeu utilitzar panses, seguint el mateix procés d’hidratar-les prèviament. Aquestes magdalenes també es poden fer amb càpsules de paper.',
      },
    ],
    categories: ['berenar', 'postres'],
    tags: ['flocs-de-civada', 'fruits-del-bosc', 'magdalenes'],
  },
  {
    id: 'llenties-a-la-meva-manera',
    createdAt: '2013-04-14T09:40:19+02:00',
    title: 'Llenties (a la meva manera)',
    intro: [
      {
        p: 'Si valoréssim la relació entre el poder nutritiu i el cost de cada plat, les llenties serien el  guanyador imbatible. Són un aliment energètic, ric en fibra i en proteïnes vegetals i pràcticament sense gens de greix. A l’Índia, el primer productor (i suposem que també consumidor) mundial, les guisen amb espècies d’aroma potent, cosa que fa del tot innecessari afegir-hi xoriç o costella, com és costum a les nostres contrades.',
      },
    ],
    cost: 'Cost aproximat per ració: 0,28 €.',
    unitCost: 0.28,
    ingredients: [
      {
        ul: [
          '300 g de llenties pardines',
          '1 pastanaga',
          '1 ceba',
          '2 tomàquets pera',
          '1 cullerada sopera de curri suau',
          '1 fulla de llorer',
          '1 l d’aigua',
          'Oli d’oliva i sal',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Piquem la ceba i la pastanaga. Les sofregim en una cassola de ferro amb oli d’oliva.',
          'Passats uns 5 minuts, salem. Hi afegim els tomàquets pelats i tallats a daus.',
          'Hi posem el llorer i el curri, i deixem un parell de minuts més.',
          'Mentrestant, escalfem l’aigua. (Barcelonins, filtreu-la: els llegums se us couran abans i quedaran millor).',
          'Posem les llenties a la cassola. Remenem i hi tirem l’aigua ja calenta.',
          'Tapem i deixem que es coguin a foc baix 45 minuts. No s’hauria d’acabar el líquid de cocció, però si convingués hi afegim més aigua.',
          'Servim amb un rajolí d’oli cru pel damunt.',
        ],
      },
    ],
    variants: [
      {
        p: 'Es pot utilitzar qualsevol altra varietat de llentia (castellana, vermella, groga…) i substituir el curri per altres combinacions d’espècies, com la que formen el comí i el gingebre. Per allargar les racions, només cal incrementar la quantitat d’aigua i afegir-hi patates trossejades (una per cap) o arròs (excel·lent alternativa) 20 minuts abans d’acabar la cocció.',
      },
    ],
    categories: ['primers'],
    tags: ['llegums', 'llenties'],
  },
  {
    id: 'panadons-despinacs',
    createdAt: '2013-04-10T21:05:27+02:00',
    title: 'Panadons d’espinacs',
    intro: [
      {
        p: 'Els panadons consisteixen en una massa de pa farcida, típica de les terres de Lleida, però present en molts indrets del Mediterrani i des de fa un grapat d’anys. El <a href="http://www20.gencat.cat/portal/site/culturacatalana/menuitem.be2bc4cc4c5aec88f94a9710b0c0e1a0/?vgnextoid=f7f2ef2126896210VgnVCM1000000b0c1e0aRCRD&amp;vgnextchannel=f7f2ef2126896210VgnVCM1000000b0c1e0aRCRD&amp;vgnextfmt=detall2&amp;contentid=f33a161da99d7210VgnVCM10000">Llibre de Sent Soví</a>, escrit a principi del s. XIV, ja descriu una preparació anàloga. De panadons n’hi ha de dolços i de salats. Entre aquests últims, els més populars són els de carbassa i els d’espinacs.',
      },
    ],
    cost: 'Cost aproximat per ració: 1,60 €.',
    unitCost: 1.6,
    ingredients: [
      {
        ul: [
          '750 g d’espinacs',
          '150 g de panses',
          '100 g de pinyons',
          '325 g de farina',
          '200 ml d’aigua',
          '5 g de llevat de forner',
          '2 grans d’all',
          'Oli d’oliva, sal',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Per tandes, posem els espinacs a una paella calenta, amb un fil d’oli, i els fem perdre l’aigua i el volum. Els anem deixant en una escorredora i els premem amb una cullera de fusta perquè quedin ben eixuts.',
          'En una mica d’oli, daurem els pinyons, les panses i l’all picat ben fi.',
          'Hi barregem els espinacs i reservem.',
          'Barregem la farina, una culleradeta de sal i l’aigua, amb els dits mateix. El tipus de farina que fem servir pot fer que calgui més o menys aigua.',
          'Al final, hi afegim el llevat esgrunat. Pastem uns 5 minuts i, quan la massa ja estigui ben llisa, la deixem reposar durant 1 hora, tapada amb un drap.',
          'Passat aquest temps, la dividim en 4 parts i formem panets ovalats. Els deixem reposar uns 10-15 minuts, tapats.',
          'Mentrestant, engeguem el forn a 250 °C.',
          'Veureu que els panets hauran pujat una mica. En contra de la seva espontània tendència, els aplanem amb el corró.',
          'Repartim la barreja d’espinacs al mig de cada rodona, deixant uns marges d’uns 3 cm.',
          'Pleguem els panadons pel mig, repleguem les vores per tancar-los bé i els posem al forn.',
          'Coem durant 15 minuts, sense ventilador. En treure’ls ja els podem servir.',
        ],
      },
    ],
    variants: [
      {
        p: 'A la massa de pa hi podem afegir una cullerada sopera d’oli. També podem pinzellar els panadons amb oli en treure’ls del forn. En general, la consigna és no escatimar oli, doncs, sempre que sigui bo. Jo us recomano l’oli <a href="http://www.olidoplesgarrigues.com/cat/">DOP Les Garrigues</a>.',
      },
    ],
    categories: ['carmanyola', 'primers'],
    tags: ['espinacs', 'panadons', 'panses', 'pinyons'],
  },
  {
    id: 'arros-amb-carbassa-i-safra',
    createdAt: '2013-04-07T18:10:14+02:00',
    title: 'Arròs amb carbassa i safrà',
    intro: [
      {
        p: 'Aquest <i>risotto</i> melós i d’aroma suau ens captiva a través dels cinc sentits. Ens entra per la vista gràcies a la tonalitat càlida de la carbassa i el safrà; pel tacte, cremós i humit; per la combinació d’aromes que en fan un plat d’equilibri perfecte; pel sabor delicat; però també per l’oïda, ja que aquest plat, com no podia ser menys, mereixerà unes quantes lloances per part dels comensals. Ho heu de comprovar!',
      },
    ],
    cost: 'Cost aproximat per ració: 1,95 €.',
    unitCost: 1.95,
    ingredients: [
      {
        ul: [
          '250 g de carbassa tallada a daus',
          '250 g d’arròs Nomen',
          '1 ceba',
          '50 g de mantega',
          '1 l de brou de pollastre',
          '100 ml de vi blanc sec',
          '100 g de formatge parmesà ratllat',
          'Un bri de safrà',
          'Oli d’oliva verge extra',
          'Sal i pebre',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Piquem la ceba ben fina. La posem a sofregir en una cassola amb oli, a foc baix.',
          'Mentrestant, escalfem el brou.',
          'Quan la ceba sigui transparent, hi afegim l’arròs. Apugem el foc i deixem un parell de minuts, que l’arròs vagi absorbint l’aroma del sofregit.',
          'Hi aboquem llavors el vi blanc, i deixem que s’evapori.',
          'Hi tirem també els daus de carbassa i uns cullerots de brou (els necessaris per cobrir el contingut de la cassola).',
          'Baixem la flama i anem remenant.',
          'Anem afegint el brou a mesura que el líquid s’evapora.',
          'En l’última llossada de brou, hi posem el safrà. L’afegim a l’arròs tot remenant.',
          'Quan l’arròs ja estigui pràcticament cuit, hi incorporem la mantega i el parmesà i apaguem el foc.',
          'Remenem, rectifiquem de sal si és necessari, i deixem reposar tapat durant 2 minuts.',
        ],
      },
    ],
    variants: [
      {
        p: 'Podeu presentar aquest plat dins la mateixa carbassa que haureu fet servir per preparar la recepta. En aquest cas, caldria utilitzar la carbassa que els anglesos anomenen <a href="http://en.wikipedia.org/wiki/Pumpkin" target="_blank" rel="noopener">pumpkin</a> (la de Halloween, per entendre’ns), en lloc de la <a href="http://en.wikipedia.org/wiki/Butternut_squash" target="_blank" rel="noopener">butternut</a>, que és la que habitualment comprem. Feu-li un “barret” a la part superior i buideu-la amb un <a href="http://www.cookplanet.es/temporada-de-frutos/kuchenprofi-sacabolas-parma-design-ralph-kramer-h-nr-1210002800.html" target="_blank" rel="noopener">estri adient</a>, vigilant de no foradar la pell, per obtenir la sopera més original i <i>resultona</i> que us pugueu imaginar.',
      },
    ],
    categories: ['primers'],
    tags: ['arros', 'carbassa', 'risotto', 'safra'],
  },
  {
    id: 'lluc-amb-salsa-de-llima',
    createdAt: '2013-04-07T17:50:40+02:00',
    title: 'Lluç amb salsa de llima',
    intro: [
      {
        p: 'Passada la dèria dels gin-tònics, potser us hagin quedat unes llimes a la nevera i no sapigueu què fer-ne? Abans que es fossilitzin, atreviu-vos a explorar aquest cítric petit i verd, força negligit en els nostres receptaris, però un dels ingredients bàsic del <i>cebiche</i>, així com de la cuina <i>thai</i>. S’adiu especialment bé amb el peix blanc.',
      },
    ],
    cost: 'Cost aproximat per ració: 1,93 €.',
    unitCost: 1.93,
    ingredients: [
      {
        ul: ['4 lloms de lluç', '3 llimes', 'Mantega', 'Farina', '1 cullerada de sucre morè', 'Anet, sal i pebre'],
      },
    ],
    prep: [
      {
        ol: [
          'Raspem la pell d’una llima i les espremem totes tres. Ensucrem una mica el suc.',
          'Salem i empebrem el peix. L’enfarinem i el fregim en una paella amb mantega. El reservem.',
          'Afegim una cullerada de farina a la mantega en què hem fregit el peix i deixem que es torri una mica. Si cal, hi afegim també més mantega.',
          'Aboquem el suc de llima a la paella, tot remenant perquè no es facin grumolls.',
          'Quan la salsa hagi espessit una mica, hi tirem un pessic d’anet i les raspadures de llima. Hi tornem a posar el lluç i l’hi deixem un parell de minuts.',
          'Servim el peix calent, napat amb la salsa.',
        ],
      },
    ],
    variants: [
      {
        p: 'Per fer la salsa, també es podria utilitzar suc de llimona o de taronja, indistintament. El punt de sucre (o mel) contraresta l’acidesa dels cítrics, però no és imprescindible. En lloc de l’anet, hi quedaria igualment bé un pessic de <i>ciboulette</i> o, senzillament, de julivert.',
      },
    ],
    categories: ['segons'],
    tags: ['llima', 'lluc', 'peix'],
  },
  {
    id: 'sopa-dordi-i-farigola',
    createdAt: '2013-04-04T17:43:13+02:00',
    title: 'Sopa d’ordi i farigola',
    intro: [
      {
        p: 'La primavera ens pot reservar algun dia fred i plujós, d’aquells que sortim al carrer massa prims de roba i tornem a casa destemprats. Per aquestes ocasions, tenim les sopes “remeieres” i reconfortants com aquesta, perfumada amb farigola, que ens resguarden de les calipàndries tan pròpies d’aquesta època de l’any. Per degustar amb mitjons de llana.',
      },
    ],
    cost: 'Cost aproximat per ració: 0,47 €.',
    unitCost: 0.47,
    ingredients: [
      {
        ul: [
          '6 cullerades soperes d’<a href="http://www.planetahuerto.es/venta-cebada-integral-pelada-biocop-500-g_02449">ordi pelat</a>',
          '1200 ml de brou de verdures',
          '3 grans d’all',
          '1 xirivia',
          '2 naps',
          '2 pastanagues',
          '200 g de pèsols',
          '1 branqueta de farigola',
          'Oli d’oliva verge extra',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Posem l’ordi a estovar durant unes 4 hores (o l’hi posem durant 1/2 hora en aigua calenta, si no ho havíem previst).',
          'Escalfem oli en un topí o en una olleta de cul gruixut. Hi posem els grans d’all xafats i l’ordi ben escorregut. Remenem i deixem un parell de minuts.',
          'Mentrestant, tallem la xirivia pel mig, longitudinalment. La pastanaga i el nap els tallem a daus petits.',
          'Posem aquestes verdures al topí. Hi afegim la farigola i el brou i fem bullir 10 minuts.',
          'Retirem la xirivia i els alls. Hi aboquem els pèsols, i deixem que cogui 15 minuts més.',
          'Tastem de sal i servim.',
        ],
      },
    ],
    variants: [
      {
        p: 'Podem utilitzar altres verdures, com la carbassa, l’api, la ceba tendra, el porro, la patata… Només cal fer atenció a tirar primer les verdures més dures. Per combatre una altra afecció típicament primaveral, l’astènia, trencarem un ou de corral al plat abans d’abocar-hi la sopa -ben calenta, perquè es cogui bé la clara-.',
      },
    ],
    categories: ['primers'],
    tags: ['brou', 'farigola', 'naps', 'ordi', 'pastanaga', 'pesols', 'sopa', 'verdura'],
  },
  {
    id: 'mona-de-pasqua-de-les-dabans',
    createdAt: '2013-03-30T22:16:31+02:00',
    title: 'Mona de Pasqua (de les d’abans)',
    intro: [
      {
        p: 'Recordo sense especial fervor les mones que ens feia la nostra padrina Maria. Eren un híbrid entre les tradicionals i les de pastisseria de poble: fetes probablement amb una base de bescuit d’aquells mesurats amb el pot del iogurt, però amb els ous durs incrustats, “com manava la tradició”. Com que de xocolata no n’hi havia ni un gram, i per alegrar-les una mica, la padrina ens hi clavava uns pollets i unes plomes de coloraines que sempre vaig tenir la sospita que reciclava d’any en any. No eren sant de la meva devoció, ja ho veieu.',
      },
      {
        p: 'Per satisfer el meu desig de menjar una mona bona i autèntica, vaig decidir preparar-la jo mateixa; a la manera tradicional, és a dir, amb una massa de pa dolç, decorada de manera molt rústica amb uns quants ous durs. I per tant, vaig començar a buscar receptes. Primer obstacle: és evident que, avui en dia, les mones que s’exposen a les pastisseries de Barcelona ja no tenen res a veure amb les d’abans. La decoració ha usurpat clarament el protagonisme, i les masses han quedat reduïdes a simples pedestals per a les Hello Kitty o els poblats dels barrufets de xocolata. Per sort, a les terres de l’Ebre i més al sud, fins a Múrcia, els forners segueixen fent les mones com sempre s’havien fet. La mona (de les d’abans) que he preparat i la que menjaré a partir d’ara té doncs un accent meridional.',
      },
    ],
    cost: 'Cost aproximat per ració: 0,67 €.',
    unitCost: 0.67,
    ingredients: [
      {
        ul: [
          '375 g de farina de força',
          '125 ml d’oli d’oliva verge',
          '125 ml de llet sencera, més dues cullerades per pintar la mona',
          '1 ou gros, i un altre més petit per pintar la mona',
          '80 g de sucre, més una quantitat extra per després recobrir la mona',
          'La pell de 1/2 taronja, ratllada',
          '12 g de llevat fresc',
          '1 cullerada de cafè de sal, aigua',
          '4 ous durs',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Esgrunem el llevat de forner. El barregem amb la llet una mica tèbia (però que no superi els 40 °C), 1/2 cullerada de sucre i 2 cullerades de farina.',
          'Remenem, tapem amb un drap i deixem reposar 30 minuts. Aquesta mescla augmentarà de volum.',
          'Batem el sucre i l’ou en un bol gros. Hi afegim l’oli, la sal i la ratlladura de taronja, tot remenant.',
          'Hi incorporem la meitat de la farina restant, i pastem. Això serà molt enganxifós.',
          'Hi incorporem la mescla que hem fet fermentar, i la resta de la farina.',
          'Seguim pastant uns 5 minuts, fins a obtenir una massa llisa, que seguirà sent bastant enganxifosa.',
          'Formem una bola. La col·loquem en un bol sucat amb oli. Tapem i esperem que dobli el seu volum.',
          'Reprenem la massa, l’aplanem i en <a href="http://www.youtube.com/watch?v=K_zAQ9TQCAw&amp;feature=endscreen&amp;NR=1" target="_blank" rel="noopener">fem una tira llarga</a>. En separem un retalls, que utilitzarem més endavant, i unim els dos extrems per formar una corona.',
          'Dipositem la massa en una safata de forn. Tapem amb un drap humit i deixem que dobli novament el volum.',
          'Mentrestant, escalfem el forn a 180 °C.',
          'Ara hi col·loquem els ous durs. Per damunt, formem una creu amb dues tires de la massa que havíem reservat abans.',
          'Batem l’ou restant amb un rajolí de llet. Amb aquest líquid, i amb molta cura, pinzellarem la mona per donar-li un acabat llustrós.',
          'Hi tirem uns grapadets de sucre pel damunt.',
          'Enfornem a mitja altura durant uns 30 minuts, o fins que estigui daurada la mona. El temps dependrà del gruix de la massa.',
          'La deixarem refredar fora del forn, damunt d’una reixeta.',
        ],
      },
    ],
    variants: [
      {
        p: 'Per la Pasqua grega es fa una preparació gairebé idèntica: el <a href="http://www.telegraph.co.uk/foodanddrink/recipes/9948248/Tsoureki-a-Greek-Easter-bread-recipe.html" target="_blank" rel="noopener">Tsoureki</a>. A Portugal tenen el <a href="http://paobolosecia.blogspot.com.es/2009/04/folar-de-pascoa.html" target="_blank" rel="noopener"><i>folar de Páscoa</i></a><i>.</i> I a moltes regions de l’Itàlia meridional també preparen mones semblants amb denominacions diverses: la <a href="http://www.academiabarilla.com/italian-recipes/puglia/scarcella-pasqua-easter-braided-ring-cake.aspx" target="_blank" rel="noopener">scarcella</a> de la Puglia, el <a href="http://www.casatiello.it/" target="_blank" rel="noopener"><i>casatiello</i></a><i> </i>napolità, la <a href="http://ricette.giallozafferano.it/Cuddura-cull-ova.html" target="_blank" rel="noopener"><i>cuddura</i></a> siciliana, la <a href="http://nuke.sanmartinoditaurianova.it/ASanMartino/ASgutadolcetipico/tabid/189/Default.aspx" target="_blank" rel="noopener"><i>sguta</i></a> calabresa… Búlgars, romanesos, armenis, però també alemanys i danesos tenen les seves variants de pa pasqual: amb ou dur o sense; en forma de corona, de trena, o de figureta, i amb ingredients propis de cada regió: oli o mantega, fonoll, aigua de taronger, panses, ametlles, o fins i tot ingredients salats com el formatge i l’embotit.',
      },
    ],
    categories: ['postres'],
    tags: ['mona', 'ou', 'pasqua', 'tortell'],
  },
  {
    id: 'gehaktballen',
    createdAt: '2013-03-27T22:08:28+02:00',
    title: 'Gehaktballen',
    intro: [
      {
        p: 'Són mandonguilles, efectivament. Un plat que es prepara a tot arreu, però que mai no és ben bé igual. Cada país (i cada casa) adapta els ingredients al territori i a la tradició que ha heretat. Nosaltres, mediterranis, hi posem all. Els holandesos prefereixen posar-hi nou moscada, un dels productes més apreciats de les seves colònies. Es podria fer antropologia a partir de les mandonguilles? Probablement, però ho deixarem per més endavant. Tastem primer les mandonguilles dels holandesos. Perdó, les <i>Gehaktballen</i>!',
      },
    ],
    cost: 'Cost aproximat per ració: 1,47 €.',
    unitCost: 1.47,
    ingredients: [
      {
        ul: [
          '600 g de carn picada de vedella',
          '100 ml de llet sencera',
          '2 llesques de pa de motllo sense crosta',
          '2 cebes tendres',
          '1 cullerada de cafè de nou moscada',
          '1 cullerada sopera de julivert trinxat',
          'Oli d’oliva, sal i pebre',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Posem la llet en un cassó, junt amb el pa esgrunat, la nou moscada i un bon pessic de sal.',
          'Ho fem bullir uns 3 minuts, tot remenant amb una forquilla. Ha de quedar una massa homogènia. (I enganxifosa, també).',
          'Trinxem ben petites les cebes tendres. Les mesclem amb la carn picada, el julivert i la massa del cassó, que ja s’haurà refredat.',
          'Refrigerem durant uns 30 minuts.',
          'Ens untem les mans en oli i formem boletes de la mida d’una nou.',
          'Les daurem en una paella amb oli d’oliva, sacsejant perquè es fregeixin de totes bandes.',
          'Un cop fetes, les escorrem damunt d’un paper de cuina.',
          'Les podem servir amb pèsols de temporada, que haurem bullit durant 5 minuts en aigua salada i que tot seguit saltarem en una part de l’oli de fregir les <i>gehaktballen</i>, filtrat i amb una mica de julivert.',
        ],
      },
    ],
    variants: [
      {
        p: 'Les <i>Gehaktballen</i>, o mandonguilles, o les seves cosines grans, ja es diguin <i>meat loaf</i> o <i>polpettone</i>, són presents a totes les cuines, amb múltiples variants. Poseu-hi orenga, all, arròs, pa ratllat, bulgur o cus-cus. Fregiu-les en oli o coeu-les en brou. Acompanyeu-les de patates, pasta de sopa o amanida. Afogueu-les en <i>gravy </i>o en<i> </i>salsa de tomàquet… Proveu totes les versions fins exhaurir-les. Les mandonguilles, en el fons, són com el sexe. Acabareu menjant el mateix, però sempre us semblarà una novetat.',
      },
    ],
    categories: ['carmanyola', 'segons'],
    tags: ['carn', 'gehaktballen', 'mandonguilles', 'pesols'],
  },
  {
    id: 'maduixots-amb-iogurt-grec',
    createdAt: '2013-03-27T19:34:50+02:00',
    title: 'Maduixots amb iogurt grec',
    intro: [
      {
        p: 'No sempre cal acabar un àpat amb postres sofisticades o pastissets que requereixen hores de preparació. Aquests maduixots es fan en dos minuts i, a més de ser deliciosos i plens de vitamines, ens entren pels ulls: ens agrada el color cridaner de la fruita, la consistència cremosa del iogurt grec, l’aspecte llustrós del sucre a mesura que es va fonent… Ens en menjaríem una plata!',
      },
    ],
    cost: 'Cost aproximat per ració: 1,15 €.',
    unitCost: 1.15,
    ingredients: [
      {
        ul: ['500 g de maduixots (o 5-6 per cap)', '2 iogurts grecs', 'Sucre morè'],
      },
    ],
    prep: [
      {
        ol: [
          'Rentem els maduixots i en traiem les fulles.',
          'Un cop escorreguts, els posem en un bol.',
          'Hi aboquem unes cullerades de iogurt grec (mig vaset per ració).',
          'Ensucrem els maduixots amb sucre morè, a gust del comensal.',
        ],
      },
    ],
    variants: [
      {
        p: 'La nata és l’acompanyant clàssic dels maduixots. És una alternativa ideal, sempre que no sigui d’aquells pots en esprai que ens recorden (i amb raó) un article de broma. La nata en esprai es desmunta, dóna a les postres un aspecte groguenc, pansit i greixós. Es destrempa i ens destrempa. Si no teniu una <a href="http://www.granjavendrell.com/p/les-nostres-especialitats.html" target="_blank" rel="noopener">granja</a> a la vora, compreu nata fresca al supermercat i feu el favor de muntar-la.',
      },
    ],
    categories: ['postres'],
    tags: ['iogurt-grec', 'maduixots', 'sucre'],
  },
  {
    id: 'arros-amb-bacalla-i-sobrassada',
    createdAt: '2013-03-25T17:06:12+02:00',
    title: 'Arròs amb bacallà i sobrassada',
    intro: [
      {
        p: 'A <i>Comiendo con Carvalho</i>, un recull de receptes que apareixen als llibres de Manuel Vázquez Montalbán, hi ha l’arròs amb bacallà i sobrassada que el famós detectiu prepara per a la Charo a <i>Tatuaje</i> (1975). En comparació a la recepta de Carvalho, contundent i sòlida com correspon al personatge, la que jo us proposo pot semblar fins i tot <i>light</i>. (Res més lluny de la meva intenció). Com a fonament de la meva concepció de la cuina i el menjar, els escrits de MVM són imprescindibles. Aprofito per recomanar-vos-en la lectura.',
      },
    ],
    cost: 'Cost aproximat per ració: 1,45 €.',
    unitCost: 1.45,
    ingredients: [
      {
        ul: [
          '400 g d’arròs',
          '300 g de bacallà dessalat i esmicolat',
          '100 g de sobrassada',
          '4 grans d’all',
          '1 ceba',
          '1 pebrot verd',
          '150 g de tomàquet triturat',
          '75 ml de vi blanc',
          '<i>Pimentón de La Vera</i>',
          'Oli d’oliva extra verge, sal',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Triturem la ceba, el pebrot verd i l’all ben petits (altrament dit <i>en brunoise</i>). Els posem en una cassola amb oli i una cullerada de sal, i els sofregim.',
          'Hi incorporem el vi blanc i deixem que s’evapori.',
          'Hi afegim després la sobrassada, que xafem amb la cullera perquè es desfaci en el sofregit.',
          'Finalment, hi aboquem el tomàquet triturat i deixem un parell de minuts.',
          'Posem el bacallà esmicolat i l’arròs a la cassola. Remenem i condimentem amb una culleradeta de <i>pimentón de La Vera</i>.',
          'Tot seguit, hi afegim l’aigua (uns 800 ml, el doble que d’arròs).',
          'Quan arrenqui el bull, comptem 12 minuts i apaguem el foc.',
          'Deixem reposar 5 minuts més i servim.',
        ],
      },
    ],
    variants: [
      {
        p: 'El plat és tan consistent que es pot servir amb una amanida i prou. Tanmateix, si us sembla poc, junt amb l’arròs podeu afegir-hi també dues carxofes tallades i fregides, o –més cap al final de la cocció- uns 200 g de mongetes blanques cuites. Acompanyeu aquest plat amb una cerveseta, i la migdiada està assegurada!',
      },
    ],
    categories: ['carmanyola', 'plat-unic', 'primers'],
    tags: ['arros', 'bacalla', 'pimenton-de-la-vera', 'sobrassada'],
  },
  {
    id: 'conill-a-la-llebre',
    createdAt: '2013-03-18T21:00:01+02:00',
    title: 'Conill a la llebre',
    intro: [
      {
        p: 'La meva àvia Lluïsa anomenava així un plat que, amb petites variacions, es coneix normalment com a “conill amb xocolata”. Puc imaginar que, a la casa de Sarrià on ella treballava com a cuinera, preparaven la llebre d’una manera semblant. La recepta es devia adaptar a la carn molt més melosa i comuna del conill i, per aquest motiu, va acabar rebent un nom lleig i incongruent que, tot i això, vull mantenir en homenatge a la millor cuinera de la família.',
      },
    ],
    cost: 'Cost aproximat per ració: 2,04 €.',
    unitCost: 2.04,
    ingredients: [
      {
        ul: [
          '1 conill trossejat',
          '1 got de vi ranci o xerès',
          '300 g d’escalunyes o cebes del platillo',
          '1 pastanaga grossa',
          '1 fulla de llorer',
          '1 branqueta de farigola',
          'Oli d’oliva extra verge, pebre negre, sal',
          '2 grans d’all',
          '10-12 ametlles torrades',
          '40 g de xocolata a la pedra',
          'Julivert',
          '2 llesques de pa sec',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Salem i empebrem els trossos de conill (reservant el fetge per la picada). Els rostim de totes bandes en una cassola amb oli, a foc viu.',
          'Pelem les escalunyes o cebetes. Tallem la pastanaga en rodanxes. Incorporem les verdures a la cassola.',
          'Quan agafin color, hi aboquem el vi ranci. Sacsegem alegrement i deixem que el vi s’evapori a la meitat.',
          'Afegim un got d’aigua a la cassola (o la quantitat que calgui per cobrir els trossos de conill), la fulla de llorer i la branca de farigola.',
          'Fem coure a foc baix i amb la cassola tapada durant 30-35 minuts, vigilant que la salsa no s’evapori completament. Hi afegim més aigua si és el cas.',
          'Mentrestant, prepararem la picada: fregim el pa, el fetge del conill i els grans d’all sencers.',
          'Els posem en un morter amb les ametlles, un bri de julivert i un pessic de sal. Hi afegim també la xocolata a trossos. Piquem ben fi. Deixatem la picada amb una cullerada del suc de cocció i l’aboquem a la cassola, escurant bé el morter.',
          'Remenem, tastem, rectifiquem de sal (si cal) i deixem coure 10 minuts més, perquè la salsa quedi ben lligada.',
        ],
      },
    ],
    variants: [
      {
        p: 'La carn de llebre, molt més dura que la de conill, requereix un marinat que la faci més tendra. En <a href="http://ebook62.es/llibre_la-cuina-que-torna_546_ebook.html">Josep Lladonosa</a> recomana marinar també el conill, durant 24 hores, en una barreja de vi negre i xerès, amanida amb ceba, porro, farigola i altres condiments. Un altre suggeriment: proveu a fer la picada amb un grapadet de carquinyolis, en substitució del pa fregit, per donar al plat un toc una mica més dolç i anisat. Si servim el conill amb una bona quantitat d’arròs blanc, ja no ens caldrà menjar res més.',
      },
    ],
    categories: ['segons'],
    tags: ['carn', 'conill', 'llebre', 'picada'],
  },
  {
    id: 'escudella-senzilla',
    createdAt: '2013-03-17T19:22:27+02:00',
    title: 'Escudella senzilla',
    intro: [
      {
        p: 'De pasta, sempre. Però també d’altres ingredients que poden variar segons el que hi hagi al rebost: una mica de llegums, arròs, patata… Aquesta escudella és un autèntic <i>patchwork</i> de la cuina, resposta infal·lible al “què puc fer avui per sopar?” (generalment pronunciat mentre obrim els armaris de la cuina) i una de les opcions que menys afectaran la nostra butxaca.',
      },
    ],
    cost: 'Preu aproximat per ració: 0,37 €.',
    unitCost: 0.37,
    ingredients: [
      {
        ul: [
          '200 g d’arròs bomba',
          '100 g de fideus',
          '1 ceba',
          '250 g de cigrons cuits, i una mica de l’aigua de cocció',
          '200 g de bledes (trossejades, sense el tronxo)',
          'Oli d’oliva extra verge, sal',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Posem oli en una marmita i hi sofregim la ceba trinxada.',
          'Per altra banda, fem bullir 1 1/2 l d’aigua (amb el suc de coure els cigrons) en un cassó. Salem i hi tirem les bledes.',
          'Quan la ceba comenci a transparentar, hi afegim l’arròs, i tot seguit els fideus.',
          'Abans que es torrin, aboquem el contingut del cassó a la marmita.',
          'Tapem i fem coure uns 15 minuts. Un cop apagat el foc, deixem reposar 5 minuts abans de servir.',
        ],
      },
    ],
    variants: [
      {
        p: 'Si en lloc de cigrons hi voleu posar mongetes seques, l’escudella us quedarà la mar de bé. En lloc de les bledes, també podeu utilitzar coliflor, bròquil, pastanaga o patata trencada. Ometeu qualsevol dels ingredients citats, però no hi afegiu gran cosa més. Aquest plat ens agrada precisament pel seu esperit auster, quasi monacal.',
      },
    ],
    categories: ['primers'],
    tags: ['arros', 'bledes', 'cigrons', 'escudella', 'fideus', 'oli'],
  },
  {
    id: 'trinxat',
    createdAt: '2013-03-10T12:19:35+02:00',
    title: 'Trinxat',
    intro: [
      {
        p: 'Els plats rústics i d’hivern, com el trinxat de la Cerdanya, acostumen a ser molt calòrics. I, pitjor encara, entre els ingredients hi sol haver cansalada o embotit. O sigui, greixos saturats que als urbanites de vida sedentària no ens fan cap servei. La versió que us proposo té perill, sí, però en quantitats moderades. Per contrarestar-lo, només ens cal acompanyar el plat amb una mica d’autoindulgència.',
      },
    ],
    cost: 'Cost aproximat per ració: 0,68 €.',
    unitCost: 0.68,
    ingredients: [
      {
        ul: [
          '1 col d’hivern d’uns 750 g',
          '1 porro (la part blanca)',
          '200 g de cansalada viada',
          '2 patates mitjanes',
          '3 grans d’all',
          'Oli d’oliva extra verge, sal i pebre.',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Separem una per una les fulles de la col, les rentem, eliminem els tronxos massa gruixuts i les tallem a tires.',
          'Rentem el porro i el tallem en rodanxes d’1 cm aprox.',
          'Pelem les patates i les tallem a daus.',
          'Posem oli en una cassola fonda. Hi sofregim el porro i les patates.',
          'Quan agafin color, hi afegim la col, que de seguida es començarà a pansir.',
          'Aleshores hi aboquem aigua fins a cobrir la verdura. Salem i deixem coure a foc baix.',
          'Passats uns 20 minuts, traiem la verdura i la deixem escórrer.',
          'Tallem la cansalada a trossos prims i la fem suar en una paella. Descartem tot el greix que se’n desprengui. Apartem algun trosset de cansalada per decorar.',
          'Pelem els alls i els tallem en làmines fines. Els afegim a la cansalada, amb un raig d’oli.',
          'Tot seguit, hi afegim la verdura ben escorreguda. Remenem. S’ha d’esmicolar bastant, fins aconseguir una textura de puré amb trossos.',
          'L’emmotllem per donar-li forma de tambor. Servim amb algun trosset de cansalada torrada, un rajolí d’oli i un polsim de pebre pel damunt, i amb una llesca de pa torrat per acompanyar.',
        ],
      },
    ],
    variants: [
      {
        p: 'La recepta original prescindeix del porro i simplifica encara més la preparació, ja que col i patata van directament a bullir, sense aquest daurat previ que donarà més gustet a la verdura. Hi ha qui també prescindeix de l’all. La presentació més típica del trinxat és ben xafat i amb la cansalada pel damunt.',
      },
    ],
    categories: ['primers'],
    tags: ['cansalada', 'col', 'patata', 'trinxat'],
  },
  {
    id: 'pastis-de-xocolata-i-guinness',
    createdAt: '2013-03-09T19:54:04+02:00',
    title: 'Pastís de xocolata i Guinness',
    intro: [
      {
        p: 'Una cervesa Guinness, en un pastís? És la sorpresa inicial de qui, per primera vegada, prova aquest pastís negre com la nit. La cervesa negra no és un ingredient habitual en la pastisseria. I no obstant això, té una amargor i un aroma torrat que combinen meravellosament amb la xocolata. També aporta un toc de sobrietat als sempre embafosos pastissos amb mantega i sucre. És un pastís (fàcil) per a paladars adults.',
      },
    ],
    cost: 'Cost aproximat per ració: 0,71 € (el pastís surt gros, per 10-12 persones).',
    unitCost: 0.71,
    ingredients: [
      {
        ul: [
          '250 ml de cervesa Guinness',
          '300 g de mantega',
          '80 g de cacau en pols sense sucre (com el de marca Valor)',
          '400 g de sucre',
          '2 ous',
          '1 culleradeta d’aroma de rom',
          '140 ml de llet',
          '2 cullerades de postres de suc de llimona',
          '280 g de farina',
          '2 culleradetes  de bicarbonat',
          '1/2 cullerada de llevat en pols Royal',
          '250 g de sucre de llustre',
          '80 g de formatge cremós (Philadelphia)',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Posem el suc de llimona a la llet, i deixem que actuï uns 10 minuts.',
          'Agafem un motlle d’uns 22 cm de diàmetre. En cas que sigui metàl·lic, l’engreixem. Retallem un cercle de paper de forn, de la mateixa mida que la base del motlle, i el posem a dins (ens anirà molt bé per desemmotllar-lo).',
          'Escalfem el forn a 170 °C.',
          'Fem fondre 250 g de mantega en un cassó al foc, amb la cervesa.',
          'Hi afegim el cacau, l’aroma de rom i el sucre normal. Remenem.',
          'En un altre bol, batem els ous. Hi afegim la llet amb el suc de llimona.',
          'Ajuntem totes dues barreges líquides, remenant.',
          'Posem els ingredients secs (farina, llevat en pols i bicarbonat) en un bol gros.',
          'Hi aboquem la barreja líquida i remenem bé amb unes varetes.',
          'Quan la barreja sigui homogènia, la posem al motlle i cap al forn.',
          'Deixarem coure el pastís durant 45 minuts, sense ventilador. En acabar, aprofitarem el calor residual durant uns 10 minuts més, i després el traurem per fer que es refredi.',
          'Quan estigui completament fred, hi posem una cobertura feta de la següent manera:',
          'Fonem els 50 g de mantega restants. Hi afegim el sucre de llustre, tot barrejant.',
          'Finalment, incorporem el formatge cremós.',
          'Escampem aquesta cobertura amb una espàtula, per damunt i pels costats del pastís. Decorem amb una mica de pols de cacau per sobre.',
        ],
      },
    ],
    variants: [
      {
        p: 'No soc gens de <i>frostings</i> (com ara s’anomenen les cobertures cremoses dels pastissos; les mateixes que posen a les magdalenes de tota la vida, que amb aquest colofó hipercalòric passen a dir-se <i>cupcakes</i>). A banda que són massa embafosos pel meu gust, no em sento part d’aquest fenomen cursi i ensucrat en excés, envoltat de floretes, quadrets de vichy i altres diminutius, que sembla haver atacat com un virus a la pastisseria casolana.',
      },
      {
        p: 'Aquest pastís té una cobertura mínima perquè s’adapta al gust de qui se’l menjarà. Reconec, però, que té una certa gràcia embolcallar-lo completament en una cobertura ben blanca, feta amb els mateixos ingredients però multiplicant les quantitats per dos, o amb una barreja de mantega i xocolata blanca per a postres. Només quan es talla la primera porció, apareix la veritable personalitat (fosca) del pastís.',
      },
    ],
    categories: ['postres'],
    tags: ['cervesa', 'guinness', 'pastis', 'xocolata'],
  },
  {
    id: 'llaminera-amb-mel-i-cervesa',
    createdAt: '2013-03-06T23:00:17+02:00',
    title: 'Llaminera amb mel i cervesa',
    intro: [
      {
        p: 'Que aquest tall es digui <i>llaminera</i> és un bon presagi. El nom anticipa una experiència sensorial que, us asseguro, es correspon amb la definició que en dóna el DIEC: “Que convida a menjar per la finor, la delicadesa, del seu gust”. I això que la llaminera, ben mirat, és de porc: una bèstia que a priori no associàvem amb la finor o la delicadesa. Heu provar la llaminera, doncs, per acabar amb aquests prejudicis.',
      },
    ],
    cost: 'Cost aproximat per ració: 2,15 €.',
    unitCost: 2.15,
    ingredients: [
      {
        ul: [
          '2 llamineres de porc',
          '1 ceba mitjana',
          '1 gra d’all',
          '3 cullerades soperes de mel',
          '1/2 llauna de cervesa',
          'Farina',
          'Oli d’oliva',
          'Una mica de sàlvia, farigola o marduix (o una barreja de totes tres herbes)',
          'Sal i pebre',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'En una paella amb oli, rostim les llamineres senceres a foc mig-fort, per deixar-les daurades per fora però encara tendres a l’interior. Les retirem.',
          'Al mateix oli, sofregim la ceba i l’all.',
          'Abans que la ceba agafi color, hi afegim mitja culleradeta de farina i la fem torrar molt lleugerament.',
          'Hi afegim la mel i la cervesa.',
          'Salem, empebrem, hi posem les herbes…',
          'Tornem a posar la carn a la paella.',
          'Baixem el foc i deixem coure, tapat, uns 10 minuts, o fins que la salsa s’hagi reduït a la meitat.',
          'Tallem les llamineres i servim.',
        ],
      },
    ],
    variants: [
      {
        p: 'Amb la carn de porc hi queda molt bé la fruita àcida: taronja, pinya, magrana… i també les pomes tipus Fuji. Proveu d’afegir a aquesta recepta una poma per cap: talleu-les a trossos d’1 cm de gruix aprox., daureu-les abans en una mica de mantega, i incorporeu-les a la paella junt amb la carn. Caldria afegir-hi un pèl més de cervesa perquè les pomes es coguin bé.',
      },
    ],
    categories: ['carmanyola', 'segons'],
    tags: ['carn', 'cervesa', 'llaminera', 'mel', 'porc'],
  },
  {
    id: 'risotto',
    createdAt: '2013-03-03T18:46:59+02:00',
    title: 'Risotto',
    intro: [
      {
        p: 'El risotto NO és arròs a la cassola. NO és paella. Digueu-me perepunyetes, però el fet d’anar incorporant gradualment el brou calent, sense deixar de remenar, i servir-lo amb una nou de mantega i parmesà acabat de ratllar, li dóna una consistència diferent, cremosa i delicada. El <i>risotto</i> mai no ha de quedar eixut i amb els grans solts, com promulguen alguns desaprensius. Si veieu que va per aquest camí, afegiu-hi més brou.',
      },
    ],
    cost: 'Cost aproximat per ració: 0,45 €.',
    unitCost: 0.45,
    ingredients: [
      {
        ul: [
          '400 g d’arròs rodó',
          '1 cullerada sopera de moll de l’os de bou (que podem treure dels <i>ossobuchi</i>)',
          '100 g de mantega',
          '1/2 ceba petita',
          '1/2 got de vi blanc sec',
          'Un pessic de safrà',
          '600 ml de brou de pollastre baix en greix',
          '50 g de parmesà o grana padano ratllat',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Posem la meitat de la mantega en una cassola de fons gruixut. Hi sofregim la ceba picada ben fina junt  amb el moll de l’os triturat, a foc baix.',
          'Abans que agafi color, hi afegim l’arròs. Pugem el foc i remenem, durant uns 3-4 min.',
          'Hi tirem aleshores el vi blanc. Deixem que s’evapori.',
          'Hi incorporem un cullerot de brou calent, i anem remenant mentre l’arròs l’absorbeix.',
          'Seguim afegint-hi brou calent a mida que l’arròs el necessita. Paciència…',
          'Posem el bri de safrà a l’última llossada de brou calent que aboquem a l’arròs. D’aquesta manera, conserva el seu aroma.',
          'Quan l’arròs encara està bastant caldoset, hi afegim la mantega restant i el formatge ratllat. Remenem bé i tapem un parell de minuts.',
          'Servim amb més formatge.',
        ],
      },
    ],
    variants: [
      {
        p: 'Si no teniu moll de l’os, prescindiu-ne. No se us acudeixi posar-hi pernil o bacon. En el moment de servir, podeu moldre una mica de pebre negre pel damunt de l’arròs. Aquest arròs, cremós i aromàtic, és la parella ideal per als ossobuchi. Tanmateix, qualsevol plat de peix blanc o d’aviram també hi combina a la perfecció.',
      },
    ],
    categories: ['primers'],
    tags: ['arros', 'risotto', 'safra'],
  },
  {
    id: 'cassola-de-divendres-sant-de-la-rosita-latorre',
    createdAt: '2013-02-26T20:43:02+02:00',
    title: 'Cassola de Divendres Sant de la Rosita Latorre',
    intro: [
      {
        p: 'El bacallà, abans considerat menjar de pobres, protagonitza una cassola deliciosa, que a casa nostra hem menjat sempre (i només!) el dia de Divendres Sant. Aquesta és doncs una fita en el nostre calendari gustatiu, com els panellets, el tortell de Reis o l’escudella i carn d’olla de Nadal. La recepta me l’ha dictada la meva mare i, segons ha dit ella després de provar-la, ha sortit ben bona!',
      },
    ],
    cost: 'Cost aproximat per persona: 3,30 € (per poc, però avui ens passem dels 3 euros…).',
    unitCost: 3.3,
    ingredients: [
      {
        ul: [
          '4 talls de morro de bacallà dessalat',
          '4 ous',
          '6 carxofes',
          '1 kg de patata per bullir',
          '1 ceba mitjana',
          'Oli d’oliva extra verge',
          'Farina',
          '2 grans d’all',
          'Julivert',
          '10-12 ametlles torrades',
          'Sal',
          '1/4 l d’aigua',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Els talls de bacallà han d’estar ben eixuts. Com a pas previ, els premem amb un drap, si cal.',
          'Enfarinem i fregim el bacallà. Reservem.',
          'Netegem les carxofes (i, a mida que ho fem, les anem posant en aigua amb suc de llimona, perquè no s’ennegreixin gaire). Les partim a quarts.',
          'Les escaldem uns 5 minuts i les deixem escórrer.',
          'Enfarinem i fregim les carxofes escaldades en l’oli de fregir el bacallà. Reservem.',
          'Posem a bullir els ous, per fer-los durs.',
          'En una cassola, sofregim la ceba.',
          'Pelem les patates i les tallem <a href="http://www.youtube.com/watch?v=hItFLYCBX04" target="_blank" rel="noopener">així</a>.',
          'Quan la ceba estigui daurada, afegim els trossos de patata a la cassola i els deixem fer uns 3 minuts.',
          'Cobrim d’aigua, i deixem coure a foc lent uns 10 minuts.',
          'Fem una picada amb all, ametlles, julivert i sal. L’aboquem a la cassola.',
          'Al mateix temps, hi posem els talls de bacallà i la carxofa que teníem reservats, i els ous durs pelats i partits per la meitat.',
          'Deixem que la cassola faci xup-xup i es barregin els sabors. Apaguem el foc si la cassola reté bé l’escalfor, sacsegem i, passats 5 minuts, ja podem servir.',
        ],
      },
    ],
    variants: [
      {
        p: '<i><a href="http://www.cervantesvirtual.com/servlet/SirveObras/01305031933804947977802/index.htm" target="_blank" rel="noopener">La cuynera catalana</a></i> de 1851 conté una versió d’aquest plat, amb pèsols en lloc de patata i sense els ous. Narcís Comadira explica al seu deliciós llibre <i><a href="http://www.grup62.cat/llibre-formules-magistrals-94229.html" target="_blank" rel="noopener">Fórmules magistrals</a></i> que ell també prepara el <i>platillo</i> de Divendres Sant amb bacallà, carxofa i pèsols, però ja hi afegeix ou dur. <i><a href="http://www.cossetania.com/la-cuina-de-les-terres-de-lebre-tercera-edicio-41" target="_blank" rel="noopener">La cuina de les Terres de l’Ebre</a></i>, de M. Carme Queralt, conté una recepta d’abadejo amb suc sense patata ni pèsols; només amb carxofa i ou dur. Així doncs, entorn del bacallà i de la carxofa, únics elements fixos en aquesta cassola, circulen unes quantes versions. Totes, a ben segur, per llepar-se els dits.',
      },
    ],
    categories: ['plat-unic'],
    tags: ['bacalla', 'carxofa', 'cassola', 'divendres-sant', 'ou', 'patata', 'peix'],
  },
  {
    id: 'botifarra-amb-cebetes',
    createdAt: '2013-02-23T21:06:18+02:00',
    title: 'Botifarra amb cebetes',
    intro: [
      {
        p: 'Si hi ha un plat que trobarem en totes les fondes, restaurants de carretera i menús de 10 €, aquest és la botifarra (amb patates o amb mongetes; amb allioli o sense).  Coure una botifarra no té cap secret i és un àpat econòmic que, a més, la canalla menja sense fer escarafalls. L’única condició és que la carn sigui de la millor qualitat. L’ideal, que sigui ecològica. Aquest cop, doncs, no cal que entrem al Mercadona.',
      },
    ],
    cost: 'Cost aproximat per persona: 1,52 €.',
    unitCost: 1.52,
    ingredients: [
      {
        ul: [
          '4 <a href="http://ecosalgot.com/ecogranja_frescos.html" target="_blank" rel="noopener">botifarres Salgot</a>',
          '750 g de cebetes del platillo',
          '30 g de mantega',
          '1 cullerada de sucre',
          'Suc de 1/2 llimona',
          'Oli, sal, julivert',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Escaldem les cebes per poder-les pelar més fàcilment.',
          'Punxem una mica les botifarres i les coem a la paella amb molt poc oli. Amb 5 minuts per cada banda n’hi hauria d’haver prou. Les retirem i les reservem.',
          'En la mateixa paella, on ara també hi haurà una mica del greix de les botifarres, daurem les cebetes.',
          'Hi afegim el suc de llimona, mantega i aigua per cobrir-les.',
          ' Abaixem el foc i les deixem a foc lent, durant uns 15 minuts, fins que quedin toves i hagin absorbit quasi tot el líquid.',
          'Hi tirem el sucre i remenem durant uns 3 minuts més. Servim amb una mica de julivert.',
        ],
      },
    ],
    variants: [
      {
        p: 'No ho he dit abans per no descoratjar ningú, però pelar les cebetes és molt entretingut. Tot i que escaldar-les facilita la feina, són molt petites, no s’acaba mai! Podeu fer-ho amb anticipació i reservar-les fins que les hagueu de coure a la paella o, si no, utilitzar les <a href="http://www.lasirena.es/product/&amp;path=4_42&amp;ID=563" target="_blank" rel="noopener">cebetes congelades de la Sirena</a>.',
      },
    ],
    categories: ['carmanyola', 'segons'],
    tags: ['botifarra', 'carn', 'ceba'],
  },
  {
    id: 'fricando',
    createdAt: '2013-02-17T12:32:55+02:00',
    title: 'Fricandó',
    intro: [
      {
        p: 'Hi ha plats de tradició familiar que, en servir-los, acostumen a generar els mateixos comentaris. Una de les cantarelles que associo al fricandó és que “perquè quedi ben tendre, s’ha de fer amb filet de pobre”. Comprarem doncs aquest tall amb reminiscències de postguerra, perquè les mares sempre tenen raó.',
      },
    ],
    cost: 'Cost aproximat per persona: 2,95 €.',
    unitCost: 2.95,
    ingredients: [
      {
        ul: [
          '4 talls de filet de pobre',
          'Un potet de moixernons',
          '50 ml d’oli d’oliva',
          '1 ceba',
          '1 pastanaga',
          '2 tomàquets pera',
          '1/2 got de vi ranci',
          '1 got de brou de pollastre',
          'Farina',
          'Sal i pebre',
          'Espècies: 1 canó petit de canyella i 2 claus d’olor',
          'Per la picada: 1 gra d’all, 10 ametlles torrades, pa torrat i julivert',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Posem els bolets a estovar en un got d’aigua tèbia.',
          'Salem i empebrem la carn. La passem per farina.',
          'Fregim lleugerament la carn en una paella amb oli. Els talls, un cop fregits, els anem reservant.',
          'Filtrem l’oli de fregir la carn i el passem a una cassola de terrissa. Hi sofregim la ceba i la pastanaga picades, durant uns 10 min.',
          'Hi incorporem després el tomàquet, pelat i a dauets. Ho deixem uns 5 m, fins que es redueixi.',
          'Aleshores hi posem el vi, els claus d’olor i la canyella. Hi afegim també l’aigua d’estovar els moixernons, ben colada, i el brou de pollastre. Remenem.',
          'Hi incorporem la carn que teníem reservada. Tapem i deixem coure a foc baix durant uns 30-40 m.',
          'Mentrestant, saltem els bolets en un rajolí d’oli.',
          'Quan la carn estigui ben tendra, la traiem un moment de la cassola i passem la salsa pel colador xinès.',
          'Posem la carn, els bolets i la salsa, ara ben fina, altre cop a la cassola.',
          'Passats 5 m, hi aboquem la picada. Deixem que faci xup-xup a foc molt baix, 5 m més, fins que els ingredients quedin ben lligats.',
          'Ja es pot servir. El fricandó és encara més bo l’endemà.',
        ],
      },
    ],
    variants: [
      {
        p: 'Hi ha mil maneres de fer el fricandó: es poden utilitzar bolets frescos quan sigui temporada, substituir el vi ranci per conyac, condimentar-lo amb un bri d’orenga en lloc de canyella i clau, o deixar que l’únic aroma sigui el dels moixernons… Proveu totes les variants! També podeu seguir el suggeriment de la meva amiga Elisenda i servir-lo damunt d’un llit de puré de patata.',
      },
    ],
    categories: ['segons'],
    tags: ['carn', 'filet-de-pobre', 'fricando', 'moixernons'],
  },
  {
    id: 'sopa-de-ceba',
    createdAt: '2013-02-16T23:02:50+02:00',
    title: 'Sopa de ceba',
    intro: [
      {
        p: 'Amb els seus tons daurats, la sopa de ceba és capaç d’escalfar els vespres més rúfols i il·luminar qualsevol taula. Té la simplicitat amable dels plats tradicionals, fets amb ingredients simples, i a la vegada, l’aire una mica démodé que tant ens agrada. És com les rutes pels castells de la Loire o els hotels amb moqueta: tot un clàssic francès.',
      },
    ],
    cost: 'Cost aproximat per persona: 0,89 €.',
    unitCost: 0.89,
    ingredients: [
      {
        ul: [
          '1300 ml de brou de pollastre',
          '4 cebes',
          '1 got de vi blanc sec',
          '4 rovells d’ou',
          '4 llesques de pa de pagès, torrat o del dia anterior',
          '100 g de formatge (per exemple, Emmental o Gruyère) ratllat',
          '2 cullerades de mantega',
          'Sal i pebre',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Tallem les cebes en làmines fines.',
          'Les posem en una cassola amb mantega i un pessic de sal i les fem suar a foc molt baix.',
          'Quan estiguin meloses, hi afegim el vi blanc. Deixem un parell de minuts.',
          'Hi aboquem aleshores el brou calent i deixem coure 15-20 minuts.',
          'Agafem cassoletes individuals. Posem un rovell d’ou a cada una.',
          'Repartim la sopa a les cassoletes. Al damunt hi posem també una llesca de pa i un grapat generós de formatge.',
          'Gratinem i servim amb un polsim de pebre.',
        ],
      },
    ],
    variants: [
      {
        p: 'Poques variants admet aquesta sopa, si no volem desvirtuar-la. Com a molt, podem fer el sofregit en oli d’oliva i afegir-hi un bri de timó, per donar-li una flaire més mediterrània. L’alternativa que acostumo a practicar és de caire pràctic i golafre: posar-hi l’ou sencer.',
      },
    ],
    categories: ['primers'],
    tags: ['ceba', 'sopa'],
  },
  {
    id: 'tarte-tatin',
    createdAt: '2013-02-13T23:03:14+02:00',
    title: 'Tarte Tatin',
    intro: [
      {
        p: 'Un dels al·licients de cuinar  –a més de poder menjar i compartir els resultats de la nostra feina– és la creativitat que envolta els preliminars. Remenar receptes i comparar diverses versions d’un mateix plat ja ens estimula les papil·les i fa bullir la imaginació. És com arreglar-se per una cita. (El que passi tot seguit ja és més arriscat, i ens pot fer repetir o donar per rematada la operació). La Tatin mai no us decebrà. Animeu-vos a provar-la!',
      },
    ],
    cost: 'Cost aproximat per ració: 0,74 €.',
    unitCost: 0.74,
    ingredients: [
      {
        ul: [
          '8 pomes Royal Gala petites',
          'El suc de mitja llimona',
          '100 g de sucre',
          '60 g de mantega',
          '50 ml de Calvados o un altre licor sec',
          'Una beina de vainilla',
          'Pasta de full (feu-la vosaltres mateixos si hi teniu pràctica; si no, compreu-la feta)',
        ],
      },
      {
        p: 'Necessitarem també una cassola de terrissa o de ferro colat (de vores baixes), o bé una paella de ferro (de les d’abans, sense antiadherents ni mànecs aïllants, perquè l’haurem de ficar a dins del forn).',
      },
    ],
    prep: [
      {
        ol: [
          'Escalfem el forn a 190 °C.',
          'Pelem les pomes, les partim per la meitat verticalment i n’eliminem el cor. A mida que tinguem a punt les mitges pomes, les anem deixant en un bol amb aigua i el suc de llimona, per evitar que s’ennegreixin.',
          'Posem el sucre a la cassola, a foc molt baix.',
          'Obrim longitudinalment la beina de vainilla i amb la fulla del ganivet en traiem les llavors. Posem les llavors i la beina junt amb el sucre, per donar-hi aroma. Hi afegim també el licor.',
          'El sucre començarà a bullir i tot seguit a fer grumolls. Anem remenant, amb paciència.',
          'Quan el sucre agafi una tonalitat avellana i comenci a filar i a desprendre una olor deliciosa de caramel, traiem la cassola del foc.',
          'Retirem la beina de vainilla i hi posem la poma escorreguda, de manera ordenada i sense que es cavalquin els trossos, però cobrint el màxim de superfície. Primer, amb la part plana tocant a la cassola.',
          'Passats uns 5 m, tombem les mitges pomes i les deixem en la seva posició definitiva, amb la part convexa a baix.',
          'Afegim la mantega tallada a petits cubs pel damunt de la poma. Passats uns 5 m, i comptant que el forn ja deu estar a la temperatura idònia, retirem la cassola del foc.',
          'Agafem la pasta de full (d’un diàmetre una mica més gran que la cassola), i l’estenem per damunt de les pomes. Amb una cullera de fusta fiquem les vores cap a dins, per embolcallar el farciment de poma.',
          'Punxem una mica la pasta amb la punta d’un ganivet, perquè les pomes respirin.',
          'Coem al forn durant uns 30 minuts, fins que la pasta de full es vegi ben daurada.',
          'Traiem la cassola del forn i la deixem refredar un parell de minuts. (Ni un més! Si no, el caramel es solidificaria i faria que la Tatin ens quedés enganxada a la cassola per sempre més).',
          'Arriba el moment crític: abocar la Tatin en una plata. Per fer-ho, cal prendre precaucions, ja que pot regalimar caramel i cremar-nos. Per evitar-ho, col·loquem damunt la cassola un tros de paper de forn i -cap per avall- una plata que pugui contenir la cassola que hem posat al forn. Amb unes bones manyoples i un gest decidit, tombem la cassola com si fos una gran truita de patates.',
          'Servim la Tatin tèbia o, com a mínim, sense refredar a la nevera.',
        ],
      },
    ],
    variants: [
      {
        p: 'La Tatin a França és tota una institució. Això vol dir que hi ha puristes que us diran que no s’hi ha de posar Calvados. O que les pomes han de ser reinetes. Proveu-ho, segur que serà exquisit. Una bona idea és servir-la amb una bola de gelat de vainilla. Paradoxalment, la majoria de receptes també diuen que les pomes han de ser grosses, i alhora recomanen que cobreixin el màxim de superfície. I és clar, això s’aconsegueix molt millor amb pomes petites, com jo recomano. És una qüestió de geometria plana…',
      },
    ],
    categories: ['berenar', 'postres'],
    tags: ['pastis', 'poma', 'tatin'],
  },
  {
    id: 'pasta-e-fagioli',
    createdAt: '2013-02-12T19:55:37+02:00',
    title: 'Pasta e fagioli',
    intro: [
      {
        p: 'Els llegums i els cereals, humils protagonistes d’aquesta recepta, són una excel·lent font de nutrients. Segons diuen, si es combinen en un mateix àpat se n’aprofiten al màxim totes les virtuts. L’arròs amb <i>dal</i> de l’India, el <i>gallopinto</i> de l’Amèrica Central… Tants plats consistents en llegums i cereals, i que es consumeixen arreu del món i des de fa milers d’anys, segurament han de servir per corroborar-ne els beneficis.',
      },
    ],
    cost: 'Cost aproximat per ració: 0,45 €.',
    unitCost: 0.45,
    ingredients: [
      {
        ul: [
          '250 g de mongetes vermelles',
          '300 g de pasta',
          '1 ceba',
          '1 pastanaga',
          '1 branca d’api',
          '2 dents d’all',
          '2 tomàquets madurs',
          'Oli extraverge d’oliva',
          'Sal, pebre negre i julivert',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Posem les mongetes a remull durant tota la nit.',
          'Les esbandim i les posem en força aigua nova (3 – 4 cops el volum de les mongetes) freda i sense sal. En arrencar el primer bull, hi aboquem un cullerot d’aigua freda i reprenem l’ebullició, a foc lent.',
          'Fem un sofregit amb la ceba, la pastanaga, l’api i l’all ben trinxats, si pot ser en una cassola de ferro colat. Quan les verdures estiguin toves, hi afegim el tomàquet, pelat i trossejat, i deixem que cogui uns 10 m.',
          'Quan les mongetes hagin bullit aprox. 1 h, en separem la meitat i les passem pel passapurés, amb la meitat de l’aigua de cocció (que ens ho farà més fàcil).',
          'Aboquem aquest puré caldós al sofregit, salem i continuem la cocció a foc baix, remenant perquè no s’enganxi.',
          'Ara posem un tercer recipient al foc amb abundant aigua salada i fem bullir la pasta com habitualment, però deixant-la molt <i>al dente</i>.',
          'Tan bon punt les mongetes estiguin cuites (1 h 30 m – 1 h 45 m), les colem i les afegim a la cassola de ferro, amb el sofregit i el puré caldós. Hi aboquem també la pasta escorreguda i remenem bé.',
          'Deixarem coure 2 minuts més, perquè la pasta absorbeixi el sabor de les mongetes i el sofregit. En l’últim moment hi afegim una mica de julivert fresc.',
          'Coronem el plat amb un polsim de pebre acabat de moldre i un rajolí d’oli cru.',
        ],
      },
    ],
    variants: [
      {
        p: 'A Itàlia, aquest plat es fa tradicionalment amb <i>maltagliati</i> (una pasta mal girbada, que aprofita retalls sobrants). Nosaltres utilitzarem galets, ja que tenen unes dimensions ideals per aquest plat -semblants a les mongetes- i una forma que “recull” molt bé el suc. A més, és una pasta molt nostra, que no cal anar a comprar a cap <i>delicatessen</i>.',
      },
    ],
    categories: ['plat-unic', 'primers'],
    tags: ['llegums', 'mongetes', 'pasta'],
  },
  {
    id: 'ossobuco',
    createdAt: '2013-02-12T19:50:47+02:00',
    title: 'Ossobuco',
    intro: [
      {
        p: 'L’ossobuco rep el seu nom de l’os (en italià, <em>osso</em>; <em>buco</em> vol dir forat) que presenta, i que no és altra cosa que la pota de la vedella. Aquest tall és bastant econòmic i saborós. De cocció lenta, això sí. Però no cal que estem tot el temps pendents de la carn. Mentre es va coent, podem anar fent l’aperitiu. També es pot preparar a l’avançada, com la majoria de guisats, i escalfar en el moment de dur a taula. L’acompanya a la perfecció un risotto amb safrà, però també uns pèsols, unes patates bullides o una pasta fresca <i>in bianco</i>.',
      },
    ],
    cost: 'Cost aproximat per ració: 2,75 €.',
    unitCost: 2.75,
    ingredients: [
      {
        ul: [
          '4 talls d’ossobuco (jarret de vedella)',
          '100 ml d’oli',
          '1 ceba grossa',
          '2 pastanagues',
          '1 branca d’api',
          '1/2 got de vi blanc sec',
          '1 got de brou baix en sal',
          'Farina',
          'Sal i pebre',
          'Herbes aromàtiques: farigola, sàlvia i julivert',
          'La pell de 1/2 llimona ratllada',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Fem uns talls a la pell que envolta la carn, per evitar que s’arronsi en coure-la.',
          'Salem i empebrem la carn. L’enfarinem molt lleugerament.',
          'La fregim en una cassola baixa i ampla, on càpiguen els quatre talls.',
          'La retirem de la cassola i filtrem l’oli.',
          'En aquest mateix oli sofregim les verdures tallades a dauets, durant uns 10 min.',
          'Hi afegim després el vi blanc, el brou, i unes branquetes de farigola i de sàlvia.',
          'Tornem a posar la carn a la cassola, la tapem i deixem coure durant 1 h 30 min – 2 h. Hem d’estar atents que no s’evapori el líquid. Hi afegim brou, si és el cas.',
          'Retirem la carn de la cassola i la dipositem en una plata de servir.',
          'Passem la salsa pel passapurés. Hi afegim 1/2 cullerada de julivert picat i la pell de llimona. Remenem.',
          'Aboquem aquesta salseta pel damunt de la carn.',
        ],
      },
    ],
    variants: [
      {
        p: 'Hi ha moltes receptes que incorporen un parell de tomàquets (pelats i sense llavors) al sofregit. A mi no m’agrada el color marronós que agafa la salsa, però si no sou primmirats com jo, feu-ho. Hi queda bé.',
      },
      {
        p: 'A la picada de julivert i llimona hi podeu afegir un parell de dents d’all i, si sou agosarats, també un parell d’anxoves.',
      },
    ],
    categories: ['carmanyola', 'segons'],
    tags: ['carn', 'guisat', 'ossobuco', 'sofregit', 'vedella'],
  },
  {
    id: 'spaghetti-alle-vongole',
    createdAt: '2013-02-12T19:45:58+02:00',
    title: 'Spaghetti alle vongole',
    intro: [
      {
        p: 'Els <i>spaghetti con le vongole</i> (o <i>spaghetti alle vongole</i>), més coneguts a Nàpols com <i>vermecielle cu ‘e vongole</i>, són un plat típic de la cuina mediterrània, que cal degustar preferiblement davant del mar, en bona companyia i amb un vi blanc sec, cava o vi d’agulla. És imprescindible que les cloïsses siguin ben fresques.',
      },
    ],
    cost: 'Cost aproximat per ració: 1,20 €.',
    unitCost: 1.2,
    ingredients: [
      {
        ul: [
          '400 g aprox. de spaghetti (o, millor encara, vermicelli -més gruixuts)',
          '1/2 kg de cloïsses',
          'Oli extra verge d’oliva',
          '3 grans d’all',
          '2 peperoncini',
          '3/4 got de vi blanc',
          'Julivert fresc',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Netegem les cloïsses. Per fer-ho, s’han de submergir durant un parell d’hores en aigua salada. Tot seguit, s’esbandeixen amb un bon raig d’aigua i es deixen escórrer.',
          'Posem a bullir l’olla de la pasta, amb aigua abundant (1 litre per cada 100 g de pasta) i un parell de cullerades de sal grossa. Quan l’aigua arrenqui el bull, hi tirem els spaghetti.',
          'Fem coure la pasta molt <i>al dente</i> (un parell de minuts per sota de la seva cocció ideal).',
          'Mentrestant, fem obrir les cloïsses al vapor. Llencem les que no s’hagin obert.',
          'Colem i reservem el suc que han deixat anar les cloïsses. Traiem les closques, llevat d’algunes que ens serviran per decorar el plat.',
          'Tallem l’all ben primet i el fem sofregir en l’oli, junt amb els peperoncini.',
          'Al cap d’un minut, hi afegim les cloïsses, pugem la flama i sacsegem la cassola.',
          'Tot seguit, hi tirem el rajolí de vi blanc. Aprofitem per servir-nos-en una copa.',
          'Passats 2 o 3 m, hi afegim el líquid de les cloïsses prèviament filtrat. Aquest condiment no cal salar-lo gaire, però el tastarem abans de servir, per si de cas.',
          'Aboquem els spaghetti escorreguts a la cassola i deixem que facin l’últim bull amb el suquet del condiment, per absorbir-ne tot el sabor. Apaguem el foc i tirem per sobre un polsim de julivert fresc, ben trinxat. Deixem reposar un minut més i ja podem servir.',
        ],
      },
    ],
    variants: [
      {
        p: 'Hi ha diverses versions de la recepta, segons si hi ha tomàquet al sofregit o no n’hi ha. Els més moderats us diran que n’hi poseu una mica (tot just un parell de tomàquets de penjar, però). Jo, més d’extrems, us els he proposat <i>in bianco</i>. MAI, MAI, poseu formatge a la pasta amb cloïsses!',
      },
    ],
    categories: ['carmanyola', 'primers'],
    tags: ['cloisses', 'pasta', 'peix'],
  },
  {
    id: 'taronja-amb-mel-i-canyella',
    createdAt: '2013-02-12T19:40:19+02:00',
    title: 'Taronja amb mel i canyella',
    intro: [
      {
        p: 'Pràcticament a tothom li agrada la fruita, però algunes persones, per mandra de pelar-la (que ja és dir!), no en mengen prou. Portar a taula la fruita tallada, en macedònia, o en presentacions que entrin pels ulls, farà que aquests mandrosos no en vulguin consumir de cap altra manera. Si esteu segurs que això és el que voleu, endavant amb aquestes postres!',
      },
    ],
    cost: 'Cost aproximat per ració: 0,29 €.',
    unitCost: 0.29,
    ingredients: [
      {
        ul: ['3 taronges grosses', 'Mel', 'Canyella en pols'],
      },
    ],
    prep: [
      {
        ol: [
          'Pelem les taronges ben a l’arran.',
          'Les tallem en rodanxes fines, recollint la mica de suc que deixen.',
          'Les disposem en uns plats ben bonics.',
          'Hi posem per sobre el suc, dues cullerades de mel per cap i un polsim de canyella. Més fàcil, impossible!',
        ],
      },
    ],
    variants: [
      {
        p: 'Podeu fer el mateix amb kiwis, pinya o llesques de papaia. Substituir la mel per caramel o xarop d’agave és només complicar-se la vida.',
      },
    ],
    categories: ['postres'],
    tags: ['canyella', 'mel', 'taronja'],
  },
  {
    id: 'pastis-de-pastanaga-i-cinc-especies',
    createdAt: '2013-02-12T19:35:48+02:00',
    title: 'Pastís de pastanaga i cinc espècies',
    intro: [
      {
        p: 'Aquest pastís té un gust insòlit i un aspecte força lleig, que intento dissimular amb unes escates de xocolata negra. El color fosc ens enganya; ens fa pensar que ens trobarem amb un bescuit de xocolata, d’aquells tirant a eixuts que preparen les tietes. I no… L’ingredient amagat, la pastanaga, li dóna el punt just de humitat. Les cinc espècies (que trobarem en qualsevol supermercat xinès), tot un Big bang de sabor.',
      },
    ],
    cost: 'Cost aproximat per ració: 0,55 €.',
    unitCost: 0.55,
    ingredients: [
      {
        ul: [
          '50 g de farina blanca',
          '50 g de farina integral',
          '150 g de sucre, barreja de blanc i morè',
          '225 g de pastanagues picades',
          '75 g de nous picades',
          '75 g de panses moscatell',
          '100 ml d’oli d’oliva',
          '2 ous',
          '1 sobre de llevat Royal',
          '1 cullerada sopera de canyella',
          '1 cullerada sopera de 5 espècies',
          '1 cullerada petita de gingebre en pols',
          '1/2 cullerada petita de sal',
          'Raspadures de xocolata per la cobertura',
        ],
      },
    ],
    prep: [
      {
        ol: [
          'Escalfem el forn a 180 °C.',
          'En un bol gros, barregem les farines, el llevat, la sal i totes les espècies.',
          'Batem una mica els ous amb la batedora, hi afegim el sucre i, després, a poc a poc, l’oli.',
          'Tot això ho aboquem al bol amb la farina, i remenem.',
          'Incorporem també al bol la pastanaga picada, les nous i les panses. Ho barregem bé.',
          'Ho aboquem tot en un motllo de silicona de 20-22 cm. Si el motllo fos metàl·lic, caldria engreixar-lo abans amb una mica de mantega.',
          'Coem al forn durant 50 minuts.',
          'En acabar, deixem que es refredi uns 15 minuts, amb la porta del forn entreoberta.',
          'Capgirem el motllo per treure el pastís i el deixem refredar.',
          'Tirem per sobre les raspadures de xocolata.',
        ],
      },
    ],
    variants: [
      {
        p: 'En lloc de xocolata, podem fer una glassa per recobrir el pastís. Quedarà com una crosta blanca i li aportarà més dolçor (i calories). Per fer la glassa, un cop que el pastís estigui ben fred, barregem 250 gr. de sucre de llustre amb 4 cullerades de suc de llimona, de manera que es formi una pasta espessa. L’estenem per la superfície del pastís amb una espàtula i deixem que s’assequi completament.',
      },
    ],
    categories: ['berenar', 'postres'],
    tags: ['especies', 'pastanaga', 'pastis'],
  },
] satisfies Recipe[];
