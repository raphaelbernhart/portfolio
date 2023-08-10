import Lenis from '@studio-freight/lenis';
import './lenis.css';

const lenis = new Lenis({});

function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
