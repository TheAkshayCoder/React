import React from "react";


const myBoxStyle={
  margin:"1rem",
  padding:"1rem"
}

const myHeading={
  textTransform: "capitalize",
  textAlign:"center"
}

// api.mocki.io/v1/2e27beee

function RestaurantCard(props){

  // state={
  //   loading:true,
  //   hotels:{}
  // }
// async componentDidMount(){
//     const url="https://api.mocki.io/v1/db5bead2"
//     const response= await fetch(url)
//     const data=await response.json();
//     this.setState({hotels:data,loading:false});
//   }

  return(<>
  
                <div className="box" style={myBoxStyle}>
                    <div className="card" style={{width: "18rem"}}>
                      <img src={props.image} className="card-img-top" alt="img"/>
                      <div className="card-body">
                        <h5 className="card-title" style={myHeading}>{props.name}</h5>
                        <p className="card-text">{props.description}</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                      </div>
                    </div>
                </div>
        </>)
        }
              


export default RestaurantCard


