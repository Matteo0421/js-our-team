
const output = document.querySelector(".output")

const myTeams = [
  {
    name : 'Wayne Barnett',
    jobs : 'Founder & CEO',
    img : 'wayne-barnett-founder-ceo.jpg'
  },

  {
    Name : 'Angela Caroll',
    jobs : 'Chief Editor',
    img : 'angela-caroll-chief-editor.jpg'
  },

  {
    Name : 'Walter Gordon',
    jobs : 'Office Manager',
    img : 'walter-gordon-office-manager.jpg'
  },

  {
    Name : 'Angela Lopez',
    jobs : 'Social Media Manager',
    img : 'angela-lopez-social-media-manager.jpg'
  },

  {
    Name : 'Scott Estrada',
    jobs : 'Developer',
    img : 'scott-estrada-developer.jpg'
  },

  {
    Name : 'Barbara Ramos',
    jobs : 'Graphic Designer',
    img : 'barbara-ramos-graphic-designer.jpg'
  }
]

console.log(myTeams);

// for(let team of myTeams){
//   console.log(team);

  
//   let outputUser = '';
//   for(let key in team){
//     const outputUs = `${key}: ${myTeams[key]}`;
//     console.log(outputUs);
//     outputUser += outputUs + ' ';
//   }




//   output.innerHTML += `
//   <div class="card me-5 " style="width: 18rem;">
//         <img src="img/${myTeams.img}" alt="...">
//         <div class="card-body">
//           <h3>${myTeams.name}</h3>
//           <span>${myTeams.jobs}</span>
//         </div>
//       </div>
//   `
// }

// ciclo for of
// stampo tutte le proprità deggli oggetti dellarry
for(let myTeam of myTeams){
  console.log(myTeam);
  // let outputUser = '';
  // for(let key in myTeam){
  //   const outputUs = `${key}: ${myTeam[key]}`;
  //   console.log(outputUs);
  //   outputUser += outputUs + ' ';
  //   console.log(key);
  // }

  output.innerHTML += `
  <div class="card me-5 " style="width: 18rem;">
        <img src="img/${myTeam.img}" alt="...">
        <div class="card-body">
          <h3>${myTeam.name}</h3>
          <span>${myTeam.jobs}</span>
        </div>
      </div>
  `
}
  
