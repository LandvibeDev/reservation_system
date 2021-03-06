import Slider from "../components/Slider"
import $ from "jquery"

let slider;
let moreContent;
let imageNum;
let root;

export function init() {
    moreContent = $(".section_store_details");
    imageNum = $("#image_num");
    root = '.section_visual';
    setEvent();
}

export function setEvent() {
    slider = new Slider(root + ' ul.visual_img');
    slider.setButton({prev:root + ' div.prev_inn > a.btn_prev',next: root + ' div.nxt_inn > a.btn_nxt'});
    setImageCountEvent();
    moreContent.find('a.bk_more').on("click", clickMoreDetail);
}

export function clickMoreDetail(e) {
    e.preventDefault();
    moreContent.find("div.store_details").toggleClass("close3");
    $(e.currentTarget).css("display", "none");
    $(e.currentTarget).siblings("a").css("display", "");
}

export function setImageCountEvent() {
    slider.on("change", updateImageCount);
}

export function updateImageCount({currentIndex}) {
    imageNum.text(currentIndex);
}
