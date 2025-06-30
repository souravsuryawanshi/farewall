
import Particles from "../../bits/Particles/Particles";
import Stack from '../../bits/Stack/Stack'
import TextPressure from '../../bitd/TextPressure/TextPressure';
import ShinyText from '../../bits/ShinyText/ShinyText';
// Note:
// Make sure the font you're using supports all the variable properties. 
// React Bits does not take responsibility for the fonts used



const images = [
  { id: 1, img: "https://drive.google.com/file/d/1nFVOIqS5jbCaMnTcppUy3GAihfvprIEF/view?usp=drivesdk" },
  { id: 2, img: "https://drive.google.com/file/d/1nLqDtGoZk_7W1eoXx5g61j9jts-Euftg/view?usp=drivesdk" },
  { id: 3, img: "https://drive.google.com/file/d/1nQ4tH8cUfhbsNmuzZiEn8T-R5RdarB4Y/view?usp=drivesdk" },
  { id: 4, img: "https://drive.google.com/file/d/1nLqDtGoZk_7W1eoXx5g61j9jts-Euftg/view?usp=drivesdk" },
  { id: 5, img: "https://drive.google.com/file/d/1nKmkHS1i0pNN6KYQ14vglEwsmLV50tXJ/view?usp=drivesdk" },
  { id: 6, img: "https://drive.google.com/file/d/1nKkXV2nF_j1TWIMGln_rINKs0IIQjvDJ/view?usp=drivesdk" },
  { id: 7, img: "https://drive.google.com/file/d/1nITELWNWc9rGUXGkeGiVZRqnmKjYjQ9g/view?usp=drivesdk" },
  { id: 8, img: "https://drive.google.com/file/d/1nHL5aG9aHduWIZqYcyfi6SAN2Mp1cmOO/view?usp=drivesdk" },{
    id : 9, img : "https://drive.google.com/file/d/1nNtRDbOQc9SoHwTHvDJYioIvxBPhgK71/view?usp=drivesdk"
  }
];
  
export default function Home() {
  return (
    <>
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
    
   
    <div style={{ width: '100%', height: '600px', position: 'relative' }}>
  
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
    </>);
}
