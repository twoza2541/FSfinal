$(function () {

    var url = "/api/products";

    // Get data when first time open
    getData();

    function getData(){
        $("#plist").empty();
        // #12 Get all products and display as a table
        // use $.get
        $.get(endpoin, function (data, status) {
            console.log(status);
            console.log(data);
    
            if (status = 'success') {
                for (index in data) {
                    var user = data[index];
                    var row = `<tr>
                        <td scope="row">${user.id}</td>
                        <td>${user.name}</td>
                        <td>${user.username}</td>
                        <td>${user.email}</td>
                        <td>
                        <a class="btn btn-primary" href="productdetail.html?id=${product.serialno}">
                             View Detail
                    </a>
                    </td>
                    </tr>`;
    
                    $("#userlist").append(row);
                }
    
            }
    
        });
        // ===============================
    }
    
    // Update photo when URL has changed
    $("#photo").change(function(){
        $("#preview").attr("src", $("#photo").val());
    })

    // Add new product by calling api
    $("#savenewproduct").click(function () {
        var newproduct = {
            serialno: $("#serialno").val(),
            name: $("#name").val(),
            category: $("#category").val(),
            price: $("#price").val(),
            photo: $("#photo").val()
        }

        // #13 Add new products by calling api
        // use $.post

        // ===============================

    });
})