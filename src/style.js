import styled from 'styled-components';


export const ContainerN = styled.div`
           display: flex;
           justify-content: space-between;
           height: 100%;
           width: 100%;
           background-color:#FFF;
           flex-wrap: wrap;

           ul{
            display: flex;
            list-style-type: none;
            flex-wrap: wrap;
            padding-left: 0;
            
           }

           li{
            margin: 40px 25px 0px 10px;
           
           }

           a{
            text-decoration: none;
            color: #000;
            font-weight: 400;
            font-size: 16px;

            border-bottom: 2px solid transparent; 
            transition: border-bottom 0.3s ease;
            
            
            &:hover {
           border-bottom: 2px solid  #9E0232; 
           }
           
            
           }

        input:focus {
           outline: none;
          }
          
          .input-icon {
           position: relative;
           display: inline-block;
           margin-top: 35px;
           }

           .input-icon input {
           padding-left: 50px; /* Espaço para o ícone */
           padding: 8px;
           border: 1px solid #ccc;
           border-radius: 20px;
           width: 250px;
           font-size: 13px;
           cursor: pointer;
           }
    
           .search-icon {
           position: absolute;
           top: 20px;
           left: 210px;
           transform: translateY(-50%);
           color: #888; /* Cor do ícone */
           cursor: pointer;
           }

           .icons{
            display: flex;
            gap: 20px;
           }
           
           .shopping-cart-icon{
           background-color:   #FFCC80; 
           box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.08);
           color:  #000;
           border-radius: 50% ;
           padding: 10px; /* Espaço interno para aumentar o tamanho do círculo */
           margin-top: 35px;
           margin-right: 50px;
           width: 35px;
           height:35px;
           justify-content: center;
           align-items: center;
           display: flex;
           cursor:pointer;
           transition: transform 0.1s ease, background-color 0.2s ease, box-shadow 0.3s ease;

        &:hover {
        background-color: #FF8C1A; /* Laranja mais claro no hover */
        box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.05); /* Sombra mais suave no hover */
        }

        &:active {
        transform: scale(0.98); /* Efeito de clique bem sutil */
        box-shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.1); /* Sombra interna suave */
       }
        }

        .telephone-contact{
           background-color:   #FFCC80; 
           box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.08);
           border-radius: 50%; 
           padding: 10px; /* Espaço interno para aumentar o tamanho do círculo */
           margin-top: 35px;
           width: 35px;
           height:35px;
           justify-content: center;
           align-items: center;
           display: flex;
           cursor:pointer;
           transition: transform 0.1s ease, background-color 0.1s ease;

           &:hover {
        background-color: #FF8C1A; /* Laranja mais claro no hover */
        box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.05); /* Sombra mais suave no hover */
        }
         
           &:active {
         transform: scale(0.95); /* Dá um efeito de "pressionamento", diminuindo um pouco o botão */
         }
        }

        @media (max-width: 768px) {
  
          .input-icon {
          display: none; 
          }

        ul {
       flex-direction: column; 
       }

       li{
        margin: 20px;
       }

    .icons {
      gap: 10px; 
    }

    .shopping-cart-icon,
    .telephone-contact {
      margin-right: 10px; 
    }

    }
`
export const StyledButton = styled.div`
            width: 130px;
            height: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 35px;
            margin-right: 100px;
            margin-left: -100px;
            border: none;
            border-radius: 10px;
            background-color:  #F57F17;
            box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.08);
            color: #FFF;
            font-weight: 600;
            font-size: 15px;
            cursor: pointer;
            transition: transform 0.1s ease, background-color 0.1s ease;

            
           &:hover {
        background-color: #FF8C1A; /* Laranja mais claro no hover */
        box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.05); /* Sombra mais suave no hover */
        }
         
           &:active {
         transform: scale(0.95); /* Dá um efeito de "pressionamento", diminuindo um pouco o botão */
         }

         @media (max-width: 768px) {
  
            display: none;
          } 
           
`
export const Logo = styled.div`

img{
    width: 100px;
    height: 100px;
    margin-left: 30px;
    cursor:pointer;
}
  
`

