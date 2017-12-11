function getPlaces(){
return fetch("http://localhost:8080/places").then(data=>{
    return data.json();
  }).catch(console.log)
}
function getPlace(slug){
  return fetch("http://localhost:8080/places/"+slug).then(data=>{
      return data.json();
    }).catch(console.log)
}
export {getPlaces, getPlace};

export default {
  places: [
    {
        imageUrl: '/images/place-food-1.jpg',
        title: 'Place 1',
        description: 'This is the places number one',
        address: 'Cra 7 #156-30'
    },
    {
        imageUrl: '/images/place-food-1.jpg',
        title: 'Place 2',
        description: 'This is the places number two',
        address: 'Cra 7 #156-30'
    },
    {
        imageUrl: '/images/place-food-1.jpg',
        title: 'Place 3',
        description: 'This is the places number three',
        address: 'Cra 7 #156-30'
    }
  ]
}
