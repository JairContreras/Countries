let options = {
    numberPerPage: 8, //Cantidad de datos por pagina
    goBar: true, //Barra donde puedes digitar el numero de la pagina al que quiere ir
    pageCounter: true, //Contador de paginas, en cual estas, de cuantas paginas
};

let filterOptions = {
    el: '#searchBox' //Caja de texto para filtrar, puede ser una clase o un ID
};

window.paginate.init(".myTable", options, filterOptions);

