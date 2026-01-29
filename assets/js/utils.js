const loading = document.getElementById("loading");

const Util = {
  exibirLoading: () => {
    loading.classList.add("active");
  },

  removerLoading: () => {
    loading.classList.remove("active");
  },
};

export default Util;
