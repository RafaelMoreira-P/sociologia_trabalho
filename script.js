function scrollToContent() {
  document.getElementById("conteudo").scrollIntoView({
    behavior: "smooth"
  });
}

function mostrar(tipo) {
  const detalhe = document.getElementById("detalhe");

  detalhe.style.opacity = 0;

  setTimeout(() => {
    if (tipo === "material") {
      detalhe.innerHTML = `
        <h2>Cultura Material</h2>
        <p>Na sociologia, a cultura material representa todos os objetos físicos criados pelos seres humanos.</p>
        <p>Esses elementos mostram o nível tecnológico, os hábitos e o estilo de vida de uma sociedade.</p>
        <ul>
          <li>Roupas</li>
          <li>Celulares</li>
          <li>Construções</li>
          <li>Transportes</li>
        </ul>
      `;
    }

    if (tipo === "imaterial") {
      detalhe.innerHTML = `
        <h2>Cultura Imaterial</h2>
        <p>A cultura imaterial está ligada aos valores, ideias e comportamentos.</p>
        <p>Ela influencia diretamente a forma como pensamos, sentimos e nos relacionamos.</p>
        <ul>
          <li>Língua</li>
          <li>Religião</li>
          <li>Tradições</li>
          <li>Música</li>
        </ul>
      `;
    }

    detalhe.style.opacity = 1;
  }, 200);
}

document.addEventListener("mousemove", (e) => {
  const x = e.clientX / window.innerWidth;

  document.querySelector(".esquerda").style.transform = `translateX(${x * -20}px)`;
  document.querySelector(".direita").style.transform = `translateX(${x * 20}px)`;
});

function exemplo(tipo) {
  const box = document.getElementById("exemplo-box");

  box.style.opacity = 0;

  setTimeout(() => {
    if (tipo === "celular") {
      box.innerHTML = `
        <strong>Celular</strong><br><br>
        O celular é um elemento da cultura material, pois é um objeto físico.
        Porém, o uso dele — como redes sociais e comunicação — faz parte da cultura imaterial.
      `;
    }

    if (tipo === "religiao") {
      box.innerHTML = `
        <strong>Religião</strong><br><br>
        A religião é cultura imaterial, pois envolve crenças e valores.
        Já templos e objetos religiosos fazem parte da cultura material.
      `;
    }

    if (tipo === "musica") {
      box.innerHTML = `
        <strong>Música</strong><br><br>
        A música é um elemento imaterial, pois representa expressão cultural.
        Mas instrumentos musicais são elementos materiais.
      `;
    }

    box.style.opacity = 1;
  }, 200);
}