function wyslijFormularz() {
        alert("Dziękujemy za wysłanie formularza. Prosimy o sprawdzenie swojej skrzynki e-mail.");
    }
document.addEventListener("DOMContentLoaded", function(){
    var dropdown = document.querySelector(".dropdown");
    var dropdownContent = document.querySelector(".dropdown-content");

    // Funkcja do ukrywania menu
    function hideDropdown() {
        dropdownContent.style.display = "none";
    }


    // Funkcja do sprawdzania czy kliknięcie nastąpiło wewnątrz menu
    function isClickedInsideDropdown(event) {
        return dropdown.contains(event.target) || dropdownContent.contains(event.target);
    }

    // Obsługa zdarzenia kliknięcia na całą stronę
    document.addEventListener("click", function(event) {
        if (!isClickedInsideDropdown(event)) {
            hideDropdown();
        }
    });

    // Obsługa zdarzenia kliknięcia na przycisk menu
    dropdown.addEventListener("click", function(event) {
        if (dropdownContent.style.display === "none") {
            dropdownContent.style.display = "block";
        } else {
            hideDropdown();
        }
        event.stopPropagation(); // Zapobieganie propagacji zdarzenia do dokumentu
    });

});