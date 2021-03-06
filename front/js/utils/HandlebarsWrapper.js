import * as $ from 'jquery'
import Handlebars from "../node_modules/handlebars/dist/handlebars"

let position;
let source;
let template;
let cache = {};

function createTemplate(handlebarsId) {
    position = $("#" + handlebarsId);
    source = position.html();
    template = Handlebars.compile(source);
    return template;
}

function longTake() {
    for (let i = 0; i < 100000; i++) {
        i++;
        --i;
        for (let i = 0; i < 10000; i++) {
            i++;
            --i;
        }
    }
}

export function create(handlebarsId, data, method, target) {
    let template = cache[handlebarsId];
    if (!template) {
        cache[handlebarsId] = createTemplate(handlebarsId);
        template = cache[handlebarsId];
    }
    target[method](template(data));

}

// export function create(handlebarsId, data, method, target) {
//     let template = cache[handlebarsId];
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             if (!template) {
//                 cache[handlebarsId] = createTemplate(handlebarsId);
//                 template = cache[handlebarsId];
//             }
//             target[method](template(data));
//             resolve("success");
//         }, 3000);
//     });
// }



export function customHelper(helperName, func) {
    Handlebars.registerHelper(helperName, func);
}

export function setPartial(partialName, partialHandlebarsId) {
    let partialSource = $(partialHandlebarsId).html();
    Handlebars.registerPartial(partialName, partialSource);
}




