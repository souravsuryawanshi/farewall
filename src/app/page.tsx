
import Particles from "../../bits/Particles/Particles";
import Stack from '../../bits/Stack/Stack'
import TextPressure from '../../bitd/TextPressure/TextPressure';
import ShinyText from '../../bits/ShinyText/ShinyText';
// Note:
// Make sure the font you're using supports all the variable properties. 
// React Bits does not take responsibility for the fonts used


const images = [
  { id: 1, img: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format" },
  { id: 2, img: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=500&auto=format" },
  { id: 3, img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format" },
  { id: 4, img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format" }
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
