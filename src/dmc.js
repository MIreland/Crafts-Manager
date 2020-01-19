// "Floss#","Description","Red","Green","Blue"

const dmc = [
	// [3713, "Salmon Very Light",[255,226,226]],
	// [761,"Salmon Light",[255,201,201]],
	// [760,"Salmon",[245,173,173]],
	// [3712,"Salmon Medium",[241,135,135]],
	// [3328,"Salmon Dark",[227,109,109]],
	// [347,"Salmon Very Dark",[191,45,45]],
	// [353,"Peach",[254,215,204]],
	// [352,"Coral Light"[253,156,151]],
	// [351,"Coral",[233,106,103]],
	// [350,"Coral Medium",[224,72,72]],
	// [349,"Coral Dark",[210,16,53]],
	// [817,"Coral Red Very Dark",[187,5,31]],
	// [3708,"Melon Light",[255,203,213]],
	// [3706,"Melon Medium",[255,173,188]],
	// [3705,"Melon Dark",[255,121,146]],
	// [3801,"Melon Very Dark",[231,73,103]],
	// [666,"Bright Red",[227,29,66]],
	// [321,"Red",[199,43,59]],
	// [304,"Red Medium",[183,31,51]],
	// [498,"Red Dark",[167,19,43]],
	// [816,"Garnet",[151,11,35]],
	// [815,"Garnet Medium",[135,7,31]],
	// [814,"Garnet Dark",[123,0,27]],
	// [894,"Carnation Very Light",[255,178,187]],
	// [893,"Carnation Light",[252,144,162]],
	// [892,"Carnation Medium",[255,121,140]],
	// [891,"Carnation Dark",[255,87,115]],
	// [818,"Baby Pink",[255,223,217]],
	// [957,"Geranium Pale",[253,181,181]],
	// [956,"Geranium",[255,145,145]],
	// [963,"Dusty Rose Ult Vy Lt",[255,215,215]],
	// [3716,"Dusty Rose Med Vy Lt",[255,189,189]],
	// [962,"Dusty Rose Medium",[230,138,138]],
	// [961,"Dusty Rose Dark",[207,115,115]],
	// [3833,"Raspberry Light",[234,134,153]],
	// [3832,"Raspberry Medium",[219,85,110]],
	// [3831,"Raspberry Dark",[179,47,72]],
	// [777,"Raspberry Very Dark",[145,53,70]],
	// [819,"Baby Pink Light",[255,238,235]],
	// [3326,"Rose Light",[251,173,180]],
	// [776,"Pink Medium",[252,176,185]],
	// [899,"Rose Medium",[242,118,136]],
	// [335,"Rose",[238,84,110]],
	// [326,"Rose Very Dark",[179,59,75]],
	// [151,"Dusty Rose Vry Lt",[240,206,212]],
	// [3354,"Dusty Rose Light",[228,166,172]],
	// [3733,"Dusty Rose",[232,135,155]],
	// [3731,"Dusty Rose Very Dark",[218,103,131]],
	// [3350,"Dusty Rose Ultra Dark",[188,67,101]],
	// [150,"Dusty Rose Ult Vy Dk",[171,2,73]],
	// [3689,"Mauve Light",[251,191,194]],
	// [3688,"Mauve Medium",[231,169,172]],
	// [3687,"Mauve",[201,107,112]],
	// [3803,"Mauve Dark",[171,51,87]],
	// [3685,"Mauve Very Dark",[136,21,49]],
	// [605,"Cranberry Very Light",[255,192,205]],
	// [604,"Cranberry Light",[255,176,190]],
	// [603,"Cranberry",[255,164,190]],
	// [602,"Cranberry Medium",[226,72,116]],
	// [601,"Cranberry Dark",[29,40,106]],
	// [600,"Cranberry Very Dark",[205,47,99]],
	// [3806,"Cyclamen Pink Light",[255,140,174]],
	// [3805,"Cyclamen Pink",[243,71,139]],
	// [3804,"Cyclamen Pink Dark",[224,40,118]],
	// [3609,"Plum Ultra Light",[244,174,213]],
	// [3608,"Plum Very Light",[234,156,196]],
	// [3607,"Plum Light",[197,73,137]],
	// [718,"Plum",[156,36,98]],

	// [917,"Plum Medium",[155,19,89]],
	// [915,"Plum Dark",[130,0,67]],
	// [225,"Shell Pink Ult Vy Lt",[255,223,213]],
	// [224,"Shell Pink Very Light",[235,183,]],
	// [152,"Shell Pink Med Light",[226,160,153]],
	// [223,"Shell Pink Light",[204,132,124]],
	// [3722,"Shell Pink Med",[188,108,100]],
	// [3721,"Shell Pink Dark",[161,75,81]],
	// [221,"Shell Pink Vy Dk",[136,62,67]],
	// [778,"Antique Mauve Vy Lt",[223,179,187]],
	// [3727,"Antique Mauve Light",[219,169,178]],
	// [316,"Antique Mauve Med",[183,115,127]],
	// [3726,"Antique Mauve Dark",[155,91,102]],
	// [315,"Antique Mauve Md Dk",[129,73,82]],
	// [3802,"Antique Mauve Vy Dk",[113,65,73]],
	// [902,"Garnet Very Dark",[130,38,55]],
	// [3743,"Antique Violet Vy Lt",[215,203,211]],
	// [3042,"Antique Violet Light",[183,157,167]],
	// [3041,"Antique Violet Medium",[149,111,124]],
	// [3740,"Antique Violet Dark",[120,87,98]],
	// [3836,"Grape Light",[186,145,170]],
	// [3835,"Grape Medium",[148,96,131]],
	// [3834,"Grape Dark",[114,55,93]],
	// [154,"Grape Very Dark",[87,36,51]],
	// [211,"Lavender Light",[227,203,227]],
	// [210,"Lavender Medium",[195,159,195]],
	// [209,"Lavender Dark",[163,123,167]],
	// [208,"Lavender Very Dark",[131,91,139]],
	// [3837,"Lavender Ultra Dark",[108,58,110]],
	// [327,"Violet Dark",[99,54,102]],
	// [153,"Violet Very Light",[230,204,217]],
	// [554,"Violet Light",[219,179,203]],
	// [553,"Violet",[163,99,139]],
	// [552,"Violet  Medium",[128,58,107]],
	// [550,"Violet Very Dark",[92,24,78]],

	// [3747,"Blue Violet Vy Lt",[211,215,237]],
	// [341,"Blue Violet Light",[183,191,221]],
	// [156,"Blue Violet Med Lt",[163,174,209]],
	// [340,"Blue Violet Medium",[173,167,199]],
	// [155,"Blue Violet Med Dark",[152,145,182]],
	// [3746,"Blue Violet Dark",[119,107,152]],
	// [333,"Blue Violet Very Dark",[92,84,120]],
	// [157,"Cornflower Blue Vy Lt",[187,195,217]],
	// [794,"Cornflower Blue Light",[143,156,193]],
	// [793,"Cornflower Blue Med",[112,125,162]],
	// [3807,"Cornflower Blue",[96,103,140]],
	// [792,"Cornflower Blue Dark",[85,91,123]],
	// [158,"Cornflower Blu M V D",[76,82,110]],
	// [791,"Cornflower Blue V D",[70,69,99]],
	// [3840,"Lavender Blue Light",[176,192,218]],
	// [3839,"Lavender Blue Med",[123,142,171]],
	// [3838,"Lavender Blue Dark",[92,114,148]],
	// [800,"Delft Blue Pale",[192,204,222]],
	// [809,"Delft Blue",[148,168,198]],
	// [799,"Delft Blue Medium",[116,142,182]],
	// [98,"Delft Blue Dark",[70,106,142]],
	// [797,"Royal Blue",[19,71,125]],
	// [796,"Royal Blue Dark",[17,65,109]],
	// [820,"Royal Blue Very Dark",[14,54,920]],
	// [162,"Blue Ultra Very Light",[219,236,245]],
	// [827,"Blue Very Light",[189,221,237]],
	// [813,"Blue Light",[161,194,215]],
	// [826,"Blue Medium",[107,158,191]],
	// [825,"Blue Dark",[71,129,165]],
	// [824,"Blue Very Dark",[57,105,135]],
	// [3843,"Electric Blue",[20,170,208]],
	// [995,"Electric Blue Dark",[38,150,182]],
	// [3846,"Turquoise Bright Light",[6,227,230]],
	// [3845,"Turquoise Bright Med",[4,196,202]],
	// [3844,"Turquoise Bright Dark",[18,174,186]],
	// [159,"Blue Gray Light",[199,202,215]],
	// [160,"Blue Gray Medium",[153,159,183]],
	// [161,"Blue Gray",[120,128,164]],
	// [3756,"Baby Blue Ult Vy Lt",[238,252,252]],
	// [775,"Baby Blue Very Light",[217,235,241]],
	// [3841,"Baby Blue Pale",[205,223,237]],
	// [3325,"Baby Blue Light",[184,210,230]],
	// [3755,"Baby Blue",[147,180,206]],
	// [334,"Baby Blue Medium",[115,159,193]],
	// [322,"Baby Blue Dark",[90,143,184]],
	// [312,"Baby Blue Very Dark",[53,102,139]],
	// [803,"Baby Blue Ult Vy Dk",[44,89,124]],
	// [336,"Navy Blue",[37,59,115]],
	// [823,"Navy Blue Dark",[33,48,99]],
	// [939,"Navy Blue Very Dark",[27,40,83]],
	// [3753,"Antique Blue Ult Vy Lt",[219,226,233]],
	// [3752,"Antique Blue Very Lt",[199,209,219]],
	// [932,"Antique Blue Light",[162,181,198]],
	// [931,"Antique Blue Medium",[106,133,15]],
	// [930,"Antique Blue Dark",[69,92,113]],
	// [3750,"Antique Blue Very Dk",[56,76,94]],
	// [828,"Sky Blue Vy Lt",[197,232,237]],
	// [3761,"Sky Blue Light",[172,216,226]],
	// [519,"Sky Blue",[126,177,200]],
	// [518,"Wedgewood Light",[79,147,167]],
	// [3760,"Wedgewood Med",[62,133,162]],
	// [517,"Wedgewood Dark",[59,118,143]],
	// [3842,"Wedgewood Vry Dk",[50,102,124]],
	// [311,"Wedgewood Ult VyDk",[28,80,102]],
	// [747,"Peacock Blue Vy Lt",[229,252,253]],
	// [3766,"Peacock Blue Light",[153,207,217]],
	// [807,"Peacock Blue",[100,171,186]],
	// [806,"Peacock Blue Dark",[61,149,165]],
	// [3765,"Peacock Blue Vy Dk",[52,127,140]],
	// [3811,"Turquoise Very Light",[188,227,230]],
	// [598,"Turquoise Light",[144,195,204]],
	// [597,"Turquoise",[91,163,179]],
	// [3810,"Turquoise Dark",[72,142,154]],
	// [3809,"Turquoise Vy Dark",[63,124,133]],
	// [3808,"Turquoise Ult Vy Dk",[54,105,112]],
	// [928,"Gray Green Vy Lt",[221,227,227]],
	// [927,"Gray Green Light",[189,203,203]],
	// [926,"Gray Green Med",[152,174,174]],
	// [3768,"Gray Green Dark",[101,127,127]],
	// [924,"Gray Green Vy Dark",[86,106,106]],
	// [3849,"Teal Green Light",[82,179,164]],
	// [3848,"Teal Green Med",[85,147,146]],
	// [3847,"Teal Green Dark",[52,125,117]],

	// [964,"Sea Green Light",[169,226,216]],
	// [959,"Sea Green Med",[89,199,180]],
	// [958,"Sea Green Dark",[62,182,161]],
	// [3812,"Sea Green Vy Dk",[47,140,132]],
	// [3851,"Green Bright Lt",[73,179,161]],
	// [943,"Green Bright Md",[61,147,132]],
	// [3850,"Green Bright Dk",[55,132,119]],
	// [993,"Aquamarine Vy Lt",[144,192,180]],
	// [992,"Aquamarine Lt",[111,174,159]],
	// [3814,"Aquamarine",[80,139,125]],
	// [991,"Aquamarine Dk",[71,123,110]],

	// {dmc: 966, color: "Jade Ultra Vy Lt",rgb:[185,215,192]},
	// {dmc:564,color:"Jade Very Light",rgb:[167,205,175]},
	// {dmc:563,color:"Jade Light",rgb:[143,192,152]},
	// {dmc:562,color:"Jade Medium",rgb:[83,151,106]},
	// {dmc:505,color:"Jade Green",rgb:[51,131,98]},
	// {dmc:3817,color:"Celadon Green Lt",rgb:[153,195,170]},
	// {dmc:3816,color:"Celadon Green",rgb:[101,165,125]},
	// {dmc:163,color:"Celadon Green Md",rgb:[77,131,97]},
	// {dmc:3815,color:"Celadon Green Dk",rgb:[71,119,89]},
	// {dmc:561,color:"Celadon Green VD",rgb:[44,106,69]},
	// {dmc:504,color:"Blue Green Vy Lt",rgb:[196,222,204]},
	// {dmc:3813,color:"Blue Green Lt",rgb:[178,212,189]},
	// {dmc:503,color:"Blue Green Med",rgb:[123,172,148]},
	// {dmc:502,color:"Blue Green",rgb:[91,144,113]},
	// {dmc:501,color:"Blue Green Dark",rgb:[57,111,82]},
	// {dmc:955,color:"Nile Green Light",rgb:[162,214,173]},
	// {dmc:954,color:"Nile Green",rgb:[136,186,145]},
	// {dmc:913,color:"Nile Green Med",rgb:[109,171,119]},
	// {dmc:912,color:"Emerald Green Lt",rgb:[27,157,107]},
	// {dmc:911,color:"Emerald Green Med",[24,144,101]},
	// {dmc:910,color:"Emerald Green Dark",rgb:[24,126,86]},
	// {dmc:909,color:"Emerald Green Vy Dk",rgb:[21,111,73]},
	// {dmc:3818,color:"Emerald Grn Ult V Dk",rgb:[17,90,59]},

	// {dmc:369,color: "Pistachio Green Vy Lt", rgb: [215,237,204]},
	// {dmc:368,color: "Pistachio Green Lt",rgb: [166,194,152]},
	// {dmc:320, color: "Pistachio Green Med", rgb:[105,136,90]},
	// {dmc:367,color: "Pistachio Green Dk",rgb:[97,122,82]},
	// {dmc:319,color: "Pistachio Grn Vy Dk",rgb:[32,95,46]},
	// {dmc:890,color: "Pistachio Grn Ult V D",rgb:[23,73,35]},
	// {dmc:164,color: "Forest Green Lt",rgb:[200,216,184]},
	// {dmc:989,color: "Forest Green",rgb:[141,166,117]},
	// {dmc:988,color: "Forest Green Med",rgb:[115,139,91]},
	// {dmc:987,color: "Forest Green Dk",rgb:[88,113,65]},
	// {dmc:986,color: "Forest Green Vy Dk",rgb:[64,82,48]},
	// {dmc:772,color: "Yellow Green Vy Lt",rgb:[228,236,212]},
	// {dmc:3348,color: "Yellow Green Lt",rgb:[204,217,177]},
	// {dmc:3347,color: "Yellow Green Med",rgb:[113,147,92]},
	// {dmc:3346,color: "Hunter Green",rgb:[64,106,58]},
	// {dmc:3345,color: "Hunter Green Dk",rgb:[27,89,21]},
	// {dmc:895,color: "Hunter Green Vy Dk",rgb:[27,83,0]},
	// {dmc:704,color: "Chartreuse Bright",rgb:[158,207,52]},
	// {dmc:703,color: "Chartreuse",rgb:[123,181,71]},

	// { dmc: 702, color: 'Kelly Green', rgb: [ 71, 167, 47 ] },
	// { dmc: 701, color: 'Green Light', rgb: [ 63, 143, 41 ] },
	// { dmc: 700, color: 'Green Bright', rgb: [ 7, 115, 27 ] },
	// { dmc: 699, color: 'Green', rgb: [ 5, 101, 23 ] },
	// { dmc: 907, color: 'Parrot Green Lt', rgb: [ 199, 230, 102 ] },
	// { dmc: 906, color: 'Parrot Green Md', rgb: [ 127, 179, 53 ] },
	// { dmc: 905, color: 'Parrot Green Dk', rgb: [ 98, 138, 40 ] },
	// { dmc: 904, color: 'Parrot Green V Dk', rgb: [ 85, 120, 34 ] },
	// { dmc: 472, color: 'Avocado Grn U Lt', rgb: [ 216, 228, 152 ] },
	// { dmc: 471, color: 'Avocado Grn V Lt', rgb: [ 174, 191, 121 ] },
	// { dmc: 470, color: 'Avocado Grn Lt', rgb: [ 148, 171, 79 ] },
	// { dmc: 469, color: 'Avocado Green', rgb: [ 114, 132, 60 ] },
	// { dmc: 937, color: 'Avocado Green Md', rgb: [ 98, 113, 51 ] },
	// { dmc: 936, color: 'Avocado Grn V Dk', rgb: [ 76, 88, 38 ] },
	// { dmc: 935, color: 'Avocado Green Dk', rgb: [ 66, 77, 33 ] },
	// { dmc: 934, color: 'Avocado Grn Black', rgb: [ 49, 57, 25 ] },
	// { dmc: 523, color: 'Fern Green Lt', rgb: [ 171, 177, 151 ] },

	// {dmc: 3053, color: 'Green Gray', rgb:[ 156, 164, 130 ] },
	// {dmc: 3052, color:'Green Gray Md', rgb:[ 136, 146, 104 ] },
	// {dmc: 3051, color:'Green Gray Dk',rgb: [ 95, 102, 72 ] },
	// {dmc: 524, color:'Fern Green Vy Lt', rgb:[ 196, 205, 172 ] },
	// {dmc: 522, color:'Fern Green',rgb: [ 150, 158, 126 ] },
	// {dmc: 520, color:'Fern Green Dark',rgb: [ 102, 109, 79 ] },
	// {dmc:3364, color:'Pine Green',rgb: [ 131, 151, 95 ] },
	// {dmc:3363, color:'Pine Green Md',rgb: [ 114, 130, 86 ] },
	// {dmc:3362, color:'Pine Green Dk', rgb:[ 94, 107, 71 ] },
	// {dmc:165, color:'Moss Green Vy Lt',rgb: [ 239, 244, 164 ] },
	// {dmc: 3819, color:'Moss Green Lt',rgb: [ 224, 232, 104 ] },
	// {dmc: 166, color:'Moss Green Md Lt',rgb: [ 192, 200, 64 ] },
	// {dmc: 581, color: 'Moss Green',rgb: [ 167, 174, 56 ] },
	// {dmc:580, color:'Moss Green Dk', rgb:[ 136, 141, 51 ] },
	// {dmc:734, color:'Olive Green Lt', rgb:[ 199, 192, 119 ] },
	// {dmc: 733, color:'Olive Green Md', rgb:[ 188, 179, 76 ] },
	// {dmc:732, color:'Olive Green', rgb:[ 148, 140, 54 ] },
	// {dmc: 731, color:'Olive Green Dk', rgb:[ 147, 139, 55 ] },
	// {dmc:730, color:'Olive Green V Dk',rgb: [ 130, 123, 48 ] },
	// {dmc:3013, color:'Khaki Green Lt', rgb:[ 185, 185, 130 ] },
	// {dmc: 3012, color:'Khaki Green Md',rgb: [ 166, 167, 93 ] },
	// {dmc: 3011, color:'Khaki Green Dk',rgb: [ 137, 138, 88 ] },

	// [372,"Mustard Lt",[204,183,132]],
	// [371,"Mustard",[191,166,113]],
	// [370,"Mustard Medium",[184,157,100]],
	// [834,"Golden Olive Vy Lt",[219,190,127]],
	// [833,"Golden Olive Lt",[200,171,108]],
	// [832,"Golden Olive",[189,155,81]],
	// [831,"Golden Olive Md",[170,143,86]],
	// [830,"Golden Olive Dk",[141,120,75]],
	// [829,"Golden Olive Vy Dk",[126,107,66]],
	// [613,"Drab Brown V Lt",[220,196,170]],
	// [612,"Drab Brown Lt",[188,154,120]],
	// [611,"Drab Brown",[150,118,86]],
	// [610,"Drab Brown Dk",[121,96,71]],
	// [3047,"Yellow Beige Lt",[231,214,193]],
	// [3046,"Yellow Beige Md",[216,188,154]],
	// [3045,"Yellow Beige Dk",[188,150,106]],
	// [167,"Yellow Beige V Dk",[167,124,73]],
	// [746,"Off White",[252,252,238]],
	// [677,"Old Gold Vy Lt",[245,236,203]],
	// [422,"Hazelnut Brown Lt",[198,159,123]],
	// [3828,"Hazelnut Brown",[183,139,97]],
	// [420,"Hazelnut Brown Dk",[160,112,66]],
	// [869,"Hazelnut Brown V Dk",[131,94,57]],
	// [728,"Topaz",[228,180,104]],
	// [783,"Topaz Medium",[206,145,36]],
	// [782,"Topaz Dark",[174,119,32]],
	// [781,"Topaz Very Dark",[162,109,32]],
	// [780,"Topaz Ultra Vy Dk",[148,99,26]],
	// [676,"Old Gold Lt",[229,206,151]],
	// [729,"Old Gold Medium",[208,165,62]],
	// [680,"Old Gold Dark",[188,141,14]],
	// [3829,"Old Gold Vy Dark",[169,130,4]],
	// [3822,"Straw Light",[246,220,152]],
	// [3821,"Straw",[243,206,117]],
	// [3820,"Straw Dark",[223,182,95]],
	// [3852,"Straw Very Dark",[205,157,55]],
	// [445,"Lemon Light",[255,251,139]],
	// [307,"Lemon",[253,237,84]],
	// [973,"Canary Bright",[255,227,0]],
	// [444,"Lemon Dark",[255,214,0]],
	// [3078,"Golden Yellow Vy Lt",[253,249,205]],

	// {dmc: 727, color:'Topaz Vy Lt', rgb: [ 255, 241, 175 ] },
	// {dmc: 726, color:'Topaz Light',rgb:[ 253, 215, 85 ] },
	// {dmc: 725, color:'Topaz Med Lt', rgb:[ 255, 200, 64 ] },
	// {dmc: 972, color:'Canary Deep',rgb: [ 255, 181, 21 ] },
	// {dmc: 745, color:'Yellow Pale Light',rgb: [ 255, 233, 173 ] },
	// {dmc: 744, color:'Yellow Pale', rgb:[ 255, 231, 147 ] },
	// {dmc: 743,color: 'Yellow Med', rgb:[ 254, 211, 118 ] },
	// {dmc: 742, color:'Tangerine Light',rgb: [ 255, 191, 87 ] },
	// {dmc:741, color:'Tangerine Med', rgb:[ 255, 163, 43 ]},
	// {dmc:740,color: 'Tangerine', rgb: [ 255, 139, 0 ] },
	// {dmc: 970, color:'Pumpkin Light',rgb: [ 247, 139, 19 ] },
	// {dmc: 971,color: 'Pumpkin', rgb:[ 246, 127, 0 ] },
	// {dmc: 947,color: 'Burnt Orange',rgb: [ 255, 123, 77 ]},
	// {dmc: 946, color:'Burnt Orange Med',rgb: [ 235, 99, 7 ] },
	// {dmc: 900, color:'Burnt Orange Dark',rgb: [ 209, 88, 7 ] },

	// {dmc: 967, color:'Apricot Very Light', rgb: [ 255, 222, 213 ] },
	// {dmc: 3824, color:'Apricot Light',rgb: [ 254, 205, 194 ] },
	// {dmc: 3341, color:'Apricot',rgb: [ 252, 171, 152 ] },
	// {dmc: 3340, color:'Apricot Med', rgb:[ 255, 131, 111 ] },
	// {dmc:608, color:'Burnt Orange Bright',rgb: [ 253, 93, 53 ] },
	// {dmc: 606,color: 'Orange‑Red Bright',rgb: [ 250, 50, 3 ] },
	// {dmc: 951, color:'Tawny Light', rgb:[ 255, 226, 207 ] },
	// {dmc: 3856,color: 'Mahogany Ult Vy Lt',rgb: [ 255, 211, 181 ] },
	// {dmc: 722, color:'Orange Spice Light', rgb:[ 247, 151, 111 ] },
	// {dmc: 721, color:'Orange Spice Med',rgb: [ 242, 120, 66 ] },
	// {dmc: 720, color:'Orange Spice Dark',rgb: [ 229, 92, 31 ]},
	// {dmc:3825, color:'Pumpkin Pale', rgb:[ 253, 189, 150 ] },

	// {dmc: 922, color: 'Copper Light', rgb:[ 226, 115, 35 ] },
	// {dmc:  921, color:'Copper', rgb:[ 198, 98, 24 ] },
	// {dmc:  920, color:'Copper Med', rgb:[ 172, 84, 20 ] },
	// {dmc:  919, color:'Red‑Copper',rgb: [ 166, 69, 16 ] },
	// {dmc:  918, color:'Red‑Copper Dark',rgb: [ 130, 52, 10 ] },
	// {dmc:  3770, color:'Tawny Vy Light', rgb:[ 255, 238, 227 ] },
	// {dmc:  945, color:'Tawny',rgb: [ 251, 213, 187 ] },
	// {dmc: 402, color:'Mahogany Vy Lt', rgb:[ 247, 167, 119 ] },
	// {dmc:  3776, color:'Mahogany Light', rgb:[ 207, 121, 57 ] },
	// {dmc:  301, 'Mahogany Med', rgb:[ 179, 95, 43 ] },
	// {dmc:400, color:'Mahogany Dark',rgb:  [ 143, 67, 15 ] },
	// {dmc: 300, color:'Mahogany Vy Dk',rgb: [ 111, 47, 0 ] },
	// {dmc: 3823, color:'Yellow Ultra Pale', rgb:[ 255, 253, 227 ] },
	// {dmc: 3855, color:'Autumn Gold Lt',rgb: [ 250, 211, 150 ] },
	// {dmc: 3854, color:'Autumn Gold Med',rgb: [ 242, 175, 104 ] },
	// {dmc: 3853, color:'Autumn Gold Dk', rgb:[ 242, 151, 70 ] },
	// {dmc: 3827, color:'Golden Brown Pale',rgb: [ 247, 187, 119 ] },
	// {dmc:977, color:'Golden Brown Light',rgb: [ 220, 156, 86 ] },
	// {dmc: 976, color:'Golden Brown Med', rgb:[ 194, 129, 66 ] },
	// {dmc: 3826,color: 'Golden Brown', rgb:[ 173, 114, 57 ] },
	// {dmc: 975, color:'Golden Brown Dk', rgb:[ 145, 79, 18 ] },

	// {dmc:948, color:'Peach Very Light', rgb:[ 254, 231, 218 ] },
	// {dmc:754, color:'Peach Light', rgb:[ 247, 203, 191 ] },
	// {dmc:3771, color:'Terra Cotta Ult Vy Lt', rgb:[ 244, 187, 169 ] },
	// {dmc: 758, color:'Terra Cotta Vy Lt', rgb:[ 238, 170, 155 ] },
	// {dmc: 3778, color:'Terra Cotta Light', rgb:[ 217, 137, 120 ] },
	// {dmc: 356, color:'Terra Cotta Med', rgb:[ 197, 106, 91 ] },
	// {dmc: 3830, color:'Terra Cotta', rgb:[ 185, 85, 68 ] },
	// {dmc: 355, color:'Terra Cotta Dark', rgb:[ 152, 68, 54 ] },
	// {dmc: 3777, color:'Terra Cotta Vy Dk', rgb:[ 134, 8, 34 ] },

	// {dmc: 3779, color: 'Rosewood Ult Vy Lt', rgb:[ 248, 202, 200 ] },
	// {dmc:3859, color:'Rosewood Light', rgb: [ 186, 139, 124 ] },
	// {dmc:3858, color:'Rosewood Med', rgb:[ 150, 74, 63 ] },
	// {dmc:3857, color:'Rosewood Dark', rgb:[ 104, 37, 2 ]},
	// {dmc:3774, color:'Desert Sand Vy Lt', rgb:[ 243, 225, 215] },
	// {dmc:950, color:'Desert Sand Light', rgb:[ 238, 211, 196 ]},
	// {dmc:3064, color:'Desert Sand', rgb:[ 196, 142, 112 ] },
	// {dmc:407, color:'Desert Sand Med', rgb: [ 187, 129, 97 ] },
	// {dmc:3773,color: 'Desert Sand Dark',rgb: [ 182, 117, 82 ] },
	// {dmc:3772,color: 'Desert Sand Vy Dk', rgb:[ 160, 108, 80 ] },
	// {dmc:632, color:'Desert Sand Ult Vy Dk',rgb: [ 135, 85, 57 ] },
	// {dmc: 453, color:'Shell Gray Light', rgb:[ 215, 206, 203 ] },
	// {dmc:452, color:'Shell Gray Med', rgb:[ 192, 179, 174 ] },
	// {dmc:451, color:'Shell Gray Dark',rgb: [ 145, 123, 115 ] },

	// {dmc: 3861, color: 'Cocoa Light', rgb: [ 166, 136, 129 ]},
	// {dmc: 3860, color:'Cocoa', rgb:[ 125, 93, 87 ] },
	// {dmc: 779, color:'Cocoa Dark', rgb:[ 98, 75, 69 ] },
	// {dmc: 712, color:'Cream', rgb:[ 255, 251, 239 ] },
	// {dmc: 739, color:'Tan Ult Vy Lt', rgb:[ 248, 228, 200 ] },
	// {dmc:738, color:'Tan Very Light',rgb: [ 236, 204, 158 ] },
	// {dmc:437, color:'Tan Light',rgb: [ 228, 187, 142 ] },
	// {dmc: 436, color:'Tan',rgb:[ 203, 144, 81 ] },
	// {dmc:435, color:'Brown Very Light', rgb:[ 184, 119, 72 ] },
	// {dmc: 434, color:'Brown Light',rgb: [ 152, 94, 51 ] },
	// {dmc:433, color:'Brown Med', rgb:[ 122, 69, 31 ] },
	// {dmc: 801,color: 'Coffee Brown Dk', rgb:[ 101, 57, 25 ]},
	// {dmc: 898, color:'Coffee Brown Vy Dk', rgb:[ 73, 42, 19 ] },
	// {dmc: 938,color: 'Coffee Brown Ult Dk',rgb: [ 54, 31, 14 ] },

	// {dmc: 3371, color: 'Black Brown', rgb: [ 30, 17, 8 ] },
	// {dmc: 543, color:'Beige Brown Ult Vy Lt', rgb:[ 242, 227, 206 ] },
	// {dmc:3864, color:'Mocha Beige Light', rgb:[ 203, 182, 156 ] },
	// {dmc:3863, color:'Mocha Beige Med',rgb: [ 164, 131, 92 ] },
	// {dmc: 3862,color: 'Mocha Beige Dark',rgb: [ 138, 110, 78 ] },
	// {dmc: 'B5200', color:'Snow White', rgb:[ 255, 255, 255 ] },
	// {dmc:'White', color:'White', rgb:[ 252, 251, 248 ]},
	// {dmc: 3865, color:'Winter White',rgb: [ 249, 247, 241 ] },
	// {dmc: 'ECRU', color:'Ecru', rgb:[ 240, 234, 218 ] },

	// {dmc: 822, color:'Beige Gray Light', rgb:[ 231, 226, 211 ] },
	// {dmc: 644, color:'Beige Gray Med', rgb:[ 221, 216, 203 ] },
	// {dmc: 642, color:'Beige Gray Dark',rgb: [ 164, 152, 120 ] },
	// {dmc:640, color:'Beige Gray Vy Dk',rgb: [ 133, 123, 97 ] },
	// {dmc: 3787, color:'Brown Gray Dark', rgb:[ 98, 93, 80 ] },
	// {dmc: 3021, color:'Brown Gray Vy Dk',rgb: [ 79, 75, 65 ] },
	// {dmc: 3024, color:'Brown Gray Vy Lt',rgb: [ 79, 75, .5 ] },
	// {dmc: 3023,color: 'Brown Gray Light', rgb:[ 177, 170, 11 ] },
	// {dmc: 3022, color:'Brown Gray Med', rgb:[ 142, 144, 120 ] },

	// {dmc: 535,color: 'Ash Gray Vy Lt', rgb:[ 99, 100, 88 ] },
	// {dmc:3033, color:'Mocha Brown Vy Lt', rgb:[ 227, 21, 204 ] },
	// {dmc:3782, color:'Mocha Brown Lt', rgb:[ 210, 188, 16 ] },
	// {dmc: 3032,color: 'Mocha Brown Med', rgb:[ 179, 159, 139 ] },
	// {dmc:3790, color:'Beige Gray Ult Dk',rgb: [ 127, 106, 85 ] },
	// {dmc:3781,color: 'Mocha Brown Dk',rgb: [ 10, 87, 67 ] },
	// {dmc: 3866,color: 'Mocha Brn Ult Vy Lt',rgb: [ 250, 246, 240 ] },
	// {dmc: 842, color:'Beige Brown Vy Lt', rgb:[ 209, 186, 161 ] },
	// {dmc: 841, color:'Beige Brown Lt', rgb:[ 182, 155, 126 ] },
	// {dmc:840,color: 'Beige Brown Med',rgb: [ 154, 124, 92 ] },
	// {dmc: 839, color:'Beige Brown Dk',rgb: [ 103, 85, 65 ] },
	// {dmc: 838, color:'Beige Brown Vy Dk', rgb:[ 89, 73, 55 ] },

	// { dmc: 3072, color: 'Beaver Gray Vy Lt', rgb: [ 230, 232, 232 ] },
	// { dmc: 648, color: 'Beaver Gray Lt', rgb: [ 188, 180, 172 ] },
	// { dmc: 647, color: 'Beaver Gray Med', rgb: [ 176, 166, 156 ] },
	// { dmc: 646, color: 'Beaver Gray Dk', rgb: [ 135, 125, 115 ] },
	// { dmc: 645, color: 'Beaver Gray Vy Dk', rgb: [ 110, 101, 92 ] },
	// { dmc: 844, color: 'Beaver Gray Ult Dk', rgb: [ 72, 72, 72 ] },
	// { dmc: 762, color: 'Pearl Gray Vy Lt', rgb: [ 236, 236, 236 ] },
	// { dmc: 415, color: 'Pearl Gray', rgb: [ 211, 211, 214 ] },
	// { dmc: 318, color: 'Steel Gray Lt', rgb: [ 171, 171, 171 ] },
	// { dmc: 414, color: 'Steel Gray Dk', rgb: [ 140, 140, 140 ] },
	// { dmc: 168, color: 'Pewter Very Light', rgb: [ 209, 209, 209 ] },
	// { dmc: 169, color: 'Pewter Light', rgb: [ 132, 132, 132 ] },
	// { dmc: 317, color: 'Pewter Gray', rgb: [ 108, 108, 108 ] },
	// { dmc: 413, color: 'Pewter Gray Dark', rgb: [ 86, 86, 86 ] },
	// { dmc: 3799, color: 'Pewter Gray Vy Dk', rgb: [ 66, 66, 66 ] },
	// { dmc: 310, color: 'Black', rgb: [ 0, 0, 0 ] }
];