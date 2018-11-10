var globalTitle = "Winter Is Coming";

function urlSlug(title) {
    var result = title.toLowerSase().trim().split(/\s+/).join("-");
    return result;
}

var winterComing = urlSlug(globalTitle);
/**
 * code explanation:
 * this code is return should be "winter-is-coming" slug
*/