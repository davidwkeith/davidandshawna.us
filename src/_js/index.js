var shouldShowCodeBreaker = false;

function Steam () {
    // Send form users to correct location
    if (window.location.search !== '') { window.location.hash = window.location.search.replace(/^\?/, ''); }
    
    // Show code breaker
    if (window.location.hash.match('code-breaker')) {
        window.location.replace('#wedding');
        shouldShowCodeBreaker = true;
    }
    
    // Send new users to Welcome
    if (window.location.hash === '') { window.location.replace('#wedding'); }
    
    this.currentArticleButton = document.getElementById(window.location.hash.replace('#', '') + '-button');
    this.currentArticle = document.getElementById(window.location.hash.replace('#', ''));
    
    this.showCurrentArticle();
    
    window.addEventListener('click', this, false);
    document.getElementById('rsvp-number').addEventListener('keyup', this, false);
    
    document.body.className += ' ' + navigator.platform;
    
    return this;
}

Steam.prototype.showArticleForButton = function (button) {
    if (this.currentArticle) { this.hideCurrentArticle(); }
    
    this.currentArticleButton = button;
    this.currentArticle = document.getElementById(button.id.replace('-button', ''));
    
    this.showCurrentArticle();
};

Steam.prototype.showCurrentArticle = function () {
    // Unhide selected article
    this.currentArticle.className = this.currentArticle.className.replace(/(^|\s)hidden\b/,'');
    this.showMap();
    if (this.currentArticleButton) {
        this.currentArticleButton.className += ' selected';
        document.title = 'David & Shawna: ' + this.currentArticleButton.innerHTML;
    } else {
        document.title = 'David & Shawna';
    }
    window.location.hash = this.currentArticle.id;
    
    if (shouldShowCodeBreaker) {
        this.showCodeBreaker();
        shouldShowCodeBreaker = false;
    }
};

Steam.prototype.showMap = function () {
    switch (this.currentArticle.id) {
        case 'boston-details':
            document.getElementById('boston-map').innerHTML = '<iframe width="640" height="480" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=union+oyster+house,+41+union+street,+boston,+massachusetts&amp;sll=37.302597,-121.931548&amp;sspn=0.037516,0.033216&amp;ie=UTF8&amp;hq=Union+Oyster+House&amp;hnear=Union+Oyster+House,+41+Union+St,+Boston,+Massachusetts+02108-2494&amp;cid=6319045547406381352&amp;ll=42.364379,-71.060858&amp;spn=0.01522,0.027466&amp;z=15&amp;iwloc=A&amp;output=embed"></iframe><br /><small><a href="http://maps.google.com/maps?f=q&amp;source=embed&amp;hl=en&amp;geocode=&amp;q=union+oyster+house,+41+union+street,+boston,+massachusetts&amp;sll=37.302597,-121.931548&amp;sspn=0.037516,0.033216&amp;ie=UTF8&amp;hq=Union+Oyster+House&amp;hnear=Union+Oyster+House,+41+Union+St,+Boston,+Massachusetts+02108-2494&amp;cid=6319045547406381352&amp;ll=42.364379,-71.060858&amp;spn=0.01522,0.027466&amp;z=15&amp;iwloc=A" style="color:#0000FF;text-align:left">View Larger Map</a></small>';
            break;
        case 'kansas-city-details':
            document.getElementById('kansas-city-map').innerHTML = '<iframe width="640" height="480" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=boulevard+brewing+co,+2501+southwest+boulevard,+kansas+city,+mo&amp;sll=39.08204,-94.596555&amp;sspn=0.009153,0.008304&amp;ie=UTF8&amp;hq=boulevard+brewing+co,&amp;hnear=2501+Southwest+Blvd,+Kansas+City,+Jackson,+Missouri+64108&amp;cid=8520323881876952353&amp;ll=39.088036,-94.592457&amp;spn=0.031978,0.054932&amp;z=14&amp;iwloc=A&amp;output=embed"></iframe><br /><small><a href="http://maps.google.com/maps?f=q&amp;source=embed&amp;hl=en&amp;geocode=&amp;q=boulevard+brewing+co,+2501+southwest+boulevard,+kansas+city,+mo&amp;sll=39.08204,-94.596555&amp;sspn=0.009153,0.008304&amp;ie=UTF8&amp;hq=boulevard+brewing+co,&amp;hnear=2501+Southwest+Blvd,+Kansas+City,+Jackson,+Missouri+64108&amp;cid=8520323881876952353&amp;ll=39.088036,-94.592457&amp;spn=0.031978,0.054932&amp;z=14&amp;iwloc=A" style="color:#0000FF;text-align:left">View Larger Map</a></small>';
            break;
    }
};

