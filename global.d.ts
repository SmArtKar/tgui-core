declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.svg' {
  const content: string;
  export default content;
}

declare const Byond: ByondType;
declare const loadedMappings: Record<string, string>;

type ByondType = {
  /**
   * Makes a BYOND call.
   *
   * If path is empty, this will trigger a Topic call.
   * You can reference a specific object by setting the "src" parameter.
   *
   * See: https://secure.byond.com/docs/ref/skinparams.html
   */
  call(path: string, params: object): void;

  /**
   * Makes an asynchronous BYOND call. Returns a promise.
   */
  callAsync(path: string, params: object): Promise<any>;

  /**
   * Runs a command or a verb.
   */
  command(command: string): void;

  /**
   * Icon reference map from BYOND
   */
  iconRefMap: Record<string, string>;

  /**
   * Loads a stylesheet into the document.
   */
  loadCss(url: string): void;

  /**
   * Loads a script into the document.
   */
  loadJs(url: string): void;

  /**
   * Parses BYOND JSON.
   *
   * Uses a special encoding to preserve `Infinity` and `NaN`.
   */
  parseJson(text: string): any;

  sendMessage(message: TguiMessage): void;

  /**
   * Sends a message to `/datum/tgui_window` which hosts this window instance.
   */
  sendMessage(type: string, payload?: any): void;

  /**
   * If `true`, unhandled errors and common mistakes result in a blue screen
   * of death, which stops this window from handling incoming messages and
   * closes the active instance of tgui datum if there was one.
   *
   * It can be defined in window.initialize() in DM, or changed in runtime
   * here via this property to `true` or `false`.
   *
   * It is recommended that you keep this ON to detect hard to find bugs.
   */
  strictMode: boolean;

  /**
   * Subscribe to incoming messages that were sent from `/datum/tgui_window`.
   */
  subscribe(listener: (type: string, payload: any) => void): void;

  /**
   * Subscribe to incoming messages *of some specific type*
   * that were sent from `/datum/tgui_window`.
   */
  subscribeTo(type: string, listener: (payload: any) => void): void;

  /**
   * Makes a Topic call.
   *
   * You can reference a specific object by setting the "src" parameter.
   */
  topic(params: object): void;

  /**
   * ID of the Byond window this script is running on.
   * Can be used as a parameter to winget/winset.
   */
  windowId: string;

  /**
   * Retrieves all properties of the BYOND skin element.
   *
   * Returns a promise with a key-value object containing all properties.
   */
  winget(id: string | null, propName: '*'): Promise<object>;
  /**
   * Retrieves an exactly one property of the BYOND skin element,
   * as defined in `propName`.
   *
   * Returns a promise with the value of that property.
   */
  winget(id: string | null, propName: string): Promise<any>;

  /**
   * Retrieves multiple properties of the BYOND skin element,
   * as defined in the `propNames` array.
   *
   * Returns a promise with a key-value object containing listed properties.
   */
  winget(id: string | null, propNames: string[]): Promise<object>;

  /**
   * Retrieves all properties of the BYOND skin element.
   *
   * Returns a promise with a key-value object containing all properties.
   */
  winget(id: string | null): Promise<object>;

  /**
   * Sets a property on the BYOND skin element to a certain value.
   */
  winset(id: string | null, propName: string, propValue: any): void;

  /**
   * Assigns properties to the BYOND skin element.
   */
  winset(id: string | null, props: object): void;

  /**
   * Assigns properties to BYOND skin elements in bulk.
   */
  winset(props: object): void;
};
