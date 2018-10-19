<div id="angularjsTextFrontSlider">
    <div ng-controller="angularjsTextSliderController" >
        <ul data-orbit data-options="animation:slide;
                  slide_number: false;
                  timer: false;
                  pause_on_hover:true;
                  animation_speed:1500;
                  navigation_arrows:true;
                  bullets:false;
                  stack_on_small: false;">
            <li ng-repeat="item in items.nodes" ng-switch on="item.node.field_tags">

                <div ng-switch-when='Juana La Loca Restaurant' class='testimonios-slider-home juana-la-loca' style=''>
                    <div class='row'>
                        <h3 class='title-testimonios-slider'>{{item.node.field_tags}}</h3>
                        <h2 class='body-testimonios-slider'>{{item.node.body}}</h2>
                        <div class='tripadvisor-testimonios-slider'>{{item.node.tripadvisor}}</div>
                    </div>
                </div>
                <div ng-switch-when='Guillermina Restaurant' class='testimonios-slider-home guillermina' style=''>
                    <div class='row'>
                        <h3 class='title-testimonios-slider'>{{item.node.field_tags}}</h3>
                        <h2 class='body-testimonios-slider'>{{item.node.body}}</h2>
                        <div class='tripadvisor-testimonios-slider'>{{item.node.tripadvisor}}</div>
                    </div>
                </div>
                <div ng-switch-when='Hotel Boutique Isabel La Católica' class='testimonios-slider-home isabel-la-catolica' style=''>
                    <div class='row'>
                        <h3 class='title-testimonios-slider'>{{item.node.field_tags}}</h3>
                        <h2 class='body-testimonios-slider'>{{item.node.body}}</h2>
                        <div class='tripadvisor-testimonios-slider'>{{item.node.tripadvisor}}</div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</div>
