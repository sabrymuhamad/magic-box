'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">magic-box documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-d2a179be2d46f0e9b732c97bd923e5dbe03d9e301c5978a1b36fa8dd1f0992b8a24a543fe2a3727acdf5a5cc15d6470321e6100add50d9b97b6f7a90dd343f13"' : 'data-bs-target="#xs-components-links-module-AppModule-d2a179be2d46f0e9b732c97bd923e5dbe03d9e301c5978a1b36fa8dd1f0992b8a24a543fe2a3727acdf5a5cc15d6470321e6100add50d9b97b6f7a90dd343f13"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-d2a179be2d46f0e9b732c97bd923e5dbe03d9e301c5978a1b36fa8dd1f0992b8a24a543fe2a3727acdf5a5cc15d6470321e6100add50d9b97b6f7a90dd343f13"' :
                                            'id="xs-components-links-module-AppModule-d2a179be2d46f0e9b732c97bd923e5dbe03d9e301c5978a1b36fa8dd1f0992b8a24a543fe2a3727acdf5a5cc15d6470321e6100add50d9b97b6f7a90dd343f13"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HomePageModule.html" data-type="entity-link" >HomePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-HomePageModule-3dfdca37e3938792e1bc9a08e5707ecc522dcd495270ef6b244467afc3fd9bb836f9616ffb779a718c85fc2550e09d9761532f9df3f0dd4680269c1a6d46194e"' : 'data-bs-target="#xs-components-links-module-HomePageModule-3dfdca37e3938792e1bc9a08e5707ecc522dcd495270ef6b244467afc3fd9bb836f9616ffb779a718c85fc2550e09d9761532f9df3f0dd4680269c1a6d46194e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomePageModule-3dfdca37e3938792e1bc9a08e5707ecc522dcd495270ef6b244467afc3fd9bb836f9616ffb779a718c85fc2550e09d9761532f9df3f0dd4680269c1a6d46194e"' :
                                            'id="xs-components-links-module-HomePageModule-3dfdca37e3938792e1bc9a08e5707ecc522dcd495270ef6b244467afc3fd9bb836f9616ffb779a718c85fc2550e09d9761532f9df3f0dd4680269c1a6d46194e"' }>
                                            <li class="link">
                                                <a href="components/HomePage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomePageRoutingModule.html" data-type="entity-link" >HomePageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SubscribePageModule.html" data-type="entity-link" >SubscribePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SubscribePageModule-b0481600c518ed91a739ab3b9abcf2b7a03bbbd18638b767c9608d16c80a19cbe4e9cc51cc83de917b3007fa7ef728979d366d79a6e76590a2c18c427133dfaf"' : 'data-bs-target="#xs-components-links-module-SubscribePageModule-b0481600c518ed91a739ab3b9abcf2b7a03bbbd18638b767c9608d16c80a19cbe4e9cc51cc83de917b3007fa7ef728979d366d79a6e76590a2c18c427133dfaf"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SubscribePageModule-b0481600c518ed91a739ab3b9abcf2b7a03bbbd18638b767c9608d16c80a19cbe4e9cc51cc83de917b3007fa7ef728979d366d79a6e76590a2c18c427133dfaf"' :
                                            'id="xs-components-links-module-SubscribePageModule-b0481600c518ed91a739ab3b9abcf2b7a03bbbd18638b767c9608d16c80a19cbe4e9cc51cc83de917b3007fa7ef728979d366d79a6e76590a2c18c427133dfaf"' }>
                                            <li class="link">
                                                <a href="components/SubscribePage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SubscribePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SubscribePageRoutingModule.html" data-type="entity-link" >SubscribePageRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#components-links"' :
                            'data-bs-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/FooterComponent.html" data-type="entity-link" >FooterComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/HeaderComponent.html" data-type="entity-link" >HeaderComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/HeroImageComponent.html" data-type="entity-link" >HeroImageComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/HowWorksComponent.html" data-type="entity-link" >HowWorksComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PaymentSummaryComponent.html" data-type="entity-link" >PaymentSummaryComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SubscribeFormComponent.html" data-type="entity-link" >SubscribeFormComponent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Subscribe.html" data-type="entity-link" >Subscribe</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/ISubscribe.html" data-type="entity-link" >ISubscribe</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});