let addTopMenu = function(){
    let navheader = document.getElementById('navbar');
    let headerContent = '<div class="header-wrapper display-flex">'+
                            '<div class= "col-sm-3">'+
                                '<img class="erin-logo" src="assets/images/heights-logo.png" />'+
                                '<img class="erin-logo" src="assets/images/court-logo.png" />'+
                            '</div>'+
                            '<div class="header-links col-sm-9">' +
                                '<div class="link-btn"> Call/Text  518.562.1667 </div> ' +
                                '<div class="link-btn"><a href=#> Apply Now </a></div>'+
                                '<div class="link-btn"><a href=#> Residents </a></div>'+
                            '</div>'+  
                        '</div>';

    navheader.innerHTML = headerContent;
  
}

addTopMenu();

