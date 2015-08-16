var selectedId
// Listen for any attempts to call changePage().

$(document).bind("pagebeforechange", function (e, data) {
    
    // We only want to handle changePage() calls where the caller is asking us to load a page by URL.
    if (typeof data.toPage === "string") {

        // We are being asked to load a page by URL, but we only
        // want to handle URLs that request the data for a specific
        // category.
        var u = $.mobile.path.parseUrl(data.toPage),
			navListStructures = /^#page-list-structures/,
            navListUnits = /^#page-list-units/,
            navDetailStructure = /^#page-detail-structure/;
        selectedId = data.toPage.substring(data.toPage.indexOf("id=") + 3); // Selected structure id

        // *** Manipulate the list of structures *** //
        if (u.hash.search(navListStructures) !== -1) {
            var $page = $("#page-list-structures"),
				$header = $page.children(":jqmData(role=header)"),
				$content = $page.children(":jqmData(role=content)"),
				markup = "</p><ul data-role='listview' data-inset='true' data-filter='true'>",
				countItems = structures.length;

            for (var i = 0; i < countItems; i++) {
                // If info doesn't exist use desc
                if (structures[i].info == null) {
                    structures[i].info = structures[i].desc;
                }

                markup += "<li><a href='#page-detail-structure?id=" + i + "'><img src='images/icons/structures/" + structures[i].imageFile() + "' /><h3>" + structures[i].name + "</h3><p>" + structures[i].info + "</p></a></li>";
            }
            markup += "</ul>";

            $content.html(markup);
            $page.page();
            $content.find(":jqmData(role=listview)").listview();
            $.mobile.changePage($page);

            // We're being asked to display the items for a specific category.
            // Call our internal method that builds the content for the category
            // on the fly based on our in-memory category data structure.
            //showCategory( u, data.options );

            // Make sure to tell changePage() we've handled this call so it doesn't
            // have to do anything.
            e.preventDefault();
        }

            // *** Manipulate the list of units *** //
        else if (u.hash.search(navListUnits) !== -1) {
            var $page = $("#page-list-units"),
				$header = $page.children(":jqmData(role=header)"),
				$content = $page.children(":jqmData(role=content)"),
				markup = "</p><ul data-role='listview' data-inset='true' data-filter='true'>",
				countItems = units.length;

            for (var i = 0; i < countItems; i++) {
                markup += "<li><a href='#page-detail-unit?id=" + i + "'><img src='images/icons/units/" + units[i].imageFile() + "' /><h3>" + units[i].name + "</h3><p>Targets: " + units[i].targets + "</p></a></li>";
            }
            markup += "</ul>";

            $content.html(markup);
            $page.page();
            $content.find(":jqmData(role=listview)").listview();
            $.mobile.changePage($page);

            e.preventDefault();
        }

        // *** Manipulate details page for a structure *** //
        else if (u.hash.search(navDetailStructure) !== -1) {
            
        }
        
    }
});


