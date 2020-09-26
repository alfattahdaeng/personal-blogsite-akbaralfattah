export interface WebsiteConfig {
  title: string;
  description: string;
  coverImage?: string;
  logo: string;
  /**
   * Specifying a valid BCP 47 language helps screen readers announce text properly.
   * See: https://dequeuniversity.com/rules/axe/2.2/valid-lang
   */
  lang: string;
  /**
   * blog full path, no ending slash!
   */
  siteUrl: string;
  /**
   * full url, no username
   */
  facebook?: string;
  /**
   * full url, no username
   */
  twitter?: string;
  /**
   * hide or show all email subscribe boxes
   */
  showSubscribe: boolean;
  /**
   * create a list on mailchimp and then create an embeddable signup form. this is the form action
   */
  mailchimpAction?: string;
  /**
   * this is the hidden input field name
   */
  mailchimpName?: string;
  /**
   * name and id of the mailchimp email field
   */
  mailchimpEmailFieldName?: string;
  /**
  /**
   * Meta tag for Google Webmaster Tools
   */
  googleSiteVerification?: string;
  /**
  /**
   * Appears alongside the footer, after the credits
   */
  footer?: string;
}

const config: WebsiteConfig = {
  title: '1997',
  description: 'Kosakata dari Ego yang Eksesif',
  logo: 'img/nseven.png',
  lang: 'id',
  siteUrl: 'https://the1997.id',
  facebook: 'https://www.facebook.com/',
  twitter: 'https://twitter.com/rabqka',
  showSubscribe: true,
  mailchimpAction: 'https://the1997.us2.list-manage.com/subscribe?u=5e212499be794ae866c6fec4d&id=856ba0dc93',
  mailchimpName: 'b_5e212499be794ae866c6fec4d_856ba0dc93',
  mailchimpEmailFieldName: 'MERGE0',
  googleSiteVerification: 'GoogleCode',
  footer: 'All right reserved',
};

export default config;
