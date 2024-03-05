
const output = document.querySelector(".output")

const myTeams = [
  {
    name : 'Wayne Barnett',
    jobs : 'Founder & CEO',
    img : 'wayne-barnett-founder-ceo.jpg'
  },

  {
    name : 'Angela Caroll',
    jobs : 'Chief Editor',
    img : 'angela-caroll-chief-editor.jpg'
  },

  {
    name : 'Walter Gordon',
    jobs : 'Office Manager',
    img : 'walter-gordon-office-manager.jpg'
  },

  {
    name : 'Angela Lopez',
    jobs : 'Social Media Manager',
    img : 'angela-lopez-social-media-manager.jpg'
  },

  {
    name : 'Scott Estrada',
    jobs : 'Developer',
    img : 'scott-estrada-developer.jpg'
  },

  {
    name : 'Barbara Ramos',
    jobs : 'Graphic Designer',
    img : 'barbara-ramos-graphic-designer.jpg'
  }
]

console.log(myTeams);


for(let myTeam of myTeams){
  console.log(myTeam);
 

  output.innerHTML += `
  <div class="card my-card me-5 " style="width: 18rem;">
        <img src="img/${myTeam.img}" alt="...">
        <div class="card-body">
          <h3>${myTeam.name}</h3>
          <span>${myTeam.jobs}</span>
        </div>
      </div>
  `
}
  
