"use strict";
import StarFieldModule from "./StarFieldModule.jsx";
import AnimationModule from "./AnimationModule.jsx";

class Banner {

    constructor() {
        this.preloadImages()    
        this.setupEventListeners();
        this.setupStarfield();
    }

    preloadImages() {
        let images = document.querySelectorAll('img');
        let loaded = 0;
            
        // IE bug fix
        for(let i = 0; i < images.length; i++) {
            images[i].src = images[i].getAttribute('data-src');
        }
        
    }

    setupEventListeners() {
        document.getElementsByClassName("bannerClick")[0].addEventListener("click", this.exit.bind(this));
        document.getElementsByClassName("bannerClick")[0].addEventListener("mouseover", this.rollover.bind(this));
        document.getElementsByClassName("bannerClick")[0].addEventListener("mouseout", this.rollout.bind(this));
    }

    setupStarfield() {
        let starfield = new StarFieldModule(300);
        starfield.start();
    }

    start() {
        this.animation = new AnimationModule();
        this.animation.start();

        const banner = document.querySelector("#banner");
        banner.classList.remove('hide');
    }

    rollover() {
        this.animation.playCtaIn();
    };
    
    rollout() {
        this.animation.playCtaOut();
    };

    exit() {
        this.animation.stop();
        window.open("http://mediamonks.com/richmedia/work");
    }
}

window.addEventListener("load", () => {
    let banner = new Banner();
    banner.start();    
})
