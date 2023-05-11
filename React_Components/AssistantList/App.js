import "bulma/css/bulma.css";
import ProfileCard from "./ProfileCard";
import AlexaImg from "./images/alexa.png";
import CortanaImg from "./images/cortana.png";
import SiriImg from "./images/siri.png";

function App() {
  return (
    <div>
      <section class="hero is-primary">
        <div class="hero-body">
          <p class="title">Personal Digital Assistant</p>
        </div>
      </section>

      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard 
              title="Alexa" 
              handler="alexa@99" 
              image={AlexaImg} 
              description="Alexa was made by Amazon."
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="cortana"
                handler="cortana@76"
                image={CortanaImg}
                description="Cortana was made by Microsoft."
              />
            </div>
            <div className="column is-4">
              <ProfileCard 
              title="Siri"
              handler="siri@01" 
              image={SiriImg} 
              description="Siri was made by Apple."
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;

/*
  img :
  -if img is row then use syntax, 
      <img src= {AlexaImg}/>
      <ProfileCard title = "Alexa" handler = "alexa@99"/>
  - if it is from another website simply write html syntax
  - if you are setting childs then pass as property to props
       <ProfileCard title = "Alexa" handler = "alexa@99" image={AlexaImg}/>
*/
