function changeTheme() {
            var body = document.body;
            var navBar = document.getElementById("nav-bar");
            var switchContainer = document.getElementById("switch-container");
            var footer = document.getElementById("footer");

            if (body.classList.contains("night")) {
                body.classList.remove("night");
                body.classList.add("day");
                navBar.classList.remove("night");
                navBar.classList.add("day");
                switchContainer.classList.remove("night");
                switchContainer.classList.add("day");
                footer.style.backgroundColor = "#33C759";
            } else {
                body.classList.remove("day");
                body.classList.add("night");
                navBar.classList.remove("day");
                navBar.classList.add("night");
                switchContainer.classList.remove("day");
                switchContainer.classList.add("night");
                footer.style.backgroundColor = "#33C759";
            }
        }
