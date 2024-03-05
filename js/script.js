
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

for(let team of myTeams){
  console.log(team);

    
  // let listaNomi = '';
  // for(let listaNomi of myTeams[0]){
  //   listaNomi += `${myTeams[0]}`
  // }


  // output.innerHTML += `
  // <div class="card me-5 " style="width: 18rem;">
  //       <img src="img/${myTeams.img}" alt="...">
  //       <div class="card-body">
  //         <h3>${name}</h3>
  //         <span>${jobs}</span>
  //       </div>
  //     </div>
  // `
}
  
