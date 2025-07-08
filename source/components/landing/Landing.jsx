import Header from '../header/Header.jsx';
import Profissional from '../profissional/Profissional.jsx';
import Educacao from '../educacao/Educacao.jsx';
import Pessoal from '../pessoal/Pessoal.jsx';
import Footer from '../footer/Footer.jsx';

function Landing(){
    return(
        <>
            <h1>Landing Page</h1>
            <Header></Header>
            <Profissional></Profissional>
            <Educacao></Educacao>
            <Pessoal></Pessoal>
            <Footer></Footer>
        </>
    );
}

export default Landing;