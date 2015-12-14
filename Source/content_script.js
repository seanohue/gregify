walk(document.body);

function walk(node) {
    // I stole this function from here:
    // http://is.gd/mwZp7E

    var child, next;

    switch (node.nodeType) {
        case 1: // Element
        case 9: // Document
        case 11: // Document fragment
            child = node.firstChild;
            while (child) {
                next = child.nextSibling;
                walk(child);
                child = next;
            }
            break;

        case 3: // Text node
            handleText(node);
            break;
    }
}

function handleText(textNode) {

    var my = new RegExp(
        /\bmy\b|\bMy\b/g);
    var mine = new RegExp(
        /\bmine\b|\bMine\b/g);
    var me = new RegExp(
        /\bme\b|\bMe\b/g);
    var I = new RegExp(
        /\bI\b/g);

    var v = textNode.nodeValue;
    var possessives = [my, mine];
    var pronouns = [me, I];

    possessives.forEach(function (possessive) {
        v = v.replace(possessive, "Greg's");
    });
    pronouns.forEach(function (pronoun) {
        v = v.replace(pronoun, "Greg");
    });

    textNode.nodeValue = v;
}