let voiture = {
    marque: "Pontiac",
    annee: 1965,
    dateAchat: new Date('1965-05-11'),
    passager: ['steve', 'robert']
};

for(const key in voiture) {
    const val = voiture[key];
    console.log(key+" : "+val);
}