window.addEventListener("load", function () {
  const formProduct = document.querySelector(".cargaProducto__formulario");
  const name = document.querySelector("[name=nombre]");
  const details = document.querySelector("[name=descripcion]");
  const brand = document.querySelector("[name=marca]");
  const category = document.querySelector("[name=categoria]");
  const price = document.querySelector("[name=precio]");
  const stock = document.querySelector("[name=stock]");

  formProduct.addEventListener("submit", function (e) {
    let errores = [];

    if (name.value.length === 0) {
      errores.push("Complete el Nombre del producto");
    } else if (name.value.length < 4) {
      errores.push("El nombre no puede tener menos de 4 caracteres");
    }

    if (details.value.length === 0) {
      errores.push("La descripción no puede estar vacía");
    } else if (details.value.length <= 20) {
      errores.push("La descripción no puede tener menos de 20 caracteres");
    }

    if (brand.value === "") {
      errores.push("Elija una marca");
    }

    if (category.value === "") {
      errores.push("Elija una categoría");
    }

    if (price.value.length === 0) {
      errores.push("Ingrese el Precio")
    } else if (isNaN(parseFloat(price.value))) {
        errores.push("El precio debe ser un número")
    }

    if (stock.value.length === 0) {
      errores.push("Ingrese la cantidad en stock")
    } else if (isNaN(parseFloat(stock.value))) {
      errores.push("La cantidad en stock debe ser un número entero");
    }

    if (errores.length > 0) {
      e.preventDefault();
      const ulErrores = document.querySelector("div.errores ul");

      ulErrores.innerHTML = "";

      for (let i = 0; i < errores.length; i++) {
        const li = document.createElement("li")
        li.textContent = errores[i];
        ulErrores.appendChild(li);
      }
    }
  });
});
