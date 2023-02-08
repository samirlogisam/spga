import { BaseApplicationCustomizer } from '@microsoft/sp-application-base';
/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface ISharePointGoogleAnalyticsIntegrationApplicationCustomizerProperties {
    GATrackingID: string;
}
/** A Custom Action which can be run during execution of a Client Side Application */
export default class SharePointGoogleAnalyticsIntegrationApplicationCustomizer extends BaseApplicationCustomizer<ISharePointGoogleAnalyticsIntegrationApplicationCustomizerProperties> {
    onInit(): Promise<void>;
}
//# sourceMappingURL=SharePointGoogleAnalyticsIntegrationApplicationCustomizer.d.ts.map