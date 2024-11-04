
    // Aquí se manda a llamar los elementos a la previsualizacion usando los ids de los elementos

    document.getElementById('productImage').addEventListener('change', () => {
        updatePreview();
      });

      document.getElementById('productForm').addEventListener('input', () => {
        updatePreview();
      });

      function updatePreview() {
        const name = document.getElementById('productName').value;
        const price = document.getElementById('productPrice').value;
        const description = document.getElementById('productDescription').value;
        const image = document.getElementById('productImage').files[0];


        if (name || price || description || image) {
          document.getElementById('previewCard').style.display = 'block';
          document.getElementById('previewName').innerText = name;
          document.getElementById('previewPrice').innerText = price;
          document.getElementById('previewDescription').innerText = description;

          if (image) {
            console.log(image)
            const reader = new FileReader();
            reader.onload = function(e) {
              document.getElementById('previewImage').src = e.target.result;
            };
            reader.readAsDataURL(image);
          }
        } else {
          document.getElementById('previewCard').style.display = 'none';
        }
      }

      // Función para añadir producto a la lista
