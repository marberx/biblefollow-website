document.addEventListener("DOMContentLoaded", function () {

    const menuButton =
        document.getElementById("mobileMenuButton");

    const navigation =
        document.getElementById("navigation");


    if (menuButton && navigation) {

        menuButton.addEventListener("click", function () {

            navigation.classList.toggle("active");

            const isOpen =
                navigation.classList.contains("active");

            menuButton.setAttribute(
                "aria-expanded",
                isOpen
            );

        });


        navigation
            .querySelectorAll("a")
            .forEach(function (link) {

                link.addEventListener(
                    "click",
                    function () {

                        navigation
                            .classList
                            .remove("active");

                        menuButton.setAttribute(
                            "aria-expanded",
                            "false"
                        );

                    }
                );

            });

    }


    const year =
        document.getElementById("currentYear");

    if (year) {

        year.textContent =
            new Date().getFullYear();

    }

});
