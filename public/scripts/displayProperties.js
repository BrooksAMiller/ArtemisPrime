$(document).ready(function(){
    $.ajax({
        url:'/public/scripts/ajaxfile.php',
        type:'get',
        dataType: 'JSON',
        success: function(response){
            console.log("connect success");
            var len = response.length;
            for(var i = 0; i < len; i++){
                var id = response[i].id;
                var list_header = response[i].list_header;
                var price_selector = response[i].price_selector;
                var square_meter = response[i].square_meter;
                var property_type = response[i].property_type;
                var total_bedrooms = response[i].total_bedrooms;
                var floors = response[i].floors;
                var price_per_m2= response[i].price_per_m2;
                var neighborhood = response[i].neighborhood;
                var zone_status = response[i].zone_status;

                if(property_type === 'Apartment' || property_type === 'Building' ||property_type === 'Detached House' ){
                    var listProperties = 
                "<div class='card-template'>" +
                    "<img src='../img/Jungfrau Youtube square.png' alt='place-holder-img'>" +
                "<div class='property-info'>" +
                    "<h2>" + list_header + "</h2>" +
                    "<div class='info-grid'>" +
                      "<div>" +
                            "<h3>Price:</h3>" +
                            "<p>€ " + price_selector + "</p>" +
                      "</div>" +
                      "<div>" +
                             "<h3>Square Meters:</h3>" +
                             "<p>" + square_meter + "m²</p>" +
                      "</div>"+
                      "<div>" +
                             "<h3>Price/m²:</h3>" +
                             "<p>€ " + price_per_m2 + "</p>" +
                      "</div>" +
                      "<div>" +
                             "<h3>Property Type:</h3>" +
                             "<p>" + property_type + "</p>" +
                      "</div>" +
                      "<div>" +
                            "<h3>Total Bedrooms:</h3>" +
                            "<p>" + total_bedrooms + "</p>" +
                      "</div>" + 
                      "<div>" +
                            "<h3>Neighborhood:</h3>" +
                            "<p>" + neighborhood + "</p>" +
                      "</div>" +                 
                    "</div>" +
                "</div>"
            "</div>";
                }
            if(property_type === 'Land Plot' || property_type === 'Office'  ) {
                var listProperties = 
                "<div class='card-template'>" +
                    "<img src='../img/Jungfrau Youtube square.png' alt='place-holder-img'>" +
                "<div class='property-info'>" +
                    "<h2>" + list_header + "</h2>" +
                    "<div class='info-grid'>" +
                      "<div>" +
                            "<h3>Price:</h3>" +
                            "<p>€ " + price_selector + "</p>" +
                      "</div>" +
                      "<div>" +
                             "<h3>Square Meters:</h3>" +
                             "<p>" + square_meter + "m²</p>" +
                      "</div>"+
                      "<div>" +
                             "<h3>Price/m²:</h3>" +
                             "<p>€ " + price_per_m2 + "</p>" +
                      "</div>" +
                      "<div>" +
                             "<h3>Property Type:</h3>" +
                             "<p>" + property_type + "</p>" +
                      "</div>" +
                      "<div>" +
                            "<h3>Zone Status:</h3>" +
                            "<p>" + zone_status + "</p>" +
                      "</div>" + 
                      "<div>" +
                            "<h3>Neighborhood:</h3>" +
                            "<p>" + neighborhood + "</p>" +
                      "</div>" +                 
                    "</div>" +
                "</div>"
            "</div>";
            }

                
            $(".display-property-container").append(listProperties);
            }
        }
    });
});