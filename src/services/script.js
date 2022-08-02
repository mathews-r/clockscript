
const clickSearch = () => {
  const button = document.querySelector('.buttonSearch');
  button.addEventListener('click', () => {
    fetchApi(getItemDom('.input-city').value);
    getItemDom('.input-city').value = '';
  });
};

const enterSerch = () => {
  getItemDom('.input-city').addEventListener('keypress', (event) => {
    if (event.keyCode === 13) {
      fetchApi(getItemDom('.input-city').value);
      getItemDom('.input-city').value = '';
    }
  });
};