// Page handler for: #page-detail-structure
$(document).on("pagebeforeshow", "#page-detail-structure", function (e, data) {
    var $page = $("#page-detail-structure"),
        $header = $page.children(":jqmData(role=header)"),
        $content = $page.children(":jqmData(role=content)");
        

    // Find the H1 element and inject structure name into it
    $header.find("h1").html(structures[selectedId].name);
    // Find and set structure image file and more elements
    $content.find("#structureImg").attr('src', 'images/icons/structures/' + structures[selectedId].imageFile());
    $content.find("#structureType").html(structures[selectedId].type);
    $content.find("#structureInfo").html(structures[selectedId].info);

    // Begin building markup for page and listview
    var htmlStr = "";
    var htmlStrDiv = '';
    // Find and set structure detail: buildTime
    if (structures[selectedId].buildTime !== undefined) {
        htmlStr += htmlStrDiv + buildHtmlContent(0, 'Build Time', structures[selectedId].buildTime.length, structures[selectedId].buildTime);
    }
    // Find and set structure detail: hitpoints
    if (structures[selectedId].hitpoints !== undefined) {
        htmlStr += htmlStrDiv + buildHtmlContent('info-hitpoints', 'Hitpoints', structures[selectedId].hitpoints.length, structures[selectedId].hitpoints);
    }
    // Find and set structure detail: costCash
    if (structures[selectedId].costCash !== undefined) {
        htmlStr += htmlStrDiv + buildHtmlContent('info-cash', 'Cost Cash', structures[selectedId].costCash.length, structures[selectedId].costCash);
    }
    // Find and set structure detail: damagePerSec
    if (structures[selectedId].damagePerSec !== undefined) {
        htmlStr += htmlStrDiv + buildHtmlContent('info-damage', 'Damage per Second', structures[selectedId].damagePerSec.length, structures[selectedId].damagePerSec);
    }
    // Find and set structure detail: productionOilMax
    if (structures[selectedId].productionOilMax !== undefined) {
        htmlStr += htmlStrDiv + buildHtmlContent('info-oil', 'Oil Max Production', structures[selectedId].productionOilMax.length, structures[selectedId].productionOilMax);
    }
    // Find and set structure detail: productionOilHourly
    if (structures[selectedId].productionOilHourly !== undefined) {
        htmlStr += htmlStrDiv + buildHtmlContent('info-oil', 'Oil Hourly Production', structures[selectedId].productionOilHourly.length, structures[selectedId].productionOilHourly);
    }
    // Find and set structure detail: productionCashMax
    if (structures[selectedId].productionCashMax !== undefined) {
        htmlStr += htmlStrDiv + buildHtmlContent('info-cash', 'Cash Max Production', structures[selectedId].productionCashMax.length, structures[selectedId].productionCashMax);
    }
    // Find and set structure detail: productionCashHourly
    if (structures[selectedId].productionCashHourly !== undefined) {
        htmlStr += htmlStrDiv + buildHtmlContent('info-cash', 'Cash Hourly Production', structures[selectedId].productionCashHourly.length, structures[selectedId].productionCashHourly);
    }
    // Find and set structure detail: storageCapacityOil
    if (structures[selectedId].storageCapacityOil !== undefined) {
        htmlStr += htmlStrDiv + buildHtmlContent('info-oil', 'Oil Storage Capacity', structures[selectedId].storageCapacityOil.length, structures[selectedId].storageCapacityOil);
    }
    // Find and set structure detail: storageCapacityCash
    if (structures[selectedId].storageCapacityCash !== undefined) {
        htmlStr += htmlStrDiv + buildHtmlContent('info-cash', 'Cash Storage Capacity', structures[selectedId].storageCapacityCash.length, structures[selectedId].storageCapacityCash);
    }
    // Find and set structure detail: storageCapacityIron
    if (structures[selectedId].storageCapacityIron !== undefined) {
        htmlStr += htmlStrDiv + buildHtmlContent(0, 'Iron Storage Capacity', structures[selectedId].storageCapacityIron.length, structures[selectedId].storageCapacityIron);
    }
    // Find and set structure detail: costIron
    if (structures[selectedId].costIron !== undefined) {
        htmlStr += htmlStrDiv + buildHtmlContent(0, 'Cost Iron', structures[selectedId].costIron.length, structures[selectedId].costIron);
    }
    // Find and set structure detail: storageReserve
    if (structures[selectedId].storageReserve !== undefined) {
        htmlStr += htmlStrDiv + buildHtmlContent(0, 'Storage Reserve', structures[selectedId].storageReserve.length, structures[selectedId].storageReserve);
    }
    // Find and set structure detail: troopCapacity
    if (structures[selectedId].troopCapacity !== undefined) {
        htmlStr += htmlStrDiv + buildHtmlContent(0, 'Troop Capacity', structures[selectedId].troopCapacity.length, structures[selectedId].troopCapacity);
    }
    // Find and set structure detail: commandPoints
    if (structures[selectedId].commandPoints !== undefined) {
        htmlStr += htmlStrDiv + buildHtmlContent(0, 'Command Points', structures[selectedId].commandPoints.length, structures[selectedId].commandPoints);
    }
    // Find and set structure detail: upgradeExp
    if (structures[selectedId].upgradeExp !== undefined) {
        htmlStr += htmlStrDiv + buildHtmlContent(0, 'Upgrade Experience', structures[selectedId].upgradeExp.length, structures[selectedId].upgradeExp);
    }
    // Find and set structure detail: instantGold
    if (structures[selectedId].instantGold !== undefined) {
        htmlStr += htmlStrDiv + buildHtmlContent(0, 'Instant Gold', structures[selectedId].instantGold.length, structures[selectedId].instantGold);
    }
    // Find and set structure detail: levelBuildLimit
    if (structures[selectedId].levelBuildLimit !== undefined) {
        htmlStr += htmlStrDiv + buildHtmlContent(0, 'Build Limit by Level', structures[selectedId].levelBuildLimit.length, structures[selectedId].levelBuildLimit);
    }
    // Find and set structure detail: levelUpgradeLimit
    if (structures[selectedId].levelUpgradeLimit !== undefined) {
        htmlStr += htmlStrDiv + buildHtmlContent(0, 'Upgrade Limit by Level', structures[selectedId].levelUpgradeLimit.length, structures[selectedId].levelUpgradeLimit);
    }
    // Finally append listview markup
    $content.find("#collapsDetails").html(htmlStr);
    
    
    $page.page();
    //$content.find(":jqmData(role=listview)").listview();
    $("#collapsDetails").trigger('create');
    $.mobile.changePage($page);
    e.preventDefault();
});

