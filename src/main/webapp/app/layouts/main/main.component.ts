import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRouteSnapshot, NavigationEnd } from '@angular/router';

import { JhiLanguageHelper } from '../../shared';

@Component({
    selector: 'jhi-main',
    templateUrl: './main.component.html'
})
export class JhiMainComponent implements OnInit {

    constructor(
        private jhiLanguageHelper: JhiLanguageHelper,
        private router: Router
    ) {}

    private getPageTitle(routeSnapshot: ActivatedRouteSnapshot) {
        let title: string = (routeSnapshot.data && routeSnapshot.data['pageTitle']) ? routeSnapshot.data['pageTitle'] : 'jhipsterApp';
        if (routeSnapshot.firstChild) {
            title = this.getPageTitle(routeSnapshot.firstChild) || title;
        }
        return title;
    }

    ngOnInit() {
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.jhiLanguageHelper.updateTitle(this.getPageTitle(this.router.routerState.snapshot.root));
            }
        });
    }

    test() {
            function addStyleSheet() {
                const e = document.createElement('link');
                e.setAttribute('type', 'text/css');
                e.setAttribute('rel', 'stylesheet');
                e.setAttribute('href', styleSrc);
                e.setAttribute('class', markerClass);
                document.body.appendChild(e)
            }

            function removeAddedElements() {
                const e = document.getElementsByClassName(markerClass);
                for (let t = 0; t < e.length; t++){
                    document.body.removeChild(e[t])
                }
            }

            function flashEffect() {
                const e = document.createElement('div');
                e.setAttribute('class', flashClass);
                document.body.appendChild(e);
                setTimeout(function(){
                    document.body.removeChild(e)
                }, 100)
            }

            function getSize(e){
                return {
                    height: e.offsetHeight,
                    width: e.offsetWidth
                }
            }

            function isRightSize(i){
                const s = getSize(i);
                return s.height > minHeight && s.height < maxHeight
                    &&
                    s.width > minWidth && s.width < maxWidth
            }

            function heightFromTop(e) {
                let n = 0;
                while ( !! e) {
                    n += e.offsetTop;
                    e = e.offsetParent
                }
                return n
            }

            function getWindowHeight() {
                const e = document.documentElement;
                if ( !! window.innerWidth) {
                    return window.innerHeight
                } else if (e && !isNaN(e.clientHeight)) {
                    return e.clientHeight
                }
                return 0
            }

            function getPageYOffset() {
                if (window.pageYOffset) {
                    return window.pageYOffset
                }
                return Math.max(document.documentElement.scrollTop, document.body.scrollTop)
            }

            function isOnScreen(e) {
                const t = heightFromTop(e);
                return t >= yOffset && t <= windowHeight + yOffset
            }

            function main() {
                const e = document.createElement('audio');
                e.setAttribute('class', markerClass);
                e.src = mp3Src;
                e.loop = false;
                e.innerHTML = ' <p>If you are reading this, it is because your browser does not support the audio element. We recommend that you get a new browser.</p>';
                document.body.appendChild(e);
                e.addEventListener('ended', function() {
                    removeAllShakeMeClasses();
                    removeAddedElements()
                }, true);
                e.addEventListener('canplay', function() {
                    setTimeout(function() {
                        addImFirstClass(startElement)
                    }, 500);
                    setTimeout(function() {
                        removeAllShakeMeClasses();
                        flashEffect();
                        for (let e = 0; e < O.length; e++) {
                            addShakeMeClass(O[e])
                        }
                    }, 15500)
                }, true);
                e.play()
            }

            function addImFirstClass(e) {
                e.className += ' ' + shakeMeClass + ' ' + imFirstClass
            }

            function addShakeMeClass(e) {
                e.className += ' ' + shakeMeClass + ' ' + varClasses[Math.floor(Math.random() * varClasses.length)]
            }

            function removeAllShakeMeClasses() {
                const e = document.getElementsByClassName(shakeMeClass);
                const t = new RegExp('\\b' + shakeMeClass + '\\b');
                for (const n = 0; n < e.length; ) {
                    e[n].className = e[n].className.replace(t, '')
                }
            }

            const minHeight = 30;
            const minWidth = 30;
            const maxHeight = 350;
            const maxWidth = 350;
            const mp3Src = '//s3.amazonaws.com/moovweb-marketing/playground/harlem-shake.mp3';
            const shakeMeClass = 'mw-harlem_shake_me';
            const imFirstClass = 'im_first';
            const varClasses = ['im_drunk', 'im_baked', 'im_trippin', 'im_blown'];
            const flashClass = 'mw-strobe_light';
            const styleSrc = '//s3.amazonaws.com/moovweb-marketing/playground/harlem-shake-style.css';
            const markerClass = 'mw_added_css';
            const windowHeight = getWindowHeight();
            const yOffset = getPageYOffset();
            const pageElements = document.getElementsByTagName('*');
            let startElement = null;

            // ----Starts here----
            let A;
            for (let L = 0; L < pageElements.length; L++) {
                A = pageElements[L];
                if (isRightSize(A) && isOnScreen(A)) {
                    startElement = A;
                    break
                }
            }
            if (startElement === null) {
                console.warn('Could not find a node of the right size. Please try a different page.');
                return
            } else {
                console.log('Found start element: ', A, ' with width ' + getSize(A).width + ', height ' + getSize(A).height + ', and a total Y offset of ' + heightFromTop(A));
            }
            addStyleSheet();
            main();
            const O = [];
            for (let L = 0; L < pageElements.length; L++) {
                A = pageElements[L];
                if (isRightSize(A)) {
                    O.push(A)
                }
            }
        }
}
