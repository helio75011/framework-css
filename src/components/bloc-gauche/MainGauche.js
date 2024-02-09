import Box from './Box';
import BoxDeux from './BoxDeux';
import Barre from './Barre';
import '../../style/style.sass';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css'; 

function MainGauche() {
  return (
    <div className="MainGauche">
      <section className="MainGauche-section">
        <Box></Box>
        <BoxDeux></BoxDeux>
        <Barre></Barre>
      </section>
    </div>
  );
}

export default MainGauche;