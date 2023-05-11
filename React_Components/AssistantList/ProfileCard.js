function ProfileCard({title, handler, image, description}){
    
    

    return <div class="card">
    
    <div class="card-image">
      <figure class="image is-1by1">
        <img src={image} alt="assistant logo"/>
      </figure>
    </div>

    <div class="card-content">
        <div class="media-content">
          <p class="title is-4">{title}</p>
          <p class="subtitle is-6">{handler}</p>
        </div>
        <div className="content">{description}</div>
    </div>
      
    
  </div>
}

export default ProfileCard;

/* ** Basic code
  <div>Title is {props.title}</div>
  <div>Hnadler is {props.handler}</div> 

  ** Destructuring to : 
  const title = props.title;
  const handler = props.handler;
    return <div>
        <div>Title is {title}</div>
        <div>Hnadler is {handler}</div> 
    </div>

    ** Destruturing to :
    const {title, handler} = props;
    return <div>
        <div>Title is {title}</div>
        <div>Hnadler is {handler}</div> 
    </div>

    ** Destruturing to :
    function ProfileCard({title, handler}){
    return <div>
        <div>Title is {title}</div>
        <div>Hnadler is {handler}</div> 
    </div>
}
    
*/