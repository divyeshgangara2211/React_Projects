import reactImg from './assets/react-core-concepts.png' ;
import componentsImg from './assets/components.png' ;
import {CORE_CONCEPTS} from './data.js';

const reactDescription = ['Fundamental' , 'Crucial' , 'Core'];

function getRandomDescription(max){
  return Math.floor(Math.random() * (max+1));
}

// React-Components
// function CoreConcepts(props){
//   return (
//     <li>
//       <img src={props.image} alt={props.title} />
//       <h3>{props.title}</h3>
//       <p>{props.description}</p>
//     </li>
//   )
// };


//  another syntax using Destructuring 
function CoreConcepts({image,title,description}){
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  )
};

function Header(){
  const description = reactDescription[getRandomDescription(2)];

  return (
    <header>
      <img src={reactImg} alt="ReactImg" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are going to build !
      </p>
    </header>
  );
}

function App() {
  return (
    <div> 
      <Header />    
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {/*  Props Syntax */}
            <CoreConcepts 
            title="Components" 
            description="The core UI building block - compose the user interface by combining multiple components." 
            image={componentsImg} />

            {/*  another Props Syntax */}
            <CoreConcepts 
            title={CORE_CONCEPTS[1].title} 
            description={CORE_CONCEPTS[1].description} image={CORE_CONCEPTS[1].image} />

            {/* another syntax using spread operator */}
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts {...CORE_CONCEPTS[3]}/>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
