/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 * @format
 */

'use strict';

import type {TurboModule} from '../TurboModule/RCTExport';
import * as TurboModuleRegistry from '../TurboModule/TurboModuleRegistry';

export interface Spec extends TurboModule {
  +sendRequest: (
    query: {|
      method: string,
      url: string,
      data: Object,
      headers: Object,
<<<<<<< HEAD
      responseType: Object, // TODO: Use stricter type.
=======
      responseType: string,
>>>>>>> fb/0.62-stable
      incrementalUpdates: boolean,
      timeout: number,
      withCredentials: boolean,
    |},
    callback: (requestId: number) => void,
  ) => void;
  +abortRequest: (requestId: number) => void;
  +clearCookies: (callback: (result: boolean) => void) => void;

  // RCTEventEmitter
  +addListener: (eventName: string) => void;
  +removeListeners: (count: number) => void;
}

export default (TurboModuleRegistry.getEnforcing<Spec>('Networking'): Spec);