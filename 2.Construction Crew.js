function constructionCrew(array) {
if(array.dizziness){
    array.levelOfHydrated+=array.weight*0.1*array.experience;
    array.dizziness = false;
}
    return (array);
}
console.log(constructionCrew({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true }
  ));
//   constructionCrew({ weight: 120,
//     experience: 20,
//     levelOfHydrated: 200,
//     dizziness: true }
//   );
//   constructionCrew({ weight: 95,
//     experience: 3,
//     levelOfHydrated: 0,
//     dizziness: false }
//   );
