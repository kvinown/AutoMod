function loadNavbar() {
	fetch("views/navbar.html")
		.then((response) => {
			if (!response.ok) {
				throw new Error("Network response was not ok " + response.statusText);
			}
			return response.text();
		})
		.then((data) => {
			document.getElementById("navbarContainer").innerHTML = data;
		})
		.catch((error) => console.error("Error loading navbar:", error));
}

window.onload = function () {
	loadNavbar();
};
