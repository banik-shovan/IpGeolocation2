// function getIPGeoDetails(){

//     let URL="https://api.ipgeolocation.io/ipgeo?apiKey=357c8fda50224090ad413da4c3e7e40e"

//     axios.get(URL).then(function (res){

//         let ResJSON=res.data;

//         $('#IP').html(ResJSON['ip']);
//         $('#Country').html(ResJSON['country_name']);
//         $('#State').html(ResJSON['state_prov']);
//         $('#City').html(ResJSON['city']);
//         $('#Latitude').html(ResJSON['latitude']);
//         $('#Longitude').html(ResJSON['longitude']);
//         $('#timeZone').html(ResJSON['time_zone']['name']);
//         $('#ISP').html(ResJSON['isp']);
//         $('#Currency').html(ResJSON['currency']['name']);
//         $('#flag').attr('src', ResJSON['country_flag'])

//     })


// }

function gatIPGeoDetails(){
    const url="https://api.ipgeolocation.io/ipgeo?apiKey=57726a649e634b4bb854a9cd0658af24";

    axios.get(url).then(function (res){
        let ResJSON=res.data;

        document.getElementById("ip-address").innerHTML=ResJSON.ip;
        document.getElementById("country-name").innerHTML=ResJSON.country_name;
        document.getElementById("city").innerHTML=ResJSON.city;
        document.getElementById("latitude").innerHTML=ResJSON.latitude;
        document.getElementById("longitude").innerHTML=ResJSON.longitude;
        document.getElementById("Time-zone").innerHTML=ResJSON.country_name;
        document.getElementById("isp").innerHTML=ResJSON.isp;
        document.getElementById("currency").innerHTML=ResJSON.currency.name;
        document.getElementById("image").setAttribute('src',ResJSON.country_flag)
        
        console.log(ResJSON.country_flag);
    })
}
gatIPGeoDetails();