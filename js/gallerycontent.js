fetch("db/gallerycontent.json")
  .then((response) => response.json())
  .then((data) => {
    let addresses = "";
    data.addresses.forEach((address) => {
      addresses += `
            <div class="image-box">
                <img src="${address.imageSrc}" alt="img.jpg" />
                <div class="overlay">
                    <div class="details">
                        <h3 class="title">
                            <a href="${address.link}">${address.title}</a>
                        </h3>
                        <span class="category">
                            <a href="${address.link}">${address.category}</a>
                        </span>
                    </div>
                </div>
            </div>
        `;
    });
    document.querySelector(".image-gallery").innerHTML = addresses;
  });
