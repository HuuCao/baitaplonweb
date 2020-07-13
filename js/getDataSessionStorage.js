

function getDataStorage() {
    sessionStorage.removeItem("IsThisFirstTime_Log_From_LiveServer");
    var lengthSessionStorage = sessionStorage.length;
    var arrKey = [];

    for (var i = 0; i < lengthSessionStorage; ++i) {
        var value = JSON.parse(sessionStorage.getItem(sessionStorage.key(i)));
        arrKey.push(value);
    }
    
    var countRow = 0;
    var tableElementItem = document.querySelector("#itemProduct");
    var tableElementTotal = document.querySelector("#totalProduct");
    var tdElementSubtotal = tableElementTotal.querySelector("#subtotal");
    var tdElementTotal = tableElementTotal.querySelector("#total");
    var total = 0;

    arrKey.forEach((element) => {
        var s = `
        <td><img src="${element.img}" alt="" style="width: 115px; height: 115px;"></td>
        <td>${element.name}</td>
        <td style="color: #f16821;">${formatPrice(element.price)}</td>
        <td class="table-list__body-column">
            <input type="number" min="0" class="input-quantity" value="1" name="" style="width: 40px; padding-left: 8px">
        </td>
        `

        var row = tableElementItem.insertRow(++countRow);
        row.innerHTML = s;

        total += element.price;
    });

    tdElementSubtotal.innerHTML = formatPrice(total);
    tdElementTotal.innerHTML = formatPrice(total);

    function formatPrice(num) {
        return "$" + num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
    }
}

getDataStorage();
