import React from "react";

export default function Posts(){
  const [like, setLike] = React.useState("black");
  const [name, setName] = React.useState("heart-outline");
  const posts = [
    {fotoUsuario:"assets/img/meowed.svg", nome:"meowed", foto:"assets/img/gato-telefone.svg", curtidas:"Curtido por respondeai e outras 101.523 pessoas"},
    {fotoUsuario:"assets/img/barked.svg", nome:"barked", foto:"assets/img/dog.svg", curtidas:"Curtido por adorable_animals e outras 99.159 pessoas"}
  ]
    return(
      <div class="posts">
        {posts.map(post => 
          <div class="post">
          <div class="topo">
            <div class="usuario">
              <img src={post.fotoUsuario} />
              {post.nome}
            </div>
            <div class="acoes">
              <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
          </div>

          <div class="conteudo">
            <img src={post.foto} />
          </div>

          <div class="fundo">
            <div class="acoes">
              <div>
                <ion-icon name={name} color={like} onClick={() => {
                setLike("red");
                setName("heart")
                if(like === "red" && name === "heart")
                {setLike("black");
                  setName("heart-outline")}
                }}></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
              </div>
              <div>
                <ion-icon name="bookmark-outline"></ion-icon>
              </div>
            </div>

            <div class="curtidas">
              <img src="assets/img/respondeai.svg" />
              <div class="texto">
                {post.curtidas}
              </div>
            </div>
          </div>
        </div>)}      
      </div>
    );
}