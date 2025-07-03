function Footer(){
    return(
        <footer>
            <br/>
            <a href="index.html" title="Voltar para primeira pagina">
                <button>Voltar</button>
            </a>
            
            <h5>&copy; {new Date().getFullYear()} Caio Cavalcante.
                <br/>Todos os direitos reservados.</h5>
        </footer>
    );
}

export default Footer;