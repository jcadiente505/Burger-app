$(() => {
    $('.change-devour').on('click', event => {
        let id = $(this).data('id')
        console.log(id)
        let userEat = {
            devoured: true
        };

        // $.ajax("/api/burgers/" + id, {
        //     type: 'PUT',
        //     data: userEat
        // }).then(() => {
        //     console.log(userEat.devoured)

        //     location.reload();
        // });
    })
})

$(".create-form").on("submit", event => {
    event.preventDefault();

    let newBurger = {
        name: $("#bg").val().trim()
        };

        $.ajax("api/burgers", {
            type: "POST",
            data: newBurger
        }).then(() => {
            console.log("success")

            location.reload()
        })
})