Steam.prototype.hideCurrentArticle = function () {
    // Hide selected article
    if (this.currentArticle) {
        this.currentArticle.className = this.currentArticle.className += ' hidden';
        if (this.currentArticleButton) {
            this.currentArticleButton.className = this.currentArticleButton.className.replace(/(^|\s)selected\b/,'');
        }
    }
};

Steam.prototype.showCodeBreaker = function () {
    document.getElementById('code-breaker').className = document.getElementById('code-breaker').className.replace(/(^|\s)hidden\b/,'');
    document.getElementById('overlay').className = document.getElementById('overlay').className.replace(/(^|\s)hidden\b/,'');
};

/*! Yes, this is my noted cryptography at work */

Steam.prototype.handleCodeBreaker = function (button) {
    if (button.getAttribute('type') === 'reset'){
        this.hideCodeBreaker();
    } else {
        // Submit form
    }
};

Steam.prototype.hideCodeBreaker = function () {
    document.getElementById('code-breaker').className += ' hidden';
    document.getElementById('overlay').className += ' hidden';
};

Steam.prototype.showDetailsForCity = function (list_item){
    this.currentDetails = document.getElementById(list_item.id + '-details');
    this.currentDetails.className = this.currentDetails.className.replace(/(^|\s)hidden\b/,'');
};

Steam.prototype.hideDetailsForCity = function (){
    this.currentDetails.className += ' hidden';
};

Steam.prototype.setFormElement = function (element, forceValue){
    if (element.className.match(/ ?checked ?/) || !forceValue) {
        element.className = element.className.replace(/ ?checked ?/g, ' ');
        document.getElementById(element.id + "-input").checked = false;
    } else {
        switch (element.id) {
            case 'decline-checkbox':
             this.setFormElement(document.getElementById('rsvp-checkbox'), false);
             this.setFormElement(document.getElementById('rsvp-san-jose'), false);
             this.setFormElement(document.getElementById('rsvp-boston'), false);
             this.setFormElement(document.getElementById('rsvp-kansas-city'), false);
             document.getElementById('rsvp-number').value = '';
             break;
            case 'rsvp-checkbox':
             this.setFormElement(document.getElementById('decline-checkbox'), false);
             break;
        }
        element.className += " checked";
        document.getElementById(element.id + "-input").checked = true;
        if (element.id.match(/rsvp-/)) {
            document.getElementById('rsvp-checkbox').className += " checked";
            document.getElementById('rsvp-checkbox-input').checked = true;
            this.setFormElement(document.getElementById('decline-checkbox'), false);
        }
    }
};

Steam.prototype.handleEvent = function (event) {
    var primaryClass = (event.target.className || event.target.parentNode.className);
    primaryClass = primaryClass.split(/ /)[0];
    
    switch (primaryClass) {
        case 'button':
            this.showArticleForButton(event.target);
            break;
        case 'code':
            this.showCodeBreaker();
            break;
        case 'code-entry':
            this.handleCodeBreaker(event.target);
            break;
        case 'rsvp-number':
            if (event.target.value.length > 0) {
                document.getElementById('rsvp-checkbox').className += " checked";
                document.getElementById('rsvp-checkbox-input').checked = true;
                this.setFormElement(document.getElementById('decline-checkbox'), false);
            }
            break;
        case 'checkbox':
            this.setFormElement(event.target, true);
            break;
        case 'radio':
            this.setFormElement(event.target, true);
            break;
        case 'city':
            var element = event.target.className ? event.target : event.target.parentNode;
            this.showDetailsForCity(element);
            break;
        default:
            // do nothing
    }
};

var steamPunk = new Steam();