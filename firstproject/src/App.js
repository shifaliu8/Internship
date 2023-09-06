import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Components from './Component/Components';
import Button from './Component/Button';
import Grid from './Component/Grid';
function App() {
  const cardDetails=[
    {
      img:"./image/nudewild.png",
      description:"asdfghjk",
      time:"9 mins"
    },
    {
      img:"./image/nudewild.png",
      description:"asdfghjk",
      time:"15 mins"
    },
    {
      img:"./image/nudewild.png",
      description:"asdfghjk",
      time:"9 mins"
    },
    {
      img:"./image/nudewild.png",
      description:"asdfghjk",
      time:"9 mins"
    },{
      img:"./image/nudewild.png",
      description:"asdfghjk",
      time:"5 mins"
    },{
      img:"./image/nudewild.png",
      description:"asdfghjk",
      time:"9 mins"
    },{
      img:"./image/nudewild.png",
      description:"asdfghjk",
      time:"15 mins"
    },{
      img:"./image/nudewild.png",
      description:"asdfghjk",
      time:"5 mins"
    },{
      img:"./image/nudewild.png",
      description:"asdfghjk",
      time:"9 mins"
    }
  ];
  const condition = "This is my first react app";
  return (

    <div className="App">
      {condition == "This is my first react app" && "dfghj" }
    <main role="main">
     <Components title="Album example"/>
    <div className="album py-5 bg-light">
      <div className="container">
        <div className="row">
         
         {
          cardDetails.map((data,index) => {
            return(
              <Grid  key={index} img={data.img} description=
              {data.description} time={data.time}/>
            )
          })
         }
          
          
        </div>
      </div>
    </div>
  </main>
  <footer className="text-muted">
    <div className="container">
      <p className="float-right">
        <a href="#">Back to top</a>
      </p>
      <p>Album example is &copy; Bootstrap, but please download and customize it for yourself!</p>  </div>
  </footer>
    </div>
  );
}

export default App;