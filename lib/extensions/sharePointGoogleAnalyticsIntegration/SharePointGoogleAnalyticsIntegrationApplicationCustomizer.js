var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { override } from '@microsoft/decorators';
import { Log } from '@microsoft/sp-core-library';
import { BaseApplicationCustomizer } from '@microsoft/sp-application-base';
var LOG_SOURCE = 'SharePointGoogleAnalyticsIntegrationApplicationCustomizer';
/** A Custom Action which can be run during execution of a Client Side Application */
var SharePointGoogleAnalyticsIntegrationApplicationCustomizer = /** @class */ (function (_super) {
    __extends(SharePointGoogleAnalyticsIntegrationApplicationCustomizer, _super);
    function SharePointGoogleAnalyticsIntegrationApplicationCustomizer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SharePointGoogleAnalyticsIntegrationApplicationCustomizer.prototype.onInit = function () {
        var trackingID = "UA-92888744-5"; // this.properties.GATrackingID;
        //let trackingID: string = this.properties.GATrackingID;
        if (!trackingID) {
            Log.info(LOG_SOURCE, "Tracking ID not provided");
        }
        else {
            var gtagScript = document.createElement("script");
            gtagScript.type = "text/javascript";
            gtagScript.src = "https://www.googletagmanager.com/gtag/js?id=" + trackingID;
            gtagScript.async = true;
            document.head.appendChild(gtagScript);
            eval("\n\t\t\twindow.dataLayer = window.dataLayer || [];\n\t\t\tfunction gtag(){dataLayer.push(arguments);}\n\t\t\tgtag('js', new Date());    \n\t\t\tgtag('config',  '" + trackingID + "');\n\t\t");
        }
        return Promise.resolve();
    };
    __decorate([
        override
    ], SharePointGoogleAnalyticsIntegrationApplicationCustomizer.prototype, "onInit", null);
    return SharePointGoogleAnalyticsIntegrationApplicationCustomizer;
}(BaseApplicationCustomizer));
export default SharePointGoogleAnalyticsIntegrationApplicationCustomizer;
//# sourceMappingURL=SharePointGoogleAnalyticsIntegrationApplicationCustomizer.js.map