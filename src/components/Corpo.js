import Stories from "./Stories";
import Posts from "./Posts";
import Sugestoes from "./Sugestoes";

function Usuario (props){
  return(
    <div class="usuario">
            <img src={props.img} />
            <div class="texto">
              <strong>{props.usuario}</strong>
              {props.nome}
            </div>
          </div>
  );
}

export default function Corpo(){
    return(
    <div class="corpo">
        <div class="esquerda">
            <Stories />
            <Posts /> 
        </div>

        <div class="sidebar">
          <Usuario 
          img="assets/img/catanacomics.svg"
          usuario="catanacomics"
          nome="Catana"
          />
          
          <Sugestoes /> 
          
          <div class="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
          </div>

          <div class="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
          </div>
        </div>
      </div>
    );
}