// Page handler for: #page-detail-unit
$(document).on("pagebeforeshow", "#page-detail-unit", function (e, data) {
    var $page = $("#page-detail-unit"),
        $header = $page.children(":jqmData(role=header)"),
        $content = $page.children(":jqmData(role=content)");


    // Find the H1 element and inject structure name into it
    $header.find("h1").html(units[selectedId].name);
    // Find and set structure image file and more elements
    $content.find("#unitImg").attr('src', 'images/icons/units/' + units[selectedId].imageFile());
    $content.find("#unitDamageType").html(units[selectedId].damageType);
    $content.find("#unitInfo").html(units[selectedId].info);

    // Begin building markup for page and listview
    var htmlStr = "";
    var htmlStrDiv = '';

    // Find and set unit properties
    if (units[selectedId].population !== undefined) {
        htmlStr += htmlStrDiv + buildHtmlContent(0, 'Population', units[selectedId].population.length, units[selectedId].population);
    }
    if (units[selectedId].targets !== undefined) {
        htmlStr += htmlStrDiv + buildHtmlContent(0, 'Targets', units[selectedId].targets.length, units[selectedId].targets);
    }
    if (units[selectedId].healPerSec !== undefined) {
        htmlStr += htmlStrDiv + buildHtmlContent('info-heal', 'Heal per Second', units[selectedId].healPerSec.length, units[selectedId].healPerSec);
    }
    if (units[selectedId].damagePerSec !== undefined) {
        htmlStr += htmlStrDiv + buildHtmlContent('info-damage', 'Damage per Second', units[selectedId].damagePerSec.length, units[selectedId].damagePerSec);
    }
    if (units[selectedId].hitpoints !== undefined) {
        htmlStr += htmlStrDiv + buildHtmlContent('info-hitpoints', 'Hitpoints', units[selectedId].hitpoints.length, units[selectedId].hitpoints);
    }
    if (units[selectedId].trainingCost !== undefined) {
        htmlStr += htmlStrDiv + buildHtmlContent('info-cash', 'Training Cost', units[selectedId].trainingCost.length, units[selectedId].trainingCost);
    }
    if (units[selectedId].trainingTime !== undefined) {
        htmlStr += htmlStrDiv + buildHtmlContent(0, 'Training Time', units[selectedId].trainingTime.length, units[selectedId].trainingTime);
    }
    if (units[selectedId].requiredLevel !== undefined) {
        htmlStr += htmlStrDiv + buildHtmlContent(0, 'Required Level', units[selectedId].requiredLevel.length, units[selectedId].requiredLevel);
    }

    // Finally append listview markup
    $content.find("#unitCollapsDetails").html(htmlStr);


    $page.page();
    //$content.find(":jqmData(role=listview)").listview();
    $("#unitCollapsDetails").trigger('create');
    $.mobile.changePage($page);
    e.preventDefault();
});


// Functions

// Build collapsible set items displaying properties
function buildHtmlContent(iconFile, title, length, obj) {
    // Handle icon image
    var iconStr = "";
    if (!iconFile == 0) {
        iconStr = '<img src="images/icons/' + iconFile + '.gif" height="25" class="ui-overlay-shadow ui-shadow ui-corner-all"> &nbsp; ';
    }

    // Handle rows
    var rows = "", addStr = "",
        prepend = '', postpend = '';
    if (Array.isArray(obj)) {
        for (var i = 0; i < length; i++) {
            rows += '<li>Level ' + (i + 1) + ': ' + obj[i] + '</li>';
        }
        rows = '<ul data-role="listview">' + rows + '</ul>';
        prepend = '<div data-role="collapsible" data-iconpos="right" data-inset="true">';
        postpend = '</div>';
    }
    else {
        //addStr += ': ' + obj;
        rows = '<ul data-role="listview">' + '<li>All Levels: ' + obj + '</li>' + '</ul>';
        prepend = '<div data-role="collapsible" data-iconpos="right" data-inset="true">';
        postpend = '</div>';
    }
    
    // Output row
    return prepend + '<h3>' + iconStr + title + addStr + '</h3>' + rows + postpend;
}


// Convert seconds to time string
function secondsToTime(secs) {
    var hours = Math.floor(secs / (60 * 60));

    var divisor_for_minutes = secs % (60 * 60);
    var minutes = Math.floor(divisor_for_minutes / 60);

    var divisor_for_seconds = divisor_for_minutes % 60;
    var seconds = Math.ceil(divisor_for_seconds);

    var strOut = "";
    if (hours > 0) { strOut += hours + ' hours '; }
    if (minutes > 0) { strOut += minutes + ' minutes '; }
    if (seconds > 0) { strOut += seconds + ' seconds'; }
    return strOut;
}