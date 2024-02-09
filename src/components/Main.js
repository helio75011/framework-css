import MainDroit from "./bloc-droit/MainDroit";
import MainGauche from "./bloc-gauche/MainGauche";
import '../style/style.sass';

function Main() {
  return (
    <div className="Main">
      <main className="Main-section">
        <MainDroit></MainDroit>
        <MainGauche></MainGauche>
      </main>
    </div>
  );
}

export default Main;