import getData from '../utils/getData'

const Home = async () => {
  const chracters = await getData()
  console.log(chracters)
  const view = `
    <div class="Characters">
    ${chracters.results
      .map(
        (character) => `
      <article class="Characters-item">
        <a href="#/${character.id}">
          <img src="${character.image}" alt="${character.name}"/>
         <h2>${character.name}</h2>
         </a>
      </article>`
      )
      .join('')}
    </div>  
    `

  return view
}

export default Home
