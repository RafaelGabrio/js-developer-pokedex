const loading = document.getElementById("loading");

const Util = {
  exibirLoading: () => loading.classList.add("active"),
  removerLoading: () => loading.classList.remove("active"),

  delay: (ms) => new Promise((resolve) => setTimeout(resolve, ms)),
};

export default Util;
