$(document).ready(function() {

    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    console.log(isMobile);
    if (isMobile) {
        $('.div-center').css("max-width", "100%");
        $('#mohanVaddi').css("padding", "45px 20px");
    }

    var currentDate = new Date();
    initDates("fromDate", currentDate);
    initDates("toDate", currentDate);

    function initDates(elementId, selectedDate) {
        var selector = '#' + elementId;
        $(selector).datepicker({
            dateFormat: 'dd-mm-yy',
            autoclose: true,
            todayHighlight: true
        });
        $(selector).datepicker('setDate', selectedDate);
    }

    $('#fetchButton').click(function() {
        $('#attendanceReportsCard').removeClass('d-none');
        console.log('clicked..');
    });


});