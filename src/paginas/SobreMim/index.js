import styles from "./SobreMim.module.css";

import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.png"


export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >

            <h3 className={styles.subtitulo}>
                Olá, eu sou o  Maurício!
            </h3>

            <img
                src={fotoSobreMim}
                alt="Foto do Maurício"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>Oi, tudo bem? Eu sou o Mauricio e estou no 8º período de Ciência da Computação. Fico muito feliz que você esteja aqui no meu espaço!</p>

            <p className={styles.paragrafo}>Minha jornada com a programação começou na faculdade, quando tive o primeiro contato mais profundo com lógica, algoritmos e diferentes linguagens. Desde então, descobri que meu interesse maior está no desenvolvimento web, principalmente no front-end, onde consigo unir código, design e experiência do usuário.</p>

            <p className={styles.paragrafo}>Durante o curso, participei de projetos acadêmicos e também atuei em rotinas administrativas, o que me ajudou a desenvolver não só habilidades técnicas, mas também organização, comunicação e resolução de problemas. Além disso, tive a oportunidade de trabalhar no desenvolvimento de sites, explorando tecnologias como <strong>HTML, CSS, JavaScript, React e Shopify (com Liquid e integrações personalizadas)</strong>.</p>

            <p className={styles.paragrafo}>Hoje, atuo como backoffice no Grupo Macro, mas sigo direcionando minha carreira para o desenvolvimento front-end, área na qual me sinto motivado a criar interfaces funcionais, acessíveis e que realmente façam diferença na experiência das pessoas.</p>

            <p className={styles.paragrafo}>Esse site é um dos meus projetos pessoais, feito para compartilhar um pouco da minha trajetória e aprendizados. Seja muito bem-vindo(a)!</p>



        </PostModelo>
    )    
}