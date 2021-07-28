import Card from './components/Card'
import sedan from './image/icon-sedans.svg'
import suv from './image/icon-suvs.svg'
import luxury from './image/icon-luxury.svg'
import './App.css'

function App() {
  // create an array of data.....
  const card_content = [
    {
      logo: sedan,
      color: 'hsl(31, 77%, 52%)',
      title: 'SEDANS',
      text: "choose a sedan for it's affordabilty and excellent fuel economy. Ideal for cruising in the city or on your next road trip",
    },
    {
      logo: suv,
      color: 'hsl(184, 100%, 22%)',
      title: 'SUV',
      text: "choose a sedan for it's affordabilty and excellent fuel economy. Ideal for cruising in the city or on your next road trip",
    },
    {
      logo: luxury,
      color: 'hsl(179, 100%, 13%)',
      title: 'Luxury',
      text: "choose a sedan for it's affordabilty and excellent fuel economy. Ideal for cruising in the city or on your next road trip",
    },
  ]
  // props or properties or attributes
  return (
    <section className='main-container'>
      {/* props(properties) in the Card here are title,logo,text---- what is inside the curly braces is javascript*/}
      <Card
        title={card_content[0].title}
        bgcolor={card_content[0].color}
        logo={card_content[0].logo}
        text={card_content[0].text}
      />
      <Card
        title={card_content[1].title}
        bgcolor={card_content[1].color}
        logo={card_content[1].logo}
        text={card_content[1].text}
      />
      <Card
        title={card_content[2].title}
        bgcolor={card_content[2].color}
        logo={card_content[2].logo}
        text={card_content[2].text}
      />
    </section>
  )
}

export default App
