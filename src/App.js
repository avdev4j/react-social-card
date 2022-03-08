import React from 'react';
import './App.css';
import SocialCard from "./components/SocialCard";

const cardDetails = {
    id: 0,
    content: {
        title: 'Shiba Inu',
        image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        content: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
    },
    likeIsClicked: true,
    likes: 5
}

function App() {
  return (
    <SocialCard
      key={cardDetails.id}
      content={cardDetails.content}
      likes={cardDetails.likes}
      likeIsClicked={cardDetails.likeIsClicked}
      />
  );
}

export default App;
