$(document).ready(function () {
    $(".faq-question").click(function () {
        var $this = $(this); // The clicked question
        var $answer = $this.next(".faq-answer");

        // If this question is open, close it
        if ($answer.is(":visible")) {
            $answer.slideUp(300);  // Slide up the answer
            $this.parent().removeClass("open");  // Remove the open class from the parent
        } else {
            // Close any other open answers
            $(".faq-answer").slideUp(300);
            $(".faq-item").removeClass("open");

            // Open the clicked answer
            $answer.slideDown(300);
            $this.parent().addClass("open");  // Add the open class to the parent
        }
    });
});