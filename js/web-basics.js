$('#wireframing').on('click', function() {
    $('#wireframing').addClass('active');
    $('#button-area').html(
        '<a href="https://flowmar.github.io/HW-Wireframe"><button class="btn btn-unique animated bounceIn" type=button title="Live Link">Live Link</button></a><a href= "https://github.com/flowmar/HW-Wireframe"> <button class="btn btn-indigo animated rollIn" type="button" title="Source Code">Source Code</button></a>'
    );
    $('#basic', '#responsive', '#bootstrap').addClass('.noclick');
});