export const CarroselConteiner = styled.div`
          
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 50%;
          background:  #F1DFDD;
          padding: 0 20px; 


          .slideContent{
            display: flex;
            align-items: center;
            justify-content: space-between; 
          }
          
          img{
            height: 400px;
          }
         
          h1{
            text-align: center;
            font-family: "Roboto Slab";
            font-weight: 400;
            font-size: 40px;
            width: 600px;
            margin-left: 100px;
            cursor: pointer;
            color: #000;
          }

          p{
            text-align: center;
            margin-left: -300px;
            margin-top: 20px;
            font-weight: 300;
            font-size: 16px;
          }

         .button-slider{
          display: flex;
          justify-content: center;
          height: 43px;
          width: 130px;
          align-items: center;
          margin-left: -200px;
          background-color:  #F57F17;
          color: #FFF;
          font-weight: 500;
          font-size: 16px;
          border-radius: 5px;
         }


         @media (max-width: 768px) {
          
          .slideContent {
          padding: 15px;
          flex-direction: column;
          }

          img{
          margin-left: 50px;
          }

          .button-slider{
            margin-left: 20px;
            width: 100px;
            margin-bottom: 30px;
            font-size: 15px;
          }
        
         h1 {
         font-size: 20px;
         margin-left: -100px;
        }

        p {
        font-size: 14px;
        margin-left: -80px;
    } 

    }        
`
export const ContainerTop = styled.div`
        display: flex;
        justify-content: space-around;
        align-items: center;

        @media (max-width: 768px) {
          width: 100%; 
          flex-direction: column;
          align-items: center;
          justify-content: center;
          }
`
export const CardLeft = styled.div`
         
         width: 20%; /* Ajuste o tamanho do card */
         height: 20%;
         margin-top: 50px;    
         margin-right: 20px;
         margin-bottom: 30px;
         cursor: pointer;
         transition: box-shadow 0.3s ease;

         .card-content{
          margin-left: 50px;
         }

         .button-sale{
          position: absolute;
          width: 60px;
          height: 30px;
          margin-top: 20px;
          border-radius: 20px;
          border: none;
          font-size: 12px;
          font-weight: 700;
          color: #FFF;
          background-color: #CD0000;
         }
         
        h1{
          color: #292929;
          font-weight: 300;
          text-align: center;
          font-size: 13px;
        }

        h2{
          text-align: center;
          font-size: 15px;
          font-weight: 400;
          margin-top: 10px;
          color: #2c2c2c;
        }
        
        
        img{
          width: 250px;
          margin-left: 20px;
        }
       
    @media (max-width: 768px) {
            width: 100%; 
            margin-bottom: -50px;
    
            img{
            margin-left: 50px;
           }

           h1 {
           font-size: 11px; /* Ajuste de fonte em telas pequenas */
           }
    
           h2 {
            font-size: 13px;
              }
         .button-sale {
         width: 50px;
         height: 25px;
         margin-right: 20px;
         font-size: 10px;
         animation: blink 1s infinite
          }

          @keyframes blink {
    0% {
      opacity: 1; 
    }
    50% {
      opacity: 0; 
    }
    100% {
      opacity: 1; 
    }
  }
  }
`
export const ContainerS = styled.div`
      width: 100%;
      height: 100%;
      margin-top: 100px;
      margin-bottom: 20px;
      background: linear-gradient(45deg, #F1DFDD, #D86487);

    
      .text-align{
        display: flex;
        justify-content: space-between;
      }

      p{
        text-align: center;
        width: 600px;
        font-weight: 400;
        font-size: 15px;
        margin-top: 150px;
        margin-left:80px;
        color: #000;
      }
       
      .icon-flower{
        color: #000;
        margin-bottom: 20px;
        font-size: 25px; 
      }

      img{
        margin-right: 50px;
        
      }

      @media (max-width: 768px) {
             
  
              p {
              width: 400px;
              font-size: 14px;
              margin-bottom: 30px;
              margin-right: 80px;
              
             }

             .text-align {
             flex-direction: column;
             align-items: center;
              }

             img {
             margin-right: 120px;
             }
  }

 `    
export const ContainerM = styled.div`
        display: flex;
        height: 100%;
        width: 100%;
        margin-top: 150px;
        justify-content: space-around;
        gap: 20px;
        align-items: center;
        background:  #F1DFDD;

        .img-logo{
          display: flex;
          flex-direction: column; 
        }
        
        img{
          width: 100px;
          height: 100px;

        }

        .icons{
          display: flex;
          gap: 20px;
          font-size: 20px;
          cursor: pointer;
        }

        h1{
            font-size: 15px;
            font-weight: 500;
            margin-top: 50px;
            margin-bottom: 20px;
            text-align: center;
          }

        ul{
          list-style: none;

        }

        li{
          color:  #000;
          margin-bottom: 15px;
          font-size: 14px;
          text-align: center;
          cursor: pointer;
  
        }

        @media (max-width: 768px) {
          flex-direction: column;
          margin-top: 100px;
          gap: 40px;

          img {
          width: 80px;
          height: 80px;
          margin-left: 20px;

          }

          h1 {
         font-size: 14px;
         margin-top: 20px;
        }
  }

        
`
export const ContainerI = styled.div`
         display: flex;
         margin-top: 20px;
         align-items: center;
         justify-content: space-around;

       

        .image1f {
        background: rgba(255, 255, 255, 0.3); /* Cor branca semitransparente */
        backdrop-filter: blur(10px); /* Aplica o desfoque no fundo */
        width: 300px; 
        height: 200px; 
        display: flex;
        margin-top: 100px;
        margin-bottom: 20px;
        justify-content: center; /* Alinha a imagem horizontalmente */
        align-items: center; /* Alinha a imagem verticalmente */
        border-radius: 10px; /* Bordas arredondadas mais suaves */
        padding: 10px; /* Adiciona um pouco de espaçamento entre a borda e a imagem */
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1); /* Sombra sutil para dar profundidade */
        overflow: hidden; /* Impede que a imagem ultrapasse os limites do card */
        }

       .image1f img {
        margin-bottom: 10px; /* Espaçamento entre a imagem e o título */
        }

       h1 {
       text-align: center;
       font-size: 18px;
       font-weight: 300;
       }

      img{
      margin-left: 10px;
      width: 150px;
}

@media (max-width: 768px) {
          flex-direction: column;
          align-items: center;
          margin-top: 30px;
    }

    h1{
      font-size: 15px;
    }
`
