import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import MotionPathPlugin from 'gsap/MotionPathPlugin';

gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);
export function home() {
    gsap.to(".man", {
        motionPath: {
            path: ".path",
            align: ".path",
            autoRotate: true,
            alignOrigin: [1, .6]
        },
        duration: 30,
        ease: "none",
        repeat: -1,
        yoyo: true
    });
}
