
import Particles from "../../bits/Particles/Particles";
import Stack from '../../bits/Stack/Stack'
import TextPressure from '../../bitd/TextPressure/TextPressure';
import ShinyText from '../../bits/ShinyText/ShinyText';
import FuzzyText from '../../bits/FuzzyText/FuzzyText';
  
import SplitText from "../../bits/SplitText/SplitText";



import FallingText from '../../bits/FallingText/FallingText';
  

// Note:
// Make sure the font you're using supports all the variable properties. 
// React Bits does not take responsibility for the fonts used


//thumbnail?id=FILE_ID
const images = [
  { id: 1, img: "https://drive.google.com/thumbnail?id=1nFVOIqS5jbCaMnTcppUy3GAihfvprIEF&sz=w1000" },
  { id: 2, img: "https://drive.google.com/thumbnail?id=1nLqDtGoZk_7W1eoXx5g61j9jts-Euftg&sz=w1000" },
  { id: 3, img: "https://drive.google.com/thumbnail?id=1nQ4tH8cUfhbsNmuzZiEn8T-R5RdarB4Y&sz=w1000" },
  { id: 4, img: "https://drive.google.com/thumbnail?id=1nLqDtGoZk_7W1eoXx5g61j9jts-Euftg&sz=w1000" },
  { id: 5, img: "https://drive.google.com/thumbnail?id=1nKmkHS1i0pNN6KYQ14vglEwsmLV50tXJ&sz=w1000" },
  { id: 6, img: "https://drive.google.com/thumbnail?id=1nKkXV2nF_j1TWIMGln_rINKs0IIQjvDJ&sz=w1000" },
  { id: 7, img: "https://drive.google.com/thumbnail?id=1nITELWNWc9rGUXGkeGiVZRqnmKjYjQ9g&sz=w1000" },
  { id: 8, img: "https://drive.google.com/thumbnail?id=1nHL5aG9aHduWIZqYcyfi6SAN2Mp1cmOO&sz=w1000" },{
    id : 9, img : "https://drive.google.com/thumbnail?id=1nNtRDbOQc9SoHwTHvDJYioIvxBPhgK71&sz=w1000"
  },
  { id : 10,
     img : "https://drive.google.com/thumbnail?id=1nr3VKXrFLe0MCprt61kFp30JA3B3LzOs&sz=w1000"

  },
  {
  id :11 , img : "https://drive.google.com/thumbnail?id=1nsMZEO3KBfHgCtD-Q8_Do1Q6Fvs4g9-b&sz=w1000"
  },
  {
    id :12 , img : "https://drive.google.com/thumbnail?id=1nwirwMAGGe_5cDHoD62JAcxCgmhAlaAc&sz=w1000"
  },{
    id :13 , img : "https://drive.google.com/thumbnail?id=1nyyMcHXecQxuaHhoXHLb82FmpskjA77Z&sz=w1000"
  },{
    id :14 , img : "https://drive.google.com/thumbnail?id=1nzfjswUE5c1PV00Eycfx1IpOux9349ci&sz=w1000"
  }
];
  
export default function Home() {
  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };
  
  console.log("Made with love for Ananya, by her colleagues especially Sourav!")
  return (
    <>
    <div style={{width: '100%', height: '100%'}}>
       <div>
  
    <div style={{position: 'relative', height: '100px'}}>
  <TextPressure
    text="Bon Voyage!"
    flex={true}
    alpha={false}
    stroke={false}
    width={true}
    weight={true}
    italic={true}
    textColor="#fff"
    strokeColor="#ff0000"
    minFontSize={24}
  />
</div>
 <ShinyText text="We will miss you, Ananya!" disabled={false} speed={2} className='custom-class' />
    <div style={{width : '100%', display : "flex" , justifyContent : "flex-start"
    }}>
    <Stack
    randomRotation={true}
    sensitivity={180}
    sendToBackOnClick={false}
    cardDimensions={{ width: 300, height: 300 }}
    cardsData={images}
  >
  </Stack>

    </div>
  
    <div style={{ width: '100%', height: '200px', position: 'relative' }}>
  
      <Particles
        particleColors={['#fff', '#fff']}
        particleCount={200}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
      >
       

      </Particles>
      
    </div> 
    <div style={{width: '100%', height: '370px'}}> 
    <SplitText
  text="It’s hard to imagine the office without your energy! You’ve always been spreading laughter, good vibes, and making things so much more fun and bearable. You brought people together and made even the dull days feel lighter. Your place in our team will forever be the same and irreplaceable❣️"
  className="text-2xl font-semibold text-center text-white"
  delay={100}
  duration={0.6}
  ease="power3.out"
  splitType="chars"
  from={{ opacity: 0, y: 40 }}
  to={{ opacity: 1, y: 0 }}
  threshold={0.1}
  rootMargin="-100px"
  textAlign="center"
/>
</div>
<div style={{ width: '100%', height: '200px', position: 'relative' }}>
  
      <Particles
        particleColors={['#fff', '#fff']}
        particleCount={200}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
      >
       

      </Particles>
      
    </div> 
    <div style={{width: '100%', height: '100px'}}> 
    <FuzzyText 
  baseIntensity={0.2} 
  hoverIntensity={0.5} 
  enableHover={true}
>
  13401626 - 404! 
</FuzzyText>
</div>

    <div style={{width: '100%', height: '300px'}}>
    <FallingText
  text={`Have a great journey ahead, champ! `}
  highlightWords={["great", "journey", "champ"]}
  trigger="hover"
  backgroundColor="transparent"
  wireframes={false}
  gravity={0.56}
  fontSize="2rem"
  mouseConstraintStiffness={0.9}
/>
</div>
<div style={{width: '100%', height: '200px'}}>
    <FallingText
  text={`चराग़ों को आंखों में महफ़ूज़ रखना
बड़ी दूर तक रात ही रात होगी
मुसाफ़िर हैं हम भी मुसाफ़िर हो तुम भी
किसी मोड़ पर फिर मुलाक़ात होगी  `}
  highlightWords={["मुसाफ़िर", "मुलाक़ात", "champ"]}
  trigger="hover"
  backgroundColor="transparent"
  wireframes={false}
  gravity={0.56}
  fontSize="1rem"
  mouseConstraintStiffness={0.9}
/>
</div>
    </div>
    </div> 
    </>);
}
