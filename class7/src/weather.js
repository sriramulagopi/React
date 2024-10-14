import { Component } from "react";
const apiKey = "fbb1082c90ae1e19d3e6c0ce0fc001fd";
const images = {
  Clouds:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzrkBIW7J4H_eLMg1-NNYE2-TGH4-r9SC-DQ&usqp=CAU",
  Rain:"https://static.vecteezy.com/system/resources/previews/042/146/565/non_2x/ai-generated-beautiful-rain-day-view-photo.jpg",
  Snow:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpHvNHAuvr9uoi-5SHuGGeuvk6flM31Vbyyw&usqp=CAU",
  Haze:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvosh6xkSex4jwFmmKvp380use8Vtn0Et0ow&usqp=CAU"
}
class App extends Component {
  async fetchWeatherReport(lat, lng) {
    try{
        const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apiKey}`)
        const respondse = await data.json();
        console.log(respondse)
        this.setState(respondse);
    }
    catch(error){
        console.log(error)
    }
  }
  getMyweatherReport=()=>{
      navigator.geolocation.getCurrentPosition((pos)=>{
        console.log(pos)
        const {latitude,longitude}=pos.coords;
        this.fetchWeatherReport(latitude,longitude);
      },(err)=>{})
  }
  render() {
    const onsubmit =  (e)=> {
      e.preventDefault();
      const lat = e.target.lat.value;
      const lng = e.target.lng.value;
      this.fetchWeatherReport(lat,lng);
    };
    const weatherType = this.state?.weather[0]?.main;
    const city = this.state?.name
    const Temperature = this.state?.main?.temp-217.15;
    const wind = this.state?.wind?.speed
    return (
      <div onSubmit={onsubmit}>
        <form>
          <input type="text" placeholder="Enter Latitude" name="lat" value="17.4065"/>
          <input type="text" placeholder="Enter Longitude" name="lng" value="78.4772"/>
          <button>Submit</button>
          <button type="button" onClick={this.getMyweatherReport}>Get My Weather Report</button>
        </form>
        <div className="report">
          {this.state && <>
          <img src={images[weatherType]}/>
          <p><b>City: </b>{city}</p>
          <p><b>Temperature: </b>{Temperature}</p>
          <p><b>Wind: </b>{wind}</p>
          </>}
        </div>
      </div>
    );
  }
}
export default App;
