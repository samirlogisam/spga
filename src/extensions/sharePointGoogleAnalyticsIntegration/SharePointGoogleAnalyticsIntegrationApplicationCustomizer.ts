import { override } from '@microsoft/decorators';
import { Log } from '@microsoft/sp-core-library';
import {
  BaseApplicationCustomizer
} from '@microsoft/sp-application-base';
import { Dialog } from '@microsoft/sp-dialog';

import * as strings from 'SharePointGoogleAnalyticsIntegrationApplicationCustomizerStrings';

const LOG_SOURCE: string = 'SharePointGoogleAnalyticsIntegrationApplicationCustomizer';

/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface ISharePointGoogleAnalyticsIntegrationApplicationCustomizerProperties {
  // This is an example; replace with your own property
  GATrackingID: string;
}

/** A Custom Action which can be run during execution of a Client Side Application */
export default class SharePointGoogleAnalyticsIntegrationApplicationCustomizer
  extends BaseApplicationCustomizer<ISharePointGoogleAnalyticsIntegrationApplicationCustomizerProperties> {

  @override
  public onInit(): Promise<void> {


    let trackingID: string =  "UA-XXXXXX-X";// Your Google Analyitcs Tracking ID here
    //let trackingID: string = this.properties.GATrackingID;
    if (!trackingID) {
      Log.info(LOG_SOURCE, "Tracking ID not provided");
    } else {
      var gtagScript = document.createElement("script");
      gtagScript.type = "text/javascript";
      gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${trackingID}`;
      gtagScript.async = true;
      document.head.appendChild(gtagScript);

      eval(`
			window.dataLayer = window.dataLayer || [];
			function gtag(){dataLayer.push(arguments);}
			gtag('js', new Date());    
			gtag('config',  '${trackingID}');
		`);
    }
    return Promise.resolve();
  }
}
