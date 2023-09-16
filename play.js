document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector(".cardSearch");
    const cardHolder = document.querySelector(".cardHolder");

    searchInput.addEventListener("input", function (event) {
        const searchTerm = event.target.value;

        // Clear the cardHolder content.
        cardHolder.innerHTML = "";

        // You can now use searchTerm to filter or search for content and display it in the cardHolder.
        // For example, you can create new cards or elements based on the search term.

        // Example:
        if (searchTerm.trim() !== "") {
            const card = document.createElement("div");
            card.classList.add("card");
            card.textContent = "Search Result for: " + searchTerm;

            // Append the card to the cardHolder.
            cardHolder.appendChild(card);
        }
    });
});
