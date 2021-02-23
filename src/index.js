import ReactDOM from "react-dom";
import React from "react";

import RestaurantCard from "./App.js";

const mystyle={
  display: "flex",
  flexDirection: "row",
  margin:"1rem",
  padding:"1rem",
  justifyContent:"center",
  flexWrap:"wrap"
}

class App extends React.Component{

  constructor(){
    super();
    this.state={
      loading:true,
      hotels:{}
    }
  }

  async componentDidMount(){
    const url="https://api.mocki.io/v1/db5bead2"
    const response= await fetch(url)
    const data=await response.json();
    this.setState({hotels:data,loading:false});
  }
  
  render(){
    
    return(<>{this.state.loading?<h1>loading...</h1>:
      
    <div className="innerBox" style={mystyle}>
              <RestaurantCard name={this.state.hotels.DelhiHotels.hotel6.name} image={this.state.hotels.DelhiHotels.hotel6.image} description={this.state.hotels.DelhiHotels.hotel6.description}/>
              <RestaurantCard name={this.state.hotels.DelhiHotels.hotel2.name} image={this.state.hotels.DelhiHotels.hotel2.image} description={this.state.hotels.DelhiHotels.hotel2.description}/>
              <RestaurantCard name={this.state.hotels.DelhiHotels.hotel3.name} image={this.state.hotels.DelhiHotels.hotel3.image} description={this.state.hotels.DelhiHotels.hotel3.description}/>
              <RestaurantCard name={this.state.hotels.DelhiHotels.hotel4.name} image={this.state.hotels.DelhiHotels.hotel4.image} description={this.state.hotels.DelhiHotels.hotel4.description}/>
              <RestaurantCard name={this.state.hotels.DelhiHotels.hotel5.name} image={this.state.hotels.DelhiHotels.hotel5.image} description={this.state.hotels.DelhiHotels.hotel5.description}/>
           </div>
    }
    </>
    )
  }
}

ReactDOM.render(<App />,document.getElementById("root"));
