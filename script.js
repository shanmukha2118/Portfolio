document.addEventListener("DOMContentLoaded", function () {
    // Scroll to Top when Home Icon is clicked
    const homeIcon = document.querySelector("footer img");
    homeIcon.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Function to Add New Recommendation
    function addRecommendation() {
        let input = document.getElementById("new-recommendation").value.trim();
        if (input !== "") {
            let newRec = document.createElement("div");
            newRec.classList.add("recommendation-box3");
            newRec.textContent = input;

            document.getElementById("recommendation-container").appendChild(newRec);
            document.getElementById("new-recommendation").value = ""; // Clear input field

            // Show confirmation popup
            alert("Thank you for submitting a recommendation!");
        } else {
            alert("Please enter a recommendation before submitting.");
        }
    }

    // Attach function to the Submit Button
    document.querySelector("button").addEventListener("click", addRecommendation);
});
